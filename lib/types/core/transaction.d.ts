/// <reference types="node" />
import * as Long from 'long';
import { Address, Reader, Writer } from 'tesra-ts-crypto';
import { Uint256 } from '../common/uint256';
export declare const TX_MAX_SIG_SIZE = 16;
export declare type TransactionType = number;
export declare const Bookkeeper = 2;
export declare const Deploy = 208;
export declare const Invoke = 209;
/**
 * Payload define the func for loading the payload data
 * base on payload type which have different struture
 */
export interface Payload {
    /**
     * Serialize payload data
     */
    serialize(w: Writer): void;
    deserialize(r: Reader): void;
}
export declare class RawSig {
    static deserialize(r: Reader): RawSig;
    private invoke;
    private verify;
    constructor(invoke: Buffer, verify: Buffer);
    getVerify(): Buffer;
    serialize(w: Writer): void;
}
export interface TransactionOptions {
    version?: number;
    txType?: TransactionType;
    nonce?: number;
    gasPrice?: Long;
    gasLimit?: Long;
    payer?: Address;
    payload?: Payload;
    sigs?: RawSig[];
}
export declare class Transaction {
    private version;
    private txType;
    private nonce;
    private gasPrice;
    private gasLimit;
    private payer;
    private payload;
    private sigs;
    private raw;
    private hash;
    constructor({ version, txType, nonce, gasPrice, gasLimit, payer, payload, sigs }?: TransactionOptions);
    getVersion(): number;
    getNonce(): number;
    getGasPrice(): Long;
    getGasLimit(): Long;
    getHash(): Uint256;
    getTxType(): number;
    getPayer(): Address;
    setPayer(payer: Address): void;
    getPayload(): Payload;
    addSig(sig: RawSig): void;
    getSignatureAddresses(): Address[];
    serialize(w: Writer): void;
    deserialize(r: Reader): void;
    toArray(): Buffer;
    /**
     * Serialize transaction data exclueds signatures
     */
    serializeUnsigned(): Buffer;
    private deserializeUnsigned;
    private serializeSigned;
}
