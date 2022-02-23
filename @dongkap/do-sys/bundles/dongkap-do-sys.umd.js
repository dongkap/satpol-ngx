(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@nebular/theme'), require('@ngx-translate/core'), require('@dongkap/do-theme'), require('@dongkap/do-shared'), require('@angular/router'), require('@swimlane/ngx-datatable'), require('@dongkap/do-auth'), require('rxjs/operators'), require('@dongkap/do-core'), require('@angular/common'), require('tree-ngx'), require('rxjs'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('@dongkap/do-sys', ['exports', '@angular/core', '@angular/forms', '@nebular/theme', '@ngx-translate/core', '@dongkap/do-theme', '@dongkap/do-shared', '@angular/router', '@swimlane/ngx-datatable', '@dongkap/do-auth', 'rxjs/operators', '@dongkap/do-core', '@angular/common', 'tree-ngx', 'rxjs', '@angular/common/http'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.dongkap = global.dongkap || {}, global.dongkap["do-sys"] = {}), global.ng.core, global.ng.forms, global.i1$1, global["@ngx-translate/core"], global["@dongkap/do-theme"], global["@dongkap/do-shared"], global.ng.router, global["@swimlane/ngx-datatable"], global["@dongkap/do-auth"], global.rxjs.operators, global["@dongkap/do-core"], global.ng.common, global["tree-ngx"], global.rxjs, global.ng.common.http));
})(this, (function (exports, i0, i4, i1$1, i6, doTheme, i3, i1, ngxDatatable, i1$2, operators, i5$1, i5, i2, rxjs, http) { 'use strict';

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
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i6__namespace = /*#__PURE__*/_interopNamespace(i6);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i1__namespace$2 = /*#__PURE__*/_interopNamespace(i1$2);
    var i5__namespace$1 = /*#__PURE__*/_interopNamespace(i5$1);
    var i5__namespace = /*#__PURE__*/_interopNamespace(i5);
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

    var LocaleComponent = /** @class */ (function () {
        function LocaleComponent() {
        }
        return LocaleComponent;
    }());
    LocaleComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: LocaleComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    LocaleComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: LocaleComponent, selector: "do-locale", ngImport: i0__namespace, template: "\n    <router-outlet></router-outlet>\n  ", isInline: true, directives: [{ type: i1__namespace.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: LocaleComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-locale',
                        template: "\n    <router-outlet></router-outlet>\n  ",
                    }]
            }] });

    var LocaleService = /** @class */ (function () {
        function LocaleService() {
        }
        LocaleService.prototype.getLocale = function () {
            return this.locale;
        };
        LocaleService.prototype.setLocale = function (locale) {
            this.locale = locale;
        };
        return LocaleService;
    }());
    LocaleService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: LocaleService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    LocaleService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: LocaleService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: LocaleService, decorators: [{
                type: i0.Injectable
            }] });

    var LocaleListPageComponent = /** @class */ (function (_super) {
        __extends(LocaleListPageComponent, _super);
        function LocaleListPageComponent(injector, router, localeService) {
            var _this = _super.call(this, injector, {
                localeCode: [],
                identifier: [],
            }) || this;
            _this.injector = injector;
            _this.router = router;
            _this.localeService = localeService;
            _this.selectionType = ngxDatatable.SelectionType.single;
            _this.columns = [
                { name: 'Language Code', prop: 'localeCode', width: 125, frozenLeft: true },
                { name: 'Language', prop: 'identifier', width: 275, frozenLeft: true },
                { name: 'Icon', prop: 'icon', width: 75, frozenLeft: true, type: 'icon' },
                { name: 'System Default Language', prop: 'localeDefault', width: 175, frozenLeft: true },
                { name: 'Created', prop: 'createdBy' },
                { name: 'Created Date', prop: 'createdDate' },
                { name: 'Modified', prop: 'modifiedBy' },
                { name: 'Modified Date', prop: 'modifiedDate' },
            ];
            _this.expanded = false;
            _this.apiPath = _this.api['master']['datatable-locale'];
            _this.filters = [
                { controlName: 'localeCode', type: 'input' },
                { controlName: 'identifier', type: 'input' }
            ];
            return _this;
        }
        LocaleListPageComponent.prototype.ngOnInit = function () {
        };
        LocaleListPageComponent.prototype.onAddGroup = function () {
            this.router.navigate(['/app/sysconf/i18n', 'add']);
        };
        LocaleListPageComponent.prototype.onViewDetail = function (data) {
            this.localeService.setLocale(data);
            this.router.navigate(['/app/sysconf/i18n', 'edit']);
        };
        LocaleListPageComponent.prototype.onReset = function () {
            this.router.navigate(['/app/sysconf/i18n']);
        };
        LocaleListPageComponent.prototype.back = function () {
            this.router.navigate(['/app/sysconf/i18n']);
            return false;
        };
        return LocaleListPageComponent;
    }(i3.BaseFilterComponent));
    LocaleListPageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: LocaleListPageComponent, deps: [{ token: i0__namespace.Injector }, { token: i1__namespace.Router }, { token: LocaleService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    LocaleListPageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: LocaleListPageComponent, selector: "do-locale-list-page", usesInheritance: true, ngImport: i0__namespace, template: "<do-page-outlet [header]=\"'i18n'\" [hidefooter]=\"true\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [delete]=\"false\"\n        [selectionType]=\"selectionType\"\n        (onFilter)=\"doFilterAdvanced($event)\"\n        (onAdd)=\"onAddGroup()\"\n        (onEdit)=\"onViewDetail($event)\"\n        [filterFn]=\"keyword\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'localeCode'\"\n            [label]=\"'Locale Code'\"\n            formControlName=\"localeCode\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'identifier'\"\n            [label]=\"'Identifier'\"\n            formControlName=\"identifier\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n", styles: [""], components: [{ type: i3__namespace.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i3__namespace.DoDatatableComponent, selector: "do-datatable", inputs: ["rows", "columns", "filters", "selected", "limit", "count", "offset", "externalPaging", "externalSorting", "loadingIndicator", "scrollbarH", "scrollbarV", "reorderable", "sortType", "messages", "selectionType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "header", "column", "footer", "add", "edit", "delete", "filter", "api", "startWithOpenData", "filterEvent", "formGroupFilter", "sort", "sortsDefault", "autoLoad", "filterFn", "filterDoFetchFn", "reloadFn"], outputs: ["onAdd", "onEdit", "onDelete", "onSearch", "onFilter", "onButtonCell", "onLoading", "onSelected"] }, { type: i3__namespace.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }], directives: [{ type: i4__namespace.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: LocaleListPageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-locale-list-page',
                        styleUrls: ['./locale-list-page.component.scss'],
                        templateUrl: './locale-list-page.component.html',
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }, { type: i1__namespace.Router }, { type: LocaleService }]; } });

    var DialogFlagComponent = /** @class */ (function () {
        function DialogFlagComponent(ref) {
            this.ref = ref;
            this.flags = ['ad', 'ae', 'af', 'ag', 'ai', 'al', 'am', 'ao', 'aq', 'ar', 'as',
                'at', 'au', 'aw', 'ax', 'az', 'ba', 'bb', 'bd', 'be', 'bf', 'bg',
                'bh', 'bi', 'bj', 'bl', 'bm', 'bn', 'bo', 'bq', 'br', 'bs', 'bt',
                'bv', 'bw', 'by', 'bz', 'ca', 'cc', 'cd', 'cf', 'cg', 'ch', 'ci',
                'ck', 'cl', 'cm', 'cn', 'co', 'cr', 'cu', 'cv', 'cw', 'cx', 'cy',
                'cz', 'de', 'dj', 'dk', 'dm', 'do', 'dz', 'ec', 'ee', 'eg', 'eh',
                'er', 'es-ca', 'es', 'et', 'eu', 'fi', 'fj', 'fk', 'fm', 'fo', 'fr',
                'ga', 'gb-eng', 'gb-nir', 'gb-sct', 'gb-wls', 'gb', 'gd', 'ge', 'gf',
                'gg', 'gh', 'gi', 'gl', 'gm', 'gn', 'gp', 'gq', 'gr', 'gs', 'gt',
                'gu', 'gw', 'gy', 'hk', 'hm', 'hn', 'hr', 'ht', 'hu', 'id', 'ie',
                'il', 'im', 'in', 'io', 'iq', 'ir', 'is', 'it', 'je', 'jm', 'jo',
                'jp', 'ke', 'kg', 'kh', 'ki', 'km', 'kn', 'kp', 'kr', 'kw', 'ky',
                'kz', 'la', 'lb', 'lc', 'li', 'lk', 'lr', 'ls', 'lt', 'lu', 'lv',
                'ly', 'ma', 'mc', 'md', 'me', 'mf', 'mg', 'mh', 'mk', 'ml', 'mm',
                'mn', 'mo', 'mp', 'mq', 'mr', 'ms', 'mt', 'mu', 'mv', 'mw', 'mx',
                'my', 'mz', 'na', 'nc', 'ne', 'nf', 'ng', 'ni', 'nl', 'no', 'np',
                'nr', 'nu', 'nz', 'om', 'pa', 'pe', 'pf', 'pg', 'ph', 'pk', 'pl',
                'pm', 'pn', 'pr', 'ps', 'pt', 'pw', 'py', 'qa', 're', 'ro', 'rs',
                'ru', 'rw', 'sa', 'sb', 'sc', 'sd', 'se', 'sg', 'sh', 'si', 'sj',
                'sk', 'sl', 'sm', 'sn', 'so', 'sr', 'ss', 'st', 'sv', 'sx', 'sy',
                'sz', 'tc', 'td', 'tf', 'tg', 'th', 'tj', 'tk', 'tl', 'tm', 'tn',
                'to', 'tr', 'tt', 'tv', 'tw', 'tz', 'ua', 'ug', 'um', 'un', 'us',
                'uy', 'uz', 'va', 'vc', 've', 'vg', 'vi', 'vn', 'vu', 'wf', 'ws',
                'xk', 'ye', 'yt', 'za', 'zm', 'zw'];
        }
        DialogFlagComponent.prototype.choose = function (flag) {
            this.ref.close('flag-icon flag-icon-' + flag);
        };
        return DialogFlagComponent;
    }());
    DialogFlagComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DialogFlagComponent, deps: [{ token: i1__namespace$1.NbDialogRef }], target: i0__namespace.ɵɵFactoryTarget.Component });
    DialogFlagComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DialogFlagComponent, selector: "do-dialog-flag", ngImport: i0__namespace, template: "<nb-card>\n  <nb-card-header>\n    {{ 'Choose Flag' | translate }}\n  </nb-card-header>\n  <nb-card-body>\n    <span class=\"flag-icon flag-icon-{{flag}} choose-flag\" (click)=\"choose(flag)\" *ngFor=\"let flag of flags\"></span>\n  </nb-card-body>\n</nb-card>\n", styles: [".nb-theme-default :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-default :host .cancel{margin-right:1rem}.nb-theme-default :host button.deactivated-button{width:100%}@media (max-width: 767.98px){.nb-theme-default :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-default :host button.deactivated-button{font-size:.6rem}}.nb-theme-default :host .flag-icon{margin:.75rem}.nb-theme-default :host .choose-flag{cursor:pointer}.nb-theme-dark :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-dark :host .cancel{margin-right:1rem}.nb-theme-dark :host button.deactivated-button{width:100%}@media (max-width: 767.98px){.nb-theme-dark :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-dark :host button.deactivated-button{font-size:.6rem}}.nb-theme-dark :host .flag-icon{margin:.75rem}.nb-theme-dark :host .choose-flag{cursor:pointer}.nb-theme-cosmic :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-cosmic :host .cancel{margin-right:1rem}.nb-theme-cosmic :host button.deactivated-button{width:100%}@media (max-width: 767.98px){.nb-theme-cosmic :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-cosmic :host button.deactivated-button{font-size:.6rem}}.nb-theme-cosmic :host .flag-icon{margin:.75rem}.nb-theme-cosmic :host .choose-flag{cursor:pointer}.nb-theme-corporate :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-corporate :host .cancel{margin-right:1rem}.nb-theme-corporate :host button.deactivated-button{width:100%}@media (max-width: 767.98px){.nb-theme-corporate :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-corporate :host button.deactivated-button{font-size:.6rem}}.nb-theme-corporate :host .flag-icon{margin:.75rem}.nb-theme-corporate :host .choose-flag{cursor:pointer}\n"], components: [{ type: i1__namespace$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1__namespace$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1__namespace$1.NbCardBodyComponent, selector: "nb-card-body" }], directives: [{ type: i5__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "translate": i6__namespace.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DialogFlagComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-dialog-flag',
                        templateUrl: 'dialog-flag.component.html',
                        styleUrls: ['dialog-flag.component.scss'],
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.NbDialogRef }]; } });

    var LocaleAddEditPageComponent = /** @class */ (function (_super) {
        __extends(LocaleAddEditPageComponent, _super);
        function LocaleAddEditPageComponent(injector, router, route, localeService, dialogService) {
            var _this = _super.call(this, injector, {
                language: [],
                icon: [],
                default: [],
            }) || this;
            _this.injector = injector;
            _this.router = router;
            _this.route = route;
            _this.localeService = localeService;
            _this.dialogService = dialogService;
            _this.action = 'Add';
            _this.dataDefault = [
                {
                    id: 'default',
                    selected: false,
                },
            ];
            if (_this.localeService.getLocale() || (_this.route.snapshot.params['action'] === 'add')) {
                if ((_this.route.snapshot.params['action'] === 'edit')) {
                    _this.action = 'Edit';
                }
                _this.apiSelectLanguage = _this.api['master']['select-language'];
                if (_this.localeService.getLocale() && (_this.route.snapshot.params['action'] === 'edit')) {
                    if (_this.localeService.getLocale().localeDefault) {
                        _this.formGroup.get('default').setValue([{
                                id: 'default',
                                selected: true,
                            }]);
                        _this.formGroup.get('default').disable();
                    }
                    else {
                        _this.formGroup.get('default').setValue([{
                                id: 'default',
                                selected: false,
                            }]);
                    }
                    _this.formGroup.get('icon').setValue(_this.localeService.getLocale().icon);
                    _this.formGroup.get('language').setValue(_this.localeService.getLocale().identifier);
                    _this.formGroup.get('language').disable();
                }
            }
            else {
                _this.router.navigate(['/app/sysconf/i18n']);
            }
            return _this;
        }
        LocaleAddEditPageComponent.prototype.ngOnInit = function () { };
        LocaleAddEditPageComponent.prototype.onSearchFlag = function () {
            var _this = this;
            this.dialogService.open(DialogFlagComponent)
                .onClose.subscribe(function (flagIcon) {
                _this.formGroup.get('icon').setValue(flagIcon);
                _this.formGroup.get('icon').markAsDirty();
            });
        };
        LocaleAddEditPageComponent.prototype.onReset = function () {
            this.router.navigate(['/app/sysconf/i18n']);
        };
        LocaleAddEditPageComponent.prototype.onSubmit = function () {
            var _this = this;
            var localeDefault = this.formGroup.get('default').value;
            var data = {
                icon: this.formGroup.get('icon').value,
                localeDefault: (localeDefault ? true : false),
                localeCode: this.formGroup.get('language').value['value'] ?
                    this.formGroup.get('language').value['value'] : this.localeService.getLocale().localeCode,
                identifier: this.formGroup.get('language').value['label'] ?
                    this.formGroup.get('language').value['label'] : this.localeService.getLocale().identifier,
                localeEnabled: true,
            };
            _super.prototype.onSubmit.call(this, data, 'master', 'post-locale')
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (response) {
                if (response.respStatusCode === i5$1.ResponseCode.OK_SCR010.toString()) {
                    _this.router.navigate(['/app/sysconf/i18n']);
                }
            });
        };
        return LocaleAddEditPageComponent;
    }(i3.BaseFormComponent));
    LocaleAddEditPageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: LocaleAddEditPageComponent, deps: [{ token: i0__namespace.Injector }, { token: i1__namespace.Router }, { token: i1__namespace.ActivatedRoute }, { token: LocaleService }, { token: i1__namespace$1.NbDialogService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    LocaleAddEditPageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: LocaleAddEditPageComponent, selector: "do-locale-add-edit-page", usesInheritance: true, ngImport: i0__namespace, template: "<do-page-outlet [header]=\"'header.'+action+'-i18n'\" [url]=\"'/app/sysconf/i18n'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <form [formGroup]=\"formGroup\">\n        <do-select\n          [name]=\"'language'\"\n          [label]=\"'Language'\"\n          [required]=\"true\"\n          [api]=\"apiSelectLanguage\"\n          formControlName=\"language\">\n        </do-select>\n        <do-input-icon\n          [name]=\"'icon'\"\n          [label]=\"'Icon'\"\n          [required]=\"true\"\n          [icon]=\"'search-outline'\"\n          [iconcursor]=\"true\"\n          [eva]=\"true\"\n          (clickIcon)=\"onSearchFlag()\"\n          formControlName=\"icon\">\n        </do-input-icon>\n        <do-checkbox\n          [name]=\"'checkbox'\"\n          [label]=\"'System Default Language'\"\n          [data]=\"dataDefault\"\n          formControlName=\"default\">\n        </do-checkbox>\n      </form>\n    </div>\n  </div>\n  <do-button-submit\n    [submitTitle]=\"action\"\n    [resetTitle]=\"'Cancel'\"\n    [formGroupButton]=\"formGroup\"\n    [disabledButton]=\"disabled\"\n    (onReset)=\"onReset()\"\n    (onSubmit)=\"onSubmit()\"\n    pagefooter>\n  </do-button-submit>\n</do-page-outlet>\n", styles: [".reset-left{margin-right:.25rem}.submit-right{margin-left:.25rem}\n"], components: [{ type: i3__namespace.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i3__namespace.DoSelectComponent, selector: "do-select", inputs: ["placeholder", "colLabel", "colInput", "items", "multiple", "loading", "addTag", "closeOnSelect", "clearable", "searchable", "hideSelected", "minTermLength", "maxTermLength", "api", "limit", "offsetNextLoad", "queryParam"], outputs: ["onSelect", "onClear"] }, { type: i3__namespace.DoInputIconComponent, selector: "do-input-icon", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "buttontype", "type", "iconcursor", "eva", "icon"], outputs: ["clickIcon", "focus"] }, { type: i3__namespace.DoCheckboxComponent, selector: "do-checkbox", inputs: ["colLabel", "colInput", "data"], outputs: ["onChecked"] }, { type: i3__namespace.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i4__namespace.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: LocaleAddEditPageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-locale-add-edit-page',
                        styleUrls: ['./locale-add-edit-page.component.scss'],
                        templateUrl: './locale-add-edit-page.component.html',
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }, { type: i1__namespace.Router }, { type: i1__namespace.ActivatedRoute }, { type: LocaleService }, { type: i1__namespace$1.NbDialogService }]; } });

    var routes$b = [{
            path: '',
            component: LocaleComponent,
            canActivateChild: [i1$2.AuthGuardChildService],
            children: [
                {
                    path: '',
                    component: LocaleListPageComponent,
                    data: {
                        code: '#SYSCONF-I18N-PAGE',
                    },
                },
                {
                    path: ':action',
                    component: LocaleAddEditPageComponent,
                    data: {
                        code: '#SYSCONF-I18N-PAGE',
                    },
                },
            ],
        }];
    var DoLocaleRoutingModule = /** @class */ (function () {
        function DoLocaleRoutingModule() {
        }
        return DoLocaleRoutingModule;
    }());
    DoLocaleRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoLocaleRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DoLocaleRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoLocaleRoutingModule, imports: [i1__namespace.RouterModule], exports: [i1.RouterModule] });
    DoLocaleRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoLocaleRoutingModule, imports: [[i1.RouterModule.forChild(routes$b)], i1.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoLocaleRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.RouterModule.forChild(routes$b)],
                        exports: [i1.RouterModule],
                    }]
            }] });

    var components$b = [
        LocaleComponent,
        LocaleListPageComponent,
        LocaleAddEditPageComponent,
        DialogFlagComponent,
    ];
    var modules$b = [
        i4.FormsModule,
        i4.ReactiveFormsModule,
        i6.TranslateModule,
        i1$1.NbCardModule,
        i1$1.NbAlertModule,
        i1$1.NbIconModule,
        i1$1.NbDialogModule.forChild(),
        doTheme.DoThemeModule,
        i3.DoInputModule,
        i3.DoCheckBoxModule,
        i3.DoButtonModule,
        i3.DoBaseModule,
        i3.DoSelectModule,
        i3.DoDatatableModule,
        DoLocaleRoutingModule,
    ];
    var providers$b = [
        LocaleService,
    ];
    var entryComponents$1 = [
        DialogFlagComponent,
    ];
    var DoLocaleModule = /** @class */ (function () {
        function DoLocaleModule() {
        }
        return DoLocaleModule;
    }());
    DoLocaleModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoLocaleModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DoLocaleModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoLocaleModule, declarations: [LocaleComponent,
            LocaleListPageComponent,
            LocaleAddEditPageComponent,
            DialogFlagComponent], imports: [i4.FormsModule,
            i4.ReactiveFormsModule,
            i6.TranslateModule,
            i1$1.NbCardModule,
            i1$1.NbAlertModule,
            i1$1.NbIconModule, i1__namespace$1.NbDialogModule, doTheme.DoThemeModule,
            i3.DoInputModule,
            i3.DoCheckBoxModule,
            i3.DoButtonModule,
            i3.DoBaseModule,
            i3.DoSelectModule,
            i3.DoDatatableModule,
            DoLocaleRoutingModule] });
    DoLocaleModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoLocaleModule, providers: __spreadArray([], __read(providers$b)), imports: [__spreadArray([], __read(modules$b))] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoLocaleModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: __spreadArray([], __read(modules$b)),
                        declarations: __spreadArray([], __read(components$b)),
                        providers: __spreadArray([], __read(providers$b)),
                        entryComponents: __spreadArray([], __read(entryComponents$1)),
                    }]
            }] });

    var ParameterComponent = /** @class */ (function () {
        function ParameterComponent() {
        }
        return ParameterComponent;
    }());
    ParameterComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ParameterComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    ParameterComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ParameterComponent, selector: "do-parameter", ngImport: i0__namespace, template: "\n    <router-outlet></router-outlet>\n  ", isInline: true, directives: [{ type: i1__namespace.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ParameterComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-parameter',
                        template: "\n    <router-outlet></router-outlet>\n  ",
                    }]
            }] });

    var ParameterService = /** @class */ (function () {
        function ParameterService() {
        }
        ParameterService.prototype.getParameter = function () {
            return this.parameter;
        };
        ParameterService.prototype.setParameter = function (parameter) {
            this.parameter = parameter;
        };
        ParameterService.prototype.getParameterGroup = function () {
            return this.parameterGroup;
        };
        ParameterService.prototype.setParameterGroup = function (parameterGroup) {
            this.parameterGroup = parameterGroup;
        };
        ParameterService.prototype.getLocales = function () {
            return this.locales;
        };
        ParameterService.prototype.setLocales = function (locales) {
            this.locales = locales;
        };
        return ParameterService;
    }());
    ParameterService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ParameterService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    ParameterService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ParameterService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ParameterService, decorators: [{
                type: i0.Injectable
            }] });

    var ParameterListGroupPageComponent = /** @class */ (function (_super) {
        __extends(ParameterListGroupPageComponent, _super);
        function ParameterListGroupPageComponent(injector, router, parameterService, dialogService) {
            var _this = _super.call(this, injector, {
                parameterGroupCode: [],
                parameterGroupName: [],
            }) || this;
            _this.injector = injector;
            _this.router = router;
            _this.parameterService = parameterService;
            _this.dialogService = dialogService;
            _this.columns = [
                { name: 'Parameter Group Code', prop: 'parameterGroupCode', width: 220, frozenLeft: true },
                { name: 'Parameter Group Name', prop: 'parameterGroupName', width: 200, frozenLeft: true },
            ];
            _this.reload = false;
            _this.sort = {
                asc: ['parameterGroupName']
            };
            _this.filters = [
                { controlName: 'parameterGroupCode', type: 'input' },
                { controlName: 'parameterGroupName', type: 'input' }
            ];
            _this.apiPath = _this.api['master']['datatable-parameter-group'];
            _this.apiPathLocale = _this.api['master']['all-locale'];
            _this.apiPathDelete = _this.api['master']['delete-parameter-group'];
            return _this;
        }
        ParameterListGroupPageComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.http.HTTP_AUTH(this.apiPathLocale).subscribe(function (value) {
                _this.parameterService.setLocales(value);
            });
        };
        ParameterListGroupPageComponent.prototype.onAddGroup = function () {
            this.router.navigate(['/app/sysconf/parameter/group', 'add']);
        };
        ParameterListGroupPageComponent.prototype.onViewDetail = function (data) {
            this.parameterService.setParameterGroup({
                parameterGroupCode: data['parameterGroupCode'],
                parameterGroupName: data['parameterGroupName'],
            });
            this.router.navigate(['/app/sysconf/parameter/detail']);
        };
        ParameterListGroupPageComponent.prototype.onDeleteGroup = function (data, dialog) {
            var _this = this;
            this.reload = false;
            this.parameterGroupCodes = [];
            data.forEach(function (value) {
                _this.parameterGroupCodes.push(value.parameterGroupCode);
            });
            this.dialogService.open(dialog, { context: 'alert.delete' });
        };
        ParameterListGroupPageComponent.prototype.onDelete = function (ref) {
            var _this = this;
            this.disabled = true;
            this.http.HTTP_AUTH(this.apiPathDelete, this.parameterGroupCodes)
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (success) {
                ref.close();
                _this.disabled = false;
                _this.reload = true;
                _this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
            }, function (error) {
                _this.disabled = false;
                _this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
            });
        };
        return ParameterListGroupPageComponent;
    }(i3.BaseFilterComponent));
    ParameterListGroupPageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ParameterListGroupPageComponent, deps: [{ token: i0__namespace.Injector }, { token: i1__namespace.Router }, { token: ParameterService }, { token: i1__namespace$1.NbDialogService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    ParameterListGroupPageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ParameterListGroupPageComponent, selector: "do-parameter-list-group-page", usesInheritance: true, ngImport: i0__namespace, template: "<do-page-outlet [header]=\"'Parameter Group'\" [hidefooter]=\"true\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [sort]=\"sort\"\n        [reloadFn]=\"reload\"\n        (onAdd)=\"onAddGroup()\"\n        (onEdit)=\"onViewDetail($event)\"\n        (onDelete)=\"onDeleteGroup($event, dialogdelete)\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'parameterGroupCode'\"\n            [label]=\"'Parameter Group Code'\"\n            formControlName=\"parameterGroupCode\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'parameterGroupName'\"\n            [label]=\"'Parameter Group Name'\"\n            formControlName=\"parameterGroupName\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n\n<ng-template #dialogdelete let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"danger\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <do-button-submit\n        [colLabel]=\"0\"\n        [colButton]=\"12\"\n        [submitTitle]=\"'Delete'\"\n        [resetTitle]=\"'Cancel'\"\n        [disabledButton]=\"disabled\"\n        (onReset)=\"ref.close()\"\n        (onSubmit)=\"onDelete(ref)\">\n      </do-button-submit>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>\n", styles: [".reset-left{margin-left:1rem;margin-right:.5rem}.submit-right{margin-left:.5rem}\n"], components: [{ type: i3__namespace.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i3__namespace.DoDatatableComponent, selector: "do-datatable", inputs: ["rows", "columns", "filters", "selected", "limit", "count", "offset", "externalPaging", "externalSorting", "loadingIndicator", "scrollbarH", "scrollbarV", "reorderable", "sortType", "messages", "selectionType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "header", "column", "footer", "add", "edit", "delete", "filter", "api", "startWithOpenData", "filterEvent", "formGroupFilter", "sort", "sortsDefault", "autoLoad", "filterFn", "filterDoFetchFn", "reloadFn"], outputs: ["onAdd", "onEdit", "onDelete", "onSearch", "onFilter", "onButtonCell", "onLoading", "onSelected"] }, { type: i3__namespace.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i1__namespace$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1__namespace$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1__namespace$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i1__namespace$1.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i3__namespace.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i4__namespace.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i6__namespace.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ParameterListGroupPageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-parameter-list-group-page',
                        styleUrls: ['./parameter-list-group-page.component.scss'],
                        templateUrl: './parameter-list-group-page.component.html',
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }, { type: i1__namespace.Router }, { type: ParameterService }, { type: i1__namespace$1.NbDialogService }]; } });

    var ParameterAddGroupPageComponent = /** @class */ (function (_super) {
        __extends(ParameterAddGroupPageComponent, _super);
        function ParameterAddGroupPageComponent(injector, router) {
            var _this = _super.call(this, injector, {
                parameterGroupCode: [],
                parameterGroupName: [],
            }) || this;
            _this.injector = injector;
            _this.router = router;
            return _this;
        }
        ParameterAddGroupPageComponent.prototype.ngOnInit = function () { };
        ParameterAddGroupPageComponent.prototype.onReset = function () {
            this.router.navigate(['/app/sysconf/parameter']);
        };
        ParameterAddGroupPageComponent.prototype.onSubmit = function () {
            var _this = this;
            _super.prototype.onSubmit.call(this, this.formGroup.value, 'master', 'post-parameter-group')
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (response) {
                if (response.respStatusCode === i5$1.ResponseCode.OK_SCR009.toString()) {
                    _this.router.navigate(['/app/sysconf/parameter']);
                }
            });
        };
        return ParameterAddGroupPageComponent;
    }(i3.BaseFormComponent));
    ParameterAddGroupPageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ParameterAddGroupPageComponent, deps: [{ token: i0__namespace.Injector }, { token: i1__namespace.Router }], target: i0__namespace.ɵɵFactoryTarget.Component });
    ParameterAddGroupPageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ParameterAddGroupPageComponent, selector: "do-parameter-add-group-page", usesInheritance: true, ngImport: i0__namespace, template: "<do-page-outlet [header]=\"'Add Parameter Group'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <form [formGroup]=\"formGroup\">\n        <do-input-text\n          [name]=\"'parameterGroupCode'\"\n          [label]=\"'Parameter Group Code'\"\n          [required]=\"true\"\n          formControlName=\"parameterGroupCode\">\n        </do-input-text>\n        <do-input-text\n          [name]=\"'parameterGroupName'\"\n          [label]=\"'Parameter Group Name'\"\n          [required]=\"true\"\n          formControlName=\"parameterGroupName\">\n        </do-input-text>\n      </form>\n    </div>\n  </div>\n  <do-button-submit\n    [submitTitle]=\"'Add'\"\n    [resetTitle]=\"'Cancel'\"\n    [formGroupButton]=\"formGroup\"\n    [disabledButton]=\"disabled\"\n    (onReset)=\"onReset()\"\n    (onSubmit)=\"onSubmit()\"\n    pagefooter>\n  </do-button-submit>\n</do-page-outlet>\n", styles: [""], components: [{ type: i3__namespace.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i3__namespace.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i3__namespace.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i4__namespace.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ParameterAddGroupPageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-parameter-add-group-page',
                        styleUrls: ['./parameter-add-group-page.component.scss'],
                        templateUrl: './parameter-add-group-page.component.html',
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }, { type: i1__namespace.Router }]; } });

    var ParameterGroupModel = /** @class */ (function () {
        function ParameterGroupModel() {
        }
        return ParameterGroupModel;
    }());
    var ParameterModel = /** @class */ (function (_super) {
        __extends(ParameterModel, _super);
        function ParameterModel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ParameterModel;
    }(ParameterGroupModel));
    var ParameterI18nModel = /** @class */ (function (_super) {
        __extends(ParameterI18nModel, _super);
        function ParameterI18nModel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ParameterI18nModel;
    }(ParameterModel));

    var ParameterListDetailPageComponent = /** @class */ (function (_super) {
        __extends(ParameterListDetailPageComponent, _super);
        function ParameterListDetailPageComponent(injector, router, parameterService) {
            var _this = _super.call(this, injector, {
                parameterCode: [],
            }, {
                parameterGroupCode: [],
                parameterGroupName: [],
            }) || this;
            _this.injector = injector;
            _this.router = router;
            _this.parameterService = parameterService;
            _this.selectionType = ngxDatatable.SelectionType.single;
            _this.columns = [
                { name: 'Parameter Code', prop: 'parameterCode', width: 350, frozenLeft: true },
                { name: 'Created', prop: 'createdBy' },
                { name: 'Created Date', prop: 'createdDate' },
                { name: 'Modified', prop: 'modifiedBy' },
                { name: 'Modified Date', prop: 'modifiedDate' },
            ];
            _this.parameterGroup = new ParameterGroupModel();
            _this.expanded = false;
            _this.sort = {
                asc: ['parameterCode']
            };
            if (_this.parameterService.getParameterGroup()) {
                _this.apiPath = _this.api['master']['datatable-parameter'];
                _this.filters = [{ controlName: 'parameterCode', type: 'input' }];
                _this.parameterGroup = _this.parameterService.getParameterGroup();
                _this.keyword = {
                    parameterGroupCode: _this.parameterGroup.parameterGroupCode,
                };
                _this.formGroup.get('parameterGroupCode').setValue(_this.parameterGroup.parameterGroupCode);
                _this.formGroup.get('parameterGroupName').setValue(_this.parameterGroup.parameterGroupName);
            }
            else {
                _this.router.navigate(['/app/sysconf/parameter']);
            }
            return _this;
        }
        ParameterListDetailPageComponent.prototype.ngOnInit = function () {
        };
        ParameterListDetailPageComponent.prototype.onAddGroup = function (event) {
            this.parameterService.setParameter(null);
            this.router.navigate(['/app/sysconf/parameter/detail', 'add']);
        };
        ParameterListDetailPageComponent.prototype.onViewDetail = function (data) {
            this.parameterService.setParameter({
                parameterGroupCode: data['parameterGroupCode'],
                parameterGroupName: data['parameterGroupName'],
                parameterCode: data['parameterCode'],
            });
            this.router.navigate(['/app/sysconf/parameter/detail', 'edit']);
        };
        ParameterListDetailPageComponent.prototype.onReset = function () {
            this.router.navigate(['/app/sysconf/parameter']);
        };
        ParameterListDetailPageComponent.prototype.onSubmit = function () {
            _super.prototype.onSubmit.call(this, this.formGroup.value, 'master', 'post-parameter-group');
        };
        return ParameterListDetailPageComponent;
    }(i3.BaseFilterComponent));
    ParameterListDetailPageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ParameterListDetailPageComponent, deps: [{ token: i0__namespace.Injector }, { token: i1__namespace.Router }, { token: ParameterService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    ParameterListDetailPageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ParameterListDetailPageComponent, selector: "do-parameter-list-detail-page", usesInheritance: true, ngImport: i0__namespace, template: "<do-page-outlet\n  [header]=\"'Edit Parameter Group'\"\n  [url]=\"'/app/sysconf/parameter'\"\n  [isCollapsed]=\"true\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <form [formGroup]=\"formGroup\">\n        <do-input-text\n          [name]=\"'parameterGroupName'\"\n          [label]=\"'Parameter Group Name'\"\n          [required]=\"true\"\n          formControlName=\"parameterGroupName\">\n        </do-input-text>\n      </form>\n    </div>\n  </div>\n  <do-button-submit\n    [submitTitle]=\"'Edit'\"\n    [resetTitle]=\"'Cancel'\"\n    [formGroupButton]=\"formGroup\"\n    [disabledButton]=\"disabled\"\n    (onReset)=\"onReset()\"\n    (onSubmit)=\"onSubmit()\"\n    pagefooter>\n  </do-button-submit>\n</do-page-outlet>\n\n<do-page-outlet [url]=\"'/app/sysconf/parameter'\" [header]=\"'header.parameter'\" [param]=\"{value: parameterGroup.parameterGroupName}\" [hidefooter]=\"true\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [sort]=\"sort\"\n        [delete]=\"false\"\n        [selectionType]=\"selectionType\"\n        (onFilter)=\"doFilterAdvanced($event)\"\n        (onAdd)=\"onAddGroup($event)\"\n        (onEdit)=\"onViewDetail($event)\"\n        [filterFn]=\"keyword\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'parameterCode'\"\n            [label]=\"'Parameter Code'\"\n            formControlName=\"parameterCode\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n", styles: [".reset-left{margin-right:.25rem}.submit-right{margin-left:.25rem}.parameter-expanded{position:absolute;right:0;padding:0 1.75rem;cursor:pointer}\n"], components: [{ type: i3__namespace.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i3__namespace.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i3__namespace.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }, { type: i3__namespace.DoDatatableComponent, selector: "do-datatable", inputs: ["rows", "columns", "filters", "selected", "limit", "count", "offset", "externalPaging", "externalSorting", "loadingIndicator", "scrollbarH", "scrollbarV", "reorderable", "sortType", "messages", "selectionType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "header", "column", "footer", "add", "edit", "delete", "filter", "api", "startWithOpenData", "filterEvent", "formGroupFilter", "sort", "sortsDefault", "autoLoad", "filterFn", "filterDoFetchFn", "reloadFn"], outputs: ["onAdd", "onEdit", "onDelete", "onSearch", "onFilter", "onButtonCell", "onLoading", "onSelected"] }], directives: [{ type: i4__namespace.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ParameterListDetailPageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-parameter-list-detail-page',
                        styleUrls: ['./parameter-list-detail-page.component.scss'],
                        templateUrl: './parameter-list-detail-page.component.html',
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }, { type: i1__namespace.Router }, { type: ParameterService }]; } });

    var ParameterAddEditDetailPageComponent = /** @class */ (function (_super) {
        __extends(ParameterAddEditDetailPageComponent, _super);
        function ParameterAddEditDetailPageComponent(injector, router, parameterService, route) {
            var _this = _super.call(this, injector, {
                parameterCode: [],
                'en-US': [],
                'id-ID': [],
            }) || this;
            _this.injector = injector;
            _this.router = router;
            _this.parameterService = parameterService;
            _this.route = route;
            _this.action = 'Add';
            _this.parameter = new ParameterModel();
            _this.parameterGroup = new ParameterGroupModel();
            _this.allLocales = [];
            _this.locales = [];
            _this.localeDefault = new i5$1.LocaleModel();
            _this.isEdit = false;
            if (_this.parameterService.getParameterGroup()) {
                _this.parameterGroup = _this.parameterService.getParameterGroup();
                if ((_this.route.snapshot.params['action'] === 'edit')) {
                    if (_this.parameterService.getParameter()) {
                        _this.action = 'Edit';
                        _this.isEdit = true;
                        _this.parameter = _this.parameterService.getParameter();
                    }
                    else {
                        _this.router.navigate(['/app/sysconf/parameter']);
                    }
                }
                if (!_this.parameterService.getLocales()) {
                    _this.apiPathLocale = _this.api['master']['all-locale'];
                    _this.http.HTTP_AUTH(_this.apiPathLocale).subscribe(function (response) {
                        _this.parameterService.setLocales(response);
                        _this.splitLocale(response);
                    });
                }
                else {
                    _this.splitLocale(_this.parameterService.getLocales());
                }
                if (_this.isEdit) {
                    _this.formGroup.get('parameterCode').setValue(_this.parameter.parameterCode);
                    _this.formGroup.get('parameterCode').disable({ emitEvent: true });
                    _this.apiPathParameterI18n = _this.api['master']['all-parameter-i18n'];
                    _this.loadingForm = true;
                    _this.http.HTTP_AUTH(_this.apiPathParameterI18n, {
                        parameterCode: _this.parameter.parameterCode,
                    }).subscribe(function (response) {
                        response.forEach(function (data) {
                            _this.formGroup.get(data.locale).setValue(data.parameterValue);
                            _this.loadingForm = false;
                        });
                    });
                }
            }
            else {
                _this.router.navigate(['/app/sysconf/parameter']);
            }
            return _this;
        }
        ParameterAddEditDetailPageComponent.prototype.splitLocale = function (values) {
            var _this = this;
            this.allLocales = values;
            values.forEach(function (data) {
                if (data.localeDefault) {
                    _this.localeDefault = data;
                }
                else {
                    _this.locales.push(data);
                }
                _this.formGroup.removeControl(data.localeCode);
                _this.formGroup.addControl(data.localeCode, new i4.FormControl());
            });
        };
        ParameterAddEditDetailPageComponent.prototype.ngOnInit = function () { };
        ParameterAddEditDetailPageComponent.prototype.onReset = function () {
            this.router.navigate(['/app/sysconf/parameter/detail']);
        };
        ParameterAddEditDetailPageComponent.prototype.onSubmit = function () {
            var _this = this;
            var data = this.formGroup.value;
            if (this.isEdit) {
                data.parameterCode = this.parameter.parameterCode;
            }
            data.parameterGroupCode = this.parameterGroup.parameterGroupCode;
            data.parameterValues = {};
            this.allLocales.forEach(function (value) {
                data.parameterValues[value.localeCode] = _this.formGroup.get(value.localeCode).value;
            });
            _super.prototype.onSubmit.call(this, data, 'master', 'post-parameter-i18n')
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (response) {
                if (response.respStatusCode === i5$1.ResponseCode.OK_SCR009.toString()) {
                    _this.router.navigate(['/app/sysconf/parameter/detail']);
                }
            });
        };
        return ParameterAddEditDetailPageComponent;
    }(i3.BaseFormComponent));
    ParameterAddEditDetailPageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ParameterAddEditDetailPageComponent, deps: [{ token: i0__namespace.Injector }, { token: i1__namespace.Router }, { token: ParameterService }, { token: i1__namespace.ActivatedRoute }], target: i0__namespace.ɵɵFactoryTarget.Component });
    ParameterAddEditDetailPageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ParameterAddEditDetailPageComponent, selector: "do-parameter-add-edit-detail-page", usesInheritance: true, ngImport: i0__namespace, template: "<do-page-outlet [header]=\"action + ' Parameter'\" [url]=\"'/app/sysconf/parameter/detail'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <form [formGroup]=\"formGroup\">\n        <do-input-text\n          [name]=\"'parameterCode'\"\n          [label]=\"'Parameter Code'\"\n          [required]=\"!isEdit\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"parameterCode\">\n        </do-input-text>\n        <div class=\"form-group row\">\n          <label\n            for=\"Parameter Value\"\n            class=\"label col-sm-3 col-form-label\"\n            *ngIf=\"!loadingForm; else labelskeleton\">\n            {{'Parameter Value' | translate}}\n          </label>\n          <ng-template #labelskeleton>\n            <div class=\"col-sm-3\">\n              <div\n                [ngClass]=\"{\n                  'label-skeleton': true,\n                  'skeleton': loadingForm\n                }\">\n              </div>\n            </div>\n          </ng-template>\n          <div class=\"col-sm-9\">\n            <do-input-icon *ngIf=\"localeDefault.localeCode\"\n              [name]=\"localeDefault.localeCode\"\n              [nolabel]=\"true\"\n              [required]=\"true\"\n              [colLabel]=\"0\"\n              [colInput]=\"12\"\n              [icon]=\"'flag-icon flag-icon-' + localeDefault.icon\"\n              [skeleton]=\"loadingForm\"\n              formControlName=\"{{localeDefault.localeCode}}\">\n            </do-input-icon>\n          </div>\n        </div>\n        <do-input-icon *ngFor=\"let i18n of locales\"\n          [name]=\"i18n.localeCode\"\n          [nolabel]=\"true\"\n          [icon]=\"'flag-icon flag-icon-'+ i18n.icon\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"{{i18n.localeCode}}\">\n        </do-input-icon>\n      </form>\n    </div>\n  </div>\n  <do-button-submit\n    [submitTitle]=\"action\"\n    [resetTitle]=\"'Cancel'\"\n    [formGroupButton]=\"formGroup\"\n    [disabledButton]=\"disabled\"\n    (onReset)=\"onReset()\"\n    (onSubmit)=\"onSubmit()\"\n    pagefooter>\n  </do-button-submit>\n</do-page-outlet>\n", styles: [".reset-left{margin-right:.25rem}.submit-right{margin-left:.25rem}\n"], components: [{ type: i3__namespace.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i3__namespace.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i3__namespace.DoInputIconComponent, selector: "do-input-icon", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "buttontype", "type", "iconcursor", "eva", "icon"], outputs: ["clickIcon", "focus"] }, { type: i3__namespace.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i4__namespace.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i5__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i5__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i5__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "translate": i6__namespace.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ParameterAddEditDetailPageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-parameter-add-edit-detail-page',
                        styleUrls: ['./parameter-add-edit-detail-page.component.scss'],
                        templateUrl: './parameter-add-edit-detail-page.component.html',
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }, { type: i1__namespace.Router }, { type: ParameterService }, { type: i1__namespace.ActivatedRoute }]; } });

    var routes$a = [{
            path: '',
            component: ParameterComponent,
            canActivateChild: [i1$2.AuthGuardChildService],
            children: [
                {
                    path: '',
                    component: ParameterListGroupPageComponent,
                    data: {
                        code: '#SYSCONF-PARAMETER-PAGE',
                    },
                },
                {
                    path: 'group',
                    component: ParameterListGroupPageComponent,
                    data: {
                        code: '#SYSCONF-PARAMETER-PAGE',
                    },
                },
                {
                    path: 'group/:action',
                    component: ParameterAddGroupPageComponent,
                    data: {
                        code: '#SYSCONF-PARAMETER-PAGE',
                    },
                },
                {
                    path: 'detail',
                    component: ParameterListDetailPageComponent,
                    data: {
                        code: '#SYSCONF-PARAMETER-PAGE',
                    },
                },
                {
                    path: 'detail/:action',
                    component: ParameterAddEditDetailPageComponent,
                    data: {
                        code: '#SYSCONF-PARAMETER-PAGE',
                    },
                },
            ],
        }];
    var DoParameterRoutingModule = /** @class */ (function () {
        function DoParameterRoutingModule() {
        }
        return DoParameterRoutingModule;
    }());
    DoParameterRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoParameterRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DoParameterRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoParameterRoutingModule, imports: [i1__namespace.RouterModule], exports: [i1.RouterModule] });
    DoParameterRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoParameterRoutingModule, imports: [[i1.RouterModule.forChild(routes$a)], i1.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoParameterRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.RouterModule.forChild(routes$a)],
                        exports: [i1.RouterModule],
                    }]
            }] });

    var components$a = [
        ParameterComponent,
        ParameterListGroupPageComponent,
        ParameterAddGroupPageComponent,
        ParameterListDetailPageComponent,
        ParameterAddEditDetailPageComponent,
    ];
    var modules$a = [
        i4.FormsModule,
        i4.ReactiveFormsModule,
        i6.TranslateModule,
        i1$1.NbCardModule,
        i1$1.NbAlertModule,
        i1$1.NbIconModule,
        i1$1.NbButtonModule,
        i1$1.NbDialogModule.forChild(),
        doTheme.DoThemeModule,
        i3.DoInputModule,
        i3.DoCheckBoxModule,
        i3.DoButtonModule,
        i3.DoBaseModule,
        i3.DoSelectModule,
        i3.DoDatatableModule,
        DoParameterRoutingModule,
    ];
    var providers$a = [
        ParameterService,
    ];
    var DoParameterModule = /** @class */ (function () {
        function DoParameterModule() {
        }
        return DoParameterModule;
    }());
    DoParameterModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoParameterModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DoParameterModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoParameterModule, declarations: [ParameterComponent,
            ParameterListGroupPageComponent,
            ParameterAddGroupPageComponent,
            ParameterListDetailPageComponent,
            ParameterAddEditDetailPageComponent], imports: [i4.FormsModule,
            i4.ReactiveFormsModule,
            i6.TranslateModule,
            i1$1.NbCardModule,
            i1$1.NbAlertModule,
            i1$1.NbIconModule,
            i1$1.NbButtonModule, i1__namespace$1.NbDialogModule, doTheme.DoThemeModule,
            i3.DoInputModule,
            i3.DoCheckBoxModule,
            i3.DoButtonModule,
            i3.DoBaseModule,
            i3.DoSelectModule,
            i3.DoDatatableModule,
            DoParameterRoutingModule] });
    DoParameterModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoParameterModule, providers: __spreadArray([], __read(providers$a)), imports: [__spreadArray([], __read(modules$a))] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoParameterModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: __spreadArray([], __read(modules$a)),
                        declarations: __spreadArray([], __read(components$a)),
                        providers: __spreadArray([], __read(providers$a)),
                    }]
            }] });

    var MgmtMenuComponent = /** @class */ (function () {
        function MgmtMenuComponent() {
        }
        return MgmtMenuComponent;
    }());
    MgmtMenuComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: MgmtMenuComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    MgmtMenuComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: MgmtMenuComponent, selector: "do-mgmt-menu", ngImport: i0__namespace, template: "\n    <router-outlet></router-outlet>\n  ", isInline: true, directives: [{ type: i1__namespace.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: MgmtMenuComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-mgmt-menu',
                        template: "\n    <router-outlet></router-outlet>\n  ",
                    }]
            }] });

    var DialogIconComponent = /** @class */ (function () {
        function DialogIconComponent(ref, iconsLibrary) {
            this.ref = ref;
            this.evaIcons = [];
            this.evaIcons = Array.from(iconsLibrary.getPack('eva').icons.keys())
                .filter(function (icon) { return icon.indexOf('outline') !== -1; });
        }
        DialogIconComponent.prototype.choose = function (icon) {
            this.ref.close(icon);
        };
        return DialogIconComponent;
    }());
    DialogIconComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DialogIconComponent, deps: [{ token: i1__namespace$1.NbDialogRef }, { token: i1__namespace$1.NbIconLibraries }], target: i0__namespace.ɵɵFactoryTarget.Component });
    DialogIconComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DialogIconComponent, selector: "do-dialog-icon", ngImport: i0__namespace, template: "<nb-card>\n  <nb-card-header>\n    {{ 'Choose Icon' | translate }}\n  </nb-card-header>\n  <nb-card-body>\n    <nb-icon *ngFor=\"let icon of evaIcons\" class=\"choose-icon\" (click)=\"choose(icon)\" [icon]=\"icon\" pack=\"eva\"></nb-icon>\n  </nb-card-body>\n</nb-card>\n", styles: [".nb-theme-default :host .choose-icon{margin:.75rem;cursor:pointer}.nb-theme-dark :host .choose-icon{margin:.75rem;cursor:pointer}.nb-theme-cosmic :host .choose-icon{margin:.75rem;cursor:pointer}.nb-theme-corporate :host .choose-icon{margin:.75rem;cursor:pointer}\n"], components: [{ type: i1__namespace$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1__namespace$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1__namespace$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i1__namespace$1.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }], directives: [{ type: i5__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "translate": i6__namespace.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DialogIconComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-dialog-icon',
                        templateUrl: 'dialog-icon.component.html',
                        styleUrls: ['dialog-icon.component.scss'],
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.NbDialogRef }, { type: i1__namespace$1.NbIconLibraries }]; } });

    var MainMenuPageComponent = /** @class */ (function (_super) {
        __extends(MainMenuPageComponent, _super);
        function MainMenuPageComponent(injector, dialogService) {
            var _this = _super.call(this, injector, {
                id: [],
                'en-US': [],
                'id-ID': [],
                root: [{
                        value: [{
                                id: 'root',
                                selected: true,
                            }],
                        disabled: false,
                    }],
                code: [{
                        value: 'N/A',
                        disabled: false,
                    }],
                icon: [],
                link: [{
                        value: '#',
                        disabled: false,
                    }],
                home: [{
                        value: null,
                        disabled: false,
                    }],
                group: [{
                        value: null,
                        disabled: false,
                    }],
                parent: [],
                order: [],
            }) || this;
            _this.injector = injector;
            _this.dialogService = dialogService;
            _this.nodeItems = [];
            _this.options = {
                mode: i2.TreeMode.NoSelect,
                checkboxes: false,
                alwaysEmitSelected: true
            };
            _this.allLocales = [];
            _this.locales = [];
            _this.localeDefault = new i5$1.LocaleModel();
            _this.action = 'Add';
            _this.dialogAction = 'Edit';
            _this.loadLocale = false;
            _this.title = null;
            _this.rootData = [{
                    id: 'root',
                    disabled: false,
                }];
            _this.groupData = [{
                    id: 'group',
                    disabled: false,
                }];
            _this.homeData = [{
                    id: 'home',
                    disabled: false,
                }];
            _this.apiSelectParent = _this.api['security']['select-main-menus'];
            _this.isRoot = true;
            _this.isGroup = false;
            return _this;
        }
        Object.defineProperty(MainMenuPageComponent.prototype, "isRoot", {
            get: function () { return this.root; },
            set: function (root) {
                this.root = root;
                if (root) {
                    this.formGroup.get('icon').enable();
                    this.formGroup.get('parent').disable();
                    this.formGroup.get('parent').setValue(null);
                }
                else {
                    this.formGroup.get('icon').disable();
                    this.formGroup.get('icon').setValue(null);
                    this.formGroup.get('parent').enable();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MainMenuPageComponent.prototype, "isGroup", {
            get: function () { return this.group; },
            set: function (group) {
                this.group = group;
                if (group) {
                    this.formGroup.get('root').disable();
                    this.formGroup.get('home').disable();
                    this.formGroup.get('code').disable();
                    this.formGroup.get('link').disable();
                    this.formGroup.get('icon').disable();
                    this.formGroup.get('parent').disable();
                    this.formGroup.get('root').setValue(null);
                    this.formGroup.get('home').setValue(null);
                    this.formGroup.get('code').setValue('N/A');
                    this.formGroup.get('link').setValue('#');
                    this.formGroup.get('icon').setValue(null);
                    this.formGroup.get('parent').setValue(null);
                }
                else {
                    this.formGroup.get('root').enable();
                    this.formGroup.get('home').enable();
                    this.formGroup.get('code').enable();
                    this.formGroup.get('link').enable();
                    if (this.isRoot) {
                        this.formGroup.get('icon').enable();
                    }
                    if (!this.isRoot) {
                        this.formGroup.get('parent').enable();
                    }
                }
            },
            enumerable: false,
            configurable: true
        });
        MainMenuPageComponent.prototype.ngOnInit = function () { };
        MainMenuPageComponent.prototype.onCheckedRoot = function (event) {
            this.isRoot = event ? event[0].selected : false;
        };
        MainMenuPageComponent.prototype.onCheckedGroup = function (event) {
            this.isGroup = event ? event[0].selected : false;
        };
        MainMenuPageComponent.prototype.loadDataMenu = function () {
            var _this = this;
            if (!this.loadLocale) {
                this.loadingForm = true;
                this.http.HTTP_AUTH(this.api['master']['all-locale']).subscribe(function (response) {
                    _this.splitLocale(response);
                    _this.loadLocale = true;
                    _this.loadingForm = false;
                });
            }
            return this.http.HTTP_AUTH(this.api['security']['get-tree-menus'], null, null, null, ['main']).pipe(operators.map(function (response) {
                _this.nodeItems = [];
                _this.nodeItems = __spreadArray(__spreadArray([], __read(_this.nodeItems)), __read(response));
                _this.onReset();
                if (_this.loadLocale) {
                    _this.loadingForm = false;
                }
            }));
        };
        MainMenuPageComponent.prototype.splitLocale = function (values) {
            var _this = this;
            this.allLocales = values;
            values.forEach(function (data) {
                if (data.localeDefault) {
                    _this.localeDefault = data;
                }
                else {
                    _this.locales.push(data);
                }
                _this.formGroup.removeControl(data.localeCode);
                _this.formGroup.addControl(data.localeCode, new i4.FormControl());
            });
        };
        MainMenuPageComponent.prototype.onSearchIcon = function () {
            var _this = this;
            this.dialogService.open(DialogIconComponent)
                .onClose.subscribe(function (icon) {
                _this.formGroup.get('icon').setValue(icon);
                _this.formGroup.get('icon').markAsDirty();
            });
        };
        MainMenuPageComponent.prototype.onSelectNode = function (node) {
            var _this = this;
            if (node.item) {
                this.action = 'Edit';
                this.dialogAction = this.action;
                this.isRoot = node.item['level'] === 0 ? true : false;
                this.isGroup = node.item['group'];
                this.allLocales.forEach(function (locale) {
                    _this.formGroup.get(locale.localeCode).setValue(node.item['i18n'][locale.localeCode]);
                    if (locale.localeDefault) {
                        _this.title = node.item['i18n'][locale.localeCode];
                    }
                });
                this.formGroup.get('group').setValue([{ id: 'group', selected: this.isGroup }]);
                this.formGroup.get('root').setValue([{ id: 'root', selected: this.isRoot }]);
                this.formGroup.get('home').setValue([{ id: 'home', selected: node.item['home'] }]);
                this.formGroup.get('id').setValue(node['id']);
                this.formGroup.get('code').setValue(node.item['code']);
                this.formGroup.get('link').setValue(node.item['link']);
                this.formGroup.get('icon').setValue(node.item['icon']);
                this.formGroup.get('order').setValue(node.item['ordering']);
                if (node.item['parentMenu']) {
                    this.formGroup.get('parent').setValue({
                        label: node.item['parentMenu']['title'],
                        value: node.item['parentMenu']['id'],
                    });
                }
            }
        };
        MainMenuPageComponent.prototype.onDeleteTree = function (node, context, dialog) {
            this.dialogAction = 'Delete';
            this.node = node;
            this.context = context;
            this.dialogService.open(dialog, { context: 'alert.delete' });
        };
        MainMenuPageComponent.prototype.onSubmit = function (dialog) {
            var _this = this;
            var id = null;
            var code = 'N/A';
            var icon = null;
            var link = '#';
            var type = 'main';
            var ordering = 0;
            var home = false;
            var group = false;
            var level = 1;
            var leaf = true;
            var i18n = {};
            var parentMenu = null;
            if (this.formGroup.get('id').value) {
                id = this.formGroup.get('id').value;
            }
            if (this.formGroup.get('code').value) {
                code = this.formGroup.get('code').value;
            }
            if (this.formGroup.get('icon').value) {
                icon = this.formGroup.get('icon').value;
            }
            if (this.formGroup.get('link').value) {
                link = this.formGroup.get('link').value;
            }
            if (this.formGroup.get('order').value) {
                ordering = +this.formGroup.get('order').value;
            }
            if (this.formGroup.get('home').value) {
                if (this.formGroup.get('home').value[0]['selected']) {
                    home = true;
                }
            }
            if (this.formGroup.get('root').value) {
                if (this.formGroup.get('root').value[0]['selected']) {
                    level = 0;
                    leaf = false;
                }
            }
            this.allLocales.forEach(function (locale) {
                i18n[locale.localeCode] = _this.formGroup.get(locale.localeCode).value;
            });
            if (this.formGroup.get('parent').value) {
                if (this.formGroup.get('parent').value['value']) {
                    parentMenu = {
                        id: this.formGroup.get('parent').value['value'],
                    };
                }
            }
            if (this.formGroup.get('group').value) {
                if (this.formGroup.get('group').value[0]['selected']) {
                    group = true;
                    home = false;
                    leaf = false;
                    level = 0;
                    parentMenu = null;
                }
            }
            this.data = {
                id: id,
                code: code,
                icon: icon,
                link: link,
                type: type,
                level: level,
                ordering: ordering,
                home: home,
                group: group,
                leaf: leaf,
                i18n: i18n,
                parentMenu: parentMenu,
            };
            if (this.action === 'Edit') {
                this.dialogService.open(dialog, { context: 'alert.edit' });
            }
            else {
                this.postMenu();
            }
        };
        MainMenuPageComponent.prototype.onSubmitDialog = function (ref) {
            if (this.dialogAction === 'Delete') {
                this.deleteTreeMenu(ref);
            }
            else {
                this.postMenu(ref);
            }
        };
        MainMenuPageComponent.prototype.onReset = function () {
            var _this = this;
            this.disabled = false;
            this.isRoot = true;
            this.isGroup = false;
            this.title = null;
            this.action = 'Add';
            this.allLocales.forEach(function (locale) {
                _this.formGroup.get(locale.localeCode).setValue(null);
            });
            this.formGroup.get('group').setValue([{ id: 'group', selected: this.isGroup }]);
            this.formGroup.get('home').setValue([{ id: 'home', selected: false }]);
            this.formGroup.get('root').setValue([{ selected: this.isRoot }]);
            this.formGroup.get('id').setValue(null);
            this.formGroup.get('code').setValue('N/A');
            this.formGroup.get('link').setValue('#');
            this.formGroup.get('icon').setValue(null);
            this.formGroup.get('order').setValue(null);
            this.formGroup.get('parent').setValue(null);
        };
        MainMenuPageComponent.prototype.deleteTreeMenu = function (ref) {
            var _this = this;
            this.disabled = true;
            this.http.HTTP_AUTH(this.api['security']['delete-menu'], null, null, null, [this.node['id']]).subscribe(function (success) {
                ref.close();
                _this.context.delete();
                _this.disabled = false;
                _this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
                _this.loadDataMenu().subscribe(function () {
                    _this.loadingForm = false;
                });
            }, function (error) {
                _this.disabled = false;
                _this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
            });
        };
        MainMenuPageComponent.prototype.postMenu = function (ref) {
            var _this = this;
            _super.prototype.onSubmit.call(this, this.data, 'security', 'post-menus')
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (response) {
                if (response.respStatusCode === i5$1.ResponseCode.OK_DEFAULT.toString()) {
                    _this.loadDataMenu().subscribe(function () {
                        _this.loadingForm = false;
                    });
                }
                if (_this.action === 'Edit') {
                    ref.close();
                }
            });
        };
        return MainMenuPageComponent;
    }(i3.BaseFormComponent));
    MainMenuPageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: MainMenuPageComponent, deps: [{ token: i0__namespace.Injector }, { token: i1__namespace$1.NbDialogService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    MainMenuPageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: MainMenuPageComponent, selector: "do-main-menu-page", usesInheritance: true, ngImport: i0__namespace, template: "<div class=\"row\">\n  <div class=\"col-md-4 col-lg-4\">\n    <tree-ngx\n      [nodeItems]=\"nodeItems\"\n      [options]=\"options\"\n      #treeMain>\n      <ng-template #nodeNameTemplate let-node=\"node\" let-context=\"context\">\n        <span\n          class=\"node-action\"\n          [ngClass]=\"{\n            'node-action': !node.item.group,\n            'node-action-group': node.item.group\n          }\"\n          [class.active]=\"context.active\"\n          (click)=\"onSelectNode(node)\">\n          {{node.name}}\n        </span>\n        <span class=\"tree-action\">\n          <nb-icon\n              class=\"action-trash\"\n              icon=\"close-square-outline\"\n              (click)=\"onDeleteTree(node, context, dialogprocess)\">\n          </nb-icon>\n        </span>\n      </ng-template>\n    </tree-ngx>\n  </div>\n  <div class=\"col-md-8 col-lg-8\">\n    <form [formGroup]=\"formGroup\">\n      <div class=\"row\">\n        <label\n          for=\"Title\"\n          class=\"label col-sm-3 col-form-label\"\n          *ngIf=\"!loadingForm; else labelskeleton\">\n          {{'Title' | translate}}\n        </label>\n        <ng-template #labelskeleton>\n          <div class=\"col-sm-3\">\n            <div\n              [ngClass]=\"{\n                'label-skeleton': true,\n                'skeleton': loadingForm\n              }\">\n            </div>\n          </div>\n        </ng-template>\n        <div class=\"col-sm-9\" *ngIf=\"loadLocale; else inputSkeleton\">\n          <do-input-icon\n            [name]=\"localeDefault.localeCode\"\n            [nolabel]=\"true\"\n            [required]=\"true\"\n            [colLabel]=\"0\"\n            [colInput]=\"12\"\n            [icon]=\"'flag-icon flag-icon-' + localeDefault.icon\"\n            [skeleton]=\"loadingForm\"\n            formControlName=\"{{localeDefault.localeCode}}\">\n          </do-input-icon>\n        </div>\n        <ng-template #inputSkeleton>\n          <div class=\"col-sm-9\">\n            <div\n              [ngClass]=\"{\n                'input-skeleton': true,\n                'skeleton': loadingForm\n              }\">\n            </div>\n          </div>\n        </ng-template>\n      </div>\n      <do-input-icon *ngFor=\"let i18n of locales\"\n        [name]=\"i18n.localeCode\"\n        [nolabel]=\"true\"\n        [icon]=\"'flag-icon flag-icon-'+ i18n.icon\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"{{i18n.localeCode}}\">\n      </do-input-icon>\n      <do-checkbox\n        [name]=\"'group'\"\n        [label]=\"'Group'\"\n        [data]=\"groupData\"\n        [skeleton]=\"loadingForm\"\n        [warnMessage]=\"'warn.group-menu'\"\n        (onChecked)=\"onCheckedGroup($event)\"\n        formControlName=\"group\">\n      </do-checkbox>\n      <do-checkbox\n        [name]=\"'root'\"\n        [label]=\"'Root'\"\n        [data]=\"rootData\"\n        [skeleton]=\"loadingForm\"\n        (onChecked)=\"onCheckedRoot($event)\"\n        formControlName=\"root\"\n        *ngIf=\"!isGroup\">\n      </do-checkbox>\n      <do-checkbox\n        [name]=\"'home'\"\n        [label]=\"'Home'\"\n        [data]=\"homeData\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"home\"\n        *ngIf=\"!isGroup\">\n      </do-checkbox>\n      <do-input-text\n        [name]=\"'code'\"\n        [label]=\"'Code'\"\n        [capslock]=\"true\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"code\"\n        *ngIf=\"!isGroup\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'link'\"\n        [label]=\"'Link'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"link\"\n        *ngIf=\"!isGroup\">\n      </do-input-text>\n      <do-input-icon\n        [name]=\"'icon'\"\n        [label]=\"'Icon'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        [icon]=\"'search-outline'\"\n        [iconcursor]=\"true\"\n        [eva]=\"true\"\n        (clickIcon)=\"onSearchIcon()\"\n        formControlName=\"icon\"\n        *ngIf=\"(isRoot && !isGroup)\">\n      </do-input-icon>\n      <do-select\n        [name]=\"'parent'\"\n        [label]=\"'Parent Menu'\"\n        [api]=\"apiSelectParent\"\n        [searchable]=\"false\"\n        [skeleton]=\"loadingForm\"\n        [required]=\"true\"\n        formControlName=\"parent\"\n        *ngIf=\"(!isRoot && !isGroup)\">\n      </do-select>\n      <do-input-text\n        [name]=\"'order'\"\n        [label]=\"'Order'\"\n        [required]=\"true\"\n        [type]=\"'number'\"\n        [max]=\"999\"\n        [maxLength]=\"3\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"order\">\n      </do-input-text>\n      <do-button-submit\n        [submitTitle]=\"action\"\n        [resetTitle]=\"'Cancel'\"\n        [formGroupButton]=\"formGroup\"\n        [disabledButton]=\"disabled\"\n        (onReset)=\"onReset()\"\n        (onSubmit)=\"onSubmit(dialogprocess)\">\n      </do-button-submit>\n    </form>\n  </div>\n</div>\n\n<ng-template #dialogprocess let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"{{dialogAction === 'Delete' ? 'danger' : 'warning'}}\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <do-button-submit\n        [colLabel]=\"0\"\n        [colButton]=\"12\"\n        [submitTitle]=\"dialogAction\"\n        [resetTitle]=\"'Cancel'\"\n        [disabledButton]=\"disabled\"\n        (onReset)=\"ref.close()\"\n        (onSubmit)=\"onSubmitDialog(ref)\">\n      </do-button-submit>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>\n", styles: [".tree-ngx{display:flex;flex:1 1 auto;flex-direction:column;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif}.node{display:flex;flex:1 1 auto;flex-direction:column}.node-children{display:flex;flex:1 1 auto}.node-name{display:inline-block;padding:5px 0 5px 7px}.node-name.markSelected{padding:5px 0 5px 2px;border-left:5px #226699 solid}.node-name .active{cursor:pointer}.node-offset{display:flex;margin-left:20px}.node-icon-wrapper{position:relative;display:inline-block;width:25px;height:17px;top:1px;left:6px}.node-icon-wrapper.disabled{cursor:default}.collapsable{cursor:pointer}.node-container{display:inline-block}.nodeDisabled{opacity:.6}.node-checkbox{display:inline-block;position:relative;top:3px;left:5px;width:16px;height:16px;cursor:pointer}.node-checkbox:disabled{cursor:auto}.collapsible-wrapper{display:flex;overflow:hidden}.collapsible-wrapper:after{content:\"\";height:25px;transition:height .3s linear,max-height 0s .3s linear;max-height:0px}.collapsible{transition:margin-bottom .3s cubic-bezier(0,0,0,1);margin-bottom:0;max-height:1000000px}.collapsible-wrapper.collapsed>.collapsible{margin-bottom:-20000px;transition:margin-bottom .3s cubic-bezier(1,0,1,1),visibility 0s .3s,max-height 0s .3s;visibility:hidden;max-height:0}.collapsible-wrapper.collapsed:after{height:0;transition:height .3s linear;max-height:25px}.arrow-down{position:absolute;width:0;height:0;left:3px;top:6px;border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #455A64}.arrow-down.collapse-empty{border-top:7px solid #ccc}.arrow-right{position:absolute;width:0;height:0;left:8px;top:3px;border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid #455A64}.nb-theme-default .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-default .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#222b45;border-radius:0;cursor:pointer}.nb-theme-default .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-default .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-default .action-trash:hover{color:#ff708d}.nb-theme-dark .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-dark .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#fff;border-radius:0;cursor:pointer}.nb-theme-dark .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-dark .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-dark .action-trash:hover{color:#ff708d}.nb-theme-cosmic .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-cosmic .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#fff;border-radius:0;cursor:pointer}.nb-theme-cosmic .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-cosmic .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-cosmic .action-trash:hover{color:#ff708d}.nb-theme-corporate .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-corporate .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#222b45;border-radius:0;cursor:pointer}.nb-theme-corporate .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-corporate .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-corporate .action-trash:hover{color:#ff708d}\n"], components: [{ type: i2__namespace.ɵa, selector: "tree-ngx", inputs: ["options", "callbacks", "filter", "nodeItems"], outputs: ["selectedItems"] }, { type: i1__namespace$1.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }, { type: i3__namespace.DoInputIconComponent, selector: "do-input-icon", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "buttontype", "type", "iconcursor", "eva", "icon"], outputs: ["clickIcon", "focus"] }, { type: i3__namespace.DoCheckboxComponent, selector: "do-checkbox", inputs: ["colLabel", "colInput", "data"], outputs: ["onChecked"] }, { type: i3__namespace.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i3__namespace.DoSelectComponent, selector: "do-select", inputs: ["placeholder", "colLabel", "colInput", "items", "multiple", "loading", "addTag", "closeOnSelect", "clearable", "searchable", "hideSelected", "minTermLength", "maxTermLength", "api", "limit", "offsetNextLoad", "queryParam"], outputs: ["onSelect", "onClear"] }, { type: i3__namespace.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }, { type: i1__namespace$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1__namespace$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1__namespace$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i1__namespace$1.NbCardFooterComponent, selector: "nb-card-footer" }], directives: [{ type: i5__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4__namespace.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i5__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i4__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i5__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "translate": i6__namespace.TranslatePipe }, encapsulation: i0__namespace.ViewEncapsulation.None });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: MainMenuPageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-main-menu-page',
                        styleUrls: ['./main-menu-page.component.scss'],
                        templateUrl: './main-menu-page.component.html',
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }, { type: i1__namespace$1.NbDialogService }]; } });

    var ExtraMenuPageComponent = /** @class */ (function (_super) {
        __extends(ExtraMenuPageComponent, _super);
        function ExtraMenuPageComponent(injector, dialogService) {
            var _this = _super.call(this, injector, {
                id: [],
                'en-US': [],
                'id-ID': [],
                code: [{
                        value: 'N/A',
                        disabled: false,
                    }],
                link: [{
                        value: '#',
                        disabled: false,
                    }],
                order: [],
            }) || this;
            _this.injector = injector;
            _this.dialogService = dialogService;
            _this.nodeItems = [];
            _this.options = {
                mode: i2.TreeMode.NoSelect,
                checkboxes: false,
                alwaysEmitSelected: true
            };
            _this.allLocales = [];
            _this.locales = [];
            _this.localeDefault = new i5$1.LocaleModel();
            _this.action = 'Add';
            _this.dialogAction = 'Edit';
            _this.loadLocale = false;
            _this.title = null;
            return _this;
        }
        ExtraMenuPageComponent.prototype.ngOnInit = function () { };
        ExtraMenuPageComponent.prototype.loadDataMenu = function () {
            var _this = this;
            if (!this.loadLocale) {
                this.loadingForm = true;
                this.http.HTTP_AUTH(this.api['master']['all-locale']).subscribe(function (response) {
                    _this.splitLocale(response);
                    _this.loadLocale = true;
                    _this.loadingForm = false;
                });
            }
            return this.http.HTTP_AUTH(this.api['security']['get-tree-menus'], null, null, null, ['extra']).pipe(operators.map(function (response) {
                _this.nodeItems = [];
                _this.nodeItems = __spreadArray(__spreadArray([], __read(_this.nodeItems)), __read(response));
                _this.onReset();
                if (_this.loadLocale) {
                    _this.loadingForm = false;
                }
            }));
        };
        ExtraMenuPageComponent.prototype.splitLocale = function (values) {
            var _this = this;
            this.allLocales = values;
            values.forEach(function (data) {
                if (data.localeDefault) {
                    _this.localeDefault = data;
                }
                else {
                    _this.locales.push(data);
                }
                _this.formGroup.removeControl(data.localeCode);
                _this.formGroup.addControl(data.localeCode, new i4.FormControl());
            });
        };
        ExtraMenuPageComponent.prototype.onSearchIcon = function () {
            var _this = this;
            this.dialogService.open(DialogIconComponent)
                .onClose.subscribe(function (icon) {
                _this.formGroup.get('icon').setValue(icon);
                _this.formGroup.get('icon').markAsDirty();
            });
        };
        ExtraMenuPageComponent.prototype.onSelectNode = function (node) {
            var _this = this;
            if (node.item) {
                this.action = 'Edit';
                this.dialogAction = this.action;
                this.allLocales.forEach(function (locale) {
                    _this.formGroup.get(locale.localeCode).setValue(node.item['i18n'][locale.localeCode]);
                });
                this.formGroup.get('id').setValue(node['id']);
                this.formGroup.get('code').setValue(node.item['code']);
                this.formGroup.get('link').setValue(node.item['link']);
                this.formGroup.get('order').setValue(node.item['ordering']);
            }
        };
        ExtraMenuPageComponent.prototype.onDeleteTree = function (node, context, dialog) {
            this.dialogAction = 'Delete';
            this.node = node;
            this.context = context;
            this.dialogService.open(dialog, { context: 'alert.delete' });
        };
        ExtraMenuPageComponent.prototype.onSubmit = function (dialog) {
            var _this = this;
            var id = null;
            var code = 'N/A';
            var link = '#';
            var ordering = 0;
            var type = 'extra';
            var icon = null;
            var home = false;
            var group = false;
            var level = 0;
            var leaf = false;
            var i18n = {};
            var parentMenu = null;
            if (this.formGroup.get('id').value) {
                id = this.formGroup.get('id').value;
            }
            if (this.formGroup.get('code').value) {
                code = this.formGroup.get('code').value;
            }
            if (this.formGroup.get('link').value) {
                link = this.formGroup.get('link').value;
            }
            if (this.formGroup.get('order').value) {
                ordering = +this.formGroup.get('order').value;
            }
            this.allLocales.forEach(function (locale) {
                i18n[locale.localeCode] = _this.formGroup.get(locale.localeCode).value;
            });
            this.data = {
                id: id,
                code: code,
                icon: icon,
                link: link,
                type: type,
                level: level,
                ordering: ordering,
                home: home,
                group: group,
                leaf: leaf,
                i18n: i18n,
                parentMenu: parentMenu,
            };
            if (this.action === 'Edit') {
                this.dialogService.open(dialog, { context: 'alert.edit' });
            }
            else {
                this.postMenu();
            }
        };
        ExtraMenuPageComponent.prototype.onSubmitDialog = function (ref) {
            if (this.dialogAction === 'Delete') {
                this.deleteTreeMenu(ref);
            }
            else {
                this.postMenu(ref);
            }
        };
        ExtraMenuPageComponent.prototype.onReset = function () {
            var _this = this;
            this.disabled = false;
            this.title = null;
            this.action = 'Add';
            this.allLocales.forEach(function (locale) {
                _this.formGroup.get(locale.localeCode).setValue(null);
            });
            this.formGroup.get('id').setValue(null);
            this.formGroup.get('code').setValue('N/A');
            this.formGroup.get('link').setValue('#');
            this.formGroup.get('order').setValue(null);
        };
        ExtraMenuPageComponent.prototype.deleteTreeMenu = function (ref) {
            var _this = this;
            this.disabled = true;
            this.http.HTTP_AUTH(this.api['security']['delete-menu'], null, null, null, [this.node['id']]).subscribe(function (success) {
                ref.close();
                _this.context.delete();
                _this.disabled = false;
                _this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
                _this.loadDataMenu().subscribe(function () {
                    _this.loadingForm = false;
                });
            }, function (error) {
                _this.disabled = false;
                _this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
            });
        };
        ExtraMenuPageComponent.prototype.postMenu = function (ref) {
            var _this = this;
            _super.prototype.onSubmit.call(this, this.data, 'security', 'post-menus')
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (response) {
                if (response.respStatusCode === i5$1.ResponseCode.OK_DEFAULT.toString()) {
                    _this.loadDataMenu().subscribe(function () {
                        _this.loadingForm = false;
                    });
                }
                if (_this.action === 'Edit') {
                    ref.close();
                }
            });
        };
        return ExtraMenuPageComponent;
    }(i3.BaseFormComponent));
    ExtraMenuPageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ExtraMenuPageComponent, deps: [{ token: i0__namespace.Injector }, { token: i1__namespace$1.NbDialogService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    ExtraMenuPageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ExtraMenuPageComponent, selector: "do-extra-menu-page", usesInheritance: true, ngImport: i0__namespace, template: "<div class=\"row\">\n  <div class=\"col-md-4 col-lg-4\">\n    <tree-ngx\n      [nodeItems]=\"nodeItems\"\n      [options]=\"options\"\n      #treeExtra>\n      <ng-template #nodeNameTemplate let-node=\"node\" let-context=\"context\">\n        <span\n          class=\"node-action\"\n          [class.active]=\"context.active\"\n          (click)=\"onSelectNode(node)\">\n          {{node.name}}\n        </span>\n        <span class=\"tree-action\">\n          <nb-icon\n              class=\"action-trash\"\n              icon=\"close-square-outline\"\n              (click)=\"onDeleteTree(node, context, dialogprocessextra)\">\n          </nb-icon>\n        </span>\n      </ng-template>\n    </tree-ngx>\n  </div>\n  <div class=\"col-md-8 col-lg-8\">\n    <form [formGroup]=\"formGroup\">\n      <div class=\"row\">\n        <label\n          for=\"Title\"\n          class=\"label col-sm-3 col-form-label\"\n          *ngIf=\"!loadingForm; else labelskeleton\">\n          {{'Title' | translate}}\n        </label>\n        <ng-template #labelskeleton>\n          <div class=\"col-sm-3\">\n            <div\n              [ngClass]=\"{\n                'label-skeleton': true,\n                'skeleton': loadingForm\n              }\">\n            </div>\n          </div>\n        </ng-template>\n        <div class=\"col-sm-9\" *ngIf=\"loadLocale; else inputSkeleton\">\n          <do-input-icon\n            [name]=\"localeDefault.localeCode\"\n            [nolabel]=\"true\"\n            [required]=\"true\"\n            [colLabel]=\"0\"\n            [colInput]=\"12\"\n            [icon]=\"'flag-icon flag-icon-' + localeDefault.icon\"\n            [skeleton]=\"loadingForm\"\n            formControlName=\"{{localeDefault.localeCode}}\">\n          </do-input-icon>\n        </div>\n        <ng-template #inputSkeleton>\n          <div class=\"col-sm-9\">\n            <div\n              [ngClass]=\"{\n                'input-skeleton': true,\n                'skeleton': loadingForm\n              }\">\n            </div>\n          </div>\n        </ng-template>\n      </div>\n      <do-input-icon *ngFor=\"let i18n of locales\"\n        [name]=\"i18n.localeCode\"\n        [nolabel]=\"true\"\n        [icon]=\"'flag-icon flag-icon-'+ i18n.icon\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"{{i18n.localeCode}}\">\n      </do-input-icon>\n      <do-input-text\n        [name]=\"'code'\"\n        [label]=\"'Code'\"\n        [capslock]=\"true\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"code\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'link'\"\n        [label]=\"'Link'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"link\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'order'\"\n        [label]=\"'Order'\"\n        [required]=\"true\"\n        [type]=\"'number'\"\n        [max]=\"99\"\n        [maxLength]=\"2\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"order\">\n      </do-input-text>\n      <do-button-submit\n        [submitTitle]=\"action\"\n        [resetTitle]=\"'Cancel'\"\n        [formGroupButton]=\"formGroup\"\n        [disabledButton]=\"disabled\"\n        (onReset)=\"onReset()\"\n        (onSubmit)=\"onSubmit(dialogprocessextra)\">\n      </do-button-submit>\n    </form>\n  </div>\n</div>\n\n<ng-template #dialogprocessextra let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"{{dialogAction === 'Delete' ? 'danger' : 'warning'}}\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <do-button-submit\n        [colLabel]=\"0\"\n        [colButton]=\"12\"\n        [submitTitle]=\"dialogAction\"\n        [resetTitle]=\"'Cancel'\"\n        [disabledButton]=\"disabled\"\n        (onReset)=\"ref.close()\"\n        (onSubmit)=\"onSubmitDialog(ref)\">\n      </do-button-submit>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>\n", styles: [".tree-ngx{display:flex;flex:1 1 auto;flex-direction:column;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif}.node{display:flex;flex:1 1 auto;flex-direction:column}.node-children{display:flex;flex:1 1 auto}.node-name{display:inline-block;padding:5px 0 5px 7px}.node-name.markSelected{padding:5px 0 5px 2px;border-left:5px #226699 solid}.node-name .active{cursor:pointer}.node-offset{display:flex;margin-left:20px}.node-icon-wrapper{position:relative;display:inline-block;width:25px;height:17px;top:1px;left:6px}.node-icon-wrapper.disabled{cursor:default}.collapsable{cursor:pointer}.node-container{display:inline-block}.nodeDisabled{opacity:.6}.node-checkbox{display:inline-block;position:relative;top:3px;left:5px;width:16px;height:16px;cursor:pointer}.node-checkbox:disabled{cursor:auto}.collapsible-wrapper{display:flex;overflow:hidden}.collapsible-wrapper:after{content:\"\";height:25px;transition:height .3s linear,max-height 0s .3s linear;max-height:0px}.collapsible{transition:margin-bottom .3s cubic-bezier(0,0,0,1);margin-bottom:0;max-height:1000000px}.collapsible-wrapper.collapsed>.collapsible{margin-bottom:-20000px;transition:margin-bottom .3s cubic-bezier(1,0,1,1),visibility 0s .3s,max-height 0s .3s;visibility:hidden;max-height:0}.collapsible-wrapper.collapsed:after{height:0;transition:height .3s linear;max-height:25px}.arrow-down{position:absolute;width:0;height:0;left:3px;top:6px;border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #455A64}.arrow-down.collapse-empty{border-top:7px solid #ccc}.arrow-right{position:absolute;width:0;height:0;left:8px;top:3px;border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid #455A64}.nb-theme-default .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-default .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#222b45;border-radius:0;cursor:pointer}.nb-theme-default .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-default .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-default .action-trash:hover{color:#ff708d}.nb-theme-dark .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-dark .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#fff;border-radius:0;cursor:pointer}.nb-theme-dark .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-dark .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-dark .action-trash:hover{color:#ff708d}.nb-theme-cosmic .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-cosmic .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#fff;border-radius:0;cursor:pointer}.nb-theme-cosmic .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-cosmic .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-cosmic .action-trash:hover{color:#ff708d}.nb-theme-corporate .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-corporate .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#222b45;border-radius:0;cursor:pointer}.nb-theme-corporate .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-corporate .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-corporate .action-trash:hover{color:#ff708d}\n"], components: [{ type: i2__namespace.ɵa, selector: "tree-ngx", inputs: ["options", "callbacks", "filter", "nodeItems"], outputs: ["selectedItems"] }, { type: i1__namespace$1.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }, { type: i3__namespace.DoInputIconComponent, selector: "do-input-icon", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "buttontype", "type", "iconcursor", "eva", "icon"], outputs: ["clickIcon", "focus"] }, { type: i3__namespace.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i3__namespace.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }, { type: i1__namespace$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1__namespace$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1__namespace$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i1__namespace$1.NbCardFooterComponent, selector: "nb-card-footer" }], directives: [{ type: i4__namespace.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i5__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i5__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i4__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i5__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "translate": i6__namespace.TranslatePipe }, encapsulation: i0__namespace.ViewEncapsulation.None });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ExtraMenuPageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-extra-menu-page',
                        styleUrls: ['./extra-menu-page.component.scss'],
                        templateUrl: './extra-menu-page.component.html',
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }, { type: i1__namespace$1.NbDialogService }]; } });

    var MenuPageComponent = /** @class */ (function (_super) {
        __extends(MenuPageComponent, _super);
        function MenuPageComponent(injector) {
            var _this = _super.call(this, injector) || this;
            _this.injector = injector;
            _this.loading = false;
            _this.tab = 'main';
            _this.destroy$ = new rxjs.Subject();
            return _this;
        }
        MenuPageComponent.prototype.ngOnInit = function () {
        };
        MenuPageComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next(true);
            this.destroy$.next();
            this.destroy$.complete();
        };
        MenuPageComponent.prototype.toggleLoadingAnimation = function (event) {
            var _this = this;
            this.tab = event.tabId;
            this.loading = true;
            if (this.tab === 'main') {
                this.mainMenu.loadDataMenu()
                    .pipe(operators.takeUntil(this.destroy$))
                    .subscribe(function () {
                    _this.loading = false;
                });
            }
            else {
                this.extraMenu.loadDataMenu()
                    .pipe(operators.takeUntil(this.destroy$))
                    .subscribe(function () {
                    _this.loading = false;
                });
            }
        };
        return MenuPageComponent;
    }(i3.BaseComponent));
    MenuPageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: MenuPageComponent, deps: [{ token: i0__namespace.Injector }], target: i0__namespace.ɵɵFactoryTarget.Component });
    MenuPageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: MenuPageComponent, selector: "do-menu-page", viewQueries: [{ propertyName: "mainMenu", first: true, predicate: ["mainMenu"], descendants: true, static: true }, { propertyName: "extraMenu", first: true, predicate: ["extraMenu"], descendants: true, static: true }], usesInheritance: true, ngImport: i0__namespace, template: "<do-page-outlet [header]=\"'header.menu-management'\" [hidefooter]=\"true\">\n  <nb-tabset fullWidth (changeTab)=\"toggleLoadingAnimation($event)\" pagecontent>\n    <nb-tab tabId=\"main\" tabTitle=\"{{'tab.main-menu' | translate}}\">\n      <do-main-menu-page #mainMenu></do-main-menu-page>\n    </nb-tab>\n    <nb-tab tabId=\"extra\" tabTitle=\"{{'tab.extra-menu' | translate}}\" [lazyLoad]=\"true\">\n      <do-extra-menu-page #extraMenu></do-extra-menu-page>\n    </nb-tab>\n  </nb-tabset>\n</do-page-outlet>\n", styles: [""], components: [{ type: i3__namespace.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i1__namespace$1.NbTabsetComponent, selector: "nb-tabset", inputs: ["fullWidth", "routeParam"], outputs: ["changeTab"] }, { type: i1__namespace$1.NbTabComponent, selector: "nb-tab", inputs: ["badgeStatus", "badgeDot", "disabled", "responsive", "active", "lazyLoad", "tabTitle", "tabId", "tabIcon", "route", "badgeText", "badgePosition"] }, { type: MainMenuPageComponent, selector: "do-main-menu-page" }, { type: ExtraMenuPageComponent, selector: "do-extra-menu-page" }], pipes: { "translate": i6__namespace.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: MenuPageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-menu-page',
                        styleUrls: ['./menu-page.component.scss'],
                        templateUrl: './menu-page.component.html',
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }]; }, propDecorators: { mainMenu: [{
                    type: i0.ViewChild,
                    args: ['mainMenu', { static: true }]
                }], extraMenu: [{
                    type: i0.ViewChild,
                    args: ['extraMenu', { static: true }]
                }] } });

    var routes$9 = [{
            path: '',
            component: MgmtMenuComponent,
            canActivateChild: [i1$2.AuthGuardChildService],
            children: [
                {
                    path: '',
                    component: MenuPageComponent,
                    data: {
                        code: '#MANAGEMENT-MENU-PAGE',
                    },
                },
            ],
        }];
    var DoMgmtMenuRoutingModule = /** @class */ (function () {
        function DoMgmtMenuRoutingModule() {
        }
        return DoMgmtMenuRoutingModule;
    }());
    DoMgmtMenuRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtMenuRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DoMgmtMenuRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtMenuRoutingModule, imports: [i1__namespace.RouterModule], exports: [i1.RouterModule] });
    DoMgmtMenuRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtMenuRoutingModule, imports: [[i1.RouterModule.forChild(routes$9)], i1.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtMenuRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.RouterModule.forChild(routes$9)],
                        exports: [i1.RouterModule],
                    }]
            }] });

    var components$9 = [
        MgmtMenuComponent,
        MenuPageComponent,
        MainMenuPageComponent,
        ExtraMenuPageComponent,
        DialogIconComponent,
    ];
    var entryComponents = [
        DialogIconComponent,
    ];
    var modules$9 = [
        i4.FormsModule,
        i4.ReactiveFormsModule,
        i6.TranslateModule,
        i1$1.NbCardModule,
        i1$1.NbAlertModule,
        i1$1.NbIconModule,
        i1$1.NbButtonModule,
        i1$1.NbDialogModule.forChild(),
        doTheme.DoThemeModule,
        i3.DoInputModule,
        i3.DoCheckBoxModule,
        i3.DoButtonModule,
        i3.DoBaseModule,
        i3.DoSelectModule,
        i3.DoDatatableModule,
        i1$1.NbTabsetModule,
        i1$1.NbSpinnerModule,
        i2.TreeNgxModule,
        DoMgmtMenuRoutingModule,
    ];
    var providers$9 = [];
    var DoMgmtMenuModule = /** @class */ (function () {
        function DoMgmtMenuModule() {
        }
        return DoMgmtMenuModule;
    }());
    DoMgmtMenuModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtMenuModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DoMgmtMenuModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtMenuModule, declarations: [MgmtMenuComponent,
            MenuPageComponent,
            MainMenuPageComponent,
            ExtraMenuPageComponent,
            DialogIconComponent], imports: [i4.FormsModule,
            i4.ReactiveFormsModule,
            i6.TranslateModule,
            i1$1.NbCardModule,
            i1$1.NbAlertModule,
            i1$1.NbIconModule,
            i1$1.NbButtonModule, i1__namespace$1.NbDialogModule, doTheme.DoThemeModule,
            i3.DoInputModule,
            i3.DoCheckBoxModule,
            i3.DoButtonModule,
            i3.DoBaseModule,
            i3.DoSelectModule,
            i3.DoDatatableModule,
            i1$1.NbTabsetModule,
            i1$1.NbSpinnerModule,
            i2.TreeNgxModule,
            DoMgmtMenuRoutingModule] });
    DoMgmtMenuModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtMenuModule, providers: __spreadArray([], __read(providers$9)), imports: [__spreadArray([], __read(modules$9))] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtMenuModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: __spreadArray([], __read(modules$9)),
                        declarations: __spreadArray([], __read(components$9)),
                        providers: __spreadArray([], __read(providers$9)),
                        entryComponents: __spreadArray([], __read(entryComponents))
                    }]
            }] });

    var MgmtRoleComponent = /** @class */ (function () {
        function MgmtRoleComponent() {
        }
        return MgmtRoleComponent;
    }());
    MgmtRoleComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: MgmtRoleComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    MgmtRoleComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: MgmtRoleComponent, selector: "do-mgmt-role", ngImport: i0__namespace, template: "\n    <router-outlet></router-outlet>\n  ", isInline: true, directives: [{ type: i1__namespace.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: MgmtRoleComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-mgmt-role',
                        template: "\n    <router-outlet></router-outlet>\n  ",
                    }]
            }] });

    var RoleService = /** @class */ (function () {
        function RoleService() {
        }
        RoleService.prototype.getRole = function () {
            return this.role;
        };
        RoleService.prototype.setRole = function (role) {
            this.role = role;
        };
        return RoleService;
    }());
    RoleService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: RoleService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    RoleService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: RoleService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: RoleService, decorators: [{
                type: i0.Injectable
            }] });

    var RoleListPageComponent = /** @class */ (function (_super) {
        __extends(RoleListPageComponent, _super);
        function RoleListPageComponent(injector, router, roleService) {
            var _this = _super.call(this, injector, {
                authority: [],
                description: [],
            }) || this;
            _this.injector = injector;
            _this.router = router;
            _this.roleService = roleService;
            _this.selectionType = ngxDatatable.SelectionType.single;
            _this.columns = [
                { name: 'Authority', prop: 'authority', width: 150, frozenLeft: true },
                { name: 'Description', prop: 'description', width: 275, frozenLeft: true },
                { name: 'Created', prop: 'createdBy' },
                { name: 'Created Date', prop: 'createdDate' },
                { name: 'Modified', prop: 'modifiedBy' },
                { name: 'Modified Date', prop: 'modifiedDate' },
            ];
            _this.expanded = false;
            _this.apiPath = _this.api['security']['datatable-role'];
            _this.sort = {
                asc: ['level']
            };
            _this.filters = [
                { controlName: 'authority', type: 'input' },
                { controlName: 'description', type: 'input' }
            ];
            return _this;
        }
        RoleListPageComponent.prototype.ngOnInit = function () {
        };
        RoleListPageComponent.prototype.onAddGroup = function () {
            this.router.navigate(['/app/mgmt/role', 'add']);
        };
        RoleListPageComponent.prototype.onViewDetail = function (data) {
            this.roleService.setRole(data);
            this.router.navigate(['/app/mgmt/role', 'edit']);
        };
        RoleListPageComponent.prototype.onReset = function () {
            this.router.navigate(['/app/mgmt/role']);
        };
        RoleListPageComponent.prototype.back = function () {
            this.router.navigate(['/app/mgmt/role']);
            return false;
        };
        return RoleListPageComponent;
    }(i3.BaseFilterComponent));
    RoleListPageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: RoleListPageComponent, deps: [{ token: i0__namespace.Injector }, { token: i1__namespace.Router }, { token: RoleService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    RoleListPageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: RoleListPageComponent, selector: "do-role-list-page", usesInheritance: true, ngImport: i0__namespace, template: "<do-page-outlet [header]=\"'header.role-management'\" [hidefooter]=\"true\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [sort]=\"sort\"\n        [delete]=\"false\"\n        [selectionType]=\"selectionType\"\n        (onFilter)=\"doFilterAdvanced($event)\"\n        (onAdd)=\"onAddGroup()\"\n        (onEdit)=\"onViewDetail($event)\"\n        [filterFn]=\"keyword\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'authority'\"\n            [label]=\"'Authority'\"\n            formControlName=\"authority\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'description'\"\n            [label]=\"'Description'\"\n            formControlName=\"description\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n", styles: [""], components: [{ type: i3__namespace.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i3__namespace.DoDatatableComponent, selector: "do-datatable", inputs: ["rows", "columns", "filters", "selected", "limit", "count", "offset", "externalPaging", "externalSorting", "loadingIndicator", "scrollbarH", "scrollbarV", "reorderable", "sortType", "messages", "selectionType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "header", "column", "footer", "add", "edit", "delete", "filter", "api", "startWithOpenData", "filterEvent", "formGroupFilter", "sort", "sortsDefault", "autoLoad", "filterFn", "filterDoFetchFn", "reloadFn"], outputs: ["onAdd", "onEdit", "onDelete", "onSearch", "onFilter", "onButtonCell", "onLoading", "onSelected"] }, { type: i3__namespace.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }], directives: [{ type: i4__namespace.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: RoleListPageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-role-list-page',
                        styleUrls: ['./role-list-page.component.scss'],
                        templateUrl: './role-list-page.component.html',
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }, { type: i1__namespace.Router }, { type: RoleService }]; } });

    var RoleMainPageComponent = /** @class */ (function (_super) {
        __extends(RoleMainPageComponent, _super);
        function RoleMainPageComponent(injector, roleService) {
            var _this = _super.call(this, injector) || this;
            _this.injector = injector;
            _this.roleService = roleService;
            _this.onSelect = new i0.EventEmitter();
            _this.nodeItems = [];
            _this.options = {
                mode: i2.TreeMode.MultiSelect,
                checkboxes: true,
                alwaysEmitSelected: true,
            };
            _this.title = null;
            _this.data = [];
            return _this;
        }
        RoleMainPageComponent.prototype.ngOnInit = function () { };
        RoleMainPageComponent.prototype.loadDataMenu = function (mainData) {
            var _this = this;
            if (mainData.length > 0) {
                return rxjs.of(function () {
                    _this.nodeItems = [];
                    _this.nodeItems = __spreadArray(__spreadArray([], __read(_this.nodeItems)), __read(mainData));
                });
            }
            else {
                return this.http.HTTP_AUTH(this.api['security']['get-function-menus'], null, null, null, ['main', this.roleService.getRole().authority]).pipe(operators.map(function (response) {
                    _this.nodeItems = [];
                    _this.nodeItems = __spreadArray(__spreadArray([], __read(_this.nodeItems)), __read(response));
                    _this.data = [];
                    response.forEach(function (val) {
                        if (val === null || val === void 0 ? void 0 : val.children) {
                            val === null || val === void 0 ? void 0 : val.children.forEach(function (child) {
                                if (child.selected) {
                                    _this.data = __spreadArray(__spreadArray([], __read(_this.data)), [child.item]);
                                }
                            });
                        }
                        else {
                            if (val.selected) {
                                _this.data = __spreadArray(__spreadArray([], __read(_this.data)), [val.item]);
                            }
                        }
                    });
                    return _this.data;
                }));
            }
        };
        RoleMainPageComponent.prototype.initDataMenu = function (mainData) {
            var _this = this;
            if (mainData.length > 0) {
                return rxjs.of(function () {
                    _this.nodeItems = [];
                    _this.nodeItems = __spreadArray(__spreadArray([], __read(_this.nodeItems)), __read(mainData));
                });
            }
            else {
                return this.http.HTTP_AUTH(this.api['security']['get-tree-menus'], null, null, null, ['main']).pipe(operators.map(function (response) {
                    _this.nodeItems = [];
                    _this.nodeItems = __spreadArray(__spreadArray([], __read(_this.nodeItems)), __read(response));
                }));
            }
        };
        RoleMainPageComponent.prototype.select = function (datas) {
            this.onSelect.emit(datas);
        };
        return RoleMainPageComponent;
    }(i3.BaseFormComponent));
    RoleMainPageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: RoleMainPageComponent, deps: [{ token: i0__namespace.Injector }, { token: RoleService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    RoleMainPageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: RoleMainPageComponent, selector: "do-role-main-page", outputs: { onSelect: "onSelect" }, usesInheritance: true, ngImport: i0__namespace, template: "<div class=\"row\">\n  <div class=\"col-md-4 col-lg-4\">\n    <tree-ngx\n      (selectedItems)=\"select($event)\"\n      [nodeItems]=\"nodeItems\"\n      [options]=\"options\"\n      #treeMain>\n      <ng-template #nodeNameTemplate let-node=\"node\" let-context=\"context\">\n        <span\n          class=\"node-action\"\n          [ngClass]=\"{\n            'node-action': !node.item.group,\n            'node-action-group': node.item.group\n          }\">\n          {{node.name}}\n        </span>\n      </ng-template>\n    </tree-ngx>\n  </div>\n</div>\n", styles: [".tree-ngx{display:flex;flex:1 1 auto;flex-direction:column;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif}.node{display:flex;flex:1 1 auto;flex-direction:column}.node-children{display:flex;flex:1 1 auto}.node-name{display:inline-block;padding:5px 0 5px 7px}.node-name.markSelected{padding:5px 0 5px 2px;border-left:5px #226699 solid}.node-name .active{cursor:pointer}.node-offset{display:flex;margin-left:20px}.node-icon-wrapper{position:relative;display:inline-block;width:25px;height:17px;top:1px;left:6px}.node-icon-wrapper.disabled{cursor:default}.collapsable{cursor:pointer}.node-container{display:inline-block}.nodeDisabled{opacity:.6}.node-checkbox{display:inline-block;position:relative;top:3px;left:5px;width:16px;height:16px;cursor:pointer}.node-checkbox:disabled{cursor:auto}.collapsible-wrapper{display:flex;overflow:hidden}.collapsible-wrapper:after{content:\"\";height:25px;transition:height .3s linear,max-height 0s .3s linear;max-height:0px}.collapsible{transition:margin-bottom .3s cubic-bezier(0,0,0,1);margin-bottom:0;max-height:1000000px}.collapsible-wrapper.collapsed>.collapsible{margin-bottom:-20000px;transition:margin-bottom .3s cubic-bezier(1,0,1,1),visibility 0s .3s,max-height 0s .3s;visibility:hidden;max-height:0}.collapsible-wrapper.collapsed:after{height:0;transition:height .3s linear;max-height:25px}.arrow-down{position:absolute;width:0;height:0;left:3px;top:6px;border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #455A64}.arrow-down.collapse-empty{border-top:7px solid #ccc}.arrow-right{position:absolute;width:0;height:0;left:8px;top:3px;border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid #455A64}.nb-theme-default .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-default .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#222b45;border-radius:0;cursor:pointer}.nb-theme-default .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-default .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-default .action-trash:hover{color:#ff708d}.nb-theme-dark .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-dark .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#fff;border-radius:0;cursor:pointer}.nb-theme-dark .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-dark .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-dark .action-trash:hover{color:#ff708d}.nb-theme-cosmic .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-cosmic .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#fff;border-radius:0;cursor:pointer}.nb-theme-cosmic .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-cosmic .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-cosmic .action-trash:hover{color:#ff708d}.nb-theme-corporate .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-corporate .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#222b45;border-radius:0;cursor:pointer}.nb-theme-corporate .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-corporate .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-corporate .action-trash:hover{color:#ff708d}\n"], components: [{ type: i2__namespace.ɵa, selector: "tree-ngx", inputs: ["options", "callbacks", "filter", "nodeItems"], outputs: ["selectedItems"] }], directives: [{ type: i5__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], encapsulation: i0__namespace.ViewEncapsulation.None });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: RoleMainPageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-role-main-page',
                        styleUrls: ['./role-main-page.component.scss'],
                        templateUrl: './role-main-page.component.html',
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }, { type: RoleService }]; }, propDecorators: { onSelect: [{
                    type: i0.Output
                }] } });

    var RoleExtraPageComponent = /** @class */ (function (_super) {
        __extends(RoleExtraPageComponent, _super);
        function RoleExtraPageComponent(injector, roleService) {
            var _this = _super.call(this, injector) || this;
            _this.injector = injector;
            _this.roleService = roleService;
            _this.onSelect = new i0.EventEmitter();
            _this.nodeItems = [];
            _this.options = {
                mode: i2.TreeMode.MultiSelect,
                checkboxes: true,
                alwaysEmitSelected: true,
            };
            _this.title = null;
            _this.data = [];
            return _this;
        }
        RoleExtraPageComponent.prototype.ngOnInit = function () { };
        RoleExtraPageComponent.prototype.loadDataMenu = function (extraData) {
            var _this = this;
            if (extraData.length > 0) {
                return rxjs.of(function () {
                    _this.nodeItems = [];
                    _this.nodeItems = __spreadArray(__spreadArray([], __read(_this.nodeItems)), __read(extraData));
                });
            }
            else {
                return this.http.HTTP_AUTH(this.api['security']['get-function-menus'], null, null, null, ['extra', this.roleService.getRole().authority]).pipe(operators.map(function (response) {
                    _this.nodeItems = [];
                    _this.nodeItems = __spreadArray(__spreadArray([], __read(_this.nodeItems)), __read(response));
                    _this.data = [];
                    response.forEach(function (val) {
                        if (val === null || val === void 0 ? void 0 : val.children) {
                            val === null || val === void 0 ? void 0 : val.children.forEach(function (child) {
                                if (child.selected) {
                                    _this.data = __spreadArray(__spreadArray([], __read(_this.data)), [child.item]);
                                }
                            });
                        }
                        else {
                            if (val.selected) {
                                _this.data = __spreadArray(__spreadArray([], __read(_this.data)), [val.item]);
                            }
                        }
                    });
                    return _this.data;
                }));
            }
        };
        RoleExtraPageComponent.prototype.initDataMenu = function (extraData) {
            var _this = this;
            if (extraData.length > 0) {
                return rxjs.of(function () {
                    _this.nodeItems = [];
                    _this.nodeItems = __spreadArray(__spreadArray([], __read(_this.nodeItems)), __read(extraData));
                });
            }
            else {
                return this.http.HTTP_AUTH(this.api['security']['get-tree-menus'], null, null, null, ['extra']).pipe(operators.map(function (response) {
                    _this.nodeItems = [];
                    _this.nodeItems = __spreadArray(__spreadArray([], __read(_this.nodeItems)), __read(response));
                }));
            }
        };
        RoleExtraPageComponent.prototype.select = function (datas) {
            this.onSelect.emit(datas);
        };
        return RoleExtraPageComponent;
    }(i3.BaseFormComponent));
    RoleExtraPageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: RoleExtraPageComponent, deps: [{ token: i0__namespace.Injector }, { token: RoleService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    RoleExtraPageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: RoleExtraPageComponent, selector: "do-role-extra-page", outputs: { onSelect: "onSelect" }, usesInheritance: true, ngImport: i0__namespace, template: "<div class=\"row\">\n  <div class=\"col-md-4 col-lg-4\">\n    <tree-ngx\n      (selectedItems)=\"select($event)\"\n      [nodeItems]=\"nodeItems\"\n      [options]=\"options\"\n      #treeExtra>\n      <ng-template #nodeNameTemplate let-node=\"node\" let-context=\"context\">\n        <span\n          class=\"node-action\"\n          [ngClass]=\"{\n            'node-action': !node.item.group\n          }\">\n          {{node.name}}\n        </span>\n      </ng-template>\n    </tree-ngx>\n  </div>\n</div>\n", styles: [".tree-ngx{display:flex;flex:1 1 auto;flex-direction:column;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif}.node{display:flex;flex:1 1 auto;flex-direction:column}.node-children{display:flex;flex:1 1 auto}.node-name{display:inline-block;padding:5px 0 5px 7px}.node-name.markSelected{padding:5px 0 5px 2px;border-left:5px #226699 solid}.node-name .active{cursor:pointer}.node-offset{display:flex;margin-left:20px}.node-icon-wrapper{position:relative;display:inline-block;width:25px;height:17px;top:1px;left:6px}.node-icon-wrapper.disabled{cursor:default}.collapsable{cursor:pointer}.node-container{display:inline-block}.nodeDisabled{opacity:.6}.node-checkbox{display:inline-block;position:relative;top:3px;left:5px;width:16px;height:16px;cursor:pointer}.node-checkbox:disabled{cursor:auto}.collapsible-wrapper{display:flex;overflow:hidden}.collapsible-wrapper:after{content:\"\";height:25px;transition:height .3s linear,max-height 0s .3s linear;max-height:0px}.collapsible{transition:margin-bottom .3s cubic-bezier(0,0,0,1);margin-bottom:0;max-height:1000000px}.collapsible-wrapper.collapsed>.collapsible{margin-bottom:-20000px;transition:margin-bottom .3s cubic-bezier(1,0,1,1),visibility 0s .3s,max-height 0s .3s;visibility:hidden;max-height:0}.collapsible-wrapper.collapsed:after{height:0;transition:height .3s linear;max-height:25px}.arrow-down{position:absolute;width:0;height:0;left:3px;top:6px;border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #455A64}.arrow-down.collapse-empty{border-top:7px solid #ccc}.arrow-right{position:absolute;width:0;height:0;left:8px;top:3px;border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid #455A64}.nb-theme-default .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-default .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#222b45;border-radius:0;cursor:pointer}.nb-theme-default .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-default .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-default .action-trash:hover{color:#ff708d}.nb-theme-dark .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-dark .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#fff;border-radius:0;cursor:pointer}.nb-theme-dark .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-dark .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-dark .action-trash:hover{color:#ff708d}.nb-theme-cosmic .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-cosmic .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#fff;border-radius:0;cursor:pointer}.nb-theme-cosmic .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-cosmic .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-cosmic .action-trash:hover{color:#ff708d}.nb-theme-corporate .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-corporate .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#222b45;border-radius:0;cursor:pointer}.nb-theme-corporate .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-corporate .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-corporate .action-trash:hover{color:#ff708d}\n"], components: [{ type: i2__namespace.ɵa, selector: "tree-ngx", inputs: ["options", "callbacks", "filter", "nodeItems"], outputs: ["selectedItems"] }], directives: [{ type: i5__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], encapsulation: i0__namespace.ViewEncapsulation.None });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: RoleExtraPageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-role-extra-page',
                        styleUrls: ['./role-extra-page.component.scss'],
                        templateUrl: './role-extra-page.component.html',
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }, { type: RoleService }]; }, propDecorators: { onSelect: [{
                    type: i0.Output
                }] } });

    ;
    var RoleAddEditPageComponent = /** @class */ (function (_super) {
        __extends(RoleAddEditPageComponent, _super);
        function RoleAddEditPageComponent(injector, router, route, roleService) {
            var _this = this;
            var _a, _b;
            _this = _super.call(this, injector, {
                authority: [],
                level: [],
                description: [],
                group: [],
                mainMenus: [],
                extraMenus: [],
            }) || this;
            _this.injector = injector;
            _this.router = router;
            _this.route = route;
            _this.roleService = roleService;
            _this.action = 'Add';
            _this.dataDefault = [
                {
                    selected: false,
                },
            ];
            _this.loading = false;
            _this.tab = 'main';
            _this.mainData = [];
            _this.extraData = [];
            _this.apiSelectGroup = _this.api['security']['select-group'];
            if ((_this.route.snapshot.params['action'] === 'edit')) {
                _this.action = 'Edit';
                if (!_this.roleService.getRole()) {
                    _this.router.navigate(['/app/mgmt/role']);
                }
            }
            if (_this.roleService.getRole() && (_this.route.snapshot.params['action'] === 'edit')) {
                _this.title = _this.roleService.getRole().description;
                _this.formGroup.get('authority').setValue(_this.roleService.getRole().authority);
                _this.formGroup.get('authority').disable();
                _this.formGroup.get('level').setValue(_this.roleService.getRole().level);
                _this.formGroup.get('description').setValue(_this.roleService.getRole().description);
                _this.formGroup.get('group').setValue({
                    value: (_a = _this.roleService.getRole().group) === null || _a === void 0 ? void 0 : _a.code,
                    label: (_b = _this.roleService.getRole().group) === null || _b === void 0 ? void 0 : _b.name
                });
            }
            return _this;
        }
        RoleAddEditPageComponent.prototype.ngOnInit = function () { };
        RoleAddEditPageComponent.prototype.onReset = function () {
            this.router.navigate(['/app/mgmt/role']);
        };
        RoleAddEditPageComponent.prototype.onSubmit = function () {
            var _this = this;
            var group = new i5$1.SystemAuthority();
            if (this.formGroup.get('group').value['value']) {
                group.code = this.formGroup.get('group').value['value'];
                group.name = this.formGroup.get('group').value['label'];
            }
            var role = {
                authority: this.formGroup.get('authority').value,
                level: this.formGroup.get('level').value,
                description: this.formGroup.get('description').value,
                group: group,
            };
            var main = [];
            this.mainData.forEach(function (val) {
                main.push(val['id']);
                if (val['parentMenu']['id']) {
                    if (!main.includes(val['parentMenu']['id'])) {
                        main.push(val['parentMenu']['id']);
                    }
                }
            });
            var extra = [];
            this.extraData.forEach(function (val) {
                extra.push(val['id']);
                if (val['parentMenu']['id']) {
                    if (!extra.includes(val['parentMenu']['id'])) {
                        extra.push(val['parentMenu']['id']);
                    }
                }
            });
            var data = {
                role: role,
                main: main,
                extra: extra
            };
            _super.prototype.onSubmit.call(this, data, 'security', 'post-function-role')
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (response) {
                if (response.respStatusCode === i5$1.ResponseCode.OK_DEFAULT.toString()) {
                    _this.router.navigate(['/app/mgmt/role']);
                }
            });
        };
        RoleAddEditPageComponent.prototype.toggleLoadingAnimation = function (event) {
            var _this = this;
            this.tab = event.tabId;
            this.loading = true;
            if (this.tab === 'main') {
                if (this.roleService.getRole() && this.action === 'Edit') {
                    this.mainMenu.loadDataMenu(this.mainData)
                        .pipe(operators.takeUntil(this.destroy$))
                        .subscribe(function (value) {
                        _this.loading = false;
                        if (_this.mainData.length === 0) {
                            _this.mainData = value;
                            _this.formGroup.get('mainMenus').setValue(_this.mainData);
                        }
                    });
                }
                else {
                    this.mainMenu.initDataMenu(this.mainData)
                        .pipe(operators.takeUntil(this.destroy$))
                        .subscribe(function () {
                        _this.loading = false;
                    });
                }
            }
            else {
                if (this.roleService.getRole() && this.action === 'Edit') {
                    this.extraMenu.loadDataMenu(this.extraData)
                        .pipe(operators.takeUntil(this.destroy$))
                        .subscribe(function (value) {
                        _this.loading = false;
                        if (_this.extraData.length === 0) {
                            _this.extraData = value;
                            _this.formGroup.get('extraMenus').setValue(_this.extraData);
                        }
                    });
                }
                else {
                    this.extraMenu.initDataMenu(this.extraData)
                        .pipe(operators.takeUntil(this.destroy$))
                        .subscribe(function () {
                        _this.loading = false;
                    });
                }
            }
        };
        RoleAddEditPageComponent.prototype.onSelectMain = function (datas) {
            if (this.mainData.length !== datas.length) {
                this.disabled = false;
                this.formGroup.get('mainMenus').markAsDirty();
            }
            this.mainData = [];
            this.mainData = __spreadArray(__spreadArray([], __read(this.mainData)), __read(datas));
            this.formGroup.get('mainMenus').setValue(this.mainData);
        };
        RoleAddEditPageComponent.prototype.onSelectExtra = function (datas) {
            if (this.extraData.length !== datas.length) {
                this.disabled = false;
                this.formGroup.get('extraMenus').markAsDirty();
            }
            this.extraData = [];
            this.extraData = __spreadArray(__spreadArray([], __read(this.extraData)), __read(datas));
            this.formGroup.get('extraMenus').setValue(this.extraData);
        };
        return RoleAddEditPageComponent;
    }(i3.BaseFormComponent));
    RoleAddEditPageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: RoleAddEditPageComponent, deps: [{ token: i0__namespace.Injector }, { token: i1__namespace.Router }, { token: i1__namespace.ActivatedRoute }, { token: RoleService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    RoleAddEditPageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: RoleAddEditPageComponent, selector: "do-language-add-edit-page", viewQueries: [{ propertyName: "mainMenu", first: true, predicate: ["mainRole"], descendants: true, static: true }, { propertyName: "extraMenu", first: true, predicate: ["extraRole"], descendants: true, static: true }], usesInheritance: true, ngImport: i0__namespace, template: "<do-page-outlet [header]=\"'header.'+action+'-role'\" [url]=\"'/app/mgmt/role'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <form [formGroup]=\"formGroup\">\n        <do-input-text\n          [name]=\"'authority'\"\n          [label]=\"'Authority'\"\n          [required]=\"true\"\n          formControlName=\"authority\">\n        </do-input-text>\n        <do-input-text\n          [name]=\"'level'\"\n          [label]=\"'Level'\"\n          [required]=\"true\"\n          [type]=\"'number'\"\n          formControlName=\"level\">\n        </do-input-text>\n        <do-input-text\n          [name]=\"'description'\"\n          [label]=\"'Description'\"\n          [required]=\"true\"\n          formControlName=\"description\">\n        </do-input-text>\n        <do-select\n          [name]=\"'group'\"\n          [label]=\"'Group'\"\n          [required]=\"true\"\n          [searchable]=\"false\"\n          [api]=\"apiSelectGroup\"\n          formControlName=\"group\">\n        </do-select>\n      </form>\n    </div>\n    <div class=\"col-md-12 col-lg-12\">\n      <nb-tabset fullWidth (changeTab)=\"toggleLoadingAnimation($event)\">\n        <nb-tab tabId=\"main\" tabTitle=\"{{'tab.main-menu' | translate}}\" [nbSpinner]=\"loading\" nbSpinnerStatus=\"info\" nbSpinnerSize=\"giant\">\n          <do-role-main-page (onSelect)=\"onSelectMain($event)\" #mainRole></do-role-main-page>\n        </nb-tab>\n        <nb-tab tabId=\"extra\" tabTitle=\"{{'tab.extra-menu' | translate}}\" [lazyLoad]=\"true\" [nbSpinner]=\"loading\" nbSpinnerStatus=\"info\" nbSpinnerSize=\"giant\">\n          <do-role-extra-page (onSelect)=\"onSelectExtra($event)\" #extraRole></do-role-extra-page>\n        </nb-tab>\n      </nb-tabset>\n    </div>\n  </div>\n  <do-button-submit\n    [submitTitle]=\"action\"\n    [resetTitle]=\"'Cancel'\"\n    [formGroupButton]=\"formGroup\"\n    [disabledButton]=\"disabled\"\n    (onReset)=\"onReset()\"\n    (onSubmit)=\"onSubmit()\"\n    pagefooter>\n  </do-button-submit>\n</do-page-outlet>\n", styles: [".nb-theme-default :host nb-tab{flex:1;padding-top:1.5rem!important;padding-left:.25rem!important}.nb-theme-dark :host nb-tab{flex:1;padding-top:1.5rem!important;padding-left:.25rem!important}.nb-theme-cosmic :host nb-tab{flex:1;padding-top:1.5rem!important;padding-left:.25rem!important}.nb-theme-corporate :host nb-tab{flex:1;padding-top:1.5rem!important;padding-left:.25rem!important}\n"], components: [{ type: i3__namespace.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i3__namespace.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i3__namespace.DoSelectComponent, selector: "do-select", inputs: ["placeholder", "colLabel", "colInput", "items", "multiple", "loading", "addTag", "closeOnSelect", "clearable", "searchable", "hideSelected", "minTermLength", "maxTermLength", "api", "limit", "offsetNextLoad", "queryParam"], outputs: ["onSelect", "onClear"] }, { type: i1__namespace$1.NbTabsetComponent, selector: "nb-tabset", inputs: ["fullWidth", "routeParam"], outputs: ["changeTab"] }, { type: i1__namespace$1.NbTabComponent, selector: "nb-tab", inputs: ["badgeStatus", "badgeDot", "disabled", "responsive", "active", "lazyLoad", "tabTitle", "tabId", "tabIcon", "route", "badgeText", "badgePosition"] }, { type: RoleMainPageComponent, selector: "do-role-main-page", outputs: ["onSelect"] }, { type: RoleExtraPageComponent, selector: "do-role-extra-page", outputs: ["onSelect"] }, { type: i3__namespace.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i4__namespace.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i1__namespace$1.NbSpinnerDirective, selector: "[nbSpinner]", inputs: ["nbSpinnerStatus", "nbSpinnerSize", "nbSpinner", "nbSpinnerMessage"] }], pipes: { "translate": i6__namespace.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: RoleAddEditPageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-language-add-edit-page',
                        styleUrls: ['./role-add-edit-page.component.scss'],
                        templateUrl: './role-add-edit-page.component.html',
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }, { type: i1__namespace.Router }, { type: i1__namespace.ActivatedRoute }, { type: RoleService }]; }, propDecorators: { mainMenu: [{
                    type: i0.ViewChild,
                    args: ['mainRole', { static: true }]
                }], extraMenu: [{
                    type: i0.ViewChild,
                    args: ['extraRole', { static: true }]
                }] } });

    var routes$8 = [{
            path: '',
            component: MgmtRoleComponent,
            canActivateChild: [i1$2.AuthGuardChildService],
            children: [
                {
                    path: '',
                    component: RoleListPageComponent,
                    data: {
                        code: '#MANAGEMENT-ROLE-PAGE',
                    },
                },
                {
                    path: ':action',
                    component: RoleAddEditPageComponent,
                    data: {
                        code: '#MANAGEMENT-ROLE-PAGE',
                    },
                },
            ],
        }];
    var DoMgmtRoleRoutingModule = /** @class */ (function () {
        function DoMgmtRoleRoutingModule() {
        }
        return DoMgmtRoleRoutingModule;
    }());
    DoMgmtRoleRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtRoleRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DoMgmtRoleRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtRoleRoutingModule, imports: [i1__namespace.RouterModule], exports: [i1.RouterModule] });
    DoMgmtRoleRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtRoleRoutingModule, imports: [[i1.RouterModule.forChild(routes$8)], i1.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtRoleRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.RouterModule.forChild(routes$8)],
                        exports: [i1.RouterModule],
                    }]
            }] });

    var components$8 = [
        MgmtRoleComponent,
        RoleListPageComponent,
        RoleAddEditPageComponent,
        RoleExtraPageComponent,
        RoleMainPageComponent,
    ];
    var modules$8 = [
        i4.FormsModule,
        i4.ReactiveFormsModule,
        i6.TranslateModule,
        i1$1.NbCardModule,
        i1$1.NbAlertModule,
        i1$1.NbIconModule,
        i1$1.NbButtonModule,
        i1$1.NbDialogModule.forChild(),
        i1$1.NbTabsetModule,
        i1$1.NbSpinnerModule,
        i2.TreeNgxModule,
        doTheme.DoThemeModule,
        i3.DoInputModule,
        i3.DoCheckBoxModule,
        i3.DoButtonModule,
        i3.DoBaseModule,
        i3.DoSelectModule,
        i3.DoDatatableModule,
        DoMgmtRoleRoutingModule,
    ];
    var providers$8 = [
        RoleService,
    ];
    var DoMgmtRoleModule = /** @class */ (function () {
        function DoMgmtRoleModule() {
        }
        return DoMgmtRoleModule;
    }());
    DoMgmtRoleModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtRoleModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DoMgmtRoleModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtRoleModule, declarations: [MgmtRoleComponent,
            RoleListPageComponent,
            RoleAddEditPageComponent,
            RoleExtraPageComponent,
            RoleMainPageComponent], imports: [i4.FormsModule,
            i4.ReactiveFormsModule,
            i6.TranslateModule,
            i1$1.NbCardModule,
            i1$1.NbAlertModule,
            i1$1.NbIconModule,
            i1$1.NbButtonModule, i1__namespace$1.NbDialogModule, i1$1.NbTabsetModule,
            i1$1.NbSpinnerModule,
            i2.TreeNgxModule,
            doTheme.DoThemeModule,
            i3.DoInputModule,
            i3.DoCheckBoxModule,
            i3.DoButtonModule,
            i3.DoBaseModule,
            i3.DoSelectModule,
            i3.DoDatatableModule,
            DoMgmtRoleRoutingModule] });
    DoMgmtRoleModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtRoleModule, providers: __spreadArray([], __read(providers$8)), imports: [__spreadArray([], __read(modules$8))] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtRoleModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: __spreadArray([], __read(modules$8)),
                        declarations: __spreadArray([], __read(components$8)),
                        providers: __spreadArray([], __read(providers$8)),
                    }]
            }] });

    var MgmtCorporateComponent = /** @class */ (function () {
        function MgmtCorporateComponent() {
        }
        return MgmtCorporateComponent;
    }());
    MgmtCorporateComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: MgmtCorporateComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    MgmtCorporateComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: MgmtCorporateComponent, selector: "do-mgmt-corporate", ngImport: i0__namespace, template: "\n    <router-outlet></router-outlet>\n  ", isInline: true, directives: [{ type: i1__namespace.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: MgmtCorporateComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-mgmt-corporate',
                        template: "\n    <router-outlet></router-outlet>\n  ",
                    }]
            }] });

    var CorporateService = /** @class */ (function () {
        function CorporateService() {
        }
        CorporateService.prototype.getCorporate = function () {
            return this.corporate;
        };
        CorporateService.prototype.setCorporate = function (corporate) {
            this.corporate = corporate;
        };
        return CorporateService;
    }());
    CorporateService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: CorporateService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    CorporateService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: CorporateService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: CorporateService, decorators: [{
                type: i0.Injectable
            }] });

    var CorporateListPageComponent = /** @class */ (function (_super) {
        __extends(CorporateListPageComponent, _super);
        function CorporateListPageComponent(injector, router, corporateService, dialogService) {
            var _this = _super.call(this, injector, {
                corporateCode: [],
                corporateName: [],
            }) || this;
            _this.injector = injector;
            _this.router = router;
            _this.corporateService = corporateService;
            _this.dialogService = dialogService;
            _this.columns = [
                { name: 'Code', prop: 'corporateCode', width: 75, frozenLeft: true },
                { name: 'Name', prop: 'corporateName', width: 275, frozenLeft: true },
                { name: 'Telp', prop: 'telpNumber', width: 100, frozenLeft: true },
                { name: 'Fax', prop: 'faxNumber', width: 100, frozenLeft: true },
                { name: 'Email', prop: 'email', width: 175 },
                { name: 'Address', prop: 'address' },
                { name: 'Created', prop: 'createdBy' },
                { name: 'Created Date', prop: 'createdDate' },
                { name: 'Modified', prop: 'modifiedBy' },
                { name: 'Modified Date', prop: 'modifiedDate' },
            ];
            _this.reload = false;
            _this.expanded = false;
            _this.apiPath = _this.api['security']['datatable-corporate'];
            _this.apiPathDelete = _this.api['security']['delete-corporate'];
            _this.sort = {
                asc: ['corporateCode']
            };
            _this.filters = [
                { controlName: 'corporateCode', type: 'input' },
                { controlName: 'corporateName', type: 'input' }
            ];
            return _this;
        }
        CorporateListPageComponent.prototype.ngOnInit = function () {
        };
        CorporateListPageComponent.prototype.onAdd = function () {
            this.corporateService.setCorporate(null);
            this.router.navigate(['/app/mgmt/corporate', 'add']);
        };
        CorporateListPageComponent.prototype.onViewDetail = function (data) {
            this.corporateService.setCorporate(data);
            this.router.navigate(['/app/mgmt/corporate', 'edit']);
        };
        CorporateListPageComponent.prototype.onDeleteDialog = function (data, dialog) {
            var _this = this;
            this.reload = false;
            this.corporateCodes = [];
            data.forEach(function (value) {
                _this.corporateCodes.push(value.corporateCode);
            });
            this.dialogService.open(dialog, { context: 'alert.delete' });
        };
        CorporateListPageComponent.prototype.onDelete = function (ref) {
            var _this = this;
            this.disabled = true;
            this.http.HTTP_AUTH(this.apiPathDelete, this.corporateCodes)
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (success) {
                ref.close();
                _this.disabled = false;
                _this.reload = true;
                _this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
            }, function (error) {
                _this.disabled = false;
                _this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
            });
        };
        CorporateListPageComponent.prototype.onReset = function () {
            this.router.navigate(['/app/mgmt/corporate']);
        };
        return CorporateListPageComponent;
    }(i3.BaseFilterComponent));
    CorporateListPageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: CorporateListPageComponent, deps: [{ token: i0__namespace.Injector }, { token: i1__namespace.Router }, { token: CorporateService }, { token: i1__namespace$1.NbDialogService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    CorporateListPageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: CorporateListPageComponent, selector: "do-corporate-list-page", usesInheritance: true, ngImport: i0__namespace, template: "<do-page-outlet [header]=\"'header.corporate-management'\" [hidefooter]=\"true\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [sort]=\"sort\"\n        [reloadFn]=\"reload\"\n        (onAdd)=\"onAdd()\"\n        (onEdit)=\"onViewDetail($event)\"\n        (onDelete)=\"onDeleteDialog($event, dialogdelete)\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'corporateCode'\"\n            [label]=\"'Corporate Code'\"\n            formControlName=\"corporateCode\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'corporateName'\"\n            [label]=\"'Corporate Name'\"\n            formControlName=\"corporateName\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n\n<ng-template #dialogdelete let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"danger\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <do-button-submit\n        [colLabel]=\"0\"\n        [colButton]=\"12\"\n        [submitTitle]=\"'Delete'\"\n        [resetTitle]=\"'Cancel'\"\n        [disabledButton]=\"disabled\"\n        (onReset)=\"ref.close()\"\n        (onSubmit)=\"onDelete(ref)\">\n      </do-button-submit>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>\n", styles: [""], components: [{ type: i3__namespace.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i3__namespace.DoDatatableComponent, selector: "do-datatable", inputs: ["rows", "columns", "filters", "selected", "limit", "count", "offset", "externalPaging", "externalSorting", "loadingIndicator", "scrollbarH", "scrollbarV", "reorderable", "sortType", "messages", "selectionType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "header", "column", "footer", "add", "edit", "delete", "filter", "api", "startWithOpenData", "filterEvent", "formGroupFilter", "sort", "sortsDefault", "autoLoad", "filterFn", "filterDoFetchFn", "reloadFn"], outputs: ["onAdd", "onEdit", "onDelete", "onSearch", "onFilter", "onButtonCell", "onLoading", "onSelected"] }, { type: i3__namespace.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i1__namespace$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1__namespace$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1__namespace$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i1__namespace$1.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i3__namespace.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i4__namespace.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i6__namespace.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: CorporateListPageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-corporate-list-page',
                        styleUrls: ['./corporate-list-page.component.scss'],
                        templateUrl: './corporate-list-page.component.html',
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }, { type: i1__namespace.Router }, { type: CorporateService }, { type: i1__namespace$1.NbDialogService }]; } });

    var CorporateAddEditPageComponent = /** @class */ (function (_super) {
        __extends(CorporateAddEditPageComponent, _super);
        function CorporateAddEditPageComponent(injector, router, route, corporateService) {
            var _this = _super.call(this, injector, {
                corporateCode: [],
                corporateName: [],
                corporateNonExpired: [],
                email: [],
                address: [],
                telpNumber: [],
                faxNumber: [],
            }) || this;
            _this.injector = injector;
            _this.router = router;
            _this.route = route;
            _this.corporateService = corporateService;
            _this.action = 'Add';
            _this.patternEmail = i5$1.Pattern.EMAIL;
            _this.patternPhoneNumber = i5$1.Pattern.PHONE_NUMBER;
            _this.dataDefault = [
                {
                    id: 'corporateNonExpired',
                    selected: true,
                },
            ];
            if (_this.corporateService.getCorporate() || (_this.route.snapshot.params['action'] === 'add')) {
                if ((_this.route.snapshot.params['action'] === 'edit')) {
                    _this.action = 'Edit';
                    _this.formGroup.get('corporateCode').setValue(_this.corporateService.getCorporate().corporateCode);
                    _this.formGroup.get('corporateName').setValue(_this.corporateService.getCorporate().corporateName);
                    _this.formGroup.get('email').setValue(_this.corporateService.getCorporate().email);
                    _this.formGroup.get('address').setValue(_this.corporateService.getCorporate().address);
                    _this.formGroup.get('telpNumber').setValue(_this.corporateService.getCorporate().telpNumber);
                    _this.formGroup.get('faxNumber').setValue(_this.corporateService.getCorporate().faxNumber);
                    _this.formGroup.get('corporateNonExpired').setValue([{
                            id: 'corporateNonExpired',
                            selected: _this.corporateService.getCorporate().corporateNonExpired ? true : false,
                        }]);
                    _this.formGroup.get('corporateCode').disable();
                }
            }
            else {
                _this.router.navigate(['/app/mgmt/corporate']);
            }
            return _this;
        }
        CorporateAddEditPageComponent.prototype.ngOnInit = function () { };
        CorporateAddEditPageComponent.prototype.onReset = function () {
            this.router.navigate(['/app/mgmt/corporate']);
        };
        CorporateAddEditPageComponent.prototype.onSubmit = function () {
            var _this = this;
            var corporateNonExpired = this.formGroup.get('corporateNonExpired').value;
            var data = {
                corporateCode: this.formGroup.get('corporateCode').value,
                corporateName: this.formGroup.get('corporateName').value,
                corporateNonExpired: (corporateNonExpired ? true : false),
                email: this.formGroup.get('email').value,
                address: this.formGroup.get('address').value,
                telpNumber: this.formGroup.get('telpNumber').value,
                faxNumber: this.formGroup.get('faxNumber').value
            };
            _super.prototype.onSubmit.call(this, data, 'security', 'post-corporate')
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (response) {
                if (response.respStatusCode === i5$1.ResponseCode.OK_DEFAULT.toString()) {
                    _this.router.navigate(['/app/mgmt/corporate']);
                }
            });
        };
        return CorporateAddEditPageComponent;
    }(i3.BaseFormComponent));
    CorporateAddEditPageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: CorporateAddEditPageComponent, deps: [{ token: i0__namespace.Injector }, { token: i1__namespace.Router }, { token: i1__namespace.ActivatedRoute }, { token: CorporateService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    CorporateAddEditPageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: CorporateAddEditPageComponent, selector: "do-corporate-add-edit-page", usesInheritance: true, ngImport: i0__namespace, template: "<do-page-outlet [header]=\"'header.'+action+'-corporate'\" [url]=\"'/app/mgmt/corporate'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <form [formGroup]=\"formGroup\">\n        <do-input-text\n          [name]=\"'corporateCode'\"\n          [label]=\"'Corporate Code'\"\n          [required]=\"true\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"corporateCode\">\n        </do-input-text>\n        <do-input-text\n          [name]=\"'corporateName'\"\n          [label]=\"'Corporate Name'\"\n          [required]=\"true\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"corporateName\">\n        </do-input-text>\n        <do-checkbox\n          [name]=\"'corporateNonExpired'\"\n          [label]=\"'Non Expired'\"\n          [data]=\"dataDefault\"\n          formControlName=\"corporateNonExpired\">\n        </do-checkbox>\n        <do-input-text\n          [name]=\"'email'\"\n          [label]=\"'Email'\"\n          [required]=\"true\"\n          [pattern]=\"patternEmail\"\n          [paramError]=\"{value:5}\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"email\">\n        </do-input-text>\n        <do-textarea\n          [name]=\"'address'\"\n          [label]=\"'Address'\"\n          [required]=\"true\"\n          [minLength]=\"5\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"address\">\n        </do-textarea>\n        <do-input-text\n          [name]=\"'telpNumber'\"\n          [label]=\"'Telp.'\"\n          [required]=\"true\"\n          [pattern]=\"patternPhoneNumber\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"telpNumber\">\n        </do-input-text>\n        <do-input-text\n          [name]=\"'faxNumber'\"\n          [label]=\"'Fax.'\"\n          [pattern]=\"patternPhoneNumber\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"faxNumber\">\n        </do-input-text>\n      </form>\n    </div>\n  </div>\n  <do-button-submit\n    [submitTitle]=\"action\"\n    [resetTitle]=\"'Cancel'\"\n    [formGroupButton]=\"formGroup\"\n    [disabledButton]=\"disabled\"\n    (onReset)=\"onReset()\"\n    (onSubmit)=\"onSubmit()\"\n    pagefooter>\n  </do-button-submit>\n</do-page-outlet>\n", styles: [""], components: [{ type: i3__namespace.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i3__namespace.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i3__namespace.DoCheckboxComponent, selector: "do-checkbox", inputs: ["colLabel", "colInput", "data"], outputs: ["onChecked"] }, { type: i3__namespace.DoTextareaComponent, selector: "do-textarea", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "height"] }, { type: i3__namespace.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i4__namespace.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i4__namespace.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: CorporateAddEditPageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-corporate-add-edit-page',
                        styleUrls: ['./corporate-add-edit-page.component.scss'],
                        templateUrl: './corporate-add-edit-page.component.html',
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }, { type: i1__namespace.Router }, { type: i1__namespace.ActivatedRoute }, { type: CorporateService }]; } });

    var routes$7 = [{
            path: '',
            component: MgmtCorporateComponent,
            canActivateChild: [i1$2.AuthGuardChildService],
            children: [
                {
                    path: '',
                    component: CorporateListPageComponent,
                    data: {
                        code: '#MANAGEMENT-CORPORATE-PAGE',
                    },
                },
                {
                    path: ':action',
                    component: CorporateAddEditPageComponent,
                    data: {
                        code: '#MANAGEMENT-CORPORATE-PAGE',
                    },
                },
            ],
        }];
    var DoMgmtCorporateRoutingModule = /** @class */ (function () {
        function DoMgmtCorporateRoutingModule() {
        }
        return DoMgmtCorporateRoutingModule;
    }());
    DoMgmtCorporateRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtCorporateRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DoMgmtCorporateRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtCorporateRoutingModule, imports: [i1__namespace.RouterModule], exports: [i1.RouterModule] });
    DoMgmtCorporateRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtCorporateRoutingModule, imports: [[i1.RouterModule.forChild(routes$7)], i1.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtCorporateRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.RouterModule.forChild(routes$7)],
                        exports: [i1.RouterModule],
                    }]
            }] });

    var components$7 = [
        MgmtCorporateComponent,
        CorporateListPageComponent,
        CorporateAddEditPageComponent,
    ];
    var modules$7 = [
        i4.FormsModule,
        i4.ReactiveFormsModule,
        i6.TranslateModule,
        i1$1.NbCardModule,
        i1$1.NbAlertModule,
        i1$1.NbIconModule,
        i1$1.NbButtonModule,
        i1$1.NbDialogModule.forChild(),
        i1$1.NbTabsetModule,
        i1$1.NbSpinnerModule,
        doTheme.DoThemeModule,
        i3.DoInputModule,
        i3.DoCheckBoxModule,
        i3.DoButtonModule,
        i3.DoBaseModule,
        i3.DoSelectModule,
        i3.DoDatatableModule,
        i3.DoEditorModule,
        DoMgmtCorporateRoutingModule,
    ];
    var providers$7 = [
        CorporateService,
    ];
    var DoMgmtCorporateModule = /** @class */ (function () {
        function DoMgmtCorporateModule() {
        }
        return DoMgmtCorporateModule;
    }());
    DoMgmtCorporateModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtCorporateModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DoMgmtCorporateModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtCorporateModule, declarations: [MgmtCorporateComponent,
            CorporateListPageComponent,
            CorporateAddEditPageComponent], imports: [i4.FormsModule,
            i4.ReactiveFormsModule,
            i6.TranslateModule,
            i1$1.NbCardModule,
            i1$1.NbAlertModule,
            i1$1.NbIconModule,
            i1$1.NbButtonModule, i1__namespace$1.NbDialogModule, i1$1.NbTabsetModule,
            i1$1.NbSpinnerModule,
            doTheme.DoThemeModule,
            i3.DoInputModule,
            i3.DoCheckBoxModule,
            i3.DoButtonModule,
            i3.DoBaseModule,
            i3.DoSelectModule,
            i3.DoDatatableModule,
            i3.DoEditorModule,
            DoMgmtCorporateRoutingModule] });
    DoMgmtCorporateModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtCorporateModule, providers: __spreadArray([], __read(providers$7)), imports: [__spreadArray([], __read(modules$7))] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtCorporateModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: __spreadArray([], __read(modules$7)),
                        declarations: __spreadArray([], __read(components$7)),
                        providers: __spreadArray([], __read(providers$7)),
                    }]
            }] });

    var MgmtAppsComponent = /** @class */ (function () {
        function MgmtAppsComponent() {
        }
        return MgmtAppsComponent;
    }());
    MgmtAppsComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: MgmtAppsComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    MgmtAppsComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: MgmtAppsComponent, selector: "do-mgmt-apps", ngImport: i0__namespace, template: "\n    <router-outlet></router-outlet>\n  ", isInline: true, directives: [{ type: i1__namespace.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: MgmtAppsComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-mgmt-apps',
                        template: "\n    <router-outlet></router-outlet>\n  ",
                    }]
            }] });

    var AppsService = /** @class */ (function () {
        function AppsService() {
        }
        AppsService.prototype.getApps = function () {
            return this.apps;
        };
        AppsService.prototype.setApps = function (apps) {
            this.apps = apps;
        };
        return AppsService;
    }());
    AppsService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AppsService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AppsService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AppsService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AppsService, decorators: [{
                type: i0.Injectable
            }] });

    var AppsListPageComponent = /** @class */ (function (_super) {
        __extends(AppsListPageComponent, _super);
        function AppsListPageComponent(injector, router, appsService, dialogService) {
            var _this = _super.call(this, injector, {
                appCode: [],
                appName: [],
            }) || this;
            _this.injector = injector;
            _this.router = router;
            _this.appsService = appsService;
            _this.dialogService = dialogService;
            _this.columns = [
                { name: 'Code', prop: 'appCode', width: 150, frozenLeft: true },
                { name: 'Name', prop: 'appName', width: 150, frozenLeft: true },
                { name: 'Description', prop: 'description', width: 200, frozenLeft: true },
                { name: 'Created', prop: 'createdBy' },
                { name: 'Created Date', prop: 'createdDate' },
                { name: 'Modified', prop: 'modifiedBy' },
                { name: 'Modified Date', prop: 'modifiedDate' },
                { name: 'Active', prop: 'active' },
            ];
            _this.reload = false;
            _this.expanded = false;
            _this.apiPath = _this.api['security']['datatable-apps'];
            _this.apiPathDelete = _this.api['security']['delete-apps'];
            _this.sort = {
                asc: ['appCode']
            };
            _this.filters = [
                { controlName: 'appCode', type: 'input' },
                { controlName: 'appName', type: 'input' }
            ];
            return _this;
        }
        AppsListPageComponent.prototype.ngOnInit = function () {
        };
        AppsListPageComponent.prototype.onAdd = function () {
            this.appsService.setApps(null);
            this.router.navigate(['/app/mgmt/apps', 'add']);
        };
        AppsListPageComponent.prototype.onViewDetail = function (data) {
            this.appsService.setApps(data);
            this.router.navigate(['/app/mgmt/apps', 'edit']);
        };
        AppsListPageComponent.prototype.onDeleteDialog = function (data, dialog) {
            var _this = this;
            this.reload = false;
            this.appCodes = [];
            data.forEach(function (value) {
                _this.appCodes.push(value.appCode);
            });
            this.dialogService.open(dialog, { context: 'alert.delete' });
        };
        AppsListPageComponent.prototype.onDelete = function (ref) {
            var _this = this;
            this.disabled = true;
            this.http.HTTP_AUTH(this.apiPathDelete, this.appCodes)
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (success) {
                ref.close();
                _this.disabled = false;
                _this.reload = true;
                _this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
            }, function (error) {
                _this.disabled = false;
                _this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
            });
        };
        AppsListPageComponent.prototype.onReset = function () {
            this.router.navigate(['/app/mgmt/apps']);
        };
        return AppsListPageComponent;
    }(i3.BaseFilterComponent));
    AppsListPageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AppsListPageComponent, deps: [{ token: i0__namespace.Injector }, { token: i1__namespace.Router }, { token: AppsService }, { token: i1__namespace$1.NbDialogService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    AppsListPageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: AppsListPageComponent, selector: "do-apps-list-page", usesInheritance: true, ngImport: i0__namespace, template: "<do-page-outlet [header]=\"'header.apps-management'\" [hidefooter]=\"true\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [sort]=\"sort\"\n        [reloadFn]=\"reload\"\n        (onAdd)=\"onAdd()\"\n        (onEdit)=\"onViewDetail($event)\"\n        (onDelete)=\"onDeleteDialog($event, dialogdelete)\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'appCode'\"\n            [label]=\"'App Code'\"\n            formControlName=\"appCode\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'appName'\"\n            [label]=\"'App Name'\"\n            formControlName=\"appName\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n\n<ng-template #dialogdelete let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"danger\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <do-button-submit\n        [colLabel]=\"0\"\n        [colButton]=\"12\"\n        [submitTitle]=\"'Delete'\"\n        [resetTitle]=\"'Cancel'\"\n        [disabledButton]=\"disabled\"\n        (onReset)=\"ref.close()\"\n        (onSubmit)=\"onDelete(ref)\">\n      </do-button-submit>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>\n", styles: [""], components: [{ type: i3__namespace.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i3__namespace.DoDatatableComponent, selector: "do-datatable", inputs: ["rows", "columns", "filters", "selected", "limit", "count", "offset", "externalPaging", "externalSorting", "loadingIndicator", "scrollbarH", "scrollbarV", "reorderable", "sortType", "messages", "selectionType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "header", "column", "footer", "add", "edit", "delete", "filter", "api", "startWithOpenData", "filterEvent", "formGroupFilter", "sort", "sortsDefault", "autoLoad", "filterFn", "filterDoFetchFn", "reloadFn"], outputs: ["onAdd", "onEdit", "onDelete", "onSearch", "onFilter", "onButtonCell", "onLoading", "onSelected"] }, { type: i3__namespace.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i1__namespace$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1__namespace$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1__namespace$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i1__namespace$1.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i3__namespace.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i4__namespace.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i6__namespace.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AppsListPageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-apps-list-page',
                        styleUrls: ['./apps-list-page.component.scss'],
                        templateUrl: './apps-list-page.component.html',
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }, { type: i1__namespace.Router }, { type: AppsService }, { type: i1__namespace$1.NbDialogService }]; } });

    var AppsAddEditPageComponent = /** @class */ (function (_super) {
        __extends(AppsAddEditPageComponent, _super);
        function AppsAddEditPageComponent(injector, router, route, appsService) {
            var _this = _super.call(this, injector, {
                appCode: [],
                appName: [],
                description: [],
            }) || this;
            _this.injector = injector;
            _this.router = router;
            _this.route = route;
            _this.appsService = appsService;
            _this.action = 'Add';
            if (_this.appsService.getApps() || (_this.route.snapshot.params['action'] === 'add')) {
                if ((_this.route.snapshot.params['action'] === 'edit')) {
                    _this.action = 'Edit';
                    _this.formGroup.get('appCode').setValue(_this.appsService.getApps().appCode);
                    _this.formGroup.get('appName').setValue(_this.appsService.getApps().appName);
                    _this.formGroup.get('description').setValue(_this.appsService.getApps().description);
                    _this.formGroup.get('appCode').disable();
                }
            }
            else {
                _this.router.navigate(['/app/mgmt/apps']);
            }
            return _this;
        }
        AppsAddEditPageComponent.prototype.ngOnInit = function () { };
        AppsAddEditPageComponent.prototype.onReset = function () {
            this.router.navigate(['/app/mgmt/apps']);
        };
        AppsAddEditPageComponent.prototype.onSubmit = function () {
            var _this = this;
            var data = {
                appCode: this.formGroup.get('appCode').value,
                appName: this.formGroup.get('appName').value,
                description: this.formGroup.get('description').value,
            };
            _super.prototype.onSubmit.call(this, data, 'security', 'post-apps')
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (response) {
                if (response.respStatusCode === i5$1.ResponseCode.OK_DEFAULT.toString()) {
                    _this.router.navigate(['/app/mgmt/apps']);
                }
            });
        };
        return AppsAddEditPageComponent;
    }(i3.BaseFormComponent));
    AppsAddEditPageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AppsAddEditPageComponent, deps: [{ token: i0__namespace.Injector }, { token: i1__namespace.Router }, { token: i1__namespace.ActivatedRoute }, { token: AppsService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    AppsAddEditPageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: AppsAddEditPageComponent, selector: "do-apps-add-edit-page", usesInheritance: true, ngImport: i0__namespace, template: "<do-page-outlet [header]=\"'header.'+action+'-apps'\" [url]=\"'/app/mgmt/apps'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <form [formGroup]=\"formGroup\">\n        <do-input-text\n          [name]=\"'appCode'\"\n          [label]=\"'App Code'\"\n          [required]=\"true\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"appCode\">\n        </do-input-text>\n        <do-input-text\n          [name]=\"'appName'\"\n          [label]=\"'App Name'\"\n          [required]=\"true\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"appName\">\n        </do-input-text>\n        <do-textarea\n          [name]=\"'description'\"\n          [label]=\"'Description'\"\n          [minLength]=\"5\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"description\">\n        </do-textarea>\n      </form>\n    </div>\n  </div>\n  <do-button-submit\n    [submitTitle]=\"action\"\n    [resetTitle]=\"'Cancel'\"\n    [formGroupButton]=\"formGroup\"\n    [disabledButton]=\"disabled\"\n    (onReset)=\"onReset()\"\n    (onSubmit)=\"onSubmit()\"\n    pagefooter>\n  </do-button-submit>\n</do-page-outlet>\n", styles: [""], components: [{ type: i3__namespace.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i3__namespace.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i3__namespace.DoTextareaComponent, selector: "do-textarea", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "height"] }, { type: i3__namespace.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i4__namespace.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AppsAddEditPageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-apps-add-edit-page',
                        styleUrls: ['./apps-add-edit-page.component.scss'],
                        templateUrl: './apps-add-edit-page.component.html',
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }, { type: i1__namespace.Router }, { type: i1__namespace.ActivatedRoute }, { type: AppsService }]; } });

    var routes$6 = [{
            path: '',
            component: MgmtAppsComponent,
            canActivateChild: [i1$2.AuthGuardChildService],
            children: [
                {
                    path: '',
                    component: AppsListPageComponent,
                    data: {
                        code: '#MANAGEMENT-APPS-PAGE',
                    },
                },
                {
                    path: ':action',
                    component: AppsAddEditPageComponent,
                    data: {
                        code: '#MANAGEMENT-APPS-PAGE',
                    },
                },
            ],
        }];
    var DoMgmtAppsRoutingModule = /** @class */ (function () {
        function DoMgmtAppsRoutingModule() {
        }
        return DoMgmtAppsRoutingModule;
    }());
    DoMgmtAppsRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtAppsRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DoMgmtAppsRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtAppsRoutingModule, imports: [i1__namespace.RouterModule], exports: [i1.RouterModule] });
    DoMgmtAppsRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtAppsRoutingModule, imports: [[i1.RouterModule.forChild(routes$6)], i1.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtAppsRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.RouterModule.forChild(routes$6)],
                        exports: [i1.RouterModule],
                    }]
            }] });

    var components$6 = [
        MgmtAppsComponent,
        AppsListPageComponent,
        AppsAddEditPageComponent,
    ];
    var modules$6 = [
        i4.FormsModule,
        i4.ReactiveFormsModule,
        i6.TranslateModule,
        i1$1.NbCardModule,
        i1$1.NbAlertModule,
        i1$1.NbIconModule,
        i1$1.NbButtonModule,
        i1$1.NbDialogModule.forChild(),
        i1$1.NbTabsetModule,
        i1$1.NbSpinnerModule,
        doTheme.DoThemeModule,
        i3.DoInputModule,
        i3.DoCheckBoxModule,
        i3.DoButtonModule,
        i3.DoBaseModule,
        i3.DoSelectModule,
        i3.DoDatatableModule,
        i3.DoEditorModule,
        DoMgmtAppsRoutingModule,
    ];
    var providers$6 = [
        AppsService,
    ];
    var DoMgmtAppsModule = /** @class */ (function () {
        function DoMgmtAppsModule() {
        }
        return DoMgmtAppsModule;
    }());
    DoMgmtAppsModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtAppsModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DoMgmtAppsModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtAppsModule, declarations: [MgmtAppsComponent,
            AppsListPageComponent,
            AppsAddEditPageComponent], imports: [i4.FormsModule,
            i4.ReactiveFormsModule,
            i6.TranslateModule,
            i1$1.NbCardModule,
            i1$1.NbAlertModule,
            i1$1.NbIconModule,
            i1$1.NbButtonModule, i1__namespace$1.NbDialogModule, i1$1.NbTabsetModule,
            i1$1.NbSpinnerModule,
            doTheme.DoThemeModule,
            i3.DoInputModule,
            i3.DoCheckBoxModule,
            i3.DoButtonModule,
            i3.DoBaseModule,
            i3.DoSelectModule,
            i3.DoDatatableModule,
            i3.DoEditorModule,
            DoMgmtAppsRoutingModule] });
    DoMgmtAppsModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtAppsModule, providers: __spreadArray([], __read(providers$6)), imports: [__spreadArray([], __read(modules$6))] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtAppsModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: __spreadArray([], __read(modules$6)),
                        declarations: __spreadArray([], __read(components$6)),
                        providers: __spreadArray([], __read(providers$6)),
                    }]
            }] });

    var MgmtOccupationComponent = /** @class */ (function () {
        function MgmtOccupationComponent() {
        }
        return MgmtOccupationComponent;
    }());
    MgmtOccupationComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: MgmtOccupationComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    MgmtOccupationComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: MgmtOccupationComponent, selector: "do-mgmt-occupation", ngImport: i0__namespace, template: "\n    <router-outlet></router-outlet>\n  ", isInline: true, directives: [{ type: i1__namespace.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: MgmtOccupationComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-mgmt-occupation',
                        template: "\n    <router-outlet></router-outlet>\n  ",
                    }]
            }] });

    var OccupationService = /** @class */ (function () {
        function OccupationService() {
        }
        OccupationService.prototype.getOccupation = function () {
            return this.occupation;
        };
        OccupationService.prototype.setOccupation = function (occupation) {
            this.occupation = occupation;
        };
        return OccupationService;
    }());
    OccupationService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: OccupationService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    OccupationService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: OccupationService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: OccupationService, decorators: [{
                type: i0.Injectable
            }] });

    var OccupationListPageComponent = /** @class */ (function (_super) {
        __extends(OccupationListPageComponent, _super);
        function OccupationListPageComponent(injector, router, occupationService, dialogService) {
            var _this = _super.call(this, injector, {
                code: [],
                name: [],
            }) || this;
            _this.injector = injector;
            _this.router = router;
            _this.occupationService = occupationService;
            _this.dialogService = dialogService;
            _this.columns = [
                { name: 'Code', prop: 'code', width: 225, frozenLeft: true },
                { name: 'Name', prop: 'name', width: 225, frozenLeft: true },
                { name: 'Created', prop: 'createdBy' },
                { name: 'Created Date', prop: 'createdDate' },
                { name: 'Modified', prop: 'modifiedBy' },
                { name: 'Modified Date', prop: 'modifiedDate' },
            ];
            _this.reload = false;
            _this.expanded = false;
            _this.apiPath = _this.api['security']['datatable-occupation'];
            _this.apiPathDelete = _this.api['security']['delete-occupation'];
            _this.sort = {
                asc: ['code']
            };
            _this.filters = [
                { controlName: 'code', type: 'input' },
                { controlName: 'name', type: 'input' }
            ];
            return _this;
        }
        OccupationListPageComponent.prototype.ngOnInit = function () {
        };
        OccupationListPageComponent.prototype.onAdd = function () {
            this.occupationService.setOccupation(null);
            this.router.navigate(['/app/mgmt/occupation', 'add']);
        };
        OccupationListPageComponent.prototype.onViewDetail = function (data) {
            this.occupationService.setOccupation(data);
            this.router.navigate(['/app/mgmt/occupation', 'edit']);
        };
        OccupationListPageComponent.prototype.onDeleteDialog = function (data, dialog) {
            var _this = this;
            this.reload = false;
            this.occupationCodes = [];
            data.forEach(function (value) {
                _this.occupationCodes.push(value.code);
            });
            this.dialogService.open(dialog, { context: 'alert.delete' });
        };
        OccupationListPageComponent.prototype.onDelete = function (ref) {
            var _this = this;
            this.disabled = true;
            this.http.HTTP_AUTH(this.apiPathDelete, this.occupationCodes)
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (success) {
                ref.close();
                _this.disabled = false;
                _this.reload = true;
                _this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
            }, function (error) {
                _this.disabled = false;
                _this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
            });
        };
        OccupationListPageComponent.prototype.onReset = function () {
            this.router.navigate(['/app/mgmt/occupation']);
        };
        return OccupationListPageComponent;
    }(i3.BaseFilterComponent));
    OccupationListPageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: OccupationListPageComponent, deps: [{ token: i0__namespace.Injector }, { token: i1__namespace.Router }, { token: OccupationService }, { token: i1__namespace$1.NbDialogService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    OccupationListPageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: OccupationListPageComponent, selector: "do-occupation-list-page", usesInheritance: true, ngImport: i0__namespace, template: "<do-page-outlet [header]=\"'header.occupation-management'\" [hidefooter]=\"true\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [sort]=\"sort\"\n        [reloadFn]=\"reload\"\n        (onAdd)=\"onAdd()\"\n        (onEdit)=\"onViewDetail($event)\"\n        (onDelete)=\"onDeleteDialog($event, dialogdelete)\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'code'\"\n            [label]=\"'Occupation Code'\"\n            formControlName=\"code\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'name'\"\n            [label]=\"'Occupation Name'\"\n            formControlName=\"name\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n\n<ng-template #dialogdelete let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"danger\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <do-button-submit\n        [colLabel]=\"0\"\n        [colButton]=\"12\"\n        [submitTitle]=\"'Delete'\"\n        [resetTitle]=\"'Cancel'\"\n        [disabledButton]=\"disabled\"\n        (onReset)=\"ref.close()\"\n        (onSubmit)=\"onDelete(ref)\">\n      </do-button-submit>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>\n", styles: [""], components: [{ type: i3__namespace.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i3__namespace.DoDatatableComponent, selector: "do-datatable", inputs: ["rows", "columns", "filters", "selected", "limit", "count", "offset", "externalPaging", "externalSorting", "loadingIndicator", "scrollbarH", "scrollbarV", "reorderable", "sortType", "messages", "selectionType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "header", "column", "footer", "add", "edit", "delete", "filter", "api", "startWithOpenData", "filterEvent", "formGroupFilter", "sort", "sortsDefault", "autoLoad", "filterFn", "filterDoFetchFn", "reloadFn"], outputs: ["onAdd", "onEdit", "onDelete", "onSearch", "onFilter", "onButtonCell", "onLoading", "onSelected"] }, { type: i3__namespace.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i1__namespace$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1__namespace$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1__namespace$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i1__namespace$1.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i3__namespace.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i4__namespace.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i6__namespace.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: OccupationListPageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-occupation-list-page',
                        styleUrls: ['./occupation-list-page.component.scss'],
                        templateUrl: './occupation-list-page.component.html',
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }, { type: i1__namespace.Router }, { type: OccupationService }, { type: i1__namespace$1.NbDialogService }]; } });

    var OccupationAddEditPageComponent = /** @class */ (function (_super) {
        __extends(OccupationAddEditPageComponent, _super);
        function OccupationAddEditPageComponent(injector, router, route, occupationService) {
            var _this = _super.call(this, injector, {
                code: [],
                name: [],
            }) || this;
            _this.injector = injector;
            _this.router = router;
            _this.route = route;
            _this.occupationService = occupationService;
            _this.action = 'Add';
            _this.dataDefault = [
                {
                    selected: true,
                },
            ];
            if (_this.occupationService.getOccupation() || (_this.route.snapshot.params['action'] === 'add')) {
                if ((_this.route.snapshot.params['action'] === 'edit')) {
                    _this.action = 'Edit';
                    _this.formGroup.get('code').setValue(_this.occupationService.getOccupation().code);
                    _this.formGroup.get('name').setValue(_this.occupationService.getOccupation().name);
                    _this.formGroup.get('code').disable();
                }
            }
            else {
                _this.router.navigate(['/app/mgmt/occupation']);
            }
            return _this;
        }
        OccupationAddEditPageComponent.prototype.ngOnInit = function () { };
        OccupationAddEditPageComponent.prototype.onReset = function () {
            this.router.navigate(['/app/mgmt/occupation']);
        };
        OccupationAddEditPageComponent.prototype.onSubmit = function () {
            var _this = this;
            var data = {
                code: this.formGroup.get('code').value,
                name: this.formGroup.get('name').value,
            };
            _super.prototype.onSubmit.call(this, data, 'security', 'post-occupation')
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (response) {
                if (response.respStatusCode === i5$1.ResponseCode.OK_DEFAULT.toString()) {
                    _this.router.navigate(['/app/mgmt/occupation']);
                }
            });
        };
        return OccupationAddEditPageComponent;
    }(i3.BaseFormComponent));
    OccupationAddEditPageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: OccupationAddEditPageComponent, deps: [{ token: i0__namespace.Injector }, { token: i1__namespace.Router }, { token: i1__namespace.ActivatedRoute }, { token: OccupationService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    OccupationAddEditPageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: OccupationAddEditPageComponent, selector: "do-occupation-add-edit-page", usesInheritance: true, ngImport: i0__namespace, template: "<do-page-outlet [header]=\"'header.'+action+'-occupation'\" [url]=\"'/app/mgmt/occupation'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <form [formGroup]=\"formGroup\">\n        <do-input-text\n          [name]=\"'code'\"\n          [label]=\"'Occupation Code'\"\n          [required]=\"true\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"code\">\n        </do-input-text>\n        <do-input-text\n          [name]=\"'name'\"\n          [label]=\"'Occupation Name'\"\n          [required]=\"true\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"name\">\n        </do-input-text>\n      </form>\n    </div>\n  </div>\n  <do-button-submit\n    [submitTitle]=\"action\"\n    [resetTitle]=\"'Cancel'\"\n    [formGroupButton]=\"formGroup\"\n    [disabledButton]=\"disabled\"\n    (onReset)=\"onReset()\"\n    (onSubmit)=\"onSubmit()\"\n    pagefooter>\n  </do-button-submit>\n</do-page-outlet>\n", styles: [""], components: [{ type: i3__namespace.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i3__namespace.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i3__namespace.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i4__namespace.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: OccupationAddEditPageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-occupation-add-edit-page',
                        styleUrls: ['./occupation-add-edit-page.component.scss'],
                        templateUrl: './occupation-add-edit-page.component.html',
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }, { type: i1__namespace.Router }, { type: i1__namespace.ActivatedRoute }, { type: OccupationService }]; } });

    var routes$5 = [{
            path: '',
            component: MgmtOccupationComponent,
            canActivateChild: [i1$2.AuthGuardChildService],
            children: [
                {
                    path: '',
                    component: OccupationListPageComponent,
                    data: {
                        code: '#MANAGEMENT-OCCUPATION-PAGE',
                    },
                },
                {
                    path: ':action',
                    component: OccupationAddEditPageComponent,
                    data: {
                        code: '#MANAGEMENT-OCCUPATION-PAGE',
                    },
                },
            ],
        }];
    var DoMgmtOccupationRoutingModule = /** @class */ (function () {
        function DoMgmtOccupationRoutingModule() {
        }
        return DoMgmtOccupationRoutingModule;
    }());
    DoMgmtOccupationRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtOccupationRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DoMgmtOccupationRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtOccupationRoutingModule, imports: [i1__namespace.RouterModule], exports: [i1.RouterModule] });
    DoMgmtOccupationRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtOccupationRoutingModule, imports: [[i1.RouterModule.forChild(routes$5)], i1.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtOccupationRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.RouterModule.forChild(routes$5)],
                        exports: [i1.RouterModule],
                    }]
            }] });

    var components$5 = [
        MgmtOccupationComponent,
        OccupationListPageComponent,
        OccupationAddEditPageComponent,
    ];
    var modules$5 = [
        i4.FormsModule,
        i4.ReactiveFormsModule,
        i6.TranslateModule,
        i1$1.NbCardModule,
        i1$1.NbAlertModule,
        i1$1.NbIconModule,
        i1$1.NbButtonModule,
        i1$1.NbDialogModule.forChild(),
        i1$1.NbTabsetModule,
        i1$1.NbSpinnerModule,
        doTheme.DoThemeModule,
        i3.DoInputModule,
        i3.DoCheckBoxModule,
        i3.DoButtonModule,
        i3.DoBaseModule,
        i3.DoSelectModule,
        i3.DoDatatableModule,
        i3.DoEditorModule,
        DoMgmtOccupationRoutingModule,
    ];
    var providers$5 = [
        OccupationService,
    ];
    var DoMgmtOccupationModule = /** @class */ (function () {
        function DoMgmtOccupationModule() {
        }
        return DoMgmtOccupationModule;
    }());
    DoMgmtOccupationModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtOccupationModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DoMgmtOccupationModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtOccupationModule, declarations: [MgmtOccupationComponent,
            OccupationListPageComponent,
            OccupationAddEditPageComponent], imports: [i4.FormsModule,
            i4.ReactiveFormsModule,
            i6.TranslateModule,
            i1$1.NbCardModule,
            i1$1.NbAlertModule,
            i1$1.NbIconModule,
            i1$1.NbButtonModule, i1__namespace$1.NbDialogModule, i1$1.NbTabsetModule,
            i1$1.NbSpinnerModule,
            doTheme.DoThemeModule,
            i3.DoInputModule,
            i3.DoCheckBoxModule,
            i3.DoButtonModule,
            i3.DoBaseModule,
            i3.DoSelectModule,
            i3.DoDatatableModule,
            i3.DoEditorModule,
            DoMgmtOccupationRoutingModule] });
    DoMgmtOccupationModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtOccupationModule, providers: __spreadArray([], __read(providers$5)), imports: [__spreadArray([], __read(modules$5))] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtOccupationModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: __spreadArray([], __read(modules$5)),
                        declarations: __spreadArray([], __read(components$5)),
                        providers: __spreadArray([], __read(providers$5)),
                    }]
            }] });

    var MgmtBusinessPartnerComponent = /** @class */ (function () {
        function MgmtBusinessPartnerComponent() {
        }
        return MgmtBusinessPartnerComponent;
    }());
    MgmtBusinessPartnerComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: MgmtBusinessPartnerComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    MgmtBusinessPartnerComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: MgmtBusinessPartnerComponent, selector: "do-mgmt-business-partner", ngImport: i0__namespace, template: "\n    <router-outlet></router-outlet>\n  ", isInline: true, directives: [{ type: i1__namespace.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: MgmtBusinessPartnerComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-mgmt-business-partner',
                        template: "\n    <router-outlet></router-outlet>\n  ",
                    }]
            }] });

    var BusinessPartnerService = /** @class */ (function () {
        function BusinessPartnerService() {
        }
        BusinessPartnerService.prototype.getB2B = function () {
            return this.b2b;
        };
        BusinessPartnerService.prototype.setB2B = function (b2b) {
            this.b2b = b2b;
        };
        return BusinessPartnerService;
    }());
    BusinessPartnerService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: BusinessPartnerService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    BusinessPartnerService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: BusinessPartnerService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: BusinessPartnerService, decorators: [{
                type: i0.Injectable
            }] });

    var BusinessPartnerListPageComponent = /** @class */ (function (_super) {
        __extends(BusinessPartnerListPageComponent, _super);
        function BusinessPartnerListPageComponent(injector, router, businessPartnerService) {
            var _this = _super.call(this, injector, {
                bpName: [],
            }) || this;
            _this.injector = injector;
            _this.router = router;
            _this.businessPartnerService = businessPartnerService;
            _this.selectionType = ngxDatatable.SelectionType.single;
            _this.columns = [
                { name: 'Business Partner', prop: 'businessPartner.bpName', width: 275, frozenLeft: true },
                { name: 'Telp', prop: 'businessPartner.telpNumber', width: 100, frozenLeft: true },
                { name: 'Fax', prop: 'businessPartner.faxNumber', width: 100, frozenLeft: true },
                { name: 'Email', prop: 'businessPartner.email', width: 175 },
                { name: 'Address', prop: 'businessPartner.address' },
                { name: 'Created', prop: 'createdBy' },
                { name: 'Created Date', prop: 'createdDate' },
                { name: 'Modified', prop: 'modifiedBy' },
                { name: 'Modified Date', prop: 'modifiedDate' },
            ];
            _this.expanded = false;
            _this.sort = {
                asc: ['businessPartner.bpName']
            };
            _this.apiPath = _this.api['master']['datatable-business-partner'];
            _this.filters = [
                { controlName: 'bpName', type: 'input' }
            ];
            return _this;
        }
        BusinessPartnerListPageComponent.prototype.ngOnInit = function () {
        };
        BusinessPartnerListPageComponent.prototype.onAdd = function () {
            this.businessPartnerService.setB2B(null);
            this.router.navigate(['/app/mgmt/business-partner', 'add']);
        };
        BusinessPartnerListPageComponent.prototype.onViewDetail = function (data) {
            this.businessPartnerService.setB2B(data);
            this.router.navigate(['/app/mgmt/business-partner', 'edit']);
        };
        BusinessPartnerListPageComponent.prototype.onReset = function () {
            this.router.navigate(['/app/mgmt/business-partner']);
        };
        return BusinessPartnerListPageComponent;
    }(i3.BaseFilterComponent));
    BusinessPartnerListPageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: BusinessPartnerListPageComponent, deps: [{ token: i0__namespace.Injector }, { token: i1__namespace.Router }, { token: BusinessPartnerService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    BusinessPartnerListPageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: BusinessPartnerListPageComponent, selector: "do-business-partner-list-page", usesInheritance: true, ngImport: i0__namespace, template: "<do-page-outlet [header]=\"'header.business-partner-management'\" [hidefooter]=\"true\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [sort]=\"sort\"\n        [delete]=\"false\"\n        [selectionType]=\"selectionType\"\n        (onAdd)=\"onAdd()\"\n        (onEdit)=\"onViewDetail($event)\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'bpName'\"\n            [label]=\"'Business Partner'\"\n            formControlName=\"bpName\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n", styles: [""], components: [{ type: i3__namespace.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i3__namespace.DoDatatableComponent, selector: "do-datatable", inputs: ["rows", "columns", "filters", "selected", "limit", "count", "offset", "externalPaging", "externalSorting", "loadingIndicator", "scrollbarH", "scrollbarV", "reorderable", "sortType", "messages", "selectionType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "header", "column", "footer", "add", "edit", "delete", "filter", "api", "startWithOpenData", "filterEvent", "formGroupFilter", "sort", "sortsDefault", "autoLoad", "filterFn", "filterDoFetchFn", "reloadFn"], outputs: ["onAdd", "onEdit", "onDelete", "onSearch", "onFilter", "onButtonCell", "onLoading", "onSelected"] }, { type: i3__namespace.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }], directives: [{ type: i4__namespace.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: BusinessPartnerListPageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-business-partner-list-page',
                        styleUrls: ['./business-partner-list-page.component.scss'],
                        templateUrl: './business-partner-list-page.component.html',
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }, { type: i1__namespace.Router }, { type: BusinessPartnerService }]; } });

    var BusinessPartnerAddEditPageComponent = /** @class */ (function (_super) {
        __extends(BusinessPartnerAddEditPageComponent, _super);
        function BusinessPartnerAddEditPageComponent(injector, router, route, businessPartnerService) {
            var _this = _super.call(this, injector, {
                bpName: [],
                email: [],
                address: [],
                telpNumber: [],
                faxNumber: [],
                b2bNonExpired: [],
                expiredTime: [],
            }) || this;
            _this.injector = injector;
            _this.router = router;
            _this.route = route;
            _this.businessPartnerService = businessPartnerService;
            _this.action = 'Add';
            _this.patternEmail = i5$1.Pattern.EMAIL;
            _this.patternPhoneNumber = i5$1.Pattern.PHONE_NUMBER;
            _this.dataDefault = [
                {
                    id: 'b2bNonExpired',
                    selected: true,
                },
            ];
            _this.isB2bNonExpired = true;
            if (_this.businessPartnerService.getB2B() || (_this.route.snapshot.params['action'] === 'add')) {
                if ((_this.route.snapshot.params['action'] === 'edit')) {
                    _this.action = 'Edit';
                    _this.formGroup.get('bpName').setValue(_this.businessPartnerService.getB2B().businessPartner.bpName);
                    _this.formGroup.get('email').setValue(_this.businessPartnerService.getB2B().businessPartner.email);
                    _this.formGroup.get('address').setValue(_this.businessPartnerService.getB2B().businessPartner.address);
                    _this.formGroup.get('telpNumber').setValue(_this.businessPartnerService.getB2B().businessPartner.telpNumber);
                    _this.formGroup.get('faxNumber').setValue(_this.businessPartnerService.getB2B().businessPartner.faxNumber);
                    _this.formGroup.get('b2bNonExpired').setValue([{
                            id: 'b2bNonExpired',
                            selected: _this.businessPartnerService.getB2B().b2bNonExpired ? true : false,
                        }]);
                    _this.formGroup.get('expiredTime').setValue(_this.businessPartnerService.getB2B().expiredTime);
                    _this.isB2bNonExpired = _this.businessPartnerService.getB2B().b2bNonExpired;
                }
                else {
                    _this.formGroup.get('b2bNonExpired').setValue(_this.dataDefault);
                }
            }
            else {
                _this.router.navigate(['/app/mgmt/business-partner']);
            }
            return _this;
        }
        BusinessPartnerAddEditPageComponent.prototype.ngOnInit = function () { };
        BusinessPartnerAddEditPageComponent.prototype.onReset = function () {
            this.router.navigate(['/app/mgmt/business-partner']);
        };
        BusinessPartnerAddEditPageComponent.prototype.onCheckB2bNonExpired = function (event) {
            this.isB2bNonExpired = event ? true : false;
        };
        BusinessPartnerAddEditPageComponent.prototype.onSubmit = function () {
            var _this = this;
            var _a;
            var b2bNonExpired = this.formGroup.get('b2bNonExpired').value;
            var data = {
                id: (_a = this.businessPartnerService.getB2B()) === null || _a === void 0 ? void 0 : _a.id,
                b2bNonExpired: (b2bNonExpired ? true : false),
                expiredTime: !this.isB2bNonExpired ? this.formGroup.get('expiredTime').value : null,
                businessPartner: {
                    bpName: this.formGroup.get('bpName').value,
                    email: this.formGroup.get('email').value,
                    address: this.formGroup.get('address').value,
                    telpNumber: this.formGroup.get('telpNumber').value,
                    faxNumber: this.formGroup.get('faxNumber').value
                },
            };
            _super.prototype.onSubmit.call(this, data, 'master', 'post-business-partner')
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (response) {
                if (response.respStatusCode === i5$1.ResponseCode.OK_DEFAULT.toString()) {
                    _this.router.navigate(['/app/mgmt/business-partner']);
                }
            });
        };
        return BusinessPartnerAddEditPageComponent;
    }(i3.BaseFormComponent));
    BusinessPartnerAddEditPageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: BusinessPartnerAddEditPageComponent, deps: [{ token: i0__namespace.Injector }, { token: i1__namespace.Router }, { token: i1__namespace.ActivatedRoute }, { token: BusinessPartnerService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    BusinessPartnerAddEditPageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: BusinessPartnerAddEditPageComponent, selector: "do-business-partner-add-edit-page", usesInheritance: true, ngImport: i0__namespace, template: "<do-page-outlet [header]=\"'header.'+action+'-business-partner'\" [url]=\"'/app/mgmt/business-partner'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <form [formGroup]=\"formGroup\">\n        <do-input-text\n          [name]=\"'bpName'\"\n          [label]=\"'Business Partner Name'\"\n          [required]=\"true\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"bpName\">\n        </do-input-text>\n        <do-checkbox\n          [name]=\"'b2bNonExpired'\"\n          [label]=\"'Non Expired'\"\n          [data]=\"dataDefault\"\n          (onChecked)=\"onCheckB2bNonExpired($event)\"\n          formControlName=\"b2bNonExpired\">\n        </do-checkbox>\n        <do-datepicker\n          [show]=\"!isB2bNonExpired\"\n          [name]=\"'expiredTime'\"\n          [label]=\"'Expired Date'\"\n          [required]=\"!isB2bNonExpired\"\n          formControlName=\"expiredTime\">\n        </do-datepicker>\n        <do-input-text\n          [name]=\"'email'\"\n          [label]=\"'Email'\"\n          [required]=\"true\"\n          [pattern]=\"patternEmail\"\n          [paramError]=\"{value:5}\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"email\">\n        </do-input-text>\n        <do-textarea\n          [name]=\"'address'\"\n          [label]=\"'Address'\"\n          [required]=\"true\"\n          [minLength]=\"5\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"address\">\n        </do-textarea>\n        <do-input-text\n          [name]=\"'telpNumber'\"\n          [label]=\"'Telp.'\"\n          [required]=\"true\"\n          [pattern]=\"patternPhoneNumber\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"telpNumber\">\n        </do-input-text>\n        <do-input-text\n          [name]=\"'faxNumber'\"\n          [label]=\"'Fax.'\"\n          [pattern]=\"patternPhoneNumber\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"faxNumber\">\n        </do-input-text>\n      </form>\n    </div>\n  </div>\n  <do-button-submit\n    [submitTitle]=\"action\"\n    [resetTitle]=\"'Cancel'\"\n    [formGroupButton]=\"formGroup\"\n    [disabledButton]=\"disabled\"\n    (onReset)=\"onReset()\"\n    (onSubmit)=\"onSubmit()\"\n    pagefooter>\n  </do-button-submit>\n</do-page-outlet>\n", styles: [""], components: [{ type: i3__namespace.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i3__namespace.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i3__namespace.DoCheckboxComponent, selector: "do-checkbox", inputs: ["colLabel", "colInput", "data"], outputs: ["onChecked"] }, { type: i3__namespace.DoDatePickerComponent, selector: "do-datepicker", inputs: ["placeholder", "colLabel", "colInput", "min", "max", "size", "dateMask"] }, { type: i3__namespace.DoTextareaComponent, selector: "do-textarea", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "height"] }, { type: i3__namespace.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i4__namespace.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i4__namespace.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: BusinessPartnerAddEditPageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-business-partner-add-edit-page',
                        styleUrls: ['./business-partner-add-edit-page.component.scss'],
                        templateUrl: './business-partner-add-edit-page.component.html',
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }, { type: i1__namespace.Router }, { type: i1__namespace.ActivatedRoute }, { type: BusinessPartnerService }]; } });

    var routes$4 = [{
            path: '',
            component: MgmtBusinessPartnerComponent,
            canActivateChild: [i1$2.AuthGuardChildService],
            children: [
                {
                    path: '',
                    component: BusinessPartnerListPageComponent,
                    data: {
                        code: '#MANAGEMENT-BP-PAGE',
                    },
                },
                {
                    path: ':action',
                    component: BusinessPartnerAddEditPageComponent,
                    data: {
                        code: '#MANAGEMENT-BP-PAGE',
                    },
                },
            ],
        }];
    var DoMgmtBusinessPartnerRoutingModule = /** @class */ (function () {
        function DoMgmtBusinessPartnerRoutingModule() {
        }
        return DoMgmtBusinessPartnerRoutingModule;
    }());
    DoMgmtBusinessPartnerRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtBusinessPartnerRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DoMgmtBusinessPartnerRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtBusinessPartnerRoutingModule, imports: [i1__namespace.RouterModule], exports: [i1.RouterModule] });
    DoMgmtBusinessPartnerRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtBusinessPartnerRoutingModule, imports: [[i1.RouterModule.forChild(routes$4)], i1.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtBusinessPartnerRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.RouterModule.forChild(routes$4)],
                        exports: [i1.RouterModule],
                    }]
            }] });

    var components$4 = [
        MgmtBusinessPartnerComponent,
        BusinessPartnerListPageComponent,
        BusinessPartnerAddEditPageComponent,
    ];
    var modules$4 = [
        i4.FormsModule,
        i4.ReactiveFormsModule,
        i6.TranslateModule,
        i1$1.NbCardModule,
        i1$1.NbAlertModule,
        i1$1.NbIconModule,
        i1$1.NbButtonModule,
        i1$1.NbDialogModule.forChild(),
        i1$1.NbTabsetModule,
        i1$1.NbSpinnerModule,
        doTheme.DoThemeModule,
        i3.DoInputModule,
        i3.DoCheckBoxModule,
        i3.DoButtonModule,
        i3.DoBaseModule,
        i3.DoSelectModule,
        i3.DoDatatableModule,
        i3.DoEditorModule,
        i3.DoDatePickerModule,
        DoMgmtBusinessPartnerRoutingModule,
    ];
    var providers$4 = [
        BusinessPartnerService,
    ];
    var DoMgmtBusinessPartnerModule = /** @class */ (function () {
        function DoMgmtBusinessPartnerModule() {
        }
        return DoMgmtBusinessPartnerModule;
    }());
    DoMgmtBusinessPartnerModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtBusinessPartnerModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DoMgmtBusinessPartnerModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtBusinessPartnerModule, declarations: [MgmtBusinessPartnerComponent,
            BusinessPartnerListPageComponent,
            BusinessPartnerAddEditPageComponent], imports: [i4.FormsModule,
            i4.ReactiveFormsModule,
            i6.TranslateModule,
            i1$1.NbCardModule,
            i1$1.NbAlertModule,
            i1$1.NbIconModule,
            i1$1.NbButtonModule, i1__namespace$1.NbDialogModule, i1$1.NbTabsetModule,
            i1$1.NbSpinnerModule,
            doTheme.DoThemeModule,
            i3.DoInputModule,
            i3.DoCheckBoxModule,
            i3.DoButtonModule,
            i3.DoBaseModule,
            i3.DoSelectModule,
            i3.DoDatatableModule,
            i3.DoEditorModule,
            i3.DoDatePickerModule,
            DoMgmtBusinessPartnerRoutingModule] });
    DoMgmtBusinessPartnerModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtBusinessPartnerModule, providers: __spreadArray([], __read(providers$4)), imports: [__spreadArray([], __read(modules$4))] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtBusinessPartnerModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: __spreadArray([], __read(modules$4)),
                        declarations: __spreadArray([], __read(components$4)),
                        providers: __spreadArray([], __read(providers$4)),
                    }]
            }] });

    var MgmtInventoryComponent = /** @class */ (function () {
        function MgmtInventoryComponent() {
        }
        return MgmtInventoryComponent;
    }());
    MgmtInventoryComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: MgmtInventoryComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    MgmtInventoryComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: MgmtInventoryComponent, selector: "do-mgmt-inventory", ngImport: i0__namespace, template: "\n    <router-outlet></router-outlet>\n  ", isInline: true, directives: [{ type: i1__namespace.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: MgmtInventoryComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-mgmt-inventory',
                        template: "\n    <router-outlet></router-outlet>\n  ",
                    }]
            }] });

    var InventoryService = /** @class */ (function () {
        function InventoryService() {
        }
        InventoryService.prototype.getAsset = function () {
            return this.asset;
        };
        InventoryService.prototype.setAsset = function (asset) {
            this.asset = asset;
        };
        return InventoryService;
    }());
    InventoryService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: InventoryService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    InventoryService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: InventoryService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: InventoryService, decorators: [{
                type: i0.Injectable
            }] });

    var InventoryListPageComponent = /** @class */ (function (_super) {
        __extends(InventoryListPageComponent, _super);
        function InventoryListPageComponent(injector, router, inventoryService, dialogService) {
            var _this = _super.call(this, injector, {
                assetName: [],
                assetCondition: [],
            }) || this;
            _this.injector = injector;
            _this.router = router;
            _this.inventoryService = inventoryService;
            _this.dialogService = dialogService;
            _this.columns = [
                { name: 'Asset Name', prop: 'assetName', width: 175, frozenLeft: true },
                { name: 'Condition', prop: 'assetConditionValue', width: 100, frozenLeft: true },
                { name: 'Quantity', prop: 'quantity', width: 75, frozenLeft: true },
                { name: 'Location', prop: 'location', width: 225, frozenLeft: true },
                { name: 'Created', prop: 'createdBy' },
                { name: 'Created Date', prop: 'createdDate' },
                { name: 'Modified', prop: 'modifiedBy' },
                { name: 'Modified Date', prop: 'modifiedDate' },
            ];
            _this.reload = false;
            _this.expanded = false;
            _this.apiPath = _this.api['master']['datatable-inventory'];
            _this.apiPathDelete = _this.api['master']['delete-inventory'];
            _this.sort = {
                asc: ['businessPartner.bpName']
            };
            _this.filters = [
                { controlName: 'assetName', type: 'input' },
                { controlName: 'assetCondition', type: 'input' }
            ];
            return _this;
        }
        InventoryListPageComponent.prototype.ngOnInit = function () {
        };
        InventoryListPageComponent.prototype.onAdd = function () {
            this.inventoryService.setAsset(null);
            this.router.navigate(['/app/mgmt/inventory', 'add']);
        };
        InventoryListPageComponent.prototype.onViewDetail = function (data) {
            this.inventoryService.setAsset(data);
            this.router.navigate(['/app/mgmt/inventory', 'edit']);
        };
        InventoryListPageComponent.prototype.onDeleteDialog = function (data, dialog) {
            var _this = this;
            this.reload = false;
            this.assetIds = [];
            data.forEach(function (value) {
                _this.assetIds.push(value.id);
            });
            this.dialogService.open(dialog, { context: 'alert.delete' });
        };
        InventoryListPageComponent.prototype.onDelete = function (ref) {
            var _this = this;
            this.disabled = true;
            this.http.HTTP_AUTH(this.apiPathDelete, this.assetIds)
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (success) {
                ref.close();
                _this.disabled = false;
                _this.reload = true;
                _this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
            }, function (error) {
                _this.disabled = false;
                _this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
            });
        };
        InventoryListPageComponent.prototype.onReset = function () {
            this.router.navigate(['/app/mgmt/inventory']);
        };
        return InventoryListPageComponent;
    }(i3.BaseFilterComponent));
    InventoryListPageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: InventoryListPageComponent, deps: [{ token: i0__namespace.Injector }, { token: i1__namespace.Router }, { token: InventoryService }, { token: i1__namespace$1.NbDialogService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    InventoryListPageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: InventoryListPageComponent, selector: "do-inventory-list-page", usesInheritance: true, ngImport: i0__namespace, template: "<do-page-outlet [header]=\"'header.inventory-management'\" [hidefooter]=\"true\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [sort]=\"sort\"\n        [reloadFn]=\"reload\"\n        (onAdd)=\"onAdd()\"\n        (onEdit)=\"onViewDetail($event)\"\n        (onDelete)=\"onDeleteDialog($event, dialogdelete)\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'assetName'\"\n            [label]=\"'Asset Name'\"\n            formControlName=\"assetName\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'assetCondition'\"\n            [label]=\"'Condition'\"\n            formControlName=\"assetCondition\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n\n<ng-template #dialogdelete let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"danger\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <do-button-submit\n        [colLabel]=\"0\"\n        [colButton]=\"12\"\n        [submitTitle]=\"'Delete'\"\n        [resetTitle]=\"'Cancel'\"\n        [disabledButton]=\"disabled\"\n        (onReset)=\"ref.close()\"\n        (onSubmit)=\"onDelete(ref)\">\n      </do-button-submit>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>\n", styles: [""], components: [{ type: i3__namespace.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i3__namespace.DoDatatableComponent, selector: "do-datatable", inputs: ["rows", "columns", "filters", "selected", "limit", "count", "offset", "externalPaging", "externalSorting", "loadingIndicator", "scrollbarH", "scrollbarV", "reorderable", "sortType", "messages", "selectionType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "header", "column", "footer", "add", "edit", "delete", "filter", "api", "startWithOpenData", "filterEvent", "formGroupFilter", "sort", "sortsDefault", "autoLoad", "filterFn", "filterDoFetchFn", "reloadFn"], outputs: ["onAdd", "onEdit", "onDelete", "onSearch", "onFilter", "onButtonCell", "onLoading", "onSelected"] }, { type: i3__namespace.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i1__namespace$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1__namespace$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1__namespace$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i1__namespace$1.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i3__namespace.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i4__namespace.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i6__namespace.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: InventoryListPageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-inventory-list-page',
                        styleUrls: ['./inventory-list-page.component.scss'],
                        templateUrl: './inventory-list-page.component.html',
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }, { type: i1__namespace.Router }, { type: InventoryService }, { type: i1__namespace$1.NbDialogService }]; } });

    var InventoryAddEditPageComponent = /** @class */ (function (_super) {
        __extends(InventoryAddEditPageComponent, _super);
        function InventoryAddEditPageComponent(injector, router, route, inventoryService) {
            var _this = this;
            var _a, _b, _c;
            _this = _super.call(this, injector, {
                assetName: [],
                assetCondition: [],
                quantity: [],
                description: [],
                atOffice: [],
                businessPartner: [],
            }) || this;
            _this.injector = injector;
            _this.router = router;
            _this.route = route;
            _this.inventoryService = inventoryService;
            _this.action = 'Add';
            _this.dataDefault = [
                {
                    id: 'atOffice',
                    name: 'At Office',
                    selected: true,
                },
            ];
            _this.isAtOffice = true;
            if (_this.inventoryService.getAsset() || (_this.route.snapshot.params['action'] === 'add')) {
                _this.apiSelectCondition = _this.api['master']['select-parameter'];
                _this.paramSelectCondition = [{
                        key: 'parameterGroupCode',
                        value: 'ASSET_CONDITION',
                    }];
                _this.apiSelectBusinessPartner = _this.api['master']['select-business-partner'];
                if ((_this.route.snapshot.params['action'] === 'edit')) {
                    _this.action = 'Edit';
                    _this.formGroup.get('assetName').setValue(_this.inventoryService.getAsset().assetName);
                    _this.formGroup.controls['assetCondition'].setValue({
                        label: (_a = _this.inventoryService.getAsset()) === null || _a === void 0 ? void 0 : _a.assetConditionValue,
                        value: (_b = _this.inventoryService.getAsset()) === null || _b === void 0 ? void 0 : _b.assetConditionCode
                    });
                    _this.formGroup.get('quantity').setValue(_this.inventoryService.getAsset().quantity);
                    _this.formGroup.get('description').setValue(_this.inventoryService.getAsset().description);
                    _this.formGroup.get('atOffice').setValue([{
                            id: 'atOffice',
                            name: 'At Office',
                            selected: _this.inventoryService.getAsset().businessPartner ? false : true,
                        }]);
                    _this.isAtOffice = _this.inventoryService.getAsset().businessPartner ? false : true;
                    if (!_this.isAtOffice) {
                        _this.formGroup.get('businessPartner').setValue((_c = _this.inventoryService.getAsset()) === null || _c === void 0 ? void 0 : _c.businessPartner['bpName']);
                    }
                }
                else {
                    _this.formGroup.get('atOffice').setValue(_this.dataDefault);
                }
            }
            else {
                _this.router.navigate(['/app/mgmt/inventory']);
            }
            return _this;
        }
        InventoryAddEditPageComponent.prototype.ngOnInit = function () { };
        InventoryAddEditPageComponent.prototype.onReset = function () {
            this.router.navigate(['/app/mgmt/inventory']);
        };
        InventoryAddEditPageComponent.prototype.onCheckAtOffice = function (event) {
            this.isAtOffice = event ? true : false;
        };
        InventoryAddEditPageComponent.prototype.onSubmit = function () {
            var _this = this;
            var _a, _b, _c, _d;
            var atOffice = this.formGroup.get('atOffice').value;
            var businessPartner = null;
            if (!atOffice) {
                if (this.formGroup.get('businessPartner').value || ((_a = this.inventoryService.getAsset()) === null || _a === void 0 ? void 0 : _a.businessPartner)) {
                    businessPartner = {
                        id: this.formGroup.get('businessPartner').value['value'] ?
                            this.formGroup.get('businessPartner').value['value'] : (_b = this.inventoryService.getAsset()) === null || _b === void 0 ? void 0 : _b.businessPartner['id'],
                        bpName: this.formGroup.get('businessPartner').value['label'] ?
                            this.formGroup.get('businessPartner').value['label'] : (_c = this.inventoryService.getAsset()) === null || _c === void 0 ? void 0 : _c.businessPartner['bpName'],
                    };
                }
            }
            var data = {
                id: (_d = this.inventoryService.getAsset()) === null || _d === void 0 ? void 0 : _d.id,
                assetName: this.formGroup.get('assetName').value,
                assetConditionCode: this.selectValue('assetCondition'),
                assetConditionValue: this.selectLabel('assetCondition'),
                quantity: this.formGroup.get('quantity').value,
                description: this.formGroup.get('description').value,
                businessPartner: businessPartner,
            };
            _super.prototype.onSubmit.call(this, data, 'master', 'post-inventory')
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (response) {
                if (response.respStatusCode === i5$1.ResponseCode.OK_DEFAULT.toString()) {
                    _this.router.navigate(['/app/mgmt/inventory']);
                }
            });
        };
        InventoryAddEditPageComponent.prototype.selectLabel = function (prop) {
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
        InventoryAddEditPageComponent.prototype.selectValue = function (prop) {
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
        return InventoryAddEditPageComponent;
    }(i3.BaseFormComponent));
    InventoryAddEditPageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: InventoryAddEditPageComponent, deps: [{ token: i0__namespace.Injector }, { token: i1__namespace.Router }, { token: i1__namespace.ActivatedRoute }, { token: InventoryService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    InventoryAddEditPageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: InventoryAddEditPageComponent, selector: "do-inventory-add-edit-page", usesInheritance: true, ngImport: i0__namespace, template: "<do-page-outlet [header]=\"'header.'+action+'-inventory'\" [url]=\"'/app/mgmt/inventory'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <form [formGroup]=\"formGroup\">\n        <do-input-text\n          [name]=\"'assetName'\"\n          [label]=\"'Asset Name'\"\n          [required]=\"true\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"assetName\">\n        </do-input-text>\n        <do-select\n          [name]=\"'assetCondition'\"\n          [label]=\"'Condition'\"\n          [required]=\"true\"\n          [api]=\"apiSelectCondition\"\n          [queryParam]=\"paramSelectCondition\"\n          [searchable]=\"false\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"assetCondition\">\n        </do-select>\n        <do-input-text\n          [name]=\"'quantity'\"\n          [label]=\"'Quantity'\"\n          [type]=\"'number'\"\n          [required]=\"true\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"quantity\">\n        </do-input-text>\n        <do-checkbox\n          [name]=\"'atOffice'\"\n          [label]=\"'Location'\"\n          [data]=\"dataDefault\"\n          (onChecked)=\"onCheckAtOffice($event)\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"atOffice\">\n        </do-checkbox>\n        <do-select\n          [show]=\"!isAtOffice\"\n          [name]=\"'businessPartner'\"\n          [nolabel]=\"true\"\n          [required]=\"!isAtOffice\"\n          [api]=\"apiSelectBusinessPartner\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"businessPartner\">\n        </do-select>\n        <do-textarea\n          [name]=\"'description'\"\n          [label]=\"'Description'\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"description\">\n        </do-textarea>\n      </form>\n    </div>\n  </div>\n  <do-button-submit\n    [submitTitle]=\"action\"\n    [resetTitle]=\"'Cancel'\"\n    [formGroupButton]=\"formGroup\"\n    [disabledButton]=\"disabled\"\n    (onReset)=\"onReset()\"\n    (onSubmit)=\"onSubmit()\"\n    pagefooter>\n  </do-button-submit>\n</do-page-outlet>\n", styles: [""], components: [{ type: i3__namespace.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i3__namespace.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i3__namespace.DoSelectComponent, selector: "do-select", inputs: ["placeholder", "colLabel", "colInput", "items", "multiple", "loading", "addTag", "closeOnSelect", "clearable", "searchable", "hideSelected", "minTermLength", "maxTermLength", "api", "limit", "offsetNextLoad", "queryParam"], outputs: ["onSelect", "onClear"] }, { type: i3__namespace.DoCheckboxComponent, selector: "do-checkbox", inputs: ["colLabel", "colInput", "data"], outputs: ["onChecked"] }, { type: i3__namespace.DoTextareaComponent, selector: "do-textarea", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "height"] }, { type: i3__namespace.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i4__namespace.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: InventoryAddEditPageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-inventory-add-edit-page',
                        styleUrls: ['./inventory-add-edit-page.component.scss'],
                        templateUrl: './inventory-add-edit-page.component.html',
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }, { type: i1__namespace.Router }, { type: i1__namespace.ActivatedRoute }, { type: InventoryService }]; } });

    var routes$3 = [{
            path: '',
            component: MgmtInventoryComponent,
            canActivateChild: [i1$2.AuthGuardChildService],
            children: [
                {
                    path: '',
                    component: InventoryListPageComponent,
                    data: {
                        code: '#MANAGEMENT-INVENTORY-PAGE',
                    },
                },
                {
                    path: ':action',
                    component: InventoryAddEditPageComponent,
                    data: {
                        code: '#MANAGEMENT-INVENTORY-PAGE',
                    },
                },
            ],
        }];
    var DoMgmtInventoryRoutingModule = /** @class */ (function () {
        function DoMgmtInventoryRoutingModule() {
        }
        return DoMgmtInventoryRoutingModule;
    }());
    DoMgmtInventoryRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtInventoryRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DoMgmtInventoryRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtInventoryRoutingModule, imports: [i1__namespace.RouterModule], exports: [i1.RouterModule] });
    DoMgmtInventoryRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtInventoryRoutingModule, imports: [[i1.RouterModule.forChild(routes$3)], i1.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtInventoryRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.RouterModule.forChild(routes$3)],
                        exports: [i1.RouterModule],
                    }]
            }] });

    var components$3 = [
        MgmtInventoryComponent,
        InventoryListPageComponent,
        InventoryAddEditPageComponent,
    ];
    var modules$3 = [
        i4.FormsModule,
        i4.ReactiveFormsModule,
        i6.TranslateModule,
        i1$1.NbCardModule,
        i1$1.NbAlertModule,
        i1$1.NbIconModule,
        i1$1.NbButtonModule,
        i1$1.NbDialogModule.forChild(),
        i1$1.NbTabsetModule,
        i1$1.NbSpinnerModule,
        doTheme.DoThemeModule,
        i3.DoInputModule,
        i3.DoCheckBoxModule,
        i3.DoButtonModule,
        i3.DoBaseModule,
        i3.DoSelectModule,
        i3.DoDatatableModule,
        i3.DoEditorModule,
        DoMgmtInventoryRoutingModule,
    ];
    var providers$3 = [
        InventoryService,
    ];
    var DoMgmtInventoryModule = /** @class */ (function () {
        function DoMgmtInventoryModule() {
        }
        return DoMgmtInventoryModule;
    }());
    DoMgmtInventoryModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtInventoryModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DoMgmtInventoryModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtInventoryModule, declarations: [MgmtInventoryComponent,
            InventoryListPageComponent,
            InventoryAddEditPageComponent], imports: [i4.FormsModule,
            i4.ReactiveFormsModule,
            i6.TranslateModule,
            i1$1.NbCardModule,
            i1$1.NbAlertModule,
            i1$1.NbIconModule,
            i1$1.NbButtonModule, i1__namespace$1.NbDialogModule, i1$1.NbTabsetModule,
            i1$1.NbSpinnerModule,
            doTheme.DoThemeModule,
            i3.DoInputModule,
            i3.DoCheckBoxModule,
            i3.DoButtonModule,
            i3.DoBaseModule,
            i3.DoSelectModule,
            i3.DoDatatableModule,
            i3.DoEditorModule,
            DoMgmtInventoryRoutingModule] });
    DoMgmtInventoryModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtInventoryModule, providers: __spreadArray([], __read(providers$3)), imports: [__spreadArray([], __read(modules$3))] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtInventoryModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: __spreadArray([], __read(modules$3)),
                        declarations: __spreadArray([], __read(components$3)),
                        providers: __spreadArray([], __read(providers$3)),
                    }]
            }] });

    var MgmtEmployeeComponent = /** @class */ (function () {
        function MgmtEmployeeComponent() {
        }
        return MgmtEmployeeComponent;
    }());
    MgmtEmployeeComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: MgmtEmployeeComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    MgmtEmployeeComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: MgmtEmployeeComponent, selector: "do-mgmt-employee", ngImport: i0__namespace, template: "\n    <router-outlet></router-outlet>\n  ", isInline: true, directives: [{ type: i1__namespace.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: MgmtEmployeeComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-mgmt-employee',
                        template: "\n    <router-outlet></router-outlet>\n  ",
                    }]
            }] });

    var EmployeeService = /** @class */ (function () {
        function EmployeeService() {
        }
        EmployeeService.prototype.getEmployeeHeader = function () {
            return this.employeeHeader;
        };
        EmployeeService.prototype.setEmployeeHeader = function (employeeHeader) {
            this.employeeHeader = employeeHeader;
        };
        return EmployeeService;
    }());
    EmployeeService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EmployeeService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    EmployeeService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EmployeeService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EmployeeService, decorators: [{
                type: i0.Injectable
            }] });

    var EmployeeListPageComponent = /** @class */ (function (_super) {
        __extends(EmployeeListPageComponent, _super);
        function EmployeeListPageComponent(injector, router, employeeService) {
            var _this = _super.call(this, injector, {
                idEmployee: [],
                fullname: [],
                occupationName: [],
            }) || this;
            _this.injector = injector;
            _this.router = router;
            _this.employeeService = employeeService;
            _this.columns = [
                { name: 'NIK', prop: 'idEmployee', width: 50, frozenLeft: true, sortable: true },
                { name: 'Name', prop: 'user.fullname', width: 155, frozenLeft: true, sortable: true },
                { name: 'Occupation', prop: 'occupationName', width: 155, frozenLeft: true },
                { name: 'Phone Number', prop: 'phoneNumber' },
                { name: 'Email', prop: 'user.email' },
                { name: 'Address', prop: 'address' },
            ];
            _this.reload = false;
            _this.expanded = false;
            _this.selectionType = ngxDatatable.SelectionType.single;
            _this.apiPath = _this.api['security']['datatable-employee'];
            _this.sort = {
                asc: ['user.fullname']
            };
            _this.sortsDefault = [
                { prop: 'user.fullname', dir: 'asc' }
            ];
            _this.filters = [
                { controlName: 'idEmployee', type: 'input' },
                { controlName: 'fullname', type: 'input' },
                { controlName: 'occupationName', type: 'input' }
            ];
            return _this;
        }
        EmployeeListPageComponent.prototype.ngOnInit = function () {
        };
        EmployeeListPageComponent.prototype.onAdd = function () {
            this.employeeService.setEmployeeHeader(null);
            this.router.navigate(['/app/mgmt/employee', 'add']);
        };
        EmployeeListPageComponent.prototype.onViewDetail = function (data) {
            this.employeeService.setEmployeeHeader(data);
            this.router.navigate(['/app/mgmt/employee', 'edit']);
        };
        EmployeeListPageComponent.prototype.onReset = function () {
            this.router.navigate(['/app/mgmt/employee']);
        };
        return EmployeeListPageComponent;
    }(i3.BaseFilterComponent));
    EmployeeListPageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EmployeeListPageComponent, deps: [{ token: i0__namespace.Injector }, { token: i1__namespace.Router }, { token: EmployeeService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    EmployeeListPageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeListPageComponent, selector: "do-employee-list-page", usesInheritance: true, ngImport: i0__namespace, template: "<do-page-outlet [header]=\"'header.employee-management'\" [hidefooter]=\"true\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [sort]=\"sort\"\n        [sortsDefault]=\"sortsDefault\"\n        [reloadFn]=\"reload\"\n        [selectionType]=\"selectionType\"\n        [delete]=\"false\"\n        (onAdd)=\"onAdd()\"\n        (onEdit)=\"onViewDetail($event)\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'fullname'\"\n            [label]=\"'Name'\"\n            formControlName=\"fullname\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'idEmployee'\"\n            [label]=\"'NIK'\"\n            formControlName=\"idEmployee\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'occupationName'\"\n            [label]=\"'Occupation Name'\"\n            formControlName=\"occupationName\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n\n", styles: [""], components: [{ type: i3__namespace.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i3__namespace.DoDatatableComponent, selector: "do-datatable", inputs: ["rows", "columns", "filters", "selected", "limit", "count", "offset", "externalPaging", "externalSorting", "loadingIndicator", "scrollbarH", "scrollbarV", "reorderable", "sortType", "messages", "selectionType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "header", "column", "footer", "add", "edit", "delete", "filter", "api", "startWithOpenData", "filterEvent", "formGroupFilter", "sort", "sortsDefault", "autoLoad", "filterFn", "filterDoFetchFn", "reloadFn"], outputs: ["onAdd", "onEdit", "onDelete", "onSearch", "onFilter", "onButtonCell", "onLoading", "onSelected"] }, { type: i3__namespace.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }], directives: [{ type: i4__namespace.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EmployeeListPageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-employee-list-page',
                        styleUrls: ['./employee-list-page.component.scss'],
                        templateUrl: './employee-list-page.component.html',
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }, { type: i1__namespace.Router }, { type: EmployeeService }]; } });

    var EmployeeAddPageComponent = /** @class */ (function (_super) {
        __extends(EmployeeAddPageComponent, _super);
        function EmployeeAddPageComponent(injector, service, router) {
            var _this = _super.call(this, injector) || this;
            _this.injector = injector;
            _this.service = service;
            _this.router = router;
            return _this;
        }
        EmployeeAddPageComponent.prototype.formIsValid = function () {
            return this.service.formIsValid();
        };
        EmployeeAddPageComponent.prototype.onSubmit = function (data) {
            var _this = this;
            var _a, _b, _c, _d, _e, _f, _g, _h;
            var employee = {
                fullname: data['personal-information']['name'],
                username: data['personal-information']['email'],
                email: data['personal-information']['email'],
                idEmployee: data['personal-information']['nik'],
                lastEducation: (_a = data['education']['educationalLevel']) === null || _a === void 0 ? void 0 : _a.value,
                parentId: (_b = data['employee-status']['employeeParent']) === null || _b === void 0 ? void 0 : _b.value,
                roles: null,
                occupation: {
                    code: (_c = data['employee-status']['occupation']) === null || _c === void 0 ? void 0 : _c.value,
                },
                contact: {
                    phoneNumber: data['personal-information']['phoneNumber'],
                    address: data['personal-information']['address'],
                },
                personalInfo: {
                    idNumber: data['personal-information']['idNumber'],
                    genderCode: data['personal-information']['gender'],
                    placeOfBirth: data['personal-information']['placeOfBirth'],
                    dateOfBirth: data['personal-information']['dateOfBirth'],
                    height: data['personal-information']['height'],
                    weight: data['personal-information']['weight'],
                    bloodType: (_d = data['personal-information']['bloodType']) === null || _d === void 0 ? void 0 : _d.value,
                },
                education: {
                    educationalLevel: (_e = data['education']['educationalLevel']) === null || _e === void 0 ? void 0 : _e.value,
                    schoolName: data['education']['school'],
                    startYear: data['education']['startYear'],
                    endYear: data['education']['endYear'],
                },
                training: {
                    name: data['education']['trainingName'],
                    startDate: (_f = data['education']['trainingDate']) === null || _f === void 0 ? void 0 : _f.start,
                    endDate: (_g = data['education']['trainingDate']) === null || _g === void 0 ? void 0 : _g.end,
                },
            };
            var roles = [];
            var rolesTmp = (_h = data['employee-status']) === null || _h === void 0 ? void 0 : _h.role;
            rolesTmp.forEach(function (role) {
                roles.push({
                    authority: role.value,
                });
            });
            employee['roles'] = roles;
            _super.prototype.onSubmit.call(this, employee, 'security', 'post-employee')
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (response) {
                if (response.respStatusCode === i5$1.ResponseCode.OK_DEFAULT.toString()) {
                    _this.router.navigate(['/app/mgmt/employee']);
                }
            });
        };
        return EmployeeAddPageComponent;
    }(i3.BaseFormComponent));
    EmployeeAddPageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EmployeeAddPageComponent, deps: [{ token: i0__namespace.Injector }, { token: i3__namespace.DoWizardService }, { token: i1__namespace.Router }], target: i0__namespace.ɵɵFactoryTarget.Component });
    EmployeeAddPageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeAddPageComponent, selector: "do-employee-add-page", usesInheritance: true, ngImport: i0__namespace, template: "<do-wizard (onSubmit)=\"onSubmit($event)\" [loading]=\"disabled\">\n</do-wizard>", styles: [""], components: [{ type: i3__namespace.DoWizardComponent, selector: "do-wizard", inputs: ["extra", "loading"], outputs: ["onNext", "onPrevious", "onSubmit"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EmployeeAddPageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-employee-add-page',
                        templateUrl: 'employee-add-page.component.html',
                        styleUrls: ['./employee-add-page.component.scss'],
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }, { type: i3__namespace.DoWizardService }, { type: i1__namespace.Router }]; } });

    var emailExist;
    var EmployeeEditPersonalInformationComponent = /** @class */ (function (_super) {
        __extends(EmployeeEditPersonalInformationComponent, _super);
        function EmployeeEditPersonalInformationComponent(injector, router, employeeService, httpBaseService, oauthResource, apiPath) {
            var _this = _super.call(this, injector, {
                employeeName: [],
                nik: [],
                idNumber: [],
                email: [],
                phoneNumber: [],
                address: [],
            }) || this;
            _this.injector = injector;
            _this.router = router;
            _this.employeeService = employeeService;
            _this.httpBaseService = httpBaseService;
            _this.oauthResource = oauthResource;
            _this.apiPath = apiPath;
            _this.patternEmail = i5$1.Pattern.EMAIL;
            _this.patternPhoneNumber = i5$1.Pattern.PHONE_NUMBER;
            _this.patternFullname = i5$1.Pattern.FULLNAME;
            _this.formGroup.get('email')
                .setAsyncValidators([
                userValidator$1(_this.oauthResource, _this.httpBaseService, _this.apiPath)
            ]);
            if (!_this.employeeService.getEmployeeHeader()) {
                _this.router.navigate(['/app/mgmt/employee']);
            }
            return _this;
        }
        EmployeeEditPersonalInformationComponent.prototype.ngOnInit = function () { };
        EmployeeEditPersonalInformationComponent.prototype.loadDataMenu = function () {
            var _this = this;
            var _a;
            this.loadingForm = true;
            return this.exec('security', 'get-employee-personal-info', {
                employeeId: (_a = this.employeeService.getEmployeeHeader()) === null || _a === void 0 ? void 0 : _a.id
            }).pipe(operators.map(function (success) {
                var _a, _b, _c;
                _this.loadingForm = false;
                emailExist = success.email;
                _this.personalInfo = success === null || success === void 0 ? void 0 : success.personalInfo;
                _this.formGroup.controls['employeeName'].setValue(success.fullname);
                _this.formGroup.controls['nik'].setValue(success.idEmployee);
                _this.formGroup.controls['idNumber'].setValue((_a = success.personalInfo) === null || _a === void 0 ? void 0 : _a.idNumber);
                _this.formGroup.controls['email'].setValue(success.email);
                _this.formGroup.controls['phoneNumber'].setValue((_b = success.contact) === null || _b === void 0 ? void 0 : _b.phoneNumber);
                _this.formGroup.controls['address'].setValue((_c = success.contact) === null || _c === void 0 ? void 0 : _c.address);
                _this.formGroup.markAsPristine();
            }));
        };
        EmployeeEditPersonalInformationComponent.prototype.onReset = function () {
            this.router.navigate(['/app/mgmt/employee']);
        };
        EmployeeEditPersonalInformationComponent.prototype.onSubmit = function () {
            var _this = this;
            var _a;
            var data = {
                id: (_a = this.employeeService.getEmployeeHeader()) === null || _a === void 0 ? void 0 : _a.id,
                idEmployee: this.formGroup.controls['nik'].value,
                fullname: this.formGroup.controls['employeeName'].value,
                email: this.formGroup.controls['email'].value,
                contact: {
                    phoneNumber: this.formGroup.controls['phoneNumber'].value,
                    address: this.formGroup.controls['address'].value,
                },
                personalInfo: {
                    idNumber: this.formGroup.controls['idNumber'].value,
                },
            };
            _super.prototype.onSubmit.call(this, data, 'security', 'put-employee-personal-info')
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (response) {
                if (response.respStatusCode === i5$1.ResponseCode.OK_DEFAULT.toString()) {
                    _this.router.navigate(['/app/mgmt/employee']);
                }
            });
        };
        return EmployeeEditPersonalInformationComponent;
    }(i3.BaseFormComponent));
    EmployeeEditPersonalInformationComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EmployeeEditPersonalInformationComponent, deps: [{ token: i0__namespace.Injector }, { token: i1__namespace.Router }, { token: EmployeeService }, { token: i5$1.HTTP_SERVICE }, { token: i5$1.OAUTH_INFO }, { token: i5$1.API }], target: i0__namespace.ɵɵFactoryTarget.Component });
    EmployeeEditPersonalInformationComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeEditPersonalInformationComponent, selector: "do-employee-edit-personal-information", usesInheritance: true, ngImport: i0__namespace, template: "<div class=\"row\">\n  <div class=\"col-md-12 col-lg-12\">\n    <form class=\"form-horizontal\" autocomplete=\"on\" [formGroup]=\"formGroup\">\n      <do-input-text\n        [name]=\"'name'\"\n        [label]=\"'Employee Name'\"\n        [placeholder]=\"'Employee Name'\"\n        [pattern]=\"patternFullname\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"employeeName\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'nik'\"\n        [label]=\"'Employee Identification Number'\"\n        [placeholder]=\"'Employee Identification Number'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"nik\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'idNumber'\"\n        [label]=\"'ID Card Number'\"\n        [placeholder]=\"'ID Card Number'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"idNumber\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'email'\"\n        [label]=\"'Email'\"\n        [placeholder]=\"'Email'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        [pattern]=\"patternEmail\"\n        [paramError]=\"{value:5}\"\n        minlength=\"5\"\n        maxlength=\"50\"\n        formControlName=\"email\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'phoneNumber'\"\n        [label]=\"'Phone Number'\"\n        [placeholder]=\"'Phone Number'\"\n        [pattern]=\"patternPhoneNumber\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"phoneNumber\">\n      </do-input-text>\n      <do-textarea\n        [name]=\"'address'\"\n        [label]=\"'Address'\"\n        [placeholder]=\"'Address'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"address\">\n      </do-textarea>\n      <do-label-text\n        [name]=\"'pobdob'\"\n        [label]=\"'label.pobdob'\"\n        [skeleton]=\"loadingForm\"\n        [content]=\"personalInfo?.placeOfBirth + ', ' +personalInfo?.dateOfBirth\"\n        [colLabel]=\"3\"\n        [colContent]=\"9\"\n        [dividerlabel]=\"false\">\n      </do-label-text>\n      <do-label-text\n        [name]=\"'gender'\"\n        [label]=\"'Gender'\"\n        [skeleton]=\"loadingForm\"\n        [content]=\"personalInfo?.genderValue\"\n        [colLabel]=\"3\"\n        [colContent]=\"9\"\n        [dividerlabel]=\"false\">\n      </do-label-text>\n      <do-label-text\n        [name]=\"'height'\"\n        [label]=\"'Height'\"\n        [skeleton]=\"loadingForm\"\n        [content]=\"personalInfo?.height\"\n        [colLabel]=\"3\"\n        [colContent]=\"9\"\n        [dividerlabel]=\"false\">\n      </do-label-text>\n      <do-label-text\n        [name]=\"'weight'\"\n        [label]=\"'Weight'\"\n        [skeleton]=\"loadingForm\"\n        [content]=\"personalInfo?.weight\"\n        [colLabel]=\"3\"\n        [colContent]=\"9\"\n        [dividerlabel]=\"false\">\n      </do-label-text>\n      <do-label-text\n        [name]=\"'bloodType'\"\n        [label]=\"'Blood Type'\"\n        [skeleton]=\"loadingForm\"\n        [content]=\"personalInfo?.bloodType\"\n        [colLabel]=\"3\"\n        [colContent]=\"9\"\n        [dividerlabel]=\"false\">\n      </do-label-text>\n      <do-button-submit\n        [submitTitle]=\"'Edit'\"\n        [resetTitle]=\"'Cancel'\"\n        [formGroupButton]=\"formGroup\"\n        [disabledButton]=\"disabled\"\n        (onReset)=\"onReset()\"\n        (onSubmit)=\"onSubmit()\">\n      </do-button-submit>\n    </form>\n  </div>\n</div>", styles: [""], components: [{ type: i3__namespace.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i3__namespace.DoTextareaComponent, selector: "do-textarea", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "height"] }, { type: i3__namespace.DoLabelTextComponent, selector: "do-label-text", inputs: ["colLabel", "colContent", "skeleton", "name", "content", "dividerlabel", "numeric", "label", "nolabel", "required", "showMoreMode", "maxShowMore", "paramError"] }, { type: i3__namespace.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i4__namespace.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4__namespace.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { type: i4__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i4__namespace.MinLengthValidator, selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]", inputs: ["minlength"] }, { type: i4__namespace.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EmployeeEditPersonalInformationComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-employee-edit-personal-information',
                        styleUrls: ['./employee-edit-personal-information.component.scss'],
                        templateUrl: './employee-edit-personal-information.component.html',
                    }]
            }], ctorParameters: function () {
            return [{ type: i0__namespace.Injector }, { type: i1__namespace.Router }, { type: EmployeeService }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i5$1.HTTP_SERVICE]
                        }] }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i5$1.OAUTH_INFO]
                        }] }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i5$1.API]
                        }] }];
        } });
    function userValidator$1(oauthResource, httpBaseService, apiPath) {
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
                        exist: emailExist,
                    };
                    var dataValidator;
                    if (control.value) {
                        httpBaseService.HTTP_BASE(apiPath['auth']['check-user'], data, httpHeaders).subscribe(function (response) {
                            if (response['respStatusCode'] === i5$1.ResponseCode.OK_SCR012.toString()) {
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

    var EmployeeEducationFormalPromptComponent = /** @class */ (function () {
        function EmployeeEducationFormalPromptComponent(api, formBuilder, ref) {
            this.ref = ref;
            this.action = 'Add';
            this.formGroup = formBuilder.group({
                educationalLevel: [],
                school: [],
                startYear: [],
                endYear: [],
            });
            this.apiSelectEducationalLevel = api['master']['select-parameter'];
            this.paramSelectEducationalLevel = [{
                    key: 'parameterGroupCode',
                    value: 'EDUCATIONAL_LEVEL',
                }, {
                    key: 'parameterCodeNotIn',
                    value: 'EDUCATIONAL_LEVEL.NO_EDUCATION',
                }];
        }
        EmployeeEducationFormalPromptComponent.prototype.ngOnInit = function () {
            if (this.education) {
                this.action = 'Edit';
                this.formGroup.get('educationalLevel').setValue({
                    label: this.education.educationalLevel,
                    value: this.education.educationalLevelCode
                });
                this.formGroup.get('educationalLevel').disable({ onlySelf: true });
                this.formGroup.get('school').setValue(this.education.schoolName);
                this.formGroup.get('startYear').setValue(this.education.startYear);
                this.formGroup.get('endYear').setValue(this.education.endYear);
            }
            else {
                this.action = 'Add';
            }
        };
        EmployeeEducationFormalPromptComponent.prototype.onSubmit = function () {
            var _a, _b;
            var data = {
                education: {
                    id: (_a = this.education) === null || _a === void 0 ? void 0 : _a.id,
                    educationalLevel: (_b = this.formGroup.get('educationalLevel').value) === null || _b === void 0 ? void 0 : _b.value,
                    schoolName: this.formGroup.get('school').value,
                    startYear: this.formGroup.get('startYear').value,
                    endYear: this.formGroup.get('endYear').value,
                }
            };
            this.ref.close(data);
        };
        EmployeeEducationFormalPromptComponent.prototype.onReset = function () {
            this.ref.close();
        };
        return EmployeeEducationFormalPromptComponent;
    }());
    EmployeeEducationFormalPromptComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EmployeeEducationFormalPromptComponent, deps: [{ token: i5$1.API }, { token: i4__namespace.FormBuilder }, { token: i1__namespace$1.NbDialogRef }], target: i0__namespace.ɵɵFactoryTarget.Component });
    EmployeeEducationFormalPromptComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeEducationFormalPromptComponent, selector: "do-education-formal-prompt", inputs: { education: "education" }, ngImport: i0__namespace, template: "<nb-card class=\"modal-form\">\n  <nb-card-header>\n    {{ 'header.'+action+'-education-formal' | translate }}\n  </nb-card-header>\n  <nb-card-body>\n    <div class=\"row\">\n      <div class=\"col-md-12 col-lg-12\">\n        <form class=\"form-horizontal\" autocomplete=\"on\" [formGroup]=\"formGroup\">\n          <do-select\n            [name]=\"'educationalLevel'\"\n            [label]=\"'Educational Level'\"\n            [placeholder]=\"'Educational Level'\"\n            [required]=\"true\"\n            [api]=\"apiSelectEducationalLevel\"\n            [queryParam]=\"paramSelectEducationalLevel\"\n            [searchable]=\"false\"\n            formControlName=\"educationalLevel\">\n          </do-select>\n          <do-input-text\n            [name]=\"'school'\"\n            [label]=\"'School'\"\n            [placeholder]=\"'School'\"\n            formControlName=\"school\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'startYear'\"\n            [label]=\"'Start Year'\"\n            [placeholder]=\"'Start Year'\"\n            [type]=\"'number'\"\n            formControlName=\"startYear\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'endYear'\"\n            [label]=\"'End Year'\"\n            [placeholder]=\"'End Year'\"\n            [type]=\"'number'\"\n            formControlName=\"endYear\">\n          </do-input-text>\n        </form>\n      </div>\n    </div>\n  </nb-card-body>\n  <nb-card-footer>\n    <do-button-submit\n      [submitTitle]=\"action\"\n      [resetTitle]=\"'Cancel'\"\n      [formGroupButton]=\"formGroup\"\n      (onReset)=\"onReset()\"\n      (onSubmit)=\"onSubmit()\">\n    </do-button-submit>\n  </nb-card-footer>\n</nb-card>\n", styles: [".nb-theme-default :host .modal-form{max-width:40rem;width:40rem!important}@media (max-width: 767.98px){.nb-theme-default :host .modal-form{width:100%!important}}.nb-theme-dark :host .modal-form{max-width:40rem;width:40rem!important}@media (max-width: 767.98px){.nb-theme-dark :host .modal-form{width:100%!important}}.nb-theme-cosmic :host .modal-form{max-width:40rem;width:40rem!important}@media (max-width: 767.98px){.nb-theme-cosmic :host .modal-form{width:100%!important}}.nb-theme-corporate :host .modal-form{max-width:40rem;width:40rem!important}@media (max-width: 767.98px){.nb-theme-corporate :host .modal-form{width:100%!important}}\n"], components: [{ type: i1__namespace$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1__namespace$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1__namespace$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i3__namespace.DoSelectComponent, selector: "do-select", inputs: ["placeholder", "colLabel", "colInput", "items", "multiple", "loading", "addTag", "closeOnSelect", "clearable", "searchable", "hideSelected", "minTermLength", "maxTermLength", "api", "limit", "offsetNextLoad", "queryParam"], outputs: ["onSelect", "onClear"] }, { type: i3__namespace.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i1__namespace$1.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i3__namespace.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i4__namespace.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }], pipes: { "translate": i6__namespace.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EmployeeEducationFormalPromptComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-education-formal-prompt',
                        templateUrl: 'education-formal-prompt.component.html',
                        styleUrls: ['education-formal-prompt.component.scss'],
                    }]
            }], ctorParameters: function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i5$1.API]
                        }] }, { type: i4__namespace.FormBuilder }, { type: i1__namespace$1.NbDialogRef }];
        }, propDecorators: { education: [{
                    type: i0.Input
                }] } });

    var EmployeeEducationNonFormalPromptComponent = /** @class */ (function () {
        function EmployeeEducationNonFormalPromptComponent(api, formBuilder, ref) {
            this.ref = ref;
            this.action = 'Add';
            this.formGroup = formBuilder.group({
                trainingName: [],
                trainingDate: [],
            });
        }
        EmployeeEducationNonFormalPromptComponent.prototype.ngOnInit = function () {
            if (this.training) {
                this.action = 'Edit';
                this.formGroup.get('trainingName').setValue(this.training.name);
                this.formGroup.get('trainingDate').setValue({
                    start: this.training.startDate,
                    end: this.training.endDate,
                });
            }
            else {
                this.action = 'Add';
            }
        };
        EmployeeEducationNonFormalPromptComponent.prototype.onSubmit = function () {
            var _a, _b, _c;
            var data = {
                training: {
                    id: (_a = this.training) === null || _a === void 0 ? void 0 : _a.id,
                    name: this.formGroup.get('trainingName').value,
                    startDate: (_b = this.formGroup.get('trainingDate').value) === null || _b === void 0 ? void 0 : _b.start,
                    endDate: (_c = this.formGroup.get('trainingDate').value) === null || _c === void 0 ? void 0 : _c.end,
                }
            };
            this.ref.close(data);
        };
        EmployeeEducationNonFormalPromptComponent.prototype.onReset = function () {
            this.ref.close();
        };
        return EmployeeEducationNonFormalPromptComponent;
    }());
    EmployeeEducationNonFormalPromptComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EmployeeEducationNonFormalPromptComponent, deps: [{ token: i5$1.API }, { token: i4__namespace.FormBuilder }, { token: i1__namespace$1.NbDialogRef }], target: i0__namespace.ɵɵFactoryTarget.Component });
    EmployeeEducationNonFormalPromptComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeEducationNonFormalPromptComponent, selector: "do-education-nonformal-prompt", inputs: { training: "training" }, ngImport: i0__namespace, template: "<nb-card class=\"modal-form\">\n  <nb-card-header>\n    {{ 'header.'+action+'-education-nonformal' | translate }}\n  </nb-card-header>\n  <nb-card-body>\n    <div class=\"row\">\n      <div class=\"col-md-12 col-lg-12\">\n        <form class=\"form-horizontal\" autocomplete=\"on\" [formGroup]=\"formGroup\">\n          <do-input-text\n            [name]=\"'trainingName'\"\n            [label]=\"'Training Name'\"\n            [required]=\"true\"\n            [placeholder]=\"'Training Name'\"\n            formControlName=\"trainingName\">\n          </do-input-text>\n          <do-datepicker-range\n            [name]=\"'trainingDate'\"\n            [label]=\"'Training Date'\"\n            [placeholder]=\"'Training Date'\"\n            formControlName=\"trainingDate\">\n          </do-datepicker-range>\n        </form>\n      </div>\n    </div>\n  </nb-card-body>\n  <nb-card-footer>\n    <do-button-submit\n      [submitTitle]=\"action\"\n      [resetTitle]=\"'Cancel'\"\n      [formGroupButton]=\"formGroup\"\n      (onReset)=\"onReset()\"\n      (onSubmit)=\"onSubmit()\">\n    </do-button-submit>\n  </nb-card-footer>\n</nb-card>\n", styles: [".nb-theme-default :host .modal-form{max-width:40rem;width:40rem!important}@media (max-width: 767.98px){.nb-theme-default :host .modal-form{width:100%!important}}.nb-theme-dark :host .modal-form{max-width:40rem;width:40rem!important}@media (max-width: 767.98px){.nb-theme-dark :host .modal-form{width:100%!important}}.nb-theme-cosmic :host .modal-form{max-width:40rem;width:40rem!important}@media (max-width: 767.98px){.nb-theme-cosmic :host .modal-form{width:100%!important}}.nb-theme-corporate :host .modal-form{max-width:40rem;width:40rem!important}@media (max-width: 767.98px){.nb-theme-corporate :host .modal-form{width:100%!important}}\n"], components: [{ type: i1__namespace$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1__namespace$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1__namespace$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i3__namespace.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i3__namespace.DoDatePickerRangeComponent, selector: "do-datepicker-range", inputs: ["placeholder", "colLabel", "colInput", "icon", "min", "max", "size", "dateMask"] }, { type: i1__namespace$1.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i3__namespace.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i4__namespace.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }], pipes: { "translate": i6__namespace.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EmployeeEducationNonFormalPromptComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-education-nonformal-prompt',
                        templateUrl: 'education-nonformal-prompt.component.html',
                        styleUrls: ['education-nonformal-prompt.component.scss'],
                    }]
            }], ctorParameters: function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i5$1.API]
                        }] }, { type: i4__namespace.FormBuilder }, { type: i1__namespace$1.NbDialogRef }];
        }, propDecorators: { training: [{
                    type: i0.Input
                }] } });

    var EmployeeEditEducationComponent = /** @class */ (function (_super) {
        __extends(EmployeeEditEducationComponent, _super);
        function EmployeeEditEducationComponent(injector, router, employeeService, dialogService) {
            var _this = _super.call(this, injector) || this;
            _this.router = router;
            _this.employeeService = employeeService;
            _this.dialogService = dialogService;
            _this.reloadEducation = false;
            _this.reloadTraining = false;
            _this.columnsEducation = [
                { name: 'Level', prop: 'educationalLevel', frozenLeft: true },
                { name: 'School', prop: 'schoolName', frozenLeft: true },
                { name: 'Year', prop: 'startYear', frozenLeft: true },
            ];
            _this.columnsTraining = [
                { name: 'Training Name', prop: 'name', frozenLeft: true },
                { name: 'Start Date', prop: 'startDate', frozenLeft: true },
                { name: 'End Date', prop: 'endDate', frozenLeft: true },
            ];
            _this.educationIds = [];
            _this.trainingIds = [];
            _this.loadingSubject$ = new rxjs.Subject();
            if (!_this.employeeService.getEmployeeHeader()) {
                _this.router.navigate(['/app/mgmt/employee']);
            }
            _this.apiPathEducation = _this.api['security']['datatable-education-employee'];
            _this.apiPathTraining = _this.api['security']['datatable-training-employee'];
            _this.apiPathDeleteEducation = _this.api['security']['delete-employee-education'];
            _this.apiPathDeleteTraining = _this.api['security']['delete-employee-training'];
            _this.sortEducation = {
                desc: ['startYear']
            };
            _this.sortTraining = {
                desc: ['startDate']
            };
            return _this;
        }
        EmployeeEditEducationComponent.prototype.ngOnInit = function () {
            var _a;
            this.keyword = {
                employeeId: (_a = this.employeeService.getEmployeeHeader()) === null || _a === void 0 ? void 0 : _a.id,
            };
        };
        EmployeeEditEducationComponent.prototype.loadDataMenu = function () {
            this.reloadEducation = true;
            this.reloadTraining = true;
            return this.loadingSubject$.asObservable();
        };
        EmployeeEditEducationComponent.prototype.ngOnDestroy = function () { };
        EmployeeEditEducationComponent.prototype.onAddEducation = function () {
            var _this = this;
            this.reloadEducation = false;
            this.dialogService.open(EmployeeEducationFormalPromptComponent)
                .onClose.subscribe(function (data) {
                if (data) {
                    data['id'] = _this.employeeService.getEmployeeHeader().id;
                    _super.prototype.onSubmit.call(_this, data, 'security', 'post-employee-education')
                        .pipe(operators.takeUntil(_this.destroy$))
                        .subscribe(function (response) {
                        if (response.respStatusCode === i5$1.ResponseCode.OK_DEFAULT.toString()) {
                            _this.reloadEducation = true;
                        }
                    });
                }
            });
        };
        EmployeeEditEducationComponent.prototype.onAddTraining = function () {
            var _this = this;
            this.reloadTraining = false;
            this.dialogService.open(EmployeeEducationNonFormalPromptComponent)
                .onClose.subscribe(function (data) {
                if (data) {
                    data['id'] = _this.employeeService.getEmployeeHeader().id;
                    _super.prototype.onSubmit.call(_this, data, 'security', 'post-employee-training')
                        .pipe(operators.takeUntil(_this.destroy$))
                        .subscribe(function (response) {
                        if (response.respStatusCode === i5$1.ResponseCode.OK_DEFAULT.toString()) {
                            _this.reloadTraining = true;
                        }
                    });
                }
            });
        };
        EmployeeEditEducationComponent.prototype.onEditEducation = function (data) {
            var _this = this;
            this.reloadEducation = false;
            this.dialogService.open(EmployeeEducationFormalPromptComponent, {
                context: {
                    education: data,
                },
            })
                .onClose.subscribe(function (result) {
                if (result) {
                    result['id'] = _this.employeeService.getEmployeeHeader().id;
                    _super.prototype.onSubmit.call(_this, result, 'security', 'post-employee-education')
                        .pipe(operators.takeUntil(_this.destroy$))
                        .subscribe(function (response) {
                        if (response.respStatusCode === i5$1.ResponseCode.OK_DEFAULT.toString()) {
                            _this.reloadEducation = true;
                        }
                    });
                }
            });
        };
        EmployeeEditEducationComponent.prototype.onEditTraining = function (data) {
            var _this = this;
            this.reloadTraining = false;
            this.dialogService.open(EmployeeEducationNonFormalPromptComponent, {
                context: {
                    training: data,
                },
            })
                .onClose.subscribe(function (result) {
                if (result) {
                    result['id'] = _this.employeeService.getEmployeeHeader().id;
                    _super.prototype.onSubmit.call(_this, result, 'security', 'post-employee-training')
                        .pipe(operators.takeUntil(_this.destroy$))
                        .subscribe(function (response) {
                        if (response.respStatusCode === i5$1.ResponseCode.OK_DEFAULT.toString()) {
                            _this.reloadTraining = true;
                        }
                    });
                }
            });
        };
        EmployeeEditEducationComponent.prototype.onDeleteEducationDialog = function (data, dialog) {
            var _this = this;
            this.reloadEducation = false;
            this.educationIds = [];
            data.forEach(function (value) {
                _this.educationIds.push(value.id);
            });
            this.dialogService.open(dialog, { context: 'alert.delete' });
        };
        EmployeeEditEducationComponent.prototype.onDeleteTrainingDialog = function (data, dialog) {
            var _this = this;
            this.reloadTraining = false;
            this.trainingIds = [];
            data.forEach(function (value) {
                _this.trainingIds.push(value.id);
            });
            this.dialogService.open(dialog, { context: 'alert.delete' });
        };
        EmployeeEditEducationComponent.prototype.onDeleteEducation = function (ref) {
            var _this = this;
            this.disabled = true;
            this.http.HTTP_AUTH(this.apiPathDeleteEducation, this.educationIds)
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (success) {
                _this.disabled = false;
                ref.close();
                _this.reloadEducation = true;
                _this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
            }, function (error) {
                _this.disabled = false;
                _this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
            });
        };
        EmployeeEditEducationComponent.prototype.onDeleteTraining = function (ref) {
            var _this = this;
            this.disabled = true;
            this.http.HTTP_AUTH(this.apiPathDeleteTraining, this.trainingIds)
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (success) {
                ref.close();
                _this.reloadTraining = true;
                _this.disabled = false;
                _this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
            }, function (error) {
                _this.disabled = false;
                _this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
            });
        };
        EmployeeEditEducationComponent.prototype.onLoadEducation = function () {
            this.loadingSubject$.next(true);
        };
        EmployeeEditEducationComponent.prototype.onLoadTraining = function () {
            this.loadingSubject$.next(true);
        };
        return EmployeeEditEducationComponent;
    }(i3.BaseFormComponent));
    EmployeeEditEducationComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EmployeeEditEducationComponent, deps: [{ token: i0__namespace.Injector }, { token: i1__namespace.Router }, { token: EmployeeService }, { token: i1__namespace$1.NbDialogService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    EmployeeEditEducationComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeEditEducationComponent, selector: "do-employee-edit-education", usesInheritance: true, ngImport: i0__namespace, template: "<div class=\"row\">\n  <div class=\"col-md-12 col-lg-12\">\n    <div class=\"accordion-container\">\n      <nb-accordion multi>\n        <nb-accordion-item [expanded]=\"true\">\n          <nb-accordion-item-header>\n            {{'Formal Education' | translate}}\n          </nb-accordion-item-header>\n          <nb-accordion-item-body>\n            <do-datatable\n              [api]=\"apiPathEducation\"\n              [columns]=\"columnsEducation\"\n              [filterFn]=\"keyword\"\n              [sort]=\"sortEducation\"\n              [startWithOpenData]=\"false\"\n              [reloadFn]=\"reloadEducation\"\n              (onLoading)=\"onLoadEducation()\"\n              (onEdit)=\"onEditEducation($event)\"\n              (onAdd)=\"onAddEducation()\"\n              (onDelete)=\"onDeleteEducationDialog($event, dialogdeleteeducation)\">\n            </do-datatable>              \n          </nb-accordion-item-body>\n        </nb-accordion-item>\n        <nb-accordion-item [expanded]=\"true\">\n          <nb-accordion-item-header>\n            {{'Non Formal Education' | translate}}\n          </nb-accordion-item-header>\n          <nb-accordion-item-body>\n            <do-datatable\n              [api]=\"apiPathTraining\"\n              [columns]=\"columnsTraining\"\n              [filterFn]=\"keyword\"\n              [sort]=\"sortTraining\"\n              [startWithOpenData]=\"false\"\n              [reloadFn]=\"reloadTraining\"\n              (onLoading)=\"onLoadTraining()\"\n              (onEdit)=\"onEditTraining($event)\"\n              (onAdd)=\"onAddTraining()\"\n              (onDelete)=\"onDeleteTrainingDialog($event, dialogdeletetraining)\">\n            </do-datatable>\n          </nb-accordion-item-body>\n        </nb-accordion-item>\n      </nb-accordion>\n    </div>\n  </div>\n</div>\n\n<ng-template #dialogdeleteeducation let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"danger\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <do-button-submit\n        [colLabel]=\"0\"\n        [colButton]=\"12\"\n        [submitTitle]=\"'Delete'\"\n        [resetTitle]=\"'Cancel'\"\n        [disabledButton]=\"disabled\"\n        (onReset)=\"ref.close()\"\n        (onSubmit)=\"onDeleteEducation(ref)\">\n      </do-button-submit>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>\n\n<ng-template #dialogdeletetraining let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"danger\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <do-button-submit\n        [colLabel]=\"0\"\n        [colButton]=\"12\"\n        [submitTitle]=\"'Delete'\"\n        [resetTitle]=\"'Cancel'\"\n        [disabledButton]=\"disabled\"\n        (onReset)=\"ref.close()\"\n        (onSubmit)=\"onDeleteTraining(ref)\">\n      </do-button-submit>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>", styles: [".nb-theme-default :host nb-accordion{box-shadow:unset}.nb-theme-dark :host nb-accordion{box-shadow:unset}.nb-theme-cosmic :host nb-accordion{box-shadow:unset}.nb-theme-corporate :host nb-accordion{box-shadow:unset}\n"], components: [{ type: i1__namespace$1.NbAccordionComponent, selector: "nb-accordion", inputs: ["multi"] }, { type: i1__namespace$1.NbAccordionItemComponent, selector: "nb-accordion-item", inputs: ["collapsed", "expanded", "disabled"], outputs: ["collapsedChange"] }, { type: i1__namespace$1.NbAccordionItemHeaderComponent, selector: "nb-accordion-item-header" }, { type: i1__namespace$1.NbAccordionItemBodyComponent, selector: "nb-accordion-item-body" }, { type: i3__namespace.DoDatatableComponent, selector: "do-datatable", inputs: ["rows", "columns", "filters", "selected", "limit", "count", "offset", "externalPaging", "externalSorting", "loadingIndicator", "scrollbarH", "scrollbarV", "reorderable", "sortType", "messages", "selectionType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "header", "column", "footer", "add", "edit", "delete", "filter", "api", "startWithOpenData", "filterEvent", "formGroupFilter", "sort", "sortsDefault", "autoLoad", "filterFn", "filterDoFetchFn", "reloadFn"], outputs: ["onAdd", "onEdit", "onDelete", "onSearch", "onFilter", "onButtonCell", "onLoading", "onSelected"] }, { type: i1__namespace$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1__namespace$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1__namespace$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i1__namespace$1.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i3__namespace.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], pipes: { "translate": i6__namespace.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EmployeeEditEducationComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-employee-edit-education',
                        styleUrls: ['./employee-edit-education.component.scss'],
                        templateUrl: './employee-edit-education.component.html',
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }, { type: i1__namespace.Router }, { type: EmployeeService }, { type: i1__namespace$1.NbDialogService }]; } });

    var EmployeeEditEmployeeStatusComponent = /** @class */ (function (_super) {
        __extends(EmployeeEditEmployeeStatusComponent, _super);
        function EmployeeEditEmployeeStatusComponent(injector, router, employeeService) {
            var _this = _super.call(this, injector, {
                occupation: [],
                role: [],
                employeeParent: [],
                permissions: [],
            }) || this;
            _this.injector = injector;
            _this.router = router;
            _this.employeeService = employeeService;
            _this.permissionsData = [];
            _this.apiSelectOccupation = _this.api['security']['select-occupation'];
            _this.apiSelectRole = _this.api['security']['select-role'];
            _this.apiSelectEmployeeParent = _this.api['security']['select-employee'];
            return _this;
        }
        EmployeeEditEmployeeStatusComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (!this.employeeService.getEmployeeHeader()) {
                this.router.navigate(['/app/mgmt/employee']);
                return;
            }
            this.http.HTTP_AUTH(this.api['master']['checkbox-parameter'], {
                keyword: {
                    parameterGroupCode: 'PERMISSION',
                },
            }).pipe(operators.takeUntil(this.destroy$), operators.map(function (response) {
                _this.permissionsData = response;
            }), operators.catchError(function () { return rxjs.of([]); })).subscribe(function () { });
        };
        EmployeeEditEmployeeStatusComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next(true);
            this.destroy$.complete();
            this.destroy$.unsubscribe();
        };
        EmployeeEditEmployeeStatusComponent.prototype.loadDataMenu = function () {
            var _this = this;
            var _a;
            this.loadingForm = true;
            return this.exec('security', 'get-employee-status', {
                employeeId: (_a = this.employeeService.getEmployeeHeader()) === null || _a === void 0 ? void 0 : _a.id
            }).pipe(operators.map(function (success) {
                var _a, _b;
                _this.loadingForm = false;
                _this.username = success.username;
                var roles = success.roles;
                var selectRoles = [];
                roles.forEach(function (role) {
                    selectRoles.push({
                        label: role.description,
                        value: role.authority,
                        disabled: false,
                    });
                });
                _this.formGroup.controls['role'].setValue(selectRoles);
                _this.formGroup.controls['occupation'].setValue({
                    label: (_a = success.occupation) === null || _a === void 0 ? void 0 : _a.name,
                    value: (_b = success.occupation) === null || _b === void 0 ? void 0 : _b.code
                });
                _this.formGroup.controls['employeeParent'].setValue({
                    label: success.parentLabel,
                    value: success.parentValue
                });
                var permissions = _this.permissionsData;
                permissions.forEach(function (permission) {
                    if (permission.id === 'PERMISSION.DISABLED') {
                        permission['selected'] = success.disabled;
                    }
                    if (permission.id === 'PERMISSION.LOCKED') {
                        permission['selected'] = success.locked;
                    }
                    if (permission.id === 'PERMISSION.ACCOUNT_EXPIRED') {
                        permission['selected'] = success.accountExpired;
                    }
                });
                _this.formGroup.controls['permissions'].setValue(permissions);
                _this.formGroup.markAsPristine();
            }));
        };
        EmployeeEditEmployeeStatusComponent.prototype.onReset = function () {
            this.router.navigate(['/app/mgmt/employee']);
        };
        EmployeeEditEmployeeStatusComponent.prototype.onSubmit = function () {
            var _this = this;
            var _a, _b;
            var roles = [];
            var tmpRoles = this.formGroup.get('role').value;
            tmpRoles.forEach(function (role) {
                roles.push({
                    authority: role.value
                });
            });
            var disabled = false;
            var locked = false;
            var accountExpired = false;
            var permissions = this.formGroup.get('permissions').value ? this.formGroup.get('permissions').value : this.permissionsData;
            permissions.forEach(function (permission) {
                if (permission.id === 'PERMISSION.DISABLED') {
                    disabled = permission['selected'];
                }
                if (permission.id === 'PERMISSION.LOCKED') {
                    locked = permission['selected'];
                }
                if (permission.id === 'PERMISSION.ACCOUNT_EXPIRED') {
                    accountExpired = permission['selected'];
                }
            });
            var data = {
                id: this.employeeService.getEmployeeHeader().id,
                disabled: disabled,
                locked: locked,
                accountExpired: accountExpired,
                parentId: (_a = this.formGroup.get('employeeParent').value) === null || _a === void 0 ? void 0 : _a.value,
                roles: roles,
                occupation: {
                    code: (_b = this.formGroup.get('occupation').value) === null || _b === void 0 ? void 0 : _b.value
                },
            };
            _super.prototype.onSubmit.call(this, data, 'security', 'put-employee-status')
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (response) {
                if (response.respStatusCode === i5$1.ResponseCode.OK_DEFAULT.toString()) {
                    _this.router.navigate(['/app/mgmt/employee']);
                }
            });
        };
        return EmployeeEditEmployeeStatusComponent;
    }(i3.BaseFormComponent));
    EmployeeEditEmployeeStatusComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EmployeeEditEmployeeStatusComponent, deps: [{ token: i0__namespace.Injector }, { token: i1__namespace.Router }, { token: EmployeeService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    EmployeeEditEmployeeStatusComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeEditEmployeeStatusComponent, selector: "do-employee-edit-employee-status", usesInheritance: true, ngImport: i0__namespace, template: "<div class=\"row\">\n  <div class=\"col-md-12 col-lg-12\">\n    <form class=\"form-horizontal\" autocomplete=\"on\" [formGroup]=\"formGroup\">\n      <do-label-text\n        [label]=\"'Username'\"\n        [colLabel]=\"3\"\n        [colContent]=\"9\"\n        [dividerlabel]=\"false\"\n        [skeleton]=\"loadingForm\"\n        [content]=\"username\">\n      </do-label-text>\n      <do-select\n        [name]=\"'occupation'\"\n        [label]=\"'Occupation'\"\n        [placeholder]=\"'Occupation'\"\n        [required]=\"true\"\n        [api]=\"apiSelectOccupation\"\n        [searchable]=\"false\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"occupation\">\n      </do-select>\n      <do-select\n        [name]=\"'role'\"\n        [label]=\"'Role'\"\n        [placeholder]=\"'Role'\"\n        [required]=\"true\"\n        [api]=\"apiSelectRole\"\n        [searchable]=\"false\"\n        [multiple]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"role\">\n      </do-select>\n      <do-select\n        [name]=\"'employeeParent'\"\n        [label]=\"'Supervisor'\"\n        [placeholder]=\"'Supervisor'\"\n        [api]=\"apiSelectEmployeeParent\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"employeeParent\">\n      </do-select>\n      <do-checkbox\n        [name]=\"'permissions'\"\n        [label]=\"'Permissions'\"\n        [data]=\"permissionsData\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"permissions\">\n      </do-checkbox>\n      <do-button-submit\n        [submitTitle]=\"'Edit'\"\n        [resetTitle]=\"'Cancel'\"\n        [formGroupButton]=\"formGroup\"\n        [disabledButton]=\"disabled\"\n        [skeleton]=\"loadingForm\"\n        (onReset)=\"onReset()\"\n        (onSubmit)=\"onSubmit()\">\n      </do-button-submit>\n    </form>\n  </div>\n</div>", styles: [""], components: [{ type: i3__namespace.DoLabelTextComponent, selector: "do-label-text", inputs: ["colLabel", "colContent", "skeleton", "name", "content", "dividerlabel", "numeric", "label", "nolabel", "required", "showMoreMode", "maxShowMore", "paramError"] }, { type: i3__namespace.DoSelectComponent, selector: "do-select", inputs: ["placeholder", "colLabel", "colInput", "items", "multiple", "loading", "addTag", "closeOnSelect", "clearable", "searchable", "hideSelected", "minTermLength", "maxTermLength", "api", "limit", "offsetNextLoad", "queryParam"], outputs: ["onSelect", "onClear"] }, { type: i3__namespace.DoCheckboxComponent, selector: "do-checkbox", inputs: ["colLabel", "colInput", "data"], outputs: ["onChecked"] }, { type: i3__namespace.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i4__namespace.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EmployeeEditEmployeeStatusComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-employee-edit-employee-status',
                        styleUrls: ['./employee-edit-employee-status.component.scss'],
                        templateUrl: './employee-edit-employee-status.component.html',
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }, { type: i1__namespace.Router }, { type: EmployeeService }]; } });

    var EmployeeEditPageComponent = /** @class */ (function (_super) {
        __extends(EmployeeEditPageComponent, _super);
        function EmployeeEditPageComponent(injector, router, employeeService, toastr) {
            var _this = _super.call(this, injector) || this;
            _this.injector = injector;
            _this.router = router;
            _this.employeeService = employeeService;
            _this.toastr = toastr;
            _this.loading = false;
            _this.tab = 'personalInfo';
            _this.destroy$ = new rxjs.Subject();
            if (_this.employeeService.getEmployeeHeader()) {
            }
            else {
                _this.router.navigate(['/app/mgmt/employee']);
            }
            return _this;
        }
        EmployeeEditPageComponent.prototype.ngOnInit = function () {
        };
        EmployeeEditPageComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next(true);
            this.destroy$.next();
            this.destroy$.complete();
        };
        EmployeeEditPageComponent.prototype.toggleLoadingAnimation = function (event) {
            var _this = this;
            this.tab = event.tabId;
            this.loading = true;
            if (this.tab === 'personalInfo') {
                this.personalInfo.loadDataMenu()
                    .pipe(operators.takeUntil(this.destroy$))
                    .subscribe(function () {
                    _this.loading = false;
                }, function (error) {
                    if (error instanceof http.HttpErrorResponse) {
                        error = error['error'];
                    }
                    _this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
                });
            }
            else if (this.tab === 'education') {
                this.education.loadDataMenu()
                    .pipe(operators.takeUntil(this.destroy$))
                    .subscribe(function () {
                    _this.loading = false;
                }, function (error) {
                    if (error instanceof http.HttpErrorResponse) {
                        error = error['error'];
                    }
                    _this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
                });
            }
            else {
                this.employeeStatus.loadDataMenu()
                    .pipe(operators.takeUntil(this.destroy$))
                    .subscribe(function () {
                    _this.loading = false;
                }, function (error) {
                    if (error instanceof http.HttpErrorResponse) {
                        error = error['error'];
                    }
                    _this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
                });
            }
        };
        return EmployeeEditPageComponent;
    }(i3.BaseComponent));
    EmployeeEditPageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EmployeeEditPageComponent, deps: [{ token: i0__namespace.Injector }, { token: i1__namespace.Router }, { token: EmployeeService }, { token: i3__namespace.DoToastrService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    EmployeeEditPageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeEditPageComponent, selector: "do-employee-edit-page", viewQueries: [{ propertyName: "personalInfo", first: true, predicate: ["personalInfo"], descendants: true, static: true }, { propertyName: "education", first: true, predicate: ["education"], descendants: true, static: true }, { propertyName: "employeeStatus", first: true, predicate: ["employeeStatus"], descendants: true, static: true }], usesInheritance: true, ngImport: i0__namespace, template: "<do-page-outlet [header]=\"'header.employee-management'\" [url]=\"'/app/mgmt/employee'\" [hidefooter]=\"true\">\n  <nb-tabset fullWidth (changeTab)=\"toggleLoadingAnimation($event)\" pagecontent>\n    <nb-tab tabId=\"personalInfo\" tabTitle=\"{{'tab.personal-info' | translate}}\" [lazyLoad]=\"true\">\n      <do-employee-edit-personal-information #personalInfo></do-employee-edit-personal-information>\n    </nb-tab>\n    <nb-tab tabId=\"education\" tabTitle=\"{{'tab.education' | translate}}\">\n      <do-employee-edit-education #education></do-employee-edit-education>\n    </nb-tab>\n    <nb-tab tabId=\"employeeStatus\" tabTitle=\"{{'tab.employee-status' | translate}}\">\n      <do-employee-edit-employee-status #employeeStatus></do-employee-edit-employee-status>\n    </nb-tab>\n  </nb-tabset>\n</do-page-outlet>\n", styles: [""], components: [{ type: i3__namespace.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i1__namespace$1.NbTabsetComponent, selector: "nb-tabset", inputs: ["fullWidth", "routeParam"], outputs: ["changeTab"] }, { type: i1__namespace$1.NbTabComponent, selector: "nb-tab", inputs: ["badgeStatus", "badgeDot", "disabled", "responsive", "active", "lazyLoad", "tabTitle", "tabId", "tabIcon", "route", "badgeText", "badgePosition"] }, { type: EmployeeEditPersonalInformationComponent, selector: "do-employee-edit-personal-information" }, { type: EmployeeEditEducationComponent, selector: "do-employee-edit-education" }, { type: EmployeeEditEmployeeStatusComponent, selector: "do-employee-edit-employee-status" }], pipes: { "translate": i6__namespace.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EmployeeEditPageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-employee-edit-page',
                        styleUrls: ['./employee-edit-page.component.scss'],
                        templateUrl: './employee-edit-page.component.html',
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }, { type: i1__namespace.Router }, { type: EmployeeService }, { type: i3__namespace.DoToastrService }]; }, propDecorators: { personalInfo: [{
                    type: i0.ViewChild,
                    args: ['personalInfo', { static: true }]
                }], education: [{
                    type: i0.ViewChild,
                    args: ['education', { static: true }]
                }], employeeStatus: [{
                    type: i0.ViewChild,
                    args: ['employeeStatus', { static: true }]
                }] } });

    var EmployeeAddPersonalInformationComponent = /** @class */ (function (_super) {
        __extends(EmployeeAddPersonalInformationComponent, _super);
        function EmployeeAddPersonalInformationComponent(injector, httpBaseService, oauthResource, apiPath) {
            var _this = _super.call(this, injector, 'personal-information', {
                name: [{
                        value: null,
                        disabled: false,
                    }, i4.Validators.required],
                nik: [{
                        value: null,
                        disabled: false,
                    }, i4.Validators.required],
                idNumber: [{
                        value: null,
                        disabled: false,
                    }, i4.Validators.required],
                email: [{
                        value: null,
                        disabled: false,
                    }, i4.Validators.required],
                phoneNumber: [{
                        value: null,
                        disabled: false,
                    }, i4.Validators.required],
                address: [{
                        value: null,
                        disabled: false,
                    }, i4.Validators.required],
                placeOfBirth: [{
                        value: null,
                        disabled: false,
                    }, i4.Validators.required],
                dateOfBirth: [{
                        value: null,
                        disabled: false,
                    }, i4.Validators.required],
                gender: [{
                        value: null,
                        disabled: false,
                    }],
                height: [{
                        value: null,
                        disabled: false,
                    }],
                weight: [{
                        value: null,
                        disabled: false,
                    }],
                bloodType: [{
                        value: null,
                        disabled: false,
                    }],
            }) || this;
            _this.injector = injector;
            _this.httpBaseService = httpBaseService;
            _this.oauthResource = oauthResource;
            _this.apiPath = apiPath;
            _this.formGroupName = 'personal-information';
            _this.patternEmail = i5$1.Pattern.EMAIL;
            _this.patternPhoneNumber = i5$1.Pattern.PHONE_NUMBER;
            _this.patternFullname = i5$1.Pattern.FULLNAME;
            _this.genderData = [];
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
            _this.isCheckEmail = true;
            _this.formGroup.get('personal-information').get('email')
                .setAsyncValidators([userValidator(_this.oauthResource, _this.httpBaseService, _this.apiPath)]);
            return _this;
        }
        EmployeeAddPersonalInformationComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.formGroup.get('personal-information').get('gender').setValue('GENDER.MALE');
            this.loadingForm = true;
            this.http.HTTP_AUTH(this.api['master']['radio-parameter'], {
                keyword: {
                    parameterGroupCode: 'GENDER',
                },
            }).pipe(operators.takeUntil(this.destroy$), operators.map(function (response) {
                _this.genderData = response;
            }), operators.catchError(function () { return rxjs.of([]); })).subscribe(function () {
                _this.loadingForm = false;
            });
        };
        EmployeeAddPersonalInformationComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next(true);
            this.destroy$.complete();
            this.destroy$.unsubscribe();
        };
        EmployeeAddPersonalInformationComponent.prototype.onKeyDownEmail = function (event) {
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
        EmployeeAddPersonalInformationComponent.prototype.validateRoute = function () { };
        return EmployeeAddPersonalInformationComponent;
    }(i3.DoWizardStep));
    EmployeeAddPersonalInformationComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EmployeeAddPersonalInformationComponent, deps: [{ token: i0__namespace.Injector }, { token: i5$1.HTTP_SERVICE }, { token: i5$1.OAUTH_INFO }, { token: i5$1.API }], target: i0__namespace.ɵɵFactoryTarget.Component });
    EmployeeAddPersonalInformationComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeAddPersonalInformationComponent, selector: "do-employee-add-personal-information", usesInheritance: true, ngImport: i0__namespace, template: "<do-wizard-page-outlet>\n  <form class=\"form-horizontal\" autocomplete=\"on\" [formGroup]=\"formGroup\" wizardcontent>\n    <div [formGroupName]=\"formGroupName\">\n      <do-input-text\n        [name]=\"'name'\"\n        [label]=\"'Name'\"\n        [placeholder]=\"'Name'\"\n        [pattern]=\"patternFullname\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"name\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'nik'\"\n        [label]=\"'Employee Identification Number'\"\n        [placeholder]=\"'Employee Identification Number'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"nik\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'idNumber'\"\n        [label]=\"'ID Card Number'\"\n        [placeholder]=\"'ID Card Number'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"idNumber\">\n      </do-input-text>\n      <do-radio\n        [name]=\"'gender'\"\n        [label]=\"'Gender'\"\n        [placeholder]=\"'Gender'\"\n        [data]=\"genderData\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"gender\">\n      </do-radio>\n      <do-input-text\n        [name]=\"'placeOfBirth'\"\n        [label]=\"'Place of Birth'\"\n        [placeholder]=\"'Place of Birth'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"placeOfBirth\">\n      </do-input-text>\n      <do-datepicker\n        [name]=\"'dateOfBirth'\"\n        [label]=\"'Date of Birth'\"\n        [placeholder]=\"'Date of Birth'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"dateOfBirth\">\n      </do-datepicker>\n      <do-input-text\n        [name]=\"'email'\"\n        [label]=\"'Email'\"\n        [placeholder]=\"'Email'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        [pattern]=\"patternEmail\"\n        [paramError]=\"{value:5}\"\n        minlength=\"5\"\n        maxlength=\"50\"\n        formControlName=\"email\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'phoneNumber'\"\n        [label]=\"'Phone Number'\"\n        [placeholder]=\"'Phone Number'\"\n        [pattern]=\"patternPhoneNumber\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"phoneNumber\">\n      </do-input-text>\n      <do-textarea\n        [name]=\"'address'\"\n        [label]=\"'Address'\"\n        [placeholder]=\"'Address'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"address\">\n      </do-textarea>\n      <do-input-text\n        [name]=\"'height'\"\n        [label]=\"'height.body'\"\n        [placeholder]=\"'Centimeter'\"\n        [type]=\"'number'\"\n        [step]=\"'any'\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"height\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'weight'\"\n        [label]=\"'weight.body'\"\n        [placeholder]=\"'Kilogram'\"\n        [type]=\"'number'\"\n        [step]=\"'any'\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"weight\">\n      </do-input-text>\n      <do-select\n        [name]=\"'bloodType'\"\n        [label]=\"'Blood Type'\"\n        [placeholder]=\"'Blood Type'\"\n        [items]=\"bloodTypeData\"\n        [searchable]=\"false\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"bloodType\">\n      </do-select>\n    </div>\n  </form>\n</do-wizard-page-outlet>\n", styles: [""], components: [{ type: i3__namespace.DoWizardPageOutletComponent, selector: "do-wizard-page-outlet", inputs: ["width"] }, { type: i3__namespace.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i3__namespace.DoRadioComponent, selector: "do-radio", inputs: ["placeholder", "colLabel", "colInput", "data"] }, { type: i3__namespace.DoDatePickerComponent, selector: "do-datepicker", inputs: ["placeholder", "colLabel", "colInput", "min", "max", "size", "dateMask"] }, { type: i3__namespace.DoTextareaComponent, selector: "do-textarea", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "height"] }, { type: i3__namespace.DoSelectComponent, selector: "do-select", inputs: ["placeholder", "colLabel", "colInput", "items", "multiple", "loading", "addTag", "closeOnSelect", "clearable", "searchable", "hideSelected", "minTermLength", "maxTermLength", "api", "limit", "offsetNextLoad", "queryParam"], outputs: ["onSelect", "onClear"] }], directives: [{ type: i4__namespace.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4__namespace.FormGroupName, selector: "[formGroupName]", inputs: ["formGroupName"] }, { type: i4__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4__namespace.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { type: i4__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i4__namespace.MinLengthValidator, selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]", inputs: ["minlength"] }, { type: i4__namespace.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EmployeeAddPersonalInformationComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-employee-add-personal-information',
                        templateUrl: 'employee-add-personal-information.component.html',
                        styleUrls: ['./employee-add-personal-information.component.scss'],
                    }]
            }], ctorParameters: function () {
            return [{ type: i0__namespace.Injector }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i5$1.HTTP_SERVICE]
                        }] }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i5$1.OAUTH_INFO]
                        }] }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i5$1.API]
                        }] }];
        } });
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
                            if (response['respStatusCode'] === i5$1.ResponseCode.OK_SCR012.toString()) {
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

    var EmployeeAddEducationComponent = /** @class */ (function (_super) {
        __extends(EmployeeAddEducationComponent, _super);
        function EmployeeAddEducationComponent(injector) {
            var _this = _super.call(this, injector, 'education', {
                educationalLevel: [{
                        value: null,
                        disabled: false,
                    }, i4.Validators.required],
                school: [{
                        value: null,
                        disabled: false,
                    }],
                startYear: [{
                        value: null,
                        disabled: false,
                    }],
                endYear: [{
                        value: null,
                        disabled: false,
                    }],
                trainingName: [{
                        value: null,
                        disabled: false,
                    }],
                trainingDate: [{
                        value: null,
                        disabled: false,
                    }],
            }) || this;
            _this.injector = injector;
            _this.noSchool = false;
            _this.apiSelectEducationalLevel = _this.api['master']['select-parameter'];
            _this.paramSelectEducationalLevel = [{
                    key: 'parameterGroupCode',
                    value: 'EDUCATIONAL_LEVEL',
                }];
            return _this;
        }
        EmployeeAddEducationComponent.prototype.ngOnInit = function () {
            var select = this.formGroup.get('education').get('educationalLevel').value;
            if ((select === null || select === void 0 ? void 0 : select.value) === 'EDUCATIONAL_LEVEL.NO_EDUCATION') {
                this.noSchool = true;
            }
            else {
                this.noSchool = false;
            }
        };
        EmployeeAddEducationComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next(true);
            this.destroy$.complete();
            this.destroy$.unsubscribe();
        };
        EmployeeAddEducationComponent.prototype.onSelectEducationalLevel = function (select) {
            if ((select === null || select === void 0 ? void 0 : select.value) === 'EDUCATIONAL_LEVEL.NO_EDUCATION') {
                this.noSchool = true;
            }
            else {
                this.noSchool = false;
            }
        };
        EmployeeAddEducationComponent.prototype.validateRoute = function () {
            var _a;
            if (!this.formGroup.get('personal-information') || ((_a = this.formGroup.get('personal-information')) === null || _a === void 0 ? void 0 : _a.invalid)) {
                this.router.navigate(['/app/mgmt/employee/add/personal-information']);
            }
        };
        return EmployeeAddEducationComponent;
    }(i3.DoWizardStep));
    EmployeeAddEducationComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EmployeeAddEducationComponent, deps: [{ token: i0__namespace.Injector }], target: i0__namespace.ɵɵFactoryTarget.Component });
    EmployeeAddEducationComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeAddEducationComponent, selector: "do-employee-add-education", usesInheritance: true, ngImport: i0__namespace, template: "<do-wizard-page-outlet>\n  <form class=\"form-horizontal\" autocomplete=\"on\" [formGroup]=\"formGroup\" wizardcontent>\n    <div class=\"accordion-container\" [formGroupName]=\"formGroupName\">\n      <nb-accordion multi>\n        <nb-accordion-item [expanded]=\"true\">\n          <nb-accordion-item-header>\n            {{'Formal Education' | translate}}\n          </nb-accordion-item-header>\n          <nb-accordion-item-body>\n            <do-select\n              [name]=\"'educationalLevel'\"\n              [label]=\"'Educational Level'\"\n              [placeholder]=\"'Educational Level'\"\n              [required]=\"true\"\n              [api]=\"apiSelectEducationalLevel\"\n              [queryParam]=\"paramSelectEducationalLevel\"\n              [searchable]=\"false\"\n              (onSelect)=\"onSelectEducationalLevel($event)\"\n              [skeleton]=\"loadingForm\"\n              formControlName=\"educationalLevel\">\n            </do-select>\n            <do-input-text\n              [name]=\"'school'\"\n              [label]=\"'School'\"\n              [placeholder]=\"'School'\"\n              [show]=\"!noSchool\"\n              formControlName=\"school\">\n            </do-input-text>\n            <do-input-text\n              [name]=\"'startYear'\"\n              [label]=\"'Start Year'\"\n              [placeholder]=\"'Start Year'\"\n              [type]=\"'number'\"\n              [show]=\"!noSchool\"\n              formControlName=\"startYear\">\n            </do-input-text>\n            <do-input-text\n              [name]=\"'endYear'\"\n              [label]=\"'End Year'\"\n              [placeholder]=\"'End Year'\"\n              [type]=\"'number'\"\n              [show]=\"!noSchool\"\n              formControlName=\"endYear\">\n            </do-input-text>\n          </nb-accordion-item-body>\n        </nb-accordion-item>\n        <nb-accordion-item [expanded]=\"true\">\n          <nb-accordion-item-header>\n            {{'Non Formal Education' | translate}}\n          </nb-accordion-item-header>\n          <nb-accordion-item-body>\n            <do-input-text\n              [name]=\"'trainingName'\"\n              [label]=\"'Training Name'\"\n              [placeholder]=\"'Training Name'\"\n              formControlName=\"trainingName\">\n            </do-input-text>\n            <do-datepicker-range\n              [name]=\"'trainingDate'\"\n              [label]=\"'Training Date'\"\n              [placeholder]=\"'Training Date'\"\n              [skeleton]=\"loadingForm\"\n              formControlName=\"trainingDate\">\n            </do-datepicker-range>\n          </nb-accordion-item-body>\n        </nb-accordion-item>\n      </nb-accordion>\n    </div>\n  </form>\n</do-wizard-page-outlet>", styles: [".nb-theme-default :host nb-accordion{box-shadow:unset}.nb-theme-dark :host nb-accordion{box-shadow:unset}.nb-theme-cosmic :host nb-accordion{box-shadow:unset}.nb-theme-corporate :host nb-accordion{box-shadow:unset}\n"], components: [{ type: i3__namespace.DoWizardPageOutletComponent, selector: "do-wizard-page-outlet", inputs: ["width"] }, { type: i1__namespace$1.NbAccordionComponent, selector: "nb-accordion", inputs: ["multi"] }, { type: i1__namespace$1.NbAccordionItemComponent, selector: "nb-accordion-item", inputs: ["collapsed", "expanded", "disabled"], outputs: ["collapsedChange"] }, { type: i1__namespace$1.NbAccordionItemHeaderComponent, selector: "nb-accordion-item-header" }, { type: i1__namespace$1.NbAccordionItemBodyComponent, selector: "nb-accordion-item-body" }, { type: i3__namespace.DoSelectComponent, selector: "do-select", inputs: ["placeholder", "colLabel", "colInput", "items", "multiple", "loading", "addTag", "closeOnSelect", "clearable", "searchable", "hideSelected", "minTermLength", "maxTermLength", "api", "limit", "offsetNextLoad", "queryParam"], outputs: ["onSelect", "onClear"] }, { type: i3__namespace.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i3__namespace.DoDatePickerRangeComponent, selector: "do-datepicker-range", inputs: ["placeholder", "colLabel", "colInput", "icon", "min", "max", "size", "dateMask"] }], directives: [{ type: i4__namespace.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4__namespace.FormGroupName, selector: "[formGroupName]", inputs: ["formGroupName"] }, { type: i4__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }], pipes: { "translate": i6__namespace.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EmployeeAddEducationComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-employee-add-education',
                        templateUrl: 'employee-add-education.component.html',
                        styleUrls: ['./employee-add-education.component.scss'],
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }]; } });

    var EmployeeAddEmployeeStatusComponent = /** @class */ (function (_super) {
        __extends(EmployeeAddEmployeeStatusComponent, _super);
        function EmployeeAddEmployeeStatusComponent(injector) {
            var _this = _super.call(this, injector, 'employee-status', {
                occupation: [{
                        value: null,
                        disabled: false,
                    }, i4.Validators.required],
                role: [{
                        value: null,
                        disabled: false,
                    }, i4.Validators.required],
                employeeParent: [{
                        value: null,
                        disabled: false,
                    }],
            }) || this;
            _this.injector = injector;
            _this.apiSelectOccupation = _this.api['security']['select-occupation'];
            _this.apiSelectRole = _this.api['security']['select-role'];
            _this.apiSelectEmployeeParent = _this.api['security']['select-employee'];
            return _this;
        }
        EmployeeAddEmployeeStatusComponent.prototype.ngOnInit = function () {
        };
        EmployeeAddEmployeeStatusComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next(true);
            this.destroy$.complete();
            this.destroy$.unsubscribe();
        };
        EmployeeAddEmployeeStatusComponent.prototype.validateRoute = function () {
            var _a;
            if (!((_a = this.formGroup.controls['education']) === null || _a === void 0 ? void 0 : _a.valid)) {
                this.router.navigate(['/app/mgmt/employee/add/education']);
            }
        };
        return EmployeeAddEmployeeStatusComponent;
    }(i3.DoWizardStep));
    EmployeeAddEmployeeStatusComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EmployeeAddEmployeeStatusComponent, deps: [{ token: i0__namespace.Injector }], target: i0__namespace.ɵɵFactoryTarget.Component });
    EmployeeAddEmployeeStatusComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeAddEmployeeStatusComponent, selector: "do-employee-add-employee-status", usesInheritance: true, ngImport: i0__namespace, template: "<do-wizard-page-outlet>\n  <form class=\"form-horizontal\" autocomplete=\"on\" [formGroup]=\"formGroup\" wizardcontent>\n    <div [formGroupName]=\"formGroupName\">\n      <do-select\n        [name]=\"'occupation'\"\n        [label]=\"'Occupation'\"\n        [placeholder]=\"'Occupation'\"\n        [required]=\"true\"\n        [api]=\"apiSelectOccupation\"\n        [searchable]=\"false\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"occupation\">\n      </do-select>\n      <do-select\n        [name]=\"'role'\"\n        [label]=\"'Role'\"\n        [placeholder]=\"'Role'\"\n        [required]=\"true\"\n        [api]=\"apiSelectRole\"\n        [searchable]=\"false\"\n        [multiple]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"role\">\n      </do-select>\n      <do-select\n        [name]=\"'employeeParent'\"\n        [label]=\"'Supervisor'\"\n        [placeholder]=\"'Supervisor'\"\n        [api]=\"apiSelectEmployeeParent\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"employeeParent\">\n      </do-select>\n    </div>\n  </form>\n</do-wizard-page-outlet>\n", styles: [""], components: [{ type: i3__namespace.DoWizardPageOutletComponent, selector: "do-wizard-page-outlet", inputs: ["width"] }, { type: i3__namespace.DoSelectComponent, selector: "do-select", inputs: ["placeholder", "colLabel", "colInput", "items", "multiple", "loading", "addTag", "closeOnSelect", "clearable", "searchable", "hideSelected", "minTermLength", "maxTermLength", "api", "limit", "offsetNextLoad", "queryParam"], outputs: ["onSelect", "onClear"] }], directives: [{ type: i4__namespace.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4__namespace.FormGroupName, selector: "[formGroupName]", inputs: ["formGroupName"] }, { type: i4__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EmployeeAddEmployeeStatusComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-employee-add-employee-status',
                        templateUrl: 'employee-add-employee-status.component.html',
                        styleUrls: ['./employee-add-employee-status.component.scss'],
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }]; } });

    var routes$2 = [{
            path: '',
            component: MgmtEmployeeComponent,
            canActivateChild: [i1$2.AuthGuardChildService],
            children: [
                {
                    path: '',
                    component: EmployeeListPageComponent,
                    data: {
                        code: '#MANAGEMENT-EMPLOYEE-PAGE',
                    },
                },
                {
                    path: 'add',
                    component: EmployeeAddPageComponent,
                    data: {
                        name: 'Manage Employee',
                        code: '#MANAGEMENT-EMPLOYEE-PAGE',
                        baseUrl: '/app/mgmt/employee',
                    },
                    children: [
                        {
                            path: 'personal-information',
                            component: EmployeeAddPersonalInformationComponent,
                            data: {
                                title: 'Personal Information',
                                code: '#MANAGEMENT-EMPLOYEE-PAGE',
                            },
                        },
                        {
                            path: 'education',
                            component: EmployeeAddEducationComponent,
                            data: {
                                title: 'Last Education',
                                code: '#MANAGEMENT-EMPLOYEE-PAGE',
                            },
                        },
                        {
                            path: 'employee-status',
                            component: EmployeeAddEmployeeStatusComponent,
                            data: {
                                title: 'Employee Status',
                                code: '#MANAGEMENT-EMPLOYEE-PAGE',
                            },
                        },
                        {
                            path: '**',
                            redirectTo: 'personal-information',
                        },
                    ],
                },
                {
                    path: 'edit',
                    component: EmployeeEditPageComponent,
                    data: {
                        code: '#MANAGEMENT-EMPLOYEE-PAGE',
                    },
                },
                {
                    path: '',
                    redirectTo: '',
                    pathMatch: 'full',
                },
            ],
        }];
    var DoMgmtEmployeeRoutingModule = /** @class */ (function () {
        function DoMgmtEmployeeRoutingModule() {
        }
        return DoMgmtEmployeeRoutingModule;
    }());
    DoMgmtEmployeeRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtEmployeeRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DoMgmtEmployeeRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtEmployeeRoutingModule, imports: [i1__namespace.RouterModule], exports: [i1.RouterModule] });
    DoMgmtEmployeeRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtEmployeeRoutingModule, imports: [[i1.RouterModule.forChild(routes$2)], i1.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtEmployeeRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.RouterModule.forChild(routes$2)],
                        exports: [i1.RouterModule],
                    }]
            }] });

    var components$2 = [
        MgmtEmployeeComponent,
        EmployeeListPageComponent,
        EmployeeAddPageComponent,
        EmployeeAddPersonalInformationComponent,
        EmployeeAddEducationComponent,
        EmployeeAddEmployeeStatusComponent,
        EmployeeEditPageComponent,
        EmployeeEditPersonalInformationComponent,
        EmployeeEditEducationComponent,
        EmployeeEditEmployeeStatusComponent,
        EmployeeEducationFormalPromptComponent,
        EmployeeEducationNonFormalPromptComponent,
    ];
    var modules$2 = [
        i4.FormsModule,
        i4.ReactiveFormsModule,
        i6.TranslateModule,
        i1$1.NbCardModule,
        i1$1.NbAlertModule,
        i1$1.NbIconModule,
        i1$1.NbButtonModule,
        i1$1.NbAccordionModule,
        i1$1.NbDialogModule.forChild(),
        i1$1.NbTabsetModule,
        i1$1.NbSpinnerModule,
        doTheme.DoThemeModule,
        i3.DoBaseModule,
        i3.DoInputModule,
        i3.DoCheckBoxModule,
        i3.DoButtonModule,
        i3.DoSelectModule,
        i3.DoDatatableModule,
        i3.DoEditorModule,
        i3.DoDatePickerModule,
        i3.DoRadioModule,
        i3.DoLabelModule,
        i3.DoWizardModule.forRoot(),
        DoMgmtEmployeeRoutingModule,
    ];
    var providers$2 = [
        EmployeeService,
    ];
    var DoMgmtEmployeeModule = /** @class */ (function () {
        function DoMgmtEmployeeModule() {
        }
        return DoMgmtEmployeeModule;
    }());
    DoMgmtEmployeeModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtEmployeeModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DoMgmtEmployeeModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtEmployeeModule, declarations: [MgmtEmployeeComponent,
            EmployeeListPageComponent,
            EmployeeAddPageComponent,
            EmployeeAddPersonalInformationComponent,
            EmployeeAddEducationComponent,
            EmployeeAddEmployeeStatusComponent,
            EmployeeEditPageComponent,
            EmployeeEditPersonalInformationComponent,
            EmployeeEditEducationComponent,
            EmployeeEditEmployeeStatusComponent,
            EmployeeEducationFormalPromptComponent,
            EmployeeEducationNonFormalPromptComponent], imports: [i4.FormsModule,
            i4.ReactiveFormsModule,
            i6.TranslateModule,
            i1$1.NbCardModule,
            i1$1.NbAlertModule,
            i1$1.NbIconModule,
            i1$1.NbButtonModule,
            i1$1.NbAccordionModule, i1__namespace$1.NbDialogModule, i1$1.NbTabsetModule,
            i1$1.NbSpinnerModule,
            doTheme.DoThemeModule,
            i3.DoBaseModule,
            i3.DoInputModule,
            i3.DoCheckBoxModule,
            i3.DoButtonModule,
            i3.DoSelectModule,
            i3.DoDatatableModule,
            i3.DoEditorModule,
            i3.DoDatePickerModule,
            i3.DoRadioModule,
            i3.DoLabelModule, i3__namespace.DoWizardModule, DoMgmtEmployeeRoutingModule] });
    DoMgmtEmployeeModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtEmployeeModule, providers: __spreadArray([], __read(providers$2)), imports: [__spreadArray([], __read(modules$2))] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtEmployeeModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: __spreadArray([], __read(modules$2)),
                        declarations: __spreadArray([], __read(components$2)),
                        providers: __spreadArray([], __read(providers$2)),
                    }]
            }] });

    var MgmtJobPlacementComponent = /** @class */ (function () {
        function MgmtJobPlacementComponent() {
        }
        return MgmtJobPlacementComponent;
    }());
    MgmtJobPlacementComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: MgmtJobPlacementComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    MgmtJobPlacementComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: MgmtJobPlacementComponent, selector: "do-mgmt-job-placement", ngImport: i0__namespace, template: "\n    <router-outlet></router-outlet>\n  ", isInline: true, directives: [{ type: i1__namespace.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: MgmtJobPlacementComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-mgmt-job-placement',
                        template: "\n    <router-outlet></router-outlet>\n  ",
                    }]
            }] });

    var JobPlacementService = /** @class */ (function () {
        function JobPlacementService() {
        }
        JobPlacementService.prototype.getAssignmentGroup = function () {
            return this.assignmentGroup;
        };
        JobPlacementService.prototype.setAssignmentGroup = function (assignmentGroup) {
            this.assignmentGroup = assignmentGroup;
        };
        return JobPlacementService;
    }());
    JobPlacementService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: JobPlacementService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    JobPlacementService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: JobPlacementService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: JobPlacementService, decorators: [{
                type: i0.Injectable
            }] });

    var JobPlacementListPageComponent = /** @class */ (function (_super) {
        __extends(JobPlacementListPageComponent, _super);
        function JobPlacementListPageComponent(injector, router, jobPlacementService) {
            var _this = _super.call(this, injector, {
                bpName: [],
            }) || this;
            _this.injector = injector;
            _this.router = router;
            _this.jobPlacementService = jobPlacementService;
            _this.columns = [
                { name: 'Business Partner', prop: 'bpName', frozenLeft: true, sortable: true },
                { name: 'Total Assignment', prop: 'totalAssignment', width: 55, frozenLeft: true },
            ];
            _this.selectionType = ngxDatatable.SelectionType.single;
            _this.sort = {
                asc: ['bpName']
            };
            _this.sortsDefault = [
                { prop: 'bpName', dir: 'asc' }
            ];
            _this.filters = [{ controlName: 'bpName', type: 'input' }];
            _this.apiPath = _this.api['activity']['datatable-assignment-group'];
            return _this;
        }
        JobPlacementListPageComponent.prototype.ngOnInit = function () {
        };
        JobPlacementListPageComponent.prototype.onViewDetail = function (data) {
            this.jobPlacementService.setAssignmentGroup(data);
            this.router.navigate(['/app/mgmt/job-placement', 'edit']);
        };
        return JobPlacementListPageComponent;
    }(i3.BaseFilterComponent));
    JobPlacementListPageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: JobPlacementListPageComponent, deps: [{ token: i0__namespace.Injector }, { token: i1__namespace.Router }, { token: JobPlacementService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    JobPlacementListPageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: JobPlacementListPageComponent, selector: "do-job-placement-list-page", usesInheritance: true, ngImport: i0__namespace, template: "<do-page-outlet [header]=\"'header.job-placement-management'\" [hidefooter]=\"true\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [sort]=\"sort\"\n        [sortsDefault]=\"sortsDefault\"\n        [selectionType]=\"selectionType\"\n        [delete]=\"false\"\n        [add]=\"false\"\n        (onEdit)=\"onViewDetail($event)\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'bpName'\"\n            [label]=\"'Business Partner'\"\n            formControlName=\"bpName\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n\n", styles: [""], components: [{ type: i3__namespace.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i3__namespace.DoDatatableComponent, selector: "do-datatable", inputs: ["rows", "columns", "filters", "selected", "limit", "count", "offset", "externalPaging", "externalSorting", "loadingIndicator", "scrollbarH", "scrollbarV", "reorderable", "sortType", "messages", "selectionType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "header", "column", "footer", "add", "edit", "delete", "filter", "api", "startWithOpenData", "filterEvent", "formGroupFilter", "sort", "sortsDefault", "autoLoad", "filterFn", "filterDoFetchFn", "reloadFn"], outputs: ["onAdd", "onEdit", "onDelete", "onSearch", "onFilter", "onButtonCell", "onLoading", "onSelected"] }, { type: i3__namespace.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }], directives: [{ type: i4__namespace.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: JobPlacementListPageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-job-placement-list-page',
                        styleUrls: ['./job-placement-list-page.component.scss'],
                        templateUrl: './job-placement-list-page.component.html',
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }, { type: i1__namespace.Router }, { type: JobPlacementService }]; } });

    var EmployeePromptComponent = /** @class */ (function () {
        function EmployeePromptComponent(api, ref) {
            this.api = api;
            this.ref = ref;
            this.columns = [
                { name: 'Employee Name', prop: 'user.fullname', frozenLeft: true },
                { name: 'NIK', prop: 'idEmployee', width: 50, frozenLeft: true },
                { name: 'Occupation', prop: 'occupationName', frozenLeft: true },
            ];
            this.disabled = true;
            this.selected = [];
            this.apiPath = this.api['security']['datatable-employee'];
            this.sort = {
                asc: ['user.fullname']
            };
            this.sortsDefault = [
                { prop: 'user.fullname', dir: 'asc' }
            ];
        }
        EmployeePromptComponent.prototype.ngOnInit = function () {
        };
        EmployeePromptComponent.prototype.onSubmit = function () {
            this.ref.close(this.selected);
        };
        EmployeePromptComponent.prototype.onReset = function () {
            this.ref.close();
        };
        EmployeePromptComponent.prototype.onSelected = function (data) {
            if (data) {
                if (data.length) {
                    this.selected = data;
                    this.disabled = false;
                }
                else {
                    this.disabled = true;
                }
            }
            else {
                this.disabled = true;
            }
        };
        return EmployeePromptComponent;
    }());
    EmployeePromptComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EmployeePromptComponent, deps: [{ token: i5$1.API }, { token: i1__namespace$1.NbDialogRef }], target: i0__namespace.ɵɵFactoryTarget.Component });
    EmployeePromptComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeePromptComponent, selector: "do-employee-prompt", inputs: { education: "education" }, ngImport: i0__namespace, template: "<nb-card class=\"modal-form\">\n  <nb-card-header>\n    {{ 'header.employee-selection' | translate }}\n  </nb-card-header>\n  <nb-card-body>\n    <div class=\"row\">\n      <div class=\"col-md-12 col-lg-12\">\n        <do-datatable\n          [api]=\"apiPath\"\n          [columns]=\"columns\"\n          [sort]=\"sort\"\n          [sortsDefault]=\"sortsDefault\"\n          [edit]=\"false\"\n          [add]=\"false\"\n          [delete]=\"false\"\n          (onSelected)=\"onSelected($event)\">\n        </do-datatable>\n      </div>\n    </div>\n  </nb-card-body>\n  <nb-card-footer>\n    <div class=\"row\" style=\"margin: auto; width: 50%\">\n      <div style=\"margin: auto\">\n        <button\n          type=\"reset\"\n          status=\"danger\"\n          (click)=\"onReset()\"\n          class=\"reset-left\"\n          nbButton>\n          {{ 'Cancel' | translate}}\n        </button>\n        <button\n          type=\"submit\"\n          status=\"primary\"\n          (click)=\"onSubmit()\"\n          class=\"submit-right\"\n          [disabled]=\"disabled\"\n          nbButton>\n          {{ 'Choose' | translate}}\n        </button>\n      </div>\n    </div>\n  </nb-card-footer>\n</nb-card>\n", styles: [".nb-theme-default :host .modal-form{max-width:45rem;width:45rem!important}.nb-theme-default :host button[nbButton]{margin:0 .25rem}.nb-theme-default :host .reset-left{margin-right:.25rem}.nb-theme-default :host .submit-right{margin-left:.25rem}@media (max-width: 767.98px){.nb-theme-default :host .modal-form{width:100%!important}}.nb-theme-dark :host .modal-form{max-width:45rem;width:45rem!important}.nb-theme-dark :host button[nbButton]{margin:0 .25rem}.nb-theme-dark :host .reset-left{margin-right:.25rem}.nb-theme-dark :host .submit-right{margin-left:.25rem}@media (max-width: 767.98px){.nb-theme-dark :host .modal-form{width:100%!important}}.nb-theme-cosmic :host .modal-form{max-width:45rem;width:45rem!important}.nb-theme-cosmic :host button[nbButton]{margin:0 .25rem}.nb-theme-cosmic :host .reset-left{margin-right:.25rem}.nb-theme-cosmic :host .submit-right{margin-left:.25rem}@media (max-width: 767.98px){.nb-theme-cosmic :host .modal-form{width:100%!important}}.nb-theme-corporate :host .modal-form{max-width:45rem;width:45rem!important}.nb-theme-corporate :host button[nbButton]{margin:0 .25rem}.nb-theme-corporate :host .reset-left{margin-right:.25rem}.nb-theme-corporate :host .submit-right{margin-left:.25rem}@media (max-width: 767.98px){.nb-theme-corporate :host .modal-form{width:100%!important}}\n"], components: [{ type: i1__namespace$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1__namespace$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1__namespace$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i3__namespace.DoDatatableComponent, selector: "do-datatable", inputs: ["rows", "columns", "filters", "selected", "limit", "count", "offset", "externalPaging", "externalSorting", "loadingIndicator", "scrollbarH", "scrollbarV", "reorderable", "sortType", "messages", "selectionType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "header", "column", "footer", "add", "edit", "delete", "filter", "api", "startWithOpenData", "filterEvent", "formGroupFilter", "sort", "sortsDefault", "autoLoad", "filterFn", "filterDoFetchFn", "reloadFn"], outputs: ["onAdd", "onEdit", "onDelete", "onSearch", "onFilter", "onButtonCell", "onLoading", "onSelected"] }, { type: i1__namespace$1.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i1__namespace$1.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], pipes: { "translate": i6__namespace.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EmployeePromptComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-employee-prompt',
                        templateUrl: 'employee-prompt.component.html',
                        styleUrls: ['employee-prompt.component.scss'],
                    }]
            }], ctorParameters: function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i5$1.API]
                        }] }, { type: i1__namespace$1.NbDialogRef }];
        }, propDecorators: { education: [{
                    type: i0.Input
                }] } });

    var JobPlacementEditPageComponent = /** @class */ (function (_super) {
        __extends(JobPlacementEditPageComponent, _super);
        function JobPlacementEditPageComponent(injector, router, toastr, dialogService, jobPlacementService) {
            var _this = _super.call(this, injector) || this;
            _this.injector = injector;
            _this.router = router;
            _this.toastr = toastr;
            _this.dialogService = dialogService;
            _this.jobPlacementService = jobPlacementService;
            _this.loading = false;
            _this.disabled = false;
            _this.destroy$ = new rxjs.Subject();
            _this.reload = false;
            _this.columns = [
                { name: 'Employee Name', prop: 'employee.fullname', frozenLeft: true, sortable: true },
                { name: 'NIK', prop: 'employee.idEmployee', frozenLeft: true },
                { name: 'Occupation', prop: 'employee.occupation.name', frozenLeft: true },
            ];
            _this.assignmentIds = [];
            return _this;
        }
        JobPlacementEditPageComponent.prototype.ngOnInit = function () {
            var _this = this;
            var _a;
            if (this.jobPlacementService.getAssignmentGroup()) {
                this.apiPath = this.api['activity']['datatable-assignment'];
                this.apiPathAdd = this.api['activity']['post-assignment'];
                this.apiPathDelete = this.api['activity']['delete-assignment'];
                this.sort = {
                    asc: ['employee.fullname']
                };
                this.sortsDefault = [
                    { prop: 'employee.fullname', dir: 'asc' }
                ];
                this.assignmentGroup = this.jobPlacementService.getAssignmentGroup();
                this.loading = true;
                this.keyword = {
                    assignmentGroupId: this.assignmentGroup.id,
                };
                this.exec('master', 'get-business-partner', {
                    id: (_a = this.jobPlacementService.getAssignmentGroup()) === null || _a === void 0 ? void 0 : _a.bpId
                }).
                    pipe(operators.takeUntil(this.destroy$)).subscribe(function (success) {
                    _this.loading = false;
                    _this.businessPartner = success;
                }, function (error) {
                    _this.loading = true;
                    if (error instanceof http.HttpErrorResponse) {
                        error = error['error'];
                    }
                    _this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
                });
            }
            else {
                this.router.navigate(['/app/mgmt/job-placement']);
            }
        };
        JobPlacementEditPageComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next(true);
            this.destroy$.next();
            this.destroy$.complete();
        };
        JobPlacementEditPageComponent.prototype.onAddAssignment = function () {
            var _this = this;
            this.dialogService.open(EmployeePromptComponent)
                .onClose.subscribe(function (data) {
                if (data) {
                    if (data.length) {
                        var employeeIds_1 = [];
                        data.forEach(function (employee) {
                            employeeIds_1.push(employee.id);
                        });
                        var dataRequest = {
                            id: _this.assignmentGroup.id,
                            bpId: _this.assignmentGroup.bpId,
                            employeeIds: employeeIds_1,
                        };
                        _this.disabled = true;
                        _this.http.HTTP_AUTH(_this.apiPathAdd, dataRequest)
                            .pipe(operators.takeUntil(_this.destroy$))
                            .subscribe(function (success) {
                            _this.disabled = false;
                            _this.reload = true;
                            if (_this.assignmentGroup) {
                                _this.assignmentGroup['id'] = success.respStatusMessage['assignmentGroupId'];
                            }
                            _this.keyword = {
                                assignmentGroupId: success.respStatusMessage['assignmentGroupId'],
                            };
                            _this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
                        }, function (error) {
                            _this.disabled = false;
                            _this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
                        });
                    }
                }
            });
        };
        JobPlacementEditPageComponent.prototype.onDeleteAssignmentDialog = function (data, dialog) {
            var _this = this;
            this.reload = false;
            this.assignmentIds = [];
            data.forEach(function (value) {
                _this.assignmentIds.push(value.id);
            });
            this.dialogService.open(dialog, { context: 'alert.delete' });
        };
        JobPlacementEditPageComponent.prototype.onDeleteAssignment = function (ref) {
            var _this = this;
            this.disabled = true;
            var data = {
                id: this.assignmentGroup.id,
                assignmentIds: this.assignmentIds,
            };
            this.http.HTTP_AUTH(this.apiPathDelete, data)
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (success) {
                _this.disabled = false;
                ref.close();
                _this.reload = true;
                _this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
            }, function (error) {
                _this.disabled = false;
                _this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
            });
        };
        return JobPlacementEditPageComponent;
    }(i3.BaseComponent));
    JobPlacementEditPageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: JobPlacementEditPageComponent, deps: [{ token: i0__namespace.Injector }, { token: i1__namespace.Router }, { token: i3__namespace.DoToastrService }, { token: i1__namespace$1.NbDialogService }, { token: JobPlacementService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    JobPlacementEditPageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: JobPlacementEditPageComponent, selector: "do-job-placement-edit-page", usesInheritance: true, ngImport: i0__namespace, template: "<do-page-outlet [header]=\"'header.job-placement-management'\" [url]=\"'/app/mgmt/job-placement'\" [hidefooter]=\"true\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <do-label-text\n        [name]=\"'bpName'\"\n        [label]=\"'Business Partner'\"\n        [skeleton]=\"loading\"\n        [content]=\"businessPartner?.bpName\"\n        [colLabel]=\"3\"\n        [colContent]=\"9\"\n        [dividerlabel]=\"false\">\n      </do-label-text>\n      <do-label-text\n        [name]=\"'email'\"\n        [label]=\"'Email'\"\n        [skeleton]=\"loading\"\n        [content]=\"businessPartner?.email\"\n        [colLabel]=\"3\"\n        [colContent]=\"9\"\n        [dividerlabel]=\"false\">\n      </do-label-text>\n      <do-label-text\n        [name]=\"'address'\"\n        [label]=\"'Address'\"\n        [skeleton]=\"loading\"\n        [content]=\"businessPartner?.address\"\n        [colLabel]=\"3\"\n        [colContent]=\"9\"\n        [dividerlabel]=\"false\">\n      </do-label-text>\n      <do-label-text\n        [name]=\"'telpNumber'\"\n        [label]=\"'Telp.'\"\n        [skeleton]=\"loading\"\n        [content]=\"businessPartner?.telpNumber\"\n        [colLabel]=\"3\"\n        [colContent]=\"9\"\n        [dividerlabel]=\"false\">\n      </do-label-text>\n      <do-datatable\n        [api]=\"apiPath\"\n        [columns]=\"columns\"\n        [filterFn]=\"keyword\"\n        [sort]=\"sort\"\n        [reloadFn]=\"reload\"\n        [edit]=\"false\"\n        (onAdd)=\"onAddAssignment()\"\n        (onDelete)=\"onDeleteAssignmentDialog($event, dialogdeleteassignment)\">\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n\n<ng-template #dialogdeleteassignment let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"danger\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <do-button-submit\n        [colLabel]=\"0\"\n        [colButton]=\"12\"\n        [submitTitle]=\"'Delete'\"\n        [resetTitle]=\"'Cancel'\"\n        [disabledButton]=\"disabled\"\n        (onReset)=\"ref.close()\"\n        (onSubmit)=\"onDeleteAssignment(ref)\">\n      </do-button-submit>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>\n", styles: [""], components: [{ type: i3__namespace.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i3__namespace.DoLabelTextComponent, selector: "do-label-text", inputs: ["colLabel", "colContent", "skeleton", "name", "content", "dividerlabel", "numeric", "label", "nolabel", "required", "showMoreMode", "maxShowMore", "paramError"] }, { type: i3__namespace.DoDatatableComponent, selector: "do-datatable", inputs: ["rows", "columns", "filters", "selected", "limit", "count", "offset", "externalPaging", "externalSorting", "loadingIndicator", "scrollbarH", "scrollbarV", "reorderable", "sortType", "messages", "selectionType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "header", "column", "footer", "add", "edit", "delete", "filter", "api", "startWithOpenData", "filterEvent", "formGroupFilter", "sort", "sortsDefault", "autoLoad", "filterFn", "filterDoFetchFn", "reloadFn"], outputs: ["onAdd", "onEdit", "onDelete", "onSearch", "onFilter", "onButtonCell", "onLoading", "onSelected"] }, { type: i1__namespace$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1__namespace$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1__namespace$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i1__namespace$1.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i3__namespace.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], pipes: { "translate": i6__namespace.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: JobPlacementEditPageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-job-placement-edit-page',
                        styleUrls: ['./job-placement-edit-page.component.scss'],
                        templateUrl: './job-placement-edit-page.component.html',
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }, { type: i1__namespace.Router }, { type: i3__namespace.DoToastrService }, { type: i1__namespace$1.NbDialogService }, { type: JobPlacementService }]; } });

    var routes$1 = [{
            path: '',
            component: MgmtJobPlacementComponent,
            canActivateChild: [i1$2.AuthGuardChildService],
            children: [
                {
                    path: '',
                    component: JobPlacementListPageComponent,
                    data: {
                        code: '#MANAGEMENT-JOB-PLACEMENT-PAGE',
                    },
                },
                {
                    path: 'edit',
                    component: JobPlacementEditPageComponent,
                    data: {
                        code: '#MANAGEMENT-JOB-PLACEMENT-PAGE',
                    },
                },
                {
                    path: '',
                    redirectTo: '',
                    pathMatch: 'full',
                },
            ],
        }];
    var DoMgmtJobPlacementRoutingModule = /** @class */ (function () {
        function DoMgmtJobPlacementRoutingModule() {
        }
        return DoMgmtJobPlacementRoutingModule;
    }());
    DoMgmtJobPlacementRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtJobPlacementRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DoMgmtJobPlacementRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtJobPlacementRoutingModule, imports: [i1__namespace.RouterModule], exports: [i1.RouterModule] });
    DoMgmtJobPlacementRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtJobPlacementRoutingModule, imports: [[i1.RouterModule.forChild(routes$1)], i1.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtJobPlacementRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.RouterModule.forChild(routes$1)],
                        exports: [i1.RouterModule],
                    }]
            }] });

    var components$1 = [
        MgmtJobPlacementComponent,
        JobPlacementListPageComponent,
        JobPlacementEditPageComponent,
        EmployeePromptComponent,
    ];
    var modules$1 = [
        i4.FormsModule,
        i4.ReactiveFormsModule,
        i6.TranslateModule,
        i1$1.NbCardModule,
        i1$1.NbAlertModule,
        i1$1.NbIconModule,
        i1$1.NbButtonModule,
        i1$1.NbAccordionModule,
        i1$1.NbDialogModule.forChild(),
        i1$1.NbTabsetModule,
        i1$1.NbSpinnerModule,
        doTheme.DoThemeModule,
        i3.DoBaseModule,
        i3.DoInputModule,
        i3.DoCheckBoxModule,
        i3.DoButtonModule,
        i3.DoSelectModule,
        i3.DoDatatableModule,
        i3.DoLabelModule,
        DoMgmtJobPlacementRoutingModule,
    ];
    var providers$1 = [
        JobPlacementService,
    ];
    var DoMgmtJobPlacementModule = /** @class */ (function () {
        function DoMgmtJobPlacementModule() {
        }
        return DoMgmtJobPlacementModule;
    }());
    DoMgmtJobPlacementModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtJobPlacementModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DoMgmtJobPlacementModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtJobPlacementModule, declarations: [MgmtJobPlacementComponent,
            JobPlacementListPageComponent,
            JobPlacementEditPageComponent,
            EmployeePromptComponent], imports: [i4.FormsModule,
            i4.ReactiveFormsModule,
            i6.TranslateModule,
            i1$1.NbCardModule,
            i1$1.NbAlertModule,
            i1$1.NbIconModule,
            i1$1.NbButtonModule,
            i1$1.NbAccordionModule, i1__namespace$1.NbDialogModule, i1$1.NbTabsetModule,
            i1$1.NbSpinnerModule,
            doTheme.DoThemeModule,
            i3.DoBaseModule,
            i3.DoInputModule,
            i3.DoCheckBoxModule,
            i3.DoButtonModule,
            i3.DoSelectModule,
            i3.DoDatatableModule,
            i3.DoLabelModule,
            DoMgmtJobPlacementRoutingModule] });
    DoMgmtJobPlacementModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtJobPlacementModule, providers: __spreadArray([], __read(providers$1)), imports: [__spreadArray([], __read(modules$1))] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoMgmtJobPlacementModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: __spreadArray([], __read(modules$1)),
                        declarations: __spreadArray([], __read(components$1)),
                        providers: __spreadArray([], __read(providers$1)),
                    }]
            }] });

    var EmployeeProfileComponent = /** @class */ (function () {
        function EmployeeProfileComponent() {
        }
        return EmployeeProfileComponent;
    }());
    EmployeeProfileComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EmployeeProfileComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    EmployeeProfileComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeProfileComponent, selector: "do-employee-profile", ngImport: i0__namespace, template: "\n    <router-outlet></router-outlet>\n  ", isInline: true, directives: [{ type: i1__namespace.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EmployeeProfileComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-employee-profile',
                        template: "\n    <router-outlet></router-outlet>\n  ",
                    }]
            }] });

    var EmployeeProfilePersonalInformationComponent = /** @class */ (function (_super) {
        __extends(EmployeeProfilePersonalInformationComponent, _super);
        function EmployeeProfilePersonalInformationComponent(injector, userService, profileIndexedDB, authIndexedDB) {
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
                address: [null, [i4.Validators.minLength(5)]],
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
            _this.patternEmail = i5$1.Pattern.EMAIL;
            _this.patternPhoneNumber = i5$1.Pattern.PHONE_NUMBER;
            _this.patternFullname = i5$1.Pattern.FULLNAME;
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
            _this.profileIndexedDB.get('image-base64').then(function (image) {
                _this.formGroupImage.get('image').setValue(image);
                _this.formGroupImage.markAsPending();
            });
            _this.paramSelectGender = [{
                    key: 'parameterGroupCode',
                    value: 'GENDER',
                }];
            _this.paramSelectProvince = [{
                    key: 'country',
                    value: 'undefined',
                }];
            _this.paramSelectCity = [{
                    key: 'province',
                    value: 'undefined',
                }];
            _this.paramSelectDistrict = [{
                    key: 'city',
                    value: 'undefined',
                }];
            _this.paramSelectSubDistrict = [{
                    key: 'district',
                    value: 'undefined',
                }];
            return _this;
        }
        EmployeeProfilePersonalInformationComponent.prototype.ngOnInit = function () {
        };
        EmployeeProfilePersonalInformationComponent.prototype.loadDataMenu = function () {
            var _this = this;
            this.loadingForm = true;
            return this.exec('profile', 'get-profile')
                .pipe(operators.map(function (success) {
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
            }));
        };
        EmployeeProfilePersonalInformationComponent.prototype.onSelectCountry = function (select) {
            this.paramSelectProvince = [
                {
                    key: 'country',
                    value: select ? select.value : 'undefined',
                },
            ];
            this.onClearProvince();
        };
        EmployeeProfilePersonalInformationComponent.prototype.onSelectProvince = function (select) {
            this.paramSelectCity = [
                {
                    key: 'province',
                    value: select ? select.value : 'undefined',
                },
            ];
            this.onClearProvince();
        };
        EmployeeProfilePersonalInformationComponent.prototype.onSelectCity = function (select) {
            this.paramSelectDistrict = [
                {
                    key: 'city',
                    value: select ? select.value : 'undefined',
                },
            ];
            this.onClearCity();
        };
        EmployeeProfilePersonalInformationComponent.prototype.onSelectDistrict = function (select) {
            this.paramSelectSubDistrict = [
                {
                    key: 'district',
                    value: select ? select.value : 'undefined',
                },
            ];
            this.onClearDistrict();
        };
        EmployeeProfilePersonalInformationComponent.prototype.onClearCountry = function () {
            this.formGroup.patchValue({
                province: null,
                city: null,
                district: null,
                subDistrict: null,
            });
        };
        EmployeeProfilePersonalInformationComponent.prototype.onClearProvince = function () {
            this.formGroup.patchValue({
                city: null,
                district: null,
                subDistrict: null,
            });
        };
        EmployeeProfilePersonalInformationComponent.prototype.onClearCity = function () {
            this.formGroup.patchValue({
                district: null,
                subDistrict: null,
            });
        };
        EmployeeProfilePersonalInformationComponent.prototype.onClearDistrict = function () {
            this.formGroup.patchValue({
                subDistrict: null,
            });
        };
        EmployeeProfilePersonalInformationComponent.prototype.uploadImage = function () {
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
        EmployeeProfilePersonalInformationComponent.prototype.valueSelect = function (prop) {
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
        EmployeeProfilePersonalInformationComponent.prototype.valueSelectNonLabel = function (prop) {
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
        EmployeeProfilePersonalInformationComponent.prototype.onSubmit = function () {
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
                        case i5$1.ResponseCode.ERR_SCR0008.toString():
                            _this.formGroup.controls['email'].setErrors({
                                email: true,
                            });
                            break;
                        case i5$1.ResponseCode.ERR_SCR0007A.toString():
                            _this.formGroup.controls['phoneNumber'].setErrors({
                                'error.pattern.phoneNumber': true,
                            });
                            break;
                        case i5$1.ResponseCode.OK_SCR004.toString():
                            _this.userService.updateName(_this.formGroup.get('name').value);
                            break;
                        default:
                            break;
                    }
                }
            });
        };
        return EmployeeProfilePersonalInformationComponent;
    }(i3.BaseFormComponent));
    EmployeeProfilePersonalInformationComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EmployeeProfilePersonalInformationComponent, deps: [{ token: i0__namespace.Injector }, { token: i5$1.USER_SERVICE }, { token: i5$1.PROFILE_INDEXED_DB }, { token: i1__namespace$2.AuthIndexedDBService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    EmployeeProfilePersonalInformationComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeProfilePersonalInformationComponent, selector: "do-employee-profile-personal-information", usesInheritance: true, ngImport: i0__namespace, template: "<div class=\"row\">\n  <div class=\"col-md-4 col-lg-4\">\n    <form [formGroup]=\"formGroupImage\">\n      <do-image-upload\n        [radius]=\"50\"\n        [skeleton]=\"loadingForm\"\n        [required]=\"true\"\n        [uploadFn]=\"uploadFinished\"\n        formControlName=\"image\">\n      </do-image-upload>\n      <do-button\n        class=\"upload-bg\"\n        (onSubmit)=\"uploadImage()\"\n        [name]=\"'Upload'\"\n        [formGroupButton]=\"formGroupImage\"\n        [disabledButton]=\"formGroupImage.pristine\"\n        [skeleton]=\"loadingForm\">\n        <nb-icon class=\"upload-icon\" icon=\"cloud-upload-outline\" pack=\"eva\" buttonicon></nb-icon>\n      </do-button>\n    </form>\n  </div>\n  <div class=\"accordion-container col-md-8 col-lg-8\">\n    <form [formGroup]=\"formGroup\">\n      <do-input-text\n        [name]=\"'name'\"\n        [label]=\"'Name'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"name\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'email'\"\n        [label]=\"'Email'\"\n        [required]=\"true\"\n        [pattern]=\"patternEmail\"\n        [paramError]=\"{value:5}\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"email\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'username'\"\n        [label]=\"'Username'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"username\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'idNumber'\"\n        [label]=\"'ID Number'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"idNumber\">\n      </do-input-text>\n      <do-select\n        [name]=\"'gender'\"\n        [label]=\"'Gender'\"\n        [required]=\"true\"\n        [api]=\"apiSelectGender\"\n        [queryParam]=\"paramSelectGender\"\n        [searchable]=\"false\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"gender\">\n      </do-select>\n      <do-input-text\n        [name]=\"'placeOfBirth'\"\n        [label]=\"'Place of Birth'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"placeOfBirth\">\n      </do-input-text>\n      <do-datepicker\n        [name]=\"'dateOfBirth'\"\n        [label]=\"'Date of Birth'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"dateOfBirth\">\n      </do-datepicker>\n      <do-input-text\n        [name]=\"'height'\"\n        [label]=\"'height.body'\"\n        [placeholder]=\"'Centimeter'\"\n        [type]=\"'number'\"\n        [step]=\"'any'\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"height\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'weight'\"\n        [label]=\"'weight.body'\"\n        [placeholder]=\"'Kilogram'\"\n        [type]=\"'number'\"\n        [step]=\"'any'\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"weight\">\n      </do-input-text>\n      <do-select\n        [name]=\"'bloodType'\"\n        [label]=\"'Blood Type'\"\n        [placeholder]=\"'Blood Type'\"\n        [items]=\"bloodTypeData\"\n        [searchable]=\"false\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"bloodType\">\n      </do-select>\n      <do-input-text\n        [name]=\"'phoneNumber'\"\n        [label]=\"'Telephone'\"\n        [required]=\"true\"\n        [pattern]=\"patternPhoneNumber\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"phoneNumber\">\n      </do-input-text>\n      <do-textarea\n        [name]=\"'address'\"\n        [label]=\"'Address'\"\n        [required]=\"true\"\n        [minLength]=\"minLength\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"address\">\n      </do-textarea>\n      <do-select\n        [name]=\"'country'\"\n        [label]=\"'Country'\"\n        [api]=\"apiSelectCountry\"\n        [skeleton]=\"loadingForm\"\n        (onSelect)=\"onSelectCountry($event)\"\n        (onClear)=\"onClearCountry()\"\n        formControlName=\"country\">\n      </do-select>\n      <do-select\n        [name]=\"'province'\"\n        [label]=\"'Province'\"\n        [api]=\"apiSelectProvince\"\n        [queryParam]=\"paramSelectProvince\"\n        [skeleton]=\"loadingForm\"\n        (onSelect)=\"onSelectProvince($event)\"\n        (onClear)=\"onClearProvince()\"\n        formControlName=\"province\">\n      </do-select>\n      <do-select\n        [name]=\"'city'\"\n        [label]=\"'City'\"\n        [api]=\"apiSelectCity\"\n        [queryParam]=\"paramSelectCity\"\n        [skeleton]=\"loadingForm\"\n        (onSelect)=\"onSelectCity($event)\"\n        (onClear)=\"onClearCity()\"\n        formControlName=\"city\">\n      </do-select>\n      <do-select\n        [name]=\"'district'\"\n        [label]=\"'District'\"\n        [api]=\"apiSelectDistrict\"\n        [queryParam]=\"paramSelectDistrict\"\n        [skeleton]=\"loadingForm\"\n        (onSelect)=\"onSelectDistrict($event)\"\n        (onClear)=\"onClearDistrict()\"\n        formControlName=\"district\">\n      </do-select>\n      <do-select\n        [name]=\"'subDistrict'\"\n        [label]=\"'Sub District'\"\n        [api]=\"apiSelectSubDistrict\"\n        [queryParam]=\"paramSelectSubDistrict\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"subDistrict\">\n      </do-select>\n      <div class=\"offset-sm-3 col-sm-9\">\n        <do-button\n          (onSubmit)=\"onSubmit()\"\n          [name]=\"'Update'\"\n          [disabledButton]=\"disabled\"\n          [formGroupButton]=\"formGroup\"\n          [skeleton]=\"loadingForm\">\n        </do-button>\n      </div>\n    </form>\n  </div>\n</div>", styles: [".nb-theme-default :host nb-accordion{box-shadow:unset}.nb-theme-default :host .upload-bg{display:flex;justify-content:center;align-items:center}.nb-theme-dark :host nb-accordion{box-shadow:unset}.nb-theme-dark :host .upload-bg{display:flex;justify-content:center;align-items:center}.nb-theme-cosmic :host nb-accordion{box-shadow:unset}.nb-theme-cosmic :host .upload-bg{display:flex;justify-content:center;align-items:center}.nb-theme-corporate :host nb-accordion{box-shadow:unset}.nb-theme-corporate :host .upload-bg{display:flex;justify-content:center;align-items:center}\n"], components: [{ type: i3__namespace.ImageUploadComponent, selector: "do-image-upload", inputs: ["image", "height", "width", "radius", "buttonUpload", "skeleton", "uploadFn"], outputs: ["onPreview"] }, { type: i3__namespace.DoButtonComponent, selector: "do-button", inputs: ["formGroupButton", "name", "disabledButton", "type", "status", "size", "skeleton"], outputs: ["onSubmit"] }, { type: i1__namespace$1.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }, { type: i3__namespace.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i3__namespace.DoSelectComponent, selector: "do-select", inputs: ["placeholder", "colLabel", "colInput", "items", "multiple", "loading", "addTag", "closeOnSelect", "clearable", "searchable", "hideSelected", "minTermLength", "maxTermLength", "api", "limit", "offsetNextLoad", "queryParam"], outputs: ["onSelect", "onClear"] }, { type: i3__namespace.DoDatePickerComponent, selector: "do-datepicker", inputs: ["placeholder", "colLabel", "colInput", "min", "max", "size", "dateMask"] }, { type: i3__namespace.DoTextareaComponent, selector: "do-textarea", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "height"] }], directives: [{ type: i4__namespace.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i4__namespace.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EmployeeProfilePersonalInformationComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-employee-profile-personal-information',
                        styleUrls: ['./employee-profile-personal-information.component.scss'],
                        templateUrl: './employee-profile-personal-information.component.html',
                    }]
            }], ctorParameters: function () {
            return [{ type: i0__namespace.Injector }, { type: i5__namespace$1.UserService, decorators: [{
                            type: i0.Inject,
                            args: [i5$1.USER_SERVICE]
                        }] }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i5$1.PROFILE_INDEXED_DB]
                        }] }, { type: i1__namespace$2.AuthIndexedDBService }];
        } });

    var EmployeeProfileEducationFormalPromptComponent = /** @class */ (function () {
        function EmployeeProfileEducationFormalPromptComponent(api, formBuilder, ref) {
            this.ref = ref;
            this.action = 'Add';
            this.formGroup = formBuilder.group({
                educationalLevel: [],
                school: [],
                startYear: [],
                endYear: [],
            });
            this.apiSelectEducationalLevel = api['master']['select-parameter'];
            this.paramSelectEducationalLevel = [{
                    key: 'parameterGroupCode',
                    value: 'EDUCATIONAL_LEVEL',
                }, {
                    key: 'parameterCodeNotIn',
                    value: 'EDUCATIONAL_LEVEL.NO_EDUCATION',
                }];
        }
        EmployeeProfileEducationFormalPromptComponent.prototype.ngOnInit = function () {
            if (this.education) {
                this.action = 'Edit';
                this.formGroup.get('educationalLevel').setValue({
                    label: this.education.educationalLevel,
                    value: this.education.educationalLevelCode
                });
                this.formGroup.get('educationalLevel').disable({ onlySelf: true });
                this.formGroup.get('school').setValue(this.education.schoolName);
                this.formGroup.get('startYear').setValue(this.education.startYear);
                this.formGroup.get('endYear').setValue(this.education.endYear);
            }
            else {
                this.action = 'Add';
            }
        };
        EmployeeProfileEducationFormalPromptComponent.prototype.onSubmit = function () {
            var _a, _b;
            var data = {
                education: {
                    id: (_a = this.education) === null || _a === void 0 ? void 0 : _a.id,
                    educationalLevel: (_b = this.formGroup.get('educationalLevel').value) === null || _b === void 0 ? void 0 : _b.value,
                    schoolName: this.formGroup.get('school').value,
                    startYear: this.formGroup.get('startYear').value,
                    endYear: this.formGroup.get('endYear').value,
                }
            };
            this.ref.close(data);
        };
        EmployeeProfileEducationFormalPromptComponent.prototype.onReset = function () {
            this.ref.close();
        };
        return EmployeeProfileEducationFormalPromptComponent;
    }());
    EmployeeProfileEducationFormalPromptComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EmployeeProfileEducationFormalPromptComponent, deps: [{ token: i5$1.API }, { token: i4__namespace.FormBuilder }, { token: i1__namespace$1.NbDialogRef }], target: i0__namespace.ɵɵFactoryTarget.Component });
    EmployeeProfileEducationFormalPromptComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeProfileEducationFormalPromptComponent, selector: "do-profile-education-formal-prompt", inputs: { education: "education" }, ngImport: i0__namespace, template: "<nb-card class=\"modal-form\">\n  <nb-card-header>\n    {{ 'header.'+action+'-education-formal' | translate }}\n  </nb-card-header>\n  <nb-card-body>\n    <div class=\"row\">\n      <div class=\"col-md-12 col-lg-12\">\n        <form class=\"form-horizontal\" autocomplete=\"on\" [formGroup]=\"formGroup\">\n          <do-select\n            [name]=\"'educationalLevel'\"\n            [label]=\"'Educational Level'\"\n            [placeholder]=\"'Educational Level'\"\n            [required]=\"true\"\n            [api]=\"apiSelectEducationalLevel\"\n            [queryParam]=\"paramSelectEducationalLevel\"\n            [searchable]=\"false\"\n            formControlName=\"educationalLevel\">\n          </do-select>\n          <do-input-text\n            [name]=\"'school'\"\n            [label]=\"'School'\"\n            [placeholder]=\"'School'\"\n            formControlName=\"school\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'startYear'\"\n            [label]=\"'Start Year'\"\n            [placeholder]=\"'Start Year'\"\n            [type]=\"'number'\"\n            formControlName=\"startYear\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'endYear'\"\n            [label]=\"'End Year'\"\n            [placeholder]=\"'End Year'\"\n            [type]=\"'number'\"\n            formControlName=\"endYear\">\n          </do-input-text>\n        </form>\n      </div>\n    </div>\n  </nb-card-body>\n  <nb-card-footer>\n    <do-button-submit\n      [submitTitle]=\"action\"\n      [resetTitle]=\"'Cancel'\"\n      [formGroupButton]=\"formGroup\"\n      (onReset)=\"onReset()\"\n      (onSubmit)=\"onSubmit()\">\n    </do-button-submit>\n  </nb-card-footer>\n</nb-card>\n", styles: [".nb-theme-default :host .modal-form{max-width:40rem;width:40rem!important}@media (max-width: 767.98px){.nb-theme-default :host .modal-form{width:100%!important}}.nb-theme-dark :host .modal-form{max-width:40rem;width:40rem!important}@media (max-width: 767.98px){.nb-theme-dark :host .modal-form{width:100%!important}}.nb-theme-cosmic :host .modal-form{max-width:40rem;width:40rem!important}@media (max-width: 767.98px){.nb-theme-cosmic :host .modal-form{width:100%!important}}.nb-theme-corporate :host .modal-form{max-width:40rem;width:40rem!important}@media (max-width: 767.98px){.nb-theme-corporate :host .modal-form{width:100%!important}}\n"], components: [{ type: i1__namespace$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1__namespace$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1__namespace$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i3__namespace.DoSelectComponent, selector: "do-select", inputs: ["placeholder", "colLabel", "colInput", "items", "multiple", "loading", "addTag", "closeOnSelect", "clearable", "searchable", "hideSelected", "minTermLength", "maxTermLength", "api", "limit", "offsetNextLoad", "queryParam"], outputs: ["onSelect", "onClear"] }, { type: i3__namespace.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i1__namespace$1.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i3__namespace.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i4__namespace.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }], pipes: { "translate": i6__namespace.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EmployeeProfileEducationFormalPromptComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-profile-education-formal-prompt',
                        templateUrl: 'profile-education-formal-prompt.component.html',
                        styleUrls: ['profile-education-formal-prompt.component.scss'],
                    }]
            }], ctorParameters: function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i5$1.API]
                        }] }, { type: i4__namespace.FormBuilder }, { type: i1__namespace$1.NbDialogRef }];
        }, propDecorators: { education: [{
                    type: i0.Input
                }] } });

    var EmployeeProfileEducationNonFormalPromptComponent = /** @class */ (function () {
        function EmployeeProfileEducationNonFormalPromptComponent(api, formBuilder, ref) {
            this.ref = ref;
            this.action = 'Add';
            this.formGroup = formBuilder.group({
                trainingName: [],
                trainingDate: [],
            });
        }
        EmployeeProfileEducationNonFormalPromptComponent.prototype.ngOnInit = function () {
            if (this.training) {
                this.action = 'Edit';
                this.formGroup.get('trainingName').setValue(this.training.name);
                this.formGroup.get('trainingDate').setValue({
                    start: this.training.startDate,
                    end: this.training.endDate,
                });
            }
            else {
                this.action = 'Add';
            }
        };
        EmployeeProfileEducationNonFormalPromptComponent.prototype.onSubmit = function () {
            var _a, _b, _c;
            var data = {
                training: {
                    id: (_a = this.training) === null || _a === void 0 ? void 0 : _a.id,
                    name: this.formGroup.get('trainingName').value,
                    startDate: (_b = this.formGroup.get('trainingDate').value) === null || _b === void 0 ? void 0 : _b.start,
                    endDate: (_c = this.formGroup.get('trainingDate').value) === null || _c === void 0 ? void 0 : _c.end,
                }
            };
            this.ref.close(data);
        };
        EmployeeProfileEducationNonFormalPromptComponent.prototype.onReset = function () {
            this.ref.close();
        };
        return EmployeeProfileEducationNonFormalPromptComponent;
    }());
    EmployeeProfileEducationNonFormalPromptComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EmployeeProfileEducationNonFormalPromptComponent, deps: [{ token: i5$1.API }, { token: i4__namespace.FormBuilder }, { token: i1__namespace$1.NbDialogRef }], target: i0__namespace.ɵɵFactoryTarget.Component });
    EmployeeProfileEducationNonFormalPromptComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeProfileEducationNonFormalPromptComponent, selector: "do-profile-education-nonformal-prompt", inputs: { training: "training" }, ngImport: i0__namespace, template: "<nb-card class=\"modal-form\">\n  <nb-card-header>\n    {{ 'header.'+action+'-education-nonformal' | translate }}\n  </nb-card-header>\n  <nb-card-body>\n    <div class=\"row\">\n      <div class=\"col-md-12 col-lg-12\">\n        <form class=\"form-horizontal\" autocomplete=\"on\" [formGroup]=\"formGroup\">\n          <do-input-text\n            [name]=\"'trainingName'\"\n            [label]=\"'Training Name'\"\n            [required]=\"true\"\n            [placeholder]=\"'Training Name'\"\n            formControlName=\"trainingName\">\n          </do-input-text>\n          <do-datepicker-range\n            [name]=\"'trainingDate'\"\n            [label]=\"'Training Date'\"\n            [placeholder]=\"'Training Date'\"\n            formControlName=\"trainingDate\">\n          </do-datepicker-range>\n        </form>\n      </div>\n    </div>\n  </nb-card-body>\n  <nb-card-footer>\n    <do-button-submit\n      [submitTitle]=\"action\"\n      [resetTitle]=\"'Cancel'\"\n      [formGroupButton]=\"formGroup\"\n      (onReset)=\"onReset()\"\n      (onSubmit)=\"onSubmit()\">\n    </do-button-submit>\n  </nb-card-footer>\n</nb-card>\n", styles: [".nb-theme-default :host .modal-form{max-width:40rem;width:40rem!important}@media (max-width: 767.98px){.nb-theme-default :host .modal-form{width:100%!important}}.nb-theme-dark :host .modal-form{max-width:40rem;width:40rem!important}@media (max-width: 767.98px){.nb-theme-dark :host .modal-form{width:100%!important}}.nb-theme-cosmic :host .modal-form{max-width:40rem;width:40rem!important}@media (max-width: 767.98px){.nb-theme-cosmic :host .modal-form{width:100%!important}}.nb-theme-corporate :host .modal-form{max-width:40rem;width:40rem!important}@media (max-width: 767.98px){.nb-theme-corporate :host .modal-form{width:100%!important}}\n"], components: [{ type: i1__namespace$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1__namespace$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1__namespace$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i3__namespace.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i3__namespace.DoDatePickerRangeComponent, selector: "do-datepicker-range", inputs: ["placeholder", "colLabel", "colInput", "icon", "min", "max", "size", "dateMask"] }, { type: i1__namespace$1.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i3__namespace.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i4__namespace.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }], pipes: { "translate": i6__namespace.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EmployeeProfileEducationNonFormalPromptComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-profile-education-nonformal-prompt',
                        templateUrl: 'profile-education-nonformal-prompt.component.html',
                        styleUrls: ['profile-education-nonformal-prompt.component.scss'],
                    }]
            }], ctorParameters: function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i5$1.API]
                        }] }, { type: i4__namespace.FormBuilder }, { type: i1__namespace$1.NbDialogRef }];
        }, propDecorators: { training: [{
                    type: i0.Input
                }] } });

    var EmployeeProfileEducationComponent = /** @class */ (function (_super) {
        __extends(EmployeeProfileEducationComponent, _super);
        function EmployeeProfileEducationComponent(injector, dialogService) {
            var _this = _super.call(this, injector) || this;
            _this.dialogService = dialogService;
            _this.reloadEducation = false;
            _this.reloadTraining = false;
            _this.columnsEducation = [
                { name: 'Level', prop: 'educationalLevel', frozenLeft: true },
                { name: 'School', prop: 'schoolName', frozenLeft: true },
                { name: 'Year', prop: 'startYear', frozenLeft: true },
            ];
            _this.columnsTraining = [
                { name: 'Training Name', prop: 'name', frozenLeft: true },
                { name: 'Start Date', prop: 'startDate', frozenLeft: true },
                { name: 'End Date', prop: 'endDate', frozenLeft: true },
            ];
            _this.educationIds = [];
            _this.trainingIds = [];
            _this.loadingSubject$ = new rxjs.Subject();
            _this.apiPathEducation = _this.api['profile']['get-profile-education-employee'];
            _this.apiPathTraining = _this.api['profile']['get-profile-training-employee'];
            _this.apiPathDeleteEducation = _this.api['profile']['delete-profile-employee-education'];
            _this.apiPathDeleteTraining = _this.api['profile']['delete-profile-employee-training'];
            _this.sortEducation = {
                desc: ['startYear']
            };
            _this.sortTraining = {
                desc: ['startDate']
            };
            return _this;
        }
        EmployeeProfileEducationComponent.prototype.ngOnInit = function () {
        };
        EmployeeProfileEducationComponent.prototype.loadDataMenu = function () {
            this.reloadEducation = true;
            this.reloadTraining = true;
            return this.loadingSubject$.asObservable();
        };
        EmployeeProfileEducationComponent.prototype.ngOnDestroy = function () { };
        EmployeeProfileEducationComponent.prototype.onAddEducation = function () {
            var _this = this;
            this.reloadEducation = false;
            this.dialogService.open(EmployeeProfileEducationFormalPromptComponent)
                .onClose.subscribe(function (data) {
                if (data) {
                    _super.prototype.onSubmit.call(_this, data, 'profile', 'post-profile-employee-education')
                        .pipe(operators.takeUntil(_this.destroy$))
                        .subscribe(function (response) {
                        if (response.respStatusCode === i5$1.ResponseCode.OK_DEFAULT.toString()) {
                            _this.reloadEducation = true;
                        }
                    });
                }
            });
        };
        EmployeeProfileEducationComponent.prototype.onAddTraining = function () {
            var _this = this;
            this.reloadTraining = false;
            this.dialogService.open(EmployeeProfileEducationNonFormalPromptComponent)
                .onClose.subscribe(function (data) {
                if (data) {
                    _super.prototype.onSubmit.call(_this, data, 'profile', 'post-profile-employee-training')
                        .pipe(operators.takeUntil(_this.destroy$))
                        .subscribe(function (response) {
                        if (response.respStatusCode === i5$1.ResponseCode.OK_DEFAULT.toString()) {
                            _this.reloadTraining = true;
                        }
                    });
                }
            });
        };
        EmployeeProfileEducationComponent.prototype.onEditEducation = function (data) {
            var _this = this;
            this.reloadEducation = false;
            this.dialogService.open(EmployeeProfileEducationFormalPromptComponent, {
                context: {
                    education: data,
                },
            })
                .onClose.subscribe(function (result) {
                if (result) {
                    _super.prototype.onSubmit.call(_this, result, 'profile', 'post-profile-employee-education')
                        .pipe(operators.takeUntil(_this.destroy$))
                        .subscribe(function (response) {
                        if (response.respStatusCode === i5$1.ResponseCode.OK_DEFAULT.toString()) {
                            _this.reloadEducation = true;
                        }
                    });
                }
            });
        };
        EmployeeProfileEducationComponent.prototype.onEditTraining = function (data) {
            var _this = this;
            this.reloadTraining = false;
            this.dialogService.open(EmployeeProfileEducationNonFormalPromptComponent, {
                context: {
                    training: data,
                },
            })
                .onClose.subscribe(function (result) {
                if (result) {
                    _super.prototype.onSubmit.call(_this, result, 'profile', 'post-profile-employee-training')
                        .pipe(operators.takeUntil(_this.destroy$))
                        .subscribe(function (response) {
                        if (response.respStatusCode === i5$1.ResponseCode.OK_DEFAULT.toString()) {
                            _this.reloadTraining = true;
                        }
                    });
                }
            });
        };
        EmployeeProfileEducationComponent.prototype.onDeleteEducationDialog = function (data, dialog) {
            var _this = this;
            this.reloadEducation = false;
            this.educationIds = [];
            data.forEach(function (value) {
                _this.educationIds.push(value.id);
            });
            this.dialogService.open(dialog, { context: 'alert.delete' });
        };
        EmployeeProfileEducationComponent.prototype.onDeleteTrainingDialog = function (data, dialog) {
            var _this = this;
            this.reloadTraining = false;
            this.trainingIds = [];
            data.forEach(function (value) {
                _this.trainingIds.push(value.id);
            });
            this.dialogService.open(dialog, { context: 'alert.delete' });
        };
        EmployeeProfileEducationComponent.prototype.onDeleteEducation = function (ref) {
            var _this = this;
            this.disabled = true;
            this.http.HTTP_AUTH(this.apiPathDeleteEducation, this.educationIds)
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (success) {
                _this.disabled = false;
                ref.close();
                _this.reloadEducation = true;
                _this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
            }, function (error) {
                _this.disabled = false;
                _this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
            });
        };
        EmployeeProfileEducationComponent.prototype.onDeleteTraining = function (ref) {
            var _this = this;
            this.disabled = true;
            this.http.HTTP_AUTH(this.apiPathDeleteTraining, this.trainingIds)
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (success) {
                ref.close();
                _this.reloadTraining = true;
                _this.disabled = false;
                _this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
            }, function (error) {
                _this.disabled = false;
                _this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
            });
        };
        EmployeeProfileEducationComponent.prototype.onLoadEducation = function () {
            this.loadingSubject$.next(true);
        };
        EmployeeProfileEducationComponent.prototype.onLoadTraining = function () {
            this.loadingSubject$.next(true);
        };
        return EmployeeProfileEducationComponent;
    }(i3.BaseFormComponent));
    EmployeeProfileEducationComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EmployeeProfileEducationComponent, deps: [{ token: i0__namespace.Injector }, { token: i1__namespace$1.NbDialogService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    EmployeeProfileEducationComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeProfileEducationComponent, selector: "do-employee-profile-education", usesInheritance: true, ngImport: i0__namespace, template: "<div class=\"row\">\n  <div class=\"col-md-12 col-lg-12\">\n    <div class=\"accordion-container\">\n      <nb-accordion multi>\n        <nb-accordion-item [expanded]=\"true\">\n          <nb-accordion-item-header>\n            {{'Formal Education' | translate}}\n          </nb-accordion-item-header>\n          <nb-accordion-item-body>\n            <do-datatable\n              [api]=\"apiPathEducation\"\n              [columns]=\"columnsEducation\"\n              [filterFn]=\"keyword\"\n              [sort]=\"sortEducation\"\n              [startWithOpenData]=\"false\"\n              [reloadFn]=\"reloadEducation\"\n              (onLoading)=\"onLoadEducation()\"\n              (onEdit)=\"onEditEducation($event)\"\n              (onAdd)=\"onAddEducation()\"\n              (onDelete)=\"onDeleteEducationDialog($event, dialogdeleteeducation)\">\n            </do-datatable>              \n          </nb-accordion-item-body>\n        </nb-accordion-item>\n        <nb-accordion-item [expanded]=\"true\">\n          <nb-accordion-item-header>\n            {{'Non Formal Education' | translate}}\n          </nb-accordion-item-header>\n          <nb-accordion-item-body>\n            <do-datatable\n              [api]=\"apiPathTraining\"\n              [columns]=\"columnsTraining\"\n              [filterFn]=\"keyword\"\n              [sort]=\"sortTraining\"\n              [startWithOpenData]=\"false\"\n              [reloadFn]=\"reloadTraining\"\n              (onLoading)=\"onLoadTraining()\"\n              (onEdit)=\"onEditTraining($event)\"\n              (onAdd)=\"onAddTraining()\"\n              (onDelete)=\"onDeleteTrainingDialog($event, dialogdeletetraining)\">\n            </do-datatable>\n          </nb-accordion-item-body>\n        </nb-accordion-item>\n      </nb-accordion>\n    </div>\n  </div>\n</div>\n\n<ng-template #dialogdeleteeducation let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"danger\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <do-button-submit\n        [colLabel]=\"0\"\n        [colButton]=\"12\"\n        [submitTitle]=\"'Delete'\"\n        [resetTitle]=\"'Cancel'\"\n        [disabledButton]=\"disabled\"\n        (onReset)=\"ref.close()\"\n        (onSubmit)=\"onDeleteEducation(ref)\">\n      </do-button-submit>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>\n\n<ng-template #dialogdeletetraining let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"danger\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <do-button-submit\n        [colLabel]=\"0\"\n        [colButton]=\"12\"\n        [submitTitle]=\"'Delete'\"\n        [resetTitle]=\"'Cancel'\"\n        [disabledButton]=\"disabled\"\n        (onReset)=\"ref.close()\"\n        (onSubmit)=\"onDeleteTraining(ref)\">\n      </do-button-submit>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>", styles: [".nb-theme-default :host nb-accordion{box-shadow:unset}.nb-theme-dark :host nb-accordion{box-shadow:unset}.nb-theme-cosmic :host nb-accordion{box-shadow:unset}.nb-theme-corporate :host nb-accordion{box-shadow:unset}\n"], components: [{ type: i1__namespace$1.NbAccordionComponent, selector: "nb-accordion", inputs: ["multi"] }, { type: i1__namespace$1.NbAccordionItemComponent, selector: "nb-accordion-item", inputs: ["collapsed", "expanded", "disabled"], outputs: ["collapsedChange"] }, { type: i1__namespace$1.NbAccordionItemHeaderComponent, selector: "nb-accordion-item-header" }, { type: i1__namespace$1.NbAccordionItemBodyComponent, selector: "nb-accordion-item-body" }, { type: i3__namespace.DoDatatableComponent, selector: "do-datatable", inputs: ["rows", "columns", "filters", "selected", "limit", "count", "offset", "externalPaging", "externalSorting", "loadingIndicator", "scrollbarH", "scrollbarV", "reorderable", "sortType", "messages", "selectionType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "header", "column", "footer", "add", "edit", "delete", "filter", "api", "startWithOpenData", "filterEvent", "formGroupFilter", "sort", "sortsDefault", "autoLoad", "filterFn", "filterDoFetchFn", "reloadFn"], outputs: ["onAdd", "onEdit", "onDelete", "onSearch", "onFilter", "onButtonCell", "onLoading", "onSelected"] }, { type: i1__namespace$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1__namespace$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1__namespace$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i1__namespace$1.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i3__namespace.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], pipes: { "translate": i6__namespace.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EmployeeProfileEducationComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-employee-profile-education',
                        styleUrls: ['./employee-profile-education.component.scss'],
                        templateUrl: './employee-profile-education.component.html',
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }, { type: i1__namespace$1.NbDialogService }]; } });

    var EmployeeProfileEmployeeStatusComponent = /** @class */ (function (_super) {
        __extends(EmployeeProfileEmployeeStatusComponent, _super);
        function EmployeeProfileEmployeeStatusComponent(injector) {
            var _this = _super.call(this, injector) || this;
            _this.injector = injector;
            _this.loadingForm = false;
            return _this;
        }
        EmployeeProfileEmployeeStatusComponent.prototype.ngOnInit = function () {
        };
        EmployeeProfileEmployeeStatusComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next(true);
            this.destroy$.complete();
            this.destroy$.unsubscribe();
        };
        EmployeeProfileEmployeeStatusComponent.prototype.loadDataMenu = function () {
            var _this = this;
            this.loadingForm = true;
            return this.exec('profile', 'get-profile-employee-status').pipe(operators.map(function (success) {
                _this.loadingForm = false;
                _this.dataEmployeeStatus = success;
            }));
        };
        return EmployeeProfileEmployeeStatusComponent;
    }(i3.BaseFormComponent));
    EmployeeProfileEmployeeStatusComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EmployeeProfileEmployeeStatusComponent, deps: [{ token: i0__namespace.Injector }], target: i0__namespace.ɵɵFactoryTarget.Component });
    EmployeeProfileEmployeeStatusComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeProfileEmployeeStatusComponent, selector: "do-employee-profile-employee-status", usesInheritance: true, ngImport: i0__namespace, template: "<div class=\"row\">\n  <div class=\"col-md-12 col-lg-12\">\n    <do-label-text\n      [label]=\"'NIK'\"\n      [colLabel]=\"3\"\n      [colContent]=\"9\"\n      [dividerlabel]=\"false\"\n      [skeleton]=\"loadingForm\"\n      [content]=\"dataEmployeeStatus?.idEmployee\">\n    </do-label-text>\n    <do-label-text\n      [label]=\"'Occupation'\"\n      [colLabel]=\"3\"\n      [colContent]=\"9\"\n      [dividerlabel]=\"false\"\n      [skeleton]=\"loadingForm\"\n      [content]=\"dataEmployeeStatus?.occupation?.name\">\n    </do-label-text>\n    <do-label-text\n      [label]=\"'Supervisor'\"\n      [colLabel]=\"3\"\n      [colContent]=\"9\"\n      [dividerlabel]=\"false\"\n      [skeleton]=\"loadingForm\"\n      [content]=\"dataEmployeeStatus?.parentLabel\">\n    </do-label-text>\n  </div>\n</div>", styles: [""], components: [{ type: i3__namespace.DoLabelTextComponent, selector: "do-label-text", inputs: ["colLabel", "colContent", "skeleton", "name", "content", "dividerlabel", "numeric", "label", "nolabel", "required", "showMoreMode", "maxShowMore", "paramError"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EmployeeProfileEmployeeStatusComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-employee-profile-employee-status',
                        styleUrls: ['./employee-profile-employee-status.component.scss'],
                        templateUrl: './employee-profile-employee-status.component.html',
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }]; } });

    var EmployeeProfilePageComponent = /** @class */ (function (_super) {
        __extends(EmployeeProfilePageComponent, _super);
        function EmployeeProfilePageComponent(injector, toastr) {
            var _this = _super.call(this, injector) || this;
            _this.injector = injector;
            _this.toastr = toastr;
            _this.loading = false;
            _this.tab = 'personalInfo';
            _this.destroy$ = new rxjs.Subject();
            return _this;
        }
        EmployeeProfilePageComponent.prototype.ngOnInit = function () {
        };
        EmployeeProfilePageComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next(true);
            this.destroy$.next();
            this.destroy$.complete();
        };
        EmployeeProfilePageComponent.prototype.toggleLoadingAnimation = function (event) {
            var _this = this;
            this.tab = event.tabId;
            this.loading = true;
            if (this.tab === 'personalInfo') {
                this.personalInfo.loadDataMenu()
                    .pipe(operators.takeUntil(this.destroy$))
                    .subscribe(function () {
                    _this.loading = false;
                }, function (error) {
                    if (error instanceof http.HttpErrorResponse) {
                        error = error['error'];
                    }
                    _this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
                });
            }
            else if (this.tab === 'education') {
                this.education.loadDataMenu()
                    .pipe(operators.takeUntil(this.destroy$))
                    .subscribe(function () {
                    _this.loading = false;
                }, function (error) {
                    if (error instanceof http.HttpErrorResponse) {
                        error = error['error'];
                    }
                    _this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
                });
            }
            else {
                this.employeeStatus.loadDataMenu()
                    .pipe(operators.takeUntil(this.destroy$))
                    .subscribe(function () {
                    _this.loading = false;
                }, function (error) {
                    if (error instanceof http.HttpErrorResponse) {
                        error = error['error'];
                    }
                    _this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
                });
            }
        };
        return EmployeeProfilePageComponent;
    }(i3.BaseComponent));
    EmployeeProfilePageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EmployeeProfilePageComponent, deps: [{ token: i0__namespace.Injector }, { token: i3__namespace.DoToastrService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    EmployeeProfilePageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeProfilePageComponent, selector: "do-employee-profile-page", viewQueries: [{ propertyName: "personalInfo", first: true, predicate: ["personalInfo"], descendants: true, static: true }, { propertyName: "education", first: true, predicate: ["education"], descendants: true, static: true }, { propertyName: "employeeStatus", first: true, predicate: ["employeeStatus"], descendants: true, static: true }], usesInheritance: true, ngImport: i0__namespace, template: "<do-page-outlet [header]=\"'Profile'\" [hidefooter]=\"true\">\n  <nb-tabset fullWidth (changeTab)=\"toggleLoadingAnimation($event)\" pagecontent>\n    <nb-tab tabId=\"personalInfo\" tabTitle=\"{{'tab.personal-info' | translate}}\" [lazyLoad]=\"true\">\n      <do-employee-profile-personal-information #personalInfo></do-employee-profile-personal-information>\n    </nb-tab>\n    <nb-tab tabId=\"education\" tabTitle=\"{{'tab.education' | translate}}\">\n      <do-employee-profile-education #education></do-employee-profile-education>\n    </nb-tab>\n    <nb-tab tabId=\"employeeStatus\" tabTitle=\"{{'tab.employee-status' | translate}}\">\n      <do-employee-profile-employee-status #employeeStatus></do-employee-profile-employee-status>\n    </nb-tab>\n  </nb-tabset>\n</do-page-outlet>\n", styles: [""], components: [{ type: i3__namespace.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i1__namespace$1.NbTabsetComponent, selector: "nb-tabset", inputs: ["fullWidth", "routeParam"], outputs: ["changeTab"] }, { type: i1__namespace$1.NbTabComponent, selector: "nb-tab", inputs: ["badgeStatus", "badgeDot", "disabled", "responsive", "active", "lazyLoad", "tabTitle", "tabId", "tabIcon", "route", "badgeText", "badgePosition"] }, { type: EmployeeProfilePersonalInformationComponent, selector: "do-employee-profile-personal-information" }, { type: EmployeeProfileEducationComponent, selector: "do-employee-profile-education" }, { type: EmployeeProfileEmployeeStatusComponent, selector: "do-employee-profile-employee-status" }], pipes: { "translate": i6__namespace.TranslatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EmployeeProfilePageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'do-employee-profile-page',
                        styleUrls: ['./employee-profile-page.component.scss'],
                        templateUrl: './employee-profile-page.component.html',
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }, { type: i3__namespace.DoToastrService }]; }, propDecorators: { personalInfo: [{
                    type: i0.ViewChild,
                    args: ['personalInfo', { static: true }]
                }], education: [{
                    type: i0.ViewChild,
                    args: ['education', { static: true }]
                }], employeeStatus: [{
                    type: i0.ViewChild,
                    args: ['employeeStatus', { static: true }]
                }] } });

    var routes = [{
            path: '',
            component: EmployeeProfileComponent,
            canActivateChild: [i1$2.AuthGuardChildService],
            children: [
                {
                    path: '',
                    component: EmployeeProfilePageComponent,
                    data: {
                        code: '#EMPLOYEE-PROFILE-PAGE',
                    },
                },
                {
                    path: '',
                    redirectTo: '',
                    pathMatch: 'full',
                },
            ],
        }];
    var DoEmployeeProfileRoutingModule = /** @class */ (function () {
        function DoEmployeeProfileRoutingModule() {
        }
        return DoEmployeeProfileRoutingModule;
    }());
    DoEmployeeProfileRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoEmployeeProfileRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DoEmployeeProfileRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoEmployeeProfileRoutingModule, imports: [i1__namespace.RouterModule], exports: [i1.RouterModule] });
    DoEmployeeProfileRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoEmployeeProfileRoutingModule, imports: [[i1.RouterModule.forChild(routes)], i1.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoEmployeeProfileRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.RouterModule.forChild(routes)],
                        exports: [i1.RouterModule],
                    }]
            }] });

    var components = [
        EmployeeProfileComponent,
        EmployeeProfilePageComponent,
        EmployeeProfilePersonalInformationComponent,
        EmployeeProfileEducationComponent,
        EmployeeProfileEmployeeStatusComponent,
        EmployeeProfileEducationFormalPromptComponent,
        EmployeeProfileEducationNonFormalPromptComponent,
    ];
    var modules = [
        i4.FormsModule,
        i4.ReactiveFormsModule,
        i6.TranslateModule,
        i1$1.NbCardModule,
        i1$1.NbAlertModule,
        i1$1.NbIconModule,
        i1$1.NbButtonModule,
        i1$1.NbAccordionModule,
        i1$1.NbDialogModule.forChild(),
        i1$1.NbTabsetModule,
        i1$1.NbSpinnerModule,
        doTheme.DoThemeModule,
        i3.DoBaseModule,
        i3.DoInputModule,
        i3.DoCheckBoxModule,
        i3.DoButtonModule,
        i3.DoSelectModule,
        i3.DoDatatableModule,
        i3.DoEditorModule,
        i3.DoLabelModule,
        i3.DoDatePickerModule,
        i3.DoImageModule,
        DoEmployeeProfileRoutingModule,
    ];
    var providers = [];
    var DoEmployeeProfileModule = /** @class */ (function () {
        function DoEmployeeProfileModule() {
        }
        return DoEmployeeProfileModule;
    }());
    DoEmployeeProfileModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoEmployeeProfileModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DoEmployeeProfileModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoEmployeeProfileModule, declarations: [EmployeeProfileComponent,
            EmployeeProfilePageComponent,
            EmployeeProfilePersonalInformationComponent,
            EmployeeProfileEducationComponent,
            EmployeeProfileEmployeeStatusComponent,
            EmployeeProfileEducationFormalPromptComponent,
            EmployeeProfileEducationNonFormalPromptComponent], imports: [i4.FormsModule,
            i4.ReactiveFormsModule,
            i6.TranslateModule,
            i1$1.NbCardModule,
            i1$1.NbAlertModule,
            i1$1.NbIconModule,
            i1$1.NbButtonModule,
            i1$1.NbAccordionModule, i1__namespace$1.NbDialogModule, i1$1.NbTabsetModule,
            i1$1.NbSpinnerModule,
            doTheme.DoThemeModule,
            i3.DoBaseModule,
            i3.DoInputModule,
            i3.DoCheckBoxModule,
            i3.DoButtonModule,
            i3.DoSelectModule,
            i3.DoDatatableModule,
            i3.DoEditorModule,
            i3.DoLabelModule,
            i3.DoDatePickerModule,
            i3.DoImageModule,
            DoEmployeeProfileRoutingModule] });
    DoEmployeeProfileModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoEmployeeProfileModule, providers: __spreadArray([], __read(providers)), imports: [__spreadArray([], __read(modules))] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DoEmployeeProfileModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: __spreadArray([], __read(modules)),
                        declarations: __spreadArray([], __read(components)),
                        providers: __spreadArray([], __read(providers)),
                    }]
            }] });

    /*
     * Public API Surface of do-sys
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.DoEmployeeProfileModule = DoEmployeeProfileModule;
    exports.DoLocaleModule = DoLocaleModule;
    exports.DoMgmtAppsModule = DoMgmtAppsModule;
    exports.DoMgmtBusinessPartnerModule = DoMgmtBusinessPartnerModule;
    exports.DoMgmtCorporateModule = DoMgmtCorporateModule;
    exports.DoMgmtEmployeeModule = DoMgmtEmployeeModule;
    exports.DoMgmtInventoryModule = DoMgmtInventoryModule;
    exports.DoMgmtJobPlacementModule = DoMgmtJobPlacementModule;
    exports.DoMgmtMenuModule = DoMgmtMenuModule;
    exports.DoMgmtOccupationModule = DoMgmtOccupationModule;
    exports.DoMgmtRoleModule = DoMgmtRoleModule;
    exports.DoParameterModule = DoParameterModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=dongkap-do-sys.umd.js.map
