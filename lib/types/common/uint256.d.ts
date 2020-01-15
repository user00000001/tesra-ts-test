/// <reference types="node" />
import { Reader, Writer } from 'ontology-ts-crypto';
export declare class Uint256 {
    static parseFromBytes(b: Buffer): Uint256;
    private value;
    toArray(): Buffer;
    serialize(w: Writer): void;
    deserialize(r: Reader): void;
}
