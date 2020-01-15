import { Account, Wallet } from 'ontology-ts-crypto';
import { Transaction } from './core/transaction';
import { Signer } from './types';
export declare function loadWallet(walletPath: string): Wallet;
export declare function createWallet(accounts: Account[]): Wallet;
export declare function createAccount(privateKey: string): Account;
export declare function signTransaction(tx: Transaction, account: Account, password: string): Promise<void>;
export declare function signTransactionMulti(tx: Transaction, m: number, signers: Signer[]): Promise<void>;
