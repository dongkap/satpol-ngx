import * as i0 from '@angular/core';
import { Injectable, NgModule, Component, ViewEncapsulation, Input, EventEmitter, Output, forwardRef, Directive, Attribute, HostBinding, HostListener, ViewChild, Optional, Inject, LOCALE_ID, Self, ChangeDetectorRef, ChangeDetectionStrategy, TemplateRef, ContentChild } from '@angular/core';
import * as i1 from '@angular/forms';
import { FormsModule, NG_VALIDATORS, COMPOSITION_BUFFER_MODE, Validators, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import * as i4 from '@angular/common';
import { CommonModule, formatDate } from '@angular/common';
import * as i5 from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import * as i4$1 from 'ngx-bootstrap/collapse';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import * as i2 from '@nebular/theme';
import { NbGlobalPhysicalPosition, NbCardModule, NbIconModule, NbSelectModule, NbInputModule, NbButtonModule, NbCheckboxModule, NbRadioModule, NbCalendarSize, NbDatepickerModule } from '@nebular/theme';
import * as i2$1 from '@angular/router';
import { RouterModule, Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ReplaySubject, Subject, of, BehaviorSubject } from 'rxjs';
import { take, map, catchError, switchMap, takeUntil } from 'rxjs/operators';
import * as i2$3 from '@angular/platform-browser';
import { ɵgetDOM } from '@angular/platform-browser';
import { createTextMaskInputElement } from 'text-mask-core/dist/textMaskCore';
import * as i1$1 from '@swimlane/ngx-datatable';
import { SortType, SelectionType, ColumnMode, NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DateFormat, HTTP_SERVICE, HttpMethod, DatePattern, API } from '@dongkap/do-core';
import * as i3 from '@ng-select/ng-select';
import { NgSelectModule } from '@ng-select/ng-select';
import * as i3$1 from 'ngx-quill';
import { QuillModule } from 'ngx-quill';
import * as i2$2 from '@nebular/date-fns';
import { NbDateFnsDateModule } from '@nebular/date-fns';
import { NbMomentDateModule } from '@nebular/moment';
import { id } from 'date-fns/esm/locale';
import { HttpErrorResponse } from '@angular/common/http';

class DoToastrService {
    constructor(toastrService, translate) {
        this.toastrService = toastrService;
        this.translate = translate;
        this.status = 'success';
        this.position = NbGlobalPhysicalPosition.TOP_RIGHT;
        this.duration = 5000;
        this.hasIcon = true;
        this.destroyByClick = true;
        this.preventDuplicates = false;
    }
    show(content, title, status, position, duration, hasIcon, destroyByClick) {
        if (!title) {
            title = this.title(status);
        }
        this.build(content, title, status, position, duration, hasIcon, destroyByClick);
    }
    showI18n(content, contentHasI18n, title, status, position, duration, hasIcon, destroyByClick) {
        if (!title) {
            title = this.title(status);
        }
        this.translate.get(title).subscribe((resultTitle) => {
            title = resultTitle;
            if (contentHasI18n) {
                this.build(content, title, status, position, duration, hasIcon, destroyByClick);
            }
            else {
                this.translate.get(content).subscribe((resultContent) => {
                    this.build(resultContent, title, status, position, duration, hasIcon, destroyByClick);
                });
            }
        });
    }
    build(content, title, status, position, duration, hasIcon, destroyByClick) {
        this.toastrService.show(content, title, {
            status: status ? status : this.status,
            position: position ? position : this.position,
            duration: duration ? duration : this.duration,
            hasIcon: hasIcon ? hasIcon : this.hasIcon,
            destroyByClick: destroyByClick ? destroyByClick : this.destroyByClick,
            preventDuplicates: this.preventDuplicates,
        });
    }
    title(status) {
        let title = 'Success';
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
    }
}
DoToastrService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoToastrService, deps: [{ token: i2.NbToastrService }, { token: i5.TranslateService }], target: i0.ɵɵFactoryTarget.Injectable });
DoToastrService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoToastrService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoToastrService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i2.NbToastrService }, { type: i5.TranslateService }]; } });

const TOASTR_COMPONENTS = [];
const TOASTR_PROVIDERS = [
    DoToastrService,
];
class DoToastrModule {
    static forRoot() {
        return {
            ngModule: DoToastrModule,
            providers: [
                ...TOASTR_PROVIDERS,
            ],
        };
    }
}
DoToastrModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoToastrModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoToastrModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoToastrModule, imports: [FormsModule] });
DoToastrModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoToastrModule, imports: [[
            FormsModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoToastrModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        FormsModule,
                    ],
                    declarations: [
                        ...TOASTR_COMPONENTS,
                    ],
                    exports: [
                        ...TOASTR_COMPONENTS,
                    ],
                }]
        }] });

class DoErrorMessageComponent {
    constructor() {
        this.hasErrors = false;
        this.errorMessages = [];
    }
}
DoErrorMessageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoErrorMessageComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DoErrorMessageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoErrorMessageComponent, selector: "do-error-message", inputs: { hasErrors: "hasErrors", errorMessages: "errorMessages", param: "param" }, ngImport: i0, template: "<div *ngIf=\"hasErrors\">\n  <div *ngFor=\"let message of errorMessages\">\n    <span class=\"caption status-danger\">\n      {{message | translate:param}}\n    </span>\n  </div>\n</div>", styles: [".error-message{width:100%;margin-top:.25rem;font-size:80%;color:#f86c6b}\n"], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "translate": i5.TranslatePipe }, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoErrorMessageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-error-message',
                    styleUrls: ['./do-error-message.component.scss'],
                    templateUrl: './do-error-message.component.html',
                    encapsulation: ViewEncapsulation.None,
                }]
        }], propDecorators: { hasErrors: [{
                type: Input
            }], errorMessages: [{
                type: Input
            }], param: [{
                type: Input
            }] } });

class DoWarnMessageComponent {
}
DoWarnMessageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoWarnMessageComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DoWarnMessageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoWarnMessageComponent, selector: "do-warn-message", inputs: { warnMessage: "warnMessage", param: "param" }, ngImport: i0, template: "<div *ngIf=\"warnMessage\">\n    <span class=\"caption status-warning warn-message\">{{warnMessage | translate}}</span>\n</div>", styles: [".warn-message{font-style:italic}\n"], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], pipes: { "translate": i5.TranslatePipe }, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoWarnMessageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-warn-message',
                    styleUrls: ['./do-warn-message.component.scss'],
                    templateUrl: './do-warn-message.component.html',
                    encapsulation: ViewEncapsulation.None,
                }]
        }], propDecorators: { warnMessage: [{
                type: Input
            }], param: [{
                type: Input
            }] } });

class DoContainerOutletComponent {
    constructor() {
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
}
DoContainerOutletComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoContainerOutletComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DoContainerOutletComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoContainerOutletComponent, selector: "do-container-outlet", inputs: { name: "name", label: "label", colLabel: "colLabel", colContent: "colContent", nolabel: "nolabel", dividerlabel: "dividerlabel", required: "required", hasErrors: "hasErrors", errorMessages: "errorMessages", warnMessage: "warnMessage", paramError: "paramError", skeleton: "skeleton", show: "show" }, ngImport: i0, template: "<div class=\"form-group row\" *ngIf=\"show\">\n  <div\n    *ngIf=\"(!skeleton || nolabel);else labelskeleton\"\n    class=\"col-sm-{{colLabel}}\">\n    <label\n      for=\"{{name}}\"\n      class=\"label col-form-label\">\n      {{label | translate}}{{ (!nolabel) ? ((required) ? ' *' : '') : '' }}\n    </label>\n    <label *ngIf=\"dividerlabel\" class=\"divider-label col-form-label\">:</label>\n  </div>\n  <ng-template #labelskeleton>\n    <div class=\"col-sm-{{colLabel}}\">\n      <label\n        class=\"label col-form-label\"\n        [ngClass]=\"{\n          'label-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </label>\n    </div>\n  </ng-template>\n  <ng-content></ng-content>\n  <div class=\"offset-sm-{{colLabel}} col-sm-{{colContent}}\">\n    <do-warn-message *ngIf=\"!skeleton\" [warnMessage]=\"warnMessage\"></do-warn-message>\n    <do-error-message [hasErrors]=\"hasErrors\" [errorMessages]=\"errorMessages\" [param]=\"paramError\">\n    </do-error-message>\n  </div>\n</div>", styles: ["label.divider-label{float:right}@media (max-width: 767.98px){label.divider-label{display:none}}label.float-right{display:none;float:right!important}@media (max-width: 767.98px){label.float-right{display:inline;float:unset!important;padding-left:.75rem}}\n"], components: [{ type: DoWarnMessageComponent, selector: "do-warn-message", inputs: ["warnMessage", "param"] }, { type: DoErrorMessageComponent, selector: "do-error-message", inputs: ["hasErrors", "errorMessages", "param"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], pipes: { "translate": i5.TranslatePipe }, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoContainerOutletComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-container-outlet',
                    styleUrls: ['./do-container-outlet.component.scss'],
                    templateUrl: './do-container-outlet.component.html',
                    encapsulation: ViewEncapsulation.None,
                }]
        }], propDecorators: { name: [{
                type: Input
            }], label: [{
                type: Input
            }], colLabel: [{
                type: Input
            }], colContent: [{
                type: Input
            }], nolabel: [{
                type: Input
            }], dividerlabel: [{
                type: Input
            }], required: [{
                type: Input
            }], hasErrors: [{
                type: Input
            }], errorMessages: [{
                type: Input
            }], warnMessage: [{
                type: Input
            }], paramError: [{
                type: Input
            }], skeleton: [{
                type: Input
            }], show: [{
                type: Input
            }] } });

class DoPageOutletComponent {
    constructor(router) {
        this.router = router;
        this.width = 12;
        this.hidefooter = false;
        this.showToggle = true;
        this.isCollapsed = false;
        this.iconToggle = 'arrow-ios-downward-outline';
        this.selectChange = new EventEmitter();
        this.onCollapsed = new EventEmitter();
        this.onExpanded = new EventEmitter();
    }
    back() {
        this.router.navigate([this.url]);
        return false;
    }
    onChangeSelect(event) {
        this.selected = event;
        this.selectChange.emit(event);
    }
    collapsed(event) {
        this.onCollapsed.emit(event);
    }
    expanded(event) {
        this.onExpanded.emit(event);
    }
    toggleCollapse() {
        this.isCollapsed = !this.isCollapsed;
        this.iconToggle = this.isCollapsed ? 'arrow-ios-upward-outline' : 'arrow-ios-downward-outline';
    }
}
DoPageOutletComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoPageOutletComponent, deps: [{ token: i2$1.Router }], target: i0.ɵɵFactoryTarget.Component });
DoPageOutletComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoPageOutletComponent, selector: "do-page-outlet", inputs: { header: "header", url: "url", width: "width", dataSelect: "dataSelect", selected: "selected", param: "param", hidefooter: "hidefooter", showToggle: "showToggle", isCollapsed: "isCollapsed", iconToggle: "iconToggle" }, outputs: { selectChange: "selectChange", onCollapsed: "onCollapsed", onExpanded: "onExpanded" }, ngImport: i0, template: "<div class=\"row\">\n  <div class=\"col-lg-{{width}}\">\n    <nb-card>\n      <nb-card-header>\n        <nav class=\"navigation\">\n          <nb-icon icon=\"arrow-back\" class=\"back-link\" pack=\"eva\" (click)=\"back()\" *ngIf=\"url\"></nb-icon>\n          {{header | translate:param}}\n        </nav>\n        <div class=\"row\">\n          <nb-select *ngIf=\"dataSelect\" [selected]=\"selected\" (selectedChange)=\"onChangeSelect($event)\">\n            <nb-option *ngFor=\"let data of dataSelect\" [value]=\"data\">{{ data }}</nb-option>\n          </nb-select>\n          <nb-icon icon=\"{{iconToggle}}\" class=\"toggle-icon\" pack=\"eva\" (click)=\"toggleCollapse()\" *ngIf=\"showToggle\"></nb-icon>\n        </div>\n      </nb-card-header>\n      <nb-card-body\n        (collapsed)=\"collapsed($event)\"\n        (expanded)=\"expanded($event)\"\n        [collapse]=\"isCollapsed\">\n        <ng-content select=\"[pagecontent]\"></ng-content>        \n      </nb-card-body>\n      <nb-card-footer *ngIf=\"!hidefooter\">\n        <ng-content select=\"[pagefooter]\"></ng-content>\n      </nb-card-footer>\n    </nb-card>\n  </div>\n</div>\n", styles: [".nb-theme-default nb-card-header{display:flex;align-items:center;justify-content:space-between;padding-top:.5rem;padding-bottom:.5rem}.nb-theme-default .navigation{display:inline-block}.nb-theme-default .back-link{font-size:1.25rem;margin:.625rem .5rem .625rem 0;cursor:pointer}.nb-theme-default .back-link:hover{color:#36f}.nb-theme-default .toggle-icon{font-size:1.25rem;margin:.625rem 1rem .625rem .5rem;cursor:pointer;line-height:1.5em}.nb-theme-default .toggle-icon:hover{color:#36f}.nb-theme-default .skeleton{animation:loading 1.7s infinite linear;border-radius:.25rem;background:#dedfe1;background-image:linear-gradient(to right,#dedfe1 0%,#f2f3f5 20%,#dedfe1 40%,#dedfe1 100%)}.nb-theme-dark nb-card-header{display:flex;align-items:center;justify-content:space-between;padding-top:.5rem;padding-bottom:.5rem}.nb-theme-dark .navigation{display:inline-block}.nb-theme-dark .back-link{font-size:1.25rem;margin:.625rem .5rem .625rem 0;cursor:pointer}.nb-theme-dark .back-link:hover{color:#36f}.nb-theme-dark .toggle-icon{font-size:1.25rem;margin:.625rem 1rem .625rem .5rem;cursor:pointer;line-height:1.5em}.nb-theme-dark .toggle-icon:hover{color:#36f}.nb-theme-dark .skeleton{animation:loading 1.7s infinite linear;border-radius:.25rem;background:#192038;background-image:linear-gradient(to right,#192038 0%,#222b45 20%,#192038 40%,#192038 100%)}.nb-theme-cosmic nb-card-header{display:flex;align-items:center;justify-content:space-between;padding-top:.5rem;padding-bottom:.5rem}.nb-theme-cosmic .navigation{display:inline-block}.nb-theme-cosmic .back-link{font-size:1.25rem;margin:.625rem .5rem .625rem 0;cursor:pointer}.nb-theme-cosmic .back-link:hover{color:#36f}.nb-theme-cosmic .toggle-icon{font-size:1.25rem;margin:.625rem 1rem .625rem .5rem;cursor:pointer;line-height:1.5em}.nb-theme-cosmic .toggle-icon:hover{color:#36f}.nb-theme-cosmic .skeleton{animation:loading 1.7s infinite linear;border-radius:.25rem;background:#1b1b38;background-image:linear-gradient(to right,#1b1b38 0%,#323259 20%,#1b1b38 40%,#1b1b38 100%)}.nb-theme-corporate nb-card-header{display:flex;align-items:center;justify-content:space-between;padding-top:.5rem;padding-bottom:.5rem}.nb-theme-corporate .navigation{display:inline-block}.nb-theme-corporate .back-link{font-size:1.25rem;margin:.625rem .5rem .625rem 0;cursor:pointer}.nb-theme-corporate .back-link:hover{color:#36f}.nb-theme-corporate .toggle-icon{font-size:1.25rem;margin:.625rem 1rem .625rem .5rem;cursor:pointer;line-height:1.5em}.nb-theme-corporate .toggle-icon:hover{color:#36f}.nb-theme-corporate .skeleton{animation:loading 1.7s infinite linear;border-radius:.25rem;background:#dedfe1;background-image:linear-gradient(to right,#dedfe1 0%,#f2f3f5 20%,#dedfe1 40%,#dedfe1 100%)}@keyframes loading{0%{background-position:-100px}to{background-position:380px}}.label-skeleton{width:100%;height:2.5rem;line-height:1.5rem;padding:.4375rem 1.125rem}.input-skeleton{width:100%;height:2.5rem;line-height:1.5rem;padding:.4375rem 1.125rem}.texteditor-skeleton{width:100%;height:10.5rem;line-height:1.5rem;padding:.4375rem 1.125rem}.button-skeleton{width:6rem;height:2.5rem;line-height:1rem;margin:0 .125rem}\n"], components: [{ type: i2.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i2.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i2.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }, { type: i2.NbSelectComponent, selector: "nb-select", inputs: ["size", "status", "shape", "appearance", "placeholder", "optionsOverlayOffset", "scrollStrategy", "outline", "filled", "hero", "disabled", "fullWidth", "compareWith", "selected", "multiple", "optionsListClass", "optionsPanelClass"], outputs: ["selectedChange"] }, { type: i2.NbOptionComponent, selector: "nb-option", inputs: ["disabled", "value"], outputs: ["selectionChange"] }, { type: i2.NbCardBodyComponent, selector: "nb-card-body" }, { type: i2.NbCardFooterComponent, selector: "nb-card-footer" }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i4$1.CollapseDirective, selector: "[collapse]", inputs: ["isAnimated", "display", "collapse"], outputs: ["collapsed", "collapses", "expanded", "expands"], exportAs: ["bs-collapse"] }], pipes: { "translate": i5.TranslatePipe }, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoPageOutletComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-page-outlet',
                    styleUrls: ['./do-page-outlet.component.scss'],
                    templateUrl: './do-page-outlet.component.html',
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: function () { return [{ type: i2$1.Router }]; }, propDecorators: { header: [{
                type: Input
            }], url: [{
                type: Input
            }], width: [{
                type: Input
            }], dataSelect: [{
                type: Input
            }], selected: [{
                type: Input
            }], param: [{
                type: Input
            }], hidefooter: [{
                type: Input
            }], showToggle: [{
                type: Input
            }], isCollapsed: [{
                type: Input
            }], iconToggle: [{
                type: Input
            }], selectChange: [{
                type: Output
            }], onCollapsed: [{
                type: Output
            }], onExpanded: [{
                type: Output
            }] } });

class DoCollapseComponent {
    constructor() {
        this.toggle = () => {
            this.opened$.pipe(take(1)).subscribe(x => this.openedSubject.next(!x));
        };
        this.openedSubject = new ReplaySubject(1);
        this.openedSubject.next(false);
        this.opened$ = this.openedSubject.asObservable();
        this.openedState$ = this.opened$.pipe(map(x => x ? 'expanded' : 'collapsed'));
    }
    set expanded(expanded) {
        this.openedSubject.next(expanded);
    }
}
DoCollapseComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoCollapseComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DoCollapseComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoCollapseComponent, selector: "do-collapse, [do-collapse]", inputs: { expanded: "expanded" }, ngImport: i0, template: "<div\n    [@openedState]=\"openedState$ | async\"\n    [ngClass]=\"openedState$ | async\">\n    <ng-content></ng-content>\n</div>", styles: [""], directives: [{ type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], pipes: { "async": i4.AsyncPipe }, animations: [
        trigger('openedState', [
            state('collapsed', style({
                opacity: 0,
                overflow: 'hidden',
                height: '0px',
                minHeight: '0',
                paddingTop: 0,
            })),
            state('expanded', style({
                opacity: 1,
                overflow: 'hidden',
                height: '*',
                paddingTop: '0.75rem',
            })),
            transition('collapsed <=> expanded', animate('500ms ease-in-out')),
        ]),
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoCollapseComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-collapse, [do-collapse]',
                    styleUrls: ['./do-collapse.component.scss'],
                    templateUrl: './do-collapse.component.html',
                    animations: [
                        trigger('openedState', [
                            state('collapsed', style({
                                opacity: 0,
                                overflow: 'hidden',
                                height: '0px',
                                minHeight: '0',
                                paddingTop: 0,
                            })),
                            state('expanded', style({
                                opacity: 1,
                                overflow: 'hidden',
                                height: '*',
                                paddingTop: '0.75rem',
                            })),
                            transition('collapsed <=> expanded', animate('500ms ease-in-out')),
                        ]),
                    ],
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { expanded: [{
                type: Input
            }] } });

class EqualValidator {
    constructor(validateEqual) {
        this.validateEqual = validateEqual;
    }
    validate(c) {
        const v = c.value;
        const e = c.root.get(this.validateEqual);
        if (e && v !== e.value && v) {
            return { equal: false };
        }
        return null;
    }
}
EqualValidator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EqualValidator, deps: [{ token: 'doValidateEqual', attribute: true }], target: i0.ɵɵFactoryTarget.Directive });
EqualValidator.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.16", type: EqualValidator, selector: "[doValidateEqual][formControlName],[doValidateEqual][formControl],[doValidateEqual][ngModel]", providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidator), multi: true },
    ], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EqualValidator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[doValidateEqual][formControlName],[doValidateEqual][formControl],[doValidateEqual][ngModel]',
                    providers: [
                        { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidator), multi: true },
                    ],
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Attribute,
                    args: ['doValidateEqual']
                }] }]; } });

class NotEqualValidator {
    constructor(validateNotEqual) {
        this.validateNotEqual = validateNotEqual;
    }
    validate(c) {
        const v = c.value;
        const e = c.root.get(this.validateNotEqual);
        if (e && v === e.value && v) {
            return { equal: true };
        }
        return null;
    }
}
NotEqualValidator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NotEqualValidator, deps: [{ token: 'doValidateNotEqual', attribute: true }], target: i0.ɵɵFactoryTarget.Directive });
NotEqualValidator.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.16", type: NotEqualValidator, selector: "[doValidateNotEqual][formControlName],[doValidateNotEqual][formControl],[doValidateNotEqual][ngModel]", providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => NotEqualValidator), multi: true },
    ], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NotEqualValidator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[doValidateNotEqual][formControlName],[doValidateNotEqual][formControl],[doValidateNotEqual][ngModel]',
                    providers: [
                        { provide: NG_VALIDATORS, useExisting: forwardRef(() => NotEqualValidator), multi: true },
                    ],
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Attribute,
                    args: ['doValidateNotEqual']
                }] }]; } });

class DragDropDirective {
    constructor() {
        this.onFileDropped = new EventEmitter();
        this.opacity = '0.9';
        this.styleOpacity = '0.9';
    }
    onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.styleOpacity = '0.5';
        this.opacity = this.styleOpacity;
    }
    onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.styleOpacity = '0.9';
        this.opacity = this.styleOpacity;
    }
    ondrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.styleOpacity = '0.9';
        this.opacity = this.styleOpacity;
        const files = evt.dataTransfer.files;
        if (files.length > 0) {
            this.onFileDropped.emit(files);
        }
    }
    onMouseOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.styleOpacity = '0.5';
        this.opacity = this.styleOpacity;
    }
    onMouseLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.styleOpacity = '0.9';
        this.opacity = this.styleOpacity;
    }
}
DragDropDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DragDropDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
DragDropDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.16", type: DragDropDirective, selector: "[doDragDrop]", inputs: { opacity: "opacity" }, outputs: { onFileDropped: "onFileDropped" }, host: { listeners: { "dragover": "onDragOver($event)", "dragleave": "onDragLeave($event)", "drop": "ondrop($event)", "mouseover": "onMouseOver($event)", "mouseleave": "onMouseLeave($event)" }, properties: { "style.opacity": "this.styleOpacity" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DragDropDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[doDragDrop]',
                }]
        }], propDecorators: { onFileDropped: [{
                type: Output
            }], opacity: [{
                type: Input
            }], styleOpacity: [{
                type: HostBinding,
                args: ['style.opacity']
            }], onDragOver: [{
                type: HostListener,
                args: ['dragover', ['$event']]
            }], onDragLeave: [{
                type: HostListener,
                args: ['dragleave', ['$event']]
            }], ondrop: [{
                type: HostListener,
                args: ['drop', ['$event']]
            }], onMouseOver: [{
                type: HostListener,
                args: ['mouseover', ['$event']]
            }], onMouseLeave: [{
                type: HostListener,
                args: ['mouseleave', ['$event']]
            }] } });

class DoCardCollapseComponent {
    constructor() {
        this.defaultExpanded = false;
        this.show = this.defaultExpanded;
    }
    set expanded(expanded) {
        this.defaultExpanded = expanded;
        this.show = expanded;
    }
    get expanded() {
        return this.defaultExpanded;
    }
    ngOnDestroy() { }
    doCollapse() {
        this.collapse.toggle();
        this.show = !this.show;
    }
}
DoCardCollapseComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoCardCollapseComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DoCardCollapseComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoCardCollapseComponent, selector: "do-card-collapse", inputs: { header: "header", expanded: "expanded" }, viewQueries: [{ propertyName: "collapse", first: true, predicate: ["cardcollapse"], descendants: true }], ngImport: i0, template: "<div class=\"header-card-collapse\">\n    <label>\n        {{header | translate}}\n    </label>\n    <div class=\"filter-collapse\">\n        <span class=\"filter-icon-collapse\" (click)=\"doCollapse()\">\n            <i class=\"{{show ? 'icon-arrow-down' : 'icon-arrow-up'}}\"></i>\n        </span>\n    </div>\n</div>\n<div do-collapse [expanded]=\"expanded\" #cardcollapse class=\"card-collapse\">\n    <ng-content></ng-content>\n</div>", styles: [".header-card-collapse{padding:.75rem 1rem .25rem;background-color:#f0f3f5;border:1px solid #c8ced3;border-bottom:0;border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.filter-collapse{float:right;cursor:pointer}.filter-icon-collapse:hover{color:#ffc94d}.card-collapse{padding:0 1rem;border:1px solid #c8ced3;margin-bottom:1rem;border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}\n"], components: [{ type: DoCollapseComponent, selector: "do-collapse, [do-collapse]", inputs: ["expanded"] }], pipes: { "translate": i5.TranslatePipe }, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoCardCollapseComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-card-collapse',
                    styleUrls: ['./do-card-collapse.component.scss'],
                    templateUrl: './do-card-collapse.component.html',
                    encapsulation: ViewEncapsulation.None,
                }]
        }], propDecorators: { collapse: [{
                type: ViewChild,
                args: ['cardcollapse', { static: false }]
            }], header: [{
                type: Input
            }], expanded: [{
                type: Input
            }] } });

class TextMaskConfig {
}
/**
 * We must check whether the agent is Android because composition events
 * behave differently between iOS and Android.
 */
function _isAndroid() {
    const userAgent = ɵgetDOM() ? ɵgetDOM().getUserAgent() : '';
    return /android (\d+)/.test(userAgent.toLowerCase());
}
class MaskedInputDirective {
    constructor(_renderer, _elementRef, _compositionMode) {
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
        this.onChange = (_) => { };
        this.onTouched = () => { };
        if (this._compositionMode == null) {
            this._compositionMode = !_isAndroid();
        }
    }
    ngOnChanges(changes) {
        this._setupMask(true);
        if (this.textMaskInputElement !== undefined) {
            this.textMaskInputElement.update(this.inputElement.value);
        }
    }
    writeValue(value) {
        this._setupMask();
        // set the initial value for cases where the mask is disabled
        const normalizedValue = value == null ? '' : value;
        this._renderer.setProperty(this.inputElement, 'value', normalizedValue);
        if (this.textMaskInputElement !== undefined) {
            this.textMaskInputElement.update(value);
        }
    }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
    setDisabledState(isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
    _handleInput(value) {
        if (!this._compositionMode || (this._compositionMode && !this._composing)) {
            this._setupMask();
            if (this.textMaskInputElement !== undefined) {
                this.textMaskInputElement.update(value);
                // get the updated value
                value = this.inputElement.value;
                this.onChange(value);
            }
        }
    }
    _setupMask(create = false) {
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
            this.textMaskInputElement = createTextMaskInputElement(Object.assign({ inputElement: this.inputElement }, this.textMaskConfig));
        }
    }
    _compositionStart() { this._composing = true; }
    _compositionEnd(value) {
        this._composing = false;
        // tslint:disable-next-line: no-unused-expression
        this._compositionMode && this._handleInput(value);
    }
}
MaskedInputDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MaskedInputDirective, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }, { token: COMPOSITION_BUFFER_MODE, optional: true }], target: i0.ɵɵFactoryTarget.Directive });
MaskedInputDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.16", type: MaskedInputDirective, selector: "[do-mask]", inputs: { textMaskConfig: ["do-mask", "textMaskConfig"] }, host: { listeners: { "blur": "onTouched()", "input": "_handleInput($event.target.value)", "compositionstart": "_compositionStart()", "compositionend": "_compositionEnd($event.target.value)" } }, exportAs: ["do-mask"], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MaskedInputDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[do-mask]',
                    exportAs: 'do-mask',
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [COMPOSITION_BUFFER_MODE]
                }] }]; }, propDecorators: { textMaskConfig: [{
                type: Input,
                args: ['do-mask']
            }], onTouched: [{
                type: HostListener,
                args: ['blur']
            }], _handleInput: [{
                type: HostListener,
                args: ['input', ['$event.target.value']]
            }], _compositionStart: [{
                type: HostListener,
                args: ['compositionstart']
            }], _compositionEnd: [{
                type: HostListener,
                args: ['compositionend', ['$event.target.value']]
            }] } });

const BASE_COMPONENTS = [
    DoWarnMessageComponent,
    DoErrorMessageComponent,
    DoContainerOutletComponent,
    DoPageOutletComponent,
    DoCollapseComponent,
    DoCardCollapseComponent,
    MaskedInputDirective,
];
const BASE_DIRECTIVES = [
    EqualValidator,
    NotEqualValidator,
    DragDropDirective,
];
class DoBaseModule {
}
DoBaseModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoBaseModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoBaseModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoBaseModule, declarations: [DoWarnMessageComponent,
        DoErrorMessageComponent,
        DoContainerOutletComponent,
        DoPageOutletComponent,
        DoCollapseComponent,
        DoCardCollapseComponent,
        MaskedInputDirective, EqualValidator,
        NotEqualValidator,
        DragDropDirective], imports: [CommonModule,
        FormsModule,
        TranslateModule,
        NbCardModule,
        NbIconModule,
        NbSelectModule, DoToastrModule, i4$1.CollapseModule], exports: [DoWarnMessageComponent,
        DoErrorMessageComponent,
        DoContainerOutletComponent,
        DoPageOutletComponent,
        DoCollapseComponent,
        DoCardCollapseComponent,
        MaskedInputDirective, EqualValidator,
        NotEqualValidator,
        DragDropDirective] });
DoBaseModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoBaseModule, imports: [[
            CommonModule,
            FormsModule,
            TranslateModule,
            NbCardModule,
            NbIconModule,
            NbSelectModule,
            DoToastrModule.forRoot(),
            CollapseModule.forRoot(),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoBaseModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        TranslateModule,
                        NbCardModule,
                        NbIconModule,
                        NbSelectModule,
                        DoToastrModule.forRoot(),
                        CollapseModule.forRoot(),
                    ],
                    declarations: [
                        ...BASE_COMPONENTS,
                        ...BASE_DIRECTIVES,
                    ],
                    exports: [
                        ...BASE_COMPONENTS,
                        ...BASE_DIRECTIVES,
                    ],
                }]
        }] });

class ValidatorAccessorDirective {
    constructor(ngControl) {
        this.ngControl = ngControl;
        this.label = '';
        this.nolabel = false;
        this.disabled = false;
        this.required = false;
        this.onChange = (_) => { };
        this.onTouched = (_) => { };
        // ngControl && (ngControl.valueAccessor = this);
        if (this.ngControl != null) {
            this.ngControl.valueAccessor = this;
        }
    }
    onInit() { }
    ngOnInit() {
        this.onInit();
        const control = this.ngControl.control;
        const validators = control.validator ? [control.validator] : [];
        if (this.ngControl.control.errors) {
            this.required = this.ngControl.control.errors['required'];
        }
        if (this.required && !this.disabled) {
            validators.push(Validators.required);
            this.ngControl.control.setErrors({ required: true });
        }
        if (this.pattern) {
            validators.push(Validators.pattern(this.pattern));
        }
        this.ngControl.control.setValidators(validators);
        this.ngControl.control.updateValueAndValidity();
    }
    validate(c) {
        const validators = [];
        if (this.required) {
            validators.push(Validators.required);
        }
        if (this.pattern) {
            validators.push(Validators.pattern(this.pattern));
        }
        return validators;
    }
    get hasErrors() {
        return (!this.disabled &&
            this.ngControl.control &&
            this.ngControl.control.invalid &&
            this.ngControl.touched);
    }
    get hasSuccess() {
        return (!this.disabled &&
            this.ngControl.control &&
            this.ngControl.control.valid &&
            this.ngControl.touched);
    }
    get errorMessages() {
        const errors = [];
        if (this.ngControl.errors) {
            Object.keys(this.ngControl.errors).forEach(property => {
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
                        errors.push('error.'.concat(property).concat('.').concat(this.name));
                        break;
                }
            });
        }
        return errors;
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
}
ValidatorAccessorDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ValidatorAccessorDirective, deps: [{ token: i1.NgControl }], target: i0.ɵɵFactoryTarget.Directive });
ValidatorAccessorDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.16", type: ValidatorAccessorDirective, inputs: { name: "name", pattern: "pattern", label: "label", nolabel: "nolabel", disabled: "disabled", required: "required", paramError: "paramError", warnMessage: "warnMessage" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ValidatorAccessorDirective, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i1.NgControl }]; }, propDecorators: { name: [{
                type: Input
            }], pattern: [{
                type: Input
            }], label: [{
                type: Input
            }], nolabel: [{
                type: Input
            }], disabled: [{
                type: Input
            }], required: [{
                type: Input
            }], paramError: [{
                type: Input
            }], warnMessage: [{
                type: Input
            }] } });

class ValueAccessorDirective extends ValidatorAccessorDirective {
    constructor(ngControl, locale) {
        super(ngControl);
        this.ngControl = ngControl;
        this.locale = locale;
        this.format = DateFormat.DATE;
        this.skeleton = false;
        this.show = true;
    }
    get value() { return this._value; }
    set value(value) {
        if (this._value !== value) {
            this._value = value;
            this.onChange(value);
            const control = this.ngControl.control;
            if (control) {
                control.updateValueAndValidity();
                control.markAsTouched();
                control.markAsDirty();
            }
        }
    }
    writeValue(value) {
        this._value = value;
        this.onChange(this.value);
        const control = this.ngControl.control;
        if (control) {
            control.updateValueAndValidity();
            control.markAsUntouched();
            control.markAsPristine();
        }
    }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
    setDisabledState(isDisabled) { this.disabled = isDisabled; }
}
ValueAccessorDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ValueAccessorDirective, deps: "invalid", target: i0.ɵɵFactoryTarget.Directive });
ValueAccessorDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.16", type: ValueAccessorDirective, inputs: { format: "format", skeleton: "skeleton", show: "show" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ValueAccessorDirective, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i1.NgControl }, { type: undefined }]; }, propDecorators: { format: [{
                type: Input
            }], skeleton: [{
                type: Input
            }], show: [{
                type: Input
            }] } });

class DoInputTextComponent extends ValueAccessorDirective {
    constructor(ngControl, locale) {
        super(ngControl, locale);
        this.locale = locale;
        this.colLabel = 3;
        this.colInput = 9;
        this.minLength = 0;
        this.maxLength = 100;
        this.min = 0;
        this.max = 999;
        this.step = 1;
        this.capslock = false;
        this.type = 'text';
    }
    onKeyUp(event) {
        if (this.capslock) {
            this.value = this.value.toUpperCase();
        }
    }
    onKeyDown(event) {
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
    }
}
DoInputTextComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoInputTextComponent, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: LOCALE_ID }], target: i0.ɵɵFactoryTarget.Component });
DoInputTextComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoInputTextComponent, selector: "do-input-text", inputs: { placeholder: "placeholder", colLabel: "colLabel", colInput: "colInput", minLength: "minLength", maxLength: "maxLength", min: "min", max: "max", step: "step", capslock: "capslock", type: "type" }, usesInheritance: true, ngImport: i0, template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\" \n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [warnMessage]=\"warnMessage\"\n  [skeleton]=\"skeleton\" [show]=\"show\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <input\n      type=\"{{type}}\"\n      id=\"{{name}}\"\n      [step]=\"step\"\n      [pattern]=\"pattern\"\n      [minLength]=\"minLength\"\n      [maxLength]=\"maxLength\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled\"\n      [ngClass]=\"{\n        'status-danger': hasErrors,\n        'status-success': (hasSuccess && required),\n        'input-capslock': capslock\n      }\"\n      (input)=\"onChange($event.target.value)\"\n      (change)=\"onChange($event.target.value)\"\n      (blur)=\"onTouched($event.target.value)\"\n      (focus)=\"onTouched($event.target.value)\"\n      (keydown)=\"onKeyDown($event)\"\n      (keypress)=\"onKeyUp($event)\"\n      [(ngModel)]=\"value\"\n      #input nbInput fullWidth>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>", styles: [".input-capslock{text-transform:uppercase}\n"], components: [{ type: DoContainerOutletComponent, selector: "do-container-outlet", inputs: ["name", "label", "colLabel", "colContent", "nolabel", "dividerlabel", "required", "hasErrors", "errorMessages", "warnMessage", "paramError", "skeleton", "show"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], pipes: { "translate": i5.TranslatePipe }, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoInputTextComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-input-text',
                    styleUrls: ['./do-input-text.component.scss'],
                    templateUrl: './do-input-text.component.html',
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [LOCALE_ID]
                }] }]; }, propDecorators: { placeholder: [{
                type: Input
            }], colLabel: [{
                type: Input
            }], colInput: [{
                type: Input
            }], minLength: [{
                type: Input
            }], maxLength: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], step: [{
                type: Input
            }], capslock: [{
                type: Input
            }], type: [{
                type: Input
            }] } });

class CurrencyMaskDirective {
    constructor(ngControl, el) {
        this.ngControl = ngControl;
        this.el = el;
        this.prefix = 'Rp';
        this.decimalSeparator = '.';
        this.thousandsSeparator = ',';
        this.suffix = ',-';
        this.padding = 5;
    }
    onFocus(value, event) {
        value = value ? value : this.prefix.concat(' ');
        value = this.onLeave(value.replace(this.suffix, ''));
        event.target.toNumber = this.toNumber(value);
        this.ngControl.valueAccessor.writeValue(value);
    }
    onBlur(value, event) {
        value = value.replace(/\D/g, '') ? this.onLeave(value).concat(this.suffix) : '';
        event.target.toNumber = this.toNumber(value);
        this.ngControl.valueAccessor.writeValue(value);
    }
    onModelChange(value) {
        value = this.toNumber(value);
        value = value.replace(new RegExp('[^0-9|^' + this.decimalSeparator + '|^-]', 'g'), '');
        if (value.toString().match(new RegExp('^\-?[0-9]*(' + this.decimalSeparator + '[0-9]*)?$', 'g'))) {
            let { val, frac } = this.onInputChange(value);
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
    }
    onKeyDown(event) {
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
    }
    onLeave(value) {
        const { val, frac } = this.onInputChange(value);
        let fraction = '';
        if (frac) {
            if (parseInt(frac, 10) > 0) {
                fraction = this.decimalSeparator + this.pad(frac, this.padding).substring(0, this.padding);
            }
        }
        return this.onTransform(val, fraction);
    }
    onInputChange(value) {
        const [val = '', fraction = ''] = (value || '').split(this.decimalSeparator);
        return { val, frac: fraction };
    }
    onTransform(val, fraction) {
        val = val.replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
        return val + fraction;
    }
    toNumber(val) {
        return val
            .replace(this.prefix, '')
            .replace(' ', '')
            .replace(this.suffix, '')
            .replace(new RegExp(this.thousandsSeparator, 'g'), '');
    }
    pad(val, size) {
        while (val.length < size) {
            val = val + '0';
        }
        return val;
    }
}
CurrencyMaskDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: CurrencyMaskDirective, deps: [{ token: i1.NgControl }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
CurrencyMaskDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.16", type: CurrencyMaskDirective, selector: "input[doCurrency]", inputs: { prefix: "prefix", decimalSeparator: ["decimal", "decimalSeparator"], thousandsSeparator: ["thousand", "thousandsSeparator"], suffix: "suffix", padding: "padding" }, host: { listeners: { "focus": "onFocus($event.target.value,$event)", "blur": "onBlur($event.target.value,$event)", "ngModelChange": "onModelChange($event)", "keydown": "onKeyDown($event)" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: CurrencyMaskDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'input[doCurrency]',
                }]
        }], ctorParameters: function () { return [{ type: i1.NgControl }, { type: i0.ElementRef }]; }, propDecorators: { prefix: [{
                type: Input,
                args: ['prefix']
            }], decimalSeparator: [{
                type: Input,
                args: ['decimal']
            }], thousandsSeparator: [{
                type: Input,
                args: ['thousand']
            }], suffix: [{
                type: Input,
                args: ['suffix']
            }], padding: [{
                type: Input,
                args: ['padding']
            }], onFocus: [{
                type: HostListener,
                args: ['focus', ['$event.target.value', '$event']]
            }], onBlur: [{
                type: HostListener,
                args: ['blur', ['$event.target.value', '$event']]
            }], onModelChange: [{
                type: HostListener,
                args: ['ngModelChange', ['$event']]
            }], onKeyDown: [{
                type: HostListener,
                args: ['keydown', ['$event']]
            }] } });

class DoInputCurrencyComponent extends ValueAccessorDirective {
    constructor(ngControl, locale) {
        super(ngControl, locale);
        this.locale = locale;
        this.colLabel = 3;
        this.colInput = 9;
        this.minLength = 0;
        this.maxLength = 100;
        this.prefix = 'Rp';
        this.decimalSeparator = '.';
        this.thousandsSeparator = ',';
        this.suffix = ',-';
        this.padding = 5;
    }
    writeValue(value) {
        this._value = value ? this.transform(value) : value;
        this.onChange(this.value);
        const control = this.ngControl.control;
        if (control) {
            control.updateValueAndValidity();
            control.markAsTouched();
            control.markAsDirty();
        }
    }
    transform(value) {
        const { val, frac } = this.toNumber(value);
        const v = val.replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
        return this.prefix.concat(' ').concat(v).concat(frac).concat(this.suffix);
    }
    toNumber(value) {
        const [val = '', frac = ''] = (value || '').split(this.decimalSeparator);
        let fraction = '';
        if (frac) {
            if (parseInt(frac, 10) > 0) {
                fraction = this.decimalSeparator + this.pad(frac, this.padding).substring(0, this.padding);
            }
        }
        return { val, frac: fraction };
    }
    pad(val, size) {
        while (val.length < size) {
            val = val + '0';
        }
        return val;
    }
}
DoInputCurrencyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoInputCurrencyComponent, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: LOCALE_ID }], target: i0.ɵɵFactoryTarget.Component });
DoInputCurrencyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoInputCurrencyComponent, selector: "do-input-currency", inputs: { placeholder: "placeholder", colLabel: "colLabel", colInput: "colInput", minLength: "minLength", maxLength: "maxLength", prefix: "prefix", decimalSeparator: ["decimal", "decimalSeparator"], thousandsSeparator: ["thousand", "thousandsSeparator"], suffix: "suffix", padding: "padding" }, usesInheritance: true, ngImport: i0, template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\" \n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [warnMessage]=\"warnMessage\"\n  [skeleton]=\"skeleton\" [show]=\"show\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <input\n      type=\"text\"\n      id=\"{{name}}\"\n      [minLength]=\"minLength\"\n      [maxLength]=\"maxLength\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled || skeleton\"\n      [ngClass]=\"{\n        'status-danger': hasErrors,\n        'status-success': (hasSuccess && required)\n      }\"\n      (input)=\"onChange($event.target.toNumber)\"\n      (change)=\"onChange($event.target.toNumber)\"\n      (blur)=\"onTouched($event.target.toNumber)\"\n      [(ngModel)]=\"value\"\n      doCurrency\n      [prefix]=\"prefix\"\n      [decimal]=\"decimalSeparator\"\n      [thousand]=\"thousandsSeparator\"\n      [suffix]=\"suffix\"\n      [padding]=\"padding\"\n      #input nbInput fullWidth>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>", styles: [""], components: [{ type: DoContainerOutletComponent, selector: "do-container-outlet", inputs: ["name", "label", "colLabel", "colContent", "nolabel", "dividerlabel", "required", "hasErrors", "errorMessages", "warnMessage", "paramError", "skeleton", "show"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: CurrencyMaskDirective, selector: "input[doCurrency]", inputs: ["prefix", "decimal", "thousand", "suffix", "padding"] }, { type: i2.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], pipes: { "translate": i5.TranslatePipe }, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoInputCurrencyComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-input-currency',
                    styleUrls: ['./do-input-currency.component.scss'],
                    templateUrl: './do-input-currency.component.html',
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [LOCALE_ID]
                }] }]; }, propDecorators: { placeholder: [{
                type: Input
            }], colLabel: [{
                type: Input
            }], colInput: [{
                type: Input
            }], minLength: [{
                type: Input
            }], maxLength: [{
                type: Input
            }], prefix: [{
                type: Input,
                args: ['prefix']
            }], decimalSeparator: [{
                type: Input,
                args: ['decimal']
            }], thousandsSeparator: [{
                type: Input,
                args: ['thousand']
            }], suffix: [{
                type: Input,
                args: ['suffix']
            }], padding: [{
                type: Input,
                args: ['padding']
            }] } });

class DoInputIconComponent extends ValueAccessorDirective {
    constructor(ngControl, locale) {
        super(ngControl, locale);
        this.locale = locale;
        this.colLabel = 3;
        this.colInput = 9;
        this.minLength = 0;
        this.maxLength = 100;
        this.buttontype = 'btn-primary';
        this.type = 'text';
        this.iconcursor = false;
        this.eva = false;
        this.icon = 'search-outline';
        this.clickIcon = new EventEmitter();
        this.focus = new EventEmitter();
    }
    onClickIcon() {
        if (this.iconcursor) {
            this.clickIcon.emit(this.value);
        }
    }
    onFocus(value) {
        this.focus.emit(value);
        this.onTouched(value);
    }
}
DoInputIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoInputIconComponent, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: LOCALE_ID }], target: i0.ɵɵFactoryTarget.Component });
DoInputIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoInputIconComponent, selector: "do-input-icon", inputs: { placeholder: "placeholder", colLabel: "colLabel", colInput: "colInput", minLength: "minLength", maxLength: "maxLength", buttontype: "buttontype", type: "type", iconcursor: "iconcursor", eva: "eva", icon: "icon" }, outputs: { clickIcon: "clickIcon", focus: "focus" }, usesInheritance: true, ngImport: i0, template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [warnMessage]=\"warnMessage\"\n  [skeleton]=\"skeleton\" [show]=\"show\">\n  <div class=\"col-sm-{{colInput}} input-group\" *ngIf=\"!skeleton; else contentskeleton\">\n    <input\n      type=\"{{type}}\"\n      id=\"{{name}}\"\n      [pattern]=\"pattern\"\n      [minLength]=\"minLength\"\n      [maxLength]=\"maxLength\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled\"\n      [ngClass]=\"{\n        'status-danger': hasErrors,\n        'status-success': (hasSuccess && required)\n      }\"\n      (input)=\"onChange($event.target.value)\"\n      (change)=\"onChange($event.target.value)\"\n      (blur)=\"onTouched($event.target.value)\"\n      (focus)=\"onFocus($event.target.value)\"\n      [(ngModel)]=\"value\"\n      #input nbInput fullWidth>\n      <div\n        class=\"xinput-icon\"\n        [ngStyle]=\"{\n          'cursor': iconcursor ? 'pointer' : 'unset'\n        }\">\n        <span class=\"{{icon}}\" *ngIf=\"!eva\"></span>\n        <nb-icon class=\"xinput-icon-hover\" icon=\"{{icon}}\" (click)=\"onClickIcon()\" *ngIf=\"eva\"></nb-icon>\n      </div>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>", styles: ["nb-icon{color:#8f9bb3}.xinput-icon{position:absolute;right:0;margin:.6rem 1.5rem 0 0}.xinput-icon-hover:hover{color:#598bff}\n"], components: [{ type: DoContainerOutletComponent, selector: "do-container-outlet", inputs: ["name", "label", "colLabel", "colContent", "nolabel", "dividerlabel", "required", "hasErrors", "errorMessages", "warnMessage", "paramError", "skeleton", "show"] }, { type: i2.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i4.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], pipes: { "translate": i5.TranslatePipe }, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoInputIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-input-icon',
                    styleUrls: ['./do-input-icon.component.scss'],
                    templateUrl: './do-input-icon.component.html',
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [LOCALE_ID]
                }] }]; }, propDecorators: { placeholder: [{
                type: Input
            }], colLabel: [{
                type: Input
            }], colInput: [{
                type: Input
            }], minLength: [{
                type: Input
            }], maxLength: [{
                type: Input
            }], buttontype: [{
                type: Input
            }], type: [{
                type: Input
            }], iconcursor: [{
                type: Input
            }], eva: [{
                type: Input
            }], icon: [{
                type: Input
            }], clickIcon: [{
                type: Output
            }], focus: [{
                type: Output
            }] } });

class DoInputBaseIconComponent extends ValueAccessorDirective {
    constructor(ngControl, locale) {
        super(ngControl, locale);
        this.locale = locale;
        this.minLength = 0;
        this.maxLength = 100;
        this.iconcursor = false;
        this.icon = 'search-outline';
        this.buttontype = 'btn-primary';
        this.type = 'text';
        this.clickIcon = new EventEmitter();
        this.focus = new EventEmitter();
    }
    onClickIcon() {
        if (this.iconcursor) {
            this.clickIcon.emit(this.value);
        }
    }
    onFocus(value) {
        this.focus.emit(value);
        this.onTouched(value);
    }
}
DoInputBaseIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoInputBaseIconComponent, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: LOCALE_ID }], target: i0.ɵɵFactoryTarget.Component });
DoInputBaseIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoInputBaseIconComponent, selector: "do-input-base-icon", inputs: { placeholder: "placeholder", minLength: "minLength", maxLength: "maxLength", iconcursor: "iconcursor", icon: "icon", buttontype: "buttontype", type: "type" }, outputs: { clickIcon: "clickIcon", focus: "focus" }, usesInheritance: true, ngImport: i0, template: "<div class=\"input-group\">\n  <input\n    type=\"{{type}}\"\n    id=\"{{name}}\"\n    [pattern]=\"pattern\"\n    [minLength]=\"minLength\"\n    [maxLength]=\"maxLength\"\n    [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n    [required]=\"required\"\n    [disabled]=\"disabled\"\n    [ngClass]=\"{\n      'status-danger': hasErrors,\n      'status-success': hasSuccess\n    }\"\n    (input)=\"onChange($event.target.value)\"\n    (change)=\"onChange($event.target.value)\"\n    (blur)=\"onTouched($event.target.value)\"\n    (focus)=\"onFocus($event.target.value)\"\n    [(ngModel)]=\"value\"\n    #input nbInput fullWidth>\n  <div\n    class=\"input-icon\"\n    [ngStyle]=\"{\n      'cursor': iconcursor ? 'pointer' : 'unset'\n    }\">\n    <nb-icon class=\"input-icon-hover\" icon=\"{{icon}}\" (click)=\"onClickIcon()\"></nb-icon>\n  </div>\n</div>\n", styles: ["nb-icon{color:#8f9bb3}.input-icon{position:absolute;right:0;padding:10px}.input-icon-hover:hover{color:#598bff}\n"], components: [{ type: i2.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }], directives: [{ type: i2.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i4.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], pipes: { "translate": i5.TranslatePipe }, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoInputBaseIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-input-base-icon',
                    styleUrls: ['./do-input-base-icon.component.scss'],
                    templateUrl: './do-input-base-icon.component.html',
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [LOCALE_ID]
                }] }]; }, propDecorators: { placeholder: [{
                type: Input
            }], minLength: [{
                type: Input
            }], maxLength: [{
                type: Input
            }], iconcursor: [{
                type: Input
            }], icon: [{
                type: Input
            }], buttontype: [{
                type: Input
            }], type: [{
                type: Input
            }], clickIcon: [{
                type: Output
            }], focus: [{
                type: Output
            }] } });

class DoInputFileComponent extends ValueAccessorDirective {
    constructor(ngControl, locale) {
        super(ngControl, locale);
        this.locale = locale;
        this.colLabel = 3;
        this.colInput = 9;
        this.multiple = false;
    }
}
DoInputFileComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoInputFileComponent, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: LOCALE_ID }], target: i0.ɵɵFactoryTarget.Component });
DoInputFileComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoInputFileComponent, selector: "do-input-file", inputs: { placeholder: "placeholder", colLabel: "colLabel", colInput: "colInput", multiple: "multiple" }, usesInheritance: true, ngImport: i0, template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\" \n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [warnMessage]=\"warnMessage\"\n  [skeleton]=\"skeleton\" [show]=\"show\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <input\n      type=\"file\"\n      id=\"{{name}}\"\n      name=\"{{name}}\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled\"\n      [ngClass]=\"{\n        'status-danger': hasErrors,\n        'status-success': (hasSuccess && required)\n      }\"\n      (input)=\"onChange($event.target.files)\"\n      (change)=\"onChange($event.target.files)\"\n      (blur)=\"onTouched($event.target.files)\"\n      (focus)=\"onTouched($event.target.files)\"\n      [(ngModel)]=\"value\"\n      [multiple]=\"multiple\"\n      #input nbInput fullWidth>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>", styles: [""], components: [{ type: DoContainerOutletComponent, selector: "do-container-outlet", inputs: ["name", "label", "colLabel", "colContent", "nolabel", "dividerlabel", "required", "hasErrors", "errorMessages", "warnMessage", "paramError", "skeleton", "show"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], pipes: { "translate": i5.TranslatePipe }, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoInputFileComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-input-file',
                    styleUrls: ['./do-input-file.component.scss'],
                    templateUrl: './do-input-file.component.html',
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [LOCALE_ID]
                }] }]; }, propDecorators: { placeholder: [{
                type: Input
            }], colLabel: [{
                type: Input
            }], colInput: [{
                type: Input
            }], multiple: [{
                type: Input
            }] } });

const INPUT_COMPONENTS = [
    DoInputTextComponent,
    DoInputBaseIconComponent,
    DoInputIconComponent,
    DoInputCurrencyComponent,
    DoInputFileComponent,
];
const INPUT_DIRECTIVES = [
    CurrencyMaskDirective,
];
class DoInputModule {
}
DoInputModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoInputModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoInputModule, declarations: [DoInputTextComponent,
        DoInputBaseIconComponent,
        DoInputIconComponent,
        DoInputCurrencyComponent,
        DoInputFileComponent, CurrencyMaskDirective], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NbInputModule,
        NbIconModule,
        TranslateModule,
        DoBaseModule], exports: [DoInputTextComponent,
        DoInputBaseIconComponent,
        DoInputIconComponent,
        DoInputCurrencyComponent,
        DoInputFileComponent, CurrencyMaskDirective, NbInputModule] });
DoInputModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoInputModule, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            NbInputModule,
            NbIconModule,
            TranslateModule,
            DoBaseModule,
        ], NbInputModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoInputModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        NbInputModule,
                        NbIconModule,
                        TranslateModule,
                        DoBaseModule,
                    ],
                    declarations: [
                        ...INPUT_COMPONENTS,
                        ...INPUT_DIRECTIVES,
                    ],
                    exports: [
                        ...INPUT_COMPONENTS,
                        ...INPUT_DIRECTIVES,
                        NbInputModule,
                    ],
                }]
        }] });

class DoButtonComponent {
    constructor() {
        this.formGroupButton = new FormGroup({});
        this.disabledButton = false;
        this.type = 'submit';
        this.status = 'primary';
        this.size = 'medium';
        this.skeleton = false;
        this.onSubmit = new EventEmitter();
    }
    click(event) {
        this.onSubmit.emit(event);
    }
}
DoButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DoButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoButtonComponent, selector: "do-button", inputs: { formGroupButton: "formGroupButton", name: "name", disabledButton: "disabledButton", type: "type", status: "status", size: "size", skeleton: "skeleton" }, outputs: { onSubmit: "onSubmit" }, ngImport: i0, template: "<button *ngIf=\"!skeleton; else contentskeleton\"\n  type=\"{{type}}\"\n  status=\"{{status}}\"\n  size=\"{{size}}\"\n  (click)=\"click($event)\"\n  [disabled]=\"(type!='reset' && formGroupButton.invalid) || (type!='reset' && formGroupButton.pristine && !formGroupButton.valid) || disabledButton\"\n  nbButton>\n  <ng-content select=\"[buttonicon]\"></ng-content>\n  {{ name | translate}}\n</button>\n<ng-template #contentskeleton>\n  <div\n    [ngClass]=\"{\n      'button-skeleton': true,\n      'skeleton': skeleton\n    }\">\n  </div>\n</ng-template>", styles: [".nb-theme-default :host button[nbButton]{margin:0 .25rem}.nb-theme-dark :host button[nbButton]{margin:0 .25rem}.nb-theme-cosmic :host button[nbButton]{margin:0 .25rem}.nb-theme-corporate :host button[nbButton]{margin:0 .25rem}\n"], components: [{ type: i2.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], pipes: { "translate": i5.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoButtonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-button',
                    styleUrls: ['./do-button.component.scss'],
                    templateUrl: './do-button.component.html',
                }]
        }], propDecorators: { formGroupButton: [{
                type: Input
            }], name: [{
                type: Input
            }], disabledButton: [{
                type: Input
            }], type: [{
                type: Input
            }], status: [{
                type: Input
            }], size: [{
                type: Input
            }], skeleton: [{
                type: Input
            }], onSubmit: [{
                type: Output
            }] } });

class DoButtonSubmitComponent {
    constructor() {
        this.colLabel = 3;
        this.colButton = 9;
        this.disabledButton = false;
        this.disabledReset = false;
        this.type = 'submit';
        this.status = 'primary';
        this.skeleton = false;
        this.onSubmit = new EventEmitter();
        this.onReset = new EventEmitter();
    }
    set formGroupButton(formGroup) {
        this.formGroup = formGroup;
    }
    get disabledForm() {
        if (this.formGroup) {
            if (!this.formGroup.valid || this.formGroup.pristine) {
                return true;
            }
        }
        return false;
    }
    submit(event) {
        this.onSubmit.emit(event);
    }
    reset(event) {
        this.onReset.emit(event);
    }
}
DoButtonSubmitComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoButtonSubmitComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DoButtonSubmitComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoButtonSubmitComponent, selector: "do-button-submit", inputs: { colLabel: "colLabel", colButton: "colButton", resetTitle: "resetTitle", submitTitle: "submitTitle", disabledButton: "disabledButton", disabledReset: "disabledReset", type: "type", status: "status", skeleton: "skeleton", formGroupButton: "formGroupButton" }, outputs: { onSubmit: "onSubmit", onReset: "onReset" }, ngImport: i0, template: "<div class=\"row\">\n  <div class=\"offset-sm-{{colLabel}} col-sm-{{colButton}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <button\n      type=\"reset\"\n      status=\"danger\"\n      (click)=\"reset($event)\"\n      [disabled]=\"disabledReset\"\n      class=\"reset-left\"\n      nbButton>\n      {{ resetTitle | translate}}\n    </button>\n    <button\n      type=\"submit\"\n      status=\"primary\"\n      (click)=\"submit($event)\"\n      [disabled]=\"disabledButton || disabledForm\"\n      class=\"submit-right\"\n      nbButton>\n      {{ submitTitle | translate}}\n    </button>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"row offset-sm-{{colLabel}} col-sm-{{colButton}}\">\n      <div\n        [ngClass]=\"{\n          'reset-left': true,\n          'button-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n      <div\n        [ngClass]=\"{\n          'reset-right': true,\n          'button-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</div>", styles: [".nb-theme-default :host button[nbButton]{margin:0 .25rem}.nb-theme-default :host .reset-left{margin-right:.25rem}.nb-theme-default :host .submit-right{margin-left:.25rem}.nb-theme-dark :host button[nbButton]{margin:0 .25rem}.nb-theme-dark :host .reset-left{margin-right:.25rem}.nb-theme-dark :host .submit-right{margin-left:.25rem}.nb-theme-cosmic :host button[nbButton]{margin:0 .25rem}.nb-theme-cosmic :host .reset-left{margin-right:.25rem}.nb-theme-cosmic :host .submit-right{margin-left:.25rem}.nb-theme-corporate :host button[nbButton]{margin:0 .25rem}.nb-theme-corporate :host .reset-left{margin-right:.25rem}.nb-theme-corporate :host .submit-right{margin-left:.25rem}\n"], components: [{ type: i2.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], pipes: { "translate": i5.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoButtonSubmitComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-button-submit',
                    styleUrls: ['./do-button-submit.component.scss'],
                    templateUrl: './do-button-submit.component.html',
                }]
        }], propDecorators: { colLabel: [{
                type: Input
            }], colButton: [{
                type: Input
            }], resetTitle: [{
                type: Input
            }], submitTitle: [{
                type: Input
            }], disabledButton: [{
                type: Input
            }], disabledReset: [{
                type: Input
            }], type: [{
                type: Input
            }], status: [{
                type: Input
            }], skeleton: [{
                type: Input
            }], onSubmit: [{
                type: Output
            }], onReset: [{
                type: Output
            }], formGroupButton: [{
                type: Input
            }] } });

const BUTTON_COMPONENTS = [
    DoButtonComponent,
    DoButtonSubmitComponent,
];
class DoButtonModule {
}
DoButtonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoButtonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoButtonModule, declarations: [DoButtonComponent,
        DoButtonSubmitComponent], imports: [CommonModule,
        TranslateModule,
        NbButtonModule,
        DoBaseModule], exports: [DoButtonComponent,
        DoButtonSubmitComponent] });
DoButtonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoButtonModule, imports: [[
            CommonModule,
            TranslateModule,
            NbButtonModule,
            DoBaseModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        TranslateModule,
                        NbButtonModule,
                        DoBaseModule,
                    ],
                    declarations: [
                        ...BUTTON_COMPONENTS,
                    ],
                    exports: [
                        ...BUTTON_COMPONENTS,
                    ],
                }]
        }] });

class DoDatatableCollapseComponent {
    constructor() {
        this.toggle = () => {
            this.opened$.pipe(take(1)).subscribe(x => this.openedSubject.next(!x));
        };
        this.openedSubject = new ReplaySubject(1);
        this.openedSubject.next(false);
        this.opened$ = this.openedSubject.asObservable();
        this.openedState$ = this.opened$.pipe(map(x => x ? 'expanded' : 'collapsed'));
    }
}
DoDatatableCollapseComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoDatatableCollapseComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DoDatatableCollapseComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoDatatableCollapseComponent, selector: "do-datatable-collapse, [do-datatable-collapse]", ngImport: i0, template: "<div\n    [@openedState]=\"openedState$ | async\"\n    [ngClass]=\"openedState$ | async\">\n    <ng-content></ng-content>\n</div>", styles: [""], directives: [{ type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], pipes: { "async": i4.AsyncPipe }, animations: [
        trigger('openedState', [
            state('collapsed', style({
                opacity: 0,
                overflow: 'hidden',
                height: '0px',
                minHeight: '0',
                padding: '0 0 0 0.5rem',
            })),
            state('expanded', style({
                opacity: 1,
                overflow: 'hidden',
                height: '*',
                padding: '1.5rem 0 0.5rem 0.5rem',
                'border-bottom': '1px solid #d1d4d7',
            })),
            transition('collapsed <=> expanded', animate('500ms ease-in-out')),
        ]),
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoDatatableCollapseComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-datatable-collapse, [do-datatable-collapse]',
                    styleUrls: ['./do-datatable-collapse.component.scss'],
                    templateUrl: './do-datatable-collapse.component.html',
                    animations: [
                        trigger('openedState', [
                            state('collapsed', style({
                                opacity: 0,
                                overflow: 'hidden',
                                height: '0px',
                                minHeight: '0',
                                padding: '0 0 0 0.5rem',
                            })),
                            state('expanded', style({
                                opacity: 1,
                                overflow: 'hidden',
                                height: '*',
                                padding: '1.5rem 0 0.5rem 0.5rem',
                                'border-bottom': '1px solid #d1d4d7',
                            })),
                            transition('collapsed <=> expanded', animate('500ms ease-in-out')),
                        ]),
                    ],
                }]
        }], ctorParameters: function () { return []; } });

class DoDatatableHeaderComponent {
    constructor() {
        this.header = true;
        this.footer = true;
        this.add = true;
        this.edit = true;
        this.delete = false;
        this.filter = true;
        this.onSearch = new EventEmitter();
        this.onFilter = new EventEmitter();
        this.onAdd = new EventEmitter();
        this.onDelete = new EventEmitter();
        this.showFilter = false;
        this.disabledButtonFilter = true;
    }
    ngOnDestroy() { }
    doSearch(search) {
        if (this.showFilter) {
            this.doFilterFunnel();
        }
        this.onSearch.emit(search);
    }
    doFilterFunnel() {
        this._search = undefined;
        this.collapse.toggle();
        this.showFilter = !this.showFilter;
        if (!this.showFilter) {
            this.formGroupFilter.reset();
        }
        else {
            this.formGroupFilter.valueChanges.subscribe(val => {
                this.disabledButtonFilter = false;
            });
        }
    }
    doFilter() {
        this.onFilter.emit(this.formGroupFilter.value);
    }
    doAdd() {
        this.onAdd.emit(true);
    }
    doDelete() {
        this.onDelete.emit(true);
    }
    onKeyDown(event) {
        if (event.key.toUpperCase() === 'ENTER') {
            this.doSearch(this._search);
        }
    }
    onFocusSearch() {
        if (this.showFilter) {
            this.doFilterFunnel();
        }
    }
}
DoDatatableHeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoDatatableHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DoDatatableHeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoDatatableHeaderComponent, selector: "do-datatable-header", inputs: { header: "header", footer: "footer", add: "add", edit: "edit", delete: "delete", filter: "filter", formGroupFilter: "formGroupFilter" }, outputs: { onSearch: "onSearch", onFilter: "onFilter", onAdd: "onAdd", onDelete: "onDelete" }, viewQueries: [{ propertyName: "collapse", first: true, predicate: ["collapse"], descendants: true }], ngImport: i0, template: "<div class=\"header-datatable\" *ngIf=\"header\">\n    <div class=\"header-action\" *ngIf=\"add\">\n        <nb-icon\n            class=\"action-add\"\n            icon=\"file-add-outline\"\n            (click)=\"doAdd()\">\n        </nb-icon>\n    </div>\n    <div class=\"header-action\" *ngIf=\"delete\">\n        <nb-icon\n            class=\"action-trash\"\n            icon=\"trash-2-outline\"\n            (click)=\"doDelete()\">\n        </nb-icon>\n    </div>\n    <div class=\"header-filter\" *ngIf=\"filter\">\n        <do-input-base-icon\n            [name]=\"'_filter.datatable'\"\n            [placeholder]=\"'datatable.typesearch'\"\n            [iconcursor]=\"true\"\n            [(ngModel)]=\"_search\"\n            (clickIcon)=\"doSearch($event)\"\n            (keydown)=\"onKeyDown($event)\"\n            (focus)=\"onFocusSearch()\">\n        </do-input-base-icon>\n    </div>\n    <div class=\"filter-funnel\" *ngIf=\"filter && formGroupFilter\">\n        <nb-icon\n            class=\"filter-icon-funnel\"\n            [icon]=\"showFilter ? 'arrow-upward-outline' : 'funnel-outline'\"\n            (click)=\"doFilterFunnel()\">\n        </nb-icon>\n    </div>\n</div>\n<div *ngIf=\"filter && formGroupFilter\" do-datatable-collapse #collapse>\n    <ng-content></ng-content>\n    <div class=\"form-group row\">\n        <div class=\"offset-sm-3 col-sm-9\">\n          <button\n            type=\"submit\"\n            status=\"primary\"\n            (click)=\"doFilter()\"\n            nbButton>\n            {{ 'Search' | translate}}\n          </button>\n        </div>\n    </div>\n</div>", styles: [".header-datatable{width:100%;display:flex;padding-bottom:.3rem}.header-filter{width:100%}.filter-funnel{right:0;padding:10px 10px 10px 15px;cursor:pointer}.filter-icon-funnel:hover{color:#ffc94d}.header-action{left:0;padding:10px 15px 10px 10px;cursor:pointer}.action-add:hover{color:#598bff}.action-trash:hover{color:#ff708d}\n"], components: [{ type: i2.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }, { type: DoInputBaseIconComponent, selector: "do-input-base-icon", inputs: ["placeholder", "minLength", "maxLength", "iconcursor", "icon", "buttontype", "type"], outputs: ["clickIcon", "focus"] }, { type: DoDatatableCollapseComponent, selector: "do-datatable-collapse, [do-datatable-collapse]" }, { type: i2.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], pipes: { "translate": i5.TranslatePipe }, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoDatatableHeaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-datatable-header',
                    styleUrls: ['./do-datatable-header.component.scss'],
                    templateUrl: './do-datatable-header.component.html',
                    encapsulation: ViewEncapsulation.None,
                }]
        }], propDecorators: { header: [{
                type: Input
            }], footer: [{
                type: Input
            }], add: [{
                type: Input
            }], edit: [{
                type: Input
            }], delete: [{
                type: Input
            }], filter: [{
                type: Input
            }], formGroupFilter: [{
                type: Input
            }], onSearch: [{
                type: Output
            }], onFilter: [{
                type: Output
            }], onAdd: [{
                type: Output
            }], onDelete: [{
                type: Output
            }], collapse: [{
                type: ViewChild,
                args: ['collapse', { static: false }]
            }] } });

class DoDatatableBaseComponent {
    constructor(locale, injector) {
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
        this.sortType = SortType.single;
        this.selectionType = SelectionType.checkbox;
        this.columnMode = ColumnMode.force;
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
        this.page = new EventEmitter();
        this.sort = new EventEmitter();
        this.select = new EventEmitter();
        this.activate = new EventEmitter();
        this.onButtonCell = new EventEmitter();
        this.cols = [];
    }
    set columns(val) {
        val.forEach(function (part, index) {
            var _a;
            if (!((_a = this[index]) === null || _a === void 0 ? void 0 : _a.sortable)) {
                this[index].sortable = false;
            }
        }, val);
        this.cols = val;
    }
    get columns() {
        return this.cols;
    }
    setPage(page) {
        this.page.emit(page);
    }
    onSort(order) {
        this.sort.emit(order);
    }
    onSelect(selected) {
        this.select.emit(selected);
    }
    onActivate(event) {
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
    }
    sanitizedValue(value) {
        return value !== null && value !== undefined ? this.stripHtml(value) : value;
    }
    stripHtml(html) {
        if (!html.replace) {
            return html;
        }
        return html.replace(/<\/?[^>]+(>|$)/g, '');
    }
    onClickButton(event) {
        this.onButtonCell.emit(event);
    }
}
DoDatatableBaseComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoDatatableBaseComponent, deps: [{ token: LOCALE_ID }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
DoDatatableBaseComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoDatatableBaseComponent, selector: "do-datatable-base", inputs: { rows: "rows", selected: "selected", limit: "limit", count: "count", offset: "offset", externalPaging: "externalPaging", externalSorting: "externalSorting", loadingIndicator: "loadingIndicator", scrollbarH: "scrollbarH", scrollbarV: "scrollbarV", reorderable: "reorderable", sortType: "sortType", sortsDefault: "sortsDefault", messages: "messages", selectionType: "selectionType", columnMode: "columnMode", headerHeight: "headerHeight", footerHeight: "footerHeight", rowHeight: "rowHeight", header: "header", column: "column", footer: "footer", add: "add", edit: "edit", delete: "delete", filter: "filter", startWithOpenData: "startWithOpenData", columns: "columns" }, outputs: { page: "page", sort: "sort", select: "select", activate: "activate", onButtonCell: "onButtonCell" }, ngImport: i0, template: "<ngx-datatable\n    class=\"do\"\n    [rows]=\"rows\"\n    [columns]=\"columns\"\n    [selected]=\"selected\"\n    [limit]=\"limit\"\n    [count]=\"count\"\n    [offset]=\"offset\"\n    [externalPaging]=\"externalPaging\"\n    [externalSorting]=\"externalSorting\"\n    [loadingIndicator]=\"loadingIndicator\"\n    [scrollbarH]=\"scrollbarH\"\n    [scrollbarV]=\"scrollbarV\"\n    [reorderable]=\"reorderable\"\n    [sortType]=\"sortType\"\n    [sorts]=\"sortsDefault\"\n    [selectionType]=\"selectionType\"\n    [columnMode]=\"columnMode\"\n    [headerHeight]=\"headerHeight\"\n    [footerHeight]=\"footerHeight\"\n    [rowHeight]=\"rowHeight\"\n    (page)=\"setPage($event)\"\n    (sort)=\"onSort($event)\"\n    (select)=\"onSelect($event)\"\n    (activate)=\"onActivate($event)\"\n    #datatable>\n    <ngx-datatable-column *ngIf=\"selectionType === 'checkbox' && column\"\n        [width]=\"30\"\n        [sortable]=\"false\"\n        [canAutoResize]=\"false\"\n        [draggable]=\"false\"\n        [resizeable]=\"false\"\n        [headerCheckboxable]=\"true\"\n        [checkboxable]=\"true\"\n        [frozenLeft]=\"true\">\n    </ngx-datatable-column>\n    <ngx-datatable-column *ngFor=\"let col of columns\"\n        [prop]=\"col.prop\"\n        [name]=\"col.name | translate\"\n        [sortable]=\"col.sortable\"\n        [canAutoResize]=\"col.canAutoResize\"\n        [draggable]=\"col.draggable\"\n        [resizeable]=\"col.resizeable\"\n        [width]=\"col.width\"\n        [frozenLeft]=\"col.frozenLeft\"\n        [frozenRight]=\"col.frozenRight\">\n        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n            <span *ngIf=\"!col.cellTemplate && !col.type\" [title]=\"sanitizedValue(value)\" [innerHTML]=\"value\"></span>\n            <span *ngIf=\"!col.cellTemplate && col.type === 'prefix'\" [title]=\"sanitizedValue(value)\" [innerHTML]=\"value + ' ' + col.prefix\"></span>\n            <span *ngIf=\"!col.cellTemplate && col.type === 'html'\" [title]=\"sanitizedValue(value)\" [innerHTML]=\"value\"></span>\n            <span *ngIf=\"!col.cellTemplate && col.type === 'icon'\" [title]=\"sanitizedValue(value)\"><span class=\"{{value}}\"></span></span>\n            <button\n                *ngIf=\"!col.cellTemplate && col.type === 'button'\"\n                (click)=\"onClickButton(value)\"\n                class=\"btn btn-sm btn-{{col.buttonStatus ? col.buttonStatus : 'primary'}}\">\n                {{ col.button | translate }}\n            </button>\n        </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-footer *ngIf=\"footer\">\n        <ng-template\n            ngx-datatable-footer-template\n            let-rowCount=\"rowCount\"\n            let-pageSize=\"pageSize\"\n            let-selectedCount=\"selectedCount\"\n            let-curPage=\"curPage\"\n            let-offset=\"offset\"\n            let-isVisible=\"isVisible\">\n            <div class=\"page-count\">\n                <div> {{ selectedCount }} {{ 'Selected' | translate }} | {{ count }} {{ 'Total' | translate }} </div>\n            </div>\n            <datatable-pager\n                [pagerLeftArrowIcon]=\"'datatable-icon-left'\"\n                [pagerRightArrowIcon]=\"'datatable-icon-right'\"\n                [pagerPreviousIcon]=\"'datatable-icon-prev'\"\n                [pagerNextIcon]=\"'datatable-icon-skip'\"\n                [page]=\"curPage\"\n                [size]=\"pageSize\"\n                [count]=\"rowCount\"\n                [hidden]=\"!((rowCount / pageSize) > 1)\"\n                (change)=\"datatable.onFooterPage($event)\">\n            </datatable-pager>\n        </ng-template>\n    </ngx-datatable-footer>\n</ngx-datatable>\n", styles: [".ngx-datatable{display:block;overflow:hidden;justify-content:center;position:relative;transform:translate(0)}.ngx-datatable [hidden]{display:none!important}.ngx-datatable *,.ngx-datatable *:before,.ngx-datatable *:after{box-sizing:border-box}.ngx-datatable.scroll-vertical .datatable-body{overflow-y:auto}.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper{position:absolute}.ngx-datatable.scroll-horz .datatable-body{overflow-x:auto;-webkit-overflow-scrolling:touch}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner{white-space:nowrap}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ngx-datatable.fixed-row .datatable-scroll{white-space:nowrap}.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row{white-space:nowrap}.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ngx-datatable .datatable-body-row,.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-header-inner{display:flex;flex-direction:row;-o-flex-flow:row;flex-flow:row}.ngx-datatable .datatable-body-cell,.ngx-datatable .datatable-header-cell{overflow-x:hidden;vertical-align:top;display:inline-block;line-height:1.625}.ngx-datatable .datatable-body-cell:focus,.ngx-datatable .datatable-header-cell:focus{outline:none}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{z-index:9}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-row-group,.ngx-datatable .datatable-row-right{position:relative}.ngx-datatable .datatable-header{display:block;overflow:hidden}.ngx-datatable .datatable-header .datatable-header-inner{align-items:stretch;-webkit-align-items:stretch}.ngx-datatable .datatable-header .datatable-header-cell{position:relative;display:inline-block}.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper{cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper{cursor:move}.ngx-datatable .datatable-header .datatable-header-cell .sort-btn{line-height:100%;vertical-align:middle;display:inline-block;cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable{display:inline-block;position:absolute;right:0;top:0;bottom:0;width:5px;padding:0 4px;visibility:hidden}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle{cursor:ew-resize}.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle{visibility:visible}.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable{visibility:visible}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker{position:absolute;top:0;bottom:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft{right:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight{left:0}.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap{height:inherit}.ngx-datatable .datatable-body{position:relative;z-index:10;display:block}.ngx-datatable .datatable-body .datatable-scroll{display:inline-block}.ngx-datatable .datatable-body .datatable-row-detail{overflow-y:hidden}.ngx-datatable .datatable-body .datatable-row-wrapper{display:flex;flex-direction:column}.ngx-datatable .datatable-body .datatable-body-row{outline:none}.ngx-datatable .datatable-body .datatable-body-row>div{display:flex}.ngx-datatable .datatable-footer{display:block;width:100%;overflow:auto}.ngx-datatable .datatable-footer .datatable-footer-inner{display:flex;align-items:center;width:100%}.ngx-datatable .datatable-footer .selected-count .page-count{flex:1 1 40%}.ngx-datatable .datatable-footer .selected-count .datatable-pager{flex:1 1 60%}.ngx-datatable .datatable-footer .page-count{flex:1 1 20%}.ngx-datatable .datatable-footer .datatable-pager{flex:1 1 80%;text-align:right}.ngx-datatable .datatable-footer .datatable-pager .pager,.ngx-datatable .datatable-footer .datatable-pager .pager li{padding:0;margin:0;display:inline-block;list-style:none}.ngx-datatable .datatable-footer .datatable-pager .pager li,.ngx-datatable .datatable-footer .datatable-pager .pager li a{outline:none}.ngx-datatable .datatable-footer .datatable-pager .pager li a{cursor:pointer;display:inline-block}.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a{cursor:not-allowed}.nb-theme-default .ngx-datatable.do{box-shadow:none;font-size:13px}.nb-theme-default .ngx-datatable.do .datatable-header{height:unset!important}.nb-theme-default .ngx-datatable.do .datatable-header .datatable-header-cell{vertical-align:bottom;padding:.75rem;border-bottom:1px solid #d1d4d7}.nb-theme-default .ngx-datatable.do .datatable-header .datatable-header-cell .datatable-header-cell-label{line-height:24px}.nb-theme-default .ngx-datatable.do .datatable-header .datatable-row-left{background-color:#fff;background-position:100% 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==)}.nb-theme-default .ngx-datatable.do .datatable-header .datatable-row-right{background-color:#fff;background-position:0 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==)}.nb-theme-default .ngx-datatable.do .datatable-body .datatable-body-row{vertical-align:top}.nb-theme-default .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-even{background-color:#f2f2f2}.nb-theme-default .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-even .datatable-row-left{background-color:#f2f2f2}.nb-theme-default .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-even .datatable-row-right{background-color:#f2f2f2}.nb-theme-default .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-odd{background-color:#fff}.nb-theme-default .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-odd .datatable-row-left{background-color:#fff}.nb-theme-default .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-odd .datatable-row-right{background-color:#fff}.nb-theme-default .ngx-datatable.do .datatable-body .datatable-body-row .datatable-row-left{background-position:100% 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==)}.nb-theme-default .ngx-datatable.do .datatable-body .datatable-body-row .datatable-row-right{background-position:0 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==)}.nb-theme-default .ngx-datatable.do .datatable-body .datatable-body-row.active{background-color:#36f;color:#fff}.nb-theme-default .ngx-datatable.do .datatable-body .datatable-body-row.active .datatable-row-left{background-color:#36f}.nb-theme-default .ngx-datatable.do .datatable-body .datatable-body-row.active .datatable-row-right{background-color:#36f}.nb-theme-default .ngx-datatable.do .datatable-body .datatable-body-row:hover,.nb-theme-default .ngx-datatable.do .datatable-body .datatable-body-row:hover .datatable-row-group{cursor:pointer;border-bottom:.025rem solid #7899ff;transition-property:background;transition-duration:.3s;transition-timing-function:linear}.nb-theme-default .ngx-datatable.do .datatable-body .datatable-body-row .datatable-body-cell{padding:.75rem;text-align:left;vertical-align:top}.nb-theme-default .ngx-datatable.do .datatable-body .empty-row{position:relative;padding:.75rem 1.25rem;margin-bottom:0}.nb-theme-default .ngx-datatable.do .datatable-body .progress-linear{display:block;position:sticky;width:100%;height:5px;padding:0;margin:0;top:0}.nb-theme-default .ngx-datatable.do .datatable-body .progress-linear .container{display:block;position:relative;overflow:hidden;width:100%;height:5px;transform:translate(0) scale(1);background-color:#aad1f9}.nb-theme-default .ngx-datatable.do .datatable-body .progress-linear .container .bar{transition:all .2s linear;animation:query .8s infinite cubic-bezier(.39,.575,.565,1);transition:transform .2s linear;background-color:#106cc8;position:absolute;left:0;top:0;bottom:0;width:100%;height:5px}.nb-theme-default .ngx-datatable.do .datatable-footer{background:#f2f2f2;color:#5a5a5a;margin-top:-1px}.nb-theme-default .ngx-datatable.do .datatable-footer .page-count{padding:.7rem}.nb-theme-default .ngx-datatable.do .datatable-footer .datatable-pager{margin:0 10px;vertical-align:top}.nb-theme-default .ngx-datatable.do .datatable-footer .datatable-pager ul li{margin:10px 0}.nb-theme-default .ngx-datatable.do .datatable-footer .datatable-pager ul li:not(.disabled).active a,.nb-theme-default .ngx-datatable.do .datatable-footer .datatable-pager ul li:not(.disabled):hover a{background-color:#c1c1c1;font-weight:bold}.nb-theme-default .ngx-datatable.do .datatable-footer .datatable-pager a{height:22px;min-width:24px;line-height:22px;padding:0;border-radius:3px;margin:0 3px;text-align:center;vertical-align:top;text-decoration:none;vertical-align:bottom;color:#5a5a5a}.nb-theme-default .ngx-datatable.do .datatable-footer .datatable-pager .datatable-icon-left,.nb-theme-default .ngx-datatable.do .datatable-footer .datatable-pager .datatable-icon-skip,.nb-theme-default .ngx-datatable.do .datatable-footer .datatable-pager .datatable-icon-right,.nb-theme-default .ngx-datatable.do .datatable-footer .datatable-pager .datatable-icon-prev{line-height:27px;padding:0 .2rem}.nb-theme-default .ngx-datatable.do .datatable-checkbox{position:relative;margin:0;cursor:pointer;vertical-align:middle;display:inline-block;box-sizing:border-box;padding:0}.nb-theme-default .ngx-datatable.do .datatable-checkbox input[type=checkbox]{position:relative;margin:0 1rem 0 0;cursor:pointer;outline:none}.nb-theme-default .ngx-datatable.do .datatable-checkbox input[type=checkbox]:before{transition:all .3s ease-in-out;content:\"\";position:absolute;left:0;z-index:1;width:1rem;height:1rem;border:2px solid #f2f2f2}.nb-theme-default .ngx-datatable.do .datatable-checkbox input[type=checkbox]:checked:before{transform:rotate(-45deg);height:.5rem;border-color:#36f;border-top-style:none;border-right-style:none}.nb-theme-default .ngx-datatable.do .datatable-checkbox input[type=checkbox]:after{content:\"\";position:absolute;top:0;left:0;width:1rem;height:1rem;background:#fff;cursor:pointer}.nb-theme-default .ngx-datatable.do .datatable-summary-row .datatable-body-row .datatable-body-cell{font-weight:bold}.nb-theme-dark .ngx-datatable.do{box-shadow:none;font-size:13px}.nb-theme-dark .ngx-datatable.do .datatable-header{height:unset!important}.nb-theme-dark .ngx-datatable.do .datatable-header .datatable-header-cell{vertical-align:bottom;padding:.75rem;border-bottom:1px solid #d1d4d7}.nb-theme-dark .ngx-datatable.do .datatable-header .datatable-header-cell .datatable-header-cell-label{line-height:24px}.nb-theme-dark .ngx-datatable.do .datatable-header .datatable-row-left{background-color:#222b45;background-position:100% 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8/h8AApMByMhOLQwAAAAASUVORK5CYII=)}.nb-theme-dark .ngx-datatable.do .datatable-header .datatable-row-right{background-color:#222b45;background-position:0 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8/h8AApMByMhOLQwAAAAASUVORK5CYII=)}.nb-theme-dark .ngx-datatable.do .datatable-body .datatable-body-row{vertical-align:top}.nb-theme-dark .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-even{background-color:#192038}.nb-theme-dark .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-even .datatable-row-left{background-color:#192038}.nb-theme-dark .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-even .datatable-row-right{background-color:#192038}.nb-theme-dark .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-odd{background-color:#222b45}.nb-theme-dark .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-odd .datatable-row-left{background-color:#222b45}.nb-theme-dark .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-odd .datatable-row-right{background-color:#222b45}.nb-theme-dark .ngx-datatable.do .datatable-body .datatable-body-row .datatable-row-left{background-position:100% 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8/h8AApMByMhOLQwAAAAASUVORK5CYII=)}.nb-theme-dark .ngx-datatable.do .datatable-body .datatable-body-row .datatable-row-right{background-position:0 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8/h8AApMByMhOLQwAAAAASUVORK5CYII=)}.nb-theme-dark .ngx-datatable.do .datatable-body .datatable-body-row.active{background-color:#36f;color:#fff}.nb-theme-dark .ngx-datatable.do .datatable-body .datatable-body-row.active .datatable-row-left{background-color:#36f}.nb-theme-dark .ngx-datatable.do .datatable-body .datatable-body-row.active .datatable-row-right{background-color:#36f}.nb-theme-dark .ngx-datatable.do .datatable-body .datatable-body-row:hover,.nb-theme-dark .ngx-datatable.do .datatable-body .datatable-body-row:hover .datatable-row-group{cursor:pointer;border-bottom:.025rem solid #7899ff;transition-property:background;transition-duration:.3s;transition-timing-function:linear}.nb-theme-dark .ngx-datatable.do .datatable-body .datatable-body-row .datatable-body-cell{padding:.75rem;text-align:left;vertical-align:top}.nb-theme-dark .ngx-datatable.do .datatable-body .empty-row{position:relative;padding:.75rem 1.25rem;margin-bottom:0}.nb-theme-dark .ngx-datatable.do .datatable-body .progress-linear{display:block;position:sticky;width:100%;height:5px;padding:0;margin:0;top:0}.nb-theme-dark .ngx-datatable.do .datatable-body .progress-linear .container{display:block;position:relative;overflow:hidden;width:100%;height:5px;transform:translate(0) scale(1);background-color:#aad1f9}.nb-theme-dark .ngx-datatable.do .datatable-body .progress-linear .container .bar{transition:all .2s linear;animation:query .8s infinite cubic-bezier(.39,.575,.565,1);transition:transform .2s linear;background-color:#106cc8;position:absolute;left:0;top:0;bottom:0;width:100%;height:5px}.nb-theme-dark .ngx-datatable.do .datatable-footer{background:#192038;color:#fff;margin-top:-1px}.nb-theme-dark .ngx-datatable.do .datatable-footer .page-count{padding:.7rem}.nb-theme-dark .ngx-datatable.do .datatable-footer .datatable-pager{margin:0 10px;vertical-align:top}.nb-theme-dark .ngx-datatable.do .datatable-footer .datatable-pager ul li{margin:10px 0}.nb-theme-dark .ngx-datatable.do .datatable-footer .datatable-pager ul li:not(.disabled).active a,.nb-theme-dark .ngx-datatable.do .datatable-footer .datatable-pager ul li:not(.disabled):hover a{background-color:#c1c1c1;font-weight:bold}.nb-theme-dark .ngx-datatable.do .datatable-footer .datatable-pager a{height:22px;min-width:24px;line-height:22px;padding:0;border-radius:3px;margin:0 3px;text-align:center;vertical-align:top;text-decoration:none;vertical-align:bottom;color:#fff}.nb-theme-dark .ngx-datatable.do .datatable-footer .datatable-pager .datatable-icon-left,.nb-theme-dark .ngx-datatable.do .datatable-footer .datatable-pager .datatable-icon-skip,.nb-theme-dark .ngx-datatable.do .datatable-footer .datatable-pager .datatable-icon-right,.nb-theme-dark .ngx-datatable.do .datatable-footer .datatable-pager .datatable-icon-prev{line-height:27px;padding:0 .2rem}.nb-theme-dark .ngx-datatable.do .datatable-checkbox{position:relative;margin:0;cursor:pointer;vertical-align:middle;display:inline-block;box-sizing:border-box;padding:0}.nb-theme-dark .ngx-datatable.do .datatable-checkbox input[type=checkbox]{position:relative;margin:0 1rem 0 0;cursor:pointer;outline:none}.nb-theme-dark .ngx-datatable.do .datatable-checkbox input[type=checkbox]:before{transition:all .3s ease-in-out;content:\"\";position:absolute;left:0;z-index:1;width:1rem;height:1rem;border:2px solid #f2f2f2}.nb-theme-dark .ngx-datatable.do .datatable-checkbox input[type=checkbox]:checked:before{transform:rotate(-45deg);height:.5rem;border-color:#36f;border-top-style:none;border-right-style:none}.nb-theme-dark .ngx-datatable.do .datatable-checkbox input[type=checkbox]:after{content:\"\";position:absolute;top:0;left:0;width:1rem;height:1rem;background:#fff;cursor:pointer}.nb-theme-dark .ngx-datatable.do .datatable-summary-row .datatable-body-row .datatable-body-cell{font-weight:bold}.nb-theme-cosmic .ngx-datatable.do{box-shadow:none;font-size:13px}.nb-theme-cosmic .ngx-datatable.do .datatable-header{height:unset!important}.nb-theme-cosmic .ngx-datatable.do .datatable-header .datatable-header-cell{vertical-align:bottom;padding:.75rem;border-bottom:1px solid #d1d4d7}.nb-theme-cosmic .ngx-datatable.do .datatable-header .datatable-header-cell .datatable-header-cell-label{line-height:24px}.nb-theme-cosmic .ngx-datatable.do .datatable-header .datatable-row-left{background-color:#323259;background-position:100% 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8/h8AApMByMhOLQwAAAAASUVORK5CYII=)}.nb-theme-cosmic .ngx-datatable.do .datatable-header .datatable-row-right{background-color:#323259;background-position:0 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8/h8AApMByMhOLQwAAAAASUVORK5CYII=)}.nb-theme-cosmic .ngx-datatable.do .datatable-body .datatable-body-row{vertical-align:top}.nb-theme-cosmic .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-even{background-color:#1b1b38}.nb-theme-cosmic .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-even .datatable-row-left{background-color:#1b1b38}.nb-theme-cosmic .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-even .datatable-row-right{background-color:#1b1b38}.nb-theme-cosmic .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-odd{background-color:#323259}.nb-theme-cosmic .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-odd .datatable-row-left{background-color:#323259}.nb-theme-cosmic .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-odd .datatable-row-right{background-color:#323259}.nb-theme-cosmic .ngx-datatable.do .datatable-body .datatable-body-row .datatable-row-left{background-position:100% 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8/h8AApMByMhOLQwAAAAASUVORK5CYII=)}.nb-theme-cosmic .ngx-datatable.do .datatable-body .datatable-body-row .datatable-row-right{background-position:0 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8/h8AApMByMhOLQwAAAAASUVORK5CYII=)}.nb-theme-cosmic .ngx-datatable.do .datatable-body .datatable-body-row.active{background-color:#36f;color:#fff}.nb-theme-cosmic .ngx-datatable.do .datatable-body .datatable-body-row.active .datatable-row-left{background-color:#36f}.nb-theme-cosmic .ngx-datatable.do .datatable-body .datatable-body-row.active .datatable-row-right{background-color:#36f}.nb-theme-cosmic .ngx-datatable.do .datatable-body .datatable-body-row:hover,.nb-theme-cosmic .ngx-datatable.do .datatable-body .datatable-body-row:hover .datatable-row-group{cursor:pointer;border-bottom:.025rem solid #7899ff;transition-property:background;transition-duration:.3s;transition-timing-function:linear}.nb-theme-cosmic .ngx-datatable.do .datatable-body .datatable-body-row .datatable-body-cell{padding:.75rem;text-align:left;vertical-align:top}.nb-theme-cosmic .ngx-datatable.do .datatable-body .empty-row{position:relative;padding:.75rem 1.25rem;margin-bottom:0}.nb-theme-cosmic .ngx-datatable.do .datatable-body .progress-linear{display:block;position:sticky;width:100%;height:5px;padding:0;margin:0;top:0}.nb-theme-cosmic .ngx-datatable.do .datatable-body .progress-linear .container{display:block;position:relative;overflow:hidden;width:100%;height:5px;transform:translate(0) scale(1);background-color:#aad1f9}.nb-theme-cosmic .ngx-datatable.do .datatable-body .progress-linear .container .bar{transition:all .2s linear;animation:query .8s infinite cubic-bezier(.39,.575,.565,1);transition:transform .2s linear;background-color:#106cc8;position:absolute;left:0;top:0;bottom:0;width:100%;height:5px}.nb-theme-cosmic .ngx-datatable.do .datatable-footer{background:#1b1b38;color:#fff;margin-top:-1px}.nb-theme-cosmic .ngx-datatable.do .datatable-footer .page-count{padding:.7rem}.nb-theme-cosmic .ngx-datatable.do .datatable-footer .datatable-pager{margin:0 10px;vertical-align:top}.nb-theme-cosmic .ngx-datatable.do .datatable-footer .datatable-pager ul li{margin:10px 0}.nb-theme-cosmic .ngx-datatable.do .datatable-footer .datatable-pager ul li:not(.disabled).active a,.nb-theme-cosmic .ngx-datatable.do .datatable-footer .datatable-pager ul li:not(.disabled):hover a{background-color:#c1c1c1;font-weight:bold}.nb-theme-cosmic .ngx-datatable.do .datatable-footer .datatable-pager a{height:22px;min-width:24px;line-height:22px;padding:0;border-radius:3px;margin:0 3px;text-align:center;vertical-align:top;text-decoration:none;vertical-align:bottom;color:#fff}.nb-theme-cosmic .ngx-datatable.do .datatable-footer .datatable-pager .datatable-icon-left,.nb-theme-cosmic .ngx-datatable.do .datatable-footer .datatable-pager .datatable-icon-skip,.nb-theme-cosmic .ngx-datatable.do .datatable-footer .datatable-pager .datatable-icon-right,.nb-theme-cosmic .ngx-datatable.do .datatable-footer .datatable-pager .datatable-icon-prev{line-height:27px;padding:0 .2rem}.nb-theme-cosmic .ngx-datatable.do .datatable-checkbox{position:relative;margin:0;cursor:pointer;vertical-align:middle;display:inline-block;box-sizing:border-box;padding:0}.nb-theme-cosmic .ngx-datatable.do .datatable-checkbox input[type=checkbox]{position:relative;margin:0 1rem 0 0;cursor:pointer;outline:none}.nb-theme-cosmic .ngx-datatable.do .datatable-checkbox input[type=checkbox]:before{transition:all .3s ease-in-out;content:\"\";position:absolute;left:0;z-index:1;width:1rem;height:1rem;border:2px solid #f2f2f2}.nb-theme-cosmic .ngx-datatable.do .datatable-checkbox input[type=checkbox]:checked:before{transform:rotate(-45deg);height:.5rem;border-color:#36f;border-top-style:none;border-right-style:none}.nb-theme-cosmic .ngx-datatable.do .datatable-checkbox input[type=checkbox]:after{content:\"\";position:absolute;top:0;left:0;width:1rem;height:1rem;background:#fff;cursor:pointer}.nb-theme-cosmic .ngx-datatable.do .datatable-summary-row .datatable-body-row .datatable-body-cell{font-weight:bold}.nb-theme-corporate .ngx-datatable.do{box-shadow:none;font-size:13px}.nb-theme-corporate .ngx-datatable.do .datatable-header{height:unset!important}.nb-theme-corporate .ngx-datatable.do .datatable-header .datatable-header-cell{vertical-align:bottom;padding:.75rem;border-bottom:1px solid #d1d4d7}.nb-theme-corporate .ngx-datatable.do .datatable-header .datatable-header-cell .datatable-header-cell-label{line-height:24px}.nb-theme-corporate .ngx-datatable.do .datatable-header .datatable-row-left{background-color:#fff;background-position:100% 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==)}.nb-theme-corporate .ngx-datatable.do .datatable-header .datatable-row-right{background-color:#fff;background-position:0 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==)}.nb-theme-corporate .ngx-datatable.do .datatable-body .datatable-body-row{vertical-align:top}.nb-theme-corporate .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-even{background-color:#f2f2f2}.nb-theme-corporate .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-even .datatable-row-left{background-color:#f2f2f2}.nb-theme-corporate .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-even .datatable-row-right{background-color:#f2f2f2}.nb-theme-corporate .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-odd{background-color:#fff}.nb-theme-corporate .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-odd .datatable-row-left{background-color:#fff}.nb-theme-corporate .ngx-datatable.do .datatable-body .datatable-body-row.datatable-row-odd .datatable-row-right{background-color:#fff}.nb-theme-corporate .ngx-datatable.do .datatable-body .datatable-body-row .datatable-row-left{background-position:100% 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==)}.nb-theme-corporate .ngx-datatable.do .datatable-body .datatable-body-row .datatable-row-right{background-position:0 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==)}.nb-theme-corporate .ngx-datatable.do .datatable-body .datatable-body-row.active{background-color:#36f;color:#fff}.nb-theme-corporate .ngx-datatable.do .datatable-body .datatable-body-row.active .datatable-row-left{background-color:#36f}.nb-theme-corporate .ngx-datatable.do .datatable-body .datatable-body-row.active .datatable-row-right{background-color:#36f}.nb-theme-corporate .ngx-datatable.do .datatable-body .datatable-body-row:hover,.nb-theme-corporate .ngx-datatable.do .datatable-body .datatable-body-row:hover .datatable-row-group{cursor:pointer;border-bottom:.025rem solid #7899ff;transition-property:background;transition-duration:.3s;transition-timing-function:linear}.nb-theme-corporate .ngx-datatable.do .datatable-body .datatable-body-row .datatable-body-cell{padding:.75rem;text-align:left;vertical-align:top}.nb-theme-corporate .ngx-datatable.do .datatable-body .empty-row{position:relative;padding:.75rem 1.25rem;margin-bottom:0}.nb-theme-corporate .ngx-datatable.do .datatable-body .progress-linear{display:block;position:sticky;width:100%;height:5px;padding:0;margin:0;top:0}.nb-theme-corporate .ngx-datatable.do .datatable-body .progress-linear .container{display:block;position:relative;overflow:hidden;width:100%;height:5px;transform:translate(0) scale(1);background-color:#aad1f9}.nb-theme-corporate .ngx-datatable.do .datatable-body .progress-linear .container .bar{transition:all .2s linear;animation:query .8s infinite cubic-bezier(.39,.575,.565,1);transition:transform .2s linear;background-color:#106cc8;position:absolute;left:0;top:0;bottom:0;width:100%;height:5px}.nb-theme-corporate .ngx-datatable.do .datatable-footer{background:#f2f2f2;color:#5a5a5a;margin-top:-1px}.nb-theme-corporate .ngx-datatable.do .datatable-footer .page-count{padding:.7rem}.nb-theme-corporate .ngx-datatable.do .datatable-footer .datatable-pager{margin:0 10px;vertical-align:top}.nb-theme-corporate .ngx-datatable.do .datatable-footer .datatable-pager ul li{margin:10px 0}.nb-theme-corporate .ngx-datatable.do .datatable-footer .datatable-pager ul li:not(.disabled).active a,.nb-theme-corporate .ngx-datatable.do .datatable-footer .datatable-pager ul li:not(.disabled):hover a{background-color:#c1c1c1;font-weight:bold}.nb-theme-corporate .ngx-datatable.do .datatable-footer .datatable-pager a{height:22px;min-width:24px;line-height:22px;padding:0;border-radius:3px;margin:0 3px;text-align:center;vertical-align:top;text-decoration:none;vertical-align:bottom;color:#5a5a5a}.nb-theme-corporate .ngx-datatable.do .datatable-footer .datatable-pager .datatable-icon-left,.nb-theme-corporate .ngx-datatable.do .datatable-footer .datatable-pager .datatable-icon-skip,.nb-theme-corporate .ngx-datatable.do .datatable-footer .datatable-pager .datatable-icon-right,.nb-theme-corporate .ngx-datatable.do .datatable-footer .datatable-pager .datatable-icon-prev{line-height:27px;padding:0 .2rem}.nb-theme-corporate .ngx-datatable.do .datatable-checkbox{position:relative;margin:0;cursor:pointer;vertical-align:middle;display:inline-block;box-sizing:border-box;padding:0}.nb-theme-corporate .ngx-datatable.do .datatable-checkbox input[type=checkbox]{position:relative;margin:0 1rem 0 0;cursor:pointer;outline:none}.nb-theme-corporate .ngx-datatable.do .datatable-checkbox input[type=checkbox]:before{transition:all .3s ease-in-out;content:\"\";position:absolute;left:0;z-index:1;width:1rem;height:1rem;border:2px solid #f2f2f2}.nb-theme-corporate .ngx-datatable.do .datatable-checkbox input[type=checkbox]:checked:before{transform:rotate(-45deg);height:.5rem;border-color:#36f;border-top-style:none;border-right-style:none}.nb-theme-corporate .ngx-datatable.do .datatable-checkbox input[type=checkbox]:after{content:\"\";position:absolute;top:0;left:0;width:1rem;height:1rem;background:#fff;cursor:pointer}.nb-theme-corporate .ngx-datatable.do .datatable-summary-row .datatable-body-row .datatable-body-cell{font-weight:bold}@keyframes query{0%{opacity:1;transform:translate(35%) scaleX(.3)}to{opacity:0;transform:translate(-50%) scaleX(0)}}\n"], components: [{ type: i1$1.DatatableComponent, selector: "ngx-datatable", inputs: ["selected", "scrollbarV", "scrollbarH", "rowHeight", "columnMode", "headerHeight", "footerHeight", "externalPaging", "externalSorting", "loadingIndicator", "reorderable", "swapColumns", "sortType", "sorts", "cssClasses", "messages", "groupExpansionDefault", "selectAllRowsOnPage", "virtualization", "summaryRow", "summaryHeight", "summaryPosition", "rowIdentity", "rows", "groupedRows", "groupRowsBy", "columns", "limit", "count", "offset", "targetMarkerTemplate", "selectionType", "rowClass", "selectCheck", "displayCheck", "trackByProp", "treeFromRelation", "treeToRelation"], outputs: ["scroll", "activate", "select", "sort", "page", "reorder", "resize", "tableContextmenu", "treeAction"] }, { type: i1$1.DataTablePagerComponent, selector: "datatable-pager", inputs: ["size", "count", "page", "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "pagerNextIcon"], outputs: ["change"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1$1.DataTableColumnDirective, selector: "ngx-datatable-column", inputs: ["name", "prop", "frozenLeft", "frozenRight", "flexGrow", "resizeable", "comparator", "pipe", "sortable", "draggable", "canAutoResize", "minWidth", "width", "maxWidth", "checkboxable", "headerCheckboxable", "headerClass", "cellClass", "isTreeColumn", "treeLevelIndent", "summaryFunc", "summaryTemplate", "cellTemplate", "headerTemplate", "treeToggleTemplate"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1$1.DataTableColumnCellDirective, selector: "[ngx-datatable-cell-template]" }, { type: i1$1.DatatableFooterDirective, selector: "ngx-datatable-footer", inputs: ["footerHeight", "totalMessage", "selectedMessage", "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "pagerNextIcon", "template"] }, { type: i1$1.DataTableFooterTemplateDirective, selector: "[ngx-datatable-footer-template]" }], pipes: { "translate": i5.TranslatePipe }, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoDatatableBaseComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-datatable-base',
                    styleUrls: ['./do-datatable-base.component.scss'],
                    templateUrl: './do-datatable-base.component.html',
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [LOCALE_ID]
                }] }, { type: i0.Injector }]; }, propDecorators: { rows: [{
                type: Input
            }], selected: [{
                type: Input
            }], limit: [{
                type: Input
            }], count: [{
                type: Input
            }], offset: [{
                type: Input
            }], externalPaging: [{
                type: Input
            }], externalSorting: [{
                type: Input
            }], loadingIndicator: [{
                type: Input
            }], scrollbarH: [{
                type: Input
            }], scrollbarV: [{
                type: Input
            }], reorderable: [{
                type: Input
            }], sortType: [{
                type: Input
            }], sortsDefault: [{
                type: Input
            }], messages: [{
                type: Input
            }], selectionType: [{
                type: Input
            }], columnMode: [{
                type: Input
            }], headerHeight: [{
                type: Input
            }], footerHeight: [{
                type: Input
            }], rowHeight: [{
                type: Input
            }], header: [{
                type: Input
            }], column: [{
                type: Input
            }], footer: [{
                type: Input
            }], add: [{
                type: Input
            }], edit: [{
                type: Input
            }], delete: [{
                type: Input
            }], filter: [{
                type: Input
            }], startWithOpenData: [{
                type: Input
            }], page: [{
                type: Output
            }], sort: [{
                type: Output
            }], select: [{
                type: Output
            }], activate: [{
                type: Output
            }], onButtonCell: [{
                type: Output
            }], columns: [{
                type: Input
            }] } });

class DoDatatableComponent {
    constructor(locale, injector) {
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
        this.sortType = SortType.single;
        this.selectionType = SelectionType.checkbox;
        this.columnMode = ColumnMode.force;
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
        this.onAdd = new EventEmitter();
        this.onEdit = new EventEmitter();
        this.onDelete = new EventEmitter();
        this.onSearch = new EventEmitter();
        this.onFilter = new EventEmitter();
        this.onButtonCell = new EventEmitter();
        this.onLoading = new EventEmitter();
        this.onSelected = new EventEmitter();
        this.isDelete = false;
        this.destroy$ = new Subject();
        this.pageOffset = 0;
        this.http = injector.get(HTTP_SERVICE);
        this.cdref = injector.get(ChangeDetectorRef);
    }
    //  @ViewChild('datatable', {static: false}) datatable: DatatableComponent;
    set filterFn(keyword) {
        this.keywordParam = keyword;
        this._keyword = keyword;
        this.count = 0;
        this.offset = 0;
    }
    set filterDoFetchFn(keyword) {
        if (keyword) {
            this.keywordParam = keyword;
            this._keyword = keyword;
        }
        this.count = 0;
        this.offset = 0;
        this.fetch();
    }
    set reloadFn(reload) {
        if (reload && !this.loadingIndicator) {
            this.selected = [];
            this.count = 0;
            this.offset = 0;
            this.fetch();
        }
    }
    ngOnInit() {
        if (this.startWithOpenData) {
            this.fetch();
        }
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
    doSearch(search) {
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
    }
    doFilter(search) {
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
            this.filters.forEach(filter => {
                switch (filter.type) {
                    case 'input':
                    case 'datepicker':
                    case 'radio':
                        this._keyword[filter.controlName] = search[filter.controlName] ? search[filter.controlName] : null;
                        break;
                    case 'select':
                        this._keyword[filter.controlName] = search[filter.controlName].label ? search[filter.controlName] : null;
                        break;
                    case 'checkbox':
                        this._keyword[filter.controlName] = search[filter.controlName].name ? search[filter.controlName].name : null;
                        break;
                    default:
                        break;
                }
            });
            this.count = 0;
            this.offset = 0;
            this.fetch();
        }
    }
    doAdd(add) {
        this.onAdd.emit(add);
    }
    doEdit(row) {
        this.onEdit.emit(row);
    }
    doDelete() {
        this.onDelete.emit(this.selected);
    }
    onKeyDown(event) {
        if (event.key.toUpperCase() === 'ENTER') {
            this.doSearch(this._search);
        }
    }
    fetch() {
        if (this.api) {
            this.externalPaging = true;
            this.externalSorting = true;
            this.getRequest().subscribe(rows => {
                this.rows = rows;
                this.cdref.detectChanges();
            });
        }
    }
    setPage(page) {
        this.pageOffset = page.offset * this.limit;
        this.fetch();
    }
    onSort(order) {
        if (order) {
            if (Array.isArray(order.sorts)) {
                order.sorts.forEach(sort => {
                    if (sort['dir'] === 'asc') {
                        this.sort = { asc: [sort['prop']] };
                    }
                    else {
                        this.sort = { desc: [sort['prop']] };
                    }
                });
            }
        }
        this.fetch();
    }
    onSelect({ selected }) {
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
    }
    onClickButton(event) {
        this.onButtonCell.emit(event);
    }
    getRequest() {
        const body = {
            offset: this.pageOffset,
            limit: this.limit,
            keyword: this._keyword,
            order: this.sort,
        };
        this.loadingIndicator = true;
        this.onLoading.emit(this.loadingIndicator);
        return this.http.HTTP_AUTH(this.api, body)
            .pipe(map((response) => {
            this.count = Number(response.totalRecord);
            this.loadingIndicator = false;
            this.onLoading.emit(this.loadingIndicator);
            return response['data'];
        }), catchError(() => {
            this.loadingIndicator = false;
            this.count = 0;
            this.onLoading.emit(this.loadingIndicator);
            return of([]);
        }));
    }
}
DoDatatableComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoDatatableComponent, deps: [{ token: LOCALE_ID }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
DoDatatableComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoDatatableComponent, selector: "do-datatable", inputs: { rows: "rows", columns: "columns", filters: "filters", selected: "selected", limit: "limit", count: "count", offset: "offset", externalPaging: "externalPaging", externalSorting: "externalSorting", loadingIndicator: "loadingIndicator", scrollbarH: "scrollbarH", scrollbarV: "scrollbarV", reorderable: "reorderable", sortType: "sortType", messages: "messages", selectionType: "selectionType", columnMode: "columnMode", headerHeight: "headerHeight", footerHeight: "footerHeight", rowHeight: "rowHeight", header: "header", column: "column", footer: "footer", add: "add", edit: "edit", delete: "delete", filter: "filter", api: "api", startWithOpenData: "startWithOpenData", filterEvent: "filterEvent", formGroupFilter: "formGroupFilter", sort: "sort", sortsDefault: "sortsDefault", autoLoad: "autoLoad", filterFn: "filterFn", filterDoFetchFn: "filterDoFetchFn", reloadFn: "reloadFn" }, outputs: { onAdd: "onAdd", onEdit: "onEdit", onDelete: "onDelete", onSearch: "onSearch", onFilter: "onFilter", onButtonCell: "onButtonCell", onLoading: "onLoading", onSelected: "onSelected" }, ngImport: i0, template: "<do-datatable-header\n    [header]=\"header\"\n    [add]=\"add\"\n    [delete]=\"isDelete\"\n    [filter]=\"filter\"\n    [formGroupFilter]=\"formGroupFilter\"\n    (onSearch)=\"doSearch($event)\"\n    (onFilter)=\"doFilter($event)\"\n    (onAdd)=\"doAdd($event)\"\n    (onDelete)=\"doDelete()\">\n    <ng-content></ng-content>\n</do-datatable-header>\n<do-datatable-base\n    [rows]=\"rows\"\n    [columns]=\"columns\"\n    [selected]=\"selected\"\n    [limit]=\"limit\"\n    [count]=\"count\"\n    [offset]=\"offset\"\n    [externalPaging]=\"externalPaging\"\n    [externalSorting]=\"externalSorting\"\n    [loadingIndicator]=\"loadingIndicator\"\n    [scrollbarH]=\"scrollbarH\"\n    [scrollbarV]=\"scrollbarV\"\n    [reorderable]=\"reorderable\"\n    [sortType]=\"sortType\"\n    [sortsDefault]=\"sortsDefault\"\n    [messages]=\"messages\"\n    [selectionType]=\"selectionType\"\n    [columnMode]=\"columnMode\"\n    [headerHeight]=\"headerHeight\"\n    [footerHeight]=\"footerHeight\"\n    [rowHeight]=\"rowHeight\"\n    [header]=\"header\"\n    [column]=\"column\"\n    [footer]=\"footer\"\n    [add]=\"add\"\n    [edit]=\"edit\"\n    [delete]=\"delete\"\n    [filter]=\"filter\"\n    [startWithOpenData]=\"startWithOpenData\"\n    (page)=\"setPage($event)\"\n    (sort)=\"onSort($event)\"\n    (select)=\"onSelect($event)\"\n    (activate)=\"doEdit($event)\"\n    (onButtonCell)=\"onClickButton($event)\">\n</do-datatable-base>\n", styles: [""], components: [{ type: DoDatatableHeaderComponent, selector: "do-datatable-header", inputs: ["header", "footer", "add", "edit", "delete", "filter", "formGroupFilter"], outputs: ["onSearch", "onFilter", "onAdd", "onDelete"] }, { type: DoDatatableBaseComponent, selector: "do-datatable-base", inputs: ["rows", "selected", "limit", "count", "offset", "externalPaging", "externalSorting", "loadingIndicator", "scrollbarH", "scrollbarV", "reorderable", "sortType", "sortsDefault", "messages", "selectionType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "header", "column", "footer", "add", "edit", "delete", "filter", "startWithOpenData", "columns"], outputs: ["page", "sort", "select", "activate", "onButtonCell"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoDatatableComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-datatable',
                    styleUrls: ['./do-datatable.component.scss'],
                    templateUrl: './do-datatable.component.html',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [LOCALE_ID]
                }] }, { type: i0.Injector }]; }, propDecorators: { rows: [{
                type: Input
            }], columns: [{
                type: Input
            }], filters: [{
                type: Input
            }], selected: [{
                type: Input
            }], limit: [{
                type: Input
            }], count: [{
                type: Input
            }], offset: [{
                type: Input
            }], externalPaging: [{
                type: Input
            }], externalSorting: [{
                type: Input
            }], loadingIndicator: [{
                type: Input
            }], scrollbarH: [{
                type: Input
            }], scrollbarV: [{
                type: Input
            }], reorderable: [{
                type: Input
            }], sortType: [{
                type: Input
            }], messages: [{
                type: Input
            }], selectionType: [{
                type: Input
            }], columnMode: [{
                type: Input
            }], headerHeight: [{
                type: Input
            }], footerHeight: [{
                type: Input
            }], rowHeight: [{
                type: Input
            }], header: [{
                type: Input
            }], column: [{
                type: Input
            }], footer: [{
                type: Input
            }], add: [{
                type: Input
            }], edit: [{
                type: Input
            }], delete: [{
                type: Input
            }], filter: [{
                type: Input
            }], api: [{
                type: Input
            }], startWithOpenData: [{
                type: Input
            }], filterEvent: [{
                type: Input
            }], formGroupFilter: [{
                type: Input
            }], sort: [{
                type: Input
            }], sortsDefault: [{
                type: Input
            }], autoLoad: [{
                type: Input
            }], onAdd: [{
                type: Output
            }], onEdit: [{
                type: Output
            }], onDelete: [{
                type: Output
            }], onSearch: [{
                type: Output
            }], onFilter: [{
                type: Output
            }], onButtonCell: [{
                type: Output
            }], onLoading: [{
                type: Output
            }], onSelected: [{
                type: Output
            }], filterFn: [{
                type: Input
            }], filterDoFetchFn: [{
                type: Input
            }], reloadFn: [{
                type: Input
            }] } });

const DATATABLE_COMPONENTS = [
    DoDatatableBaseComponent,
    DoDatatableCollapseComponent,
    DoDatatableHeaderComponent,
    DoDatatableComponent,
];
class DoDatatableModule {
}
DoDatatableModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoDatatableModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoDatatableModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoDatatableModule, declarations: [DoDatatableBaseComponent,
        DoDatatableCollapseComponent,
        DoDatatableHeaderComponent,
        DoDatatableComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgxDatatableModule,
        NbButtonModule,
        NbIconModule,
        TranslateModule,
        DoInputModule,
        DoBaseModule,
        DoButtonModule], exports: [DoDatatableBaseComponent,
        DoDatatableCollapseComponent,
        DoDatatableHeaderComponent,
        DoDatatableComponent] });
DoDatatableModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoDatatableModule, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            NgxDatatableModule,
            NbButtonModule,
            NbIconModule,
            TranslateModule,
            DoInputModule,
            DoBaseModule,
            DoButtonModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoDatatableModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        NgxDatatableModule,
                        NbButtonModule,
                        NbIconModule,
                        TranslateModule,
                        DoInputModule,
                        DoBaseModule,
                        DoButtonModule,
                    ],
                    declarations: [
                        ...DATATABLE_COMPONENTS,
                    ],
                    exports: [
                        ...DATATABLE_COMPONENTS,
                    ],
                }]
        }] });

class DoLabelTextComponent {
    constructor() {
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
    set content(data) {
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
    }
    onShowMore() {
        this.showMore = !this.showMore;
        if (this.showMore) {
            this.value = this.originalContent;
        }
        else {
            this.onLess();
        }
    }
    onLess() {
        this.value = this.originalContent.slice(0, this.maxShowMore);
        this.value = this.value + '.... ';
    }
}
DoLabelTextComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoLabelTextComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DoLabelTextComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoLabelTextComponent, selector: "do-label-text", inputs: { colLabel: "colLabel", colContent: "colContent", skeleton: "skeleton", name: "name", content: "content", dividerlabel: "dividerlabel", numeric: "numeric", label: "label", nolabel: "nolabel", required: "required", showMoreMode: "showMoreMode", maxShowMore: "maxShowMore", paramError: "paramError" }, ngImport: i0, template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\" \n  [colLabel]=\"colLabel\" [colContent]=\"colContent\"\n  [required]=\"required\"\n  [dividerlabel]=\"dividerlabel\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colContent}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <label *ngIf=\"!showMoreMode\"\n      class=\"col-form-label label-text\"\n      [ngClass]=\"{\n        'no-content-label': !value,\n        'numeric-label': numeric\n      }\"\n    >{{value | translate}} </label>\n    <div *ngIf=\"showMoreMode\" class=\"label-text\">\n      <label\n      class=\"col-form-label\"\n      [ngClass]=\"{\n        'no-content-label': !value,\n        'numeric-label': numeric\n      }\"\n      >{{value | translate}} </label>\n      <button *ngIf=\"!showMore\" type=\"button\" nbButton outline status=\"info\" (click)=\"onShowMore()\">{{'Show More' | translate}}</button>\n      <button *ngIf=\"showMore\" type=\"button\" nbButton outline status=\"info\" (click)=\"onShowMore()\">{{'Show Less' | translate}}</button>\n    </div>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colContent}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>", styles: ["label.label-text{width:100%;border-bottom:.05rem solid #e4e5e6;padding-right:.5rem;padding-left:.5rem}div.label-text{overflow:auto;width:100%;border-bottom:.05rem solid #e4e5e6;padding-right:.5rem;padding-left:.5rem}button.btn-link{padding-left:0}label.no-content-label{padding:15px 0}label.numeric-label{text-align:right}\n"], components: [{ type: DoContainerOutletComponent, selector: "do-container-outlet", inputs: ["name", "label", "colLabel", "colContent", "nolabel", "dividerlabel", "required", "hasErrors", "errorMessages", "warnMessage", "paramError", "skeleton", "show"] }, { type: i2.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], pipes: { "translate": i5.TranslatePipe }, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoLabelTextComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-label-text',
                    styleUrls: ['./do-label-text.component.scss'],
                    templateUrl: './do-label-text.component.html',
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { colLabel: [{
                type: Input
            }], colContent: [{
                type: Input
            }], skeleton: [{
                type: Input
            }], name: [{
                type: Input
            }], content: [{
                type: Input
            }], dividerlabel: [{
                type: Input
            }], numeric: [{
                type: Input
            }], label: [{
                type: Input
            }], nolabel: [{
                type: Input
            }], required: [{
                type: Input
            }], showMoreMode: [{
                type: Input
            }], maxShowMore: [{
                type: Input
            }], paramError: [{
                type: Input
            }] } });

const LABEL_COMPONENTS = [
    DoLabelTextComponent,
];
class DoLabelModule {
}
DoLabelModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoLabelModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoLabelModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoLabelModule, declarations: [DoLabelTextComponent], imports: [CommonModule,
        TranslateModule,
        DoBaseModule,
        NbButtonModule], exports: [DoLabelTextComponent] });
DoLabelModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoLabelModule, imports: [[
            CommonModule,
            TranslateModule,
            DoBaseModule,
            NbButtonModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoLabelModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        TranslateModule,
                        DoBaseModule,
                        NbButtonModule,
                    ],
                    declarations: [
                        ...LABEL_COMPONENTS,
                    ],
                    exports: [
                        ...LABEL_COMPONENTS,
                    ],
                }]
        }] });

class ContentSelectDirective {
}
ContentSelectDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ContentSelectDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ContentSelectDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.16", type: ContentSelectDirective, selector: "[doContentSelect]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ContentSelectDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[doContentSelect]',
                }]
        }] });

class DoSelectComponent extends ValueAccessorDirective {
    constructor(ngControl, locale, injector) {
        super(ngControl, locale);
        this.locale = locale;
        this.injector = injector;
        this.colLabel = 3;
        this.colInput = 9;
        this.items = [];
        this.multiple = false;
        this.loading = false;
        this.addTag = false;
        this.closeOnSelect = true;
        this.clearable = true;
        this.searchable = true;
        this.hideSelected = true;
        this.minTermLength = 2;
        this.maxTermLength = 50;
        this.limit = 50;
        this.offsetNextLoad = this.limit - 35;
        this.onSelect = new EventEmitter();
        this.onClear = new EventEmitter();
        this.notFoundText = 'select.notfound';
        this.typeToSearchText = 'select.typesearch';
        this.virtualScroll = true;
        this.paramSearch = { value: this.minTermLength };
        this.typeahead$ = new Subject();
        this.destroy$ = new Subject();
        this.total = 0;
        this.totalRecord = 0;
        this.http = injector.get(HTTP_SERVICE);
        this.cdref = injector.get(ChangeDetectorRef);
    }
    get value() { return this._value; }
    set value(value) {
        if (this._value !== value) {
            this._value = value;
            this.onChange(value);
            this.onSelect.emit(value);
            const control = this.ngControl.control;
            if (control) {
                control.updateValueAndValidity();
                control.markAsTouched();
                control.markAsDirty();
            }
        }
    }
    onInit() {
        this.paramSearch = { value: this.minTermLength };
        if (this.api) {
            this.fetchSearch().subscribe((items) => {
                this.fetchMore(items);
            });
        }
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
        this.typeahead$.next(null);
        this.typeahead$.complete();
        this.typeahead$.unsubscribe();
    }
    onOpen() {
        if (this.api) {
            if (this.loading) {
                return;
            }
            this.total = 0;
            this.items = [];
            if (!this.searchable) {
                this.fetchNone().subscribe((items) => {
                    this.fetchMore(items);
                });
            }
        }
    }
    onClose() {
        if (this.api) {
            this.reset();
        }
    }
    onScroll({ end }, search) {
        if (!this.loading) {
            if ((Number(end) + this.offsetNextLoad) >= this.total && this.total > 0 && this.total < this.totalRecord) {
                if (this.searchable && search) {
                    this.typeahead$.next(search);
                }
                else {
                    this.fetchNone().subscribe((items) => {
                        this.fetchMore(items);
                    });
                }
            }
        }
    }
    onScrollToEnd(search) {
        if (!this.loading) {
            if (this.total < this.totalRecord) {
                if (this.searchable && search) {
                    this.typeahead$.next(search);
                }
                else {
                    this.fetchNone().subscribe((items) => {
                        this.fetchMore(items);
                    });
                }
            }
        }
    }
    doClear() {
        this.onClear.emit(true);
    }
    reset() {
        this.loading = false;
        this.total = 0;
        if (this.api) {
            this.items = [];
        }
    }
    fetchMore(items) {
        this.items = [...this.items, ...items];
        this.cdref.detectChanges();
        this.loading = false;
    }
    fetchSearch() {
        return this.typeahead$.pipe(switchMap((term) => {
            if (term) {
                if (term.length > this.maxTermLength) {
                    return of([]);
                }
                return this.getRequest(this.total, term);
            }
            else {
                return of([]);
            }
        })).pipe(takeUntil(this.destroy$));
    }
    fetchNone() {
        return this.getRequest(this.total).pipe(takeUntil(this.destroy$));
    }
    getRequest(offset, search) {
        let body;
        if (this.api.method === HttpMethod.POST) {
            body = {
                offset: offset ? offset : 0,
                limit: this.limit,
                keyword: {
                    _label: search,
                },
            };
            if (this.queryParam) {
                this.queryParam.forEach((result) => {
                    body['keyword'][result.key] = result.value;
                });
            }
        }
        this.loading = true;
        return this.http.HTTP_AUTH(this.api, body)
            .pipe(map((response) => {
            this.totalRecord = Number(response.totalRecord);
            this.total = this.total + Number(response.totalFiltered);
            return response['data'];
        }), catchError(() => of([])));
    }
    onKeyDown(event, term) {
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
    }
}
DoSelectComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoSelectComponent, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: LOCALE_ID }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
DoSelectComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoSelectComponent, selector: "do-select", inputs: { placeholder: "placeholder", colLabel: "colLabel", colInput: "colInput", items: "items", multiple: "multiple", loading: "loading", addTag: "addTag", closeOnSelect: "closeOnSelect", clearable: "clearable", searchable: "searchable", hideSelected: "hideSelected", minTermLength: "minTermLength", maxTermLength: "maxTermLength", api: "api", limit: "limit", offsetNextLoad: "offsetNextLoad", queryParam: "queryParam" }, outputs: { onSelect: "onSelect", onClear: "onClear" }, queries: [{ propertyName: "contentTemplate", first: true, predicate: ContentSelectDirective, descendants: true, read: TemplateRef }], usesInheritance: true, ngImport: i0, template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [warnMessage]=\"warnMessage\"\n  [skeleton]=\"skeleton\" [show]=\"show\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <ng-select\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [items]=\"items\"\n      [typeahead]=\"typeahead$\"\n      [multiple]=\"multiple\"\n      [loading]=\"loading\"\n      [notFoundText]=\"notFoundText | translate\"\n      [addTag]=\"addTag\"\n      [closeOnSelect]=\"closeOnSelect\"\n      [clearable]=\"required? false: clearable\"\n      [searchable]=\"searchable\"\n      [hideSelected]=\"hideSelected\"\n      [minTermLength]=\"minTermLength\"\n      [virtualScroll]=\"virtualScroll\"\n      [required]=\"required\"\n      [disabled]=\"disabled\"\n      (keydown)=\"onKeyDown($event, select.searchTerm)\"\n      (scroll)=\"onScroll($event, select.searchTerm)\"\n      (scrollToEnd)=\"onScrollToEnd(select.searchTerm)\"\n      (open)=\"onOpen()\"\n      (close)=\"onClose()\"\n      (clear)=\"doClear()\"\n      (change)=\"onChange($event)\"\n      (focus)=\"onTouched($event)\"\n      (blur)=\"onTouched($event)\"\n      [(ngModel)]=\"value\"\n      [ngClass]=\"{'required': required}\"\n      appendTo=\"body\"\n      typeToSearchText=\"{{typeToSearchText | translate:paramSearch}}\"\n      #select>\n        <ng-template *ngIf=\"contentTemplate\" ng-label-tmp let-item=\"item\">\n          <ng-container *ngTemplateOutlet=\"contentTemplate; context: {$implicit: item}\"></ng-container>\n        </ng-template>\n        <ng-template *ngIf=\"contentTemplate\" ng-option-tmp let-item=\"item\">\n          <ng-container *ngTemplateOutlet=\"contentTemplate; context: {$implicit: item}\"></ng-container>\n        </ng-template>\n    </ng-select>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>", styles: [".nb-theme-default .ng-select.ng-select-opened>.ng-select-container{background:#edf1f7;border-color:#c2cde1 #e4e9f2 #f5f7fa}.nb-theme-default .ng-select.ng-select-opened>.ng-select-container:hover{box-shadow:none}.nb-theme-default .ng-select.ng-select-opened>.ng-select-container .ng-arrow{top:-2px;border-color:transparent transparent #9fb1d1;border-width:0 5px 5px}.nb-theme-default .ng-select.ng-select-opened>.ng-select-container .ng-arrow:hover{border-color:transparent transparent #354a6f}.nb-theme-default .ng-select.ng-select-opened.ng-select-top>.ng-select-container{border-top-right-radius:0;border-top-left-radius:0}.nb-theme-default .ng-select.ng-select-opened.ng-select-right>.ng-select-container{border-top-right-radius:0;border-bottom-right-radius:0}.nb-theme-default .ng-select.ng-select-opened.ng-select-bottom>.ng-select-container{border-bottom-right-radius:0;border-bottom-left-radius:0}.nb-theme-default .ng-select.ng-select-opened.ng-select-left>.ng-select-container{border-top-left-radius:0;border-bottom-left-radius:0}.nb-theme-default .ng-select.ng-select-focused:not(.ng-select-opened)>.ng-select-container{border-color:#edf1f7;box-shadow:inset 0 1px 1px #00000013,0 0 0 3px #007eff1a}.nb-theme-default .ng-select.ng-select-disabled>.ng-select-container{background-color:#8f9bb37a}.nb-theme-default .ng-select .ng-has-value .ng-placeholder{display:none}.nb-theme-default .ng-select .ng-select-container{color:#222b45;background-color:#edf1f7;border-radius:.25rem;border:1px solid #e4e9f2;min-height:40px;align-items:center;font-weight:600;line-height:1.5rem;font-family:Open Sans,sans-serif}.nb-theme-default .ng-select .ng-select-container:hover{box-shadow:0 1px #0000000f}.nb-theme-default .ng-select .ng-select-container .ng-value-container{align-items:center;padding-left:10px}[dir=rtl] .nb-theme-default .ng-select .ng-select-container .ng-value-container{padding-right:10px;padding-left:0}.nb-theme-default .ng-select .ng-select-container .ng-value-container .ng-placeholder{font-size:.9375rem;font-weight:400;color:#8f9bb3;padding-left:.3rem}.nb-theme-default .ng-select.ng-select-single .ng-select-container{height:40px}.nb-theme-default .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{top:5px;left:0;padding-left:10px;padding-right:50px}.nb-theme-default .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input>input{color:#222b45}[dir=rtl] .nb-theme-default .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{padding-right:10px;padding-left:50px}.nb-theme-default .ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value{background-color:#8f9bb37a;border:1px solid white}.nb-theme-default .ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-label{padding:0 5px}.nb-theme-default .ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-top:5px;padding-left:7px}[dir=rtl] .nb-theme-default .ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-right:7px;padding-left:0}.nb-theme-default .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{font-size:.9em;margin-bottom:5px;color:#222b45;background-color:#edf1f7;border-radius:2px;margin-right:5px}[dir=rtl] .nb-theme-default .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{margin-right:0;margin-left:5px}.nb-theme-default .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled{background-color:#8f9bb37a}.nb-theme-default .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:5px}[dir=rtl] .nb-theme-default .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:0;padding-right:5px}.nb-theme-default .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-label{display:inline-block;padding:1px 5px}.nb-theme-default .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:inline-block;padding:1px 5px}.nb-theme-default .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon:hover{background-color:#dbe3ef}.nb-theme-default .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-right:1px solid #cad6e7}[dir=rtl] .nb-theme-default .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-left:1px solid #cad6e7;border-right:none}.nb-theme-default .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:1px solid #cad6e7}[dir=rtl] .nb-theme-default .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:0;border-right:1px solid #cad6e7}.nb-theme-default .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding:0 0 3px 3px}[dir=rtl] .nb-theme-default .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding:0 3px 3px 0}.nb-theme-default .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input>input{color:#222b45}.nb-theme-default .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{top:5px;padding-bottom:5px;padding-left:3px}[dir=rtl] .nb-theme-default .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{padding-right:3px;padding-left:0}.nb-theme-default .ng-select .ng-clear-wrapper{color:#9fb1d1}.nb-theme-default .ng-select .ng-clear-wrapper:hover .ng-clear{color:#d0021b}.nb-theme-default .ng-select .ng-spinner-zone{padding:5px 5px 0 0}[dir=rtl] .nb-theme-default .ng-select .ng-spinner-zone{padding:5px 0 0 5px}.nb-theme-default .ng-select .ng-arrow-wrapper{width:25px;padding-right:5px}[dir=rtl] .nb-theme-default .ng-select .ng-arrow-wrapper{padding-left:5px;padding-right:0}.nb-theme-default .ng-select .ng-arrow-wrapper:hover .ng-arrow{border-top-color:#5a79b0}.nb-theme-default .ng-select .ng-arrow-wrapper .ng-arrow{border-color:#9fb1d1 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}.nb-theme-default .ng-dropdown-panel{background-color:#fff;border:1px solid #e4e9f2;box-shadow:0 1px #0000000f;left:0}.nb-theme-default .ng-dropdown-panel.ng-select-top{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#fff;margin-bottom:-1px}.nb-theme-default .ng-dropdown-panel.ng-select-top .ng-dropdown-panel-items .ng-option:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.nb-theme-default .ng-dropdown-panel.ng-select-right{left:100%;top:0;border-top-right-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-bottom-color:#fff;margin-bottom:-1px}.nb-theme-default .ng-dropdown-panel.ng-select-right .ng-dropdown-panel-items .ng-option:first-child{border-top-right-radius:4px}.nb-theme-default .ng-dropdown-panel.ng-select-bottom{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#fff;margin-top:-1px}.nb-theme-default .ng-dropdown-panel.ng-select-bottom .ng-dropdown-panel-items .ng-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.nb-theme-default .ng-dropdown-panel.ng-select-left{left:-100%;top:0;border-top-left-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-bottom-color:#fff;margin-bottom:-1px}.nb-theme-default .ng-dropdown-panel.ng-select-left .ng-dropdown-panel-items .ng-option:first-child{border-top-left-radius:4px}.nb-theme-default .ng-dropdown-panel .ng-dropdown-header{border-bottom:1px solid #e4e9f2;padding:5px 7px}.nb-theme-default .ng-dropdown-panel .ng-dropdown-footer{border-top:1px solid #e4e9f2;padding:5px 7px}.nb-theme-default .ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{-webkit-user-select:none;user-select:none;padding:8px 10px;font-weight:500;color:#0000008a;cursor:pointer}.nb-theme-default .ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-disabled{cursor:default}.nb-theme-default .ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-marked{background-color:#edf1f7}.nb-theme-default .ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected,.nb-theme-default .ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected.ng-option-marked{background-color:#edf1f7;font-weight:600}.nb-theme-default .ng-dropdown-panel .ng-dropdown-panel-items .ng-option{background-color:#fff;color:#222b45;padding:8px 10px}.nb-theme-default .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected,.nb-theme-default .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked{color:#222b45;background-color:#edf1f7}.nb-theme-default .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected .ng-option-label,.nb-theme-default .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked .ng-option-label{font-weight:600}.nb-theme-default .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked{background-color:#edf1f7;color:#222b45}.nb-theme-default .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled{color:#222b45}.nb-theme-default .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-left:22px}[dir=rtl] .nb-theme-default .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-right:22px;padding-left:0}.nb-theme-default .ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{font-size:80%;font-weight:400;padding-right:5px}[dir=rtl] .nb-theme-default .ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{padding-left:5px;padding-right:0}[dir=rtl] .nb-theme-default .ng-dropdown-panel{direction:rtl;text-align:right}.nb-theme-dark .ng-select.ng-select-opened>.ng-select-container{background:#151a30;border-color:#010102 #101426 #181d38}.nb-theme-dark .ng-select.ng-select-opened>.ng-select-container:hover{box-shadow:none}.nb-theme-dark .ng-select.ng-select-opened>.ng-select-container .ng-arrow{top:-2px;border-color:transparent transparent black;border-width:0 5px 5px}.nb-theme-dark .ng-select.ng-select-opened>.ng-select-container .ng-arrow:hover{border-color:transparent transparent black}.nb-theme-dark .ng-select.ng-select-opened.ng-select-top>.ng-select-container{border-top-right-radius:0;border-top-left-radius:0}.nb-theme-dark .ng-select.ng-select-opened.ng-select-right>.ng-select-container{border-top-right-radius:0;border-bottom-right-radius:0}.nb-theme-dark .ng-select.ng-select-opened.ng-select-bottom>.ng-select-container{border-bottom-right-radius:0;border-bottom-left-radius:0}.nb-theme-dark .ng-select.ng-select-opened.ng-select-left>.ng-select-container{border-top-left-radius:0;border-bottom-left-radius:0}.nb-theme-dark .ng-select.ng-select-focused:not(.ng-select-opened)>.ng-select-container{border-color:#151a30;box-shadow:inset 0 1px 1px #00000013,0 0 0 3px #007eff1a}.nb-theme-dark .ng-select.ng-select-disabled>.ng-select-container{background-color:#8f9bb37a}.nb-theme-dark .ng-select .ng-has-value .ng-placeholder{display:none}.nb-theme-dark .ng-select .ng-select-container{color:#fff;background-color:#151a30;border-radius:.25rem;border:1px solid #101426;min-height:40px;align-items:center;font-weight:600;line-height:1.5rem;font-family:Open Sans,sans-serif}.nb-theme-dark .ng-select .ng-select-container:hover{box-shadow:0 1px #0000000f}.nb-theme-dark .ng-select .ng-select-container .ng-value-container{align-items:center;padding-left:10px}[dir=rtl] .nb-theme-dark .ng-select .ng-select-container .ng-value-container{padding-right:10px;padding-left:0}.nb-theme-dark .ng-select .ng-select-container .ng-value-container .ng-placeholder{font-size:.9375rem;font-weight:400;color:#8f9bb3;padding-left:.3rem}.nb-theme-dark .ng-select.ng-select-single .ng-select-container{height:40px}.nb-theme-dark .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{top:5px;left:0;padding-left:10px;padding-right:50px}.nb-theme-dark .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input>input{color:#fff}[dir=rtl] .nb-theme-dark .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{padding-right:10px;padding-left:50px}.nb-theme-dark .ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value{background-color:#8f9bb37a;border:1px solid #1f274a}.nb-theme-dark .ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-label{padding:0 5px}.nb-theme-dark .ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-top:5px;padding-left:7px}[dir=rtl] .nb-theme-dark .ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-right:7px;padding-left:0}.nb-theme-dark .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{font-size:.9em;margin-bottom:5px;color:#fff;background-color:#151a30;border-radius:2px;margin-right:5px}[dir=rtl] .nb-theme-dark .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{margin-right:0;margin-left:5px}.nb-theme-dark .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled{background-color:#8f9bb37a}.nb-theme-dark .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:5px}[dir=rtl] .nb-theme-dark .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:0;padding-right:5px}.nb-theme-dark .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-label{display:inline-block;padding:1px 5px}.nb-theme-dark .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:inline-block;padding:1px 5px}.nb-theme-dark .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon:hover{background-color:#0d101e}.nb-theme-dark .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-right:1px solid #05070d}[dir=rtl] .nb-theme-dark .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-left:1px solid #05070d;border-right:none}.nb-theme-dark .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:1px solid #05070d}[dir=rtl] .nb-theme-dark .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:0;border-right:1px solid #05070d}.nb-theme-dark .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding:0 0 3px 3px}[dir=rtl] .nb-theme-dark .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding:0 3px 3px 0}.nb-theme-dark .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input>input{color:#fff}.nb-theme-dark .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{top:5px;padding-bottom:5px;padding-left:3px}[dir=rtl] .nb-theme-dark .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{padding-right:3px;padding-left:0}.nb-theme-dark .ng-select .ng-clear-wrapper{color:#000}.nb-theme-dark .ng-select .ng-clear-wrapper:hover .ng-clear{color:#d0021b}.nb-theme-dark .ng-select .ng-spinner-zone{padding:5px 5px 0 0}[dir=rtl] .nb-theme-dark .ng-select .ng-spinner-zone{padding:5px 0 0 5px}.nb-theme-dark .ng-select .ng-arrow-wrapper{width:25px;padding-right:5px}[dir=rtl] .nb-theme-dark .ng-select .ng-arrow-wrapper{padding-left:5px;padding-right:0}.nb-theme-dark .ng-select .ng-arrow-wrapper:hover .ng-arrow{border-top-color:#000}.nb-theme-dark .ng-select .ng-arrow-wrapper .ng-arrow{border-color:black transparent transparent;border-style:solid;border-width:5px 5px 2.5px}.nb-theme-dark .ng-dropdown-panel{background-color:#222b45;border:1px solid #101426;box-shadow:0 1px #0000000f;left:0}.nb-theme-dark .ng-dropdown-panel.ng-select-top{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#1f274a;margin-bottom:-1px}.nb-theme-dark .ng-dropdown-panel.ng-select-top .ng-dropdown-panel-items .ng-option:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.nb-theme-dark .ng-dropdown-panel.ng-select-right{left:100%;top:0;border-top-right-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-bottom-color:#1f274a;margin-bottom:-1px}.nb-theme-dark .ng-dropdown-panel.ng-select-right .ng-dropdown-panel-items .ng-option:first-child{border-top-right-radius:4px}.nb-theme-dark .ng-dropdown-panel.ng-select-bottom{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#1f274a;margin-top:-1px}.nb-theme-dark .ng-dropdown-panel.ng-select-bottom .ng-dropdown-panel-items .ng-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.nb-theme-dark .ng-dropdown-panel.ng-select-left{left:-100%;top:0;border-top-left-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-bottom-color:#1f274a;margin-bottom:-1px}.nb-theme-dark .ng-dropdown-panel.ng-select-left .ng-dropdown-panel-items .ng-option:first-child{border-top-left-radius:4px}.nb-theme-dark .ng-dropdown-panel .ng-dropdown-header{border-bottom:1px solid #101426;padding:5px 7px}.nb-theme-dark .ng-dropdown-panel .ng-dropdown-footer{border-top:1px solid #101426;padding:5px 7px}.nb-theme-dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{-webkit-user-select:none;user-select:none;padding:8px 10px;font-weight:500;color:#0000008a;cursor:pointer}.nb-theme-dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-disabled{cursor:default}.nb-theme-dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-marked{background-color:#151a30}.nb-theme-dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected,.nb-theme-dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected.ng-option-marked{background-color:#151a30;font-weight:600}.nb-theme-dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-option{background-color:#222b45;color:#fff;padding:8px 10px}.nb-theme-dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected,.nb-theme-dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked{color:#fff;background-color:#151a30}.nb-theme-dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected .ng-option-label,.nb-theme-dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked .ng-option-label{font-weight:600}.nb-theme-dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked{background-color:#151a30;color:#fff}.nb-theme-dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled{color:#fff}.nb-theme-dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-left:22px}[dir=rtl] .nb-theme-dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-right:22px;padding-left:0}.nb-theme-dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{font-size:80%;font-weight:400;padding-right:5px}[dir=rtl] .nb-theme-dark .ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{padding-left:5px;padding-right:0}[dir=rtl] .nb-theme-dark .ng-dropdown-panel{direction:rtl;text-align:right}.nb-theme-cosmic .ng-select.ng-select-opened>.ng-select-container{background:#1b1b38;border-color:#030308 #13132b #1b1b3d}.nb-theme-cosmic .ng-select.ng-select-opened>.ng-select-container:hover{box-shadow:none}.nb-theme-cosmic .ng-select.ng-select-opened>.ng-select-container .ng-arrow{top:-2px;border-color:transparent transparent black;border-width:0 5px 5px}.nb-theme-cosmic .ng-select.ng-select-opened>.ng-select-container .ng-arrow:hover{border-color:transparent transparent black}.nb-theme-cosmic .ng-select.ng-select-opened.ng-select-top>.ng-select-container{border-top-right-radius:0;border-top-left-radius:0}.nb-theme-cosmic .ng-select.ng-select-opened.ng-select-right>.ng-select-container{border-top-right-radius:0;border-bottom-right-radius:0}.nb-theme-cosmic .ng-select.ng-select-opened.ng-select-bottom>.ng-select-container{border-bottom-right-radius:0;border-bottom-left-radius:0}.nb-theme-cosmic .ng-select.ng-select-opened.ng-select-left>.ng-select-container{border-top-left-radius:0;border-bottom-left-radius:0}.nb-theme-cosmic .ng-select.ng-select-focused:not(.ng-select-opened)>.ng-select-container{border-color:#1b1b38;box-shadow:inset 0 1px 1px #00000013,0 0 0 3px #007eff1a}.nb-theme-cosmic .ng-select.ng-select-disabled>.ng-select-container{background-color:#b4b4db7a}.nb-theme-cosmic .ng-select .ng-has-value .ng-placeholder{display:none}.nb-theme-cosmic .ng-select .ng-select-container{color:#fff;background-color:#1b1b38;border-radius:.25rem;border:1px solid #13132b;min-height:40px;align-items:center;font-weight:600;line-height:1.5rem;font-family:Open Sans,sans-serif}.nb-theme-cosmic .ng-select .ng-select-container:hover{box-shadow:0 1px #0000000f}.nb-theme-cosmic .ng-select .ng-select-container .ng-value-container{align-items:center;padding-left:10px}[dir=rtl] .nb-theme-cosmic .ng-select .ng-select-container .ng-value-container{padding-right:10px;padding-left:0}.nb-theme-cosmic .ng-select .ng-select-container .ng-value-container .ng-placeholder{font-size:.9375rem;font-weight:400;color:#b4b4db;padding-left:.3rem}.nb-theme-cosmic .ng-select.ng-select-single .ng-select-container{height:40px}.nb-theme-cosmic .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{top:5px;left:0;padding-left:10px;padding-right:50px}.nb-theme-cosmic .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input>input{color:#fff}[dir=rtl] .nb-theme-cosmic .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{padding-right:10px;padding-left:50px}.nb-theme-cosmic .ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value{background-color:#b4b4db7a;border:1px solid #23234e}.nb-theme-cosmic .ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-label{padding:0 5px}.nb-theme-cosmic .ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-top:5px;padding-left:7px}[dir=rtl] .nb-theme-cosmic .ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-right:7px;padding-left:0}.nb-theme-cosmic .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{font-size:.9em;margin-bottom:5px;color:#fff;background-color:#1b1b38;border-radius:2px;margin-right:5px}[dir=rtl] .nb-theme-cosmic .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{margin-right:0;margin-left:5px}.nb-theme-cosmic .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled{background-color:#b4b4db7a}.nb-theme-cosmic .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:5px}[dir=rtl] .nb-theme-cosmic .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:0;padding-right:5px}.nb-theme-cosmic .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-label{display:inline-block;padding:1px 5px}.nb-theme-cosmic .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:inline-block;padding:1px 5px}.nb-theme-cosmic .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon:hover{background-color:#131327}.nb-theme-cosmic .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-right:1px solid #0a0a16}[dir=rtl] .nb-theme-cosmic .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-left:1px solid #0a0a16;border-right:none}.nb-theme-cosmic .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:1px solid #0a0a16}[dir=rtl] .nb-theme-cosmic .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:0;border-right:1px solid #0a0a16}.nb-theme-cosmic .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding:0 0 3px 3px}[dir=rtl] .nb-theme-cosmic .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding:0 3px 3px 0}.nb-theme-cosmic .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input>input{color:#fff}.nb-theme-cosmic .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{top:5px;padding-bottom:5px;padding-left:3px}[dir=rtl] .nb-theme-cosmic .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{padding-right:3px;padding-left:0}.nb-theme-cosmic .ng-select .ng-clear-wrapper{color:#000}.nb-theme-cosmic .ng-select .ng-clear-wrapper:hover .ng-clear{color:#d0021b}.nb-theme-cosmic .ng-select .ng-spinner-zone{padding:5px 5px 0 0}[dir=rtl] .nb-theme-cosmic .ng-select .ng-spinner-zone{padding:5px 0 0 5px}.nb-theme-cosmic .ng-select .ng-arrow-wrapper{width:25px;padding-right:5px}[dir=rtl] .nb-theme-cosmic .ng-select .ng-arrow-wrapper{padding-left:5px;padding-right:0}.nb-theme-cosmic .ng-select .ng-arrow-wrapper:hover .ng-arrow{border-top-color:#000}.nb-theme-cosmic .ng-select .ng-arrow-wrapper .ng-arrow{border-color:black transparent transparent;border-style:solid;border-width:5px 5px 2.5px}.nb-theme-cosmic .ng-dropdown-panel{background-color:#323259;border:1px solid #13132b;box-shadow:0 1px #0000000f;left:0}.nb-theme-cosmic .ng-dropdown-panel.ng-select-top{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#23234e;margin-bottom:-1px}.nb-theme-cosmic .ng-dropdown-panel.ng-select-top .ng-dropdown-panel-items .ng-option:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.nb-theme-cosmic .ng-dropdown-panel.ng-select-right{left:100%;top:0;border-top-right-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-bottom-color:#23234e;margin-bottom:-1px}.nb-theme-cosmic .ng-dropdown-panel.ng-select-right .ng-dropdown-panel-items .ng-option:first-child{border-top-right-radius:4px}.nb-theme-cosmic .ng-dropdown-panel.ng-select-bottom{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#23234e;margin-top:-1px}.nb-theme-cosmic .ng-dropdown-panel.ng-select-bottom .ng-dropdown-panel-items .ng-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.nb-theme-cosmic .ng-dropdown-panel.ng-select-left{left:-100%;top:0;border-top-left-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-bottom-color:#23234e;margin-bottom:-1px}.nb-theme-cosmic .ng-dropdown-panel.ng-select-left .ng-dropdown-panel-items .ng-option:first-child{border-top-left-radius:4px}.nb-theme-cosmic .ng-dropdown-panel .ng-dropdown-header{border-bottom:1px solid #13132b;padding:5px 7px}.nb-theme-cosmic .ng-dropdown-panel .ng-dropdown-footer{border-top:1px solid #13132b;padding:5px 7px}.nb-theme-cosmic .ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{-webkit-user-select:none;user-select:none;padding:8px 10px;font-weight:500;color:#0000008a;cursor:pointer}.nb-theme-cosmic .ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-disabled{cursor:default}.nb-theme-cosmic .ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-marked{background-color:#1b1b38}.nb-theme-cosmic .ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected,.nb-theme-cosmic .ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected.ng-option-marked{background-color:#1b1b38;font-weight:600}.nb-theme-cosmic .ng-dropdown-panel .ng-dropdown-panel-items .ng-option{background-color:#323259;color:#fff;padding:8px 10px}.nb-theme-cosmic .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected,.nb-theme-cosmic .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked{color:#fff;background-color:#1b1b38}.nb-theme-cosmic .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected .ng-option-label,.nb-theme-cosmic .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked .ng-option-label{font-weight:600}.nb-theme-cosmic .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked{background-color:#1b1b38;color:#fff}.nb-theme-cosmic .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled{color:#fff}.nb-theme-cosmic .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-left:22px}[dir=rtl] .nb-theme-cosmic .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-right:22px;padding-left:0}.nb-theme-cosmic .ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{font-size:80%;font-weight:400;padding-right:5px}[dir=rtl] .nb-theme-cosmic .ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{padding-left:5px;padding-right:0}[dir=rtl] .nb-theme-cosmic .ng-dropdown-panel{direction:rtl;text-align:right}.nb-theme-corporate .ng-select.ng-select-opened>.ng-select-container{background:#edf1f7;border-color:#c2cde1 #e4e9f2 #f5f7fa}.nb-theme-corporate .ng-select.ng-select-opened>.ng-select-container:hover{box-shadow:none}.nb-theme-corporate .ng-select.ng-select-opened>.ng-select-container .ng-arrow{top:-2px;border-color:transparent transparent #9fb1d1;border-width:0 5px 5px}.nb-theme-corporate .ng-select.ng-select-opened>.ng-select-container .ng-arrow:hover{border-color:transparent transparent #354a6f}.nb-theme-corporate .ng-select.ng-select-opened.ng-select-top>.ng-select-container{border-top-right-radius:0;border-top-left-radius:0}.nb-theme-corporate .ng-select.ng-select-opened.ng-select-right>.ng-select-container{border-top-right-radius:0;border-bottom-right-radius:0}.nb-theme-corporate .ng-select.ng-select-opened.ng-select-bottom>.ng-select-container{border-bottom-right-radius:0;border-bottom-left-radius:0}.nb-theme-corporate .ng-select.ng-select-opened.ng-select-left>.ng-select-container{border-top-left-radius:0;border-bottom-left-radius:0}.nb-theme-corporate .ng-select.ng-select-focused:not(.ng-select-opened)>.ng-select-container{border-color:#edf1f7;box-shadow:inset 0 1px 1px #00000013,0 0 0 3px #007eff1a}.nb-theme-corporate .ng-select.ng-select-disabled>.ng-select-container{background-color:#8f9bb37a}.nb-theme-corporate .ng-select .ng-has-value .ng-placeholder{display:none}.nb-theme-corporate .ng-select .ng-select-container{color:#222b45;background-color:#edf1f7;border-radius:.25rem;border:1px solid #e4e9f2;min-height:40px;align-items:center;font-weight:600;line-height:1.5rem;font-family:Open Sans,sans-serif}.nb-theme-corporate .ng-select .ng-select-container:hover{box-shadow:0 1px #0000000f}.nb-theme-corporate .ng-select .ng-select-container .ng-value-container{align-items:center;padding-left:10px}[dir=rtl] .nb-theme-corporate .ng-select .ng-select-container .ng-value-container{padding-right:10px;padding-left:0}.nb-theme-corporate .ng-select .ng-select-container .ng-value-container .ng-placeholder{font-size:.9375rem;font-weight:400;color:#8f9bb3;padding-left:.3rem}.nb-theme-corporate .ng-select.ng-select-single .ng-select-container{height:40px}.nb-theme-corporate .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{top:5px;left:0;padding-left:10px;padding-right:50px}.nb-theme-corporate .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input>input{color:#222b45}[dir=rtl] .nb-theme-corporate .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{padding-right:10px;padding-left:50px}.nb-theme-corporate .ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value{background-color:#8f9bb37a;border:1px solid white}.nb-theme-corporate .ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-label{padding:0 5px}.nb-theme-corporate .ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-top:5px;padding-left:7px}[dir=rtl] .nb-theme-corporate .ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-right:7px;padding-left:0}.nb-theme-corporate .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{font-size:.9em;margin-bottom:5px;color:#222b45;background-color:#edf1f7;border-radius:2px;margin-right:5px}[dir=rtl] .nb-theme-corporate .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{margin-right:0;margin-left:5px}.nb-theme-corporate .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled{background-color:#8f9bb37a}.nb-theme-corporate .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:5px}[dir=rtl] .nb-theme-corporate .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:0;padding-right:5px}.nb-theme-corporate .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-label{display:inline-block;padding:1px 5px}.nb-theme-corporate .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:inline-block;padding:1px 5px}.nb-theme-corporate .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon:hover{background-color:#dbe3ef}.nb-theme-corporate .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-right:1px solid #cad6e7}[dir=rtl] .nb-theme-corporate .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-left:1px solid #cad6e7;border-right:none}.nb-theme-corporate .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:1px solid #cad6e7}[dir=rtl] .nb-theme-corporate .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:0;border-right:1px solid #cad6e7}.nb-theme-corporate .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding:0 0 3px 3px}[dir=rtl] .nb-theme-corporate .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding:0 3px 3px 0}.nb-theme-corporate .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input>input{color:#222b45}.nb-theme-corporate .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{top:5px;padding-bottom:5px;padding-left:3px}[dir=rtl] .nb-theme-corporate .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{padding-right:3px;padding-left:0}.nb-theme-corporate .ng-select .ng-clear-wrapper{color:#9fb1d1}.nb-theme-corporate .ng-select .ng-clear-wrapper:hover .ng-clear{color:#d0021b}.nb-theme-corporate .ng-select .ng-spinner-zone{padding:5px 5px 0 0}[dir=rtl] .nb-theme-corporate .ng-select .ng-spinner-zone{padding:5px 0 0 5px}.nb-theme-corporate .ng-select .ng-arrow-wrapper{width:25px;padding-right:5px}[dir=rtl] .nb-theme-corporate .ng-select .ng-arrow-wrapper{padding-left:5px;padding-right:0}.nb-theme-corporate .ng-select .ng-arrow-wrapper:hover .ng-arrow{border-top-color:#5a79b0}.nb-theme-corporate .ng-select .ng-arrow-wrapper .ng-arrow{border-color:#9fb1d1 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}.nb-theme-corporate .ng-dropdown-panel{background-color:#fff;border:1px solid #e4e9f2;box-shadow:0 1px #0000000f;left:0}.nb-theme-corporate .ng-dropdown-panel.ng-select-top{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#fff;margin-bottom:-1px}.nb-theme-corporate .ng-dropdown-panel.ng-select-top .ng-dropdown-panel-items .ng-option:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.nb-theme-corporate .ng-dropdown-panel.ng-select-right{left:100%;top:0;border-top-right-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-bottom-color:#fff;margin-bottom:-1px}.nb-theme-corporate .ng-dropdown-panel.ng-select-right .ng-dropdown-panel-items .ng-option:first-child{border-top-right-radius:4px}.nb-theme-corporate .ng-dropdown-panel.ng-select-bottom{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#fff;margin-top:-1px}.nb-theme-corporate .ng-dropdown-panel.ng-select-bottom .ng-dropdown-panel-items .ng-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.nb-theme-corporate .ng-dropdown-panel.ng-select-left{left:-100%;top:0;border-top-left-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-bottom-color:#fff;margin-bottom:-1px}.nb-theme-corporate .ng-dropdown-panel.ng-select-left .ng-dropdown-panel-items .ng-option:first-child{border-top-left-radius:4px}.nb-theme-corporate .ng-dropdown-panel .ng-dropdown-header{border-bottom:1px solid #e4e9f2;padding:5px 7px}.nb-theme-corporate .ng-dropdown-panel .ng-dropdown-footer{border-top:1px solid #e4e9f2;padding:5px 7px}.nb-theme-corporate .ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{-webkit-user-select:none;user-select:none;padding:8px 10px;font-weight:500;color:#0000008a;cursor:pointer}.nb-theme-corporate .ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-disabled{cursor:default}.nb-theme-corporate .ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-marked{background-color:#edf1f7}.nb-theme-corporate .ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected,.nb-theme-corporate .ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected.ng-option-marked{background-color:#edf1f7;font-weight:600}.nb-theme-corporate .ng-dropdown-panel .ng-dropdown-panel-items .ng-option{background-color:#fff;color:#222b45;padding:8px 10px}.nb-theme-corporate .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected,.nb-theme-corporate .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked{color:#222b45;background-color:#edf1f7}.nb-theme-corporate .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected .ng-option-label,.nb-theme-corporate .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked .ng-option-label{font-weight:600}.nb-theme-corporate .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked{background-color:#edf1f7;color:#222b45}.nb-theme-corporate .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled{color:#222b45}.nb-theme-corporate .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-left:22px}[dir=rtl] .nb-theme-corporate .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-right:22px;padding-left:0}.nb-theme-corporate .ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{font-size:80%;font-weight:400;padding-right:5px}[dir=rtl] .nb-theme-corporate .ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{padding-left:5px;padding-right:0}[dir=rtl] .nb-theme-corporate .ng-dropdown-panel{direction:rtl;text-align:right}ng-select.ng-invalid.ng-touched .ng-select-container{border-color:#f86c6b}ng-select.ng-invalid.ng-touched:focus{border-color:#f86c6b;box-shadow:inset 0 1px 1px #00000013,0 0 0 3px #fde6e8}ng-select.ng-valid.ng-touched.required .ng-select-container{border-color:#4dbd74}ng-select.ng-valid.ng-touched.required:focus{border-color:#4dbd74;box-shadow:inset 0 1px 1px #00000013,0 0 0 3px #e4e9f2}\n"], components: [{ type: DoContainerOutletComponent, selector: "do-container-outlet", inputs: ["name", "label", "colLabel", "colContent", "nolabel", "dividerlabel", "required", "hasErrors", "errorMessages", "warnMessage", "paramError", "skeleton", "show"] }, { type: i3.NgSelectComponent, selector: "ng-select", inputs: ["markFirst", "dropdownPosition", "loading", "closeOnSelect", "hideSelected", "selectOnTab", "bufferAmount", "selectableGroup", "selectableGroupAsModel", "searchFn", "trackByFn", "clearOnBackspace", "labelForId", "inputAttrs", "readonly", "searchWhileComposing", "minTermLength", "editableSearchTerm", "keyDownFn", "multiple", "addTag", "searchable", "clearable", "isOpen", "items", "compareWith", "clearSearchOnAdd", "bindLabel", "placeholder", "notFoundText", "typeToSearchText", "addTagText", "loadingText", "clearAllText", "virtualScroll", "openOnEnter", "appendTo", "bindValue", "appearance", "maxSelectedItems", "groupBy", "groupValue", "tabIndex", "typeahead"], outputs: ["blur", "focus", "change", "open", "close", "search", "clear", "add", "remove", "scroll", "scrollToEnd"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i3.ɵh, selector: "[ng-label-tmp]" }, { type: i4.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i3.ɵf, selector: "[ng-option-tmp]" }], pipes: { "translate": i5.TranslatePipe }, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoSelectComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-select',
                    styleUrls: ['./do-select.component.scss'],
                    templateUrl: './do-select.component.html',
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [LOCALE_ID]
                }] }, { type: i0.Injector }]; }, propDecorators: { placeholder: [{
                type: Input
            }], colLabel: [{
                type: Input
            }], colInput: [{
                type: Input
            }], items: [{
                type: Input
            }], multiple: [{
                type: Input
            }], loading: [{
                type: Input
            }], addTag: [{
                type: Input
            }], closeOnSelect: [{
                type: Input
            }], clearable: [{
                type: Input
            }], searchable: [{
                type: Input
            }], hideSelected: [{
                type: Input
            }], minTermLength: [{
                type: Input
            }], maxTermLength: [{
                type: Input
            }], api: [{
                type: Input
            }], limit: [{
                type: Input
            }], offsetNextLoad: [{
                type: Input
            }], queryParam: [{
                type: Input
            }], onSelect: [{
                type: Output
            }], onClear: [{
                type: Output
            }], contentTemplate: [{
                type: ContentChild,
                args: [ContentSelectDirective, { static: false, read: TemplateRef }]
            }] } });

const SELECT_COMPONENTS = [
    DoSelectComponent,
];
const SELECT_DIRECTIVES = [
    ContentSelectDirective,
];
class DoSelectModule {
}
DoSelectModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoSelectModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoSelectModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoSelectModule, declarations: [DoSelectComponent, ContentSelectDirective], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule,
        TranslateModule,
        DoBaseModule], exports: [DoSelectComponent, ContentSelectDirective] });
DoSelectModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoSelectModule, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            NgSelectModule,
            TranslateModule,
            DoBaseModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoSelectModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        NgSelectModule,
                        TranslateModule,
                        DoBaseModule,
                    ],
                    declarations: [
                        ...SELECT_COMPONENTS,
                        ...SELECT_DIRECTIVES,
                    ],
                    exports: [
                        ...SELECT_COMPONENTS,
                        ...SELECT_DIRECTIVES,
                    ],
                }]
        }] });

class DoTextEditorComponent extends ValueAccessorDirective {
    constructor(ngControl, locale) {
        super(ngControl, locale);
        this.locale = locale;
        this.colLabel = 3;
        this.colInput = 9;
        this.minLength = 1;
        this.maxLength = 250;
        this.height = 150;
    }
}
DoTextEditorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoTextEditorComponent, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: LOCALE_ID }], target: i0.ɵɵFactoryTarget.Component });
DoTextEditorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoTextEditorComponent, selector: "do-text-editor", inputs: { placeholder: "placeholder", colLabel: "colLabel", colInput: "colInput", minLength: "minLength", maxLength: "maxLength", height: "height" }, usesInheritance: true, ngImport: i0, template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\" \n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [warnMessage]=\"warnMessage\"\n  [skeleton]=\"skeleton\" [show]=\"show\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <quill-editor\n      [minLength]=\"minLength\"\n      [maxLength]=\"maxLength\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled\"\n      [readOnly]=\"disabled\"\n      [ngClass]=\"{\n        'hasErrors': hasErrors\n      }\"\n      [styles]=\"{height: height+'px'}\"\n      (onContentChanged)=\"onChange(value)\"\n      (onBlur)=\"onTouched(value)\"\n      (onFocus)=\"onTouched(value)\"\n      [(ngModel)]=\"value\">\n    </quill-editor>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'texteditor-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>\n", styles: [".nb-theme-default quill-editor[disabled=disabled] .ql-toolbar .ql-stroke{stroke:#e4e9f2;cursor:no-drop!important}.nb-theme-default quill-editor[disabled=disabled] .ql-toolbar .ql-stroke-miter{stroke:#e4e9f2;cursor:no-drop!important}.nb-theme-default quill-editor[disabled=disabled] .ql-toolbar .ql-fill,.nb-theme-default quill-editor[disabled=disabled] .ql-toolbar .ql-stroke.ql-fill{fill:#e4e9f2;cursor:no-drop!important}.nb-theme-default quill-editor[disabled=disabled] .ql-toolbar .ql-picker{color:#e4e9f2;cursor:no-drop!important}.nb-theme-default .ql-container{box-sizing:border-box;font-family:Helvetica,Arial,sans-serif;font-size:13px;height:100%;margin:0;position:relative;background-color:#edf1f7}.nb-theme-default .ql-container.ql-disabled .ql-tooltip{visibility:hidden}.nb-theme-default .ql-container.ql-disabled .ql-editor ul[data-checked]>li:before{pointer-events:none}.nb-theme-default .ql-clipboard{left:-100000px;height:1px;overflow-y:hidden;position:absolute;top:50%}.nb-theme-default .ql-clipboard p{margin:0;padding:0}.nb-theme-default .ql-editor{box-sizing:border-box;line-height:1.42;height:100%;outline:none;overflow-y:auto;padding:12px 15px;tab-size:4;-moz-tab-size:4;text-align:left;white-space:pre-wrap;word-wrap:break-word}.nb-theme-default .ql-editor>*{cursor:text}.nb-theme-default .ql-editor p,.nb-theme-default .ql-editor ol,.nb-theme-default .ql-editor ul,.nb-theme-default .ql-editor pre,.nb-theme-default .ql-editor blockquote,.nb-theme-default .ql-editor h1,.nb-theme-default .ql-editor h2,.nb-theme-default .ql-editor h3,.nb-theme-default .ql-editor h4,.nb-theme-default .ql-editor h5,.nb-theme-default .ql-editor h6{margin:0;padding:0;counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.nb-theme-default .ql-editor ol,.nb-theme-default .ql-editor ul{padding-left:1.5em}.nb-theme-default .ql-editor ol>li,.nb-theme-default .ql-editor ul>li{list-style-type:none}.nb-theme-default .ql-editor ul>li:before{content:\"\\2022\"}.nb-theme-default .ql-editor ul[data-checked=true],.nb-theme-default .ql-editor ul[data-checked=false]{pointer-events:none}.nb-theme-default .ql-editor ul[data-checked=true]>li *,.nb-theme-default .ql-editor ul[data-checked=false]>li *{pointer-events:all}.nb-theme-default .ql-editor ul[data-checked=true]>li:before,.nb-theme-default .ql-editor ul[data-checked=false]>li:before{color:#777;cursor:pointer;pointer-events:all}.nb-theme-default .ql-editor ul[data-checked=true]>li:before{content:\"\\2611\"}.nb-theme-default .ql-editor ul[data-checked=false]>li:before{content:\"\\2610\"}.nb-theme-default .ql-editor li:before{display:inline-block;white-space:nowrap;width:1.2em}.nb-theme-default .ql-editor li:not(.ql-direction-rtl):before{margin-left:-1.5em;margin-right:.3em;text-align:right}.nb-theme-default .ql-editor li.ql-direction-rtl:before{margin-left:.3em;margin-right:-1.5em}.nb-theme-default .ql-editor ol li:not(.ql-direction-rtl),.nb-theme-default .ql-editor ul li:not(.ql-direction-rtl){padding-left:1.5em}.nb-theme-default .ql-editor ol li.ql-direction-rtl,.nb-theme-default .ql-editor ul li.ql-direction-rtl{padding-right:1.5em}.nb-theme-default .ql-editor ol li{counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;counter-increment:list-0}.nb-theme-default .ql-editor ol li:before{content:counter(list-0,decimal) \". \"}.nb-theme-default .ql-editor ol li.ql-indent-1{counter-increment:list-1}.nb-theme-default .ql-editor ol li.ql-indent-1:before{content:counter(list-1,lower-alpha) \". \"}.nb-theme-default .ql-editor ol li.ql-indent-1{counter-reset:list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.nb-theme-default .ql-editor ol li.ql-indent-2{counter-increment:list-2}.nb-theme-default .ql-editor ol li.ql-indent-2:before{content:counter(list-2,lower-roman) \". \"}.nb-theme-default .ql-editor ol li.ql-indent-2{counter-reset:list-3 list-4 list-5 list-6 list-7 list-8 list-9}.nb-theme-default .ql-editor ol li.ql-indent-3{counter-increment:list-3}.nb-theme-default .ql-editor ol li.ql-indent-3:before{content:counter(list-3,decimal) \". \"}.nb-theme-default .ql-editor ol li.ql-indent-3{counter-reset:list-4 list-5 list-6 list-7 list-8 list-9}.nb-theme-default .ql-editor ol li.ql-indent-4{counter-increment:list-4}.nb-theme-default .ql-editor ol li.ql-indent-4:before{content:counter(list-4,lower-alpha) \". \"}.nb-theme-default .ql-editor ol li.ql-indent-4{counter-reset:list-5 list-6 list-7 list-8 list-9}.nb-theme-default .ql-editor ol li.ql-indent-5{counter-increment:list-5}.nb-theme-default .ql-editor ol li.ql-indent-5:before{content:counter(list-5,lower-roman) \". \"}.nb-theme-default .ql-editor ol li.ql-indent-5{counter-reset:list-6 list-7 list-8 list-9}.nb-theme-default .ql-editor ol li.ql-indent-6{counter-increment:list-6}.nb-theme-default .ql-editor ol li.ql-indent-6:before{content:counter(list-6,decimal) \". \"}.nb-theme-default .ql-editor ol li.ql-indent-6{counter-reset:list-7 list-8 list-9}.nb-theme-default .ql-editor ol li.ql-indent-7{counter-increment:list-7}.nb-theme-default .ql-editor ol li.ql-indent-7:before{content:counter(list-7,lower-alpha) \". \"}.nb-theme-default .ql-editor ol li.ql-indent-7{counter-reset:list-8 list-9}.nb-theme-default .ql-editor ol li.ql-indent-8{counter-increment:list-8}.nb-theme-default .ql-editor ol li.ql-indent-8:before{content:counter(list-8,lower-roman) \". \"}.nb-theme-default .ql-editor ol li.ql-indent-8{counter-reset:list-9}.nb-theme-default .ql-editor ol li.ql-indent-9{counter-increment:list-9}.nb-theme-default .ql-editor ol li.ql-indent-9:before{content:counter(list-9,decimal) \". \"}.nb-theme-default .ql-editor .ql-indent-1:not(.ql-direction-rtl){padding-left:3em}.nb-theme-default .ql-editor li.ql-indent-1:not(.ql-direction-rtl){padding-left:4.5em}.nb-theme-default .ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:3em}.nb-theme-default .ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:4.5em}.nb-theme-default .ql-editor .ql-indent-2:not(.ql-direction-rtl){padding-left:6em}.nb-theme-default .ql-editor li.ql-indent-2:not(.ql-direction-rtl){padding-left:7.5em}.nb-theme-default .ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:6em}.nb-theme-default .ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:7.5em}.nb-theme-default .ql-editor .ql-indent-3:not(.ql-direction-rtl){padding-left:9em}.nb-theme-default .ql-editor li.ql-indent-3:not(.ql-direction-rtl){padding-left:10.5em}.nb-theme-default .ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:9em}.nb-theme-default .ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:10.5em}.nb-theme-default .ql-editor .ql-indent-4:not(.ql-direction-rtl){padding-left:12em}.nb-theme-default .ql-editor li.ql-indent-4:not(.ql-direction-rtl){padding-left:13.5em}.nb-theme-default .ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:12em}.nb-theme-default .ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:13.5em}.nb-theme-default .ql-editor .ql-indent-5:not(.ql-direction-rtl){padding-left:15em}.nb-theme-default .ql-editor li.ql-indent-5:not(.ql-direction-rtl){padding-left:16.5em}.nb-theme-default .ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:15em}.nb-theme-default .ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:16.5em}.nb-theme-default .ql-editor .ql-indent-6:not(.ql-direction-rtl){padding-left:18em}.nb-theme-default .ql-editor li.ql-indent-6:not(.ql-direction-rtl){padding-left:19.5em}.nb-theme-default .ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:18em}.nb-theme-default .ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:19.5em}.nb-theme-default .ql-editor .ql-indent-7:not(.ql-direction-rtl){padding-left:21em}.nb-theme-default .ql-editor li.ql-indent-7:not(.ql-direction-rtl){padding-left:22.5em}.nb-theme-default .ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:21em}.nb-theme-default .ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:22.5em}.nb-theme-default .ql-editor .ql-indent-8:not(.ql-direction-rtl){padding-left:24em}.nb-theme-default .ql-editor li.ql-indent-8:not(.ql-direction-rtl){padding-left:25.5em}.nb-theme-default .ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:24em}.nb-theme-default .ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:25.5em}.nb-theme-default .ql-editor .ql-indent-9:not(.ql-direction-rtl){padding-left:27em}.nb-theme-default .ql-editor li.ql-indent-9:not(.ql-direction-rtl){padding-left:28.5em}.nb-theme-default .ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:27em}.nb-theme-default .ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:28.5em}.nb-theme-default .ql-editor .ql-video{display:block;max-width:100%}.nb-theme-default .ql-editor .ql-video.ql-align-center{margin:0 auto}.nb-theme-default .ql-editor .ql-video.ql-align-right{margin:0 0 0 auto}.nb-theme-default .ql-editor .ql-bg-black{background-color:#000}.nb-theme-default .ql-editor .ql-bg-red{background-color:#e60000}.nb-theme-default .ql-editor .ql-bg-orange{background-color:#f90}.nb-theme-default .ql-editor .ql-bg-yellow{background-color:#ff0}.nb-theme-default .ql-editor .ql-bg-green{background-color:#008a00}.nb-theme-default .ql-editor .ql-bg-blue{background-color:#06c}.nb-theme-default .ql-editor .ql-bg-purple{background-color:#93f}.nb-theme-default .ql-editor .ql-color-white{color:#fff}.nb-theme-default .ql-editor .ql-color-red{color:#e60000}.nb-theme-default .ql-editor .ql-color-orange{color:#f90}.nb-theme-default .ql-editor .ql-color-yellow{color:#ff0}.nb-theme-default .ql-editor .ql-color-green{color:#008a00}.nb-theme-default .ql-editor .ql-color-blue{color:#06c}.nb-theme-default .ql-editor .ql-color-purple{color:#93f}.nb-theme-default .ql-editor .ql-font-serif{font-family:Georgia,Times New Roman,serif}.nb-theme-default .ql-editor .ql-font-monospace{font-family:Monaco,Courier New,monospace}.nb-theme-default .ql-editor .ql-size-small{font-size:.75em}.nb-theme-default .ql-editor .ql-size-large{font-size:1.5em}.nb-theme-default .ql-editor .ql-size-huge{font-size:2.5em}.nb-theme-default .ql-editor .ql-direction-rtl{direction:rtl;text-align:inherit}.nb-theme-default .ql-editor .ql-align-center{text-align:center}.nb-theme-default .ql-editor .ql-align-justify{text-align:justify}.nb-theme-default .ql-editor .ql-align-right{text-align:right}.nb-theme-default .ql-editor.ql-blank:before{content:attr(data-placeholder);color:#8f9bb3;font-family:Open Sans,sans-serif;text-overflow:ellipsis;font-size:.9375rem;font-weight:400;line-height:1.25rem;font-style:normal;left:15px;pointer-events:none;position:absolute;right:15px}.nb-theme-default .ql-snow.ql-toolbar:after,.nb-theme-default .ql-snow .ql-toolbar:after{clear:both;content:\"\";display:table}.nb-theme-default .ql-snow.ql-toolbar button,.nb-theme-default .ql-snow .ql-toolbar button{background:none;border:none;cursor:pointer;display:inline-block;float:left;height:24px;padding:3px 5px;width:28px}.nb-theme-default .ql-snow.ql-toolbar button svg,.nb-theme-default .ql-snow .ql-toolbar button svg{float:left;height:100%}.nb-theme-default .ql-snow.ql-toolbar button:active:hover,.nb-theme-default .ql-snow .ql-toolbar button:active:hover{outline:none}.nb-theme-default .ql-snow.ql-toolbar input.ql-image[type=file],.nb-theme-default .ql-snow .ql-toolbar input.ql-image[type=file]{display:none}.nb-theme-default .ql-snow.ql-toolbar button:hover,.nb-theme-default .ql-snow .ql-toolbar button:hover,.nb-theme-default .ql-snow.ql-toolbar button:focus,.nb-theme-default .ql-snow .ql-toolbar button:focus,.nb-theme-default .ql-snow.ql-toolbar button.ql-active,.nb-theme-default .ql-snow .ql-toolbar button.ql-active,.nb-theme-default .ql-snow.ql-toolbar .ql-picker-label:hover,.nb-theme-default .ql-snow .ql-toolbar .ql-picker-label:hover,.nb-theme-default .ql-snow.ql-toolbar .ql-picker-label.ql-active,.nb-theme-default .ql-snow .ql-toolbar .ql-picker-label.ql-active,.nb-theme-default .ql-snow.ql-toolbar .ql-picker-item:hover,.nb-theme-default .ql-snow .ql-toolbar .ql-picker-item:hover,.nb-theme-default .ql-snow.ql-toolbar .ql-picker-item.ql-selected,.nb-theme-default .ql-snow .ql-toolbar .ql-picker-item.ql-selected{color:#06c;outline:1px solid #e4e9f2;background-color:#edf1f7}.nb-theme-default .ql-snow.ql-toolbar button:hover .ql-fill,.nb-theme-default .ql-snow .ql-toolbar button:hover .ql-fill,.nb-theme-default .ql-snow.ql-toolbar button:focus .ql-fill,.nb-theme-default .ql-snow .ql-toolbar button:focus .ql-fill,.nb-theme-default .ql-snow.ql-toolbar button.ql-active .ql-fill,.nb-theme-default .ql-snow .ql-toolbar button.ql-active .ql-fill,.nb-theme-default .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,.nb-theme-default .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,.nb-theme-default .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,.nb-theme-default .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,.nb-theme-default .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,.nb-theme-default .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,.nb-theme-default .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,.nb-theme-default .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,.nb-theme-default .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,.nb-theme-default .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,.nb-theme-default .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,.nb-theme-default .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,.nb-theme-default .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,.nb-theme-default .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,.nb-theme-default .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.nb-theme-default .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.nb-theme-default .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.nb-theme-default .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.nb-theme-default .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.nb-theme-default .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.nb-theme-default .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.nb-theme-default .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill{fill:#06c}.nb-theme-default .ql-snow.ql-toolbar button:hover .ql-stroke,.nb-theme-default .ql-snow .ql-toolbar button:hover .ql-stroke,.nb-theme-default .ql-snow.ql-toolbar button:focus .ql-stroke,.nb-theme-default .ql-snow .ql-toolbar button:focus .ql-stroke,.nb-theme-default .ql-snow.ql-toolbar button.ql-active .ql-stroke,.nb-theme-default .ql-snow .ql-toolbar button.ql-active .ql-stroke,.nb-theme-default .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,.nb-theme-default .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,.nb-theme-default .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,.nb-theme-default .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,.nb-theme-default .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,.nb-theme-default .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,.nb-theme-default .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.nb-theme-default .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.nb-theme-default .ql-snow.ql-toolbar button:hover .ql-stroke-miter,.nb-theme-default .ql-snow .ql-toolbar button:hover .ql-stroke-miter,.nb-theme-default .ql-snow.ql-toolbar button:focus .ql-stroke-miter,.nb-theme-default .ql-snow .ql-toolbar button:focus .ql-stroke-miter,.nb-theme-default .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,.nb-theme-default .ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,.nb-theme-default .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.nb-theme-default .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.nb-theme-default .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.nb-theme-default .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.nb-theme-default .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.nb-theme-default .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.nb-theme-default .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.nb-theme-default .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter{stroke:#06c}@media (pointer: coarse){.nb-theme-default .ql-snow.ql-toolbar button:hover:not(.ql-active),.nb-theme-default .ql-snow .ql-toolbar button:hover:not(.ql-active){color:#222b45}.nb-theme-default .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,.nb-theme-default .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,.nb-theme-default .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,.nb-theme-default .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill{fill:#222b45}.nb-theme-default .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,.nb-theme-default .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,.nb-theme-default .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,.nb-theme-default .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter{stroke:#222b45}}.nb-theme-default .ql-snow{box-sizing:border-box}.nb-theme-default .ql-snow *{box-sizing:border-box}.nb-theme-default .ql-snow .ql-hidden{display:none}.nb-theme-default .ql-snow .ql-out-bottom,.nb-theme-default .ql-snow .ql-out-top{visibility:hidden}.nb-theme-default .ql-snow .ql-tooltip{position:absolute;transform:translateY(10px)}.nb-theme-default .ql-snow .ql-tooltip a{cursor:pointer;text-decoration:none}.nb-theme-default .ql-snow .ql-tooltip.ql-flip{transform:translateY(-10px)}.nb-theme-default .ql-snow .ql-formats{display:inline-block;vertical-align:middle}.nb-theme-default .ql-snow .ql-formats:after{clear:both;content:\"\";display:table}.nb-theme-default .ql-snow .ql-stroke{fill:none;stroke:#222b45;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.nb-theme-default .ql-snow .ql-stroke-miter{fill:none;stroke:#222b45;stroke-miterlimit:10;stroke-width:2}.nb-theme-default .ql-snow .ql-fill,.nb-theme-default .ql-snow .ql-stroke.ql-fill{fill:#222b45}.nb-theme-default .ql-snow .ql-empty{fill:none}.nb-theme-default .ql-snow .ql-even{fill-rule:evenodd}.nb-theme-default .ql-snow .ql-thin,.nb-theme-default .ql-snow .ql-stroke.ql-thin{stroke-width:1}.nb-theme-default .ql-snow .ql-transparent{opacity:.4}.nb-theme-default .ql-snow .ql-direction svg:last-child{display:none}.nb-theme-default .ql-snow .ql-direction.ql-active svg:last-child{display:inline}.nb-theme-default .ql-snow .ql-direction.ql-active svg:first-child{display:none}.nb-theme-default .ql-snow .ql-editor h1{font-size:2em}.nb-theme-default .ql-snow .ql-editor h2{font-size:1.5em}.nb-theme-default .ql-snow .ql-editor h3{font-size:1.17em}.nb-theme-default .ql-snow .ql-editor h4{font-size:1em}.nb-theme-default .ql-snow .ql-editor h5{font-size:.83em}.nb-theme-default .ql-snow .ql-editor h6{font-size:.67em}.nb-theme-default .ql-snow .ql-editor a{text-decoration:underline}.nb-theme-default .ql-snow .ql-editor blockquote{border-left:4px solid #e4e9f2;margin-bottom:5px;margin-top:5px;padding-left:16px}.nb-theme-default .ql-snow .ql-editor code,.nb-theme-default .ql-snow .ql-editor pre{background-color:#f0f0f0;border-radius:3px}.nb-theme-default .ql-snow .ql-editor pre{white-space:pre-wrap;margin-bottom:5px;margin-top:5px;padding:5px 10px}.nb-theme-default .ql-snow .ql-editor code{font-size:85%;padding:2px 4px}.nb-theme-default .ql-snow .ql-editor pre.ql-syntax{background-color:#23241f;color:#f8f8f2;overflow:visible}.nb-theme-default .ql-snow .ql-editor img{max-width:100%}.nb-theme-default .ql-snow .ql-picker{color:#222b45;display:inline-block;float:left;font-size:14px;font-weight:500;height:24px;position:relative;vertical-align:middle}.nb-theme-default .ql-snow .ql-picker-label{cursor:pointer;display:inline-block;height:100%;padding-left:8px;padding-right:2px;position:relative;width:100%}.nb-theme-default .ql-snow .ql-picker-label:before{display:inline-block;line-height:22px}.nb-theme-default .ql-snow .ql-picker-options{background-color:#fff;display:none;min-width:100%;padding:4px 8px;position:absolute;white-space:nowrap}.nb-theme-default .ql-snow .ql-picker-options .ql-picker-item{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px}.nb-theme-default .ql-snow .ql-picker.ql-expanded .ql-picker-label{color:#e4e9f2;z-index:2}.nb-theme-default .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill{fill:#e4e9f2}.nb-theme-default .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke{stroke:#e4e9f2}.nb-theme-default .ql-snow .ql-picker.ql-expanded .ql-picker-options{display:block;margin-top:-1px;top:100%;z-index:1}.nb-theme-default .ql-snow .ql-color-picker,.nb-theme-default .ql-snow .ql-icon-picker{width:28px}.nb-theme-default .ql-snow .ql-color-picker .ql-picker-label,.nb-theme-default .ql-snow .ql-icon-picker .ql-picker-label{padding:2px 4px}.nb-theme-default .ql-snow .ql-color-picker .ql-picker-label svg,.nb-theme-default .ql-snow .ql-icon-picker .ql-picker-label svg{right:4px}.nb-theme-default .ql-snow .ql-icon-picker .ql-picker-options{padding:4px 0}.nb-theme-default .ql-snow .ql-icon-picker .ql-picker-item{height:24px;width:24px;padding:2px 4px}.nb-theme-default .ql-snow .ql-color-picker .ql-picker-options{padding:3px 5px;width:152px}.nb-theme-default .ql-snow .ql-color-picker .ql-picker-item{border:1px solid transparent;float:left;height:16px;margin:2px;padding:0;width:16px}.nb-theme-default .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg{position:absolute;margin-top:-9px;right:0;top:50%;width:18px}.nb-theme-default .ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=\"\"]):before,.nb-theme-default .ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=\"\"]):before,.nb-theme-default .ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=\"\"]):before,.nb-theme-default .ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=\"\"]):before,.nb-theme-default .ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=\"\"]):before,.nb-theme-default .ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=\"\"]):before{content:attr(data-label)}.nb-theme-default .ql-snow .ql-picker.ql-header{width:98px}.nb-theme-default .ql-snow .ql-picker.ql-header .ql-picker-label:before,.nb-theme-default .ql-snow .ql-picker.ql-header .ql-picker-item:before{content:\"Normal\"}.nb-theme-default .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]:before,.nb-theme-default .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]:before{content:\"Heading 1\"}.nb-theme-default .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]:before,.nb-theme-default .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]:before{content:\"Heading 2\"}.nb-theme-default .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]:before,.nb-theme-default .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]:before{content:\"Heading 3\"}.nb-theme-default .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]:before,.nb-theme-default .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]:before{content:\"Heading 4\"}.nb-theme-default .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]:before,.nb-theme-default .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]:before{content:\"Heading 5\"}.nb-theme-default .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]:before,.nb-theme-default .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]:before{content:\"Heading 6\"}.nb-theme-default .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]:before{font-size:2em}.nb-theme-default .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]:before{font-size:1.5em}.nb-theme-default .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]:before{font-size:1.17em}.nb-theme-default .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]:before{font-size:1em}.nb-theme-default .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]:before{font-size:.83em}.nb-theme-default .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]:before{font-size:.67em}.nb-theme-default .ql-snow .ql-picker.ql-font{width:108px}.nb-theme-default .ql-snow .ql-picker.ql-font .ql-picker-label:before,.nb-theme-default .ql-snow .ql-picker.ql-font .ql-picker-item:before{content:\"Sans Serif\"}.nb-theme-default .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]:before,.nb-theme-default .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]:before{content:\"Serif\"}.nb-theme-default .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]:before,.nb-theme-default .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]:before{content:\"Monospace\"}.nb-theme-default .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]:before{font-family:Georgia,Times New Roman,serif}.nb-theme-default .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]:before{font-family:Monaco,Courier New,monospace}.nb-theme-default .ql-snow .ql-picker.ql-size{width:98px}.nb-theme-default .ql-snow .ql-picker.ql-size .ql-picker-label:before,.nb-theme-default .ql-snow .ql-picker.ql-size .ql-picker-item:before{content:\"Normal\"}.nb-theme-default .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]:before,.nb-theme-default .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]:before{content:\"Small\"}.nb-theme-default .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]:before,.nb-theme-default .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]:before{content:\"Large\"}.nb-theme-default .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]:before,.nb-theme-default .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]:before{content:\"Huge\"}.nb-theme-default .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]:before{font-size:10px}.nb-theme-default .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]:before{font-size:18px}.nb-theme-default .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]:before{font-size:32px}.nb-theme-default .ql-snow .ql-color-picker.ql-background .ql-picker-item{background-color:#fff}.nb-theme-default .ql-snow .ql-color-picker.ql-color .ql-picker-item{background-color:#000}.nb-theme-default .ql-toolbar.ql-snow{border:1px solid #e4e9f2;border-top-right-radius:.25rem;border-top-left-radius:.25rem;box-sizing:border-box;font-family:\"Helvetica Neue\",\"Helvetica\",\"Arial\",sans-serif;padding:8px}.nb-theme-default .ql-toolbar.ql-snow .ql-formats{margin-right:15px}.nb-theme-default .ql-toolbar.ql-snow .ql-picker-label{border:1px solid transparent}.nb-theme-default .ql-toolbar.ql-snow .ql-picker-options{border:1px solid transparent;box-shadow:#0003 0 2px 8px}.nb-theme-default .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label{border-color:#e4e9f2}.nb-theme-default .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options{border-color:#e4e9f2}.nb-theme-default .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,.nb-theme-default .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover{border-color:#000}.nb-theme-default .ql-toolbar.ql-snow+.ql-container.ql-snow{border-top:0px}.nb-theme-default .ql-snow .ql-tooltip{background-color:#fff;border:1px solid #e4e9f2;box-shadow:0 0 5px #ddd;color:#222b45;padding:5px 12px;white-space:nowrap}.nb-theme-default .ql-snow .ql-tooltip:before{content:\"Visit URL:\";line-height:26px;margin-right:8px}.nb-theme-default .ql-snow .ql-tooltip input[type=text]{display:none;border:1px solid #e4e9f2;font-size:13px;height:26px;margin:0;padding:3px 5px;width:170px}.nb-theme-default .ql-snow .ql-tooltip a.ql-preview{display:inline-block;max-width:200px;overflow-x:hidden;text-overflow:ellipsis;vertical-align:top}.nb-theme-default .ql-snow .ql-tooltip a.ql-action:after{border-right:1px solid #e4e9f2;content:\"Edit\";margin-left:16px;padding-right:8px}.nb-theme-default .ql-snow .ql-tooltip a.ql-remove:before{content:\"Remove\";margin-left:8px}.nb-theme-default .ql-snow .ql-tooltip a{line-height:26px}.nb-theme-default .ql-snow .ql-tooltip.ql-editing a.ql-preview,.nb-theme-default .ql-snow .ql-tooltip.ql-editing a.ql-remove{display:none}.nb-theme-default .ql-snow .ql-tooltip.ql-editing input[type=text]{display:inline-block}.nb-theme-default .ql-snow .ql-tooltip.ql-editing a.ql-action:after{border-right:0px;content:\"Save\";padding-right:0}.nb-theme-default .ql-snow .ql-tooltip[data-mode=link]:before{content:\"Enter link:\"}.nb-theme-default .ql-snow .ql-tooltip[data-mode=formula]:before{content:\"Enter formula:\"}.nb-theme-default .ql-snow .ql-tooltip[data-mode=video]:before{content:\"Enter video:\"}.nb-theme-default .ql-snow a{color:#06c}.nb-theme-default .ql-container.ql-snow{border:1px solid #e4e9f2;border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.nb-theme-default .hasErrors .ql-toolbar.ql-snow{color:#ff3d71!important;border-top:1px solid #ff3d71!important;border-left:1px solid #ff3d71!important;border-right:1px solid #ff3d71!important;border-bottom:0px!important}.nb-theme-default .hasErrors .ql-container.ql-snow{border-top:1px solid #ff3d71!important;border-left:1px solid #ff3d71!important;border-right:1px solid #ff3d71!important;border-bottom:1px solid #ff3d71!important}.nb-theme-dark quill-editor[disabled=disabled] .ql-toolbar .ql-stroke{stroke:#101426;cursor:no-drop!important}.nb-theme-dark quill-editor[disabled=disabled] .ql-toolbar .ql-stroke-miter{stroke:#101426;cursor:no-drop!important}.nb-theme-dark quill-editor[disabled=disabled] .ql-toolbar .ql-fill,.nb-theme-dark quill-editor[disabled=disabled] .ql-toolbar .ql-stroke.ql-fill{fill:#101426;cursor:no-drop!important}.nb-theme-dark quill-editor[disabled=disabled] .ql-toolbar .ql-picker{color:#101426;cursor:no-drop!important}.nb-theme-dark .ql-container{box-sizing:border-box;font-family:Helvetica,Arial,sans-serif;font-size:13px;height:100%;margin:0;position:relative;background-color:#151a30}.nb-theme-dark .ql-container.ql-disabled .ql-tooltip{visibility:hidden}.nb-theme-dark .ql-container.ql-disabled .ql-editor ul[data-checked]>li:before{pointer-events:none}.nb-theme-dark .ql-clipboard{left:-100000px;height:1px;overflow-y:hidden;position:absolute;top:50%}.nb-theme-dark .ql-clipboard p{margin:0;padding:0}.nb-theme-dark .ql-editor{box-sizing:border-box;line-height:1.42;height:100%;outline:none;overflow-y:auto;padding:12px 15px;tab-size:4;-moz-tab-size:4;text-align:left;white-space:pre-wrap;word-wrap:break-word}.nb-theme-dark .ql-editor>*{cursor:text}.nb-theme-dark .ql-editor p,.nb-theme-dark .ql-editor ol,.nb-theme-dark .ql-editor ul,.nb-theme-dark .ql-editor pre,.nb-theme-dark .ql-editor blockquote,.nb-theme-dark .ql-editor h1,.nb-theme-dark .ql-editor h2,.nb-theme-dark .ql-editor h3,.nb-theme-dark .ql-editor h4,.nb-theme-dark .ql-editor h5,.nb-theme-dark .ql-editor h6{margin:0;padding:0;counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.nb-theme-dark .ql-editor ol,.nb-theme-dark .ql-editor ul{padding-left:1.5em}.nb-theme-dark .ql-editor ol>li,.nb-theme-dark .ql-editor ul>li{list-style-type:none}.nb-theme-dark .ql-editor ul>li:before{content:\"\\2022\"}.nb-theme-dark .ql-editor ul[data-checked=true],.nb-theme-dark .ql-editor ul[data-checked=false]{pointer-events:none}.nb-theme-dark .ql-editor ul[data-checked=true]>li *,.nb-theme-dark .ql-editor ul[data-checked=false]>li *{pointer-events:all}.nb-theme-dark .ql-editor ul[data-checked=true]>li:before,.nb-theme-dark .ql-editor ul[data-checked=false]>li:before{color:#777;cursor:pointer;pointer-events:all}.nb-theme-dark .ql-editor ul[data-checked=true]>li:before{content:\"\\2611\"}.nb-theme-dark .ql-editor ul[data-checked=false]>li:before{content:\"\\2610\"}.nb-theme-dark .ql-editor li:before{display:inline-block;white-space:nowrap;width:1.2em}.nb-theme-dark .ql-editor li:not(.ql-direction-rtl):before{margin-left:-1.5em;margin-right:.3em;text-align:right}.nb-theme-dark .ql-editor li.ql-direction-rtl:before{margin-left:.3em;margin-right:-1.5em}.nb-theme-dark .ql-editor ol li:not(.ql-direction-rtl),.nb-theme-dark .ql-editor ul li:not(.ql-direction-rtl){padding-left:1.5em}.nb-theme-dark .ql-editor ol li.ql-direction-rtl,.nb-theme-dark .ql-editor ul li.ql-direction-rtl{padding-right:1.5em}.nb-theme-dark .ql-editor ol li{counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;counter-increment:list-0}.nb-theme-dark .ql-editor ol li:before{content:counter(list-0,decimal) \". \"}.nb-theme-dark .ql-editor ol li.ql-indent-1{counter-increment:list-1}.nb-theme-dark .ql-editor ol li.ql-indent-1:before{content:counter(list-1,lower-alpha) \". \"}.nb-theme-dark .ql-editor ol li.ql-indent-1{counter-reset:list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.nb-theme-dark .ql-editor ol li.ql-indent-2{counter-increment:list-2}.nb-theme-dark .ql-editor ol li.ql-indent-2:before{content:counter(list-2,lower-roman) \". \"}.nb-theme-dark .ql-editor ol li.ql-indent-2{counter-reset:list-3 list-4 list-5 list-6 list-7 list-8 list-9}.nb-theme-dark .ql-editor ol li.ql-indent-3{counter-increment:list-3}.nb-theme-dark .ql-editor ol li.ql-indent-3:before{content:counter(list-3,decimal) \". \"}.nb-theme-dark .ql-editor ol li.ql-indent-3{counter-reset:list-4 list-5 list-6 list-7 list-8 list-9}.nb-theme-dark .ql-editor ol li.ql-indent-4{counter-increment:list-4}.nb-theme-dark .ql-editor ol li.ql-indent-4:before{content:counter(list-4,lower-alpha) \". \"}.nb-theme-dark .ql-editor ol li.ql-indent-4{counter-reset:list-5 list-6 list-7 list-8 list-9}.nb-theme-dark .ql-editor ol li.ql-indent-5{counter-increment:list-5}.nb-theme-dark .ql-editor ol li.ql-indent-5:before{content:counter(list-5,lower-roman) \". \"}.nb-theme-dark .ql-editor ol li.ql-indent-5{counter-reset:list-6 list-7 list-8 list-9}.nb-theme-dark .ql-editor ol li.ql-indent-6{counter-increment:list-6}.nb-theme-dark .ql-editor ol li.ql-indent-6:before{content:counter(list-6,decimal) \". \"}.nb-theme-dark .ql-editor ol li.ql-indent-6{counter-reset:list-7 list-8 list-9}.nb-theme-dark .ql-editor ol li.ql-indent-7{counter-increment:list-7}.nb-theme-dark .ql-editor ol li.ql-indent-7:before{content:counter(list-7,lower-alpha) \". \"}.nb-theme-dark .ql-editor ol li.ql-indent-7{counter-reset:list-8 list-9}.nb-theme-dark .ql-editor ol li.ql-indent-8{counter-increment:list-8}.nb-theme-dark .ql-editor ol li.ql-indent-8:before{content:counter(list-8,lower-roman) \". \"}.nb-theme-dark .ql-editor ol li.ql-indent-8{counter-reset:list-9}.nb-theme-dark .ql-editor ol li.ql-indent-9{counter-increment:list-9}.nb-theme-dark .ql-editor ol li.ql-indent-9:before{content:counter(list-9,decimal) \". \"}.nb-theme-dark .ql-editor .ql-indent-1:not(.ql-direction-rtl){padding-left:3em}.nb-theme-dark .ql-editor li.ql-indent-1:not(.ql-direction-rtl){padding-left:4.5em}.nb-theme-dark .ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:3em}.nb-theme-dark .ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:4.5em}.nb-theme-dark .ql-editor .ql-indent-2:not(.ql-direction-rtl){padding-left:6em}.nb-theme-dark .ql-editor li.ql-indent-2:not(.ql-direction-rtl){padding-left:7.5em}.nb-theme-dark .ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:6em}.nb-theme-dark .ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:7.5em}.nb-theme-dark .ql-editor .ql-indent-3:not(.ql-direction-rtl){padding-left:9em}.nb-theme-dark .ql-editor li.ql-indent-3:not(.ql-direction-rtl){padding-left:10.5em}.nb-theme-dark .ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:9em}.nb-theme-dark .ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:10.5em}.nb-theme-dark .ql-editor .ql-indent-4:not(.ql-direction-rtl){padding-left:12em}.nb-theme-dark .ql-editor li.ql-indent-4:not(.ql-direction-rtl){padding-left:13.5em}.nb-theme-dark .ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:12em}.nb-theme-dark .ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:13.5em}.nb-theme-dark .ql-editor .ql-indent-5:not(.ql-direction-rtl){padding-left:15em}.nb-theme-dark .ql-editor li.ql-indent-5:not(.ql-direction-rtl){padding-left:16.5em}.nb-theme-dark .ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:15em}.nb-theme-dark .ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:16.5em}.nb-theme-dark .ql-editor .ql-indent-6:not(.ql-direction-rtl){padding-left:18em}.nb-theme-dark .ql-editor li.ql-indent-6:not(.ql-direction-rtl){padding-left:19.5em}.nb-theme-dark .ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:18em}.nb-theme-dark .ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:19.5em}.nb-theme-dark .ql-editor .ql-indent-7:not(.ql-direction-rtl){padding-left:21em}.nb-theme-dark .ql-editor li.ql-indent-7:not(.ql-direction-rtl){padding-left:22.5em}.nb-theme-dark .ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:21em}.nb-theme-dark .ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:22.5em}.nb-theme-dark .ql-editor .ql-indent-8:not(.ql-direction-rtl){padding-left:24em}.nb-theme-dark .ql-editor li.ql-indent-8:not(.ql-direction-rtl){padding-left:25.5em}.nb-theme-dark .ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:24em}.nb-theme-dark .ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:25.5em}.nb-theme-dark .ql-editor .ql-indent-9:not(.ql-direction-rtl){padding-left:27em}.nb-theme-dark .ql-editor li.ql-indent-9:not(.ql-direction-rtl){padding-left:28.5em}.nb-theme-dark .ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:27em}.nb-theme-dark .ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:28.5em}.nb-theme-dark .ql-editor .ql-video{display:block;max-width:100%}.nb-theme-dark .ql-editor .ql-video.ql-align-center{margin:0 auto}.nb-theme-dark .ql-editor .ql-video.ql-align-right{margin:0 0 0 auto}.nb-theme-dark .ql-editor .ql-bg-black{background-color:#000}.nb-theme-dark .ql-editor .ql-bg-red{background-color:#e60000}.nb-theme-dark .ql-editor .ql-bg-orange{background-color:#f90}.nb-theme-dark .ql-editor .ql-bg-yellow{background-color:#ff0}.nb-theme-dark .ql-editor .ql-bg-green{background-color:#008a00}.nb-theme-dark .ql-editor .ql-bg-blue{background-color:#06c}.nb-theme-dark .ql-editor .ql-bg-purple{background-color:#93f}.nb-theme-dark .ql-editor .ql-color-white{color:#fff}.nb-theme-dark .ql-editor .ql-color-red{color:#e60000}.nb-theme-dark .ql-editor .ql-color-orange{color:#f90}.nb-theme-dark .ql-editor .ql-color-yellow{color:#ff0}.nb-theme-dark .ql-editor .ql-color-green{color:#008a00}.nb-theme-dark .ql-editor .ql-color-blue{color:#06c}.nb-theme-dark .ql-editor .ql-color-purple{color:#93f}.nb-theme-dark .ql-editor .ql-font-serif{font-family:Georgia,Times New Roman,serif}.nb-theme-dark .ql-editor .ql-font-monospace{font-family:Monaco,Courier New,monospace}.nb-theme-dark .ql-editor .ql-size-small{font-size:.75em}.nb-theme-dark .ql-editor .ql-size-large{font-size:1.5em}.nb-theme-dark .ql-editor .ql-size-huge{font-size:2.5em}.nb-theme-dark .ql-editor .ql-direction-rtl{direction:rtl;text-align:inherit}.nb-theme-dark .ql-editor .ql-align-center{text-align:center}.nb-theme-dark .ql-editor .ql-align-justify{text-align:justify}.nb-theme-dark .ql-editor .ql-align-right{text-align:right}.nb-theme-dark .ql-editor.ql-blank:before{content:attr(data-placeholder);color:#8f9bb3;font-family:Open Sans,sans-serif;text-overflow:ellipsis;font-size:.9375rem;font-weight:400;line-height:1.25rem;font-style:normal;left:15px;pointer-events:none;position:absolute;right:15px}.nb-theme-dark .ql-snow.ql-toolbar:after,.nb-theme-dark .ql-snow .ql-toolbar:after{clear:both;content:\"\";display:table}.nb-theme-dark .ql-snow.ql-toolbar button,.nb-theme-dark .ql-snow .ql-toolbar button{background:none;border:none;cursor:pointer;display:inline-block;float:left;height:24px;padding:3px 5px;width:28px}.nb-theme-dark .ql-snow.ql-toolbar button svg,.nb-theme-dark .ql-snow .ql-toolbar button svg{float:left;height:100%}.nb-theme-dark .ql-snow.ql-toolbar button:active:hover,.nb-theme-dark .ql-snow .ql-toolbar button:active:hover{outline:none}.nb-theme-dark .ql-snow.ql-toolbar input.ql-image[type=file],.nb-theme-dark .ql-snow .ql-toolbar input.ql-image[type=file]{display:none}.nb-theme-dark .ql-snow.ql-toolbar button:hover,.nb-theme-dark .ql-snow .ql-toolbar button:hover,.nb-theme-dark .ql-snow.ql-toolbar button:focus,.nb-theme-dark .ql-snow .ql-toolbar button:focus,.nb-theme-dark .ql-snow.ql-toolbar button.ql-active,.nb-theme-dark .ql-snow .ql-toolbar button.ql-active,.nb-theme-dark .ql-snow.ql-toolbar .ql-picker-label:hover,.nb-theme-dark .ql-snow .ql-toolbar .ql-picker-label:hover,.nb-theme-dark .ql-snow.ql-toolbar .ql-picker-label.ql-active,.nb-theme-dark .ql-snow .ql-toolbar .ql-picker-label.ql-active,.nb-theme-dark .ql-snow.ql-toolbar .ql-picker-item:hover,.nb-theme-dark .ql-snow .ql-toolbar .ql-picker-item:hover,.nb-theme-dark .ql-snow.ql-toolbar .ql-picker-item.ql-selected,.nb-theme-dark .ql-snow .ql-toolbar .ql-picker-item.ql-selected{color:#06c;outline:1px solid #101426;background-color:#151a30}.nb-theme-dark .ql-snow.ql-toolbar button:hover .ql-fill,.nb-theme-dark .ql-snow .ql-toolbar button:hover .ql-fill,.nb-theme-dark .ql-snow.ql-toolbar button:focus .ql-fill,.nb-theme-dark .ql-snow .ql-toolbar button:focus .ql-fill,.nb-theme-dark .ql-snow.ql-toolbar button.ql-active .ql-fill,.nb-theme-dark .ql-snow .ql-toolbar button.ql-active .ql-fill,.nb-theme-dark .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,.nb-theme-dark .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,.nb-theme-dark .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,.nb-theme-dark .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,.nb-theme-dark .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,.nb-theme-dark .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,.nb-theme-dark .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,.nb-theme-dark .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,.nb-theme-dark .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,.nb-theme-dark .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,.nb-theme-dark .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,.nb-theme-dark .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,.nb-theme-dark .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,.nb-theme-dark .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,.nb-theme-dark .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.nb-theme-dark .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.nb-theme-dark .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.nb-theme-dark .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.nb-theme-dark .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.nb-theme-dark .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.nb-theme-dark .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.nb-theme-dark .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill{fill:#06c}.nb-theme-dark .ql-snow.ql-toolbar button:hover .ql-stroke,.nb-theme-dark .ql-snow .ql-toolbar button:hover .ql-stroke,.nb-theme-dark .ql-snow.ql-toolbar button:focus .ql-stroke,.nb-theme-dark .ql-snow .ql-toolbar button:focus .ql-stroke,.nb-theme-dark .ql-snow.ql-toolbar button.ql-active .ql-stroke,.nb-theme-dark .ql-snow .ql-toolbar button.ql-active .ql-stroke,.nb-theme-dark .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,.nb-theme-dark .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,.nb-theme-dark .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,.nb-theme-dark .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,.nb-theme-dark .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,.nb-theme-dark .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,.nb-theme-dark .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.nb-theme-dark .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.nb-theme-dark .ql-snow.ql-toolbar button:hover .ql-stroke-miter,.nb-theme-dark .ql-snow .ql-toolbar button:hover .ql-stroke-miter,.nb-theme-dark .ql-snow.ql-toolbar button:focus .ql-stroke-miter,.nb-theme-dark .ql-snow .ql-toolbar button:focus .ql-stroke-miter,.nb-theme-dark .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,.nb-theme-dark .ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,.nb-theme-dark .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.nb-theme-dark .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.nb-theme-dark .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.nb-theme-dark .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.nb-theme-dark .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.nb-theme-dark .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.nb-theme-dark .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.nb-theme-dark .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter{stroke:#06c}@media (pointer: coarse){.nb-theme-dark .ql-snow.ql-toolbar button:hover:not(.ql-active),.nb-theme-dark .ql-snow .ql-toolbar button:hover:not(.ql-active){color:#fff}.nb-theme-dark .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,.nb-theme-dark .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,.nb-theme-dark .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,.nb-theme-dark .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill{fill:#fff}.nb-theme-dark .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,.nb-theme-dark .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,.nb-theme-dark .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,.nb-theme-dark .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter{stroke:#fff}}.nb-theme-dark .ql-snow{box-sizing:border-box}.nb-theme-dark .ql-snow *{box-sizing:border-box}.nb-theme-dark .ql-snow .ql-hidden{display:none}.nb-theme-dark .ql-snow .ql-out-bottom,.nb-theme-dark .ql-snow .ql-out-top{visibility:hidden}.nb-theme-dark .ql-snow .ql-tooltip{position:absolute;transform:translateY(10px)}.nb-theme-dark .ql-snow .ql-tooltip a{cursor:pointer;text-decoration:none}.nb-theme-dark .ql-snow .ql-tooltip.ql-flip{transform:translateY(-10px)}.nb-theme-dark .ql-snow .ql-formats{display:inline-block;vertical-align:middle}.nb-theme-dark .ql-snow .ql-formats:after{clear:both;content:\"\";display:table}.nb-theme-dark .ql-snow .ql-stroke{fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.nb-theme-dark .ql-snow .ql-stroke-miter{fill:none;stroke:#fff;stroke-miterlimit:10;stroke-width:2}.nb-theme-dark .ql-snow .ql-fill,.nb-theme-dark .ql-snow .ql-stroke.ql-fill{fill:#fff}.nb-theme-dark .ql-snow .ql-empty{fill:none}.nb-theme-dark .ql-snow .ql-even{fill-rule:evenodd}.nb-theme-dark .ql-snow .ql-thin,.nb-theme-dark .ql-snow .ql-stroke.ql-thin{stroke-width:1}.nb-theme-dark .ql-snow .ql-transparent{opacity:.4}.nb-theme-dark .ql-snow .ql-direction svg:last-child{display:none}.nb-theme-dark .ql-snow .ql-direction.ql-active svg:last-child{display:inline}.nb-theme-dark .ql-snow .ql-direction.ql-active svg:first-child{display:none}.nb-theme-dark .ql-snow .ql-editor h1{font-size:2em}.nb-theme-dark .ql-snow .ql-editor h2{font-size:1.5em}.nb-theme-dark .ql-snow .ql-editor h3{font-size:1.17em}.nb-theme-dark .ql-snow .ql-editor h4{font-size:1em}.nb-theme-dark .ql-snow .ql-editor h5{font-size:.83em}.nb-theme-dark .ql-snow .ql-editor h6{font-size:.67em}.nb-theme-dark .ql-snow .ql-editor a{text-decoration:underline}.nb-theme-dark .ql-snow .ql-editor blockquote{border-left:4px solid #101426;margin-bottom:5px;margin-top:5px;padding-left:16px}.nb-theme-dark .ql-snow .ql-editor code,.nb-theme-dark .ql-snow .ql-editor pre{background-color:#f0f0f0;border-radius:3px}.nb-theme-dark .ql-snow .ql-editor pre{white-space:pre-wrap;margin-bottom:5px;margin-top:5px;padding:5px 10px}.nb-theme-dark .ql-snow .ql-editor code{font-size:85%;padding:2px 4px}.nb-theme-dark .ql-snow .ql-editor pre.ql-syntax{background-color:#23241f;color:#f8f8f2;overflow:visible}.nb-theme-dark .ql-snow .ql-editor img{max-width:100%}.nb-theme-dark .ql-snow .ql-picker{color:#fff;display:inline-block;float:left;font-size:14px;font-weight:500;height:24px;position:relative;vertical-align:middle}.nb-theme-dark .ql-snow .ql-picker-label{cursor:pointer;display:inline-block;height:100%;padding-left:8px;padding-right:2px;position:relative;width:100%}.nb-theme-dark .ql-snow .ql-picker-label:before{display:inline-block;line-height:22px}.nb-theme-dark .ql-snow .ql-picker-options{background-color:#fff;display:none;min-width:100%;padding:4px 8px;position:absolute;white-space:nowrap}.nb-theme-dark .ql-snow .ql-picker-options .ql-picker-item{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px}.nb-theme-dark .ql-snow .ql-picker.ql-expanded .ql-picker-label{color:#101426;z-index:2}.nb-theme-dark .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill{fill:#101426}.nb-theme-dark .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke{stroke:#101426}.nb-theme-dark .ql-snow .ql-picker.ql-expanded .ql-picker-options{display:block;margin-top:-1px;top:100%;z-index:1}.nb-theme-dark .ql-snow .ql-color-picker,.nb-theme-dark .ql-snow .ql-icon-picker{width:28px}.nb-theme-dark .ql-snow .ql-color-picker .ql-picker-label,.nb-theme-dark .ql-snow .ql-icon-picker .ql-picker-label{padding:2px 4px}.nb-theme-dark .ql-snow .ql-color-picker .ql-picker-label svg,.nb-theme-dark .ql-snow .ql-icon-picker .ql-picker-label svg{right:4px}.nb-theme-dark .ql-snow .ql-icon-picker .ql-picker-options{padding:4px 0}.nb-theme-dark .ql-snow .ql-icon-picker .ql-picker-item{height:24px;width:24px;padding:2px 4px}.nb-theme-dark .ql-snow .ql-color-picker .ql-picker-options{padding:3px 5px;width:152px}.nb-theme-dark .ql-snow .ql-color-picker .ql-picker-item{border:1px solid transparent;float:left;height:16px;margin:2px;padding:0;width:16px}.nb-theme-dark .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg{position:absolute;margin-top:-9px;right:0;top:50%;width:18px}.nb-theme-dark .ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=\"\"]):before,.nb-theme-dark .ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=\"\"]):before,.nb-theme-dark .ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=\"\"]):before,.nb-theme-dark .ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=\"\"]):before,.nb-theme-dark .ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=\"\"]):before,.nb-theme-dark .ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=\"\"]):before{content:attr(data-label)}.nb-theme-dark .ql-snow .ql-picker.ql-header{width:98px}.nb-theme-dark .ql-snow .ql-picker.ql-header .ql-picker-label:before,.nb-theme-dark .ql-snow .ql-picker.ql-header .ql-picker-item:before{content:\"Normal\"}.nb-theme-dark .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]:before,.nb-theme-dark .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]:before{content:\"Heading 1\"}.nb-theme-dark .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]:before,.nb-theme-dark .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]:before{content:\"Heading 2\"}.nb-theme-dark .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]:before,.nb-theme-dark .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]:before{content:\"Heading 3\"}.nb-theme-dark .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]:before,.nb-theme-dark .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]:before{content:\"Heading 4\"}.nb-theme-dark .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]:before,.nb-theme-dark .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]:before{content:\"Heading 5\"}.nb-theme-dark .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]:before,.nb-theme-dark .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]:before{content:\"Heading 6\"}.nb-theme-dark .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]:before{font-size:2em}.nb-theme-dark .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]:before{font-size:1.5em}.nb-theme-dark .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]:before{font-size:1.17em}.nb-theme-dark .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]:before{font-size:1em}.nb-theme-dark .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]:before{font-size:.83em}.nb-theme-dark .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]:before{font-size:.67em}.nb-theme-dark .ql-snow .ql-picker.ql-font{width:108px}.nb-theme-dark .ql-snow .ql-picker.ql-font .ql-picker-label:before,.nb-theme-dark .ql-snow .ql-picker.ql-font .ql-picker-item:before{content:\"Sans Serif\"}.nb-theme-dark .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]:before,.nb-theme-dark .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]:before{content:\"Serif\"}.nb-theme-dark .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]:before,.nb-theme-dark .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]:before{content:\"Monospace\"}.nb-theme-dark .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]:before{font-family:Georgia,Times New Roman,serif}.nb-theme-dark .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]:before{font-family:Monaco,Courier New,monospace}.nb-theme-dark .ql-snow .ql-picker.ql-size{width:98px}.nb-theme-dark .ql-snow .ql-picker.ql-size .ql-picker-label:before,.nb-theme-dark .ql-snow .ql-picker.ql-size .ql-picker-item:before{content:\"Normal\"}.nb-theme-dark .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]:before,.nb-theme-dark .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]:before{content:\"Small\"}.nb-theme-dark .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]:before,.nb-theme-dark .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]:before{content:\"Large\"}.nb-theme-dark .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]:before,.nb-theme-dark .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]:before{content:\"Huge\"}.nb-theme-dark .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]:before{font-size:10px}.nb-theme-dark .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]:before{font-size:18px}.nb-theme-dark .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]:before{font-size:32px}.nb-theme-dark .ql-snow .ql-color-picker.ql-background .ql-picker-item{background-color:#fff}.nb-theme-dark .ql-snow .ql-color-picker.ql-color .ql-picker-item{background-color:#000}.nb-theme-dark .ql-toolbar.ql-snow{border:1px solid #101426;border-top-right-radius:.25rem;border-top-left-radius:.25rem;box-sizing:border-box;font-family:\"Helvetica Neue\",\"Helvetica\",\"Arial\",sans-serif;padding:8px}.nb-theme-dark .ql-toolbar.ql-snow .ql-formats{margin-right:15px}.nb-theme-dark .ql-toolbar.ql-snow .ql-picker-label{border:1px solid transparent}.nb-theme-dark .ql-toolbar.ql-snow .ql-picker-options{border:1px solid transparent;box-shadow:#0003 0 2px 8px}.nb-theme-dark .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label{border-color:#101426}.nb-theme-dark .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options{border-color:#101426}.nb-theme-dark .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,.nb-theme-dark .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover{border-color:#000}.nb-theme-dark .ql-toolbar.ql-snow+.ql-container.ql-snow{border-top:0px}.nb-theme-dark .ql-snow .ql-tooltip{background-color:#fff;border:1px solid #101426;box-shadow:0 0 5px #ddd;color:#fff;padding:5px 12px;white-space:nowrap}.nb-theme-dark .ql-snow .ql-tooltip:before{content:\"Visit URL:\";line-height:26px;margin-right:8px}.nb-theme-dark .ql-snow .ql-tooltip input[type=text]{display:none;border:1px solid #101426;font-size:13px;height:26px;margin:0;padding:3px 5px;width:170px}.nb-theme-dark .ql-snow .ql-tooltip a.ql-preview{display:inline-block;max-width:200px;overflow-x:hidden;text-overflow:ellipsis;vertical-align:top}.nb-theme-dark .ql-snow .ql-tooltip a.ql-action:after{border-right:1px solid #101426;content:\"Edit\";margin-left:16px;padding-right:8px}.nb-theme-dark .ql-snow .ql-tooltip a.ql-remove:before{content:\"Remove\";margin-left:8px}.nb-theme-dark .ql-snow .ql-tooltip a{line-height:26px}.nb-theme-dark .ql-snow .ql-tooltip.ql-editing a.ql-preview,.nb-theme-dark .ql-snow .ql-tooltip.ql-editing a.ql-remove{display:none}.nb-theme-dark .ql-snow .ql-tooltip.ql-editing input[type=text]{display:inline-block}.nb-theme-dark .ql-snow .ql-tooltip.ql-editing a.ql-action:after{border-right:0px;content:\"Save\";padding-right:0}.nb-theme-dark .ql-snow .ql-tooltip[data-mode=link]:before{content:\"Enter link:\"}.nb-theme-dark .ql-snow .ql-tooltip[data-mode=formula]:before{content:\"Enter formula:\"}.nb-theme-dark .ql-snow .ql-tooltip[data-mode=video]:before{content:\"Enter video:\"}.nb-theme-dark .ql-snow a{color:#06c}.nb-theme-dark .ql-container.ql-snow{border:1px solid #101426;border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.nb-theme-dark .hasErrors .ql-toolbar.ql-snow{color:#ff3d71!important;border-top:1px solid #ff3d71!important;border-left:1px solid #ff3d71!important;border-right:1px solid #ff3d71!important;border-bottom:0px!important}.nb-theme-dark .hasErrors .ql-container.ql-snow{border-top:1px solid #ff3d71!important;border-left:1px solid #ff3d71!important;border-right:1px solid #ff3d71!important;border-bottom:1px solid #ff3d71!important}.nb-theme-cosmic quill-editor[disabled=disabled] .ql-toolbar .ql-stroke{stroke:#13132b;cursor:no-drop!important}.nb-theme-cosmic quill-editor[disabled=disabled] .ql-toolbar .ql-stroke-miter{stroke:#13132b;cursor:no-drop!important}.nb-theme-cosmic quill-editor[disabled=disabled] .ql-toolbar .ql-fill,.nb-theme-cosmic quill-editor[disabled=disabled] .ql-toolbar .ql-stroke.ql-fill{fill:#13132b;cursor:no-drop!important}.nb-theme-cosmic quill-editor[disabled=disabled] .ql-toolbar .ql-picker{color:#13132b;cursor:no-drop!important}.nb-theme-cosmic .ql-container{box-sizing:border-box;font-family:Helvetica,Arial,sans-serif;font-size:13px;height:100%;margin:0;position:relative;background-color:#1b1b38}.nb-theme-cosmic .ql-container.ql-disabled .ql-tooltip{visibility:hidden}.nb-theme-cosmic .ql-container.ql-disabled .ql-editor ul[data-checked]>li:before{pointer-events:none}.nb-theme-cosmic .ql-clipboard{left:-100000px;height:1px;overflow-y:hidden;position:absolute;top:50%}.nb-theme-cosmic .ql-clipboard p{margin:0;padding:0}.nb-theme-cosmic .ql-editor{box-sizing:border-box;line-height:1.42;height:100%;outline:none;overflow-y:auto;padding:12px 15px;tab-size:4;-moz-tab-size:4;text-align:left;white-space:pre-wrap;word-wrap:break-word}.nb-theme-cosmic .ql-editor>*{cursor:text}.nb-theme-cosmic .ql-editor p,.nb-theme-cosmic .ql-editor ol,.nb-theme-cosmic .ql-editor ul,.nb-theme-cosmic .ql-editor pre,.nb-theme-cosmic .ql-editor blockquote,.nb-theme-cosmic .ql-editor h1,.nb-theme-cosmic .ql-editor h2,.nb-theme-cosmic .ql-editor h3,.nb-theme-cosmic .ql-editor h4,.nb-theme-cosmic .ql-editor h5,.nb-theme-cosmic .ql-editor h6{margin:0;padding:0;counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.nb-theme-cosmic .ql-editor ol,.nb-theme-cosmic .ql-editor ul{padding-left:1.5em}.nb-theme-cosmic .ql-editor ol>li,.nb-theme-cosmic .ql-editor ul>li{list-style-type:none}.nb-theme-cosmic .ql-editor ul>li:before{content:\"\\2022\"}.nb-theme-cosmic .ql-editor ul[data-checked=true],.nb-theme-cosmic .ql-editor ul[data-checked=false]{pointer-events:none}.nb-theme-cosmic .ql-editor ul[data-checked=true]>li *,.nb-theme-cosmic .ql-editor ul[data-checked=false]>li *{pointer-events:all}.nb-theme-cosmic .ql-editor ul[data-checked=true]>li:before,.nb-theme-cosmic .ql-editor ul[data-checked=false]>li:before{color:#777;cursor:pointer;pointer-events:all}.nb-theme-cosmic .ql-editor ul[data-checked=true]>li:before{content:\"\\2611\"}.nb-theme-cosmic .ql-editor ul[data-checked=false]>li:before{content:\"\\2610\"}.nb-theme-cosmic .ql-editor li:before{display:inline-block;white-space:nowrap;width:1.2em}.nb-theme-cosmic .ql-editor li:not(.ql-direction-rtl):before{margin-left:-1.5em;margin-right:.3em;text-align:right}.nb-theme-cosmic .ql-editor li.ql-direction-rtl:before{margin-left:.3em;margin-right:-1.5em}.nb-theme-cosmic .ql-editor ol li:not(.ql-direction-rtl),.nb-theme-cosmic .ql-editor ul li:not(.ql-direction-rtl){padding-left:1.5em}.nb-theme-cosmic .ql-editor ol li.ql-direction-rtl,.nb-theme-cosmic .ql-editor ul li.ql-direction-rtl{padding-right:1.5em}.nb-theme-cosmic .ql-editor ol li{counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;counter-increment:list-0}.nb-theme-cosmic .ql-editor ol li:before{content:counter(list-0,decimal) \". \"}.nb-theme-cosmic .ql-editor ol li.ql-indent-1{counter-increment:list-1}.nb-theme-cosmic .ql-editor ol li.ql-indent-1:before{content:counter(list-1,lower-alpha) \". \"}.nb-theme-cosmic .ql-editor ol li.ql-indent-1{counter-reset:list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.nb-theme-cosmic .ql-editor ol li.ql-indent-2{counter-increment:list-2}.nb-theme-cosmic .ql-editor ol li.ql-indent-2:before{content:counter(list-2,lower-roman) \". \"}.nb-theme-cosmic .ql-editor ol li.ql-indent-2{counter-reset:list-3 list-4 list-5 list-6 list-7 list-8 list-9}.nb-theme-cosmic .ql-editor ol li.ql-indent-3{counter-increment:list-3}.nb-theme-cosmic .ql-editor ol li.ql-indent-3:before{content:counter(list-3,decimal) \". \"}.nb-theme-cosmic .ql-editor ol li.ql-indent-3{counter-reset:list-4 list-5 list-6 list-7 list-8 list-9}.nb-theme-cosmic .ql-editor ol li.ql-indent-4{counter-increment:list-4}.nb-theme-cosmic .ql-editor ol li.ql-indent-4:before{content:counter(list-4,lower-alpha) \". \"}.nb-theme-cosmic .ql-editor ol li.ql-indent-4{counter-reset:list-5 list-6 list-7 list-8 list-9}.nb-theme-cosmic .ql-editor ol li.ql-indent-5{counter-increment:list-5}.nb-theme-cosmic .ql-editor ol li.ql-indent-5:before{content:counter(list-5,lower-roman) \". \"}.nb-theme-cosmic .ql-editor ol li.ql-indent-5{counter-reset:list-6 list-7 list-8 list-9}.nb-theme-cosmic .ql-editor ol li.ql-indent-6{counter-increment:list-6}.nb-theme-cosmic .ql-editor ol li.ql-indent-6:before{content:counter(list-6,decimal) \". \"}.nb-theme-cosmic .ql-editor ol li.ql-indent-6{counter-reset:list-7 list-8 list-9}.nb-theme-cosmic .ql-editor ol li.ql-indent-7{counter-increment:list-7}.nb-theme-cosmic .ql-editor ol li.ql-indent-7:before{content:counter(list-7,lower-alpha) \". \"}.nb-theme-cosmic .ql-editor ol li.ql-indent-7{counter-reset:list-8 list-9}.nb-theme-cosmic .ql-editor ol li.ql-indent-8{counter-increment:list-8}.nb-theme-cosmic .ql-editor ol li.ql-indent-8:before{content:counter(list-8,lower-roman) \". \"}.nb-theme-cosmic .ql-editor ol li.ql-indent-8{counter-reset:list-9}.nb-theme-cosmic .ql-editor ol li.ql-indent-9{counter-increment:list-9}.nb-theme-cosmic .ql-editor ol li.ql-indent-9:before{content:counter(list-9,decimal) \". \"}.nb-theme-cosmic .ql-editor .ql-indent-1:not(.ql-direction-rtl){padding-left:3em}.nb-theme-cosmic .ql-editor li.ql-indent-1:not(.ql-direction-rtl){padding-left:4.5em}.nb-theme-cosmic .ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:3em}.nb-theme-cosmic .ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:4.5em}.nb-theme-cosmic .ql-editor .ql-indent-2:not(.ql-direction-rtl){padding-left:6em}.nb-theme-cosmic .ql-editor li.ql-indent-2:not(.ql-direction-rtl){padding-left:7.5em}.nb-theme-cosmic .ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:6em}.nb-theme-cosmic .ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:7.5em}.nb-theme-cosmic .ql-editor .ql-indent-3:not(.ql-direction-rtl){padding-left:9em}.nb-theme-cosmic .ql-editor li.ql-indent-3:not(.ql-direction-rtl){padding-left:10.5em}.nb-theme-cosmic .ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:9em}.nb-theme-cosmic .ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:10.5em}.nb-theme-cosmic .ql-editor .ql-indent-4:not(.ql-direction-rtl){padding-left:12em}.nb-theme-cosmic .ql-editor li.ql-indent-4:not(.ql-direction-rtl){padding-left:13.5em}.nb-theme-cosmic .ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:12em}.nb-theme-cosmic .ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:13.5em}.nb-theme-cosmic .ql-editor .ql-indent-5:not(.ql-direction-rtl){padding-left:15em}.nb-theme-cosmic .ql-editor li.ql-indent-5:not(.ql-direction-rtl){padding-left:16.5em}.nb-theme-cosmic .ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:15em}.nb-theme-cosmic .ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:16.5em}.nb-theme-cosmic .ql-editor .ql-indent-6:not(.ql-direction-rtl){padding-left:18em}.nb-theme-cosmic .ql-editor li.ql-indent-6:not(.ql-direction-rtl){padding-left:19.5em}.nb-theme-cosmic .ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:18em}.nb-theme-cosmic .ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:19.5em}.nb-theme-cosmic .ql-editor .ql-indent-7:not(.ql-direction-rtl){padding-left:21em}.nb-theme-cosmic .ql-editor li.ql-indent-7:not(.ql-direction-rtl){padding-left:22.5em}.nb-theme-cosmic .ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:21em}.nb-theme-cosmic .ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:22.5em}.nb-theme-cosmic .ql-editor .ql-indent-8:not(.ql-direction-rtl){padding-left:24em}.nb-theme-cosmic .ql-editor li.ql-indent-8:not(.ql-direction-rtl){padding-left:25.5em}.nb-theme-cosmic .ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:24em}.nb-theme-cosmic .ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:25.5em}.nb-theme-cosmic .ql-editor .ql-indent-9:not(.ql-direction-rtl){padding-left:27em}.nb-theme-cosmic .ql-editor li.ql-indent-9:not(.ql-direction-rtl){padding-left:28.5em}.nb-theme-cosmic .ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:27em}.nb-theme-cosmic .ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:28.5em}.nb-theme-cosmic .ql-editor .ql-video{display:block;max-width:100%}.nb-theme-cosmic .ql-editor .ql-video.ql-align-center{margin:0 auto}.nb-theme-cosmic .ql-editor .ql-video.ql-align-right{margin:0 0 0 auto}.nb-theme-cosmic .ql-editor .ql-bg-black{background-color:#000}.nb-theme-cosmic .ql-editor .ql-bg-red{background-color:#e60000}.nb-theme-cosmic .ql-editor .ql-bg-orange{background-color:#f90}.nb-theme-cosmic .ql-editor .ql-bg-yellow{background-color:#ff0}.nb-theme-cosmic .ql-editor .ql-bg-green{background-color:#008a00}.nb-theme-cosmic .ql-editor .ql-bg-blue{background-color:#06c}.nb-theme-cosmic .ql-editor .ql-bg-purple{background-color:#93f}.nb-theme-cosmic .ql-editor .ql-color-white{color:#fff}.nb-theme-cosmic .ql-editor .ql-color-red{color:#e60000}.nb-theme-cosmic .ql-editor .ql-color-orange{color:#f90}.nb-theme-cosmic .ql-editor .ql-color-yellow{color:#ff0}.nb-theme-cosmic .ql-editor .ql-color-green{color:#008a00}.nb-theme-cosmic .ql-editor .ql-color-blue{color:#06c}.nb-theme-cosmic .ql-editor .ql-color-purple{color:#93f}.nb-theme-cosmic .ql-editor .ql-font-serif{font-family:Georgia,Times New Roman,serif}.nb-theme-cosmic .ql-editor .ql-font-monospace{font-family:Monaco,Courier New,monospace}.nb-theme-cosmic .ql-editor .ql-size-small{font-size:.75em}.nb-theme-cosmic .ql-editor .ql-size-large{font-size:1.5em}.nb-theme-cosmic .ql-editor .ql-size-huge{font-size:2.5em}.nb-theme-cosmic .ql-editor .ql-direction-rtl{direction:rtl;text-align:inherit}.nb-theme-cosmic .ql-editor .ql-align-center{text-align:center}.nb-theme-cosmic .ql-editor .ql-align-justify{text-align:justify}.nb-theme-cosmic .ql-editor .ql-align-right{text-align:right}.nb-theme-cosmic .ql-editor.ql-blank:before{content:attr(data-placeholder);color:#8f9bb3;font-family:Open Sans,sans-serif;text-overflow:ellipsis;font-size:.9375rem;font-weight:400;line-height:1.25rem;font-style:normal;left:15px;pointer-events:none;position:absolute;right:15px}.nb-theme-cosmic .ql-snow.ql-toolbar:after,.nb-theme-cosmic .ql-snow .ql-toolbar:after{clear:both;content:\"\";display:table}.nb-theme-cosmic .ql-snow.ql-toolbar button,.nb-theme-cosmic .ql-snow .ql-toolbar button{background:none;border:none;cursor:pointer;display:inline-block;float:left;height:24px;padding:3px 5px;width:28px}.nb-theme-cosmic .ql-snow.ql-toolbar button svg,.nb-theme-cosmic .ql-snow .ql-toolbar button svg{float:left;height:100%}.nb-theme-cosmic .ql-snow.ql-toolbar button:active:hover,.nb-theme-cosmic .ql-snow .ql-toolbar button:active:hover{outline:none}.nb-theme-cosmic .ql-snow.ql-toolbar input.ql-image[type=file],.nb-theme-cosmic .ql-snow .ql-toolbar input.ql-image[type=file]{display:none}.nb-theme-cosmic .ql-snow.ql-toolbar button:hover,.nb-theme-cosmic .ql-snow .ql-toolbar button:hover,.nb-theme-cosmic .ql-snow.ql-toolbar button:focus,.nb-theme-cosmic .ql-snow .ql-toolbar button:focus,.nb-theme-cosmic .ql-snow.ql-toolbar button.ql-active,.nb-theme-cosmic .ql-snow .ql-toolbar button.ql-active,.nb-theme-cosmic .ql-snow.ql-toolbar .ql-picker-label:hover,.nb-theme-cosmic .ql-snow .ql-toolbar .ql-picker-label:hover,.nb-theme-cosmic .ql-snow.ql-toolbar .ql-picker-label.ql-active,.nb-theme-cosmic .ql-snow .ql-toolbar .ql-picker-label.ql-active,.nb-theme-cosmic .ql-snow.ql-toolbar .ql-picker-item:hover,.nb-theme-cosmic .ql-snow .ql-toolbar .ql-picker-item:hover,.nb-theme-cosmic .ql-snow.ql-toolbar .ql-picker-item.ql-selected,.nb-theme-cosmic .ql-snow .ql-toolbar .ql-picker-item.ql-selected{color:#06c;outline:1px solid #13132b;background-color:#1b1b38}.nb-theme-cosmic .ql-snow.ql-toolbar button:hover .ql-fill,.nb-theme-cosmic .ql-snow .ql-toolbar button:hover .ql-fill,.nb-theme-cosmic .ql-snow.ql-toolbar button:focus .ql-fill,.nb-theme-cosmic .ql-snow .ql-toolbar button:focus .ql-fill,.nb-theme-cosmic .ql-snow.ql-toolbar button.ql-active .ql-fill,.nb-theme-cosmic .ql-snow .ql-toolbar button.ql-active .ql-fill,.nb-theme-cosmic .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,.nb-theme-cosmic .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,.nb-theme-cosmic .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,.nb-theme-cosmic .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,.nb-theme-cosmic .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,.nb-theme-cosmic .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,.nb-theme-cosmic .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,.nb-theme-cosmic .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,.nb-theme-cosmic .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,.nb-theme-cosmic .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,.nb-theme-cosmic .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,.nb-theme-cosmic .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,.nb-theme-cosmic .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,.nb-theme-cosmic .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,.nb-theme-cosmic .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.nb-theme-cosmic .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.nb-theme-cosmic .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.nb-theme-cosmic .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.nb-theme-cosmic .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.nb-theme-cosmic .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.nb-theme-cosmic .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.nb-theme-cosmic .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill{fill:#06c}.nb-theme-cosmic .ql-snow.ql-toolbar button:hover .ql-stroke,.nb-theme-cosmic .ql-snow .ql-toolbar button:hover .ql-stroke,.nb-theme-cosmic .ql-snow.ql-toolbar button:focus .ql-stroke,.nb-theme-cosmic .ql-snow .ql-toolbar button:focus .ql-stroke,.nb-theme-cosmic .ql-snow.ql-toolbar button.ql-active .ql-stroke,.nb-theme-cosmic .ql-snow .ql-toolbar button.ql-active .ql-stroke,.nb-theme-cosmic .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,.nb-theme-cosmic .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,.nb-theme-cosmic .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,.nb-theme-cosmic .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,.nb-theme-cosmic .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,.nb-theme-cosmic .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,.nb-theme-cosmic .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.nb-theme-cosmic .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.nb-theme-cosmic .ql-snow.ql-toolbar button:hover .ql-stroke-miter,.nb-theme-cosmic .ql-snow .ql-toolbar button:hover .ql-stroke-miter,.nb-theme-cosmic .ql-snow.ql-toolbar button:focus .ql-stroke-miter,.nb-theme-cosmic .ql-snow .ql-toolbar button:focus .ql-stroke-miter,.nb-theme-cosmic .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,.nb-theme-cosmic .ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,.nb-theme-cosmic .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.nb-theme-cosmic .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.nb-theme-cosmic .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.nb-theme-cosmic .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.nb-theme-cosmic .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.nb-theme-cosmic .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.nb-theme-cosmic .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.nb-theme-cosmic .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter{stroke:#06c}@media (pointer: coarse){.nb-theme-cosmic .ql-snow.ql-toolbar button:hover:not(.ql-active),.nb-theme-cosmic .ql-snow .ql-toolbar button:hover:not(.ql-active){color:#fff}.nb-theme-cosmic .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,.nb-theme-cosmic .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,.nb-theme-cosmic .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,.nb-theme-cosmic .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill{fill:#fff}.nb-theme-cosmic .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,.nb-theme-cosmic .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,.nb-theme-cosmic .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,.nb-theme-cosmic .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter{stroke:#fff}}.nb-theme-cosmic .ql-snow{box-sizing:border-box}.nb-theme-cosmic .ql-snow *{box-sizing:border-box}.nb-theme-cosmic .ql-snow .ql-hidden{display:none}.nb-theme-cosmic .ql-snow .ql-out-bottom,.nb-theme-cosmic .ql-snow .ql-out-top{visibility:hidden}.nb-theme-cosmic .ql-snow .ql-tooltip{position:absolute;transform:translateY(10px)}.nb-theme-cosmic .ql-snow .ql-tooltip a{cursor:pointer;text-decoration:none}.nb-theme-cosmic .ql-snow .ql-tooltip.ql-flip{transform:translateY(-10px)}.nb-theme-cosmic .ql-snow .ql-formats{display:inline-block;vertical-align:middle}.nb-theme-cosmic .ql-snow .ql-formats:after{clear:both;content:\"\";display:table}.nb-theme-cosmic .ql-snow .ql-stroke{fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.nb-theme-cosmic .ql-snow .ql-stroke-miter{fill:none;stroke:#fff;stroke-miterlimit:10;stroke-width:2}.nb-theme-cosmic .ql-snow .ql-fill,.nb-theme-cosmic .ql-snow .ql-stroke.ql-fill{fill:#fff}.nb-theme-cosmic .ql-snow .ql-empty{fill:none}.nb-theme-cosmic .ql-snow .ql-even{fill-rule:evenodd}.nb-theme-cosmic .ql-snow .ql-thin,.nb-theme-cosmic .ql-snow .ql-stroke.ql-thin{stroke-width:1}.nb-theme-cosmic .ql-snow .ql-transparent{opacity:.4}.nb-theme-cosmic .ql-snow .ql-direction svg:last-child{display:none}.nb-theme-cosmic .ql-snow .ql-direction.ql-active svg:last-child{display:inline}.nb-theme-cosmic .ql-snow .ql-direction.ql-active svg:first-child{display:none}.nb-theme-cosmic .ql-snow .ql-editor h1{font-size:2em}.nb-theme-cosmic .ql-snow .ql-editor h2{font-size:1.5em}.nb-theme-cosmic .ql-snow .ql-editor h3{font-size:1.17em}.nb-theme-cosmic .ql-snow .ql-editor h4{font-size:1em}.nb-theme-cosmic .ql-snow .ql-editor h5{font-size:.83em}.nb-theme-cosmic .ql-snow .ql-editor h6{font-size:.67em}.nb-theme-cosmic .ql-snow .ql-editor a{text-decoration:underline}.nb-theme-cosmic .ql-snow .ql-editor blockquote{border-left:4px solid #13132b;margin-bottom:5px;margin-top:5px;padding-left:16px}.nb-theme-cosmic .ql-snow .ql-editor code,.nb-theme-cosmic .ql-snow .ql-editor pre{background-color:#f0f0f0;border-radius:3px}.nb-theme-cosmic .ql-snow .ql-editor pre{white-space:pre-wrap;margin-bottom:5px;margin-top:5px;padding:5px 10px}.nb-theme-cosmic .ql-snow .ql-editor code{font-size:85%;padding:2px 4px}.nb-theme-cosmic .ql-snow .ql-editor pre.ql-syntax{background-color:#23241f;color:#f8f8f2;overflow:visible}.nb-theme-cosmic .ql-snow .ql-editor img{max-width:100%}.nb-theme-cosmic .ql-snow .ql-picker{color:#fff;display:inline-block;float:left;font-size:14px;font-weight:500;height:24px;position:relative;vertical-align:middle}.nb-theme-cosmic .ql-snow .ql-picker-label{cursor:pointer;display:inline-block;height:100%;padding-left:8px;padding-right:2px;position:relative;width:100%}.nb-theme-cosmic .ql-snow .ql-picker-label:before{display:inline-block;line-height:22px}.nb-theme-cosmic .ql-snow .ql-picker-options{background-color:#fff;display:none;min-width:100%;padding:4px 8px;position:absolute;white-space:nowrap}.nb-theme-cosmic .ql-snow .ql-picker-options .ql-picker-item{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px}.nb-theme-cosmic .ql-snow .ql-picker.ql-expanded .ql-picker-label{color:#13132b;z-index:2}.nb-theme-cosmic .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill{fill:#13132b}.nb-theme-cosmic .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke{stroke:#13132b}.nb-theme-cosmic .ql-snow .ql-picker.ql-expanded .ql-picker-options{display:block;margin-top:-1px;top:100%;z-index:1}.nb-theme-cosmic .ql-snow .ql-color-picker,.nb-theme-cosmic .ql-snow .ql-icon-picker{width:28px}.nb-theme-cosmic .ql-snow .ql-color-picker .ql-picker-label,.nb-theme-cosmic .ql-snow .ql-icon-picker .ql-picker-label{padding:2px 4px}.nb-theme-cosmic .ql-snow .ql-color-picker .ql-picker-label svg,.nb-theme-cosmic .ql-snow .ql-icon-picker .ql-picker-label svg{right:4px}.nb-theme-cosmic .ql-snow .ql-icon-picker .ql-picker-options{padding:4px 0}.nb-theme-cosmic .ql-snow .ql-icon-picker .ql-picker-item{height:24px;width:24px;padding:2px 4px}.nb-theme-cosmic .ql-snow .ql-color-picker .ql-picker-options{padding:3px 5px;width:152px}.nb-theme-cosmic .ql-snow .ql-color-picker .ql-picker-item{border:1px solid transparent;float:left;height:16px;margin:2px;padding:0;width:16px}.nb-theme-cosmic .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg{position:absolute;margin-top:-9px;right:0;top:50%;width:18px}.nb-theme-cosmic .ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=\"\"]):before,.nb-theme-cosmic .ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=\"\"]):before,.nb-theme-cosmic .ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=\"\"]):before,.nb-theme-cosmic .ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=\"\"]):before,.nb-theme-cosmic .ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=\"\"]):before,.nb-theme-cosmic .ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=\"\"]):before{content:attr(data-label)}.nb-theme-cosmic .ql-snow .ql-picker.ql-header{width:98px}.nb-theme-cosmic .ql-snow .ql-picker.ql-header .ql-picker-label:before,.nb-theme-cosmic .ql-snow .ql-picker.ql-header .ql-picker-item:before{content:\"Normal\"}.nb-theme-cosmic .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]:before,.nb-theme-cosmic .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]:before{content:\"Heading 1\"}.nb-theme-cosmic .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]:before,.nb-theme-cosmic .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]:before{content:\"Heading 2\"}.nb-theme-cosmic .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]:before,.nb-theme-cosmic .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]:before{content:\"Heading 3\"}.nb-theme-cosmic .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]:before,.nb-theme-cosmic .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]:before{content:\"Heading 4\"}.nb-theme-cosmic .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]:before,.nb-theme-cosmic .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]:before{content:\"Heading 5\"}.nb-theme-cosmic .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]:before,.nb-theme-cosmic .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]:before{content:\"Heading 6\"}.nb-theme-cosmic .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]:before{font-size:2em}.nb-theme-cosmic .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]:before{font-size:1.5em}.nb-theme-cosmic .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]:before{font-size:1.17em}.nb-theme-cosmic .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]:before{font-size:1em}.nb-theme-cosmic .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]:before{font-size:.83em}.nb-theme-cosmic .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]:before{font-size:.67em}.nb-theme-cosmic .ql-snow .ql-picker.ql-font{width:108px}.nb-theme-cosmic .ql-snow .ql-picker.ql-font .ql-picker-label:before,.nb-theme-cosmic .ql-snow .ql-picker.ql-font .ql-picker-item:before{content:\"Sans Serif\"}.nb-theme-cosmic .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]:before,.nb-theme-cosmic .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]:before{content:\"Serif\"}.nb-theme-cosmic .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]:before,.nb-theme-cosmic .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]:before{content:\"Monospace\"}.nb-theme-cosmic .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]:before{font-family:Georgia,Times New Roman,serif}.nb-theme-cosmic .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]:before{font-family:Monaco,Courier New,monospace}.nb-theme-cosmic .ql-snow .ql-picker.ql-size{width:98px}.nb-theme-cosmic .ql-snow .ql-picker.ql-size .ql-picker-label:before,.nb-theme-cosmic .ql-snow .ql-picker.ql-size .ql-picker-item:before{content:\"Normal\"}.nb-theme-cosmic .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]:before,.nb-theme-cosmic .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]:before{content:\"Small\"}.nb-theme-cosmic .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]:before,.nb-theme-cosmic .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]:before{content:\"Large\"}.nb-theme-cosmic .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]:before,.nb-theme-cosmic .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]:before{content:\"Huge\"}.nb-theme-cosmic .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]:before{font-size:10px}.nb-theme-cosmic .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]:before{font-size:18px}.nb-theme-cosmic .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]:before{font-size:32px}.nb-theme-cosmic .ql-snow .ql-color-picker.ql-background .ql-picker-item{background-color:#fff}.nb-theme-cosmic .ql-snow .ql-color-picker.ql-color .ql-picker-item{background-color:#000}.nb-theme-cosmic .ql-toolbar.ql-snow{border:1px solid #13132b;border-top-right-radius:.25rem;border-top-left-radius:.25rem;box-sizing:border-box;font-family:\"Helvetica Neue\",\"Helvetica\",\"Arial\",sans-serif;padding:8px}.nb-theme-cosmic .ql-toolbar.ql-snow .ql-formats{margin-right:15px}.nb-theme-cosmic .ql-toolbar.ql-snow .ql-picker-label{border:1px solid transparent}.nb-theme-cosmic .ql-toolbar.ql-snow .ql-picker-options{border:1px solid transparent;box-shadow:#0003 0 2px 8px}.nb-theme-cosmic .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label{border-color:#13132b}.nb-theme-cosmic .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options{border-color:#13132b}.nb-theme-cosmic .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,.nb-theme-cosmic .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover{border-color:#000}.nb-theme-cosmic .ql-toolbar.ql-snow+.ql-container.ql-snow{border-top:0px}.nb-theme-cosmic .ql-snow .ql-tooltip{background-color:#fff;border:1px solid #13132b;box-shadow:0 0 5px #ddd;color:#fff;padding:5px 12px;white-space:nowrap}.nb-theme-cosmic .ql-snow .ql-tooltip:before{content:\"Visit URL:\";line-height:26px;margin-right:8px}.nb-theme-cosmic .ql-snow .ql-tooltip input[type=text]{display:none;border:1px solid #13132b;font-size:13px;height:26px;margin:0;padding:3px 5px;width:170px}.nb-theme-cosmic .ql-snow .ql-tooltip a.ql-preview{display:inline-block;max-width:200px;overflow-x:hidden;text-overflow:ellipsis;vertical-align:top}.nb-theme-cosmic .ql-snow .ql-tooltip a.ql-action:after{border-right:1px solid #13132b;content:\"Edit\";margin-left:16px;padding-right:8px}.nb-theme-cosmic .ql-snow .ql-tooltip a.ql-remove:before{content:\"Remove\";margin-left:8px}.nb-theme-cosmic .ql-snow .ql-tooltip a{line-height:26px}.nb-theme-cosmic .ql-snow .ql-tooltip.ql-editing a.ql-preview,.nb-theme-cosmic .ql-snow .ql-tooltip.ql-editing a.ql-remove{display:none}.nb-theme-cosmic .ql-snow .ql-tooltip.ql-editing input[type=text]{display:inline-block}.nb-theme-cosmic .ql-snow .ql-tooltip.ql-editing a.ql-action:after{border-right:0px;content:\"Save\";padding-right:0}.nb-theme-cosmic .ql-snow .ql-tooltip[data-mode=link]:before{content:\"Enter link:\"}.nb-theme-cosmic .ql-snow .ql-tooltip[data-mode=formula]:before{content:\"Enter formula:\"}.nb-theme-cosmic .ql-snow .ql-tooltip[data-mode=video]:before{content:\"Enter video:\"}.nb-theme-cosmic .ql-snow a{color:#06c}.nb-theme-cosmic .ql-container.ql-snow{border:1px solid #13132b;border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.nb-theme-cosmic .hasErrors .ql-toolbar.ql-snow{color:#ff3d71!important;border-top:1px solid #ff3d71!important;border-left:1px solid #ff3d71!important;border-right:1px solid #ff3d71!important;border-bottom:0px!important}.nb-theme-cosmic .hasErrors .ql-container.ql-snow{border-top:1px solid #ff3d71!important;border-left:1px solid #ff3d71!important;border-right:1px solid #ff3d71!important;border-bottom:1px solid #ff3d71!important}.nb-theme-corporate quill-editor[disabled=disabled] .ql-toolbar .ql-stroke{stroke:#e4e9f2;cursor:no-drop!important}.nb-theme-corporate quill-editor[disabled=disabled] .ql-toolbar .ql-stroke-miter{stroke:#e4e9f2;cursor:no-drop!important}.nb-theme-corporate quill-editor[disabled=disabled] .ql-toolbar .ql-fill,.nb-theme-corporate quill-editor[disabled=disabled] .ql-toolbar .ql-stroke.ql-fill{fill:#e4e9f2;cursor:no-drop!important}.nb-theme-corporate quill-editor[disabled=disabled] .ql-toolbar .ql-picker{color:#e4e9f2;cursor:no-drop!important}.nb-theme-corporate .ql-container{box-sizing:border-box;font-family:Helvetica,Arial,sans-serif;font-size:13px;height:100%;margin:0;position:relative;background-color:#edf1f7}.nb-theme-corporate .ql-container.ql-disabled .ql-tooltip{visibility:hidden}.nb-theme-corporate .ql-container.ql-disabled .ql-editor ul[data-checked]>li:before{pointer-events:none}.nb-theme-corporate .ql-clipboard{left:-100000px;height:1px;overflow-y:hidden;position:absolute;top:50%}.nb-theme-corporate .ql-clipboard p{margin:0;padding:0}.nb-theme-corporate .ql-editor{box-sizing:border-box;line-height:1.42;height:100%;outline:none;overflow-y:auto;padding:12px 15px;tab-size:4;-moz-tab-size:4;text-align:left;white-space:pre-wrap;word-wrap:break-word}.nb-theme-corporate .ql-editor>*{cursor:text}.nb-theme-corporate .ql-editor p,.nb-theme-corporate .ql-editor ol,.nb-theme-corporate .ql-editor ul,.nb-theme-corporate .ql-editor pre,.nb-theme-corporate .ql-editor blockquote,.nb-theme-corporate .ql-editor h1,.nb-theme-corporate .ql-editor h2,.nb-theme-corporate .ql-editor h3,.nb-theme-corporate .ql-editor h4,.nb-theme-corporate .ql-editor h5,.nb-theme-corporate .ql-editor h6{margin:0;padding:0;counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.nb-theme-corporate .ql-editor ol,.nb-theme-corporate .ql-editor ul{padding-left:1.5em}.nb-theme-corporate .ql-editor ol>li,.nb-theme-corporate .ql-editor ul>li{list-style-type:none}.nb-theme-corporate .ql-editor ul>li:before{content:\"\\2022\"}.nb-theme-corporate .ql-editor ul[data-checked=true],.nb-theme-corporate .ql-editor ul[data-checked=false]{pointer-events:none}.nb-theme-corporate .ql-editor ul[data-checked=true]>li *,.nb-theme-corporate .ql-editor ul[data-checked=false]>li *{pointer-events:all}.nb-theme-corporate .ql-editor ul[data-checked=true]>li:before,.nb-theme-corporate .ql-editor ul[data-checked=false]>li:before{color:#777;cursor:pointer;pointer-events:all}.nb-theme-corporate .ql-editor ul[data-checked=true]>li:before{content:\"\\2611\"}.nb-theme-corporate .ql-editor ul[data-checked=false]>li:before{content:\"\\2610\"}.nb-theme-corporate .ql-editor li:before{display:inline-block;white-space:nowrap;width:1.2em}.nb-theme-corporate .ql-editor li:not(.ql-direction-rtl):before{margin-left:-1.5em;margin-right:.3em;text-align:right}.nb-theme-corporate .ql-editor li.ql-direction-rtl:before{margin-left:.3em;margin-right:-1.5em}.nb-theme-corporate .ql-editor ol li:not(.ql-direction-rtl),.nb-theme-corporate .ql-editor ul li:not(.ql-direction-rtl){padding-left:1.5em}.nb-theme-corporate .ql-editor ol li.ql-direction-rtl,.nb-theme-corporate .ql-editor ul li.ql-direction-rtl{padding-right:1.5em}.nb-theme-corporate .ql-editor ol li{counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;counter-increment:list-0}.nb-theme-corporate .ql-editor ol li:before{content:counter(list-0,decimal) \". \"}.nb-theme-corporate .ql-editor ol li.ql-indent-1{counter-increment:list-1}.nb-theme-corporate .ql-editor ol li.ql-indent-1:before{content:counter(list-1,lower-alpha) \". \"}.nb-theme-corporate .ql-editor ol li.ql-indent-1{counter-reset:list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.nb-theme-corporate .ql-editor ol li.ql-indent-2{counter-increment:list-2}.nb-theme-corporate .ql-editor ol li.ql-indent-2:before{content:counter(list-2,lower-roman) \". \"}.nb-theme-corporate .ql-editor ol li.ql-indent-2{counter-reset:list-3 list-4 list-5 list-6 list-7 list-8 list-9}.nb-theme-corporate .ql-editor ol li.ql-indent-3{counter-increment:list-3}.nb-theme-corporate .ql-editor ol li.ql-indent-3:before{content:counter(list-3,decimal) \". \"}.nb-theme-corporate .ql-editor ol li.ql-indent-3{counter-reset:list-4 list-5 list-6 list-7 list-8 list-9}.nb-theme-corporate .ql-editor ol li.ql-indent-4{counter-increment:list-4}.nb-theme-corporate .ql-editor ol li.ql-indent-4:before{content:counter(list-4,lower-alpha) \". \"}.nb-theme-corporate .ql-editor ol li.ql-indent-4{counter-reset:list-5 list-6 list-7 list-8 list-9}.nb-theme-corporate .ql-editor ol li.ql-indent-5{counter-increment:list-5}.nb-theme-corporate .ql-editor ol li.ql-indent-5:before{content:counter(list-5,lower-roman) \". \"}.nb-theme-corporate .ql-editor ol li.ql-indent-5{counter-reset:list-6 list-7 list-8 list-9}.nb-theme-corporate .ql-editor ol li.ql-indent-6{counter-increment:list-6}.nb-theme-corporate .ql-editor ol li.ql-indent-6:before{content:counter(list-6,decimal) \". \"}.nb-theme-corporate .ql-editor ol li.ql-indent-6{counter-reset:list-7 list-8 list-9}.nb-theme-corporate .ql-editor ol li.ql-indent-7{counter-increment:list-7}.nb-theme-corporate .ql-editor ol li.ql-indent-7:before{content:counter(list-7,lower-alpha) \". \"}.nb-theme-corporate .ql-editor ol li.ql-indent-7{counter-reset:list-8 list-9}.nb-theme-corporate .ql-editor ol li.ql-indent-8{counter-increment:list-8}.nb-theme-corporate .ql-editor ol li.ql-indent-8:before{content:counter(list-8,lower-roman) \". \"}.nb-theme-corporate .ql-editor ol li.ql-indent-8{counter-reset:list-9}.nb-theme-corporate .ql-editor ol li.ql-indent-9{counter-increment:list-9}.nb-theme-corporate .ql-editor ol li.ql-indent-9:before{content:counter(list-9,decimal) \". \"}.nb-theme-corporate .ql-editor .ql-indent-1:not(.ql-direction-rtl){padding-left:3em}.nb-theme-corporate .ql-editor li.ql-indent-1:not(.ql-direction-rtl){padding-left:4.5em}.nb-theme-corporate .ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:3em}.nb-theme-corporate .ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:4.5em}.nb-theme-corporate .ql-editor .ql-indent-2:not(.ql-direction-rtl){padding-left:6em}.nb-theme-corporate .ql-editor li.ql-indent-2:not(.ql-direction-rtl){padding-left:7.5em}.nb-theme-corporate .ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:6em}.nb-theme-corporate .ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:7.5em}.nb-theme-corporate .ql-editor .ql-indent-3:not(.ql-direction-rtl){padding-left:9em}.nb-theme-corporate .ql-editor li.ql-indent-3:not(.ql-direction-rtl){padding-left:10.5em}.nb-theme-corporate .ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:9em}.nb-theme-corporate .ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:10.5em}.nb-theme-corporate .ql-editor .ql-indent-4:not(.ql-direction-rtl){padding-left:12em}.nb-theme-corporate .ql-editor li.ql-indent-4:not(.ql-direction-rtl){padding-left:13.5em}.nb-theme-corporate .ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:12em}.nb-theme-corporate .ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:13.5em}.nb-theme-corporate .ql-editor .ql-indent-5:not(.ql-direction-rtl){padding-left:15em}.nb-theme-corporate .ql-editor li.ql-indent-5:not(.ql-direction-rtl){padding-left:16.5em}.nb-theme-corporate .ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:15em}.nb-theme-corporate .ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:16.5em}.nb-theme-corporate .ql-editor .ql-indent-6:not(.ql-direction-rtl){padding-left:18em}.nb-theme-corporate .ql-editor li.ql-indent-6:not(.ql-direction-rtl){padding-left:19.5em}.nb-theme-corporate .ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:18em}.nb-theme-corporate .ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:19.5em}.nb-theme-corporate .ql-editor .ql-indent-7:not(.ql-direction-rtl){padding-left:21em}.nb-theme-corporate .ql-editor li.ql-indent-7:not(.ql-direction-rtl){padding-left:22.5em}.nb-theme-corporate .ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:21em}.nb-theme-corporate .ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:22.5em}.nb-theme-corporate .ql-editor .ql-indent-8:not(.ql-direction-rtl){padding-left:24em}.nb-theme-corporate .ql-editor li.ql-indent-8:not(.ql-direction-rtl){padding-left:25.5em}.nb-theme-corporate .ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:24em}.nb-theme-corporate .ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:25.5em}.nb-theme-corporate .ql-editor .ql-indent-9:not(.ql-direction-rtl){padding-left:27em}.nb-theme-corporate .ql-editor li.ql-indent-9:not(.ql-direction-rtl){padding-left:28.5em}.nb-theme-corporate .ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:27em}.nb-theme-corporate .ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:28.5em}.nb-theme-corporate .ql-editor .ql-video{display:block;max-width:100%}.nb-theme-corporate .ql-editor .ql-video.ql-align-center{margin:0 auto}.nb-theme-corporate .ql-editor .ql-video.ql-align-right{margin:0 0 0 auto}.nb-theme-corporate .ql-editor .ql-bg-black{background-color:#000}.nb-theme-corporate .ql-editor .ql-bg-red{background-color:#e60000}.nb-theme-corporate .ql-editor .ql-bg-orange{background-color:#f90}.nb-theme-corporate .ql-editor .ql-bg-yellow{background-color:#ff0}.nb-theme-corporate .ql-editor .ql-bg-green{background-color:#008a00}.nb-theme-corporate .ql-editor .ql-bg-blue{background-color:#06c}.nb-theme-corporate .ql-editor .ql-bg-purple{background-color:#93f}.nb-theme-corporate .ql-editor .ql-color-white{color:#fff}.nb-theme-corporate .ql-editor .ql-color-red{color:#e60000}.nb-theme-corporate .ql-editor .ql-color-orange{color:#f90}.nb-theme-corporate .ql-editor .ql-color-yellow{color:#ff0}.nb-theme-corporate .ql-editor .ql-color-green{color:#008a00}.nb-theme-corporate .ql-editor .ql-color-blue{color:#06c}.nb-theme-corporate .ql-editor .ql-color-purple{color:#93f}.nb-theme-corporate .ql-editor .ql-font-serif{font-family:Georgia,Times New Roman,serif}.nb-theme-corporate .ql-editor .ql-font-monospace{font-family:Monaco,Courier New,monospace}.nb-theme-corporate .ql-editor .ql-size-small{font-size:.75em}.nb-theme-corporate .ql-editor .ql-size-large{font-size:1.5em}.nb-theme-corporate .ql-editor .ql-size-huge{font-size:2.5em}.nb-theme-corporate .ql-editor .ql-direction-rtl{direction:rtl;text-align:inherit}.nb-theme-corporate .ql-editor .ql-align-center{text-align:center}.nb-theme-corporate .ql-editor .ql-align-justify{text-align:justify}.nb-theme-corporate .ql-editor .ql-align-right{text-align:right}.nb-theme-corporate .ql-editor.ql-blank:before{content:attr(data-placeholder);color:#8f9bb3;font-family:Open Sans,sans-serif;text-overflow:ellipsis;font-size:.9375rem;font-weight:400;line-height:1.25rem;font-style:normal;left:15px;pointer-events:none;position:absolute;right:15px}.nb-theme-corporate .ql-snow.ql-toolbar:after,.nb-theme-corporate .ql-snow .ql-toolbar:after{clear:both;content:\"\";display:table}.nb-theme-corporate .ql-snow.ql-toolbar button,.nb-theme-corporate .ql-snow .ql-toolbar button{background:none;border:none;cursor:pointer;display:inline-block;float:left;height:24px;padding:3px 5px;width:28px}.nb-theme-corporate .ql-snow.ql-toolbar button svg,.nb-theme-corporate .ql-snow .ql-toolbar button svg{float:left;height:100%}.nb-theme-corporate .ql-snow.ql-toolbar button:active:hover,.nb-theme-corporate .ql-snow .ql-toolbar button:active:hover{outline:none}.nb-theme-corporate .ql-snow.ql-toolbar input.ql-image[type=file],.nb-theme-corporate .ql-snow .ql-toolbar input.ql-image[type=file]{display:none}.nb-theme-corporate .ql-snow.ql-toolbar button:hover,.nb-theme-corporate .ql-snow .ql-toolbar button:hover,.nb-theme-corporate .ql-snow.ql-toolbar button:focus,.nb-theme-corporate .ql-snow .ql-toolbar button:focus,.nb-theme-corporate .ql-snow.ql-toolbar button.ql-active,.nb-theme-corporate .ql-snow .ql-toolbar button.ql-active,.nb-theme-corporate .ql-snow.ql-toolbar .ql-picker-label:hover,.nb-theme-corporate .ql-snow .ql-toolbar .ql-picker-label:hover,.nb-theme-corporate .ql-snow.ql-toolbar .ql-picker-label.ql-active,.nb-theme-corporate .ql-snow .ql-toolbar .ql-picker-label.ql-active,.nb-theme-corporate .ql-snow.ql-toolbar .ql-picker-item:hover,.nb-theme-corporate .ql-snow .ql-toolbar .ql-picker-item:hover,.nb-theme-corporate .ql-snow.ql-toolbar .ql-picker-item.ql-selected,.nb-theme-corporate .ql-snow .ql-toolbar .ql-picker-item.ql-selected{color:#06c;outline:1px solid #e4e9f2;background-color:#edf1f7}.nb-theme-corporate .ql-snow.ql-toolbar button:hover .ql-fill,.nb-theme-corporate .ql-snow .ql-toolbar button:hover .ql-fill,.nb-theme-corporate .ql-snow.ql-toolbar button:focus .ql-fill,.nb-theme-corporate .ql-snow .ql-toolbar button:focus .ql-fill,.nb-theme-corporate .ql-snow.ql-toolbar button.ql-active .ql-fill,.nb-theme-corporate .ql-snow .ql-toolbar button.ql-active .ql-fill,.nb-theme-corporate .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,.nb-theme-corporate .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,.nb-theme-corporate .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,.nb-theme-corporate .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,.nb-theme-corporate .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,.nb-theme-corporate .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,.nb-theme-corporate .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,.nb-theme-corporate .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,.nb-theme-corporate .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,.nb-theme-corporate .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,.nb-theme-corporate .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,.nb-theme-corporate .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,.nb-theme-corporate .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,.nb-theme-corporate .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,.nb-theme-corporate .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.nb-theme-corporate .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.nb-theme-corporate .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.nb-theme-corporate .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.nb-theme-corporate .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.nb-theme-corporate .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.nb-theme-corporate .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.nb-theme-corporate .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill{fill:#06c}.nb-theme-corporate .ql-snow.ql-toolbar button:hover .ql-stroke,.nb-theme-corporate .ql-snow .ql-toolbar button:hover .ql-stroke,.nb-theme-corporate .ql-snow.ql-toolbar button:focus .ql-stroke,.nb-theme-corporate .ql-snow .ql-toolbar button:focus .ql-stroke,.nb-theme-corporate .ql-snow.ql-toolbar button.ql-active .ql-stroke,.nb-theme-corporate .ql-snow .ql-toolbar button.ql-active .ql-stroke,.nb-theme-corporate .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,.nb-theme-corporate .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,.nb-theme-corporate .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,.nb-theme-corporate .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,.nb-theme-corporate .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,.nb-theme-corporate .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,.nb-theme-corporate .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.nb-theme-corporate .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.nb-theme-corporate .ql-snow.ql-toolbar button:hover .ql-stroke-miter,.nb-theme-corporate .ql-snow .ql-toolbar button:hover .ql-stroke-miter,.nb-theme-corporate .ql-snow.ql-toolbar button:focus .ql-stroke-miter,.nb-theme-corporate .ql-snow .ql-toolbar button:focus .ql-stroke-miter,.nb-theme-corporate .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,.nb-theme-corporate .ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,.nb-theme-corporate .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.nb-theme-corporate .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.nb-theme-corporate .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.nb-theme-corporate .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.nb-theme-corporate .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.nb-theme-corporate .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.nb-theme-corporate .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.nb-theme-corporate .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter{stroke:#06c}@media (pointer: coarse){.nb-theme-corporate .ql-snow.ql-toolbar button:hover:not(.ql-active),.nb-theme-corporate .ql-snow .ql-toolbar button:hover:not(.ql-active){color:#222b45}.nb-theme-corporate .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,.nb-theme-corporate .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,.nb-theme-corporate .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,.nb-theme-corporate .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill{fill:#222b45}.nb-theme-corporate .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,.nb-theme-corporate .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,.nb-theme-corporate .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,.nb-theme-corporate .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter{stroke:#222b45}}.nb-theme-corporate .ql-snow{box-sizing:border-box}.nb-theme-corporate .ql-snow *{box-sizing:border-box}.nb-theme-corporate .ql-snow .ql-hidden{display:none}.nb-theme-corporate .ql-snow .ql-out-bottom,.nb-theme-corporate .ql-snow .ql-out-top{visibility:hidden}.nb-theme-corporate .ql-snow .ql-tooltip{position:absolute;transform:translateY(10px)}.nb-theme-corporate .ql-snow .ql-tooltip a{cursor:pointer;text-decoration:none}.nb-theme-corporate .ql-snow .ql-tooltip.ql-flip{transform:translateY(-10px)}.nb-theme-corporate .ql-snow .ql-formats{display:inline-block;vertical-align:middle}.nb-theme-corporate .ql-snow .ql-formats:after{clear:both;content:\"\";display:table}.nb-theme-corporate .ql-snow .ql-stroke{fill:none;stroke:#222b45;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.nb-theme-corporate .ql-snow .ql-stroke-miter{fill:none;stroke:#222b45;stroke-miterlimit:10;stroke-width:2}.nb-theme-corporate .ql-snow .ql-fill,.nb-theme-corporate .ql-snow .ql-stroke.ql-fill{fill:#222b45}.nb-theme-corporate .ql-snow .ql-empty{fill:none}.nb-theme-corporate .ql-snow .ql-even{fill-rule:evenodd}.nb-theme-corporate .ql-snow .ql-thin,.nb-theme-corporate .ql-snow .ql-stroke.ql-thin{stroke-width:1}.nb-theme-corporate .ql-snow .ql-transparent{opacity:.4}.nb-theme-corporate .ql-snow .ql-direction svg:last-child{display:none}.nb-theme-corporate .ql-snow .ql-direction.ql-active svg:last-child{display:inline}.nb-theme-corporate .ql-snow .ql-direction.ql-active svg:first-child{display:none}.nb-theme-corporate .ql-snow .ql-editor h1{font-size:2em}.nb-theme-corporate .ql-snow .ql-editor h2{font-size:1.5em}.nb-theme-corporate .ql-snow .ql-editor h3{font-size:1.17em}.nb-theme-corporate .ql-snow .ql-editor h4{font-size:1em}.nb-theme-corporate .ql-snow .ql-editor h5{font-size:.83em}.nb-theme-corporate .ql-snow .ql-editor h6{font-size:.67em}.nb-theme-corporate .ql-snow .ql-editor a{text-decoration:underline}.nb-theme-corporate .ql-snow .ql-editor blockquote{border-left:4px solid #e4e9f2;margin-bottom:5px;margin-top:5px;padding-left:16px}.nb-theme-corporate .ql-snow .ql-editor code,.nb-theme-corporate .ql-snow .ql-editor pre{background-color:#f0f0f0;border-radius:3px}.nb-theme-corporate .ql-snow .ql-editor pre{white-space:pre-wrap;margin-bottom:5px;margin-top:5px;padding:5px 10px}.nb-theme-corporate .ql-snow .ql-editor code{font-size:85%;padding:2px 4px}.nb-theme-corporate .ql-snow .ql-editor pre.ql-syntax{background-color:#23241f;color:#f8f8f2;overflow:visible}.nb-theme-corporate .ql-snow .ql-editor img{max-width:100%}.nb-theme-corporate .ql-snow .ql-picker{color:#222b45;display:inline-block;float:left;font-size:14px;font-weight:500;height:24px;position:relative;vertical-align:middle}.nb-theme-corporate .ql-snow .ql-picker-label{cursor:pointer;display:inline-block;height:100%;padding-left:8px;padding-right:2px;position:relative;width:100%}.nb-theme-corporate .ql-snow .ql-picker-label:before{display:inline-block;line-height:22px}.nb-theme-corporate .ql-snow .ql-picker-options{background-color:#fff;display:none;min-width:100%;padding:4px 8px;position:absolute;white-space:nowrap}.nb-theme-corporate .ql-snow .ql-picker-options .ql-picker-item{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px}.nb-theme-corporate .ql-snow .ql-picker.ql-expanded .ql-picker-label{color:#e4e9f2;z-index:2}.nb-theme-corporate .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill{fill:#e4e9f2}.nb-theme-corporate .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke{stroke:#e4e9f2}.nb-theme-corporate .ql-snow .ql-picker.ql-expanded .ql-picker-options{display:block;margin-top:-1px;top:100%;z-index:1}.nb-theme-corporate .ql-snow .ql-color-picker,.nb-theme-corporate .ql-snow .ql-icon-picker{width:28px}.nb-theme-corporate .ql-snow .ql-color-picker .ql-picker-label,.nb-theme-corporate .ql-snow .ql-icon-picker .ql-picker-label{padding:2px 4px}.nb-theme-corporate .ql-snow .ql-color-picker .ql-picker-label svg,.nb-theme-corporate .ql-snow .ql-icon-picker .ql-picker-label svg{right:4px}.nb-theme-corporate .ql-snow .ql-icon-picker .ql-picker-options{padding:4px 0}.nb-theme-corporate .ql-snow .ql-icon-picker .ql-picker-item{height:24px;width:24px;padding:2px 4px}.nb-theme-corporate .ql-snow .ql-color-picker .ql-picker-options{padding:3px 5px;width:152px}.nb-theme-corporate .ql-snow .ql-color-picker .ql-picker-item{border:1px solid transparent;float:left;height:16px;margin:2px;padding:0;width:16px}.nb-theme-corporate .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg{position:absolute;margin-top:-9px;right:0;top:50%;width:18px}.nb-theme-corporate .ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=\"\"]):before,.nb-theme-corporate .ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=\"\"]):before,.nb-theme-corporate .ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=\"\"]):before,.nb-theme-corporate .ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=\"\"]):before,.nb-theme-corporate .ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=\"\"]):before,.nb-theme-corporate .ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=\"\"]):before{content:attr(data-label)}.nb-theme-corporate .ql-snow .ql-picker.ql-header{width:98px}.nb-theme-corporate .ql-snow .ql-picker.ql-header .ql-picker-label:before,.nb-theme-corporate .ql-snow .ql-picker.ql-header .ql-picker-item:before{content:\"Normal\"}.nb-theme-corporate .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]:before,.nb-theme-corporate .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]:before{content:\"Heading 1\"}.nb-theme-corporate .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]:before,.nb-theme-corporate .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]:before{content:\"Heading 2\"}.nb-theme-corporate .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]:before,.nb-theme-corporate .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]:before{content:\"Heading 3\"}.nb-theme-corporate .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]:before,.nb-theme-corporate .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]:before{content:\"Heading 4\"}.nb-theme-corporate .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]:before,.nb-theme-corporate .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]:before{content:\"Heading 5\"}.nb-theme-corporate .ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]:before,.nb-theme-corporate .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]:before{content:\"Heading 6\"}.nb-theme-corporate .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]:before{font-size:2em}.nb-theme-corporate .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]:before{font-size:1.5em}.nb-theme-corporate .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]:before{font-size:1.17em}.nb-theme-corporate .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]:before{font-size:1em}.nb-theme-corporate .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]:before{font-size:.83em}.nb-theme-corporate .ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]:before{font-size:.67em}.nb-theme-corporate .ql-snow .ql-picker.ql-font{width:108px}.nb-theme-corporate .ql-snow .ql-picker.ql-font .ql-picker-label:before,.nb-theme-corporate .ql-snow .ql-picker.ql-font .ql-picker-item:before{content:\"Sans Serif\"}.nb-theme-corporate .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]:before,.nb-theme-corporate .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]:before{content:\"Serif\"}.nb-theme-corporate .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]:before,.nb-theme-corporate .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]:before{content:\"Monospace\"}.nb-theme-corporate .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]:before{font-family:Georgia,Times New Roman,serif}.nb-theme-corporate .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]:before{font-family:Monaco,Courier New,monospace}.nb-theme-corporate .ql-snow .ql-picker.ql-size{width:98px}.nb-theme-corporate .ql-snow .ql-picker.ql-size .ql-picker-label:before,.nb-theme-corporate .ql-snow .ql-picker.ql-size .ql-picker-item:before{content:\"Normal\"}.nb-theme-corporate .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]:before,.nb-theme-corporate .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]:before{content:\"Small\"}.nb-theme-corporate .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]:before,.nb-theme-corporate .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]:before{content:\"Large\"}.nb-theme-corporate .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]:before,.nb-theme-corporate .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]:before{content:\"Huge\"}.nb-theme-corporate .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]:before{font-size:10px}.nb-theme-corporate .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]:before{font-size:18px}.nb-theme-corporate .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]:before{font-size:32px}.nb-theme-corporate .ql-snow .ql-color-picker.ql-background .ql-picker-item{background-color:#fff}.nb-theme-corporate .ql-snow .ql-color-picker.ql-color .ql-picker-item{background-color:#000}.nb-theme-corporate .ql-toolbar.ql-snow{border:1px solid #e4e9f2;border-top-right-radius:.25rem;border-top-left-radius:.25rem;box-sizing:border-box;font-family:\"Helvetica Neue\",\"Helvetica\",\"Arial\",sans-serif;padding:8px}.nb-theme-corporate .ql-toolbar.ql-snow .ql-formats{margin-right:15px}.nb-theme-corporate .ql-toolbar.ql-snow .ql-picker-label{border:1px solid transparent}.nb-theme-corporate .ql-toolbar.ql-snow .ql-picker-options{border:1px solid transparent;box-shadow:#0003 0 2px 8px}.nb-theme-corporate .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label{border-color:#e4e9f2}.nb-theme-corporate .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options{border-color:#e4e9f2}.nb-theme-corporate .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,.nb-theme-corporate .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover{border-color:#000}.nb-theme-corporate .ql-toolbar.ql-snow+.ql-container.ql-snow{border-top:0px}.nb-theme-corporate .ql-snow .ql-tooltip{background-color:#fff;border:1px solid #e4e9f2;box-shadow:0 0 5px #ddd;color:#222b45;padding:5px 12px;white-space:nowrap}.nb-theme-corporate .ql-snow .ql-tooltip:before{content:\"Visit URL:\";line-height:26px;margin-right:8px}.nb-theme-corporate .ql-snow .ql-tooltip input[type=text]{display:none;border:1px solid #e4e9f2;font-size:13px;height:26px;margin:0;padding:3px 5px;width:170px}.nb-theme-corporate .ql-snow .ql-tooltip a.ql-preview{display:inline-block;max-width:200px;overflow-x:hidden;text-overflow:ellipsis;vertical-align:top}.nb-theme-corporate .ql-snow .ql-tooltip a.ql-action:after{border-right:1px solid #e4e9f2;content:\"Edit\";margin-left:16px;padding-right:8px}.nb-theme-corporate .ql-snow .ql-tooltip a.ql-remove:before{content:\"Remove\";margin-left:8px}.nb-theme-corporate .ql-snow .ql-tooltip a{line-height:26px}.nb-theme-corporate .ql-snow .ql-tooltip.ql-editing a.ql-preview,.nb-theme-corporate .ql-snow .ql-tooltip.ql-editing a.ql-remove{display:none}.nb-theme-corporate .ql-snow .ql-tooltip.ql-editing input[type=text]{display:inline-block}.nb-theme-corporate .ql-snow .ql-tooltip.ql-editing a.ql-action:after{border-right:0px;content:\"Save\";padding-right:0}.nb-theme-corporate .ql-snow .ql-tooltip[data-mode=link]:before{content:\"Enter link:\"}.nb-theme-corporate .ql-snow .ql-tooltip[data-mode=formula]:before{content:\"Enter formula:\"}.nb-theme-corporate .ql-snow .ql-tooltip[data-mode=video]:before{content:\"Enter video:\"}.nb-theme-corporate .ql-snow a{color:#06c}.nb-theme-corporate .ql-container.ql-snow{border:1px solid #e4e9f2;border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.nb-theme-corporate .hasErrors .ql-toolbar.ql-snow{color:#ff3d71!important;border-top:1px solid #ff3d71!important;border-left:1px solid #ff3d71!important;border-right:1px solid #ff3d71!important;border-bottom:0px!important}.nb-theme-corporate .hasErrors .ql-container.ql-snow{border-top:1px solid #ff3d71!important;border-left:1px solid #ff3d71!important;border-right:1px solid #ff3d71!important;border-bottom:1px solid #ff3d71!important}\n"], components: [{ type: DoContainerOutletComponent, selector: "do-container-outlet", inputs: ["name", "label", "colLabel", "colContent", "nolabel", "dividerlabel", "required", "hasErrors", "errorMessages", "warnMessage", "paramError", "skeleton", "show"] }, { type: i3$1.QuillEditorComponent, selector: "quill-editor" }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], pipes: { "translate": i5.TranslatePipe }, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoTextEditorComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-text-editor',
                    templateUrl: 'do-text-editor.component.html',
                    styleUrls: ['./do-text-editor.component.scss'],
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [LOCALE_ID]
                }] }]; }, propDecorators: { placeholder: [{
                type: Input
            }], colLabel: [{
                type: Input
            }], colInput: [{
                type: Input
            }], minLength: [{
                type: Input
            }], maxLength: [{
                type: Input
            }], height: [{
                type: Input
            }] } });

class DoTextareaComponent extends ValueAccessorDirective {
    constructor(ngControl, locale) {
        super(ngControl, locale);
        this.locale = locale;
        this.colLabel = 3;
        this.colInput = 9;
        this.minLength = 0;
        this.maxLength = 250;
        this.height = 120;
    }
    onInit() {
        this.paramError = {
            value: this.minLength,
        };
    }
    ngOnDestroy() { }
}
DoTextareaComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoTextareaComponent, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: LOCALE_ID }], target: i0.ɵɵFactoryTarget.Component });
DoTextareaComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoTextareaComponent, selector: "do-textarea", inputs: { placeholder: "placeholder", colLabel: "colLabel", colInput: "colInput", minLength: "minLength", maxLength: "maxLength", height: "height" }, usesInheritance: true, ngImport: i0, template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [warnMessage]=\"warnMessage\"\n  [skeleton]=\"skeleton\" [show]=\"show\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <textarea \n      id=\"{{name}}\"\n      [minLength]=\"minLength\"\n      [maxLength]=\"maxLength\"\n      [required]=\"required\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [disabled]=\"disabled\"\n      [ngStyle]=\"{ \n        'width':  '100%',\n        'height':  height + 'px'\n      }\"\n      [ngClass]=\"{\n        'status-danger': hasErrors,\n        'status-success': (hasSuccess && required)\n      }\"\n      (input)=\"onChange($event.target.value)\"\n      (change)=\"onChange($event.target.value)\"\n      (blur)=\"onTouched($event.target.value)\"\n      (focus)=\"onTouched($event.target.value)\"\n      [(ngModel)]=\"value\"\n      nbInput fullWidth>\n    </textarea>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'skeleton': skeleton\n        }\"\n        [ngStyle]=\"{ \n          'width':  '100%',\n          'height':  height + 'px'\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>", styles: [""], components: [{ type: DoContainerOutletComponent, selector: "do-container-outlet", inputs: ["name", "label", "colLabel", "colContent", "nolabel", "dividerlabel", "required", "hasErrors", "errorMessages", "warnMessage", "paramError", "skeleton", "show"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i4.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], pipes: { "translate": i5.TranslatePipe }, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoTextareaComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-textarea',
                    styleUrls: ['./textarea.component.scss'],
                    templateUrl: './textarea.component.html',
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [LOCALE_ID]
                }] }]; }, propDecorators: { placeholder: [{
                type: Input
            }], colLabel: [{
                type: Input
            }], colInput: [{
                type: Input
            }], minLength: [{
                type: Input
            }], maxLength: [{
                type: Input
            }], height: [{
                type: Input
            }] } });

const EDITOR_COMPONENTS = [
    DoTextEditorComponent,
    DoTextareaComponent,
];
class DoEditorModule {
}
DoEditorModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoEditorModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoEditorModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoEditorModule, declarations: [DoTextEditorComponent,
        DoTextareaComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule, i3$1.QuillModule, NbInputModule,
        DoBaseModule], exports: [DoTextEditorComponent,
        DoTextareaComponent] });
DoEditorModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoEditorModule, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            TranslateModule,
            QuillModule.forRoot(),
            NbInputModule,
            DoBaseModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoEditorModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        TranslateModule,
                        QuillModule.forRoot(),
                        NbInputModule,
                        DoBaseModule,
                    ],
                    declarations: [
                        ...EDITOR_COMPONENTS,
                    ],
                    exports: [
                        ...EDITOR_COMPONENTS,
                    ],
                }]
        }] });

class DoCheckboxComponent extends ValueAccessorDirective {
    constructor(ngControl, locale) {
        super(ngControl, locale);
        this.locale = locale;
        this.colLabel = 3;
        this.colInput = 9;
        this.onChecked = new EventEmitter();
    }
    onCheckedChange(item) {
        if (!this.value) {
            this.value = this.data;
        }
        if (Array.isArray(this.value).valueOf()) {
            let isChecked = false;
            Array.from(this.value).forEach((value) => {
                if (value.selected) {
                    isChecked = value.selected;
                }
            });
            if (isChecked) {
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
    }
    writeValue(value) {
        if (value) {
            this.data = value;
        }
        this._value = value;
        this.onChange(this.value);
        const control = this.ngControl.control;
        if (control) {
            control.updateValueAndValidity();
            control.markAsUntouched();
            control.markAsPristine();
        }
    }
}
DoCheckboxComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoCheckboxComponent, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: LOCALE_ID }], target: i0.ɵɵFactoryTarget.Component });
DoCheckboxComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoCheckboxComponent, selector: "do-checkbox", inputs: { colLabel: "colLabel", colInput: "colInput", data: "data" }, outputs: { onChecked: "onChecked" }, usesInheritance: true, ngImport: i0, template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\" \n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [warnMessage]=\"warnMessage\"\n  [skeleton]=\"skeleton\" [show]=\"show\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <nb-checkbox\n      [ngClass]=\"{\n        'do-checkbox': true,\n        'status-danger': hasErrors\n      }\"\n      *ngFor=\"let item of data\"\n      [disabled]=\"item.disabled || disabled\"\n      [(ngModel)]=\"item.selected\"\n      (change)=\"onCheckedChange(item)\">\n      {{item.name | translate}}\n    </nb-checkbox>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>", styles: [".do-checkbox{display:flex;margin:.5rem 0 -.25rem}\n"], components: [{ type: DoContainerOutletComponent, selector: "do-container-outlet", inputs: ["name", "label", "colLabel", "colContent", "nolabel", "dividerlabel", "required", "hasErrors", "errorMessages", "warnMessage", "paramError", "skeleton", "show"] }, { type: i2.NbCheckboxComponent, selector: "nb-checkbox", inputs: ["status", "checked", "disabled", "indeterminate"], outputs: ["checkedChange"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], pipes: { "translate": i5.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoCheckboxComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-checkbox',
                    styleUrls: ['./do-checkbox.component.scss'],
                    templateUrl: './do-checkbox.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [LOCALE_ID]
                }] }]; }, propDecorators: { colLabel: [{
                type: Input
            }], colInput: [{
                type: Input
            }], data: [{
                type: Input
            }], onChecked: [{
                type: Output
            }] } });

const CHECKBOX_COMPONENTS = [
    DoCheckboxComponent,
];
class DoCheckBoxModule {
}
DoCheckBoxModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoCheckBoxModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoCheckBoxModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoCheckBoxModule, declarations: [DoCheckboxComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NbCheckboxModule,
        TranslateModule,
        DoBaseModule], exports: [DoCheckboxComponent] });
DoCheckBoxModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoCheckBoxModule, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            NbCheckboxModule,
            TranslateModule,
            DoBaseModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoCheckBoxModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        NbCheckboxModule,
                        TranslateModule,
                        DoBaseModule,
                    ],
                    declarations: [
                        ...CHECKBOX_COMPONENTS,
                    ],
                    exports: [
                        ...CHECKBOX_COMPONENTS,
                    ],
                }]
        }] });

class DoRadioComponent extends ValueAccessorDirective {
    constructor(ngControl, locale) {
        super(ngControl, locale);
        this.locale = locale;
        this.colLabel = 3;
        this.colInput = 9;
    }
}
DoRadioComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoRadioComponent, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: LOCALE_ID }], target: i0.ɵɵFactoryTarget.Component });
DoRadioComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoRadioComponent, selector: "do-radio", inputs: { placeholder: "placeholder", colLabel: "colLabel", colInput: "colInput", data: "data" }, usesInheritance: true, ngImport: i0, template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\" \n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [warnMessage]=\"warnMessage\"\n  [skeleton]=\"skeleton\" [show]=\"show\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <nb-radio-group\n      [(value)]=\"value\"\n      [name]=\"name\"\n      [disabled]=\"disabled\"\n      #radiogroup>\n      <nb-radio *ngFor=\"let item of data\"\n        [value]=\"item.value\">\n        {{item.name | translate}}\n      </nb-radio>\n    </nb-radio-group>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>", styles: [""], components: [{ type: DoContainerOutletComponent, selector: "do-container-outlet", inputs: ["name", "label", "colLabel", "colContent", "nolabel", "dividerlabel", "required", "hasErrors", "errorMessages", "warnMessage", "paramError", "skeleton", "show"] }, { type: i2.NbRadioGroupComponent, selector: "nb-radio-group", inputs: ["value", "name", "disabled", "status"], outputs: ["valueChange"] }, { type: i2.NbRadioComponent, selector: "nb-radio", inputs: ["status", "name", "checked", "value", "disabled"], outputs: ["valueChange", "blur"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], pipes: { "translate": i5.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoRadioComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-radio',
                    styleUrls: ['./do-radio.component.scss'],
                    templateUrl: './do-radio.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [LOCALE_ID]
                }] }]; }, propDecorators: { placeholder: [{
                type: Input
            }], colLabel: [{
                type: Input
            }], colInput: [{
                type: Input
            }], data: [{
                type: Input
            }] } });

const RADIO_COMPONENTS = [
    DoRadioComponent,
];
class DoRadioModule {
}
DoRadioModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoRadioModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoRadioModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoRadioModule, declarations: [DoRadioComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NbRadioModule,
        TranslateModule,
        DoBaseModule], exports: [DoRadioComponent] });
DoRadioModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoRadioModule, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            NbRadioModule,
            TranslateModule,
            DoBaseModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoRadioModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        NbRadioModule,
                        TranslateModule,
                        DoBaseModule,
                    ],
                    declarations: [
                        ...RADIO_COMPONENTS,
                    ],
                    exports: [
                        ...RADIO_COMPONENTS,
                    ],
                }]
        }] });

class DoDatePickerComponent extends ValueAccessorDirective {
    constructor(ngControl, dateService, locale) {
        super(ngControl, locale);
        this.dateService = dateService;
        this.locale = locale;
        this.colLabel = 3;
        this.colInput = 9;
        this.size = NbCalendarSize.MEDIUM;
        this.dateMask = [/[0-3]/, /\d/, '/', /[0-1]/, /\d/, '/', /[1-3]/, /\d/, /\d/, /\d/];
        this.pattern = DatePattern.SLASH_DDMMYYYY;
    }
    get value() { return this._value; }
    set value(value) {
        if (this._value !== value) {
            this._value = value;
            this.onChange(formatDate(value, this.format, this.locale));
            const control = this.ngControl.control;
            if (control) {
                control.updateValueAndValidity();
                control.markAsTouched();
                control.markAsDirty();
            }
        }
    }
    writeValue(value) {
        let date = null;
        if (value) {
            if (String(value).match(this.pattern)) {
                const dateParse = this.parse(value);
                if (!isNaN(Date.parse(dateParse))) {
                    date = new Date(dateParse);
                }
            }
            this._value = date;
            this.onChange(value);
            const control = this.ngControl.control;
            if (control) {
                control.updateValueAndValidity();
                control.markAsUntouched();
                control.markAsPristine();
            }
        }
    }
    /**
     * Parsing from String to Date, not return format date
     */
    parse(value) {
        const year = String(value).split('/')[2];
        const month = String(value).split('/')[1];
        const day = String(value).split('/')[0];
        return year + '/' + month + '/' + day;
    }
}
DoDatePickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoDatePickerComponent, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: i2.NbDateService }, { token: LOCALE_ID }], target: i0.ɵɵFactoryTarget.Component });
DoDatePickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoDatePickerComponent, selector: "do-datepicker", inputs: { placeholder: "placeholder", colLabel: "colLabel", colInput: "colInput", min: "min", max: "max", size: "size", dateMask: "dateMask" }, usesInheritance: true, ngImport: i0, template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\" \n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [warnMessage]=\"warnMessage\"\n  [skeleton]=\"skeleton\" [show]=\"show\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <input\n      id=\"{{name}}\"\n      [pattern]=\"pattern\"\n      [do-mask]=\"{mask: dateMask, guide: false}\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled || skeleton\"\n      [ngClass]=\"{\n        'status-danger': hasErrors,\n        'status-success': hasSuccess\n      }\"\n      (input)=\"onChange($event.target.value)\"\n      (change)=\"onChange($event.target.value)\"\n      (blur)=\"onTouched($event.target.value)\"\n      [(ngModel)]=\"value\"\n      [nbDatepicker]=\"dodatepicker\"\n      #input nbInput fullWidth>\n      <nb-datepicker\n        [format]=\"format\"\n        [size]=\"size\"\n        [min]=\"min\"\n        [max]=\"max\"\n        #dodatepicker>\n      </nb-datepicker>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>", styles: [""], components: [{ type: DoContainerOutletComponent, selector: "do-container-outlet", inputs: ["name", "label", "colLabel", "colContent", "nolabel", "dividerlabel", "required", "hasErrors", "errorMessages", "warnMessage", "paramError", "skeleton", "show"] }, { type: i2.NbDatepickerComponent, selector: "nb-datepicker", inputs: ["date"], outputs: ["dateChange"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2.NbDatepickerDirective, selector: "input[nbDatepicker]", inputs: ["nbDatepicker"] }, { type: i1.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { type: MaskedInputDirective, selector: "[do-mask]", inputs: ["do-mask"], exportAs: ["do-mask"] }, { type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], pipes: { "translate": i5.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoDatePickerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-datepicker',
                    styleUrls: ['./do-datepicker.component.scss'],
                    templateUrl: './do-datepicker.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }] }, { type: i2.NbDateService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [LOCALE_ID]
                }] }]; }, propDecorators: { placeholder: [{
                type: Input
            }], colLabel: [{
                type: Input
            }], colInput: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], size: [{
                type: Input
            }], dateMask: [{
                type: Input
            }] } });

class DoDatePickerRangeComponent extends ValueAccessorDirective {
    constructor(ngControl, locale) {
        super(ngControl, locale);
        this.locale = locale;
        this.colLabel = 3;
        this.colInput = 9;
        this.icon = false;
        this.size = NbCalendarSize.MEDIUM;
        this.dateMask = [/[0-3]/, /\d/, '/', /[0-1]/, /\d/, '/', /[1-3]/, /\d/, /\d/, /\d/,
            ' ', '-', ' ',
            /[0-3]/, /\d/, '/', /[0-1]/, /\d/, '/', /[1-3]/, /\d/, /\d/, /\d/];
    }
    get value() { return this._value; }
    set value(value) {
        if (value) {
            if (this._value !== value) {
                if ((value === null || value === void 0 ? void 0 : value.start) && (value === null || value === void 0 ? void 0 : value.end)) {
                    this._value = value;
                    this.onChange({
                        start: formatDate(value === null || value === void 0 ? void 0 : value.start, this.format, this.locale),
                        end: formatDate(value === null || value === void 0 ? void 0 : value.end, this.format, this.locale),
                    });
                    const control = this.ngControl.control;
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
    }
    writeValue(value) {
        if (value) {
            const dates = {};
            const dateStart = new Date(this.parse(value === null || value === void 0 ? void 0 : value.start));
            const dateEnd = new Date(this.parse(value === null || value === void 0 ? void 0 : value.end));
            if (dateStart.getTime() < dateEnd.getTime()) {
                const startDateParse = this.parse(value === null || value === void 0 ? void 0 : value.start);
                if (!isNaN(Date.parse(startDateParse))) {
                    dates['start'] = new Date(startDateParse);
                }
                const endDateParse = this.parse(value === null || value === void 0 ? void 0 : value.end);
                if (!isNaN(Date.parse(endDateParse))) {
                    dates['end'] = new Date(endDateParse);
                }
                this._value = dates;
                this.onChange(dates);
            }
        }
        const control = this.ngControl.control;
        if (control) {
            control.updateValueAndValidity();
            control.markAsUntouched();
            control.markAsPristine();
        }
    }
    onTyped(value) {
        if (value) {
            if (value.includes(' - ')) {
                const arr = value.split(' - ');
                const dateStart = new Date(this.parse(arr[0]));
                const dateEnd = new Date(this.parse(arr[1]));
                if (dateStart.getTime() <= dateEnd.getTime()) {
                    this.onChange({
                        start: formatDate(dateStart, this.format, this.locale),
                        end: formatDate(dateEnd, this.format, this.locale),
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
    }
    enableError() {
        this.ngControl.control.setErrors({ daterange: true });
    }
    disableError() {
        this.ngControl.control.setErrors({ daterange: false });
        this.ngControl.control.updateValueAndValidity();
    }
    /**
     * Parsing from String to Date, not return format date
     */
    parse(value) {
        const year = String(value).split('/')[2];
        const month = String(value).split('/')[1];
        const day = String(value).split('/')[0];
        return year + '/' + month + '/' + day;
    }
}
DoDatePickerRangeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoDatePickerRangeComponent, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: LOCALE_ID }], target: i0.ɵɵFactoryTarget.Component });
DoDatePickerRangeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoDatePickerRangeComponent, selector: "do-datepicker-range", inputs: { placeholder: "placeholder", colLabel: "colLabel", colInput: "colInput", icon: "icon", min: "min", max: "max", size: "size", dateMask: "dateMask" }, usesInheritance: true, ngImport: i0, template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\" \n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [warnMessage]=\"warnMessage\"\n  [skeleton]=\"skeleton\" [show]=\"show\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <input\n      id=\"{{name}}\"\n      [do-mask]=\"{mask: dateMask, guide: false}\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled || skeleton\"\n      [ngClass]=\"{\n        'status-danger': hasErrors,\n        'status-success': hasSuccess\n      }\"\n      (input)=\"onTyped($event.target.value)\"\n      (change)=\"onTyped($event.target.value)\"\n      (blur)=\"onTouched($event.target.value)\"\n      [(ngModel)]=\"value\"\n      [nbDatepicker]=\"rangepicker\"\n      #input nbInput fullWidth>\n      <nb-rangepicker\n        [format]=\"format\"\n        [size]=\"size\"\n        #rangepicker>\n      </nb-rangepicker>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>", styles: [""], components: [{ type: DoContainerOutletComponent, selector: "do-container-outlet", inputs: ["name", "label", "colLabel", "colContent", "nolabel", "dividerlabel", "required", "hasErrors", "errorMessages", "warnMessage", "paramError", "skeleton", "show"] }, { type: i2.NbRangepickerComponent, selector: "nb-rangepicker", inputs: ["range"], outputs: ["rangeChange"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2.NbDatepickerDirective, selector: "input[nbDatepicker]", inputs: ["nbDatepicker"] }, { type: MaskedInputDirective, selector: "[do-mask]", inputs: ["do-mask"], exportAs: ["do-mask"] }, { type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], pipes: { "translate": i5.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoDatePickerRangeComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-datepicker-range',
                    styleUrls: ['./do-datepicker-range.component.scss'],
                    templateUrl: './do-datepicker-range.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [LOCALE_ID]
                }] }]; }, propDecorators: { placeholder: [{
                type: Input
            }], colLabel: [{
                type: Input
            }], colInput: [{
                type: Input
            }], icon: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], size: [{
                type: Input
            }], dateMask: [{
                type: Input
            }] } });

const DATEPICKER_COMPONENTS = [
    DoDatePickerComponent,
    DoDatePickerRangeComponent,
];
class DoDatePickerModule {
}
DoDatePickerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoDatePickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoDatePickerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoDatePickerModule, declarations: [DoDatePickerComponent,
        DoDatePickerRangeComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NbInputModule, i2.NbDatepickerModule, NbMomentDateModule, i2$2.NbDateFnsDateModule, TranslateModule,
        DoBaseModule], exports: [DoDatePickerComponent,
        DoDatePickerRangeComponent] });
DoDatePickerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoDatePickerModule, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            NbInputModule,
            NbDatepickerModule.forRoot(),
            NbMomentDateModule,
            NbDateFnsDateModule.forChild({
                format: DateFormat.DATE,
                parseOptions: {
                    locale: id,
                    awareOfUnicodeTokens: true,
                },
                formatOptions: {
                    locale: id,
                    awareOfUnicodeTokens: true,
                },
            }),
            TranslateModule,
            DoBaseModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoDatePickerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        NbInputModule,
                        NbDatepickerModule.forRoot(),
                        NbMomentDateModule,
                        NbDateFnsDateModule.forChild({
                            format: DateFormat.DATE,
                            parseOptions: {
                                locale: id,
                                awareOfUnicodeTokens: true,
                            },
                            formatOptions: {
                                locale: id,
                                awareOfUnicodeTokens: true,
                            },
                        }),
                        TranslateModule,
                        DoBaseModule,
                    ],
                    declarations: [
                        ...DATEPICKER_COMPONENTS,
                    ],
                    exports: [
                        ...DATEPICKER_COMPONENTS,
                    ],
                }]
        }] });

class ImageUploadComponent extends ValueAccessorDirective {
    constructor(ngControl, locale, dom) {
        super(ngControl, locale);
        this.locale = locale;
        this.dom = dom;
        this.onPreview = new EventEmitter();
        this.radius = 0;
        this.buttonUpload = true;
        this.skeleton = false;
        this.imageDefault = `${document.getElementsByTagName('base')[0].href}assets/images/avatars/default.png`;
    }
    set uploadFn(finish) {
        if (finish) {
            this.ngControl.control.markAsPristine();
            this.ngControl.control.markAsUntouched();
        }
    }
    writeValue(value) {
        if (value instanceof File) {
            this.image = URL.createObjectURL(value);
            this.value = value;
            this.onChange(this.value);
        }
        else {
            this.image = value;
        }
    }
    upload(files) {
        if (files.length) {
            this.value = files[0];
            this.image = URL.createObjectURL(this.value);
            this.onPreview.emit(this.value);
        }
        const control = this.ngControl.control;
        if (control) {
            control.updateValueAndValidity();
            control.markAsTouched();
            control.markAsDirty();
        }
    }
    ngOnDestroy() { }
    onInit() { }
}
ImageUploadComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ImageUploadComponent, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: LOCALE_ID }, { token: i2$3.DomSanitizer }], target: i0.ɵɵFactoryTarget.Component });
ImageUploadComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ImageUploadComponent, selector: "do-image-upload", inputs: { image: "image", height: "height", width: "width", radius: "radius", buttonUpload: "buttonUpload", skeleton: "skeleton", uploadFn: "uploadFn" }, outputs: { onPreview: "onPreview" }, usesInheritance: true, ngImport: i0, template: "<div class=\"body-upload\">\n  <div *ngIf=\"!skeleton; else contentskeleton\"\n    class=\"upload-container\"\n    (click)=\"img.click()\"\n    doDragDrop\n    (onFileDropped)=\"upload($event)\"\n    [ngClass]=\"{\n      'full-file': image,\n      'empty-file': !image\n    }\"\n    [ngStyle]=\"{ \n      'background-image': 'url(' + (image) + ')',\n      'height':  height ? height+'rem' : 'calc(80vw/5)',\n      'width':  width ? width+'rem' : 'calc(80vw/5)',\n      'border-radius':  radius + '%'\n    }\">\n    <label *ngIf=\"!image\"\n      class=\"label label-upload\"\n      [ngStyle]=\"{\n        'line-height':  height ? height+'rem' : 'calc(80vw/5)'\n      }\">\n      {{ 'placeholder.image-upload' | translate }}\n    </label>\n    <input\n      hidden\n      type=\"file\"\n      accept=\"image/png, image/jpeg, image/jpg\"\n      (change)=\"upload($event.target.files)\"\n      #img>\n  </div>\n  <ng-template #contentskeleton>\n    <div\n      [ngClass]=\"{\n        'skeleton': skeleton\n      }\"\n      [ngStyle]=\"{ \n        'height':  height ? height+'rem' : 'calc(80vw/5)',\n        'width':  width ? width+'rem' : 'calc(80vw/5)',\n        'border-radius':  radius + '%',\n        'margin': '0.5rem auto'\n      }\">\n    </div>\n  </ng-template>\n</div>", styles: [".nb-theme-default .upload-container{background-repeat:no-repeat;background-size:cover;margin:.5rem auto}.nb-theme-default .empty-file{background-color:#edf1f7!important;outline:.125rem dashed #8f9bb3;outline-offset:-.4rem}.nb-theme-default .full-file{background-color:#fff!important;outline:.1rem solid #8f9bb3}.nb-theme-default .label-upload{display:flex;align-items:center;justify-content:center}.nb-theme-default .upload-container:hover{cursor:pointer}.nb-theme-default .body-upload{margin:.5rem;display:flex;justify-content:center;align-items:center}@media (max-width: 399.98px){.nb-theme-default .upload-container{height:10rem!important;width:10rem!important;border-radius:50%}.nb-theme-default .label-upload{line-height:10rem!important}.nb-theme-default .skeleton{height:10rem!important;width:10rem!important;border-radius:50%}}.nb-theme-dark .upload-container{background-repeat:no-repeat;background-size:cover;margin:.5rem auto}.nb-theme-dark .empty-file{background-color:#151a30!important;outline:.125rem dashed #8f9bb3;outline-offset:-.4rem}.nb-theme-dark .full-file{background-color:#222b45!important;outline:.1rem solid #8f9bb3}.nb-theme-dark .label-upload{display:flex;align-items:center;justify-content:center}.nb-theme-dark .upload-container:hover{cursor:pointer}.nb-theme-dark .body-upload{margin:.5rem;display:flex;justify-content:center;align-items:center}@media (max-width: 399.98px){.nb-theme-dark .upload-container{height:10rem!important;width:10rem!important;border-radius:50%}.nb-theme-dark .label-upload{line-height:10rem!important}.nb-theme-dark .skeleton{height:10rem!important;width:10rem!important;border-radius:50%}}.nb-theme-cosmic .upload-container{background-repeat:no-repeat;background-size:cover;margin:.5rem auto}.nb-theme-cosmic .empty-file{background-color:#1b1b38!important;outline:.125rem dashed #8f9bb3;outline-offset:-.4rem}.nb-theme-cosmic .full-file{background-color:#323259!important;outline:.1rem solid #8f9bb3}.nb-theme-cosmic .label-upload{display:flex;align-items:center;justify-content:center}.nb-theme-cosmic .upload-container:hover{cursor:pointer}.nb-theme-cosmic .body-upload{margin:.5rem;display:flex;justify-content:center;align-items:center}@media (max-width: 399.98px){.nb-theme-cosmic .upload-container{height:10rem!important;width:10rem!important;border-radius:50%}.nb-theme-cosmic .label-upload{line-height:10rem!important}.nb-theme-cosmic .skeleton{height:10rem!important;width:10rem!important;border-radius:50%}}.nb-theme-corporate .upload-container{background-repeat:no-repeat;background-size:cover;margin:.5rem auto}.nb-theme-corporate .empty-file{background-color:#edf1f7!important;outline:.125rem dashed #8f9bb3;outline-offset:-.4rem}.nb-theme-corporate .full-file{background-color:#fff!important;outline:.1rem solid #8f9bb3}.nb-theme-corporate .label-upload{display:flex;align-items:center;justify-content:center}.nb-theme-corporate .upload-container:hover{cursor:pointer}.nb-theme-corporate .body-upload{margin:.5rem;display:flex;justify-content:center;align-items:center}@media (max-width: 399.98px){.nb-theme-corporate .upload-container{height:10rem!important;width:10rem!important;border-radius:50%}.nb-theme-corporate .label-upload{line-height:10rem!important}.nb-theme-corporate .skeleton{height:10rem!important;width:10rem!important;border-radius:50%}}\n"], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: DragDropDirective, selector: "[doDragDrop]", inputs: ["opacity"], outputs: ["onFileDropped"] }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], pipes: { "translate": i5.TranslatePipe }, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ImageUploadComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-image-upload',
                    styleUrls: ['./image-upload.component.scss'],
                    templateUrl: './image-upload.component.html',
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [LOCALE_ID]
                }] }, { type: i2$3.DomSanitizer }]; }, propDecorators: { onPreview: [{
                type: Output
            }], image: [{
                type: Input
            }], height: [{
                type: Input
            }], width: [{
                type: Input
            }], radius: [{
                type: Input
            }], buttonUpload: [{
                type: Input
            }], skeleton: [{
                type: Input
            }], uploadFn: [{
                type: Input
            }] } });

const IMAGE_COMPONENTS = [
    ImageUploadComponent,
];
class DoImageModule {
}
DoImageModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoImageModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoImageModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoImageModule, declarations: [ImageUploadComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        NbButtonModule,
        NbIconModule,
        DoBaseModule], exports: [ImageUploadComponent] });
DoImageModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoImageModule, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            TranslateModule,
            NbButtonModule,
            NbIconModule,
            DoBaseModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoImageModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        TranslateModule,
                        NbButtonModule,
                        NbIconModule,
                        DoBaseModule,
                    ],
                    declarations: [
                        ...IMAGE_COMPONENTS,
                    ],
                    exports: [
                        ...IMAGE_COMPONENTS,
                    ],
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
    return stepData.find(data => data.path === path);
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
    const path = url.split('/').pop().split('?')[0];
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

class DoWizardError extends Error {
    constructor(type, message) {
        super(message);
        this.wizardComponentName = '';
        this.wizardPath = '';
        this.stepComponentName = '';
        this.type = type;
    }
}
class NoWizardRoute extends DoWizardError {
    constructor(wizardComponentName) {
        super(DoWizardErrorType.NO_WIZARD_ROUTE, `No route configuration for the ${wizardComponentName} found.`);
        this.wizardComponentName = wizardComponentName;
    }
}
class NoChildRoutes extends DoWizardError {
    constructor(wizardComponentName, wizardPath) {
        super(DoWizardErrorType.NO_CHILD_ROUTES, `No child routes for the ${wizardComponentName} found.`);
        this.wizardComponentName = wizardComponentName;
        this.wizardPath = wizardPath;
    }
}
class NoWsInterface extends DoWizardError {
    constructor(stepComponentName) {
        super(DoWizardErrorType.NO_WS_INTERFACE, `The ${stepComponentName} does not extend the NgWizardStep class or implement the NgWizardStepInterface.`);
        this.stepComponentName = stepComponentName;
    }
}

class DoWizardService {
    constructor(router) {
        this.router = router;
        this.stepData = [];
        this.formGroup = new FormGroup({});
        this.stepDataChanges = new BehaviorSubject([]);
    }
    setFormGroup(formGroup) {
        this.formGroup = formGroup;
    }
    getFormGroup() {
        return this.formGroup;
    }
    formIsValid() {
        return this.currentComponent.isValid();
    }
    /**
     * Initializes the wizard by parsing the wizard's child routes found in Angular's router config
     * into a list of NgWizardStepData.
     * @param wizardName The unique name of the wizard
     */
    loadWizardRoutes(wizardName) {
        this.wizardRoute = this.getWizardRoute(wizardName);
        if (!this.wizardRoute) {
            throw new NoWizardRoute(wizardName);
        }
        this.wizardOptions = mergeWizardOptions(this.wizardRoute.data);
        this.loadChildRoutes(this.wizardRoute);
    }
    /**
     * Checks and stores the currently displayed component.
     * @param componentRef A reference to the currently displayed component
     */
    registerActiveComponent(componentRef) {
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
    }
    /**
     * Calls the current component's wsOnPrevious() or wsOnNext()) methods and navigates to the given
     * step if the component does not abort or its state is invalid (for next navigation).
     *
     * @param stepData The NgWizardStepData of the the step to navigate to
     */
    navigateToStep(stepData) {
        let goAhead;
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
        const routeFragment = this.router.url.split('/');
        routeFragment.pop();
        routeFragment.push(stepData.path);
        const stepPath = routeFragment.join('/');
        if (stepData.options.cleanQueryParameters) {
            return this.router.navigate([stepPath], { queryParams: {} });
        }
        return this.router.navigate([stepPath], { queryParamsHandling: 'merge' });
    }
    /**
     * Utility method to navigate to the next step.
     */
    navigateToNextStep() {
        const nextStepData = getStepDataForPath(this.stepData, this.currentStepData.nextStep);
        return this.navigateToStep(nextStepData);
    }
    /**
     * Utility method to navigate to the previous step.
     */
    navigateToPreviousStep() {
        const previousStepData = getStepDataForPath(this.stepData, this.currentStepData.previousStep);
        return this.navigateToStep(previousStepData);
    }
    /**
     * Utility method to navigate to a specific route path (external to the wizard)
     */
    navigateToPath(path) {
        return this.router.navigate([path], { queryParamsHandling: 'merge' });
    }
    /**
     * Returns the step data changes as an observable.
     */
    getStepDataChangesAsObservable() {
        return this.stepDataChanges.asObservable();
    }
    /**
     * Returns the current step data as an observable.
     */
    // TODO: Write a unit test for this method
    getCurrentStepDataAsObservable() {
        return this.getStepDataChangesAsObservable().pipe(map((stepDatas) => stepDatas.find((stepData) => stepData.isCurrent)));
    }
    /**
     * Returns the Angular Route for the wizard component found in Angular's router config.
     * @param wizardName The unique name of the wizard
     */
    getWizardRoute(wizardName) {
        const wizardRoutes = this.getAllWizardRoutes(this.router.config, wizardName);
        return wizardRoutes.find((route) => route.data && route.data.name === wizardName);
    }
    /**
     * From a given array of routes config, returns an array of routes config whose component is wizardComponentName.
     * Recursively look down every children route config
     * @param routes An array of route config
     * @param wizardName The name of the wizard to look for
     */
    getAllWizardRoutes(routes, wizardName) {
        let wizardRoutes = routes.filter((route) => route.data && route.data.name === wizardName);
        // Recursive search in child routes
        routes.filter((route) => route.children && route.children.length > 0).forEach((routeWithChildren) => {
            const childWizardRoutes = this.getAllWizardRoutes(routeWithChildren.children, wizardName);
            wizardRoutes = wizardRoutes.concat(childWizardRoutes);
        });
        // Recursive search in lazily loaded child routes
        routes.filter((route) => { var _a, _b; return ((_b = (_a = route._loadedConfig) === null || _a === void 0 ? void 0 : _a.routes) === null || _b === void 0 ? void 0 : _b.length) > 0; }).forEach((routeWithChildren) => {
            const childWizardRoutes = this.getAllWizardRoutes(routeWithChildren._loadedConfig.routes, wizardName);
            wizardRoutes = wizardRoutes.concat(childWizardRoutes);
        });
        return wizardRoutes;
    }
    /**
     * Parses the child routes of the wizard component route and stores them as a list of
     * NgWizardStepData.
     * @param wizardRoute The Angular Route for the wizard component
     */
    loadChildRoutes(wizardRoute) {
        if (!wizardRoute.children) {
            throw new NoChildRoutes(wizardRoute.component.name, wizardRoute.path);
        }
        const childRoutes = wizardRoute.children.filter((route) => route.component);
        this.stepData = [];
        for (let i = 0; i < childRoutes.length; i++) {
            this.registerStep(i, childRoutes[i], childRoutes[i - 1], childRoutes[i + 1]);
        }
    }
    /**
     * Stores a child route as an NgWizardStepData.
     * @param index The index in the list of child routes
     * @param stepRoute The child route
     * @param previousStep The previous child route (undefined if first child route)
     * @param nextStep The next child route (undefined if last child route)
     */
    registerStep(index, stepRoute, previousStep, nextStep) {
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
    }
    /**
     * Emits a step data change event to the subscribers when the step data changes.
     */
    onStepDataChange() {
        this.stepDataChanges.next(this.stepData);
    }
    /**
     * Sets the isCurrent attribute of all step data to false.
     */
    resetCurrentStep() {
        this.stepData.map((stepData) => {
            stepData.isCurrent = false;
            return stepData;
        });
    }
}
DoWizardService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoWizardService, deps: [{ token: i2$1.Router }], target: i0.ɵɵFactoryTarget.Injectable });
DoWizardService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoWizardService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoWizardService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i2$1.Router }]; } });

class DoWizardErrorComponent {
    constructor() {
        this.DoWizardErrorType = DoWizardErrorType;
    }
}
DoWizardErrorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoWizardErrorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DoWizardErrorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoWizardErrorComponent, selector: "do-wizard-error", inputs: { error: "error" }, ngImport: i0, template: "<div *ngIf=\"error\" class=\"do-wizard-error\">\n  <div [ngSwitch]=\"error.type\" class=\"do-wizard-error-message\">\n\n    <!-- NO_WIZARD_ROUTE error -->\n\n    <span *ngSwitchCase=\"DoWizardErrorType.NO_WIZARD_ROUTE\" class=\"no-wizard-route\">\n      No route configuration for the {{ error.wizardComponentName }} found.<br/>\n      Add a route for the {{ error.wizardComponentName }} to your AppRoutingModule.<br/>\n      <pre>\nconst routes: Routes = [\n    &#123; path: '', component: {{ error.wizardComponentName }} &#125;,\n];\n\n@NgModule(&#123;\n  imports: [RouterModule.forRoot(routes)],\n  exports: [RouterModule]\n&#125;)\nexport class AppRoutingModule &#123; &#125;</pre>\n    </span>\n\n    <!-- NO_CHILD_ROUTES error -->\n\n    <span *ngSwitchCase=\"DoWizardErrorType.NO_CHILD_ROUTES\" class=\"no-child-routes\">\n      No child routes for the {{ error.wizardComponentName }} found.<br/>\n      Add at least one child route for the {{ error.wizardComponentName }} to your AppRoutingModule.<br/>\n      <pre>\n&#123; path: '{{ error.wizardPath }}', component: {{ error.wizardComponentName }}, children: [\n    &#123; path: 'step1', component: Step1Component &#125;,\n    &#123; path: '**', redirectTo: 'step1' &#125;,\n] &#125;,</pre>\n    </span>\n\n    <!-- NO_WS_INTERFACE error -->\n\n    <span *ngSwitchCase=\"DoWizardErrorType.NO_WS_INTERFACE\" class=\"no-ws-interface\">\n      The {{ error.stepComponentName}} does not extend the NgWizardStep class or implement the\n      NgWizardStepInterface.<br/>\n      Extend the NgWizardStep class in your {{ error.stepComponentName}} or implement the\n      NgWizardStepInterface.<br/>\n      <pre>\n@NgComponent(...)\nexport class {{ error.stepComponentName }} extends NgWizardStep &#123;\n    constructor() &#123;\n        super();\n    &#125;\n&#125;</pre><br/>\n      or<br/>\n      <pre>\n@NgComponent(...)\nexport class {{ error.stepComponentName }} implements NgWizardStepInterface &#123;\n    isValid() &#123;\n        return true;\n    &#125;\n    onNext() &#123; &#125;\n    onPrevious() &#123; &#125;\n&#125;</pre>\n    </span>\n\n  </div>\n</div>\n", styles: [".do-wizard-error{border:solid 1px #D71117;border-radius:5px;color:#d71117;padding:10px 10px 0;margin-top:10px}.do-wizard-error .do-wizard-error-message pre{display:inline-block;border-radius:3px;background-color:#dad7c566;color:#4d4d4d;padding:15px}\n"], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i4.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoWizardErrorComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-wizard-error',
                    templateUrl: './do-wizard-error.component.html',
                    styleUrls: ['./do-wizard-error.component.scss']
                }]
        }], propDecorators: { error: [{
                type: Input
            }] } });

class DoWizardNavigationComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.stepData$ = this.service.getStepDataChangesAsObservable();
        this.service.getCurrentStepDataAsObservable().subscribe(stepData => this.currentStepData = stepData);
        this.wizardOptions = this.service.wizardOptions;
    }
    goToStep(stepData) {
        if ((this.currentStepData && this.currentStepData.options && this.currentStepData.options.disableNavigation)
            || stepData.order >= this.currentStepData.order) {
            return;
        }
        this.service.navigateToStep(stepData);
    }
}
DoWizardNavigationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoWizardNavigationComponent, deps: [{ token: DoWizardService }], target: i0.ɵɵFactoryTarget.Component });
DoWizardNavigationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoWizardNavigationComponent, selector: "do-wizard-navigation", ngImport: i0, template: "<div class=\"do-wizard-navigation-container\">\n  <nav class=\"do-wizard-navigation\">\n    <ul class=\"do-wizard-navigation-list\">\n      <li *ngFor=\"let stepData of stepData$ | async\" class=\"do-wizard-navigation-list-item\" (click)=\"goToStep(stepData);\"\n        [ngClass]=\"{\n          'do-wizard-navigation-list-item-first': stepData?.order === 1\n        }\">\n        <div *ngIf=\"stepData?.order < currentStepData?.order\"\n             [ngClass]=\"{\n               'do-wizard-navigation-link': !currentStepData?.options.disableNavigation,\n               'do-wizard-navigation-disabled': currentStepData?.options.disableNavigation\n             }\">\n          <span class=\"do-wizard-navigation-label\">\n            <span [innerHTML]=\"stepData.options.icon || wizardOptions.navBar.icons.previous\" class=\"do-wizard-navigation-icon\"></span>\n            {{ stepData.options.title | translate }}\n          </span>\n        </div>\n\n        <div\n          *ngIf=\"stepData?.order === currentStepData?.order\"\n          class=\"do-wizard-navigation-active\">\n          <span class=\"do-wizard-navigation-label\">\n            <span [innerHTML]=\"stepData.options.icon || wizardOptions.navBar.icons.current\" class=\"do-wizard-navigation-icon\"></span>\n            {{ stepData.options.title | translate }}\n          </span>\n        </div>\n\n        <div *ngIf=\"stepData?.order > currentStepData?.order\"\n             class=\"do-wizard-navigation-disabled\">\n          <span class=\"do-wizard-navigation-label\">\n            <span [innerHTML]=\"stepData.options.icon || wizardOptions.navBar.icons.next\" class=\"do-wizard-navigation-icon\"></span>\n            {{ stepData.options.title | translate }}\n          </span>\n        </div>\n      </li>\n    </ul>\n  </nav>\n</div>\n", styles: [""], directives: [{ type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], pipes: { "async": i4.AsyncPipe, "translate": i5.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoWizardNavigationComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-wizard-navigation',
                    templateUrl: './do-wizard-navigation.component.html',
                    styleUrls: ['./do-wizard-navigation.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: DoWizardService }]; } });

class DoWizardButtonsComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.extra = false;
        this.clearFormOnSubmit = false;
        this.disabled = false;
        this.onNext = new EventEmitter();
        this.onPrevious = new EventEmitter();
        this.onSubmit = new EventEmitter();
    }
    ngOnInit() {
        this.currentStepData$ = this.service.getCurrentStepDataAsObservable();
        this.wizardOptions = this.service.wizardOptions;
    }
    formIsValid() {
        return this.service.formIsValid();
    }
    goToSubmit() {
        if (this.clearFormOnSubmit) {
            this.service.getFormGroup().reset();
        }
        this.onSubmit.emit(this.service.getFormGroup().value);
    }
    goToNextStep() {
        this.onNext.emit(this.service.getFormGroup());
        this.service.navigateToNextStep();
    }
    goToPreviousStep() {
        this.onPrevious.emit(this.service.getFormGroup());
        this.service.navigateToPreviousStep();
    }
    goToCancel(url) {
        this.service.getFormGroup().reset();
        this.router.navigate([url]);
    }
    goToPath(path) {
        this.service.navigateToPath(path);
    }
}
DoWizardButtonsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoWizardButtonsComponent, deps: [{ token: DoWizardService }, { token: i2$1.Router }], target: i0.ɵɵFactoryTarget.Component });
DoWizardButtonsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoWizardButtonsComponent, selector: "do-wizard-buttons", inputs: { extra: "extra", clearFormOnSubmit: "clearFormOnSubmit", disabled: "disabled" }, outputs: { onNext: "onNext", onPrevious: "onPrevious", onSubmit: "onSubmit" }, ngImport: i0, template: "<div class=\"do-wizard-buttons-container\">\n  <div *ngIf=\"currentStepData$ | async as currentStepData\" class=\"do-wizard-buttons\">\n    <button *ngIf=\"!currentStepData.previousStep && !currentStepData.options.buttons?.cancel?.hidden\"\n            (click)=\"goToCancel(wizardOptions.baseUrl)\"\n            status=\"danger\"\n            [disabled]=\"disabled\"\n            class=\"do-wizard-button-previous\"\n            nbButton>\n            {{currentStepData.options.buttons?.cancel?.label || wizardOptions.buttons.cancel.label | translate}}\n    </button>\n    <button *ngIf=\"currentStepData.previousStep && !currentStepData.options.buttons?.previous?.hidden\"\n            (click)=\"goToPreviousStep()\"\n            status=\"danger\"\n            [disabled]=\"disabled\"\n            class=\"do-wizard-button-previous\"\n            nbButton>\n            {{currentStepData.options.buttons?.previous?.label || wizardOptions.buttons.previous.label | translate}}\n    </button>\n    <button *ngIf=\"currentStepData.nextStep && !currentStepData.options.buttons?.next?.hidden\"\n            (click)=\"goToNextStep()\"\n            [disabled]=\"!formIsValid() || disabled\"\n            status=\"primary\"\n            class=\"do-wizard-button-next\"\n            nbButton>\n            {{currentStepData.options.buttons?.next?.label || wizardOptions.buttons.next.label | translate}}\n    </button>\n    <button *ngIf=\"!currentStepData.nextStep && !currentStepData.options.buttons?.finish?.hidden && !extra\"\n            (click)=\"goToSubmit()\"\n            [disabled]=\"!formIsValid() || disabled\"\n            status=\"success\"\n            class=\"do-wizard-button-finish\"\n            nbButton>\n            {{currentStepData.options.buttons?.finish?.label || wizardOptions.buttons.finish.label | translate}}\n    </button>\n    <div class=\"do-wizard-button-right\"  *ngIf=\"!currentStepData.nextStep && extra\">\n      <ng-content select=\"[buttonextra]\"></ng-content>\n    </div>\n  </div>\n</div>\n", styles: [".nb-theme-default :host button[nbButton]{margin:0 .25rem}.nb-theme-default :host .reset-left{margin-right:.25rem}.nb-theme-default :host .submit-right{margin-left:.25rem}.nb-theme-dark :host button[nbButton]{margin:0 .25rem}.nb-theme-dark :host .reset-left{margin-right:.25rem}.nb-theme-dark :host .submit-right{margin-left:.25rem}.nb-theme-cosmic :host button[nbButton]{margin:0 .25rem}.nb-theme-cosmic :host .reset-left{margin-right:.25rem}.nb-theme-cosmic :host .submit-right{margin-left:.25rem}.nb-theme-corporate :host button[nbButton]{margin:0 .25rem}.nb-theme-corporate :host .reset-left{margin-right:.25rem}.nb-theme-corporate :host .submit-right{margin-left:.25rem}\n"], components: [{ type: i2.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], pipes: { "async": i4.AsyncPipe, "translate": i5.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoWizardButtonsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-wizard-buttons',
                    templateUrl: './do-wizard-buttons.component.html',
                    styleUrls: ['./do-wizard-buttons.component.scss'],
                }]
        }], ctorParameters: function () { return [{ type: DoWizardService }, { type: i2$1.Router }]; }, propDecorators: { extra: [{
                type: Input
            }], clearFormOnSubmit: [{
                type: Input
            }], disabled: [{
                type: Input
            }], onNext: [{
                type: Output
            }], onPrevious: [{
                type: Output
            }], onSubmit: [{
                type: Output
            }] } });

class DoWizardComponent {
    constructor(service, route) {
        this.service = service;
        this.route = route;
        this.extra = false;
        this.loading = false;
        this.onNext = new EventEmitter();
        this.onPrevious = new EventEmitter();
        this.onSubmit = new EventEmitter();
        try {
            this.route.data.subscribe(data => {
                this.wizardName = data.name;
            });
            this.service.loadWizardRoutes(this.wizardName);
        }
        catch (error) {
            this.error = error;
        }
    }
    onActivate(componentRef) {
        try {
            this.service.registerActiveComponent(componentRef);
        }
        catch (error) {
            this.error = error;
        }
    }
    goToSubmit(data) {
        this.onSubmit.emit(data);
    }
    goToNextStep() {
        this.onNext.emit(this.service.getFormGroup());
    }
    goToPreviousStep() {
        this.onPrevious.emit(this.service.getFormGroup());
    }
}
DoWizardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoWizardComponent, deps: [{ token: DoWizardService }, { token: i2$1.ActivatedRoute }], target: i0.ɵɵFactoryTarget.Component });
DoWizardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoWizardComponent, selector: "do-wizard", inputs: { extra: "extra", loading: "loading" }, outputs: { onNext: "onNext", onPrevious: "onPrevious", onSubmit: "onSubmit" }, ngImport: i0, template: "<div class=\"animated fadeIn\">\n  <div class=\"do-wizard-container\">\n    <do-wizard-error [error]=\"error\"></do-wizard-error>\n    <do-wizard-navigation></do-wizard-navigation>\n    <div class=\"do-wizard-content-container\">\n      <router-outlet (activate)=\"onActivate($event)\"></router-outlet>\n    </div>\n    <div class=\"do-wizard-footer\">\n      <do-wizard-buttons\n        [extra]=\"extra\"\n        [disabled]=\"loading\"\n        (onNext)=\"goToNextStep()\"\n        (onPrevious)=\"goToPreviousStep()\"\n        (onSubmit)=\"goToSubmit($event)\">\n        <div buttonextra *ngIf=\"extra\">\n          <ng-content select=\"[buttonextra]\"></ng-content>\n        </div>\n      </do-wizard-buttons>\n    </div>\n  </div>\n</div>", styles: [".nb-theme-default .do-wizard-container{position:relative;display:block;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;border-radius:.25rem;border:1px solid #edf1f7;margin-bottom:1.5rem}.nb-theme-default .do-wizard-container .do-wizard-content-container{position:relative;margin:0;padding:1.25rem;border:0 solid #D4D4D4;text-align:left}.nb-theme-default nav.do-wizard-navigation{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;border-bottom:1px solid #dee2e6}.nb-theme-default nav.do-wizard-navigation ul.do-wizard-navigation-list{list-style:none;padding:0;margin:0;width:100%}.nb-theme-default nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item{display:list-item;position:relative;float:left;cursor:pointer;line-height:1.875rem}.nb-theme-default nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div{border:none;text-decoration:none;outline-style:none;background:transparent}.nb-theme-default nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div i.do-wizard-icon{position:relative;top:7px;border:solid 1px #fff;border-radius:50%;padding:5px}.nb-theme-default div.do-wizard-footer{padding:.75rem 1.25rem;background-color:#fff;border-top:1px solid #edf1f7}.nb-theme-default div.do-wizard-buttons-container div.do-wizard-buttons{display:grid;grid-template-columns:1fr 1fr;grid-template-areas:\"btn-left btn-right\"}.nb-theme-default div.do-wizard-buttons-container div.do-wizard-buttons button.do-wizard-button-previous{grid-area:btn-left;justify-self:start}.nb-theme-default div.do-wizard-buttons-container div.do-wizard-buttons button.do-wizard-button-next{grid-area:btn-right;justify-self:end}.nb-theme-default div.do-wizard-buttons-container div.do-wizard-buttons button.do-wizard-button-finish{grid-area:btn-right;justify-self:end}.nb-theme-default div.do-wizard-buttons-container div.do-wizard-buttons div.do-wizard-button-left{grid-area:btn-left;justify-self:start}.nb-theme-default div.do-wizard-buttons-container div.do-wizard-buttons div.do-wizard-button-right{grid-area:btn-right;justify-self:end}@media screen and (max-width: 768px){.nb-theme-default .do-wizard-container li.do-wizard-navigation-list-item{float:none!important;border-right:none!important}}.nb-theme-dark .do-wizard-container{position:relative;display:block;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#222b45;border-radius:.25rem;border:1px solid #151a30;margin-bottom:1.5rem}.nb-theme-dark .do-wizard-container .do-wizard-content-container{position:relative;margin:0;padding:1.25rem;border:0 solid #D4D4D4;text-align:left}.nb-theme-dark nav.do-wizard-navigation{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;border-bottom:1px solid #dee2e6}.nb-theme-dark nav.do-wizard-navigation ul.do-wizard-navigation-list{list-style:none;padding:0;margin:0;width:100%}.nb-theme-dark nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item{display:list-item;position:relative;float:left;cursor:pointer;line-height:1.875rem}.nb-theme-dark nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div{border:none;text-decoration:none;outline-style:none;background:transparent}.nb-theme-dark nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div i.do-wizard-icon{position:relative;top:7px;border:solid 1px #fff;border-radius:50%;padding:5px}.nb-theme-dark div.do-wizard-footer{padding:.75rem 1.25rem;background-color:#222b45;border-top:1px solid #151a30}.nb-theme-dark div.do-wizard-buttons-container div.do-wizard-buttons{display:grid;grid-template-columns:1fr 1fr;grid-template-areas:\"btn-left btn-right\"}.nb-theme-dark div.do-wizard-buttons-container div.do-wizard-buttons button.do-wizard-button-previous{grid-area:btn-left;justify-self:start}.nb-theme-dark div.do-wizard-buttons-container div.do-wizard-buttons button.do-wizard-button-next{grid-area:btn-right;justify-self:end}.nb-theme-dark div.do-wizard-buttons-container div.do-wizard-buttons button.do-wizard-button-finish{grid-area:btn-right;justify-self:end}.nb-theme-dark div.do-wizard-buttons-container div.do-wizard-buttons div.do-wizard-button-left{grid-area:btn-left;justify-self:start}.nb-theme-dark div.do-wizard-buttons-container div.do-wizard-buttons div.do-wizard-button-right{grid-area:btn-right;justify-self:end}@media screen and (max-width: 768px){.nb-theme-dark .do-wizard-container li.do-wizard-navigation-list-item{float:none!important;border-right:none!important}}.nb-theme-cosmic .do-wizard-container{position:relative;display:block;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#323259;border-radius:.25rem;border:1px solid #1b1b38;margin-bottom:1.5rem}.nb-theme-cosmic .do-wizard-container .do-wizard-content-container{position:relative;margin:0;padding:1.25rem;border:0 solid #D4D4D4;text-align:left}.nb-theme-cosmic nav.do-wizard-navigation{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;border-bottom:1px solid #dee2e6}.nb-theme-cosmic nav.do-wizard-navigation ul.do-wizard-navigation-list{list-style:none;padding:0;margin:0;width:100%}.nb-theme-cosmic nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item{display:list-item;position:relative;float:left;cursor:pointer;line-height:1.875rem}.nb-theme-cosmic nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div{border:none;text-decoration:none;outline-style:none;background:transparent}.nb-theme-cosmic nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div i.do-wizard-icon{position:relative;top:7px;border:solid 1px #fff;border-radius:50%;padding:5px}.nb-theme-cosmic div.do-wizard-footer{padding:.75rem 1.25rem;background-color:#323259;border-top:1px solid #1b1b38}.nb-theme-cosmic div.do-wizard-buttons-container div.do-wizard-buttons{display:grid;grid-template-columns:1fr 1fr;grid-template-areas:\"btn-left btn-right\"}.nb-theme-cosmic div.do-wizard-buttons-container div.do-wizard-buttons button.do-wizard-button-previous{grid-area:btn-left;justify-self:start}.nb-theme-cosmic div.do-wizard-buttons-container div.do-wizard-buttons button.do-wizard-button-next{grid-area:btn-right;justify-self:end}.nb-theme-cosmic div.do-wizard-buttons-container div.do-wizard-buttons button.do-wizard-button-finish{grid-area:btn-right;justify-self:end}.nb-theme-cosmic div.do-wizard-buttons-container div.do-wizard-buttons div.do-wizard-button-left{grid-area:btn-left;justify-self:start}.nb-theme-cosmic div.do-wizard-buttons-container div.do-wizard-buttons div.do-wizard-button-right{grid-area:btn-right;justify-self:end}@media screen and (max-width: 768px){.nb-theme-cosmic .do-wizard-container li.do-wizard-navigation-list-item{float:none!important;border-right:none!important}}.nb-theme-corporate .do-wizard-container{position:relative;display:block;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;border-radius:.25rem;border:1px solid #edf1f7;margin-bottom:1.5rem}.nb-theme-corporate .do-wizard-container .do-wizard-content-container{position:relative;margin:0;padding:1.25rem;border:0 solid #D4D4D4;text-align:left}.nb-theme-corporate nav.do-wizard-navigation{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;border-bottom:1px solid #dee2e6}.nb-theme-corporate nav.do-wizard-navigation ul.do-wizard-navigation-list{list-style:none;padding:0;margin:0;width:100%}.nb-theme-corporate nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item{display:list-item;position:relative;float:left;cursor:pointer;line-height:1.875rem}.nb-theme-corporate nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div{border:none;text-decoration:none;outline-style:none;background:transparent}.nb-theme-corporate nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div i.do-wizard-icon{position:relative;top:7px;border:solid 1px #fff;border-radius:50%;padding:5px}.nb-theme-corporate div.do-wizard-footer{padding:.75rem 1.25rem;background-color:#fff;border-top:1px solid #edf1f7}.nb-theme-corporate div.do-wizard-buttons-container div.do-wizard-buttons{display:grid;grid-template-columns:1fr 1fr;grid-template-areas:\"btn-left btn-right\"}.nb-theme-corporate div.do-wizard-buttons-container div.do-wizard-buttons button.do-wizard-button-previous{grid-area:btn-left;justify-self:start}.nb-theme-corporate div.do-wizard-buttons-container div.do-wizard-buttons button.do-wizard-button-next{grid-area:btn-right;justify-self:end}.nb-theme-corporate div.do-wizard-buttons-container div.do-wizard-buttons button.do-wizard-button-finish{grid-area:btn-right;justify-self:end}.nb-theme-corporate div.do-wizard-buttons-container div.do-wizard-buttons div.do-wizard-button-left{grid-area:btn-left;justify-self:start}.nb-theme-corporate div.do-wizard-buttons-container div.do-wizard-buttons div.do-wizard-button-right{grid-area:btn-right;justify-self:end}@media screen and (max-width: 768px){.nb-theme-corporate .do-wizard-container li.do-wizard-navigation-list-item{float:none!important;border-right:none!important}}.nb-theme-default nav.do-wizard-navigation{margin-bottom:0;background-color:#fff;border-bottom:1px solid #edf1f7}.nb-theme-default nav.do-wizard-navigation ul.do-wizard-navigation-list{background:#ffffff;overflow:hidden}.nb-theme-default nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item-first div{padding-left:1.25rem!important}@media (max-width: 767.98px){.nb-theme-default nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div{padding-left:1.25rem!important}}.nb-theme-default nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div{padding:.844rem 0 .844rem 3rem;position:relative;display:block;border:0;border-radius:0;outline-style:none;color:#fff;background:#00d68f}.nb-theme-default nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div:after{content:\"\";display:block;width:0;height:0;border-top:50px solid transparent;border-bottom:50px solid transparent;border-left:30px solid #00d68f;position:absolute;top:50%;margin-top:-50px;left:100%;z-index:2}.nb-theme-default nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div:before{content:\" \";display:block;width:0;height:0;border-top:50px solid transparent;border-bottom:50px solid transparent;border-left:30px solid #e4e9f2;position:absolute;top:50%;margin-top:-50px;margin-left:1px;left:100%;z-index:1}.nb-theme-default nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item:first-child div{padding-left:15px}.nb-theme-default nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div.do-wizard-navigation-active{background:#3366ff!important}.nb-theme-default nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div.do-wizard-navigation-active:after{border-left:30px solid #3366ff!important}.nb-theme-default nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div.do-wizard-navigation-disabled{background:#f7f9fc!important;cursor:not-allowed;color:#8f9bb37a}.nb-theme-default nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div.do-wizard-navigation-disabled:after{border-left:30px solid #f7f9fc!important}.nb-theme-dark nav.do-wizard-navigation{margin-bottom:0;background-color:#222b45;border-bottom:1px solid #151a30}.nb-theme-dark nav.do-wizard-navigation ul.do-wizard-navigation-list{background:#222b45;overflow:hidden}.nb-theme-dark nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item-first div{padding-left:1.25rem!important}@media (max-width: 767.98px){.nb-theme-dark nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div{padding-left:1.25rem!important}}.nb-theme-dark nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div{padding:.844rem 0 .844rem 3rem;position:relative;display:block;border:0;border-radius:0;outline-style:none;color:#fff;background:#00d68f}.nb-theme-dark nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div:after{content:\"\";display:block;width:0;height:0;border-top:50px solid transparent;border-bottom:50px solid transparent;border-left:30px solid #00d68f;position:absolute;top:50%;margin-top:-50px;left:100%;z-index:2}.nb-theme-dark nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div:before{content:\" \";display:block;width:0;height:0;border-top:50px solid transparent;border-bottom:50px solid transparent;border-left:30px solid #101426;position:absolute;top:50%;margin-top:-50px;margin-left:1px;left:100%;z-index:1}.nb-theme-dark nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item:first-child div{padding-left:15px}.nb-theme-dark nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div.do-wizard-navigation-active{background:#3366ff!important}.nb-theme-dark nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div.do-wizard-navigation-active:after{border-left:30px solid #3366ff!important}.nb-theme-dark nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div.do-wizard-navigation-disabled{background:#192038!important;cursor:not-allowed;color:#8f9bb37a}.nb-theme-dark nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div.do-wizard-navigation-disabled:after{border-left:30px solid #192038!important}.nb-theme-cosmic nav.do-wizard-navigation{margin-bottom:0;background-color:#323259;border-bottom:1px solid #1b1b38}.nb-theme-cosmic nav.do-wizard-navigation ul.do-wizard-navigation-list{background:#323259;overflow:hidden}.nb-theme-cosmic nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item-first div{padding-left:1.25rem!important}@media (max-width: 767.98px){.nb-theme-cosmic nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div{padding-left:1.25rem!important}}.nb-theme-cosmic nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div{padding:.844rem 0 .844rem 3rem;position:relative;display:block;border:0;border-radius:0;outline-style:none;color:#fff;background:#00d68f}.nb-theme-cosmic nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div:after{content:\"\";display:block;width:0;height:0;border-top:50px solid transparent;border-bottom:50px solid transparent;border-left:30px solid #00d68f;position:absolute;top:50%;margin-top:-50px;left:100%;z-index:2}.nb-theme-cosmic nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div:before{content:\" \";display:block;width:0;height:0;border-top:50px solid transparent;border-bottom:50px solid transparent;border-left:30px solid #13132b;position:absolute;top:50%;margin-top:-50px;margin-left:1px;left:100%;z-index:1}.nb-theme-cosmic nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item:first-child div{padding-left:15px}.nb-theme-cosmic nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div.do-wizard-navigation-active{background:#a16eff!important}.nb-theme-cosmic nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div.do-wizard-navigation-active:after{border-left:30px solid #a16eff!important}.nb-theme-cosmic nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div.do-wizard-navigation-disabled{background:#252547!important;cursor:not-allowed;color:#b4b4db7a}.nb-theme-cosmic nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div.do-wizard-navigation-disabled:after{border-left:30px solid #252547!important}.nb-theme-corporate nav.do-wizard-navigation{margin-bottom:0;background-color:#fff;border-bottom:1px solid #edf1f7}.nb-theme-corporate nav.do-wizard-navigation ul.do-wizard-navigation-list{background:#ffffff;overflow:hidden}.nb-theme-corporate nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item-first div{padding-left:1.25rem!important}@media (max-width: 767.98px){.nb-theme-corporate nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div{padding-left:1.25rem!important}}.nb-theme-corporate nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div{padding:.844rem 0 .844rem 3rem;position:relative;display:block;border:0;border-radius:0;outline-style:none;color:#fff;background:#00d68f}.nb-theme-corporate nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div:after{content:\"\";display:block;width:0;height:0;border-top:50px solid transparent;border-bottom:50px solid transparent;border-left:30px solid #00d68f;position:absolute;top:50%;margin-top:-50px;left:100%;z-index:2}.nb-theme-corporate nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div:before{content:\" \";display:block;width:0;height:0;border-top:50px solid transparent;border-bottom:50px solid transparent;border-left:30px solid #e4e9f2;position:absolute;top:50%;margin-top:-50px;margin-left:1px;left:100%;z-index:1}.nb-theme-corporate nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item:first-child div{padding-left:15px}.nb-theme-corporate nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div.do-wizard-navigation-active{background:#3366ff!important}.nb-theme-corporate nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div.do-wizard-navigation-active:after{border-left:30px solid #3366ff!important}.nb-theme-corporate nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div.do-wizard-navigation-disabled{background:#f7f9fc!important;cursor:not-allowed;color:#8f9bb37a}.nb-theme-corporate nav.do-wizard-navigation ul.do-wizard-navigation-list li.do-wizard-navigation-list-item div.do-wizard-navigation-disabled:after{border-left:30px solid #f7f9fc!important}\n"], components: [{ type: DoWizardErrorComponent, selector: "do-wizard-error", inputs: ["error"] }, { type: DoWizardNavigationComponent, selector: "do-wizard-navigation" }, { type: DoWizardButtonsComponent, selector: "do-wizard-buttons", inputs: ["extra", "clearFormOnSubmit", "disabled"], outputs: ["onNext", "onPrevious", "onSubmit"] }], directives: [{ type: i2$1.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }, { type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoWizardComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-wizard',
                    styleUrls: ['./do-wizard.component.scss'],
                    templateUrl: './do-wizard.component.html',
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: function () { return [{ type: DoWizardService }, { type: i2$1.ActivatedRoute }]; }, propDecorators: { extra: [{
                type: Input
            }], loading: [{
                type: Input
            }], onNext: [{
                type: Output
            }], onPrevious: [{
                type: Output
            }], onSubmit: [{
                type: Output
            }] } });

class DoWizardPageOutletComponent {
    constructor() {
        this.width = 12;
    }
}
DoWizardPageOutletComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoWizardPageOutletComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DoWizardPageOutletComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoWizardPageOutletComponent, selector: "do-wizard-page-outlet", inputs: { width: "width" }, ngImport: i0, template: "<div class=\"row\">\n  <div class=\"col-lg-{{width}}\">\n      <ng-content select=\"[wizardcontent]\"></ng-content> \n  </div>\n</div>\n", styles: [".nb-theme-default .skeleton{animation:loading 1.7s infinite linear;border-radius:.25rem;background:#dedfe1;background-image:linear-gradient(to right,#dedfe1 0%,#f2f3f5 20%,#dedfe1 40%,#dedfe1 100%)}.nb-theme-dark .skeleton{animation:loading 1.7s infinite linear;border-radius:.25rem;background:#192038;background-image:linear-gradient(to right,#192038 0%,#222b45 20%,#192038 40%,#192038 100%)}.nb-theme-cosmic .skeleton{animation:loading 1.7s infinite linear;border-radius:.25rem;background:#1b1b38;background-image:linear-gradient(to right,#1b1b38 0%,#323259 20%,#1b1b38 40%,#1b1b38 100%)}.nb-theme-corporate .skeleton{animation:loading 1.7s infinite linear;border-radius:.25rem;background:#dedfe1;background-image:linear-gradient(to right,#dedfe1 0%,#f2f3f5 20%,#dedfe1 40%,#dedfe1 100%)}@keyframes loading{0%{background-position:-100px}to{background-position:380px}}.label-skeleton{width:100%;height:2.5rem;line-height:1.5rem;padding:.4375rem 1.125rem}.input-skeleton{width:100%;height:2.5rem;line-height:1.5rem;padding:.4375rem 1.125rem}.texteditor-skeleton{width:100%;height:10.5rem;line-height:1.5rem;padding:.4375rem 1.125rem}.button-skeleton{width:6rem;height:2.5rem;line-height:1rem;margin:0 .125rem}button[nbButton]{margin:0 .25rem}.reset-left{margin-right:.25rem}.submit-right{margin-left:.25rem}\n"], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoWizardPageOutletComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-wizard-page-outlet',
                    styleUrls: ['./do-wizard-page-outlet.component.scss'],
                    templateUrl: './do-wizard-page-outlet.component.html',
                    encapsulation: ViewEncapsulation.None,
                }]
        }], propDecorators: { width: [{
                type: Input
            }] } });

const WIZARD_COMPONENTS = [
    DoWizardComponent,
    DoWizardErrorComponent,
    DoWizardNavigationComponent,
    DoWizardButtonsComponent,
    DoWizardPageOutletComponent,
];
const WIZARD_PROVIDERS = [
    DoWizardService,
];
class DoWizardModule {
    static forRoot() {
        return {
            ngModule: DoWizardModule,
            providers: [
                ...WIZARD_PROVIDERS,
            ],
        };
    }
}
DoWizardModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoWizardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoWizardModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoWizardModule, declarations: [DoWizardComponent,
        DoWizardErrorComponent,
        DoWizardNavigationComponent,
        DoWizardButtonsComponent,
        DoWizardPageOutletComponent], imports: [CommonModule,
        RouterModule,
        TranslateModule,
        NbButtonModule], exports: [DoWizardComponent,
        DoWizardErrorComponent,
        DoWizardNavigationComponent,
        DoWizardButtonsComponent,
        DoWizardPageOutletComponent] });
DoWizardModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoWizardModule, imports: [[
            CommonModule,
            RouterModule,
            TranslateModule,
            NbButtonModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoWizardModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ...WIZARD_COMPONENTS,
                    ],
                    imports: [
                        CommonModule,
                        RouterModule,
                        TranslateModule,
                        NbButtonModule,
                    ],
                    exports: [
                        ...WIZARD_COMPONENTS,
                    ],
                }]
        }] });

function fadeIn() {
    return [
        transition(':enter', [
            style({ opacity: 0 }),
            animate('400ms ease-in', style({ opacity: 1 })),
        ]),
    ];
}

class BaseComponent {
    constructor(injector) {
        this.injector = injector;
        this.destroy$ = new Subject();
        this.api = injector.get(API);
        this.http = injector.get(HTTP_SERVICE);
    }
    exec(serviceName, apiName, body, headers, params, pathVariable, responseType) {
        return this.http.HTTP_AUTH(this.api[serviceName][apiName], body, headers, params, pathVariable, responseType);
    }
    initProgress() {
        document.querySelectorAll('.pace-done').forEach(pace => {
            pace.className = pace.className.replace('pace-done pace-done', 'pace-running');
            pace.className = pace.className.replace('pace-done', 'pace-running');
        });
        document.querySelectorAll('.pace-inactive').forEach(pace => {
            pace.className = pace.className.replace('pace-inactive pace-inactive', 'pace-active');
            pace.className = pace.className.replace('pace-inactive', 'pace-active');
        });
        this.progressDOM = document.getElementsByClassName('pace-progress').item(0);
    }
    doneProgress() {
        document.querySelectorAll('.pace-running').forEach(pace => {
            pace.className = pace.className.replace('pace-running', 'pace-done');
        });
        document.querySelectorAll('.pace-active').forEach(pace => {
            pace.className = pace.className.replace('pace-active', 'pace-inactive');
        });
    }
    setProgress(progress) {
        this.progressDOM.style.transform = 'translate3d(' + progress + '%, 0px, 0px)';
        this.progressDOM.getAttributeNode('data-progress-text').value = progress + '%';
        this.progressDOM.getAttributeNode('data-progress').value = progress.toString();
    }
}

class BaseFormComponent extends BaseComponent {
    constructor(injector, controlsConfig) {
        super(injector);
        this.injector = injector;
        this.submitSubject$ = new Subject();
        this.disabled = false;
        this.loadingForm = false;
        this.formBuilder = injector.get(FormBuilder);
        if (controlsConfig) {
            this.formGroup = this.formBuilder.group(controlsConfig);
        }
        this.toastr = injector.get(DoToastrService);
    }
    onDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
    onSubmit(body, serviceName, apiName, disableToastr) {
        var _a;
        this.disabled = true;
        this.initProgress();
        this.setProgress(65);
        this.exec(serviceName, apiName, body ? body : (_a = this.formGroup) === null || _a === void 0 ? void 0 : _a.value)
            .subscribe((success) => {
            this.setProgress(95);
            if (!body) {
                this.formGroup.markAsPristine();
            }
            this.disabled = false;
            if (success.respStatusCode) {
                if (!disableToastr) {
                    this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
                }
            }
            this.doneProgress();
            this.submitSubject$.next(success);
        }, (error) => {
            this.disabled = false;
            if (!disableToastr) {
                if (error instanceof HttpErrorResponse) {
                    error = error['error'];
                }
                this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
            }
            this.doneProgress();
            this.submitSubject$.next(error);
        });
        return this.submitSubject$.asObservable();
    }
    onReset() { }
}

class BaseFilterComponent extends BaseFormComponent {
    constructor(injector, filtersConfig, controlsConfig) {
        super(injector, controlsConfig);
        this.injector = injector;
        this.rows = [];
        if (filtersConfig) {
            this.formGroupFilter = this.formBuilder.group(filtersConfig);
        }
    }
    doFilterAdvanced(keyword) {
        this.keyword = keyword;
    }
}

class Page {
}
class DatatableParamModel {
}
class DatatableFilter {
    constructor() {
        this.type = 'input';
    }
}

class SelectResponseModel {
    constructor() {
        this.disabled = false;
    }
}
class SelectParamModel {
}

class RadioParamModel {
}

class DoWizardStep {
    constructor(injector, formGroupName, controlsConfig) {
        this.injector = injector;
        this.formGroupName = formGroupName;
        this.disabled = false;
        this.loadingForm = false;
        this.destroy$ = new Subject();
        this.api = injector.get(API);
        this.http = injector.get(HTTP_SERVICE);
        this.formBuilder = injector.get(FormBuilder);
        this.wizardService = injector.get(DoWizardService);
        this.router = injector.get(Router);
        this.formGroup = this.wizardService.getFormGroup();
        this.formGroup.addControl(this.formGroupName, this.formBuilder.group(controlsConfig));
        this.validateRoute();
    }
    isValid() {
        return this.formGroup.controls[this.formGroupName].valid;
    }
    onNext() {
        this.wizardService.setFormGroup(this.formGroup);
    }
    onPrevious() {
        this.wizardService.setFormGroup(this.formGroup);
    }
}

/*
 * Public API Surface of do-shared
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BaseComponent, BaseFilterComponent, BaseFormComponent, ContentSelectDirective, CurrencyMaskDirective, DatatableFilter, DatatableParamModel, DoBaseModule, DoButtonComponent, DoButtonModule, DoButtonSubmitComponent, DoCardCollapseComponent, DoCheckBoxModule, DoCheckboxComponent, DoCollapseComponent, DoContainerOutletComponent, DoDatatableBaseComponent, DoDatatableCollapseComponent, DoDatatableComponent, DoDatatableHeaderComponent, DoDatatableModule, DoDatePickerComponent, DoDatePickerModule, DoDatePickerRangeComponent, DoEditorModule, DoErrorMessageComponent, DoImageModule, DoInputBaseIconComponent, DoInputCurrencyComponent, DoInputFileComponent, DoInputIconComponent, DoInputModule, DoInputTextComponent, DoLabelModule, DoLabelTextComponent, DoPageOutletComponent, DoRadioComponent, DoRadioModule, DoSelectComponent, DoSelectModule, DoTextEditorComponent, DoTextareaComponent, DoToastrModule, DoToastrService, DoWarnMessageComponent, DoWizardButtonsComponent, DoWizardComponent, DoWizardErrorComponent, DoWizardModule, DoWizardNavigationComponent, DoWizardPageOutletComponent, DoWizardService, DoWizardStep, DragDropDirective, EqualValidator, ImageUploadComponent, MaskedInputDirective, NotEqualValidator, Page, RadioParamModel, SelectParamModel, SelectResponseModel, fadeIn };
//# sourceMappingURL=dongkap-do-shared.js.map
