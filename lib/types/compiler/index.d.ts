import { CsCompiler } from './csCompiler';
import { PyCompiler } from './pyCompiler';
import { CompilerType } from './types';
export interface CreateCompilerOptions {
    type: CompilerType;
    url?: string;
}
export declare function createCompiler({ type, url }: CreateCompilerOptions): PyCompiler | CsCompiler;
export * from './types';
