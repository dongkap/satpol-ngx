(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@nebular/theme'), require('@ngx-translate/core'), require('@dongkap/do-theme'), require('@dongkap/do-shared'), require('rxjs/operators'), require('@dongkap/do-core'), require('@angular/router'), require('@dongkap/do-auth'), require('@angular/common'), require('@angular/common/http'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@dongkap/do-extra', ['exports', '@angular/core', '@angular/forms', '@nebular/theme', '@ngx-translate/core', '@dongkap/do-theme', '@dongkap/do-shared', 'rxjs/operators', '@dongkap/do-core', '@angular/router', '@dongkap/do-auth', '@angular/common', '@angular/common/http', 'rxjs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.dongkap = global.dongkap || {}, global.dongkap["do-extra"] = {}), global.ng.core, global.ng.forms, global.i1$1, global.i3, global.doTheme, global.i2, global.rxjs.operators, global.i6, global.ng.router, global.i1$2, global.ng.common, global.ng.common.http, global.rxjs));
})(this, (function (exports, i0, i2$1, i1$1, i3, doTheme, i2, operators, i6, i1, i1$2, i2$2, http, rxjs) { 'use strict';

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
    var i2__namespace$1 = /*#__PURE__*/_interopNamespace(i2$1);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i6__namespace = /*#__PURE__*/_interopNamespace(i6);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i1__namespace$2 = /*#__PURE__*/_interopNamespace(i1$2);
    var i2__namespace$2 = /*#__PURE__*/_interopNamespace(i2$2);

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

    var ChangePasswordPageComponent = /** @class */ (function (_super) {
        __extends(ChangePasswordPageComponent, _super);
        function ChangePasswordPageComponent(injector) {
            var _this = _super.call(this, injector, {
                password: [],
                newPassword: [],
                confirmPassword: [],
            }) || this;
            _this.injector = injector;
            _this.passwordPattern = i6.Pattern.PASSWORD_MEDIUM;
            _this.enc = injector.get(i6.EncryptionService);
            _this.oauthResource = injector.get(i6.OAUTH_INFO);
            return _this;
        }
        ChangePasswordPageComponent.prototype.onSubmit = function () {
            var _this = this;
            var data = {
                password: this.enc.encryptAES(this.oauthResource['aes_key'], this.formGroup.get('password').value),
                newPassword: this.enc.encryptAES(this.oauthResource['aes_key'], this.formGroup.get('newPassword').value),
                confirmPassword: this.enc.encryptAES(this.oauthResource['aes_key'], this.formGroup.get('confirmPassword').value),
            };
            _super.prototype.onSubmit.call(this, data, 'security', 'change-password')
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (response) {
                if (response) {
                    switch (response.respStatusCode) {
                        case i6.ResponseCode.ERR_SCR0002.toString():
                            _this.formGroup.controls['password'].setErrors({
                                incorrect: true,
                            });
                            break;
                        case i6.ResponseCode.ERR_SCR0006.toString():
                            _this.formGroup.controls['newPassword'].setErrors({
                                equal: true,
                            });
                            break;
                        default:
                            break;
                    }
                }
            });
        };
        return ChangePasswordPageComponent;
    }(i2.BaseFormComponent));
    ChangePasswordPageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ChangePasswordPageComponent, deps: [{ token: i0__namespace.Injector }], target: i0__namespace.ɵɵFactoryTarget.Component });
    ChangePasswordPageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ChangePasswordPageComponent, selector: "do-change-password-page", usesInheritance: true, ngImport: i0__namespace, template: "<do-page-outlet [header]=\"'Change Password'\">\n  <form [formGroup]=\"formGroup\" pagecontent>\n    <do-input-text\n      [name]=\"'password'\"\n      [label]=\"'Password'\"\n      [type]=\"'password'\"\n      [required]=\"true\"\n      formControlName=\"password\">\n    </do-input-text>\n    <do-input-text\n      [name]=\"'newPassword'\"\n      [label]=\"'New Password'\"\n      [type]=\"'password'\"\n      [required]=\"true\"\n      [pattern]=\"passwordPattern\"\n      doValidateNotEqual=\"password\"\n      formControlName=\"newPassword\">\n    </do-input-text>\n    <do-input-text\n      [name]=\"'confirmPassword'\"\n      [label]=\"'Confirm Password'\"\n      [type]=\"'password'\"\n      [required]=\"true\"\n      doValidateEqual=\"newPassword\"\n      formControlName=\"confirmPassword\">\n    </do-input-text>\n  </form>\n  <div class=\"offset-sm-3 col-sm-9\" pagefooter>\n    <do-button\n      (onSubmit)=\"onSubmit()\"\n      [name]=\"'Update Password'\"\n      [formGroupButton]=\"formGroup\"\n      [disabledButton]=\"disabled\">\n    </do-button>\n  </div>\n</do-page-outlet>\n", styles: [""], components: [{ type: i2__namespace.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i2__namespace.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type", "togglePassword", "showPassword"] }, { type: i2__namespace.DoButtonComponent, selector: "do-button", inputs: ["formGroupButton", "name", "disabledButton", "type", "status", "size", "skeleton"], outputs: ["onSubmit"] }], directives: [{ type: i2__namespace$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2__namespace$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2__namespace$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2__namespace$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2__namespace$1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i2__namespace$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i2__namespace.NotEqualValidator, selector: "[doValidateNotEqual][formControlName],[doValidateNotEqual][formControl],[doValidateNotEqual][ngModel]" }, { type: i2__namespace$1.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { type: i2__namespace.EqualValidator, selector: "[doValidateEqual][formControlName],[doValidateEqual][formControl],[doValidateEqual][ngModel]" }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ChangePasswordPageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-change-password-page',
                        styleUrls: ['./change-password-page.component.scss'],
                        templateUrl: './change-password-page.component.html',
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }]; } });

    var ExtraComponent = /** @class */ (function () {
        function ExtraComponent() {
        }
        return ExtraComponent;
    }());
    ExtraComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ExtraComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    ExtraComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ExtraComponent, selector: "do-extra", ngImport: i0__namespace, template: "\n    <router-outlet></router-outlet>\n  ", isInline: true, directives: [{ type: i1__namespace.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ExtraComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-extra',
                        template: "\n    <router-outlet></router-outlet>\n  ",
                    }]
            }] });

    var DeactivatedPromptComponent = /** @class */ (function () {
        function DeactivatedPromptComponent(ref) {
            this.ref = ref;
            this.disabled = false;
            this.showPassword = false;
            this.icon = 'eye-outline';
        }
        DeactivatedPromptComponent.prototype.onShowPassword = function () {
            this.showPassword = !this.showPassword;
            this.icon = this.showPassword ? 'eye-off-outline' : 'eye-outline';
        };
        DeactivatedPromptComponent.prototype.submit = function (password) {
            this.disabled = true;
            this.ref.close(password);
        };
        return DeactivatedPromptComponent;
    }());
    DeactivatedPromptComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DeactivatedPromptComponent, deps: [{ token: i1__namespace$1.NbDialogRef }], target: i0__namespace.ɵɵFactoryTarget.Component });
    DeactivatedPromptComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DeactivatedPromptComponent, selector: "do-deactivated-prompt", ngImport: i0__namespace, template: "<nb-card>\n  <nb-card-header>\n    <h6 class=\"text-danger deactivated-label\">\n        {{ 'Deactivate Account' | translate }}\n    </h6>\n  </nb-card-header>\n  <nb-card-body>\n    <p>\n      {{ 'message.deactivate-form' | translate }}\n    </p>\n    <p>\n      {{ 'message.input-password' | translate }}\n    </p>\n    <div class=\"input-group\">\n      <input\n        [(ngModel)]=\"password\"\n        [type]=\"!showPassword ? 'password' : 'text'\"\n        nbInput\n        class=\"deactivated-password\"\n        placeholder=\"{{ 'Password' | translate }}\">\n      <div class=\"input-icon\">\n        <nb-icon [options]=\"{ animation: { type: 'zoom' } }\" class=\"input-icon-hover\" icon=\"{{icon}}\" (click)=\"onShowPassword()\"></nb-icon>\n      </div>\n    </div>\n  </nb-card-body>\n  <nb-card-footer>\n    <button\n      type=\"submit\"\n      status=\"danger\"\n      size=\"large\"\n      class=\"deactivated-button\"\n      [disabled]=\"!password || disabled\"\n      (click)=\"submit(password)\"\n      nbButton>\n      {{ 'message.button-deactivate' | translate }}\n    </button>\n  </nb-card-footer>\n</nb-card>\n", styles: [".nb-theme-default :host nb-icon{color:#8f9bb3}.nb-theme-default :host .input-icon{position:absolute;right:0;padding:.7rem}.nb-theme-default :host .input-icon-hover:hover{color:#598bff;cursor:pointer}.nb-theme-default :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-default :host .cancel{margin-right:1rem}.nb-theme-default :host button.deactivated-button{width:100%}@media (max-width: 767.98px){.nb-theme-default :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-default :host button.deactivated-button{font-size:.6rem}}.nb-theme-dark :host nb-icon{color:#8f9bb3}.nb-theme-dark :host .input-icon{position:absolute;right:0;padding:.7rem}.nb-theme-dark :host .input-icon-hover:hover{color:#598bff;cursor:pointer}.nb-theme-dark :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-dark :host .cancel{margin-right:1rem}.nb-theme-dark :host button.deactivated-button{width:100%}@media (max-width: 767.98px){.nb-theme-dark :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-dark :host button.deactivated-button{font-size:.6rem}}.nb-theme-cosmic :host nb-icon{color:#8f9bb3}.nb-theme-cosmic :host .input-icon{position:absolute;right:0;padding:.7rem}.nb-theme-cosmic :host .input-icon-hover:hover{color:#598bff;cursor:pointer}.nb-theme-cosmic :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-cosmic :host .cancel{margin-right:1rem}.nb-theme-cosmic :host button.deactivated-button{width:100%}@media (max-width: 767.98px){.nb-theme-cosmic :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-cosmic :host button.deactivated-button{font-size:.6rem}}.nb-theme-corporate :host nb-icon{color:#8f9bb3}.nb-theme-corporate :host .input-icon{position:absolute;right:0;padding:.7rem}.nb-theme-corporate :host .input-icon-hover:hover{color:#598bff;cursor:pointer}.nb-theme-corporate :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-corporate :host .cancel{margin-right:1rem}.nb-theme-corporate :host button.deactivated-button{width:100%}@media (max-width: 767.98px){.nb-theme-corporate :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-corporate :host button.deactivated-button{font-size:.6rem}}\n"], components: [{ type: i1__namespace$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1__namespace$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1__namespace$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i1__namespace$1.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }, { type: i1__namespace$1.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i1__namespace$1.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i1__namespace$1.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i2__namespace$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2__namespace$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2__namespace$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], pipes: { "translate": i3__namespace.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DeactivatedPromptComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-deactivated-prompt',
                        templateUrl: 'deactivated-prompt.component.html',
                        styleUrls: ['deactivated-prompt.component.scss'],
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.NbDialogRef }]; } });

    var DeactivatedProviderPromptComponent = /** @class */ (function () {
        function DeactivatedProviderPromptComponent(ref) {
            this.ref = ref;
            this.disabled = false;
            this.patternEmail = i6.Pattern.EMAIL;
            this.form = new i2$1.FormGroup({
                email: new i2$1.FormControl(),
            });
        }
        DeactivatedProviderPromptComponent.prototype.submit = function () {
            this.disabled = true;
            this.ref.close(this.form.get('email').value);
        };
        return DeactivatedProviderPromptComponent;
    }());
    DeactivatedProviderPromptComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DeactivatedProviderPromptComponent, deps: [{ token: i1__namespace$1.NbDialogRef }], target: i0__namespace.ɵɵFactoryTarget.Component });
    DeactivatedProviderPromptComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DeactivatedProviderPromptComponent, selector: "do-deactivated-provider-prompt", ngImport: i0__namespace, template: "<nb-card>\n  <nb-card-header>\n    <h6 class=\"text-danger deactivated-label\">\n        {{ 'Deactivate Account' | translate }}\n    </h6>\n  </nb-card-header>\n  <nb-card-body>\n    <form [formGroup]=\"form\" aria-labelledby=\"title\">\n    <p>\n      {{ 'message.deactivate-form' | translate }}\n    </p>\n    <p>\n      {{ 'message.input-email' | translate }}\n    </p>\n    <input\n      [formControlName]=\"'email'\"\n      type=\"text\"\n      [required]=\"true\"\n      [pattern]=\"patternEmail\"\n      nbInput\n      class=\"deactivated-email\"\n      placeholder=\"Email\">\n    </form>\n  </nb-card-body>\n  <nb-card-footer>\n    <button\n      type=\"submit\"\n      status=\"danger\"\n      size=\"large\"\n      class=\"deactivated-button\"\n      [disabled]=\"!form.valid || disabled\"\n      (click)=\"submit()\"\n      nbButton>\n      {{ 'message.button-deactivate' | translate }}\n    </button>\n  </nb-card-footer>\n</nb-card>\n", styles: [".nb-theme-default :host input.deactivated-email{max-width:unset;width:100%}.nb-theme-default :host .cancel{margin-right:1rem}.nb-theme-default :host button.deactivated-button{width:100%}@media (max-width: 767.98px){.nb-theme-default :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-default :host button.deactivated-button{font-size:.6rem}}.nb-theme-dark :host input.deactivated-email{max-width:unset;width:100%}.nb-theme-dark :host .cancel{margin-right:1rem}.nb-theme-dark :host button.deactivated-button{width:100%}@media (max-width: 767.98px){.nb-theme-dark :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-dark :host button.deactivated-button{font-size:.6rem}}.nb-theme-cosmic :host input.deactivated-email{max-width:unset;width:100%}.nb-theme-cosmic :host .cancel{margin-right:1rem}.nb-theme-cosmic :host button.deactivated-button{width:100%}@media (max-width: 767.98px){.nb-theme-cosmic :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-cosmic :host button.deactivated-button{font-size:.6rem}}.nb-theme-corporate :host input.deactivated-email{max-width:unset;width:100%}.nb-theme-corporate :host .cancel{margin-right:1rem}.nb-theme-corporate :host button.deactivated-button{width:100%}@media (max-width: 767.98px){.nb-theme-corporate :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-corporate :host button.deactivated-button{font-size:.6rem}}\n"], components: [{ type: i1__namespace$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1__namespace$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1__namespace$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i1__namespace$1.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i1__namespace$1.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i2__namespace$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2__namespace$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2__namespace$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1__namespace$1.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i2__namespace$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2__namespace$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2__namespace$1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i2__namespace$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i2__namespace$1.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }], pipes: { "translate": i3__namespace.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DeactivatedProviderPromptComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-deactivated-provider-prompt',
                        templateUrl: 'deactivated-provider-prompt.component.html',
                        styleUrls: ['deactivated-provider-prompt.component.scss'],
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.NbDialogRef }]; } });

    var SwitchRolePageComponent = /** @class */ (function (_super) {
        __extends(SwitchRolePageComponent, _super);
        function SwitchRolePageComponent(injector, authIndexedDB) {
            var _this = _super.call(this, injector, {
                role: [],
            }) || this;
            _this.injector = injector;
            _this.authIndexedDB = authIndexedDB;
            _this.apiSelectUserRole = _this.api['security']['select-user-role'];
            return _this;
        }
        SwitchRolePageComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.loadingForm = true;
            this.exec('security', 'get-user-role')
                .subscribe(function (success) {
                _this.loadingForm = false;
                _this.authority = success['authority'];
                _this.formGroup.controls['role'].setValue(success['description']);
                _this.formGroup.markAsPristine();
            }, function (error) {
                _this.loadingForm = true;
                if (error.respStatusMessage) {
                    _this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
                }
            });
        };
        SwitchRolePageComponent.prototype.onSubmit = function () {
            var _this = this;
            if (this.formGroup.get('role').value['value']) {
                this.authority = this.formGroup.get('role').value['value'];
            }
            this.disabled = true;
            this.loadingForm = true;
            var data = {
                authority: this.authority
            };
            _super.prototype.onSubmit.call(this, data, 'security', 'switch-role')
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (response) {
                if (response) {
                    _this.toastr.showI18n('notification.default', true);
                    Promise.all([
                        _this.authIndexedDB.putEnc('menus', JSON.stringify(response['main'])),
                        _this.authIndexedDB.putEnc('extras', JSON.stringify(response['extra'])),
                    ]).then(function () {
                        _this.loadingForm = false;
                        window.location.href = '/app/home';
                    });
                }
            });
        };
        return SwitchRolePageComponent;
    }(i2.BaseFormComponent));
    SwitchRolePageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: SwitchRolePageComponent, deps: [{ token: i0__namespace.Injector }, { token: i1__namespace$2.AuthIndexedDBService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    SwitchRolePageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: SwitchRolePageComponent, selector: "do-switch-role-page", usesInheritance: true, ngImport: i0__namespace, template: "<do-page-outlet [header]=\"'Switch Role'\">\n  <form [formGroup]=\"formGroup\" pagecontent>\n      <do-select\n      [name]=\"'role'\"\n      [label]=\"'Role'\"\n      [required]=\"true\"\n      [searchable]=\"false\"\n      [skeleton]=\"loadingForm\"\n      [api]=\"apiSelectUserRole\"\n      formControlName=\"role\">\n      </do-select>\n  </form>\n  <div class=\"offset-sm-3 col-sm-9\" pagefooter>\n    <do-button\n      (onSubmit)=\"onSubmit()\"\n      [name]=\"'Switch Role'\"\n      [formGroupButton]=\"formGroup\"\n      [disabledButton]=\"disabled\">\n    </do-button>\n  </div>\n</do-page-outlet>\n", styles: [""], components: [{ type: i2__namespace.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i2__namespace.DoSelectComponent, selector: "do-select", inputs: ["placeholder", "colLabel", "colInput", "items", "multiple", "loading", "addTag", "closeOnSelect", "clearable", "searchable", "hideSelected", "minTermLength", "maxTermLength", "api", "limit", "offsetNextLoad", "queryParam"], outputs: ["onSelect", "onClear"] }, { type: i2__namespace.DoButtonComponent, selector: "do-button", inputs: ["formGroupButton", "name", "disabledButton", "type", "status", "size", "skeleton"], outputs: ["onSubmit"] }], directives: [{ type: i2__namespace$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2__namespace$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2__namespace$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2__namespace$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2__namespace$1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i2__namespace$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: SwitchRolePageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-switch-role-page',
                        styleUrls: ['./switch-role-page.component.scss'],
                        templateUrl: './switch-role-page.component.html',
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }, { type: i1__namespace$2.AuthIndexedDBService }]; } });

    var SecurityPageComponent = /** @class */ (function (_super) {
        __extends(SecurityPageComponent, _super);
        function SecurityPageComponent(injector, dialogService, authIndexedDB) {
            var _this = _super.call(this, injector, {
                password: [],
            }) || this;
            _this.injector = injector;
            _this.dialogService = dialogService;
            _this.authIndexedDB = authIndexedDB;
            _this.authProvider = true;
            _this.enc = injector.get(i6.EncryptionService);
            _this.oauthResource = injector.get(i6.OAUTH_INFO);
            _this.authToken = injector.get(i1$2.AuthTokenService);
            _this.authIndexedDB.getEnc('provider').then(function (value) {
                _this.provider = {
                    value: value,
                };
                if (value === 'local') {
                    _this.authProvider = false;
                }
            });
            return _this;
        }
        SecurityPageComponent.prototype.onSubmit = function () {
            var _this = this;
            this.disabled = true;
            if (this.authProvider) {
                this.dialogService.open(DeactivatedProviderPromptComponent)
                    .onClose.subscribe(function (email) {
                    if (email) {
                        _this.disabled = true;
                        var data = {
                            email: email,
                            provider: _this.provider['value'],
                        };
                        _super.prototype.onSubmit.call(_this, data, 'security', 'deactivated')
                            .pipe(operators.takeUntil(_this.destroy$))
                            .subscribe(function (response) {
                            if (response) {
                                if (response.respStatusCode === i6.ResponseCode.OK_SCR003.toString()) {
                                    _this.authToken.logout();
                                }
                            }
                        });
                    }
                    else {
                        _this.disabled = false;
                    }
                });
            }
            else {
                this.dialogService.open(DeactivatedPromptComponent)
                    .onClose.subscribe(function (password) {
                    if (password) {
                        _this.disabled = true;
                        var data = {
                            password: _this.enc.encryptAES(_this.oauthResource['aes_key'], password),
                        };
                        _super.prototype.onSubmit.call(_this, data, 'security', 'deactivated')
                            .pipe(operators.takeUntil(_this.destroy$))
                            .subscribe(function (response) {
                            if (response) {
                                if (response.respStatusCode === i6.ResponseCode.OK_SCR003.toString()) {
                                    _this.authToken.logout();
                                }
                            }
                        });
                    }
                    else {
                        _this.disabled = false;
                    }
                });
            }
        };
        return SecurityPageComponent;
    }(i2.BaseFormComponent));
    SecurityPageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: SecurityPageComponent, deps: [{ token: i0__namespace.Injector }, { token: i1__namespace$1.NbDialogService }, { token: i1__namespace$2.AuthIndexedDBService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    SecurityPageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: SecurityPageComponent, selector: "do-security-page", usesInheritance: true, ngImport: i0__namespace, template: "<do-change-password-page *ngIf=\"!authProvider\"></do-change-password-page>\n<nb-card *ngIf=\"authProvider\">\n    <nb-card-body>\n        <div class=\"row\">\n            <nb-icon [status]=\"'info'\" [icon]=\"'google'\" class=\"icon-provider\"></nb-icon>\n            <p class=\"text-provider\">\n                {{ 'message.provider' | translate:provider}}\n            </p>\n        </div>\n    </nb-card-body>\n</nb-card>\n<do-switch-role-page></do-switch-role-page>\n<nb-card>\n    <nb-card-body>\n        <div class=\"row\">\n            <div class=\"col-md-3 col-lg-3\">\n                <button\n                    type=\"button\"\n                    status=\"danger\"\n                    size=\"large\"\n                    class=\"deactivated-button\"\n                    [disabled]=\"disabled\"\n                    (click)=\"onSubmit()\"\n                    nbButton fullWidth>\n                    {{ 'Deactivate Account' | translate }}\n                </button>\n            </div>\n            <div class=\"col-md-8 col-lg-8\">\n                <h6 class=\"text-danger deactivated-label\">\n                    {{ 'message.deactivated-account' | translate }}\n                </h6>\n            </div>\n        </div>\n    </nb-card-body>\n</nb-card>\n", styles: [".nb-theme-default :host button.deactivated-button{width:100%;margin:.5rem 0}.nb-theme-default :host h6.deactivated-label{padding-top:10px;text-align:center}.nb-theme-default :host .icon-provider{margin:1rem 0 1rem 1.5rem}.nb-theme-default :host .text-provider{margin:1rem 1.5rem}@media (max-width: 767.98px){.nb-theme-default :host .icon-provider{margin:1rem 0 1rem .5rem}.nb-theme-default :host .text-provider{margin:1rem 0 1rem .5rem}}.nb-theme-dark :host button.deactivated-button{width:100%;margin:.5rem 0}.nb-theme-dark :host h6.deactivated-label{padding-top:10px;text-align:center}.nb-theme-dark :host .icon-provider{margin:1rem 0 1rem 1.5rem}.nb-theme-dark :host .text-provider{margin:1rem 1.5rem}@media (max-width: 767.98px){.nb-theme-dark :host .icon-provider{margin:1rem 0 1rem .5rem}.nb-theme-dark :host .text-provider{margin:1rem 0 1rem .5rem}}.nb-theme-cosmic :host button.deactivated-button{width:100%;margin:.5rem 0}.nb-theme-cosmic :host h6.deactivated-label{padding-top:10px;text-align:center}.nb-theme-cosmic :host .icon-provider{margin:1rem 0 1rem 1.5rem}.nb-theme-cosmic :host .text-provider{margin:1rem 1.5rem}@media (max-width: 767.98px){.nb-theme-cosmic :host .icon-provider{margin:1rem 0 1rem .5rem}.nb-theme-cosmic :host .text-provider{margin:1rem 0 1rem .5rem}}.nb-theme-corporate :host button.deactivated-button{width:100%;margin:.5rem 0}.nb-theme-corporate :host h6.deactivated-label{padding-top:10px;text-align:center}.nb-theme-corporate :host .icon-provider{margin:1rem 0 1rem 1.5rem}.nb-theme-corporate :host .text-provider{margin:1rem 1.5rem}@media (max-width: 767.98px){.nb-theme-corporate :host .icon-provider{margin:1rem 0 1rem .5rem}.nb-theme-corporate :host .text-provider{margin:1rem 0 1rem .5rem}}\n"], components: [{ type: ChangePasswordPageComponent, selector: "do-change-password-page" }, { type: i1__namespace$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1__namespace$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i1__namespace$1.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }, { type: SwitchRolePageComponent, selector: "do-switch-role-page" }, { type: i1__namespace$1.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i2__namespace$2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], pipes: { "translate": i3__namespace.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: SecurityPageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-security-page',
                        styleUrls: ['./security-page.component.scss'],
                        templateUrl: './security-page.component.html',
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }, { type: i1__namespace$1.NbDialogService }, { type: i1__namespace$2.AuthIndexedDBService }]; } });

    var SettingsPageComponent = /** @class */ (function (_super) {
        __extends(SettingsPageComponent, _super);
        function SettingsPageComponent(injector, translate, themeService, settingsIndexedDB, authIndexedDB) {
            var _this = _super.call(this, injector, {
                locale: [],
                theme: [],
            }) || this;
            _this.injector = injector;
            _this.translate = translate;
            _this.themeService = themeService;
            _this.settingsIndexedDB = settingsIndexedDB;
            _this.authIndexedDB = authIndexedDB;
            _this.dataTheme = [
                {
                    id: 'theme',
                    selected: false,
                },
            ];
            _this.apiSelectLocale = _this.api['master']['select-all-locale'];
            return _this;
        }
        SettingsPageComponent.prototype.ngOnInit = function () {
            this.onInit('security', 'get-settings');
        };
        SettingsPageComponent.prototype.onInit = function (serviceName, apiName) {
            var _this = this;
            this.loadingForm = true;
            this.exec(serviceName, apiName)
                .subscribe(function (success) {
                _this.loadingForm = false;
                _this.localeCode = success['localeCode'];
                _this.localeIdentifier = success['localeIdentifier'];
                _this.localeIcon = success['localeIcon'] ? success['localeIcon'] : '';
                _this.formGroup.get('locale').setValue({
                    value: _this.localeCode,
                    label: _this.localeIdentifier
                });
                var darkMode = [{
                        id: 'theme',
                        selected: false,
                    }];
                if (success['theme'] === 'dark') {
                    darkMode = [{
                            id: 'theme',
                            selected: true,
                        }];
                }
                _this.formGroup.get('theme').setValue(darkMode);
                _this.formGroup.markAsPristine();
                _this.formGroup.markAsUntouched();
                _this.formGroup.markAsPending();
            }, function (error) {
                _this.loadingForm = true;
                if (error.respStatusMessage) {
                    _this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
                }
            });
        };
        SettingsPageComponent.prototype.onSubmit = function () {
            var _this = this;
            var _a, _b, _c, _d, _e, _f;
            if ((_a = this.formGroup.get('locale')) === null || _a === void 0 ? void 0 : _a.value['value']) {
                this.localeCode = (_b = this.formGroup.get('locale')) === null || _b === void 0 ? void 0 : _b.value['value'];
                this.localeIdentifier = (_c = this.formGroup.get('locale')) === null || _c === void 0 ? void 0 : _c.value['label'];
                this.localeIcon = (_d = this.formGroup.get('locale')) === null || _d === void 0 ? void 0 : _d.value['icon'];
            }
            var theme = 'default';
            if ((_e = this.formGroup.get('theme')) === null || _e === void 0 ? void 0 : _e.value) {
                theme = ((_f = this.formGroup.get('theme')) === null || _f === void 0 ? void 0 : _f.value[0].selected) ? 'dark' : 'default';
            }
            var data = {
                localeCode: this.localeCode,
                localeIdentifier: this.localeIdentifier,
                localeIcon: this.localeIcon,
                theme: theme,
            };
            this.disabled = true;
            this.initProgress();
            this.setProgress(65);
            Promise.all([
                this.settingsIndexedDB.get('locale'),
                this.settingsIndexedDB.get('theme'),
            ]).then(function (current) {
                _this.exec('security', 'change-settings', data).subscribe(function (success) {
                    _this.setProgress(95);
                    _this.disabled = false;
                    _this.formGroup.markAsPristine();
                    _this.formGroup.markAsUntouched();
                    _this.formGroup.markAsPending();
                    if (success) {
                        if (success.respStatusCode === i6.ResponseCode.OK_SCR002.toString()) {
                            _this.changeTheme(theme);
                            if (current[0] !== _this.localeCode) {
                                _this.settingsIndexedDB.put('locale', _this.localeCode).then(function () {
                                    _this.http.HTTP_AUTH(_this.api['security']['get-menus']).subscribe(function (menus) {
                                        Promise.all([
                                            _this.authIndexedDB.putEnc('menus', JSON.stringify(menus['main'])),
                                            _this.authIndexedDB.putEnc('extras', JSON.stringify(menus['extra'])),
                                        ]).then(function () {
                                            _this.translate.getTranslation(_this.localeCode).subscribe(function (lang) {
                                                _this.translate.use(_this.localeCode);
                                                _this.translate.setTranslation(_this.localeCode, lang, true);
                                                _this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
                                            });
                                        });
                                    }, function (error) {
                                        _this.toastr.showI18n('error.translate', false, null, 'warning');
                                    });
                                });
                            }
                        }
                    }
                    _this.doneProgress();
                }, function (error) {
                    _this.disabled = false;
                    _this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
                    _this.doneProgress();
                });
            });
        };
        SettingsPageComponent.prototype.changeTheme = function (theme) {
            this.settingsIndexedDB.put('theme', theme).then();
            this.themeService.changeTheme(theme);
        };
        return SettingsPageComponent;
    }(i2.BaseFormComponent));
    SettingsPageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: SettingsPageComponent, deps: [{ token: i0__namespace.Injector }, { token: i3__namespace.TranslateService }, { token: i1__namespace$1.NbThemeService }, { token: i6.SETTINGS_INDEXED_DB }, { token: i6.AUTH_INDEXED_DB }], target: i0__namespace.ɵɵFactoryTarget.Component });
    SettingsPageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: SettingsPageComponent, selector: "do-settings-page", usesInheritance: true, ngImport: i0__namespace, template: "<do-page-outlet [header]=\"'Settings'\">\n  <form [formGroup]=\"formGroup\" pagecontent>\n    <do-select\n      [name]=\"'locale'\"\n      [label]=\"'label.language'\"\n      [required]=\"true\"\n      [searchable]=\"false\"\n      [skeleton]=\"loadingForm\"\n      [api]=\"apiSelectLocale\"\n      formControlName=\"locale\">\n      <div *doContentSelect=\"let item\">\n        <span class=\"{{item.icon ? item.icon : localeIcon}}\"></span>\n        <span class=\"label-select\">{{item.label ? item.label : item}}</span>\n      </div>\n    </do-select>\n    <do-checkbox\n      [name]=\"'checkbox'\"\n      [label]=\"'label.dark-mode'\"\n      [data]=\"dataTheme\"\n      [skeleton]=\"loadingForm\"\n      formControlName=\"theme\">\n    </do-checkbox>\n  </form>\n  <div class=\"offset-sm-3 col-sm-9\" pagefooter>\n    <do-button\n      (onSubmit)=\"onSubmit()\"\n      [name]=\"'Update Settings'\"\n      [formGroupButton]=\"formGroup\"\n      [disabledButton]=\"disabled\"\n      [skeleton]=\"loadingForm\">\n    </do-button>\n  </div>\n</do-page-outlet>\n", styles: [".label-select{padding-left:.5rem}\n"], components: [{ type: i2__namespace.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i2__namespace.DoSelectComponent, selector: "do-select", inputs: ["placeholder", "colLabel", "colInput", "items", "multiple", "loading", "addTag", "closeOnSelect", "clearable", "searchable", "hideSelected", "minTermLength", "maxTermLength", "api", "limit", "offsetNextLoad", "queryParam"], outputs: ["onSelect", "onClear"] }, { type: i2__namespace.DoCheckboxComponent, selector: "do-checkbox", inputs: ["colLabel", "colInput", "data"], outputs: ["onChecked"] }, { type: i2__namespace.DoButtonComponent, selector: "do-button", inputs: ["formGroupButton", "name", "disabledButton", "type", "status", "size", "skeleton"], outputs: ["onSubmit"] }], directives: [{ type: i2__namespace$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2__namespace$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2__namespace$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2__namespace$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2__namespace$1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i2__namespace$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i2__namespace.ContentSelectDirective, selector: "[doContentSelect]" }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: SettingsPageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-settings-page',
                        styleUrls: ['./settings-page.component.scss'],
                        templateUrl: './settings-page.component.html',
                    }]
            }], ctorParameters: function () {
            return [{ type: i0__namespace.Injector }, { type: i3__namespace.TranslateService }, { type: i1__namespace$1.NbThemeService }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i6.SETTINGS_INDEXED_DB]
                        }] }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i6.AUTH_INDEXED_DB]
                        }] }];
        } });

    var ProfilePageComponent = /** @class */ (function (_super) {
        __extends(ProfilePageComponent, _super);
        function ProfilePageComponent(injector, userService, profileIndexedDB, authIndexedDB) {
            var _this = _super.call(this, injector, {
                username: [{
                        value: null,
                        disabled: true,
                    }],
                name: [],
                idNumber: [],
                placeOfBirth: [],
                dateOfBirth: [],
                gender: [],
                height: [],
                weight: [],
                bloodType: [],
                email: [],
                phoneNumber: [],
                address: [null, [i2$1.Validators.minLength(5)]],
                country: [],
                province: [],
                city: [],
                district: [],
                subDistrict: [],
            }) || this;
            _this.injector = injector;
            _this.userService = userService;
            _this.profileIndexedDB = profileIndexedDB;
            _this.authIndexedDB = authIndexedDB;
            _this.patternEmail = i6.Pattern.EMAIL;
            _this.patternPhoneNumber = i6.Pattern.PHONE_NUMBER;
            _this.minLength = 5;
            _this.disabledUpload = false;
            _this.provider = 'local';
            _this.bloodTypeData = [{
                    label: 'A',
                    value: 'A',
                    disabled: false,
                }, {
                    label: 'B',
                    value: 'B',
                    disabled: false,
                }, {
                    label: 'AB',
                    value: 'AB',
                    disabled: false,
                }, {
                    label: 'O',
                    value: 'O',
                    disabled: false,
                }];
            _this.formGroupImage = _this.formBuilder.group({
                image: [],
            });
            _this.apiSelectGender = _this.api['master']['select-parameter'];
            _this.apiSelectCountry = _this.api['master']['select-country'];
            _this.apiSelectProvince = _this.api['master']['select-province'];
            _this.apiSelectCity = _this.api['master']['select-city'];
            _this.apiSelectDistrict = _this.api['master']['select-district'];
            _this.apiSelectSubDistrict = _this.api['master']['select-subdistrict'];
            _this.authIndexedDB.getEnc('provider').then(function (value) {
                if (value !== 'local') {
                    _this.provider = value;
                    _this.formGroup.controls['email'].disable();
                }
            });
            return _this;
        }
        ProfilePageComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.onInit('profile', 'get-profile');
            this.profileIndexedDB.get('image-base64').then(function (image) {
                _this.formGroupImage.get('image').setValue(image);
                _this.formGroupImage.markAsPending();
            });
            this.paramSelectGender = [{
                    key: 'parameterGroupCode',
                    value: 'GENDER',
                }];
            this.paramSelectProvince = [{
                    key: 'country',
                    value: 'undefined',
                }];
            this.paramSelectCity = [{
                    key: 'province',
                    value: 'undefined',
                }];
            this.paramSelectDistrict = [{
                    key: 'city',
                    value: 'undefined',
                }];
            this.paramSelectSubDistrict = [{
                    key: 'district',
                    value: 'undefined',
                }];
        };
        ProfilePageComponent.prototype.onInit = function (serviceName, apiName) {
            var _this = this;
            this.loadingForm = true;
            this.exec(serviceName, apiName)
                .subscribe(function (success) {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7;
                _this.loadingForm = false;
                _this.formGroup.controls['name'].setValue(success.name);
                _this.formGroup.controls['username'].setValue(success.username);
                _this.formGroup.controls['email'].setValue(success.email);
                if (success === null || success === void 0 ? void 0 : success.personalInfo) {
                    _this.formGroup.controls['idNumber'].setValue((_a = success === null || success === void 0 ? void 0 : success.personalInfo) === null || _a === void 0 ? void 0 : _a.idNumber);
                    if ((_b = success === null || success === void 0 ? void 0 : success.personalInfo) === null || _b === void 0 ? void 0 : _b.genderCode) {
                        _this.formGroup.controls['gender'].setValue({
                            label: success === null || success === void 0 ? void 0 : success.personalInfo.genderValue,
                            value: success === null || success === void 0 ? void 0 : success.personalInfo.genderCode
                        });
                    }
                    _this.formGroup.controls['placeOfBirth'].setValue((_c = success === null || success === void 0 ? void 0 : success.personalInfo) === null || _c === void 0 ? void 0 : _c.placeOfBirth);
                    if ((_d = success === null || success === void 0 ? void 0 : success.personalInfo) === null || _d === void 0 ? void 0 : _d.dateOfBirth) {
                        _this.formGroup.controls['dateOfBirth'].setValue((_e = success === null || success === void 0 ? void 0 : success.personalInfo) === null || _e === void 0 ? void 0 : _e.dateOfBirth);
                    }
                    _this.formGroup.controls['height'].setValue((_f = success === null || success === void 0 ? void 0 : success.personalInfo) === null || _f === void 0 ? void 0 : _f.height);
                    _this.formGroup.controls['weight'].setValue((_g = success === null || success === void 0 ? void 0 : success.personalInfo) === null || _g === void 0 ? void 0 : _g.weight);
                    _this.formGroup.controls['bloodType'].setValue({
                        value: (_h = success === null || success === void 0 ? void 0 : success.personalInfo) === null || _h === void 0 ? void 0 : _h.bloodType,
                        label: (_j = success === null || success === void 0 ? void 0 : success.personalInfo) === null || _j === void 0 ? void 0 : _j.bloodType,
                    });
                }
                if (success === null || success === void 0 ? void 0 : success.contact) {
                    if ((_k = success === null || success === void 0 ? void 0 : success.contact) === null || _k === void 0 ? void 0 : _k.address) {
                        _this.formGroup.controls['address'].setValue((_l = success === null || success === void 0 ? void 0 : success.contact) === null || _l === void 0 ? void 0 : _l.address);
                    }
                    if ((_m = success === null || success === void 0 ? void 0 : success.contact) === null || _m === void 0 ? void 0 : _m.phoneNumber) {
                        _this.formGroup.controls['phoneNumber'].setValue((_o = success === null || success === void 0 ? void 0 : success.contact) === null || _o === void 0 ? void 0 : _o.phoneNumber);
                    }
                    if ((_p = success === null || success === void 0 ? void 0 : success.contact) === null || _p === void 0 ? void 0 : _p.country) {
                        _this.formGroup.controls['country'].setValue({
                            label: (_q = success === null || success === void 0 ? void 0 : success.contact) === null || _q === void 0 ? void 0 : _q.country,
                            value: (_r = success === null || success === void 0 ? void 0 : success.contact) === null || _r === void 0 ? void 0 : _r.countryCode
                        });
                        _this.paramSelectProvince = [
                            {
                                key: 'country',
                                value: (_s = success === null || success === void 0 ? void 0 : success.contact) === null || _s === void 0 ? void 0 : _s.countryCode,
                            },
                        ];
                    }
                    if ((_t = success === null || success === void 0 ? void 0 : success.contact) === null || _t === void 0 ? void 0 : _t.province) {
                        _this.formGroup.controls['province'].setValue({
                            label: (_u = success === null || success === void 0 ? void 0 : success.contact) === null || _u === void 0 ? void 0 : _u.province,
                            value: (_v = success === null || success === void 0 ? void 0 : success.contact) === null || _v === void 0 ? void 0 : _v.provinceCode
                        });
                        _this.paramSelectCity = [
                            {
                                key: 'province',
                                value: (_w = success === null || success === void 0 ? void 0 : success.contact) === null || _w === void 0 ? void 0 : _w.provinceCode,
                            },
                        ];
                    }
                    if ((_x = success === null || success === void 0 ? void 0 : success.contact) === null || _x === void 0 ? void 0 : _x.city) {
                        _this.formGroup.controls['city'].setValue({
                            label: (_y = success === null || success === void 0 ? void 0 : success.contact) === null || _y === void 0 ? void 0 : _y.city,
                            value: (_z = success === null || success === void 0 ? void 0 : success.contact) === null || _z === void 0 ? void 0 : _z.cityCode
                        });
                        _this.paramSelectDistrict = [
                            {
                                key: 'city',
                                value: (_0 = success === null || success === void 0 ? void 0 : success.contact) === null || _0 === void 0 ? void 0 : _0.cityCode,
                            },
                        ];
                    }
                    if ((_1 = success === null || success === void 0 ? void 0 : success.contact) === null || _1 === void 0 ? void 0 : _1.district) {
                        _this.formGroup.controls['district'].setValue({
                            label: (_2 = success === null || success === void 0 ? void 0 : success.contact) === null || _2 === void 0 ? void 0 : _2.district,
                            value: (_3 = success === null || success === void 0 ? void 0 : success.contact) === null || _3 === void 0 ? void 0 : _3.districtCode
                        });
                        _this.paramSelectSubDistrict = [
                            {
                                key: 'district',
                                value: (_4 = success === null || success === void 0 ? void 0 : success.contact) === null || _4 === void 0 ? void 0 : _4.districtCode,
                            },
                        ];
                    }
                    if ((_5 = success === null || success === void 0 ? void 0 : success.contact) === null || _5 === void 0 ? void 0 : _5.subDistrict) {
                        _this.formGroup.controls['subDistrict'].setValue({
                            label: (_6 = success === null || success === void 0 ? void 0 : success.contact) === null || _6 === void 0 ? void 0 : _6.subDistrict,
                            value: (_7 = success === null || success === void 0 ? void 0 : success.contact) === null || _7 === void 0 ? void 0 : _7.subDistrictCode
                        });
                    }
                }
                _this.authIndexedDB.getEnc('provider').then(function (value) {
                    if (value !== 'local') {
                        _this.provider = value;
                        _this.formGroup.controls['email'].disable();
                    }
                });
                _this.formGroup.markAsPristine();
            }, function (error) {
                _this.loadingForm = true;
                if (error instanceof http.HttpErrorResponse) {
                    error = error['error'];
                }
                _this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
            });
        };
        ProfilePageComponent.prototype.onSelectCountry = function (select) {
            this.paramSelectProvince = [
                {
                    key: 'country',
                    value: select ? select.value : 'undefined',
                },
            ];
            this.onClearProvince();
        };
        ProfilePageComponent.prototype.onSelectProvince = function (select) {
            this.paramSelectCity = [
                {
                    key: 'province',
                    value: select ? select.value : 'undefined',
                },
            ];
            this.onClearProvince();
        };
        ProfilePageComponent.prototype.onSelectCity = function (select) {
            this.paramSelectDistrict = [
                {
                    key: 'city',
                    value: select ? select.value : 'undefined',
                },
            ];
            this.onClearCity();
        };
        ProfilePageComponent.prototype.onSelectDistrict = function (select) {
            this.paramSelectSubDistrict = [
                {
                    key: 'district',
                    value: select ? select.value : 'undefined',
                },
            ];
            this.onClearDistrict();
        };
        ProfilePageComponent.prototype.onClearCountry = function () {
            this.formGroup.patchValue({
                province: null,
                city: null,
                district: null,
                subDistrict: null,
            });
        };
        ProfilePageComponent.prototype.onClearProvince = function () {
            this.formGroup.patchValue({
                city: null,
                district: null,
                subDistrict: null,
            });
        };
        ProfilePageComponent.prototype.onClearCity = function () {
            this.formGroup.patchValue({
                district: null,
                subDistrict: null,
            });
        };
        ProfilePageComponent.prototype.onClearDistrict = function () {
            this.formGroup.patchValue({
                subDistrict: null,
            });
        };
        ProfilePageComponent.prototype.uploadImage = function () {
            var _this = this;
            var file = this.formGroupImage.get('image').value;
            var data = new FormData();
            data.append('photo', file);
            this.formGroupImage.get('image').disable();
            this.initProgress();
            this.setProgress(65);
            this.exec('profile', 'upload-photo-profile', data).subscribe(function (success) {
                _this.setProgress(95);
                _this.userService.updatePhoto(success.respStatusMessage['checksum']);
                _this.uploadFinished = true;
                _this.formGroupImage.markAsPristine();
                _this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true, null, 'success');
                _this.doneProgress();
            }, function (error) {
                _this.formGroupImage.get('image').enable();
                _this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
                _this.doneProgress();
            });
        };
        ProfilePageComponent.prototype.valueSelect = function (prop) {
            if (this.formGroup.get(prop).value) {
                if (this.formGroup.get(prop).value.label) {
                    return this.formGroup.get(prop).value.label;
                }
                else {
                    return this.formGroup.get(prop).value;
                }
            }
            else {
                return null;
            }
        };
        ProfilePageComponent.prototype.valueSelectNonLabel = function (prop) {
            if (this.formGroup.get(prop).value) {
                if (this.formGroup.get(prop).value.value) {
                    return this.formGroup.get(prop).value.value;
                }
                else {
                    return null;
                }
            }
            else {
                return null;
            }
        };
        ProfilePageComponent.prototype.onSubmit = function () {
            var _this = this;
            var _a;
            var contact = {
                phoneNumber: this.formGroup.get('phoneNumber').value,
                address: this.formGroup.get('address').value,
                country: this.valueSelect('country'),
                countryCode: this.valueSelectNonLabel('country'),
                province: this.valueSelect('province'),
                provinceCode: this.valueSelectNonLabel('province'),
                city: this.valueSelect('city'),
                cityCode: this.valueSelectNonLabel('city'),
                district: this.valueSelect('district'),
                districtCode: this.valueSelectNonLabel('district'),
                subDistrict: this.valueSelect('subDistrict'),
                subDistrictCode: this.valueSelectNonLabel('subDistrict'),
            };
            var personalInfo = {
                idNumber: this.formGroup.get('idNumber').value,
                placeOfBirth: this.formGroup.get('placeOfBirth').value,
                dateOfBirth: this.formGroup.get('dateOfBirth').value,
                genderCode: this.valueSelectNonLabel('gender'),
                genderValue: this.valueSelect('gender'),
                height: this.formGroup.get('height').value,
                weight: this.formGroup.get('weight').value,
                bloodType: (_a = this.formGroup.get('bloodType').value) === null || _a === void 0 ? void 0 : _a.value,
            };
            var data = {
                name: this.formGroup.get('name').value,
                contact: contact,
                personalInfo: personalInfo,
            };
            if (this.provider === 'local') {
                data['email'] = this.formGroup.get('email').value;
            }
            _super.prototype.onSubmit.call(this, data, 'profile', 'change-profile')
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (response) {
                if (response) {
                    switch (response.respStatusCode) {
                        case i6.ResponseCode.ERR_SCR0008.toString():
                            _this.formGroup.controls['email'].setErrors({
                                email: true,
                            });
                            break;
                        case i6.ResponseCode.ERR_SCR0007A.toString():
                            _this.formGroup.controls['phoneNumber'].setErrors({
                                'error.pattern.phoneNumber': true,
                            });
                            break;
                        case i6.ResponseCode.OK_SCR004.toString():
                            _this.userService.updateName(_this.formGroup.get('name').value);
                            break;
                        default:
                            break;
                    }
                }
            });
        };
        return ProfilePageComponent;
    }(i2.BaseFormComponent));
    ProfilePageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ProfilePageComponent, deps: [{ token: i0__namespace.Injector }, { token: i6.USER_SERVICE }, { token: i6.PROFILE_INDEXED_DB }, { token: i1__namespace$2.AuthIndexedDBService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    ProfilePageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ProfilePageComponent, selector: "do-profile-page", usesInheritance: true, ngImport: i0__namespace, template: "<do-page-outlet [header]=\"'Profile'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-4 col-lg-4\">\n      <form [formGroup]=\"formGroupImage\">\n        <do-image-upload\n          [radius]=\"50\"\n          [skeleton]=\"loadingForm\"\n          [required]=\"true\"\n          [uploadFn]=\"uploadFinished\"\n          formControlName=\"image\">\n        </do-image-upload>\n        <do-button\n          class=\"upload-bg\"\n          (onSubmit)=\"uploadImage()\"\n          [name]=\"'Upload'\"\n          [formGroupButton]=\"formGroupImage\"\n          [disabledButton]=\"formGroupImage.pristine\"\n          [skeleton]=\"loadingForm\">\n          <nb-icon class=\"upload-icon\" icon=\"cloud-upload-outline\" pack=\"eva\" buttonicon></nb-icon>\n        </do-button>\n      </form>\n    </div>\n    <div class=\"accordion-container col-md-8 col-lg-8\">\n      <form [formGroup]=\"formGroup\">\n        <nb-accordion multi>\n          <nb-accordion-item [expanded]=\"true\">\n            <nb-accordion-item-header>\n              {{'label.account' | translate}}\n            </nb-accordion-item-header>\n            <nb-accordion-item-body>\n              <do-input-text\n                [name]=\"'name'\"\n                [label]=\"'Name'\"\n                [required]=\"true\"\n                [skeleton]=\"loadingForm\"\n                formControlName=\"name\">\n              </do-input-text>\n              <do-input-text\n                [name]=\"'email'\"\n                [label]=\"'Email'\"\n                [required]=\"true\"\n                [pattern]=\"patternEmail\"\n                [paramError]=\"{value:5}\"\n                [skeleton]=\"loadingForm\"\n                formControlName=\"email\">\n              </do-input-text>\n              <do-input-text\n                [name]=\"'username'\"\n                [label]=\"'Username'\"\n                [required]=\"true\"\n                [skeleton]=\"loadingForm\"\n                formControlName=\"username\">\n              </do-input-text>\n            </nb-accordion-item-body>\n          </nb-accordion-item>\n          <nb-accordion-item [expanded]=\"true\">\n            <nb-accordion-item-header>\n              {{'label.personal-info' | translate}}\n            </nb-accordion-item-header>\n            <nb-accordion-item-body>\n              <do-input-text\n                [name]=\"'idNumber'\"\n                [label]=\"'ID Number'\"\n                [required]=\"true\"\n                [skeleton]=\"loadingForm\"\n                formControlName=\"idNumber\">\n              </do-input-text>\n              <do-select\n                [name]=\"'gender'\"\n                [label]=\"'Gender'\"\n                [required]=\"true\"\n                [api]=\"apiSelectGender\"\n                [queryParam]=\"paramSelectGender\"\n                [searchable]=\"false\"\n                [skeleton]=\"loadingForm\"\n                formControlName=\"gender\">\n              </do-select>\n              <do-input-text\n                [name]=\"'placeOfBirth'\"\n                [label]=\"'Place of Birth'\"\n                [required]=\"true\"\n                [skeleton]=\"loadingForm\"\n                formControlName=\"placeOfBirth\">\n              </do-input-text>\n              <do-datepicker\n                [name]=\"'dateOfBirth'\"\n                [label]=\"'Date of Birth'\"\n                [required]=\"true\"\n                [skeleton]=\"loadingForm\"\n                formControlName=\"dateOfBirth\">\n              </do-datepicker>\n              <do-input-text\n                [name]=\"'height'\"\n                [label]=\"'height.body'\"\n                [placeholder]=\"'Centimeter'\"\n                [type]=\"'number'\"\n                [step]=\"'any'\"\n                [skeleton]=\"loadingForm\"\n                formControlName=\"height\">\n              </do-input-text>\n              <do-input-text\n                [name]=\"'weight'\"\n                [label]=\"'weight.body'\"\n                [placeholder]=\"'Kilogram'\"\n                [type]=\"'number'\"\n                [step]=\"'any'\"\n                [skeleton]=\"loadingForm\"\n                formControlName=\"weight\">\n              </do-input-text>\n              <do-select\n                [name]=\"'bloodType'\"\n                [label]=\"'Blood Type'\"\n                [placeholder]=\"'Blood Type'\"\n                [items]=\"bloodTypeData\"\n                [searchable]=\"false\"\n                [skeleton]=\"loadingForm\"\n                formControlName=\"bloodType\">\n              </do-select>\n            </nb-accordion-item-body>\n          </nb-accordion-item>\n          <nb-accordion-item [expanded]=\"true\">\n            <nb-accordion-item-header>\n              {{'label.contact-person' | translate}}\n            </nb-accordion-item-header>\n            <nb-accordion-item-body >\n              <do-input-text\n                [name]=\"'phoneNumber'\"\n                [label]=\"'Telephone'\"\n                [required]=\"true\"\n                [pattern]=\"patternPhoneNumber\"\n                [skeleton]=\"loadingForm\"\n                formControlName=\"phoneNumber\">\n              </do-input-text>\n              <do-textarea\n                [name]=\"'address'\"\n                [label]=\"'Address'\"\n                [required]=\"true\"\n                [minLength]=\"minLength\"\n                [skeleton]=\"loadingForm\"\n                formControlName=\"address\">\n              </do-textarea>\n              <do-select\n                [name]=\"'country'\"\n                [label]=\"'Country'\"\n                [api]=\"apiSelectCountry\"\n                [skeleton]=\"loadingForm\"\n                (onSelect)=\"onSelectCountry($event)\"\n                (onClear)=\"onClearCountry()\"\n                formControlName=\"country\">\n              </do-select>\n              <do-select\n                [name]=\"'province'\"\n                [label]=\"'Province'\"\n                [api]=\"apiSelectProvince\"\n                [queryParam]=\"paramSelectProvince\"\n                [skeleton]=\"loadingForm\"\n                (onSelect)=\"onSelectProvince($event)\"\n                (onClear)=\"onClearProvince()\"\n                formControlName=\"province\">\n              </do-select>\n              <do-select\n                [name]=\"'city'\"\n                [label]=\"'City'\"\n                [api]=\"apiSelectCity\"\n                [queryParam]=\"paramSelectCity\"\n                [skeleton]=\"loadingForm\"\n                (onSelect)=\"onSelectCity($event)\"\n                (onClear)=\"onClearCity()\"\n                formControlName=\"city\">\n              </do-select>\n              <do-select\n                [name]=\"'district'\"\n                [label]=\"'District'\"\n                [api]=\"apiSelectDistrict\"\n                [queryParam]=\"paramSelectDistrict\"\n                [skeleton]=\"loadingForm\"\n                (onSelect)=\"onSelectDistrict($event)\"\n                (onClear)=\"onClearDistrict()\"\n                formControlName=\"district\">\n              </do-select>\n              <do-select\n                [name]=\"'subDistrict'\"\n                [label]=\"'Sub District'\"\n                [api]=\"apiSelectSubDistrict\"\n                [queryParam]=\"paramSelectSubDistrict\"\n                [skeleton]=\"loadingForm\"\n                formControlName=\"subDistrict\">\n              </do-select>\n            </nb-accordion-item-body>\n          </nb-accordion-item>\n        </nb-accordion>\n      </form>\n    </div>\n  </div>\n  <div class=\"offset-sm-6 col-sm-6\" pagefooter>\n    <do-button\n      (onSubmit)=\"onSubmit()\"\n      [name]=\"'Update Profile'\"\n      [disabledButton]=\"disabled\"\n      [formGroupButton]=\"formGroup\"\n      [skeleton]=\"loadingForm\">\n    </do-button>\n  </div>\n</do-page-outlet>\n", styles: [".nb-theme-default :host nb-accordion{box-shadow:unset}.nb-theme-default :host .upload-bg{display:flex;justify-content:center;align-items:center}.nb-theme-dark :host nb-accordion{box-shadow:unset}.nb-theme-dark :host .upload-bg{display:flex;justify-content:center;align-items:center}.nb-theme-cosmic :host nb-accordion{box-shadow:unset}.nb-theme-cosmic :host .upload-bg{display:flex;justify-content:center;align-items:center}.nb-theme-corporate :host nb-accordion{box-shadow:unset}.nb-theme-corporate :host .upload-bg{display:flex;justify-content:center;align-items:center}\n"], components: [{ type: i2__namespace.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i2__namespace.ImageUploadComponent, selector: "do-image-upload", inputs: ["image", "height", "width", "radius", "buttonUpload", "skeleton", "uploadFn"], outputs: ["onPreview"] }, { type: i2__namespace.DoButtonComponent, selector: "do-button", inputs: ["formGroupButton", "name", "disabledButton", "type", "status", "size", "skeleton"], outputs: ["onSubmit"] }, { type: i1__namespace$1.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }, { type: i1__namespace$1.NbAccordionComponent, selector: "nb-accordion", inputs: ["multi"] }, { type: i1__namespace$1.NbAccordionItemComponent, selector: "nb-accordion-item", inputs: ["collapsed", "expanded", "disabled"], outputs: ["collapsedChange"] }, { type: i1__namespace$1.NbAccordionItemHeaderComponent, selector: "nb-accordion-item-header" }, { type: i1__namespace$1.NbAccordionItemBodyComponent, selector: "nb-accordion-item-body" }, { type: i2__namespace.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type", "togglePassword", "showPassword"] }, { type: i2__namespace.DoSelectComponent, selector: "do-select", inputs: ["placeholder", "colLabel", "colInput", "items", "multiple", "loading", "addTag", "closeOnSelect", "clearable", "searchable", "hideSelected", "minTermLength", "maxTermLength", "api", "limit", "offsetNextLoad", "queryParam"], outputs: ["onSelect", "onClear"] }, { type: i2__namespace.DoDatePickerComponent, selector: "do-datepicker", inputs: ["placeholder", "colLabel", "colInput", "min", "max", "size", "dateMask"] }, { type: i2__namespace.DoTextareaComponent, selector: "do-textarea", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "height"] }], directives: [{ type: i2__namespace$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2__namespace$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2__namespace$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2__namespace$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2__namespace$1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i2__namespace$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i2__namespace$1.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }], pipes: { "translate": i3__namespace.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ProfilePageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-profile-page',
                        styleUrls: ['./profile-page.component.scss'],
                        templateUrl: './profile-page.component.html',
                    }]
            }], ctorParameters: function () {
            return [{ type: i0__namespace.Injector }, { type: i6__namespace.UserService, decorators: [{
                            type: i0.Inject,
                            args: [i6.USER_SERVICE]
                        }] }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i6.PROFILE_INDEXED_DB]
                        }] }, { type: i1__namespace$2.AuthIndexedDBService }];
        } });

    var TermsConditionsPageComponent = /** @class */ (function (_super) {
        __extends(TermsConditionsPageComponent, _super);
        function TermsConditionsPageComponent(injector) {
            var _this = _super.call(this, injector) || this;
            _this.injector = injector;
            _this.destroy$ = new rxjs.Subject();
            return _this;
        }
        TermsConditionsPageComponent.prototype.ngOnInit = function () {
            var _this = this;
            var data = {
                parameterCode: 'TERMS_CONDITIONS.DONGKAP'
            };
            this.http.HTTP_AUTH(this.api['master']['parameter'], data)
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (response) {
                _this.content = response['parameterValue'];
            });
        };
        TermsConditionsPageComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next(true);
            this.destroy$.complete();
            this.destroy$.unsubscribe();
        };
        return TermsConditionsPageComponent;
    }(i2.BaseComponent));
    TermsConditionsPageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: TermsConditionsPageComponent, deps: [{ token: i0__namespace.Injector }], target: i0__namespace.ɵɵFactoryTarget.Component });
    TermsConditionsPageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: TermsConditionsPageComponent, selector: "do-terms-conditions-page", usesInheritance: true, ngImport: i0__namespace, template: "<!-- https://www.privacypolicyonline.com/live.php?token=c7NdqfNju6oyhdnlrnLPdskC3Pft3FuH -->\n<do-page-outlet [header]=\"'header.terms-conditions'\">\n  <div [innerHTML]=\"content\" pagecontent></div>\n</do-page-outlet>\n", styles: [""], components: [{ type: i2__namespace.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: TermsConditionsPageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-terms-conditions-page',
                        styleUrls: ['./terms-conditions-page.component.scss'],
                        templateUrl: './terms-conditions-page.component.html',
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }]; } });

    var PrivacyPolicyPageComponent = /** @class */ (function (_super) {
        __extends(PrivacyPolicyPageComponent, _super);
        function PrivacyPolicyPageComponent(injector) {
            var _this = _super.call(this, injector) || this;
            _this.injector = injector;
            _this.destroy$ = new rxjs.Subject();
            return _this;
        }
        PrivacyPolicyPageComponent.prototype.ngOnInit = function () {
            var _this = this;
            var data = {
                parameterCode: 'PRIVACY_POLICY.DONGKAP'
            };
            this.http.HTTP_AUTH(this.api['master']['parameter'], data)
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (response) {
                _this.content = response['parameterValue'];
            });
        };
        PrivacyPolicyPageComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next(true);
            this.destroy$.complete();
            this.destroy$.unsubscribe();
        };
        return PrivacyPolicyPageComponent;
    }(i2.BaseComponent));
    PrivacyPolicyPageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: PrivacyPolicyPageComponent, deps: [{ token: i0__namespace.Injector }], target: i0__namespace.ɵɵFactoryTarget.Component });
    PrivacyPolicyPageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: PrivacyPolicyPageComponent, selector: "do-privacy-policy-page-page", usesInheritance: true, ngImport: i0__namespace, template: "<!-- https://www.privacypolicyonline.com/live.php?token=XnC0EXuhJuJgyXGsOZNL33fGEGwzLvlU -->\n<do-page-outlet [header]=\"'header.privacy-policy'\">\n  <div [innerHTML]=\"content\" pagecontent></div>\n</do-page-outlet>\n", styles: [""], components: [{ type: i2__namespace.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: PrivacyPolicyPageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-privacy-policy-page-page',
                        styleUrls: ['./privacy-policy-page.component.scss'],
                        templateUrl: './privacy-policy-page.component.html',
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }]; } });

    var routes = [{
            path: '',
            component: ExtraComponent,
            canActivateChild: [i1$2.AuthGuardChildService],
            children: [
                {
                    path: 'profile',
                    component: ProfilePageComponent,
                    data: {
                        code: '#PROFILE-PAGE',
                        title: 'Profile',
                    },
                },
                {
                    path: 'security',
                    component: SecurityPageComponent,
                    data: {
                        code: '#SECURITY-PAGE',
                    },
                },
                {
                    path: 'settings',
                    component: SettingsPageComponent,
                    data: {
                        code: '#SETTINGS-PAGE',
                    },
                },
                {
                    path: 'terms',
                    component: TermsConditionsPageComponent,
                    data: {
                        code: '#SETTINGS-PAGE',
                    },
                },
                {
                    path: 'privacy-policy',
                    component: PrivacyPolicyPageComponent,
                    data: {
                        code: '#SETTINGS-PAGE',
                    },
                },
            ],
        }];
    var DoExtraRoutingModule = /** @class */ (function () {
        function DoExtraRoutingModule() {
        }
        return DoExtraRoutingModule;
    }());
    DoExtraRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoExtraRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DoExtraRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoExtraRoutingModule, imports: [i1__namespace.RouterModule], exports: [i1.RouterModule] });
    DoExtraRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoExtraRoutingModule, imports: [[i1.RouterModule.forChild(routes)], i1.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoExtraRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.RouterModule.forChild(routes)],
                        exports: [i1.RouterModule],
                    }]
            }] });

    var HomePageComponent = /** @class */ (function () {
        function HomePageComponent(profileIndexedDB) {
            this.profileIndexedDB = profileIndexedDB;
        }
        HomePageComponent.prototype.ngOnInit = function () {
            this.name = this.profileIndexedDB.get('name');
        };
        HomePageComponent.prototype.ngOnDestroy = function () { };
        return HomePageComponent;
    }());
    HomePageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HomePageComponent, deps: [{ token: i6.PROFILE_INDEXED_DB }], target: i0__namespace.ɵɵFactoryTarget.Component });
    HomePageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: HomePageComponent, selector: "do-home-page", ngImport: i0__namespace, template: "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <nb-card>\n      <div class=\"icon-container\">\n        <div class=\"icon status-primary\">\n          <i [ngClass]=\"'nb-home'\"></i>\n        </div>\n      </div>\n      <div class=\"details\">\n        <div class=\"title h5\">{{'Welcome' | translate}}</div>\n        <div class=\"paragraph-2\">{{'Hi' | translate}}, <strong>{{name | async}}</strong>!</div>\n      </div>\n    </nb-card>\n  </div>\n</div>\n", styles: [".nb-theme-default :host nb-card{flex-direction:row;align-items:center;height:6rem;overflow:visible}.nb-theme-default :host nb-card .icon-container{height:100%;padding:.625rem}.nb-theme-default :host nb-card .icon{display:flex;align-items:center;justify-content:center;width:5.75rem;height:4.75rem;font-size:3.75rem;border-radius:.25rem;transition:width .4s ease;transform:translate(0);-webkit-transform-style:preserve-3d;-webkit-backface-visibility:hidden;color:#fff}.nb-theme-default :host nb-card .icon.status-basic{background-image:linear-gradient(to right,#f7f9fc,#edf1f7)}.nb-theme-default :host nb-card .icon.status-basic:hover{background-image:linear-gradient(to right,#ffffff,#f7f9fc)}.nb-theme-default :host nb-card .icon.status-primary{background-image:linear-gradient(to right,#598bff,#3366ff)}.nb-theme-default :host nb-card .icon.status-primary:hover{background-image:linear-gradient(to right,#a6c1ff,#598bff)}.nb-theme-default :host nb-card .icon.status-success{background-image:linear-gradient(to right,#2ce69b,#00d68f)}.nb-theme-default :host nb-card .icon.status-success:hover{background-image:linear-gradient(to right,#8cfac7,#2ce69b)}.nb-theme-default :host nb-card .icon.status-warning{background-image:linear-gradient(to right,#ffc94d,#ffaa00)}.nb-theme-default :host nb-card .icon.status-warning:hover{background-image:linear-gradient(to right,#ffe59e,#ffc94d)}.nb-theme-default :host nb-card .icon.status-danger{background-image:linear-gradient(to right,#ff708d,#ff3d71)}.nb-theme-default :host nb-card .icon.status-danger:hover{background-image:linear-gradient(to right,#ffa8b4,#ff708d)}.nb-theme-default :host nb-card .icon.status-info{background-image:linear-gradient(to right,#42aaff,#0095ff)}.nb-theme-default :host nb-card .icon.status-info:hover{background-image:linear-gradient(to right,#94cbff,#42aaff)}.nb-theme-default :host nb-card .icon.status-control{background-image:linear-gradient(to right,#ffffff,#ffffff)}.nb-theme-default :host nb-card .icon.status-control:hover{background-image:linear-gradient(to right,#ffffff,#f7f9fc)}.nb-theme-default :host nb-card.off{color:#8f9bb3}.nb-theme-default :host nb-card.off .status,.nb-theme-default :host nb-card.off .title,.nb-theme-default :host nb-card.off .icon{color:#8f9bb3}.nb-theme-default :host nb-card.off .icon.status-basic{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-default :host nb-card.off .icon.status-primary{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-default :host nb-card.off .icon.status-success{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-default :host nb-card.off .icon.status-warning{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-default :host nb-card.off .icon.status-danger{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-default :host nb-card.off .icon.status-info{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-default :host nb-card.off .icon.status-control{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-default :host nb-card .details{display:flex;flex-direction:column;justify-content:center;height:100%;border-left:1px solid transparent}[dir=ltr] .nb-theme-default :host nb-card .details{padding:0 .5rem 0 .75rem}[dir=rtl] .nb-theme-default :host nb-card .details{padding:0 .75rem 0 .5rem}.nb-theme-default :host nb-card .title{margin:0}.nb-theme-default :host nb-card .status{text-transform:uppercase}.nb-theme-dark :host nb-card{flex-direction:row;align-items:center;height:6rem;overflow:visible}.nb-theme-dark :host nb-card .icon-container{height:100%;padding:.625rem}.nb-theme-dark :host nb-card .icon{display:flex;align-items:center;justify-content:center;width:5.75rem;height:4.75rem;font-size:3.75rem;border-radius:.25rem;transition:width .4s ease;transform:translate(0);-webkit-transform-style:preserve-3d;-webkit-backface-visibility:hidden;color:#fff}.nb-theme-dark :host nb-card .icon.status-basic{background-image:linear-gradient(to right,#f7f9fc,#edf1f7)}.nb-theme-dark :host nb-card .icon.status-basic:hover{background-image:linear-gradient(to right,#ffffff,#f7f9fc)}.nb-theme-dark :host nb-card .icon.status-primary{background-image:linear-gradient(to right,#598bff,#3366ff)}.nb-theme-dark :host nb-card .icon.status-primary:hover{background-image:linear-gradient(to right,#a6c1ff,#598bff)}.nb-theme-dark :host nb-card .icon.status-success{background-image:linear-gradient(to right,#2ce69b,#00d68f)}.nb-theme-dark :host nb-card .icon.status-success:hover{background-image:linear-gradient(to right,#8cfac7,#2ce69b)}.nb-theme-dark :host nb-card .icon.status-warning{background-image:linear-gradient(to right,#ffc94d,#ffaa00)}.nb-theme-dark :host nb-card .icon.status-warning:hover{background-image:linear-gradient(to right,#ffe59e,#ffc94d)}.nb-theme-dark :host nb-card .icon.status-danger{background-image:linear-gradient(to right,#ff708d,#ff3d71)}.nb-theme-dark :host nb-card .icon.status-danger:hover{background-image:linear-gradient(to right,#ffa8b4,#ff708d)}.nb-theme-dark :host nb-card .icon.status-info{background-image:linear-gradient(to right,#42aaff,#0095ff)}.nb-theme-dark :host nb-card .icon.status-info:hover{background-image:linear-gradient(to right,#94cbff,#42aaff)}.nb-theme-dark :host nb-card .icon.status-control{background-image:linear-gradient(to right,#ffffff,#ffffff)}.nb-theme-dark :host nb-card .icon.status-control:hover{background-image:linear-gradient(to right,#ffffff,#f7f9fc)}.nb-theme-dark :host nb-card.off{color:#8f9bb3}.nb-theme-dark :host nb-card.off .status,.nb-theme-dark :host nb-card.off .title,.nb-theme-dark :host nb-card.off .icon{color:#8f9bb3}.nb-theme-dark :host nb-card.off .icon.status-basic{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-dark :host nb-card.off .icon.status-primary{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-dark :host nb-card.off .icon.status-success{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-dark :host nb-card.off .icon.status-warning{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-dark :host nb-card.off .icon.status-danger{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-dark :host nb-card.off .icon.status-info{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-dark :host nb-card.off .icon.status-control{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-dark :host nb-card .details{display:flex;flex-direction:column;justify-content:center;height:100%;border-left:1px solid transparent}[dir=ltr] .nb-theme-dark :host nb-card .details{padding:0 .5rem 0 .75rem}[dir=rtl] .nb-theme-dark :host nb-card .details{padding:0 .75rem 0 .5rem}.nb-theme-dark :host nb-card .title{margin:0}.nb-theme-dark :host nb-card .status{text-transform:uppercase}.nb-theme-cosmic :host nb-card{flex-direction:row;align-items:center;height:6rem;overflow:visible}.nb-theme-cosmic :host nb-card .icon-container{height:100%;padding:.625rem}.nb-theme-cosmic :host nb-card .icon{display:flex;align-items:center;justify-content:center;width:5.75rem;height:4.75rem;font-size:3.75rem;border-radius:.25rem;transition:width .4s ease;transform:translate(0);-webkit-transform-style:preserve-3d;-webkit-backface-visibility:hidden;color:#fff}.nb-theme-cosmic :host nb-card .icon.status-basic{background-image:linear-gradient(to right,#f7f7fc,#f0f0fa)}.nb-theme-cosmic :host nb-card .icon.status-basic:hover{background-image:linear-gradient(to right,#ffffff,#f7f7fc)}.nb-theme-cosmic :host nb-card .icon.status-primary{background-image:linear-gradient(to right,#b18aff,#a16eff)}.nb-theme-cosmic :host nb-card .icon.status-primary:hover{background-image:linear-gradient(to right,#d5bfff,#b18aff)}.nb-theme-cosmic :host nb-card .icon.status-success{background-image:linear-gradient(to right,#2ce69b,#00d68f)}.nb-theme-cosmic :host nb-card .icon.status-success:hover{background-image:linear-gradient(to right,#8cfac7,#2ce69b)}.nb-theme-cosmic :host nb-card .icon.status-warning{background-image:linear-gradient(to right,#ffc94d,#ffaa00)}.nb-theme-cosmic :host nb-card .icon.status-warning:hover{background-image:linear-gradient(to right,#ffe59e,#ffc94d)}.nb-theme-cosmic :host nb-card .icon.status-danger{background-image:linear-gradient(to right,#ff708d,#ff3d71)}.nb-theme-cosmic :host nb-card .icon.status-danger:hover{background-image:linear-gradient(to right,#ffa8b4,#ff708d)}.nb-theme-cosmic :host nb-card .icon.status-info{background-image:linear-gradient(to right,#42aaff,#0095ff)}.nb-theme-cosmic :host nb-card .icon.status-info:hover{background-image:linear-gradient(to right,#94cbff,#42aaff)}.nb-theme-cosmic :host nb-card .icon.status-control{background-image:linear-gradient(to right,#ffffff,#ffffff)}.nb-theme-cosmic :host nb-card .icon.status-control:hover{background-image:linear-gradient(to right,#ffffff,#f7f7fc)}.nb-theme-cosmic :host nb-card.off{color:#b4b4db}.nb-theme-cosmic :host nb-card.off .status,.nb-theme-cosmic :host nb-card.off .title,.nb-theme-cosmic :host nb-card.off .icon{color:#b4b4db}.nb-theme-cosmic :host nb-card.off .icon.status-basic{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-cosmic :host nb-card.off .icon.status-primary{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-cosmic :host nb-card.off .icon.status-success{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-cosmic :host nb-card.off .icon.status-warning{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-cosmic :host nb-card.off .icon.status-danger{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-cosmic :host nb-card.off .icon.status-info{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-cosmic :host nb-card.off .icon.status-control{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-cosmic :host nb-card .details{display:flex;flex-direction:column;justify-content:center;height:100%;border-left:1px solid transparent}[dir=ltr] .nb-theme-cosmic :host nb-card .details{padding:0 .5rem 0 .75rem}[dir=rtl] .nb-theme-cosmic :host nb-card .details{padding:0 .75rem 0 .5rem}.nb-theme-cosmic :host nb-card .title{margin:0}.nb-theme-cosmic :host nb-card .status{text-transform:uppercase}.nb-theme-corporate :host nb-card{flex-direction:row;align-items:center;height:6rem;overflow:visible}.nb-theme-corporate :host nb-card .icon-container{height:100%;padding:.625rem}.nb-theme-corporate :host nb-card .icon{display:flex;align-items:center;justify-content:center;width:5.75rem;height:4.75rem;font-size:3.75rem;border-radius:.17rem;transition:width .4s ease;transform:translate(0);-webkit-transform-style:preserve-3d;-webkit-backface-visibility:hidden;color:#fff}.nb-theme-corporate :host nb-card .icon.status-basic{background-image:linear-gradient(to right,#f7f9fc,#edf1f7)}.nb-theme-corporate :host nb-card .icon.status-basic:hover{background-image:linear-gradient(to right,#ffffff,#f7f9fc)}.nb-theme-corporate :host nb-card .icon.status-primary{background-image:linear-gradient(to right,#598bff,#3366ff)}.nb-theme-corporate :host nb-card .icon.status-primary:hover{background-image:linear-gradient(to right,#a6c1ff,#598bff)}.nb-theme-corporate :host nb-card .icon.status-success{background-image:linear-gradient(to right,#2ce69b,#00d68f)}.nb-theme-corporate :host nb-card .icon.status-success:hover{background-image:linear-gradient(to right,#8cfac7,#2ce69b)}.nb-theme-corporate :host nb-card .icon.status-warning{background-image:linear-gradient(to right,#ffc94d,#ffaa00)}.nb-theme-corporate :host nb-card .icon.status-warning:hover{background-image:linear-gradient(to right,#ffe59e,#ffc94d)}.nb-theme-corporate :host nb-card .icon.status-danger{background-image:linear-gradient(to right,#ff708d,#ff3d71)}.nb-theme-corporate :host nb-card .icon.status-danger:hover{background-image:linear-gradient(to right,#ffa8b4,#ff708d)}.nb-theme-corporate :host nb-card .icon.status-info{background-image:linear-gradient(to right,#42aaff,#0095ff)}.nb-theme-corporate :host nb-card .icon.status-info:hover{background-image:linear-gradient(to right,#94cbff,#42aaff)}.nb-theme-corporate :host nb-card .icon.status-control{background-image:linear-gradient(to right,#ffffff,#ffffff)}.nb-theme-corporate :host nb-card .icon.status-control:hover{background-image:linear-gradient(to right,#ffffff,#f7f9fc)}.nb-theme-corporate :host nb-card.off{color:#8f9bb3}.nb-theme-corporate :host nb-card.off .status,.nb-theme-corporate :host nb-card.off .title,.nb-theme-corporate :host nb-card.off .icon{color:#8f9bb3}.nb-theme-corporate :host nb-card.off .icon.status-basic{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-corporate :host nb-card.off .icon.status-primary{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-corporate :host nb-card.off .icon.status-success{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-corporate :host nb-card.off .icon.status-warning{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-corporate :host nb-card.off .icon.status-danger{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-corporate :host nb-card.off .icon.status-info{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-corporate :host nb-card.off .icon.status-control{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-corporate :host nb-card .details{display:flex;flex-direction:column;justify-content:center;height:100%;border-left:1px solid transparent}[dir=ltr] .nb-theme-corporate :host nb-card .details{padding:0 .5rem 0 .75rem}[dir=rtl] .nb-theme-corporate :host nb-card .details{padding:0 .75rem 0 .5rem}.nb-theme-corporate :host nb-card .title{margin:0}.nb-theme-corporate :host nb-card .status{text-transform:uppercase}\n"], components: [{ type: i1__namespace$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }], directives: [{ type: i2__namespace$2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], pipes: { "translate": i3__namespace.TranslatePipe, "async": i2__namespace$2.AsyncPipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HomePageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-home-page',
                        styleUrls: ['./home-page.component.scss'],
                        templateUrl: './home-page.component.html',
                    }]
            }], ctorParameters: function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i6.PROFILE_INDEXED_DB]
                        }] }];
        } });

    var EXTRA_COMPONENTS = [
        ExtraComponent,
        ChangePasswordPageComponent,
        DeactivatedPromptComponent,
        DeactivatedProviderPromptComponent,
        SecurityPageComponent,
        SettingsPageComponent,
        ProfilePageComponent,
        HomePageComponent,
        TermsConditionsPageComponent,
        PrivacyPolicyPageComponent,
        SwitchRolePageComponent,
    ];
    var DoExtraModule = /** @class */ (function () {
        function DoExtraModule() {
        }
        return DoExtraModule;
    }());
    DoExtraModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoExtraModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DoExtraModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoExtraModule, declarations: [ExtraComponent,
            ChangePasswordPageComponent,
            DeactivatedPromptComponent,
            DeactivatedProviderPromptComponent,
            SecurityPageComponent,
            SettingsPageComponent,
            ProfilePageComponent,
            HomePageComponent,
            TermsConditionsPageComponent,
            PrivacyPolicyPageComponent,
            SwitchRolePageComponent], imports: [i2$1.FormsModule,
            i2$1.ReactiveFormsModule,
            i3.TranslateModule,
            i1$1.NbCardModule,
            i1$1.NbAlertModule,
            i1$1.NbIconModule,
            i1$1.NbButtonModule,
            i1$1.NbAccordionModule, i1__namespace$1.NbDialogModule, doTheme.DoThemeModule,
            i2.DoInputModule,
            i2.DoCheckBoxModule,
            i2.DoButtonModule,
            i2.DoBaseModule,
            i2.DoEditorModule,
            i2.DoSelectModule,
            i2.DoDatePickerModule,
            i2.DoImageModule,
            DoExtraRoutingModule] });
    DoExtraModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoExtraModule, imports: [[
                i2$1.FormsModule,
                i2$1.ReactiveFormsModule,
                i3.TranslateModule,
                i1$1.NbCardModule,
                i1$1.NbAlertModule,
                i1$1.NbIconModule,
                i1$1.NbButtonModule,
                i1$1.NbAccordionModule,
                i1$1.NbDialogModule.forChild(),
                doTheme.DoThemeModule,
                i2.DoInputModule,
                i2.DoCheckBoxModule,
                i2.DoButtonModule,
                i2.DoBaseModule,
                i2.DoEditorModule,
                i2.DoSelectModule,
                i2.DoDatePickerModule,
                i2.DoImageModule,
                DoExtraRoutingModule,
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoExtraModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i2$1.FormsModule,
                            i2$1.ReactiveFormsModule,
                            i3.TranslateModule,
                            i1$1.NbCardModule,
                            i1$1.NbAlertModule,
                            i1$1.NbIconModule,
                            i1$1.NbButtonModule,
                            i1$1.NbAccordionModule,
                            i1$1.NbDialogModule.forChild(),
                            doTheme.DoThemeModule,
                            i2.DoInputModule,
                            i2.DoCheckBoxModule,
                            i2.DoButtonModule,
                            i2.DoBaseModule,
                            i2.DoEditorModule,
                            i2.DoSelectModule,
                            i2.DoDatePickerModule,
                            i2.DoImageModule,
                            DoExtraRoutingModule,
                        ],
                        declarations: __spreadArray([], __read(EXTRA_COMPONENTS)),
                    }]
            }] });

    /*
     * Public API Surface of do-extra
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.DoExtraModule = DoExtraModule;
    exports.HomePageComponent = HomePageComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=dongkap-do-extra.umd.js.map
