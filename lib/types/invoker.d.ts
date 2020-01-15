/// <reference types="node" />
import { Transaction } from './core/transaction';
export interface Invoke {
    contract: string;
    method: string;
    parameters?: any[];
}
export interface InvokerOptions extends Invoke {
    gasLimit?: string;
    gasPrice?: string;
    preExec?: boolean;
    wait?: boolean;
    debug?: boolean;
    processCallback?: (transaction: Transaction) => Promise<void> | void;
}
export declare function buildInvokePayload(contract: string, method: string, parameters: any[]): Buffer;
export declare class Invoker {
    rpcAddress: string;
    constructor(rpcAddress: string);
    invoke({ method, parameters, contract, gasPrice, gasLimit, preExec, processCallback, wait, debug }: InvokerOptions): Promise<any>;
}
