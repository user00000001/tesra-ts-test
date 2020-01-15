import fetch from 'cross-fetch';
import { Address } from 'tesra-ts-crypto';
import { reverseBuffer } from '../common/utils';
import { Compiler, CompilerError, CompilerOutput, Debug, FuncMap } from './types';

export class PyCompiler implements Compiler {
  url: string;

  constructor(url: string = 'https://smartxcompiler.tesra.me/api/beta/python/compile') {
    this.url = url;
  }

  async compile(code: Buffer): Promise<CompilerOutput> {
    const payload = { type: 'Python', code: code.toString('utf-8') };

    const response = await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const json = await response.json();

    if (json.errcode !== 0) {
      throw new CompilerError(json.errcode, json.errdetail);
    }

    let avm: string = json.avm;
    const abi: string = json.abi;

    // tslint:disable-next-line:quotemark
    if (avm.startsWith("b'")) {
      // tslint:disable-next-line:quotemark
      avm = avm.substring(2, avm.lastIndexOf("'"));
    }

    const hash = reverseBuffer(Address.fromVmCode(new Buffer(avm, 'hex')).toArray()).toString('hex');

    let debug: Debug | undefined;
    let funcMap: FuncMap | undefined;

    try {
      if (json.debug !== undefined) {
        debug = JSON.parse(json.debug);
      }

      if (json.funcmap !== undefined) {
        funcMap = JSON.parse(json.funcmap);
      }
    } catch (e) {
      // tslint:disable-next-line:no-console
      console.warn('Failed to parse debug and funcmap from compiler');
    }

    return {
      avm: new Buffer(avm, 'hex'),
      abi: new Buffer(abi),
      hash,
      debug,
      funcMap
    };
  }
}
