import { createHash, randomBytes } from 'crypto';
import * as Long from 'long';
import { Address, Hash, Reader, Writer } from 'tesra-ts-crypto';
import { Uint256 } from '../common/uint256';
import { DeployCode } from './payload/deployCode';
import { InvokeCode } from './payload/invokeCode';

export const TX_MAX_SIG_SIZE = 16;
export type TransactionType = number;

export const Bookkeeper = 0x02;
export const Deploy = 0xd0;
export const Invoke = 0xd1;

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

export class RawSig {
  static deserialize(r: Reader): RawSig {
    const invoke = r.readVarBytes();
    const verify = r.readVarBytes();

    return new RawSig(invoke, verify);
  }
  private invoke: Buffer;
  private verify: Buffer;

  constructor(invoke: Buffer, verify: Buffer) {
    this.invoke = invoke;
    this.verify = verify;
  }

  getVerify() {
    return this.verify;
  }

  serialize(w: Writer) {
    w.writeVarBytes(this.invoke);
    w.writeVarBytes(this.verify);
  }
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

export class Transaction {
  private version: number;
  private txType: TransactionType;
  private nonce: number;
  private gasPrice: Long;
  private gasLimit: Long;
  private payer: Address;
  private payload: Payload;

  private sigs: RawSig[];

  private raw: Buffer | undefined; // raw transaction data

  private hash: Uint256;

  constructor({
    version = 0,
    txType = Invoke,
    nonce = Long.fromBytes([...randomBytes(4)], true, true).toNumber(),
    gasPrice = Long.fromNumber(500),
    gasLimit = Long.fromNumber(30000),
    payer = new Address('0000000000000000000000000000000000000000'),
    payload = new InvokeCode(),
    sigs = []
  }: TransactionOptions = {}) {
    this.version = version;
    this.txType = txType;
    this.nonce = nonce;
    this.gasPrice = gasPrice;
    this.gasLimit = gasLimit;
    this.payer = payer;
    this.payload = payload;
    this.sigs = sigs;

    this.hash = Uint256.parseFromBytes(Hash.sha256(this.serializeUnsigned()));
  }

  getVersion() {
    return this.version;
  }

  getNonce() {
    return this.nonce;
  }

  getGasPrice(): Long {
    return this.gasPrice;
  }

  getGasLimit(): Long {
    return this.gasLimit;
  }
  getHash() {
    return this.hash;
  }

  getTxType() {
    return this.txType;
  }

  getPayer() {
    return this.payer;
  }

  setPayer(payer: Address) {
    this.payer = payer;
  }

  getPayload() {
    return this.payload;
  }

  addSig(sig: RawSig) {
    this.sigs.push(sig);
  }

  getSignatureAddresses(): Address[] {
    const addrs: Address[] = [];

    for (const sig of this.sigs) {
      addrs.push(Address.fromVmCode(sig.getVerify()));
    }

    return addrs;
  }

  serialize(w: Writer) {
    if (this.raw !== undefined) {
      if (this.raw.length === 0) {
        throw new Error('wrong constructed transaction');
      }

      w.writeBytes(this.raw);
    } else {
      w.writeBytes(this.serializeUnsigned());
      w.writeBytes(this.serializeSigned());
    }
  }

  deserialize(r: Reader) {
    const pstart = r.position();
    this.deserializeUnsigned(r);
    const pos = r.position();
    const lenUnsigned = pos - pstart;
    r.seek(-lenUnsigned, 'relative');
    const rawUnsigned = r.readBytes(lenUnsigned);

    const sh = createHash('sha256');
    sh.update(rawUnsigned);
    this.hash = Uint256.parseFromBytes(sh.digest());

    // tx sigs
    const length = r.readVarUInt().toNumber();

    if (length > TX_MAX_SIG_SIZE) {
      throw new Error(`transaction signature number ${length} execced ${TX_MAX_SIG_SIZE}`);
    }

    for (let i = 0; i < length; i++) {
      const sig = RawSig.deserialize(r);
      this.sigs.push(sig);
    }

    const pend = r.position();
    const lenAll = pend - pstart;
    r.seek(-lenAll, 'relative');
    this.raw = r.readBytes(lenAll);
  }

  toArray(): Buffer {
    const bf = new Writer();
    this.serialize(bf);
    return new Buffer(bf.getBytes());
  }

  /**
   * Serialize transaction data exclueds signatures
   */
  serializeUnsigned() {
    const w = new Writer();
    w.writeUint8(this.version);
    w.writeUint8(this.txType);
    w.writeUint32(this.nonce);
    w.writeUint64(this.gasPrice);
    w.writeUint64(this.gasLimit);
    this.payer.serialize(w);
    this.payload.serialize(w);
    w.writeVarUint(0);

    return w.getBytes();
  }

  private deserializeUnsigned(r: Reader) {
    this.version = r.readByte();
    this.txType = r.readByte();
    this.nonce = r.readUInt32();
    this.gasPrice = r.readUInt64();
    this.gasLimit = r.readUInt64();
    this.payer = Address.deserialize(r.readBytes(20));

    if (this.txType === Invoke) {
      const pl = new InvokeCode();
      pl.deserialize(r);
      this.payload = pl;
    } else if (this.txType === Deploy) {
      const pl = new DeployCode();
      pl.deserialize(r);
      this.payload = pl;
    } else {
      throw new Error(`unsupported tx type ${this.getTxType()}`);
    }

    const length = r.readVarUInt();

    if (!length.isZero()) {
      throw new Error('transaction attribute must be 0, got %d');
    }
  }

  private serializeSigned() {
    const w = new Writer();
    w.writeVarUint(this.sigs.length);

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.sigs.length; i++) {
      this.sigs[i].serialize(w);
    }

    return w.getBytes();
  }
}
