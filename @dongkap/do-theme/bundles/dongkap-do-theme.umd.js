(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@angular/common'), require('@nebular/theme'), require('@nebular/eva-icons'), require('@nebular/security'), require('@ngx-translate/core'), require('rxjs/operators'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@dongkap/do-theme', ['exports', '@angular/core', '@angular/router', '@angular/common', '@nebular/theme', '@nebular/eva-icons', '@nebular/security', '@ngx-translate/core', 'rxjs/operators', 'rxjs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.dongkap = global.dongkap || {}, global.dongkap["do-theme"] = {}), global.ng.core, global.ng.router, global.ng.common, global["@nebular/theme"], global["@nebular/eva-icons"], global["@nebular/security"], global.i2, global.rxjs.operators, global.rxjs));
})(this, (function (exports, i0, i1, i3, i1$1, evaIcons, security, i2, operators, rxjs) { 'use strict';

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
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);

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

    var FooterComponent = /** @class */ (function () {
        function FooterComponent() {
            this.year = (new Date()).getFullYear();
        }
        return FooterComponent;
    }());
    FooterComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: FooterComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    FooterComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: FooterComponent, selector: "do-footer", ngImport: i0__namespace, template: "\n  <span class=\"created-by\">\u00A9 {{year}} {{ 'SMART' | translate }}</span>\n  <a [routerLink]=\"'/app/user/terms'\">{{ 'message.terms-conditions' | translate }}</a>\n  <a [routerLink]=\"'/app/user/privacy-policy'\">{{ 'message.privacy-policy' | translate }}</a>\n  ", isInline: true, styles: [".nb-theme-default :host{width:100%;display:flex}.nb-theme-default :host a{padding:0 0 0 1rem;color:#8f9bb3;transition:color ease-out .1s}.nb-theme-default :host a:hover{color:#222b45}.nb-theme-dark :host{width:100%;display:flex}.nb-theme-dark :host a{padding:0 0 0 1rem;color:#8f9bb3;transition:color ease-out .1s}.nb-theme-dark :host a:hover{color:#fff}.nb-theme-cosmic :host{width:100%;display:flex}.nb-theme-cosmic :host a{padding:0 0 0 1rem;color:#b4b4db;transition:color ease-out .1s}.nb-theme-cosmic :host a:hover{color:#fff}.nb-theme-corporate :host{width:100%;display:flex}.nb-theme-corporate :host a{padding:0 0 0 1rem;color:#8f9bb3;transition:color ease-out .1s}.nb-theme-corporate :host a:hover{color:#222b45}\n"], directives: [{ type: i1__namespace.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }], pipes: { "translate": i2__namespace.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: FooterComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-footer',
                        styleUrls: ['./footer.component.scss'],
                        template: "\n  <span class=\"created-by\">\u00A9 {{year}} {{ 'SMART' | translate }}</span>\n  <a [routerLink]=\"'/app/user/terms'\">{{ 'message.terms-conditions' | translate }}</a>\n  <a [routerLink]=\"'/app/user/privacy-policy'\">{{ 'message.privacy-policy' | translate }}</a>\n  ",
                    }]
            }] });

    var LayoutService = /** @class */ (function () {
        function LayoutService() {
            this.layoutSize$ = new rxjs.Subject();
            this.layoutSizeChange$ = this.layoutSize$.pipe(operators.shareReplay({ refCount: true }));
        }
        LayoutService.prototype.changeLayoutSize = function () {
            this.layoutSize$.next();
        };
        LayoutService.prototype.onChangeLayoutSize = function () {
            return this.layoutSizeChange$.pipe(operators.delay(1));
        };
        LayoutService.prototype.onSafeChangeLayoutSize = function () {
            return this.layoutSizeChange$.pipe(operators.debounceTime(350));
        };
        return LayoutService;
    }());
    LayoutService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: LayoutService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    LayoutService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: LayoutService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: LayoutService, decorators: [{
                type: i0.Injectable
            }] });

    var HeaderComponent = /** @class */ (function () {
        function HeaderComponent(sidebarService, themeService, breakpointService, layoutService, locationStrategy, router) {
            this.sidebarService = sidebarService;
            this.themeService = themeService;
            this.breakpointService = breakpointService;
            this.layoutService = layoutService;
            this.locationStrategy = locationStrategy;
            this.router = router;
            this.logo = '/assets/images/logo.png';
            this.extraMenu = [];
            this.userPictureOnly = false;
            this.destroy$ = new rxjs.Subject();
            this.logo = this.locationStrategy.getBaseHref().replace(/\/$/, '') + this.logo;
        }
        HeaderComponent.prototype.ngOnInit = function () {
            var _this = this;
            var xl = this.breakpointService.getBreakpointsMap().xl;
            this.themeService.onMediaQueryChange()
                .pipe(operators.map(function (_a) {
                var _b = __read(_a, 2), currentBreakpoint = _b[1];
                return currentBreakpoint.width < xl;
            }), operators.takeUntil(this.destroy$))
                .subscribe(function (isLessThanXl) { return _this.userPictureOnly = isLessThanXl; });
        };
        HeaderComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        HeaderComponent.prototype.toggleSidebar = function () {
            this.sidebarService.toggle(true, 'menu-sidebar');
            this.layoutService.changeLayoutSize();
            return false;
        };
        HeaderComponent.prototype.navigateHome = function () {
            this.router.navigate(['/app/home']);
            return false;
        };
        return HeaderComponent;
    }());
    HeaderComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HeaderComponent, deps: [{ token: i1__namespace$1.NbSidebarService }, { token: i1__namespace$1.NbThemeService }, { token: i1__namespace$1.NbMediaBreakpointsService }, { token: LayoutService }, { token: i3__namespace.LocationStrategy }, { token: i1__namespace.Router }], target: i0__namespace.ɵɵFactoryTarget.Component });
    HeaderComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: HeaderComponent, selector: "do-header", inputs: { name: "name", image: "image", logo: "logo", extraMenu: "extraMenu" }, ngImport: i0__namespace, template: "<div class=\"header-container\">\n  <div class=\"logo-container\">\n    <a (click)=\"toggleSidebar()\" href=\"#\" class=\"sidebar-toggle\">\n      <nb-icon icon=\"menu-2-outline\"></nb-icon>\n    </a>\n    <a class=\"logo\" href=\"#\" (click)=\"navigateHome()\">\n      <div class=\"image-logo\"\n        [ngStyle]=\"{\n          'background-image': 'url('+logo+')'\n        }\">\n      </div>\n      <!--<nb-action class=\"icon-logo\" icon=\"home-outline\"></nb-action>-->\n      <span class=\"title-logo\">{{ 'SMART Tanggap' | translate }}</span>\n    </a>\n  </div>\n</div>\n\n<div class=\"header-container\">\n  <nb-actions size=\"small\">\n\n    <nb-action class=\"control-item\">\n      <nb-search type=\"rotate-layout\"></nb-search>\n    </nb-action>\n    <nb-action class=\"control-item\" icon=\"bell-outline\"></nb-action>\n    <nb-action class=\"user-action\" >\n      <nb-user [nbContextMenu]=\"extraMenu\"\n               [onlyPicture]=\"userPictureOnly\"\n               [name]=\"name\"\n               [picture]=\"image\">\n      </nb-user>\n    </nb-action>\n  </nb-actions>\n</div>\n", styles: [".nb-theme-default :host{display:flex;justify-content:space-between;width:100%}.nb-theme-default :host .logo-container{display:flex;align-items:center}.nb-theme-default :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-default :host nb-user{cursor:pointer}.nb-theme-default :host ::ng-deep nb-search button{padding:0!important}.nb-theme-default :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-default :host .header-container .sidebar-toggle{text-decoration:none;color:#8f9bb3}[dir=ltr] .nb-theme-default :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-default :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-default :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-default :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-default :host .header-container .logo{border-left:1px solid #edf1f7}[dir=rtl] .nb-theme-default :host .header-container .logo{border-right:1px solid #edf1f7}.nb-theme-default :host .icon-logo{display:none}.nb-theme-default :host .image-logo{display:none}@media (max-width: 767.98px){.nb-theme-default :host .control-item{border:none;padding-left:5px}.nb-theme-default :host .user-action{border:none;padding:0}.nb-theme-default :host .title-logo{display:none}.nb-theme-default :host .icon-logo{display:unset}.nb-theme-default :host .image-logo{display:block;background-size:1em;width:1em;height:1em}}@media (max-width: 575.98px){.nb-theme-default :host nb-select{display:none}}.nb-theme-dark :host{display:flex;justify-content:space-between;width:100%}.nb-theme-dark :host .logo-container{display:flex;align-items:center}.nb-theme-dark :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-dark :host nb-user{cursor:pointer}.nb-theme-dark :host ::ng-deep nb-search button{padding:0!important}.nb-theme-dark :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-dark :host .header-container .sidebar-toggle{text-decoration:none;color:#8f9bb3}[dir=ltr] .nb-theme-dark :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-dark :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-dark :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-dark :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-dark :host .header-container .logo{border-left:1px solid #151a30}[dir=rtl] .nb-theme-dark :host .header-container .logo{border-right:1px solid #151a30}.nb-theme-dark :host .icon-logo{display:none}.nb-theme-dark :host .image-logo{display:none}@media (max-width: 767.98px){.nb-theme-dark :host .control-item{border:none;padding-left:5px}.nb-theme-dark :host .user-action{border:none;padding:0}.nb-theme-dark :host .title-logo{display:none}.nb-theme-dark :host .icon-logo{display:unset}.nb-theme-dark :host .image-logo{display:block;background-size:1em;width:1em;height:1em}}@media (max-width: 575.98px){.nb-theme-dark :host nb-select{display:none}}.nb-theme-cosmic :host{display:flex;justify-content:space-between;width:100%}.nb-theme-cosmic :host .logo-container{display:flex;align-items:center}.nb-theme-cosmic :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-cosmic :host nb-user{cursor:pointer}.nb-theme-cosmic :host ::ng-deep nb-search button{padding:0!important}.nb-theme-cosmic :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-cosmic :host .header-container .sidebar-toggle{text-decoration:none;color:#b4b4db}[dir=ltr] .nb-theme-cosmic :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-cosmic :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-cosmic :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-cosmic :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-cosmic :host .header-container .logo{border-left:1px solid #1b1b38}[dir=rtl] .nb-theme-cosmic :host .header-container .logo{border-right:1px solid #1b1b38}.nb-theme-cosmic :host .icon-logo{display:none}.nb-theme-cosmic :host .image-logo{display:none}@media (max-width: 767.98px){.nb-theme-cosmic :host .control-item{border:none;padding-left:5px}.nb-theme-cosmic :host .user-action{border:none;padding:0}.nb-theme-cosmic :host .title-logo{display:none}.nb-theme-cosmic :host .icon-logo{display:unset}.nb-theme-cosmic :host .image-logo{display:block;background-size:1em;width:1em;height:1em}}@media (max-width: 575.98px){.nb-theme-cosmic :host nb-select{display:none}}.nb-theme-corporate :host{display:flex;justify-content:space-between;width:100%}.nb-theme-corporate :host .logo-container{display:flex;align-items:center}.nb-theme-corporate :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-corporate :host nb-user{cursor:pointer}.nb-theme-corporate :host ::ng-deep nb-search button{padding:0!important}.nb-theme-corporate :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-corporate :host .header-container .sidebar-toggle{text-decoration:none;color:#8f9bb3}[dir=ltr] .nb-theme-corporate :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-corporate :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-corporate :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-corporate :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-corporate :host .header-container .logo{border-left:1px solid #edf1f7}[dir=rtl] .nb-theme-corporate :host .header-container .logo{border-right:1px solid #edf1f7}.nb-theme-corporate :host .icon-logo{display:none}.nb-theme-corporate :host .image-logo{display:none}@media (max-width: 767.98px){.nb-theme-corporate :host .control-item{border:none;padding-left:5px}.nb-theme-corporate :host .user-action{border:none;padding:0}.nb-theme-corporate :host .title-logo{display:none}.nb-theme-corporate :host .icon-logo{display:unset}.nb-theme-corporate :host .image-logo{display:block;background-size:1em;width:1em;height:1em}}@media (max-width: 575.98px){.nb-theme-corporate :host nb-select{display:none}}\n"], components: [{ type: i1__namespace$1.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }, { type: i1__namespace$1.NbActionsComponent, selector: "nb-actions", inputs: ["size", "fullWidth"] }, { type: i1__namespace$1.NbActionComponent, selector: "nb-action", inputs: ["title", "badgeStatus", "disabled", "badgeDot", "link", "href", "icon", "badgeText", "badgePosition"] }, { type: i1__namespace$1.NbSearchComponent, selector: "nb-search", inputs: ["placeholder", "hint", "tag", "type"] }, { type: i1__namespace$1.NbUserComponent, selector: "nb-user", inputs: ["name", "size", "shape", "badgeStatus", "picture", "showName", "showTitle", "showInitials", "onlyPicture", "title", "color", "badgeText", "badgePosition"] }], directives: [{ type: i3__namespace.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: i1__namespace$1.NbContextMenuDirective, selector: "[nbContextMenu]", inputs: ["nbContextMenuAdjustment", "nbContextMenuTrigger", "nbContextMenuPlacement", "nbContextMenuTag", "nbContextMenu", "nbContextMenuClass"] }], pipes: { "translate": i2__namespace.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HeaderComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-header',
                        styleUrls: ['./header.component.scss'],
                        templateUrl: './header.component.html',
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.NbSidebarService }, { type: i1__namespace$1.NbThemeService }, { type: i1__namespace$1.NbMediaBreakpointsService }, { type: LayoutService }, { type: i3__namespace.LocationStrategy }, { type: i1__namespace.Router }]; }, propDecorators: { name: [{
                    type: i0.Input
                }], image: [{
                    type: i0.Input
                }], logo: [{
                    type: i0.Input
                }], extraMenu: [{
                    type: i0.Input
                }] } });

    var SearchInputComponent = /** @class */ (function () {
        function SearchInputComponent() {
            this.search = new i0.EventEmitter();
            this.isInputShown = false;
        }
        SearchInputComponent.prototype.showInput = function () {
            this.isInputShown = true;
            this.input.nativeElement.focus();
        };
        SearchInputComponent.prototype.hideInput = function () {
            this.isInputShown = false;
        };
        SearchInputComponent.prototype.onInput = function (val) {
            this.search.emit(val);
        };
        return SearchInputComponent;
    }());
    SearchInputComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: SearchInputComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    SearchInputComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: SearchInputComponent, selector: "ngx-search-input", outputs: { search: "search" }, viewQueries: [{ propertyName: "input", first: true, predicate: ["input"], descendants: true, static: true }], ngImport: i0__namespace, template: "\n    <i class=\"control-icon ion ion-ios-search\"\n       (click)=\"showInput()\"></i>\n    <input placeholder=\"Type your search request here...\"\n           #input\n           [class.hidden]=\"!isInputShown\"\n           (blur)=\"hideInput()\"\n           (input)=\"onInput($event)\">\n  ", isInline: true, styles: [":host{display:flex;align-items:center}:host i.control-icon:before{font-size:2.3rem}:host i.control-icon:hover{cursor:pointer}:host input{border:none;outline:none;margin-left:1rem;width:15rem;transition:width .2s ease}:host input.hidden{width:0;margin:0}:host ::ng-deep search-input input{background:transparent}\n"] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: SearchInputComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'ngx-search-input',
                        styleUrls: ['./search-input.component.scss'],
                        template: "\n    <i class=\"control-icon ion ion-ios-search\"\n       (click)=\"showInput()\"></i>\n    <input placeholder=\"Type your search request here...\"\n           #input\n           [class.hidden]=\"!isInputShown\"\n           (blur)=\"hideInput()\"\n           (input)=\"onInput($event)\">\n  ",
                    }]
            }], propDecorators: { input: [{
                    type: i0.ViewChild,
                    args: ['input', { static: true }]
                }], search: [{
                    type: i0.Output
                }] } });

    var DefaultLayoutComponent = /** @class */ (function () {
        function DefaultLayoutComponent() {
            this.extraMenu = [];
        }
        return DefaultLayoutComponent;
    }());
    DefaultLayoutComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DefaultLayoutComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    DefaultLayoutComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DefaultLayoutComponent, selector: "do-layout", inputs: { name: "name", image: "image", extraMenu: "extraMenu" }, ngImport: i0__namespace, template: "\n    <nb-layout windowMode>\n      <nb-layout-header fixed>\n        <do-header [name]=\"name\" [image]=\"image\" [extraMenu]=\"extraMenu\"></do-header>\n      </nb-layout-header>\n\n      <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\" responsive>\n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column>\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-footer fixed>\n        <do-footer></do-footer>\n      </nb-layout-footer>\n    </nb-layout>\n  ", isInline: true, styles: [".nb-theme-default :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-dark :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-cosmic :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-corporate :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}\n"], components: [{ type: i1__namespace$1.NbLayoutComponent, selector: "nb-layout", inputs: ["center", "windowMode", "withScroll", "restoreScrollTop"] }, { type: i1__namespace$1.NbLayoutHeaderComponent, selector: "nb-layout-header", inputs: ["fixed", "subheader"] }, { type: HeaderComponent, selector: "do-header", inputs: ["name", "image", "logo", "extraMenu"] }, { type: i1__namespace$1.NbSidebarComponent, selector: "nb-sidebar", inputs: ["compactedBreakpoints", "collapsedBreakpoints", "right", "left", "start", "end", "fixed", "containerFixed", "state", "responsive", "tag"], outputs: ["stateChange", "responsiveStateChange"] }, { type: i1__namespace$1.NbLayoutColumnComponent, selector: "nb-layout-column", inputs: ["left", "start"] }, { type: i1__namespace$1.NbLayoutFooterComponent, selector: "nb-layout-footer", inputs: ["fixed"] }, { type: FooterComponent, selector: "do-footer" }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DefaultLayoutComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-layout',
                        styleUrls: ['./layout.component.scss'],
                        template: "\n    <nb-layout windowMode>\n      <nb-layout-header fixed>\n        <do-header [name]=\"name\" [image]=\"image\" [extraMenu]=\"extraMenu\"></do-header>\n      </nb-layout-header>\n\n      <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\" responsive>\n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column>\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-footer fixed>\n        <do-footer></do-footer>\n      </nb-layout-footer>\n    </nb-layout>\n  ",
                    }]
            }], propDecorators: { name: [{
                    type: i0.Input
                }], image: [{
                    type: i0.Input
                }], extraMenu: [{
                    type: i0.Input
                }] } });

    var StateService = /** @class */ (function () {
        function StateService(directionService) {
            var _this = this;
            this.layouts = [
                {
                    name: 'One Column',
                    icon: 'nb-layout-default',
                    id: 'one-column',
                    selected: true,
                },
                {
                    name: 'Two Column',
                    icon: 'nb-layout-two-column',
                    id: 'two-column',
                },
                {
                    name: 'Center Column',
                    icon: 'nb-layout-centre',
                    id: 'center-column',
                },
            ];
            this.sidebars = [
                {
                    name: 'Sidebar at layout start',
                    icon: 'nb-layout-sidebar-left',
                    id: 'start',
                    selected: true,
                },
                {
                    name: 'Sidebar at layout end',
                    icon: 'nb-layout-sidebar-right',
                    id: 'end',
                },
            ];
            this.layoutState$ = new rxjs.BehaviorSubject(this.layouts[0]);
            this.sidebarState$ = new rxjs.BehaviorSubject(this.sidebars[0]);
            this.alive = true;
            directionService.onDirectionChange()
                .pipe(operators.takeWhile(function () { return _this.alive; }))
                .subscribe(function (direction) { return _this.updateSidebarIcons(direction); });
            this.updateSidebarIcons(directionService.getDirection());
        }
        StateService.prototype.ngOnDestroy = function () {
            this.alive = false;
        };
        StateService.prototype.updateSidebarIcons = function (direction) {
            var _a = __read(this.sidebars, 2), startSidebar = _a[0], endSidebar = _a[1];
            var isLtr = direction === i1$1.NbLayoutDirection.LTR;
            var startIconClass = isLtr ? 'nb-layout-sidebar-left' : 'nb-layout-sidebar-right';
            var endIconClass = isLtr ? 'nb-layout-sidebar-right' : 'nb-layout-sidebar-left';
            startSidebar.icon = startIconClass;
            endSidebar.icon = endIconClass;
        };
        StateService.prototype.setLayoutState = function (state) {
            this.layoutState$.next(state);
        };
        StateService.prototype.getLayoutStates = function () {
            return rxjs.of(this.layouts);
        };
        StateService.prototype.onLayoutState = function () {
            return this.layoutState$.asObservable();
        };
        StateService.prototype.setSidebarState = function (state) {
            this.sidebarState$.next(state);
        };
        StateService.prototype.getSidebarStates = function () {
            return rxjs.of(this.sidebars);
        };
        StateService.prototype.onSidebarState = function () {
            return this.sidebarState$.asObservable();
        };
        return StateService;
    }());
    StateService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: StateService, deps: [{ token: i1__namespace$1.NbLayoutDirectionService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    StateService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: StateService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: StateService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: i1__namespace$1.NbLayoutDirectionService }]; } });

    var AnalyticsService = /** @class */ (function () {
        function AnalyticsService(location, router) {
            this.location = location;
            this.router = router;
            this.enabled = false;
        }
        AnalyticsService.prototype.trackPageViews = function () {
            var _this = this;
            if (this.enabled) {
                this.router.events.pipe(operators.filter(function (event) { return event instanceof i1.NavigationEnd; }))
                    .subscribe(function () {
                    ga('send', { hitType: 'pageview', page: _this.location.path() });
                });
            }
        };
        AnalyticsService.prototype.trackEvent = function (eventName) {
            if (this.enabled) {
                ga('send', 'event', eventName);
            }
        };
        return AnalyticsService;
    }());
    AnalyticsService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AnalyticsService, deps: [{ token: i3__namespace.Location }, { token: i1__namespace.Router }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AnalyticsService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AnalyticsService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AnalyticsService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: i3__namespace.Location }, { type: i1__namespace.Router }]; } });

    var SeoService = /** @class */ (function () {
        function SeoService(router, document, platformId) {
            this.router = router;
            this.destroy$ = new rxjs.Subject();
            this.isBrowser = i3.isPlatformBrowser(platformId);
            this.dom = document;
            if (this.isBrowser) {
                this.createCanonicalTag();
            }
        }
        SeoService.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        SeoService.prototype.createCanonicalTag = function () {
            this.linkCanonical = this.dom.createElement('link');
            this.linkCanonical.setAttribute('rel', 'canonical');
            this.dom.head.appendChild(this.linkCanonical);
            this.linkCanonical.setAttribute('href', this.getCanonicalUrl());
        };
        SeoService.prototype.trackCanonicalChanges = function () {
            var _this = this;
            if (!this.isBrowser) {
                return;
            }
            this.router.events.pipe(operators.filter(function (event) { return event instanceof i1.NavigationEnd; }), operators.takeUntil(this.destroy$))
                .subscribe(function () {
                _this.linkCanonical.setAttribute('href', _this.getCanonicalUrl());
            });
        };
        SeoService.prototype.getCanonicalUrl = function () {
            return this.dom.location.origin + this.dom.location.pathname;
        };
        return SeoService;
    }());
    SeoService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: SeoService, deps: [{ token: i1__namespace.Router }, { token: i1$1.NB_DOCUMENT }, { token: i0.PLATFORM_ID }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    SeoService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: SeoService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: SeoService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () {
            return [{ type: i1__namespace.Router }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1$1.NB_DOCUMENT]
                        }] }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i0.PLATFORM_ID]
                        }] }];
        } });

    var CapitalizePipe = /** @class */ (function () {
        function CapitalizePipe() {
        }
        CapitalizePipe.prototype.transform = function (input) {
            return input && input.length
                ? (input.charAt(0).toUpperCase() + input.slice(1).toLowerCase())
                : input;
        };
        return CapitalizePipe;
    }());
    CapitalizePipe.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: CapitalizePipe, deps: [], target: i0__namespace.ɵɵFactoryTarget.Pipe });
    CapitalizePipe.ɵpipe = i0__namespace.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: CapitalizePipe, name: "ngxCapitalize" });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: CapitalizePipe, decorators: [{
                type: i0.Pipe,
                args: [{ name: 'ngxCapitalize' }]
            }] });

    var PluralPipe = /** @class */ (function () {
        function PluralPipe() {
        }
        PluralPipe.prototype.transform = function (input, label, pluralLabel) {
            if (pluralLabel === void 0) { pluralLabel = ''; }
            input = input || 0;
            return input === 1
                ? input + " " + label
                : pluralLabel
                    ? input + " " + pluralLabel
                    : input + " " + label + "s";
        };
        return PluralPipe;
    }());
    PluralPipe.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: PluralPipe, deps: [], target: i0__namespace.ɵɵFactoryTarget.Pipe });
    PluralPipe.ɵpipe = i0__namespace.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: PluralPipe, name: "ngxPlural" });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: PluralPipe, decorators: [{
                type: i0.Pipe,
                args: [{ name: 'ngxPlural' }]
            }] });

    var RoundPipe = /** @class */ (function () {
        function RoundPipe() {
        }
        RoundPipe.prototype.transform = function (input) {
            return Math.round(input);
        };
        return RoundPipe;
    }());
    RoundPipe.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: RoundPipe, deps: [], target: i0__namespace.ɵɵFactoryTarget.Pipe });
    RoundPipe.ɵpipe = i0__namespace.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: RoundPipe, name: "ngxRound" });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: RoundPipe, decorators: [{
                type: i0.Pipe,
                args: [{ name: 'ngxRound' }]
            }] });

    var TimingPipe = /** @class */ (function () {
        function TimingPipe() {
        }
        TimingPipe.prototype.transform = function (time) {
            if (time) {
                var minutes = Math.floor(time / 60);
                var seconds = Math.floor(time % 60);
                return "" + this.initZero(minutes) + minutes + ":" + this.initZero(seconds) + seconds;
            }
            return '00:00';
        };
        TimingPipe.prototype.initZero = function (time) {
            return time < 10 ? '0' : '';
        };
        return TimingPipe;
    }());
    TimingPipe.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: TimingPipe, deps: [], target: i0__namespace.ɵɵFactoryTarget.Pipe });
    TimingPipe.ɵpipe = i0__namespace.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: TimingPipe, name: "timing" });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: TimingPipe, decorators: [{
                type: i0.Pipe,
                args: [{ name: 'timing' }]
            }] });

    var NumberWithCommasPipe = /** @class */ (function () {
        function NumberWithCommasPipe() {
        }
        NumberWithCommasPipe.prototype.transform = function (input) {
            return new Intl.NumberFormat().format(input);
        };
        return NumberWithCommasPipe;
    }());
    NumberWithCommasPipe.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: NumberWithCommasPipe, deps: [], target: i0__namespace.ɵɵFactoryTarget.Pipe });
    NumberWithCommasPipe.ɵpipe = i0__namespace.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: NumberWithCommasPipe, name: "ngxNumberWithCommas" });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: NumberWithCommasPipe, decorators: [{
                type: i0.Pipe,
                args: [{ name: 'ngxNumberWithCommas' }]
            }] });

    var baseThemeVariables$3 = i1$1.DEFAULT_THEME.variables;
    var DEFAULT_THEME = {
        name: 'default',
        base: 'default',
        variables: {
            temperature: {
                arcFill: [
                    baseThemeVariables$3.primary,
                    baseThemeVariables$3.primary,
                    baseThemeVariables$3.primary,
                    baseThemeVariables$3.primary,
                    baseThemeVariables$3.primary,
                ],
                arcEmpty: baseThemeVariables$3.bg2,
                thumbBg: baseThemeVariables$3.bg2,
                thumbBorder: baseThemeVariables$3.primary,
            },
            solar: {
                gradientLeft: baseThemeVariables$3.primary,
                gradientRight: baseThemeVariables$3.primary,
                shadowColor: 'rgba(0, 0, 0, 0)',
                secondSeriesFill: baseThemeVariables$3.bg2,
                radius: ['80%', '90%'],
            },
            traffic: {
                tooltipBg: baseThemeVariables$3.bg,
                tooltipBorderColor: baseThemeVariables$3.border2,
                tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
                tooltipTextColor: baseThemeVariables$3.fgText,
                tooltipFontWeight: 'normal',
                yAxisSplitLine: baseThemeVariables$3.separator,
                lineBg: baseThemeVariables$3.border4,
                lineShadowBlur: '1',
                itemColor: baseThemeVariables$3.border4,
                itemBorderColor: baseThemeVariables$3.border4,
                itemEmphasisBorderColor: baseThemeVariables$3.primary,
                shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
                shadowLineShadow: 'rgba(0, 0, 0, 0)',
                gradFrom: baseThemeVariables$3.bg2,
                gradTo: baseThemeVariables$3.bg2,
            },
            electricity: {
                tooltipBg: baseThemeVariables$3.bg,
                tooltipLineColor: baseThemeVariables$3.fgText,
                tooltipLineWidth: '0',
                tooltipBorderColor: baseThemeVariables$3.border2,
                tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
                tooltipTextColor: baseThemeVariables$3.fgText,
                tooltipFontWeight: 'normal',
                axisLineColor: baseThemeVariables$3.border3,
                xAxisTextColor: baseThemeVariables$3.fg,
                yAxisSplitLine: baseThemeVariables$3.separator,
                itemBorderColor: baseThemeVariables$3.primary,
                lineStyle: 'solid',
                lineWidth: '4',
                lineGradFrom: baseThemeVariables$3.primary,
                lineGradTo: baseThemeVariables$3.primary,
                lineShadow: 'rgba(0, 0, 0, 0)',
                areaGradFrom: baseThemeVariables$3.bg2,
                areaGradTo: baseThemeVariables$3.bg2,
                shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            },
            bubbleMap: {
                titleColor: baseThemeVariables$3.fgText,
                areaColor: baseThemeVariables$3.bg4,
                areaHoverColor: baseThemeVariables$3.fgHighlight,
                areaBorderColor: baseThemeVariables$3.border5,
            },
            profitBarAnimationEchart: {
                textColor: baseThemeVariables$3.fgText,
                firstAnimationBarColor: baseThemeVariables$3.primary,
                secondAnimationBarColor: baseThemeVariables$3.success,
                splitLineStyleOpacity: '1',
                splitLineStyleWidth: '1',
                splitLineStyleColor: baseThemeVariables$3.separator,
                tooltipTextColor: baseThemeVariables$3.fgText,
                tooltipFontWeight: 'normal',
                tooltipFontSize: '16',
                tooltipBg: baseThemeVariables$3.bg,
                tooltipBorderColor: baseThemeVariables$3.border2,
                tooltipBorderWidth: '1',
                tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            },
            trafficBarEchart: {
                gradientFrom: baseThemeVariables$3.warningLight,
                gradientTo: baseThemeVariables$3.warning,
                shadow: baseThemeVariables$3.warningLight,
                shadowBlur: '0',
                axisTextColor: baseThemeVariables$3.fgText,
                axisFontSize: '12',
                tooltipBg: baseThemeVariables$3.bg,
                tooltipBorderColor: baseThemeVariables$3.border2,
                tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
                tooltipTextColor: baseThemeVariables$3.fgText,
                tooltipFontWeight: 'normal',
            },
            countryOrders: {
                countryBorderColor: baseThemeVariables$3.border4,
                countryFillColor: baseThemeVariables$3.bg3,
                countryBorderWidth: '1',
                hoveredCountryBorderColor: baseThemeVariables$3.primary,
                hoveredCountryFillColor: baseThemeVariables$3.primaryLight,
                hoveredCountryBorderWidth: '1',
                chartAxisLineColor: baseThemeVariables$3.border4,
                chartAxisTextColor: baseThemeVariables$3.fg,
                chartAxisFontSize: '16',
                chartGradientTo: baseThemeVariables$3.primary,
                chartGradientFrom: baseThemeVariables$3.primaryLight,
                chartAxisSplitLine: baseThemeVariables$3.separator,
                chartShadowLineColor: baseThemeVariables$3.primaryLight,
                chartLineBottomShadowColor: baseThemeVariables$3.primary,
                chartInnerLineColor: baseThemeVariables$3.bg2,
            },
            echarts: {
                bg: baseThemeVariables$3.bg,
                textColor: baseThemeVariables$3.fgText,
                axisLineColor: baseThemeVariables$3.fgText,
                splitLineColor: baseThemeVariables$3.separator,
                itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
                tooltipBackgroundColor: baseThemeVariables$3.primary,
                areaOpacity: '0.7',
            },
            chartjs: {
                axisLineColor: baseThemeVariables$3.separator,
                textColor: baseThemeVariables$3.fgText,
            },
            orders: {
                tooltipBg: baseThemeVariables$3.bg,
                tooltipLineColor: 'rgba(0, 0, 0, 0)',
                tooltipLineWidth: '0',
                tooltipBorderColor: baseThemeVariables$3.border2,
                tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
                tooltipTextColor: baseThemeVariables$3.fgText,
                tooltipFontWeight: 'normal',
                tooltipFontSize: '20',
                axisLineColor: baseThemeVariables$3.border4,
                axisFontSize: '16',
                axisTextColor: baseThemeVariables$3.fg,
                yAxisSplitLine: baseThemeVariables$3.separator,
                itemBorderColor: baseThemeVariables$3.primary,
                lineStyle: 'solid',
                lineWidth: '4',
                // first line
                firstAreaGradFrom: baseThemeVariables$3.bg3,
                firstAreaGradTo: baseThemeVariables$3.bg3,
                firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
                // second line
                secondLineGradFrom: baseThemeVariables$3.primary,
                secondLineGradTo: baseThemeVariables$3.primary,
                secondAreaGradFrom: 'rgba(51, 102, 255, 0.2)',
                secondAreaGradTo: 'rgba(51, 102, 255, 0)',
                secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
                // third line
                thirdLineGradFrom: baseThemeVariables$3.success,
                thirdLineGradTo: baseThemeVariables$3.successLight,
                thirdAreaGradFrom: 'rgba(0, 214, 143, 0.2)',
                thirdAreaGradTo: 'rgba(0, 214, 143, 0)',
                thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            },
            profit: {
                bg: baseThemeVariables$3.bg,
                textColor: baseThemeVariables$3.fgText,
                axisLineColor: baseThemeVariables$3.border4,
                splitLineColor: baseThemeVariables$3.separator,
                areaOpacity: '1',
                axisFontSize: '16',
                axisTextColor: baseThemeVariables$3.fg,
                // first bar
                firstLineGradFrom: baseThemeVariables$3.bg3,
                firstLineGradTo: baseThemeVariables$3.bg3,
                firstLineShadow: 'rgba(0, 0, 0, 0)',
                // second bar
                secondLineGradFrom: baseThemeVariables$3.primary,
                secondLineGradTo: baseThemeVariables$3.primary,
                secondLineShadow: 'rgba(0, 0, 0, 0)',
                // third bar
                thirdLineGradFrom: baseThemeVariables$3.success,
                thirdLineGradTo: baseThemeVariables$3.successLight,
                thirdLineShadow: 'rgba(0, 0, 0, 0)',
            },
            orderProfitLegend: {
                firstItem: baseThemeVariables$3.success,
                secondItem: baseThemeVariables$3.primary,
                thirdItem: baseThemeVariables$3.bg3,
            },
            visitors: {
                tooltipBg: baseThemeVariables$3.bg,
                tooltipLineColor: 'rgba(0, 0, 0, 0)',
                tooltipLineWidth: '1',
                tooltipBorderColor: baseThemeVariables$3.border2,
                tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
                tooltipTextColor: baseThemeVariables$3.fgText,
                tooltipFontWeight: 'normal',
                tooltipFontSize: '20',
                axisLineColor: baseThemeVariables$3.border4,
                axisFontSize: '16',
                axisTextColor: baseThemeVariables$3.fg,
                yAxisSplitLine: baseThemeVariables$3.separator,
                itemBorderColor: baseThemeVariables$3.primary,
                lineStyle: 'dotted',
                lineWidth: '6',
                lineGradFrom: '#ffffff',
                lineGradTo: '#ffffff',
                lineShadow: 'rgba(0, 0, 0, 0)',
                areaGradFrom: baseThemeVariables$3.primary,
                areaGradTo: baseThemeVariables$3.primaryLight,
                innerLineStyle: 'solid',
                innerLineWidth: '1',
                innerAreaGradFrom: baseThemeVariables$3.success,
                innerAreaGradTo: baseThemeVariables$3.success,
            },
            visitorsLegend: {
                firstIcon: baseThemeVariables$3.success,
                secondIcon: baseThemeVariables$3.primary,
            },
            visitorsPie: {
                firstPieGradientLeft: baseThemeVariables$3.success,
                firstPieGradientRight: baseThemeVariables$3.success,
                firstPieShadowColor: 'rgba(0, 0, 0, 0)',
                firstPieRadius: ['70%', '90%'],
                secondPieGradientLeft: baseThemeVariables$3.warning,
                secondPieGradientRight: baseThemeVariables$3.warningLight,
                secondPieShadowColor: 'rgba(0, 0, 0, 0)',
                secondPieRadius: ['60%', '97%'],
                shadowOffsetX: '0',
                shadowOffsetY: '0',
            },
            visitorsPieLegend: {
                firstSection: baseThemeVariables$3.warning,
                secondSection: baseThemeVariables$3.success,
            },
            earningPie: {
                radius: ['65%', '100%'],
                center: ['50%', '50%'],
                fontSize: '22',
                firstPieGradientLeft: baseThemeVariables$3.success,
                firstPieGradientRight: baseThemeVariables$3.success,
                firstPieShadowColor: 'rgba(0, 0, 0, 0)',
                secondPieGradientLeft: baseThemeVariables$3.primary,
                secondPieGradientRight: baseThemeVariables$3.primary,
                secondPieShadowColor: 'rgba(0, 0, 0, 0)',
                thirdPieGradientLeft: baseThemeVariables$3.warning,
                thirdPieGradientRight: baseThemeVariables$3.warning,
                thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
            },
            earningLine: {
                gradFrom: baseThemeVariables$3.primary,
                gradTo: baseThemeVariables$3.primary,
                tooltipTextColor: baseThemeVariables$3.fgText,
                tooltipFontWeight: 'normal',
                tooltipFontSize: '16',
                tooltipBg: baseThemeVariables$3.bg,
                tooltipBorderColor: baseThemeVariables$3.border2,
                tooltipBorderWidth: '1',
                tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            },
        },
    };

    var baseThemeVariables$2 = i1$1.COSMIC_THEME.variables;
    var COSMIC_THEME = {
        name: 'cosmic',
        base: 'cosmic',
        variables: {
            temperature: {
                arcFill: ['#2ec7fe', '#31ffad', '#7bff24', '#fff024', '#f7bd59'],
                arcEmpty: baseThemeVariables$2.bg2,
                thumbBg: '#ffffff',
                thumbBorder: '#ffffff',
            },
            solar: {
                gradientLeft: baseThemeVariables$2.primary,
                gradientRight: baseThemeVariables$2.primary,
                shadowColor: 'rgba(0, 0, 0, 0)',
                secondSeriesFill: baseThemeVariables$2.bg2,
                radius: ['70%', '90%'],
            },
            traffic: {
                tooltipBg: baseThemeVariables$2.bg,
                tooltipBorderColor: baseThemeVariables$2.border2,
                tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(50, 50, 89); border-radius: 10px; padding: 4px 16px;',
                tooltipTextColor: baseThemeVariables$2.fgText,
                tooltipFontWeight: 'normal',
                yAxisSplitLine: baseThemeVariables$2.separator,
                lineBg: baseThemeVariables$2.border2,
                lineShadowBlur: '14',
                itemColor: baseThemeVariables$2.border2,
                itemBorderColor: baseThemeVariables$2.border2,
                itemEmphasisBorderColor: baseThemeVariables$2.primary,
                shadowLineDarkBg: baseThemeVariables$2.border3,
                shadowLineShadow: baseThemeVariables$2.border3,
                gradFrom: baseThemeVariables$2.bg,
                gradTo: baseThemeVariables$2.bg2,
            },
            electricity: {
                tooltipBg: baseThemeVariables$2.bg,
                tooltipLineColor: baseThemeVariables$2.fgText,
                tooltipLineWidth: '0',
                tooltipBorderColor: baseThemeVariables$2.border2,
                tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 8px 24px;',
                tooltipTextColor: baseThemeVariables$2.fgText,
                tooltipFontWeight: 'normal',
                axisLineColor: baseThemeVariables$2.border3,
                xAxisTextColor: baseThemeVariables$2.fg,
                yAxisSplitLine: baseThemeVariables$2.separator,
                itemBorderColor: baseThemeVariables$2.border2,
                lineStyle: 'dotted',
                lineWidth: '6',
                lineGradFrom: baseThemeVariables$2.success,
                lineGradTo: baseThemeVariables$2.warning,
                lineShadow: baseThemeVariables$2.bg4,
                areaGradFrom: baseThemeVariables$2.bg2,
                areaGradTo: baseThemeVariables$2.bg3,
                shadowLineDarkBg: baseThemeVariables$2.bg3,
            },
            bubbleMap: {
                titleColor: baseThemeVariables$2.fgText,
                areaColor: baseThemeVariables$2.bg4,
                areaHoverColor: baseThemeVariables$2.fgHighlight,
                areaBorderColor: baseThemeVariables$2.border5,
            },
            profitBarAnimationEchart: {
                textColor: baseThemeVariables$2.fgText,
                firstAnimationBarColor: baseThemeVariables$2.primary,
                secondAnimationBarColor: baseThemeVariables$2.success,
                splitLineStyleOpacity: '1',
                splitLineStyleWidth: '1',
                splitLineStyleColor: baseThemeVariables$2.border2,
                tooltipTextColor: baseThemeVariables$2.fgText,
                tooltipFontWeight: 'normal',
                tooltipFontSize: '16',
                tooltipBg: baseThemeVariables$2.bg,
                tooltipBorderColor: baseThemeVariables$2.border2,
                tooltipBorderWidth: '1',
                tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            },
            trafficBarEchart: {
                gradientFrom: baseThemeVariables$2.warningLight,
                gradientTo: baseThemeVariables$2.warning,
                shadow: baseThemeVariables$2.warningLight,
                shadowBlur: '5',
                axisTextColor: baseThemeVariables$2.fgText,
                axisFontSize: '12',
                tooltipBg: baseThemeVariables$2.bg,
                tooltipBorderColor: baseThemeVariables$2.border2,
                tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
                tooltipTextColor: baseThemeVariables$2.fgText,
                tooltipFontWeight: 'normal',
            },
            countryOrders: {
                countryBorderColor: baseThemeVariables$2.border4,
                countryFillColor: baseThemeVariables$2.bg3,
                countryBorderWidth: '1',
                hoveredCountryBorderColor: baseThemeVariables$2.primary,
                hoveredCountryFillColor: baseThemeVariables$2.primaryLight,
                hoveredCountryBorderWidth: '1',
                chartAxisLineColor: baseThemeVariables$2.border4,
                chartAxisTextColor: baseThemeVariables$2.fg,
                chartAxisFontSize: '16',
                chartGradientTo: baseThemeVariables$2.primary,
                chartGradientFrom: baseThemeVariables$2.primaryLight,
                chartAxisSplitLine: baseThemeVariables$2.separator,
                chartShadowLineColor: baseThemeVariables$2.primaryLight,
                chartLineBottomShadowColor: baseThemeVariables$2.primary,
                chartInnerLineColor: baseThemeVariables$2.bg2,
            },
            echarts: {
                bg: baseThemeVariables$2.bg,
                textColor: baseThemeVariables$2.fgText,
                axisLineColor: baseThemeVariables$2.fgText,
                splitLineColor: baseThemeVariables$2.separator,
                itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
                tooltipBackgroundColor: baseThemeVariables$2.primary,
                areaOpacity: '1',
            },
            chartjs: {
                axisLineColor: baseThemeVariables$2.separator,
                textColor: baseThemeVariables$2.fgText,
            },
            orders: {
                tooltipBg: baseThemeVariables$2.bg,
                tooltipLineColor: 'rgba(0, 0, 0, 0)',
                tooltipLineWidth: '0',
                tooltipBorderColor: baseThemeVariables$2.border2,
                tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
                tooltipTextColor: baseThemeVariables$2.fgText,
                tooltipFontWeight: 'normal',
                tooltipFontSize: '20',
                axisLineColor: baseThemeVariables$2.border4,
                axisFontSize: '16',
                axisTextColor: baseThemeVariables$2.fg,
                yAxisSplitLine: baseThemeVariables$2.separator,
                itemBorderColor: baseThemeVariables$2.primary,
                lineStyle: 'solid',
                lineWidth: '4',
                // first line
                firstAreaGradFrom: baseThemeVariables$2.bg2,
                firstAreaGradTo: baseThemeVariables$2.bg2,
                firstShadowLineDarkBg: baseThemeVariables$2.bg2,
                // second line
                secondLineGradFrom: baseThemeVariables$2.primary,
                secondLineGradTo: baseThemeVariables$2.primary,
                secondAreaGradFrom: 'rgba(161, 110, 255, 0.8)',
                secondAreaGradTo: 'rgba(161, 110, 255, 0.5)',
                secondShadowLineDarkBg: baseThemeVariables$2.primary,
                // third line
                thirdLineGradFrom: baseThemeVariables$2.success,
                thirdLineGradTo: baseThemeVariables$2.successLight,
                thirdAreaGradFrom: 'rgba(0, 214, 143, 0.7)',
                thirdAreaGradTo: 'rgba(0, 214, 143, 0.4)',
                thirdShadowLineDarkBg: baseThemeVariables$2.success,
            },
            profit: {
                bg: baseThemeVariables$2.bg,
                textColor: baseThemeVariables$2.fgText,
                axisLineColor: baseThemeVariables$2.border4,
                splitLineColor: baseThemeVariables$2.separator,
                areaOpacity: '1',
                axisFontSize: '16',
                axisTextColor: baseThemeVariables$2.fg,
                // first bar
                firstLineGradFrom: baseThemeVariables$2.bg2,
                firstLineGradTo: baseThemeVariables$2.bg2,
                firstLineShadow: 'rgba(0, 0, 0, 0)',
                // second bar
                secondLineGradFrom: baseThemeVariables$2.primary,
                secondLineGradTo: baseThemeVariables$2.primary,
                secondLineShadow: 'rgba(0, 0, 0, 0)',
                // third bar
                thirdLineGradFrom: baseThemeVariables$2.success,
                thirdLineGradTo: baseThemeVariables$2.successLight,
                thirdLineShadow: 'rgba(0, 0, 0, 0)',
            },
            orderProfitLegend: {
                firstItem: baseThemeVariables$2.success,
                secondItem: baseThemeVariables$2.primary,
                thirdItem: baseThemeVariables$2.bg2,
            },
            visitors: {
                tooltipBg: baseThemeVariables$2.bg,
                tooltipLineColor: 'rgba(0, 0, 0, 0)',
                tooltipLineWidth: '1',
                tooltipBorderColor: baseThemeVariables$2.border2,
                tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
                tooltipTextColor: baseThemeVariables$2.fgText,
                tooltipFontWeight: 'normal',
                tooltipFontSize: '20',
                axisLineColor: baseThemeVariables$2.border4,
                axisFontSize: '16',
                axisTextColor: baseThemeVariables$2.fg,
                yAxisSplitLine: baseThemeVariables$2.separator,
                itemBorderColor: baseThemeVariables$2.primary,
                lineStyle: 'dotted',
                lineWidth: '6',
                lineGradFrom: '#ffffff',
                lineGradTo: '#ffffff',
                lineShadow: 'rgba(0, 0, 0, 0)',
                areaGradFrom: baseThemeVariables$2.primary,
                areaGradTo: baseThemeVariables$2.primaryLight,
                innerLineStyle: 'solid',
                innerLineWidth: '1',
                innerAreaGradFrom: baseThemeVariables$2.success,
                innerAreaGradTo: baseThemeVariables$2.success,
            },
            visitorsLegend: {
                firstIcon: baseThemeVariables$2.success,
                secondIcon: baseThemeVariables$2.primary,
            },
            visitorsPie: {
                firstPieGradientLeft: baseThemeVariables$2.success,
                firstPieGradientRight: baseThemeVariables$2.successLight,
                firstPieShadowColor: 'rgba(0, 0, 0, 0)',
                firstPieRadius: ['70%', '90%'],
                secondPieGradientLeft: baseThemeVariables$2.warning,
                secondPieGradientRight: baseThemeVariables$2.warningLight,
                secondPieShadowColor: 'rgba(0, 0, 0, 0)',
                secondPieRadius: ['60%', '95%'],
                shadowOffsetX: '0',
                shadowOffsetY: '3',
            },
            visitorsPieLegend: {
                firstSection: baseThemeVariables$2.warning,
                secondSection: baseThemeVariables$2.success,
            },
            earningPie: {
                radius: ['65%', '100%'],
                center: ['50%', '50%'],
                fontSize: '22',
                firstPieGradientLeft: baseThemeVariables$2.success,
                firstPieGradientRight: baseThemeVariables$2.success,
                firstPieShadowColor: 'rgba(0, 0, 0, 0)',
                secondPieGradientLeft: baseThemeVariables$2.primary,
                secondPieGradientRight: baseThemeVariables$2.primary,
                secondPieShadowColor: 'rgba(0, 0, 0, 0)',
                thirdPieGradientLeft: baseThemeVariables$2.warning,
                thirdPieGradientRight: baseThemeVariables$2.warning,
                thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
            },
            earningLine: {
                gradFrom: baseThemeVariables$2.primary,
                gradTo: baseThemeVariables$2.primary,
                tooltipTextColor: baseThemeVariables$2.fgText,
                tooltipFontWeight: 'normal',
                tooltipFontSize: '16',
                tooltipBg: baseThemeVariables$2.bg,
                tooltipBorderColor: baseThemeVariables$2.border2,
                tooltipBorderWidth: '1',
                tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            },
        },
    };

    var baseThemeVariables$1 = i1$1.CORPORATE_THEME.variables;
    var CORPORATE_THEME = {
        name: 'corporate',
        base: 'corporate',
        variables: {
            temperature: {
                arcFill: ['#ffa36b', '#ffa36b', '#ff9e7a', '#ff9888', '#ff8ea0'],
                arcEmpty: baseThemeVariables$1.bg2,
                thumbBg: baseThemeVariables$1.bg2,
                thumbBorder: '#ffa36b',
            },
            solar: {
                gradientLeft: baseThemeVariables$1.primary,
                gradientRight: baseThemeVariables$1.primary,
                shadowColor: 'rgba(0, 0, 0, 0)',
                secondSeriesFill: baseThemeVariables$1.bg2,
                radius: ['80%', '90%'],
            },
            traffic: {
                tooltipBg: baseThemeVariables$1.bg,
                tooltipBorderColor: baseThemeVariables$1.border2,
                tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
                tooltipTextColor: baseThemeVariables$1.fgText,
                tooltipFontWeight: 'normal',
                yAxisSplitLine: 'rgba(0, 0, 0, 0)',
                lineBg: baseThemeVariables$1.primary,
                lineShadowBlur: '0',
                itemColor: baseThemeVariables$1.border4,
                itemBorderColor: baseThemeVariables$1.border4,
                itemEmphasisBorderColor: baseThemeVariables$1.primaryLight,
                shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
                shadowLineShadow: 'rgba(0, 0, 0, 0)',
                gradFrom: baseThemeVariables$1.bg,
                gradTo: baseThemeVariables$1.bg,
            },
            electricity: {
                tooltipBg: baseThemeVariables$1.bg,
                tooltipLineColor: baseThemeVariables$1.fgText,
                tooltipLineWidth: '0',
                tooltipBorderColor: baseThemeVariables$1.border2,
                tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
                tooltipTextColor: baseThemeVariables$1.fgText,
                tooltipFontWeight: 'normal',
                axisLineColor: baseThemeVariables$1.border3,
                xAxisTextColor: baseThemeVariables$1.fg,
                yAxisSplitLine: baseThemeVariables$1.separator,
                itemBorderColor: baseThemeVariables$1.primary,
                lineStyle: 'solid',
                lineWidth: '4',
                lineGradFrom: baseThemeVariables$1.primary,
                lineGradTo: baseThemeVariables$1.primary,
                lineShadow: 'rgba(0, 0, 0, 0)',
                areaGradFrom: 'rgba(0, 0, 0, 0)',
                areaGradTo: 'rgba(0, 0, 0, 0)',
                shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            },
            bubbleMap: {
                titleColor: baseThemeVariables$1.fgText,
                areaColor: baseThemeVariables$1.bg4,
                areaHoverColor: baseThemeVariables$1.fgHighlight,
                areaBorderColor: baseThemeVariables$1.border5,
            },
            profitBarAnimationEchart: {
                textColor: baseThemeVariables$1.fgText,
                firstAnimationBarColor: baseThemeVariables$1.primary,
                secondAnimationBarColor: baseThemeVariables$1.success,
                splitLineStyleOpacity: '1',
                splitLineStyleWidth: '1',
                splitLineStyleColor: baseThemeVariables$1.separator,
                tooltipTextColor: baseThemeVariables$1.fgText,
                tooltipFontWeight: 'normal',
                tooltipFontSize: '16',
                tooltipBg: baseThemeVariables$1.bg,
                tooltipBorderColor: baseThemeVariables$1.border2,
                tooltipBorderWidth: '1',
                tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            },
            trafficBarEchart: {
                gradientFrom: baseThemeVariables$1.warningLight,
                gradientTo: baseThemeVariables$1.warning,
                shadow: baseThemeVariables$1.warningLight,
                shadowBlur: '0',
                axisTextColor: baseThemeVariables$1.fgText,
                axisFontSize: '12',
                tooltipBg: baseThemeVariables$1.bg,
                tooltipBorderColor: baseThemeVariables$1.border2,
                tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
                tooltipTextColor: baseThemeVariables$1.fgText,
                tooltipFontWeight: 'normal',
            },
            countryOrders: {
                countryBorderColor: baseThemeVariables$1.border4,
                countryFillColor: baseThemeVariables$1.bg4,
                countryBorderWidth: '1',
                hoveredCountryBorderColor: baseThemeVariables$1.primary,
                hoveredCountryFillColor: baseThemeVariables$1.primaryLight,
                hoveredCountryBorderWidth: '1',
                chartAxisLineColor: baseThemeVariables$1.border4,
                chartAxisTextColor: baseThemeVariables$1.fg,
                chartAxisFontSize: '16',
                chartGradientTo: baseThemeVariables$1.primary,
                chartGradientFrom: baseThemeVariables$1.primaryLight,
                chartAxisSplitLine: baseThemeVariables$1.separator,
                chartShadowLineColor: baseThemeVariables$1.primaryLight,
                chartLineBottomShadowColor: baseThemeVariables$1.primary,
                chartInnerLineColor: baseThemeVariables$1.bg2,
            },
            echarts: {
                bg: baseThemeVariables$1.bg,
                textColor: baseThemeVariables$1.fgText,
                axisLineColor: baseThemeVariables$1.fgText,
                splitLineColor: baseThemeVariables$1.separator,
                itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
                tooltipBackgroundColor: baseThemeVariables$1.primary,
                areaOpacity: '0.7',
            },
            chartjs: {
                axisLineColor: baseThemeVariables$1.separator,
                textColor: baseThemeVariables$1.fgText,
            },
            orders: {
                tooltipBg: baseThemeVariables$1.bg,
                tooltipLineColor: 'rgba(0, 0, 0, 0)',
                tooltipLineWidth: '0',
                tooltipBorderColor: baseThemeVariables$1.border2,
                tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
                tooltipTextColor: baseThemeVariables$1.fgText,
                tooltipFontWeight: 'normal',
                tooltipFontSize: '20',
                axisLineColor: baseThemeVariables$1.border4,
                axisFontSize: '16',
                axisTextColor: baseThemeVariables$1.fg,
                yAxisSplitLine: baseThemeVariables$1.separator,
                itemBorderColor: baseThemeVariables$1.primary,
                lineStyle: 'solid',
                lineWidth: '4',
                // first line
                firstAreaGradFrom: baseThemeVariables$1.bg3,
                firstAreaGradTo: baseThemeVariables$1.bg3,
                firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
                // second line
                secondLineGradFrom: baseThemeVariables$1.primary,
                secondLineGradTo: baseThemeVariables$1.primary,
                secondAreaGradFrom: 'rgba(0, 0, 0, 0)',
                secondAreaGradTo: 'rgba(0, 0, 0, 0)',
                secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
                // third line
                thirdLineGradFrom: baseThemeVariables$1.success,
                thirdLineGradTo: baseThemeVariables$1.successLight,
                thirdAreaGradFrom: 'rgba(0, 0, 0, 0)',
                thirdAreaGradTo: 'rgba(0, 0, 0, 0)',
                thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            },
            profit: {
                bg: baseThemeVariables$1.bg,
                textColor: baseThemeVariables$1.fgText,
                axisLineColor: baseThemeVariables$1.border4,
                splitLineColor: baseThemeVariables$1.separator,
                areaOpacity: '1',
                axisFontSize: '16',
                axisTextColor: baseThemeVariables$1.fg,
                // first bar
                firstLineGradFrom: baseThemeVariables$1.bg3,
                firstLineGradTo: baseThemeVariables$1.bg3,
                firstLineShadow: 'rgba(0, 0, 0, 0)',
                // second bar
                secondLineGradFrom: baseThemeVariables$1.primary,
                secondLineGradTo: baseThemeVariables$1.primary,
                secondLineShadow: 'rgba(0, 0, 0, 0)',
                // third bar
                thirdLineGradFrom: baseThemeVariables$1.success,
                thirdLineGradTo: baseThemeVariables$1.success,
                thirdLineShadow: 'rgba(0, 0, 0, 0)',
            },
            orderProfitLegend: {
                firstItem: baseThemeVariables$1.success,
                secondItem: baseThemeVariables$1.primary,
                thirdItem: baseThemeVariables$1.bg3,
            },
            visitors: {
                tooltipBg: baseThemeVariables$1.bg,
                tooltipLineColor: 'rgba(0, 0, 0, 0)',
                tooltipLineWidth: '1',
                tooltipBorderColor: baseThemeVariables$1.border2,
                tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
                tooltipTextColor: baseThemeVariables$1.fgText,
                tooltipFontWeight: 'normal',
                tooltipFontSize: '20',
                axisLineColor: baseThemeVariables$1.border4,
                axisFontSize: '16',
                axisTextColor: baseThemeVariables$1.fg,
                yAxisSplitLine: baseThemeVariables$1.separator,
                itemBorderColor: baseThemeVariables$1.primary,
                lineStyle: 'dotted',
                lineWidth: '6',
                lineGradFrom: '#ffffff',
                lineGradTo: '#ffffff',
                lineShadow: 'rgba(0, 0, 0, 0)',
                areaGradFrom: baseThemeVariables$1.primary,
                areaGradTo: baseThemeVariables$1.primaryLight,
                innerLineStyle: 'solid',
                innerLineWidth: '1',
                innerAreaGradFrom: baseThemeVariables$1.success,
                innerAreaGradTo: baseThemeVariables$1.success,
            },
            visitorsLegend: {
                firstIcon: baseThemeVariables$1.success,
                secondIcon: baseThemeVariables$1.primary,
            },
            visitorsPie: {
                firstPieGradientLeft: baseThemeVariables$1.success,
                firstPieGradientRight: baseThemeVariables$1.success,
                firstPieShadowColor: 'rgba(0, 0, 0, 0)',
                firstPieRadius: ['65%', '90%'],
                secondPieGradientLeft: baseThemeVariables$1.warning,
                secondPieGradientRight: baseThemeVariables$1.warningLight,
                secondPieShadowColor: 'rgba(0, 0, 0, 0)',
                secondPieRadius: ['63%', '92%'],
                shadowOffsetX: '-4',
                shadowOffsetY: '-4',
            },
            visitorsPieLegend: {
                firstSection: baseThemeVariables$1.warning,
                secondSection: baseThemeVariables$1.success,
            },
            earningPie: {
                radius: ['65%', '100%'],
                center: ['50%', '50%'],
                fontSize: '22',
                firstPieGradientLeft: baseThemeVariables$1.success,
                firstPieGradientRight: baseThemeVariables$1.success,
                firstPieShadowColor: 'rgba(0, 0, 0, 0)',
                secondPieGradientLeft: baseThemeVariables$1.primary,
                secondPieGradientRight: baseThemeVariables$1.primary,
                secondPieShadowColor: 'rgba(0, 0, 0, 0)',
                thirdPieGradientLeft: baseThemeVariables$1.warning,
                thirdPieGradientRight: baseThemeVariables$1.warning,
                thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
            },
            earningLine: {
                gradFrom: baseThemeVariables$1.primary,
                gradTo: baseThemeVariables$1.primary,
                tooltipTextColor: baseThemeVariables$1.fgText,
                tooltipFontWeight: 'normal',
                tooltipFontSize: '16',
                tooltipBg: baseThemeVariables$1.bg,
                tooltipBorderColor: baseThemeVariables$1.border2,
                tooltipBorderWidth: '1',
                tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            },
        },
    };

    var baseThemeVariables = i1$1.DARK_THEME.variables;
    var DARK_THEME = {
        name: 'dark',
        base: 'dark',
        variables: {
            temperature: {
                arcFill: [
                    baseThemeVariables.primary,
                    baseThemeVariables.primary,
                    baseThemeVariables.primary,
                    baseThemeVariables.primary,
                    baseThemeVariables.primary,
                ],
                arcEmpty: baseThemeVariables.bg2,
                thumbBg: baseThemeVariables.bg2,
                thumbBorder: baseThemeVariables.primary,
            },
            solar: {
                gradientLeft: baseThemeVariables.primary,
                gradientRight: baseThemeVariables.primary,
                shadowColor: 'rgba(0, 0, 0, 0)',
                secondSeriesFill: baseThemeVariables.bg2,
                radius: ['80%', '90%'],
            },
            traffic: {
                tooltipBg: baseThemeVariables.bg,
                tooltipBorderColor: baseThemeVariables.border2,
                tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
                tooltipTextColor: baseThemeVariables.fgText,
                tooltipFontWeight: 'normal',
                yAxisSplitLine: baseThemeVariables.separator,
                lineBg: baseThemeVariables.border4,
                lineShadowBlur: '1',
                itemColor: baseThemeVariables.border4,
                itemBorderColor: baseThemeVariables.border4,
                itemEmphasisBorderColor: baseThemeVariables.primary,
                shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
                shadowLineShadow: 'rgba(0, 0, 0, 0)',
                gradFrom: baseThemeVariables.bg2,
                gradTo: baseThemeVariables.bg2,
            },
            electricity: {
                tooltipBg: baseThemeVariables.bg,
                tooltipLineColor: baseThemeVariables.fgText,
                tooltipLineWidth: '0',
                tooltipBorderColor: baseThemeVariables.border2,
                tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
                tooltipTextColor: baseThemeVariables.fgText,
                tooltipFontWeight: 'normal',
                axisLineColor: baseThemeVariables.border3,
                xAxisTextColor: baseThemeVariables.fg,
                yAxisSplitLine: baseThemeVariables.separator,
                itemBorderColor: baseThemeVariables.primary,
                lineStyle: 'solid',
                lineWidth: '4',
                lineGradFrom: baseThemeVariables.primary,
                lineGradTo: baseThemeVariables.primary,
                lineShadow: 'rgba(0, 0, 0, 0)',
                areaGradFrom: baseThemeVariables.bg2,
                areaGradTo: baseThemeVariables.bg2,
                shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            },
            bubbleMap: {
                titleColor: baseThemeVariables.fgText,
                areaColor: baseThemeVariables.bg4,
                areaHoverColor: baseThemeVariables.fgHighlight,
                areaBorderColor: baseThemeVariables.border5,
            },
            profitBarAnimationEchart: {
                textColor: baseThemeVariables.fgText,
                firstAnimationBarColor: baseThemeVariables.primary,
                secondAnimationBarColor: baseThemeVariables.success,
                splitLineStyleOpacity: '1',
                splitLineStyleWidth: '1',
                splitLineStyleColor: baseThemeVariables.separator,
                tooltipTextColor: baseThemeVariables.fgText,
                tooltipFontWeight: 'normal',
                tooltipFontSize: '16',
                tooltipBg: baseThemeVariables.bg,
                tooltipBorderColor: baseThemeVariables.border2,
                tooltipBorderWidth: '1',
                tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            },
            trafficBarEchart: {
                gradientFrom: baseThemeVariables.warningLight,
                gradientTo: baseThemeVariables.warning,
                shadow: baseThemeVariables.warningLight,
                shadowBlur: '0',
                axisTextColor: baseThemeVariables.fgText,
                axisFontSize: '12',
                tooltipBg: baseThemeVariables.bg,
                tooltipBorderColor: baseThemeVariables.border2,
                tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
                tooltipTextColor: baseThemeVariables.fgText,
                tooltipFontWeight: 'normal',
            },
            countryOrders: {
                countryBorderColor: baseThemeVariables.border4,
                countryFillColor: baseThemeVariables.bg3,
                countryBorderWidth: '1',
                hoveredCountryBorderColor: baseThemeVariables.primary,
                hoveredCountryFillColor: baseThemeVariables.primaryLight,
                hoveredCountryBorderWidth: '1',
                chartAxisLineColor: baseThemeVariables.border4,
                chartAxisTextColor: baseThemeVariables.fg,
                chartAxisFontSize: '16',
                chartGradientTo: baseThemeVariables.primary,
                chartGradientFrom: baseThemeVariables.primaryLight,
                chartAxisSplitLine: baseThemeVariables.separator,
                chartShadowLineColor: baseThemeVariables.primaryLight,
                chartLineBottomShadowColor: baseThemeVariables.primary,
                chartInnerLineColor: baseThemeVariables.bg2,
            },
            echarts: {
                bg: baseThemeVariables.bg,
                textColor: baseThemeVariables.fgText,
                axisLineColor: baseThemeVariables.fgText,
                splitLineColor: baseThemeVariables.separator,
                itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
                tooltipBackgroundColor: baseThemeVariables.primary,
                areaOpacity: '0.7',
            },
            chartjs: {
                axisLineColor: baseThemeVariables.separator,
                textColor: baseThemeVariables.fgText,
            },
            orders: {
                tooltipBg: baseThemeVariables.bg,
                tooltipLineColor: 'rgba(0, 0, 0, 0)',
                tooltipLineWidth: '0',
                tooltipBorderColor: baseThemeVariables.border2,
                tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
                tooltipTextColor: baseThemeVariables.fgText,
                tooltipFontWeight: 'normal',
                tooltipFontSize: '20',
                axisLineColor: baseThemeVariables.border4,
                axisFontSize: '16',
                axisTextColor: baseThemeVariables.fg,
                yAxisSplitLine: baseThemeVariables.separator,
                itemBorderColor: baseThemeVariables.primary,
                lineStyle: 'solid',
                lineWidth: '4',
                // first line
                firstAreaGradFrom: baseThemeVariables.bg3,
                firstAreaGradTo: baseThemeVariables.bg3,
                firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
                // second line
                secondLineGradFrom: baseThemeVariables.primary,
                secondLineGradTo: baseThemeVariables.primary,
                secondAreaGradFrom: 'rgba(51, 102, 255, 0.2)',
                secondAreaGradTo: 'rgba(51, 102, 255, 0)',
                secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
                // third line
                thirdLineGradFrom: baseThemeVariables.success,
                thirdLineGradTo: baseThemeVariables.successLight,
                thirdAreaGradFrom: 'rgba(0, 214, 143, 0.2)',
                thirdAreaGradTo: 'rgba(0, 214, 143, 0)',
                thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            },
            profit: {
                bg: baseThemeVariables.bg,
                textColor: baseThemeVariables.fgText,
                axisLineColor: baseThemeVariables.border4,
                splitLineColor: baseThemeVariables.separator,
                areaOpacity: '1',
                axisFontSize: '16',
                axisTextColor: baseThemeVariables.fg,
                // first bar
                firstLineGradFrom: baseThemeVariables.bg3,
                firstLineGradTo: baseThemeVariables.bg3,
                firstLineShadow: 'rgba(0, 0, 0, 0)',
                // second bar
                secondLineGradFrom: baseThemeVariables.primary,
                secondLineGradTo: baseThemeVariables.primary,
                secondLineShadow: 'rgba(0, 0, 0, 0)',
                // third bar
                thirdLineGradFrom: baseThemeVariables.success,
                thirdLineGradTo: baseThemeVariables.successLight,
                thirdLineShadow: 'rgba(0, 0, 0, 0)',
            },
            orderProfitLegend: {
                firstItem: baseThemeVariables.success,
                secondItem: baseThemeVariables.primary,
                thirdItem: baseThemeVariables.bg3,
            },
            visitors: {
                tooltipBg: baseThemeVariables.bg,
                tooltipLineColor: 'rgba(0, 0, 0, 0)',
                tooltipLineWidth: '0',
                tooltipBorderColor: baseThemeVariables.border2,
                tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
                tooltipTextColor: baseThemeVariables.fgText,
                tooltipFontWeight: 'normal',
                tooltipFontSize: '20',
                axisLineColor: baseThemeVariables.border4,
                axisFontSize: '16',
                axisTextColor: baseThemeVariables.fg,
                yAxisSplitLine: baseThemeVariables.separator,
                itemBorderColor: baseThemeVariables.primary,
                lineStyle: 'dotted',
                lineWidth: '6',
                lineGradFrom: '#ffffff',
                lineGradTo: '#ffffff',
                lineShadow: 'rgba(0, 0, 0, 0)',
                areaGradFrom: baseThemeVariables.primary,
                areaGradTo: baseThemeVariables.primaryLight,
                innerLineStyle: 'solid',
                innerLineWidth: '1',
                innerAreaGradFrom: baseThemeVariables.success,
                innerAreaGradTo: baseThemeVariables.success,
            },
            visitorsLegend: {
                firstIcon: baseThemeVariables.success,
                secondIcon: baseThemeVariables.primary,
            },
            visitorsPie: {
                firstPieGradientLeft: baseThemeVariables.success,
                firstPieGradientRight: baseThemeVariables.success,
                firstPieShadowColor: 'rgba(0, 0, 0, 0)',
                firstPieRadius: ['70%', '90%'],
                secondPieGradientLeft: baseThemeVariables.warning,
                secondPieGradientRight: baseThemeVariables.warningLight,
                secondPieShadowColor: 'rgba(0, 0, 0, 0)',
                secondPieRadius: ['60%', '97%'],
                shadowOffsetX: '0',
                shadowOffsetY: '0',
            },
            visitorsPieLegend: {
                firstSection: baseThemeVariables.warning,
                secondSection: baseThemeVariables.success,
            },
            earningPie: {
                radius: ['65%', '100%'],
                center: ['50%', '50%'],
                fontSize: '22',
                firstPieGradientLeft: baseThemeVariables.success,
                firstPieGradientRight: baseThemeVariables.success,
                firstPieShadowColor: 'rgba(0, 0, 0, 0)',
                secondPieGradientLeft: baseThemeVariables.primary,
                secondPieGradientRight: baseThemeVariables.primary,
                secondPieShadowColor: 'rgba(0, 0, 0, 0)',
                thirdPieGradientLeft: baseThemeVariables.warning,
                thirdPieGradientRight: baseThemeVariables.warning,
                thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
            },
            earningLine: {
                gradFrom: baseThemeVariables.primary,
                gradTo: baseThemeVariables.primary,
                tooltipTextColor: baseThemeVariables.fgText,
                tooltipFontWeight: 'normal',
                tooltipFontSize: '16',
                tooltipBg: baseThemeVariables.bg,
                tooltipBorderColor: baseThemeVariables.border2,
                tooltipBorderWidth: '1',
                tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            },
        },
    };

    var NB_MODULES = [
        i1.RouterModule,
        i2.TranslateModule,
        i1$1.NbLayoutModule,
        i1$1.NbMenuModule,
        i1$1.NbUserModule,
        i1$1.NbActionsModule,
        i1$1.NbSearchModule,
        i1$1.NbSidebarModule,
        i1$1.NbContextMenuModule,
        security.NbSecurityModule,
        i1$1.NbButtonModule,
        i1$1.NbSelectModule,
        i1$1.NbIconModule,
        evaIcons.NbEvaIconsModule,
    ];
    var THEME_COMPONENTS = [
        HeaderComponent,
        FooterComponent,
        SearchInputComponent,
        DefaultLayoutComponent,
    ];
    var THEME_PROVIDERS = [
        LayoutService,
        StateService,
        AnalyticsService,
        SeoService,
    ];
    var THEME_PIPES = [
        CapitalizePipe,
        PluralPipe,
        RoundPipe,
        TimingPipe,
        NumberWithCommasPipe,
    ];
    var DoThemeModule = /** @class */ (function () {
        function DoThemeModule() {
        }
        DoThemeModule.forRoot = function () {
            return {
                ngModule: DoThemeModule,
                providers: __spreadArray(__spreadArray([], __read(THEME_PROVIDERS)), __read(i1$1.NbThemeModule.forRoot({
                    name: 'default',
                }, [DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME]).providers)),
            };
        };
        return DoThemeModule;
    }());
    DoThemeModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoThemeModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DoThemeModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoThemeModule, declarations: [HeaderComponent,
            FooterComponent,
            SearchInputComponent,
            DefaultLayoutComponent, CapitalizePipe,
            PluralPipe,
            RoundPipe,
            TimingPipe,
            NumberWithCommasPipe], imports: [i3.CommonModule, i1.RouterModule,
            i2.TranslateModule,
            i1$1.NbLayoutModule,
            i1$1.NbMenuModule,
            i1$1.NbUserModule,
            i1$1.NbActionsModule,
            i1$1.NbSearchModule,
            i1$1.NbSidebarModule,
            i1$1.NbContextMenuModule,
            security.NbSecurityModule,
            i1$1.NbButtonModule,
            i1$1.NbSelectModule,
            i1$1.NbIconModule,
            evaIcons.NbEvaIconsModule], exports: [i3.CommonModule, CapitalizePipe,
            PluralPipe,
            RoundPipe,
            TimingPipe,
            NumberWithCommasPipe, HeaderComponent,
            FooterComponent,
            SearchInputComponent,
            DefaultLayoutComponent] });
    DoThemeModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoThemeModule, imports: [__spreadArray([i3.CommonModule], __read(NB_MODULES)), i3.CommonModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoThemeModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: __spreadArray([i3.CommonModule], __read(NB_MODULES)),
                        exports: __spreadArray(__spreadArray([i3.CommonModule], __read(THEME_PIPES)), __read(THEME_COMPONENTS)),
                        declarations: __spreadArray(__spreadArray([], __read(THEME_COMPONENTS)), __read(THEME_PIPES)),
                    }]
            }] });

    /*
     * Public API Surface of do-theme
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AnalyticsService = AnalyticsService;
    exports.CORPORATE_THEME = CORPORATE_THEME;
    exports.COSMIC_THEME = COSMIC_THEME;
    exports.CapitalizePipe = CapitalizePipe;
    exports.DARK_THEME = DARK_THEME;
    exports.DEFAULT_THEME = DEFAULT_THEME;
    exports.DefaultLayoutComponent = DefaultLayoutComponent;
    exports.DoThemeModule = DoThemeModule;
    exports.FooterComponent = FooterComponent;
    exports.HeaderComponent = HeaderComponent;
    exports.LayoutService = LayoutService;
    exports.NumberWithCommasPipe = NumberWithCommasPipe;
    exports.PluralPipe = PluralPipe;
    exports.RoundPipe = RoundPipe;
    exports.SearchInputComponent = SearchInputComponent;
    exports.SeoService = SeoService;
    exports.StateService = StateService;
    exports.TimingPipe = TimingPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=dongkap-do-theme.umd.js.map
