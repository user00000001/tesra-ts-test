import { Address } from 'ontology-ts-crypto';
import { Transaction } from './core/transaction';
export interface Transfer {
    sender: Address;
    to: Address;
    amount: string;
    asset: string;
}
export interface TransactorTransferOptions extends Transfer {
    gasLimit?: string;
    gasPrice?: string;
    wait?: boolean;
    processCallback?: (transaction: Transaction) => Promise<void> | void;
}
export declare class Transactor {
    rpcAddress: string;
    constructor(rpcAddress: string);
    transfer({ sender, to, amount, asset, gasPrice, gasLimit, processCallback, wait }: TransactorTransferOptions): Promise<any>;
    withdrawOng({ sender, to, amount, gasPrice, gasLimit, processCallback, wait }: TransactorTransferOptions): Promise<any>;
    private getContract;
}
