/// <reference types="node" />
import { ProgramBuilder } from 'ontology-ts-crypto';
import { Struct } from './struct';
export declare function sleep(ms: number): Promise<{}>;
export declare function loadContract(path: string): Buffer;
export declare function loadCompiledContract(path: string): Buffer;
export declare function loadOptionsFile(path: string): string;
export declare function reverseBuffer(src: Buffer): Buffer;
export declare function hex2num(str: string): number;
export declare function pushParam(parameter: any, builder: ProgramBuilder): void;
export declare function pushArray(parameters: any[], builder: ProgramBuilder): void;
export declare function pushStruct(parameters: Struct, builder: ProgramBuilder): void;
export declare function pushMap(parameters: Map<any, any>, builder: ProgramBuilder): void;
