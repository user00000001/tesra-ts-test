/// <reference types="node" />
import { Reader, Writer } from 'tesra-ts-crypto';
export declare class InvokeCode {
    private code;
    constructor(code?: Buffer);
    serialize(w: Writer): void;
    deserialize(r: Reader): void;
}
