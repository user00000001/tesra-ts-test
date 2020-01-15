/// <reference types="node" />
import { Address } from 'ontology-ts-crypto';
import { Transaction } from './core/transaction';
export interface Deployment {
    code: Buffer;
    needStorage?: boolean;
    name?: string;
    version?: string;
    author?: string;
    email?: string;
    description?: string;
}
export interface DeployerOptions extends Deployment {
    gasLimit?: string;
    gasPrice?: string;
    processCallback?: (transaction: Transaction) => Promise<void> | void;
}
export declare class Deployer {
    rpcAddress: string;
    constructor(rpcAddress: string);
    isDeployed(address: Address): Promise<boolean>;
    deploy({ code, needStorage, name, version, author, email, description, gasPrice, gasLimit, processCallback }: DeployerOptions): Promise<any>;
}
