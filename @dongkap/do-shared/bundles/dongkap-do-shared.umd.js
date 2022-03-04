(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common'), require('@ngx-translate/core'), require('ngx-bootstrap/collapse'), require('@nebular/theme'), require('@angular/router'), require('@angular/animations'), require('rxjs'), require('rxjs/operators'), require('@angular/platform-browser'), require('text-mask-core/dist/textMaskCore'), require('@swimlane/ngx-datatable'), require('@dongkap/do-core'), require('@ng-select/ng-select'), require('ngx-quill'), require('@nebular/date-fns'), require('@nebular/moment'), require('date-fns/esm/locale'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('@dongkap/do-shared', ['exports', '@angular/core', '@angular/forms', '@angular/common', '@ngx-translate/core', 'ngx-bootstrap/collapse', '@nebular/theme', '@angular/router', '@angular/animations', 'rxjs', 'rxjs/operators', '@angular/platform-browser', 'text-mask-core/dist/textMaskCore', '@swimlane/ngx-datatable', '@dongkap/do-core', '@ng-select/ng-select', 'ngx-quill', '@nebular/date-fns', '@nebular/moment', 'date-fns/esm/locale', '@angular/common/http'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.dongkap = global.dongkap || {}, global.dongkap["do-shared"] = {}), global.ng.core, global.ng.forms, global.ng.common, global["@ngx-translate/core"], global["ngx-bootstrap/collapse"], global["@nebular/theme"], global.ng.router, global.ng.animations, global.rxjs, global.rxjs.operators, global.ng.platformBrowser, global["text-mask-core/dist/textMaskCore"], global["@swimlane/ngx-datatable"], global["@dongkap/do-core"], global["@ng-select/ng-select"], global["ngx-quill"], global["@nebular/date-fns"], global["@nebular/moment"], global["date-fns/esm/locale"], global.ng.common.http));
})(this, (function (exports, i0, i1, i4, i5, i4$1, i2, i2$1, animations, rxjs, operators, i2$2, textMaskCore, i1$1, doCore, i3, i3$1, i2$3, moment, locale, http) { 'use strict';

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
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);
    var i5__namespace = /*#__PURE__*/_interopNamespace(i5);
    var i4__namespace$1 = /*#__PURE__*/_interopNamespace(i4$1);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i2__namespace$1 = /*#__PURE__*/_interopNamespace(i2$1);
    var i2__namespace$3 = /*#__PURE__*/_interopNamespace(i2$2);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i3__namespace$1 = /*#__PURE__*/_interopNamespace(i3$1);
    var i2__namespace$2 = /*#__PURE__*/_interopNamespace(i2$3);

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

    var DoToastrService = /** @class */ (function () {
        function DoToastrService(toastrService, translate) {
            this.toastrService = toastrService;
            this.translate = translate;
            this.status = 'success';
            this.position = i2.NbGlobalPhysicalPosition.TOP_RIGHT;
            this.duration = 5000;
            this.hasIcon = true;
            this.destroyByClick = true;
            this.preventDuplicates = false;
        }
        DoToastrService.prototype.show = function (content, title, status, position, duration, hasIcon, destroyByClick) {
            if (!title) {
                title = this.title(status);
            }
            this.build(content, title, status, position, duration, hasIcon, destroyByClick);
        };
        DoToastrService.prototype.showI18n = function (content, contentHasI18n, title, status, position, duration, hasIcon, destroyByClick) {
            var _this = this;
            if (!title) {
                title = this.title(status);
            }
            this.translate.get(title).subscribe(function (resultTitle) {
                title = resultTitle;
                if (contentHasI18n) {
                    _this.build(content, title, status, position, duration, hasIcon, destroyByClick);
                }
                else {
                    _this.translate.get(content).subscribe(function (resultContent) {
                        _this.build(resultContent, title, status, position, duration, hasIcon, destroyByClick);
                    });
                }
            });
        };
        DoToastrService.prototype.build = function (content, title, status, position, duration, hasIcon, destroyByClick) {
            this.toastrService.show(content, title, {
                status: status ? status : this.status,
                position: position ? position : this.position,
                duration: duration ? duration : this.duration,
                hasIcon: hasIcon ? hasIcon : this.hasIcon,
                destroyByClick: destroyByClick ? destroyByClick : this.destroyByClick,
                preventDuplicates: this.preventDuplicates,
            });
        };
        DoToastrService.prototype.title = function (status) {
            var title = 'Success';
            switch (status) {
                case 'primary':
                    title = 'Notification';
                    break;
                case 'warning':
                    title = 'Warning';
                    break;
                case 'danger':
                    title = 'Failure';
                    break;
                case 'info':
                    title = 'Information';
                    break;
                default:
                    break;
            }
            return title;
        };
        return DoToastrService;
    }());
    DoToastrService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoToastrService, deps: [{ token: i2__namespace.NbToastrService }, { token: i5__namespace.TranslateService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    DoToastrService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoToastrService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoToastrService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: i2__namespace.NbToastrService }, { type: i5__namespace.TranslateService }]; } });

    var TOASTR_COMPONENTS = [];
    var TOASTR_PROVIDERS = [
        DoToastrService,
    ];
    var DoToastrModule = /** @class */ (function () {
        function DoToastrModule() {
        }
        DoToastrModule.forRoot = function () {
            return {
                ngModule: DoToastrModule,
                providers: __spreadArray([], __read(TOASTR_PROVIDERS)),
            };
        };
        return DoToastrModule;
    }());
    DoToastrModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoToastrModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DoToastrModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoToastrModule, imports: [i1.FormsModule] });
    DoToastrModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoToastrModule, imports: [[
                i1.FormsModule,
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoToastrModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.FormsModule,
                        ],
                        declarations: __spreadArray([], __read(TOASTR_COMPONENTS)),
                        exports: __spreadArray([], __read(TOASTR_COMPONENTS)),
                    }]
            }] });

    var DoErrorMessageComponent = /** @class */ (function () {
        function DoErrorMessageComponent() {
            this.hasErrors = false;
            this.errorMessages = [];
        }
        return DoErrorMessageComponent;
    }());
    DoErrorMessageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoErrorMessageComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    DoErrorMessageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoErrorMessageComponent, selector: "do-error-message", inputs: { hasErrors: "hasErrors", errorMessages: "errorMessages", param: "param" }, ngImport: i0__namespace, template: "<div *ngIf=\"hasErrors\">\n  <div *ngFor=\"let message of errorMessages\">\n    <span class=\"caption status-danger\">\n      {{message | translate:param}}\n    </span>\n  </div>\n</div>", styles: [".error-message{width:100%;margin-top:.25rem;font-size:80%;color:#f86c6b}\n"], directives: [{ type: i4__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "translate": i5__namespace.TranslatePipe }, encapsulation: i0__namespace.ViewEncapsulation.None });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoErrorMessageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-error-message',
                        styleUrls: ['./do-error-message.component.scss'],
                        templateUrl: './do-error-message.component.html',
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], propDecorators: { hasErrors: [{
                    type: i0.Input
                }], errorMessages: [{
                    type: i0.Input
                }], param: [{
                    type: i0.Input
                }] } });

    var DoWarnMessageComponent = /** @class */ (function () {
        function DoWarnMessageComponent() {
        }
        return DoWarnMessageComponent;
    }());
    DoWarnMessageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoWarnMessageComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    DoWarnMessageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoWarnMessageComponent, selector: "do-warn-message", inputs: { warnMessage: "warnMessage", param: "param" }, ngImport: i0__namespace, template: "<div *ngIf=\"warnMessage\">\n    <span class=\"caption status-warning warn-message\">{{warnMessage | translate}}</span>\n</div>", styles: [".warn-message{font-style:italic}\n"], directives: [{ type: i4__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], pipes: { "translate": i5__namespace.TranslatePipe }, encapsulation: i0__namespace.ViewEncapsulation.None });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoWarnMessageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-warn-message',
                        styleUrls: ['./do-warn-message.component.scss'],
                        templateUrl: './do-warn-message.component.html',
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], propDecorators: { warnMessage: [{
                    type: i0.Input
                }], param: [{
                    type: i0.Input
                }] } });

    var DoContainerOutletComponent = /** @class */ (function () {
        function DoContainerOutletComponent() {
            this.label = '';
            this.colLabel = 3;
            this.colContent = 9;
            this.nolabel = false;
            this.dividerlabel = false;
            this.required = false;
            this.hasErrors = false;
            this.errorMessages = [];
            this.skeleton = false;
            this.show = true;
        }
        return DoContainerOutletComponent;
    }());
    DoContainerOutletComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoContainerOutletComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    DoContainerOutletComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoContainerOutletComponent, selector: "do-container-outlet", inputs: { name: "name", label: "label", colLabel: "colLabel", colContent: "colContent", nolabel: "nolabel", dividerlabel: "dividerlabel", required: "required", hasErrors: "hasErrors", errorMessages: "errorMessages", warnMessage: "warnMessage", paramError: "paramError", skeleton: "skeleton", show: "show" }, ngImport: i0__namespace, template: "<div class=\"form-group row\" *ngIf=\"show\">\n  <div\n    *ngIf=\"(!skeleton || nolabel);else labelskeleton\"\n    class=\"col-sm-{{colLabel}}\">\n    <label\n      for=\"{{name}}\"\n      class=\"label col-form-label\">\n      {{label | translate}}{{ (!nolabel) ? ((required) ? ' *' : '') : '' }}\n    </label>\n    <label *ngIf=\"dividerlabel\" class=\"divider-label col-form-label\">:</label>\n  </div>\n  <ng-template #labelskeleton>\n    <div class=\"col-sm-{{colLabel}}\">\n      <label\n        class=\"label col-form-label\"\n        [ngClass]=\"{\n          'label-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </label>\n    </div>\n  </ng-template>\n  <ng-content></ng-content>\n  <div class=\"offset-sm-{{colLabel}} col-sm-{{colContent}}\">\n    <do-warn-message *ngIf=\"!skeleton\" [warnMessage]=\"warnMessage\"></do-warn-message>\n    <do-error-message [hasErrors]=\"hasErrors\" [errorMessages]=\"errorMessages\" [param]=\"paramError\">\n    </do-error-message>\n  </div>\n</div>", styles: ["label.divider-label{float:right}@media (max-width: 767.98px){label.divider-label{display:none}}label.float-right{display:none;float:right!important}@media (max-width: 767.98px){label.float-right{display:inline;float:unset!important;padding-left:.75rem}}\n"], components: [{ type: DoWarnMessageComponent, selector: "do-warn-message", inputs: ["warnMessage", "param"] }, { type: DoErrorMessageComponent, selector: "do-error-message", inputs: ["hasErrors", "errorMessages", "param"] }], directives: [{ type: i4__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], pipes: { "translate": i5__namespace.TranslatePipe }, encapsulation: i0__namespace.ViewEncapsulation.None });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoContainerOutletComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-container-outlet',
                        styleUrls: ['./do-container-outlet.component.scss'],
                        templateUrl: './do-container-outlet.component.html',
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], propDecorators: { name: [{
                    type: i0.Input
                }], label: [{
                    type: i0.Input
                }], colLabel: [{
                    type: i0.Input
                }], colContent: [{
                    type: i0.Input
                }], nolabel: [{
                    type: i0.Input
                }], dividerlabel: [{
                    type: i0.Input
                }], required: [{
                    type: i0.Input
                }], hasErrors: [{
                    type: i0.Input
                }], errorMessages: [{
                    type: i0.Input
                }], warnMessage: [{
                    type: i0.Input
                }], paramError: [{
                    type: i0.Input
                }], skeleton: [{
                    type: i0.Input
                }], show: [{
                    type: i0.Input
                }] } });

    var DoPageOutletComponent = /** @class */ (function () {
        function DoPageOutletComponent(router) {
            this.router = router;
            this.width = 12;
            this.hidefooter = false;
            this.showToggle = true;
            this.isCollapsed = false;
            this.iconToggle = 'arrow-ios-downward-outline';
            this.selectChange = new i0.EventEmitter();
            this.onCollapsed = new i0.EventEmitter();
            this.onExpanded = new i0.EventEmitter();
        }
        DoPageOutletComponent.prototype.back = function () {
            this.router.navigate([this.url]);
            return false;
        };
        DoPageOutletComponent.prototype.onChangeSelect = function (event) {
            this.selected = event;
            this.selectChange.emit(event);
        };
        DoPageOutletComponent.prototype.collapsed = function (event) {
            this.onCollapsed.emit(event);
        };
        DoPageOutletComponent.prototype.expanded = function (event) {
            this.onExpanded.emit(event);
        };
        DoPageOutletComponent.prototype.toggleCollapse = function () {
            this.isCollapsed = !this.isCollapsed;
            this.iconToggle = this.isCollapsed ? 'arrow-ios-upward-outline' : 'arrow-ios-downward-outline';
        };
        return DoPageOutletComponent;
    }());
    DoPageOutletComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoPageOutletComponent, deps: [{ token: i2__namespace$1.Router }], target: i0__namespace.ɵɵFactoryTarget.Component });
    DoPageOutletComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoPageOutletComponent, selector: "do-page-outlet", inputs: { header: "header", url: "url", width: "width", dataSelect: "dataSelect", selected: "selected", param: "param", hidefooter: "hidefooter", showToggle: "showToggle", isCollapsed: "isCollapsed", iconToggle: "iconToggle" }, outputs: { selectChange: "selectChange", onCollapsed: "onCollapsed", onExpanded: "onExpanded" }, ngImport: i0__namespace, template: "<div class=\"row\">\n  <div class=\"col-lg-{{width}}\">\n    <nb-card>\n      <nb-card-header>\n        <nav class=\"navigation\">\n          <nb-icon icon=\"arrow-back\" class=\"back-link\" pack=\"eva\" (click)=\"back()\" *ngIf=\"url\"></nb-icon>\n          {{header | translate:param}}\n        </nav>\n        <div class=\"row\">\n          <nb-select *ngIf=\"dataSelect\" [selected]=\"selected\" (selectedChange)=\"onChangeSelect($event)\">\n            <nb-option *ngFor=\"let data of dataSelect\" [value]=\"data\">{{ data }}</nb-option>\n          </nb-select>\n          <nb-icon icon=\"{{iconToggle}}\" class=\"toggle-icon\" pack=\"eva\" (click)=\"toggleCollapse()\" *ngIf=\"showToggle\"></nb-icon>\n        </div>\n      </nb-card-header>\n      <nb-card-body\n        (collapsed)=\"collapsed($event)\"\n        (expanded)=\"expanded($event)\"\n        [collapse]=\"isCollapsed\">\n        <ng-content select=\"[pagecontent]\"></ng-content>        \n      </nb-card-body>\n      <nb-card-footer *ngIf=\"!hidefooter\">\n        <ng-content select=\"[pagefooter]\"></ng-content>\n      </nb-card-footer>\n    </nb-card>\n  </div>\n</div>\n", styles: [".nb-theme-default nb-card-header{display:flex;align-items:center;justify-content:space-between;padding-top:.5rem;padding-bottom:.5rem}.nb-theme-default .navigation{display:inline-block}.nb-theme-default .back-link{font-size:1.25rem;margin:.625rem .5rem .625rem 0;cursor:pointer}.nb-theme-default .back-link:hover{color:#36f}.nb-theme-default .toggle-icon{font-size:1.25rem;margin:.625rem 1rem .625rem .5rem;cursor:pointer;line-height:1.5em}.nb-theme-default .toggle-icon:hover{color:#36f}.nb-theme-default .skeleton{animation:loading 1.7s infinite linear;border-radius:.25rem;background:#dedfe1;background-image:linear-gradient(to right,#dedfe1 0%,#f2f3f5 20%,#dedfe1 40%,#dedfe1 100%)}.nb-theme-dark nb-card-header{display:flex;align-items:center;justify-content:space-between;padding-top:.5rem;padding-bottom:.5rem}.nb-theme-dark .navigation{display:inline-block}.nb-theme-dark .back-link{font-size:1.25rem;margin:.625rem .5rem .625rem 0;cursor:pointer}.nb-theme-dark .back-link:hover{color:#36f}.nb-theme-dark .toggle-icon{font-size:1.25rem;margin:.625rem 1rem .625rem .5rem;cursor:pointer;line-height:1.5em}.nb-theme-dark .toggle-icon:hover{color:#36f}.nb-theme-dark .skeleton{animation:loading 1.7s infinite linear;border-radius:.25rem;background:#192038;background-image:linear-gradient(to right,#192038 0%,#222b45 20%,#192038 40%,#192038 100%)}.nb-theme-cosmic nb-card-header{display:flex;align-items:center;justify-content:space-between;padding-top:.5rem;padding-bottom:.5rem}.nb-theme-cosmic .navigation{display:inline-block}.nb-theme-cosmic .back-link{font-size:1.25rem;margin:.625rem .5rem .625rem 0;cursor:pointer}.nb-theme-cosmic .back-link:hover{color:#36f}.nb-theme-cosmic .toggle-icon{font-size:1.25rem;margin:.625rem 1rem .625rem .5rem;cursor:pointer;line-height:1.5em}.nb-theme-cosmic .toggle-icon:hover{color:#36f}.nb-theme-cosmic .skeleton{animation:loading 1.7s infinite linear;border-radius:.25rem;background:#1b1b38;background-image:linear-gradient(to right,#1b1b38 0%,#323259 20%,#1b1b38 40%,#1b1b38 100%)}.nb-theme-corporate nb-card-header{display:flex;align-items:center;justify-content:space-between;padding-top:.5rem;padding-bottom:.5rem}.nb-theme-corporate .navigation{display:inline-block}.nb-theme-corporate .back-link{font-size:1.25rem;margin:.625rem .5rem .625rem 0;cursor:pointer}.nb-theme-corporate .back-link:hover{color:#36f}.nb-theme-corporate .toggle-icon{font-size:1.25rem;margin:.625rem 1rem .625rem .5rem;cursor:pointer;line-height:1.5em}.nb-theme-corporate .toggle-icon:hover{color:#36f}.nb-theme-corporate .skeleton{animation:loading 1.7s infinite linear;border-radius:.25rem;background:#dedfe1;background-image:linear-gradient(to right,#dedfe1 0%,#f2f3f5 20%,#dedfe1 40%,#dedfe1 100%)}@keyframes loading{0%{background-position:-100px}to{background-position:380px}}.label-skeleton{width:100%;height:2.5rem;line-height:1.5rem;padding:.4375rem 1.125rem}.input-skeleton{width:100%;height:2.5rem;line-height:1.5rem;padding:.4375rem 1.125rem}.texteditor-skeleton{width:100%;height:10.5rem;line-height:1.5rem;padding:.4375rem 1.125rem}.button-skeleton{width:6rem;height:2.5rem;line-height:1rem;margin:0 .125rem}\n"], components: [{ type: i2__namespace.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i2__namespace.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i2__namespace.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }, { type: i2__namespace.NbSelectComponent, selector: "nb-select", inputs: ["size", "status", "shape", "appearance", "placeholder", "optionsOverlayOffset", "scrollStrategy", "outline", "filled", "hero", "disabled", "fullWidth", "compareWith", "selected", "multiple", "optionsListClass", "optionsPanelClass"], outputs: ["selectedChange"] }, { type: i2__namespace.NbOptionComponent, selector: "nb-option", inputs: ["disabled", "value"], outputs: ["selectionChange"] }, { type: i2__namespace.NbCardBodyComponent, selector: "nb-card-body" }, { type: i2__namespace.NbCardFooterComponent, selector: "nb-card-footer" }], directives: [{ type: i4__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i4__namespace$1.CollapseDirective, selector: "[collapse]", inputs: ["isAnimated", "display", "collapse"], outputs: ["collapsed", "collapses", "expanded", "expands"], exportAs: ["bs-collapse"] }], pipes: { "translate": i5__namespace.TranslatePipe }, encapsulation: i0__namespace.ViewEncapsulation.None });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoPageOutletComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-page-outlet',
                        styleUrls: ['./do-page-outlet.component.scss'],
                        templateUrl: './do-page-outlet.component.html',
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], ctorParameters: function () { return [{ type: i2__namespace$1.Router }]; }, propDecorators: { header: [{
                    type: i0.Input
                }], url: [{
                    type: i0.Input
                }], width: [{
                    type: i0.Input
                }], dataSelect: [{
                    type: i0.Input
                }], selected: [{
                    type: i0.Input
                }], param: [{
                    type: i0.Input
                }], hidefooter: [{
                    type: i0.Input
                }], showToggle: [{
                    type: i0.Input
                }], isCollapsed: [{
                    type: i0.Input
                }], iconToggle: [{
                    type: i0.Input
                }], selectChange: [{
                    type: i0.Output
                }], onCollapsed: [{
                    type: i0.Output
                }], onExpanded: [{
                    type: i0.Output
                }] } });

    var DoCollapseComponent = /** @class */ (function () {
        function DoCollapseComponent() {
            var _this = this;
            this.toggle = function () {
                _this.opened$.pipe(operators.take(1)).subscribe(function (x) { return _this.openedSubject.next(!x); });
            };
            this.openedSubject = new rxjs.ReplaySubject(1);
            this.openedSubject.next(false);
            this.opened$ = this.openedSubject.asObservable();
            this.openedState$ = this.opened$.pipe(operators.map(function (x) { return x ? 'expanded' : 'collapsed'; }));
        }
        Object.defineProperty(DoCollapseComponent.prototype, "expanded", {
            set: function (expanded) {
                this.openedSubject.next(expanded);
            },
            enumerable: false,
            configurable: true
        });
        return DoCollapseComponent;
    }());
    DoCollapseComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoCollapseComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    DoCollapseComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoCollapseComponent, selector: "do-collapse, [do-collapse]", inputs: { expanded: "expanded" }, ngImport: i0__namespace, template: "<div\n    [@openedState]=\"openedState$ | async\"\n    [ngClass]=\"openedState$ | async\">\n    <ng-content></ng-content>\n</div>", styles: [""], directives: [{ type: i4__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], pipes: { "async": i4__namespace.AsyncPipe }, animations: [
            animations.trigger('openedState', [
                animations.state('collapsed', animations.style({
                    opacity: 0,
                    overflow: 'hidden',
                    height: '0px',
                    minHeight: '0',
                    paddingTop: 0,
                })),
                animations.state('expanded', animations.style({
                    opacity: 1,
                    overflow: 'hidden',
                    height: '*',
                    paddingTop: '0.75rem',
                })),
                animations.transition('collapsed <=> expanded', animations.animate('500ms ease-in-out')),
            ]),
        ] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoCollapseComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-collapse, [do-collapse]',
                        styleUrls: ['./do-collapse.component.scss'],
                        templateUrl: './do-collapse.component.html',
                        animations: [
                            animations.trigger('openedState', [
                                animations.state('collapsed', animations.style({
                                    opacity: 0,
                                    overflow: 'hidden',
                                    height: '0px',
                                    minHeight: '0',
                                    paddingTop: 0,
                                })),
                                animations.state('expanded', animations.style({
                                    opacity: 1,
                                    overflow: 'hidden',
                                    height: '*',
                                    paddingTop: '0.75rem',
                                })),
                                animations.transition('collapsed <=> expanded', animations.animate('500ms ease-in-out')),
                            ]),
                        ],
                    }]
            }], ctorParameters: function () { return []; }, propDecorators: { expanded: [{
                    type: i0.Input
                }] } });

    var EqualValidator = /** @class */ (function () {
        function EqualValidator(validateEqual) {
            this.validateEqual = validateEqual;
        }
        EqualValidator.prototype.validate = function (c) {
            var v = c.value;
            var e = c.root.get(this.validateEqual);
            if (e && v !== e.value && v) {
                return { equal: false };
            }
            return null;
        };
        return EqualValidator;
    }());
    EqualValidator.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EqualValidator, deps: [{ token: 'doValidateEqual', attribute: true }], target: i0__namespace.ɵɵFactoryTarget.Directive });
    EqualValidator.ɵdir = i0__namespace.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.16", type: EqualValidator, selector: "[doValidateEqual][formControlName],[doValidateEqual][formControl],[doValidateEqual][ngModel]", providers: [
            { provide: i1.NG_VALIDATORS, useExisting: i0.forwardRef(function () { return EqualValidator; }), multi: true },
        ], ngImport: i0__namespace });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EqualValidator, decorators: [{
                type: i0.Directive,
                args: [{
                        selector: '[doValidateEqual][formControlName],[doValidateEqual][formControl],[doValidateEqual][ngModel]',
                        providers: [
                            { provide: i1.NG_VALIDATORS, useExisting: i0.forwardRef(function () { return EqualValidator; }), multi: true },
                        ],
                    }]
            }], ctorParameters: function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Attribute,
                            args: ['doValidateEqual']
                        }] }];
        } });

    var NotEqualValidator = /** @class */ (function () {
        function NotEqualValidator(validateNotEqual) {
            this.validateNotEqual = validateNotEqual;
        }
        NotEqualValidator.prototype.validate = function (c) {
            var v = c.value;
            var e = c.root.get(this.validateNotEqual);
            if (e && v === e.value && v) {
                return { equal: true };
            }
            return null;
        };
        return NotEqualValidator;
    }());
    NotEqualValidator.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: NotEqualValidator, deps: [{ token: 'doValidateNotEqual', attribute: true }], target: i0__namespace.ɵɵFactoryTarget.Directive });
    NotEqualValidator.ɵdir = i0__namespace.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.16", type: NotEqualValidator, selector: "[doValidateNotEqual][formControlName],[doValidateNotEqual][formControl],[doValidateNotEqual][ngModel]", providers: [
            { provide: i1.NG_VALIDATORS, useExisting: i0.forwardRef(function () { return NotEqualValidator; }), multi: true },
        ], ngImport: i0__namespace });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: NotEqualValidator, decorators: [{
                type: i0.Directive,
                args: [{
                        selector: '[doValidateNotEqual][formControlName],[doValidateNotEqual][formControl],[doValidateNotEqual][ngModel]',
                        providers: [
                            { provide: i1.NG_VALIDATORS, useExisting: i0.forwardRef(function () { return NotEqualValidator; }), multi: true },
                        ],
                    }]
            }], ctorParameters: function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Attribute,
                            args: ['doValidateNotEqual']
                        }] }];
        } });

    var DragDropDirective = /** @class */ (function () {
        function DragDropDirective() {
            this.onFileDropped = new i0.EventEmitter();
            this.opacity = '0.9';
            this.styleOpacity = '0.9';
        }
        DragDropDirective.prototype.onDragOver = function (evt) {
            evt.preventDefault();
            evt.stopPropagation();
            this.styleOpacity = '0.5';
            this.opacity = this.styleOpacity;
        };
        DragDropDirective.prototype.onDragLeave = function (evt) {
            evt.preventDefault();
            evt.stopPropagation();
            this.styleOpacity = '0.9';
            this.opacity = this.styleOpacity;
        };
        DragDropDirective.prototype.ondrop = function (evt) {
            evt.preventDefault();
            evt.stopPropagation();
            this.styleOpacity = '0.9';
            this.opacity = this.styleOpacity;
            var files = evt.dataTransfer.files;
            if (files.length > 0) {
                this.onFileDropped.emit(files);
            }
        };
        DragDropDirective.prototype.onMouseOver = function (evt) {
            evt.preventDefault();
            evt.stopPropagation();
            this.styleOpacity = '0.5';
            this.opacity = this.styleOpacity;
        };
        DragDropDirective.prototype.onMouseLeave = function (evt) {
            evt.preventDefault();
            evt.stopPropagation();
            this.styleOpacity = '0.9';
            this.opacity = this.styleOpacity;
        };
        return DragDropDirective;
    }());
    DragDropDirective.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DragDropDirective, deps: [], target: i0__namespace.ɵɵFactoryTarget.Directive });
    DragDropDirective.ɵdir = i0__namespace.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.16", type: DragDropDirective, selector: "[doDragDrop]", inputs: { opacity: "opacity" }, outputs: { onFileDropped: "onFileDropped" }, host: { listeners: { "dragover": "onDragOver($event)", "dragleave": "onDragLeave($event)", "drop": "ondrop($event)", "mouseover": "onMouseOver($event)", "mouseleave": "onMouseLeave($event)" }, properties: { "style.opacity": "this.styleOpacity" } }, ngImport: i0__namespace });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DragDropDirective, decorators: [{
                type: i0.Directive,
                args: [{
                        selector: '[doDragDrop]',
                    }]
            }], propDecorators: { onFileDropped: [{
                    type: i0.Output
                }], opacity: [{
                    type: i0.Input
                }], styleOpacity: [{
                    type: i0.HostBinding,
                    args: ['style.opacity']
                }], onDragOver: [{
                    type: i0.HostListener,
                    args: ['dragover', ['$event']]
                }], onDragLeave: [{
                    type: i0.HostListener,
                    args: ['dragleave', ['$event']]
                }], ondrop: [{
                    type: i0.HostListener,
                    args: ['drop', ['$event']]
                }], onMouseOver: [{
                    type: i0.HostListener,
                    args: ['mouseover', ['$event']]
                }], onMouseLeave: [{
                    type: i0.HostListener,
                    args: ['mouseleave', ['$event']]
                }] } });

    var DoCardCollapseComponent = /** @class */ (function () {
        function DoCardCollapseComponent() {
            this.defaultExpanded = false;
            this.show = this.defaultExpanded;
        }
        Object.defineProperty(DoCardCollapseComponent.prototype, "expanded", {
            get: function () {
                return this.defaultExpanded;
            },
            set: function (expanded) {
                this.defaultExpanded = expanded;
                this.show = expanded;
            },
            enumerable: false,
            configurable: true
        });
        DoCardCollapseComponent.prototype.ngOnDestroy = function () { };
        DoCardCollapseComponent.prototype.doCollapse = function () {
            this.collapse.toggle();
            this.show = !this.show;
        };
        return DoCardCollapseComponent;
    }());
    DoCardCollapseComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoCardCollapseComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    DoCardCollapseComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoCardCollapseComponent, selector: "do-card-collapse", inputs: { header: "header", expanded: "expanded" }, viewQueries: [{ propertyName: "collapse", first: true, predicate: ["cardcollapse"], descendants: true }], ngImport: i0__namespace, template: "<div class=\"header-card-collapse\">\n    <label>\n        {{header | translate}}\n    </label>\n    <div class=\"filter-collapse\">\n        <span class=\"filter-icon-collapse\" (click)=\"doCollapse()\">\n            <i class=\"{{show ? 'icon-arrow-down' : 'icon-arrow-up'}}\"></i>\n        </span>\n    </div>\n</div>\n<div do-collapse [expanded]=\"expanded\" #cardcollapse class=\"card-collapse\">\n    <ng-content></ng-content>\n</div>", styles: [".header-card-collapse{padding:.75rem 1rem .25rem;background-color:#f0f3f5;border:1px solid #c8ced3;border-bottom:0;border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.filter-collapse{float:right;cursor:pointer}.filter-icon-collapse:hover{color:#ffc94d}.card-collapse{padding:0 1rem;border:1px solid #c8ced3;margin-bottom:1rem;border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}\n"], components: [{ type: DoCollapseComponent, selector: "do-collapse, [do-collapse]", inputs: ["expanded"] }], pipes: { "translate": i5__namespace.TranslatePipe }, encapsulation: i0__namespace.ViewEncapsulation.None });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoCardCollapseComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-card-collapse',
                        styleUrls: ['./do-card-collapse.component.scss'],
                        templateUrl: './do-card-collapse.component.html',
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], propDecorators: { collapse: [{
                    type: i0.ViewChild,
                    args: ['cardcollapse', { static: false }]
                }], header: [{
                    type: i0.Input
                }], expanded: [{
                    type: i0.Input
                }] } });

    var TextMaskConfig = /** @class */ (function () {
        function TextMaskConfig() {
        }
        return TextMaskConfig;
    }());
    /**
     * We must check whether the agent is Android because composition events
     * behave differently between iOS and Android.
     */
    function _isAndroid() {
        var userAgent = i2$2["ɵgetDOM"]() ? i2$2["ɵgetDOM"]().getUserAgent() : '';
        return /android (\d+)/.test(userAgent.toLowerCase());
    }
    var MaskedInputDirective = /** @class */ (function () {
        function MaskedInputDirective(_renderer, _elementRef, _compositionMode) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this._compositionMode = _compositionMode;
            this.textMaskConfig = {
                mask: [],
                guide: true,
                placeholderChar: '_',
                pipe: undefined,
                keepCharPositions: false,
                showMask: false,
            };
            /** Whether the user is creating a composition string (IME events). */
            this._composing = false;
            this.onChange = function (_) { };
            this.onTouched = function () { };
            if (this._compositionMode == null) {
                this._compositionMode = !_isAndroid();
            }
        }
        MaskedInputDirective.prototype.ngOnChanges = function (changes) {
            this._setupMask(true);
            if (this.textMaskInputElement !== undefined) {
                this.textMaskInputElement.update(this.inputElement.value);
            }
        };
        MaskedInputDirective.prototype.writeValue = function (value) {
            this._setupMask();
            // set the initial value for cases where the mask is disabled
            var normalizedValue = value == null ? '' : value;
            this._renderer.setProperty(this.inputElement, 'value', normalizedValue);
            if (this.textMaskInputElement !== undefined) {
                this.textMaskInputElement.update(value);
            }
        };
        MaskedInputDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
        MaskedInputDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        MaskedInputDirective.prototype.setDisabledState = function (isDisabled) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        };
        MaskedInputDirective.prototype._handleInput = function (value) {
            if (!this._compositionMode || (this._compositionMode && !this._composing)) {
                this._setupMask();
                if (this.textMaskInputElement !== undefined) {
                    this.textMaskInputElement.update(value);
                    // get the updated value
                    value = this.inputElement.value;
                    this.onChange(value);
                }
            }
        };
        MaskedInputDirective.prototype._setupMask = function (create) {
            if (create === void 0) { create = false; }
            if (!this.inputElement) {
                if (this._elementRef.nativeElement.tagName.toUpperCase() === 'INPUT') {
                    // `textMask` directive is used directly on an input element
                    this.inputElement = this._elementRef.nativeElement;
                }
                else {
                    // `textMask` directive is used on an abstracted input element, `md-input-container`, etc
                    this.inputElement = this._elementRef.nativeElement.getElementsByTagName('INPUT')[0];
                }
            }
            if (this.inputElement && create) {
                this.textMaskInputElement = textMaskCore.createTextMaskInputElement(Object.assign({ inputElement: this.inputElement }, this.textMaskConfig));
            }
        };
        MaskedInputDirective.prototype._compositionStart = function () { this._composing = true; };
        MaskedInputDirective.prototype._compositionEnd = function (value) {
            this._composing = false;
            // tslint:disable-next-line: no-unused-expression
            this._compositionMode && this._handleInput(value);
        };
        return MaskedInputDirective;
    }());
    MaskedInputDirective.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: MaskedInputDirective, deps: [{ token: i0__namespace.Renderer2 }, { token: i0__namespace.ElementRef }, { token: i1.COMPOSITION_BUFFER_MODE, optional: true }], target: i0__namespace.ɵɵFactoryTarget.Directive });
    MaskedInputDirective.ɵdir = i0__namespace.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.16", type: MaskedInputDirective, selector: "[do-mask]", inputs: { textMaskConfig: ["do-mask", "textMaskConfig"] }, host: { listeners: { "blur": "onTouched()", "input": "_handleInput($event.target.value)", "compositionstart": "_compositionStart()", "compositionend": "_compositionEnd($event.target.value)" } }, exportAs: ["do-mask"], usesOnChanges: true, ngImport: i0__namespace });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: MaskedInputDirective, decorators: [{
                type: i0.Directive,
                args: [{
                        selector: '[do-mask]',
                        exportAs: 'do-mask',
                    }]
            }], ctorParameters: function () {
            return [{ type: i0__namespace.Renderer2 }, { type: i0__namespace.ElementRef }, { type: undefined, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Inject,
                            args: [i1.COMPOSITION_BUFFER_MODE]
                        }] }];
        }, propDecorators: { textMaskConfig: [{
                    type: i0.Input,
                    args: ['do-mask']
                }], onTouched: [{
                    type: i0.HostListener,
                    args: ['blur']
                }], _handleInput: [{
                    type: i0.HostListener,
                    args: ['input', ['$event.target.value']]
                }], _compositionStart: [{
                    type: i0.HostListener,
                    args: ['compositionstart']
                }], _compositionEnd: [{
                    type: i0.HostListener,
                    args: ['compositionend', ['$event.target.value']]
                }] } });

    var BASE_COMPONENTS = [
        DoWarnMessageComponent,
        DoErrorMessageComponent,
        DoContainerOutletComponent,
        DoPageOutletComponent,
        DoCollapseComponent,
        DoCardCollapseComponent,
        MaskedInputDirective,
    ];
    var BASE_DIRECTIVES = [
        EqualValidator,
        NotEqualValidator,
        DragDropDirective,
    ];
    var DoBaseModule = /** @class */ (function () {
        function DoBaseModule() {
        }
        return DoBaseModule;
    }());
    DoBaseModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoBaseModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DoBaseModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoBaseModule, declarations: [DoWarnMessageComponent,
            DoErrorMessageComponent,
            DoContainerOutletComponent,
            DoPageOutletComponent,
            DoCollapseComponent,
            DoCardCollapseComponent,
            MaskedInputDirective, EqualValidator,
            NotEqualValidator,
            DragDropDirective], imports: [i4.CommonModule,
            i1.FormsModule,
            i5.TranslateModule,
            i2.NbCardModule,
            i2.NbIconModule,
            i2.NbSelectModule, DoToastrModule, i4__namespace$1.CollapseModule], exports: [DoWarnMessageComponent,
            DoErrorMessageComponent,
            DoContainerOutletComponent,
            DoPageOutletComponent,
            DoCollapseComponent,
            DoCardCollapseComponent,
            MaskedInputDirective, EqualValidator,
            NotEqualValidator,
            DragDropDirective] });
    DoBaseModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoBaseModule, imports: [[
                i4.CommonModule,
                i1.FormsModule,
                i5.TranslateModule,
                i2.NbCardModule,
                i2.NbIconModule,
                i2.NbSelectModule,
                DoToastrModule.forRoot(),
                i4$1.CollapseModule.forRoot(),
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoBaseModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i4.CommonModule,
                            i1.FormsModule,
                            i5.TranslateModule,
                            i2.NbCardModule,
                            i2.NbIconModule,
                            i2.NbSelectModule,
                            DoToastrModule.forRoot(),
                            i4$1.CollapseModule.forRoot(),
                        ],
                        declarations: __spreadArray(__spreadArray([], __read(BASE_COMPONENTS)), __read(BASE_DIRECTIVES)),
                        exports: __spreadArray(__spreadArray([], __read(BASE_COMPONENTS)), __read(BASE_DIRECTIVES)),
                    }]
            }] });

    var ValidatorAccessorDirective = /** @class */ (function () {
        function ValidatorAccessorDirective(ngControl) {
            this.ngControl = ngControl;
            this.label = '';
            this.nolabel = false;
            this.disabled = false;
            this.required = false;
            this.onChange = function (_) { };
            this.onTouched = function (_) { };
            // ngControl && (ngControl.valueAccessor = this);
            if (this.ngControl != null) {
                this.ngControl.valueAccessor = this;
            }
        }
        ValidatorAccessorDirective.prototype.onInit = function () { };
        ValidatorAccessorDirective.prototype.ngOnInit = function () {
            this.onInit();
            var control = this.ngControl.control;
            var validators = control.validator ? [control.validator] : [];
            if (this.ngControl.control.errors) {
                this.required = this.ngControl.control.errors['required'];
            }
            if (this.required && !this.disabled) {
                validators.push(i1.Validators.required);
                this.ngControl.control.setErrors({ required: true });
            }
            if (this.pattern) {
                validators.push(i1.Validators.pattern(this.pattern));
            }
            this.ngControl.control.setValidators(validators);
            this.ngControl.control.updateValueAndValidity();
        };
        ValidatorAccessorDirective.prototype.validate = function (c) {
            var validators = [];
            if (this.required) {
                validators.push(i1.Validators.required);
            }
            if (this.pattern) {
                validators.push(i1.Validators.pattern(this.pattern));
            }
            return validators;
        };
        Object.defineProperty(ValidatorAccessorDirective.prototype, "hasErrors", {
            get: function () {
                return (!this.disabled &&
                    this.ngControl.control &&
                    this.ngControl.control.invalid &&
                    this.ngControl.touched);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ValidatorAccessorDirective.prototype, "hasSuccess", {
            get: function () {
                return (!this.disabled &&
                    this.ngControl.control &&
                    this.ngControl.control.valid &&
                    this.ngControl.touched);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ValidatorAccessorDirective.prototype, "errorMessages", {
            get: function () {
                var _this = this;
                var errors = [];
                if (this.ngControl.errors) {
                    Object.keys(this.ngControl.errors).forEach(function (property) {
                        switch (property) {
                            case 'required':
                                errors.push('error.required');
                                break;
                            case 'email':
                                errors.push('error.pattern.email');
                                break;
                            case 'minlength':
                                errors.push('error.minlength');
                                break;
                            case 'daterange':
                                errors.push('error.daterange');
                                break;
                            default:
                                errors.push('error.'.concat(property).concat('.').concat(_this.name));
                                break;
                        }
                    });
                }
                return errors;
            },
            enumerable: false,
            configurable: true
        });
        ValidatorAccessorDirective.prototype.registerOnValidatorChange = function (fn) {
            this.onChange = fn;
        };
        return ValidatorAccessorDirective;
    }());
    ValidatorAccessorDirective.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ValidatorAccessorDirective, deps: [{ token: i1__namespace.NgControl }], target: i0__namespace.ɵɵFactoryTarget.Directive });
    ValidatorAccessorDirective.ɵdir = i0__namespace.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.16", type: ValidatorAccessorDirective, inputs: { name: "name", pattern: "pattern", label: "label", nolabel: "nolabel", disabled: "disabled", required: "required", paramError: "paramError", warnMessage: "warnMessage" }, ngImport: i0__namespace });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ValidatorAccessorDirective, decorators: [{
                type: i0.Directive
            }], ctorParameters: function () { return [{ type: i1__namespace.NgControl }]; }, propDecorators: { name: [{
                    type: i0.Input
                }], pattern: [{
                    type: i0.Input
                }], label: [{
                    type: i0.Input
                }], nolabel: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }], required: [{
                    type: i0.Input
                }], paramError: [{
                    type: i0.Input
                }], warnMessage: [{
                    type: i0.Input
                }] } });

    var ValueAccessorDirective = /** @class */ (function (_super) {
        __extends(ValueAccessorDirective, _super);
        function ValueAccessorDirective(ngControl, locale) {
            var _this = _super.call(this, ngControl) || this;
            _this.ngControl = ngControl;
            _this.locale = locale;
            _this.format = doCore.DateFormat.DATE;
            _this.skeleton = false;
            _this.show = true;
            return _this;
        }
        Object.defineProperty(ValueAccessorDirective.prototype, "value", {
            get: function () { return this._value; },
            set: function (value) {
                if (this._value !== value) {
                    this._value = value;
                    this.onChange(value);
                    var control = this.ngControl.control;
                    if (control) {
                        control.updateValueAndValidity();
                        control.markAsTouched();
                        control.markAsDirty();
                    }
                }
            },
            enumerable: false,
            configurable: true
        });
        ValueAccessorDirective.prototype.writeValue = function (value) {
            this._value = value;
            this.onChange(this.value);
            var control = this.ngControl.control;
            if (control) {
                control.updateValueAndValidity();
                control.markAsUntouched();
                control.markAsPristine();
            }
        };
        ValueAccessorDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
        ValueAccessorDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        ValueAccessorDirective.prototype.setDisabledState = function (isDisabled) { this.disabled = isDisabled; };
        return ValueAccessorDirective;
    }(ValidatorAccessorDirective));
    ValueAccessorDirective.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ValueAccessorDirective, deps: "invalid", target: i0__namespace.ɵɵFactoryTarget.Directive });
    ValueAccessorDirective.ɵdir = i0__namespace.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.16", type: ValueAccessorDirective, inputs: { format: "format", skeleton: "skeleton", show: "show" }, usesInheritance: true, ngImport: i0__namespace });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ValueAccessorDirective, decorators: [{
                type: i0.Directive
            }], ctorParameters: function () { return [{ type: i1__namespace.NgControl }, { type: undefined }]; }, propDecorators: { format: [{
                    type: i0.Input
                }], skeleton: [{
                    type: i0.Input
                }], show: [{
                    type: i0.Input
                }] } });

    var DoInputTextComponent = /** @class */ (function (_super) {
        __extends(DoInputTextComponent, _super);
        function DoInputTextComponent(ngControl, locale) {
            var _this = _super.call(this, ngControl, locale) || this;
            _this.locale = locale;
            _this.colLabel = 3;
            _this.colInput = 9;
            _this.minLength = 0;
            _this.maxLength = 100;
            _this.min = 0;
            _this.max = 999;
            _this.step = 1;
            _this.capslock = false;
            _this.type = 'text';
            return _this;
        }
        DoInputTextComponent.prototype.onKeyUp = function (event) {
            if (this.capslock) {
                this.value = this.value.toUpperCase();
            }
        };
        DoInputTextComponent.prototype.onKeyDown = function (event) {
            if (this.type === 'number') {
                if (event.key.toUpperCase() === 'E') {
                    return false;
                }
                if (this.step >= 1 && event.key === '.') {
                    return false;
                }
                if (this.min >= 0 && event.key === '-') {
                    return false;
                }
                if (this.value) {
                    if (this.value.length >= this.maxLength) {
                        if (['DELETE', 'BACKSPACE', 'TAB', 'ESCAPE', 'ENTER'].indexOf(event.key.toUpperCase()) !== -1 ||
                            (event.key.toUpperCase() === 'A' && event.ctrlKey === true) || // Allow: Ctrl+A
                            (event.key.toUpperCase() === 'C' && event.ctrlKey === true) || // Allow: Ctrl+C
                            (event.key.toUpperCase() === 'X' && event.ctrlKey === true) || // Allow: Ctrl+X
                            (event.key.toUpperCase() === 'A' && event.metaKey === true) || // Cmd+A (Mac)
                            (event.key.toUpperCase() === 'C' && event.metaKey === true) || // Cmd+C (Mac)
                            (event.key.toUpperCase() === 'X' && event.metaKey === true) || // Cmd+X (Mac)
                            (event.key.toUpperCase() === 'END') ||
                            (event.key.toUpperCase() === 'HOME') ||
                            (event.key.toUpperCase() === 'ARROWLEFT') ||
                            (event.key.toUpperCase() === 'ARROWRIGHT')) {
                            return true;
                        }
                        return false;
                    }
                }
                return true;
            }
            return true;
        };
        return DoInputTextComponent;
    }(ValueAccessorDirective));
    DoInputTextComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoInputTextComponent, deps: [{ token: i1__namespace.NgControl, optional: true, self: true }, { token: i0.LOCALE_ID }], target: i0__namespace.ɵɵFactoryTarget.Component });
    DoInputTextComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoInputTextComponent, selector: "do-input-text", inputs: { placeholder: "placeholder", colLabel: "colLabel", colInput: "colInput", minLength: "minLength", maxLength: "maxLength", min: "min", max: "max", step: "step", capslock: "capslock", type: "type" }, usesInheritance: true, ngImport: i0__namespace, template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\" \n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [warnMessage]=\"warnMessage\"\n  [skeleton]=\"skeleton\" [show]=\"show\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <input\n      type=\"{{type}}\"\n      id=\"{{name}}\"\n      [step]=\"step\"\n      [pattern]=\"pattern\"\n      [minLength]=\"minLength\"\n      [maxLength]=\"maxLength\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled\"\n      [ngClass]=\"{\n        'status-danger': hasErrors,\n        'status-success': (hasSuccess && required),\n        'input-capslock': capslock\n      }\"\n      (input)=\"onChange($event.target.value)\"\n      (change)=\"onChange($event.target.value)\"\n      (blur)=\"onTouched($event.target.value)\"\n      (focus)=\"onTouched($event.target.value)\"\n      (keydown)=\"onKeyDown($event)\"\n      (keypress)=\"onKeyUp($event)\"\n      [(ngModel)]=\"value\"\n      #input nbInput fullWidth>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>", styles: [".input-capslock{text-transform:uppercase}\n"], components: [{ type: DoContainerOutletComponent, selector: "do-container-outlet", inputs: ["name", "label", "colLabel", "colContent", "nolabel", "dividerlabel", "required", "hasErrors", "errorMessages", "warnMessage", "paramError", "skeleton", "show"] }], directives: [{ type: i4__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2__namespace.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i1__namespace.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1__namespace.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { type: i1__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i4__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1__namespace.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], pipes: { "translate": i5__namespace.TranslatePipe }, encapsulation: i0__namespace.ViewEncapsulation.None });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoInputTextComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-input-text',
                        styleUrls: ['./do-input-text.component.scss'],
                        templateUrl: './do-input-text.component.html',
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace.NgControl, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Self
                        }] }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i0.LOCALE_ID]
                        }] }];
        }, propDecorators: { placeholder: [{
                    type: i0.Input
                }], colLabel: [{
                    type: i0.Input
                }], colInput: [{
                    type: i0.Input
                }], minLength: [{
                    type: i0.Input
                }], maxLength: [{
                    type: i0.Input
                }], min: [{
                    type: i0.Input
                }], max: [{
                    type: i0.Input
                }], step: [{
                    type: i0.Input
                }], capslock: [{
                    type: i0.Input
                }], type: [{
                    type: i0.Input
                }] } });

    var CurrencyMaskDirective = /** @class */ (function () {
        function CurrencyMaskDirective(ngControl, el) {
            this.ngControl = ngControl;
            this.el = el;
            this.prefix = 'Rp';
            this.decimalSeparator = '.';
            this.thousandsSeparator = ',';
            this.suffix = ',-';
            this.padding = 5;
        }
        CurrencyMaskDirective.prototype.onFocus = function (value, event) {
            value = value ? value : this.prefix.concat(' ');
            value = this.onLeave(value.replace(this.suffix, ''));
            event.target.toNumber = this.toNumber(value);
            this.ngControl.valueAccessor.writeValue(value);
        };
        CurrencyMaskDirective.prototype.onBlur = function (value, event) {
            value = value.replace(/\D/g, '') ? this.onLeave(value).concat(this.suffix) : '';
            event.target.toNumber = this.toNumber(value);
            this.ngControl.valueAccessor.writeValue(value);
        };
        CurrencyMaskDirective.prototype.onModelChange = function (value) {
            value = this.toNumber(value);
            value = value.replace(new RegExp('[^0-9|^' + this.decimalSeparator + '|^-]', 'g'), '');
            if (value.toString().match(new RegExp('^\-?[0-9]*(' + this.decimalSeparator + '[0-9]*)?$', 'g'))) {
                var _a = this.onInputChange(value), val = _a.val, frac = _a.frac;
                if (value.toString().match(new RegExp('^\-?[0-9]*$', 'g'))) {
                    val = (!isNaN(parseInt(val, 10)) && val !== '-0') ? parseInt(val, 10).toString() : val;
                    value = this.onTransform(val, frac);
                    this.value = this.prefix.concat(' ').concat(value);
                }
                if (value.toString().match(new RegExp('^(\-?[0-9])*[' + this.decimalSeparator + '][0-9]*$', 'g')) &&
                    !value.toString().startsWith(this.decimalSeparator, 0)) {
                    frac = frac.substring(0, this.padding);
                    frac = this.decimalSeparator.concat(frac);
                    value = this.onTransform(val, frac);
                    this.value = this.prefix.concat(' ').concat(value);
                }
                this.el.nativeElement.toNumber = this.toNumber(this.prefix.concat(' ').concat(this.onTransform(val, (parseInt(frac.replace(this.decimalSeparator, ''), 10) > 0) ?
                    this.pad(frac, this.padding + 1).substring(0, this.padding + 1) :
                    '')));
            }
            this.ngControl.valueAccessor.writeValue(this.value);
        };
        CurrencyMaskDirective.prototype.onKeyDown = function (event) {
            if (event.key) {
                if (['DELETE', 'BACKSPACE', 'TAB', 'ESCAPE',
                    'ENTER', 'DECIMAL POINT', 'PERIOD', 'DASH'].indexOf(event.key.toUpperCase()) !== -1 ||
                    (event.key.toUpperCase() === 'A' && event.ctrlKey === true) || // Allow: Ctrl+A
                    (event.key.toUpperCase() === 'C' && event.ctrlKey === true) || // Allow: Ctrl+C
                    (event.key.toUpperCase() === 'V' && event.ctrlKey === true) || // Allow: Ctrl+V
                    (event.key.toUpperCase() === 'X' && event.ctrlKey === true) || // Allow: Ctrl+X
                    (event.key.toUpperCase() === 'A' && event.metaKey === true) || // Cmd+A (Mac)
                    (event.key.toUpperCase() === 'C' && event.metaKey === true) || // Cmd+C (Mac)
                    (event.key.toUpperCase() === 'V' && event.metaKey === true) || // Cmd+V (Mac)
                    (event.key.toUpperCase() === 'X' && event.metaKey === true) || // Cmd+X (Mac)
                    (event.key.toUpperCase() === 'END') ||
                    (event.key.toUpperCase() === 'HOME') ||
                    (event.key.toUpperCase() === 'ARROWLEFT') ||
                    (event.key.toUpperCase() === 'ARROWRIGHT') || (event.key.match(/[0-9.,\-]/g))) {
                    return; // let it happen, don't do anything
                }
            }
            // Ensure that it is a number and stop the keypress
            /*
            if ((event.shiftKey || (event.key.match(/[0-9.,\-+]/g)))) {
                event.preventDefault();
            }
            */
        };
        CurrencyMaskDirective.prototype.onLeave = function (value) {
            var _a = this.onInputChange(value), val = _a.val, frac = _a.frac;
            var fraction = '';
            if (frac) {
                if (parseInt(frac, 10) > 0) {
                    fraction = this.decimalSeparator + this.pad(frac, this.padding).substring(0, this.padding);
                }
            }
            return this.onTransform(val, fraction);
        };
        CurrencyMaskDirective.prototype.onInputChange = function (value) {
            var _a = __read((value || '').split(this.decimalSeparator), 2), _b = _a[0], val = _b === void 0 ? '' : _b, _c = _a[1], fraction = _c === void 0 ? '' : _c;
            return { val: val, frac: fraction };
        };
        CurrencyMaskDirective.prototype.onTransform = function (val, fraction) {
            val = val.replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
            return val + fraction;
        };
        CurrencyMaskDirective.prototype.toNumber = function (val) {
            return val
                .replace(this.prefix, '')
                .replace(' ', '')
                .replace(this.suffix, '')
                .replace(new RegExp(this.thousandsSeparator, 'g'), '');
        };
        CurrencyMaskDirective.prototype.pad = function (val, size) {
            while (val.length < size) {
                val = val + '0';
            }
            return val;
        };
        return CurrencyMaskDirective;
    }());
    CurrencyMaskDirective.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: CurrencyMaskDirective, deps: [{ token: i1__namespace.NgControl }, { token: i0__namespace.ElementRef }], target: i0__namespace.ɵɵFactoryTarget.Directive });
    CurrencyMaskDirective.ɵdir = i0__namespace.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.16", type: CurrencyMaskDirective, selector: "input[doCurrency]", inputs: { prefix: "prefix", decimalSeparator: ["decimal", "decimalSeparator"], thousandsSeparator: ["thousand", "thousandsSeparator"], suffix: "suffix", padding: "padding" }, host: { listeners: { "focus": "onFocus($event.target.value,$event)", "blur": "onBlur($event.target.value,$event)", "ngModelChange": "onModelChange($event)", "keydown": "onKeyDown($event)" } }, ngImport: i0__namespace });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: CurrencyMaskDirective, decorators: [{
                type: i0.Directive,
                args: [{
                        selector: 'input[doCurrency]',
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.NgControl }, { type: i0__namespace.ElementRef }]; }, propDecorators: { prefix: [{
                    type: i0.Input,
                    args: ['prefix']
                }], decimalSeparator: [{
                    type: i0.Input,
                    args: ['decimal']
                }], thousandsSeparator: [{
                    type: i0.Input,
                    args: ['thousand']
                }], suffix: [{
                    type: i0.Input,
                    args: ['suffix']
                }], padding: [{
                    type: i0.Input,
                    args: ['padding']
                }], onFocus: [{
                    type: i0.HostListener,
                    args: ['focus', ['$event.target.value', '$event']]
                }], onBlur: [{
                    type: i0.HostListener,
                    args: ['blur', ['$event.target.value', '$event']]
                }], onModelChange: [{
                    type: i0.HostListener,
                    args: ['ngModelChange', ['$event']]
                }], onKeyDown: [{
                    type: i0.HostListener,
                    args: ['keydown', ['$event']]
                }] } });

    var DoInputCurrencyComponent = /** @class */ (function (_super) {
        __extends(DoInputCurrencyComponent, _super);
        function DoInputCurrencyComponent(ngControl, locale) {
            var _this = _super.call(this, ngControl, locale) || this;
            _this.locale = locale;
            _this.colLabel = 3;
            _this.colInput = 9;
            _this.minLength = 0;
            _this.maxLength = 100;
            _this.prefix = 'Rp';
            _this.decimalSeparator = '.';
            _this.thousandsSeparator = ',';
            _this.suffix = ',-';
            _this.padding = 5;
            return _this;
        }
        DoInputCurrencyComponent.prototype.writeValue = function (value) {
            this._value = value ? this.transform(value) : value;
            this.onChange(this.value);
            var control = this.ngControl.control;
            if (control) {
                control.updateValueAndValidity();
                control.markAsTouched();
                control.markAsDirty();
            }
        };
        DoInputCurrencyComponent.prototype.transform = function (value) {
            var _a = this.toNumber(value), val = _a.val, frac = _a.frac;
            var v = val.replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
            return this.prefix.concat(' ').concat(v).concat(frac).concat(this.suffix);
        };
        DoInputCurrencyComponent.prototype.toNumber = function (value) {
            var _a = __read((value || '').split(this.decimalSeparator), 2), _b = _a[0], val = _b === void 0 ? '' : _b, _c = _a[1], frac = _c === void 0 ? '' : _c;
            var fraction = '';
            if (frac) {
                if (parseInt(frac, 10) > 0) {
                    fraction = this.decimalSeparator + this.pad(frac, this.padding).substring(0, this.padding);
                }
            }
            return { val: val, frac: fraction };
        };
        DoInputCurrencyComponent.prototype.pad = function (val, size) {
            while (val.length < size) {
                val = val + '0';
            }
            return val;
        };
        return DoInputCurrencyComponent;
    }(ValueAccessorDirective));
    DoInputCurrencyComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoInputCurrencyComponent, deps: [{ token: i1__namespace.NgControl, optional: true, self: true }, { token: i0.LOCALE_ID }], target: i0__namespace.ɵɵFactoryTarget.Component });
    DoInputCurrencyComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoInputCurrencyComponent, selector: "do-input-currency", inputs: { placeholder: "placeholder", colLabel: "colLabel", colInput: "colInput", minLength: "minLength", maxLength: "maxLength", prefix: "prefix", decimalSeparator: ["decimal", "decimalSeparator"], thousandsSeparator: ["thousand", "thousandsSeparator"], suffix: "suffix", padding: "padding" }, usesInheritance: true, ngImport: i0__namespace, template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\" \n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [warnMessage]=\"warnMessage\"\n  [skeleton]=\"skeleton\" [show]=\"show\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <input\n      type=\"text\"\n      id=\"{{name}}\"\n      [minLength]=\"minLength\"\n      [maxLength]=\"maxLength\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled || skeleton\"\n      [ngClass]=\"{\n        'status-danger': hasErrors,\n        'status-success': (hasSuccess && required)\n      }\"\n      (input)=\"onChange($event.target.toNumber)\"\n      (change)=\"onChange($event.target.toNumber)\"\n      (blur)=\"onTouched($event.target.toNumber)\"\n      [(ngModel)]=\"value\"\n      doCurrency\n      [prefix]=\"prefix\"\n      [decimal]=\"decimalSeparator\"\n      [thousand]=\"thousandsSeparator\"\n      [suffix]=\"suffix\"\n      [padding]=\"padding\"\n      #input nbInput fullWidth>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>", styles: [""], components: [{ type: DoContainerOutletComponent, selector: "do-container-outlet", inputs: ["name", "label", "colLabel", "colContent", "nolabel", "dividerlabel", "required", "hasErrors", "errorMessages", "warnMessage", "paramError", "skeleton", "show"] }], directives: [{ type: i4__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: CurrencyMaskDirective, selector: "input[doCurrency]", inputs: ["prefix", "decimal", "thousand", "suffix", "padding"] }, { type: i2__namespace.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i1__namespace.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i4__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1__namespace.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], pipes: { "translate": i5__namespace.TranslatePipe }, encapsulation: i0__namespace.ViewEncapsulation.None });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoInputCurrencyComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-input-currency',
                        styleUrls: ['./do-input-currency.component.scss'],
                        templateUrl: './do-input-currency.component.html',
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace.NgControl, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Self
                        }] }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i0.LOCALE_ID]
                        }] }];
        }, propDecorators: { placeholder: [{
                    type: i0.Input
                }], colLabel: [{
                    type: i0.Input
                }], colInput: [{
                    type: i0.Input
                }], minLength: [{
                    type: i0.Input
                }], maxLength: [{
                    type: i0.Input
                }], prefix: [{
                    type: i0.Input,
                    args: ['prefix']
                }], decimalSeparator: [{
                    type: i0.Input,
                    args: ['decimal']
                }], thousandsSeparator: [{
                    type: i0.Input,
                    args: ['thousand']
                }], suffix: [{
                    type: i0.Input,
                    args: ['suffix']
                }], padding: [{
                    type: i0.Input,
                    args: ['padding']
                }] } });

    var DoInputIconComponent = /** @class */ (function (_super) {
        __extends(DoInputIconComponent, _super);
        function DoInputIconComponent(ngControl, locale) {
            var _this = _super.call(this, ngControl, locale) || this;
            _this.locale = locale;
            _this.colLabel = 3;
            _this.colInput = 9;
            _this.minLength = 0;
            _this.maxLength = 100;
            _this.buttontype = 'btn-primary';
            _this.type = 'text';
            _this.iconcursor = false;
            _this.eva = false;
            _this.icon = 'search-outline';
            _this.clickIcon = new i0.EventEmitter();
            _this.focus = new i0.EventEmitter();
            return _this;
        }
        DoInputIconComponent.prototype.onClickIcon = function () {
            if (this.iconcursor) {
                this.clickIcon.emit(this.value);
            }
        };
        DoInputIconComponent.prototype.onFocus = function (value) {
            this.focus.emit(value);
            this.onTouched(value);
        };
        return DoInputIconComponent;
    }(ValueAccessorDirective));
    DoInputIconComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoInputIconComponent, deps: [{ token: i1__namespace.NgControl, optional: true, self: true }, { token: i0.LOCALE_ID }], target: i0__namespace.ɵɵFactoryTarget.Component });
    DoInputIconComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoInputIconComponent, selector: "do-input-icon", inputs: { placeholder: "placeholder", colLabel: "colLabel", colInput: "colInput", minLength: "minLength", maxLength: "maxLength", buttontype: "buttontype", type: "type", iconcursor: "iconcursor", eva: "eva", icon: "icon" }, outputs: { clickIcon: "clickIcon", focus: "focus" }, usesInheritance: true, ngImport: i0__namespace, template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [warnMessage]=\"warnMessage\"\n  [skeleton]=\"skeleton\" [show]=\"show\">\n  <div class=\"col-sm-{{colInput}} input-group\" *ngIf=\"!skeleton; else contentskeleton\">\n    <input\n      type=\"{{type}}\"\n      id=\"{{name}}\"\n      [pattern]=\"pattern\"\n      [minLength]=\"minLength\"\n      [maxLength]=\"maxLength\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled\"\n      [ngClass]=\"{\n        'status-danger': hasErrors,\n        'status-success': (hasSuccess && required)\n      }\"\n      (input)=\"onChange($event.target.value)\"\n      (change)=\"onChange($event.target.value)\"\n      (blur)=\"onTouched($event.target.value)\"\n      (focus)=\"onFocus($event.target.value)\"\n      [(ngModel)]=\"value\"\n      #input nbInput fullWidth>\n      <div\n        class=\"xinput-icon\"\n        [ngStyle]=\"{\n          'cursor': iconcursor ? 'pointer' : 'unset'\n        }\">\n        <span class=\"{{icon}}\" *ngIf=\"!eva\"></span>\n        <nb-icon class=\"xinput-icon-hover\" icon=\"{{icon}}\" (click)=\"onClickIcon()\" *ngIf=\"eva\"></nb-icon>\n      </div>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>", styles: ["nb-icon{color:#8f9bb3}.xinput-icon{position:absolute;right:0;margin:.6rem 1.5rem 0 0}.xinput-icon-hover:hover{color:#598bff}\n"], components: [{ type: DoContainerOutletComponent, selector: "do-container-outlet", inputs: ["name", "label", "colLabel", "colContent", "nolabel", "dividerlabel", "required", "hasErrors", "errorMessages", "warnMessage", "paramError", "skeleton", "show"] }, { type: i2__namespace.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }], directives: [{ type: i4__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2__namespace.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i1__namespace.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1__namespace.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { type: i1__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i4__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1__namespace.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i4__namespace.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], pipes: { "translate": i5__namespace.TranslatePipe }, encapsulation: i0__namespace.ViewEncapsulation.None });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoInputIconComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-input-icon',
                        styleUrls: ['./do-input-icon.component.scss'],
                        templateUrl: './do-input-icon.component.html',
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace.NgControl, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Self
                        }] }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i0.LOCALE_ID]
                        }] }];
        }, propDecorators: { placeholder: [{
                    type: i0.Input
                }], colLabel: [{
                    type: i0.Input
                }], colInput: [{
                    type: i0.Input
                }], minLength: [{
                    type: i0.Input
                }], maxLength: [{
                    type: i0.Input
                }], buttontype: [{
                    type: i0.Input
                }], type: [{
                    type: i0.Input
                }], iconcursor: [{
                    type: i0.Input
                }], eva: [{
                    type: i0.Input
                }], icon: [{
                    type: i0.Input
                }], clickIcon: [{
                    type: i0.Output
                }], focus: [{
                    type: i0.Output
                }] } });

    var DoInputBaseIconComponent = /** @class */ (function (_super) {
        __extends(DoInputBaseIconComponent, _super);
        function DoInputBaseIconComponent(ngControl, locale) {
            var _this = _super.call(this, ngControl, locale) || this;
            _this.locale = locale;
            _this.minLength = 0;
            _this.maxLength = 100;
            _this.iconcursor = false;
            _this.icon = 'search-outline';
            _this.buttontype = 'btn-primary';
            _this.type = 'text';
            _this.clickIcon = new i0.EventEmitter();
            _this.focus = new i0.EventEmitter();
            return _this;
        }
        DoInputBaseIconComponent.prototype.onClickIcon = function () {
            if (this.iconcursor) {
                this.clickIcon.emit(this.value);
            }
        };
        DoInputBaseIconComponent.prototype.onFocus = function (value) {
            this.focus.emit(value);
            this.onTouched(value);
        };
        return DoInputBaseIconComponent;
    }(ValueAccessorDirective));
    DoInputBaseIconComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoInputBaseIconComponent, deps: [{ token: i1__namespace.NgControl, optional: true, self: true }, { token: i0.LOCALE_ID }], target: i0__namespace.ɵɵFactoryTarget.Component });
    DoInputBaseIconComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoInputBaseIconComponent, selector: "do-input-base-icon", inputs: { placeholder: "placeholder", minLength: "minLength", maxLength: "maxLength", iconcursor: "iconcursor", icon: "icon", buttontype: "buttontype", type: "type" }, outputs: { clickIcon: "clickIcon", focus: "focus" }, usesInheritance: true, ngImport: i0__namespace, template: "<div class=\"input-group\">\n  <input\n    type=\"{{type}}\"\n    id=\"{{name}}\"\n    [pattern]=\"pattern\"\n    [minLength]=\"minLength\"\n    [maxLength]=\"maxLength\"\n    [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n    [required]=\"required\"\n    [disabled]=\"disabled\"\n    [ngClass]=\"{\n      'status-danger': hasErrors,\n      'status-success': hasSuccess\n    }\"\n    (input)=\"onChange($event.target.value)\"\n    (change)=\"onChange($event.target.value)\"\n    (blur)=\"onTouched($event.target.value)\"\n    (focus)=\"onFocus($event.target.value)\"\n    [(ngModel)]=\"value\"\n    #input nbInput fullWidth>\n  <div\n    class=\"input-icon\"\n    [ngStyle]=\"{\n      'cursor': iconcursor ? 'pointer' : 'unset'\n    }\">\n    <nb-icon class=\"input-icon-hover\" icon=\"{{icon}}\" (click)=\"onClickIcon()\"></nb-icon>\n  </div>\n</div>\n", styles: ["nb-icon{color:#8f9bb3}.input-icon{position:absolute;right:0;padding:10px}.input-icon-hover:hover{color:#598bff}\n"], components: [{ type: i2__namespace.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }], directives: [{ type: i2__namespace.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i1__namespace.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1__namespace.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { type: i1__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i4__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1__namespace.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i4__namespace.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], pipes: { "translate": i5__namespace.TranslatePipe }, encapsulation: i0__namespace.ViewEncapsulation.None });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoInputBaseIconComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-input-base-icon',
                        styleUrls: ['./do-input-base-icon.component.scss'],
                        templateUrl: './do-input-base-icon.component.html',
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace.NgControl, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Self
                        }] }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i0.LOCALE_ID]
                        }] }];
        }, propDecorators: { placeholder: [{
                    type: i0.Input
                }], minLength: [{
                    type: i0.Input
                }], maxLength: [{
                    type: i0.Input
                }], iconcursor: [{
                    type: i0.Input
                }], icon: [{
                    type: i0.Input
                }], buttontype: [{
                    type: i0.Input
                }], type: [{
                    type: i0.Input
                }], clickIcon: [{
                    type: i0.Output
                }], focus: [{
                    type: i0.Output
                }] } });

    var DoInputFileComponent = /** @class */ (function (_super) {
        __extends(DoInputFileComponent, _super);
        function DoInputFileComponent(ngControl, locale) {
            var _this = _super.call(this, ngControl, locale) || this;
            _this.locale = locale;
            _this.colLabel = 3;
            _this.colInput = 9;
            _this.multiple = false;
            return _this;
        }
        return DoInputFileComponent;
    }(ValueAccessorDirective));
    DoInputFileComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoInputFileComponent, deps: [{ token: i1__namespace.NgControl, optional: true, self: true }, { token: i0.LOCALE_ID }], target: i0__namespace.ɵɵFactoryTarget.Component });
    DoInputFileComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoInputFileComponent, selector: "do-input-file", inputs: { placeholder: "placeholder", colLabel: "colLabel", colInput: "colInput", multiple: "multiple" }, usesInheritance: true, ngImport: i0__namespace, template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\" \n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [warnMessage]=\"warnMessage\"\n  [skeleton]=\"skeleton\" [show]=\"show\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <input\n      type=\"file\"\n      id=\"{{name}}\"\n      name=\"{{name}}\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled\"\n      [ngClass]=\"{\n        'status-danger': hasErrors,\n        'status-success': (hasSuccess && required)\n      }\"\n      (input)=\"onChange($event.target.files)\"\n      (change)=\"onChange($event.target.files)\"\n      (blur)=\"onTouched($event.target.files)\"\n      (focus)=\"onTouched($event.target.files)\"\n      [(ngModel)]=\"value\"\n      [multiple]=\"multiple\"\n      #input nbInput fullWidth>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>", styles: [""], components: [{ type: DoContainerOutletComponent, selector: "do-container-outlet", inputs: ["name", "label", "colLabel", "colContent", "nolabel", "dividerlabel", "required", "hasErrors", "errorMessages", "warnMessage", "paramError", "skeleton", "show"] }], directives: [{ type: i4__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2__namespace.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i1__namespace.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i4__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1__namespace.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], pipes: { "translate": i5__namespace.TranslatePipe }, encapsulation: i0__namespace.ViewEncapsulation.None });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoInputFileComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-input-file',
                        styleUrls: ['./do-input-file.component.scss'],
                        templateUrl: './do-input-file.component.html',
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace.NgControl, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Self
                        }] }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i0.LOCALE_ID]
                        }] }];
        }, propDecorators: { placeholder: [{
                    type: i0.Input
                }], colLabel: [{
                    type: i0.Input
                }], colInput: [{
                    type: i0.Input
                }], multiple: [{
                    type: i0.Input
                }] } });

    var INPUT_COMPONENTS = [
        DoInputTextComponent,
        DoInputBaseIconComponent,
        DoInputIconComponent,
        DoInputCurrencyComponent,
        DoInputFileComponent,
    ];
    var INPUT_DIRECTIVES = [
        CurrencyMaskDirective,
    ];
    var DoInputModule = /** @class */ (function () {
        function DoInputModule() {
        }
        return DoInputModule;
    }());
    DoInputModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoInputModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DoInputModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoInputModule, declarations: [DoInputTextComponent,
            DoInputBaseIconComponent,
            DoInputIconComponent,
            DoInputCurrencyComponent,
            DoInputFileComponent, CurrencyMaskDirective], imports: [i4.CommonModule,
            i1.FormsModule,
            i1.ReactiveFormsModule,
            i2.NbInputModule,
            i2.NbIconModule,
            i5.TranslateModule,
            DoBaseModule], exports: [DoInputTextComponent,
            DoInputBaseIconComponent,
            DoInputIconComponent,
            DoInputCurrencyComponent,
            DoInputFileComponent, CurrencyMaskDirective, i2.NbInputModule] });
    DoInputModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoInputModule, imports: [[
                i4.CommonModule,
                i1.FormsModule,
                i1.ReactiveFormsModule,
                i2.NbInputModule,
                i2.NbIconModule,
                i5.TranslateModule,
                DoBaseModule,
            ], i2.NbInputModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoInputModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i4.CommonModule,
                            i1.FormsModule,
                            i1.ReactiveFormsModule,
                            i2.NbInputModule,
                            i2.NbIconModule,
                            i5.TranslateModule,
                            DoBaseModule,
                        ],
                        declarations: __spreadArray(__spreadArray([], __read(INPUT_COMPONENTS)), __read(INPUT_DIRECTIVES)),
                        exports: __spreadArray(__spreadArray(__spreadArray([], __read(INPUT_COMPONENTS)), __read(INPUT_DIRECTIVES)), [
                            i2.NbInputModule,
                        ]),
                    }]
            }] });

    var DoButtonComponent = /** @class */ (function () {
        function DoButtonComponent() {
            this.formGroupButton = new i1.FormGroup({});
            this.disabledButton = false;
            this.type = 'submit';
            this.status = 'primary';
            this.size = 'medium';
            this.skeleton = false;
            this.onSubmit = new i0.EventEmitter();
        }
        DoButtonComponent.prototype.click = function (event) {
            this.onSubmit.emit(event);
        };
        return DoButtonComponent;
    }());
    DoButtonComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoButtonComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    DoButtonComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoButtonComponent, selector: "do-button", inputs: { formGroupButton: "formGroupButton", name: "name", disabledButton: "disabledButton", type: "type", status: "status", size: "size", skeleton: "skeleton" }, outputs: { onSubmit: "onSubmit" }, ngImport: i0__namespace, template: "<button *ngIf=\"!skeleton; else contentskeleton\"\n  type=\"{{type}}\"\n  status=\"{{status}}\"\n  size=\"{{size}}\"\n  (click)=\"click($event)\"\n  [disabled]=\"(type!='reset' && formGroupButton.invalid) || (type!='reset' && formGroupButton.pristine && !formGroupButton.valid) || disabledButton\"\n  nbButton>\n  <ng-content select=\"[buttonicon]\"></ng-content>\n  {{ name | translate}}\n</button>\n<ng-template #contentskeleton>\n  <div\n    [ngClass]=\"{\n      'button-skeleton': true,\n      'skeleton': skeleton\n    }\">\n  </div>\n</ng-template>", styles: [".nb-theme-default :host button[nbButton]{margin:0 .25rem}.nb-theme-dark :host button[nbButton]{margin:0 .25rem}.nb-theme-cosmic :host button[nbButton]{margin:0 .25rem}.nb-theme-corporate :host button[nbButton]{margin:0 .25rem}\n"], components: [{ type: i2__namespace.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i4__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], pipes: { "translate": i5__namespace.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoButtonComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-button',
                        styleUrls: ['./do-button.component.scss'],
                        templateUrl: './do-button.component.html',
                    }]
            }], propDecorators: { formGroupButton: [{
                    type: i0.Input
                }], name: [{
                    type: i0.Input
                }], disabledButton: [{
                    type: i0.Input
                }], type: [{
                    type: i0.Input
                }], status: [{
                    type: i0.Input
                }], size: [{
                    type: i0.Input
                }], skeleton: [{
                    type: i0.Input
                }], onSubmit: [{
                    type: i0.Output
                }] } });

    var DoButtonSubmitComponent = /** @class */ (function () {
        function DoButtonSubmitComponent() {
            this.colLabel = 3;
            this.colButton = 9;
            this.disabledButton = false;
            this.disabledReset = false;
            this.type = 'submit';
            this.status = 'primary';
            this.skeleton = false;
            this.onSubmit = new i0.EventEmitter();
            this.onReset = new i0.EventEmitter();
        }
        Object.defineProperty(DoButtonSubmitComponent.prototype, "formGroupButton", {
            set: function (formGroup) {
                this.formGroup = formGroup;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DoButtonSubmitComponent.prototype, "disabledForm", {
            get: function () {
                if (this.formGroup) {
                    if (!this.formGroup.valid || this.formGroup.pristine) {
                        return true;
                    }
                }
                return false;
            },
            enumerable: false,
            configurable: true
        });
        DoButtonSubmitComponent.prototype.submit = function (event) {
            this.onSubmit.emit(event);
        };
        DoButtonSubmitComponent.prototype.reset = function (event) {
            this.onReset.emit(event);
        };
        return DoButtonSubmitComponent;
    }());
    DoButtonSubmitComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoButtonSubmitComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    DoButtonSubmitComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoButtonSubmitComponent, selector: "do-button-submit", inputs: { colLabel: "colLabel", colButton: "colButton", resetTitle: "resetTitle", submitTitle: "submitTitle", disabledButton: "disabledButton", disabledReset: "disabledReset", type: "type", status: "status", skeleton: "skeleton", formGroupButton: "formGroupButton" }, outputs: { onSubmit: "onSubmit", onReset: "onReset" }, ngImport: i0__namespace, template: "<div class=\"row\">\n  <div class=\"offset-sm-{{colLabel}} col-sm-{{colButton}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <button\n      type=\"reset\"\n      status=\"danger\"\n      (click)=\"reset($event)\"\n      [disabled]=\"disabledReset\"\n      class=\"reset-left\"\n      nbButton>\n      {{ resetTitle | translate}}\n    </button>\n    <button\n      type=\"submit\"\n      status=\"primary\"\n      (click)=\"submit($event)\"\n      [disabled]=\"disabledButton || disabledForm\"\n      class=\"submit-right\"\n      nbButton>\n      {{ submitTitle | translate}}\n    </button>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"row offset-sm-{{colLabel}} col-sm-{{colButton}}\">\n      <div\n        [ngClass]=\"{\n          'reset-left': true,\n          'button-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n      <div\n        [ngClass]=\"{\n          'reset-right': true,\n          'button-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</div>", styles: [".nb-theme-default :host button[nbButton]{margin:0 .25rem}.nb-theme-default :host .reset-left{margin-right:.25rem}.nb-theme-default :host .submit-right{margin-left:.25rem}.nb-theme-dark :host button[nbButton]{margin:0 .25rem}.nb-theme-dark :host .reset-left{margin-right:.25rem}.nb-theme-dark :host .submit-right{margin-left:.25rem}.nb-theme-cosmic :host button[nbButton]{margin:0 .25rem}.nb-theme-cosmic :host .reset-left{margin-right:.25rem}.nb-theme-cosmic :host .submit-right{margin-left:.25rem}.nb-theme-corporate :host button[nbButton]{margin:0 .25rem}.nb-theme-corporate :host .reset-left{margin-right:.25rem}.nb-theme-corporate :host .submit-right{margin-left:.25rem}\n"], components: [{ type: i2__namespace.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i4__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], pipes: { "translate": i5__namespace.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoButtonSubmitComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-button-submit',
                        styleUrls: ['./do-button-submit.component.scss'],
                        templateUrl: './do-button-submit.component.html',
                    }]
            }], propDecorators: { colLabel: [{
                    type: i0.Input
                }], colButton: [{
                    type: i0.Input
                }], resetTitle: [{
                    type: i0.Input
                }], submitTitle: [{
                    type: i0.Input
                }], disabledButton: [{
                    type: i0.Input
                }], disabledReset: [{
                    type: i0.Input
                }], type: [{
                    type: i0.Input
                }], status: [{
                    type: i0.Input
                }], skeleton: [{
                    type: i0.Input
                }], onSubmit: [{
                    type: i0.Output
                }], onReset: [{
                    type: i0.Output
                }], formGroupButton: [{
                    type: i0.Input
                }] } });

    var BUTTON_COMPONENTS = [
        DoButtonComponent,
        DoButtonSubmitComponent,
    ];
    var DoButtonModule = /** @class */ (function () {
        function DoButtonModule() {
        }
        return DoButtonModule;
    }());
    DoButtonModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoButtonModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DoButtonModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoButtonModule, declarations: [DoButtonComponent,
            DoButtonSubmitComponent], imports: [i4.CommonModule,
            i5.TranslateModule,
            i2.NbButtonModule,
            DoBaseModule], exports: [DoButtonComponent,
            DoButtonSubmitComponent] });
    DoButtonModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoButtonModule, imports: [[
                i4.CommonModule,
                i5.TranslateModule,
                i2.NbButtonModule,
                DoBaseModule,
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoButtonModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i4.CommonModule,
                            i5.TranslateModule,
                            i2.NbButtonModule,
                            DoBaseModule,
                        ],
                        declarations: __spreadArray([], __read(BUTTON_COMPONENTS)),
                        exports: __spreadArray([], __read(BUTTON_COMPONENTS)),
                    }]
            }] });

    var DoDatatableCollapseComponent = /** @class */ (function () {
        function DoDatatableCollapseComponent() {
            var _this = this;
            this.toggle = function () {
                _this.opened$.pipe(operators.take(1)).subscribe(function (x) { return _this.openedSubject.next(!x); });
            };
            this.openedSubject = new rxjs.ReplaySubject(1);
            this.openedSubject.next(false);
            this.opened$ = this.openedSubject.asObservable();
            this.openedState$ = this.opened$.pipe(operators.map(function (x) { return x ? 'expanded' : 'collapsed'; }));
        }
        return DoDatatableCollapseComponent;
    }());
    DoDatatableCollapseComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoDatatableCollapseComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    DoDatatableCollapseComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoDatatableCollapseComponent, selector: "do-datatable-collapse, [do-datatable-collapse]", ngImport: i0__namespace, template: "<div\n    [@openedState]=\"openedState$ | async\"\n    [ngClass]=\"openedState$ | async\">\n    <ng-content></ng-content>\n</div>", styles: [""], directives: [{ type: i4__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], pipes: { "async": i4__namespace.AsyncPipe }, animations: [
            animations.trigger('openedState', [
                animations.state('collapsed', animations.style({
                    opacity: 0,
                    overflow: 'hidden',
                    height: '0px',
                    minHeight: '0',
                    padding: '0 0 0 0.5rem',
                })),
                animations.state('expanded', animations.style({
                    opacity: 1,
                    overflow: 'hidden',
                    height: '*',
                    padding: '1.5rem 0 0.5rem 0.5rem',
                    'border-bottom': '1px solid #d1d4d7',
                })),
                animations.transition('collapsed <=> expanded', animations.animate('500ms ease-in-out')),
            ]),
        ] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoDatatableCollapseComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-datatable-collapse, [do-datatable-collapse]',
                        styleUrls: ['./do-datatable-collapse.component.scss'],
                        templateUrl: './do-datatable-collapse.component.html',
                        animations: [
                            animations.trigger('openedState', [
                                animations.state('collapsed', animations.style({
                                    opacity: 0,
                                    overflow: 'hidden',
                                    height: '0px',
                                    minHeight: '0',
                                    padding: '0 0 0 0.5rem',
                                })),
                                animations.state('expanded', animations.style({
                                    opacity: 1,
                                    overflow: 'hidden',
                                    height: '*',
                                    padding: '1.5rem 0 0.5rem 0.5rem',
                                    'border-bottom': '1px solid #d1d4d7',
                                })),
                                animations.transition('collapsed <=> expanded', animations.animate('500ms ease-in-out')),
                            ]),
                        ],
                    }]
            }], ctorParameters: function () { return []; } });

    var DoDatatableHeaderComponent = /** @class */ (function () {
        function DoDatatableHeaderComponent() {
            this.header = true;
            this.footer = true;
            this.add = true;
            this.edit = true;
            this.delete = false;
            this.filter = true;
            this.onSearch = new i0.EventEmitter();
            this.onFilter = new i0.EventEmitter();
            this.onAdd = new i0.EventEmitter();
            this.onDelete = new i0.EventEmitter();
            this.showFilter = false;
            this.disabledButtonFilter = true;
        }
        DoDatatableHeaderComponent.prototype.ngOnDestroy = function () { };
        DoDatatableHeaderComponent.prototype.doSearch = function (search) {
            if (this.showFilter) {
                this.doFilterFunnel();
            }
            this.onSearch.emit(search);
        };
        DoDatatableHeaderComponent.prototype.doFilterFunnel = function () {
            var _this = this;
            this._search = undefined;
            this.collapse.toggle();
            this.showFilter = !this.showFilter;
            if (!this.showFilter) {
                this.formGroupFilter.reset();
            }
            else {
                this.formGroupFilter.valueChanges.subscribe(function (val) {
                    _this.disabledButtonFilter = false;
                });
            }
        };
        DoDatatableHeaderComponent.prototype.doFilter = function () {
            this.onFilter.emit(this.formGroupFilter.value);
        };
        DoDatatableHeaderComponent.prototype.doAdd = function () {
            this.onAdd.emit(true);
        };
        DoDatatableHeaderComponent.prototype.doDelete = function () {
            this.onDelete.emit(true);
        };
        DoDatatableHeaderComponent.prototype.onKeyDown = function (event) {
            if (event.key.toUpperCase() === 'ENTER') {
                this.doSearch(this._search);
            }
        };
        DoDatatableHeaderComponent.prototype.onFocusSearch = function () {
            if (this.showFilter) {
                this.doFilterFunnel();
            }
        };
        return DoDatatableHeaderComponent;
    }());
    DoDatatableHeaderComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoDatatableHeaderComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    DoDatatableHeaderComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoDatatableHeaderComponent, selector: "do-datatable-header", inputs: { header: "header", footer: "footer", add: "add", edit: "edit", delete: "delete", filter: "filter", formGroupFilter: "formGroupFilter" }, outputs: { onSearch: "onSearch", onFilter: "onFilter", onAdd: "onAdd", onDelete: "onDelete" }, viewQueries: [{ propertyName: "collapse", first: true, predicate: ["collapse"], descendants: true }], ngImport: i0__namespace, template: "<div class=\"header-datatable\" *ngIf=\"header\">\n    <div class=\"header-action\" *ngIf=\"add\">\n        <nb-icon\n            class=\"action-add\"\n            icon=\"file-add-outline\"\n            (click)=\"doAdd()\">\n        </nb-icon>\n    </div>\n    <div class=\"header-action\" *ngIf=\"delete\">\n        <nb-icon\n            class=\"action-trash\"\n            icon=\"trash-2-outline\"\n            (click)=\"doDelete()\">\n        </nb-icon>\n    </div>\n    <div class=\"header-filter\" *ngIf=\"filter\">\n        <do-input-base-icon\n            [name]=\"'_filter.datatable'\"\n            [placeholder]=\"'datatable.typesearch'\"\n            [iconcursor]=\"true\"\n            [(ngModel)]=\"_search\"\n            (clickIcon)=\"doSearch($event)\"\n            (keydown)=\"onKeyDown($event)\"\n            (focus)=\"onFocusSearch()\">\n        </do-input-base-icon>\n    </div>\n    <div class=\"filter-funnel\" *ngIf=\"filter && formGroupFilter\">\n        <nb-icon\n            class=\"filter-icon-funnel\"\n            [icon]=\"showFilter ? 'arrow-upward-outline' : 'funnel-outline'\"\n            (click)=\"doFilterFunnel()\">\n        </nb-icon>\n    </div>\n</div>\n<div *ngIf=\"filter && formGroupFilter\" do-datatable-collapse #collapse>\n    <ng-content></ng-content>\n    <div class=\"form-group row\">\n        <div class=\"offset-sm-3 col-sm-9\">\n          <button\n            type=\"submit\"\n            status=\"primary\"\n            (click)=\"doFilter()\"\n            nbButton>\n            {{ 'Search' | translate}}\n          </button>\n        </div>\n    </div>\n</div>", styles: [".header-datatable{width:100%;display:flex;padding-bottom:.3rem}.header-filter{width:100%}.filter-funnel{right:0;padding:10px 10px 10px 15px;cursor:pointer}.filter-icon-funnel:hover{color:#ffc94d}.header-action{left:0;padding:10px 15px 10px 10px;cursor:pointer}.action-add:hover{color:#598bff}.action-trash:hover{color:#ff708d}\n"], components: [{ type: i2__namespace.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }, { type: DoInputBaseIconComponent, selector: "do-input-base-icon", inputs: ["placeholder", "minLength", "maxLength", "iconcursor", "icon", "buttontype", "type"], outputs: ["clickIcon", "focus"] }, { type: DoDatatableCollapseComponent, selector: "do-datatable-collapse, [do-datatable-collapse]" }, { type: i2__namespace.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i4__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1__namespace.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], pipes: { "translate": i5__namespace.TranslatePipe }, encapsulation: i0__namespace.ViewEncapsulation.None });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoDatatableHeaderComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-datatable-header',
                        styleUrls: ['./do-datatable-header.component.scss'],
                        templateUrl: './do-datatable-header.component.html',
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], propDecorators: { header: [{
                    type: i0.Input
                }], footer: [{
                    type: i0.Input
                }], add: [{
                    type: i0.Input
                }], edit: [{
                    type: i0.Input
                }], delete: [{
                    type: i0.Input
                }], filter: [{
                    type: i0.Input
                }], formGroupFilter: [{
                    type: i0.Input
                }], onSearch: [{
                    type: i0.Output
                }], onFilter: [{
                    type: i0.Output
                }], onAdd: [{
                    type: i0.Output
                }], onDelete: [{
                    type: i0.Output
                }], collapse: [{
                    type: i0.ViewChild,
                    args: ['collapse', { static: false }]
                }] } });

    var DoDatatableBaseComponent = /** @class */ (function () {
        function DoDatatableBaseComponent(locale, injector) {
            this.locale = locale;
            this.injector = injector;
            this.rows = [];
            this.selected = [];
            this.limit = 10;
            this.count = 0;
            this.offset = 0;
            this.externalPaging = false;
            this.externalSorting = false;
            this.loadingIndicator = false;
            this.scrollbarH = false;
            this.scrollbarV = false;
            this.reorderable = true;
            this.sortType = i1$1.SortType.single;
            this.selectionType = i1$1.SelectionType.checkbox;
            this.columnMode = i1$1.ColumnMode.force;
            this.headerHeight = 40;
            this.footerHeight = 'auto';
            this.rowHeight = 'auto';
            this.header = false;
            this.column = false;
            this.footer = false;
            this.add = true;
            this.edit = true;
            this.delete = false;
            this.filter = true;
            this.startWithOpenData = true;
            this.page = new i0.EventEmitter();
            this.sort = new i0.EventEmitter();
            this.select = new i0.EventEmitter();
            this.activate = new i0.EventEmitter();
            this.onButtonCell = new i0.EventEmitter();
            this.cols = [];
        }
        Object.defineProperty(DoDatatableBaseComponent.prototype, "columns", {
            get: function () {
                return this.cols;
            },
            set: function (val) {
                val.forEach(function (part, index) {
                    var _a;
                    if (!((_a = this[index]) === null || _a === void 0 ? void 0 : _a.sortable)) {
                        this[index].sortable = false;
                    }
                }, val);
                this.cols = val;
            },
            enumerable: false,
            configurable: true
        });
        DoDatatableBaseComponent.prototype.setPage = function (page) {
            this.page.emit(page);
        };
        DoDatatableBaseComponent.prototype.onSort = function (order) {
            this.sort.emit(order);
        };
        DoDatatableBaseComponent.prototype.onSelect = function (selected) {
            this.select.emit(selected);
        };
        DoDatatableBaseComponent.prototype.onActivate = function (event) {
            if (event.type === 'click') {
                event.cellElement.blur();
                if (this.selectionType === 'checkbox') {
                    if (event.cellIndex > 0) {
                        this.activate.emit(event.row);
                    }
                }
                else {
                    this.activate.emit(event.row);
                }
            }
        };
        DoDatatableBaseComponent.prototype.sanitizedValue = function (value) {
            return value !== null && value !== undefined ? this.stripHtml(value) : value;
        };
        DoDatatableBaseComponent.prototype.stripHtml = function (html) {
            if (!html.replace) {
                return html;
            }
            return html.replace(/<\/?[^>]+(>|$)/g, '');
        };
        DoDatatableBaseComponent.prototype.onClickButton = function (event) {
            this.onButtonCell.emit(event);
        };
        return DoDatatableBaseComponent;
    }());
    DoDatatableBaseComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoDatatableBaseComponent, deps: [{ token: i0.LOCALE_ID }, { token: i0__namespace.Injector }], target: i0__namespace.ɵɵFactoryTarget.Component });
    DoDatatableBaseComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoDatatableBaseComponent, selector: "do-datatable-base", inputs: { rows: "rows", selected: "selected", limit: "limit", count: "count", offset: "offset", externalPaging: "externalPaging", externalSorting: "externalSorting", loadingIndicator: "loadingIndicator", scrollbarH: "scrollbarH", scrollbarV: "scrollbarV", reorderable: "reorderable", sortType: "sortType", sortsDefault: "sortsDefault", messages: "messages", selectionType: "selectionType", columnMode: "columnMode", headerHeight: "headerHeight", footerHeight: "footerHeight", rowHeight: "rowHeight", header: "header", column: "column", footer: "footer", add: "add", edit: "edit", delete: "delete", filter: "filter", startWithOpenData: "startWithOpenData", columns: "columns" }, outputs: { page: "page", sort: "sort", select: "select", activate: "activate", onButtonCell: "onButtonCell" }, ngImport: i0__namespace, template: "<ngx-datatable\n    class=\"do\"\n    [rows]=\"rows\"\n    [columns]=\"columns\"\n    [selected]=\"selected\"\n    [limit]=\"limit\"\n    [count]=\"count\"\n    [offset]=\"offset\"\n    [externalPaging]=\"externalPaging\"\n    [externalSorting]=\"externalSorting\"\n    [loadingIndicator]=\"loadingIndicator\"\n    [scrollbarH]=\"scrollbarH\"\n    [scrollbarV]=\"scrollbarV\"\n    [reorderable]=\"reorderable\"\n    [sortType]=\"sortType\"\n    [sorts]=\"sortsDefault\"\n    [selectionType]=\"selectionType\"\n    [columnMode]=\"columnMode\"\n    [headerHeight]=\"headerHeight\"\n    [footerHeight]=\"footerHeight\"\n    [rowHeight]=\"rowHeight\"\n    (page)=\"setPage($event)\"\n    (sort)=\"onSort($event)\"\n    (select)=\"onSelect($event)\"\n    (activate)=\"onActivate($event)\"\n    #datatable>\n    <ngx-datatable-column *ngIf=\"selectionType === 'checkbox' && column\"\n        [width]=\"30\"\n        [sortable]=\"false\"\n        [canAutoResize]=\"false\"\n        [draggable]=\"false\"\n        [resizeable]=\"false\"\n        [headerCheckboxable]=\"true\"\n        [checkboxable]=\"true\"\n        [frozenLeft]=\"true\">\n    </ngx-datatable-column>\n    <ngx-datatable-column *ngFor=\"let col of columns\"\n        [prop]=\"col.prop\"\n        [name]=\"col.name | translate\"\n        [sortable]=\"col.sortable\"\n        [canAutoResize]=\"col.canAutoResize\"\n        [draggable]=\"col.draggable\"\n        [resizeable]=\"col.resizeable\"\n        [width]=\"col.width\"\n        [frozenLeft]=\"col.frozenLeft\"\n        [frozenRight]=\"col.frozenRight\">\n        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n            <span *ngIf=\"!col.cellTemplate && !col.type\" [title]=\"sanitizedValue(value)\" [innerHTML]=\"value\"></span>\n            <span *ngIf=\"!col.cellTemplate && col.type === 'prefix'\" [title]=\"sanitizedValue(value)\" [innerHTML]=\"value + ' ' + col.prefix\"></span>\n            <span *ngIf=\"!col.cellTemplate && col.type === 'html'\" [title]=\"sanitizedValue(value)\" [innerHTML]=\"value\"></span>\n            <span *ngIf=\"!col.cellTemplate && col.type === 'icon'\" [title]=\"sanitizedValue(value)\"><span class=\"{{value}}\"></span></span>\n            <button\n                *ngIf=\"!col.cellTemplate && col.type === 'button'\"\n                (click)=\"onClickButton(value)\"\n                class=\"btn btn-sm btn-{{col.buttonStatus ? col.buttonStatus : 'primary'}}\">\n                {{ col.button | translate }}\n            </button>\n        </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-footer *ngIf=\"footer\">\n        <ng-template\n            ngx-datatable-footer-template\n            let-rowCount=\"rowCount\"\n            let-pageSize=\"pageSize\"\n            let-selectedCount=\"selectedCount\"\n            let-curPage=\"curPage\"\n            let-offset=\"offset\"\n            let-isVisible=\"isVisible\">\n            <div class=\"page-count\">\n                <div> {{ selectedCount }} {{ 'Selected' | translate }} | {{ count }} {{ 'Total' | translate }} </div>\n            </div>\n            <datatable-pager\n                [pagerLeftArrowIcon]=\"'datatable-icon-left'\"\n                [pagerRightArrowIcon]=\"'datatable-icon-right'\"\n                [pagerPreviousIcon]=\"'datatable-icon-prev'\"\n                [pagerNextIcon]=\"'datatable-icon-skip'\"\n                [page]=\"curPage\"\n                [size]=\"pageSize\"\n                [count]=\"rowCount\"\n                [hidden]=\"!((rowCount / pageSize) > 1)\"\n                (change)=\"datatable.onFooterPage($event)\">\n            </datatable-pager>\n        </ng-template>\n    </ngx-datatable-footer>\n</ngx-datatable>\n", styles: [".ngx-datatable{display:block;overflow:hidden;justify-content:center;position:relative;transform:translate(0)}.ngx-datatable [hidden]{display:none!important}.ngx-datatable *,.ngx-datatable *:before,.ngx-datatable *:after{box-sizing:border-box}.ngx-datatable.scroll-vertical .datatable-body{overflow-y:auto}.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper{position:absolute}.ngx-datatable.scroll-horz .datatable-body{overflow-x:auto;-webkit-overflow-scrolling:touch}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner{white-space:nowrap}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ngx-datatable.fixed-row .datatable-scroll{white-space:nowrap}.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row{white-space:nowrap}.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ngx-datatable .datatable-body-row,.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-header-inner{display:flex;flex-direction:row;-o-flex-flow:row;flex-flow:row}.ngx-datatable .datatable-body-cell,.ngx-datatable .datatable-header-cell{overflow-x:hidden;vertical-align:top;display:inline-block;line-height:1.625}.ngx-datatable .datatable-body-cell:focus,.ngx-datatable .datatable-header-cell:focus{outline:none}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{z-index:9}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-row-group,.ngx-datatable .datatable-row-right{position:relative}.ngx-datatable .datatable-header{display:block;overflow:hidden}.ngx-datatable .datatable-header .datatable-header-inner{align-items:stretch;-webkit-align-items:stretch}.ngx-datatable .datatable-header .datatable-header-cell{position:relative;display:inline-block}.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper{cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper{cursor:move}.ngx-datatable .datatable-header .datatable-header-cell .sort-btn{line-height:100%;vertical-align:middle;display:inline-block;cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable{display:inline-block;position:absolute;right:0;top:0;bottom:0;width:5px;padding:0 4px;visibility:hidden}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle{cursor:ew-resize}.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle{visibility:visible}.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable{visibility:visible}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker{position:absolute;top:0;bottom:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft{right:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight{left:0}.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap{height:inherit}.ngx-datatable .datatable-body{position:relative;z-index:10;display:block}.ngx-datatable .datatable-body .datatable-scroll{display:inline-block}.ngx-datatable .datatable-body .datatable-row-detail{overflow-y:hidden}.ngx-datatable .datatable-body .datatable-row-wrapper{display:flex;flex-direction:column}.ngx-datatable .datatable-body .datatable-body-row{outline:none}.ngx-datatable .datatable-body .datatable-body-row>div{display:flex}.ngx-datatable .datatable-footer{display:block;width:100%;overflow:auto}.ngx-datatable .datatable-footer .datatable-footer-inner{display:flex;align-items:center;width:100%}.ngx-datatable .datatable-footer .selected-count .page-count{flex:1 1 40%}.ngx-datatable .datatable-footer .selected-count .datatable-pager{flex:1 1 60%}.ngx-datatable .datatable-footer .page-count{flex:1 1 20%}.ngx-datatable .datatable-footer .datatable-pager{flex:1 1 80%;text-align:right}.ngx-datatable .datatable-footer .datatable-pager .pager,.ngx-datatable .datatable-footer .datatable-pager .pager li{padding:0;margin:0;display:inline-block;list-style:none}.ngx-datatable .datatable-footer .datatable-pager .pager li,.ngx-datatable .datatable-footer .datatable-pager .pager li a{outline:none}.ngx-datatable .datatable-footer .datatable-pager .pager li a{cursor:pointer;display:inline-block}.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a{cursor:not-allowed}.nb-theme-default .ngx-datatable.do{box-shadow:none;font-size:13px}.nb-theme-default .ngx-datatable.do .datatable-header{height:unset!important}.nb-theme-default .ngx-datatable.do .datatable-header .datatable-header-cell{vertical-align:bottom;padding:.75rem;border-bottom:1px solid #d1d4d7}.nb-theme-default .ngx-datatable.do .datatable-header .datatable-header-cell .datatable-header-cell-label{line-height:24px}.nb-theme-default .ngx-datatable.do .datatable-header .datatable-row-left{background-color:#fff;background-position:100% 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==)}.nb-theme-default .ngx-datatable.do .datatable-header .datatable-row-right{background-color:#fff;background-position:0 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==)}.nb-theme-default .ngx-datatable.do .datatable-body .datatable-body-row{vertical-align:top}.nb-theme-default .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-even{background-color:#f2f2f2}.nb-theme-default .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-even .datatable-row-left{background-color:#f2f2f2}.nb-theme-default .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-even .datatable-row-right{background-color:#f2f2f2}.nb-theme-default .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-odd{background-color:#fff}.nb-theme-default .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-odd .datatable-row-left{background-color:#fff}.nb-theme-default .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-odd .datatable-row-right{background-color:#fff}.nb-theme-default .ngx-datatable.do .datatable-body .datatable-body-row .datatable-row-left{background-position:100% 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==)}.nb-theme-default .ngx-datatable.do .datatable-body .datatable-body-row .datatable-row-right{background-position:0 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==)}.nb-theme-default .ngx-datatable.do .datatable-body .datatable-body-row.active{background-color:#36f;color:#fff}.nb-theme-default .ngx-datatable.do .datatable-body .datatable-body-row.active .datatable-row-left{background-color:#36f}.nb-theme-default .ngx-datatable.do .datatable-body .datatable-body-row.active .datatable-row-right{background-color:#36f}.nb-theme-default .ngx-datatable.do .datatable-body .datatable-body-row:hover,.nb-theme-default .ngx-datatable.do .datatable-body .datatable-body-row:hover .datatable-row-group{cursor:pointer;border-bottom:.025rem solid #7899ff;transition-property:background;transition-duration:.3s;transition-timing-function:linear}.nb-theme-default .ngx-datatable.do .datatable-body .datatable-body-row .datatable-body-cell{padding:.75rem;text-align:left;vertical-align:top}.nb-theme-default .ngx-datatable.do .datatable-body .empty-row{position:relative;padding:.75rem 1.25rem;margin-bottom:0}.nb-theme-default .ngx-datatable.do .datatable-body .progress-linear{display:block;position:sticky;width:100%;height:5px;padding:0;margin:0;top:0}.nb-theme-default .ngx-datatable.do .datatable-body .progress-linear .container{display:block;position:relative;overflow:hidden;width:100%;height:5px;transform:translate(0) scale(1);background-color:#aad1f9}.nb-theme-default .ngx-datatable.do .datatable-body .progress-linear .container .bar{transition:all .2s linear;animation:query .8s infinite cubic-bezier(.39,.575,.565,1);transition:transform .2s linear;background-color:#106cc8;position:absolute;left:0;top:0;bottom:0;width:100%;height:5px}.nb-theme-default .ngx-datatable.do .datatable-footer{background:#f2f2f2;color:#5a5a5a;margin-top:-1px}.nb-theme-default .ngx-datatable.do .datatable-footer .page-count{padding:.7rem}.nb-theme-default .ngx-datatable.do .datatable-footer .datatable-pager{margin:0 10px;vertical-align:top}.nb-theme-default .ngx-datatable.do .datatable-footer .datatable-pager ul li{margin:10px 0}.nb-theme-default .ngx-datatable.do .datatable-footer .datatable-pager ul li:not(.disabled).active a,.nb-theme-default .ngx-datatable.do .datatable-footer .datatable-pager ul li:not(.disabled):hover a{background-color:#c1c1c1;font-weight:bold}.nb-theme-default .ngx-datatable.do .datatable-footer .datatable-pager a{height:22px;min-width:24px;line-height:22px;padding:0;border-radius:3px;margin:0 3px;text-align:center;vertical-align:top;text-decoration:none;vertical-align:bottom;color:#5a5a5a}.nb-theme-default .ngx-datatable.do .datatable-footer .datatable-pager .datatable-icon-left,.nb-theme-default .ngx-datatable.do .datatable-footer .datatable-pager .datatable-icon-skip,.nb-theme-default .ngx-datatable.do .datatable-footer .datatable-pager .datatable-icon-right,.nb-theme-default .ngx-datatable.do .datatable-footer .datatable-pager .datatable-icon-prev{line-height:27px;padding:0 .2rem}.nb-theme-default .ngx-datatable.do .datatable-checkbox{position:relative;margin:0;cursor:pointer;vertical-align:middle;display:inline-block;box-sizing:border-box;padding:0}.nb-theme-default .ngx-datatable.do .datatable-checkbox input[type=checkbox]{position:relative;margin:0 1rem 0 0;cursor:pointer;outline:none}.nb-theme-default .ngx-datatable.do .datatable-checkbox input[type=checkbox]:before{transition:all .3s ease-in-out;content:\"\";position:absolute;left:0;z-index:1;width:1rem;height:1rem;border:2px solid #f2f2f2}.nb-theme-default .ngx-datatable.do .datatable-checkbox input[type=checkbox]:checked:before{transform:rotate(-45deg);height:.5rem;border-color:#36f;border-top-style:none;border-right-style:none}.nb-theme-default .ngx-datatable.do .datatable-checkbox input[type=checkbox]:after{content:\"\";position:absolute;top:0;left:0;width:1rem;height:1rem;background:#fff;cursor:pointer}.nb-theme-default .ngx-datatable.do .datatable-summary-row .datatable-body-row .datatable-body-cell{font-weight:bold}.nb-theme-dark .ngx-datatable.do{box-shadow:none;font-size:13px}.nb-theme-dark .ngx-datatable.do .datatable-header{height:unset!important}.nb-theme-dark .ngx-datatable.do .datatable-header .datatable-header-cell{vertical-align:bottom;padding:.75rem;border-bottom:1px solid #d1d4d7}.nb-theme-dark .ngx-datatable.do .datatable-header .datatable-header-cell .datatable-header-cell-label{line-height:24px}.nb-theme-dark .ngx-datatable.do .datatable-header .datatable-row-left{background-color:#222b45;background-position:100% 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8/h8AApMByMhOLQwAAAAASUVORK5CYII=)}.nb-theme-dark .ngx-datatable.do .datatable-header .datatable-row-right{background-color:#222b45;background-position:0 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8/h8AApMByMhOLQwAAAAASUVORK5CYII=)}.nb-theme-dark .ngx-datatable.do .datatable-body .datatable-body-row{vertical-align:top}.nb-theme-dark .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-even{background-color:#192038}.nb-theme-dark .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-even .datatable-row-left{background-color:#192038}.nb-theme-dark .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-even .datatable-row-right{background-color:#192038}.nb-theme-dark .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-odd{background-color:#222b45}.nb-theme-dark .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-odd .datatable-row-left{background-color:#222b45}.nb-theme-dark .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-odd .datatable-row-right{background-color:#222b45}.nb-theme-dark .ngx-datatable.do .datatable-body .datatable-body-row .datatable-row-left{background-position:100% 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8/h8AApMByMhOLQwAAAAASUVORK5CYII=)}.nb-theme-dark .ngx-datatable.do .datatable-body .datatable-body-row .datatable-row-right{background-position:0 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8/h8AApMByMhOLQwAAAAASUVORK5CYII=)}.nb-theme-dark .ngx-datatable.do .datatable-body .datatable-body-row.active{background-color:#36f;color:#fff}.nb-theme-dark .ngx-datatable.do .datatable-body .datatable-body-row.active .datatable-row-left{background-color:#36f}.nb-theme-dark .ngx-datatable.do .datatable-body .datatable-body-row.active .datatable-row-right{background-color:#36f}.nb-theme-dark .ngx-datatable.do .datatable-body .datatable-body-row:hover,.nb-theme-dark .ngx-datatable.do .datatable-body .datatable-body-row:hover .datatable-row-group{cursor:pointer;border-bottom:.025rem solid #7899ff;transition-property:background;transition-duration:.3s;transition-timing-function:linear}.nb-theme-dark .ngx-datatable.do .datatable-body .datatable-body-row .datatable-body-cell{padding:.75rem;text-align:left;vertical-align:top}.nb-theme-dark .ngx-datatable.do .datatable-body .empty-row{position:relative;padding:.75rem 1.25rem;margin-bottom:0}.nb-theme-dark .ngx-datatable.do .datatable-body .progress-linear{display:block;position:sticky;width:100%;height:5px;padding:0;margin:0;top:0}.nb-theme-dark .ngx-datatable.do .datatable-body .progress-linear .container{display:block;position:relative;overflow:hidden;width:100%;height:5px;transform:translate(0) scale(1);background-color:#aad1f9}.nb-theme-dark .ngx-datatable.do .datatable-body .progress-linear .container .bar{transition:all .2s linear;animation:query .8s infinite cubic-bezier(.39,.575,.565,1);transition:transform .2s linear;background-color:#106cc8;position:absolute;left:0;top:0;bottom:0;width:100%;height:5px}.nb-theme-dark .ngx-datatable.do .datatable-footer{background:#192038;color:#fff;margin-top:-1px}.nb-theme-dark .ngx-datatable.do .datatable-footer .page-count{padding:.7rem}.nb-theme-dark .ngx-datatable.do .datatable-footer .datatable-pager{margin:0 10px;vertical-align:top}.nb-theme-dark .ngx-datatable.do .datatable-footer .datatable-pager ul li{margin:10px 0}.nb-theme-dark .ngx-datatable.do .datatable-footer .datatable-pager ul li:not(.disabled).active a,.nb-theme-dark .ngx-datatable.do .datatable-footer .datatable-pager ul li:not(.disabled):hover a{background-color:#c1c1c1;font-weight:bold}.nb-theme-dark .ngx-datatable.do .datatable-footer .datatable-pager a{height:22px;min-width:24px;line-height:22px;padding:0;border-radius:3px;margin:0 3px;text-align:center;vertical-align:top;text-decoration:none;vertical-align:bottom;color:#fff}.nb-theme-dark .ngx-datatable.do .datatable-footer .datatable-pager .datatable-icon-left,.nb-theme-dark .ngx-datatable.do .datatable-footer .datatable-pager .datatable-icon-skip,.nb-theme-dark .ngx-datatable.do .datatable-footer .datatable-pager .datatable-icon-right,.nb-theme-dark .ngx-datatable.do .datatable-footer .datatable-pager .datatable-icon-prev{line-height:27px;padding:0 .2rem}.nb-theme-dark .ngx-datatable.do .datatable-checkbox{position:relative;margin:0;cursor:pointer;vertical-align:middle;display:inline-block;box-sizing:border-box;padding:0}.nb-theme-dark .ngx-datatable.do .datatable-checkbox input[type=checkbox]{position:relative;margin:0 1rem 0 0;cursor:pointer;outline:none}.nb-theme-dark .ngx-datatable.do .datatable-checkbox input[type=checkbox]:before{transition:all .3s ease-in-out;content:\"\";position:absolute;left:0;z-index:1;width:1rem;height:1rem;border:2px solid #f2f2f2}.nb-theme-dark .ngx-datatable.do .datatable-checkbox input[type=checkbox]:checked:before{transform:rotate(-45deg);height:.5rem;border-color:#36f;border-top-style:none;border-right-style:none}.nb-theme-dark .ngx-datatable.do .datatable-checkbox input[type=checkbox]:after{content:\"\";position:absolute;top:0;left:0;width:1rem;height:1rem;background:#fff;cursor:pointer}.nb-theme-dark .ngx-datatable.do .datatable-summary-row .datatable-body-row .datatable-body-cell{font-weight:bold}.nb-theme-cosmic .ngx-datatable.do{box-shadow:none;font-size:13px}.nb-theme-cosmic .ngx-datatable.do .datatable-header{height:unset!important}.nb-theme-cosmic .ngx-datatable.do .datatable-header .datatable-header-cell{vertical-align:bottom;padding:.75rem;border-bottom:1px solid #d1d4d7}.nb-theme-cosmic .ngx-datatable.do .datatable-header .datatable-header-cell .datatable-header-cell-label{line-height:24px}.nb-theme-cosmic .ngx-datatable.do .datatable-header .datatable-row-left{background-color:#323259;background-position:100% 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8/h8AApMByMhOLQwAAAAASUVORK5CYII=)}.nb-theme-cosmic .ngx-datatable.do .datatable-header .datatable-row-right{background-color:#323259;background-position:0 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8/h8AApMByMhOLQwAAAAASUVORK5CYII=)}.nb-theme-cosmic .ngx-datatable.do .datatable-body .datatable-body-row{vertical-align:top}.nb-theme-cosmic .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-even{background-color:#1b1b38}.nb-theme-cosmic .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-even .datatable-row-left{background-color:#1b1b38}.nb-theme-cosmic .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-even .datatable-row-right{background-color:#1b1b38}.nb-theme-cosmic .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-odd{background-color:#323259}.nb-theme-cosmic .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-odd .datatable-row-left{background-color:#323259}.nb-theme-cosmic .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-odd .datatable-row-right{background-color:#323259}.nb-theme-cosmic .ngx-datatable.do .datatable-body .datatable-body-row .datatable-row-left{background-position:100% 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8/h8AApMByMhOLQwAAAAASUVORK5CYII=)}.nb-theme-cosmic .ngx-datatable.do .datatable-body .datatable-body-row .datatable-row-right{background-position:0 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8/h8AApMByMhOLQwAAAAASUVORK5CYII=)}.nb-theme-cosmic .ngx-datatable.do .datatable-body .datatable-body-row.active{background-color:#36f;color:#fff}.nb-theme-cosmic .ngx-datatable.do .datatable-body .datatable-body-row.active .datatable-row-left{background-color:#36f}.nb-theme-cosmic .ngx-datatable.do .datatable-body .datatable-body-row.active .datatable-row-right{background-color:#36f}.nb-theme-cosmic .ngx-datatable.do .datatable-body .datatable-body-row:hover,.nb-theme-cosmic .ngx-datatable.do .datatable-body .datatable-body-row:hover .datatable-row-group{cursor:pointer;border-bottom:.025rem solid #7899ff;transition-property:background;transition-duration:.3s;transition-timing-function:linear}.nb-theme-cosmic .ngx-datatable.do .datatable-body .datatable-body-row .datatable-body-cell{padding:.75rem;text-align:left;vertical-align:top}.nb-theme-cosmic .ngx-datatable.do .datatable-body .empty-row{position:relative;padding:.75rem 1.25rem;margin-bottom:0}.nb-theme-cosmic .ngx-datatable.do .datatable-body .progress-linear{display:block;position:sticky;width:100%;height:5px;padding:0;margin:0;top:0}.nb-theme-cosmic .ngx-datatable.do .datatable-body .progress-linear .container{display:block;position:relative;overflow:hidden;width:100%;height:5px;transform:translate(0) scale(1);background-color:#aad1f9}.nb-theme-cosmic .ngx-datatable.do .datatable-body .progress-linear .container .bar{transition:all .2s linear;animation:query .8s infinite cubic-bezier(.39,.575,.565,1);transition:transform .2s linear;background-color:#106cc8;position:absolute;left:0;top:0;bottom:0;width:100%;height:5px}.nb-theme-cosmic .ngx-datatable.do .datatable-footer{background:#1b1b38;color:#fff;margin-top:-1px}.nb-theme-cosmic .ngx-datatable.do .datatable-footer .page-count{padding:.7rem}.nb-theme-cosmic .ngx-datatable.do .datatable-footer .datatable-pager{margin:0 10px;vertical-align:top}.nb-theme-cosmic .ngx-datatable.do .datatable-footer .datatable-pager ul li{margin:10px 0}.nb-theme-cosmic .ngx-datatable.do .datatable-footer .datatable-pager ul li:not(.disabled).active a,.nb-theme-cosmic .ngx-datatable.do .datatable-footer .datatable-pager ul li:not(.disabled):hover a{background-color:#c1c1c1;font-weight:bold}.nb-theme-cosmic .ngx-datatable.do .datatable-footer .datatable-pager a{height:22px;min-width:24px;line-height:22px;padding:0;border-radius:3px;margin:0 3px;text-align:center;vertical-align:top;text-decoration:none;vertical-align:bottom;color:#fff}.nb-theme-cosmic .ngx-datatable.do .datatable-footer .datatable-pager .datatable-icon-left,.nb-theme-cosmic .ngx-datatable.do .datatable-footer .datatable-pager .datatable-icon-skip,.nb-theme-cosmic .ngx-datatable.do .datatable-footer .datatable-pager .datatable-icon-right,.nb-theme-cosmic .ngx-datatable.do .datatable-footer .datatable-pager .datatable-icon-prev{line-height:27px;padding:0 .2rem}.nb-theme-cosmic .ngx-datatable.do .datatable-checkbox{position:relative;margin:0;cursor:pointer;vertical-align:middle;display:inline-block;box-sizing:border-box;padding:0}.nb-theme-cosmic .ngx-datatable.do .datatable-checkbox input[type=checkbox]{position:relative;margin:0 1rem 0 0;cursor:pointer;outline:none}.nb-theme-cosmic .ngx-datatable.do .datatable-checkbox input[type=checkbox]:before{transition:all .3s ease-in-out;content:\"\";position:absolute;left:0;z-index:1;width:1rem;height:1rem;border:2px solid #f2f2f2}.nb-theme-cosmic .ngx-datatable.do .datatable-checkbox input[type=checkbox]:checked:before{transform:rotate(-45deg);height:.5rem;border-color:#36f;border-top-style:none;border-right-style:none}.nb-theme-cosmic .ngx-datatable.do .datatable-checkbox input[type=checkbox]:after{content:\"\";position:absolute;top:0;left:0;width:1rem;height:1rem;background:#fff;cursor:pointer}.nb-theme-cosmic .ngx-datatable.do .datatable-summary-row .datatable-body-row .datatable-body-cell{font-weight:bold}.nb-theme-corporate .ngx-datatable.do{box-shadow:none;font-size:13px}.nb-theme-corporate .ngx-datatable.do .datatable-header{height:unset!important}.nb-theme-corporate .ngx-datatable.do .datatable-header .datatable-header-cell{vertical-align:bottom;padding:.75rem;border-bottom:1px solid #d1d4d7}.nb-theme-corporate .ngx-datatable.do .datatable-header .datatable-header-cell .datatable-header-cell-label{line-height:24px}.nb-theme-corporate .ngx-datatable.do .datatable-header .datatable-row-left{background-color:#fff;background-position:100% 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==)}.nb-theme-corporate .ngx-datatable.do .datatable-header .datatable-row-right{background-color:#fff;background-position:0 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==)}.nb-theme-corporate .ngx-datatable.do .datatable-body .datatable-body-row{vertical-align:top}.nb-theme-corporate .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-even{background-color:#f2f2f2}.nb-theme-corporate .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-even .datatable-row-left{background-color:#f2f2f2}.nb-theme-corporate .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-even .datatable-row-right{background-color:#f2f2f2}.nb-theme-corporate .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-odd{background-color:#fff}.nb-theme-corporate .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-odd .datatable-row-left{background-color:#fff}.nb-theme-corporate .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-odd .datatable-row-right{background-color:#fff}.nb-theme-corporate .ngx-datatable.do .datatable-body .datatable-body-row .datatable-row-left{background-position:100% 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==)}.nb-theme-corporate .ngx-datatable.do .datatable-body .datatable-body-row .datatable-row-right{background-position:0 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==)}.nb-theme-corporate .ngx-datatable.do .datatable-body .datatable-body-row.active{background-color:#36f;color:#fff}.nb-theme-corporate .ngx-datatable.do .datatable-body .datatable-body-row.active .datatable-row-left{background-color:#36f}.nb-theme-corporate .ngx-datatable.do .datatable-body .datatable-body-row.active .datatable-row-right{background-color:#36f}.nb-theme-corporate .ngx-datatable.do .datatable-body .datatable-body-row:hover,.nb-theme-corporate .ngx-datatable.do .datatable-body .datatable-body-row:hover .datatable-row-group{cursor:pointer;border-bottom:.025rem solid #7899ff;transition-property:background;transition-duration:.3s;transition-timing-function:linear}.nb-theme-corporate .ngx-datatable.do .datatable-body .datatable-body-row .datatable-body-cell{padding:.75rem;text-align:left;vertical-align:top}.nb-theme-corporate .ngx-datatable.do .datatable-body .empty-row{position:relative;padding:.75rem 1.25rem;margin-bottom:0}.nb-theme-corporate .ngx-datatable.do .datatable-body .progress-linear{display:block;position:sticky;width:100%;height:5px;padding:0;margin:0;top:0}.nb-theme-corporate .ngx-datatable.do .datatable-body .progress-linear .container{display:block;position:relative;overflow:hidden;width:100%;height:5px;transform:translate(0) scale(1);background-color:#aad1f9}.nb-theme-corporate .ngx-datatable.do .datatable-body .progress-linear .container .bar{transition:all .2s linear;animation:query .8s infinite cubic-bezier(.39,.575,.565,1);transition:transform .2s linear;background-color:#106cc8;position:absolute;left:0;top:0;bottom:0;width:100%;height:5px}.nb-theme-corporate .ngx-datatable.do .datatable-footer{background:#f2f2f2;color:#5a5a5a;margin-top:-1px}.nb-theme-corporate .ngx-datatable.do .datatable-footer .page-count{padding:.7rem}.nb-theme-corporate .ngx-datatable.do .datatable-footer .datatable-pager{margin:0 10px;vertical-align:top}.nb-theme-corporate .ngx-datatable.do .datatable-footer .datatable-pager ul li{margin:10px 0}.nb-theme-corporate .ngx-datatable.do .datatable-footer .datatable-pager ul li:not(.disabled).active a,.nb-theme-corporate .ngx-datatable.do .datatable-footer .datatable-pager ul li:not(.disabled):hover a{background-color:#c1c1c1;font-weight:bold}.nb-theme-corporate .ngx-datatable.do .datatable-footer .datatable-pager a{height:22px;min-width:24px;line-height:22px;padding:0;border-radius:3px;margin:0 3px;text-align:center;vertical-align:top;text-decoration:none;vertical-align:bottom;color:#5a5a5a}.nb-theme-corporate .ngx-datatable.do .datatable-footer .datatable-pager .datatable-icon-left,.nb-theme-corporate .ngx-datatable.do .datatable-footer .datatable-pager .datatable-icon-skip,.nb-theme-corporate .ngx-datatable.do .datatable-footer .datatable-pager .datatable-icon-right,.nb-theme-corporate .ngx-datatable.do .datatable-footer .datatable-pager .datatable-icon-prev{line-height:27px;padding:0 .2rem}.nb-theme-corporate .ngx-datatable.do .datatable-checkbox{position:relative;margin:0;cursor:pointer;vertical-align:middle;display:inline-block;box-sizing:border-box;padding:0}.nb-theme-corporate .ngx-datatable.do .datatable-checkbox input[type=checkbox]{position:relative;margin:0 1rem 0 0;cursor:pointer;outline:none}.nb-theme-corporate .ngx-datatable.do .datatable-checkbox input[type=checkbox]:before{transition:all .3s ease-in-out;content:\"\";position:absolute;left:0;z-index:1;width:1rem;height:1rem;border:2px solid #f2f2f2}.nb-theme-corporate .ngx-datatable.do .datatable-checkbox input[type=checkbox]:checked:before{transform:rotate(-45deg);height:.5rem;border-color:#36f;border-top-style:none;border-right-style:none}.nb-theme-corporate .ngx-datatable.do .datatable-checkbox input[type=checkbox]:after{content:\"\";position:absolute;top:0;left:0;width:1rem;height:1rem;background:#fff;cursor:pointer}.nb-theme-corporate .ngx-datatable.do .datatable-summary-row .datatable-body-row .datatable-body-cell{font-weight:bold}@keyframes query{0%{opacity:1;transform:translate(35%) scaleX(.3)}to{opacity:0;transform:translate(-50%) scaleX(0)}}\n"], components: [{ type: i1__namespace$1.DatatableComponent, selector: "ngx-datatable", inputs: ["selected", "scrollbarV", "scrollbarH", "rowHeight", "columnMode", "headerHeight", "footerHeight", "externalPaging", "externalSorting", "loadingIndicator", "reorderable", "swapColumns", "sortType", "sorts", "cssClasses", "messages", "groupExpansionDefault", "selectAllRowsOnPage", "virtualization", "summaryRow", "summaryHeight", "summaryPosition", "rowIdentity", "rows", "groupedRows", "groupRowsBy", "columns", "limit", "count", "offset", "targetMarkerTemplate", "selectionType", "rowClass", "selectCheck", "displayCheck", "trackByProp", "treeFromRelation", "treeToRelation"], outputs: ["scroll", "activate", "select", "sort", "page", "reorder", "resize", "tableContextmenu", "treeAction"] }, { type: i1__namespace$1.DataTablePagerComponent, selector: "datatable-pager", inputs: ["size", "count", "page", "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "pagerNextIcon"], outputs: ["change"] }], directives: [{ type: i4__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1__namespace$1.DataTableColumnDirective, selector: "ngx-datatable-column", inputs: ["name", "prop", "frozenLeft", "frozenRight", "flexGrow", "resizeable", "comparator", "pipe", "sortable", "draggable", "canAutoResize", "minWidth", "width", "maxWidth", "checkboxable", "headerCheckboxable", "headerClass", "cellClass", "isTreeColumn", "treeLevelIndent", "summaryFunc", "summaryTemplate", "cellTemplate", "headerTemplate", "treeToggleTemplate"] }, { type: i4__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1__namespace$1.DataTableColumnCellDirective, selector: "[ngx-datatable-cell-template]" }, { type: i1__namespace$1.DatatableFooterDirective, selector: "ngx-datatable-footer", inputs: ["footerHeight", "totalMessage", "selectedMessage", "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "pagerNextIcon", "template"] }, { type: i1__namespace$1.DataTableFooterTemplateDirective, selector: "[ngx-datatable-footer-template]" }], pipes: { "translate": i5__namespace.TranslatePipe }, encapsulation: i0__namespace.ViewEncapsulation.None });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoDatatableBaseComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-datatable-base',
                        styleUrls: ['./do-datatable-base.component.scss'],
                        templateUrl: './do-datatable-base.component.html',
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], ctorParameters: function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i0.LOCALE_ID]
                        }] }, { type: i0__namespace.Injector }];
        }, propDecorators: { rows: [{
                    type: i0.Input
                }], selected: [{
                    type: i0.Input
                }], limit: [{
                    type: i0.Input
                }], count: [{
                    type: i0.Input
                }], offset: [{
                    type: i0.Input
                }], externalPaging: [{
                    type: i0.Input
                }], externalSorting: [{
                    type: i0.Input
                }], loadingIndicator: [{
                    type: i0.Input
                }], scrollbarH: [{
                    type: i0.Input
                }], scrollbarV: [{
                    type: i0.Input
                }], reorderable: [{
                    type: i0.Input
                }], sortType: [{
                    type: i0.Input
                }], sortsDefault: [{
                    type: i0.Input
                }], messages: [{
                    type: i0.Input
                }], selectionType: [{
                    type: i0.Input
                }], columnMode: [{
                    type: i0.Input
                }], headerHeight: [{
                    type: i0.Input
                }], footerHeight: [{
                    type: i0.Input
                }], rowHeight: [{
                    type: i0.Input
                }], header: [{
                    type: i0.Input
                }], column: [{
                    type: i0.Input
                }], footer: [{
                    type: i0.Input
                }], add: [{
                    type: i0.Input
                }], edit: [{
                    type: i0.Input
                }], delete: [{
                    type: i0.Input
                }], filter: [{
                    type: i0.Input
                }], startWithOpenData: [{
                    type: i0.Input
                }], page: [{
                    type: i0.Output
                }], sort: [{
                    type: i0.Output
                }], select: [{
                    type: i0.Output
                }], activate: [{
                    type: i0.Output
                }], onButtonCell: [{
                    type: i0.Output
                }], columns: [{
                    type: i0.Input
                }] } });

    var DoDatatableComponent = /** @class */ (function () {
        function DoDatatableComponent(locale, injector) {
            this.locale = locale;
            this.injector = injector;
            this.rows = [];
            this.columns = [];
            this.filters = [];
            this.selected = [];
            this.limit = 10;
            this.count = 0;
            this.offset = 0;
            this.externalPaging = false;
            this.externalSorting = false;
            this.loadingIndicator = false;
            this.scrollbarH = true;
            this.scrollbarV = false;
            this.reorderable = true;
            this.sortType = i1$1.SortType.single;
            this.selectionType = i1$1.SelectionType.checkbox;
            this.columnMode = i1$1.ColumnMode.force;
            this.headerHeight = 40;
            this.footerHeight = 'auto';
            this.rowHeight = 'auto';
            this.header = true;
            this.column = true;
            this.footer = true;
            this.add = true;
            this.edit = true;
            this.delete = true;
            this.filter = true;
            this.startWithOpenData = true;
            this.filterEvent = false;
            this.autoLoad = true;
            this.onAdd = new i0.EventEmitter();
            this.onEdit = new i0.EventEmitter();
            this.onDelete = new i0.EventEmitter();
            this.onSearch = new i0.EventEmitter();
            this.onFilter = new i0.EventEmitter();
            this.onButtonCell = new i0.EventEmitter();
            this.onLoading = new i0.EventEmitter();
            this.onSelected = new i0.EventEmitter();
            this.isDelete = false;
            this.destroy$ = new rxjs.Subject();
            this.pageOffset = 0;
            this.http = injector.get(doCore.HTTP_SERVICE);
            this.cdref = injector.get(i0.ChangeDetectorRef);
        }
        Object.defineProperty(DoDatatableComponent.prototype, "filterFn", {
            //  @ViewChild('datatable', {static: false}) datatable: DatatableComponent;
            set: function (keyword) {
                this.keywordParam = keyword;
                this._keyword = keyword;
                this.count = 0;
                this.offset = 0;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DoDatatableComponent.prototype, "filterDoFetchFn", {
            set: function (keyword) {
                if (keyword) {
                    this.keywordParam = keyword;
                    this._keyword = keyword;
                }
                this.count = 0;
                this.offset = 0;
                this.fetch();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DoDatatableComponent.prototype, "reloadFn", {
            set: function (reload) {
                if (reload && !this.loadingIndicator) {
                    this.selected = [];
                    this.count = 0;
                    this.offset = 0;
                    this.fetch();
                }
            },
            enumerable: false,
            configurable: true
        });
        DoDatatableComponent.prototype.ngOnInit = function () {
            if (this.startWithOpenData) {
                this.fetch();
            }
        };
        DoDatatableComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next(true);
            this.destroy$.complete();
            this.destroy$.unsubscribe();
        };
        DoDatatableComponent.prototype.doSearch = function (search) {
            this.isDelete = false;
            this.onSearch.emit(search);
            if (this.keywordParam) {
                this._keyword = this.keywordParam;
                this._keyword['_all'] = search;
            }
            else {
                this._keyword = {
                    _all: search,
                };
            }
            this.count = 0;
            this.offset = 0;
            this.fetch();
        };
        DoDatatableComponent.prototype.doFilter = function (search) {
            var _this = this;
            this.isDelete = false;
            if (this.filterEvent) {
                this.onFilter.emit(search);
            }
            else {
                if (this.keywordParam) {
                    this._keyword = this.keywordParam;
                }
                else {
                    this._keyword = {};
                }
                this.filters.forEach(function (filter) {
                    switch (filter.type) {
                        case 'input':
                        case 'datepicker':
                        case 'radio':
                            _this._keyword[filter.controlName] = search[filter.controlName] ? search[filter.controlName] : null;
                            break;
                        case 'select':
                            _this._keyword[filter.controlName] = search[filter.controlName].label ? search[filter.controlName] : null;
                            break;
                        case 'checkbox':
                            _this._keyword[filter.controlName] = search[filter.controlName].name ? search[filter.controlName].name : null;
                            break;
                        default:
                            break;
                    }
                });
                this.count = 0;
                this.offset = 0;
                this.fetch();
            }
        };
        DoDatatableComponent.prototype.doAdd = function (add) {
            this.onAdd.emit(add);
        };
        DoDatatableComponent.prototype.doEdit = function (row) {
            this.onEdit.emit(row);
        };
        DoDatatableComponent.prototype.doDelete = function () {
            this.onDelete.emit(this.selected);
        };
        DoDatatableComponent.prototype.onKeyDown = function (event) {
            if (event.key.toUpperCase() === 'ENTER') {
                this.doSearch(this._search);
            }
        };
        DoDatatableComponent.prototype.fetch = function () {
            var _this = this;
            if (this.api) {
                this.externalPaging = true;
                this.externalSorting = true;
                this.getRequest().subscribe(function (rows) {
                    _this.rows = rows;
                    _this.cdref.detectChanges();
                });
            }
        };
        DoDatatableComponent.prototype.setPage = function (page) {
            this.pageOffset = page.offset * this.limit;
            this.fetch();
        };
        DoDatatableComponent.prototype.onSort = function (order) {
            var _this = this;
            if (order) {
                if (Array.isArray(order.sorts)) {
                    order.sorts.forEach(function (sort) {
                        if (sort['dir'] === 'asc') {
                            _this.sort = { asc: [sort['prop']] };
                        }
                        else {
                            _this.sort = { desc: [sort['prop']] };
                        }
                    });
                }
            }
            this.fetch();
        };
        DoDatatableComponent.prototype.onSelect = function (_a) {
            var selected = _a.selected;
            if (Array.isArray(selected)) {
                if (selected.length > 0) {
                    if (this.delete) {
                        this.isDelete = true;
                    }
                }
                else {
                    this.isDelete = false;
                }
                this.selected = selected;
                this.onSelected.emit(this.selected);
            }
            else {
                this.isDelete = false;
            }
        };
        DoDatatableComponent.prototype.onClickButton = function (event) {
            this.onButtonCell.emit(event);
        };
        DoDatatableComponent.prototype.getRequest = function () {
            var _this = this;
            var body = {
                offset: this.pageOffset,
                limit: this.limit,
                keyword: this._keyword,
                order: this.sort,
            };
            this.loadingIndicator = true;
            this.onLoading.emit(this.loadingIndicator);
            return this.http.HTTP_AUTH(this.api, body)
                .pipe(operators.map(function (response) {
                _this.count = Number(response.totalRecord);
                _this.loadingIndicator = false;
                _this.onLoading.emit(_this.loadingIndicator);
                return response['data'];
            }), operators.catchError(function () {
                _this.loadingIndicator = false;
                _this.count = 0;
                _this.onLoading.emit(_this.loadingIndicator);
                return rxjs.of([]);
            }));
        };
        return DoDatatableComponent;
    }());
    DoDatatableComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoDatatableComponent, deps: [{ token: i0.LOCALE_ID }, { token: i0__namespace.Injector }], target: i0__namespace.ɵɵFactoryTarget.Component });
    DoDatatableComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoDatatableComponent, selector: "do-datatable", inputs: { rows: "rows", columns: "columns", filters: "filters", selected: "selected", limit: "limit", count: "count", offset: "offset", externalPaging: "externalPaging", externalSorting: "externalSorting", loadingIndicator: "loadingIndicator", scrollbarH: "scrollbarH", scrollbarV: "scrollbarV", reorderable: "reorderable", sortType: "sortType", messages: "messages", selectionType: "selectionType", columnMode: "columnMode", headerHeight: "headerHeight", footerHeight: "footerHeight", rowHeight: "rowHeight", header: "header", column: "column", footer: "footer", add: "add", edit: "edit", delete: "delete", filter: "filter", api: "api", startWithOpenData: "startWithOpenData", filterEvent: "filterEvent", formGroupFilter: "formGroupFilter", sort: "sort", sortsDefault: "sortsDefault", autoLoad: "autoLoad", filterFn: "filterFn", filterDoFetchFn: "filterDoFetchFn", reloadFn: "reloadFn" }, outputs: { onAdd: "onAdd", onEdit: "onEdit", onDelete: "onDelete", onSearch: "onSearch", onFilter: "onFilter", onButtonCell: "onButtonCell", onLoading: "onLoading", onSelected: "onSelected" }, ngImport: i0__namespace, template: "<do-datatable-header\n    [header]=\"header\"\n    [add]=\"add\"\n    [delete]=\"isDelete\"\n    [filter]=\"filter\"\n    [formGroupFilter]=\"formGroupFilter\"\n    (onSearch)=\"doSearch($event)\"\n    (onFilter)=\"doFilter($event)\"\n    (onAdd)=\"doAdd($event)\"\n    (onDelete)=\"doDelete()\">\n    <ng-content></ng-content>\n</do-datatable-header>\n<do-datatable-base\n    [rows]=\"rows\"\n    [columns]=\"columns\"\n    [selected]=\"selected\"\n    [limit]=\"limit\"\n    [count]=\"count\"\n    [offset]=\"offset\"\n    [externalPaging]=\"externalPaging\"\n    [externalSorting]=\"externalSorting\"\n    [loadingIndicator]=\"loadingIndicator\"\n    [scrollbarH]=\"scrollbarH\"\n    [scrollbarV]=\"scrollbarV\"\n    [reorderable]=\"reorderable\"\n    [sortType]=\"sortType\"\n    [sortsDefault]=\"sortsDefault\"\n    [messages]=\"messages\"\n    [selectionType]=\"selectionType\"\n    [columnMode]=\"columnMode\"\n    [headerHeight]=\"headerHeight\"\n    [footerHeight]=\"footerHeight\"\n    [rowHeight]=\"rowHeight\"\n    [header]=\"header\"\n    [column]=\"column\"\n    [footer]=\"footer\"\n    [add]=\"add\"\n    [edit]=\"edit\"\n    [delete]=\"delete\"\n    [filter]=\"filter\"\n    [startWithOpenData]=\"startWithOpenData\"\n    (page)=\"setPage($event)\"\n    (sort)=\"onSort($event)\"\n    (select)=\"onSelect($event)\"\n    (activate)=\"doEdit($event)\"\n    (onButtonCell)=\"onClickButton($event)\">\n</do-datatable-base>\n", styles: [""], components: [{ type: DoDatatableHeaderComponent, selector: "do-datatable-header", inputs: ["header", "footer", "add", "edit", "delete", "filter", "formGroupFilter"], outputs: ["onSearch", "onFilter", "onAdd", "onDelete"] }, { type: DoDatatableBaseComponent, selector: "do-datatable-base", inputs: ["rows", "selected", "limit", "count", "offset", "externalPaging", "externalSorting", "loadingIndicator", "scrollbarH", "scrollbarV", "reorderable", "sortType", "sortsDefault", "messages", "selectionType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "header", "column", "footer", "add", "edit", "delete", "filter", "startWithOpenData", "columns"], outputs: ["page", "sort", "select", "activate", "onButtonCell"] }], changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush, encapsulation: i0__namespace.ViewEncapsulation.None });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoDatatableComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-datatable',
                        styleUrls: ['./do-datatable.component.scss'],
                        templateUrl: './do-datatable.component.html',
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], ctorParameters: function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i0.LOCALE_ID]
                        }] }, { type: i0__namespace.Injector }];
        }, propDecorators: { rows: [{
                    type: i0.Input
                }], columns: [{
                    type: i0.Input
                }], filters: [{
                    type: i0.Input
                }], selected: [{
                    type: i0.Input
                }], limit: [{
                    type: i0.Input
                }], count: [{
                    type: i0.Input
                }], offset: [{
                    type: i0.Input
                }], externalPaging: [{
                    type: i0.Input
                }], externalSorting: [{
                    type: i0.Input
                }], loadingIndicator: [{
                    type: i0.Input
                }], scrollbarH: [{
                    type: i0.Input
                }], scrollbarV: [{
                    type: i0.Input
                }], reorderable: [{
                    type: i0.Input
                }], sortType: [{
                    type: i0.Input
                }], messages: [{
                    type: i0.Input
                }], selectionType: [{
                    type: i0.Input
                }], columnMode: [{
                    type: i0.Input
                }], headerHeight: [{
                    type: i0.Input
                }], footerHeight: [{
                    type: i0.Input
                }], rowHeight: [{
                    type: i0.Input
                }], header: [{
                    type: i0.Input
                }], column: [{
                    type: i0.Input
                }], footer: [{
                    type: i0.Input
                }], add: [{
                    type: i0.Input
                }], edit: [{
                    type: i0.Input
                }], delete: [{
                    type: i0.Input
                }], filter: [{
                    type: i0.Input
                }], api: [{
                    type: i0.Input
                }], startWithOpenData: [{
                    type: i0.Input
                }], filterEvent: [{
                    type: i0.Input
                }], formGroupFilter: [{
                    type: i0.Input
                }], sort: [{
                    type: i0.Input
                }], sortsDefault: [{
                    type: i0.Input
                }], autoLoad: [{
                    type: i0.Input
                }], onAdd: [{
                    type: i0.Output
                }], onEdit: [{
                    type: i0.Output
                }], onDelete: [{
                    type: i0.Output
                }], onSearch: [{
                    type: i0.Output
                }], onFilter: [{
                    type: i0.Output
                }], onButtonCell: [{
                    type: i0.Output
                }], onLoading: [{
                    type: i0.Output
                }], onSelected: [{
                    type: i0.Output
                }], filterFn: [{
                    type: i0.Input
                }], filterDoFetchFn: [{
                    type: i0.Input
                }], reloadFn: [{
                    type: i0.Input
                }] } });

    var DATATABLE_COMPONENTS = [
        DoDatatableBaseComponent,
        DoDatatableCollapseComponent,
        DoDatatableHeaderComponent,
        DoDatatableComponent,
    ];
    var DoDatatableModule = /** @class */ (function () {
        function DoDatatableModule() {
        }
        return DoDatatableModule;
    }());
    DoDatatableModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoDatatableModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DoDatatableModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoDatatableModule, declarations: [DoDatatableBaseComponent,
            DoDatatableCollapseComponent,
            DoDatatableHeaderComponent,
            DoDatatableComponent], imports: [i4.CommonModule,
            i1.FormsModule,
            i1.ReactiveFormsModule,
            i1$1.NgxDatatableModule,
            i2.NbButtonModule,
            i2.NbIconModule,
            i5.TranslateModule,
            DoInputModule,
            DoBaseModule,
            DoButtonModule], exports: [DoDatatableBaseComponent,
            DoDatatableCollapseComponent,
            DoDatatableHeaderComponent,
            DoDatatableComponent] });
    DoDatatableModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoDatatableModule, imports: [[
                i4.CommonModule,
                i1.FormsModule,
                i1.ReactiveFormsModule,
                i1$1.NgxDatatableModule,
                i2.NbButtonModule,
                i2.NbIconModule,
                i5.TranslateModule,
                DoInputModule,
                DoBaseModule,
                DoButtonModule,
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoDatatableModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i4.CommonModule,
                            i1.FormsModule,
                            i1.ReactiveFormsModule,
                            i1$1.NgxDatatableModule,
                            i2.NbButtonModule,
                            i2.NbIconModule,
                            i5.TranslateModule,
                            DoInputModule,
                            DoBaseModule,
                            DoButtonModule,
                        ],
                        declarations: __spreadArray([], __read(DATATABLE_COMPONENTS)),
                        exports: __spreadArray([], __read(DATATABLE_COMPONENTS)),
                    }]
            }] });

    var DoLabelTextComponent = /** @class */ (function () {
        function DoLabelTextComponent() {
            this.colLabel = 4;
            this.colContent = 8;
            this.skeleton = false;
            this.dividerlabel = true;
            this.numeric = false;
            this.label = '';
            this.nolabel = false;
            this.required = false;
            this.showMoreMode = false;
            this.maxShowMore = 100;
            this.originalContent = '';
            this.value = '';
            this.showMore = false;
        }
        Object.defineProperty(DoLabelTextComponent.prototype, "content", {
            set: function (data) {
                if (this.showMoreMode) {
                    if (data) {
                        this.originalContent = data;
                        if (data.length > this.maxShowMore) {
                            this.onLess();
                        }
                    }
                }
                else {
                    this.value = data;
                }
            },
            enumerable: false,
            configurable: true
        });
        DoLabelTextComponent.prototype.onShowMore = function () {
            this.showMore = !this.showMore;
            if (this.showMore) {
                this.value = this.originalContent;
            }
            else {
                this.onLess();
            }
        };
        DoLabelTextComponent.prototype.onLess = function () {
            this.value = this.originalContent.slice(0, this.maxShowMore);
            this.value = this.value + '.... ';
        };
        return DoLabelTextComponent;
    }());
    DoLabelTextComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoLabelTextComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    DoLabelTextComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoLabelTextComponent, selector: "do-label-text", inputs: { colLabel: "colLabel", colContent: "colContent", skeleton: "skeleton", name: "name", content: "content", dividerlabel: "dividerlabel", numeric: "numeric", label: "label", nolabel: "nolabel", required: "required", showMoreMode: "showMoreMode", maxShowMore: "maxShowMore", paramError: "paramError" }, ngImport: i0__namespace, template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\" \n  [colLabel]=\"colLabel\" [colContent]=\"colContent\"\n  [required]=\"required\"\n  [dividerlabel]=\"dividerlabel\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colContent}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <label *ngIf=\"!showMoreMode\"\n      class=\"col-form-label label-text\"\n      [ngClass]=\"{\n        'no-content-label': !value,\n        'numeric-label': numeric\n      }\"\n    >{{value | translate}} </label>\n    <div *ngIf=\"showMoreMode\" class=\"label-text\">\n      <label\n      class=\"col-form-label\"\n      [ngClass]=\"{\n        'no-content-label': !value,\n        'numeric-label': numeric\n      }\"\n      >{{value | translate}} </label>\n      <button *ngIf=\"!showMore\" type=\"button\" nbButton outline status=\"info\" (click)=\"onShowMore()\">{{'Show More' | translate}}</button>\n      <button *ngIf=\"showMore\" type=\"button\" nbButton outline status=\"info\" (click)=\"onShowMore()\">{{'Show Less' | translate}}</button>\n    </div>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colContent}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>", styles: ["label.label-text{width:100%;border-bottom:.05rem solid #e4e5e6;padding-right:.5rem;padding-left:.5rem}div.label-text{overflow:auto;width:100%;border-bottom:.05rem solid #e4e5e6;padding-right:.5rem;padding-left:.5rem}button.btn-link{padding-left:0}label.no-content-label{padding:15px 0}label.numeric-label{text-align:right}\n"], components: [{ type: DoContainerOutletComponent, selector: "do-container-outlet", inputs: ["name", "label", "colLabel", "colContent", "nolabel", "dividerlabel", "required", "hasErrors", "errorMessages", "warnMessage", "paramError", "skeleton", "show"] }, { type: i2__namespace.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i4__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], pipes: { "translate": i5__namespace.TranslatePipe }, encapsulation: i0__namespace.ViewEncapsulation.None });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoLabelTextComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-label-text',
                        styleUrls: ['./do-label-text.component.scss'],
                        templateUrl: './do-label-text.component.html',
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], ctorParameters: function () { return []; }, propDecorators: { colLabel: [{
                    type: i0.Input
                }], colContent: [{
                    type: i0.Input
                }], skeleton: [{
                    type: i0.Input
                }], name: [{
                    type: i0.Input
                }], content: [{
                    type: i0.Input
                }], dividerlabel: [{
                    type: i0.Input
                }], numeric: [{
                    type: i0.Input
                }], label: [{
                    type: i0.Input
                }], nolabel: [{
                    type: i0.Input
                }], required: [{
                    type: i0.Input
                }], showMoreMode: [{
                    type: i0.Input
                }], maxShowMore: [{
                    type: i0.Input
                }], paramError: [{
                    type: i0.Input
                }] } });

    var LABEL_COMPONENTS = [
        DoLabelTextComponent,
    ];
    var DoLabelModule = /** @class */ (function () {
        function DoLabelModule() {
        }
        return DoLabelModule;
    }());
    DoLabelModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoLabelModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DoLabelModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoLabelModule, declarations: [DoLabelTextComponent], imports: [i4.CommonModule,
            i5.TranslateModule,
            DoBaseModule,
            i2.NbButtonModule], exports: [DoLabelTextComponent] });
    DoLabelModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoLabelModule, imports: [[
                i4.CommonModule,
                i5.TranslateModule,
                DoBaseModule,
                i2.NbButtonModule,
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoLabelModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i4.CommonModule,
                            i5.TranslateModule,
                            DoBaseModule,
                            i2.NbButtonModule,
                        ],
                        declarations: __spreadArray([], __read(LABEL_COMPONENTS)),
                        exports: __spreadArray([], __read(LABEL_COMPONENTS)),
                    }]
            }] });

    var ContentSelectDirective = /** @class */ (function () {
        function ContentSelectDirective() {
        }
        return ContentSelectDirective;
    }());
    ContentSelectDirective.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ContentSelectDirective, deps: [], target: i0__namespace.ɵɵFactoryTarget.Directive });
    ContentSelectDirective.ɵdir = i0__namespace.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.16", type: ContentSelectDirective, selector: "[doContentSelect]", ngImport: i0__namespace });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ContentSelectDirective, decorators: [{
                type: i0.Directive,
                args: [{
                        selector: '[doContentSelect]',
                    }]
            }] });

    var DoSelectComponent = /** @class */ (function (_super) {
        __extends(DoSelectComponent, _super);
        function DoSelectComponent(ngControl, locale, injector) {
            var _this = _super.call(this, ngControl, locale) || this;
            _this.locale = locale;
            _this.injector = injector;
            _this.colLabel = 3;
            _this.colInput = 9;
            _this.items = [];
            _this.multiple = false;
            _this.loading = false;
            _this.addTag = false;
            _this.closeOnSelect = true;
            _this.clearable = true;
            _this.searchable = true;
            _this.hideSelected = true;
            _this.minTermLength = 2;
            _this.maxTermLength = 50;
            _this.limit = 50;
            _this.offsetNextLoad = _this.limit - 35;
            _this.onSelect = new i0.EventEmitter();
            _this.onClear = new i0.EventEmitter();
            _this.notFoundText = 'select.notfound';
            _this.typeToSearchText = 'select.typesearch';
            _this.virtualScroll = true;
            _this.paramSearch = { value: _this.minTermLength };
            _this.typeahead$ = new rxjs.Subject();
            _this.destroy$ = new rxjs.Subject();
            _this.total = 0;
            _this.totalRecord = 0;
            _this.http = injector.get(doCore.HTTP_SERVICE);
            _this.cdref = injector.get(i0.ChangeDetectorRef);
            return _this;
        }
        Object.defineProperty(DoSelectComponent.prototype, "value", {
            get: function () { return this._value; },
            set: function (value) {
                if (this._value !== value) {
                    this._value = value;
                    this.onChange(value);
                    this.onSelect.emit(value);
                    var control = this.ngControl.control;
                    if (control) {
                        control.updateValueAndValidity();
                        control.markAsTouched();
                        control.markAsDirty();
                    }
                }
            },
            enumerable: false,
            configurable: true
        });
        DoSelectComponent.prototype.onInit = function () {
            var _this = this;
            this.paramSearch = { value: this.minTermLength };
            if (this.api) {
                this.fetchSearch().subscribe(function (items) {
                    _this.fetchMore(items);
                });
            }
        };
        DoSelectComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next(true);
            this.destroy$.complete();
            this.destroy$.unsubscribe();
            this.typeahead$.next(null);
            this.typeahead$.complete();
            this.typeahead$.unsubscribe();
        };
        DoSelectComponent.prototype.onOpen = function () {
            var _this = this;
            if (this.api) {
                if (this.loading) {
                    return;
                }
                this.total = 0;
                this.items = [];
                if (!this.searchable) {
                    this.fetchNone().subscribe(function (items) {
                        _this.fetchMore(items);
                    });
                }
            }
        };
        DoSelectComponent.prototype.onClose = function () {
            if (this.api) {
                this.reset();
            }
        };
        DoSelectComponent.prototype.onScroll = function (_a, search) {
            var _this = this;
            var end = _a.end;
            if (!this.loading) {
                if ((Number(end) + this.offsetNextLoad) >= this.total && this.total > 0 && this.total < this.totalRecord) {
                    if (this.searchable && search) {
                        this.typeahead$.next(search);
                    }
                    else {
                        this.fetchNone().subscribe(function (items) {
                            _this.fetchMore(items);
                        });
                    }
                }
            }
        };
        DoSelectComponent.prototype.onScrollToEnd = function (search) {
            var _this = this;
            if (!this.loading) {
                if (this.total < this.totalRecord) {
                    if (this.searchable && search) {
                        this.typeahead$.next(search);
                    }
                    else {
                        this.fetchNone().subscribe(function (items) {
                            _this.fetchMore(items);
                        });
                    }
                }
            }
        };
        DoSelectComponent.prototype.doClear = function () {
            this.onClear.emit(true);
        };
        DoSelectComponent.prototype.reset = function () {
            this.loading = false;
            this.total = 0;
            if (this.api) {
                this.items = [];
            }
        };
        DoSelectComponent.prototype.fetchMore = function (items) {
            this.items = __spreadArray(__spreadArray([], __read(this.items)), __read(items));
            this.cdref.detectChanges();
            this.loading = false;
        };
        DoSelectComponent.prototype.fetchSearch = function () {
            var _this = this;
            return this.typeahead$.pipe(operators.switchMap(function (term) {
                if (term) {
                    if (term.length > _this.maxTermLength) {
                        return rxjs.of([]);
                    }
                    return _this.getRequest(_this.total, term);
                }
                else {
                    return rxjs.of([]);
                }
            })).pipe(operators.takeUntil(this.destroy$));
        };
        DoSelectComponent.prototype.fetchNone = function () {
            return this.getRequest(this.total).pipe(operators.takeUntil(this.destroy$));
        };
        DoSelectComponent.prototype.getRequest = function (offset, search) {
            var _this = this;
            var body;
            if (this.api.method === doCore.HttpMethod.POST) {
                body = {
                    offset: offset ? offset : 0,
                    limit: this.limit,
                    keyword: {
                        _label: search,
                    },
                };
                if (this.queryParam) {
                    this.queryParam.forEach(function (result) {
                        body['keyword'][result.key] = result.value;
                    });
                }
            }
            this.loading = true;
            return this.http.HTTP_AUTH(this.api, body)
                .pipe(operators.map(function (response) {
                _this.totalRecord = Number(response.totalRecord);
                _this.total = _this.total + Number(response.totalFiltered);
                return response['data'];
            }), operators.catchError(function () { return rxjs.of([]); }));
        };
        DoSelectComponent.prototype.onKeyDown = function (event, term) {
            if (event.key) {
                if (['DELETE', 'BACKSPACE', 'TAB', 'ESCAPE', 'ENTER', 'DECIMAL POINT', 'PERIOD', 'DASH'].indexOf(event.key.toUpperCase()) !== -1 ||
                    (event.key.toUpperCase() === 'A' && event.ctrlKey === true) || // Allow: Ctrl+A
                    (event.key.toUpperCase() === 'C' && event.ctrlKey === true) || // Allow: Ctrl+C
                    (event.key.toUpperCase() === 'V' && event.ctrlKey === true) || // Allow: Ctrl+V
                    (event.key.toUpperCase() === 'X' && event.ctrlKey === true) || // Allow: Ctrl+X
                    (event.key.toUpperCase() === 'A' && event.metaKey === true) || // Cmd+A (Mac)
                    (event.key.toUpperCase() === 'C' && event.metaKey === true) || // Cmd+C (Mac)
                    (event.key.toUpperCase() === 'V' && event.metaKey === true) || // Cmd+V (Mac)
                    (event.key.toUpperCase() === 'X' && event.metaKey === true) || // Cmd+X (Mac)
                    (event.key.toUpperCase() === 'END') ||
                    (event.key.toUpperCase() === 'HOME') ||
                    (event.key.toUpperCase() === 'ARROWLEFT') ||
                    (event.key.toUpperCase() === 'ARROWRIGHT') ||
                    (event.key.toUpperCase() === 'ARROWDOWN') ||
                    (event.key.toUpperCase() === 'ARROWUP') || (!event.key.match(/[!@#$%^&*()?":{}|<>\[\];\\=~`]/g))) {
                    if (!(event.ctrlKey === true ||
                        event.metaKey === true ||
                        event.altKey === true ||
                        (event.key.toUpperCase() === 'END') ||
                        (event.key.toUpperCase() === 'HOME') ||
                        (event.key.toUpperCase() === 'ARROWLEFT') ||
                        (event.key.toUpperCase() === 'ARROWRIGHT') ||
                        (event.key.toUpperCase() === 'ARROWDOWN') ||
                        (event.key.toUpperCase() === 'ARROWUP'))) {
                        this.reset();
                    }
                    if (term) {
                        if (term.length > this.maxTermLength) {
                            return false;
                        }
                    }
                    return true;
                }
            }
            return false;
        };
        return DoSelectComponent;
    }(ValueAccessorDirective));
    DoSelectComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoSelectComponent, deps: [{ token: i1__namespace.NgControl, optional: true, self: true }, { token: i0.LOCALE_ID }, { token: i0__namespace.Injector }], target: i0__namespace.ɵɵFactoryTarget.Component });
    DoSelectComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoSelectComponent, selector: "do-select", inputs: { placeholder: "placeholder", colLabel: "colLabel", colInput: "colInput", items: "items", multiple: "multiple", loading: "loading", addTag: "addTag", closeOnSelect: "closeOnSelect", clearable: "clearable", searchable: "searchable", hideSelected: "hideSelected", minTermLength: "minTermLength", maxTermLength: "maxTermLength", api: "api", limit: "limit", offsetNextLoad: "offsetNextLoad", queryParam: "queryParam" }, outputs: { onSelect: "onSelect", onClear: "onClear" }, queries: [{ propertyName: "contentTemplate", first: true, predicate: ContentSelectDirective, descendants: true, read: i0.TemplateRef }], usesInheritance: true, ngImport: i0__namespace, template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [warnMessage]=\"warnMessage\"\n  [skeleton]=\"skeleton\" [show]=\"show\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <ng-select\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [items]=\"items\"\n      [typeahead]=\"typeahead$\"\n      [multiple]=\"multiple\"\n      [loading]=\"loading\"\n      [notFoundText]=\"notFoundText | translate\"\n      [addTag]=\"addTag\"\n      [closeOnSelect]=\"closeOnSelect\"\n      [clearable]=\"required? false: clearable\"\n      [searchable]=\"searchable\"\n      [hideSelected]=\"hideSelected\"\n      [minTermLength]=\"minTermLength\"\n      [virtualScroll]=\"virtualScroll\"\n      [required]=\"required\"\n      [disabled]=\"disabled\"\n      (keydown)=\"onKeyDown($event, select.searchTerm)\"\n      (scroll)=\"onScroll($event, select.searchTerm)\"\n      (scrollToEnd)=\"onScrollToEnd(select.searchTerm)\"\n      (open)=\"onOpen()\"\n      (close)=\"onClose()\"\n      (clear)=\"doClear()\"\n      (change)=\"onChange($event)\"\n      (focus)=\"onTouched($event)\"\n      (blur)=\"onTouched($event)\"\n      [(ngModel)]=\"value\"\n      [ngClass]=\"{'required': required}\"\n      appendTo=\"body\"\n      typeToSearchText=\"{{typeToSearchText | translate:paramSearch}}\"\n      #select>\n        <ng-template *ngIf=\"contentTemplate\" ng-label-tmp let-item=\"item\">\n          <ng-container *ngTemplateOutlet=\"contentTemplate; context: {$implicit: item}\"></ng-container>\n        </ng-template>\n        <ng-template *ngIf=\"contentTemplate\" ng-option-tmp let-item=\"item\">\n          <ng-container *ngTemplateOutlet=\"contentTemplate; context: {$implicit: item}\"></ng-container>\n        </ng-template>\n    </ng-select>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>", styles: [".nb-theme-default .ng-select.ng-select-opened>.ng-select-container{background:#edf1f7;border-color:#c2cde1 #e4e9f2 #f5f7fa}.nb-theme-default .ng-select.ng-select-opened>.ng-select-container:hover{box-shadow:none}.nb-theme-default .ng-select.ng-select-opened>.ng-select-container .ng-arrow{top:-2px;border-color:transparent transparent #9fb1d1;border-width:0 5px 5px}.nb-theme-default .ng-select.ng-select-opened>.ng-select-container .ng-arrow:hover{border-color:transparent transparent #354a6f}.nb-theme-default .ng-select.ng-select-opened.ng-select-top>.ng-select-container{border-top-right-radius:0;border-top-left-radius:0}.nb-theme-default .ng-select.ng-select-opened.ng-select-right>.ng-select-container{border-top-right-radius:0;border-bottom-right-radius:0}.nb-theme-default .ng-select.ng-select-opened.ng-select-bottom>.ng-select-container{border-bottom-right-radius:0;border-bottom-left-radius:0}.nb-theme-default .ng-select.ng-select-opened.ng-select-left>.ng-select-container{border-top-left-radius:0;border-bottom-left-radius:0}.nb-theme-default .ng-select.ng-select-focused:not(.ng-select-opened)>.ng-select-container{border-color:#edf1f7;box-shadow:inset 0 1px 1px #00000013,0 0 0 3px #007eff1a}.nb-theme-default .ng-select.ng-select-disabled>.ng-select-container{background-color:#8f9bb37a}.nb-theme-default .ng-select .ng-has-value .ng-placeholder{display:none}.nb-theme-default .ng-select .ng-select-container{color:#222b45;background-color:#edf1f7;border-radius:.25rem;border:1px solid #e4e9f2;min-height:40px;align-items:center;font-weight:600;line-height:1.5rem;font-family:Open Sans,sans-serif}.nb-theme-default .ng-select .ng-select-container:hover{box-shadow:0 1px #0000000f}.nb-theme-default .ng-select .ng-select-container .ng-value-container{align-items:center;padding-left:10px}[dir=rtl] .nb-theme-default .ng-select .ng-select-container .ng-value-container{padding-right:10px;padding-left:0}.nb-theme-default .ng-select .ng-select-container .ng-value-container .ng-placeholder{font-size:.9375rem;font-weight:400;color:#8f9bb3;padding-left:.3rem}.nb-theme-default .ng-select.ng-select-single .ng-select-container{height:40px}.nb-theme-default .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{top:5px;left:0;padding-left:10px;padding-right:50px}.nb-theme-default .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input>input{color:#222b45}[dir=rtl] .nb-theme-default .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{padding-right:10px;padding-left:50px}.nb-theme-default .ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value{background-color:#8f9bb37a;border:1px solid white}.nb-theme-default .ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-label{padding:0 5px}.nb-theme-default .ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-top:5px;padding-left:7px}[dir=rtl] .nb-theme-default .ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-right:7px;padding-left:0}.nb-theme-default .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{font-size:.9em;margin-bottom:5px;color:#222b45;background-color:#edf1f7;border-radius:2px;margin-right:5px}[dir=rtl] .nb-theme-default .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{margin-right:0;margin-left:5px}.nb-theme-default .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled{background-color:#8f9bb37a}.nb-theme-default .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:5px}[dir=rtl] .nb-theme-default .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:0;padding-right:5px}.nb-theme-default .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-label{display:inline-block;padding:1px 5px}.nb-theme-default .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:inline-block;padding:1px 5px}.nb-theme-default .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon:hover{background-color:#dbe3ef}.nb-theme-default .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-right:1px solid #cad6e7}[dir=rtl] .nb-theme-default .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-left:1px solid #cad6e7;border-right:none}.nb-theme-default .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:1px solid #cad6e7}[dir=rtl] .nb-theme-default .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:0;border-right:1px solid #cad6e7}.nb-theme-default .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding:0 0 3px 3px}[dir=rtl] .nb-theme-default .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding:0 3px 3px 0}.nb-theme-default .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input>input{color:#222b45}.nb-theme-default .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{top:5px;padding-bottom:5px;padding-left:3px}[dir=rtl] .nb-theme-default .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{padding-right:3px;padding-left:0}.nb-theme-default .ng-select .ng-clear-wrapper{color:#9fb1d1}.nb-theme-default .ng-select .ng-clear-wrapper:hover .ng-clear{color:#d0021b}.nb-theme-default .ng-select .ng-spinner-zone{padding:5px 5px 0 0}[dir=rtl] .nb-theme-default .ng-select .ng-spinner-zone{padding:5px 0 0 5px}.nb-theme-default .ng-select .ng-arrow-wrapper{width:25px;padding-right:5px}[dir=rtl] .nb-theme-default .ng-select .ng-arrow-wrapper{padding-left:5px;padding-right:0}.nb-theme-default .ng-select .ng-arrow-wrapper:hover .ng-arrow{border-top-color:#5a79b0}.nb-theme-default .ng-select .ng-arrow-wrapper .ng-arrow{border-color:#9fb1d1 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}.nb-theme-default .ng-dropdown-panel{background-color:#fff;border:1px solid #e4e9f2;box-shadow:0 1px #0000000f;left:0}.nb-theme-default .ng-dropdown-panel.ng-select-top{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#fff;margin-bottom:-1px}.nb-theme-default .ng-dropdown-panel.ng-select-top .ng-dropdown-panel-items .ng-option:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.nb-theme-default .ng-dropdown-panel.ng-select-right{left:100%;top:0;border-top-right-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-bottom-color:#fff;margin-bottom:-1px}.nb-theme-default .ng-dropdown-panel.ng-select-right .ng-dropdown-panel-items .ng-option:first-child{border-top-right-radius:4px}.nb-theme-default .ng-dropdown-panel.ng-select-bottom{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#fff;margin-top:-1px}.nb-theme-default .ng-dropdown-panel.ng-select-bottom .ng-dropdown-panel-items .ng-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.nb-theme-default .ng-dropdown-panel.ng-select-left{left:-100%;top:0;border-top-left-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-bottom-color:#fff;margin-bottom:-1px}.nb-theme-default .ng-dropdown-panel.ng-select-left .ng-dropdown-panel-items .ng-option:first-child{border-top-left-radius:4px}.nb-theme-default .ng-dropdown-panel .ng-dropdown-header{border-bottom:1px solid #e4e9f2;padding:5px 7px}.nb-theme-default .ng-dropdown-panel .ng-dropdown-footer{border-top:1px solid #e4e9f2;padding:5px 7px}.nb-theme-default .ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{-webkit-user-select:none;user-select:none;padding:8px 10px;font-weight:500;color:#0000008a;cursor:pointer}.nb-theme-default .ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-disabled{cursor:default}.nb-theme-default .ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-marked{background-color:#edf1f7}.nb-theme-default .ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected,.nb-theme-default .ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected.ng-option-marked{background-color:#edf1f7;font-weight:600}.nb-theme-default .ng-dropdown-panel .ng-dropdown-panel-items .ng-option{background-color:#fff;color:#222b45;padding:8px 10px}.nb-theme-default .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected,.nb-theme-default .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked{color:#222b45;background-color:#edf1f7}.nb-theme-default .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected .ng-option-label,.nb-theme-default .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked .ng-option-label{font-weight:600}.nb-theme-default .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked{background-color:#edf1f7;color:#222b45}.nb-theme-default .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled{color:#222b45}.nb-theme-default .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-left:22px}[dir=rtl] .nb-theme-default .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-right:22px;padding-left:0}.nb-theme-default .ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{font-size:80%;font-weight:400;padding-right:5px}[dir=rtl] .nb-theme-default .ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{padding-left:5px;padding-right:0}[dir=rtl] .nb-theme-default .ng-dropdown-panel{direction:rtl;text-align:right}.nb-theme-dark .ng-select.ng-select-opened>.ng-select-container{background:#151a30;border-color:#010102 #101426 #181d38}.nb-theme-dark .ng-select.ng-select-opened>.ng-select-container:hover{box-shadow:none}.nb-theme-dark .ng-select.ng-select-opened>.ng-select-container .ng-arrow{top:-2px;border-color:transparent transparent black;border-width:0 5px 5px}.nb-theme-dark .ng-select.ng-select-opened>.ng-select-container .ng-arrow:hover{border-color:transparent transparent black}.nb-theme-dark .ng-select.ng-select-opened.ng-select-top>.ng-select-container{border-top-right-radius:0;border-top-left-radius:0}.nb-theme-dark .ng-select.ng-select-opened.ng-select-right>.ng-select-container{border-top-right-radius:0;border-bottom-right-radius:0}.nb-theme-dark .ng-select.ng-select-opened.ng-select-bottom>.ng-select-container{border-bottom-right-radius:0;border-bottom-left-radius:0}.nb-theme-dark .ng-select.ng-select-opened.ng-select-left>.ng-select-container{border-top-left-radius:0;border-bottom-left-radius:0}.nb-theme-dark .ng-select.ng-select-focused:not(.ng-select-opened)>.ng-select-container{border-color:#151a30;box-shadow:inset 0 1px 1px #00000013,0 0 0 3px #007eff1a}.nb-theme-dark .ng-select.ng-select-disabled>.ng-select-container{background-color:#8f9bb37a}.nb-theme-dark .ng-select .ng-has-value .ng-placeholder{display:none}.nb-theme-dark .ng-select .ng-select-container{color:#fff;background-color:#151a30;border-radius:.25rem;border:1px solid #101426;min-height:40px;align-items:center;font-weight:600;line-height:1.5rem;font-family:Open Sans,sans-serif}.nb-theme-dark .ng-select .ng-select-container:hover{box-shadow:0 1px #0000000f}.nb-theme-dark .ng-select .ng-select-container .ng-value-container{align-items:center;padding-left:10px}[dir=rtl] .nb-theme-dark .ng-select .ng-select-container .ng-value-container{padding-right:10px;padding-left:0}.nb-theme-dark .ng-select .ng-select-container .ng-value-container .ng-placeholder{font-size:.9375rem;font-weight:400;color:#8f9bb3;padding-left:.3rem}.nb-theme-dark .ng-select.ng-select-single .ng-select-container{height:40px}.nb-theme-dark .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{top:5px;left:0;padding-left:10px;padding-right:50px}.nb-theme-dark .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input>input{color:#fff}[dir=rtl] .nb-theme-dark .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{padding-right:10px;padding-left:50px}.nb-theme-dark .ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value{background-color:#8f9bb37a;border:1px solid #1f274a}.nb-theme-dark .ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-label{padding:0 5px}.nb-theme-dark .ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-top:5px;padding-left:7px}[dir=rtl] .nb-theme-dark .ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-right:7px;padding-left:0}.nb-theme-dark .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{font-size:.9em;margin-bottom:5px;color:#fff;background-color:#151a30;border-radius:2px;margin-right:5px}[dir=rtl] .nb-theme-dark .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{margin-right:0;margin-left:5px}.nb-theme-dark .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled{background-color:#8f9bb37a}.nb-theme-dark .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:5px}[dir=rtl] .nb-theme-dark .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:0;padding-right:5px}.nb-theme-dark .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-label{display:inline-block;padding:1px 5px}.nb-theme-dark .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:inline-block;padding:1px 5px}.nb-theme-dark .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon:hover{background-color:#0d101e}.nb-theme-dark .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-right:1px solid #05070d}[dir=rtl] .nb-theme-dark .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-left:1px solid #05070d;border-right:none}.nb-theme-dark .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:1px solid #05070d}[dir=rtl] .nb-theme-dark .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:0;border-right:1px solid #05070d}.nb-theme-dark .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding:0 0 3px 3px}[dir=rtl] .nb-theme-dark .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding:0 3px 3px 0}.nb-theme-dark .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input>input{color:#fff}.nb-theme-dark .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{top:5px;padding-bottom:5px;padding-left:3px}[dir=rtl] .nb-theme-dark .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{padding-right:3px;padding-left:0}.nb-theme-dark .ng-select .ng-clear-wrapper{color:#000}.nb-theme-dark .ng-select .ng-clear-wrapper:hover .ng-clear{color:#d0021b}.nb-theme-dark .ng-select .ng-spinner-zone{padding:5px 5px 0 0}[dir=rtl] .nb-theme-dark .ng-select .ng-spinner-zone{padding:5px 0 0 5px}.nb-theme-dark .ng-select .ng-arrow-wrapper{width:25px;padding-right:5px}[dir=rtl] .nb-theme-dark .ng-select .ng-arrow-wrapper{padding-left:5px;padding-right:0}.nb-theme-dark .ng-select .ng-arrow-wrapper:hover .ng-arrow{border-top-color:#000}.nb-theme-dark .ng-select .ng-arrow-wrapper .ng-arrow{border-color:black transparent transparent;border-style:solid;border-width:5px 5px 2.5px}.nb-theme-dark .ng-dropdown-panel{background-color:#222b45;border:1px solid #101426;box-shadow:0 1px #0000000f;left:0}.nb-theme-dark .ng-dropdown-panel.ng-select-top{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#1f274a;margin-bottom:-1px}.nb-theme-dark .ng-dropdown-panel.ng-select-top .ng-dropdown-panel-items .ng-option:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.nb-theme-dark .ng-dropdown-panel.ng-select-right{left:100%;top:0;border-top-right-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-bottom-color:#1f274a;margin-bottom:-1px}.nb-theme-dark .ng-dropdown-panel.ng-select-right .ng-dropdown-panel-items .ng-option:first-child{border-top-right-radius:4px}.nb-theme-dark .ng-dropdown-panel.ng-select-bottom{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#1f274a;margin-top:-1px}.nb-theme-dark .ng-dropdown-panel.ng-select-bottom .ng-dropdown-panel-items .ng-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.nb-theme-dark .ng-dropdown-panel.ng-select-left{left:-100%;top:0;border-top-left-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-bottom-color:#1f274a;margin-bottom:-1px}.nb-theme-dark .ng-dropdown-panel.ng-select-left .ng-dropdown-panel-items .ng-option:first-child{border-top-left-radius:4px}.nb-theme-dark .ng-dropdown-panel .ng-dropdown-header{border-bottom:1px solid #101426;padding:5px 7px}.nb-theme-dark .ng-dropdown-panel .ng-dropdown-footer{border-top:1px solid #101426;padding:5px 7px}.nb-theme-dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{-webkit-user-select:none;user-select:none;padding:8px 10px;font-weight:500;color:#0000008a;cursor:pointer}.nb-theme-dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-disabled{cursor:default}.nb-theme-dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-marked{background-color:#151a30}.nb-theme-dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected,.nb-theme-dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected.ng-option-marked{background-color:#151a30;font-weight:600}.nb-theme-dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-option{background-color:#222b45;color:#fff;padding:8px 10px}.nb-theme-dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected,.nb-theme-dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked{color:#fff;background-color:#151a30}.nb-theme-dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected .ng-option-label,.nb-theme-dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked .ng-option-label{font-weight:600}.nb-theme-dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked{background-color:#151a30;color:#fff}.nb-theme-dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled{color:#fff}.nb-theme-dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-left:22px}[dir=rtl] .nb-theme-dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-right:22px;padding-left:0}.nb-theme-dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{font-size:80%;font-weight:400;padding-right:5px}[dir=rtl] .nb-theme-dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{padding-left:5px;padding-right:0}[dir=rtl] .nb-theme-dark .ng-dropdown-panel{direction:rtl;text-align:right}.nb-theme-cosmic .ng-select.ng-select-opened>.ng-select-container{background:#1b1b38;border-color:#030308 #13132b #1b1b3d}.nb-theme-cosmic .ng-select.ng-select-opened>.ng-select-container:hover{box-shadow:none}.nb-theme-cosmic .ng-select.ng-select-opened>.ng-select-container .ng-arrow{top:-2px;border-color:transparent transparent black;border-width:0 5px 5px}.nb-theme-cosmic .ng-select.ng-select-opened>.ng-select-container .ng-arrow:hover{border-color:transparent transparent black}.nb-theme-cosmic .ng-select.ng-select-opened.ng-select-top>.ng-select-container{border-top-right-radius:0;border-top-left-radius:0}.nb-theme-cosmic .ng-select.ng-select-opened.ng-select-right>.ng-select-container{border-top-right-radius:0;border-bottom-right-radius:0}.nb-theme-cosmic .ng-select.ng-select-opened.ng-select-bottom>.ng-select-container{border-bottom-right-radius:0;border-bottom-left-radius:0}.nb-theme-cosmic .ng-select.ng-select-opened.ng-select-left>.ng-select-container{border-top-left-radius:0;border-bottom-left-radius:0}.nb-theme-cosmic .ng-select.ng-select-focused:not(.ng-select-opened)>.ng-select-container{border-color:#1b1b38;box-shadow:inset 0 1px 1px #00000013,0 0 0 3px #007eff1a}.nb-theme-cosmic .ng-select.ng-select-disabled>.ng-select-container{background-color:#b4b4db7a}.nb-theme-cosmic .ng-select .ng-has-value .ng-placeholder{display:none}.nb-theme-cosmic .ng-select .ng-select-container{color:#fff;background-color:#1b1b38;border-radius:.25rem;border:1px solid #13132b;min-height:40px;align-items:center;font-weight:600;line-height:1.5rem;font-family:Open Sans,sans-serif}.nb-theme-cosmic .ng-select .ng-select-container:hover{box-shadow:0 1px #0000000f}.nb-theme-cosmic .ng-select .ng-select-container .ng-value-container{align-items:center;padding-left:10px}[dir=rtl] .nb-theme-cosmic .ng-select .ng-select-container .ng-value-container{padding-right:10px;padding-left:0}.nb-theme-cosmic .ng-select .ng-select-container .ng-value-container .ng-placeholder{font-size:.9375rem;font-weight:400;color:#b4b4db;padding-left:.3rem}.nb-theme-cosmic .ng-select.ng-select-single .ng-select-container{height:40px}.nb-theme-cosmic .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{top:5px;left:0;padding-left:10px;padding-right:50px}.nb-theme-cosmic .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input>input{color:#fff}[dir=rtl] .nb-theme-cosmic .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{padding-right:10px;padding-left:50px}.nb-theme-cosmic .ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value{background-color:#b4b4db7a;border:1px solid #23234e}.nb-theme-cosmic .ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-label{padding:0 5px}.nb-theme-cosmic .ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-top:5px;padding-left:7px}[dir=rtl] .nb-theme-cosmic .ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-right:7px;padding-left:0}.nb-theme-cosmic .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{font-size:.9em;margin-bottom:5px;color:#fff;background-color:#1b1b38;border-radius:2px;margin-right:5px}[dir=rtl] .nb-theme-cosmic .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{margin-right:0;margin-left:5px}.nb-theme-cosmic .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled{background-color:#b4b4db7a}.nb-theme-cosmic .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:5px}[dir=rtl] .nb-theme-cosmic .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:0;padding-right:5px}.nb-theme-cosmic .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-label{display:inline-block;padding:1px 5px}.nb-theme-cosmic .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:inline-block;padding:1px 5px}.nb-theme-cosmic .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon:hover{background-color:#131327}.nb-theme-cosmic .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-right:1px solid #0a0a16}[dir=rtl] .nb-theme-cosmic .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-left:1px solid #0a0a16;border-right:none}.nb-theme-cosmic .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:1px solid #0a0a16}[dir=rtl] .nb-theme-cosmic .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:0;border-right:1px solid #0a0a16}.nb-theme-cosmic .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding:0 0 3px 3px}[dir=rtl] .nb-theme-cosmic .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding:0 3px 3px 0}.nb-theme-cosmic .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input>input{color:#fff}.nb-theme-cosmic .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{top:5px;padding-bottom:5px;padding-left:3px}[dir=rtl] .nb-theme-cosmic .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{padding-right:3px;padding-left:0}.nb-theme-cosmic .ng-select .ng-clear-wrapper{color:#000}.nb-theme-cosmic .ng-select .ng-clear-wrapper:hover .ng-clear{color:#d0021b}.nb-theme-cosmic .ng-select .ng-spinner-zone{padding:5px 5px 0 0}[dir=rtl] .nb-theme-cosmic .ng-select .ng-spinner-zone{padding:5px 0 0 5px}.nb-theme-cosmic .ng-select .ng-arrow-wrapper{width:25px;padding-right:5px}[dir=rtl] .nb-theme-cosmic .ng-select .ng-arrow-wrapper{padding-left:5px;padding-right:0}.nb-theme-cosmic .ng-select .ng-arrow-wrapper:hover .ng-arrow{border-top-color:#000}.nb-theme-cosmic .ng-select .ng-arrow-wrapper .ng-arrow{border-color:black transparent transparent;border-style:solid;border-width:5px 5px 2.5px}.nb-theme-cosmic .ng-dropdown-panel{background-color:#323259;border:1px solid #13132b;box-shadow:0 1px #0000000f;left:0}.nb-theme-cosmic .ng-dropdown-panel.ng-select-top{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#23234e;margin-bottom:-1px}.nb-theme-cosmic .ng-dropdown-panel.ng-select-top .ng-dropdown-panel-items .ng-option:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.nb-theme-cosmic .ng-dropdown-panel.ng-select-right{left:100%;top:0;border-top-right-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-bottom-color:#23234e;margin-bottom:-1px}.nb-theme-cosmic .ng-dropdown-panel.ng-select-right .ng-dropdown-panel-items .ng-option:first-child{border-top-right-radius:4px}.nb-theme-cosmic .ng-dropdown-panel.ng-select-bottom{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#23234e;margin-top:-1px}.nb-theme-cosmic .ng-dropdown-panel.ng-select-bottom .ng-dropdown-panel-items .ng-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.nb-theme-cosmic .ng-dropdown-panel.ng-select-left{left:-100%;top:0;border-top-left-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-bottom-color:#23234e;margin-bottom:-1px}.nb-theme-cosmic .ng-dropdown-panel.ng-select-left .ng-dropdown-panel-items .ng-option:first-child{border-top-left-radius:4px}.nb-theme-cosmic .ng-dropdown-panel .ng-dropdown-header{border-bottom:1px solid #13132b;padding:5px 7px}.nb-theme-cosmic .ng-dropdown-panel .ng-dropdown-footer{border-top:1px solid #13132b;padding:5px 7px}.nb-theme-cosmic .ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{-webkit-user-select:none;user-select:none;padding:8px 10px;font-weight:500;color:#0000008a;cursor:pointer}.nb-theme-cosmic .ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-disabled{cursor:default}.nb-theme-cosmic .ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-marked{background-color:#1b1b38}.nb-theme-cosmic .ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected,.nb-theme-cosmic .ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected.ng-option-marked{background-color:#1b1b38;font-weight:600}.nb-theme-cosmic .ng-dropdown-panel .ng-dropdown-panel-items .ng-option{background-color:#323259;color:#fff;padding:8px 10px}.nb-theme-cosmic .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected,.nb-theme-cosmic .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked{color:#fff;background-color:#1b1b38}.nb-theme-cosmic .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected .ng-option-label,.nb-theme-cosmic .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked .ng-option-label{font-weight:600}.nb-theme-cosmic .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked{background-color:#1b1b38;color:#fff}.nb-theme-cosmic .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled{color:#fff}.nb-theme-cosmic .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-left:22px}[dir=rtl] .nb-theme-cosmic .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-right:22px;padding-left:0}.nb-theme-cosmic .ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{font-size:80%;font-weight:400;padding-right:5px}[dir=rtl] .nb-theme-cosmic .ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{padding-left:5px;padding-right:0}[dir=rtl] .nb-theme-cosmic .ng-dropdown-panel{direction:rtl;text-align:right}.nb-theme-corporate .ng-select.ng-select-opened>.ng-select-container{background:#edf1f7;border-color:#c2cde1 #e4e9f2 #f5f7fa}.nb-theme-corporate .ng-select.ng-select-opened>.ng-select-container:hover{box-shadow:none}.nb-theme-corporate .ng-select.ng-select-opened>.ng-select-container .ng-arrow{top:-2px;border-color:transparent transparent #9fb1d1;border-width:0 5px 5px}.nb-theme-corporate .ng-select.ng-select-opened>.ng-select-container .ng-arrow:hover{border-color:transparent transparent #354a6f}.nb-theme-corporate .ng-select.ng-select-opened.ng-select-top>.ng-select-container{border-top-right-radius:0;border-top-left-radius:0}.nb-theme-corporate .ng-select.ng-select-opened.ng-select-right>.ng-select-container{border-top-right-radius:0;border-bottom-right-radius:0}.nb-theme-corporate .ng-select.ng-select-opened.ng-select-bottom>.ng-select-container{border-bottom-right-radius:0;border-bottom-left-radius:0}.nb-theme-corporate .ng-select.ng-select-opened.ng-select-left>.ng-select-container{border-top-left-radius:0;border-bottom-left-radius:0}.nb-theme-corporate .ng-select.ng-select-focused:not(.ng-select-opened)>.ng-select-container{border-color:#edf1f7;box-shadow:inset 0 1px 1px #00000013,0 0 0 3px #007eff1a}.nb-theme-corporate .ng-select.ng-select-disabled>.ng-select-container{background-color:#8f9bb37a}.nb-theme-corporate .ng-select .ng-has-value .ng-placeholder{display:none}.nb-theme-corporate .ng-select .ng-select-container{color:#222b45;background-color:#edf1f7;border-radius:.25rem;border:1px solid #e4e9f2;min-height:40px;align-items:center;font-weight:600;line-height:1.5rem;font-family:Open Sans,sans-serif}.nb-theme-corporate .ng-select .ng-select-container:hover{box-shadow:0 1px #0000000f}.nb-theme-corporate .ng-select .ng-select-container .ng-value-container{align-items:center;padding-left:10px}[dir=rtl] .nb-theme-corporate .ng-select .ng-select-container .ng-value-container{padding-right:10px;padding-left:0}.nb-theme-corporate .ng-select .ng-select-container .ng-value-container .ng-placeholder{font-size:.9375rem;font-weight:400;color:#8f9bb3;padding-left:.3rem}.nb-theme-corporate .ng-select.ng-select-single .ng-select-container{height:40px}.nb-theme-corporate .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{top:5px;left:0;padding-left:10px;padding-right:50px}.nb-theme-corporate .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input>input{color:#222b45}[dir=rtl] .nb-theme-corporate .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{padding-right:10px;padding-left:50px}.nb-theme-corporate .ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value{background-color:#8f9bb37a;border:1px solid white}.nb-theme-corporate .ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-label{padding:0 5px}.nb-theme-corporate .ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-top:5px;padding-left:7px}[dir=rtl] .nb-theme-corporate .ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-right:7px;padding-left:0}.nb-theme-corporate .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{font-size:.9em;margin-bottom:5px;color:#222b45;background-color:#edf1f7;border-radius:2px;margin-right:5px}[dir=rtl] .nb-theme-corporate .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{margin-right:0;margin-left:5px}.nb-theme-corporate .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled{background-color:#8f9bb37a}.nb-theme-corporate .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:5px}[dir=rtl] .nb-theme-corporate .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:0;padding-right:5px}.nb-theme-corporate .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-label{display:inline-block;padding:1px 5px}.nb-theme-corporate .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:inline-block;padding:1px 5px}.nb-theme-corporate .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon:hover{background-color:#dbe3ef}.nb-theme-corporate .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-right:1px solid #cad6e7}[dir=rtl] .nb-theme-corporate .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-left:1px solid #cad6e7;border-right:none}.nb-theme-corporate .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:1px solid #cad6e7}[dir=rtl] .nb-theme-corporate .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:0;border-right:1px solid #cad6e7}.nb-theme-corporate .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding:0 0 3px 3px}[dir=rtl] .nb-theme-corporate .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding:0 3px 3px 0}.nb-theme-corporate .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input>input{color:#222b45}.nb-theme-corporate .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{top:5px;padding-bottom:5px;padding-left:3px}[dir=rtl] .nb-theme-corporate .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{padding-right:3px;padding-left:0}.nb-theme-corporate .ng-select .ng-clear-wrapper{color:#9fb1d1}.nb-theme-corporate .ng-select .ng-clear-wrapper:hover .ng-clear{color:#d0021b}.nb-theme-corporate .ng-select .ng-spinner-zone{padding:5px 5px 0 0}[dir=rtl] .nb-theme-corporate .ng-select .ng-spinner-zone{padding:5px 0 0 5px}.nb-theme-corporate .ng-select .ng-arrow-wrapper{width:25px;padding-right:5px}[dir=rtl] .nb-theme-corporate .ng-select .ng-arrow-wrapper{padding-left:5px;padding-right:0}.nb-theme-corporate .ng-select .ng-arrow-wrapper:hover .ng-arrow{border-top-color:#5a79b0}.nb-theme-corporate .ng-select .ng-arrow-wrapper .ng-arrow{border-color:#9fb1d1 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}.nb-theme-corporate .ng-dropdown-panel{background-color:#fff;border:1px solid #e4e9f2;box-shadow:0 1px #0000000f;left:0}.nb-theme-corporate .ng-dropdown-panel.ng-select-top{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#fff;margin-bottom:-1px}.nb-theme-corporate .ng-dropdown-panel.ng-select-top .ng-dropdown-panel-items .ng-option:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.nb-theme-corporate .ng-dropdown-panel.ng-select-right{left:100%;top:0;border-top-right-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-bottom-color:#fff;margin-bottom:-1px}.nb-theme-corporate .ng-dropdown-panel.ng-select-right .ng-dropdown-panel-items .ng-option:first-child{border-top-right-radius:4px}.nb-theme-corporate .ng-dropdown-panel.ng-select-bottom{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#fff;margin-top:-1px}.nb-theme-corporate .ng-dropdown-panel.ng-select-bottom .ng-dropdown-panel-items .ng-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.nb-theme-corporate .ng-dropdown-panel.ng-select-left{left:-100%;top:0;border-top-left-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-bottom-color:#fff;margin-bottom:-1px}.nb-theme-corporate .ng-dropdown-panel.ng-select-left .ng-dropdown-panel-items .ng-option:first-child{border-top-left-radius:4px}.nb-theme-corporate .ng-dropdown-panel .ng-dropdown-header{border-bottom:1px solid #e4e9f2;padding:5px 7px}.nb-theme-corporate .ng-dropdown-panel .ng-dropdown-footer{border-top:1px solid #e4e9f2;padding:5px 7px}.nb-theme-corporate .ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{-webkit-user-select:none;user-select:none;padding:8px 10px;font-weight:500;color:#0000008a;cursor:pointer}.nb-theme-corporate .ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-disabled{cursor:default}.nb-theme-corporate .ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-marked{background-color:#edf1f7}.nb-theme-corporate .ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected,.nb-theme-corporate .ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected.ng-option-marked{background-color:#edf1f7;font-weight:600}.nb-theme-corporate .ng-dropdown-panel .ng-dropdown-panel-items .ng-option{background-color:#fff;color:#222b45;padding:8px 10px}.nb-theme-corporate .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected,.nb-theme-corporate .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked{color:#222b45;background-color:#edf1f7}.nb-theme-corporate .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected .ng-option-label,.nb-theme-corporate .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked .ng-option-label{font-weight:600}.nb-theme-corporate .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked{background-color:#edf1f7;color:#222b45}.nb-theme-corporate .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled{color:#222b45}.nb-theme-corporate .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-left:22px}[dir=rtl] .nb-theme-corporate .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-right:22px;padding-left:0}.nb-theme-corporate .ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{font-size:80%;font-weight:400;padding-right:5px}[dir=rtl] .nb-theme-corporate .ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{padding-left:5px;padding-right:0}[dir=rtl] .nb-theme-corporate .ng-dropdown-panel{direction:rtl;text-align:right}ng-select.ng-invalid.ng-touched .ng-select-container{border-color:#f86c6b}ng-select.ng-invalid.ng-touched:focus{border-color:#f86c6b;box-shadow:inset 0 1px 1px #00000013,0 0 0 3px #fde6e8}ng-select.ng-valid.ng-touched.required .ng-select-container{border-color:#4dbd74}ng-select.ng-valid.ng-touched.required:focus{border-color:#4dbd74;box-shadow:inset 0 1px 1px #00000013,0 0 0 3px #e4e9f2}\n"], components: [{ type: DoContainerOutletComponent, selector: "do-container-outlet", inputs: ["name", "label", "colLabel", "colContent", "nolabel", "dividerlabel", "required", "hasErrors", "errorMessages", "warnMessage", "paramError", "skeleton", "show"] }, { type: i3__namespace.NgSelectComponent, selector: "ng-select", inputs: ["markFirst", "dropdownPosition", "loading", "closeOnSelect", "hideSelected", "selectOnTab", "bufferAmount", "selectableGroup", "selectableGroupAsModel", "searchFn", "trackByFn", "clearOnBackspace", "labelForId", "inputAttrs", "readonly", "searchWhileComposing", "minTermLength", "editableSearchTerm", "keyDownFn", "multiple", "addTag", "searchable", "clearable", "isOpen", "items", "compareWith", "clearSearchOnAdd", "bindLabel", "placeholder", "notFoundText", "typeToSearchText", "addTagText", "loadingText", "clearAllText", "virtualScroll", "openOnEnter", "appendTo", "bindValue", "appearance", "maxSelectedItems", "groupBy", "groupValue", "tabIndex", "typeahead"], outputs: ["blur", "focus", "change", "open", "close", "search", "clear", "add", "remove", "scroll", "scrollToEnd"] }], directives: [{ type: i4__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i1__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1__namespace.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i4__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i3__namespace.ɵh, selector: "[ng-label-tmp]" }, { type: i4__namespace.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i3__namespace.ɵf, selector: "[ng-option-tmp]" }], pipes: { "translate": i5__namespace.TranslatePipe }, encapsulation: i0__namespace.ViewEncapsulation.None });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoSelectComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-select',
                        styleUrls: ['./do-select.component.scss'],
                        templateUrl: './do-select.component.html',
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace.NgControl, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Self
                        }] }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i0.LOCALE_ID]
                        }] }, { type: i0__namespace.Injector }];
        }, propDecorators: { placeholder: [{
                    type: i0.Input
                }], colLabel: [{
                    type: i0.Input
                }], colInput: [{
                    type: i0.Input
                }], items: [{
                    type: i0.Input
                }], multiple: [{
                    type: i0.Input
                }], loading: [{
                    type: i0.Input
                }], addTag: [{
                    type: i0.Input
                }], closeOnSelect: [{
                    type: i0.Input
                }], clearable: [{
                    type: i0.Input
                }], searchable: [{
                    type: i0.Input
                }], hideSelected: [{
                    type: i0.Input
                }], minTermLength: [{
                    type: i0.Input
                }], maxTermLength: [{
                    type: i0.Input
                }], api: [{
                    type: i0.Input
                }], limit: [{
                    type: i0.Input
                }], offsetNextLoad: [{
                    type: i0.Input
                }], queryParam: [{
                    type: i0.Input
                }], onSelect: [{
                    type: i0.Output
                }], onClear: [{
                    type: i0.Output
                }], contentTemplate: [{
                    type: i0.ContentChild,
                    args: [ContentSelectDirective, { static: false, read: i0.TemplateRef }]
                }] } });

    var SELECT_COMPONENTS = [
        DoSelectComponent,
    ];
    var SELECT_DIRECTIVES = [
        ContentSelectDirective,
    ];
    var DoSelectModule = /** @class */ (function () {
        function DoSelectModule() {
        }
        return DoSelectModule;
    }());
    DoSelectModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoSelectModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DoSelectModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoSelectModule, declarations: [DoSelectComponent, ContentSelectDirective], imports: [i4.CommonModule,
            i1.FormsModule,
            i1.ReactiveFormsModule,
            i3.NgSelectModule,
            i5.TranslateModule,
            DoBaseModule], exports: [DoSelectComponent, ContentSelectDirective] });
    DoSelectModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoSelectModule, imports: [[
                i4.CommonModule,
                i1.FormsModule,
                i1.ReactiveFormsModule,
                i3.NgSelectModule,
                i5.TranslateModule,
                DoBaseModule,
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoSelectModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i4.CommonModule,
                            i1.FormsModule,
                            i1.ReactiveFormsModule,
                            i3.NgSelectModule,
                            i5.TranslateModule,
                            DoBaseModule,
                        ],
                        declarations: __spreadArray(__spreadArray([], __read(SELECT_COMPONENTS)), __read(SELECT_DIRECTIVES)),
                        exports: __spreadArray(__spreadArray([], __read(SELECT_COMPONENTS)), __read(SELECT_DIRECTIVES)),
                    }]
            }] });

    var DoTextEditorComponent = /** @class */ (function (_super) {
        __extends(DoTextEditorComponent, _super);
        function DoTextEditorComponent(ngControl, locale) {
            var _this = _super.call(this, ngControl, locale) || this;
            _this.locale = locale;
            _this.colLabel = 3;
            _this.colInput = 9;
            _this.minLength = 1;
            _this.maxLength = 250;
            _this.height = 150;
            return _this;
        }
        return DoTextEditorComponent;
    }(ValueAccessorDirective));
    DoTextEditorComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoTextEditorComponent, deps: [{ token: i1__namespace.NgControl, optional: true, self: true }, { token: i0.LOCALE_ID }], target: i0__namespace.ɵɵFactoryTarget.Component });
    DoTextEditorComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoTextEditorComponent, selector: "do-text-editor", inputs: { placeholder: "placeholder", colLabel: "colLabel", colInput: "colInput", minLength: "minLength", maxLength: "maxLength", height: "height" }, usesInheritance: true, ngImport: i0__namespace, template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\" \n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [warnMessage]=\"warnMessage\"\n  [skeleton]=\"skeleton\" [show]=\"show\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <quill-editor\n      [minLength]=\"minLength\"\n      [maxLength]=\"maxLength\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled\"\n      [readOnly]=\"disabled\"\n      [ngClass]=\"{\n        'hasErrors': hasErrors\n      }\"\n      [styles]=\"{height: height+'px'}\"\n      (onContentChanged)=\"onChange(value)\"\n      (onBlur)=\"onTouched(value)\"\n      (onFocus)=\"onTouched(value)\"\n      [(ngModel)]=\"value\">\n    </quill-editor>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'texteditor-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>\n", styles: [".nb-theme-default quill-editor[disabled=disabled] .ql-toolbar .ql-stroke{stroke:#e4e9f2;cursor:no-drop!important}.nb-theme-default quill-editor[disabled=disabled] .ql-toolbar .ql-stroke-miter{stroke:#e4e9f2;cursor:no-drop!important}.nb-theme-default quill-editor[disabled=disabled] .ql-toolbar .ql-fill,.nb-theme-default quill-editor[disabled=disabled] .ql-toolbar .ql-stroke.ql-fill{fill:#e4e9f2;cursor:no-drop!important}.nb-theme-default quill-editor[disabled=disabled] .ql-toolbar .ql-picker{color:#e4e9f2;cursor:no-drop!important}.nb-theme-default .ql-container{box-sizing:border-box;font-family:Helvetica,Arial,sans-serif;font-size:13px;height:100%;margin:0;position:relative;background-color:#edf1f7}.nb-theme-default .ql-container.ql-disabled .ql-tooltip{visibility:hidden}.nb-theme-default .ql-container.ql-disabled .ql-editor ul[data-checked]>li:before{pointer-events:none}.nb-theme-default .ql-clipboard{left:-100000px;height:1px;overflow-y:hidden;position:absolute;top:50%}.nb-theme-default .ql-clipboard p{margin:0;padding:0}.nb-theme-default .ql-editor{box-sizing:border-box;line-height:1.42;height:100%;outline:none;overflow-y:auto;padding:12px 15px;tab-size:4;-moz-tab-size:4;text-align:left;white-space:pre-wrap;word-wrap:break-word}.nb-theme-default .ql-editor>*{cursor:text}.nb-theme-default .ql-editor p,.nb-theme-default .ql-editor ol,.nb-theme-default .ql-editor ul,.nb-theme-default .ql-editor pre,.nb-theme-default .ql-editor blockquote,.nb-theme-default .ql-editor h1,.nb-theme-default .ql-editor h2,.nb-theme-default .ql-editor h3,.nb-theme-default .ql-editor h4,.nb-theme-default .ql-editor h5,.nb-theme-default .ql-editor h6{margin:0;padding:0;counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.nb-theme-default .ql-editor ol,.nb-theme-default .ql-editor ul{padding-left:1.5em}.nb-theme-default .ql-editor ol>li,.nb-theme-default .ql-editor ul>li{list-style-type:none}.nb-theme-default .ql-editor ul>li:before{content:\"\\2022\"}.nb-theme-default .ql-editor ul[data-checked=true],.nb-theme-default .ql-editor ul[data-checked=false]{pointer-events:none}.nb-theme-default .ql-editor ul[data-checked=true]>li *,.nb-theme-default .ql-editor ul[data-checked=false]>li *{pointer-events:all}.nb-theme-default .ql-editor ul[data-checked=true]>li:before,.nb-theme-default .ql-editor ul[data-checked=false]>li:before{color:#777;cursor:pointer;pointer-events:all}.nb-theme-default .ql-editor ul[data-checked=true]>li:before{content:\"\\2611\"}.nb-theme-default .ql-editor ul[data-checked=false]>li:before{content:\"\\2610\"}.nb-theme-default .ql-editor li:before{display:inline-block;white-space:nowrap;width:1.2em}.nb-theme-default .ql-editor li:not(.ql-direction-rtl):before{margin-left:-1.5em;margin-right:.3em;text-align:right}.nb-theme-default .ql-editor li.ql-direction-rtl:before{margin-left:.3em;margin-right:-1.5em}.nb-theme-default .ql-editor ol li:not(.ql-direction-rtl),.nb-theme-default .ql-editor ul li:not(.ql-direction-rtl){padding-left:1.5em}.nb-theme-default .ql-editor ol li.ql-direction-rtl,.nb-theme-default .ql-editor ul li.ql-direction-rtl{padding-right:1.5em}.nb-theme-default .ql-editor ol li{counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;counter-increment:list-0}.nb-theme-default .ql-editor ol li:before{content:counter(list-0,decimal) \". \"}.nb-theme-default .ql-editor ol li.ql-indent-1{counter-increment:list-1}.nb-theme-default .ql-editor ol li.ql-indent-1:before{content:counter(list-1,lower-alpha) \". \"}.nb-theme-default .ql-editor ol li.ql-indent-1{counter-reset:list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.nb-theme-default .ql-editor ol li.ql-indent-2{counter-increment:list-2}.nb-theme-default .ql-editor ol li.ql-indent-2:before{content:counter(list-2,lower-roman) \". \"}.nb-theme-default .ql-editor ol li.ql-indent-2{counter-reset:list-3 list-4 list-5 list-6 list-7 list-8 list-9}.nb-theme-default .ql-editor ol li.ql-indent-3{counter-increment:list-3}.nb-theme-default .ql-editor ol li.ql-indent-3:before{content:counter(list-3,decimal) \". \"}.nb-theme-default .ql-editor ol li.ql-indent-3{counter-reset:list-4 list-5 list-6 list-7 list-8 list-9}.nb-theme-default .ql-editor ol li.ql-indent-4{counter-increment:list-4}.nb-theme-default .ql-editor ol li.ql-indent-4:before{content:counter(list-4,lower-alpha) \". \"}.nb-theme-default .ql-editor ol li.ql-indent-4{counter-reset:list-5 list-6 list-7 list-8 list-9}.nb-theme-default .ql-editor ol li.ql-indent-5{counter-increment:list-5}.nb-theme-default .ql-editor ol li.ql-indent-5:before{content:counter(list-5,lower-roman) \". \"}.nb-theme-default .ql-editor ol li.ql-indent-5{counter-reset:list-6 list-7 list-8 list-9}.nb-theme-default .ql-editor ol li.ql-indent-6{counter-increment:list-6}.nb-theme-default .ql-editor ol li.ql-indent-6:before{content:counter(list-6,decimal) \". \"}.nb-theme-default .ql-editor ol li.ql-indent-6{counter-reset:list-7 list-8 list-9}.nb-theme-default .ql-editor ol li.ql-indent-7{counter-increment:list-7}.nb-theme-default .ql-editor ol li.ql-indent-7:before{content:counter(list-7,lower-alpha) \". \"}.nb-theme-default .ql-editor ol li.ql-indent-7{counter-reset:list-8 list-9}.nb-theme-default .ql-editor ol li.ql-indent-8{counter-increment:list-8}.nb-theme-default .ql-editor ol li.ql-indent-8:before{content:counter(list-8,lower-roman) \". \"}.nb-theme-default .ql-editor ol li.ql-indent-8{counter-reset:list-9}.nb-theme-default .ql-editor ol li.ql-indent-9{counter-increment:list-9}.nb-theme-default .ql-editor ol li.ql-indent-9:before{content:counter(list-9,decimal) \". \"}.nb-theme-default .ql-editor .ql-indent-1:not(.ql-direction-rtl){padding-left:3em}.nb-theme-default .ql-editor li.ql-indent-1:not(.ql-direction-rtl){padding-left:4.5em}.nb-theme-default .ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:3em}.nb-theme-default .ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:4.5em}.nb-theme-default .ql-editor .ql-indent-2:not(.ql-direction-rtl){padding-left:6em}.nb-theme-default .ql-editor li.ql-indent-2:not(.ql-direction-rtl){padding-left:7.5em}.nb-theme-default .ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:6em}.nb-theme-default .ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:7.5em}.nb-theme-default .ql-editor .ql-indent-3:not(.ql-direction-rtl){padding-left:9em}.nb-theme-default .ql-editor li.ql-indent-3:not(.ql-direction-rtl){padding-left:10.5em}.nb-theme-default .ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:9em}.nb-theme-default .ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:10.5em}.nb-theme-default .ql-editor .ql-indent-4:not(.ql-direction-rtl){padding-left:12em}.nb-theme-default .ql-editor li.ql-indent-4:not(.ql-direction-rtl){padding-left:13.5em}.nb-theme-default .ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:12em}.nb-theme-default .ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:13.5em}.nb-theme-default .ql-editor .ql-indent-5:not(.ql-direction-rtl){padding-left:15em}.nb-theme-default .ql-editor li.ql-indent-5:not(.ql-direction-rtl){padding-left:16.5em}.nb-theme-default .ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:15em}.nb-theme-default .ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:16.5em}.nb-theme-default .ql-editor .ql-indent-6:not(.ql-direction-rtl){padding-left:18em}.nb-theme-default .ql-editor li.ql-indent-6:not(.ql-direction-rtl){padding-left:19.5em}.nb-theme-default .ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:18em}.nb-theme-default .ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:19.5em}.nb-theme-default .ql-editor .ql-indent-7:not(.ql-direction-rtl){padding-left:21em}.nb-theme-default .ql-editor li.ql-indent-7:not(.ql-direction-rtl){padding-left:22.5em}.nb-theme-default .ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:21em}.nb-theme-default .ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:22.5em}.nb-theme-default .ql-editor .ql-indent-8:not(.ql-direction-rtl){padding-left:24em}.nb-theme-default .ql-editor li.ql-indent-8:not(.ql-direction-rtl){padding-left:25.5em}.nb-theme-default .ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:24em}.nb-theme-default .ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:25.5em}.nb-theme-default .ql-editor .ql-indent-9:not(.ql-direction-rtl){padding-left:27em}.nb-theme-default .ql-editor li.ql-indent-9:not(.ql-direction-rtl){padding-left:28.5em}.nb-theme-default .ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:27em}.nb-theme-default .ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:28.5em}.nb-theme-default .ql-editor .ql-video{display:block;max-width:100%}.nb-theme-default .ql-editor .ql-video.ql-align-center{margin:0 auto}.nb-theme-default .ql-editor .ql-video.ql-align-right{margin:0 0 0 auto}.nb-theme-default .ql-editor .ql-bg-black{background-color:#000}.nb-theme-default .ql-editor .ql-bg-red{background-color:#e60000}.nb-theme-default .ql-editor .ql-bg-orange{background-color:#f90}.nb-theme-default .ql-editor .ql-bg-yellow{background-color:#ff0}.nb-theme-default .ql-editor .ql-bg-green{background-color:#008a00}.nb-theme-default .ql-editor .ql-bg-blue{background-color:#06c}.nb-theme-default .ql-editor .ql-bg-purple{background-color:#93f}.nb-theme-default .ql-editor .ql-color-white{color:#fff}.nb-theme-default .ql-editor .ql-color-red{color:#e60000}.nb-theme-default .ql-editor .ql-color-orange{color:#f90}.nb-theme-default .ql-editor .ql-color-yellow{color:#ff0}.nb-theme-default .ql-editor .ql-color-green{color:#008a00}.nb-theme-default .ql-editor .ql-color-blue{color:#06c}.nb-theme-default .ql-editor .ql-color-purple{color:#93f}.nb-theme-default .ql-editor .ql-font-serif{font-family:Georgia,Times New Roman,serif}.nb-theme-default .ql-editor .ql-font-monospace{font-family:Monaco,Courier New,monospace}.nb-theme-default .ql-editor .ql-size-small{font-size:.75em}.nb-theme-default .ql-editor .ql-size-large{font-size:1.5em}.nb-theme-default .ql-editor .ql-size-huge{font-size:2.5em}.nb-theme-default .ql-editor .ql-direction-rtl{direction:rtl;text-align:inherit}.nb-theme-default .ql-editor .ql-align-center{text-align:center}.nb-theme-default .ql-editor .ql-align-justify{text-align:justify}.nb-theme-default .ql-editor .ql-align-right{text-align:right}.nb-theme-default .ql-editor.ql-blank:before{content:attr(data-placeholder);color:#8f9bb3;font-family:Open Sans,sans-serif;text-overflow:ellipsis;font-size:.9375rem;font-weight:400;line-height:1.25rem;font-style:normal;left:15px;pointer-events:none;position:absolute;right:15px}.nb-theme-default .ql-snow.ql-toolbar:after,.nb-theme-default .ql-snow .ql-toolbar:after{clear:both;content:\"\";display:table}.nb-theme-default .ql-snow.ql-toolbar button,.nb-theme-default .ql-snow .ql-toolbar button{background:none;border:none;cursor:pointer;display:inline-block;float:left;height:24px;padding:3px 5px;width:28px}.nb-theme-default .ql-snow.ql-toolbar button svg,.nb-theme-default .ql-snow .ql-toolbar button svg{float:left;height:100%}.nb-theme-default .ql-snow.ql-toolbar button:active:hover,.nb-theme-default .ql-snow .ql-toolbar button:active:hover{outline:none}.nb-theme-default .ql-snow.ql-toolbar input.ql-image[type=file],.nb-theme-default .ql-snow .ql-toolbar input.ql-image[type=file]{display:none}.nb-theme-default .ql-snow.ql-toolbar button:hover,.nb-theme-default .ql-snow .ql-toolbar button:hover,.nb-theme-default .ql-snow.ql-toolbar button:focus,.nb-theme-default .ql-snow .ql-toolbar button:focus,.nb-theme-default .ql-snow.ql-toolbar button.ql-active,.nb-theme-default .ql-snow .ql-toolbar button.ql-active,.nb-theme-default .ql-snow.ql-toolbar .ql-picker-label:hover,.nb-theme-default .ql-snow .ql-toolbar .ql-picker-label:hover,.nb-theme-default .ql-snow.ql-toolbar .ql-picker-label.ql-active,.nb-theme-default .ql-snow .ql-toolbar .ql-picker-label.ql-active,.nb-theme-default .ql-snow.ql-toolbar .ql-picker-item:hover,.nb-theme-default .ql-snow .ql-toolbar .ql-picker-item:hover,.nb-theme-default .ql-snow.ql-toolbar .ql-picker-item.ql-selected,.nb-theme-default .ql-snow .ql-toolbar .ql-picker-item.ql-selected{color:#06c;outline:1px solid #e4e9f2;background-color:#edf1f7}.nb-theme-default .ql-snow.ql-toolbar button:hover .ql-fill,.nb-theme-default .ql-snow .ql-toolbar button:hover .ql-fill,.nb-theme-default .ql-snow.ql-toolbar button:focus .ql-fill,.nb-theme-default .ql-snow .ql-toolbar button:focus .ql-fill,.nb-theme-default .ql-snow.ql-toolbar button.ql-active .ql-fill,.nb-theme-default .ql-snow .ql-toolbar button.ql-active .ql-fill,.nb-theme-default .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,.nb-theme-default .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,.nb-theme-default .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,.nb-theme-default .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,.nb-theme-default .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,.nb-theme-default .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,.nb-theme-default .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,.nb-theme-default .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,.nb-theme-default .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,.nb-theme-default .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,.nb-theme-default .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,.nb-theme-default .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,.nb-theme-default .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,.nb-theme-default .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,.nb-theme-default .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.nb-theme-default .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.nb-theme-default .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.nb-theme-default .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.nb-theme-default .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.nb-theme-default .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.nb-theme-default .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.nb-theme-default .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill{fill:#06c}.nb-theme-default .ql-snow.ql-toolbar button:hover .ql-stroke,.nb-theme-default .ql-snow .ql-toolbar button:hover .ql-stroke,.nb-theme-default .ql-snow.ql-toolbar button:focus .ql-stroke,.nb-theme-default .ql-snow .ql-toolbar button:focus .ql-stroke,.nb-theme-default .ql-snow.ql-toolbar button.ql-active .ql-stroke,.nb-theme-default .ql-snow .ql-toolbar button.ql-active .ql-stroke,.nb-theme-default .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,.nb-theme-default .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,.nb-theme-default .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,.nb-theme-default .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,.nb-theme-default .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,.nb-theme-default .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,.nb-theme-default .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.nb-theme-default .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.nb-theme-default .ql-snow.ql-toolbar button:hover .ql-stroke-miter,.nb-theme-default .ql-snow .ql-toolbar button:hover .ql-stroke-miter,.nb-theme-default .ql-snow.ql-toolbar button:focus .ql-stroke-miter,.nb-theme-default .ql-snow .ql-toolbar button:focus .ql-stroke-miter,.nb-theme-default .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,.nb-theme-default .ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,.nb-theme-default .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.nb-theme-default .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.nb-theme-default .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.nb-theme-default .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.nb-theme-default .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.nb-theme-default .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.nb-theme-default .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.nb-theme-default .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter{stroke:#06c}@media (pointer: coarse){.nb-theme-default .ql-snow.ql-toolbar button:hover:not(.ql-active),.nb-theme-default .ql-snow .ql-toolbar button:hover:not(.ql-active){color:#222b45}.nb-theme-default .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,.nb-theme-default .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,.nb-theme-default .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,.nb-theme-default .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill{fill:#222b45}.nb-theme-default .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,.nb-theme-default .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,.nb-theme-default .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,.nb-theme-default .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter{stroke:#222b45}}.nb-theme-default .ql-snow{box-sizing:border-box}.nb-theme-default .ql-snow *{box-sizing:border-box}.nb-theme-default .ql-snow .ql-hidden{display:none}.nb-theme-default .ql-snow .ql-out-bottom,.nb-theme-default .ql-snow .ql-out-top{visibility:hidden}.nb-theme-default .ql-snow .ql-tooltip{position:absolute;transform:translateY(10px)}.nb-theme-default .ql-snow .ql-tooltip a{cursor:pointer;text-decoration:none}.nb-theme-default .ql-snow .ql-tooltip.ql-flip{transform:translateY(-10px)}.nb-theme-default .ql-snow .ql-formats{display:inline-block;vertical-align:middle}.nb-theme-default .ql-snow .ql-formats:after{clear:both;content:\"\";display:table}.nb-theme-default .ql-snow .ql-stroke{fill:none;stroke:#222b45;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.nb-theme-default .ql-snow .ql-stroke-miter{fill:none;stroke:#222b45;stroke-miterlimit:10;stroke-width:2}.nb-theme-default .ql-snow .ql-fill,.nb-theme-default .ql-snow .ql-stroke.ql-fill{fill:#222b45}.nb-theme-default .ql-snow .ql-empty{fill:none}.nb-theme-default .ql-snow .ql-even{fill-rule:evenodd}.nb-theme-default .ql-snow .ql-thin,.nb-theme-default .ql-snow .ql-stroke.ql-thin{stroke-width:1}.nb-theme-default .ql-snow .ql-transparent{opacity:.4}.nb-theme-default .ql-snow .ql-direction svg:last-child{display:none}.nb-theme-default .ql-snow .ql-direction.ql-active svg:last-child{display:inline}.nb-theme-default .ql-snow .ql-direction.ql-active svg:first-child{display:none}.nb-theme-default .ql-snow .ql-editor h1{font-size:2em}.nb-theme-default .ql-snow .ql-editor h2{font-size:1.5em}.nb-theme-default .ql-snow .ql-editor h3{font-size:1.17em}.nb-theme-default .ql-snow .ql-editor h4{font-size:1em}.nb-theme-default .ql-snow .ql-editor h5{font-size:.83em}.nb-theme-default .ql-snow .ql-editor h6{font-size:.67em}.nb-theme-default .ql-snow .ql-editor a{text-decoration:underline}.nb-theme-default .ql-snow .ql-editor blockquote{border-left:4px solid #e4e9f2;margin-bottom:5px;margin-top:5px;padding-left:16px}.nb-theme-default .ql-snow .ql-editor code,.nb-theme-default .ql-snow .ql-editor pre{background-color:#f0f0f0;border-radius:3px}.nb-theme-default .ql-snow .ql-editor pre{white-space:pre-wrap;margin-bottom:5px;margin-top:5px;padding:5px 10px}.nb-theme-default .ql-snow .ql-editor code{font-size:85%;padding:2px 4px}.nb-theme-default .ql-snow .ql-editor pre.ql-syntax{background-color:#23241f;color:#f8f8f2;overflow:visible}.nb-theme-default .ql-snow .ql-editor img{max-width:100%}.nb-theme-default .ql-snow .ql-picker{color:#222b45;display:inline-block;float:left;font-size:14px;font-weight:500;height:24px;position:relative;vertical-align:middle}.nb-theme-default .ql-snow .ql-picker-label{cursor:pointer;display:inline-block;height:100%;padding-left:8px;padding-right:2px;position:relative;width:100%}.nb-theme-default .ql-snow .ql-picker-label:before{display:inline-block;line-height:22px}.nb-theme-default .ql-snow .ql-picker-options{background-color:#fff;display:none;min-width:100%;padding:4px 8px;position:absolute;white-space:nowrap}.nb-theme-default .ql-snow .ql-picker-options .ql-picker-item{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px}.nb-theme-default .ql-snow .ql-picker.ql-expanded .ql-picker-label{color:#e4e9f2;z-index:2}.nb-theme-default .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill{fill:#e4e9f2}.nb-theme-default .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke{stroke:#e4e9f2}.nb-theme-default .ql-snow .ql-picker.ql-expanded .ql-picker-options{display:block;margin-top:-1px;top:100%;z-index:1}.nb-theme-default .ql-snow .ql-color-picker,.nb-theme-default .ql-snow .ql-icon-picker{width:28px}.nb-theme-default .ql-snow .ql-color-picker .ql-picker-label,.nb-theme-default .ql-snow .ql-icon-picker .ql-picker-label{padding:2px 4px}.nb-theme-default .ql-snow .ql-color-picker .ql-picker-label svg,.nb-theme-default .ql-snow .ql-icon-picker .ql-picker-label svg{right:4px}.nb-theme-default .ql-snow .ql-icon-picker .ql-picker-options{padding:4px 0}.nb-theme-default .ql-snow .ql-icon-picker .ql-picker-item{height:24px;width:24px;padding:2px 4px}.nb-theme-default .ql-snow .ql-color-picker .ql-picker-options{padding:3px 5px;width:152px}.nb-theme-default .ql-snow .ql-color-picker .ql-picker-item{border:1px solid transparent;float:left;height:16px;margin:2px;padding:0;width:16px}.nb-theme-default .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg{position:absolute;margin-top:-9px;right:0;top:50%;width:18px}.nb-theme-default .ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=\"\"]):before,.nb-theme-default .ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=\"\"]):before,.nb-theme-default .ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=\"\"]):before,.nb-theme-default .ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=\"\"]):before,.nb-theme-default .ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=\"\"]):before,.nb-theme-default .ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=\"\"]):before{content:attr(data-label)}.nb-theme-default .ql-snow .ql-picker.ql-header{width:98px}.nb-theme-default .ql-snow .ql-picker.ql-header .ql-picker-label:before,.nb-theme-default .ql-snow .ql-picker.ql-header .ql-picker-item:before{content:\"Normal\"}.nb-theme-default .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]:before,.nb-theme-default .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]:before{content:\"Heading 1\"}.nb-theme-default .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]:before,.nb-theme-default .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]:before{content:\"Heading 2\"}.nb-theme-default .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]:before,.nb-theme-default .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]:before{content:\"Heading 3\"}.nb-theme-default .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]:before,.nb-theme-default .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]:before{content:\"Heading 4\"}.nb-theme-default .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]:before,.nb-theme-default .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]:before{content:\"Heading 5\"}.nb-theme-default .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]:before,.nb-theme-default .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]:before{content:\"Heading 6\"}.nb-theme-default .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]:before{font-size:2em}.nb-theme-default .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]:before{font-size:1.5em}.nb-theme-default .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]:before{font-size:1.17em}.nb-theme-default .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]:before{font-size:1em}.nb-theme-default .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]:before{font-size:.83em}.nb-theme-default .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]:before{font-size:.67em}.nb-theme-default .ql-snow .ql-picker.ql-font{width:108px}.nb-theme-default .ql-snow .ql-picker.ql-font .ql-picker-label:before,.nb-theme-default .ql-snow .ql-picker.ql-font .ql-picker-item:before{content:\"Sans Serif\"}.nb-theme-default .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]:before,.nb-theme-default .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]:before{content:\"Serif\"}.nb-theme-default .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]:before,.nb-theme-default .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]:before{content:\"Monospace\"}.nb-theme-default .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]:before{font-family:Georgia,Times New Roman,serif}.nb-theme-default .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]:before{font-family:Monaco,Courier New,monospace}.nb-theme-default .ql-snow .ql-picker.ql-size{width:98px}.nb-theme-default .ql-snow .ql-picker.ql-size .ql-picker-label:before,.nb-theme-default .ql-snow .ql-picker.ql-size .ql-picker-item:before{content:\"Normal\"}.nb-theme-default .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]:before,.nb-theme-default .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]:before{content:\"Small\"}.nb-theme-default .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]:before,.nb-theme-default .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]:before{content:\"Large\"}.nb-theme-default .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]:before,.nb-theme-default .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]:before{content:\"Huge\"}.nb-theme-default .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]:before{font-size:10px}.nb-theme-default .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]:before{font-size:18px}.nb-theme-default .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]:before{font-size:32px}.nb-theme-default .ql-snow .ql-color-picker.ql-background .ql-picker-item{background-color:#fff}.nb-theme-default .ql-snow .ql-color-picker.ql-color .ql-picker-item{background-color:#000}.nb-theme-default .ql-toolbar.ql-snow{border:1px solid #e4e9f2;border-top-right-radius:.25rem;border-top-left-radius:.25rem;box-sizing:border-box;font-family:\"Helvetica Neue\",\"Helvetica\",\"Arial\",sans-serif;padding:8px}.nb-theme-default .ql-toolbar.ql-snow .ql-formats{margin-right:15px}.nb-theme-default .ql-toolbar.ql-snow .ql-picker-label{border:1px solid transparent}.nb-theme-default .ql-toolbar.ql-snow .ql-picker-options{border:1px solid transparent;box-shadow:#0003 0 2px 8px}.nb-theme-default .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label{border-color:#e4e9f2}.nb-theme-default .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options{border-color:#e4e9f2}.nb-theme-default .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,.nb-theme-default .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover{border-color:#000}.nb-theme-default .ql-toolbar.ql-snow+.ql-container.ql-snow{border-top:0px}.nb-theme-default .ql-snow .ql-tooltip{background-color:#fff;border:1px solid #e4e9f2;box-shadow:0 0 5px #ddd;color:#222b45;padding:5px 12px;white-space:nowrap}.nb-theme-default .ql-snow .ql-tooltip:before{content:\"Visit URL:\";line-height:26px;margin-right:8px}.nb-theme-default .ql-snow .ql-tooltip input[type=text]{display:none;border:1px solid #e4e9f2;font-size:13px;height:26px;margin:0;padding:3px 5px;width:170px}.nb-theme-default .ql-snow .ql-tooltip a.ql-preview{display:inline-block;max-width:200px;overflow-x:hidden;text-overflow:ellipsis;vertical-align:top}.nb-theme-default .ql-snow .ql-tooltip a.ql-action:after{border-right:1px solid #e4e9f2;content:\"Edit\";margin-left:16px;padding-right:8px}.nb-theme-default .ql-snow .ql-tooltip a.ql-remove:before{content:\"Remove\";margin-left:8px}.nb-theme-default .ql-snow .ql-tooltip a{line-height:26px}.nb-theme-default .ql-snow .ql-tooltip.ql-editing a.ql-preview,.nb-theme-default .ql-snow .ql-tooltip.ql-editing a.ql-remove{display:none}.nb-theme-default .ql-snow .ql-tooltip.ql-editing input[type=text]{display:inline-block}.nb-theme-default .ql-snow .ql-tooltip.ql-editing a.ql-action:after{border-right:0px;content:\"Save\";padding-right:0}.nb-theme-default .ql-snow .ql-tooltip[data-mode=link]:before{content:\"Enter link:\"}.nb-theme-default .ql-snow .ql-tooltip[data-mode=formula]:before{content:\"Enter formula:\"}.nb-theme-default .ql-snow .ql-tooltip[data-mode=video]:before{content:\"Enter video:\"}.nb-theme-default .ql-snow a{color:#06c}.nb-theme-default .ql-container.ql-snow{border:1px solid #e4e9f2;border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.nb-theme-default .hasErrors .ql-toolbar.ql-snow{color:#ff3d71!important;border-top:1px solid #ff3d71!important;border-left:1px solid #ff3d71!important;border-right:1px solid #ff3d71!important;border-bottom:0px!important}.nb-theme-default .hasErrors .ql-container.ql-snow{border-top:1px solid #ff3d71!important;border-left:1px solid #ff3d71!important;border-right:1px solid #ff3d71!important;border-bottom:1px solid #ff3d71!important}.nb-theme-dark quill-editor[disabled=disabled] .ql-toolbar .ql-stroke{stroke:#101426;cursor:no-drop!important}.nb-theme-dark quill-editor[disabled=disabled] .ql-toolbar .ql-stroke-miter{stroke:#101426;cursor:no-drop!important}.nb-theme-dark quill-editor[disabled=disabled] .ql-toolbar .ql-fill,.nb-theme-dark quill-editor[disabled=disabled] .ql-toolbar .ql-stroke.ql-fill{fill:#101426;cursor:no-drop!important}.nb-theme-dark quill-editor[disabled=disabled] .ql-toolbar .ql-picker{color:#101426;cursor:no-drop!important}.nb-theme-dark .ql-container{box-sizing:border-box;font-family:Helvetica,Arial,sans-serif;font-size:13px;height:100%;margin:0;position:relative;background-color:#151a30}.nb-theme-dark .ql-container.ql-disabled .ql-tooltip{visibility:hidden}.nb-theme-dark .ql-container.ql-disabled .ql-editor ul[data-checked]>li:before{pointer-events:none}.nb-theme-dark .ql-clipboard{left:-100000px;height:1px;overflow-y:hidden;position:absolute;top:50%}.nb-theme-dark .ql-clipboard p{margin:0;padding:0}.nb-theme-dark .ql-editor{box-sizing:border-box;line-height:1.42;height:100%;outline:none;overflow-y:auto;padding:12px 15px;tab-size:4;-moz-tab-size:4;text-align:left;white-space:pre-wrap;word-wrap:break-word}.nb-theme-dark .ql-editor>*{cursor:text}.nb-theme-dark .ql-editor p,.nb-theme-dark .ql-editor ol,.nb-theme-dark .ql-editor ul,.nb-theme-dark .ql-editor pre,.nb-theme-dark .ql-editor blockquote,.nb-theme-dark .ql-editor h1,.nb-theme-dark .ql-editor h2,.nb-theme-dark .ql-editor h3,.nb-theme-dark .ql-editor h4,.nb-theme-dark .ql-editor h5,.nb-theme-dark .ql-editor h6{margin:0;padding:0;counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.nb-theme-dark .ql-editor ol,.nb-theme-dark .ql-editor ul{padding-left:1.5em}.nb-theme-dark .ql-editor ol>li,.nb-theme-dark .ql-editor ul>li{list-style-type:none}.nb-theme-dark .ql-editor ul>li:before{content:\"\\2022\"}.nb-theme-dark .ql-editor ul[data-checked=true],.nb-theme-dark .ql-editor ul[data-checked=false]{pointer-events:none}.nb-theme-dark .ql-editor ul[data-checked=true]>li *,.nb-theme-dark .ql-editor ul[data-checked=false]>li *{pointer-events:all}.nb-theme-dark .ql-editor ul[data-checked=true]>li:before,.nb-theme-dark .ql-editor ul[data-checked=false]>li:before{color:#777;cursor:pointer;pointer-events:all}.nb-theme-dark .ql-editor ul[data-checked=true]>li:before{content:\"\\2611\"}.nb-theme-dark .ql-editor ul[data-checked=false]>li:before{content:\"\\2610\"}.nb-theme-dark .ql-editor li:before{display:inline-block;white-space:nowrap;width:1.2em}.nb-theme-dark .ql-editor li:not(.ql-direction-rtl):before{margin-left:-1.5em;margin-right:.3em;text-align:right}.nb-theme-dark .ql-editor li.ql-direction-rtl:before{margin-left:.3em;margin-right:-1.5em}.nb-theme-dark .ql-editor ol li:not(.ql-direction-rtl),.nb-theme-dark .ql-editor ul li:not(.ql-direction-rtl){padding-left:1.5em}.nb-theme-dark .ql-editor ol li.ql-direction-rtl,.nb-theme-dark .ql-editor ul li.ql-direction-rtl{padding-right:1.5em}.nb-theme-dark .ql-editor ol li{counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;counter-increment:list-0}.nb-theme-dark .ql-editor ol li:before{content:counter(list-0,decimal) \". \"}.nb-theme-dark .ql-editor ol li.ql-indent-1{counter-increment:list-1}.nb-theme-dark .ql-editor ol li.ql-indent-1:before{content:counter(list-1,lower-alpha) \". \"}.nb-theme-dark .ql-editor ol li.ql-indent-1{counter-reset:list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.nb-theme-dark .ql-editor ol li.ql-indent-2{counter-increment:list-2}.nb-theme-dark .ql-editor ol li.ql-indent-2:before{content:counter(list-2,lower-roman) \". \"}.nb-theme-dark .ql-editor ol li.ql-indent-2{counter-reset:list-3 list-4 list-5 list-6 list-7 list-8 list-9}.nb-theme-dark .ql-editor ol li.ql-indent-3{counter-increment:list-3}.nb-theme-dark .ql-editor ol li.ql-indent-3:before{content:counter(list-3,decimal) \". \"}.nb-theme-dark .ql-editor ol li.ql-indent-3{counter-reset:list-4 list-5 list-6 list-7 list-8 list-9}.nb-theme-dark .ql-editor ol li.ql-indent-4{counter-increment:list-4}.nb-theme-dark .ql-editor ol li.ql-indent-4:before{content:counter(list-4,lower-alpha) \". \"}.nb-theme-dark .ql-editor ol li.ql-indent-4{counter-reset:list-5 list-6 list-7 list-8 list-9}.nb-theme-dark .ql-editor ol li.ql-indent-5{counter-increment:list-5}.nb-theme-dark .ql-editor ol li.ql-indent-5:before{content:counter(list-5,lower-roman) \". \"}.nb-theme-dark .ql-editor ol li.ql-indent-5{counter-reset:list-6 list-7 list-8 list-9}.nb-theme-dark .ql-editor ol li.ql-indent-6{counter-increment:list-6}.nb-theme-dark .ql-editor ol li.ql-indent-6:before{content:counter(list-6,decimal) \". \"}.nb-theme-dark .ql-editor ol li.ql-indent-6{counter-reset:list-7 list-8 list-9}.nb-theme-dark .ql-editor ol li.ql-indent-7{counter-increment:list-7}.nb-theme-dark .ql-editor ol li.ql-indent-7:before{content:counter(list-7,lower-alpha) \". \"}.nb-theme-dark .ql-editor ol li.ql-indent-7{counter-reset:list-8 list-9}.nb-theme-dark .ql-editor ol li.ql-indent-8{counter-increment:list-8}.nb-theme-dark .ql-editor ol li.ql-indent-8:before{content:counter(list-8,lower-roman) \". \"}.nb-theme-dark .ql-editor ol li.ql-indent-8{counter-reset:list-9}.nb-theme-dark .ql-editor ol li.ql-indent-9{counter-increment:list-9}.nb-theme-dark .ql-editor ol li.ql-indent-9:before{content:counter(list-9,decimal) \". \"}.nb-theme-dark .ql-editor .ql-indent-1:not(.ql-direction-rtl){padding-left:3em}.nb-theme-dark .ql-editor li.ql-indent-1:not(.ql-direction-rtl){padding-left:4.5em}.nb-theme-dark .ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:3em}.nb-theme-dark .ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:4.5em}.nb-theme-dark .ql-editor .ql-indent-2:not(.ql-direction-rtl){padding-left:6em}.nb-theme-dark .ql-editor li.ql-indent-2:not(.ql-direction-rtl){padding-left:7.5em}.nb-theme-dark .ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:6em}.nb-theme-dark .ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:7.5em}.nb-theme-dark .ql-editor .ql-indent-3:not(.ql-direction-rtl){padding-left:9em}.nb-theme-dark .ql-editor li.ql-indent-3:not(.ql-direction-rtl){padding-left:10.5em}.nb-theme-dark .ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:9em}.nb-theme-dark .ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:10.5em}.nb-theme-dark .ql-editor .ql-indent-4:not(.ql-direction-rtl){padding-left:12em}.nb-theme-dark .ql-editor li.ql-indent-4:not(.ql-direction-rtl){padding-left:13.5em}.nb-theme-dark .ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:12em}.nb-theme-dark .ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:13.5em}.nb-theme-dark .ql-editor .ql-indent-5:not(.ql-direction-rtl){padding-left:15em}.nb-theme-dark .ql-editor li.ql-indent-5:not(.ql-direction-rtl){padding-left:16.5em}.nb-theme-dark .ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:15em}.nb-theme-dark .ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:16.5em}.nb-theme-dark .ql-editor .ql-indent-6:not(.ql-direction-rtl){padding-left:18em}.nb-theme-dark .ql-editor li.ql-indent-6:not(.ql-direction-rtl){padding-left:19.5em}.nb-theme-dark .ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:18em}.nb-theme-dark .ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:19.5em}.nb-theme-dark .ql-editor .ql-indent-7:not(.ql-direction-rtl){padding-left:21em}.nb-theme-dark .ql-editor li.ql-indent-7:not(.ql-direction-rtl){padding-left:22.5em}.nb-theme-dark .ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:21em}.nb-theme-dark .ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:22.5em}.nb-theme-dark .ql-editor .ql-indent-8:not(.ql-direction-rtl){padding-left:24em}.nb-theme-dark .ql-editor li.ql-indent-8:not(.ql-direction-rtl){padding-left:25.5em}.nb-theme-dark .ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:24em}.nb-theme-dark .ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:25.5em}.nb-theme-dark .ql-editor .ql-indent-9:not(.ql-direction-rtl){padding-left:27em}.nb-theme-dark .ql-editor li.ql-indent-9:not(.ql-direction-rtl){padding-left:28.5em}.nb-theme-dark .ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:27em}.nb-theme-dark .ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:28.5em}.nb-theme-dark .ql-editor .ql-video{display:block;max-width:100%}.nb-theme-dark .ql-editor .ql-video.ql-align-center{margin:0 auto}.nb-theme-dark .ql-editor .ql-video.ql-align-right{margin:0 0 0 auto}.nb-theme-dark .ql-editor .ql-bg-black{background-color:#000}.nb-theme-dark .ql-editor .ql-bg-red{background-color:#e60000}.nb-theme-dark .ql-editor .ql-bg-orange{background-color:#f90}.nb-theme-dark .ql-editor .ql-bg-yellow{background-color:#ff0}.nb-theme-dark .ql-editor .ql-bg-green{background-color:#008a00}.nb-theme-dark .ql-editor .ql-bg-blue{background-color:#06c}.nb-theme-dark .ql-editor .ql-bg-purple{background-color:#93f}.nb-theme-dark .ql-editor .ql-color-white{color:#fff}.nb-theme-dark .ql-editor .ql-color-red{color:#e60000}.nb-theme-dark .ql-editor .ql-color-orange{color:#f90}.nb-theme-dark .ql-editor .ql-color-yellow{color:#ff0}.nb-theme-dark .ql-editor .ql-color-green{color:#008a00}.nb-theme-dark .ql-editor .ql-color-blue{color:#06c}.nb-theme-dark .ql-editor .ql-color-purple{color:#93f}.nb-theme-dark .ql-editor .ql-font-serif{font-family:Georgia,Times New Roman,serif}.nb-theme-dark .ql-editor .ql-font-monospace{font-family:Monaco,Courier New,monospace}.nb-theme-dark .ql-editor .ql-size-small{font-size:.75em}.nb-theme-dark .ql-editor .ql-size-large{font-size:1.5em}.nb-theme-dark .ql-editor .ql-size-huge{font-size:2.5em}.nb-theme-dark .ql-editor .ql-direction-rtl{direction:rtl;text-align:inherit}.nb-theme-dark .ql-editor .ql-align-center{text-align:center}.nb-theme-dark .ql-editor .ql-align-justify{text-align:justify}.nb-theme-dark .ql-editor .ql-align-right{text-align:right}.nb-theme-dark .ql-editor.ql-blank:before{content:attr(data-placeholder);color:#8f9bb3;font-family:Open Sans,sans-serif;text-overflow:ellipsis;font-size:.9375rem;font-weight:400;line-height:1.25rem;font-style:normal;left:15px;pointer-events:none;position:absolute;right:15px}.nb-theme-dark .ql-snow.ql-toolbar:after,.nb-theme-dark .ql-snow .ql-toolbar:after{clear:both;content:\"\";display:table}.nb-theme-dark .ql-snow.ql-toolbar button,.nb-theme-dark .ql-snow .ql-toolbar button{background:none;border:none;cursor:pointer;display:inline-block;float:left;height:24px;padding:3px 5px;width:28px}.nb-theme-dark .ql-snow.ql-toolbar button svg,.nb-theme-dark .ql-snow .ql-toolbar button svg{float:left;height:100%}.nb-theme-dark .ql-snow.ql-toolbar button:active:hover,.nb-theme-dark .ql-snow .ql-toolbar button:active:hover{outline:none}.nb-theme-dark .ql-snow.ql-toolbar input.ql-image[type=file],.nb-theme-dark .ql-snow .ql-toolbar input.ql-image[type=file]{display:none}.nb-theme-dark .ql-snow.ql-toolbar button:hover,.nb-theme-dark .ql-snow .ql-toolbar button:hover,.nb-theme-dark .ql-snow.ql-toolbar button:focus,.nb-theme-dark .ql-snow .ql-toolbar button:focus,.nb-theme-dark .ql-snow.ql-toolbar button.ql-active,.nb-theme-dark .ql-snow .ql-toolbar button.ql-active,.nb-theme-dark .ql-snow.ql-toolbar .ql-picker-label:hover,.nb-theme-dark .ql-snow .ql-toolbar .ql-picker-label:hover,.nb-theme-dark .ql-snow.ql-toolbar .ql-picker-label.ql-active,.nb-theme-dark .ql-snow .ql-toolbar .ql-picker-label.ql-active,.nb-theme-dark .ql-snow.ql-toolbar .ql-picker-item:hover,.nb-theme-dark .ql-snow .ql-toolbar .ql-picker-item:hover,.nb-theme-dark .ql-snow.ql-toolbar .ql-picker-item.ql-selected,.nb-theme-dark .ql-snow .ql-toolbar .ql-picker-item.ql-selected{color:#06c;outline:1px solid #101426;background-color:#151a30}.nb-theme-dark .ql-snow.ql-toolbar button:hover .ql-fill,.nb-theme-dark .ql-snow .ql-toolbar button:hover .ql-fill,.nb-theme-dark .ql-snow.ql-toolbar button:focus .ql-fill,.nb-theme-dark .ql-snow .ql-toolbar button:focus .ql-fill,.nb-theme-dark .ql-snow.ql-toolbar button.ql-active .ql-fill,.nb-theme-dark .ql-snow .ql-toolbar button.ql-active .ql-fill,.nb-theme-dark .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,.nb-theme-dark .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,.nb-theme-dark .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,.nb-theme-dark .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,.nb-theme-dark .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,.nb-theme-dark .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,.nb-theme-dark .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,.nb-theme-dark .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,.nb-theme-dark .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,.nb-theme-dark .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,.nb-theme-dark .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,.nb-theme-dark .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,.nb-theme-dark .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,.nb-theme-dark .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,.nb-theme-dark .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.nb-theme-dark .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.nb-theme-dark .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.nb-theme-dark .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.nb-theme-dark .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.nb-theme-dark .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.nb-theme-dark .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.nb-theme-dark .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill{fill:#06c}.nb-theme-dark .ql-snow.ql-toolbar button:hover .ql-stroke,.nb-theme-dark .ql-snow .ql-toolbar button:hover .ql-stroke,.nb-theme-dark .ql-snow.ql-toolbar button:focus .ql-stroke,.nb-theme-dark .ql-snow .ql-toolbar button:focus .ql-stroke,.nb-theme-dark .ql-snow.ql-toolbar button.ql-active .ql-stroke,.nb-theme-dark .ql-snow .ql-toolbar button.ql-active .ql-stroke,.nb-theme-dark .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,.nb-theme-dark .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,.nb-theme-dark .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,.nb-theme-dark .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,.nb-theme-dark .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,.nb-theme-dark .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,.nb-theme-dark .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.nb-theme-dark .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.nb-theme-dark .ql-snow.ql-toolbar button:hover .ql-stroke-miter,.nb-theme-dark .ql-snow .ql-toolbar button:hover .ql-stroke-miter,.nb-theme-dark .ql-snow.ql-toolbar button:focus .ql-stroke-miter,.nb-theme-dark .ql-snow .ql-toolbar button:focus .ql-stroke-miter,.nb-theme-dark .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,.nb-theme-dark .ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,.nb-theme-dark .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.nb-theme-dark .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.nb-theme-dark .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.nb-theme-dark .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.nb-theme-dark .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.nb-theme-dark .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.nb-theme-dark .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.nb-theme-dark .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter{stroke:#06c}@media (pointer: coarse){.nb-theme-dark .ql-snow.ql-toolbar button:hover:not(.ql-active),.nb-theme-dark .ql-snow .ql-toolbar button:hover:not(.ql-active){color:#fff}.nb-theme-dark .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,.nb-theme-dark .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,.nb-theme-dark .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,.nb-theme-dark .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill{fill:#fff}.nb-theme-dark .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,.nb-theme-dark .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,.nb-theme-dark .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,.nb-theme-dark .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter{stroke:#fff}}.nb-theme-dark .ql-snow{box-sizing:border-box}.nb-theme-dark .ql-snow *{box-sizing:border-box}.nb-theme-dark .ql-snow .ql-hidden{display:none}.nb-theme-dark .ql-snow .ql-out-bottom,.nb-theme-dark .ql-snow .ql-out-top{visibility:hidden}.nb-theme-dark .ql-snow .ql-tooltip{position:absolute;transform:translateY(10px)}.nb-theme-dark .ql-snow .ql-tooltip a{cursor:pointer;text-decoration:none}.nb-theme-dark .ql-snow .ql-tooltip.ql-flip{transform:translateY(-10px)}.nb-theme-dark .ql-snow .ql-formats{display:inline-block;vertical-align:middle}.nb-theme-dark .ql-snow .ql-formats:after{clear:both;content:\"\";display:table}.nb-theme-dark .ql-snow .ql-stroke{fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.nb-theme-dark .ql-snow .ql-stroke-miter{fill:none;stroke:#fff;stroke-miterlimit:10;stroke-width:2}.nb-theme-dark .ql-snow .ql-fill,.nb-theme-dark .ql-snow .ql-stroke.ql-fill{fill:#fff}.nb-theme-dark .ql-snow .ql-empty{fill:none}.nb-theme-dark .ql-snow .ql-even{fill-rule:evenodd}.nb-theme-dark .ql-snow .ql-thin,.nb-theme-dark .ql-snow .ql-stroke.ql-thin{stroke-width:1}.nb-theme-dark .ql-snow .ql-transparent{opacity:.4}.nb-theme-dark .ql-snow .ql-direction svg:last-child{display:none}.nb-theme-dark .ql-snow .ql-direction.ql-active svg:last-child{display:inline}.nb-theme-dark .ql-snow .ql-direction.ql-active svg:first-child{display:none}.nb-theme-dark .ql-snow .ql-editor h1{font-size:2em}.nb-theme-dark .ql-snow .ql-editor h2{font-size:1.5em}.nb-theme-dark .ql-snow .ql-editor h3{font-size:1.17em}.nb-theme-dark .ql-snow .ql-editor h4{font-size:1em}.nb-theme-dark .ql-snow .ql-editor h5{font-size:.83em}.nb-theme-dark .ql-snow .ql-editor h6{font-size:.67em}.nb-theme-dark .ql-snow .ql-editor a{text-decoration:underline}.nb-theme-dark .ql-snow .ql-editor blockquote{border-left:4px solid #101426;margin-bottom:5px;margin-top:5px;padding-left:16px}.nb-theme-dark .ql-snow .ql-editor code,.nb-theme-dark .ql-snow .ql-editor pre{background-color:#f0f0f0;border-radius:3px}.nb-theme-dark .ql-snow .ql-editor pre{white-space:pre-wrap;margin-bottom:5px;margin-top:5px;padding:5px 10px}.nb-theme-dark .ql-snow .ql-editor code{font-size:85%;padding:2px 4px}.nb-theme-dark .ql-snow .ql-editor pre.ql-syntax{background-color:#23241f;color:#f8f8f2;overflow:visible}.nb-theme-dark .ql-snow .ql-editor img{max-width:100%}.nb-theme-dark .ql-snow .ql-picker{color:#fff;display:inline-block;float:left;font-size:14px;font-weight:500;height:24px;position:relative;vertical-align:middle}.nb-theme-dark .ql-snow .ql-picker-label{cursor:pointer;display:inline-block;height:100%;padding-left:8px;padding-right:2px;position:relative;width:100%}.nb-theme-dark .ql-snow .ql-picker-label:before{display:inline-block;line-height:22px}.nb-theme-dark .ql-snow .ql-picker-options{background-color:#fff;display:none;min-width:100%;padding:4px 8px;position:absolute;white-space:nowrap}.nb-theme-dark .ql-snow .ql-picker-options .ql-picker-item{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px}.nb-theme-dark .ql-snow .ql-picker.ql-expanded .ql-picker-label{color:#101426;z-index:2}.nb-theme-dark .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill{fill:#101426}.nb-theme-dark .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke{stroke:#101426}.nb-theme-dark .ql-snow .ql-picker.ql-expanded .ql-picker-options{display:block;margin-top:-1px;top:100%;z-index:1}.nb-theme-dark .ql-snow .ql-color-picker,.nb-theme-dark .ql-snow .ql-icon-picker{width:28px}.nb-theme-dark .ql-snow .ql-color-picker .ql-picker-label,.nb-theme-dark .ql-snow .ql-icon-picker .ql-picker-label{padding:2px 4px}.nb-theme-dark .ql-snow .ql-color-picker .ql-picker-label svg,.nb-theme-dark .ql-snow .ql-icon-picker .ql-picker-label svg{right:4px}.nb-theme-dark .ql-snow .ql-icon-picker .ql-picker-options{padding:4px 0}.nb-theme-dark .ql-snow .ql-icon-picker .ql-picker-item{height:24px;width:24px;padding:2px 4px}.nb-theme-dark .ql-snow .ql-color-picker .ql-picker-options{padding:3px 5px;width:152px}.nb-theme-dark .ql-snow .ql-color-picker .ql-picker-item{border:1px solid transparent;float:left;height:16px;margin:2px;padding:0;width:16px}.nb-theme-dark .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg{position:absolute;margin-top:-9px;right:0;top:50%;width:18px}.nb-theme-dark .ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=\"\"]):before,.nb-theme-dark .ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=\"\"]):before,.nb-theme-dark .ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=\"\"]):before,.nb-theme-dark .ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=\"\"]):before,.nb-theme-dark .ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=\"\"]):before,.nb-theme-dark .ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=\"\"]):before{content:attr(data-label)}.nb-theme-dark .ql-snow .ql-picker.ql-header{width:98px}.nb-theme-dark .ql-snow .ql-picker.ql-header .ql-picker-label:before,.nb-theme-dark .ql-snow .ql-picker.ql-header .ql-picker-item:before{content:\"Normal\"}.nb-theme-dark .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]:before,.nb-theme-dark .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]:before{content:\"Heading 1\"}.nb-theme-dark .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]:before,.nb-theme-dark .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]:before{content:\"Heading 2\"}.nb-theme-dark .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]:before,.nb-theme-dark .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]:before{content:\"Heading 3\"}.nb-theme-dark .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]:before,.nb-theme-dark .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]:before{content:\"Heading 4\"}.nb-theme-dark .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]:before,.nb-theme-dark .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]:before{content:\"Heading 5\"}.nb-theme-dark .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]:before,.nb-theme-dark .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]:before{content:\"Heading 6\"}.nb-theme-dark .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]:before{font-size:2em}.nb-theme-dark .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]:before{font-size:1.5em}.nb-theme-dark .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]:before{font-size:1.17em}.nb-theme-dark .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]:before{font-size:1em}.nb-theme-dark .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]:before{font-size:.83em}.nb-theme-dark .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]:before{font-size:.67em}.nb-theme-dark .ql-snow .ql-picker.ql-font{width:108px}.nb-theme-dark .ql-snow .ql-picker.ql-font .ql-picker-label:before,.nb-theme-dark .ql-snow .ql-picker.ql-font .ql-picker-item:before{content:\"Sans Serif\"}.nb-theme-dark .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]:before,.nb-theme-dark .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]:before{content:\"Serif\"}.nb-theme-dark .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]:before,.nb-theme-dark .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]:before{content:\"Monospace\"}.nb-theme-dark .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]:before{font-family:Georgia,Times New Roman,serif}.nb-theme-dark .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]:before{font-family:Monaco,Courier New,monospace}.nb-theme-dark .ql-snow .ql-picker.ql-size{width:98px}.nb-theme-dark .ql-snow .ql-picker.ql-size .ql-picker-label:before,.nb-theme-dark .ql-snow .ql-picker.ql-size .ql-picker-item:before{content:\"Normal\"}.nb-theme-dark .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]:before,.nb-theme-dark .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]:before{content:\"Small\"}.nb-theme-dark .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]:before,.nb-theme-dark .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]:before{content:\"Large\"}.nb-theme-dark .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]:before,.nb-theme-dark .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]:before{content:\"Huge\"}.nb-theme-dark .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]:before{font-size:10px}.nb-theme-dark .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]:before{font-size:18px}.nb-theme-dark .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]:before{font-size:32px}.nb-theme-dark .ql-snow .ql-color-picker.ql-background .ql-picker-item{background-color:#fff}.nb-theme-dark .ql-snow .ql-color-picker.ql-color .ql-picker-item{background-color:#000}.nb-theme-dark .ql-toolbar.ql-snow{border:1px solid #101426;border-top-right-radius:.25rem;border-top-left-radius:.25rem;box-sizing:border-box;font-family:\"Helvetica Neue\",\"Helvetica\",\"Arial\",sans-serif;padding:8px}.nb-theme-dark .ql-toolbar.ql-snow .ql-formats{margin-right:15px}.nb-theme-dark .ql-toolbar.ql-snow .ql-picker-label{border:1px solid transparent}.nb-theme-dark .ql-toolbar.ql-snow .ql-picker-options{border:1px solid transparent;box-shadow:#0003 0 2px 8px}.nb-theme-dark .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label{border-color:#101426}.nb-theme-dark .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options{border-color:#101426}.nb-theme-dark .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,.nb-theme-dark .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover{border-color:#000}.nb-theme-dark .ql-toolbar.ql-snow+.ql-container.ql-snow{border-top:0px}.nb-theme-dark .ql-snow .ql-tooltip{background-color:#fff;border:1px solid #101426;box-shadow:0 0 5px #ddd;color:#fff;padding:5px 12px;white-space:nowrap}.nb-theme-dark .ql-snow .ql-tooltip:before{content:\"Visit URL:\";line-height:26px;margin-right:8px}.nb-theme-dark .ql-snow .ql-tooltip input[type=text]{display:none;border:1px solid #101426;font-size:13px;height:26px;margin:0;padding:3px 5px;width:170px}.nb-theme-dark .ql-snow .ql-tooltip a.ql-preview{display:inline-block;max-width:200px;overflow-x:hidden;text-overflow:ellipsis;vertical-align:top}.nb-theme-dark .ql-snow .ql-tooltip a.ql-action:after{border-right:1px solid #101426;content:\"Edit\";margin-left:16px;padding-right:8px}.nb-theme-dark .ql-snow .ql-tooltip a.ql-remove:before{content:\"Remove\";margin-left:8px}.nb-theme-dark .ql-snow .ql-tooltip a{line-height:26px}.nb-theme-dark .ql-snow .ql-tooltip.ql-editing a.ql-preview,.nb-theme-dark .ql-snow .ql-tooltip.ql-editing a.ql-remove{display:none}.nb-theme-dark .ql-snow .ql-tooltip.ql-editing input[type=text]{display:inline-block}.nb-theme-dark .ql-snow .ql-tooltip.ql-editing a.ql-action:after{border-right:0px;content:\"Save\";padding-right:0}.nb-theme-dark .ql-snow .ql-tooltip[data-mode=link]:before{content:\"Enter link:\"}.nb-theme-dark .ql-snow .ql-tooltip[data-mode=formula]:before{content:\"Enter formula:\"}.nb-theme-dark .ql-snow .ql-tooltip[data-mode=video]:before{content:\"Enter video:\"}.nb-theme-dark .ql-snow a{color:#06c}.nb-theme-dark .ql-container.ql-snow{border:1px solid #101426;border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.nb-theme-dark .hasErrors .ql-toolbar.ql-snow{color:#ff3d71!important;border-top:1px solid #ff3d71!important;border-left:1px solid #ff3d71!important;border-right:1px solid #ff3d71!important;border-bottom:0px!important}.nb-theme-dark .hasErrors .ql-container.ql-snow{border-top:1px solid #ff3d71!important;border-left:1px solid #ff3d71!important;border-right:1px solid #ff3d71!important;border-bottom:1px solid #ff3d71!important}.nb-theme-cosmic quill-editor[disabled=disabled] .ql-toolbar .ql-stroke{stroke:#13132b;cursor:no-drop!important}.nb-theme-cosmic quill-editor[disabled=disabled] .ql-toolbar .ql-stroke-miter{stroke:#13132b;cursor:no-drop!important}.nb-theme-cosmic quill-editor[disabled=disabled] .ql-toolbar .ql-fill,.nb-theme-cosmic quill-editor[disabled=disabled] .ql-toolbar .ql-stroke.ql-fill{fill:#13132b;cursor:no-drop!important}.nb-theme-cosmic quill-editor[disabled=disabled] .ql-toolbar .ql-picker{color:#13132b;cursor:no-drop!important}.nb-theme-cosmic .ql-container{box-sizing:border-box;font-family:Helvetica,Arial,sans-serif;font-size:13px;height:100%;margin:0;position:relative;background-color:#1b1b38}.nb-theme-cosmic .ql-container.ql-disabled .ql-tooltip{visibility:hidden}.nb-theme-cosmic .ql-container.ql-disabled .ql-editor ul[data-checked]>li:before{pointer-events:none}.nb-theme-cosmic .ql-clipboard{left:-100000px;height:1px;overflow-y:hidden;position:absolute;top:50%}.nb-theme-cosmic .ql-clipboard p{margin:0;padding:0}.nb-theme-cosmic .ql-editor{box-sizing:border-box;line-height:1.42;height:100%;outline:none;overflow-y:auto;padding:12px 15px;tab-size:4;-moz-tab-size:4;text-align:left;white-space:pre-wrap;word-wrap:break-word}.nb-theme-cosmic .ql-editor>*{cursor:text}.nb-theme-cosmic .ql-editor p,.nb-theme-cosmic .ql-editor ol,.nb-theme-cosmic .ql-editor ul,.nb-theme-cosmic .ql-editor pre,.nb-theme-cosmic .ql-editor blockquote,.nb-theme-cosmic .ql-editor h1,.nb-theme-cosmic .ql-editor h2,.nb-theme-cosmic .ql-editor h3,.nb-theme-cosmic .ql-editor h4,.nb-theme-cosmic .ql-editor h5,.nb-theme-cosmic .ql-editor h6{margin:0;padding:0;counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.nb-theme-cosmic .ql-editor ol,.nb-theme-cosmic .ql-editor ul{padding-left:1.5em}.nb-theme-cosmic .ql-editor ol>li,.nb-theme-cosmic .ql-editor ul>li{list-style-type:none}.nb-theme-cosmic .ql-editor ul>li:before{content:\"\\2022\"}.nb-theme-cosmic .ql-editor ul[data-checked=true],.nb-theme-cosmic .ql-editor ul[data-checked=false]{pointer-events:none}.nb-theme-cosmic .ql-editor ul[data-checked=true]>li *,.nb-theme-cosmic .ql-editor ul[data-checked=false]>li *{pointer-events:all}.nb-theme-cosmic .ql-editor ul[data-checked=true]>li:before,.nb-theme-cosmic .ql-editor ul[data-checked=false]>li:before{color:#777;cursor:pointer;pointer-events:all}.nb-theme-cosmic .ql-editor ul[data-checked=true]>li:before{content:\"\\2611\"}.nb-theme-cosmic .ql-editor ul[data-checked=false]>li:before{content:\"\\2610\"}.nb-theme-cosmic .ql-editor li:before{display:inline-block;white-space:nowrap;width:1.2em}.nb-theme-cosmic .ql-editor li:not(.ql-direction-rtl):before{margin-left:-1.5em;margin-right:.3em;text-align:right}.nb-theme-cosmic .ql-editor li.ql-direction-rtl:before{margin-left:.3em;margin-right:-1.5em}.nb-theme-cosmic .ql-editor ol li:not(.ql-direction-rtl),.nb-theme-cosmic .ql-editor ul li:not(.ql-direction-rtl){padding-left:1.5em}.nb-theme-cosmic .ql-editor ol li.ql-direction-rtl,.nb-theme-cosmic .ql-editor ul li.ql-direction-rtl{padding-right:1.5em}.nb-theme-cosmic .ql-editor ol li{counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;counter-increment:list-0}.nb-theme-cosmic .ql-editor ol li:before{content:counter(list-0,decimal) \". \"}.nb-theme-cosmic .ql-editor ol li.ql-indent-1{counter-increment:list-1}.nb-theme-cosmic .ql-editor ol li.ql-indent-1:before{content:counter(list-1,lower-alpha) \". \"}.nb-theme-cosmic .ql-editor ol li.ql-indent-1{counter-reset:list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.nb-theme-cosmic .ql-editor ol li.ql-indent-2{counter-increment:list-2}.nb-theme-cosmic .ql-editor ol li.ql-indent-2:before{content:counter(list-2,lower-roman) \". \"}.nb-theme-cosmic .ql-editor ol li.ql-indent-2{counter-reset:list-3 list-4 list-5 list-6 list-7 list-8 list-9}.nb-theme-cosmic .ql-editor ol li.ql-indent-3{counter-increment:list-3}.nb-theme-cosmic .ql-editor ol li.ql-indent-3:before{content:counter(list-3,decimal) \". \"}.nb-theme-cosmic .ql-editor ol li.ql-indent-3{counter-reset:list-4 list-5 list-6 list-7 list-8 list-9}.nb-theme-cosmic .ql-editor ol li.ql-indent-4{counter-increment:list-4}.nb-theme-cosmic .ql-editor ol li.ql-indent-4:before{content:counter(list-4,lower-alpha) \". \"}.nb-theme-cosmic .ql-editor ol li.ql-indent-4{counter-reset:list-5 list-6 list-7 list-8 list-9}.nb-theme-cosmic .ql-editor ol li.ql-indent-5{counter-increment:list-5}.nb-theme-cosmic .ql-editor ol li.ql-indent-5:before{content:counter(list-5,lower-roman) \". \"}.nb-theme-cosmic .ql-editor ol li.ql-indent-5{counter-reset:list-6 list-7 list-8 list-9}.nb-theme-cosmic .ql-editor ol li.ql-indent-6{counter-increment:list-6}.nb-theme-cosmic .ql-editor ol li.ql-indent-6:before{content:counter(list-6,decimal) \". \"}.nb-theme-cosmic .ql-editor ol li.ql-indent-6{counter-reset:list-7 list-8 list-9}.nb-theme-cosmic .ql-editor ol li.ql-indent-7{counter-increment:list-7}.nb-theme-cosmic .ql-editor ol li.ql-indent-7:before{content:counter(list-7,lower-alpha) \". \"}.nb-theme-cosmic .ql-editor ol li.ql-indent-7{counter-reset:list-8 list-9}.nb-theme-cosmic .ql-editor ol li.ql-indent-8{counter-increment:list-8}.nb-theme-cosmic .ql-editor ol li.ql-indent-8:before{content:counter(list-8,lower-roman) \". \"}.nb-theme-cosmic .ql-editor ol li.ql-indent-8{counter-reset:list-9}.nb-theme-cosmic .ql-editor ol li.ql-indent-9{counter-increment:list-9}.nb-theme-cosmic .ql-editor ol li.ql-indent-9:before{content:counter(list-9,decimal) \". \"}.nb-theme-cosmic .ql-editor .ql-indent-1:not(.ql-direction-rtl){padding-left:3em}.nb-theme-cosmic .ql-editor li.ql-indent-1:not(.ql-direction-rtl){padding-left:4.5em}.nb-theme-cosmic .ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:3em}.nb-theme-cosmic .ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:4.5em}.nb-theme-cosmic .ql-editor .ql-indent-2:not(.ql-direction-rtl){padding-left:6em}.nb-theme-cosmic .ql-editor li.ql-indent-2:not(.ql-direction-rtl){padding-left:7.5em}.nb-theme-cosmic .ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:6em}.nb-theme-cosmic .ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:7.5em}.nb-theme-cosmic .ql-editor .ql-indent-3:not(.ql-direction-rtl){padding-left:9em}.nb-theme-cosmic .ql-editor li.ql-indent-3:not(.ql-direction-rtl){padding-left:10.5em}.nb-theme-cosmic .ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:9em}.nb-theme-cosmic .ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:10.5em}.nb-theme-cosmic .ql-editor .ql-indent-4:not(.ql-direction-rtl){padding-left:12em}.nb-theme-cosmic .ql-editor li.ql-indent-4:not(.ql-direction-rtl){padding-left:13.5em}.nb-theme-cosmic .ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:12em}.nb-theme-cosmic .ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:13.5em}.nb-theme-cosmic .ql-editor .ql-indent-5:not(.ql-direction-rtl){padding-left:15em}.nb-theme-cosmic .ql-editor li.ql-indent-5:not(.ql-direction-rtl){padding-left:16.5em}.nb-theme-cosmic .ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:15em}.nb-theme-cosmic .ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:16.5em}.nb-theme-cosmic .ql-editor .ql-indent-6:not(.ql-direction-rtl){padding-left:18em}.nb-theme-cosmic .ql-editor li.ql-indent-6:not(.ql-direction-rtl){padding-left:19.5em}.nb-theme-cosmic .ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:18em}.nb-theme-cosmic .ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:19.5em}.nb-theme-cosmic .ql-editor .ql-indent-7:not(.ql-direction-rtl){padding-left:21em}.nb-theme-cosmic .ql-editor li.ql-indent-7:not(.ql-direction-rtl){padding-left:22.5em}.nb-theme-cosmic .ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:21em}.nb-theme-cosmic .ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:22.5em}.nb-theme-cosmic .ql-editor .ql-indent-8:not(.ql-direction-rtl){padding-left:24em}.nb-theme-cosmic .ql-editor li.ql-indent-8:not(.ql-direction-rtl){padding-left:25.5em}.nb-theme-cosmic .ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:24em}.nb-theme-cosmic .ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:25.5em}.nb-theme-cosmic .ql-editor .ql-indent-9:not(.ql-direction-rtl){padding-left:27em}.nb-theme-cosmic .ql-editor li.ql-indent-9:not(.ql-direction-rtl){padding-left:28.5em}.nb-theme-cosmic .ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:27em}.nb-theme-cosmic .ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:28.5em}.nb-theme-cosmic .ql-editor .ql-video{display:block;max-width:100%}.nb-theme-cosmic .ql-editor .ql-video.ql-align-center{margin:0 auto}.nb-theme-cosmic .ql-editor .ql-video.ql-align-right{margin:0 0 0 auto}.nb-theme-cosmic .ql-editor .ql-bg-black{background-color:#000}.nb-theme-cosmic .ql-editor .ql-bg-red{background-color:#e60000}.nb-theme-cosmic .ql-editor .ql-bg-orange{background-color:#f90}.nb-theme-cosmic .ql-editor .ql-bg-yellow{background-color:#ff0}.nb-theme-cosmic .ql-editor .ql-bg-green{background-color:#008a00}.nb-theme-cosmic .ql-editor .ql-bg-blue{background-color:#06c}.nb-theme-cosmic .ql-editor .ql-bg-purple{background-color:#93f}.nb-theme-cosmic .ql-editor .ql-color-white{color:#fff}.nb-theme-cosmic .ql-editor .ql-color-red{color:#e60000}.nb-theme-cosmic .ql-editor .ql-color-orange{color:#f90}.nb-theme-cosmic .ql-editor .ql-color-yellow{color:#ff0}.nb-theme-cosmic .ql-editor .ql-color-green{color:#008a00}.nb-theme-cosmic .ql-editor .ql-color-blue{color:#06c}.nb-theme-cosmic .ql-editor .ql-color-purple{color:#93f}.nb-theme-cosmic .ql-editor .ql-font-serif{font-family:Georgia,Times New Roman,serif}.nb-theme-cosmic .ql-editor .ql-font-monospace{font-family:Monaco,Courier New,monospace}.nb-theme-cosmic .ql-editor .ql-size-small{font-size:.75em}.nb-theme-cosmic .ql-editor .ql-size-large{font-size:1.5em}.nb-theme-cosmic .ql-editor .ql-size-huge{font-size:2.5em}.nb-theme-cosmic .ql-editor .ql-direction-rtl{direction:rtl;text-align:inherit}.nb-theme-cosmic .ql-editor .ql-align-center{text-align:center}.nb-theme-cosmic .ql-editor .ql-align-justify{text-align:justify}.nb-theme-cosmic .ql-editor .ql-align-right{text-align:right}.nb-theme-cosmic .ql-editor.ql-blank:before{content:attr(data-placeholder);color:#8f9bb3;font-family:Open Sans,sans-serif;text-overflow:ellipsis;font-size:.9375rem;font-weight:400;line-height:1.25rem;font-style:normal;left:15px;pointer-events:none;position:absolute;right:15px}.nb-theme-cosmic .ql-snow.ql-toolbar:after,.nb-theme-cosmic .ql-snow .ql-toolbar:after{clear:both;content:\"\";display:table}.nb-theme-cosmic .ql-snow.ql-toolbar button,.nb-theme-cosmic .ql-snow .ql-toolbar button{background:none;border:none;cursor:pointer;display:inline-block;float:left;height:24px;padding:3px 5px;width:28px}.nb-theme-cosmic .ql-snow.ql-toolbar button svg,.nb-theme-cosmic .ql-snow .ql-toolbar button svg{float:left;height:100%}.nb-theme-cosmic .ql-snow.ql-toolbar button:active:hover,.nb-theme-cosmic .ql-snow .ql-toolbar button:active:hover{outline:none}.nb-theme-cosmic .ql-snow.ql-toolbar input.ql-image[type=file],.nb-theme-cosmic .ql-snow .ql-toolbar input.ql-image[type=file]{display:none}.nb-theme-cosmic .ql-snow.ql-toolbar button:hover,.nb-theme-cosmic .ql-snow .ql-toolbar button:hover,.nb-theme-cosmic .ql-snow.ql-toolbar button:focus,.nb-theme-cosmic .ql-snow .ql-toolbar button:focus,.nb-theme-cosmic .ql-snow.ql-toolbar button.ql-active,.nb-theme-cosmic .ql-snow .ql-toolbar button.ql-active,.nb-theme-cosmic .ql-snow.ql-toolbar .ql-picker-label:hover,.nb-theme-cosmic .ql-snow .ql-toolbar .ql-picker-label:hover,.nb-theme-cosmic .ql-snow.ql-toolbar .ql-picker-label.ql-active,.nb-theme-cosmic .ql-snow .ql-toolbar .ql-picker-label.ql-active,.nb-theme-cosmic .ql-snow.ql-toolbar .ql-picker-item:hover,.nb-theme-cosmic .ql-snow .ql-toolbar .ql-picker-item:hover,.nb-theme-cosmic .ql-snow.ql-toolbar .ql-picker-item.ql-selected,.nb-theme-cosmic .ql-snow .ql-toolbar .ql-picker-item.ql-selected{color:#06c;outline:1px solid #13132b;background-color:#1b1b38}.nb-theme-cosmic .ql-snow.ql-toolbar button:hover .ql-fill,.nb-theme-cosmic .ql-snow .ql-toolbar button:hover .ql-fill,.nb-theme-cosmic .ql-snow.ql-toolbar button:focus .ql-fill,.nb-theme-cosmic .ql-snow .ql-toolbar button:focus .ql-fill,.nb-theme-cosmic .ql-snow.ql-toolbar button.ql-active .ql-fill,.nb-theme-cosmic .ql-snow .ql-toolbar button.ql-active .ql-fill,.nb-theme-cosmic .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,.nb-theme-cosmic .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,.nb-theme-cosmic .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,.nb-theme-cosmic .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,.nb-theme-cosmic .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,.nb-theme-cosmic .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,.nb-theme-cosmic .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,.nb-theme-cosmic .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,.nb-theme-cosmic .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,.nb-theme-cosmic .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,.nb-theme-cosmic .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,.nb-theme-cosmic .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,.nb-theme-cosmic .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,.nb-theme-cosmic .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,.nb-theme-cosmic .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.nb-theme-cosmic .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.nb-theme-cosmic .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.nb-theme-cosmic .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.nb-theme-cosmic .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.nb-theme-cosmic .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.nb-theme-cosmic .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.nb-theme-cosmic .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill{fill:#06c}.nb-theme-cosmic .ql-snow.ql-toolbar button:hover .ql-stroke,.nb-theme-cosmic .ql-snow .ql-toolbar button:hover .ql-stroke,.nb-theme-cosmic .ql-snow.ql-toolbar button:focus .ql-stroke,.nb-theme-cosmic .ql-snow .ql-toolbar button:focus .ql-stroke,.nb-theme-cosmic .ql-snow.ql-toolbar button.ql-active .ql-stroke,.nb-theme-cosmic .ql-snow .ql-toolbar button.ql-active .ql-stroke,.nb-theme-cosmic .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,.nb-theme-cosmic .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,.nb-theme-cosmic .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,.nb-theme-cosmic .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,.nb-theme-cosmic .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,.nb-theme-cosmic .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,.nb-theme-cosmic .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.nb-theme-cosmic .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.nb-theme-cosmic .ql-snow.ql-toolbar button:hover .ql-stroke-miter,.nb-theme-cosmic .ql-snow .ql-toolbar button:hover .ql-stroke-miter,.nb-theme-cosmic .ql-snow.ql-toolbar button:focus .ql-stroke-miter,.nb-theme-cosmic .ql-snow .ql-toolbar button:focus .ql-stroke-miter,.nb-theme-cosmic .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,.nb-theme-cosmic .ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,.nb-theme-cosmic .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.nb-theme-cosmic .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.nb-theme-cosmic .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.nb-theme-cosmic .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.nb-theme-cosmic .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.nb-theme-cosmic .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.nb-theme-cosmic .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.nb-theme-cosmic .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter{stroke:#06c}@media (pointer: coarse){.nb-theme-cosmic .ql-snow.ql-toolbar button:hover:not(.ql-active),.nb-theme-cosmic .ql-snow .ql-toolbar button:hover:not(.ql-active){color:#fff}.nb-theme-cosmic .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,.nb-theme-cosmic .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,.nb-theme-cosmic .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,.nb-theme-cosmic .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill{fill:#fff}.nb-theme-cosmic .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,.nb-theme-cosmic .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,.nb-theme-cosmic .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,.nb-theme-cosmic .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter{stroke:#fff}}.nb-theme-cosmic .ql-snow{box-sizing:border-box}.nb-theme-cosmic .ql-snow *{box-sizing:border-box}.nb-theme-cosmic .ql-snow .ql-hidden{display:none}.nb-theme-cosmic .ql-snow .ql-out-bottom,.nb-theme-cosmic .ql-snow .ql-out-top{visibility:hidden}.nb-theme-cosmic .ql-snow .ql-tooltip{position:absolute;transform:translateY(10px)}.nb-theme-cosmic .ql-snow .ql-tooltip a{cursor:pointer;text-decoration:none}.nb-theme-cosmic .ql-snow .ql-tooltip.ql-flip{transform:translateY(-10px)}.nb-theme-cosmic .ql-snow .ql-formats{display:inline-block;vertical-align:middle}.nb-theme-cosmic .ql-snow .ql-formats:after{clear:both;content:\"\";display:table}.nb-theme-cosmic .ql-snow .ql-stroke{fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.nb-theme-cosmic .ql-snow .ql-stroke-miter{fill:none;stroke:#fff;stroke-miterlimit:10;stroke-width:2}.nb-theme-cosmic .ql-snow .ql-fill,.nb-theme-cosmic .ql-snow .ql-stroke.ql-fill{fill:#fff}.nb-theme-cosmic .ql-snow .ql-empty{fill:none}.nb-theme-cosmic .ql-snow .ql-even{fill-rule:evenodd}.nb-theme-cosmic .ql-snow .ql-thin,.nb-theme-cosmic .ql-snow .ql-stroke.ql-thin{stroke-width:1}.nb-theme-cosmic .ql-snow .ql-transparent{opacity:.4}.nb-theme-cosmic .ql-snow .ql-direction svg:last-child{display:none}.nb-theme-cosmic .ql-snow .ql-direction.ql-active svg:last-child{display:inline}.nb-theme-cosmic .ql-snow .ql-direction.ql-active svg:first-child{display:none}.nb-theme-cosmic .ql-snow .ql-editor h1{font-size:2em}.nb-theme-cosmic .ql-snow .ql-editor h2{font-size:1.5em}.nb-theme-cosmic .ql-snow .ql-editor h3{font-size:1.17em}.nb-theme-cosmic .ql-snow .ql-editor h4{font-size:1em}.nb-theme-cosmic .ql-snow .ql-editor h5{font-size:.83em}.nb-theme-cosmic .ql-snow .ql-editor h6{font-size:.67em}.nb-theme-cosmic .ql-snow .ql-editor a{text-decoration:underline}.nb-theme-cosmic .ql-snow .ql-editor blockquote{border-left:4px solid #13132b;margin-bottom:5px;margin-top:5px;padding-left:16px}.nb-theme-cosmic .ql-snow .ql-editor code,.nb-theme-cosmic .ql-snow .ql-editor pre{background-color:#f0f0f0;border-radius:3px}.nb-theme-cosmic .ql-snow .ql-editor pre{white-space:pre-wrap;margin-bottom:5px;margin-top:5px;padding:5px 10px}.nb-theme-cosmic .ql-snow .ql-editor code{font-size:85%;padding:2px 4px}.nb-theme-cosmic .ql-snow .ql-editor pre.ql-syntax{background-color:#23241f;color:#f8f8f2;overflow:visible}.nb-theme-cosmic .ql-snow .ql-editor img{max-width:100%}.nb-theme-cosmic .ql-snow .ql-picker{color:#fff;display:inline-block;float:left;font-size:14px;font-weight:500;height:24px;position:relative;vertical-align:middle}.nb-theme-cosmic .ql-snow .ql-picker-label{cursor:pointer;display:inline-block;height:100%;padding-left:8px;padding-right:2px;position:relative;width:100%}.nb-theme-cosmic .ql-snow .ql-picker-label:before{display:inline-block;line-height:22px}.nb-theme-cosmic .ql-snow .ql-picker-options{background-color:#fff;display:none;min-width:100%;padding:4px 8px;position:absolute;white-space:nowrap}.nb-theme-cosmic .ql-snow .ql-picker-options .ql-picker-item{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px}.nb-theme-cosmic .ql-snow .ql-picker.ql-expanded .ql-picker-label{color:#13132b;z-index:2}.nb-theme-cosmic .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill{fill:#13132b}.nb-theme-cosmic .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke{stroke:#13132b}.nb-theme-cosmic .ql-snow .ql-picker.ql-expanded .ql-picker-options{display:block;margin-top:-1px;top:100%;z-index:1}.nb-theme-cosmic .ql-snow .ql-color-picker,.nb-theme-cosmic .ql-snow .ql-icon-picker{width:28px}.nb-theme-cosmic .ql-snow .ql-color-picker .ql-picker-label,.nb-theme-cosmic .ql-snow .ql-icon-picker .ql-picker-label{padding:2px 4px}.nb-theme-cosmic .ql-snow .ql-color-picker .ql-picker-label svg,.nb-theme-cosmic .ql-snow .ql-icon-picker .ql-picker-label svg{right:4px}.nb-theme-cosmic .ql-snow .ql-icon-picker .ql-picker-options{padding:4px 0}.nb-theme-cosmic .ql-snow .ql-icon-picker .ql-picker-item{height:24px;width:24px;padding:2px 4px}.nb-theme-cosmic .ql-snow .ql-color-picker .ql-picker-options{padding:3px 5px;width:152px}.nb-theme-cosmic .ql-snow .ql-color-picker .ql-picker-item{border:1px solid transparent;float:left;height:16px;margin:2px;padding:0;width:16px}.nb-theme-cosmic .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg{position:absolute;margin-top:-9px;right:0;top:50%;width:18px}.nb-theme-cosmic .ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=\"\"]):before,.nb-theme-cosmic .ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=\"\"]):before,.nb-theme-cosmic .ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=\"\"]):before,.nb-theme-cosmic .ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=\"\"]):before,.nb-theme-cosmic .ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=\"\"]):before,.nb-theme-cosmic .ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=\"\"]):before{content:attr(data-label)}.nb-theme-cosmic .ql-snow .ql-picker.ql-header{width:98px}.nb-theme-cosmic .ql-snow .ql-picker.ql-header .ql-picker-label:before,.nb-theme-cosmic .ql-snow .ql-picker.ql-header .ql-picker-item:before{content:\"Normal\"}.nb-theme-cosmic .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]:before,.nb-theme-cosmic .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]:before{content:\"Heading 1\"}.nb-theme-cosmic .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]:before,.nb-theme-cosmic .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]:before{content:\"Heading 2\"}.nb-theme-cosmic .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]:before,.nb-theme-cosmic .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]:before{content:\"Heading 3\"}.nb-theme-cosmic .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]:before,.nb-theme-cosmic .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]:before{content:\"Heading 4\"}.nb-theme-cosmic .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]:before,.nb-theme-cosmic .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]:before{content:\"Heading 5\"}.nb-theme-cosmic .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]:before,.nb-theme-cosmic .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]:before{content:\"Heading 6\"}.nb-theme-cosmic .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]:before{font-size:2em}.nb-theme-cosmic .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]:before{font-size:1.5em}.nb-theme-cosmic .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]:before{font-size:1.17em}.nb-theme-cosmic .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]:before{font-size:1em}.nb-theme-cosmic .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]:before{font-size:.83em}.nb-theme-cosmic .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]:before{font-size:.67em}.nb-theme-cosmic .ql-snow .ql-picker.ql-font{width:108px}.nb-theme-cosmic .ql-snow .ql-picker.ql-font .ql-picker-label:before,.nb-theme-cosmic .ql-snow .ql-picker.ql-font .ql-picker-item:before{content:\"Sans Serif\"}.nb-theme-cosmic .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]:before,.nb-theme-cosmic .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]:before{content:\"Serif\"}.nb-theme-cosmic .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]:before,.nb-theme-cosmic .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]:before{content:\"Monospace\"}.nb-theme-cosmic .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]:before{font-family:Georgia,Times New Roman,serif}.nb-theme-cosmic .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]:before{font-family:Monaco,Courier New,monospace}.nb-theme-cosmic .ql-snow .ql-picker.ql-size{width:98px}.nb-theme-cosmic .ql-snow .ql-picker.ql-size .ql-picker-label:before,.nb-theme-cosmic .ql-snow .ql-picker.ql-size .ql-picker-item:before{content:\"Normal\"}.nb-theme-cosmic .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]:before,.nb-theme-cosmic .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]:before{content:\"Small\"}.nb-theme-cosmic .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]:before,.nb-theme-cosmic .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]:before{content:\"Large\"}.nb-theme-cosmic .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]:before,.nb-theme-cosmic .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]:before{content:\"Huge\"}.nb-theme-cosmic .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]:before{font-size:10px}.nb-theme-cosmic .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]:before{font-size:18px}.nb-theme-cosmic .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]:before{font-size:32px}.nb-theme-cosmic .ql-snow .ql-color-picker.ql-background .ql-picker-item{background-color:#fff}.nb-theme-cosmic .ql-snow .ql-color-picker.ql-color .ql-picker-item{background-color:#000}.nb-theme-cosmic .ql-toolbar.ql-snow{border:1px solid #13132b;border-top-right-radius:.25rem;border-top-left-radius:.25rem;box-sizing:border-box;font-family:\"Helvetica Neue\",\"Helvetica\",\"Arial\",sans-serif;padding:8px}.nb-theme-cosmic .ql-toolbar.ql-snow .ql-formats{margin-right:15px}.nb-theme-cosmic .ql-toolbar.ql-snow .ql-picker-label{border:1px solid transparent}.nb-theme-cosmic .ql-toolbar.ql-snow .ql-picker-options{border:1px solid transparent;box-shadow:#0003 0 2px 8px}.nb-theme-cosmic .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label{border-color:#13132b}.nb-theme-cosmic .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options{border-color:#13132b}.nb-theme-cosmic .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,.nb-theme-cosmic .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover{border-color:#000}.nb-theme-cosmic .ql-toolbar.ql-snow+.ql-container.ql-snow{border-top:0px}.nb-theme-cosmic .ql-snow .ql-tooltip{background-color:#fff;border:1px solid #13132b;box-shadow:0 0 5px #ddd;color:#fff;padding:5px 12px;white-space:nowrap}.nb-theme-cosmic .ql-snow .ql-tooltip:before{content:\"Visit URL:\";line-height:26px;margin-right:8px}.nb-theme-cosmic .ql-snow .ql-tooltip input[type=text]{display:none;border:1px solid #13132b;font-size:13px;height:26px;margin:0;padding:3px 5px;width:170px}.nb-theme-cosmic .ql-snow .ql-tooltip a.ql-preview{display:inline-block;max-width:200px;overflow-x:hidden;text-overflow:ellipsis;vertical-align:top}.nb-theme-cosmic .ql-snow .ql-tooltip a.ql-action:after{border-right:1px solid #13132b;content:\"Edit\";margin-left:16px;padding-right:8px}.nb-theme-cosmic .ql-snow .ql-tooltip a.ql-remove:before{content:\"Remove\";margin-left:8px}.nb-theme-cosmic .ql-snow .ql-tooltip a{line-height:26px}.nb-theme-cosmic .ql-snow .ql-tooltip.ql-editing a.ql-preview,.nb-theme-cosmic .ql-snow .ql-tooltip.ql-editing a.ql-remove{display:none}.nb-theme-cosmic .ql-snow .ql-tooltip.ql-editing input[type=text]{display:inline-block}.nb-theme-cosmic .ql-snow .ql-tooltip.ql-editing a.ql-action:after{border-right:0px;content:\"Save\";padding-right:0}.nb-theme-cosmic .ql-snow .ql-tooltip[data-mode=link]:before{content:\"Enter link:\"}.nb-theme-cosmic .ql-snow .ql-tooltip[data-mode=formula]:before{content:\"Enter formula:\"}.nb-theme-cosmic .ql-snow .ql-tooltip[data-mode=video]:before{content:\"Enter video:\"}.nb-theme-cosmic .ql-snow a{color:#06c}.nb-theme-cosmic .ql-container.ql-snow{border:1px solid #13132b;border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.nb-theme-cosmic .hasErrors .ql-toolbar.ql-snow{color:#ff3d71!important;border-top:1px solid #ff3d71!important;border-left:1px solid #ff3d71!important;border-right:1px solid #ff3d71!important;border-bottom:0px!important}.nb-theme-cosmic .hasErrors .ql-container.ql-snow{border-top:1px solid #ff3d71!important;border-left:1px solid #ff3d71!important;border-right:1px solid #ff3d71!important;border-bottom:1px solid #ff3d71!important}.nb-theme-corporate quill-editor[disabled=disabled] .ql-toolbar .ql-stroke{stroke:#e4e9f2;cursor:no-drop!important}.nb-theme-corporate quill-editor[disabled=disabled] .ql-toolbar .ql-stroke-miter{stroke:#e4e9f2;cursor:no-drop!important}.nb-theme-corporate quill-editor[disabled=disabled] .ql-toolbar .ql-fill,.nb-theme-corporate quill-editor[disabled=disabled] .ql-toolbar .ql-stroke.ql-fill{fill:#e4e9f2;cursor:no-drop!important}.nb-theme-corporate quill-editor[disabled=disabled] .ql-toolbar .ql-picker{color:#e4e9f2;cursor:no-drop!important}.nb-theme-corporate .ql-container{box-sizing:border-box;font-family:Helvetica,Arial,sans-serif;font-size:13px;height:100%;margin:0;position:relative;background-color:#edf1f7}.nb-theme-corporate .ql-container.ql-disabled .ql-tooltip{visibility:hidden}.nb-theme-corporate .ql-container.ql-disabled .ql-editor ul[data-checked]>li:before{pointer-events:none}.nb-theme-corporate .ql-clipboard{left:-100000px;height:1px;overflow-y:hidden;position:absolute;top:50%}.nb-theme-corporate .ql-clipboard p{margin:0;padding:0}.nb-theme-corporate .ql-editor{box-sizing:border-box;line-height:1.42;height:100%;outline:none;overflow-y:auto;padding:12px 15px;tab-size:4;-moz-tab-size:4;text-align:left;white-space:pre-wrap;word-wrap:break-word}.nb-theme-corporate .ql-editor>*{cursor:text}.nb-theme-corporate .ql-editor p,.nb-theme-corporate .ql-editor ol,.nb-theme-corporate .ql-editor ul,.nb-theme-corporate .ql-editor pre,.nb-theme-corporate .ql-editor blockquote,.nb-theme-corporate .ql-editor h1,.nb-theme-corporate .ql-editor h2,.nb-theme-corporate .ql-editor h3,.nb-theme-corporate .ql-editor h4,.nb-theme-corporate .ql-editor h5,.nb-theme-corporate .ql-editor h6{margin:0;padding:0;counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.nb-theme-corporate .ql-editor ol,.nb-theme-corporate .ql-editor ul{padding-left:1.5em}.nb-theme-corporate .ql-editor ol>li,.nb-theme-corporate .ql-editor ul>li{list-style-type:none}.nb-theme-corporate .ql-editor ul>li:before{content:\"\\2022\"}.nb-theme-corporate .ql-editor ul[data-checked=true],.nb-theme-corporate .ql-editor ul[data-checked=false]{pointer-events:none}.nb-theme-corporate .ql-editor ul[data-checked=true]>li *,.nb-theme-corporate .ql-editor ul[data-checked=false]>li *{pointer-events:all}.nb-theme-corporate .ql-editor ul[data-checked=true]>li:before,.nb-theme-corporate .ql-editor ul[data-checked=false]>li:before{color:#777;cursor:pointer;pointer-events:all}.nb-theme-corporate .ql-editor ul[data-checked=true]>li:before{content:\"\\2611\"}.nb-theme-corporate .ql-editor ul[data-checked=false]>li:before{content:\"\\2610\"}.nb-theme-corporate .ql-editor li:before{display:inline-block;white-space:nowrap;width:1.2em}.nb-theme-corporate .ql-editor li:not(.ql-direction-rtl):before{margin-left:-1.5em;margin-right:.3em;text-align:right}.nb-theme-corporate .ql-editor li.ql-direction-rtl:before{margin-left:.3em;margin-right:-1.5em}.nb-theme-corporate .ql-editor ol li:not(.ql-direction-rtl),.nb-theme-corporate .ql-editor ul li:not(.ql-direction-rtl){padding-left:1.5em}.nb-theme-corporate .ql-editor ol li.ql-direction-rtl,.nb-theme-corporate .ql-editor ul li.ql-direction-rtl{padding-right:1.5em}.nb-theme-corporate .ql-editor ol li{counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;counter-increment:list-0}.nb-theme-corporate .ql-editor ol li:before{content:counter(list-0,decimal) \". \"}.nb-theme-corporate .ql-editor ol li.ql-indent-1{counter-increment:list-1}.nb-theme-corporate .ql-editor ol li.ql-indent-1:before{content:counter(list-1,lower-alpha) \". \"}.nb-theme-corporate .ql-editor ol li.ql-indent-1{counter-reset:list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.nb-theme-corporate .ql-editor ol li.ql-indent-2{counter-increment:list-2}.nb-theme-corporate .ql-editor ol li.ql-indent-2:before{content:counter(list-2,lower-roman) \". \"}.nb-theme-corporate .ql-editor ol li.ql-indent-2{counter-reset:list-3 list-4 list-5 list-6 list-7 list-8 list-9}.nb-theme-corporate .ql-editor ol li.ql-indent-3{counter-increment:list-3}.nb-theme-corporate .ql-editor ol li.ql-indent-3:before{content:counter(list-3,decimal) \". \"}.nb-theme-corporate .ql-editor ol li.ql-indent-3{counter-reset:list-4 list-5 list-6 list-7 list-8 list-9}.nb-theme-corporate .ql-editor ol li.ql-indent-4{counter-increment:list-4}.nb-theme-corporate .ql-editor ol li.ql-indent-4:before{content:counter(list-4,lower-alpha) \". \"}.nb-theme-corporate .ql-editor ol li.ql-indent-4{counter-reset:list-5 list-6 list-7 list-8 list-9}.nb-theme-corporate .ql-editor ol li.ql-indent-5{counter-increment:list-5}.nb-theme-corporate .ql-editor ol li.ql-indent-5:before{content:counter(list-5,lower-roman) \". \"}.nb-theme-corporate .ql-editor ol li.ql-indent-5{counter-reset:list-6 list-7 list-8 list-9}.nb-theme-corporate .ql-editor ol li.ql-indent-6{counter-increment:list-6}.nb-theme-corporate .ql-editor ol li.ql-indent-6:before{content:counter(list-6,decimal) \". \"}.nb-theme-corporate .ql-editor ol li.ql-indent-6{counter-reset:list-7 list-8 list-9}.nb-theme-corporate .ql-editor ol li.ql-indent-7{counter-increment:list-7}.nb-theme-corporate .ql-editor ol li.ql-indent-7:before{content:counter(list-7,lower-alpha) \". \"}.nb-theme-corporate .ql-editor ol li.ql-indent-7{counter-reset:list-8 list-9}.nb-theme-corporate .ql-editor ol li.ql-indent-8{counter-increment:list-8}.nb-theme-corporate .ql-editor ol li.ql-indent-8:before{content:counter(list-8,lower-roman) \". \"}.nb-theme-corporate .ql-editor ol li.ql-indent-8{counter-reset:list-9}.nb-theme-corporate .ql-editor ol li.ql-indent-9{counter-increment:list-9}.nb-theme-corporate .ql-editor ol li.ql-indent-9:before{content:counter(list-9,decimal) \". \"}.nb-theme-corporate .ql-editor .ql-indent-1:not(.ql-direction-rtl){padding-left:3em}.nb-theme-corporate .ql-editor li.ql-indent-1:not(.ql-direction-rtl){padding-left:4.5em}.nb-theme-corporate .ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:3em}.nb-theme-corporate .ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:4.5em}.nb-theme-corporate .ql-editor .ql-indent-2:not(.ql-direction-rtl){padding-left:6em}.nb-theme-corporate .ql-editor li.ql-indent-2:not(.ql-direction-rtl){padding-left:7.5em}.nb-theme-corporate .ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:6em}.nb-theme-corporate .ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:7.5em}.nb-theme-corporate .ql-editor .ql-indent-3:not(.ql-direction-rtl){padding-left:9em}.nb-theme-corporate .ql-editor li.ql-indent-3:not(.ql-direction-rtl){padding-left:10.5em}.nb-theme-corporate .ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:9em}.nb-theme-corporate .ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:10.5em}.nb-theme-corporate .ql-editor .ql-indent-4:not(.ql-direction-rtl){padding-left:12em}.nb-theme-corporate .ql-editor li.ql-indent-4:not(.ql-direction-rtl){padding-left:13.5em}.nb-theme-corporate .ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:12em}.nb-theme-corporate .ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:13.5em}.nb-theme-corporate .ql-editor .ql-indent-5:not(.ql-direction-rtl){padding-left:15em}.nb-theme-corporate .ql-editor li.ql-indent-5:not(.ql-direction-rtl){padding-left:16.5em}.nb-theme-corporate .ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:15em}.nb-theme-corporate .ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:16.5em}.nb-theme-corporate .ql-editor .ql-indent-6:not(.ql-direction-rtl){padding-left:18em}.nb-theme-corporate .ql-editor li.ql-indent-6:not(.ql-direction-rtl){padding-left:19.5em}.nb-theme-corporate .ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:18em}.nb-theme-corporate .ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:19.5em}.nb-theme-corporate .ql-editor .ql-indent-7:not(.ql-direction-rtl){padding-left:21em}.nb-theme-corporate .ql-editor li.ql-indent-7:not(.ql-direction-rtl){padding-left:22.5em}.nb-theme-corporate .ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:21em}.nb-theme-corporate .ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:22.5em}.nb-theme-corporate .ql-editor .ql-indent-8:not(.ql-direction-rtl){padding-left:24em}.nb-theme-corporate .ql-editor li.ql-indent-8:not(.ql-direction-rtl){padding-left:25.5em}.nb-theme-corporate .ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:24em}.nb-theme-corporate .ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:25.5em}.nb-theme-corporate .ql-editor .ql-indent-9:not(.ql-direction-rtl){padding-left:27em}.nb-theme-corporate .ql-editor li.ql-indent-9:not(.ql-direction-rtl){padding-left:28.5em}.nb-theme-corporate .ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:27em}.nb-theme-corporate .ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:28.5em}.nb-theme-corporate .ql-editor .ql-video{display:block;max-width:100%}.nb-theme-corporate .ql-editor .ql-video.ql-align-center{margin:0 auto}.nb-theme-corporate .ql-editor .ql-video.ql-align-right{margin:0 0 0 auto}.nb-theme-corporate .ql-editor .ql-bg-black{background-color:#000}.nb-theme-corporate .ql-editor .ql-bg-red{background-color:#e60000}.nb-theme-corporate .ql-editor .ql-bg-orange{background-color:#f90}.nb-theme-corporate .ql-editor .ql-bg-yellow{background-color:#ff0}.nb-theme-corporate .ql-editor .ql-bg-green{background-color:#008a00}.nb-theme-corporate .ql-editor .ql-bg-blue{background-color:#06c}.nb-theme-corporate .ql-editor .ql-bg-purple{background-color:#93f}.nb-theme-corporate .ql-editor .ql-color-white{color:#fff}.nb-theme-corporate .ql-editor .ql-color-red{color:#e60000}.nb-theme-corporate .ql-editor .ql-color-orange{color:#f90}.nb-theme-corporate .ql-editor .ql-color-yellow{color:#ff0}.nb-theme-corporate .ql-editor .ql-color-green{color:#008a00}.nb-theme-corporate .ql-editor .ql-color-blue{color:#06c}.nb-theme-corporate .ql-editor .ql-color-purple{color:#93f}.nb-theme-corporate .ql-editor .ql-font-serif{font-family:Georgia,Times New Roman,serif}.nb-theme-corporate .ql-editor .ql-font-monospace{font-family:Monaco,Courier New,monospace}.nb-theme-corporate .ql-editor .ql-size-small{font-size:.75em}.nb-theme-corporate .ql-editor .ql-size-large{font-size:1.5em}.nb-theme-corporate .ql-editor .ql-size-huge{font-size:2.5em}.nb-theme-corporate .ql-editor .ql-direction-rtl{direction:rtl;text-align:inherit}.nb-theme-corporate .ql-editor .ql-align-center{text-align:center}.nb-theme-corporate .ql-editor .ql-align-justify{text-align:justify}.nb-theme-corporate .ql-editor .ql-align-right{text-align:right}.nb-theme-corporate .ql-editor.ql-blank:before{content:attr(data-placeholder);color:#8f9bb3;font-family:Open Sans,sans-serif;text-overflow:ellipsis;font-size:.9375rem;font-weight:400;line-height:1.25rem;font-style:normal;left:15px;pointer-events:none;position:absolute;right:15px}.nb-theme-corporate .ql-snow.ql-toolbar:after,.nb-theme-corporate .ql-snow .ql-toolbar:after{clear:both;content:\"\";display:table}.nb-theme-corporate .ql-snow.ql-toolbar button,.nb-theme-corporate .ql-snow .ql-toolbar button{background:none;border:none;cursor:pointer;display:inline-block;float:left;height:24px;padding:3px 5px;width:28px}.nb-theme-corporate .ql-snow.ql-toolbar button svg,.nb-theme-corporate .ql-snow .ql-toolbar button svg{float:left;height:100%}.nb-theme-corporate .ql-snow.ql-toolbar button:active:hover,.nb-theme-corporate .ql-snow .ql-toolbar button:active:hover{outline:none}.nb-theme-corporate .ql-snow.ql-toolbar input.ql-image[type=file],.nb-theme-corporate .ql-snow .ql-toolbar input.ql-image[type=file]{display:none}.nb-theme-corporate .ql-snow.ql-toolbar button:hover,.nb-theme-corporate .ql-snow .ql-toolbar button:hover,.nb-theme-corporate .ql-snow.ql-toolbar button:focus,.nb-theme-corporate .ql-snow .ql-toolbar button:focus,.nb-theme-corporate .ql-snow.ql-toolbar button.ql-active,.nb-theme-corporate .ql-snow .ql-toolbar button.ql-active,.nb-theme-corporate .ql-snow.ql-toolbar .ql-picker-label:hover,.nb-theme-corporate .ql-snow .ql-toolbar .ql-picker-label:hover,.nb-theme-corporate .ql-snow.ql-toolbar .ql-picker-label.ql-active,.nb-theme-corporate .ql-snow .ql-toolbar .ql-picker-label.ql-active,.nb-theme-corporate .ql-snow.ql-toolbar .ql-picker-item:hover,.nb-theme-corporate .ql-snow .ql-toolbar .ql-picker-item:hover,.nb-theme-corporate .ql-snow.ql-toolbar .ql-picker-item.ql-selected,.nb-theme-corporate .ql-snow .ql-toolbar .ql-picker-item.ql-selected{color:#06c;outline:1px solid #e4e9f2;background-color:#edf1f7}.nb-theme-corporate .ql-snow.ql-toolbar button:hover .ql-fill,.nb-theme-corporate .ql-snow .ql-toolbar button:hover .ql-fill,.nb-theme-corporate .ql-snow.ql-toolbar button:focus .ql-fill,.nb-theme-corporate .ql-snow .ql-toolbar button:focus .ql-fill,.nb-theme-corporate .ql-snow.ql-toolbar button.ql-active .ql-fill,.nb-theme-corporate .ql-snow .ql-toolbar button.ql-active .ql-fill,.nb-theme-corporate .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,.nb-theme-corporate .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,.nb-theme-corporate .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,.nb-theme-corporate .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,.nb-theme-corporate .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,.nb-theme-corporate .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,.nb-theme-corporate .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,.nb-theme-corporate .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,.nb-theme-corporate .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,.nb-theme-corporate .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,.nb-theme-corporate .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,.nb-theme-corporate .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,.nb-theme-corporate .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,.nb-theme-corporate .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,.nb-theme-corporate .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.nb-theme-corporate .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.nb-theme-corporate .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.nb-theme-corporate .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.nb-theme-corporate .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.nb-theme-corporate .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.nb-theme-corporate .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.nb-theme-corporate .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill{fill:#06c}.nb-theme-corporate .ql-snow.ql-toolbar button:hover .ql-stroke,.nb-theme-corporate .ql-snow .ql-toolbar button:hover .ql-stroke,.nb-theme-corporate .ql-snow.ql-toolbar button:focus .ql-stroke,.nb-theme-corporate .ql-snow .ql-toolbar button:focus .ql-stroke,.nb-theme-corporate .ql-snow.ql-toolbar button.ql-active .ql-stroke,.nb-theme-corporate .ql-snow .ql-toolbar button.ql-active .ql-stroke,.nb-theme-corporate .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,.nb-theme-corporate .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,.nb-theme-corporate .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,.nb-theme-corporate .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,.nb-theme-corporate .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,.nb-theme-corporate .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,.nb-theme-corporate .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.nb-theme-corporate .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.nb-theme-corporate .ql-snow.ql-toolbar button:hover .ql-stroke-miter,.nb-theme-corporate .ql-snow .ql-toolbar button:hover .ql-stroke-miter,.nb-theme-corporate .ql-snow.ql-toolbar button:focus .ql-stroke-miter,.nb-theme-corporate .ql-snow .ql-toolbar button:focus .ql-stroke-miter,.nb-theme-corporate .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,.nb-theme-corporate .ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,.nb-theme-corporate .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.nb-theme-corporate .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.nb-theme-corporate .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.nb-theme-corporate .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.nb-theme-corporate .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.nb-theme-corporate .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.nb-theme-corporate .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.nb-theme-corporate .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter{stroke:#06c}@media (pointer: coarse){.nb-theme-corporate .ql-snow.ql-toolbar button:hover:not(.ql-active),.nb-theme-corporate .ql-snow .ql-toolbar button:hover:not(.ql-active){color:#222b45}.nb-theme-corporate .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,.nb-theme-corporate .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,.nb-theme-corporate .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,.nb-theme-corporate .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill{fill:#222b45}.nb-theme-corporate .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,.nb-theme-corporate .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,.nb-theme-corporate .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,.nb-theme-corporate .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter{stroke:#222b45}}.nb-theme-corporate .ql-snow{box-sizing:border-box}.nb-theme-corporate .ql-snow *{box-sizing:border-box}.nb-theme-corporate .ql-snow .ql-hidden{display:none}.nb-theme-corporate .ql-snow .ql-out-bottom,.nb-theme-corporate .ql-snow .ql-out-top{visibility:hidden}.nb-theme-corporate .ql-snow .ql-tooltip{position:absolute;transform:translateY(10px)}.nb-theme-corporate .ql-snow .ql-tooltip a{cursor:pointer;text-decoration:none}.nb-theme-corporate .ql-snow .ql-tooltip.ql-flip{transform:translateY(-10px)}.nb-theme-corporate .ql-snow .ql-formats{display:inline-block;vertical-align:middle}.nb-theme-corporate .ql-snow .ql-formats:after{clear:both;content:\"\";display:table}.nb-theme-corporate .ql-snow .ql-stroke{fill:none;stroke:#222b45;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.nb-theme-corporate .ql-snow .ql-stroke-miter{fill:none;stroke:#222b45;stroke-miterlimit:10;stroke-width:2}.nb-theme-corporate .ql-snow .ql-fill,.nb-theme-corporate .ql-snow .ql-stroke.ql-fill{fill:#222b45}.nb-theme-corporate .ql-snow .ql-empty{fill:none}.nb-theme-corporate .ql-snow .ql-even{fill-rule:evenodd}.nb-theme-corporate .ql-snow .ql-thin,.nb-theme-corporate .ql-snow .ql-stroke.ql-thin{stroke-width:1}.nb-theme-corporate .ql-snow .ql-transparent{opacity:.4}.nb-theme-corporate .ql-snow .ql-direction svg:last-child{display:none}.nb-theme-corporate .ql-snow .ql-direction.ql-active svg:last-child{display:inline}.nb-theme-corporate .ql-snow .ql-direction.ql-active svg:first-child{display:none}.nb-theme-corporate .ql-snow .ql-editor h1{font-size:2em}.nb-theme-corporate .ql-snow .ql-editor h2{font-size:1.5em}.nb-theme-corporate .ql-snow .ql-editor h3{font-size:1.17em}.nb-theme-corporate .ql-snow .ql-editor h4{font-size:1em}.nb-theme-corporate .ql-snow .ql-editor h5{font-size:.83em}.nb-theme-corporate .ql-snow .ql-editor h6{font-size:.67em}.nb-theme-corporate .ql-snow .ql-editor a{text-decoration:underline}.nb-theme-corporate .ql-snow .ql-editor blockquote{border-left:4px solid #e4e9f2;margin-bottom:5px;margin-top:5px;padding-left:16px}.nb-theme-corporate .ql-snow .ql-editor code,.nb-theme-corporate .ql-snow .ql-editor pre{background-color:#f0f0f0;border-radius:3px}.nb-theme-corporate .ql-snow .ql-editor pre{white-space:pre-wrap;margin-bottom:5px;margin-top:5px;padding:5px 10px}.nb-theme-corporate .ql-snow .ql-editor code{font-size:85%;padding:2px 4px}.nb-theme-corporate .ql-snow .ql-editor pre.ql-syntax{background-color:#23241f;color:#f8f8f2;overflow:visible}.nb-theme-corporate .ql-snow .ql-editor img{max-width:100%}.nb-theme-corporate .ql-snow .ql-picker{color:#222b45;display:inline-block;float:left;font-size:14px;font-weight:500;height:24px;position:relative;vertical-align:middle}.nb-theme-corporate .ql-snow .ql-picker-label{cursor:pointer;display:inline-block;height:100%;padding-left:8px;padding-right:2px;position:relative;width:100%}.nb-theme-corporate .ql-snow .ql-picker-label:before{display:inline-block;line-height:22px}.nb-theme-corporate .ql-snow .ql-picker-options{background-color:#fff;display:none;min-width:100%;padding:4px 8px;position:absolute;white-space:nowrap}.nb-theme-corporate .ql-snow .ql-picker-options .ql-picker-item{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px}.nb-theme-corporate .ql-snow .ql-picker.ql-expanded .ql-picker-label{color:#e4e9f2;z-index:2}.nb-theme-corporate .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill{fill:#e4e9f2}.nb-theme-corporate .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke{stroke:#e4e9f2}.nb-theme-corporate .ql-snow .ql-picker.ql-expanded .ql-picker-options{display:block;margin-top:-1px;top:100%;z-index:1}.nb-theme-corporate .ql-snow .ql-color-picker,.nb-theme-corporate .ql-snow .ql-icon-picker{width:28px}.nb-theme-corporate .ql-snow .ql-color-picker .ql-picker-label,.nb-theme-corporate .ql-snow .ql-icon-picker .ql-picker-label{padding:2px 4px}.nb-theme-corporate .ql-snow .ql-color-picker .ql-picker-label svg,.nb-theme-corporate .ql-snow .ql-icon-picker .ql-picker-label svg{right:4px}.nb-theme-corporate .ql-snow .ql-icon-picker .ql-picker-options{padding:4px 0}.nb-theme-corporate .ql-snow .ql-icon-picker .ql-picker-item{height:24px;width:24px;padding:2px 4px}.nb-theme-corporate .ql-snow .ql-color-picker .ql-picker-options{padding:3px 5px;width:152px}.nb-theme-corporate .ql-snow .ql-color-picker .ql-picker-item{border:1px solid transparent;float:left;height:16px;margin:2px;padding:0;width:16px}.nb-theme-corporate .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg{position:absolute;margin-top:-9px;right:0;top:50%;width:18px}.nb-theme-corporate .ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=\"\"]):before,.nb-theme-corporate .ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=\"\"]):before,.nb-theme-corporate .ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=\"\"]):before,.nb-theme-corporate .ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=\"\"]):before,.nb-theme-corporate .ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=\"\"]):before,.nb-theme-corporate .ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=\"\"]):before{content:attr(data-label)}.nb-theme-corporate .ql-snow .ql-picker.ql-header{width:98px}.nb-theme-corporate .ql-snow .ql-picker.ql-header .ql-picker-label:before,.nb-theme-corporate .ql-snow .ql-picker.ql-header .ql-picker-item:before{content:\"Normal\"}.nb-theme-corporate .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]:before,.nb-theme-corporate .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]:before{content:\"Heading 1\"}.nb-theme-corporate .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]:before,.nb-theme-corporate .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]:before{content:\"Heading 2\"}.nb-theme-corporate .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]:before,.nb-theme-corporate .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]:before{content:\"Heading 3\"}.nb-theme-corporate .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]:before,.nb-theme-corporate .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]:before{content:\"Heading 4\"}.nb-theme-corporate .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]:before,.nb-theme-corporate .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]:before{content:\"Heading 5\"}.nb-theme-corporate .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]:before,.nb-theme-corporate .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]:before{content:\"Heading 6\"}.nb-theme-corporate .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]:before{font-size:2em}.nb-theme-corporate .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]:before{font-size:1.5em}.nb-theme-corporate .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]:before{font-size:1.17em}.nb-theme-corporate .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]:before{font-size:1em}.nb-theme-corporate .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]:before{font-size:.83em}.nb-theme-corporate .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]:before{font-size:.67em}.nb-theme-corporate .ql-snow .ql-picker.ql-font{width:108px}.nb-theme-corporate .ql-snow .ql-picker.ql-font .ql-picker-label:before,.nb-theme-corporate .ql-snow .ql-picker.ql-font .ql-picker-item:before{content:\"Sans Serif\"}.nb-theme-corporate .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]:before,.nb-theme-corporate .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]:before{content:\"Serif\"}.nb-theme-corporate .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]:before,.nb-theme-corporate .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]:before{content:\"Monospace\"}.nb-theme-corporate .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]:before{font-family:Georgia,Times New Roman,serif}.nb-theme-corporate .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]:before{font-family:Monaco,Courier New,monospace}.nb-theme-corporate .ql-snow .ql-picker.ql-size{width:98px}.nb-theme-corporate .ql-snow .ql-picker.ql-size .ql-picker-label:before,.nb-theme-corporate .ql-snow .ql-picker.ql-size .ql-picker-item:before{content:\"Normal\"}.nb-theme-corporate .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]:before,.nb-theme-corporate .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]:before{content:\"Small\"}.nb-theme-corporate .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]:before,.nb-theme-corporate .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]:before{content:\"Large\"}.nb-theme-corporate .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]:before,.nb-theme-corporate .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]:before{content:\"Huge\"}.nb-theme-corporate .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]:before{font-size:10px}.nb-theme-corporate .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]:before{font-size:18px}.nb-theme-corporate .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]:before{font-size:32px}.nb-theme-corporate .ql-snow .ql-color-picker.ql-background .ql-picker-item{background-color:#fff}.nb-theme-corporate .ql-snow .ql-color-picker.ql-color .ql-picker-item{background-color:#000}.nb-theme-corporate .ql-toolbar.ql-snow{border:1px solid #e4e9f2;border-top-right-radius:.25rem;border-top-left-radius:.25rem;box-sizing:border-box;font-family:\"Helvetica Neue\",\"Helvetica\",\"Arial\",sans-serif;padding:8px}.nb-theme-corporate .ql-toolbar.ql-snow .ql-formats{margin-right:15px}.nb-theme-corporate .ql-toolbar.ql-snow .ql-picker-label{border:1px solid transparent}.nb-theme-corporate .ql-toolbar.ql-snow .ql-picker-options{border:1px solid transparent;box-shadow:#0003 0 2px 8px}.nb-theme-corporate .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label{border-color:#e4e9f2}.nb-theme-corporate .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options{border-color:#e4e9f2}.nb-theme-corporate .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,.nb-theme-corporate .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover{border-color:#000}.nb-theme-corporate .ql-toolbar.ql-snow+.ql-container.ql-snow{border-top:0px}.nb-theme-corporate .ql-snow .ql-tooltip{background-color:#fff;border:1px solid #e4e9f2;box-shadow:0 0 5px #ddd;color:#222b45;padding:5px 12px;white-space:nowrap}.nb-theme-corporate .ql-snow .ql-tooltip:before{content:\"Visit URL:\";line-height:26px;margin-right:8px}.nb-theme-corporate .ql-snow .ql-tooltip input[type=text]{display:none;border:1px solid #e4e9f2;font-size:13px;height:26px;margin:0;padding:3px 5px;width:170px}.nb-theme-corporate .ql-snow .ql-tooltip a.ql-preview{display:inline-block;max-width:200px;overflow-x:hidden;text-overflow:ellipsis;vertical-align:top}.nb-theme-corporate .ql-snow .ql-tooltip a.ql-action:after{border-right:1px solid #e4e9f2;content:\"Edit\";margin-left:16px;padding-right:8px}.nb-theme-corporate .ql-snow .ql-tooltip a.ql-remove:before{content:\"Remove\";margin-left:8px}.nb-theme-corporate .ql-snow .ql-tooltip a{line-height:26px}.nb-theme-corporate .ql-snow .ql-tooltip.ql-editing a.ql-preview,.nb-theme-corporate .ql-snow .ql-tooltip.ql-editing a.ql-remove{display:none}.nb-theme-corporate .ql-snow .ql-tooltip.ql-editing input[type=text]{display:inline-block}.nb-theme-corporate .ql-snow .ql-tooltip.ql-editing a.ql-action:after{border-right:0px;content:\"Save\";padding-right:0}.nb-theme-corporate .ql-snow .ql-tooltip[data-mode=link]:before{content:\"Enter link:\"}.nb-theme-corporate .ql-snow .ql-tooltip[data-mode=formula]:before{content:\"Enter formula:\"}.nb-theme-corporate .ql-snow .ql-tooltip[data-mode=video]:before{content:\"Enter video:\"}.nb-theme-corporate .ql-snow a{color:#06c}.nb-theme-corporate .ql-container.ql-snow{border:1px solid #e4e9f2;border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.nb-theme-corporate .hasErrors .ql-toolbar.ql-snow{color:#ff3d71!important;border-top:1px solid #ff3d71!important;border-left:1px solid #ff3d71!important;border-right:1px solid #ff3d71!important;border-bottom:0px!important}.nb-theme-corporate .hasErrors .ql-container.ql-snow{border-top:1px solid #ff3d71!important;border-left:1px solid #ff3d71!important;border-right:1px solid #ff3d71!important;border-bottom:1px solid #ff3d71!important}\n"], components: [{ type: DoContainerOutletComponent, selector: "do-container-outlet", inputs: ["name", "label", "colLabel", "colContent", "nolabel", "dividerlabel", "required", "hasErrors", "errorMessages", "warnMessage", "paramError", "skeleton", "show"] }, { type: i3__namespace$1.QuillEditorComponent, selector: "quill-editor" }], directives: [{ type: i4__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i4__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1__namespace.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], pipes: { "translate": i5__namespace.TranslatePipe }, encapsulation: i0__namespace.ViewEncapsulation.None });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoTextEditorComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-text-editor',
                        templateUrl: 'do-text-editor.component.html',
                        styleUrls: ['./do-text-editor.component.scss'],
                        encapsulation: i0.ViewEncapsulation.None
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace.NgControl, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Self
                        }] }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i0.LOCALE_ID]
                        }] }];
        }, propDecorators: { placeholder: [{
                    type: i0.Input
                }], colLabel: [{
                    type: i0.Input
                }], colInput: [{
                    type: i0.Input
                }], minLength: [{
                    type: i0.Input
                }], maxLength: [{
                    type: i0.Input
                }], height: [{
                    type: i0.Input
                }] } });

    var DoTextareaComponent = /** @class */ (function (_super) {
        __extends(DoTextareaComponent, _super);
        function DoTextareaComponent(ngControl, locale) {
            var _this = _super.call(this, ngControl, locale) || this;
            _this.locale = locale;
            _this.colLabel = 3;
            _this.colInput = 9;
            _this.minLength = 0;
            _this.maxLength = 250;
            _this.height = 120;
            return _this;
        }
        DoTextareaComponent.prototype.onInit = function () {
            this.paramError = {
                value: this.minLength,
            };
        };
        DoTextareaComponent.prototype.ngOnDestroy = function () { };
        return DoTextareaComponent;
    }(ValueAccessorDirective));
    DoTextareaComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoTextareaComponent, deps: [{ token: i1__namespace.NgControl, optional: true, self: true }, { token: i0.LOCALE_ID }], target: i0__namespace.ɵɵFactoryTarget.Component });
    DoTextareaComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoTextareaComponent, selector: "do-textarea", inputs: { placeholder: "placeholder", colLabel: "colLabel", colInput: "colInput", minLength: "minLength", maxLength: "maxLength", height: "height" }, usesInheritance: true, ngImport: i0__namespace, template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [warnMessage]=\"warnMessage\"\n  [skeleton]=\"skeleton\" [show]=\"show\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <textarea \n      id=\"{{name}}\"\n      [minLength]=\"minLength\"\n      [maxLength]=\"maxLength\"\n      [required]=\"required\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [disabled]=\"disabled\"\n      [ngStyle]=\"{ \n        'width':  '100%',\n        'height':  height + 'px'\n      }\"\n      [ngClass]=\"{\n        'status-danger': hasErrors,\n        'status-success': (hasSuccess && required)\n      }\"\n      (input)=\"onChange($event.target.value)\"\n      (change)=\"onChange($event.target.value)\"\n      (blur)=\"onTouched($event.target.value)\"\n      (focus)=\"onTouched($event.target.value)\"\n      [(ngModel)]=\"value\"\n      nbInput fullWidth>\n    </textarea>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'skeleton': skeleton\n        }\"\n        [ngStyle]=\"{ \n          'width':  '100%',\n          'height':  height + 'px'\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>", styles: [""], components: [{ type: DoContainerOutletComponent, selector: "do-container-outlet", inputs: ["name", "label", "colLabel", "colContent", "nolabel", "dividerlabel", "required", "hasErrors", "errorMessages", "warnMessage", "paramError", "skeleton", "show"] }], directives: [{ type: i4__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2__namespace.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i1__namespace.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i4__namespace.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: i4__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1__namespace.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], pipes: { "translate": i5__namespace.TranslatePipe }, encapsulation: i0__namespace.ViewEncapsulation.None });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoTextareaComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-textarea',
                        styleUrls: ['./textarea.component.scss'],
                        templateUrl: './textarea.component.html',
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace.NgControl, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Self
                        }] }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i0.LOCALE_ID]
                        }] }];
        }, propDecorators: { placeholder: [{
                    type: i0.Input
                }], colLabel: [{
                    type: i0.Input
                }], colInput: [{
                    type: i0.Input
                }], minLength: [{
                    type: i0.Input
                }], maxLength: [{
                    type: i0.Input
                }], height: [{
                    type: i0.Input
                }] } });

    var EDITOR_COMPONENTS = [
        DoTextEditorComponent,
        DoTextareaComponent,
    ];
    var DoEditorModule = /** @class */ (function () {
        function DoEditorModule() {
        }
        return DoEditorModule;
    }());
    DoEditorModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoEditorModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DoEditorModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoEditorModule, declarations: [DoTextEditorComponent,
            DoTextareaComponent], imports: [i4.CommonModule,
            i1.FormsModule,
            i1.ReactiveFormsModule,
            i5.TranslateModule, i3__namespace$1.QuillModule, i2.NbInputModule,
            DoBaseModule], exports: [DoTextEditorComponent,
            DoTextareaComponent] });
    DoEditorModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoEditorModule, imports: [[
                i4.CommonModule,
                i1.FormsModule,
                i1.ReactiveFormsModule,
                i5.TranslateModule,
                i3$1.QuillModule.forRoot(),
                i2.NbInputModule,
                DoBaseModule,
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoEditorModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i4.CommonModule,
                            i1.FormsModule,
                            i1.ReactiveFormsModule,
                            i5.TranslateModule,
                            i3$1.QuillModule.forRoot(),
                            i2.NbInputModule,
                            DoBaseModule,
                        ],
                        declarations: __spreadArray([], __read(EDITOR_COMPONENTS)),
                        exports: __spreadArray([], __read(EDITOR_COMPONENTS)),
                    }]
            }] });

    var DoCheckboxComponent = /** @class */ (function (_super) {
        __extends(DoCheckboxComponent, _super);
        function DoCheckboxComponent(ngControl, locale) {
            var _this = _super.call(this, ngControl, locale) || this;
            _this.locale = locale;
            _this.colLabel = 3;
            _this.colInput = 9;
            _this.onChecked = new i0.EventEmitter();
            return _this;
        }
        DoCheckboxComponent.prototype.onCheckedChange = function (item) {
            if (!this.value) {
                this.value = this.data;
            }
            if (Array.isArray(this.value).valueOf()) {
                var isChecked_1 = false;
                Array.from(this.value).forEach(function (value) {
                    if (value.selected) {
                        isChecked_1 = value.selected;
                    }
                });
                if (isChecked_1) {
                    if (this.required) {
                        this.ngControl.control.setErrors(null);
                    }
                }
                else {
                    this.value = null;
                    if (this.required) {
                        this.ngControl.control.setErrors({
                            required: true,
                        });
                    }
                }
                this.ngControl.control.markAsTouched();
                this.ngControl.control.markAsDirty();
            }
            this.onChecked.emit(this.value);
        };
        DoCheckboxComponent.prototype.writeValue = function (value) {
            if (value) {
                this.data = value;
            }
            this._value = value;
            this.onChange(this.value);
            var control = this.ngControl.control;
            if (control) {
                control.updateValueAndValidity();
                control.markAsUntouched();
                control.markAsPristine();
            }
        };
        return DoCheckboxComponent;
    }(ValueAccessorDirective));
    DoCheckboxComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoCheckboxComponent, deps: [{ token: i1__namespace.NgControl, optional: true, self: true }, { token: i0.LOCALE_ID }], target: i0__namespace.ɵɵFactoryTarget.Component });
    DoCheckboxComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoCheckboxComponent, selector: "do-checkbox", inputs: { colLabel: "colLabel", colInput: "colInput", data: "data" }, outputs: { onChecked: "onChecked" }, usesInheritance: true, ngImport: i0__namespace, template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\" \n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [warnMessage]=\"warnMessage\"\n  [skeleton]=\"skeleton\" [show]=\"show\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <nb-checkbox\n      [ngClass]=\"{\n        'do-checkbox': true,\n        'status-danger': hasErrors\n      }\"\n      *ngFor=\"let item of data\"\n      [disabled]=\"item.disabled || disabled\"\n      [(ngModel)]=\"item.selected\"\n      (change)=\"onCheckedChange(item)\">\n      {{item.name | translate}}\n    </nb-checkbox>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>", styles: [".do-checkbox{display:flex;margin:.5rem 0 -.25rem}\n"], components: [{ type: DoContainerOutletComponent, selector: "do-container-outlet", inputs: ["name", "label", "colLabel", "colContent", "nolabel", "dividerlabel", "required", "hasErrors", "errorMessages", "warnMessage", "paramError", "skeleton", "show"] }, { type: i2__namespace.NbCheckboxComponent, selector: "nb-checkbox", inputs: ["status", "checked", "disabled", "indeterminate"], outputs: ["checkedChange"] }], directives: [{ type: i4__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i4__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1__namespace.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], pipes: { "translate": i5__namespace.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoCheckboxComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-checkbox',
                        styleUrls: ['./do-checkbox.component.scss'],
                        templateUrl: './do-checkbox.component.html',
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace.NgControl, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Self
                        }] }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i0.LOCALE_ID]
                        }] }];
        }, propDecorators: { colLabel: [{
                    type: i0.Input
                }], colInput: [{
                    type: i0.Input
                }], data: [{
                    type: i0.Input
                }], onChecked: [{
                    type: i0.Output
                }] } });

    var CHECKBOX_COMPONENTS = [
        DoCheckboxComponent,
    ];
    var DoCheckBoxModule = /** @class */ (function () {
        function DoCheckBoxModule() {
        }
        return DoCheckBoxModule;
    }());
    DoCheckBoxModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoCheckBoxModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DoCheckBoxModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoCheckBoxModule, declarations: [DoCheckboxComponent], imports: [i4.CommonModule,
            i1.FormsModule,
            i1.ReactiveFormsModule,
            i2.NbCheckboxModule,
            i5.TranslateModule,
            DoBaseModule], exports: [DoCheckboxComponent] });
    DoCheckBoxModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoCheckBoxModule, imports: [[
                i4.CommonModule,
                i1.FormsModule,
                i1.ReactiveFormsModule,
                i2.NbCheckboxModule,
                i5.TranslateModule,
                DoBaseModule,
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoCheckBoxModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i4.CommonModule,
                            i1.FormsModule,
                            i1.ReactiveFormsModule,
                            i2.NbCheckboxModule,
                            i5.TranslateModule,
                            DoBaseModule,
                        ],
                        declarations: __spreadArray([], __read(CHECKBOX_COMPONENTS)),
                        exports: __spreadArray([], __read(CHECKBOX_COMPONENTS)),
                    }]
            }] });

    var DoRadioComponent = /** @class */ (function (_super) {
        __extends(DoRadioComponent, _super);
        function DoRadioComponent(ngControl, locale) {
            var _this = _super.call(this, ngControl, locale) || this;
            _this.locale = locale;
            _this.colLabel = 3;
            _this.colInput = 9;
            return _this;
        }
        return DoRadioComponent;
    }(ValueAccessorDirective));
    DoRadioComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoRadioComponent, deps: [{ token: i1__namespace.NgControl, optional: true, self: true }, { token: i0.LOCALE_ID }], target: i0__namespace.ɵɵFactoryTarget.Component });
    DoRadioComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoRadioComponent, selector: "do-radio", inputs: { placeholder: "placeholder", colLabel: "colLabel", colInput: "colInput", data: "data" }, usesInheritance: true, ngImport: i0__namespace, template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\" \n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [warnMessage]=\"warnMessage\"\n  [skeleton]=\"skeleton\" [show]=\"show\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <nb-radio-group\n      [(value)]=\"value\"\n      [name]=\"name\"\n      [disabled]=\"disabled\"\n      #radiogroup>\n      <nb-radio *ngFor=\"let item of data\"\n        [value]=\"item.value\">\n        {{item.name | translate}}\n      </nb-radio>\n    </nb-radio-group>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>", styles: [""], components: [{ type: DoContainerOutletComponent, selector: "do-container-outlet", inputs: ["name", "label", "colLabel", "colContent", "nolabel", "dividerlabel", "required", "hasErrors", "errorMessages", "warnMessage", "paramError", "skeleton", "show"] }, { type: i2__namespace.NbRadioGroupComponent, selector: "nb-radio-group", inputs: ["value", "name", "disabled", "status"], outputs: ["valueChange"] }, { type: i2__namespace.NbRadioComponent, selector: "nb-radio", inputs: ["status", "name", "checked", "value", "disabled"], outputs: ["valueChange", "blur"] }], directives: [{ type: i4__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i4__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], pipes: { "translate": i5__namespace.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoRadioComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-radio',
                        styleUrls: ['./do-radio.component.scss'],
                        templateUrl: './do-radio.component.html',
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace.NgControl, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Self
                        }] }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i0.LOCALE_ID]
                        }] }];
        }, propDecorators: { placeholder: [{
                    type: i0.Input
                }], colLabel: [{
                    type: i0.Input
                }], colInput: [{
                    type: i0.Input
                }], data: [{
                    type: i0.Input
                }] } });

    var RADIO_COMPONENTS = [
        DoRadioComponent,
    ];
    var DoRadioModule = /** @class */ (function () {
        function DoRadioModule() {
        }
        return DoRadioModule;
    }());
    DoRadioModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoRadioModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DoRadioModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoRadioModule, declarations: [DoRadioComponent], imports: [i4.CommonModule,
            i1.FormsModule,
            i1.ReactiveFormsModule,
            i2.NbRadioModule,
            i5.TranslateModule,
            DoBaseModule], exports: [DoRadioComponent] });
    DoRadioModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoRadioModule, imports: [[
                i4.CommonModule,
                i1.FormsModule,
                i1.ReactiveFormsModule,
                i2.NbRadioModule,
                i5.TranslateModule,
                DoBaseModule,
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoRadioModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i4.CommonModule,
                            i1.FormsModule,
                            i1.ReactiveFormsModule,
                            i2.NbRadioModule,
                            i5.TranslateModule,
                            DoBaseModule,
                        ],
                        declarations: __spreadArray([], __read(RADIO_COMPONENTS)),
                        exports: __spreadArray([], __read(RADIO_COMPONENTS)),
                    }]
            }] });

    var DoDatePickerComponent = /** @class */ (function (_super) {
        __extends(DoDatePickerComponent, _super);
        function DoDatePickerComponent(ngControl, dateService, locale) {
            var _this = _super.call(this, ngControl, locale) || this;
            _this.dateService = dateService;
            _this.locale = locale;
            _this.colLabel = 3;
            _this.colInput = 9;
            _this.size = i2.NbCalendarSize.MEDIUM;
            _this.dateMask = [/[0-3]/, /\d/, '/', /[0-1]/, /\d/, '/', /[1-3]/, /\d/, /\d/, /\d/];
            _this.pattern = doCore.DatePattern.SLASH_DDMMYYYY;
            return _this;
        }
        Object.defineProperty(DoDatePickerComponent.prototype, "value", {
            get: function () { return this._value; },
            set: function (value) {
                if (this._value !== value) {
                    this._value = value;
                    this.onChange(i4.formatDate(value, this.format, this.locale));
                    var control = this.ngControl.control;
                    if (control) {
                        control.updateValueAndValidity();
                        control.markAsTouched();
                        control.markAsDirty();
                    }
                }
            },
            enumerable: false,
            configurable: true
        });
        DoDatePickerComponent.prototype.writeValue = function (value) {
            var date = null;
            if (value) {
                if (String(value).match(this.pattern)) {
                    var dateParse = this.parse(value);
                    if (!isNaN(Date.parse(dateParse))) {
                        date = new Date(dateParse);
                    }
                }
                this._value = date;
                this.onChange(value);
                var control = this.ngControl.control;
                if (control) {
                    control.updateValueAndValidity();
                    control.markAsUntouched();
                    control.markAsPristine();
                }
            }
        };
        /**
         * Parsing from String to Date, not return format date
         */
        DoDatePickerComponent.prototype.parse = function (value) {
            var year = String(value).split('/')[2];
            var month = String(value).split('/')[1];
            var day = String(value).split('/')[0];
            return year + '/' + month + '/' + day;
        };
        return DoDatePickerComponent;
    }(ValueAccessorDirective));
    DoDatePickerComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoDatePickerComponent, deps: [{ token: i1__namespace.NgControl, optional: true, self: true }, { token: i2__namespace.NbDateService }, { token: i0.LOCALE_ID }], target: i0__namespace.ɵɵFactoryTarget.Component });
    DoDatePickerComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoDatePickerComponent, selector: "do-datepicker", inputs: { placeholder: "placeholder", colLabel: "colLabel", colInput: "colInput", min: "min", max: "max", size: "size", dateMask: "dateMask" }, usesInheritance: true, ngImport: i0__namespace, template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\" \n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [warnMessage]=\"warnMessage\"\n  [skeleton]=\"skeleton\" [show]=\"show\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <input\n      id=\"{{name}}\"\n      [pattern]=\"pattern\"\n      [do-mask]=\"{mask: dateMask, guide: false}\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled || skeleton\"\n      [ngClass]=\"{\n        'status-danger': hasErrors,\n        'status-success': hasSuccess\n      }\"\n      (input)=\"onChange($event.target.value)\"\n      (change)=\"onChange($event.target.value)\"\n      (blur)=\"onTouched($event.target.value)\"\n      [(ngModel)]=\"value\"\n      [nbDatepicker]=\"dodatepicker\"\n      #input nbInput fullWidth>\n      <nb-datepicker\n        [format]=\"format\"\n        [size]=\"size\"\n        [min]=\"min\"\n        [max]=\"max\"\n        #dodatepicker>\n      </nb-datepicker>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>", styles: [""], components: [{ type: DoContainerOutletComponent, selector: "do-container-outlet", inputs: ["name", "label", "colLabel", "colContent", "nolabel", "dividerlabel", "required", "hasErrors", "errorMessages", "warnMessage", "paramError", "skeleton", "show"] }, { type: i2__namespace.NbDatepickerComponent, selector: "nb-datepicker", inputs: ["date"], outputs: ["dateChange"] }], directives: [{ type: i4__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2__namespace.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i1__namespace.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2__namespace.NbDatepickerDirective, selector: "input[nbDatepicker]", inputs: ["nbDatepicker"] }, { type: i1__namespace.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { type: MaskedInputDirective, selector: "[do-mask]", inputs: ["do-mask"], exportAs: ["do-mask"] }, { type: i1__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i4__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1__namespace.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], pipes: { "translate": i5__namespace.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoDatePickerComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-datepicker',
                        styleUrls: ['./do-datepicker.component.scss'],
                        templateUrl: './do-datepicker.component.html',
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace.NgControl, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Self
                        }] }, { type: i2__namespace.NbDateService }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i0.LOCALE_ID]
                        }] }];
        }, propDecorators: { placeholder: [{
                    type: i0.Input
                }], colLabel: [{
                    type: i0.Input
                }], colInput: [{
                    type: i0.Input
                }], min: [{
                    type: i0.Input
                }], max: [{
                    type: i0.Input
                }], size: [{
                    type: i0.Input
                }], dateMask: [{
                    type: i0.Input
                }] } });

    var DoDatePickerRangeComponent = /** @class */ (function (_super) {
        __extends(DoDatePickerRangeComponent, _super);
        function DoDatePickerRangeComponent(ngControl, locale) {
            var _this = _super.call(this, ngControl, locale) || this;
            _this.locale = locale;
            _this.colLabel = 3;
            _this.colInput = 9;
            _this.icon = false;
            _this.size = i2.NbCalendarSize.MEDIUM;
            _this.dateMask = [/[0-3]/, /\d/, '/', /[0-1]/, /\d/, '/', /[1-3]/, /\d/, /\d/, /\d/,
                ' ', '-', ' ',
                /[0-3]/, /\d/, '/', /[0-1]/, /\d/, '/', /[1-3]/, /\d/, /\d/, /\d/];
            return _this;
        }
        Object.defineProperty(DoDatePickerRangeComponent.prototype, "value", {
            get: function () { return this._value; },
            set: function (value) {
                if (value) {
                    if (this._value !== value) {
                        if ((value === null || value === void 0 ? void 0 : value.start) && (value === null || value === void 0 ? void 0 : value.end)) {
                            this._value = value;
                            this.onChange({
                                start: i4.formatDate(value === null || value === void 0 ? void 0 : value.start, this.format, this.locale),
                                end: i4.formatDate(value === null || value === void 0 ? void 0 : value.end, this.format, this.locale),
                            });
                            var control = this.ngControl.control;
                            if (control) {
                                control.updateValueAndValidity();
                                control.markAsTouched();
                                control.markAsDirty();
                            }
                        }
                        else {
                            this.enableError();
                        }
                    }
                }
                else {
                    this.onChange(null);
                    if (this.ngControl.control.hasError('daterange')) {
                        this.disableError();
                    }
                }
            },
            enumerable: false,
            configurable: true
        });
        DoDatePickerRangeComponent.prototype.writeValue = function (value) {
            if (value) {
                var dates = {};
                var dateStart = new Date(this.parse(value === null || value === void 0 ? void 0 : value.start));
                var dateEnd = new Date(this.parse(value === null || value === void 0 ? void 0 : value.end));
                if (dateStart.getTime() < dateEnd.getTime()) {
                    var startDateParse = this.parse(value === null || value === void 0 ? void 0 : value.start);
                    if (!isNaN(Date.parse(startDateParse))) {
                        dates['start'] = new Date(startDateParse);
                    }
                    var endDateParse = this.parse(value === null || value === void 0 ? void 0 : value.end);
                    if (!isNaN(Date.parse(endDateParse))) {
                        dates['end'] = new Date(endDateParse);
                    }
                    this._value = dates;
                    this.onChange(dates);
                }
            }
            var control = this.ngControl.control;
            if (control) {
                control.updateValueAndValidity();
                control.markAsUntouched();
                control.markAsPristine();
            }
        };
        DoDatePickerRangeComponent.prototype.onTyped = function (value) {
            if (value) {
                if (value.includes(' - ')) {
                    var arr = value.split(' - ');
                    var dateStart = new Date(this.parse(arr[0]));
                    var dateEnd = new Date(this.parse(arr[1]));
                    if (dateStart.getTime() <= dateEnd.getTime()) {
                        this.onChange({
                            start: i4.formatDate(dateStart, this.format, this.locale),
                            end: i4.formatDate(dateEnd, this.format, this.locale),
                        });
                    }
                    else {
                        this.enableError();
                    }
                }
                else {
                    this.enableError();
                }
            }
            else {
                if (this.ngControl.control.hasError('daterange')) {
                    this.disableError();
                }
            }
        };
        DoDatePickerRangeComponent.prototype.enableError = function () {
            this.ngControl.control.setErrors({ daterange: true });
        };
        DoDatePickerRangeComponent.prototype.disableError = function () {
            this.ngControl.control.setErrors({ daterange: false });
            this.ngControl.control.updateValueAndValidity();
        };
        /**
         * Parsing from String to Date, not return format date
         */
        DoDatePickerRangeComponent.prototype.parse = function (value) {
            var year = String(value).split('/')[2];
            var month = String(value).split('/')[1];
            var day = String(value).split('/')[0];
            return year + '/' + month + '/' + day;
        };
        return DoDatePickerRangeComponent;
    }(ValueAccessorDirective));
    DoDatePickerRangeComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoDatePickerRangeComponent, deps: [{ token: i1__namespace.NgControl, optional: true, self: true }, { token: i0.LOCALE_ID }], target: i0__namespace.ɵɵFactoryTarget.Component });
    DoDatePickerRangeComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoDatePickerRangeComponent, selector: "do-datepicker-range", inputs: { placeholder: "placeholder", colLabel: "colLabel", colInput: "colInput", icon: "icon", min: "min", max: "max", size: "size", dateMask: "dateMask" }, usesInheritance: true, ngImport: i0__namespace, template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\" \n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [warnMessage]=\"warnMessage\"\n  [skeleton]=\"skeleton\" [show]=\"show\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <input\n      id=\"{{name}}\"\n      [do-mask]=\"{mask: dateMask, guide: false}\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled || skeleton\"\n      [ngClass]=\"{\n        'status-danger': hasErrors,\n        'status-success': hasSuccess\n      }\"\n      (input)=\"onTyped($event.target.value)\"\n      (change)=\"onTyped($event.target.value)\"\n      (blur)=\"onTouched($event.target.value)\"\n      [(ngModel)]=\"value\"\n      [nbDatepicker]=\"rangepicker\"\n      #input nbInput fullWidth>\n      <nb-rangepicker\n        [format]=\"format\"\n        [size]=\"size\"\n        #rangepicker>\n      </nb-rangepicker>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>", styles: [""], components: [{ type: DoContainerOutletComponent, selector: "do-container-outlet", inputs: ["name", "label", "colLabel", "colContent", "nolabel", "dividerlabel", "required", "hasErrors", "errorMessages", "warnMessage", "paramError", "skeleton", "show"] }, { type: i2__namespace.NbRangepickerComponent, selector: "nb-rangepicker", inputs: ["range"], outputs: ["rangeChange"] }], directives: [{ type: i4__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2__namespace.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i1__namespace.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2__namespace.NbDatepickerDirective, selector: "input[nbDatepicker]", inputs: ["nbDatepicker"] }, { type: MaskedInputDirective, selector: "[do-mask]", inputs: ["do-mask"], exportAs: ["do-mask"] }, { type: i1__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i4__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1__namespace.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], pipes: { "translate": i5__namespace.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoDatePickerRangeComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-datepicker-range',
                        styleUrls: ['./do-datepicker-range.component.scss'],
                        templateUrl: './do-datepicker-range.component.html',
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace.NgControl, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Self
                        }] }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i0.LOCALE_ID]
                        }] }];
        }, propDecorators: { placeholder: [{
                    type: i0.Input
                }], colLabel: [{
                    type: i0.Input
                }], colInput: [{
                    type: i0.Input
                }], icon: [{
                    type: i0.Input
                }], min: [{
                    type: i0.Input
                }], max: [{
                    type: i0.Input
                }], size: [{
                    type: i0.Input
                }], dateMask: [{
                    type: i0.Input
                }] } });

    var DATEPICKER_COMPONENTS = [
        DoDatePickerComponent,
        DoDatePickerRangeComponent,
    ];
    var DoDatePickerModule = /** @class */ (function () {
        function DoDatePickerModule() {
        }
        return DoDatePickerModule;
    }());
    DoDatePickerModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoDatePickerModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DoDatePickerModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoDatePickerModule, declarations: [DoDatePickerComponent,
            DoDatePickerRangeComponent], imports: [i4.CommonModule,
            i1.FormsModule,
            i1.ReactiveFormsModule,
            i2.NbInputModule, i2__namespace.NbDatepickerModule, moment.NbMomentDateModule, i2__namespace$2.NbDateFnsDateModule, i5.TranslateModule,
            DoBaseModule], exports: [DoDatePickerComponent,
            DoDatePickerRangeComponent] });
    DoDatePickerModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoDatePickerModule, imports: [[
                i4.CommonModule,
                i1.FormsModule,
                i1.ReactiveFormsModule,
                i2.NbInputModule,
                i2.NbDatepickerModule.forRoot(),
                moment.NbMomentDateModule,
                i2$3.NbDateFnsDateModule.forChild({
                    format: doCore.DateFormat.DATE,
                    parseOptions: {
                        locale: locale.id,
                        awareOfUnicodeTokens: true,
                    },
                    formatOptions: {
                        locale: locale.id,
                        awareOfUnicodeTokens: true,
                    },
                }),
                i5.TranslateModule,
                DoBaseModule,
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoDatePickerModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i4.CommonModule,
                            i1.FormsModule,
                            i1.ReactiveFormsModule,
                            i2.NbInputModule,
                            i2.NbDatepickerModule.forRoot(),
                            moment.NbMomentDateModule,
                            i2$3.NbDateFnsDateModule.forChild({
                                format: doCore.DateFormat.DATE,
                                parseOptions: {
                                    locale: locale.id,
                                    awareOfUnicodeTokens: true,
                                },
                                formatOptions: {
                                    locale: locale.id,
                                    awareOfUnicodeTokens: true,
                                },
                            }),
                            i5.TranslateModule,
                            DoBaseModule,
                        ],
                        declarations: __spreadArray([], __read(DATEPICKER_COMPONENTS)),
                        exports: __spreadArray([], __read(DATEPICKER_COMPONENTS)),
                    }]
            }] });

    var ImageUploadComponent = /** @class */ (function (_super) {
        __extends(ImageUploadComponent, _super);
        function ImageUploadComponent(ngControl, locale, dom) {
            var _this = _super.call(this, ngControl, locale) || this;
            _this.locale = locale;
            _this.dom = dom;
            _this.onPreview = new i0.EventEmitter();
            _this.radius = 0;
            _this.buttonUpload = true;
            _this.skeleton = false;
            _this.imageDefault = document.getElementsByTagName('base')[0].href + "assets/images/avatars/default.png";
            return _this;
        }
        Object.defineProperty(ImageUploadComponent.prototype, "uploadFn", {
            set: function (finish) {
                if (finish) {
                    this.ngControl.control.markAsPristine();
                    this.ngControl.control.markAsUntouched();
                }
            },
            enumerable: false,
            configurable: true
        });
        ImageUploadComponent.prototype.writeValue = function (value) {
            if (value instanceof File) {
                this.image = URL.createObjectURL(value);
                this.value = value;
                this.onChange(this.value);
            }
            else {
                this.image = value;
            }
        };
        ImageUploadComponent.prototype.upload = function (files) {
            if (files.length) {
                this.value = files[0];
                this.image = URL.createObjectURL(this.value);
                this.onPreview.emit(this.value);
            }
            var control = this.ngControl.control;
            if (control) {
                control.updateValueAndValidity();
                control.markAsTouched();
                control.markAsDirty();
            }
        };
        ImageUploadComponent.prototype.ngOnDestroy = function () { };
        ImageUploadComponent.prototype.onInit = function () { };
        return ImageUploadComponent;
    }(ValueAccessorDirective));
    ImageUploadComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ImageUploadComponent, deps: [{ token: i1__namespace.NgControl, optional: true, self: true }, { token: i0.LOCALE_ID }, { token: i2__namespace$3.DomSanitizer }], target: i0__namespace.ɵɵFactoryTarget.Component });
    ImageUploadComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ImageUploadComponent, selector: "do-image-upload", inputs: { image: "image", height: "height", width: "width", radius: "radius", buttonUpload: "buttonUpload", skeleton: "skeleton", uploadFn: "uploadFn" }, outputs: { onPreview: "onPreview" }, usesInheritance: true, ngImport: i0__namespace, template: "<div class=\"body-upload\">\n  <div *ngIf=\"!skeleton; else contentskeleton\"\n    class=\"upload-container\"\n    (click)=\"img.click()\"\n    doDragDrop\n    (onFileDropped)=\"upload($event)\"\n    [ngClass]=\"{\n      'full-file': image,\n      'empty-file': !image\n    }\"\n    [ngStyle]=\"{ \n      'background-image': 'url(' + (image) + ')',\n      'height':  height ? height+'rem' : 'calc(80vw/5)',\n      'width':  width ? width+'rem' : 'calc(80vw/5)',\n      'border-radius':  radius + '%'\n    }\">\n    <label *ngIf=\"!image\"\n      class=\"label label-upload\"\n      [ngStyle]=\"{\n        'line-height':  height ? height+'rem' : 'calc(80vw/5)'\n      }\">\n      {{ 'placeholder.image-upload' | translate }}\n    </label>\n    <input\n      hidden\n      type=\"file\"\n      accept=\"image/png, image/jpeg, image/jpg\"\n      (change)=\"upload($event.target.files)\"\n      #img>\n  </div>\n  <ng-template #contentskeleton>\n    <div\n      [ngClass]=\"{\n        'skeleton': skeleton\n      }\"\n      [ngStyle]=\"{ \n        'height':  height ? height+'rem' : 'calc(80vw/5)',\n        'width':  width ? width+'rem' : 'calc(80vw/5)',\n        'border-radius':  radius + '%',\n        'margin': '0.5rem auto'\n      }\">\n    </div>\n  </ng-template>\n</div>", styles: [".nb-theme-default .upload-container{background-repeat:no-repeat;background-size:cover;margin:.5rem auto}.nb-theme-default .empty-file{background-color:#edf1f7!important;outline:.125rem dashed #8f9bb3;outline-offset:-.4rem}.nb-theme-default .full-file{background-color:#fff!important;outline:.1rem solid #8f9bb3}.nb-theme-default .label-upload{display:flex;align-items:center;justify-content:center}.nb-theme-default .upload-container:hover{cursor:pointer}.nb-theme-default .body-upload{margin:.5rem;display:flex;justify-content:center;align-items:center}@media (max-width: 399.98px){.nb-theme-default .upload-container{height:10rem!important;width:10rem!important;border-radius:10rem!important}.nb-theme-default .label-upload{line-height:10rem!important}.nb-theme-default .body-upload .skeleton{height:10rem!important;width:10rem!important}}.nb-theme-dark .upload-container{background-repeat:no-repeat;background-size:cover;margin:.5rem auto}.nb-theme-dark .empty-file{background-color:#151a30!important;outline:.125rem dashed #8f9bb3;outline-offset:-.4rem}.nb-theme-dark .full-file{background-color:#222b45!important;outline:.1rem solid #8f9bb3}.nb-theme-dark .label-upload{display:flex;align-items:center;justify-content:center}.nb-theme-dark .upload-container:hover{cursor:pointer}.nb-theme-dark .body-upload{margin:.5rem;display:flex;justify-content:center;align-items:center}@media (max-width: 399.98px){.nb-theme-dark .upload-container{height:10rem!important;width:10rem!important;border-radius:10rem!important}.nb-theme-dark .label-upload{line-height:10rem!important}.nb-theme-dark .body-upload .skeleton{height:10rem!important;width:10rem!important}}.nb-theme-cosmic .upload-container{background-repeat:no-repeat;background-size:cover;margin:.5rem auto}.nb-theme-cosmic .empty-file{background-color:#1b1b38!important;outline:.125rem dashed #8f9bb3;outline-offset:-.4rem}.nb-theme-cosmic .full-file{background-color:#323259!important;outline:.1rem solid #8f9bb3}.nb-theme-cosmic .label-upload{display:flex;align-items:center;justify-content:center}.nb-theme-cosmic .upload-container:hover{cursor:pointer}.nb-theme-cosmic .body-upload{margin:.5rem;display:flex;justify-content:center;align-items:center}@media (max-width: 399.98px){.nb-theme-cosmic .upload-container{height:10rem!important;width:10rem!important;border-radius:10rem!important}.nb-theme-cosmic .label-upload{line-height:10rem!important}.nb-theme-cosmic .body-upload .skeleton{height:10rem!important;width:10rem!important}}.nb-theme-corporate .upload-container{background-repeat:no-repeat;background-size:cover;margin:.5rem auto}.nb-theme-corporate .empty-file{background-color:#edf1f7!important;outline:.125rem dashed #8f9bb3;outline-offset:-.4rem}.nb-theme-corporate .full-file{background-color:#fff!important;outline:.1rem solid #8f9bb3}.nb-theme-corporate .label-upload{display:flex;align-items:center;justify-content:center}.nb-theme-corporate .upload-container:hover{cursor:pointer}.nb-theme-corporate .body-upload{margin:.5rem;display:flex;justify-content:center;align-items:center}@media (max-width: 399.98px){.nb-theme-corporate .upload-container{height:10rem!important;width:10rem!important;border-radius:10rem!important}.nb-theme-corporate .label-upload{line-height:10rem!important}.nb-theme-corporate .body-upload .skeleton{height:10rem!important;width:10rem!important}}\n"], directives: [{ type: i4__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: DragDropDirective, selector: "[doDragDrop]", inputs: ["opacity"], outputs: ["onFileDropped"] }, { type: i4__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4__namespace.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], pipes: { "translate": i5__namespace.TranslatePipe }, encapsulation: i0__namespace.ViewEncapsulation.None });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ImageUploadComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-image-upload',
                        styleUrls: ['./image-upload.component.scss'],
                        templateUrl: './image-upload.component.html',
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace.NgControl, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Self
                        }] }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i0.LOCALE_ID]
                        }] }, { type: i2__namespace$3.DomSanitizer }];
        }, propDecorators: { onPreview: [{
                    type: i0.Output
                }], image: [{
                    type: i0.Input
                }], height: [{
                    type: i0.Input
                }], width: [{
                    type: i0.Input
                }], radius: [{
                    type: i0.Input
                }], buttonUpload: [{
                    type: i0.Input
                }], skeleton: [{
                    type: i0.Input
                }], uploadFn: [{
                    type: i0.Input
                }] } });

    var IMAGE_COMPONENTS = [
        ImageUploadComponent,
    ];
    var DoImageModule = /** @class */ (function () {
        function DoImageModule() {
        }
        return DoImageModule;
    }());
    DoImageModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoImageModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DoImageModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoImageModule, declarations: [ImageUploadComponent], imports: [i4.CommonModule,
            i1.FormsModule,
            i1.ReactiveFormsModule,
            i5.TranslateModule,
            i2.NbButtonModule,
            i2.NbIconModule,
            DoBaseModule], exports: [ImageUploadComponent] });
    DoImageModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoImageModule, imports: [[
                i4.CommonModule,
                i1.FormsModule,
                i1.ReactiveFormsModule,
                i5.TranslateModule,
                i2.NbButtonModule,
                i2.NbIconModule,
                DoBaseModule,
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoImageModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i4.CommonModule,
                            i1.FormsModule,
                            i1.ReactiveFormsModule,
                            i5.TranslateModule,
                            i2.NbButtonModule,
                            i2.NbIconModule,
                            DoBaseModule,
                        ],
                        declarations: __spreadArray([], __read(IMAGE_COMPONENTS)),
                        exports: __spreadArray([], __read(IMAGE_COMPONENTS)),
                    }]
            }] });

    /**
     * Returns true if the component extends the NgWizardStep class or implements the NgWizardStepInterface.
     *
     * @param componentRef The reference to the component to verify
     */
    function componentImplementsNgWizardStepInterface(componentRef) {
        return 'isValid' in componentRef && 'onNext' in componentRef && 'onPrevious' in componentRef;
    }
    /**
     * Returns the NgWizardStepData with the given path in the stepData list or undefined if none is
     * found.
     *
     * @param stepData The list with NgWizardStepDatas
     * @param path The path you want to get the NgWizardStepData for
     */
    function getStepDataForPath(stepData, path) {
        return stepData.find(function (data) { return data.path === path; });
    }
    /**
     * Returns the NgWizardStepData for the given url in the stepData list or undefined if none is
     * found.
     *
     * @param stepData The list with NgWizardStepDatas
     * @param url The url which you want to get the NgWizardStepData for
     */
    function getStepDataForUrl(stepData, url) {
        // gets 'path' in the url '/wizard/path?key=value'
        var path = url.split('/').pop().split('?')[0];
        return getStepDataForPath(stepData, path);
    }
    /**
     * Returns the default wizard options.
     */
    function getDefaultWizardOptions() {
        return {
            name: '',
            baseUrl: '/',
            navBar: {
                icons: {
                    previous: '<i class="cil-check-alt"></i>',
                    current: '<i class="cil-pencil"></i>',
                    next: '<i class="cil-lock-locked"></i>',
                },
            },
            buttons: {
                cancel: {
                    label: 'Cancel',
                },
                previous: {
                    label: 'Back',
                },
                next: {
                    label: 'Next',
                },
                finish: {
                    label: 'Submit',
                },
            }
        };
    }
    /**
     * Merges the wizard options in the wizard route's config with the default wizard options.
     *
     * @param wizardOptions The wizard options in the wizard route's config
     */
    function mergeWizardOptions(wizardOptions) {
        if (!wizardOptions) {
            return getDefaultWizardOptions();
        }
        return Object.assign(Object.assign({}, getDefaultWizardOptions()), wizardOptions);
    }
    /**
     * Returns the options passed to the wizard step route with an added title attribute.
     *
     * @param route The wizard step route configuration
     */
    function getWizardStepOptions(route) {
        if (!route.data) {
            return { title: getStepTitleFromRoute(route) };
        }
        return Object.assign(Object.assign({}, route.data), { title: getStepTitleFromRoute(route) });
    }
    /**
     * Returns the step title based on the Route configuration.
     * If the route has a data.title attribute it will be returned.
     * Else the path will be capitalized and '-' or '_' characters will be replaces by spaces.
     *
     * @param route The Angular Route object
     */
    function getStepTitleFromRoute(route) {
        if (route.data && route.data.title) {
            return route.data.title;
        }
        return capitalize(insertSpaces(route.path));
    }
    /**
     * Capitalizes the first character of the passed value.
     */
    function capitalize(value) {
        if (!value) {
            return value;
        }
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }
    /**
     * Replaces '-' and '_' characters by spaces.
     */
    function insertSpaces(value) {
        if (!value) {
            return value;
        }
        return value.replace(/[-_]/g, ' ').trim();
    }

    // TODO: evaluate if this is useful
    var DoWizardErrorType;
    (function (DoWizardErrorType) {
        DoWizardErrorType[DoWizardErrorType["NO_WIZARD_ROUTE"] = 0] = "NO_WIZARD_ROUTE";
        DoWizardErrorType[DoWizardErrorType["NO_CHILD_ROUTES"] = 1] = "NO_CHILD_ROUTES";
        DoWizardErrorType[DoWizardErrorType["NO_WS_INTERFACE"] = 2] = "NO_WS_INTERFACE";
    })(DoWizardErrorType || (DoWizardErrorType = {}));

    var DoWizardError = /** @class */ (function (_super) {
        __extends(DoWizardError, _super);
        function DoWizardError(type, message) {
            var _this = _super.call(this, message) || this;
            _this.wizardComponentName = '';
            _this.wizardPath = '';
            _this.stepComponentName = '';
            _this.type = type;
            return _this;
        }
        return DoWizardError;
    }(Error));
    var NoWizardRoute = /** @class */ (function (_super) {
        __extends(NoWizardRoute, _super);
        function NoWizardRoute(wizardComponentName) {
            var _this = _super.call(this, DoWizardErrorType.NO_WIZARD_ROUTE, "No route configuration for the " + wizardComponentName + " found.") || this;
            _this.wizardComponentName = wizardComponentName;
            return _this;
        }
        return NoWizardRoute;
    }(DoWizardError));
    var NoChildRoutes = /** @class */ (function (_super) {
        __extends(NoChildRoutes, _super);
        function NoChildRoutes(wizardComponentName, wizardPath) {
            var _this = _super.call(this, DoWizardErrorType.NO_CHILD_ROUTES, "No child routes for the " + wizardComponentName + " found.") || this;
            _this.wizardComponentName = wizardComponentName;
            _this.wizardPath = wizardPath;
            return _this;
        }
        return NoChildRoutes;
    }(DoWizardError));
    var NoWsInterface = /** @class */ (function (_super) {
        __extends(NoWsInterface, _super);
        function NoWsInterface(stepComponentName) {
            var _this = _super.call(this, DoWizardErrorType.NO_WS_INTERFACE, "The " + stepComponentName + " does not extend the NgWizardStep class or implement the NgWizardStepInterface.") || this;
            _this.stepComponentName = stepComponentName;
            return _this;
        }
        return NoWsInterface;
    }(DoWizardError));

    var DoWizardService = /** @class */ (function () {
        function DoWizardService(router) {
            this.router = router;
            this.stepData = [];
            this.formGroup = new i1.FormGroup({});
            this.stepDataChanges = new rxjs.BehaviorSubject([]);
        }
        DoWizardService.prototype.setFormGroup = function (formGroup) {
            this.formGroup = formGroup;
        };
        DoWizardService.prototype.getFormGroup = function () {
            return this.formGroup;
        };
        DoWizardService.prototype.formIsValid = function () {
            return this.currentComponent.isValid();
        };
        /**
         * Initializes the wizard by parsing the wizard's child routes found in Angular's router config
         * into a list of NgWizardStepData.
         * @param wizardName The unique name of the wizard
         */
        DoWizardService.prototype.loadWizardRoutes = function (wizardName) {
            this.wizardRoute = this.getWizardRoute(wizardName);
            if (!this.wizardRoute) {
                throw new NoWizardRoute(wizardName);
            }
            this.wizardOptions = mergeWizardOptions(this.wizardRoute.data);
            this.loadChildRoutes(this.wizardRoute);
        };
        /**
         * Checks and stores the currently displayed component.
         * @param componentRef A reference to the currently displayed component
         */
        DoWizardService.prototype.registerActiveComponent = function (componentRef) {
            if (!componentImplementsNgWizardStepInterface(componentRef)) {
                throw new NoWsInterface(componentRef.constructor.name);
            }
            // Cast to unknown before casting to NgWizardStep to let typescript know we checked and approve
            // this conversion.
            this.currentComponent = componentRef;
            this.currentStepData = getStepDataForUrl(this.stepData, this.router.url);
            this.currentStepData.componentRef = componentRef;
            this.resetCurrentStep();
            this.currentStepData.isCurrent = true;
            this.onStepDataChange();
        };
        /**
         * Calls the current component's wsOnPrevious() or wsOnNext()) methods and navigates to the given
         * step if the component does not abort or its state is invalid (for next navigation).
         *
         * @param stepData The NgWizardStepData of the the step to navigate to
         */
        DoWizardService.prototype.navigateToStep = function (stepData) {
            var goAhead;
            if (this.currentStepData.order > stepData.order) {
                goAhead = this.currentComponent.onPrevious();
            }
            else {
                goAhead = this.currentComponent.isValid() && this.currentComponent.onNext();
            }
            if (goAhead === false) {
                return;
            }
            // If the wizard is added to a specific path in the application we have to join that path and
            // the step's path as the path to navigate to.
            // The Angular Router's relativeTo option does not seem to work when using the hash location
            // strategy.
            // The path is based on the current route to allow route parameter
            var routeFragment = this.router.url.split('/');
            routeFragment.pop();
            routeFragment.push(stepData.path);
            var stepPath = routeFragment.join('/');
            if (stepData.options.cleanQueryParameters) {
                return this.router.navigate([stepPath], { queryParams: {} });
            }
            return this.router.navigate([stepPath], { queryParamsHandling: 'merge' });
        };
        /**
         * Utility method to navigate to the next step.
         */
        DoWizardService.prototype.navigateToNextStep = function () {
            var nextStepData = getStepDataForPath(this.stepData, this.currentStepData.nextStep);
            return this.navigateToStep(nextStepData);
        };
        /**
         * Utility method to navigate to the previous step.
         */
        DoWizardService.prototype.navigateToPreviousStep = function () {
            var previousStepData = getStepDataForPath(this.stepData, this.currentStepData.previousStep);
            return this.navigateToStep(previousStepData);
        };
        /**
         * Utility method to navigate to a specific route path (external to the wizard)
         */
        DoWizardService.prototype.navigateToPath = function (path) {
            return this.router.navigate([path], { queryParamsHandling: 'merge' });
        };
        /**
         * Returns the step data changes as an observable.
         */
        DoWizardService.prototype.getStepDataChangesAsObservable = function () {
            return this.stepDataChanges.asObservable();
        };
        /**
         * Returns the current step data as an observable.
         */
        // TODO: Write a unit test for this method
        DoWizardService.prototype.getCurrentStepDataAsObservable = function () {
            return this.getStepDataChangesAsObservable().pipe(operators.map(function (stepDatas) { return stepDatas.find(function (stepData) { return stepData.isCurrent; }); }));
        };
        /**
         * Returns the Angular Route for the wizard component found in Angular's router config.
         * @param wizardName The unique name of the wizard
         */
        DoWizardService.prototype.getWizardRoute = function (wizardName) {
            var wizardRoutes = this.getAllWizardRoutes(this.router.config, wizardName);
            return wizardRoutes.find(function (route) { return route.data && route.data.name === wizardName; });
        };
        /**
         * From a given array of routes config, returns an array of routes config whose component is wizardComponentName.
         * Recursively look down every children route config
         * @param routes An array of route config
         * @param wizardName The name of the wizard to look for
         */
        DoWizardService.prototype.getAllWizardRoutes = function (routes, wizardName) {
            var _this = this;
            var wizardRoutes = routes.filter(function (route) { return route.data && route.data.name === wizardName; });
            // Recursive search in child routes
            routes.filter(function (route) { return route.children && route.children.length > 0; }).forEach(function (routeWithChildren) {
                var childWizardRoutes = _this.getAllWizardRoutes(routeWithChildren.children, wizardName);
                wizardRoutes = wizardRoutes.concat(childWizardRoutes);
            });
            // Recursive search in lazily loaded child routes
            routes.filter(function (route) { var _a, _b; return ((_b = (_a = route._loadedConfig) === null || _a === void 0 ? void 0 : _a.routes) === null || _b === void 0 ? void 0 : _b.length) > 0; }).forEach(function (routeWithChildren) {
                var childWizardRoutes = _this.getAllWizardRoutes(routeWithChildren._loadedConfig.routes, wizardName);
                wizardRoutes = wizardRoutes.concat(childWizardRoutes);
            });
            return wizardRoutes;
        };
        /**
         * Parses the child routes of the wizard component route and stores them as a list of
         * NgWizardStepData.
         * @param wizardRoute The Angular Route for the wizard component
         */
        DoWizardService.prototype.loadChildRoutes = function (wizardRoute) {
            if (!wizardRoute.children) {
                throw new NoChildRoutes(wizardRoute.component.name, wizardRoute.path);
            }
            var childRoutes = wizardRoute.children.filter(function (route) { return route.component; });
            this.stepData = [];
            for (var i = 0; i < childRoutes.length; i++) {
                this.registerStep(i, childRoutes[i], childRoutes[i - 1], childRoutes[i + 1]);
            }
        };
        /**
         * Stores a child route as an NgWizardStepData.
         * @param index The index in the list of child routes
         * @param stepRoute The child route
         * @param previousStep The previous child route (undefined if first child route)
         * @param nextStep The next child route (undefined if last child route)
         */
        DoWizardService.prototype.registerStep = function (index, stepRoute, previousStep, nextStep) {
            this.stepData.push({
                order: index + 1,
                componentName: stepRoute.component.name,
                path: stepRoute.path,
                previousStep: previousStep ? previousStep.path : undefined,
                nextStep: nextStep ? nextStep.path : undefined,
                isCurrent: false,
                options: getWizardStepOptions(stepRoute),
            });
            this.onStepDataChange();
        };
        /**
         * Emits a step data change event to the subscribers when the step data changes.
         */
        DoWizardService.prototype.onStepDataChange = function () {
            this.stepDataChanges.next(this.stepData);
        };
        /**
         * Sets the isCurrent attribute of all step data to false.
         */
        DoWizardService.prototype.resetCurrentStep = function () {
            this.stepData.map(function (stepData) {
                stepData.isCurrent = false;
                return stepData;
            });
        };
        return DoWizardService;
    }());
    DoWizardService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoWizardService, deps: [{ token: i2__namespace$1.Router }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    DoWizardService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoWizardService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoWizardService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: i2__namespace$1.Router }]; } });

    var DoWizardErrorComponent = /** @class */ (function () {
        function DoWizardErrorComponent() {
            this.DoWizardErrorType = DoWizardErrorType;
        }
        return DoWizardErrorComponent;
    }());
    DoWizardErrorComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoWizardErrorComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    DoWizardErrorComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoWizardErrorComponent, selector: "do-wizard-error", inputs: { error: "error" }, ngImport: i0__namespace, template: "<div *ngIf=\"error\" class=\"do-wizard-error\">\n  <div [ngSwitch]=\"error.type\" class=\"do-wizard-error-message\">\n\n    <!-- NO_WIZARD_ROUTE error -->\n\n    <span *ngSwitchCase=\"DoWizardErrorType.NO_WIZARD_ROUTE\" class=\"no-wizard-route\">\n      No route configuration for the {{ error.wizardComponentName }} found.<br/>\n      Add a route for the {{ error.wizardComponentName }} to your AppRoutingModule.<br/>\n      <pre>\nconst routes: Routes = [\n    &#123; path: '', component: {{ error.wizardComponentName }} &#125;,\n];\n\n@NgModule(&#123;\n  imports: [RouterModule.forRoot(routes)],\n  exports: [RouterModule]\n&#125;)\nexport class AppRoutingModule &#123; &#125;</pre>\n    </span>\n\n    <!-- NO_CHILD_ROUTES error -->\n\n    <span *ngSwitchCase=\"DoWizardErrorType.NO_CHILD_ROUTES\" class=\"no-child-routes\">\n      No child routes for the {{ error.wizardComponentName }} found.<br/>\n      Add at least one child route for the {{ error.wizardComponentName }} to your AppRoutingModule.<br/>\n      <pre>\n&#123; path: '{{ error.wizardPath }}', component: {{ error.wizardComponentName }}, children: [\n    &#123; path: 'step1', component: Step1Component &#125;,\n    &#123; path: '**', redirectTo: 'step1' &#125;,\n] &#125;,</pre>\n    </span>\n\n    <!-- NO_WS_INTERFACE error -->\n\n    <span *ngSwitchCase=\"DoWizardErrorType.NO_WS_INTERFACE\" class=\"no-ws-interface\">\n      The {{ error.stepComponentName}} does not extend the NgWizardStep class or implement the\n      NgWizardStepInterface.<br/>\n      Extend the NgWizardStep class in your {{ error.stepComponentName}} or implement the\n      NgWizardStepInterface.<br/>\n      <pre>\n@NgComponent(...)\nexport class {{ error.stepComponentName }} extends NgWizardStep &#123;\n    constructor() &#123;\n        super();\n    &#125;\n&#125;</pre><br/>\n      or<br/>\n      <pre>\n@NgComponent(...)\nexport class {{ error.stepComponentName }} implements NgWizardStepInterface &#123;\n    isValid() &#123;\n        return true;\n    &#125;\n    onNext() &#123; &#125;\n    onPrevious() &#123; &#125;\n&#125;</pre>\n    </span>\n\n  </div>\n</div>\n", styles: [".do-wizard-error{border:solid 1px #D71117;border-radius:5px;color:#d71117;padding:10px 10px 0;margin-top:10px}.do-wizard-error .do-wizard-error-message pre{display:inline-block;border-radius:3px;background-color:#dad7c566;color:#4d4d4d;padding:15px}\n"], directives: [{ type: i4__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4__namespace.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i4__namespace.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoWizardErrorComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-wizard-error',
                        templateUrl: './do-wizard-error.component.html',
                        styleUrls: ['./do-wizard-error.component.scss']
                    }]
            }], propDecorators: { error: [{
                    type: i0.Input
                }] } });

    var DoWizardNavigationComponent = /** @class */ (function () {
        function DoWizardNavigationComponent(service) {
            this.service = service;
        }
        DoWizardNavigationComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.stepData$ = this.service.getStepDataChangesAsObservable();
            this.service.getCurrentStepDataAsObservable().subscribe(function (stepData) { return _this.currentStepData = stepData; });
            this.wizardOptions = this.service.wizardOptions;
        };
        DoWizardNavigationComponent.prototype.goToStep = function (stepData) {
            if ((this.currentStepData && this.currentStepData.options && this.currentStepData.options.disableNavigation)
                || stepData.order >= this.currentStepData.order) {
                return;
            }
            this.service.navigateToStep(stepData);
        };
        return DoWizardNavigationComponent;
    }());
    DoWizardNavigationComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoWizardNavigationComponent, deps: [{ token: DoWizardService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    DoWizardNavigationComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoWizardNavigationComponent, selector: "do-wizard-navigation", ngImport: i0__namespace, template: "<div class=\"do-wizard-navigation-container\">\n  <nav class=\"do-wizard-navigation\">\n    <ul class=\"do-wizard-navigation-list\">\n      <li *ngFor=\"let stepData of stepData$ | async\" class=\"do-wizard-navigation-list-item\" (click)=\"goToStep(stepData);\"\n        [ngClass]=\"{\n          'do-wizard-navigation-list-item-first': stepData?.order === 1\n        }\">\n        <div *ngIf=\"stepData?.order < currentStepData?.order\"\n             [ngClass]=\"{\n               'do-wizard-navigation-link': !currentStepData?.options.disableNavigation,\n               'do-wizard-navigation-disabled': currentStepData?.options.disableNavigation\n             }\">\n          <span class=\"do-wizard-navigation-label\">\n            <span [innerHTML]=\"stepData.options.icon || wizardOptions.navBar.icons.previous\" class=\"do-wizard-navigation-icon\"></span>\n            {{ stepData.options.title | translate }}\n          </span>\n        </div>\n\n        <div\n          *ngIf=\"stepData?.order === currentStepData?.order\"\n          class=\"do-wizard-navigation-active\">\n          <span class=\"do-wizard-navigation-label\">\n            <span [innerHTML]=\"stepData.options.icon || wizardOptions.navBar.icons.current\" class=\"do-wizard-navigation-icon\"></span>\n            {{ stepData.options.title | translate }}\n          </span>\n        </div>\n\n        <div *ngIf=\"stepData?.order > currentStepData?.order\"\n             class=\"do-wizard-navigation-disabled\">\n          <span class=\"do-wizard-navigation-label\">\n            <span [innerHTML]=\"stepData.options.icon || wizardOptions.navBar.icons.next\" class=\"do-wizard-navigation-icon\"></span>\n            {{ stepData.options.title | translate }}\n          </span>\n        </div>\n      </li>\n    </ul>\n  </nav>\n</div>\n", styles: [""], directives: [{ type: i4__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i4__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], pipes: { "async": i4__namespace.AsyncPipe, "translate": i5__namespace.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoWizardNavigationComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-wizard-navigation',
                        templateUrl: './do-wizard-navigation.component.html',
                        styleUrls: ['./do-wizard-navigation.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: DoWizardService }]; } });

    var DoWizardButtonsComponent = /** @class */ (function () {
        function DoWizardButtonsComponent(service, router) {
            this.service = service;
            this.router = router;
            this.extra = false;
            this.clearFormOnSubmit = false;
            this.disabled = false;
            this.onNext = new i0.EventEmitter();
            this.onPrevious = new i0.EventEmitter();
            this.onSubmit = new i0.EventEmitter();
        }
        DoWizardButtonsComponent.prototype.ngOnInit = function () {
            this.currentStepData$ = this.service.getCurrentStepDataAsObservable();
            this.wizardOptions = this.service.wizardOptions;
        };
        DoWizardButtonsComponent.prototype.formIsValid = function () {
            return this.service.formIsValid();
        };
        DoWizardButtonsComponent.prototype.goToSubmit = function () {
            if (this.clearFormOnSubmit) {
                this.service.getFormGroup().reset();
            }
            this.onSubmit.emit(this.service.getFormGroup().value);
        };
        DoWizardButtonsComponent.prototype.goToNextStep = function () {
            this.onNext.emit(this.service.getFormGroup());
            this.service.navigateToNextStep();
        };
        DoWizardButtonsComponent.prototype.goToPreviousStep = function () {
            this.onPrevious.emit(this.service.getFormGroup());
            this.service.navigateToPreviousStep();
        };
        DoWizardButtonsComponent.prototype.goToCancel = function (url) {
            this.service.getFormGroup().reset();
            this.router.navigate([url]);
        };
        DoWizardButtonsComponent.prototype.goToPath = function (path) {
            this.service.navigateToPath(path);
        };
        return DoWizardButtonsComponent;
    }());
    DoWizardButtonsComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoWizardButtonsComponent, deps: [{ token: DoWizardService }, { token: i2__namespace$1.Router }], target: i0__namespace.ɵɵFactoryTarget.Component });
    DoWizardButtonsComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoWizardButtonsComponent, selector: "do-wizard-buttons", inputs: { extra: "extra", clearFormOnSubmit: "clearFormOnSubmit", disabled: "disabled" }, outputs: { onNext: "onNext", onPrevious: "onPrevious", onSubmit: "onSubmit" }, ngImport: i0__namespace, template: "<div class=\"do-wizard-buttons-container\">\n  <div *ngIf=\"currentStepData$ | async as currentStepData\" class=\"do-wizard-buttons\">\n    <button *ngIf=\"!currentStepData.previousStep && !currentStepData.options.buttons?.cancel?.hidden\"\n            (click)=\"goToCancel(wizardOptions.baseUrl)\"\n            status=\"danger\"\n            [disabled]=\"disabled\"\n            class=\"do-wizard-button-previous\"\n            nbButton>\n            {{currentStepData.options.buttons?.cancel?.label || wizardOptions.buttons.cancel.label | translate}}\n    </button>\n    <button *ngIf=\"currentStepData.previousStep && !currentStepData.options.buttons?.previous?.hidden\"\n            (click)=\"goToPreviousStep()\"\n            status=\"danger\"\n            [disabled]=\"disabled\"\n            class=\"do-wizard-button-previous\"\n            nbButton>\n            {{currentStepData.options.buttons?.previous?.label || wizardOptions.buttons.previous.label | translate}}\n    </button>\n    <button *ngIf=\"currentStepData.nextStep && !currentStepData.options.buttons?.next?.hidden\"\n            (click)=\"goToNextStep()\"\n            [disabled]=\"!formIsValid() || disabled\"\n            status=\"primary\"\n            class=\"do-wizard-button-next\"\n            nbButton>\n            {{currentStepData.options.buttons?.next?.label || wizardOptions.buttons.next.label | translate}}\n    </button>\n    <button *ngIf=\"!currentStepData.nextStep && !currentStepData.options.buttons?.finish?.hidden && !extra\"\n            (click)=\"goToSubmit()\"\n            [disabled]=\"!formIsValid() || disabled\"\n            status=\"success\"\n            class=\"do-wizard-button-finish\"\n            nbButton>\n            {{currentStepData.options.buttons?.finish?.label || wizardOptions.buttons.finish.label | translate}}\n    </button>\n    <div class=\"do-wizard-button-right\"  *ngIf=\"!currentStepData.nextStep && extra\">\n      <ng-content select=\"[buttonextra]\"></ng-content>\n    </div>\n  </div>\n</div>\n", styles: [".nb-theme-default :host button[nbButton]{margin:0 .25rem}.nb-theme-default :host .reset-left{margin-right:.25rem}.nb-theme-default :host .submit-right{margin-left:.25rem}.nb-theme-dark :host button[nbButton]{margin:0 .25rem}.nb-theme-dark :host .reset-left{margin-right:.25rem}.nb-theme-dark :host .submit-right{margin-left:.25rem}.nb-theme-cosmic :host button[nbButton]{margin:0 .25rem}.nb-theme-cosmic :host .reset-left{margin-right:.25rem}.nb-theme-cosmic :host .submit-right{margin-left:.25rem}.nb-theme-corporate :host button[nbButton]{margin:0 .25rem}.nb-theme-corporate :host .reset-left{margin-right:.25rem}.nb-theme-corporate :host .submit-right{margin-left:.25rem}\n"], components: [{ type: i2__namespace.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i4__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], pipes: { "async": i4__namespace.AsyncPipe, "translate": i5__namespace.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoWizardButtonsComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-wizard-buttons',
                        templateUrl: './do-wizard-buttons.component.html',
                        styleUrls: ['./do-wizard-buttons.component.scss'],
                    }]
            }], ctorParameters: function () { return [{ type: DoWizardService }, { type: i2__namespace$1.Router }]; }, propDecorators: { extra: [{
                    type: i0.Input
                }], clearFormOnSubmit: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }], onNext: [{
                    type: i0.Output
                }], onPrevious: [{
                    type: i0.Output
                }], onSubmit: [{
                    type: i0.Output
                }] } });

    var DoWizardComponent = /** @class */ (function () {
        function DoWizardComponent(service, route) {
            var _this = this;
            this.service = service;
            this.route = route;
            this.extra = false;
            this.loading = false;
            this.onNext = new i0.EventEmitter();
            this.onPrevious = new i0.EventEmitter();
            this.onSubmit = new i0.EventEmitter();
            try {
                this.route.data.subscribe(function (data) {
                    _this.wizardName = data.name;
                });
                this.service.loadWizardRoutes(this.wizardName);
            }
            catch (error) {
                this.error = error;
            }
        }
        DoWizardComponent.prototype.onActivate = function (componentRef) {
            try {
                this.service.registerActiveComponent(componentRef);
            }
            catch (error) {
                this.error = error;
            }
        };
        DoWizardComponent.prototype.goToSubmit = function (data) {
            this.onSubmit.emit(data);
        };
        DoWizardComponent.prototype.goToNextStep = function () {
            this.onNext.emit(this.service.getFormGroup());
        };
        DoWizardComponent.prototype.goToPreviousStep = function () {
            this.onPrevious.emit(this.service.getFormGroup());
        };
        return DoWizardComponent;
    }());
    DoWizardComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoWizardComponent, deps: [{ token: DoWizardService }, { token: i2__namespace$1.ActivatedRoute }], target: i0__namespace.ɵɵFactoryTarget.Component });
    DoWizardComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoWizardComponent, selector: "do-wizard", inputs: { extra: "extra", loading: "loading" }, outputs: { onNext: "onNext", onPrevious: "onPrevious", onSubmit: "onSubmit" }, ngImport: i0__namespace, template: "<div class=\"animated fadeIn\">\n  <div class=\"do-wizard-container\">\n    <do-wizard-error [error]=\"error\"></do-wizard-error>\n    <do-wizard-navigation></do-wizard-navigation>\n    <div class=\"do-wizard-content-container\">\n      <router-outlet (activate)=\"onActivate($event)\"></router-outlet>\n    </div>\n    <div class=\"do-wizard-footer\">\n      <do-wizard-buttons\n        [extra]=\"extra\"\n        [disabled]=\"loading\"\n        (onNext)=\"goToNextStep()\"\n        (onPrevious)=\"goToPreviousStep()\"\n        (onSubmit)=\"goToSubmit($event)\">\n        <div buttonextra *ngIf=\"extra\">\n          <ng-content select=\"[buttonextra]\"></ng-content>\n        </div>\n      </do-wizard-buttons>\n    </div>\n  </div>\n</div>", styles: [".nb-theme-default .do-wizard-container{position:relative;display:block;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;border-radius:.25rem;border:1px solid #edf1f7;margin-bottom:1.5rem}.nb-theme-default .do-wizard-container .do-wizard-content-container{position:relative;margin:0;padding:1.25rem;border:0 solid #D4D4D4;text-align:left}.nb-theme-default nav.do-wizard-navigation{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;border-bottom:1px solid #dee2e6}.nb-theme-default nav.do-wizard-navigation ul.do-wizard-navigation-list{list-style:none;padding:0;margin:0;width:100%}.nb-theme-default nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item{display:list-item;position:relative;float:left;cursor:pointer;line-height:1.875rem}.nb-theme-default nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div{border:none;text-decoration:none;outline-style:none;background:transparent}.nb-theme-default nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div i.do-wizard-icon{position:relative;top:7px;border:solid 1px #fff;border-radius:50%;padding:5px}.nb-theme-default div.do-wizard-footer{padding:.75rem 1.25rem;background-color:#fff;border-top:1px solid #edf1f7}.nb-theme-default div.do-wizard-buttons-container div.do-wizard-buttons{display:grid;grid-template-columns:1fr 1fr;grid-template-areas:\"btn-left btn-right\"}.nb-theme-default div.do-wizard-buttons-container div.do-wizard-buttons button.do-wizard-button-previous{grid-area:btn-left;justify-self:start}.nb-theme-default div.do-wizard-buttons-container div.do-wizard-buttons button.do-wizard-button-next{grid-area:btn-right;justify-self:end}.nb-theme-default div.do-wizard-buttons-container div.do-wizard-buttons button.do-wizard-button-finish{grid-area:btn-right;justify-self:end}.nb-theme-default div.do-wizard-buttons-container div.do-wizard-buttons div.do-wizard-button-left{grid-area:btn-left;justify-self:start}.nb-theme-default div.do-wizard-buttons-container div.do-wizard-buttons div.do-wizard-button-right{grid-area:btn-right;justify-self:end}@media screen and (max-width: 768px){.nb-theme-default .do-wizard-container li.do-wizard-navigation-list-item{float:none!important;border-right:none!important}}.nb-theme-dark .do-wizard-container{position:relative;display:block;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#222b45;border-radius:.25rem;border:1px solid #151a30;margin-bottom:1.5rem}.nb-theme-dark .do-wizard-container .do-wizard-content-container{position:relative;margin:0;padding:1.25rem;border:0 solid #D4D4D4;text-align:left}.nb-theme-dark nav.do-wizard-navigation{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;border-bottom:1px solid #dee2e6}.nb-theme-dark nav.do-wizard-navigation ul.do-wizard-navigation-list{list-style:none;padding:0;margin:0;width:100%}.nb-theme-dark nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item{display:list-item;position:relative;float:left;cursor:pointer;line-height:1.875rem}.nb-theme-dark nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div{border:none;text-decoration:none;outline-style:none;background:transparent}.nb-theme-dark nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div i.do-wizard-icon{position:relative;top:7px;border:solid 1px #fff;border-radius:50%;padding:5px}.nb-theme-dark div.do-wizard-footer{padding:.75rem 1.25rem;background-color:#222b45;border-top:1px solid #151a30}.nb-theme-dark div.do-wizard-buttons-container div.do-wizard-buttons{display:grid;grid-template-columns:1fr 1fr;grid-template-areas:\"btn-left btn-right\"}.nb-theme-dark div.do-wizard-buttons-container div.do-wizard-buttons button.do-wizard-button-previous{grid-area:btn-left;justify-self:start}.nb-theme-dark div.do-wizard-buttons-container div.do-wizard-buttons button.do-wizard-button-next{grid-area:btn-right;justify-self:end}.nb-theme-dark div.do-wizard-buttons-container div.do-wizard-buttons button.do-wizard-button-finish{grid-area:btn-right;justify-self:end}.nb-theme-dark div.do-wizard-buttons-container div.do-wizard-buttons div.do-wizard-button-left{grid-area:btn-left;justify-self:start}.nb-theme-dark div.do-wizard-buttons-container div.do-wizard-buttons div.do-wizard-button-right{grid-area:btn-right;justify-self:end}@media screen and (max-width: 768px){.nb-theme-dark .do-wizard-container li.do-wizard-navigation-list-item{float:none!important;border-right:none!important}}.nb-theme-cosmic .do-wizard-container{position:relative;display:block;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#323259;border-radius:.25rem;border:1px solid #1b1b38;margin-bottom:1.5rem}.nb-theme-cosmic .do-wizard-container .do-wizard-content-container{position:relative;margin:0;padding:1.25rem;border:0 solid #D4D4D4;text-align:left}.nb-theme-cosmic nav.do-wizard-navigation{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;border-bottom:1px solid #dee2e6}.nb-theme-cosmic nav.do-wizard-navigation ul.do-wizard-navigation-list{list-style:none;padding:0;margin:0;width:100%}.nb-theme-cosmic nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item{display:list-item;position:relative;float:left;cursor:pointer;line-height:1.875rem}.nb-theme-cosmic nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div{border:none;text-decoration:none;outline-style:none;background:transparent}.nb-theme-cosmic nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div i.do-wizard-icon{position:relative;top:7px;border:solid 1px #fff;border-radius:50%;padding:5px}.nb-theme-cosmic div.do-wizard-footer{padding:.75rem 1.25rem;background-color:#323259;border-top:1px solid #1b1b38}.nb-theme-cosmic div.do-wizard-buttons-container div.do-wizard-buttons{display:grid;grid-template-columns:1fr 1fr;grid-template-areas:\"btn-left btn-right\"}.nb-theme-cosmic div.do-wizard-buttons-container div.do-wizard-buttons button.do-wizard-button-previous{grid-area:btn-left;justify-self:start}.nb-theme-cosmic div.do-wizard-buttons-container div.do-wizard-buttons button.do-wizard-button-next{grid-area:btn-right;justify-self:end}.nb-theme-cosmic div.do-wizard-buttons-container div.do-wizard-buttons button.do-wizard-button-finish{grid-area:btn-right;justify-self:end}.nb-theme-cosmic div.do-wizard-buttons-container div.do-wizard-buttons div.do-wizard-button-left{grid-area:btn-left;justify-self:start}.nb-theme-cosmic div.do-wizard-buttons-container div.do-wizard-buttons div.do-wizard-button-right{grid-area:btn-right;justify-self:end}@media screen and (max-width: 768px){.nb-theme-cosmic .do-wizard-container li.do-wizard-navigation-list-item{float:none!important;border-right:none!important}}.nb-theme-corporate .do-wizard-container{position:relative;display:block;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;border-radius:.25rem;border:1px solid #edf1f7;margin-bottom:1.5rem}.nb-theme-corporate .do-wizard-container .do-wizard-content-container{position:relative;margin:0;padding:1.25rem;border:0 solid #D4D4D4;text-align:left}.nb-theme-corporate nav.do-wizard-navigation{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;border-bottom:1px solid #dee2e6}.nb-theme-corporate nav.do-wizard-navigation ul.do-wizard-navigation-list{list-style:none;padding:0;margin:0;width:100%}.nb-theme-corporate nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item{display:list-item;position:relative;float:left;cursor:pointer;line-height:1.875rem}.nb-theme-corporate nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div{border:none;text-decoration:none;outline-style:none;background:transparent}.nb-theme-corporate nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div i.do-wizard-icon{position:relative;top:7px;border:solid 1px #fff;border-radius:50%;padding:5px}.nb-theme-corporate div.do-wizard-footer{padding:.75rem 1.25rem;background-color:#fff;border-top:1px solid #edf1f7}.nb-theme-corporate div.do-wizard-buttons-container div.do-wizard-buttons{display:grid;grid-template-columns:1fr 1fr;grid-template-areas:\"btn-left btn-right\"}.nb-theme-corporate div.do-wizard-buttons-container div.do-wizard-buttons button.do-wizard-button-previous{grid-area:btn-left;justify-self:start}.nb-theme-corporate div.do-wizard-buttons-container div.do-wizard-buttons button.do-wizard-button-next{grid-area:btn-right;justify-self:end}.nb-theme-corporate div.do-wizard-buttons-container div.do-wizard-buttons button.do-wizard-button-finish{grid-area:btn-right;justify-self:end}.nb-theme-corporate div.do-wizard-buttons-container div.do-wizard-buttons div.do-wizard-button-left{grid-area:btn-left;justify-self:start}.nb-theme-corporate div.do-wizard-buttons-container div.do-wizard-buttons div.do-wizard-button-right{grid-area:btn-right;justify-self:end}@media screen and (max-width: 768px){.nb-theme-corporate .do-wizard-container li.do-wizard-navigation-list-item{float:none!important;border-right:none!important}}.nb-theme-default nav.do-wizard-navigation{margin-bottom:0;background-color:#fff;border-bottom:1px solid #edf1f7}.nb-theme-default nav.do-wizard-navigation ul.do-wizard-navigation-list{background:#ffffff;overflow:hidden}.nb-theme-default nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item-first div{padding-left:1.25rem!important}@media (max-width: 767.98px){.nb-theme-default nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div{padding-left:1.25rem!important}}.nb-theme-default nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div{padding:.844rem 0 .844rem 3rem;position:relative;display:block;border:0;border-radius:0;outline-style:none;color:#fff;background:#00d68f}.nb-theme-default nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div:after{content:\"\";display:block;width:0;height:0;border-top:50px solid transparent;border-bottom:50px solid transparent;border-left:30px solid #00d68f;position:absolute;top:50%;margin-top:-50px;left:100%;z-index:2}.nb-theme-default nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div:before{content:\" \";display:block;width:0;height:0;border-top:50px solid transparent;border-bottom:50px solid transparent;border-left:30px solid #e4e9f2;position:absolute;top:50%;margin-top:-50px;margin-left:1px;left:100%;z-index:1}.nb-theme-default nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item:first-child div{padding-left:15px}.nb-theme-default nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div.do-wizard-navigation-active{background:#3366ff!important}.nb-theme-default nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div.do-wizard-navigation-active:after{border-left:30px solid #3366ff!important}.nb-theme-default nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div.do-wizard-navigation-disabled{background:#f7f9fc!important;cursor:not-allowed;color:#8f9bb37a}.nb-theme-default nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div.do-wizard-navigation-disabled:after{border-left:30px solid #f7f9fc!important}.nb-theme-dark nav.do-wizard-navigation{margin-bottom:0;background-color:#222b45;border-bottom:1px solid #151a30}.nb-theme-dark nav.do-wizard-navigation ul.do-wizard-navigation-list{background:#222b45;overflow:hidden}.nb-theme-dark nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item-first div{padding-left:1.25rem!important}@media (max-width: 767.98px){.nb-theme-dark nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div{padding-left:1.25rem!important}}.nb-theme-dark nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div{padding:.844rem 0 .844rem 3rem;position:relative;display:block;border:0;border-radius:0;outline-style:none;color:#fff;background:#00d68f}.nb-theme-dark nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div:after{content:\"\";display:block;width:0;height:0;border-top:50px solid transparent;border-bottom:50px solid transparent;border-left:30px solid #00d68f;position:absolute;top:50%;margin-top:-50px;left:100%;z-index:2}.nb-theme-dark nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div:before{content:\" \";display:block;width:0;height:0;border-top:50px solid transparent;border-bottom:50px solid transparent;border-left:30px solid #101426;position:absolute;top:50%;margin-top:-50px;margin-left:1px;left:100%;z-index:1}.nb-theme-dark nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item:first-child div{padding-left:15px}.nb-theme-dark nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div.do-wizard-navigation-active{background:#3366ff!important}.nb-theme-dark nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div.do-wizard-navigation-active:after{border-left:30px solid #3366ff!important}.nb-theme-dark nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div.do-wizard-navigation-disabled{background:#192038!important;cursor:not-allowed;color:#8f9bb37a}.nb-theme-dark nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div.do-wizard-navigation-disabled:after{border-left:30px solid #192038!important}.nb-theme-cosmic nav.do-wizard-navigation{margin-bottom:0;background-color:#323259;border-bottom:1px solid #1b1b38}.nb-theme-cosmic nav.do-wizard-navigation ul.do-wizard-navigation-list{background:#323259;overflow:hidden}.nb-theme-cosmic nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item-first div{padding-left:1.25rem!important}@media (max-width: 767.98px){.nb-theme-cosmic nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div{padding-left:1.25rem!important}}.nb-theme-cosmic nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div{padding:.844rem 0 .844rem 3rem;position:relative;display:block;border:0;border-radius:0;outline-style:none;color:#fff;background:#00d68f}.nb-theme-cosmic nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div:after{content:\"\";display:block;width:0;height:0;border-top:50px solid transparent;border-bottom:50px solid transparent;border-left:30px solid #00d68f;position:absolute;top:50%;margin-top:-50px;left:100%;z-index:2}.nb-theme-cosmic nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div:before{content:\" \";display:block;width:0;height:0;border-top:50px solid transparent;border-bottom:50px solid transparent;border-left:30px solid #13132b;position:absolute;top:50%;margin-top:-50px;margin-left:1px;left:100%;z-index:1}.nb-theme-cosmic nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item:first-child div{padding-left:15px}.nb-theme-cosmic nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div.do-wizard-navigation-active{background:#a16eff!important}.nb-theme-cosmic nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div.do-wizard-navigation-active:after{border-left:30px solid #a16eff!important}.nb-theme-cosmic nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div.do-wizard-navigation-disabled{background:#252547!important;cursor:not-allowed;color:#b4b4db7a}.nb-theme-cosmic nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div.do-wizard-navigation-disabled:after{border-left:30px solid #252547!important}.nb-theme-corporate nav.do-wizard-navigation{margin-bottom:0;background-color:#fff;border-bottom:1px solid #edf1f7}.nb-theme-corporate nav.do-wizard-navigation ul.do-wizard-navigation-list{background:#ffffff;overflow:hidden}.nb-theme-corporate nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item-first div{padding-left:1.25rem!important}@media (max-width: 767.98px){.nb-theme-corporate nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div{padding-left:1.25rem!important}}.nb-theme-corporate nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div{padding:.844rem 0 .844rem 3rem;position:relative;display:block;border:0;border-radius:0;outline-style:none;color:#fff;background:#00d68f}.nb-theme-corporate nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div:after{content:\"\";display:block;width:0;height:0;border-top:50px solid transparent;border-bottom:50px solid transparent;border-left:30px solid #00d68f;position:absolute;top:50%;margin-top:-50px;left:100%;z-index:2}.nb-theme-corporate nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div:before{content:\" \";display:block;width:0;height:0;border-top:50px solid transparent;border-bottom:50px solid transparent;border-left:30px solid #e4e9f2;position:absolute;top:50%;margin-top:-50px;margin-left:1px;left:100%;z-index:1}.nb-theme-corporate nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item:first-child div{padding-left:15px}.nb-theme-corporate nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div.do-wizard-navigation-active{background:#3366ff!important}.nb-theme-corporate nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div.do-wizard-navigation-active:after{border-left:30px solid #3366ff!important}.nb-theme-corporate nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div.do-wizard-navigation-disabled{background:#f7f9fc!important;cursor:not-allowed;color:#8f9bb37a}.nb-theme-corporate nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div.do-wizard-navigation-disabled:after{border-left:30px solid #f7f9fc!important}\n"], components: [{ type: DoWizardErrorComponent, selector: "do-wizard-error", inputs: ["error"] }, { type: DoWizardNavigationComponent, selector: "do-wizard-navigation" }, { type: DoWizardButtonsComponent, selector: "do-wizard-buttons", inputs: ["extra", "clearFormOnSubmit", "disabled"], outputs: ["onNext", "onPrevious", "onSubmit"] }], directives: [{ type: i2__namespace$1.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }, { type: i4__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], encapsulation: i0__namespace.ViewEncapsulation.None });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoWizardComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-wizard',
                        styleUrls: ['./do-wizard.component.scss'],
                        templateUrl: './do-wizard.component.html',
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], ctorParameters: function () { return [{ type: DoWizardService }, { type: i2__namespace$1.ActivatedRoute }]; }, propDecorators: { extra: [{
                    type: i0.Input
                }], loading: [{
                    type: i0.Input
                }], onNext: [{
                    type: i0.Output
                }], onPrevious: [{
                    type: i0.Output
                }], onSubmit: [{
                    type: i0.Output
                }] } });

    var DoWizardPageOutletComponent = /** @class */ (function () {
        function DoWizardPageOutletComponent() {
            this.width = 12;
        }
        return DoWizardPageOutletComponent;
    }());
    DoWizardPageOutletComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoWizardPageOutletComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    DoWizardPageOutletComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoWizardPageOutletComponent, selector: "do-wizard-page-outlet", inputs: { width: "width" }, ngImport: i0__namespace, template: "<div class=\"row\">\n  <div class=\"col-lg-{{width}}\">\n      <ng-content select=\"[wizardcontent]\"></ng-content> \n  </div>\n</div>\n", styles: [".nb-theme-default .skeleton{animation:loading 1.7s infinite linear;border-radius:.25rem;background:#dedfe1;background-image:linear-gradient(to right,#dedfe1 0%,#f2f3f5 20%,#dedfe1 40%,#dedfe1 100%)}.nb-theme-dark .skeleton{animation:loading 1.7s infinite linear;border-radius:.25rem;background:#192038;background-image:linear-gradient(to right,#192038 0%,#222b45 20%,#192038 40%,#192038 100%)}.nb-theme-cosmic .skeleton{animation:loading 1.7s infinite linear;border-radius:.25rem;background:#1b1b38;background-image:linear-gradient(to right,#1b1b38 0%,#323259 20%,#1b1b38 40%,#1b1b38 100%)}.nb-theme-corporate .skeleton{animation:loading 1.7s infinite linear;border-radius:.25rem;background:#dedfe1;background-image:linear-gradient(to right,#dedfe1 0%,#f2f3f5 20%,#dedfe1 40%,#dedfe1 100%)}@keyframes loading{0%{background-position:-100px}to{background-position:380px}}.label-skeleton{width:100%;height:2.5rem;line-height:1.5rem;padding:.4375rem 1.125rem}.input-skeleton{width:100%;height:2.5rem;line-height:1.5rem;padding:.4375rem 1.125rem}.texteditor-skeleton{width:100%;height:10.5rem;line-height:1.5rem;padding:.4375rem 1.125rem}.button-skeleton{width:6rem;height:2.5rem;line-height:1rem;margin:0 .125rem}button[nbButton]{margin:0 .25rem}.reset-left{margin-right:.25rem}.submit-right{margin-left:.25rem}\n"], encapsulation: i0__namespace.ViewEncapsulation.None });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoWizardPageOutletComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-wizard-page-outlet',
                        styleUrls: ['./do-wizard-page-outlet.component.scss'],
                        templateUrl: './do-wizard-page-outlet.component.html',
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], propDecorators: { width: [{
                    type: i0.Input
                }] } });

    var WIZARD_COMPONENTS = [
        DoWizardComponent,
        DoWizardErrorComponent,
        DoWizardNavigationComponent,
        DoWizardButtonsComponent,
        DoWizardPageOutletComponent,
    ];
    var WIZARD_PROVIDERS = [
        DoWizardService,
    ];
    var DoWizardModule = /** @class */ (function () {
        function DoWizardModule() {
        }
        DoWizardModule.forRoot = function () {
            return {
                ngModule: DoWizardModule,
                providers: __spreadArray([], __read(WIZARD_PROVIDERS)),
            };
        };
        return DoWizardModule;
    }());
    DoWizardModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoWizardModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DoWizardModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoWizardModule, declarations: [DoWizardComponent,
            DoWizardErrorComponent,
            DoWizardNavigationComponent,
            DoWizardButtonsComponent,
            DoWizardPageOutletComponent], imports: [i4.CommonModule,
            i2$1.RouterModule,
            i5.TranslateModule,
            i2.NbButtonModule], exports: [DoWizardComponent,
            DoWizardErrorComponent,
            DoWizardNavigationComponent,
            DoWizardButtonsComponent,
            DoWizardPageOutletComponent] });
    DoWizardModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoWizardModule, imports: [[
                i4.CommonModule,
                i2$1.RouterModule,
                i5.TranslateModule,
                i2.NbButtonModule,
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoWizardModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: __spreadArray([], __read(WIZARD_COMPONENTS)),
                        imports: [
                            i4.CommonModule,
                            i2$1.RouterModule,
                            i5.TranslateModule,
                            i2.NbButtonModule,
                        ],
                        exports: __spreadArray([], __read(WIZARD_COMPONENTS)),
                    }]
            }] });

    function fadeIn() {
        return [
            animations.transition(':enter', [
                animations.style({ opacity: 0 }),
                animations.animate('400ms ease-in', animations.style({ opacity: 1 })),
            ]),
        ];
    }

    var BaseComponent = /** @class */ (function () {
        function BaseComponent(injector) {
            this.injector = injector;
            this.destroy$ = new rxjs.Subject();
            this.api = injector.get(doCore.API);
            this.http = injector.get(doCore.HTTP_SERVICE);
        }
        BaseComponent.prototype.exec = function (serviceName, apiName, body, headers, params, pathVariable, responseType) {
            return this.http.HTTP_AUTH(this.api[serviceName][apiName], body, headers, params, pathVariable, responseType);
        };
        BaseComponent.prototype.initProgress = function () {
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
        BaseComponent.prototype.doneProgress = function () {
            document.querySelectorAll('.pace-running').forEach(function (pace) {
                pace.className = pace.className.replace('pace-running', 'pace-done');
            });
            document.querySelectorAll('.pace-active').forEach(function (pace) {
                pace.className = pace.className.replace('pace-active', 'pace-inactive');
            });
        };
        BaseComponent.prototype.setProgress = function (progress) {
            this.progressDOM.style.transform = 'translate3d(' + progress + '%, 0px, 0px)';
            this.progressDOM.getAttributeNode('data-progress-text').value = progress + '%';
            this.progressDOM.getAttributeNode('data-progress').value = progress.toString();
        };
        return BaseComponent;
    }());

    var BaseFormComponent = /** @class */ (function (_super) {
        __extends(BaseFormComponent, _super);
        function BaseFormComponent(injector, controlsConfig) {
            var _this = _super.call(this, injector) || this;
            _this.injector = injector;
            _this.submitSubject$ = new rxjs.Subject();
            _this.disabled = false;
            _this.loadingForm = false;
            _this.formBuilder = injector.get(i1.FormBuilder);
            if (controlsConfig) {
                _this.formGroup = _this.formBuilder.group(controlsConfig);
            }
            _this.toastr = injector.get(DoToastrService);
            return _this;
        }
        BaseFormComponent.prototype.onDestroy = function () {
            this.destroy$.next(true);
            this.destroy$.complete();
            this.destroy$.unsubscribe();
        };
        BaseFormComponent.prototype.onSubmit = function (body, serviceName, apiName, disableToastr) {
            var _this = this;
            var _a;
            this.disabled = true;
            this.initProgress();
            this.setProgress(65);
            this.exec(serviceName, apiName, body ? body : (_a = this.formGroup) === null || _a === void 0 ? void 0 : _a.value)
                .subscribe(function (success) {
                _this.setProgress(95);
                if (!body) {
                    _this.formGroup.markAsPristine();
                }
                _this.disabled = false;
                if (success.respStatusCode) {
                    if (!disableToastr) {
                        _this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
                    }
                }
                _this.doneProgress();
                _this.submitSubject$.next(success);
            }, function (error) {
                _this.disabled = false;
                if (!disableToastr) {
                    if (error instanceof http.HttpErrorResponse) {
                        error = error['error'];
                    }
                    _this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
                }
                _this.doneProgress();
                _this.submitSubject$.next(error);
            });
            return this.submitSubject$.asObservable();
        };
        BaseFormComponent.prototype.onReset = function () { };
        return BaseFormComponent;
    }(BaseComponent));

    var BaseFilterComponent = /** @class */ (function (_super) {
        __extends(BaseFilterComponent, _super);
        function BaseFilterComponent(injector, filtersConfig, controlsConfig) {
            var _this = _super.call(this, injector, controlsConfig) || this;
            _this.injector = injector;
            _this.rows = [];
            if (filtersConfig) {
                _this.formGroupFilter = _this.formBuilder.group(filtersConfig);
            }
            return _this;
        }
        BaseFilterComponent.prototype.doFilterAdvanced = function (keyword) {
            this.keyword = keyword;
        };
        return BaseFilterComponent;
    }(BaseFormComponent));

    var Page = /** @class */ (function () {
        function Page() {
        }
        return Page;
    }());
    var DatatableParamModel = /** @class */ (function () {
        function DatatableParamModel() {
        }
        return DatatableParamModel;
    }());
    var DatatableFilter = /** @class */ (function () {
        function DatatableFilter() {
            this.type = 'input';
        }
        return DatatableFilter;
    }());

    var SelectResponseModel = /** @class */ (function () {
        function SelectResponseModel() {
            this.disabled = false;
        }
        return SelectResponseModel;
    }());
    var SelectParamModel = /** @class */ (function () {
        function SelectParamModel() {
        }
        return SelectParamModel;
    }());

    var RadioParamModel = /** @class */ (function () {
        function RadioParamModel() {
        }
        return RadioParamModel;
    }());

    var DoWizardStep = /** @class */ (function () {
        function DoWizardStep(injector, formGroupName, controlsConfig) {
            this.injector = injector;
            this.formGroupName = formGroupName;
            this.disabled = false;
            this.loadingForm = false;
            this.destroy$ = new rxjs.Subject();
            this.api = injector.get(doCore.API);
            this.http = injector.get(doCore.HTTP_SERVICE);
            this.formBuilder = injector.get(i1.FormBuilder);
            this.wizardService = injector.get(DoWizardService);
            this.router = injector.get(i2$1.Router);
            this.formGroup = this.wizardService.getFormGroup();
            this.formGroup.addControl(this.formGroupName, this.formBuilder.group(controlsConfig));
            this.validateRoute();
        }
        DoWizardStep.prototype.isValid = function () {
            return this.formGroup.controls[this.formGroupName].valid;
        };
        DoWizardStep.prototype.onNext = function () {
            this.wizardService.setFormGroup(this.formGroup);
        };
        DoWizardStep.prototype.onPrevious = function () {
            this.wizardService.setFormGroup(this.formGroup);
        };
        return DoWizardStep;
    }());

    /*
     * Public API Surface of do-shared
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.BaseComponent = BaseComponent;
    exports.BaseFilterComponent = BaseFilterComponent;
    exports.BaseFormComponent = BaseFormComponent;
    exports.ContentSelectDirective = ContentSelectDirective;
    exports.CurrencyMaskDirective = CurrencyMaskDirective;
    exports.DatatableFilter = DatatableFilter;
    exports.DatatableParamModel = DatatableParamModel;
    exports.DoBaseModule = DoBaseModule;
    exports.DoButtonComponent = DoButtonComponent;
    exports.DoButtonModule = DoButtonModule;
    exports.DoButtonSubmitComponent = DoButtonSubmitComponent;
    exports.DoCardCollapseComponent = DoCardCollapseComponent;
    exports.DoCheckBoxModule = DoCheckBoxModule;
    exports.DoCheckboxComponent = DoCheckboxComponent;
    exports.DoCollapseComponent = DoCollapseComponent;
    exports.DoContainerOutletComponent = DoContainerOutletComponent;
    exports.DoDatatableBaseComponent = DoDatatableBaseComponent;
    exports.DoDatatableCollapseComponent = DoDatatableCollapseComponent;
    exports.DoDatatableComponent = DoDatatableComponent;
    exports.DoDatatableHeaderComponent = DoDatatableHeaderComponent;
    exports.DoDatatableModule = DoDatatableModule;
    exports.DoDatePickerComponent = DoDatePickerComponent;
    exports.DoDatePickerModule = DoDatePickerModule;
    exports.DoDatePickerRangeComponent = DoDatePickerRangeComponent;
    exports.DoEditorModule = DoEditorModule;
    exports.DoErrorMessageComponent = DoErrorMessageComponent;
    exports.DoImageModule = DoImageModule;
    exports.DoInputBaseIconComponent = DoInputBaseIconComponent;
    exports.DoInputCurrencyComponent = DoInputCurrencyComponent;
    exports.DoInputFileComponent = DoInputFileComponent;
    exports.DoInputIconComponent = DoInputIconComponent;
    exports.DoInputModule = DoInputModule;
    exports.DoInputTextComponent = DoInputTextComponent;
    exports.DoLabelModule = DoLabelModule;
    exports.DoLabelTextComponent = DoLabelTextComponent;
    exports.DoPageOutletComponent = DoPageOutletComponent;
    exports.DoRadioComponent = DoRadioComponent;
    exports.DoRadioModule = DoRadioModule;
    exports.DoSelectComponent = DoSelectComponent;
    exports.DoSelectModule = DoSelectModule;
    exports.DoTextEditorComponent = DoTextEditorComponent;
    exports.DoTextareaComponent = DoTextareaComponent;
    exports.DoToastrModule = DoToastrModule;
    exports.DoToastrService = DoToastrService;
    exports.DoWarnMessageComponent = DoWarnMessageComponent;
    exports.DoWizardButtonsComponent = DoWizardButtonsComponent;
    exports.DoWizardComponent = DoWizardComponent;
    exports.DoWizardErrorComponent = DoWizardErrorComponent;
    exports.DoWizardModule = DoWizardModule;
    exports.DoWizardNavigationComponent = DoWizardNavigationComponent;
    exports.DoWizardPageOutletComponent = DoWizardPageOutletComponent;
    exports.DoWizardService = DoWizardService;
    exports.DoWizardStep = DoWizardStep;
    exports.DragDropDirective = DragDropDirective;
    exports.EqualValidator = EqualValidator;
    exports.ImageUploadComponent = ImageUploadComponent;
    exports.MaskedInputDirective = MaskedInputDirective;
    exports.NotEqualValidator = NotEqualValidator;
    exports.Page = Page;
    exports.RadioParamModel = RadioParamModel;
    exports.SelectParamModel = SelectParamModel;
    exports.SelectResponseModel = SelectResponseModel;
    exports.fadeIn = fadeIn;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=dongkap-do-shared.umd.js.map
