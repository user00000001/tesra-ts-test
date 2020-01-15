import { Address } from 'tesra-ts-crypto';
import { CompilerOutput, createCompiler } from './compiler';
import { Deployer } from './deployer';
import { Invoker } from './invoker';
import { Transactor } from './transactor';
import {
  Client,
  CompileOptions,
  DeployOptions,
  InitClientOptions,
  InvokeOptions,
  IsDeployedOptions,
  TransferOptions
} from './types';
import { signTransaction, signTransactionMulti } from './wallet';

export function initClient({ rpcAddress = 'http://dapp2.tesra.me:25768' }: InitClientOptions): Client {
  return {
    rpcAddress
  };
}

export function compile({ code, type, url }: CompileOptions): Promise<CompilerOutput> {
  const compiler = createCompiler({ type, url });
  return compiler.compile(code);
}

export function deploy({ client, account, password, ...rest }: DeployOptions) {
  const deployer = new Deployer(client.rpcAddress);
  return deployer.deploy({
    ...rest,
    processCallback: async (tx) => {
      tx.setPayer(account.address);
      await signTransaction(tx, account, password !== undefined ? password : '');
    }
  });
}

export function isDeployed({ client, scriptHash }: IsDeployedOptions) {
  const deployer = new Deployer(client.rpcAddress);
  return deployer.isDeployed(new Address(scriptHash));
}

export function invoke({ client, account, password, signers, ...rest }: InvokeOptions) {
  const invoker = new Invoker(client.rpcAddress);
  return invoker.invoke({
    ...rest,
    processCallback: async (tx) => {
      if (account !== undefined) {
        tx.setPayer(account.address);
        await signTransaction(tx, account, password !== undefined ? password : '');
      }

      if (signers !== undefined) {
        await signTransactionMulti(tx, signers.length, signers);
      }
    }
  });
}

export function transfer({ client, account, password, ...rest }: TransferOptions) {
  const transactor = new Transactor(client.rpcAddress);
  return transactor.transfer({
    ...rest,
    processCallback: async (tx) => {
      if (account !== undefined) {
        tx.setPayer(account.address);
        await signTransaction(tx, account, password !== undefined ? password : '');
      }
    }
  });
}

export function withdrawTsg({ client, account, password, ...rest }: TransferOptions) {
  const transactor = new Transactor(client.rpcAddress);
  return transactor.withdrawTsg({
    ...rest,
    processCallback: async (tx) => {
      if (account !== undefined) {
        tx.setPayer(account.address);
        await signTransaction(tx, account, password !== undefined ? password : '');
      }
    }
  });
}

export { CompilerType, CompilerOutput } from './compiler';
export { loadContract, loadCompiledContract } from './common/utils';
export { loadWallet, createWallet, createAccount } from './wallet';
export { hex2num, reverseBuffer } from './common/utils';
export { RpcClient } from './network/rpcClient';
export { buildInvokePayload } from './invoker';
export { InvokeCode } from './core/payload/invokeCode';
export { DeployCode } from './core/payload/deployCode';
export { Transaction } from './core/transaction';
export { Signer } from './types';
