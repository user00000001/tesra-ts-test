/// <reference types="node" />
import { Compiler, CompilerOutput } from './types';
export declare class CsCompiler implements Compiler {
    url: string;
    constructor(url?: string);
    compile(code: Buffer): Promise<CompilerOutput>;
}
