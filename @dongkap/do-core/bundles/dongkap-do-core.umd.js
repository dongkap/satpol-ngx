(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/common/http'), require('@ngx-translate/core'), require('rxjs'), require('crypto-js'), require('@ngx-translate/http-loader'), require('idb')) :
    typeof define === 'function' && define.amd ? define('@dongkap/do-core', ['exports', '@angular/core', '@angular/common', '@angular/common/http', '@ngx-translate/core', 'rxjs', 'crypto-js', '@ngx-translate/http-loader', 'idb'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.dongkap = global.dongkap || {}, global.dongkap["do-core"] = {}), global.ng.core, global.ng.common, global.ng.common.http, global["@ngx-translate/core"], global.rxjs, global["crypto-js"], global["@ngx-translate/http-loader"], global.idb));
})(this, (function (exports, i0, common, i1, core, rxjs, CryptoJS, httpLoader, idb) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var CryptoJS__namespace = /*#__PURE__*/_interopNamespace(CryptoJS);
    var idb__namespace = /*#__PURE__*/_interopNamespace(idb);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    function throwIfAlreadyLoaded(parentModule, moduleName) {
        if (parentModule) {
            throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
        }
    }

    var HTTP_SERVICE = new i0.InjectionToken('Http Service');

    var STORAGE_SERVICE = new i0.InjectionToken('Storage Factory Service');
    var AUTH_INDEXED_DB = new i0.InjectionToken('Auth IndexedDB Resource');
    var PROFILE_INDEXED_DB = new i0.InjectionToken('Profile IndexedDB Resource');
    var SETTINGS_INDEXED_DB = new i0.InjectionToken('Settings IndexedDB Resource');

    var ErrorHandlerService = /** @class */ (function () {
        function ErrorHandlerService() {
        }
        ErrorHandlerService.prototype.handleError = function (error) {
            if (error.message) {
                if (error.message.includes('No loader found for file')) {
                    return rxjs.EMPTY;
                }
                else if (error.message.includes('mousedown') || error.message.includes('mousemove') ||
                    error.message.includes('mouseup') || error.message.includes('mouseout') ||
                    error.message.includes('mousewheel') || error.message.includes('DOMMouseScroll') ||
                    error.message.includes('dblclick') || error.message.includes('touchstart') ||
                    error.message.includes('touchmove') || error.message.includes('touchend')) {
                    return rxjs.EMPTY;
                }
            }
            throw error;
        };
        return ErrorHandlerService;
    }());
    ErrorHandlerService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ErrorHandlerService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    ErrorHandlerService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ErrorHandlerService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ErrorHandlerService, decorators: [{
                type: i0.Injectable
            }] });

    var CustomPreloadingStrategy = /** @class */ (function () {
        function CustomPreloadingStrategy() {
            this.preloadedModules = [];
        }
        CustomPreloadingStrategy.prototype.preload = function (route, load) {
            if (route.data && route.data['preload']) {
                this.preloadedModules.push(route.path);
                return load();
            }
            else {
                return rxjs.EMPTY;
            }
        };
        return CustomPreloadingStrategy;
    }());
    CustomPreloadingStrategy.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: CustomPreloadingStrategy, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    CustomPreloadingStrategy.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: CustomPreloadingStrategy });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: CustomPreloadingStrategy, decorators: [{
                type: i0.Injectable
            }] });

    var EncryptionService = /** @class */ (function () {
        function EncryptionService() {
            this.ivSize = 128;
        }
        EncryptionService.prototype.getHmacSha256 = function (secret, message, hex) {
            var hash = CryptoJS__namespace.HmacSHA256(message, secret);
            if (hex) {
                return CryptoJS__namespace.enc.Hex.stringify(hash).toUpperCase();
            }
            return CryptoJS__namespace.enc.Base64.stringify(hash);
        };
        EncryptionService.prototype.encryptAES = function (secretKey, message) {
            var iv = CryptoJS__namespace.lib.WordArray.random(this.ivSize / 8);
            var key = CryptoJS__namespace.enc.Utf8.parse(secretKey);
            var encrypted = CryptoJS__namespace.AES.encrypt(message, key, {
                iv: iv,
                padding: CryptoJS__namespace.pad.Pkcs7,
                mode: CryptoJS__namespace.mode.CBC,
            });
            var encryptMessage = iv.toString() + encrypted.toString();
            return encryptMessage;
        };
        EncryptionService.prototype.decryptAES = function (secretKey, encryptMessage) {
            if (encryptMessage) {
                var iv = CryptoJS__namespace.enc.Hex.parse(encryptMessage.substr(0, 32));
                var key = CryptoJS__namespace.enc.Utf8.parse(secretKey);
                var encrypted = encryptMessage.substring(32);
                var decrypted = CryptoJS__namespace.AES.decrypt(encrypted, key, {
                    iv: iv,
                    padding: CryptoJS__namespace.pad.Pkcs7,
                    mode: CryptoJS__namespace.mode.CBC,
                });
                try {
                    return decrypted.toString(CryptoJS__namespace.enc.Utf8);
                }
                catch (error) {
                    return null;
                }
            }
            return null;
        };
        return EncryptionService;
    }());
    EncryptionService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EncryptionService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    EncryptionService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EncryptionService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EncryptionService, decorators: [{
                type: i0.Injectable
            }] });

    var OAUTH_INFO = new i0.InjectionToken('OAUTH INFO Resource');

    var StorageMaskService = /** @class */ (function () {
        function StorageMaskService(enc, oauthResource) {
            this.enc = enc;
            this.oauthResource = oauthResource;
        }
        StorageMaskService.prototype.getSessionStorageEnc = function (key) {
            var keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
            if (sessionStorage.getItem(keyEncrypted)) {
                return this.enc.decryptAES(this.oauthResource['aes_key'], sessionStorage.getItem(keyEncrypted));
            }
            else {
                return null;
            }
        };
        StorageMaskService.prototype.setSessionStorageEnc = function (key, value) {
            var keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
            var valueEncrypted = this.enc.encryptAES(this.oauthResource['aes_key'], value);
            sessionStorage.setItem(keyEncrypted, valueEncrypted);
        };
        StorageMaskService.prototype.removeSessionStorageEnc = function (key) {
            var keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
            sessionStorage.removeItem(keyEncrypted);
        };
        StorageMaskService.prototype.getLocalStorageEnc = function (key) {
            var keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
            if (localStorage.getItem(keyEncrypted)) {
                return this.enc.decryptAES(this.oauthResource['aes_key'], localStorage.getItem(keyEncrypted));
            }
            else {
                return null;
            }
        };
        StorageMaskService.prototype.setLocalStorageEnc = function (key, value) {
            var keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
            var valueEncrypted = this.enc.encryptAES(this.oauthResource['aes_key'], value);
            localStorage.setItem(keyEncrypted, valueEncrypted);
        };
        StorageMaskService.prototype.removeLocalStorageEnc = function (key) {
            var keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
            localStorage.removeItem(keyEncrypted);
        };
        StorageMaskService.prototype.getSessionStorage = function (key) {
            return (key) ? sessionStorage.getItem(key) : null;
        };
        StorageMaskService.prototype.setSessionStorage = function (key, value) {
            sessionStorage.setItem(key, value);
        };
        StorageMaskService.prototype.removeSessionStorage = function (key) {
            sessionStorage.removeItem(key);
        };
        StorageMaskService.prototype.getLocalStorage = function (key) {
            return (key) ? localStorage.getItem(key) : null;
        };
        StorageMaskService.prototype.setLocalStorage = function (key, value) {
            localStorage.setItem(key, value);
        };
        StorageMaskService.prototype.removeLocalStorage = function (key) {
            localStorage.removeItem(key);
        };
        StorageMaskService.prototype.clearSessionStorage = function () {
            sessionStorage.clear();
        };
        StorageMaskService.prototype.clearLocalStorage = function () {
            localStorage.clear();
        };
        StorageMaskService.prototype.clearAll = function () {
            sessionStorage.clear();
            localStorage.clear();
        };
        return StorageMaskService;
    }());
    StorageMaskService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: StorageMaskService, deps: [{ token: EncryptionService }, { token: OAUTH_INFO }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    StorageMaskService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: StorageMaskService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: StorageMaskService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], ctorParameters: function () {
            return [{ type: EncryptionService }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [OAUTH_INFO]
                        }] }];
        } });

    var HttpAbstractService = /** @class */ (function () {
        function HttpAbstractService() {
        }
        HttpAbstractService.prototype.API = function (api, pathVariable) {
            var url = api.server.protocol +
                '://' +
                api.server.host +
                ((api.server.port) ? ':' + api.server.port : '') +
                api.path;
            if (pathVariable) {
                pathVariable.forEach(function (path) {
                    url = url + '/' + path;
                });
            }
            return url;
        };
        return HttpAbstractService;
    }());

    exports.ResponseCode = void 0;
    (function (ResponseCode) {
        ResponseCode["ERR_XXAKEY"] = "ERR_XXAKEY";
        ResponseCode["ERR_XXATIMESTAMP"] = "ERR_XXATIMESTAMP";
        ResponseCode["ERR_XXASIGNATURE"] = "ERR_XXASIGNATURE";
        ResponseCode["ERR_UNAUTHORIZED"] = "ERR_UNAUTHORIZED";
        ResponseCode["ERR_SYS0001"] = "ERR_SYS0001";
        ResponseCode["ERR_SYS0002"] = "ERR_SYS0002";
        ResponseCode["ERR_SYS0500"] = "ERR_SYS0500";
        ResponseCode["ERR_SYS0404"] = "ERR_SYS0404";
        ResponseCode["ERR_SYS0501"] = "ERR_SYS0501";
        ResponseCode["ERR_SYS0502"] = "ERR_SYS0502";
        ResponseCode["ERR_SYS0302"] = "ERR_SYS0302";
        ResponseCode["ERR_SCR0000"] = "ERR_SCR0000";
        ResponseCode["ERR_SCR0001"] = "ERR_SCR0001";
        ResponseCode["ERR_SCR0002"] = "ERR_SCR0002";
        ResponseCode["ERR_SCR0003"] = "ERR_SCR0003";
        ResponseCode["ERR_SCR0004"] = "ERR_SCR0004";
        ResponseCode["ERR_SCR0005"] = "ERR_SCR0005";
        ResponseCode["ERR_SCR0006"] = "ERR_SCR0006";
        ResponseCode["ERR_SCR0007A"] = "ERR_SCR0007A";
        ResponseCode["ERR_SCR0007B"] = "ERR_SCR0007B";
        ResponseCode["ERR_SCR0008"] = "ERR_SCR0008";
        ResponseCode["ERR_SCR0009"] = "ERR_SCR0009";
        ResponseCode["ERR_SCR0010"] = "ERR_SCR0010";
        ResponseCode["ERR_SCR0011"] = "ERR_SCR0011";
        ResponseCode["ERR_SCR0012"] = "ERR_SCR0012";
        ResponseCode["OK_DEFAULT"] = "OK_DEFAULT";
        ResponseCode["OK_INSERTED"] = "OK_INSERTED";
        ResponseCode["OK_UPDATED"] = "OK_UPDATED";
        ResponseCode["OK_DELETED"] = "OK_DELETED";
        ResponseCode["OK_LOGOUT"] = "OK_LOGOUT";
        ResponseCode["OK_REGISTERED"] = "OK_REGISTERED";
        ResponseCode["OK_CHANGE_ROLE"] = "OK_CHANGE_ROLE";
        ResponseCode["OK_REQUEST_FORGOT_PASSWORD"] = "OK_REQUEST_FORGOT_PASSWORD";
        ResponseCode["OK_FORGOT_PASSWORD"] = "OK_FORGOT_PASSWORD";
        ResponseCode["OK_ACTIVATE_ACCOUNT"] = "OK_ACTIVATE_ACCOUNT";
        ResponseCode["OK_SCR001"] = "OK_SCR001";
        ResponseCode["OK_SCR002"] = "OK_SCR002";
        ResponseCode["OK_SCR003"] = "OK_SCR003";
        ResponseCode["OK_SCR004"] = "OK_SCR004";
        ResponseCode["OK_SCR005"] = "OK_SCR005";
        ResponseCode["OK_SCR006"] = "OK_SCR006";
        ResponseCode["OK_SCR007"] = "OK_SCR007";
        ResponseCode["OK_SCR008"] = "OK_SCR008";
        ResponseCode["OK_SCR009"] = "OK_SCR009";
        ResponseCode["OK_SCR010"] = "OK_SCR010";
        ResponseCode["OK_SCR011"] = "OK_SCR011";
        ResponseCode["OK_SCR012"] = "OK_SCR012";
    })(exports.ResponseCode || (exports.ResponseCode = {}));

    var Environment = /** @class */ (function () {
        function Environment() {
            this.production = true;
            this.locale = 'en-US';
            this.basePath = '/';
        }
        return Environment;
    }());
    var Server = /** @class */ (function () {
        function Server() {
            this.protocol = 'http';
        }
        return Server;
    }());

    exports.HttpMethod = void 0;
    (function (HttpMethod) {
        HttpMethod["POST"] = "POST";
        HttpMethod["GET"] = "GET";
        HttpMethod["PUT"] = "PUT";
        HttpMethod["DELETE"] = "DELETE";
    })(exports.HttpMethod || (exports.HttpMethod = {}));
    var HostModel = /** @class */ (function () {
        function HostModel() {
            this.protocol = 'https';
        }
        return HostModel;
    }());

    var LocaleModel = /** @class */ (function () {
        function LocaleModel() {
        }
        return LocaleModel;
    }());

    var RoleModel = /** @class */ (function () {
        function RoleModel() {
        }
        return RoleModel;
    }());
    var SystemAuthority = /** @class */ (function () {
        function SystemAuthority() {
        }
        return SystemAuthority;
    }());

    var UserModel = /** @class */ (function () {
        function UserModel() {
        }
        return UserModel;
    }());

    var oauthInfo = {
        access_token: 'access_token',
        refresh_token: 'refresh_token',
        token_type: 'token_type',
        public_key: 'xrkey',
        expires_in: 'expires_in',
        authority: 'authority',
        provider: 'provider',
        username: 'username',
        image: 'image',
        email: 'email',
        menus: 'menus',
        extras: 'extras',
        server_date: 'server_date',
        locale: 'locale',
        theme: 'theme',
        name: 'name',
    };
    var additionalInfo = {
        imageBase64: 'image-base64',
    };
    exports.TypeDataOauth = void 0;
    (function (TypeDataOauth) {
        TypeDataOauth["OAUTH"] = "oauth";
        TypeDataOauth["PROFILE"] = "profile";
        TypeDataOauth["SETTINGS"] = "settings";
        TypeDataOauth["LOCALSTORAGE"] = "localstorage";
    })(exports.TypeDataOauth || (exports.TypeDataOauth = {}));
    var oauthInfoModels = [
        { key: oauthInfo.access_token, enc: true, type: exports.TypeDataOauth.OAUTH, string: true, persist: true },
        { key: oauthInfo.refresh_token, enc: true, type: exports.TypeDataOauth.OAUTH, string: true, persist: true },
        { key: oauthInfo.token_type, enc: true, type: exports.TypeDataOauth.OAUTH, string: true, persist: true },
        { key: oauthInfo.public_key, enc: true, type: exports.TypeDataOauth.OAUTH, string: true, persist: true },
        { key: oauthInfo.expires_in, enc: true, type: exports.TypeDataOauth.OAUTH, string: false, persist: true },
        { key: oauthInfo.authority, enc: true, type: exports.TypeDataOauth.OAUTH, string: true, persist: true },
        { key: oauthInfo.provider, enc: true, type: exports.TypeDataOauth.OAUTH, string: true, persist: true },
        { key: oauthInfo.menus, enc: true, type: exports.TypeDataOauth.OAUTH, string: false, persist: true },
        { key: oauthInfo.extras, enc: true, type: exports.TypeDataOauth.OAUTH, string: false, persist: true },
        { key: oauthInfo.username, enc: false, type: exports.TypeDataOauth.OAUTH, string: true, persist: true },
        { key: oauthInfo.name, enc: false, type: exports.TypeDataOauth.PROFILE, string: true, persist: true },
        { key: oauthInfo.email, enc: false, type: exports.TypeDataOauth.PROFILE, string: true, persist: true },
        { key: oauthInfo.image, enc: false, type: exports.TypeDataOauth.PROFILE, string: true, persist: true },
        { key: oauthInfo.locale, enc: false, type: exports.TypeDataOauth.SETTINGS, string: true, persist: true },
        { key: oauthInfo.theme, enc: false, type: exports.TypeDataOauth.SETTINGS, string: true, persist: true },
        { key: oauthInfo.server_date, enc: false, type: exports.TypeDataOauth.SETTINGS, string: true, persist: true },
    ];
    var additionalInfoModels = [
        { key: additionalInfo.imageBase64, enc: false, type: exports.TypeDataOauth.PROFILE, string: true, persist: true },
    ];
    var signatureHeader = {
        authorization: 'Authorization',
        signature: 'X-DONGKAP-Signature',
        timestamp: 'X-DONGKAP-Timestamp',
        key: 'X-DONGKAP-Key',
        mark: 'X-DONGKAP-Mark',
    };

    exports.DatePattern = void 0;
    (function (DatePattern) {
        DatePattern["SLASH"] = "^((?:(?:31(\\/)(?:0[13578]|1[02]))|((29|30)(\\/)(0[1,3-9]|1[0-2])))(\\/)(?:(?:1[6-9]|[2-9]\\d)?\\d{2}))$|^(?:29(\\/)02(\\/)(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0[1-9]|1\\d|2[0-8])(\\/)(?:(?:0[1-9])|(?:1[0-2]))(\\/)(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$";
        DatePattern["SLASH_DDMMYYYY"] = "^((?:(?:31(\\/)(?:0[13578]|1[02]))|((29|30)(\\/)(0[1,3-9]|1[0-2])))(\\/)(?:(?:1[6-9]|[2-9]\\d)?\\d{4}))$|^(?:29(\\/)02(\\/)(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0[1-9]|1\\d|2[0-8])(\\/)(?:(?:0[1-9])|(?:1[0-2]))(\\/)(?:(?:1[6-9]|[2-9]\\d)?\\d{4})$";
        DatePattern["SLASH_YYYYMMDD"] = "^((?:(?:1[6-9]|[2-9]\\d)?\\d{2})(\\/)(?:(?:(?:0[13578]|1[02])(\\/)31)|((0[1,3-9]|1[0-2])(\\/)(29|30))))$|^(?:(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))(\\/)02(\\/)29)$|^(?:(?:1[6-9]|[2-9]\\d)?\\d{2})(\\/)(?:(?:0[1-9])|(?:1[0-2]))(\\/)(?:0[1-9]|1\\d|2[0-8])$";
        DatePattern["DASH"] = "^((?:(?:31(-)(?:0[13578]|1[02]))|((29|30)(-)(0[1,3-9]|1[0-2])))(-)(?:(?:1[6-9]|[2-9]\\d)?\\d{2}))$|^(?:29(-)02(-)(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0[1-9]|1\\d|2[0-8])(-)(?:(?:0[1-9])|(?:1[0-2]))(-)(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$";
        DatePattern["DOT"] = "^((?:(?:31(\\.)(?:0[13578]|1[02]))|((29|30)(\\.)(0[1,3-9]|1[0-2])))(\\.)(?:(?:1[6-9]|[2-9]\\d)?\\d{2}))$|^(?:29(\\.)02(\\.)(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0[1-9]|1\\d|2[0-8])(\\.)(?:(?:0[1-9])|(?:1[0-2]))(\\.)(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$";
    })(exports.DatePattern || (exports.DatePattern = {}));
    exports.DateFormat = void 0;
    (function (DateFormat) {
        DateFormat["DATE"] = "dd/MM/yyyy";
        DateFormat["DATETIME"] = "dd/MM/yyyy HH:mm:ss.S";
    })(exports.DateFormat || (exports.DateFormat = {}));
    /**
     * https://stackoverflow.com/a/52478926
     * original regex yyyy/MM/dd or yy/MM/dd
     * ^((?:(?:1[6-9]|[2-9]\d)?\d{2})(\/)(?:(?:(?:0[13578]|1[02])(\/)31)|((0[1,3-9]|1[0-2])(\/)(29|30))))$|
     * ^(?:(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))(\/)02(\/)29)$|
     * ^(?:(?:1[6-9]|[2-9]\d)?\d{2})(\/)(?:(?:0[1-9])|(?:1[0-2]))(\/)(?:0[1-9]|1\d|2[0-8])$
     * original regex dd/MM/yyyy or dd/MM/yy
     * ^((?:(?:31(\/)(?:0[13578]|1[02]))|((29|30)(\/)(0[1,3-9]|1[0-2])))(\/)(?:(?:1[6-9]|[2-9]\d)?\d{2}))$|
     * ^(?:29(\/)02(\/)(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|
     * ^(?:0[1-9]|1\d|2[0-8])(\/)(?:(?:0[1-9])|(?:1[0-2]))(\/)(?:(?:1[6-9]|[2-9]\d)?\d{2})$
     */

    exports.Pattern = void 0;
    (function (Pattern) {
        Pattern["FULLNAME"] = "[a-zA-Z .,]+$";
        Pattern["EMAIL"] = ".+@.+..+";
        Pattern["USERNAME"] = "[a-z0-9.]*$";
        Pattern["PHONE_NUMBER"] = "^(([+]([0-9]{1,2}))|([0-9]{1}))([0-9]{2}-?)([0-9]{4}-?)([0-9]{1,6}-?)$";
        Pattern["PASSWORD_MEDIUM"] = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])([@$!%*?&]*)[A-Za-z0-9@$!%*?&]{8,}$";
        Pattern["PASSWORD_STRONG"] = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,}$";
        Pattern["LOCALE"] = "^en-US$|^id-ID$";
    })(exports.Pattern || (exports.Pattern = {}));

    var HttpCommonService = /** @class */ (function (_super) {
        __extends(HttpCommonService, _super);
        function HttpCommonService(http) {
            var _this = _super.call(this) || this;
            _this.http = http;
            return _this;
        }
        HttpCommonService.prototype.HTTP_AUTH = function (api, body, headers, params, pathVariable, responseType) {
            if (headers) {
                headers = headers.append(signatureHeader.mark, 'true');
            }
            else {
                headers = new i1.HttpHeaders().append(signatureHeader.mark, 'true');
            }
            responseType = responseType ? responseType : 'json';
            return this.HTTP_BASE(api, body, headers, params, pathVariable, responseType);
        };
        HttpCommonService.prototype.HTTP_BASE = function (api, body, headers, params, pathVariable, responseType) {
            var response = null;
            responseType = responseType ? responseType : 'json';
            switch (api.method) {
                case exports.HttpMethod.POST:
                    response = this.POST(this.API(api, pathVariable), body, headers, params, responseType);
                    break;
                case exports.HttpMethod.PUT:
                    response = this.PUT(this.API(api, pathVariable), body, headers, params);
                    break;
                case exports.HttpMethod.DELETE:
                    response = this.DELETE(this.API(api, pathVariable), headers, params);
                    break;
                default:
                    response = this.GET(this.API(api, pathVariable), headers, params, responseType);
                    break;
            }
            return response;
        };
        HttpCommonService.prototype.GET = function (url, headers, params, responseType) {
            return this.http.get(url, { headers: headers, params: params, responseType: responseType });
        };
        HttpCommonService.prototype.POST = function (url, body, headers, params, responseType) {
            return this.http.post(url, body, { headers: headers, params: params, responseType: responseType });
        };
        HttpCommonService.prototype.PUT = function (url, body, headers, params) {
            return this.http.put(url, body, { headers: headers, params: params });
        };
        HttpCommonService.prototype.DELETE = function (url, headers, params) {
            return this.http.delete(url, { headers: headers, params: params });
        };
        return HttpCommonService;
    }(HttpAbstractService));
    HttpCommonService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HttpCommonService, deps: [{ token: i1__namespace.HttpClient }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    HttpCommonService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HttpCommonService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HttpCommonService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.HttpClient }]; } });

    var TranslationService = /** @class */ (function (_super) {
        __extends(TranslationService, _super);
        function TranslationService(http, prefix, suffix) {
            return _super.call(this, http, prefix, suffix) || this;
        }
        TranslationService.prototype.getTranslation = function (lang) {
            return _super.prototype.getTranslation.call(this, lang);
        };
        return TranslationService;
    }(httpLoader.TranslateHttpLoader));

    var CORE_PROVIDERS = [
        CustomPreloadingStrategy,
        EncryptionService,
        { provide: HTTP_SERVICE, useClass: HttpCommonService },
        { provide: i0.ErrorHandler, useClass: ErrorHandlerService },
        { provide: STORAGE_SERVICE, useClass: StorageMaskService },
    ];
    function createTranslateLoader(http) {
        return new TranslationService(http, './assets/i18n/', '.json');
    }
    var DoCoreModule = /** @class */ (function () {
        function DoCoreModule(parentModule) {
            throwIfAlreadyLoaded(parentModule, 'DoCoreModule');
        }
        DoCoreModule.forRoot = function () {
            return {
                ngModule: DoCoreModule,
                providers: __spreadArray(__spreadArray([], __read(CORE_PROVIDERS)), __read(core.TranslateModule.forRoot({
                    loader: {
                        provide: core.TranslateLoader,
                        useFactory: (createTranslateLoader),
                        deps: [i1.HttpClient],
                    },
                }).providers)),
            };
        };
        return DoCoreModule;
    }());
    DoCoreModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoCoreModule, deps: [{ token: DoCoreModule, optional: true, skipSelf: true }], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DoCoreModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoCoreModule, imports: [common.CommonModule] });
    DoCoreModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoCoreModule, imports: [[
                common.CommonModule,
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoCoreModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            common.CommonModule,
                        ],
                        exports: [],
                        declarations: [],
                    }]
            }], ctorParameters: function () {
            return [{ type: DoCoreModule, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.SkipSelf
                        }] }];
        } });

    var UserService = /** @class */ (function () {
        function UserService() {
        }
        return UserService;
    }());

    var IndexedDBService = /** @class */ (function () {
        function IndexedDBService(injector, dbname, version, storeName) {
            this.storeName = storeName;
            this.openSessionIDB(dbname, version);
            this.enc = injector.get(EncryptionService);
            this.oauthResource = injector.get(OAUTH_INFO);
        }
        IndexedDBService.prototype.openSessionIDB = function (dbname, version) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.$dbPromise = idb__namespace.openDB(dbname, version)];
                });
            });
        };
        IndexedDBService.prototype.getAllOf = function () {
            var result$ = new rxjs.Subject();
            this.getAllVal(this.storeName).then(function (value) {
                result$.next(value);
            });
            return result$.asObservable();
        };
        IndexedDBService.prototype.getOf = function (key) {
            var result$ = new rxjs.Subject();
            this.getKeyVal(key, this.storeName).then(function (value) {
                result$.next(value);
            });
            return result$.asObservable();
        };
        IndexedDBService.prototype.putOf = function (key, val) {
            var result$ = new rxjs.Subject();
            this.putKeyVal(key, val, this.storeName).then(function (value) {
                result$.next(value);
            });
            return result$.asObservable();
        };
        IndexedDBService.prototype.removeOf = function (key) {
            var result$ = new rxjs.Subject();
            this.removeKeyVal(key, this.storeName).then(function (value) {
                result$.next(value);
            });
            return result$.asObservable();
        };
        IndexedDBService.prototype.getAll = function () {
            return this.getAllVal(this.storeName);
        };
        IndexedDBService.prototype.get = function (key) {
            return this.getKeyVal(this.storeName, key);
        };
        IndexedDBService.prototype.put = function (key, val) {
            return this.putKeyVal(this.storeName, key, val);
        };
        IndexedDBService.prototype.remove = function (key) {
            return this.removeKeyVal(this.storeName, key);
        };
        IndexedDBService.prototype.clearAll = function () {
            return this.clearAllKeyVal(this.storeName);
        };
        IndexedDBService.prototype.keys = function () {
            return this.keysKeyVal(this.storeName);
        };
        IndexedDBService.prototype.getAllVal = function (storeName) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.$dbPromise];
                        case 1: return [2 /*return*/, (_a.sent()).getAll(storeName)];
                    }
                });
            });
        };
        IndexedDBService.prototype.getKeyVal = function (storeName, key) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.$dbPromise];
                        case 1: return [2 /*return*/, (_a.sent()).get(storeName, key)];
                    }
                });
            });
        };
        IndexedDBService.prototype.putKeyVal = function (storeName, key, val) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.$dbPromise];
                        case 1: return [2 /*return*/, (_a.sent()).put(storeName, val, key)];
                    }
                });
            });
        };
        IndexedDBService.prototype.removeKeyVal = function (storeName, key) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.$dbPromise];
                        case 1: return [2 /*return*/, (_a.sent()).delete(storeName, key)];
                    }
                });
            });
        };
        IndexedDBService.prototype.clearAllKeyVal = function (storeName) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.$dbPromise];
                        case 1: return [2 /*return*/, (_a.sent()).clear(storeName)];
                    }
                });
            });
        };
        IndexedDBService.prototype.keysKeyVal = function (storeName) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.$dbPromise];
                        case 1: return [2 /*return*/, (_a.sent()).getAllKeys(storeName)];
                    }
                });
            });
        };
        IndexedDBService.prototype.addArticle = function (storeName, value) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.$dbPromise];
                        case 1: return [2 /*return*/, (_a.sent()).add(storeName, value)];
                    }
                });
            });
        };
        IndexedDBService.prototype.addAllArticle = function (storeName, values) {
            return __awaiter(this, void 0, void 0, function () {
                var tx;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.$dbPromise];
                        case 1:
                            tx = (_a.sent()).transaction(storeName, 'readwrite');
                            values.forEach(function (value) {
                                tx.store.add(value);
                            });
                            return [4 /*yield*/, tx.done];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        return IndexedDBService;
    }());

    var USER_SERVICE = new i0.InjectionToken('USER Service');

    var API = new i0.InjectionToken('API');

    var ENVIRONMENT = new i0.InjectionToken('Environment Config');

    /*
     * Public API Surface of do-core
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.API = API;
    exports.AUTH_INDEXED_DB = AUTH_INDEXED_DB;
    exports.CORE_PROVIDERS = CORE_PROVIDERS;
    exports.CustomPreloadingStrategy = CustomPreloadingStrategy;
    exports.DoCoreModule = DoCoreModule;
    exports.ENVIRONMENT = ENVIRONMENT;
    exports.EncryptionService = EncryptionService;
    exports.Environment = Environment;
    exports.ErrorHandlerService = ErrorHandlerService;
    exports.HTTP_SERVICE = HTTP_SERVICE;
    exports.HostModel = HostModel;
    exports.HttpCommonService = HttpCommonService;
    exports.IndexedDBService = IndexedDBService;
    exports.LocaleModel = LocaleModel;
    exports.OAUTH_INFO = OAUTH_INFO;
    exports.PROFILE_INDEXED_DB = PROFILE_INDEXED_DB;
    exports.RoleModel = RoleModel;
    exports.SETTINGS_INDEXED_DB = SETTINGS_INDEXED_DB;
    exports.STORAGE_SERVICE = STORAGE_SERVICE;
    exports.SystemAuthority = SystemAuthority;
    exports.TranslationService = TranslationService;
    exports.USER_SERVICE = USER_SERVICE;
    exports.UserModel = UserModel;
    exports.UserService = UserService;
    exports.additionalInfo = additionalInfo;
    exports.additionalInfoModels = additionalInfoModels;
    exports.createTranslateLoader = createTranslateLoader;
    exports.oauthInfo = oauthInfo;
    exports.oauthInfoModels = oauthInfoModels;
    exports.signatureHeader = signatureHeader;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=dongkap-do-core.umd.js.map
