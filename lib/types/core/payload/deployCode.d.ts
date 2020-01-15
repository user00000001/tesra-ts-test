/// <reference types="node" />
import { Reader, Writer } from 'tesra-ts-crypto';
export interface DeployCodeOptions {
    code: Buffer;
    needStorage: boolean;
    name: string;
    version: string;
    author: string;
    email: string;
    description: string;
}
export declare class DeployCode {
    code: Buffer;
    needStorage: boolean;
    name: string;
    version: string;
    author: string;
    email: string;
    description: string;
    constructor(options?: DeployCodeOptions);
    serialize(w: Writer): void;
    deserialize(r: Reader): void;
    toArray(): Buffer;
    getCode(): Buffer;
}
export declare function isDeployCode(item: any): item is DeployCode;
