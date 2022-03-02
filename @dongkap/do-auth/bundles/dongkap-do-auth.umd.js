(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/common/http'), require('@angular/core'), require('@angular/forms'), require('@ngx-translate/core'), require('ng-recaptcha'), require('@nebular/theme'), require('@dongkap/do-theme'), require('@dongkap/do-shared'), require('@dongkap/do-core'), require('@angular/router'), require('rxjs'), require('rxjs/operators'), require('@ng-idle/core')) :
    typeof define === 'function' && define.amd ? define('@dongkap/do-auth', ['exports', '@angular/common', '@angular/common/http', '@angular/core', '@angular/forms', '@ngx-translate/core', 'ng-recaptcha', '@nebular/theme', '@dongkap/do-theme', '@dongkap/do-shared', '@dongkap/do-core', '@angular/router', 'rxjs', 'rxjs/operators', '@ng-idle/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.dongkap = global.dongkap || {}, global.dongkap["do-auth"] = {}), global.ng.common, global.ng.common.http, global.ng.core, global.ng.forms, global["@ngx-translate/core"], global["ng-recaptcha"], global["@nebular/theme"], global["@dongkap/do-theme"], global["@dongkap/do-shared"], global["@dongkap/do-core"], global.ng.router, global.rxjs, global.rxjs.operators, global["@ng-idle/core"]));
})(this, (function (exports, i6, http, i0, i7, i3, i6$1, i2, doTheme, i2$1, i4, i1, rxjs, operators, i5) { 'use strict';

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

    var i6__namespace = /*#__PURE__*/_interopNamespace(i6);
    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i7__namespace = /*#__PURE__*/_interopNamespace(i7);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i6__namespace$1 = /*#__PURE__*/_interopNamespace(i6$1);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i2__namespace$1 = /*#__PURE__*/_interopNamespace(i2$1);
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i5__namespace = /*#__PURE__*/_interopNamespace(i5);

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

    var AuthBlockComponent = /** @class */ (function () {
        function AuthBlockComponent() {
        }
        return AuthBlockComponent;
    }());
    AuthBlockComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthBlockComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    AuthBlockComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: AuthBlockComponent, selector: "do-auth-block", ngImport: i0__namespace, template: "\n    <ng-content></ng-content>\n  ", isInline: true, styles: [":host{display:block;width:100%;max-width:35rem}:host ::ng-deep form{width:100%}:host ::ng-deep .label{display:block;margin-bottom:.5rem}:host ::ng-deep .forgot-password{text-decoration:none;margin-bottom:.5rem}:host ::ng-deep .caption{margin-top:.5rem}:host ::ng-deep .alert{text-align:center}:host ::ng-deep .title{margin-top:0;margin-bottom:.75rem;text-align:center}:host ::ng-deep .sub-title{margin-bottom:2rem;text-align:center}:host ::ng-deep .form-control-group{margin-bottom:2rem}:host ::ng-deep .form-control-group.accept-group{display:flex;justify-content:space-between;margin:2rem 0}:host ::ng-deep .label-with-link{display:flex;justify-content:space-between}:host ::ng-deep .links{text-align:center;margin-top:1.75rem}:host ::ng-deep .links .socials{margin-top:1.5rem}:host ::ng-deep .links .socials a{margin:0 1rem;text-decoration:none;vertical-align:middle}:host ::ng-deep .links .socials a.with-icon{font-size:2rem}:host ::ng-deep .another-action{margin-top:2rem;text-align:center}:host ::ng-deep .sign-in-or-up{margin-top:2rem;display:flex;justify-content:space-between}:host ::ng-deep nb-alert .alert-title,:host ::ng-deep nb-alert .alert-message{margin:0 0 .5rem}:host ::ng-deep nb-alert .alert-message-list{list-style-type:none;padding:0;margin:0}\n"] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthBlockComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-auth-block',
                        styleUrls: ['auth-block.component.scss'],
                        template: "\n    <ng-content></ng-content>\n  ",
                    }]
            }] });

    var AuthComponent = /** @class */ (function () {
        function AuthComponent(location) {
            this.location = location;
        }
        AuthComponent.prototype.back = function () {
            this.location.back();
            return false;
        };
        AuthComponent.prototype.ngOnDestroy = function () {
            this.alive = false;
        };
        return AuthComponent;
    }());
    AuthComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthComponent, deps: [{ token: i6__namespace.Location }], target: i0__namespace.ɵɵFactoryTarget.Component });
    AuthComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: AuthComponent, selector: "do-auth", ngImport: i0__namespace, template: "<nb-layout>\n    <nb-layout-column>\n        <nb-card>\n            <nb-card-header>\n                <nav class=\"navigation\">\n                    <a href=\"#\" (click)=\"back()\" class=\"link back-link\" aria-label=\"Back\" tabindex=\"-1\">\n                        <nb-icon icon=\"arrow-back\"></nb-icon>\n                    </a>\n                </nav>\n            </nb-card-header>\n            <nb-card-body>\n                <do-auth-block>\n                    <router-outlet></router-outlet>\n                </do-auth-block>\n            </nb-card-body>\n        </nb-card>\n    </nb-layout-column>\n</nb-layout>", styles: [":host nb-card{margin:0;height:calc(100vh - 2 * 2.5rem)}:host .navigation .link{display:inline-block;text-decoration:none}:host .navigation .link nb-icon{font-size:2rem;vertical-align:middle}:host .links nb-icon{font-size:2.5rem}:host nb-card-body{display:flex;width:100%}:host do-auth-block{margin:auto}@media (max-width: 767.98px){:host nb-card{border-radius:0;height:100vh}}:host ::ng-deep nb-layout .layout .layout-container .content .columns nb-layout-column{padding:2.5rem}@media (max-width: 767.98px){:host ::ng-deep nb-layout .layout .layout-container .content .columns nb-layout-column{padding:0}}\n"], components: [{ type: i2__namespace.NbLayoutComponent, selector: "nb-layout", inputs: ["center", "windowMode", "withScroll", "restoreScrollTop"] }, { type: i2__namespace.NbLayoutColumnComponent, selector: "nb-layout-column", inputs: ["left", "start"] }, { type: i2__namespace.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i2__namespace.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i2__namespace.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }, { type: i2__namespace.NbCardBodyComponent, selector: "nb-card-body" }, { type: AuthBlockComponent, selector: "do-auth-block" }], directives: [{ type: i1__namespace.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-auth',
                        styleUrls: ['auth.component.scss'],
                        templateUrl: 'auth.component.html',
                    }]
            }], ctorParameters: function () { return [{ type: i6__namespace.Location }]; } });

    var DoLayoutAuthModule = /** @class */ (function () {
        function DoLayoutAuthModule() {
        }
        return DoLayoutAuthModule;
    }());
    DoLayoutAuthModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoLayoutAuthModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DoLayoutAuthModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoLayoutAuthModule, declarations: [AuthComponent,
            AuthBlockComponent], imports: [i2.NbLayoutModule,
            i2.NbCardModule,
            i2.NbIconModule,
            i6.CommonModule,
            http.HttpClientModule,
            i1.RouterModule,
            doTheme.DoThemeModule], exports: [AuthComponent,
            AuthBlockComponent] });
    DoLayoutAuthModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoLayoutAuthModule, imports: [[
                i2.NbLayoutModule,
                i2.NbCardModule,
                i2.NbIconModule,
                i6.CommonModule,
                http.HttpClientModule,
                i1.RouterModule,
                doTheme.DoThemeModule,
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoLayoutAuthModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            AuthComponent,
                            AuthBlockComponent,
                        ],
                        imports: [
                            i2.NbLayoutModule,
                            i2.NbCardModule,
                            i2.NbIconModule,
                            i6.CommonModule,
                            http.HttpClientModule,
                            i1.RouterModule,
                            doTheme.DoThemeModule,
                        ],
                        exports: [
                            AuthComponent,
                            AuthBlockComponent,
                        ],
                    }]
            }] });

    var AuthIndexedDBService = /** @class */ (function (_super) {
        __extends(AuthIndexedDBService, _super);
        function AuthIndexedDBService(injector) {
            return _super.call(this, injector, 'do-core', 1, '#do-auth') || this;
        }
        AuthIndexedDBService.prototype.getEnc = function (key, storeName) {
            return __awaiter(this, void 0, void 0, function () {
                var keyEncrypted;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
                            return [4 /*yield*/, this.$dbPromise];
                        case 1: return [2 /*return*/, ((_a.sent()).get(storeName ? storeName : '#do-auth', keyEncrypted)).then(function (value) {
                                return _this.enc.decryptAES(_this.oauthResource['aes_key'], value);
                            })];
                    }
                });
            });
        };
        AuthIndexedDBService.prototype.putEnc = function (key, val, storeName) {
            return __awaiter(this, void 0, void 0, function () {
                var keyEncrypted, valueEncrypted;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
                            valueEncrypted = this.enc.encryptAES(this.oauthResource['aes_key'], val);
                            return [4 /*yield*/, this.$dbPromise];
                        case 1: return [2 /*return*/, (_a.sent()).put(storeName ? storeName : '#do-auth', valueEncrypted, keyEncrypted)];
                    }
                });
            });
        };
        AuthIndexedDBService.prototype.removeEnc = function (key, storeName) {
            return __awaiter(this, void 0, void 0, function () {
                var keyEncrypted;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
                            return [4 /*yield*/, this.$dbPromise];
                        case 1: return [2 /*return*/, (_a.sent()).delete(storeName ? storeName : '#do-auth', keyEncrypted)];
                    }
                });
            });
        };
        AuthIndexedDBService.prototype.getOfEnc = function (key, storeName) {
            var result$ = new rxjs.Subject();
            this.getEnc(key, storeName).then(function (value) {
                result$.next(value);
            });
            return result$.asObservable();
        };
        AuthIndexedDBService.prototype.putOfEnc = function (key, val, storeName) {
            var result$ = new rxjs.Subject();
            this.putEnc(key, val, storeName).then(function (value) {
                result$.next(value);
            });
            return result$.asObservable();
        };
        AuthIndexedDBService.prototype.removeOfEnc = function (key, storeName) {
            var result$ = new rxjs.Subject();
            this.removeEnc(key, storeName).then(function (value) {
                result$.next(value);
            });
            return result$.asObservable();
        };
        AuthIndexedDBService.prototype.loginStorage = function (response) {
            var _this = this;
            i4.oauthInfoModels.forEach(function (data) {
                if (response[data.key]) {
                    if (data.type === i4.TypeDataOauth.OAUTH && data.persist) {
                        if (data.enc) {
                            _this.putEnc(data.key, data.string ? response[data.key] : JSON.stringify(response[data.key])).then();
                        }
                        else {
                            _this.put(data.key, data.string ? response[data.key] : JSON.stringify(response[data.key])).then();
                        }
                    }
                }
            });
        };
        AuthIndexedDBService.prototype.logout = function () {
            var _this = this;
            i4.oauthInfoModels.forEach(function (data) {
                if (data.enc) {
                    if (data.type === i4.TypeDataOauth.OAUTH) {
                        _this.removeEnc(data.key).then();
                    }
                }
            });
            i4.additionalInfoModels.forEach(function (data) {
                if (data.enc) {
                    if (data.type === i4.TypeDataOauth.OAUTH) {
                        _this.removeEnc(data.key).then();
                    }
                }
            });
        };
        AuthIndexedDBService.prototype.isLogin = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getEnc(i4.oauthInfo.access_token)];
                        case 1:
                            if (_a.sent()) {
                                return [2 /*return*/, true];
                            }
                            i4.oauthInfoModels.forEach(function (data) {
                                _this.removeEnc(data.key).then();
                            });
                            return [2 /*return*/, false];
                    }
                });
            });
        };
        return AuthIndexedDBService;
    }(i4.IndexedDBService));
    AuthIndexedDBService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthIndexedDBService, deps: [{ token: i0__namespace.Injector }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AuthIndexedDBService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthIndexedDBService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthIndexedDBService, decorators: [{
                type: i0.Injectable,
                args: [{ providedIn: 'root' }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }]; } });

    var ProfileIndexedDBService = /** @class */ (function (_super) {
        __extends(ProfileIndexedDBService, _super);
        function ProfileIndexedDBService(injector) {
            return _super.call(this, injector, 'do-core', 1, '#do-profile') || this;
        }
        ProfileIndexedDBService.prototype.loginStorage = function (response) {
            var _this = this;
            i4.oauthInfoModels.forEach(function (data) {
                if (response[data.key]) {
                    if (data.type === i4.TypeDataOauth.PROFILE && data.persist) {
                        _this.put(data.key, data.string ? response[data.key] : JSON.stringify(response[data.key])).then();
                    }
                }
            });
        };
        ProfileIndexedDBService.prototype.logout = function () {
            var _this = this;
            i4.oauthInfoModels.forEach(function (data) {
                if (data.type === i4.TypeDataOauth.PROFILE) {
                    _this.remove(data.key);
                }
            });
            i4.additionalInfoModels.forEach(function (data) {
                if (data.type === i4.TypeDataOauth.PROFILE) {
                    _this.remove(data.key);
                }
            });
        };
        return ProfileIndexedDBService;
    }(i4.IndexedDBService));
    ProfileIndexedDBService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ProfileIndexedDBService, deps: [{ token: i0__namespace.Injector }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    ProfileIndexedDBService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ProfileIndexedDBService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ProfileIndexedDBService, decorators: [{
                type: i0.Injectable,
                args: [{ providedIn: 'root' }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }]; } });

    var SettingsIndexedDBService = /** @class */ (function (_super) {
        __extends(SettingsIndexedDBService, _super);
        function SettingsIndexedDBService(injector) {
            var _this = _super.call(this, injector, 'do-core', 1, '#do-settings') || this;
            _this.translate = injector.get(i3.TranslateService);
            return _this;
        }
        SettingsIndexedDBService.prototype.loginStorage = function (response) {
            var _this = this;
            i4.oauthInfoModels.forEach(function (data) {
                if (response[data.key]) {
                    if (data.type === i4.TypeDataOauth.SETTINGS && data.persist) {
                        _this.put(data.key, data.string ? response[data.key] : JSON.stringify(response[data.key])).then();
                        if (data.key === 'locale') {
                            _this.translate.getTranslation(response[data.key]).subscribe(function (lang) {
                                _this.translate.use(response[data.key]);
                                _this.translate.setTranslation(response[data.key], lang, true);
                            });
                        }
                    }
                }
            });
        };
        return SettingsIndexedDBService;
    }(i4.IndexedDBService));
    SettingsIndexedDBService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: SettingsIndexedDBService, deps: [{ token: i0__namespace.Injector }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    SettingsIndexedDBService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: SettingsIndexedDBService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: SettingsIndexedDBService, decorators: [{
                type: i0.Injectable,
                args: [{ providedIn: 'root' }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }]; } });

    var AuthTokenService = /** @class */ (function () {
        function AuthTokenService(httpBaseService, oauthResource, apiPath, router, authIndexedDB, profileIndexedDB, settingsIndexedDB, idle) {
            var _this = this;
            this.httpBaseService = httpBaseService;
            this.oauthResource = oauthResource;
            this.apiPath = apiPath;
            this.router = router;
            this.authIndexedDB = authIndexedDB;
            this.profileIndexedDB = profileIndexedDB;
            this.settingsIndexedDB = settingsIndexedDB;
            this.idle = idle;
            this.destroy$ = new rxjs.Subject();
            idle.setIdle(oauthResource['session_idle']);
            idle.setTimeout(oauthResource['session_timeout']);
            idle.setInterrupts(i5.DEFAULT_INTERRUPTSOURCES);
            idle.onTimeout.subscribe(function () {
                /* console.log('[Dongkap] Session Timeout'); */
                _this.logout();
            });
            idle.onIdleEnd.subscribe(function () {
                /* console.log('[Dongkap] Session Idle End'); */
            });
        }
        AuthTokenService.prototype.ngOnDestroy = function () {
            clearInterval(this.timer);
            this.destroy$.next(true);
            this.destroy$.next();
            this.destroy$.complete();
        };
        AuthTokenService.prototype.login = function (username, password) {
            var _this = this;
            this.authIndexedDB.logout();
            return this.httpBaseService.
                HTTP_BASE(this.apiPath['auth']['token'], this.getAuthBody(username, password).toString(), this.getAuthHeader())
                .pipe(operators.takeUntil(this.destroy$))
                .toPromise()
                .then(function (response) {
                _this.idle.setIdle(+response['expires_in']);
                _this.idle.watch();
                /* console.log('[DONGKAP] Session Idle Start'); */
                /* console.log('[DONGKAP] Session Timeout in ' + response['expires_in'] + ' seconds'); */
                _this.authIndexedDB.loginStorage(response);
                _this.profileIndexedDB.loginStorage(response);
                _this.settingsIndexedDB.loginStorage(response);
            });
        };
        AuthTokenService.prototype.force = function (username, password) {
            var _this = this;
            this.authIndexedDB.logout();
            return this.httpBaseService.
                HTTP_BASE(this.apiPath['auth']['force'], this.getAuthBody(username, password).toString(), this.getAuthHeader())
                .pipe(operators.takeUntil(this.destroy$))
                .toPromise()
                .then(function (response) {
                _this.idle.setIdle(+response['expires_in']);
                _this.idle.watch();
                /* console.log('[DONGKAP] Session Idle Start'); */
                /* console.log('[DONGKAP] Session Timeout in ' + response['expires_in'] + ' seconds'); */
                _this.authIndexedDB.loginStorage(response);
                _this.profileIndexedDB.loginStorage(response);
                _this.settingsIndexedDB.loginStorage(response);
            });
        };
        AuthTokenService.prototype.refresh = function () {
            var _this = this;
            return this.getBodyRefresh().pipe(operators.switchMap(function (body) {
                return _this.httpBaseService.
                    HTTP_BASE(_this.apiPath['auth']['token'], body, _this.getAuthHeader())
                    .pipe(operators.takeUntil(_this.destroy$))
                    .pipe(operators.map(function (response) {
                    _this.idle.setIdle(response['expires_in']);
                    _this.authIndexedDB.logout();
                    _this.authIndexedDB.loginStorage(response);
                }));
            }));
        };
        AuthTokenService.prototype.logout = function () {
            var _this = this;
            this.timer = setInterval(function () {
                _this.doLogout();
            }, 5000);
            this.httpBaseService.HTTP_AUTH(this.apiPath['security']['revoke'])
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function () {
                _this.doLogout();
            });
        };
        AuthTokenService.prototype.doLogout = function () {
            this.authIndexedDB.logout();
            this.profileIndexedDB.logout();
            clearInterval(this.timer);
            this.idle.stop();
            this.router.navigate(['/auth']);
        };
        AuthTokenService.prototype.isLogin = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.authIndexedDB.isLogin()];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        AuthTokenService.prototype.oauthHeaders = function (request) {
            var result$ = new rxjs.Subject();
            var httpHeaders = request.headers ? request.headers : new http.HttpHeaders();
            httpHeaders = httpHeaders.has(i4.signatureHeader.authorization) ?
                httpHeaders.delete(i4.signatureHeader.authorization) : httpHeaders;
            Promise.all([
                this.authIndexedDB.getEnc(i4.oauthInfo.token_type),
                this.authIndexedDB.getEnc(i4.oauthInfo.access_token)
            ])
                .then(function (value) {
                httpHeaders = httpHeaders.set(i4.signatureHeader.authorization, value[0] + ' ' + value[1]);
                result$.next(request.clone({ headers: httpHeaders }));
            });
            return result$.asObservable();
        };
        AuthTokenService.prototype.getAuthHeader = function () {
            return new http.HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: 'Basic ' +
                    btoa(this.oauthResource['client_id'] + ':' + this.oauthResource['client_secret']),
                Accept: 'application/json',
            });
        };
        AuthTokenService.prototype.getAuthBody = function (username, password) {
            var body = new URLSearchParams();
            body.append('client_id', this.oauthResource['client_id']);
            body.append('grant_type', this.oauthResource['grant_type']);
            body.append('username', username);
            body.append('password', password);
            body.append('platform', 'web');
            return body;
        };
        AuthTokenService.prototype.getBodyRefresh = function () {
            var _this = this;
            var result$ = new rxjs.Subject();
            this.authIndexedDB.getEnc(i4.oauthInfo.refresh_token).then(function (value) {
                var body = new URLSearchParams();
                body.append('client_id', _this.oauthResource['client_id']);
                body.append('grant_type', 'refresh_token');
                body.append('refresh_token', value);
                result$.next(body.toString());
            });
            return result$.asObservable();
        };
        return AuthTokenService;
    }());
    AuthTokenService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthTokenService, deps: [{ token: i4.HTTP_SERVICE }, { token: i4.OAUTH_INFO }, { token: i4.API }, { token: i1__namespace.Router }, { token: AuthIndexedDBService }, { token: ProfileIndexedDBService }, { token: SettingsIndexedDBService }, { token: i5__namespace.Idle }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AuthTokenService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthTokenService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthTokenService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i4.HTTP_SERVICE]
                        }] }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i4.OAUTH_INFO]
                        }] }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i4.API]
                        }] }, { type: i1__namespace.Router }, { type: AuthIndexedDBService }, { type: ProfileIndexedDBService }, { type: SettingsIndexedDBService }, { type: i5__namespace.Idle }];
        } });

    var UnauthorizeGuardService = /** @class */ (function () {
        function UnauthorizeGuardService(router, authTokenService) {
            this.router = router;
            this.authTokenService = authTokenService;
        }
        UnauthorizeGuardService.prototype.canActivate = function (route, state) {
            var _this = this;
            var result$ = new rxjs.Subject();
            this.authTokenService.isLogin().then(function (value) {
                result$.next(!value);
                if (value) {
                    _this.router.navigate(['/app']);
                }
            });
            return result$.asObservable();
        };
        return UnauthorizeGuardService;
    }());
    UnauthorizeGuardService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: UnauthorizeGuardService, deps: [{ token: i1__namespace.Router }, { token: AuthTokenService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    UnauthorizeGuardService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: UnauthorizeGuardService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: UnauthorizeGuardService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: i1__namespace.Router }, { type: AuthTokenService }]; } });

    var AuthGuardService = /** @class */ (function () {
        function AuthGuardService(router, authTokenService, authService) {
            this.router = router;
            this.authTokenService = authTokenService;
            this.authService = authService;
        }
        AuthGuardService.prototype.canActivate = function (route, state) {
            var _this = this;
            var result$ = new rxjs.Subject();
            this.authTokenService.isLogin().then(function (value) {
                result$.next(value);
                if (!value) {
                    _this.router.navigate(['/auth']);
                }
                else {
                    if (state.url !== '/auth/logout') {
                        _this.authService.loadUser();
                    }
                }
            });
            return result$.asObservable();
        };
        return AuthGuardService;
    }());
    AuthGuardService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthGuardService, deps: [{ token: i1__namespace.Router }, { token: AuthTokenService }, { token: i4.USER_SERVICE }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AuthGuardService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthGuardService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthGuardService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () {
            return [{ type: i1__namespace.Router }, { type: AuthTokenService }, { type: i4__namespace.UserService, decorators: [{
                            type: i0.Inject,
                            args: [i4.USER_SERVICE]
                        }] }];
        } });

    var TermsConditionsComponent = /** @class */ (function () {
        function TermsConditionsComponent(ref) {
            this.ref = ref;
            this.action = 'Agree';
        }
        TermsConditionsComponent.prototype.submit = function () {
            this.ref.close(true);
        };
        return TermsConditionsComponent;
    }());
    TermsConditionsComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: TermsConditionsComponent, deps: [{ token: i2__namespace.NbDialogRef }], target: i0__namespace.ɵɵFactoryTarget.Component });
    TermsConditionsComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: TermsConditionsComponent, selector: "do-terms-conditions", inputs: { content: "content", action: "action" }, ngImport: i0__namespace, template: "<nb-card [size]=\"'medium'\">\n  <nb-card-header>\n    <h2>\n      <strong>\n        {{ 'header.terms-conditions' | translate }}\n      </strong>\n    </h2>\n  </nb-card-header>\n  <nb-card-body>\n    <div [innerHTML]=\"content\"></div>\n  </nb-card-body>\n  <nb-card-footer>\n    <button\n      type=\"submit\"\n      status=\"primary\"\n      size=\"large\"\n      class=\"terms-button\"\n      (click)=\"submit()\"\n      nbButton>\n      {{ action | translate }}\n    </button>\n  </nb-card-footer>\n</nb-card>\n", styles: [".nb-theme-default :host .cancel{margin-right:1rem}.nb-theme-default :host button.terms-button{width:100%}@media (max-width: 767.98px){.nb-theme-default :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-default :host button.terms-button{font-size:.6rem}}.nb-theme-dark :host .cancel{margin-right:1rem}.nb-theme-dark :host button.terms-button{width:100%}@media (max-width: 767.98px){.nb-theme-dark :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-dark :host button.terms-button{font-size:.6rem}}.nb-theme-cosmic :host .cancel{margin-right:1rem}.nb-theme-cosmic :host button.terms-button{width:100%}@media (max-width: 767.98px){.nb-theme-cosmic :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-cosmic :host button.terms-button{font-size:.6rem}}.nb-theme-corporate :host .cancel{margin-right:1rem}.nb-theme-corporate :host button.terms-button{width:100%}@media (max-width: 767.98px){.nb-theme-corporate :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-corporate :host button.terms-button{font-size:.6rem}}\n"], components: [{ type: i2__namespace.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i2__namespace.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i2__namespace.NbCardBodyComponent, selector: "nb-card-body" }, { type: i2__namespace.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i2__namespace.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], pipes: { "translate": i3__namespace.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: TermsConditionsComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-terms-conditions',
                        templateUrl: 'terms-conditions.component.html',
                        styleUrls: ['terms-conditions.component.scss'],
                    }]
            }], ctorParameters: function () { return [{ type: i2__namespace.NbDialogRef }]; }, propDecorators: { content: [{
                    type: i0.Input
                }], action: [{
                    type: i0.Input
                }] } });

    var AuthForceService = /** @class */ (function () {
        function AuthForceService() {
        }
        AuthForceService.prototype.isEmpty = function () {
            return (this.user && this.pass) ? false : true;
        };
        AuthForceService.prototype.setData = function (user, pass) {
            this.user = user;
            this.pass = pass;
        };
        Object.defineProperty(AuthForceService.prototype, "username", {
            get: function () {
                return this.user;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AuthForceService.prototype, "password", {
            get: function () {
                return this.pass;
            },
            enumerable: false,
            configurable: true
        });
        return AuthForceService;
    }());
    AuthForceService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthForceService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AuthForceService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthForceService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthForceService, decorators: [{
                type: i0.Injectable
            }] });

    var LoginPageComponent = /** @class */ (function () {
        function LoginPageComponent(router, dialogService, translate, authTokenService, authForceService, apiPath, httpBaseService, oauthResource, route) {
            this.router = router;
            this.dialogService = dialogService;
            this.translate = translate;
            this.authTokenService = authTokenService;
            this.authForceService = authForceService;
            this.apiPath = apiPath;
            this.httpBaseService = httpBaseService;
            this.oauthResource = oauthResource;
            this.buttonLogin = false;
            this.progress = 25;
            this.destroy$ = new rxjs.Subject();
            this.formGroup = new i7.FormGroup({
                username: new i7.FormControl(),
                password: new i7.FormControl(),
            });
            this.urlAuthorizeGoogle = this.httpBaseService.API(this.apiPath['auth']['authorize']) +
                '/google?redirect_uri=' +
                (document.getElementsByTagName('base')[0].href + "auth/callback");
            this.socialLinks = [
                {
                    url: this.urlAuthorizeGoogle,
                    target: '_self',
                    icon: 'google',
                }
            ];
            if (route.snapshot.queryParams['error']) {
                this.responseError = 'error.' + route.snapshot.queryParams['error'];
            }
        }
        LoginPageComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next(true);
            this.destroy$.complete();
            this.destroy$.unsubscribe();
        };
        LoginPageComponent.prototype.login = function () {
            var _this = this;
            if (!this.formGroup.invalid) {
                this.initProgress();
                if (this.progress < 35) {
                    this.setProgress(this.progress = 35);
                }
                this.buttonLogin = true;
                this.authTokenService.login(this.formGroup.get('username').value, this.formGroup.get('password').value)
                    .then(function () {
                    _this.setProgress(_this.progress = 95);
                    _this.progress = 0;
                    _this.responseError = null;
                    _this.router.navigate(['/app/home']);
                })
                    .catch(function (error) {
                    try {
                        if (error instanceof http.HttpErrorResponse) {
                            error = error['error'];
                        }
                        var response = error;
                        _this.responseErrorCode = response === null || response === void 0 ? void 0 : response.respStatusCode;
                        _this.responseError = response === null || response === void 0 ? void 0 : response.respStatusMessage[response === null || response === void 0 ? void 0 : response.respStatusCode];
                    }
                    catch (error) {
                        _this.responseError = 'error.500';
                    }
                    _this.buttonLogin = false;
                    _this.progress = 0;
                    _this.doneProgress();
                    if (_this.responseErrorCode === i4.ResponseCode.ERR_SCR0000.toString()) {
                        _this.authForceService.setData(_this.formGroup.get('username').value, _this.formGroup.get('password').value);
                        _this.router.navigate(['/auth/force']);
                    }
                });
                if (this.progress >= 35 && this.progress < 65) {
                    this.setProgress(this.progress = 65);
                }
            }
        };
        Object.defineProperty(LoginPageComponent.prototype, "hasErrorUsername", {
            get: function () {
                return (this.formGroup.controls['username'] &&
                    this.formGroup.controls['username'].invalid &&
                    this.formGroup.controls['username'].touched);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LoginPageComponent.prototype, "hasSuccessUsername", {
            get: function () {
                return (this.formGroup.controls['username'] &&
                    this.formGroup.controls['username'].valid &&
                    this.formGroup.controls['username'].touched);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LoginPageComponent.prototype, "hasErrorPassword", {
            get: function () {
                return (this.formGroup.controls['password'] &&
                    this.formGroup.controls['password'].invalid &&
                    this.formGroup.controls['password'].touched);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LoginPageComponent.prototype, "hasSuccessPassword", {
            get: function () {
                return (this.formGroup.controls['password'] &&
                    this.formGroup.controls['password'].valid &&
                    this.formGroup.controls['password'].touched);
            },
            enumerable: false,
            configurable: true
        });
        LoginPageComponent.prototype.onClickTermsConditions = function () {
            var _this = this;
            var data = {
                parameterCode: 'TERMS_CONDITIONS.DONGKAP'
            };
            var httpHeaders = new http.HttpHeaders({
                Authorization: 'Basic ' + btoa(this.oauthResource['client_id'] + ':' + this.oauthResource['client_secret']),
                'Content-Type': 'application/json',
                'Accept-Language': this.translate.currentLang,
            });
            this.httpBaseService.HTTP_BASE(this.apiPath['openapi']['parameter'], data, httpHeaders)
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (response) {
                _this.dialogService.open(TermsConditionsComponent, {
                    context: {
                        content: response['parameterValue'],
                        action: 'Close',
                    },
                });
            });
        };
        LoginPageComponent.prototype.initProgress = function () {
            document.querySelectorAll('.pace-done').forEach(function (pace) {
                pace.className = pace.className.replace('pace-done pace-done', 'pace-running');
                pace.className = pace.className.replace('pace-done', 'pace-running');
            });
            document.querySelectorAll('.pace-inactive').forEach(function (pace) {
                pace.className = pace.className.replace('pace-inactive pace-inactive', 'pace-active');
                pace.className = pace.className.replace('pace-inactive', 'pace-active');
            });
            this.progressDOM = document.getElementsByClassName('pace-progress').item(0);
        };
        LoginPageComponent.prototype.doneProgress = function () {
            document.querySelectorAll('.pace-running').forEach(function (pace) {
                pace.className = pace.className.replace('pace-running', 'pace-done');
            });
            document.querySelectorAll('.pace-active').forEach(function (pace) {
                pace.className = pace.className.replace('pace-active', 'pace-inactive');
            });
        };
        LoginPageComponent.prototype.setProgress = function (progress) {
            this.progressDOM.style.transform = 'translate3d(' + progress + '%, 0px, 0px)';
            this.progressDOM.getAttributeNode('data-progress-text').value = progress + '%';
            this.progressDOM.getAttributeNode('data-progress').value = progress.toString();
        };
        return LoginPageComponent;
    }());
    LoginPageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: LoginPageComponent, deps: [{ token: i1__namespace.Router }, { token: i2__namespace.NbDialogService }, { token: i3__namespace.TranslateService }, { token: AuthTokenService }, { token: AuthForceService }, { token: i4.API }, { token: i4.HTTP_SERVICE }, { token: i4.OAUTH_INFO }, { token: i1__namespace.ActivatedRoute }], target: i0__namespace.ɵɵFactoryTarget.Component });
    LoginPageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: LoginPageComponent, selector: "do-login-page", ngImport: i0__namespace, template: "<h1 id=\"title\" class=\"title\">{{ 'Login' | translate }}</h1>\n<p class=\"sub-title\">{{ 'subtitle.login' | translate }}</p>\n<nb-alert *ngIf=\"responseError\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>{{ 'alert.title.login' | translate }}</b></p>\n  <ul class=\"alert-message-list\">\n    <li class=\"alert-message\">{{ responseError | translate }}</li>\n  </ul>\n</nb-alert>\n\n<form [formGroup]=\"formGroup\" (ngSubmit)=\"login()\" aria-labelledby=\"title\">\n  <div class=\"form-control-group\">\n    <label class=\"label\">{{ 'message.username-login' | translate }} :</label>\n    <input [formControlName]=\"'username'\"\n          [required]=\"true\"\n          [ngClass]=\"{\n            'status-danger': hasErrorUsername,\n            'status-success': hasSuccessUsername\n          }\"\n          name=\"username\"\n          id=\"inputUsername\"\n          placeholder=\"{{ 'message.username-login-placeholder' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"1\"\n          autofocus\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorUsername\">\n      <span class=\"caption status-danger\">{{'error.username-login' | translate}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <span class=\"label-with-link\">\n      <label class=\"label\">{{ 'Password' | translate }} :</label>\n      <a class=\"forgot-password caption-2\" routerLink=\"/auth/forgot-password\" tabindex=\"-1\">{{ 'Forgot Password' | translate}}?</a>\n    </span>\n    <input [formControlName]=\"'password'\"\n          [required]=\"true\"\n          [ngClass]=\"{\n            'status-danger': hasErrorPassword,\n            'status-success': hasSuccessPassword\n          }\"\n          name=\"password\"\n          type=\"password\"\n          id=\"inputPassword\"\n          placeholder=\"{{ 'Password' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"2\"\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorPassword\">\n      <span class=\"caption status-danger\">{{ 'error.password' | translate}}</span>\n    </ng-container>\n  </div>\n\n  <button [disabled]=\"formGroup.invalid || buttonLogin\"\n          fullWidth\n          nbButton\n          status=\"primary\"\n          size=\"large\"\n          [class.btn-pulse]=\"formGroup.invalid || buttonLogin\">\n    {{ 'Login' | translate }}\n  </button>\n</form>\n<!--\n<section *ngIf=\"socialLinks && socialLinks.length > 0\" class=\"links\" aria-label=\"Social sign in\">\n  {{ 'message.login-footer-social' | translate}}:\n  <div class=\"socials\">\n    <ng-container *ngFor=\"let socialLink of socialLinks\">\n      <a *ngIf=\"socialLink.link\"\n         [routerLink]=\"socialLink.link\"\n         [attr.target]=\"socialLink.target\"\n         [attr.class]=\"socialLink.icon\"\n         [class.with-icon]=\"socialLink.icon\">\n        <nb-icon *ngIf=\"socialLink.icon; else title\" [icon]=\"socialLink.icon\"></nb-icon>\n        <ng-template #title>{{ socialLink.title }}</ng-template>\n      </a>\n      <a *ngIf=\"socialLink.url\"\n         [attr.href]=\"socialLink.url\"\n         [attr.target]=\"socialLink.target\"\n         [attr.class]=\"socialLink.icon\"\n         [class.with-icon]=\"socialLink.icon\">\n        <nb-icon *ngIf=\"socialLink.icon; else title\" [icon]=\"socialLink.icon\"></nb-icon>\n        <ng-template #title>{{ socialLink.title }}</ng-template>\n      </a>\n    </ng-container>\n  </div>\n</section>\n\n<section class=\"another-action\" aria-label=\"Register\">\n  {{ 'message.login-footer' | translate}} <a class=\"text-link\" routerLink=\"/auth/register\">{{ 'Register' | translate}}</a>\n</section>\n-->\n<section class=\"another-action\" aria-label=\"Terms and Conditions\">\n  <span class=\"terms-conditions\" (click)=\"onClickTermsConditions()\" tabindex=\"-1\">{{ 'message.terms-conditions' | translate}}</span>\n</section>\n", styles: [".terms-conditions{color:#36f;text-decoration:underline;font-size:inherit;font-style:inherit;font-weight:inherit;line-height:inherit;cursor:pointer}.terms-conditions:hover{color:#598bff}\n"], components: [{ type: i2__namespace.NbAlertComponent, selector: "nb-alert", inputs: ["size", "status", "accent", "outline", "closable"], outputs: ["close"] }, { type: i2__namespace.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i6__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7__namespace.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i7__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i7__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2__namespace.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i7__namespace.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i7__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i7__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i7__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i6__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1__namespace.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }], pipes: { "translate": i3__namespace.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: LoginPageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-login-page',
                        styleUrls: ['login-page.component.scss'],
                        templateUrl: 'login-page.component.html',
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace.Router }, { type: i2__namespace.NbDialogService }, { type: i3__namespace.TranslateService }, { type: AuthTokenService }, { type: AuthForceService }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i4.API]
                        }] }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i4.HTTP_SERVICE]
                        }] }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i4.OAUTH_INFO]
                        }] }, { type: i1__namespace.ActivatedRoute }];
        } });

    var LogoutComponent = /** @class */ (function () {
        function LogoutComponent(authTokenService) {
            this.authTokenService = authTokenService;
            this.authTokenService.logout();
        }
        return LogoutComponent;
    }());
    LogoutComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: LogoutComponent, deps: [{ token: AuthTokenService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    LogoutComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: LogoutComponent, selector: "do-logout", ngImport: i0__namespace, template: "<p class=\"sub-title\">{{ 'message.logout' | translate }}</p>\n<div class=\"spinner-area\" [nbSpinner]=\"true\" nbSpinnerSize=\"small\" nbSpinnerStatus=\"info\">", styles: [".nb-theme-default :host .sub-title{margin:1rem}.nb-theme-default :host .spinner-area{height:22px}.nb-theme-default :host ::ng-deep nb-spinner{background:transparent!important}.nb-theme-dark :host .sub-title{margin:1rem}.nb-theme-dark :host .spinner-area{height:22px}.nb-theme-dark :host ::ng-deep nb-spinner{background:transparent!important}.nb-theme-cosmic :host .sub-title{margin:1rem}.nb-theme-cosmic :host .spinner-area{height:22px}.nb-theme-cosmic :host ::ng-deep nb-spinner{background:transparent!important}.nb-theme-corporate :host .sub-title{margin:1rem}.nb-theme-corporate :host .spinner-area{height:22px}.nb-theme-corporate :host ::ng-deep nb-spinner{background:transparent!important}\n"], directives: [{ type: i2__namespace.NbSpinnerDirective, selector: "[nbSpinner]", inputs: ["nbSpinnerStatus", "nbSpinnerSize", "nbSpinner", "nbSpinnerMessage"] }], pipes: { "translate": i3__namespace.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: LogoutComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-logout',
                        styleUrls: ['logout.component.scss'],
                        templateUrl: 'logout.component.html',
                    }]
            }], ctorParameters: function () { return [{ type: AuthTokenService }]; } });

    var ForceLoginPageComponent = /** @class */ (function () {
        function ForceLoginPageComponent(router, authTokenService, authForceService, toastr) {
            this.router = router;
            this.authTokenService = authTokenService;
            this.authForceService = authForceService;
            this.toastr = toastr;
            this.buttonForceLogin = false;
            this.progress = 25;
            this.destroy$ = new rxjs.Subject();
            if (this.authForceService.isEmpty()) {
                this.router.navigate(['/auth']);
            }
        }
        ForceLoginPageComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next(true);
            this.destroy$.complete();
            this.destroy$.unsubscribe();
        };
        ForceLoginPageComponent.prototype.forcelogin = function () {
            var _this = this;
            if (!this.authForceService.isEmpty()) {
                this.initProgress();
                if (this.progress < 35) {
                    this.setProgress(this.progress = 35);
                }
                this.buttonForceLogin = true;
                this.authTokenService.force(this.authForceService.username, this.authForceService.password)
                    .then(function () {
                    _this.setProgress(_this.progress = 95);
                    _this.progress = 0;
                    _this.responseError = null;
                    _this.router.navigate(['/app/home']);
                })
                    .catch(function (error) {
                    try {
                        if (error instanceof http.HttpErrorResponse) {
                            error = error['error'];
                        }
                        var response = error;
                        _this.responseError = response === null || response === void 0 ? void 0 : response.respStatusMessage[response === null || response === void 0 ? void 0 : response.respStatusCode];
                    }
                    catch (error) {
                        _this.responseError = 'error.500';
                    }
                    _this.toastr.showI18n(_this.responseError, true, null, 'danger');
                    _this.buttonForceLogin = false;
                    _this.progress = 0;
                    _this.doneProgress();
                });
                if (this.progress >= 35 && this.progress < 65) {
                    this.setProgress(this.progress = 65);
                }
            }
        };
        ForceLoginPageComponent.prototype.initProgress = function () {
            document.querySelectorAll('.pace-done').forEach(function (pace) {
                pace.className = pace.className.replace('pace-done pace-done', 'pace-running');
                pace.className = pace.className.replace('pace-done', 'pace-running');
            });
            document.querySelectorAll('.pace-inactive').forEach(function (pace) {
                pace.className = pace.className.replace('pace-inactive pace-inactive', 'pace-active');
                pace.className = pace.className.replace('pace-inactive', 'pace-active');
            });
            this.progressDOM = document.getElementsByClassName('pace-progress').item(0);
        };
        ForceLoginPageComponent.prototype.doneProgress = function () {
            document.querySelectorAll('.pace-running').forEach(function (pace) {
                pace.className = pace.className.replace('pace-running', 'pace-done');
            });
            document.querySelectorAll('.pace-active').forEach(function (pace) {
                pace.className = pace.className.replace('pace-active', 'pace-inactive');
            });
        };
        ForceLoginPageComponent.prototype.setProgress = function (progress) {
            this.progressDOM.style.transform = 'translate3d(' + progress + '%, 0px, 0px)';
            this.progressDOM.getAttributeNode('data-progress-text').value = progress + '%';
            this.progressDOM.getAttributeNode('data-progress').value = progress.toString();
        };
        return ForceLoginPageComponent;
    }());
    ForceLoginPageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ForceLoginPageComponent, deps: [{ token: i1__namespace.Router }, { token: AuthTokenService }, { token: AuthForceService }, { token: i2__namespace$1.DoToastrService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    ForceLoginPageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ForceLoginPageComponent, selector: "do-force-login-page", ngImport: i0__namespace, template: "<h1 id=\"title\" class=\"title\">{{ 'Login Warning' | translate }}</h1>\n<p class=\"sub-title\">{{ 'subtitle.force' | translate }}</p>\n\n<div class=\"form-control-group\">\n  <button fullWidth\n          nbButton\n          status=\"primary\"\n          size=\"large\"\n          [class.btn-pulse]=\"buttonForceLogin\"\n          [disabled]=\"buttonForceLogin\"\n          (click)=\"forcelogin()\">\n    {{ 'Force Login' | translate }}\n  </button>\n</div>\n\n<section class=\"sign-in-or-up\" aria-label=\"Sign in or sign up\">\n  <p>\n    {{ 'subtitle.force-footer' | translate }} <a class=\"text-link\" routerLink=\"/auth/login\">{{ 'Click here' | translate }}</a>\n  </p>\n  <!--\n  <p><a routerLink=\"/auth/register\" class=\"text-link\">{{ 'Register' | translate}}</a></p>\n  -->\n</section>\n", styles: [""], components: [{ type: i2__namespace.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i1__namespace.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }], pipes: { "translate": i3__namespace.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ForceLoginPageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-force-login-page',
                        styleUrls: ['./force-login-page.component.scss'],
                        templateUrl: 'force-login-page.component.html',
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.Router }, { type: AuthTokenService }, { type: AuthForceService }, { type: i2__namespace$1.DoToastrService }]; } });

    var RequestForgotPageComponent = /** @class */ (function () {
        function RequestForgotPageComponent(router, toastr, translate, httpBaseService, oauthResource, apiPath) {
            this.router = router;
            this.toastr = toastr;
            this.translate = translate;
            this.httpBaseService = httpBaseService;
            this.oauthResource = oauthResource;
            this.apiPath = apiPath;
            this.buttonForgotPassword = false;
            this.progressBar = 25;
            this.patternEmail = i4.Pattern.EMAIL;
            this.form = new i7.FormGroup({
                email: new i7.FormControl(),
            });
            this.destroy$ = new rxjs.Subject();
        }
        RequestForgotPageComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next(true);
            this.destroy$.complete();
            this.destroy$.unsubscribe();
        };
        RequestForgotPageComponent.prototype.forgotPassword = function () {
            var _this = this;
            if (!this.form.invalid) {
                this.initProgress();
                if (this.progressBar < 35) {
                    this.setProgress(this.progressBar = 35);
                }
                this.responseError = null;
                // const urlForgotPassword: string = `${document.getElementsByTagName('base')[0].href}auth/forgot-password`;
                var data = {
                    email: this.form.controls['email'].value,
                };
                var httpHeaders = new http.HttpHeaders({
                    Authorization: 'Basic ' + btoa(this.oauthResource['client_id'] + ':' + this.oauthResource['client_secret']),
                    'Content-Type': 'application/json',
                    'Accept-Language': this.translate.currentLang,
                });
                this.buttonForgotPassword = true;
                this.httpBaseService.HTTP_BASE(this.apiPath['auth']['request-forgot-password'], data, httpHeaders)
                    .pipe(operators.takeUntil(this.destroy$))
                    .subscribe(function (response) {
                    if (response) {
                        _this.toastr.showI18n(response.respStatusMessage[response.respStatusCode]);
                        _this.setProgress(_this.progressBar = 95);
                        _this.progressBar = 0;
                        if (response.respStatusCode === i4.ResponseCode.OK_REQUEST_FORGOT_PASSWORD) {
                            _this.router.navigate(['/auth/login']);
                        }
                        else {
                            _this.form.reset();
                            _this.buttonForgotPassword = false;
                        }
                    }
                    else {
                        _this.form.reset();
                        _this.buttonForgotPassword = false;
                    }
                }, function (error) {
                    _this.buttonForgotPassword = false;
                    _this.progressBar = 0;
                    _this.doneProgress();
                    if (!(error instanceof http.HttpErrorResponse)) {
                        if (error['respStatusCode']) {
                            _this.responseError = error['respStatusMessage'][error['respStatusCode']];
                        }
                    }
                    else {
                    }
                });
            }
        };
        Object.defineProperty(RequestForgotPageComponent.prototype, "hasErrorEmail", {
            get: function () {
                return (this.form.controls['email'] &&
                    this.form.controls['email'].invalid &&
                    this.form.controls['email'].touched);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RequestForgotPageComponent.prototype, "hasSuccessEmail", {
            get: function () {
                return (this.form.controls['email'] &&
                    this.form.controls['email'].valid &&
                    this.form.controls['email'].touched);
            },
            enumerable: false,
            configurable: true
        });
        RequestForgotPageComponent.prototype.initProgress = function () {
            document.querySelectorAll('.pace-done').forEach(function (pace) {
                pace.className = pace.className.replace('pace-done pace-done', 'pace-running');
                pace.className = pace.className.replace('pace-done', 'pace-running');
            });
            document.querySelectorAll('.pace-inactive').forEach(function (pace) {
                pace.className = pace.className.replace('pace-inactive pace-inactive', 'pace-active');
                pace.className = pace.className.replace('pace-inactive', 'pace-active');
            });
            this.progressDOM = document.getElementsByClassName('pace-progress').item(0);
        };
        RequestForgotPageComponent.prototype.doneProgress = function () {
            document.querySelectorAll('.pace-running').forEach(function (pace) {
                pace.className = pace.className.replace('pace-running', 'pace-done');
            });
            document.querySelectorAll('.pace-active').forEach(function (pace) {
                pace.className = pace.className.replace('pace-active', 'pace-inactive');
            });
        };
        RequestForgotPageComponent.prototype.setProgress = function (progress) {
            this.progressDOM.style.transform = 'translate3d(' + progress + '%, 0px, 0px)';
            this.progressDOM.getAttributeNode('data-progress-text').value = progress + '%';
            this.progressDOM.getAttributeNode('data-progress').value = progress.toString();
        };
        return RequestForgotPageComponent;
    }());
    RequestForgotPageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: RequestForgotPageComponent, deps: [{ token: i1__namespace.Router }, { token: i2__namespace$1.DoToastrService }, { token: i3__namespace.TranslateService }, { token: i4.HTTP_SERVICE }, { token: i4.OAUTH_INFO }, { token: i4.API }], target: i0__namespace.ɵɵFactoryTarget.Component });
    RequestForgotPageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: RequestForgotPageComponent, selector: "do-request-forgot-page", ngImport: i0__namespace, template: "<h1 id=\"title\" class=\"title\">{{ 'Forgot Password' | translate }}</h1>\n<p class=\"sub-title\">{{ 'subtitle.forgot-password' | translate }}</p>\n\n<nb-alert *ngIf=\"responseError\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>{{ 'alert.title.forgot' | translate }}</b></p>\n  <ul class=\"alert-message-list\">\n    <li class=\"alert-message\">{{ responseError }}</li>\n  </ul>\n</nb-alert>\n\n<form [formGroup]=\"form\" (ngSubmit)=\"forgotPassword()\" aria-labelledby=\"title\">\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-name\">{{ 'message.email-forgot-password' | translate }} :</label>\n    <input [formControlName]=\"'email'\"\n          [required]=\"true\"\n          minlength=\"4\"\n          maxlength=\"50\"\n          [pattern]=\"patternEmail\"\n          [ngClass]=\"{\n            'status-danger': hasErrorEmail,\n            'status-success': hasSuccessEmail\n          }\"\n          name=\"email\"\n          id=\"inputEmail\"\n          placeholder=\"{{ 'Email' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"1\"\n          autofocus\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorEmail\">\n      <span class=\"caption status-danger\">{{'error.pattern.email' | translate}}</span>\n    </ng-container>\n  </div>\n\n  <button [disabled]=\"form.invalid || buttonForgotPassword\"\n          fullWidth\n          nbButton\n          status=\"primary\"\n          size=\"large\"\n          [class.btn-pulse]=\"form.invalid || buttonForgotPassword\">\n    {{ 'Send' | translate }}\n  </button>\n</form>\n\n<section class=\"sign-in-or-up\" aria-label=\"Sign in or sign up\">\n  <p><a class=\"text-link\" routerLink=\"/auth/login\">{{ 'message.forgot-password-link' | translate}}</a></p>\n  <!--\n  <p><a routerLink=\"/auth/register\" class=\"text-link\">{{ 'Register' | translate}}</a></p>\n  -->\n</section>\n", styles: [""], components: [{ type: i2__namespace.NbAlertComponent, selector: "nb-alert", inputs: ["size", "status", "accent", "outline", "closable"], outputs: ["close"] }, { type: i2__namespace.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i6__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7__namespace.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i7__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i7__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2__namespace.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i7__namespace.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i7__namespace.MinLengthValidator, selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]", inputs: ["minlength"] }, { type: i7__namespace.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { type: i7__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i7__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i7__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i7__namespace.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { type: i6__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1__namespace.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }], pipes: { "translate": i3__namespace.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: RequestForgotPageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-request-forgot-page',
                        styleUrls: ['request-forgot-page.component.scss'],
                        templateUrl: 'request-forgot-page.component.html',
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace.Router }, { type: i2__namespace$1.DoToastrService }, { type: i3__namespace.TranslateService }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i4.HTTP_SERVICE]
                        }] }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i4.OAUTH_INFO]
                        }] }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i4.API]
                        }] }];
        } });

    var ForgotPageComponent = /** @class */ (function () {
        function ForgotPageComponent(router, route, toastr, translate, enc, httpBaseService, oauthResource, apiPath) {
            this.router = router;
            this.route = route;
            this.toastr = toastr;
            this.translate = translate;
            this.enc = enc;
            this.httpBaseService = httpBaseService;
            this.oauthResource = oauthResource;
            this.apiPath = apiPath;
            this.buttonForgotPassword = false;
            this.progressBar = 25;
            this.patternPassword = i4.Pattern.PASSWORD_MEDIUM;
            this.form = new i7.FormGroup({
                newPassword: new i7.FormControl(),
                confirmPassword: new i7.FormControl(),
            });
            this.destroy$ = new rxjs.Subject();
            if (this.route.snapshot.params['id'] !== null && this.route.snapshot.params['code'] !== null) {
                this.verificationId = this.route.snapshot.params['id'];
                this.verificationCode = this.route.snapshot.params['code'];
            }
            else {
                this.router.navigate(['/auth/login']);
            }
        }
        ForgotPageComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next(true);
            this.destroy$.complete();
            this.destroy$.unsubscribe();
        };
        ForgotPageComponent.prototype.forgotPassword = function () {
            var _this = this;
            if (!this.form.invalid) {
                this.initProgress();
                if (this.progressBar < 35) {
                    this.setProgress(this.progressBar = 35);
                }
                this.responseError = null;
                var newPassword = this.enc.encryptAES(this.oauthResource['aes_key'], this.form.controls['newPassword'].value);
                var confirmPassword = this.enc.encryptAES(this.oauthResource['aes_key'], this.form.controls['confirmPassword'].value);
                var data = {
                    verificationId: this.verificationId,
                    verificationCode: this.verificationCode,
                    newPassword: newPassword,
                    confirmPassword: confirmPassword,
                };
                var httpHeaders = new http.HttpHeaders({
                    Authorization: 'Basic ' + btoa(this.oauthResource['client_id'] + ':' + this.oauthResource['client_secret']),
                    'Content-Type': 'application/json',
                    'Accept-Language': this.translate.currentLang,
                });
                this.buttonForgotPassword = true;
                this.httpBaseService.HTTP_BASE(this.apiPath['auth']['forgot-password'], data, httpHeaders)
                    .pipe(operators.takeUntil(this.destroy$))
                    .subscribe(function (response) {
                    if (response) {
                        _this.toastr.showI18n(response.respStatusMessage[response.respStatusCode]);
                        _this.setProgress(_this.progressBar = 95);
                        _this.progressBar = 0;
                        if (response.respStatusCode === i4.ResponseCode.OK_FORGOT_PASSWORD) {
                            _this.router.navigate(['/auth/login']);
                        }
                        else {
                            _this.form.reset();
                            _this.buttonForgotPassword = false;
                        }
                    }
                    else {
                        _this.form.reset();
                        _this.buttonForgotPassword = false;
                    }
                }, function (error) {
                    _this.buttonForgotPassword = false;
                    _this.progressBar = 0;
                    _this.doneProgress();
                    if (!(error instanceof http.HttpErrorResponse)) {
                        if (error['respStatusCode']) {
                            _this.responseError = error['respStatusMessage'][error['respStatusCode']];
                        }
                    }
                });
            }
        };
        Object.defineProperty(ForgotPageComponent.prototype, "hasErrorNewPassword", {
            get: function () {
                if (this.form.controls['newPassword'].errors &&
                    this.form.controls['newPassword'].invalid &&
                    this.form.controls['newPassword'].touched) {
                    this.errorMsgNewPassword = 'error.pattern.Password';
                }
                else {
                    this.errorMsgNewPassword = null;
                }
                return (this.form.controls['newPassword'] &&
                    this.form.controls['newPassword'].invalid &&
                    this.form.controls['newPassword'].touched);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ForgotPageComponent.prototype, "hasSuccessNewPassword", {
            get: function () {
                return (this.form.controls['newPassword'] &&
                    this.form.controls['newPassword'].valid &&
                    this.form.controls['newPassword'].touched);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ForgotPageComponent.prototype, "hasErrorConfirmPassword", {
            get: function () {
                if (this.form.controls['confirmPassword'].errors &&
                    this.form.controls['confirmPassword'].invalid &&
                    this.form.controls['confirmPassword'].touched) {
                    this.errorMsgConfirmPassword = 'error.equal.confirmPassword';
                }
                else {
                    if (this.form.controls['newPassword'].value !== this.form.controls['confirmPassword'].value) {
                        this.errorMsgConfirmPassword = 'error.equal.confirmPassword';
                        this.form.controls['confirmPassword'].setValidators([confirmPasswordValidator$2(this.form)]);
                        this.form.controls['confirmPassword'].updateValueAndValidity();
                    }
                    else {
                        this.errorMsgConfirmPassword = null;
                    }
                }
                return (this.form.controls['confirmPassword'] &&
                    this.form.controls['confirmPassword'].invalid &&
                    this.form.controls['confirmPassword'].touched);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ForgotPageComponent.prototype, "hasSuccessConfirmPassword", {
            get: function () {
                return (this.form.controls['confirmPassword'] &&
                    this.form.controls['confirmPassword'].valid &&
                    this.form.controls['confirmPassword'].touched);
            },
            enumerable: false,
            configurable: true
        });
        ForgotPageComponent.prototype.initProgress = function () {
            document.querySelectorAll('.pace-done').forEach(function (pace) {
                pace.className = pace.className.replace('pace-done pace-done', 'pace-running');
                pace.className = pace.className.replace('pace-done', 'pace-running');
            });
            document.querySelectorAll('.pace-inactive').forEach(function (pace) {
                pace.className = pace.className.replace('pace-inactive pace-inactive', 'pace-active');
                pace.className = pace.className.replace('pace-inactive', 'pace-active');
            });
            this.progressDOM = document.getElementsByClassName('pace-progress').item(0);
        };
        ForgotPageComponent.prototype.doneProgress = function () {
            document.querySelectorAll('.pace-running').forEach(function (pace) {
                pace.className = pace.className.replace('pace-running', 'pace-done');
            });
            document.querySelectorAll('.pace-active').forEach(function (pace) {
                pace.className = pace.className.replace('pace-active', 'pace-inactive');
            });
        };
        ForgotPageComponent.prototype.setProgress = function (progress) {
            this.progressDOM.style.transform = 'translate3d(' + progress + '%, 0px, 0px)';
            this.progressDOM.getAttributeNode('data-progress-text').value = progress + '%';
            this.progressDOM.getAttributeNode('data-progress').value = progress.toString();
        };
        return ForgotPageComponent;
    }());
    ForgotPageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ForgotPageComponent, deps: [{ token: i1__namespace.Router }, { token: i1__namespace.ActivatedRoute }, { token: i2__namespace$1.DoToastrService }, { token: i3__namespace.TranslateService }, { token: i4__namespace.EncryptionService }, { token: i4.HTTP_SERVICE }, { token: i4.OAUTH_INFO }, { token: i4.API }], target: i0__namespace.ɵɵFactoryTarget.Component });
    ForgotPageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ForgotPageComponent, selector: "do-forgot-page", ngImport: i0__namespace, template: "<h1 id=\"title\" class=\"title\">{{ 'Reset Password' | translate }}</h1>\n<p class=\"sub-title\">{{ 'subtitle.reset-password' | translate }}</p>\n\n<nb-alert *ngIf=\"responseError\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>{{ 'alert.title.reset-password' | translate }}</b></p>\n  <ul class=\"alert-message-list\">\n    <li class=\"alert-message\">{{ responseError }}</li>\n  </ul>\n</nb-alert>\n\n<form [formGroup]=\"form\" (ngSubmit)=\"forgotPassword()\" aria-labelledby=\"title\">\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-newpassword\">{{ 'New Password' | translate }}* :</label>\n    <input [formControlName]=\"'newPassword'\"\n          [required]=\"true\"\n          minlength=\"8\"\n          maxlength=\"50\"\n          [pattern]=\"patternPassword\"\n          [ngClass]=\"{\n            'status-danger': hasErrorNewPassword,\n            'status-success': hasSuccessNewPassword\n          }\"\n          name=\"newPassword\"\n          type=\"password\"\n          id=\"inputNewPassword\"\n          placeholder=\"{{ 'New Password' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"4\"\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorNewPassword\">\n      <span class=\"caption status-danger\">{{ errorMsgNewPassword | translate}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-confirmpassword\">{{ 'Confirm Password' | translate }}* :</label>\n    <input [formControlName]=\"'confirmPassword'\"\n          [required]=\"true\"\n          minlength=\"8\"\n          maxlength=\"50\"\n          [ngClass]=\"{\n            'status-danger': hasErrorConfirmPassword,\n            'status-success': hasSuccessConfirmPassword\n          }\"\n          name=\"confirmPassword\"\n          type=\"password\"\n          id=\"inputConfirmPassword\"\n          placeholder=\"{{ 'Confirm Password' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"5\"\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorConfirmPassword\">\n      <span class=\"caption status-danger\">{{ errorMsgConfirmPassword | translate}}</span>\n    </ng-container>\n  </div>\n\n  <button [disabled]=\"form.invalid || buttonForgotPassword\"\n          fullWidth\n          nbButton\n          status=\"primary\"\n          size=\"large\"\n          [class.btn-pulse]=\"form.invalid || buttonForgotPassword\">\n    {{ 'Reset Password' | translate }}\n  </button>\n</form>\n\n<section class=\"another-action\" aria-label=\"Sign in\">\n  {{ 'message.reset-password-footer' | translate}} <a class=\"text-link\" routerLink=\"/auth/login\" tabindex=\"-1\">{{ 'Login' | translate}}</a>\n</section>\n", styles: [""], components: [{ type: i2__namespace.NbAlertComponent, selector: "nb-alert", inputs: ["size", "status", "accent", "outline", "closable"], outputs: ["close"] }, { type: i2__namespace.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i6__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7__namespace.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i7__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i7__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2__namespace.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i7__namespace.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i7__namespace.MinLengthValidator, selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]", inputs: ["minlength"] }, { type: i7__namespace.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { type: i7__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i7__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i7__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i7__namespace.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { type: i6__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1__namespace.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }], pipes: { "translate": i3__namespace.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ForgotPageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-forgot-page',
                        styleUrls: ['forgot-page.component.scss'],
                        templateUrl: 'forgot-page.component.html',
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace.Router }, { type: i1__namespace.ActivatedRoute }, { type: i2__namespace$1.DoToastrService }, { type: i3__namespace.TranslateService }, { type: i4__namespace.EncryptionService }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i4.HTTP_SERVICE]
                        }] }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i4.OAUTH_INFO]
                        }] }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i4.API]
                        }] }];
        } });
    function confirmPasswordValidator$2(form) {
        return function (control) {
            if (form.controls) {
                if (form.controls['newPassword'].value !== form.controls['confirmPassword'].value) {
                    return { equal: true };
                }
            }
            return null;
        };
    }

    var RegisterPageComponent = /** @class */ (function () {
        function RegisterPageComponent(router, enc, toastr, dialogService, translate, httpBaseService, oauthResource, apiPath) {
            this.router = router;
            this.enc = enc;
            this.toastr = toastr;
            this.dialogService = dialogService;
            this.translate = translate;
            this.httpBaseService = httpBaseService;
            this.oauthResource = oauthResource;
            this.apiPath = apiPath;
            this.patternFullname = i4.Pattern.FULLNAME;
            this.patternUsername = i4.Pattern.USERNAME;
            this.patternEmail = i4.Pattern.EMAIL;
            this.patternPassword = i4.Pattern.PASSWORD_MEDIUM;
            this.minlengthUsername = 4;
            this.minlengthEmail = 5;
            this.form = new i7.FormGroup({
                fullname: new i7.FormControl(),
                username: new i7.FormControl(),
                email: new i7.FormControl(),
                password: new i7.FormControl(),
                confirmPassword: new i7.FormControl(),
                terms: new i7.FormControl(),
                recaptcha: new i7.FormControl(),
            });
            this.buttonRegister = false;
            this.progressBar = 25;
            this.isCheckUsername = true;
            this.isCheckEmail = true;
            this.destroy$ = new rxjs.Subject();
        }
        RegisterPageComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next(true);
            this.destroy$.complete();
            this.destroy$.unsubscribe();
        };
        RegisterPageComponent.prototype.register = function () {
            var _this = this;
            if (!this.form.invalid) {
                this.initProgress();
                if (this.progressBar < 35) {
                    this.setProgress(this.progressBar = 35);
                }
                this.responseError = null;
                var data = this.form.value;
                data['password'] = this.enc.encryptAES(this.oauthResource['aes_key'], this.form.controls['password'].value);
                data['confirmPassword'] = this.enc.encryptAES(this.oauthResource['aes_key'], this.form.controls['confirmPassword'].value);
                var httpHeaders = new http.HttpHeaders({
                    Authorization: 'Basic ' + btoa(this.oauthResource['client_id'] + ':' + this.oauthResource['client_secret']),
                    'Content-Type': 'application/json',
                    'Accept-Language': this.translate.currentLang,
                });
                this.buttonRegister = true;
                this.httpBaseService.HTTP_BASE(this.apiPath['auth']['signup'], data, httpHeaders)
                    .pipe(operators.takeUntil(this.destroy$))
                    .subscribe(function (response) {
                    if (response) {
                        _this.toastr.showI18n(response.respStatusMessage[response.respStatusCode]);
                        _this.setProgress(_this.progressBar = 95);
                        _this.progressBar = 0;
                        if (response.respStatusCode === i4.ResponseCode.OK_REGISTERED) {
                            _this.router.navigate(['/auth/login']);
                        }
                        else {
                            _this.form.reset();
                            _this.buttonRegister = false;
                        }
                    }
                    else {
                        _this.form.reset();
                        _this.buttonRegister = false;
                    }
                }, function (error) {
                    _this.buttonRegister = false;
                    _this.progressBar = 0;
                    _this.doneProgress();
                    if (!(error instanceof http.HttpErrorResponse)) {
                        if (error['respStatusCode']) {
                            switch (error['respStatusCode']) {
                                case i4.ResponseCode.ERR_SCR0005.toString():
                                    _this.form.controls['password'].setErrors({
                                        invalid: true,
                                    });
                                    break;
                                case i4.ResponseCode.ERR_SCR0011.toString():
                                    _this.form.controls['confirmPassword'].setErrors({
                                        equal: true,
                                    });
                                    break;
                                default:
                                    break;
                            }
                            _this.responseError = error['respStatusMessage'][error['respStatusCode']];
                        }
                    }
                    else {
                    }
                });
            }
        };
        Object.defineProperty(RegisterPageComponent.prototype, "hasErrorFullname", {
            get: function () {
                if (this.form.controls['fullname'].errors && this.form.controls['fullname'].invalid && this.form.controls['fullname'].touched) {
                    if (this.form.controls['fullname'].errors['required']) {
                        this.errorMsgFullname = 'error.fullname.required';
                    }
                    else {
                        this.errorMsgFullname = 'error.fullname.invalid';
                    }
                }
                else {
                    this.errorMsgFullname = null;
                }
                return (this.form.controls['fullname'] &&
                    this.form.controls['fullname'].invalid &&
                    this.form.controls['fullname'].touched);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RegisterPageComponent.prototype, "hasSuccessFullname", {
            get: function () {
                return (this.form.controls['fullname'] &&
                    this.form.controls['fullname'].valid &&
                    this.form.controls['fullname'].touched);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RegisterPageComponent.prototype, "hasErrorUsername", {
            get: function () {
                if (this.form.controls['username'].errors && this.form.controls['username'].invalid && this.form.controls['username'].touched) {
                    if (this.form.controls['username'].errors['required']) {
                        this.errorMsgUsername = 'error.username.required';
                    }
                    else if (this.form.controls['username'].errors['not-available']) {
                        this.errorMsgUsername = 'error.username.not-available';
                        this.paramMsgUsername = {
                            value: this.form.controls['username'].value,
                        };
                    }
                    else if (this.form.controls['username'].errors['timeout']) {
                        this.errorMsgUsername = 'error.0';
                    }
                    else if (this.form.controls['username'].errors['error']) {
                        this.errorMsgUsername = 'error.500';
                    }
                    else {
                        this.errorMsgUsername = 'error.username.invalid';
                    }
                }
                else {
                    if ((this.form.controls['username'].touched || this.form.controls['username'].dirty) && this.isCheckUsername) {
                        this.isCheckUsername = false;
                        this.form.controls['username'].setAsyncValidators([userValidator(this.oauthResource, this.httpBaseService, this.apiPath)]);
                        this.form.controls['username'].updateValueAndValidity();
                    }
                    this.errorMsgUsername = null;
                }
                return (this.form.controls['username'] &&
                    this.form.controls['username'].invalid &&
                    this.form.controls['username'].touched);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RegisterPageComponent.prototype, "hasSuccessUsername", {
            get: function () {
                return (this.form.controls['username'] &&
                    this.form.controls['username'].valid &&
                    this.form.controls['username'].touched);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RegisterPageComponent.prototype, "hasErrorEmail", {
            get: function () {
                if (this.form.controls['email'].errors && this.form.controls['email'].invalid && this.form.controls['email'].touched) {
                    if (this.form.controls['email'].errors['required']) {
                        this.errorMsgEmail = 'error.email.required';
                    }
                    else if (this.form.controls['email'].errors['not-available']) {
                        this.errorMsgEmail = 'error.email.not-available';
                        this.paramMsgEmail = {
                            value: this.form.controls['email'].value,
                        };
                    }
                    else if (this.form.controls['email'].errors['timeout']) {
                        this.errorMsgEmail = 'error.0';
                    }
                    else if (this.form.controls['email'].errors['error']) {
                        this.errorMsgEmail = 'error.500';
                    }
                    else {
                        this.errorMsgEmail = 'error.email.invalid';
                    }
                }
                else {
                    if ((this.form.controls['email'].touched || this.form.controls['email'].dirty) && this.isCheckEmail) {
                        this.isCheckEmail = false;
                        this.form.controls['email'].setAsyncValidators([userValidator(this.oauthResource, this.httpBaseService, this.apiPath)]);
                        this.form.controls['email'].updateValueAndValidity();
                    }
                    this.errorMsgEmail = null;
                }
                return (this.form.controls['email'] &&
                    this.form.controls['email'].invalid &&
                    this.form.controls['email'].touched);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RegisterPageComponent.prototype, "hasSuccessEmail", {
            get: function () {
                return (this.form.controls['email'] &&
                    this.form.controls['email'].valid &&
                    this.form.controls['email'].touched);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RegisterPageComponent.prototype, "hasErrorPassword", {
            get: function () {
                if (this.form.controls['password'].errors && this.form.controls['password'].invalid && this.form.controls['password'].touched) {
                    this.errorMsgPassword = 'error.pattern.Password';
                }
                else {
                    this.errorMsgPassword = null;
                }
                return (this.form.controls['password'] &&
                    this.form.controls['password'].invalid &&
                    this.form.controls['password'].touched);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RegisterPageComponent.prototype, "hasSuccessPassword", {
            get: function () {
                return (this.form.controls['password'] &&
                    this.form.controls['password'].valid &&
                    this.form.controls['password'].touched);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RegisterPageComponent.prototype, "hasErrorConfirmPassword", {
            get: function () {
                if (this.form.controls['confirmPassword'].errors &&
                    this.form.controls['confirmPassword'].invalid &&
                    this.form.controls['confirmPassword'].touched) {
                    this.errorMsgConfirmPassword = 'error.equal.confirmPassword-register';
                }
                else {
                    if (this.form.controls['password'].value !== this.form.controls['confirmPassword'].value) {
                        this.errorMsgConfirmPassword = 'error.equal.confirmPassword-register';
                        this.form.controls['confirmPassword'].setValidators([confirmPasswordValidator$1(this.form)]);
                        this.form.controls['confirmPassword'].updateValueAndValidity();
                    }
                    else {
                        this.errorMsgConfirmPassword = null;
                    }
                }
                return (this.form.controls['confirmPassword'] &&
                    this.form.controls['confirmPassword'].invalid &&
                    this.form.controls['confirmPassword'].touched);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RegisterPageComponent.prototype, "hasSuccessConfirmPassword", {
            get: function () {
                return (this.form.controls['confirmPassword'] &&
                    this.form.controls['confirmPassword'].valid &&
                    this.form.controls['confirmPassword'].touched);
            },
            enumerable: false,
            configurable: true
        });
        RegisterPageComponent.prototype.onCheckedChange = function () {
            if (!this.form.controls['terms'].value) {
                this.form.controls['terms'].setValue(null);
            }
        };
        RegisterPageComponent.prototype.onClickTermsConditions = function () {
            var _this = this;
            var data = {
                parameterCode: 'TERMS_CONDITIONS.DONGKAP'
            };
            var httpHeaders = new http.HttpHeaders({
                Authorization: 'Basic ' + btoa(this.oauthResource['client_id'] + ':' + this.oauthResource['client_secret']),
                'Content-Type': 'application/json',
                'Accept-Language': this.translate.currentLang,
            });
            this.httpBaseService.HTTP_BASE(this.apiPath['openapi']['parameter'], data, httpHeaders)
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (response) {
                _this.dialogService.open(TermsConditionsComponent, {
                    context: {
                        content: response['parameterValue'],
                    },
                })
                    .onClose.subscribe(function (terms) {
                    if (terms) {
                        _this.form.controls['terms'].setValue(true);
                    }
                });
            });
        };
        RegisterPageComponent.prototype.onKeyDownUsername = function (event) {
            if (event.key) {
                if (!event.key.match(/[!@#$%^&*()?":{}|<>\[\];\\=~`]/g)) {
                    if (([
                        'TAB',
                        'ESCAPE',
                        'ENTER',
                        'HOME',
                        'END',
                        'ARROWLEFT',
                        'ARROWRIGHT',
                        'ARROWUP',
                        'ARROWDOWN',
                        'PAGEUP',
                        'PAGEDOWN'
                    ].indexOf(event.key.toUpperCase()) === -1) &&
                        !event.ctrlKey && !event.metaKey && !event.altKey) {
                        this.isCheckUsername = true;
                    }
                }
            }
        };
        RegisterPageComponent.prototype.onKeyDownEmail = function (event) {
            if (event.key) {
                if (!event.key.match(/[!#$%^&*()?":{}|<>\[\];\\=~`]/g)) {
                    if (([
                        'TAB',
                        'ESCAPE',
                        'ENTER',
                        'HOME',
                        'END',
                        'ARROWLEFT',
                        'ARROWRIGHT',
                        'ARROWUP',
                        'ARROWDOWN',
                        'PAGEUP',
                        'PAGEDOWN'
                    ].indexOf(event.key.toUpperCase()) === -1) &&
                        !event.ctrlKey && !event.metaKey && !event.altKey) {
                        this.isCheckEmail = true;
                    }
                }
            }
        };
        RegisterPageComponent.prototype.initProgress = function () {
            document.querySelectorAll('.pace-done').forEach(function (pace) {
                pace.className = pace.className.replace('pace-done pace-done', 'pace-running');
                pace.className = pace.className.replace('pace-done', 'pace-running');
            });
            document.querySelectorAll('.pace-inactive').forEach(function (pace) {
                pace.className = pace.className.replace('pace-inactive pace-inactive', 'pace-active');
                pace.className = pace.className.replace('pace-inactive', 'pace-active');
            });
            this.progressDOM = document.getElementsByClassName('pace-progress').item(0);
        };
        RegisterPageComponent.prototype.doneProgress = function () {
            document.querySelectorAll('.pace-running').forEach(function (pace) {
                pace.className = pace.className.replace('pace-running', 'pace-done');
            });
            document.querySelectorAll('.pace-active').forEach(function (pace) {
                pace.className = pace.className.replace('pace-active', 'pace-inactive');
            });
        };
        RegisterPageComponent.prototype.setProgress = function (progress) {
            this.progressDOM.style.transform = 'translate3d(' + progress + '%, 0px, 0px)';
            this.progressDOM.getAttributeNode('data-progress-text').value = progress + '%';
            this.progressDOM.getAttributeNode('data-progress').value = progress.toString();
        };
        return RegisterPageComponent;
    }());
    RegisterPageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: RegisterPageComponent, deps: [{ token: i1__namespace.Router }, { token: i4__namespace.EncryptionService }, { token: i2__namespace$1.DoToastrService }, { token: i2__namespace.NbDialogService }, { token: i3__namespace.TranslateService }, { token: i4.HTTP_SERVICE }, { token: i4.OAUTH_INFO }, { token: i4.API }], target: i0__namespace.ɵɵFactoryTarget.Component });
    RegisterPageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: RegisterPageComponent, selector: "do-register-page", ngImport: i0__namespace, template: "<h1 id=\"title\" class=\"title\">{{ 'Register' | translate }}</h1>\n\n<nb-alert *ngIf=\"responseError\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>{{ 'alert.title.register' | translate }}</b></p>\n  <ul class=\"alert-message-list\">\n    <li class=\"alert-message\">{{ responseError }}</li>\n  </ul>\n</nb-alert>\n\n<form [formGroup]=\"form\" (ngSubmit)=\"register()\" aria-labelledby=\"title\">\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-name\">{{ 'Full name' | translate }}* :</label>\n    <input [formControlName]=\"'fullname'\"\n          [required]=\"true\"\n          minlength=\"4\"\n          maxlength=\"50\"\n          [pattern]=\"patternFullname\"\n          [ngClass]=\"{\n            'status-danger': hasErrorFullname,\n            'status-success': hasSuccessFullname\n          }\"\n          name=\"fullname\"\n          id=\"inputFullname\"\n          placeholder=\"{{ 'Full name' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"1\"\n          autofocus\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorFullname\">\n      <span class=\"caption status-danger\">{{errorMsgFullname | translate}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-username\">{{ 'Username' | translate }}* :</label>\n    <input [formControlName]=\"'username'\"\n          [required]=\"true\"\n          minlength=\"5\"\n          maxlength=\"20\"\n          [pattern]=\"patternUsername\"\n          [ngClass]=\"{\n            'status-danger': hasErrorUsername,\n            'status-success': hasSuccessUsername\n          }\"\n          name=\"username\"\n          id=\"inputUsername\"\n          (keydown)=\"onKeyDownUsername($event)\"\n          placeholder=\"{{ 'Username' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"2\"\n          autofocus\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorUsername\">\n      <span class=\"caption status-danger\">{{errorMsgUsername | translate:paramMsgUsername}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-email\">{{ 'Email' | translate }}* :</label>\n    <input [formControlName]=\"'email'\"\n          [required]=\"true\"\n          minlength=\"5\"\n          maxlength=\"50\"\n          [pattern]=\"patternEmail\"\n          [ngClass]=\"{\n            'status-danger': hasErrorEmail,\n            'status-success': hasSuccessEmail\n          }\"\n          name=\"email\"\n          id=\"inputEmail\"\n          (keydown)=\"onKeyDownEmail($event)\"\n          placeholder=\"{{ 'Email' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"3\"\n          autofocus\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorEmail\">\n      <span class=\"caption status-danger\">{{errorMsgEmail | translate:paramMsgEmail}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-password\">{{ 'Password' | translate }}* :</label>\n    <input [formControlName]=\"'password'\"\n          [required]=\"true\"\n          minlength=\"8\"\n          maxlength=\"50\"\n          [pattern]=\"patternPassword\"\n          [ngClass]=\"{\n            'status-danger': hasErrorPassword,\n            'status-success': hasSuccessPassword\n          }\"\n          name=\"password\"\n          type=\"password\"\n          id=\"inputPassword\"\n          placeholder=\"{{ 'Password' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"4\"\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorPassword\">\n      <span class=\"caption status-danger\">{{ errorMsgPassword | translate}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-confirmpassword\">{{ 'Confirm Password' | translate }}* :</label>\n    <input [formControlName]=\"'confirmPassword'\"\n          [required]=\"true\"\n          minlength=\"8\"\n          maxlength=\"50\"\n          [ngClass]=\"{\n            'status-danger': hasErrorConfirmPassword,\n            'status-success': hasSuccessConfirmPassword\n          }\"\n          name=\"confirmPassword\"\n          type=\"password\"\n          id=\"inputConfirmPassword\"\n          placeholder=\"{{ 'Confirm Password' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"5\"\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorConfirmPassword\">\n      <span class=\"caption status-danger\">{{ errorMsgConfirmPassword | translate}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group accept-group\">\n    <div class=\"terms-row row\">\n      <nb-checkbox\n        name=\"terms\"\n        [formControlName]=\"'terms'\"\n        [required]=\"true\"\n        (change)=\"onCheckedChange()\">\n        {{ 'message.terms-conditions-label' | translate}}\n      </nb-checkbox>\n      <span class=\"terms-conditions\" (click)=\"onClickTermsConditions()\" tabindex=\"-1\"><strong>{{ 'message.terms-conditions' | translate}}</strong></span>\n    </div>\n  </div>\n\n  <div class=\"form-control-group\" style=\"transform:scale(0.7);transform-origin:0;\">\n    <re-captcha\n      [formControlName]=\"'recaptcha'\"\n      required>\n    </re-captcha>\n  </div>\n\n  <button [disabled]=\"!form.valid || buttonRegister\"\n          fullWidth\n          nbButton\n          status=\"primary\"\n          size=\"large\"\n          [class.btn-pulse]=\"!form.valid || buttonRegister\">\n    {{ 'Register' | translate }}\n  </button>\n</form>\n\n<section class=\"another-action\" aria-label=\"Sign in\">\n  {{ 'message.register-footer' | translate}} <a class=\"text-link\" routerLink=\"/auth/login\" tabindex=\"-1\">{{ 'Login' | translate}}</a>\n</section>\n", styles: [".terms-row{margin-left:0}.terms-conditions{padding:.1rem 0 0 .25rem;color:#36f;text-decoration:underline;font-size:inherit;font-style:inherit;font-weight:inherit;line-height:inherit;cursor:pointer}.terms-conditions:hover{color:#598bff}\n"], components: [{ type: i2__namespace.NbAlertComponent, selector: "nb-alert", inputs: ["size", "status", "accent", "outline", "closable"], outputs: ["close"] }, { type: i2__namespace.NbCheckboxComponent, selector: "nb-checkbox", inputs: ["status", "checked", "disabled", "indeterminate"], outputs: ["checkedChange"] }, { type: i6__namespace$1.RecaptchaComponent, selector: "re-captcha", inputs: ["id", "errorMode", "siteKey", "theme", "type", "size", "badge", "tabIndex"], outputs: ["resolved", "error"], exportAs: ["reCaptcha"] }, { type: i2__namespace.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i6__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7__namespace.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i7__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i7__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2__namespace.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i7__namespace.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i7__namespace.MinLengthValidator, selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]", inputs: ["minlength"] }, { type: i7__namespace.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { type: i7__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i7__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i7__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i7__namespace.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { type: i6__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i6__namespace$1.RecaptchaValueAccessorDirective, selector: "re-captcha[formControlName],re-captcha[formControl],re-captcha[ngModel]" }, { type: i1__namespace.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }], pipes: { "translate": i3__namespace.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: RegisterPageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-register-page',
                        styleUrls: ['register-page.component.scss'],
                        templateUrl: 'register-page.component.html',
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace.Router }, { type: i4__namespace.EncryptionService }, { type: i2__namespace$1.DoToastrService }, { type: i2__namespace.NbDialogService }, { type: i3__namespace.TranslateService }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i4.HTTP_SERVICE]
                        }] }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i4.OAUTH_INFO]
                        }] }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i4.API]
                        }] }];
        } });
    function confirmPasswordValidator$1(form) {
        return function (control) {
            if (form.controls) {
                if (form.controls['password'].value !== form.controls['confirmPassword'].value) {
                    return { equal: true };
                }
            }
            return null;
        };
    }
    function userValidator(oauthResource, httpBaseService, apiPath) {
        return function (control) {
            if (!control.valueChanges) {
                return rxjs.of(null);
            }
            else {
                return control.valueChanges.pipe(operators.debounceTime(500), operators.distinctUntilChanged(), operators.switchMap(function () {
                    var validatorSubject$ = new rxjs.Subject();
                    var httpHeaders = new http.HttpHeaders({
                        Authorization: 'Basic ' + btoa(oauthResource['client_id'] + ':' + oauthResource['client_secret']),
                        'Content-Type': 'application/json',
                    });
                    var data = {
                        user: control.value,
                    };
                    var dataValidator;
                    if (control.value) {
                        httpBaseService.HTTP_BASE(apiPath['auth']['check-user'], data, httpHeaders).subscribe(function (response) {
                            if (response['respStatusCode'] === i4.ResponseCode.OK_SCR012.toString()) {
                                validatorSubject$.next(null);
                            }
                            else {
                                dataValidator = {
                                    error: true,
                                };
                                validatorSubject$.next(dataValidator);
                            }
                        }, function (error) {
                            if (!(error instanceof http.HttpErrorResponse)) {
                                dataValidator = {
                                    error: true,
                                };
                            }
                            else {
                                if (error.status === 302) {
                                    dataValidator = {
                                        'not-available': true,
                                    };
                                }
                                else {
                                    dataValidator = {
                                        timeout: true,
                                    };
                                }
                            }
                            validatorSubject$.next(dataValidator);
                        });
                    }
                    return validatorSubject$.asObservable();
                })).pipe(operators.first());
            }
        };
    }

    var ActivateAccountPageComponent = /** @class */ (function () {
        function ActivateAccountPageComponent(router, route, toastr, translate, enc, httpBaseService, oauthResource, apiPath) {
            this.router = router;
            this.route = route;
            this.toastr = toastr;
            this.translate = translate;
            this.enc = enc;
            this.httpBaseService = httpBaseService;
            this.oauthResource = oauthResource;
            this.apiPath = apiPath;
            this.buttonForgotPassword = false;
            this.progressBar = 25;
            this.patternPassword = i4.Pattern.PASSWORD_MEDIUM;
            this.form = new i7.FormGroup({
                password: new i7.FormControl(),
                confirmPassword: new i7.FormControl(),
            });
            this.destroy$ = new rxjs.Subject();
            if (this.route.snapshot.params['id'] !== null && this.route.snapshot.params['code'] !== null) {
                this.activateId = this.route.snapshot.params['id'];
                this.activateCode = this.route.snapshot.params['code'];
            }
            else {
                this.router.navigate(['/auth/login']);
            }
        }
        ActivateAccountPageComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next(true);
            this.destroy$.complete();
            this.destroy$.unsubscribe();
        };
        ActivateAccountPageComponent.prototype.activateAccount = function () {
            var _this = this;
            if (!this.form.invalid) {
                this.initProgress();
                if (this.progressBar < 35) {
                    this.setProgress(this.progressBar = 35);
                }
                this.responseError = null;
                var password = this.enc.encryptAES(this.oauthResource['aes_key'], this.form.controls['password'].value);
                var confirmPassword = this.enc.encryptAES(this.oauthResource['aes_key'], this.form.controls['confirmPassword'].value);
                var data = {
                    activateId: this.activateId,
                    activateCode: this.activateCode,
                    password: password,
                    confirmPassword: confirmPassword,
                };
                var httpHeaders = new http.HttpHeaders({
                    Authorization: 'Basic ' + btoa(this.oauthResource['client_id'] + ':' + this.oauthResource['client_secret']),
                    'Content-Type': 'application/json',
                    'Accept-Language': this.translate.currentLang,
                });
                this.buttonForgotPassword = true;
                this.httpBaseService.HTTP_BASE(this.apiPath['auth']['activate-account'], data, httpHeaders)
                    .pipe(operators.takeUntil(this.destroy$))
                    .subscribe(function (response) {
                    if (response) {
                        _this.toastr.showI18n(response.respStatusMessage[response.respStatusCode]);
                        _this.setProgress(_this.progressBar = 95);
                        _this.progressBar = 0;
                        if (response.respStatusCode === i4.ResponseCode.OK_ACTIVATE_ACCOUNT) {
                            _this.router.navigate(['/auth/login']);
                        }
                        else {
                            _this.form.reset();
                            _this.buttonForgotPassword = false;
                        }
                    }
                    else {
                        _this.form.reset();
                        _this.buttonForgotPassword = false;
                    }
                }, function (error) {
                    _this.buttonForgotPassword = false;
                    _this.progressBar = 0;
                    _this.doneProgress();
                    if (!(error instanceof http.HttpErrorResponse)) {
                        if (error['respStatusCode']) {
                            _this.responseError = error['respStatusMessage'][error['respStatusCode']];
                        }
                    }
                });
            }
        };
        Object.defineProperty(ActivateAccountPageComponent.prototype, "hasErrorPassword", {
            get: function () {
                if (this.form.controls['password'].errors &&
                    this.form.controls['password'].invalid &&
                    this.form.controls['password'].touched) {
                    this.errorMsgPassword = 'error.pattern.Password';
                }
                else {
                    this.errorMsgPassword = null;
                }
                return (this.form.controls['password'] &&
                    this.form.controls['password'].invalid &&
                    this.form.controls['password'].touched);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ActivateAccountPageComponent.prototype, "hasSuccessPassword", {
            get: function () {
                return (this.form.controls['password'] &&
                    this.form.controls['password'].valid &&
                    this.form.controls['password'].touched);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ActivateAccountPageComponent.prototype, "hasErrorConfirmPassword", {
            get: function () {
                if (this.form.controls['confirmPassword'].errors &&
                    this.form.controls['confirmPassword'].invalid &&
                    this.form.controls['confirmPassword'].touched) {
                    this.errorMsgConfirmPassword = 'error.equal.confirmPassword';
                }
                else {
                    if (this.form.controls['password'].value !== this.form.controls['confirmPassword'].value) {
                        this.errorMsgConfirmPassword = 'error.equal.confirmPassword';
                        this.form.controls['confirmPassword'].setValidators([confirmPasswordValidator(this.form)]);
                        this.form.controls['confirmPassword'].updateValueAndValidity();
                    }
                    else {
                        this.errorMsgConfirmPassword = null;
                    }
                }
                return (this.form.controls['confirmPassword'] &&
                    this.form.controls['confirmPassword'].invalid &&
                    this.form.controls['confirmPassword'].touched);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ActivateAccountPageComponent.prototype, "hasSuccessConfirmPassword", {
            get: function () {
                return (this.form.controls['confirmPassword'] &&
                    this.form.controls['confirmPassword'].valid &&
                    this.form.controls['confirmPassword'].touched);
            },
            enumerable: false,
            configurable: true
        });
        ActivateAccountPageComponent.prototype.initProgress = function () {
            document.querySelectorAll('.pace-done').forEach(function (pace) {
                pace.className = pace.className.replace('pace-done pace-done', 'pace-running');
                pace.className = pace.className.replace('pace-done', 'pace-running');
            });
            document.querySelectorAll('.pace-inactive').forEach(function (pace) {
                pace.className = pace.className.replace('pace-inactive pace-inactive', 'pace-active');
                pace.className = pace.className.replace('pace-inactive', 'pace-active');
            });
            this.progressDOM = document.getElementsByClassName('pace-progress').item(0);
        };
        ActivateAccountPageComponent.prototype.doneProgress = function () {
            document.querySelectorAll('.pace-running').forEach(function (pace) {
                pace.className = pace.className.replace('pace-running', 'pace-done');
            });
            document.querySelectorAll('.pace-active').forEach(function (pace) {
                pace.className = pace.className.replace('pace-active', 'pace-inactive');
            });
        };
        ActivateAccountPageComponent.prototype.setProgress = function (progress) {
            this.progressDOM.style.transform = 'translate3d(' + progress + '%, 0px, 0px)';
            this.progressDOM.getAttributeNode('data-progress-text').value = progress + '%';
            this.progressDOM.getAttributeNode('data-progress').value = progress.toString();
        };
        return ActivateAccountPageComponent;
    }());
    ActivateAccountPageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ActivateAccountPageComponent, deps: [{ token: i1__namespace.Router }, { token: i1__namespace.ActivatedRoute }, { token: i2__namespace$1.DoToastrService }, { token: i3__namespace.TranslateService }, { token: i4__namespace.EncryptionService }, { token: i4.HTTP_SERVICE }, { token: i4.OAUTH_INFO }, { token: i4.API }], target: i0__namespace.ɵɵFactoryTarget.Component });
    ActivateAccountPageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ActivateAccountPageComponent, selector: "do-activate-account-page", ngImport: i0__namespace, template: "<h1 id=\"title\" class=\"title\">{{ 'header.set-password' | translate }}</h1>\n<p class=\"sub-title\">{{ 'subtitle.set-password' | translate }}</p>\n\n<nb-alert *ngIf=\"responseError\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>{{ 'alert.title.set-password' | translate }}</b></p>\n  <ul class=\"alert-message-list\">\n    <li class=\"alert-message\">{{ responseError }}</li>\n  </ul>\n</nb-alert>\n\n<form [formGroup]=\"form\" (ngSubmit)=\"activateAccount()\" aria-labelledby=\"title\">\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-newpassword\">{{ 'Password' | translate }}* :</label>\n    <input [formControlName]=\"'password'\"\n          [required]=\"true\"\n          minlength=\"8\"\n          maxlength=\"50\"\n          [pattern]=\"patternPassword\"\n          [ngClass]=\"{\n            'status-danger': hasErrorPassword,\n            'status-success': hasSuccessPassword\n          }\"\n          name=\"password\"\n          type=\"password\"\n          id=\"inputPassword\"\n          placeholder=\"{{ 'Password' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"4\"\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorPassword\">\n      <span class=\"caption status-danger\">{{ errorMsgPassword | translate}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-confirmpassword\">{{ 'Confirm Password' | translate }}* :</label>\n    <input [formControlName]=\"'confirmPassword'\"\n          [required]=\"true\"\n          minlength=\"8\"\n          maxlength=\"50\"\n          [ngClass]=\"{\n            'status-danger': hasErrorConfirmPassword,\n            'status-success': hasSuccessConfirmPassword\n          }\"\n          name=\"confirmPassword\"\n          type=\"password\"\n          id=\"inputConfirmPassword\"\n          placeholder=\"{{ 'Confirm Password' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"5\"\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorConfirmPassword\">\n      <span class=\"caption status-danger\">{{ errorMsgConfirmPassword | translate}}</span>\n    </ng-container>\n  </div>\n\n  <button [disabled]=\"form.invalid || buttonForgotPassword\"\n          fullWidth\n          nbButton\n          status=\"primary\"\n          size=\"large\"\n          [class.btn-pulse]=\"form.invalid || buttonForgotPassword\">\n    {{ 'Set Password' | translate }}\n  </button>\n</form>\n\n<section class=\"another-action\" aria-label=\"Sign in\">\n  {{ 'message.set-password-footer' | translate}} <a class=\"text-link\" routerLink=\"/auth/login\" tabindex=\"-1\">{{ 'Login' | translate}}</a>\n</section>\n", styles: [""], components: [{ type: i2__namespace.NbAlertComponent, selector: "nb-alert", inputs: ["size", "status", "accent", "outline", "closable"], outputs: ["close"] }, { type: i2__namespace.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i6__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7__namespace.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i7__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i7__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2__namespace.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i7__namespace.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i7__namespace.MinLengthValidator, selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]", inputs: ["minlength"] }, { type: i7__namespace.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { type: i7__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i7__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i7__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i7__namespace.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { type: i6__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1__namespace.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }], pipes: { "translate": i3__namespace.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ActivateAccountPageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-activate-account-page',
                        styleUrls: ['activate-account-page.component.scss'],
                        templateUrl: 'activate-account-page.component.html',
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace.Router }, { type: i1__namespace.ActivatedRoute }, { type: i2__namespace$1.DoToastrService }, { type: i3__namespace.TranslateService }, { type: i4__namespace.EncryptionService }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i4.HTTP_SERVICE]
                        }] }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i4.OAUTH_INFO]
                        }] }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i4.API]
                        }] }];
        } });
    function confirmPasswordValidator(form) {
        return function (control) {
            if (form.controls) {
                if (form.controls['password'].value !== form.controls['confirmPassword'].value) {
                    return { equal: true };
                }
            }
            return null;
        };
    }

    var OAuth2CallbackComponent = /** @class */ (function () {
        function OAuth2CallbackComponent(router, route, httpBaseService, oauthResource, apiPath, authIndexedDB, profileIndexedDB, settingsIndexedDB, idle) {
            this.router = router;
            this.httpBaseService = httpBaseService;
            this.oauthResource = oauthResource;
            this.apiPath = apiPath;
            this.authIndexedDB = authIndexedDB;
            this.profileIndexedDB = profileIndexedDB;
            this.settingsIndexedDB = settingsIndexedDB;
            this.idle = idle;
            this.destroy$ = new rxjs.Subject();
            if (route.snapshot.queryParams['access_token']) {
                this.extractToken(route.snapshot.queryParams['access_token']);
            }
            else if (route.snapshot.queryParams['error']) {
                this.router.navigate(['/auth'], { queryParams: { error: route.snapshot.queryParams['error'] } });
            }
        }
        OAuth2CallbackComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next(true);
            this.destroy$.next();
            this.destroy$.complete();
        };
        OAuth2CallbackComponent.prototype.extractToken = function (accessToken) {
            var _this = this;
            return this.httpBaseService.
                HTTP_BASE(this.apiPath['auth']['extract-token'], this.getAuthBody(accessToken).toString(), this.getAuthHeader())
                .pipe(operators.takeUntil(this.destroy$))
                .toPromise()
                .then(function (response) {
                _this.idle.setIdle(+response['expires_in']);
                _this.idle.watch();
                /* console.log('[DONGKAP] Session Idle Start'); */
                /* console.log('[DONGKAP] Session Timeout in ' + response['expires_in'] + ' seconds'); */
                _this.authIndexedDB.loginStorage(response);
                _this.profileIndexedDB.loginStorage(response);
                _this.settingsIndexedDB.loginStorage(response);
                _this.router.navigate(['/app/home']);
            })
                .catch(function (error) {
                _this.router.navigate(['/auth']);
            });
        };
        OAuth2CallbackComponent.prototype.getAuthBody = function (accessToken) {
            var body = new URLSearchParams();
            body.append('access_token', accessToken);
            return body;
        };
        OAuth2CallbackComponent.prototype.getAuthHeader = function () {
            return new http.HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: 'Basic ' +
                    btoa(this.oauthResource['client_id'] + ':' + this.oauthResource['client_secret']),
                Accept: 'application/json',
            });
        };
        return OAuth2CallbackComponent;
    }());
    OAuth2CallbackComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: OAuth2CallbackComponent, deps: [{ token: i1__namespace.Router }, { token: i1__namespace.ActivatedRoute }, { token: i4.HTTP_SERVICE }, { token: i4.OAUTH_INFO }, { token: i4.API }, { token: AuthIndexedDBService }, { token: ProfileIndexedDBService }, { token: SettingsIndexedDBService }, { token: i5__namespace.Idle }], target: i0__namespace.ɵɵFactoryTarget.Component });
    OAuth2CallbackComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: OAuth2CallbackComponent, selector: "do-oauth2-callback", ngImport: i0__namespace, template: "<p class=\"sub-title\">{{ 'message.callback' | translate }}</p>\n<div class=\"spinner-area\" [nbSpinner]=\"true\" nbSpinnerSize=\"small\" nbSpinnerStatus=\"info\">", styles: [".nb-theme-default :host .sub-title{margin:1rem}.nb-theme-default :host .spinner-area{height:22px}.nb-theme-default :host ::ng-deep nb-spinner{background:transparent!important}.nb-theme-dark :host .sub-title{margin:1rem}.nb-theme-dark :host .spinner-area{height:22px}.nb-theme-dark :host ::ng-deep nb-spinner{background:transparent!important}.nb-theme-cosmic :host .sub-title{margin:1rem}.nb-theme-cosmic :host .spinner-area{height:22px}.nb-theme-cosmic :host ::ng-deep nb-spinner{background:transparent!important}.nb-theme-corporate :host .sub-title{margin:1rem}.nb-theme-corporate :host .spinner-area{height:22px}.nb-theme-corporate :host ::ng-deep nb-spinner{background:transparent!important}\n"], directives: [{ type: i2__namespace.NbSpinnerDirective, selector: "[nbSpinner]", inputs: ["nbSpinnerStatus", "nbSpinnerSize", "nbSpinner", "nbSpinnerMessage"] }], pipes: { "translate": i3__namespace.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: OAuth2CallbackComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-oauth2-callback',
                        styleUrls: ['oauth2-callback.component.scss'],
                        templateUrl: 'oauth2-callback.component.html',
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace.Router }, { type: i1__namespace.ActivatedRoute }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i4.HTTP_SERVICE]
                        }] }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i4.OAUTH_INFO]
                        }] }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i4.API]
                        }] }, { type: AuthIndexedDBService }, { type: ProfileIndexedDBService }, { type: SettingsIndexedDBService }, { type: i5__namespace.Idle }];
        } });

    var routes$1 = [{
            path: '',
            component: AuthComponent,
            children: [
                {
                    path: '',
                    component: LoginPageComponent,
                    canActivate: [UnauthorizeGuardService],
                },
                {
                    path: 'login',
                    component: LoginPageComponent,
                    canActivate: [UnauthorizeGuardService],
                },
                {
                    path: 'force',
                    component: ForceLoginPageComponent,
                    canActivate: [UnauthorizeGuardService],
                },
                {
                    path: 'register',
                    component: RegisterPageComponent,
                    canActivate: [UnauthorizeGuardService],
                },
                {
                    path: 'forgot-password',
                    component: RequestForgotPageComponent,
                    canActivate: [UnauthorizeGuardService],
                },
                {
                    path: 'forgot-password/:id/:code',
                    component: ForgotPageComponent,
                    canActivate: [UnauthorizeGuardService],
                },
                {
                    path: 'activate/:id/:code',
                    component: ActivateAccountPageComponent,
                    canActivate: [UnauthorizeGuardService],
                },
                {
                    path: 'callback',
                    component: OAuth2CallbackComponent,
                    canActivate: [UnauthorizeGuardService],
                },
                {
                    path: 'logout',
                    component: LogoutComponent,
                    canActivate: [AuthGuardService],
                },
            ],
        }];
    var DoAuthRoutingModule = /** @class */ (function () {
        function DoAuthRoutingModule() {
        }
        return DoAuthRoutingModule;
    }());
    DoAuthRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoAuthRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DoAuthRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoAuthRoutingModule, imports: [i1__namespace.RouterModule], exports: [i1.RouterModule] });
    DoAuthRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoAuthRoutingModule, imports: [[i1.RouterModule.forChild(routes$1)], i1.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoAuthRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.RouterModule.forChild(routes$1)],
                        exports: [i1.RouterModule],
                    }]
            }] });

    var AuthGuardChildService = /** @class */ (function () {
        function AuthGuardChildService(router, authTokenService, translate, enc, storage) {
            this.router = router;
            this.authTokenService = authTokenService;
            this.translate = translate;
            this.enc = enc;
            this.storage = storage;
        }
        AuthGuardChildService.prototype.canActivateChild = function (route, state) {
            var _this = this;
            var result$ = new rxjs.Subject();
            this.authTokenService.isLogin().then(function (value) {
                result$.next(value);
                if (route.data) {
                    if (route.data['title']) {
                        _this.translate.get(route.data['title']).subscribe(function (trans) {
                            route.data['title'] = trans;
                        });
                    }
                    Promise.all([
                        _this.storage.getEnc('menus'),
                        _this.storage.getEnc('extras'),
                    ]).then(function (strg) {
                        if (!(strg[0].includes(route.data['code']) || strg[1].includes(route.data['code']))) {
                            _this.router.navigate(['/app/home']);
                        }
                        return result$.asObservable();
                    });
                }
                if (!value) {
                    _this.router.navigate(['/auth']);
                }
            });
            return result$.asObservable();
        };
        return AuthGuardChildService;
    }());
    AuthGuardChildService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthGuardChildService, deps: [{ token: i1__namespace.Router }, { token: AuthTokenService }, { token: i3__namespace.TranslateService }, { token: i4__namespace.EncryptionService }, { token: AuthIndexedDBService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AuthGuardChildService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthGuardChildService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthGuardChildService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: i1__namespace.Router }, { type: AuthTokenService }, { type: i3__namespace.TranslateService }, { type: i4__namespace.EncryptionService }, { type: AuthIndexedDBService }]; } });

    var AuthLanguageService = /** @class */ (function () {
        function AuthLanguageService(locale, settingsIndexedDB) {
            this.locale = locale;
            this.settingsIndexedDB = settingsIndexedDB;
        }
        AuthLanguageService.prototype.getLocale = function (req) {
            var _this = this;
            return rxjs.from(this.settingsIndexedDB.get('locale')).pipe(operators.take(1), operators.switchMap(function (value) {
                var httpHeaders = req.headers ? req.headers : new http.HttpHeaders();
                var localeCode = value ?
                    (value.match(new RegExp(i4.Pattern.LOCALE, 'g')) ?
                        value :
                        _this.locale) : _this.locale;
                httpHeaders = httpHeaders.append('Accept-Language', localeCode);
                return rxjs.of(req.clone({ headers: httpHeaders }));
            }));
        };
        return AuthLanguageService;
    }());
    AuthLanguageService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthLanguageService, deps: [{ token: i0.LOCALE_ID }, { token: SettingsIndexedDBService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AuthLanguageService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthLanguageService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthLanguageService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i0.LOCALE_ID]
                        }] }, { type: SettingsIndexedDBService }];
        } });

    var AuthSignatureService = /** @class */ (function () {
        function AuthSignatureService(translate, enc, oauthResource, authStorage) {
            this.translate = translate;
            this.enc = enc;
            this.oauthResource = oauthResource;
            this.authStorage = authStorage;
        }
        AuthSignatureService.prototype.signHeaders = function (req) {
            var _this = this;
            return rxjs.combineLatest([
                this.key(),
                this.signature(this.getPath(req.url)),
            ]).pipe(operators.take(1), operators.switchMap(function (value) {
                if (i4.signatureHeader.signature) {
                    var httpHeaders_1 = req.headers ? req.headers : new http.HttpHeaders();
                    httpHeaders_1.keys().forEach(function (key) {
                        if (key === i4.signatureHeader.key) {
                            httpHeaders_1 = httpHeaders_1.delete(i4.signatureHeader.key);
                        }
                        if (key === i4.signatureHeader.timestamp) {
                            httpHeaders_1 = httpHeaders_1.delete(i4.signatureHeader.timestamp);
                        }
                        if (key === i4.signatureHeader.signature) {
                            httpHeaders_1 = httpHeaders_1.delete(i4.signatureHeader.signature);
                        }
                    });
                    httpHeaders_1 = httpHeaders_1.set(i4.signatureHeader.key, value[0]);
                    httpHeaders_1 = httpHeaders_1.set(i4.signatureHeader.timestamp, _this.timeStamp);
                    httpHeaders_1 = httpHeaders_1.set(i4.signatureHeader.signature, value[1]);
                    return rxjs.of(req.clone({ headers: httpHeaders_1 }));
                }
                return rxjs.of(req);
            }));
        };
        AuthSignatureService.prototype.key = function () {
            return this.authStorage.getOfEnc(i4.oauthInfo.public_key);
        };
        AuthSignatureService.prototype.timestamp = function () {
            this.timeStamp = Math.floor(new Date().getTime() / 1000).toString();
            return this.timeStamp;
        };
        AuthSignatureService.prototype.date = function () {
            return new i6.DatePipe(this.translate.currentLang).transform(new Date(), i4.DateFormat.DATE);
        };
        AuthSignatureService.prototype.signature = function (url) {
            var _this = this;
            return rxjs.combineLatest([
                this.key(),
                this.authStorage.getOfEnc(i4.oauthInfo.access_token),
            ]).pipe(operators.take(1), operators.switchMap(function (value) {
                var key = value[0] + ':' +
                    _this.timestamp() + ':' +
                    // this.date() + ':' +
                    url + ':' +
                    value[1];
                return rxjs.of(_this.enc.getHmacSha256(_this.oauthResource['private_key'], key));
            }));
        };
        AuthSignatureService.prototype.getPath = function (url) {
            return '/' + url
                .replace(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*(:[0-9]{1,5})?(\/).*?/g, '');
        };
        return AuthSignatureService;
    }());
    AuthSignatureService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthSignatureService, deps: [{ token: i3__namespace.TranslateService }, { token: i4__namespace.EncryptionService }, { token: i4.OAUTH_INFO }, { token: AuthIndexedDBService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AuthSignatureService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthSignatureService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthSignatureService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () {
            return [{ type: i3__namespace.TranslateService }, { type: i4__namespace.EncryptionService }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i4.OAUTH_INFO]
                        }] }, { type: AuthIndexedDBService }];
        } });

    var AuthUserService = /** @class */ (function (_super) {
        __extends(AuthUserService, _super);
        function AuthUserService(profileIndexedDB, apiPath, httpBaseService) {
            var _this = _super.call(this) || this;
            _this.profileIndexedDB = profileIndexedDB;
            _this.apiPath = apiPath;
            _this.httpBaseService = httpBaseService;
            _this.loaderUserSubject$ = new rxjs.Subject();
            _this.destroy$ = new rxjs.Subject();
            return _this;
        }
        AuthUserService.prototype.ngOnDestroy = function () {
            this.destroy$.next(true);
            this.destroy$.complete();
            this.destroy$.unsubscribe();
        };
        AuthUserService.prototype.loadUser = function () {
            var _this = this;
            this.profileIndexedDB.get('image').then(function (checksum) {
                _this.putImageBase64(checksum);
            });
            this.httpBaseService.HTTP_AUTH(this.apiPath['profile']['get-profile'])
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (response) {
                Promise.all([
                    _this.profileIndexedDB.put('name', response['name']),
                    _this.profileIndexedDB.put('email', response['email']),
                    _this.profileIndexedDB.put('image', response['image']),
                ]).then();
            });
        };
        AuthUserService.prototype.updateName = function (name) {
            var _this = this;
            this.profileIndexedDB.put('name', name).then(function () {
                _this.awaitUser();
            });
            return this.loaderUserSubject$.asObservable();
        };
        AuthUserService.prototype.updatePhoto = function (checksum) {
            var _this = this;
            this.profileIndexedDB.put('image', checksum).then(function () {
                _this.putImageBase64(checksum);
            });
            return this.loaderUserSubject$.asObservable();
        };
        Object.defineProperty(AuthUserService.prototype, "onUserChange", {
            get: function () {
                this.awaitUser();
                return this.loaderUserSubject$.asObservable();
            },
            enumerable: false,
            configurable: true
        });
        AuthUserService.prototype.awaitUser = function () {
            var _this = this;
            Promise.all([
                this.profileIndexedDB.get('name'),
                this.profileIndexedDB.get('image-base64'),
            ]).then(function (value) {
                var user = {
                    name: value[0],
                    image: value[1],
                };
                _this.loaderUserSubject$.next(user);
            });
        };
        AuthUserService.prototype.putImageBase64 = function (checksum) {
            var _this = this;
            if (checksum) {
                this.httpBaseService.HTTP_AUTH(this.apiPath['profile']['get-photo-profile'], null, null, null, [checksum], 'arraybuffer')
                    .pipe(operators.takeUntil(this.destroy$))
                    .subscribe(function (response) {
                    var imageBlob = new Blob([response], {
                        type: 'image/png',
                    });
                    var reader = new FileReader();
                    reader.readAsDataURL(imageBlob);
                    reader.onloadend = function () {
                        var imageBase64 = reader.result.toString();
                        _this.profileIndexedDB.put('image-base64', imageBase64).then(function () {
                            _this.awaitUser();
                        });
                    };
                });
            }
        };
        return AuthUserService;
    }(i4.UserService));
    AuthUserService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthUserService, deps: [{ token: ProfileIndexedDBService }, { token: i4.API }, { token: i4.HTTP_SERVICE }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AuthUserService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthUserService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthUserService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () {
            return [{ type: ProfileIndexedDBService }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i4.API]
                        }] }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i4.HTTP_SERVICE]
                        }] }];
        } });

    var HttpErrorHandler = /** @class */ (function () {
        function HttpErrorHandler(translate, authToken, authStorage, authSignature) {
            this.translate = translate;
            this.authToken = authToken;
            this.authStorage = authStorage;
            this.authSignature = authSignature;
            this.isRefreshingToken = false;
            this.refreshTokenSubject = new rxjs.BehaviorSubject(null);
        }
        HttpErrorHandler.prototype.errorHandler = function (error, req, next) {
            var err = new http.HttpErrorResponse({
                error: error.error,
                headers: error.headers,
                status: error.status,
                statusText: error.statusText,
                url: error.url,
            });
            if (error.error instanceof ArrayBuffer) {
                var decodedString = String.fromCharCode.apply(null, new Uint8Array(error.error));
                err = new http.HttpErrorResponse({
                    error: JSON.parse(decodedString),
                    headers: error.headers,
                    status: error.status,
                    statusText: error.statusText,
                    url: error.url,
                });
            }
            switch (err.status) {
                case 200:
                case 201:
                case 304:
                    return rxjs.EMPTY;
                case 400:
                    return this.error400(err);
                case 401:
                    return this.error401(err, req, next);
                case 404:
                case 403:
                case 500:
                case 504:
                case 0:
                    return rxjs.throwError(this.errorDefault(err));
                default:
                    break;
            }
            return rxjs.throwError(err);
        };
        HttpErrorHandler.prototype.errorDefault = function (error) {
            var err = {
                respStatusCode: error.status,
                respStatusMessage: {},
            };
            err.respStatusMessage[err.respStatusCode] = error.statusText;
            var msgKey = 'error.' + err.respStatusCode;
            if (error.error) {
                if (error.error['respStatusCode']) {
                    err = error.error;
                    msgKey = err.respStatusMessage[err.respStatusCode];
                }
            }
            this.translate.get(msgKey).subscribe(function (result) {
                err.respStatusMessage[err.respStatusCode] = result;
            });
            return err;
        };
        HttpErrorHandler.prototype.error400 = function (error) {
            if (error.error['respStatusCode']) {
                if (error.error['respStatusCode'] === 'invalid_grant') {
                    switch (error.error['respStatusMessage']['invalid_grant']) {
                        case 'Bad credentials':
                        case 'User account is locked':
                        case 'User is disabled':
                        case 'User account has expired':
                        case 'User credentials have expired':
                        case 'LDAP Server Error':
                        case 'Invalid credentials.':
                            return rxjs.throwError(this.errorDefault(error));
                        default:
                            this.authToken.logout();
                            return rxjs.throwError(this.errorDefault(error));
                    }
                }
                else {
                    return rxjs.throwError(this.errorDefault(error));
                }
            }
            return rxjs.throwError(error);
        };
        HttpErrorHandler.prototype.error401 = function (error, request, next) {
            var _this = this;
            if (error.error) {
                if (error.error['respStatusCode'] === 'invalid_token') {
                    if (!this.isRefreshingToken) {
                        this.isRefreshingToken = true;
                        this.refreshTokenSubject.next(null);
                        return this.authToken.refresh().pipe(operators.switchMap(function (response) {
                            _this.isRefreshingToken = false;
                            _this.refreshTokenSubject.next(response);
                            return _this.authToken.oauthHeaders(request).pipe(operators.switchMap(function (req) {
                                request = req;
                                return _this.authSignature.signHeaders(request).pipe(operators.switchMap(function (valReq) {
                                    return next.handle(valReq);
                                }));
                            }));
                        }), operators.catchError(function (err) {
                            return _this.errorHandler(err, request, next);
                        }));
                    }
                    else {
                        var msg = error.error['respStatusMessage']['invalid_token'];
                        if (msg.includes('expired')) {
                            this.authToken.logout();
                        }
                        else {
                            return this.refreshTokenSubject.pipe(operators.filter(function (response) { return response != null; }), operators.take(1), operators.switchMap(function () {
                                return _this.authToken.oauthHeaders(request).pipe(operators.switchMap(function (req) {
                                    request = req;
                                    return _this.authSignature.signHeaders(request).pipe(operators.switchMap(function (valReq) {
                                        return next.handle(valReq);
                                    }));
                                }));
                            }));
                        }
                    }
                }
            }
            return rxjs.throwError(error);
        };
        return HttpErrorHandler;
    }());

    var HttpInterceptorErrorService = /** @class */ (function (_super) {
        __extends(HttpInterceptorErrorService, _super);
        function HttpInterceptorErrorService(translate, authToken, authStorage, authSignature) {
            var _this = _super.call(this, translate, authToken, authStorage, authSignature) || this;
            _this.translate = translate;
            _this.authToken = authToken;
            _this.authStorage = authStorage;
            _this.authSignature = authSignature;
            _this.destroy$ = new rxjs.Subject();
            return _this;
        }
        HttpInterceptorErrorService.prototype.ngOnDestroy = function () {
            this.destroy$.next(true);
            this.destroy$.complete();
            this.destroy$.unsubscribe();
        };
        HttpInterceptorErrorService.prototype.intercept = function (req, next) {
            var _this = this;
            return next.handle(req).pipe(operators.catchError(function (error) {
                if (error instanceof http.HttpErrorResponse) {
                    return _this.errorHandler(error, req, next);
                }
                else {
                    return rxjs.throwError(error);
                }
            })).pipe(operators.takeUntil(this.destroy$));
        };
        return HttpInterceptorErrorService;
    }(HttpErrorHandler));
    HttpInterceptorErrorService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HttpInterceptorErrorService, deps: [{ token: i3__namespace.TranslateService }, { token: AuthTokenService }, { token: AuthIndexedDBService }, { token: AuthSignatureService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    HttpInterceptorErrorService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HttpInterceptorErrorService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HttpInterceptorErrorService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: i3__namespace.TranslateService }, { type: AuthTokenService }, { type: AuthIndexedDBService }, { type: AuthSignatureService }]; } });

    var HttpInterceptorLangService = /** @class */ (function () {
        function HttpInterceptorLangService(authLanguage) {
            this.authLanguage = authLanguage;
            this.destroy$ = new rxjs.Subject();
        }
        HttpInterceptorLangService.prototype.ngOnDestroy = function () {
            this.destroy$.next(true);
            this.destroy$.complete();
            this.destroy$.unsubscribe();
        };
        HttpInterceptorLangService.prototype.intercept = function (req, next) {
            if (req.headers) {
                if (req.headers.has(i4.signatureHeader.mark)) {
                    return this.authLanguage.getLocale(req).pipe(operators.switchMap(function (value) {
                        return next.handle(value);
                    }));
                }
            }
            return next.handle(req).pipe(operators.takeUntil(this.destroy$));
        };
        return HttpInterceptorLangService;
    }());
    HttpInterceptorLangService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HttpInterceptorLangService, deps: [{ token: AuthLanguageService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    HttpInterceptorLangService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HttpInterceptorLangService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HttpInterceptorLangService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: AuthLanguageService }]; } });

    var HttpInterceptorSignatureService = /** @class */ (function () {
        function HttpInterceptorSignatureService(authSignature, oauthResource) {
            this.authSignature = authSignature;
            this.oauthResource = oauthResource;
            this.destroy$ = new rxjs.Subject();
        }
        HttpInterceptorSignatureService.prototype.ngOnDestroy = function () {
            this.destroy$.next(true);
            this.destroy$.complete();
            this.destroy$.unsubscribe();
        };
        HttpInterceptorSignatureService.prototype.intercept = function (req, next) {
            if (req.headers) {
                if (req.headers.has(i4.signatureHeader.mark) && this.oauthResource.signature) {
                    return this.authSignature.signHeaders(req).pipe(operators.switchMap(function (value) {
                        return next.handle(value);
                    }));
                }
            }
            return next.handle(req).pipe(operators.takeUntil(this.destroy$));
        };
        return HttpInterceptorSignatureService;
    }());
    HttpInterceptorSignatureService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HttpInterceptorSignatureService, deps: [{ token: AuthSignatureService }, { token: i4.OAUTH_INFO }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    HttpInterceptorSignatureService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HttpInterceptorSignatureService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HttpInterceptorSignatureService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () {
            return [{ type: AuthSignatureService }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i4.OAUTH_INFO]
                        }] }];
        } });

    var HttpInterceptorTokenService = /** @class */ (function () {
        function HttpInterceptorTokenService(authToken) {
            this.authToken = authToken;
            this.destroy$ = new rxjs.Subject();
        }
        HttpInterceptorTokenService.prototype.ngOnDestroy = function () {
            this.destroy$.next(true);
            this.destroy$.complete();
            this.destroy$.unsubscribe();
        };
        HttpInterceptorTokenService.prototype.intercept = function (req, next) {
            if (req.headers) {
                if (req.headers.has(i4.signatureHeader.mark)) {
                    return this.authToken.oauthHeaders(req).pipe(operators.switchMap(function (reqAuth) {
                        return next.handle(reqAuth);
                    }));
                }
            }
            return next.handle(req).pipe(operators.takeUntil(this.destroy$));
        };
        return HttpInterceptorTokenService;
    }());
    HttpInterceptorTokenService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HttpInterceptorTokenService, deps: [{ token: AuthTokenService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    HttpInterceptorTokenService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HttpInterceptorTokenService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HttpInterceptorTokenService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: AuthTokenService }]; } });

    var AUTH_PROVIDERS = [
        { provide: http.HTTP_INTERCEPTORS, useClass: HttpInterceptorTokenService, multi: true },
        { provide: http.HTTP_INTERCEPTORS, useClass: HttpInterceptorSignatureService, multi: true },
        { provide: http.HTTP_INTERCEPTORS, useClass: HttpInterceptorLangService, multi: true },
        { provide: http.HTTP_INTERCEPTORS, useClass: HttpInterceptorErrorService, multi: true },
        { provide: i4.USER_SERVICE, useClass: AuthUserService },
        { provide: i4.AUTH_INDEXED_DB, useClass: AuthIndexedDBService },
        { provide: i4.PROFILE_INDEXED_DB, useClass: ProfileIndexedDBService },
        { provide: i4.SETTINGS_INDEXED_DB, useClass: SettingsIndexedDBService },
        AuthGuardService,
        UnauthorizeGuardService,
        AuthTokenService,
        AuthGuardChildService,
        AuthSignatureService,
        AuthLanguageService,
        AuthForceService
    ];
    var AUTH_COMPONENTS = [
        LoginPageComponent,
        LogoutComponent,
        ForceLoginPageComponent,
        ForgotPageComponent,
        RequestForgotPageComponent,
        RegisterPageComponent,
        ActivateAccountPageComponent,
        TermsConditionsComponent,
        OAuth2CallbackComponent,
    ];
    var DoAuthModule = /** @class */ (function () {
        function DoAuthModule() {
        }
        DoAuthModule.forRoot = function () {
            return {
                ngModule: DoAuthModule,
                providers: __spreadArray([], __read(AUTH_PROVIDERS)),
            };
        };
        return DoAuthModule;
    }());
    DoAuthModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoAuthModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DoAuthModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoAuthModule, declarations: [LoginPageComponent,
            LogoutComponent,
            ForceLoginPageComponent,
            ForgotPageComponent,
            RequestForgotPageComponent,
            RegisterPageComponent,
            ActivateAccountPageComponent,
            TermsConditionsComponent,
            OAuth2CallbackComponent], imports: [i6.CommonModule,
            i7.FormsModule,
            i3.TranslateModule,
            i7.ReactiveFormsModule,
            http.HttpClientModule,
            i6$1.RecaptchaModule,
            i6$1.RecaptchaFormsModule,
            i2.NbCheckboxModule,
            i2.NbAlertModule,
            i2.NbInputModule,
            i2.NbButtonModule,
            i2.NbIconModule,
            i2.NbCardModule,
            i2.NbSpinnerModule, i2__namespace.NbDialogModule, doTheme.DoThemeModule, i2__namespace$1.DoToastrModule, DoLayoutAuthModule,
            DoAuthRoutingModule], exports: [LoginPageComponent,
            LogoutComponent,
            ForceLoginPageComponent,
            ForgotPageComponent,
            RequestForgotPageComponent,
            RegisterPageComponent,
            ActivateAccountPageComponent,
            TermsConditionsComponent,
            OAuth2CallbackComponent] });
    DoAuthModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoAuthModule, imports: [[
                i6.CommonModule,
                i7.FormsModule,
                i3.TranslateModule,
                i7.ReactiveFormsModule,
                http.HttpClientModule,
                i6$1.RecaptchaModule,
                i6$1.RecaptchaFormsModule,
                i2.NbCheckboxModule,
                i2.NbAlertModule,
                i2.NbInputModule,
                i2.NbButtonModule,
                i2.NbIconModule,
                i2.NbCardModule,
                i2.NbSpinnerModule,
                i2.NbDialogModule.forChild(),
                doTheme.DoThemeModule,
                i2$1.DoToastrModule.forRoot(),
                DoLayoutAuthModule,
                DoAuthRoutingModule,
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoAuthModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: __spreadArray([], __read(AUTH_COMPONENTS)),
                        imports: [
                            i6.CommonModule,
                            i7.FormsModule,
                            i3.TranslateModule,
                            i7.ReactiveFormsModule,
                            http.HttpClientModule,
                            i6$1.RecaptchaModule,
                            i6$1.RecaptchaFormsModule,
                            i2.NbCheckboxModule,
                            i2.NbAlertModule,
                            i2.NbInputModule,
                            i2.NbButtonModule,
                            i2.NbIconModule,
                            i2.NbCardModule,
                            i2.NbSpinnerModule,
                            i2.NbDialogModule.forChild(),
                            doTheme.DoThemeModule,
                            i2$1.DoToastrModule.forRoot(),
                            DoLayoutAuthModule,
                            DoAuthRoutingModule,
                        ],
                        exports: __spreadArray([], __read(AUTH_COMPONENTS)),
                    }]
            }] });

    var PageNotFoundComponent = /** @class */ (function () {
        function PageNotFoundComponent(router) {
            this.router = router;
        }
        PageNotFoundComponent.prototype.goToHome = function () {
            this.router.navigate(['/app/home']);
            return;
        };
        return PageNotFoundComponent;
    }());
    PageNotFoundComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: PageNotFoundComponent, deps: [{ token: i1__namespace.Router }], target: i0__namespace.ɵɵFactoryTarget.Component });
    PageNotFoundComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: PageNotFoundComponent, selector: "do-404", ngImport: i0__namespace, template: "<div class=\"flex-centered\">\n  <h2 class=\"title\">404</h2>\n  <h2 class=\"title\">Page Not Found</h2>\n  <small class=\"sub-title\">The page you were looking for doesn't exist</small>\n  <button nbButton fullWidth (click)=\"goToHome()\" type=\"button\" class=\"home-button\">\n    Take me home\n  </button>\n</div>\n", styles: [".flex-centered{margin:auto}nb-card-body{display:flex}.title{text-align:center}.sub-title{text-align:center;display:block;margin-bottom:3rem}.home-button{margin-bottom:2rem}\n"], components: [{ type: i2__namespace.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: PageNotFoundComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-404',
                        styleUrls: ['./404.component.scss'],
                        templateUrl: './404.component.html',
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.Router }]; } });

    var routes = [
        {
            path: '',
            component: AuthComponent,
            children: [
                {
                    path: '404',
                    component: PageNotFoundComponent,
                },
            ],
        },
    ];
    var MiscellaneousRoutingModule = /** @class */ (function () {
        function MiscellaneousRoutingModule() {
        }
        return MiscellaneousRoutingModule;
    }());
    MiscellaneousRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: MiscellaneousRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    MiscellaneousRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: MiscellaneousRoutingModule, imports: [i1__namespace.RouterModule], exports: [i1.RouterModule] });
    MiscellaneousRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: MiscellaneousRoutingModule, imports: [[i1.RouterModule.forChild(routes)], i1.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: MiscellaneousRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.RouterModule.forChild(routes)],
                        exports: [i1.RouterModule],
                    }]
            }] });

    var MiscellaneousModule = /** @class */ (function () {
        function MiscellaneousModule() {
        }
        return MiscellaneousModule;
    }());
    MiscellaneousModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: MiscellaneousModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    MiscellaneousModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: MiscellaneousModule, declarations: [PageNotFoundComponent], imports: [i2.NbButtonModule,
            i2.NbIconModule,
            i6.CommonModule,
            doTheme.DoThemeModule,
            DoLayoutAuthModule,
            MiscellaneousRoutingModule] });
    MiscellaneousModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: MiscellaneousModule, imports: [[
                i2.NbButtonModule,
                i2.NbIconModule,
                i6.CommonModule,
                doTheme.DoThemeModule,
                DoLayoutAuthModule,
                MiscellaneousRoutingModule,
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: MiscellaneousModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i2.NbButtonModule,
                            i2.NbIconModule,
                            i6.CommonModule,
                            doTheme.DoThemeModule,
                            DoLayoutAuthModule,
                            MiscellaneousRoutingModule,
                        ],
                        declarations: [
                            PageNotFoundComponent,
                        ],
                    }]
            }] });

    /*
     * Public API Surface of do-auth
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AUTH_COMPONENTS = AUTH_COMPONENTS;
    exports.AUTH_PROVIDERS = AUTH_PROVIDERS;
    exports.ActivateAccountPageComponent = ActivateAccountPageComponent;
    exports.AuthGuardChildService = AuthGuardChildService;
    exports.AuthGuardService = AuthGuardService;
    exports.AuthIndexedDBService = AuthIndexedDBService;
    exports.AuthSignatureService = AuthSignatureService;
    exports.AuthTokenService = AuthTokenService;
    exports.AuthUserService = AuthUserService;
    exports.DoAuthModule = DoAuthModule;
    exports.ForceLoginPageComponent = ForceLoginPageComponent;
    exports.ForgotPageComponent = ForgotPageComponent;
    exports.LoginPageComponent = LoginPageComponent;
    exports.LogoutComponent = LogoutComponent;
    exports.MiscellaneousModule = MiscellaneousModule;
    exports.OAuth2CallbackComponent = OAuth2CallbackComponent;
    exports.PageNotFoundComponent = PageNotFoundComponent;
    exports.ProfileIndexedDBService = ProfileIndexedDBService;
    exports.RegisterPageComponent = RegisterPageComponent;
    exports.RequestForgotPageComponent = RequestForgotPageComponent;
    exports.SettingsIndexedDBService = SettingsIndexedDBService;
    exports.TermsConditionsComponent = TermsConditionsComponent;
    exports.UnauthorizeGuardService = UnauthorizeGuardService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=dongkap-do-auth.umd.js.map
