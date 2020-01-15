/// <reference types="node" />
import { Reader, Writer } from 'ontology-ts-crypto';
export declare class InvokeCode {
    private code;
    constructor(code?: Buffer);
    serialize(w: Writer): void;
    deserialize(r: Reader): void;
}
