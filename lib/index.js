module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/struct.ts":
/*!******************************!*\
  !*** ./src/common/struct.ts ***!
  \******************************/
/*! exports provided: Struct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Struct", function() { return Struct; });
class Struct {
    constructor(items) {
        this.items = items;
    }
}

/***/ }),

/***/ "./src/common/uint256.ts":
/*!*******************************!*\
  !*** ./src/common/uint256.ts ***!
  \*******************************/
/*! exports provided: Uint256 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Uint256", function() { return Uint256; });
/* harmony import */ var ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ontology-ts-crypto */ "ontology-ts-crypto");
/* harmony import */ var ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_0__);

const UINT256_SIZE = 32;
class Uint256 {
    static parseFromBytes(b) {
        const r = new ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_0__["Reader"](b);
        const u = new Uint256();
        u.deserialize(r);
        return u;
    }
    toArray() {
        const bf = new ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_0__["Writer"]();
        this.serialize(bf);
        return new Buffer(bf.getBytes());
    }
    serialize(w) {
        w.writeBytes(this.value);
    }
    deserialize(r) {
        try {
            this.value = r.readBytes(UINT256_SIZE);
        } catch (e) {
            throw new Error('deserialize Uint256 error');
        }
    }
}

/***/ }),

/***/ "./src/common/utils.ts":
/*!*****************************!*\
  !*** ./src/common/utils.ts ***!
  \*****************************/
/*! exports provided: sleep, loadContract, loadCompiledContract, loadOptionsFile, reverseBuffer, hex2num, pushParam, pushArray, pushStruct, pushMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleep", function() { return sleep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadContract", function() { return loadContract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCompiledContract", function() { return loadCompiledContract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadOptionsFile", function() { return loadOptionsFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverseBuffer", function() { return reverseBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hex2num", function() { return hex2num; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushParam", function() { return pushParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushArray", function() { return pushArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushStruct", function() { return pushStruct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushMap", function() { return pushMap; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var long__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! long */ "long");
/* harmony import */ var long__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(long__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ontology-ts-crypto */ "ontology-ts-crypto");
/* harmony import */ var ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _struct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./struct */ "./src/common/struct.ts");




function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function loadContract(path) {
    return Object(fs__WEBPACK_IMPORTED_MODULE_0__["readFileSync"])(path);
}
function loadCompiledContract(path) {
    const codeBuffer = Object(fs__WEBPACK_IMPORTED_MODULE_0__["readFileSync"])(path);
    const codeString = codeBuffer.toString();
    return new Buffer(codeString, 'hex');
}
function loadOptionsFile(path) {
    return Object(fs__WEBPACK_IMPORTED_MODULE_0__["readFileSync"])(path).toString();
}
function reverseBuffer(src) {
    const buffer = Buffer.allocUnsafe(src.length);
    for (let i = 0, j = src.length - 1; i <= j; ++i, --j) {
        buffer[i] = src[j];
        buffer[j] = src[i];
    }
    return buffer;
}
function hex2num(str) {
    const buffer = new Buffer(str, 'hex');
    return ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["Serialize"].bigIntFromBytes(buffer).toJSNumber();
}
function pushParam(parameter, builder) {
    if (typeof parameter === 'boolean') {
        builder.pushBool(parameter);
        builder.writeOpCode(ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["OpCode"].PUSH0);
        builder.writeOpCode(ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["OpCode"].BOOLOR);
    } else if (typeof parameter === 'number') {
        builder.pushNum(parameter);
        builder.writeOpCode(ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["OpCode"].PUSH0);
        builder.writeOpCode(ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["OpCode"].ADD);
    } else if (parameter instanceof long__WEBPACK_IMPORTED_MODULE_1__) {
        builder.pushNum(parameter);
        builder.writeOpCode(ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["OpCode"].PUSH0);
        builder.writeOpCode(ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["OpCode"].ADD);
    } else if (typeof parameter === 'string') {
        builder.pushBytes(new Buffer(parameter));
    } else if (parameter instanceof Buffer) {
        builder.pushBytes(parameter);
    } else if (parameter instanceof ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["Address"]) {
        builder.pushBytes(parameter.toArray());
    } else if (parameter instanceof Map) {
        pushMap(parameter, builder);
    } else if (parameter instanceof _struct__WEBPACK_IMPORTED_MODULE_3__["Struct"]) {
        pushStruct(parameter, builder);
    } else if (Array.isArray(parameter)) {
        pushArray(parameter, builder);
    } else if (typeof parameter === 'object') {
        // this is last, because other classes are also objects
        pushMap(new Map(Object.entries(parameter)), builder);
    } else {
        throw new Error('Unsupported param type');
    }
}
function pushArray(parameters, builder) {
    parameters.reverse().forEach(parameter => pushParam(parameter, builder));
    builder.pushNum(parameters.length);
    builder.writeOpCode(ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["OpCode"].PACK);
}
function pushStruct(parameters, builder) {
    builder.pushNum(0);
    builder.writeOpCode(ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["OpCode"].NEWSTRUCT);
    builder.writeOpCode(ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["OpCode"].TOALTSTACK);
    parameters.items.reverse().forEach(parameter => {
        pushParam(parameter, builder);
        builder.writeOpCode(ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["OpCode"].DUPFROMALTSTACK);
        builder.writeOpCode(ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["OpCode"].SWAP);
        builder.writeOpCode(ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["OpCode"].APPEND);
    });
    builder.writeOpCode(ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["OpCode"].FROMALTSTACK);
}
function pushMap(parameters, builder) {
    builder.writeOpCode(ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["OpCode"].NEWMAP);
    builder.writeOpCode(ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["OpCode"].TOALTSTACK);
    Array.from(parameters.entries()).reverse().forEach(([key, value]) => {
        builder.writeOpCode(ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["OpCode"].DUPFROMALTSTACK);
        pushParam(key, builder);
        pushParam(value, builder);
        builder.writeOpCode(ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["OpCode"].SETITEM);
    });
    builder.writeOpCode(ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["OpCode"].FROMALTSTACK);
}

/***/ }),

/***/ "./src/compiler/csCompiler.ts":
/*!************************************!*\
  !*** ./src/compiler/csCompiler.ts ***!
  \************************************/
/*! exports provided: CsCompiler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsCompiler", function() { return CsCompiler; });
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cross-fetch */ "cross-fetch");
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cross_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./src/compiler/types.ts");


// tslint:disable:quotemark
class CsCompiler {
    constructor(url = 'https://smartxcompiler.ont.io/api/v1.0/csharp/compile') {
        this.url = url;
    }
    async compile(code) {
        const payload = { type: 'CSharp', code: code.toString('utf-8') };
        const response = await cross_fetch__WEBPACK_IMPORTED_MODULE_0___default()(this.url, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
        if (json.errcode !== 0) {
            throw new _types__WEBPACK_IMPORTED_MODULE_1__["CompilerError"](json.errcode, json.errdetail);
        }
        let avm = json.avm;
        let abi = json.abi;
        if (avm.startsWith("b'")) {
            avm = avm.substring(2, avm.lastIndexOf("'"));
        }
        if (abi.startsWith("b'")) {
            abi = abi.substring(2, abi.lastIndexOf("'"));
            abi = abi.replace(/\\n/g, '\n');
        }
        return {
            avm: new Buffer(avm, 'hex'),
            abi: new Buffer(abi),
            hash: JSON.parse(abi).hash
        };
    }
}

/***/ }),

/***/ "./src/compiler/index.ts":
/*!*******************************!*\
  !*** ./src/compiler/index.ts ***!
  \*******************************/
/*! exports provided: createCompiler, CompilerError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCompiler", function() { return createCompiler; });
/* harmony import */ var _csCompiler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./csCompiler */ "./src/compiler/csCompiler.ts");
/* harmony import */ var _pyCompiler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pyCompiler */ "./src/compiler/pyCompiler.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./src/compiler/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompilerError", function() { return _types__WEBPACK_IMPORTED_MODULE_2__["CompilerError"]; });



function createCompiler({ type, url }) {
    switch (type) {
        case 'Python':
            return new _pyCompiler__WEBPACK_IMPORTED_MODULE_1__["PyCompiler"](url);
        case 'CSharp':
            return new _csCompiler__WEBPACK_IMPORTED_MODULE_0__["CsCompiler"](url);
        default:
            throw new Error('Unsupported compiler');
    }
}


/***/ }),

/***/ "./src/compiler/pyCompiler.ts":
/*!************************************!*\
  !*** ./src/compiler/pyCompiler.ts ***!
  \************************************/
/*! exports provided: PyCompiler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PyCompiler", function() { return PyCompiler; });
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cross-fetch */ "cross-fetch");
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cross_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ontology-ts-crypto */ "ontology-ts-crypto");
/* harmony import */ var ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/utils */ "./src/common/utils.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./src/compiler/types.ts");




class PyCompiler {
    constructor(url = 'https://smartxcompiler.ont.io/api/beta/python/compile') {
        this.url = url;
    }
    async compile(code) {
        const payload = { type: 'Python', code: code.toString('utf-8') };
        const response = await cross_fetch__WEBPACK_IMPORTED_MODULE_0___default()(this.url, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
        if (json.errcode !== 0) {
            throw new _types__WEBPACK_IMPORTED_MODULE_3__["CompilerError"](json.errcode, json.errdetail);
        }
        let avm = json.avm;
        const abi = json.abi;
        // tslint:disable-next-line:quotemark
        if (avm.startsWith("b'")) {
            // tslint:disable-next-line:quotemark
            avm = avm.substring(2, avm.lastIndexOf("'"));
        }
        const hash = Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["reverseBuffer"])(ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_1__["Address"].fromVmCode(new Buffer(avm, 'hex')).toArray()).toString('hex');
        let debug;
        let funcMap;
        try {
            if (json.debug !== undefined) {
                debug = JSON.parse(json.debug);
            }
            if (json.funcmap !== undefined) {
                funcMap = JSON.parse(json.funcmap);
            }
        } catch (e) {
            // tslint:disable-next-line:no-console
            console.warn('Failed to parse debug and funcmap from compiler');
        }
        return {
            avm: new Buffer(avm, 'hex'),
            abi: new Buffer(abi),
            hash,
            debug,
            funcMap
        };
    }
}

/***/ }),

/***/ "./src/compiler/types.ts":
/*!*******************************!*\
  !*** ./src/compiler/types.ts ***!
  \*******************************/
/*! exports provided: CompilerError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompilerError", function() { return CompilerError; });
class CompilerError extends Error {
    constructor(code, message) {
        super(message);
        this.code = code;
    }
}

/***/ }),

/***/ "./src/core/payload/deployCode.ts":
/*!****************************************!*\
  !*** ./src/core/payload/deployCode.ts ***!
  \****************************************/
/*! exports provided: DeployCode, isDeployCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeployCode", function() { return DeployCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDeployCode", function() { return isDeployCode; });
/* harmony import */ var ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ontology-ts-crypto */ "ontology-ts-crypto");
/* harmony import */ var ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_0__);

class DeployCode {
    constructor(options = {
        code: new Buffer(''),
        needStorage: false,
        name: '',
        version: '',
        author: '',
        email: '',
        description: ''
    }) {
        this.code = options.code;
        this.needStorage = options.needStorage;
        this.name = options.name;
        this.version = options.version;
        this.author = options.author;
        this.email = options.email;
        this.description = options.description;
    }
    serialize(w) {
        w.writeVarBytes(this.code);
        w.writeUint8(this.needStorage ? 1 : 0);
        w.writeString(this.name);
        w.writeString(this.version);
        w.writeString(this.author);
        w.writeString(this.email);
        w.writeString(this.description);
    }
    deserialize(r) {
        this.code = r.readVarBytes();
        this.needStorage = r.readByte() === 1 ? true : false;
        this.name = r.readVarString();
        this.version = r.readVarString();
        this.author = r.readVarString();
        this.email = r.readVarString();
        this.description = r.readVarString();
    }
    toArray() {
        const bf = new ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_0__["Writer"]();
        this.serialize(bf);
        return new Buffer(bf.getBytes());
    }
    getCode() {
        return this.code;
    }
}
function isDeployCode(item) {
    return item instanceof DeployCode;
}

/***/ }),

/***/ "./src/core/payload/invokeCode.ts":
/*!****************************************!*\
  !*** ./src/core/payload/invokeCode.ts ***!
  \****************************************/
/*! exports provided: InvokeCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvokeCode", function() { return InvokeCode; });
class InvokeCode {
    constructor(code = new Buffer('')) {
        this.code = code;
    }
    serialize(w) {
        try {
            w.writeVarBytes(this.code);
        } catch (e) {
            throw new Error(`InvokeCode Code Serialize failed: ${e}`);
        }
    }
    deserialize(r) {
        try {
            const code = r.readVarBytes();
            this.code = code;
        } catch (e) {
            throw new Error(`InvokeCode Code Deserialize failed: ${e}`);
        }
    }
}

/***/ }),

/***/ "./src/core/transaction.ts":
/*!*********************************!*\
  !*** ./src/core/transaction.ts ***!
  \*********************************/
/*! exports provided: TX_MAX_SIG_SIZE, Bookkeeper, Deploy, Invoke, RawSig, Transaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TX_MAX_SIG_SIZE", function() { return TX_MAX_SIG_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bookkeeper", function() { return Bookkeeper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Deploy", function() { return Deploy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Invoke", function() { return Invoke; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RawSig", function() { return RawSig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transaction", function() { return Transaction; });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var long__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! long */ "long");
/* harmony import */ var long__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(long__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ontology-ts-crypto */ "ontology-ts-crypto");
/* harmony import */ var ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_uint256__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/uint256 */ "./src/common/uint256.ts");
/* harmony import */ var _payload_deployCode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./payload/deployCode */ "./src/core/payload/deployCode.ts");
/* harmony import */ var _payload_invokeCode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payload/invokeCode */ "./src/core/payload/invokeCode.ts");






const TX_MAX_SIG_SIZE = 16;
const Bookkeeper = 0x02;
const Deploy = 0xd0;
const Invoke = 0xd1;
class RawSig {
    static deserialize(r) {
        const invoke = r.readVarBytes();
        const verify = r.readVarBytes();
        return new RawSig(invoke, verify);
    }
    constructor(invoke, verify) {
        this.invoke = invoke;
        this.verify = verify;
    }
    getVerify() {
        return this.verify;
    }
    serialize(w) {
        w.writeVarBytes(this.invoke);
        w.writeVarBytes(this.verify);
    }
}
class Transaction {
    constructor({ version = 0, txType = Invoke, nonce = long__WEBPACK_IMPORTED_MODULE_1__["fromBytes"]([...Object(crypto__WEBPACK_IMPORTED_MODULE_0__["randomBytes"])(4)], true, true).toNumber(), gasPrice = long__WEBPACK_IMPORTED_MODULE_1__["fromNumber"](500), gasLimit = long__WEBPACK_IMPORTED_MODULE_1__["fromNumber"](30000), payer = new ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["Address"]('0000000000000000000000000000000000000000'), payload = new _payload_invokeCode__WEBPACK_IMPORTED_MODULE_5__["InvokeCode"](), sigs = [] } = {}) {
        this.version = version;
        this.txType = txType;
        this.nonce = nonce;
        this.gasPrice = gasPrice;
        this.gasLimit = gasLimit;
        this.payer = payer;
        this.payload = payload;
        this.sigs = sigs;
        this.hash = _common_uint256__WEBPACK_IMPORTED_MODULE_3__["Uint256"].parseFromBytes(ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["Hash"].sha256(this.serializeUnsigned()));
    }
    getVersion() {
        return this.version;
    }
    getNonce() {
        return this.nonce;
    }
    getGasPrice() {
        return this.gasPrice;
    }
    getGasLimit() {
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
    setPayer(payer) {
        this.payer = payer;
    }
    getPayload() {
        return this.payload;
    }
    addSig(sig) {
        this.sigs.push(sig);
    }
    getSignatureAddresses() {
        const addrs = [];
        for (const sig of this.sigs) {
            addrs.push(ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["Address"].fromVmCode(sig.getVerify()));
        }
        return addrs;
    }
    serialize(w) {
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
    deserialize(r) {
        const pstart = r.position();
        this.deserializeUnsigned(r);
        const pos = r.position();
        const lenUnsigned = pos - pstart;
        r.seek(-lenUnsigned, 'relative');
        const rawUnsigned = r.readBytes(lenUnsigned);
        const sh = Object(crypto__WEBPACK_IMPORTED_MODULE_0__["createHash"])('sha256');
        sh.update(rawUnsigned);
        this.hash = _common_uint256__WEBPACK_IMPORTED_MODULE_3__["Uint256"].parseFromBytes(sh.digest());
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
    toArray() {
        const bf = new ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["Writer"]();
        this.serialize(bf);
        return new Buffer(bf.getBytes());
    }
    /**
     * Serialize transaction data exclueds signatures
     */
    serializeUnsigned() {
        const w = new ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["Writer"]();
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
    deserializeUnsigned(r) {
        this.version = r.readByte();
        this.txType = r.readByte();
        this.nonce = r.readUInt32();
        this.gasPrice = r.readUInt64();
        this.gasLimit = r.readUInt64();
        this.payer = ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["Address"].deserialize(r.readBytes(20));
        if (this.txType === Invoke) {
            const pl = new _payload_invokeCode__WEBPACK_IMPORTED_MODULE_5__["InvokeCode"]();
            pl.deserialize(r);
            this.payload = pl;
        } else if (this.txType === Deploy) {
            const pl = new _payload_deployCode__WEBPACK_IMPORTED_MODULE_4__["DeployCode"]();
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
    serializeSigned() {
        const w = new ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["Writer"]();
        w.writeVarUint(this.sigs.length);
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.sigs.length; i++) {
            this.sigs[i].serialize(w);
        }
        return w.getBytes();
    }
}

/***/ }),

/***/ "./src/deployer.ts":
/*!*************************!*\
  !*** ./src/deployer.ts ***!
  \*************************/
/*! exports provided: Deployer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Deployer", function() { return Deployer; });
/* harmony import */ var long__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! long */ "long");
/* harmony import */ var long__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(long__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ontology-ts-crypto */ "ontology-ts-crypto");
/* harmony import */ var ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/utils */ "./src/common/utils.ts");
/* harmony import */ var _core_payload_deployCode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/payload/deployCode */ "./src/core/payload/deployCode.ts");
/* harmony import */ var _core_transaction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/transaction */ "./src/core/transaction.ts");
/* harmony import */ var _network_rpcClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./network/rpcClient */ "./src/network/rpcClient.ts");






class Deployer {
    constructor(rpcAddress) {
        this.rpcAddress = rpcAddress;
    }
    async isDeployed(address) {
        const client = new _network_rpcClient__WEBPACK_IMPORTED_MODULE_5__["RpcClient"](this.rpcAddress);
        const response = await client.getContract(address.toArray().toString('hex'));
        if (response.result === 'unknow contract' || response.result === 'unknow contracts') {
            return false;
        } else {
            return true;
        }
    }
    async deploy({ code, needStorage = false, name = '', version = '', author = '', email = '', description = '', gasPrice = '500', gasLimit = '20000000', processCallback }) {
        const payload = new _core_payload_deployCode__WEBPACK_IMPORTED_MODULE_3__["DeployCode"]({
            code,
            needStorage,
            name,
            version,
            author,
            email,
            description
        });
        const tx = new _core_transaction__WEBPACK_IMPORTED_MODULE_4__["Transaction"]({
            txType: _core_transaction__WEBPACK_IMPORTED_MODULE_4__["Deploy"],
            payload,
            gasPrice: long__WEBPACK_IMPORTED_MODULE_0__["fromString"](gasPrice),
            gasLimit: long__WEBPACK_IMPORTED_MODULE_0__["fromString"](gasLimit)
        });
        if (processCallback !== undefined) {
            const result = processCallback(tx);
            if (result instanceof Promise) {
                await result;
            }
        }
        const client = new _network_rpcClient__WEBPACK_IMPORTED_MODULE_5__["RpcClient"](this.rpcAddress);
        const w = new ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_1__["Writer"]();
        tx.serialize(w);
        const response = await client.sendRawTransaction(w.getBytes(), false);
        if (response.error !== 0) {
            throw new Error(`Failed to deploy contract: ${response.error} - ${response.result}`);
        }
        await Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["sleep"])(3000);
        return await client.getSmartCodeEvent(response.result);
    }
}

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: initClient, compile, deploy, isDeployed, invoke, transfer, withdrawOng, loadContract, loadCompiledContract, loadWallet, createWallet, createAccount, hex2num, reverseBuffer, RpcClient, buildInvokePayload, InvokeCode, DeployCode, Transaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initClient", function() { return initClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return compile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deploy", function() { return deploy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDeployed", function() { return isDeployed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invoke", function() { return invoke; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transfer", function() { return transfer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withdrawOng", function() { return withdrawOng; });
/* harmony import */ var ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ontology-ts-crypto */ "ontology-ts-crypto");
/* harmony import */ var ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _compiler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compiler */ "./src/compiler/index.ts");
/* harmony import */ var _deployer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deployer */ "./src/deployer.ts");
/* harmony import */ var _invoker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invoker */ "./src/invoker.ts");
/* harmony import */ var _transactor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transactor */ "./src/transactor.ts");
/* harmony import */ var _wallet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wallet */ "./src/wallet.ts");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/utils */ "./src/common/utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadContract", function() { return _common_utils__WEBPACK_IMPORTED_MODULE_6__["loadContract"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadCompiledContract", function() { return _common_utils__WEBPACK_IMPORTED_MODULE_6__["loadCompiledContract"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadWallet", function() { return _wallet__WEBPACK_IMPORTED_MODULE_5__["loadWallet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createWallet", function() { return _wallet__WEBPACK_IMPORTED_MODULE_5__["createWallet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAccount", function() { return _wallet__WEBPACK_IMPORTED_MODULE_5__["createAccount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hex2num", function() { return _common_utils__WEBPACK_IMPORTED_MODULE_6__["hex2num"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reverseBuffer", function() { return _common_utils__WEBPACK_IMPORTED_MODULE_6__["reverseBuffer"]; });

/* harmony import */ var _network_rpcClient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./network/rpcClient */ "./src/network/rpcClient.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RpcClient", function() { return _network_rpcClient__WEBPACK_IMPORTED_MODULE_7__["RpcClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildInvokePayload", function() { return _invoker__WEBPACK_IMPORTED_MODULE_3__["buildInvokePayload"]; });

/* harmony import */ var _core_payload_invokeCode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/payload/invokeCode */ "./src/core/payload/invokeCode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InvokeCode", function() { return _core_payload_invokeCode__WEBPACK_IMPORTED_MODULE_8__["InvokeCode"]; });

/* harmony import */ var _core_payload_deployCode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/payload/deployCode */ "./src/core/payload/deployCode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeployCode", function() { return _core_payload_deployCode__WEBPACK_IMPORTED_MODULE_9__["DeployCode"]; });

/* harmony import */ var _core_transaction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/transaction */ "./src/core/transaction.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Transaction", function() { return _core_transaction__WEBPACK_IMPORTED_MODULE_10__["Transaction"]; });

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }







function initClient({ rpcAddress = 'http://polaris1.ont.io:20336' }) {
    return {
        rpcAddress
    };
}
function compile({ code, type, url }) {
    const compiler = Object(_compiler__WEBPACK_IMPORTED_MODULE_1__["createCompiler"])({ type, url });
    return compiler.compile(code);
}
function deploy(_ref) {
    let { client, account, password } = _ref,
        rest = _objectWithoutProperties(_ref, ['client', 'account', 'password']);

    const deployer = new _deployer__WEBPACK_IMPORTED_MODULE_2__["Deployer"](client.rpcAddress);
    return deployer.deploy(_extends({}, rest, {
        processCallback: async tx => {
            tx.setPayer(account.address);
            await Object(_wallet__WEBPACK_IMPORTED_MODULE_5__["signTransaction"])(tx, account, password !== undefined ? password : '');
        }
    }));
}
function isDeployed({ client, scriptHash }) {
    const deployer = new _deployer__WEBPACK_IMPORTED_MODULE_2__["Deployer"](client.rpcAddress);
    return deployer.isDeployed(new ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_0__["Address"](scriptHash));
}
function invoke(_ref2) {
    let { client, account, password, signers } = _ref2,
        rest = _objectWithoutProperties(_ref2, ['client', 'account', 'password', 'signers']);

    const invoker = new _invoker__WEBPACK_IMPORTED_MODULE_3__["Invoker"](client.rpcAddress);
    return invoker.invoke(_extends({}, rest, {
        processCallback: async tx => {
            if (account !== undefined) {
                tx.setPayer(account.address);
                await Object(_wallet__WEBPACK_IMPORTED_MODULE_5__["signTransaction"])(tx, account, password !== undefined ? password : '');
            }
            if (signers !== undefined) {
                await Object(_wallet__WEBPACK_IMPORTED_MODULE_5__["signTransactionMulti"])(tx, signers.length, signers);
            }
        }
    }));
}
function transfer(_ref3) {
    let { client, account, password } = _ref3,
        rest = _objectWithoutProperties(_ref3, ['client', 'account', 'password']);

    const transactor = new _transactor__WEBPACK_IMPORTED_MODULE_4__["Transactor"](client.rpcAddress);
    return transactor.transfer(_extends({}, rest, {
        processCallback: async tx => {
            if (account !== undefined) {
                tx.setPayer(account.address);
                await Object(_wallet__WEBPACK_IMPORTED_MODULE_5__["signTransaction"])(tx, account, password !== undefined ? password : '');
            }
        }
    }));
}
function withdrawOng(_ref4) {
    let { client, account, password } = _ref4,
        rest = _objectWithoutProperties(_ref4, ['client', 'account', 'password']);

    const transactor = new _transactor__WEBPACK_IMPORTED_MODULE_4__["Transactor"](client.rpcAddress);
    return transactor.withdrawOng(_extends({}, rest, {
        processCallback: async tx => {
            if (account !== undefined) {
                tx.setPayer(account.address);
                await Object(_wallet__WEBPACK_IMPORTED_MODULE_5__["signTransaction"])(tx, account, password !== undefined ? password : '');
            }
        }
    }));
}









/***/ }),

/***/ "./src/invoker.ts":
/*!************************!*\
  !*** ./src/invoker.ts ***!
  \************************/
/*! exports provided: buildInvokePayload, Invoker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildInvokePayload", function() { return buildInvokePayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Invoker", function() { return Invoker; });
/* harmony import */ var long__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! long */ "long");
/* harmony import */ var long__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(long__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ontology-ts-crypto */ "ontology-ts-crypto");
/* harmony import */ var ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/utils */ "./src/common/utils.ts");
/* harmony import */ var _core_payload_invokeCode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/payload/invokeCode */ "./src/core/payload/invokeCode.ts");
/* harmony import */ var _core_transaction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/transaction */ "./src/core/transaction.ts");
/* harmony import */ var _network_rpcClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./network/rpcClient */ "./src/network/rpcClient.ts");






function buildInvokePayload(contract, method, parameters) {
    const builder = new ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_1__["ProgramBuilder"]();
    parameters = [method, parameters];
    parameters.reverse().forEach(parameter => Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["pushParam"])(parameter, builder));
    builder.writeOpCode(ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_1__["OpCode"].APPCALL);
    builder.writeBytes(Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["reverseBuffer"])(new Buffer(contract, 'hex')));
    const code = builder.getProgram();
    return code;
}
class Invoker {
    constructor(rpcAddress) {
        this.rpcAddress = rpcAddress;
    }
    async invoke({ method, parameters = [], contract, gasPrice = '500', gasLimit = '20000000', preExec, processCallback, wait = true, debug = false }) {
        if (debug) {
            console.info(`Preparing smart contract call ${method}...`);
        }
        const payload = new _core_payload_invokeCode__WEBPACK_IMPORTED_MODULE_3__["InvokeCode"](buildInvokePayload(contract, method, parameters));
        if (debug) {
            const payloadWriter = new ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_1__["Writer"]();
            payload.serialize(payloadWriter);
            console.log(`Payload is: ${payloadWriter.getBytes().toString('hex')}`);
        }
        const tx = new _core_transaction__WEBPACK_IMPORTED_MODULE_4__["Transaction"]({
            txType: _core_transaction__WEBPACK_IMPORTED_MODULE_4__["Invoke"],
            payload,
            gasPrice: long__WEBPACK_IMPORTED_MODULE_0__["fromString"](gasPrice),
            gasLimit: long__WEBPACK_IMPORTED_MODULE_0__["fromString"](gasLimit)
        });
        if (debug) {
            const txWriter = new ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_1__["Writer"]();
            tx.serialize(txWriter);
            console.log(`Unsigned TX is: ${txWriter.getBytes().toString('hex')}`);
        }
        if (processCallback !== undefined) {
            const result = processCallback(tx);
            if (result instanceof Promise) {
                await result;
            }
        }
        const client = new _network_rpcClient__WEBPACK_IMPORTED_MODULE_5__["RpcClient"](this.rpcAddress);
        const w = new ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_1__["Writer"]();
        tx.serialize(w);
        const response = await client.sendRawTransaction(w.getBytes(), preExec);
        if (response.error !== 0) {
            throw new Error('Failed to invoke contract: ' + response.result);
        }
        if (preExec || !wait) {
            return response;
        }
        await Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["sleep"])(3000);
        return await client.getSmartCodeEvent(response.result);
    }
}

/***/ }),

/***/ "./src/network/rpcClient.ts":
/*!**********************************!*\
  !*** ./src/network/rpcClient.ts ***!
  \**********************************/
/*! exports provided: RpcClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RpcClient", function() { return RpcClient; });
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cross-fetch */ "cross-fetch");
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cross_fetch__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright (C) 2018 The ontology Authors
 * This file is part of The ontology library.
 *
 * The ontology is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * The ontology is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with The ontology.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Wrapper class for RPC apis.
 */
class RpcClient {
    constructor(url = 'http://polaris1.ont.io:20336') {
        this.url = url;
    }
    /**
     * Get the current blockchain node url.
     */
    getUrl() {
        return this.url;
    }
    /**
     * Make request base on method and parameters
     * @param method Method's name
     * @param params Parameters
     */
    makeRequest(method, ...params) {
        const request = {
            jsonrpc: '2.0',
            method,
            params,
            id: 1
        };
        return request;
    }
    sendRequest(req) {
        return cross_fetch__WEBPACK_IMPORTED_MODULE_0___default()(this.url, {
            method: 'POST',
            body: JSON.stringify(req),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json());
    }
    /**
     * Get the balance of some address.
     * The result contains ONT and ONG.
     * @param address Address
     */
    getBalance(address) {
        const req = this.makeRequest('getbalance', address.toBase58());
        return this.sendRequest(req);
    }
    /**
     * Get the unbound ONG of some address.
     * The result contains ONG.
     * @param address Address
     */
    getUnboundOng(address) {
        const req = this.makeRequest('getunboundong', address.toBase58());
        return this.sendRequest(req);
    }
    /**
     * Send ran transaction to blockchain.
     * @param data Hex encoded data.
     * @param preExec Decides if it is a pre-execute transaction.
     */
    sendRawTransaction(data, preExec = false) {
        let req;
        if (data instanceof Buffer) {
            data = data.toString('hex');
        }
        if (preExec) {
            req = this.makeRequest('sendrawtransaction', data, 1);
        } else {
            req = this.makeRequest('sendrawtransaction', data);
        }
        return this.sendRequest(req);
    }
    /**
     * Get raw transaction by transaction hash.
     * The result is hex encoded string.
     * @param txHash Reversed transaction hash
     */
    getRawTransaction(txHash) {
        const req = this.makeRequest('getrawtransaction', txHash);
        return this.sendRequest(req);
    }
    /**
     * Get transaction info by transaction hash.
     * The result is json.
     * @param txHash Reversed transaction hash.
     */
    getRawTransactionJson(txHash) {
        const req = this.makeRequest('getrawtransaction', txHash, 1);
        return this.sendRequest(req);
    }
    /**
     * Get the nodes count.
     */
    getNodeCount() {
        const req = this.makeRequest('getconnectioncount');
        return this.sendRequest(req);
    }
    /**
     * Get the current block height.
     */
    getBlockHeight() {
        const req = this.makeRequest('getblockcount');
        return this.sendRequest(req);
    }
    /**
     * Get the all blocks count.
     */
    getBlockCount() {
        const req = this.makeRequest('getblockcount');
        return this.sendRequest(req);
    }
    /**
     * Get block info by block's height or hash.
     * The result is json.
     * @param value Block's hash or height
     */
    getBlockJson(value) {
        const req = this.makeRequest('getblock', value, 1);
        return this.sendRequest(req);
    }
    /**
     * Get contract info by contract' code hash.
     * The result is hex encoded string.
     * @param hash Contract's code hash.
     */
    getContract(hash) {
        const req = this.makeRequest('getcontractstate', hash);
        return this.sendRequest(req);
    }
    /**
     * Get contract info by contract's code hash.
     * The result is json.
     * @param codeHash Contract's code hash.
     */
    getContractJson(codeHash) {
        const req = this.makeRequest('getcontractstate', codeHash, 1);
        return this.sendRequest(req);
    }
    /**
     * Get block info by block's height or hash.
     * The result is hex encoded string.
     *
     * @param value Block's height or hash
     */
    getBlock(value) {
        const req = this.makeRequest('getblock', value);
        return this.sendRequest(req);
    }
    /**
     * Get smart contract event.
     * If parameter is transaction's hash, the result is the event of that transaction.
     * If parameter is block's height, the result is all the events of that block.
     *
     * @param value Transaction's hash or block's height
     */
    getSmartCodeEvent(value) {
        const req = this.makeRequest('getsmartcodeevent', value);
        return this.sendRequest(req);
    }
    /**
     * Get block height by transaction hash
     * @param txHash Reversed transaction hash
     */
    getBlockHeightByTxHash(txHash) {
        const req = this.makeRequest('getblockheightbytxhash', txHash);
        return this.sendRequest(req);
    }
    /**
     * Get stored value in smart contract by contract's code hash and the key.
     * @param codeHash Contract's code hash
     * @param key Key of stored value
     */
    getStorage(codeHash, key) {
        const req = this.makeRequest('getstorage', codeHash, key);
        return this.sendRequest(req);
    }
    /**
     * Get merkle proof by transaction hash.
     * @param hash Reversed transaction hash
     */
    getMerkleProof(hash) {
        const req = this.makeRequest('getmerkleproof', hash);
        return this.sendRequest(req);
    }
    /**
     * Get allowanece
     * @param asset Asset's type. Only ONT and ONG supported.
     * @param from Address of allowance's sender.
     * @param to Address of allowance's receiver.
     */
    getAllowance(asset, from, to) {
        const req = this.makeRequest('getallowance', asset, from.toBase58(), to.toBase58());
        return this.sendRequest(req);
    }
}

/***/ }),

/***/ "./src/transactor.ts":
/*!***************************!*\
  !*** ./src/transactor.ts ***!
  \***************************/
/*! exports provided: Transactor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transactor", function() { return Transactor; });
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bignumber.js */ "bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var long__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! long */ "long");
/* harmony import */ var long__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(long__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ontology-ts-crypto */ "ontology-ts-crypto");
/* harmony import */ var ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_struct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/struct */ "./src/common/struct.ts");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/utils */ "./src/common/utils.ts");
/* harmony import */ var _core_payload_invokeCode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/payload/invokeCode */ "./src/core/payload/invokeCode.ts");
/* harmony import */ var _core_transaction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/transaction */ "./src/core/transaction.ts");
/* harmony import */ var _network_rpcClient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./network/rpcClient */ "./src/network/rpcClient.ts");








class Transactor {
    constructor(rpcAddress) {
        this.rpcAddress = rpcAddress;
    }
    async transfer({ sender, to, amount, asset, gasPrice = '500', gasLimit = '20000000', processCallback, wait = true }) {
        let amountBg = new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(amount);
        if (asset === 'ong') {
            amountBg = amountBg.shiftedBy(9);
        }
        const builder = new ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["ProgramBuilder"]();
        const tran = new _common_struct__WEBPACK_IMPORTED_MODULE_3__["Struct"]([sender, to, long__WEBPACK_IMPORTED_MODULE_1__["fromString"](amountBg.toString())].reverse());
        const parameters = [0, new ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["Address"](this.getContract(asset)), 'transfer', [tran]];
        parameters.reverse().forEach(parameter => Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__["pushParam"])(parameter, builder));
        builder.writeOpCode(ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["OpCode"].SYSCALL);
        builder.pushBytes(new Buffer('Ontology.Native.Invoke'));
        const code = builder.getProgram();
        const payload = new _core_payload_invokeCode__WEBPACK_IMPORTED_MODULE_5__["InvokeCode"](code);
        const tx = new _core_transaction__WEBPACK_IMPORTED_MODULE_6__["Transaction"]({
            txType: _core_transaction__WEBPACK_IMPORTED_MODULE_6__["Invoke"],
            payload,
            gasPrice: long__WEBPACK_IMPORTED_MODULE_1__["fromString"](gasPrice),
            gasLimit: long__WEBPACK_IMPORTED_MODULE_1__["fromString"](gasLimit)
        });
        if (processCallback !== undefined) {
            const result = processCallback(tx);
            if (result instanceof Promise) {
                await result;
            }
        }
        const client = new _network_rpcClient__WEBPACK_IMPORTED_MODULE_7__["RpcClient"](this.rpcAddress);
        const w = new ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["Writer"]();
        tx.serialize(w);
        const response = await client.sendRawTransaction(w.getBytes(), false);
        if (response.error !== 0) {
            throw new Error(`Failed to make the transfer: ${response.error} - ${response.result}`);
        }
        if (!wait) {
            return response;
        }
        await Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__["sleep"])(3000);
        return await client.getSmartCodeEvent(response.result);
    }
    async withdrawOng({ sender, to, amount, gasPrice = '500', gasLimit = '20000000', processCallback, wait = true }) {
        const amountBg = new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(amount).shiftedBy(9);
        const builder = new ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["ProgramBuilder"]();
        const tran = new _common_struct__WEBPACK_IMPORTED_MODULE_3__["Struct"]([sender, new ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["Address"](this.getContract('ont')), to, long__WEBPACK_IMPORTED_MODULE_1__["fromString"](amountBg.toString())].reverse());
        const parameters = [0, new ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["Address"](this.getContract('ong')), 'transferFrom', tran];
        parameters.reverse().forEach(parameter => Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__["pushParam"])(parameter, builder));
        builder.writeOpCode(ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["OpCode"].SYSCALL);
        builder.pushBytes(new Buffer('Ontology.Native.Invoke'));
        const code = builder.getProgram();
        const payload = new _core_payload_invokeCode__WEBPACK_IMPORTED_MODULE_5__["InvokeCode"](code);
        const tx = new _core_transaction__WEBPACK_IMPORTED_MODULE_6__["Transaction"]({
            txType: _core_transaction__WEBPACK_IMPORTED_MODULE_6__["Invoke"],
            payload,
            gasPrice: long__WEBPACK_IMPORTED_MODULE_1__["fromString"](gasPrice),
            gasLimit: long__WEBPACK_IMPORTED_MODULE_1__["fromString"](gasLimit)
        });
        if (processCallback !== undefined) {
            const result = processCallback(tx);
            if (result instanceof Promise) {
                await result;
            }
        }
        const client = new _network_rpcClient__WEBPACK_IMPORTED_MODULE_7__["RpcClient"](this.rpcAddress);
        const w = new ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["Writer"]();
        tx.serialize(w);
        const response = await client.sendRawTransaction(w.getBytes(), false);
        if (response.error !== 0) {
            throw new Error(`Failed to make the withdraw Ong: ${response.error} - ${response.result}`);
        }
        if (!wait) {
            return response;
        }
        await Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__["sleep"])(3000);
        return await client.getSmartCodeEvent(response.result);
    }
    getContract(asset) {
        if (asset === 'ont') {
            return '0000000000000000000000000000000000000001';
        } else if (asset === 'ong') {
            return '0000000000000000000000000000000000000002';
        } else {
            throw new Error(`Invalid asset: ${asset}.`);
        }
    }
}

/***/ }),

/***/ "./src/wallet.ts":
/*!***********************!*\
  !*** ./src/wallet.ts ***!
  \***********************/
/*! exports provided: loadWallet, createWallet, createAccount, signTransaction, signTransactionMulti */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadWallet", function() { return loadWallet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWallet", function() { return createWallet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAccount", function() { return createAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signTransaction", function() { return signTransaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signTransactionMulti", function() { return signTransactionMulti; });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ontology-ts-crypto */ "ontology-ts-crypto");
/* harmony import */ var ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_transaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/transaction */ "./src/core/transaction.ts");




function loadWallet(walletPath) {
    const f = fs__WEBPACK_IMPORTED_MODULE_1__["readFileSync"](walletPath, 'utf8');
    return ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["Wallet"].deserializeJson(f);
}
function createWallet(accounts) {
    const wallet = ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["Wallet"].create();
    accounts.forEach(account => wallet.addAccount(account));
    return wallet;
}
function createAccount(privateKey) {
    return ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["Account"].create(Object(crypto__WEBPACK_IMPORTED_MODULE_0__["randomBytes"])(4).toString('hex'), ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["PrivateKey"].deserialize(new Buffer(privateKey, 'hex')), '');
}
async function signTransaction(tx, account, password) {
    const bytes = tx.serializeUnsigned();
    const hash = ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["Hash"].sha256(ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["Hash"].sha256(bytes));
    const privateKey = await account.decryptKey(password);
    const publicKey = privateKey.getPublicKey();
    const signature = await privateKey.sign(hash);
    const invokationSript = Object(ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["programFromParams"])([signature.serialize()]);
    const verificationScript = Object(ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["programFromPubKey"])(publicKey);
    const sig = new _core_transaction__WEBPACK_IMPORTED_MODULE_3__["RawSig"](invokationSript, verificationScript);
    tx.addSig(sig);
}
async function signTransactionMulti(tx, m, signers) {
    const bytes = tx.serializeUnsigned();
    const hash = ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["Hash"].sha256(ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["Hash"].sha256(bytes));
    const signatures = [];
    const publicKeys = [];
    for (const signer of signers) {
        const privateKey = await signer.account.decryptKey(signer.password);
        const publicKey = privateKey.getPublicKey();
        const signature = await privateKey.sign(hash);
        publicKeys.push(publicKey);
        signatures.push(signature.serialize());
    }
    const invokationSript = Object(ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["programFromParams"])(signatures);
    const verificationScript = Object(ontology_ts_crypto__WEBPACK_IMPORTED_MODULE_2__["programFromMultiPubKeys"])(m, publicKeys);
    const sig = new _core_transaction__WEBPACK_IMPORTED_MODULE_3__["RawSig"](invokationSript, verificationScript);
    tx.addSig(sig);
}

/***/ }),

/***/ "bignumber.js":
/*!*******************************!*\
  !*** external "bignumber.js" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bignumber.js");

/***/ }),

/***/ "cross-fetch":
/*!******************************!*\
  !*** external "cross-fetch" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cross-fetch");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "long":
/*!***********************!*\
  !*** external "long" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("long");

/***/ }),

/***/ "ontology-ts-crypto":
/*!*************************************!*\
  !*** external "ontology-ts-crypto" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ontology-ts-crypto");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map