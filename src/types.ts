import { Account } from 'tesra-ts-crypto';
import { CompilerType } from './compiler/types';
import { DeployerOptions } from './deployer';
import { InvokerOptions } from './invoker';
import { TransactorTransferOptions } from './transactor';

export interface InitClientOptions {
  rpcAddress?: string;
}

export interface Client {
  rpcAddress: string;
}

export interface CompileOptions {
  code: Buffer;
  type: CompilerType;
  url?: string;
}

export interface DeployOptions extends DeployerOptions {
  client: Client;
  account: Account;
  password?: string;
}

export interface IsDeployedOptions {
  client: Client;
  scriptHash: string;
}

export interface InvokeOptions extends InvokerOptions {
  client: Client;
  account?: Account;
  password?: string;
  signers?: Signer[];
}

export interface Signer {
  account: Account;
  password: string;
}

export interface TransferOptions extends TransactorTransferOptions {
  client: Client;
  account?: Account;
  password?: string;
}
