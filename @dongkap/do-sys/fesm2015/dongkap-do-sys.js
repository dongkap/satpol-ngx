import * as i0 from '@angular/core';
import { Component, Injectable, NgModule, ViewEncapsulation, ViewChild, EventEmitter, Output, Inject, Input } from '@angular/core';
import * as i4 from '@angular/forms';
import { FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import * as i1$1 from '@nebular/theme';
import { NbCardModule, NbAlertModule, NbIconModule, NbDialogModule, NbButtonModule, NbTabsetModule, NbSpinnerModule, NbAccordionModule } from '@nebular/theme';
import * as i6 from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { DoThemeModule } from '@dongkap/do-theme';
import * as i3 from '@dongkap/do-shared';
import { BaseFilterComponent, BaseFormComponent, DoInputModule, DoCheckBoxModule, DoButtonModule, DoBaseModule, DoSelectModule, DoDatatableModule, BaseComponent, DoEditorModule, DoDatePickerModule, DoWizardStep, DoRadioModule, DoLabelModule, DoWizardModule, DoImageModule } from '@dongkap/do-shared';
import * as i1 from '@angular/router';
import { RouterModule } from '@angular/router';
import { SelectionType } from '@swimlane/ngx-datatable';
import * as i1$2 from '@dongkap/do-auth';
import { AuthGuardChildService } from '@dongkap/do-auth';
import { takeUntil, map, debounceTime, distinctUntilChanged, switchMap, first, catchError } from 'rxjs/operators';
import * as i5$1 from '@dongkap/do-core';
import { ResponseCode, LocaleModel, SystemAuthority, Pattern, HTTP_SERVICE, OAUTH_INFO, API, USER_SERVICE, PROFILE_INDEXED_DB } from '@dongkap/do-core';
import * as i5 from '@angular/common';
import * as i2 from 'tree-ngx';
import { TreeMode, TreeNgxModule } from 'tree-ngx';
import { Subject, of } from 'rxjs';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';

class LocaleComponent {
}
LocaleComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LocaleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
LocaleComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: LocaleComponent, selector: "do-locale", ngImport: i0, template: `
    <router-outlet></router-outlet>
  `, isInline: true, directives: [{ type: i1.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LocaleComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-locale',
                    template: `
    <router-outlet></router-outlet>
  `,
                }]
        }] });

class LocaleService {
    getLocale() {
        return this.locale;
    }
    setLocale(locale) {
        this.locale = locale;
    }
}
LocaleService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LocaleService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
LocaleService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LocaleService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LocaleService, decorators: [{
            type: Injectable
        }] });

class LocaleListPageComponent extends BaseFilterComponent {
    constructor(injector, router, localeService) {
        super(injector, {
            localeCode: [],
            identifier: [],
        });
        this.injector = injector;
        this.router = router;
        this.localeService = localeService;
        this.selectionType = SelectionType.single;
        this.columns = [
            { name: 'Language Code', prop: 'localeCode', width: 125, frozenLeft: true },
            { name: 'Language', prop: 'identifier', width: 275, frozenLeft: true },
            { name: 'Icon', prop: 'icon', width: 75, frozenLeft: true, type: 'icon' },
            { name: 'System Default Language', prop: 'localeDefault', width: 175, frozenLeft: true },
            { name: 'Created', prop: 'createdBy' },
            { name: 'Created Date', prop: 'createdDate' },
            { name: 'Modified', prop: 'modifiedBy' },
            { name: 'Modified Date', prop: 'modifiedDate' },
        ];
        this.expanded = false;
        this.apiPath = this.api['master']['datatable-locale'];
        this.filters = [
            { controlName: 'localeCode', type: 'input' },
            { controlName: 'identifier', type: 'input' }
        ];
    }
    ngOnInit() {
    }
    onAddGroup() {
        this.router.navigate(['/app/sysconf/i18n', 'add']);
    }
    onViewDetail(data) {
        this.localeService.setLocale(data);
        this.router.navigate(['/app/sysconf/i18n', 'edit']);
    }
    onReset() {
        this.router.navigate(['/app/sysconf/i18n']);
    }
    back() {
        this.router.navigate(['/app/sysconf/i18n']);
        return false;
    }
}
LocaleListPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LocaleListPageComponent, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: LocaleService }], target: i0.ɵɵFactoryTarget.Component });
LocaleListPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: LocaleListPageComponent, selector: "do-locale-list-page", usesInheritance: true, ngImport: i0, template: "<do-page-outlet [header]=\"'i18n'\" [hidefooter]=\"true\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [delete]=\"false\"\n        [selectionType]=\"selectionType\"\n        (onFilter)=\"doFilterAdvanced($event)\"\n        (onAdd)=\"onAddGroup()\"\n        (onEdit)=\"onViewDetail($event)\"\n        [filterFn]=\"keyword\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'localeCode'\"\n            [label]=\"'Locale Code'\"\n            formControlName=\"localeCode\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'identifier'\"\n            [label]=\"'Identifier'\"\n            formControlName=\"identifier\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n", styles: [""], components: [{ type: i3.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i3.DoDatatableComponent, selector: "do-datatable", inputs: ["rows", "columns", "filters", "selected", "limit", "count", "offset", "externalPaging", "externalSorting", "loadingIndicator", "scrollbarH", "scrollbarV", "reorderable", "sortType", "messages", "selectionType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "header", "column", "footer", "add", "edit", "delete", "filter", "api", "startWithOpenData", "filterEvent", "formGroupFilter", "sort", "sortsDefault", "autoLoad", "filterFn", "filterDoFetchFn", "reloadFn"], outputs: ["onAdd", "onEdit", "onDelete", "onSearch", "onFilter", "onButtonCell", "onLoading", "onSelected"] }, { type: i3.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LocaleListPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-locale-list-page',
                    styleUrls: ['./locale-list-page.component.scss'],
                    templateUrl: './locale-list-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: LocaleService }]; } });

class DialogFlagComponent {
    constructor(ref) {
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
    choose(flag) {
        this.ref.close('flag-icon flag-icon-' + flag);
    }
}
DialogFlagComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DialogFlagComponent, deps: [{ token: i1$1.NbDialogRef }], target: i0.ɵɵFactoryTarget.Component });
DialogFlagComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DialogFlagComponent, selector: "do-dialog-flag", ngImport: i0, template: "<nb-card>\n  <nb-card-header>\n    {{ 'Choose Flag' | translate }}\n  </nb-card-header>\n  <nb-card-body>\n    <span class=\"flag-icon flag-icon-{{flag}} choose-flag\" (click)=\"choose(flag)\" *ngFor=\"let flag of flags\"></span>\n  </nb-card-body>\n</nb-card>\n", styles: [".nb-theme-default :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-default :host .cancel{margin-right:1rem}.nb-theme-default :host button.deactivated-button{width:100%}@media (max-width: 767.98px){.nb-theme-default :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-default :host button.deactivated-button{font-size:.6rem}}.nb-theme-default :host .flag-icon{margin:.75rem}.nb-theme-default :host .choose-flag{cursor:pointer}.nb-theme-dark :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-dark :host .cancel{margin-right:1rem}.nb-theme-dark :host button.deactivated-button{width:100%}@media (max-width: 767.98px){.nb-theme-dark :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-dark :host button.deactivated-button{font-size:.6rem}}.nb-theme-dark :host .flag-icon{margin:.75rem}.nb-theme-dark :host .choose-flag{cursor:pointer}.nb-theme-cosmic :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-cosmic :host .cancel{margin-right:1rem}.nb-theme-cosmic :host button.deactivated-button{width:100%}@media (max-width: 767.98px){.nb-theme-cosmic :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-cosmic :host button.deactivated-button{font-size:.6rem}}.nb-theme-cosmic :host .flag-icon{margin:.75rem}.nb-theme-cosmic :host .choose-flag{cursor:pointer}.nb-theme-corporate :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-corporate :host .cancel{margin-right:1rem}.nb-theme-corporate :host button.deactivated-button{width:100%}@media (max-width: 767.98px){.nb-theme-corporate :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-corporate :host button.deactivated-button{font-size:.6rem}}.nb-theme-corporate :host .flag-icon{margin:.75rem}.nb-theme-corporate :host .choose-flag{cursor:pointer}\n"], components: [{ type: i1$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1$1.NbCardBodyComponent, selector: "nb-card-body" }], directives: [{ type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "translate": i6.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DialogFlagComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-dialog-flag',
                    templateUrl: 'dialog-flag.component.html',
                    styleUrls: ['dialog-flag.component.scss'],
                }]
        }], ctorParameters: function () { return [{ type: i1$1.NbDialogRef }]; } });

class LocaleAddEditPageComponent extends BaseFormComponent {
    constructor(injector, router, route, localeService, dialogService) {
        super(injector, {
            language: [],
            icon: [],
            default: [],
        });
        this.injector = injector;
        this.router = router;
        this.route = route;
        this.localeService = localeService;
        this.dialogService = dialogService;
        this.action = 'Add';
        this.dataDefault = [
            {
                id: 'default',
                selected: false,
            },
        ];
        if (this.localeService.getLocale() || (this.route.snapshot.params['action'] === 'add')) {
            if ((this.route.snapshot.params['action'] === 'edit')) {
                this.action = 'Edit';
            }
            this.apiSelectLanguage = this.api['master']['select-language'];
            if (this.localeService.getLocale() && (this.route.snapshot.params['action'] === 'edit')) {
                if (this.localeService.getLocale().localeDefault) {
                    this.formGroup.get('default').setValue([{
                            id: 'default',
                            selected: true,
                        }]);
                    this.formGroup.get('default').disable();
                }
                else {
                    this.formGroup.get('default').setValue([{
                            id: 'default',
                            selected: false,
                        }]);
                }
                this.formGroup.get('icon').setValue(this.localeService.getLocale().icon);
                this.formGroup.get('language').setValue(this.localeService.getLocale().identifier);
                this.formGroup.get('language').disable();
            }
        }
        else {
            this.router.navigate(['/app/sysconf/i18n']);
        }
    }
    ngOnInit() { }
    onSearchFlag() {
        this.dialogService.open(DialogFlagComponent)
            .onClose.subscribe((flagIcon) => {
            this.formGroup.get('icon').setValue(flagIcon);
            this.formGroup.get('icon').markAsDirty();
        });
    }
    onReset() {
        this.router.navigate(['/app/sysconf/i18n']);
    }
    onSubmit() {
        const localeDefault = this.formGroup.get('default').value;
        const data = {
            icon: this.formGroup.get('icon').value,
            localeDefault: (localeDefault ? true : false),
            localeCode: this.formGroup.get('language').value['value'] ?
                this.formGroup.get('language').value['value'] : this.localeService.getLocale().localeCode,
            identifier: this.formGroup.get('language').value['label'] ?
                this.formGroup.get('language').value['label'] : this.localeService.getLocale().identifier,
            localeEnabled: true,
        };
        super.onSubmit(data, 'master', 'post-locale')
            .pipe(takeUntil(this.destroy$))
            .subscribe(response => {
            if (response.respStatusCode === ResponseCode.OK_SCR010.toString()) {
                this.router.navigate(['/app/sysconf/i18n']);
            }
        });
    }
}
LocaleAddEditPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LocaleAddEditPageComponent, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: i1.ActivatedRoute }, { token: LocaleService }, { token: i1$1.NbDialogService }], target: i0.ɵɵFactoryTarget.Component });
LocaleAddEditPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: LocaleAddEditPageComponent, selector: "do-locale-add-edit-page", usesInheritance: true, ngImport: i0, template: "<do-page-outlet [header]=\"'header.'+action+'-i18n'\" [url]=\"'/app/sysconf/i18n'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <form [formGroup]=\"formGroup\">\n        <do-select\n          [name]=\"'language'\"\n          [label]=\"'Language'\"\n          [required]=\"true\"\n          [api]=\"apiSelectLanguage\"\n          formControlName=\"language\">\n        </do-select>\n        <do-input-icon\n          [name]=\"'icon'\"\n          [label]=\"'Icon'\"\n          [required]=\"true\"\n          [icon]=\"'search-outline'\"\n          [iconcursor]=\"true\"\n          [eva]=\"true\"\n          (clickIcon)=\"onSearchFlag()\"\n          formControlName=\"icon\">\n        </do-input-icon>\n        <do-checkbox\n          [name]=\"'checkbox'\"\n          [label]=\"'System Default Language'\"\n          [data]=\"dataDefault\"\n          formControlName=\"default\">\n        </do-checkbox>\n      </form>\n    </div>\n  </div>\n  <do-button-submit\n    [submitTitle]=\"action\"\n    [resetTitle]=\"'Cancel'\"\n    [formGroupButton]=\"formGroup\"\n    [disabledButton]=\"disabled\"\n    (onReset)=\"onReset()\"\n    (onSubmit)=\"onSubmit()\"\n    pagefooter>\n  </do-button-submit>\n</do-page-outlet>\n", styles: [".reset-left{margin-right:.25rem}.submit-right{margin-left:.25rem}\n"], components: [{ type: i3.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i3.DoSelectComponent, selector: "do-select", inputs: ["placeholder", "colLabel", "colInput", "items", "multiple", "loading", "addTag", "closeOnSelect", "clearable", "searchable", "hideSelected", "minTermLength", "maxTermLength", "api", "limit", "offsetNextLoad", "queryParam"], outputs: ["onSelect", "onClear"] }, { type: i3.DoInputIconComponent, selector: "do-input-icon", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "buttontype", "type", "iconcursor", "eva", "icon"], outputs: ["clickIcon", "focus"] }, { type: i3.DoCheckboxComponent, selector: "do-checkbox", inputs: ["colLabel", "colInput", "data"], outputs: ["onChecked"] }, { type: i3.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LocaleAddEditPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-locale-add-edit-page',
                    styleUrls: ['./locale-add-edit-page.component.scss'],
                    templateUrl: './locale-add-edit-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: i1.ActivatedRoute }, { type: LocaleService }, { type: i1$1.NbDialogService }]; } });

const routes$b = [{
        path: '',
        component: LocaleComponent,
        canActivateChild: [AuthGuardChildService],
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
class DoLocaleRoutingModule {
}
DoLocaleRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoLocaleRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoLocaleRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoLocaleRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
DoLocaleRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoLocaleRoutingModule, imports: [[RouterModule.forChild(routes$b)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoLocaleRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$b)],
                    exports: [RouterModule],
                }]
        }] });

const components$b = [
    LocaleComponent,
    LocaleListPageComponent,
    LocaleAddEditPageComponent,
    DialogFlagComponent,
];
const modules$b = [
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NbCardModule,
    NbAlertModule,
    NbIconModule,
    NbDialogModule.forChild(),
    DoThemeModule,
    DoInputModule,
    DoCheckBoxModule,
    DoButtonModule,
    DoBaseModule,
    DoSelectModule,
    DoDatatableModule,
    DoLocaleRoutingModule,
];
const providers$b = [
    LocaleService,
];
const entryComponents$1 = [
    DialogFlagComponent,
];
class DoLocaleModule {
}
DoLocaleModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoLocaleModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoLocaleModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoLocaleModule, declarations: [LocaleComponent,
        LocaleListPageComponent,
        LocaleAddEditPageComponent,
        DialogFlagComponent], imports: [FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        NbCardModule,
        NbAlertModule,
        NbIconModule, i1$1.NbDialogModule, DoThemeModule,
        DoInputModule,
        DoCheckBoxModule,
        DoButtonModule,
        DoBaseModule,
        DoSelectModule,
        DoDatatableModule,
        DoLocaleRoutingModule] });
DoLocaleModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoLocaleModule, providers: [
        ...providers$b,
    ], imports: [[
            ...modules$b,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoLocaleModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        ...modules$b,
                    ],
                    declarations: [
                        ...components$b,
                    ],
                    providers: [
                        ...providers$b,
                    ],
                    entryComponents: [
                        ...entryComponents$1,
                    ],
                }]
        }] });

class ParameterComponent {
}
ParameterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ParameterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ParameterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ParameterComponent, selector: "do-parameter", ngImport: i0, template: `
    <router-outlet></router-outlet>
  `, isInline: true, directives: [{ type: i1.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ParameterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-parameter',
                    template: `
    <router-outlet></router-outlet>
  `,
                }]
        }] });

class ParameterService {
    getParameter() {
        return this.parameter;
    }
    setParameter(parameter) {
        this.parameter = parameter;
    }
    getParameterGroup() {
        return this.parameterGroup;
    }
    setParameterGroup(parameterGroup) {
        this.parameterGroup = parameterGroup;
    }
    getLocales() {
        return this.locales;
    }
    setLocales(locales) {
        this.locales = locales;
    }
}
ParameterService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ParameterService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ParameterService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ParameterService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ParameterService, decorators: [{
            type: Injectable
        }] });

class ParameterListGroupPageComponent extends BaseFilterComponent {
    constructor(injector, router, parameterService, dialogService) {
        super(injector, {
            parameterGroupCode: [],
            parameterGroupName: [],
        });
        this.injector = injector;
        this.router = router;
        this.parameterService = parameterService;
        this.dialogService = dialogService;
        this.columns = [
            { name: 'Parameter Group Code', prop: 'parameterGroupCode', width: 220, frozenLeft: true },
            { name: 'Parameter Group Name', prop: 'parameterGroupName', width: 200, frozenLeft: true },
        ];
        this.reload = false;
        this.sort = {
            asc: ['parameterGroupName']
        };
        this.filters = [
            { controlName: 'parameterGroupCode', type: 'input' },
            { controlName: 'parameterGroupName', type: 'input' }
        ];
        this.apiPath = this.api['master']['datatable-parameter-group'];
        this.apiPathLocale = this.api['master']['all-locale'];
        this.apiPathDelete = this.api['master']['delete-parameter-group'];
    }
    ngOnInit() {
        this.http.HTTP_AUTH(this.apiPathLocale).subscribe(value => {
            this.parameterService.setLocales(value);
        });
    }
    onAddGroup() {
        this.router.navigate(['/app/sysconf/parameter/group', 'add']);
    }
    onViewDetail(data) {
        this.parameterService.setParameterGroup({
            parameterGroupCode: data['parameterGroupCode'],
            parameterGroupName: data['parameterGroupName'],
        });
        this.router.navigate(['/app/sysconf/parameter/detail']);
    }
    onDeleteGroup(data, dialog) {
        this.reload = false;
        this.parameterGroupCodes = [];
        data.forEach(value => {
            this.parameterGroupCodes.push(value.parameterGroupCode);
        });
        this.dialogService.open(dialog, { context: 'alert.delete' });
    }
    onDelete(ref) {
        this.disabled = true;
        this.http.HTTP_AUTH(this.apiPathDelete, this.parameterGroupCodes)
            .pipe(takeUntil(this.destroy$))
            .subscribe((success) => {
            ref.close();
            this.disabled = false;
            this.reload = true;
            this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
        }, (error) => {
            this.disabled = false;
            this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
        });
    }
}
ParameterListGroupPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ParameterListGroupPageComponent, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: ParameterService }, { token: i1$1.NbDialogService }], target: i0.ɵɵFactoryTarget.Component });
ParameterListGroupPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ParameterListGroupPageComponent, selector: "do-parameter-list-group-page", usesInheritance: true, ngImport: i0, template: "<do-page-outlet [header]=\"'Parameter Group'\" [hidefooter]=\"true\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [sort]=\"sort\"\n        [reloadFn]=\"reload\"\n        (onAdd)=\"onAddGroup()\"\n        (onEdit)=\"onViewDetail($event)\"\n        (onDelete)=\"onDeleteGroup($event, dialogdelete)\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'parameterGroupCode'\"\n            [label]=\"'Parameter Group Code'\"\n            formControlName=\"parameterGroupCode\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'parameterGroupName'\"\n            [label]=\"'Parameter Group Name'\"\n            formControlName=\"parameterGroupName\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n\n<ng-template #dialogdelete let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"danger\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <do-button-submit\n        [colLabel]=\"0\"\n        [colButton]=\"12\"\n        [submitTitle]=\"'Delete'\"\n        [resetTitle]=\"'Cancel'\"\n        [disabledButton]=\"disabled\"\n        (onReset)=\"ref.close()\"\n        (onSubmit)=\"onDelete(ref)\">\n      </do-button-submit>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>\n", styles: [".reset-left{margin-left:1rem;margin-right:.5rem}.submit-right{margin-left:.5rem}\n"], components: [{ type: i3.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i3.DoDatatableComponent, selector: "do-datatable", inputs: ["rows", "columns", "filters", "selected", "limit", "count", "offset", "externalPaging", "externalSorting", "loadingIndicator", "scrollbarH", "scrollbarV", "reorderable", "sortType", "messages", "selectionType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "header", "column", "footer", "add", "edit", "delete", "filter", "api", "startWithOpenData", "filterEvent", "formGroupFilter", "sort", "sortsDefault", "autoLoad", "filterFn", "filterDoFetchFn", "reloadFn"], outputs: ["onAdd", "onEdit", "onDelete", "onSearch", "onFilter", "onButtonCell", "onLoading", "onSelected"] }, { type: i3.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i1$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i1$1.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i3.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i6.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ParameterListGroupPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-parameter-list-group-page',
                    styleUrls: ['./parameter-list-group-page.component.scss'],
                    templateUrl: './parameter-list-group-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: ParameterService }, { type: i1$1.NbDialogService }]; } });

class ParameterAddGroupPageComponent extends BaseFormComponent {
    constructor(injector, router) {
        super(injector, {
            parameterGroupCode: [],
            parameterGroupName: [],
        });
        this.injector = injector;
        this.router = router;
    }
    ngOnInit() { }
    onReset() {
        this.router.navigate(['/app/sysconf/parameter']);
    }
    onSubmit() {
        super.onSubmit(this.formGroup.value, 'master', 'post-parameter-group')
            .pipe(takeUntil(this.destroy$))
            .subscribe(response => {
            if (response.respStatusCode === ResponseCode.OK_SCR009.toString()) {
                this.router.navigate(['/app/sysconf/parameter']);
            }
        });
    }
}
ParameterAddGroupPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ParameterAddGroupPageComponent, deps: [{ token: i0.Injector }, { token: i1.Router }], target: i0.ɵɵFactoryTarget.Component });
ParameterAddGroupPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ParameterAddGroupPageComponent, selector: "do-parameter-add-group-page", usesInheritance: true, ngImport: i0, template: "<do-page-outlet [header]=\"'Add Parameter Group'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <form [formGroup]=\"formGroup\">\n        <do-input-text\n          [name]=\"'parameterGroupCode'\"\n          [label]=\"'Parameter Group Code'\"\n          [required]=\"true\"\n          formControlName=\"parameterGroupCode\">\n        </do-input-text>\n        <do-input-text\n          [name]=\"'parameterGroupName'\"\n          [label]=\"'Parameter Group Name'\"\n          [required]=\"true\"\n          formControlName=\"parameterGroupName\">\n        </do-input-text>\n      </form>\n    </div>\n  </div>\n  <do-button-submit\n    [submitTitle]=\"'Add'\"\n    [resetTitle]=\"'Cancel'\"\n    [formGroupButton]=\"formGroup\"\n    [disabledButton]=\"disabled\"\n    (onReset)=\"onReset()\"\n    (onSubmit)=\"onSubmit()\"\n    pagefooter>\n  </do-button-submit>\n</do-page-outlet>\n", styles: [""], components: [{ type: i3.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i3.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i3.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ParameterAddGroupPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-parameter-add-group-page',
                    styleUrls: ['./parameter-add-group-page.component.scss'],
                    templateUrl: './parameter-add-group-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }]; } });

class ParameterGroupModel {
}
class ParameterModel extends ParameterGroupModel {
}
class ParameterI18nModel extends ParameterModel {
}

class ParameterListDetailPageComponent extends BaseFilterComponent {
    constructor(injector, router, parameterService) {
        super(injector, {
            parameterCode: [],
        }, {
            parameterGroupCode: [],
            parameterGroupName: [],
        });
        this.injector = injector;
        this.router = router;
        this.parameterService = parameterService;
        this.selectionType = SelectionType.single;
        this.columns = [
            { name: 'Parameter Code', prop: 'parameterCode', width: 350, frozenLeft: true },
            { name: 'Created', prop: 'createdBy' },
            { name: 'Created Date', prop: 'createdDate' },
            { name: 'Modified', prop: 'modifiedBy' },
            { name: 'Modified Date', prop: 'modifiedDate' },
        ];
        this.parameterGroup = new ParameterGroupModel();
        this.expanded = false;
        this.sort = {
            asc: ['parameterCode']
        };
        if (this.parameterService.getParameterGroup()) {
            this.apiPath = this.api['master']['datatable-parameter'];
            this.filters = [{ controlName: 'parameterCode', type: 'input' }];
            this.parameterGroup = this.parameterService.getParameterGroup();
            this.keyword = {
                parameterGroupCode: this.parameterGroup.parameterGroupCode,
            };
            this.formGroup.get('parameterGroupCode').setValue(this.parameterGroup.parameterGroupCode);
            this.formGroup.get('parameterGroupName').setValue(this.parameterGroup.parameterGroupName);
        }
        else {
            this.router.navigate(['/app/sysconf/parameter']);
        }
    }
    ngOnInit() {
    }
    onAddGroup(event) {
        this.parameterService.setParameter(null);
        this.router.navigate(['/app/sysconf/parameter/detail', 'add']);
    }
    onViewDetail(data) {
        this.parameterService.setParameter({
            parameterGroupCode: data['parameterGroupCode'],
            parameterGroupName: data['parameterGroupName'],
            parameterCode: data['parameterCode'],
        });
        this.router.navigate(['/app/sysconf/parameter/detail', 'edit']);
    }
    onReset() {
        this.router.navigate(['/app/sysconf/parameter']);
    }
    onSubmit() {
        super.onSubmit(this.formGroup.value, 'master', 'post-parameter-group');
    }
}
ParameterListDetailPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ParameterListDetailPageComponent, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: ParameterService }], target: i0.ɵɵFactoryTarget.Component });
ParameterListDetailPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ParameterListDetailPageComponent, selector: "do-parameter-list-detail-page", usesInheritance: true, ngImport: i0, template: "<do-page-outlet\n  [header]=\"'Edit Parameter Group'\"\n  [url]=\"'/app/sysconf/parameter'\"\n  [isCollapsed]=\"true\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <form [formGroup]=\"formGroup\">\n        <do-input-text\n          [name]=\"'parameterGroupName'\"\n          [label]=\"'Parameter Group Name'\"\n          [required]=\"true\"\n          formControlName=\"parameterGroupName\">\n        </do-input-text>\n      </form>\n    </div>\n  </div>\n  <do-button-submit\n    [submitTitle]=\"'Edit'\"\n    [resetTitle]=\"'Cancel'\"\n    [formGroupButton]=\"formGroup\"\n    [disabledButton]=\"disabled\"\n    (onReset)=\"onReset()\"\n    (onSubmit)=\"onSubmit()\"\n    pagefooter>\n  </do-button-submit>\n</do-page-outlet>\n\n<do-page-outlet [url]=\"'/app/sysconf/parameter'\" [header]=\"'header.parameter'\" [param]=\"{value: parameterGroup.parameterGroupName}\" [hidefooter]=\"true\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [sort]=\"sort\"\n        [delete]=\"false\"\n        [selectionType]=\"selectionType\"\n        (onFilter)=\"doFilterAdvanced($event)\"\n        (onAdd)=\"onAddGroup($event)\"\n        (onEdit)=\"onViewDetail($event)\"\n        [filterFn]=\"keyword\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'parameterCode'\"\n            [label]=\"'Parameter Code'\"\n            formControlName=\"parameterCode\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n", styles: [".reset-left{margin-right:.25rem}.submit-right{margin-left:.25rem}.parameter-expanded{position:absolute;right:0;padding:0 1.75rem;cursor:pointer}\n"], components: [{ type: i3.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i3.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i3.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }, { type: i3.DoDatatableComponent, selector: "do-datatable", inputs: ["rows", "columns", "filters", "selected", "limit", "count", "offset", "externalPaging", "externalSorting", "loadingIndicator", "scrollbarH", "scrollbarV", "reorderable", "sortType", "messages", "selectionType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "header", "column", "footer", "add", "edit", "delete", "filter", "api", "startWithOpenData", "filterEvent", "formGroupFilter", "sort", "sortsDefault", "autoLoad", "filterFn", "filterDoFetchFn", "reloadFn"], outputs: ["onAdd", "onEdit", "onDelete", "onSearch", "onFilter", "onButtonCell", "onLoading", "onSelected"] }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ParameterListDetailPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-parameter-list-detail-page',
                    styleUrls: ['./parameter-list-detail-page.component.scss'],
                    templateUrl: './parameter-list-detail-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: ParameterService }]; } });

class ParameterAddEditDetailPageComponent extends BaseFormComponent {
    constructor(injector, router, parameterService, route) {
        super(injector, {
            parameterCode: [],
            'en-US': [],
            'id-ID': [],
        });
        this.injector = injector;
        this.router = router;
        this.parameterService = parameterService;
        this.route = route;
        this.action = 'Add';
        this.parameter = new ParameterModel();
        this.parameterGroup = new ParameterGroupModel();
        this.allLocales = [];
        this.locales = [];
        this.localeDefault = new LocaleModel();
        this.isEdit = false;
        if (this.parameterService.getParameterGroup()) {
            this.parameterGroup = this.parameterService.getParameterGroup();
            if ((this.route.snapshot.params['action'] === 'edit')) {
                if (this.parameterService.getParameter()) {
                    this.action = 'Edit';
                    this.isEdit = true;
                    this.parameter = this.parameterService.getParameter();
                }
                else {
                    this.router.navigate(['/app/sysconf/parameter']);
                }
            }
            if (!this.parameterService.getLocales()) {
                this.apiPathLocale = this.api['master']['all-locale'];
                this.http.HTTP_AUTH(this.apiPathLocale).subscribe(response => {
                    this.parameterService.setLocales(response);
                    this.splitLocale(response);
                });
            }
            else {
                this.splitLocale(this.parameterService.getLocales());
            }
            if (this.isEdit) {
                this.formGroup.get('parameterCode').setValue(this.parameter.parameterCode);
                this.formGroup.get('parameterCode').disable({ emitEvent: true });
                this.apiPathParameterI18n = this.api['master']['all-parameter-i18n'];
                this.loadingForm = true;
                this.http.HTTP_AUTH(this.apiPathParameterI18n, {
                    parameterCode: this.parameter.parameterCode,
                }).subscribe((response) => {
                    response.forEach(data => {
                        this.formGroup.get(data.locale).setValue(data.parameterValue);
                        this.loadingForm = false;
                    });
                });
            }
        }
        else {
            this.router.navigate(['/app/sysconf/parameter']);
        }
    }
    splitLocale(values) {
        this.allLocales = values;
        values.forEach(data => {
            if (data.localeDefault) {
                this.localeDefault = data;
            }
            else {
                this.locales.push(data);
            }
            this.formGroup.removeControl(data.localeCode);
            this.formGroup.addControl(data.localeCode, new FormControl());
        });
    }
    ngOnInit() { }
    onReset() {
        this.router.navigate(['/app/sysconf/parameter/detail']);
    }
    onSubmit() {
        const data = this.formGroup.value;
        if (this.isEdit) {
            data.parameterCode = this.parameter.parameterCode;
        }
        data.parameterGroupCode = this.parameterGroup.parameterGroupCode;
        data.parameterValues = {};
        this.allLocales.forEach(value => {
            data.parameterValues[value.localeCode] = this.formGroup.get(value.localeCode).value;
        });
        super.onSubmit(data, 'master', 'post-parameter-i18n')
            .pipe(takeUntil(this.destroy$))
            .subscribe(response => {
            if (response.respStatusCode === ResponseCode.OK_SCR009.toString()) {
                this.router.navigate(['/app/sysconf/parameter/detail']);
            }
        });
    }
}
ParameterAddEditDetailPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ParameterAddEditDetailPageComponent, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: ParameterService }, { token: i1.ActivatedRoute }], target: i0.ɵɵFactoryTarget.Component });
ParameterAddEditDetailPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ParameterAddEditDetailPageComponent, selector: "do-parameter-add-edit-detail-page", usesInheritance: true, ngImport: i0, template: "<do-page-outlet [header]=\"action + ' Parameter'\" [url]=\"'/app/sysconf/parameter/detail'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <form [formGroup]=\"formGroup\">\n        <do-input-text\n          [name]=\"'parameterCode'\"\n          [label]=\"'Parameter Code'\"\n          [required]=\"!isEdit\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"parameterCode\">\n        </do-input-text>\n        <div class=\"form-group row\">\n          <label\n            for=\"Parameter Value\"\n            class=\"label col-sm-3 col-form-label\"\n            *ngIf=\"!loadingForm; else labelskeleton\">\n            {{'Parameter Value' | translate}}\n          </label>\n          <ng-template #labelskeleton>\n            <div class=\"col-sm-3\">\n              <div\n                [ngClass]=\"{\n                  'label-skeleton': true,\n                  'skeleton': loadingForm\n                }\">\n              </div>\n            </div>\n          </ng-template>\n          <div class=\"col-sm-9\">\n            <do-input-icon *ngIf=\"localeDefault.localeCode\"\n              [name]=\"localeDefault.localeCode\"\n              [nolabel]=\"true\"\n              [required]=\"true\"\n              [colLabel]=\"0\"\n              [colInput]=\"12\"\n              [icon]=\"'flag-icon flag-icon-' + localeDefault.icon\"\n              [skeleton]=\"loadingForm\"\n              formControlName=\"{{localeDefault.localeCode}}\">\n            </do-input-icon>\n          </div>\n        </div>\n        <do-input-icon *ngFor=\"let i18n of locales\"\n          [name]=\"i18n.localeCode\"\n          [nolabel]=\"true\"\n          [icon]=\"'flag-icon flag-icon-'+ i18n.icon\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"{{i18n.localeCode}}\">\n        </do-input-icon>\n      </form>\n    </div>\n  </div>\n  <do-button-submit\n    [submitTitle]=\"action\"\n    [resetTitle]=\"'Cancel'\"\n    [formGroupButton]=\"formGroup\"\n    [disabledButton]=\"disabled\"\n    (onReset)=\"onReset()\"\n    (onSubmit)=\"onSubmit()\"\n    pagefooter>\n  </do-button-submit>\n</do-page-outlet>\n", styles: [".reset-left{margin-right:.25rem}.submit-right{margin-left:.25rem}\n"], components: [{ type: i3.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i3.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i3.DoInputIconComponent, selector: "do-input-icon", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "buttontype", "type", "iconcursor", "eva", "icon"], outputs: ["clickIcon", "focus"] }, { type: i3.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i5.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "translate": i6.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ParameterAddEditDetailPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-parameter-add-edit-detail-page',
                    styleUrls: ['./parameter-add-edit-detail-page.component.scss'],
                    templateUrl: './parameter-add-edit-detail-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: ParameterService }, { type: i1.ActivatedRoute }]; } });

const routes$a = [{
        path: '',
        component: ParameterComponent,
        canActivateChild: [AuthGuardChildService],
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
class DoParameterRoutingModule {
}
DoParameterRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoParameterRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoParameterRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoParameterRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
DoParameterRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoParameterRoutingModule, imports: [[RouterModule.forChild(routes$a)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoParameterRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$a)],
                    exports: [RouterModule],
                }]
        }] });

const components$a = [
    ParameterComponent,
    ParameterListGroupPageComponent,
    ParameterAddGroupPageComponent,
    ParameterListDetailPageComponent,
    ParameterAddEditDetailPageComponent,
];
const modules$a = [
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NbCardModule,
    NbAlertModule,
    NbIconModule,
    NbButtonModule,
    NbDialogModule.forChild(),
    DoThemeModule,
    DoInputModule,
    DoCheckBoxModule,
    DoButtonModule,
    DoBaseModule,
    DoSelectModule,
    DoDatatableModule,
    DoParameterRoutingModule,
];
const providers$a = [
    ParameterService,
];
class DoParameterModule {
}
DoParameterModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoParameterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoParameterModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoParameterModule, declarations: [ParameterComponent,
        ParameterListGroupPageComponent,
        ParameterAddGroupPageComponent,
        ParameterListDetailPageComponent,
        ParameterAddEditDetailPageComponent], imports: [FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        NbCardModule,
        NbAlertModule,
        NbIconModule,
        NbButtonModule, i1$1.NbDialogModule, DoThemeModule,
        DoInputModule,
        DoCheckBoxModule,
        DoButtonModule,
        DoBaseModule,
        DoSelectModule,
        DoDatatableModule,
        DoParameterRoutingModule] });
DoParameterModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoParameterModule, providers: [
        ...providers$a,
    ], imports: [[
            ...modules$a,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoParameterModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        ...modules$a,
                    ],
                    declarations: [
                        ...components$a,
                    ],
                    providers: [
                        ...providers$a,
                    ],
                }]
        }] });

class MgmtMenuComponent {
}
MgmtMenuComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MgmtMenuComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MgmtMenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: MgmtMenuComponent, selector: "do-mgmt-menu", ngImport: i0, template: `
    <router-outlet></router-outlet>
  `, isInline: true, directives: [{ type: i1.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MgmtMenuComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-mgmt-menu',
                    template: `
    <router-outlet></router-outlet>
  `,
                }]
        }] });

class DialogIconComponent {
    constructor(ref, iconsLibrary) {
        this.ref = ref;
        this.evaIcons = [];
        this.evaIcons = Array.from(iconsLibrary.getPack('eva').icons.keys())
            .filter(icon => icon.indexOf('outline') !== -1);
    }
    choose(icon) {
        this.ref.close(icon);
    }
}
DialogIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DialogIconComponent, deps: [{ token: i1$1.NbDialogRef }, { token: i1$1.NbIconLibraries }], target: i0.ɵɵFactoryTarget.Component });
DialogIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DialogIconComponent, selector: "do-dialog-icon", ngImport: i0, template: "<nb-card>\n  <nb-card-header>\n    {{ 'Choose Icon' | translate }}\n  </nb-card-header>\n  <nb-card-body>\n    <nb-icon *ngFor=\"let icon of evaIcons\" class=\"choose-icon\" (click)=\"choose(icon)\" [icon]=\"icon\" pack=\"eva\"></nb-icon>\n  </nb-card-body>\n</nb-card>\n", styles: [".nb-theme-default :host .choose-icon{margin:.75rem;cursor:pointer}.nb-theme-dark :host .choose-icon{margin:.75rem;cursor:pointer}.nb-theme-cosmic :host .choose-icon{margin:.75rem;cursor:pointer}.nb-theme-corporate :host .choose-icon{margin:.75rem;cursor:pointer}\n"], components: [{ type: i1$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i1$1.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }], directives: [{ type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "translate": i6.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DialogIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-dialog-icon',
                    templateUrl: 'dialog-icon.component.html',
                    styleUrls: ['dialog-icon.component.scss'],
                }]
        }], ctorParameters: function () { return [{ type: i1$1.NbDialogRef }, { type: i1$1.NbIconLibraries }]; } });

class MainMenuPageComponent extends BaseFormComponent {
    constructor(injector, dialogService) {
        super(injector, {
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
        });
        this.injector = injector;
        this.dialogService = dialogService;
        this.nodeItems = [];
        this.options = {
            mode: TreeMode.NoSelect,
            checkboxes: false,
            alwaysEmitSelected: true
        };
        this.allLocales = [];
        this.locales = [];
        this.localeDefault = new LocaleModel();
        this.action = 'Add';
        this.dialogAction = 'Edit';
        this.loadLocale = false;
        this.title = null;
        this.rootData = [{
                id: 'root',
                disabled: false,
            }];
        this.groupData = [{
                id: 'group',
                disabled: false,
            }];
        this.homeData = [{
                id: 'home',
                disabled: false,
            }];
        this.apiSelectParent = this.api['security']['select-main-menus'];
        this.isRoot = true;
        this.isGroup = false;
    }
    set isRoot(root) {
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
    }
    get isRoot() { return this.root; }
    set isGroup(group) {
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
    }
    get isGroup() { return this.group; }
    ngOnInit() { }
    onCheckedRoot(event) {
        this.isRoot = event ? event[0].selected : false;
    }
    onCheckedGroup(event) {
        this.isGroup = event ? event[0].selected : false;
    }
    loadDataMenu() {
        if (!this.loadLocale) {
            this.loadingForm = true;
            this.http.HTTP_AUTH(this.api['master']['all-locale']).subscribe(response => {
                this.splitLocale(response);
                this.loadLocale = true;
                this.loadingForm = false;
            });
        }
        return this.http.HTTP_AUTH(this.api['security']['get-tree-menus'], null, null, null, ['main']).pipe(map((response) => {
            this.nodeItems = [];
            this.nodeItems = [...this.nodeItems, ...response];
            this.onReset();
            if (this.loadLocale) {
                this.loadingForm = false;
            }
        }));
    }
    splitLocale(values) {
        this.allLocales = values;
        values.forEach(data => {
            if (data.localeDefault) {
                this.localeDefault = data;
            }
            else {
                this.locales.push(data);
            }
            this.formGroup.removeControl(data.localeCode);
            this.formGroup.addControl(data.localeCode, new FormControl());
        });
    }
    onSearchIcon() {
        this.dialogService.open(DialogIconComponent)
            .onClose.subscribe((icon) => {
            this.formGroup.get('icon').setValue(icon);
            this.formGroup.get('icon').markAsDirty();
        });
    }
    onSelectNode(node) {
        if (node.item) {
            this.action = 'Edit';
            this.dialogAction = this.action;
            this.isRoot = node.item['level'] === 0 ? true : false;
            this.isGroup = node.item['group'];
            this.allLocales.forEach(locale => {
                this.formGroup.get(locale.localeCode).setValue(node.item['i18n'][locale.localeCode]);
                if (locale.localeDefault) {
                    this.title = node.item['i18n'][locale.localeCode];
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
    }
    onDeleteTree(node, context, dialog) {
        this.dialogAction = 'Delete';
        this.node = node;
        this.context = context;
        this.dialogService.open(dialog, { context: 'alert.delete' });
    }
    onSubmit(dialog) {
        let id = null;
        let code = 'N/A';
        let icon = null;
        let link = '#';
        const type = 'main';
        let ordering = 0;
        let home = false;
        let group = false;
        let level = 1;
        let leaf = true;
        const i18n = {};
        let parentMenu = null;
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
        this.allLocales.forEach(locale => {
            i18n[locale.localeCode] = this.formGroup.get(locale.localeCode).value;
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
            id,
            code,
            icon,
            link,
            type,
            level,
            ordering,
            home,
            group,
            leaf,
            i18n,
            parentMenu,
        };
        if (this.action === 'Edit') {
            this.dialogService.open(dialog, { context: 'alert.edit' });
        }
        else {
            this.postMenu();
        }
    }
    onSubmitDialog(ref) {
        if (this.dialogAction === 'Delete') {
            this.deleteTreeMenu(ref);
        }
        else {
            this.postMenu(ref);
        }
    }
    onReset() {
        this.disabled = false;
        this.isRoot = true;
        this.isGroup = false;
        this.title = null;
        this.action = 'Add';
        this.allLocales.forEach(locale => {
            this.formGroup.get(locale.localeCode).setValue(null);
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
    }
    deleteTreeMenu(ref) {
        this.disabled = true;
        this.http.HTTP_AUTH(this.api['security']['delete-menu'], null, null, null, [this.node['id']]).subscribe((success) => {
            ref.close();
            this.context.delete();
            this.disabled = false;
            this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
            this.loadDataMenu().subscribe(() => {
                this.loadingForm = false;
            });
        }, (error) => {
            this.disabled = false;
            this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
        });
    }
    postMenu(ref) {
        super.onSubmit(this.data, 'security', 'post-menus')
            .pipe(takeUntil(this.destroy$))
            .subscribe(response => {
            if (response.respStatusCode === ResponseCode.OK_DEFAULT.toString()) {
                this.loadDataMenu().subscribe(() => {
                    this.loadingForm = false;
                });
            }
            if (this.action === 'Edit') {
                ref.close();
            }
        });
    }
}
MainMenuPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MainMenuPageComponent, deps: [{ token: i0.Injector }, { token: i1$1.NbDialogService }], target: i0.ɵɵFactoryTarget.Component });
MainMenuPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: MainMenuPageComponent, selector: "do-main-menu-page", usesInheritance: true, ngImport: i0, template: "<div class=\"row\">\n  <div class=\"col-md-4 col-lg-4\">\n    <tree-ngx\n      [nodeItems]=\"nodeItems\"\n      [options]=\"options\"\n      #treeMain>\n      <ng-template #nodeNameTemplate let-node=\"node\" let-context=\"context\">\n        <span\n          class=\"node-action\"\n          [ngClass]=\"{\n            'node-action': !node.item.group,\n            'node-action-group': node.item.group\n          }\"\n          [class.active]=\"context.active\"\n          (click)=\"onSelectNode(node)\">\n          {{node.name}}\n        </span>\n        <span class=\"tree-action\">\n          <nb-icon\n              class=\"action-trash\"\n              icon=\"close-square-outline\"\n              (click)=\"onDeleteTree(node, context, dialogprocess)\">\n          </nb-icon>\n        </span>\n      </ng-template>\n    </tree-ngx>\n  </div>\n  <div class=\"col-md-8 col-lg-8\">\n    <form [formGroup]=\"formGroup\">\n      <div class=\"row\">\n        <label\n          for=\"Title\"\n          class=\"label col-sm-3 col-form-label\"\n          *ngIf=\"!loadingForm; else labelskeleton\">\n          {{'Title' | translate}}\n        </label>\n        <ng-template #labelskeleton>\n          <div class=\"col-sm-3\">\n            <div\n              [ngClass]=\"{\n                'label-skeleton': true,\n                'skeleton': loadingForm\n              }\">\n            </div>\n          </div>\n        </ng-template>\n        <div class=\"col-sm-9\" *ngIf=\"loadLocale; else inputSkeleton\">\n          <do-input-icon\n            [name]=\"localeDefault.localeCode\"\n            [nolabel]=\"true\"\n            [required]=\"true\"\n            [colLabel]=\"0\"\n            [colInput]=\"12\"\n            [icon]=\"'flag-icon flag-icon-' + localeDefault.icon\"\n            [skeleton]=\"loadingForm\"\n            formControlName=\"{{localeDefault.localeCode}}\">\n          </do-input-icon>\n        </div>\n        <ng-template #inputSkeleton>\n          <div class=\"col-sm-9\">\n            <div\n              [ngClass]=\"{\n                'input-skeleton': true,\n                'skeleton': loadingForm\n              }\">\n            </div>\n          </div>\n        </ng-template>\n      </div>\n      <do-input-icon *ngFor=\"let i18n of locales\"\n        [name]=\"i18n.localeCode\"\n        [nolabel]=\"true\"\n        [icon]=\"'flag-icon flag-icon-'+ i18n.icon\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"{{i18n.localeCode}}\">\n      </do-input-icon>\n      <do-checkbox\n        [name]=\"'group'\"\n        [label]=\"'Group'\"\n        [data]=\"groupData\"\n        [skeleton]=\"loadingForm\"\n        [warnMessage]=\"'warn.group-menu'\"\n        (onChecked)=\"onCheckedGroup($event)\"\n        formControlName=\"group\">\n      </do-checkbox>\n      <do-checkbox\n        [name]=\"'root'\"\n        [label]=\"'Root'\"\n        [data]=\"rootData\"\n        [skeleton]=\"loadingForm\"\n        (onChecked)=\"onCheckedRoot($event)\"\n        formControlName=\"root\"\n        *ngIf=\"!isGroup\">\n      </do-checkbox>\n      <do-checkbox\n        [name]=\"'home'\"\n        [label]=\"'Home'\"\n        [data]=\"homeData\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"home\"\n        *ngIf=\"!isGroup\">\n      </do-checkbox>\n      <do-input-text\n        [name]=\"'code'\"\n        [label]=\"'Code'\"\n        [capslock]=\"true\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"code\"\n        *ngIf=\"!isGroup\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'link'\"\n        [label]=\"'Link'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"link\"\n        *ngIf=\"!isGroup\">\n      </do-input-text>\n      <do-input-icon\n        [name]=\"'icon'\"\n        [label]=\"'Icon'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        [icon]=\"'search-outline'\"\n        [iconcursor]=\"true\"\n        [eva]=\"true\"\n        (clickIcon)=\"onSearchIcon()\"\n        formControlName=\"icon\"\n        *ngIf=\"(isRoot && !isGroup)\">\n      </do-input-icon>\n      <do-select\n        [name]=\"'parent'\"\n        [label]=\"'Parent Menu'\"\n        [api]=\"apiSelectParent\"\n        [searchable]=\"false\"\n        [skeleton]=\"loadingForm\"\n        [required]=\"true\"\n        formControlName=\"parent\"\n        *ngIf=\"(!isRoot && !isGroup)\">\n      </do-select>\n      <do-input-text\n        [name]=\"'order'\"\n        [label]=\"'Order'\"\n        [required]=\"true\"\n        [type]=\"'number'\"\n        [max]=\"999\"\n        [maxLength]=\"3\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"order\">\n      </do-input-text>\n      <do-button-submit\n        [submitTitle]=\"action\"\n        [resetTitle]=\"'Cancel'\"\n        [formGroupButton]=\"formGroup\"\n        [disabledButton]=\"disabled\"\n        (onReset)=\"onReset()\"\n        (onSubmit)=\"onSubmit(dialogprocess)\">\n      </do-button-submit>\n    </form>\n  </div>\n</div>\n\n<ng-template #dialogprocess let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"{{dialogAction === 'Delete' ? 'danger' : 'warning'}}\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <do-button-submit\n        [colLabel]=\"0\"\n        [colButton]=\"12\"\n        [submitTitle]=\"dialogAction\"\n        [resetTitle]=\"'Cancel'\"\n        [disabledButton]=\"disabled\"\n        (onReset)=\"ref.close()\"\n        (onSubmit)=\"onSubmitDialog(ref)\">\n      </do-button-submit>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>\n", styles: [".tree-ngx{display:flex;flex:1 1 auto;flex-direction:column;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif}.node{display:flex;flex:1 1 auto;flex-direction:column}.node-children{display:flex;flex:1 1 auto}.node-name{display:inline-block;padding:5px 0 5px 7px}.node-name.markSelected{padding:5px 0 5px 2px;border-left:5px #226699 solid}.node-name .active{cursor:pointer}.node-offset{display:flex;margin-left:20px}.node-icon-wrapper{position:relative;display:inline-block;width:25px;height:17px;top:1px;left:6px}.node-icon-wrapper.disabled{cursor:default}.collapsable{cursor:pointer}.node-container{display:inline-block}.nodeDisabled{opacity:.6}.node-checkbox{display:inline-block;position:relative;top:3px;left:5px;width:16px;height:16px;cursor:pointer}.node-checkbox:disabled{cursor:auto}.collapsible-wrapper{display:flex;overflow:hidden}.collapsible-wrapper:after{content:\"\";height:25px;transition:height .3s linear,max-height 0s .3s linear;max-height:0px}.collapsible{transition:margin-bottom .3s cubic-bezier(0,0,0,1);margin-bottom:0;max-height:1000000px}.collapsible-wrapper.collapsed>.collapsible{margin-bottom:-20000px;transition:margin-bottom .3s cubic-bezier(1,0,1,1),visibility 0s .3s,max-height 0s .3s;visibility:hidden;max-height:0}.collapsible-wrapper.collapsed:after{height:0;transition:height .3s linear;max-height:25px}.arrow-down{position:absolute;width:0;height:0;left:3px;top:6px;border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #455A64}.arrow-down.collapse-empty{border-top:7px solid #ccc}.arrow-right{position:absolute;width:0;height:0;left:8px;top:3px;border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid #455A64}.nb-theme-default .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-default .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#222b45;border-radius:0;cursor:pointer}.nb-theme-default .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-default .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-default .action-trash:hover{color:#ff708d}.nb-theme-dark .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-dark .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#fff;border-radius:0;cursor:pointer}.nb-theme-dark .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-dark .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-dark .action-trash:hover{color:#ff708d}.nb-theme-cosmic .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-cosmic .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#fff;border-radius:0;cursor:pointer}.nb-theme-cosmic .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-cosmic .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-cosmic .action-trash:hover{color:#ff708d}.nb-theme-corporate .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-corporate .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#222b45;border-radius:0;cursor:pointer}.nb-theme-corporate .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-corporate .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-corporate .action-trash:hover{color:#ff708d}\n"], components: [{ type: i2.ɵa, selector: "tree-ngx", inputs: ["options", "callbacks", "filter", "nodeItems"], outputs: ["selectedItems"] }, { type: i1$1.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }, { type: i3.DoInputIconComponent, selector: "do-input-icon", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "buttontype", "type", "iconcursor", "eva", "icon"], outputs: ["clickIcon", "focus"] }, { type: i3.DoCheckboxComponent, selector: "do-checkbox", inputs: ["colLabel", "colInput", "data"], outputs: ["onChecked"] }, { type: i3.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i3.DoSelectComponent, selector: "do-select", inputs: ["placeholder", "colLabel", "colInput", "items", "multiple", "loading", "addTag", "closeOnSelect", "clearable", "searchable", "hideSelected", "minTermLength", "maxTermLength", "api", "limit", "offsetNextLoad", "queryParam"], outputs: ["onSelect", "onClear"] }, { type: i3.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }, { type: i1$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i1$1.NbCardFooterComponent, selector: "nb-card-footer" }], directives: [{ type: i5.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "translate": i6.TranslatePipe }, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MainMenuPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-main-menu-page',
                    styleUrls: ['./main-menu-page.component.scss'],
                    templateUrl: './main-menu-page.component.html',
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1$1.NbDialogService }]; } });

class ExtraMenuPageComponent extends BaseFormComponent {
    constructor(injector, dialogService) {
        super(injector, {
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
        });
        this.injector = injector;
        this.dialogService = dialogService;
        this.nodeItems = [];
        this.options = {
            mode: TreeMode.NoSelect,
            checkboxes: false,
            alwaysEmitSelected: true
        };
        this.allLocales = [];
        this.locales = [];
        this.localeDefault = new LocaleModel();
        this.action = 'Add';
        this.dialogAction = 'Edit';
        this.loadLocale = false;
        this.title = null;
    }
    ngOnInit() { }
    loadDataMenu() {
        if (!this.loadLocale) {
            this.loadingForm = true;
            this.http.HTTP_AUTH(this.api['master']['all-locale']).subscribe(response => {
                this.splitLocale(response);
                this.loadLocale = true;
                this.loadingForm = false;
            });
        }
        return this.http.HTTP_AUTH(this.api['security']['get-tree-menus'], null, null, null, ['extra']).pipe(map((response) => {
            this.nodeItems = [];
            this.nodeItems = [...this.nodeItems, ...response];
            this.onReset();
            if (this.loadLocale) {
                this.loadingForm = false;
            }
        }));
    }
    splitLocale(values) {
        this.allLocales = values;
        values.forEach(data => {
            if (data.localeDefault) {
                this.localeDefault = data;
            }
            else {
                this.locales.push(data);
            }
            this.formGroup.removeControl(data.localeCode);
            this.formGroup.addControl(data.localeCode, new FormControl());
        });
    }
    onSearchIcon() {
        this.dialogService.open(DialogIconComponent)
            .onClose.subscribe((icon) => {
            this.formGroup.get('icon').setValue(icon);
            this.formGroup.get('icon').markAsDirty();
        });
    }
    onSelectNode(node) {
        if (node.item) {
            this.action = 'Edit';
            this.dialogAction = this.action;
            this.allLocales.forEach(locale => {
                this.formGroup.get(locale.localeCode).setValue(node.item['i18n'][locale.localeCode]);
            });
            this.formGroup.get('id').setValue(node['id']);
            this.formGroup.get('code').setValue(node.item['code']);
            this.formGroup.get('link').setValue(node.item['link']);
            this.formGroup.get('order').setValue(node.item['ordering']);
        }
    }
    onDeleteTree(node, context, dialog) {
        this.dialogAction = 'Delete';
        this.node = node;
        this.context = context;
        this.dialogService.open(dialog, { context: 'alert.delete' });
    }
    onSubmit(dialog) {
        let id = null;
        let code = 'N/A';
        let link = '#';
        let ordering = 0;
        const type = 'extra';
        const icon = null;
        const home = false;
        const group = false;
        const level = 0;
        const leaf = false;
        const i18n = {};
        const parentMenu = null;
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
        this.allLocales.forEach(locale => {
            i18n[locale.localeCode] = this.formGroup.get(locale.localeCode).value;
        });
        this.data = {
            id,
            code,
            icon,
            link,
            type,
            level,
            ordering,
            home,
            group,
            leaf,
            i18n,
            parentMenu,
        };
        if (this.action === 'Edit') {
            this.dialogService.open(dialog, { context: 'alert.edit' });
        }
        else {
            this.postMenu();
        }
    }
    onSubmitDialog(ref) {
        if (this.dialogAction === 'Delete') {
            this.deleteTreeMenu(ref);
        }
        else {
            this.postMenu(ref);
        }
    }
    onReset() {
        this.disabled = false;
        this.title = null;
        this.action = 'Add';
        this.allLocales.forEach(locale => {
            this.formGroup.get(locale.localeCode).setValue(null);
        });
        this.formGroup.get('id').setValue(null);
        this.formGroup.get('code').setValue('N/A');
        this.formGroup.get('link').setValue('#');
        this.formGroup.get('order').setValue(null);
    }
    deleteTreeMenu(ref) {
        this.disabled = true;
        this.http.HTTP_AUTH(this.api['security']['delete-menu'], null, null, null, [this.node['id']]).subscribe((success) => {
            ref.close();
            this.context.delete();
            this.disabled = false;
            this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
            this.loadDataMenu().subscribe(() => {
                this.loadingForm = false;
            });
        }, (error) => {
            this.disabled = false;
            this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
        });
    }
    postMenu(ref) {
        super.onSubmit(this.data, 'security', 'post-menus')
            .pipe(takeUntil(this.destroy$))
            .subscribe(response => {
            if (response.respStatusCode === ResponseCode.OK_DEFAULT.toString()) {
                this.loadDataMenu().subscribe(() => {
                    this.loadingForm = false;
                });
            }
            if (this.action === 'Edit') {
                ref.close();
            }
        });
    }
}
ExtraMenuPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ExtraMenuPageComponent, deps: [{ token: i0.Injector }, { token: i1$1.NbDialogService }], target: i0.ɵɵFactoryTarget.Component });
ExtraMenuPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ExtraMenuPageComponent, selector: "do-extra-menu-page", usesInheritance: true, ngImport: i0, template: "<div class=\"row\">\n  <div class=\"col-md-4 col-lg-4\">\n    <tree-ngx\n      [nodeItems]=\"nodeItems\"\n      [options]=\"options\"\n      #treeExtra>\n      <ng-template #nodeNameTemplate let-node=\"node\" let-context=\"context\">\n        <span\n          class=\"node-action\"\n          [class.active]=\"context.active\"\n          (click)=\"onSelectNode(node)\">\n          {{node.name}}\n        </span>\n        <span class=\"tree-action\">\n          <nb-icon\n              class=\"action-trash\"\n              icon=\"close-square-outline\"\n              (click)=\"onDeleteTree(node, context, dialogprocessextra)\">\n          </nb-icon>\n        </span>\n      </ng-template>\n    </tree-ngx>\n  </div>\n  <div class=\"col-md-8 col-lg-8\">\n    <form [formGroup]=\"formGroup\">\n      <div class=\"row\">\n        <label\n          for=\"Title\"\n          class=\"label col-sm-3 col-form-label\"\n          *ngIf=\"!loadingForm; else labelskeleton\">\n          {{'Title' | translate}}\n        </label>\n        <ng-template #labelskeleton>\n          <div class=\"col-sm-3\">\n            <div\n              [ngClass]=\"{\n                'label-skeleton': true,\n                'skeleton': loadingForm\n              }\">\n            </div>\n          </div>\n        </ng-template>\n        <div class=\"col-sm-9\" *ngIf=\"loadLocale; else inputSkeleton\">\n          <do-input-icon\n            [name]=\"localeDefault.localeCode\"\n            [nolabel]=\"true\"\n            [required]=\"true\"\n            [colLabel]=\"0\"\n            [colInput]=\"12\"\n            [icon]=\"'flag-icon flag-icon-' + localeDefault.icon\"\n            [skeleton]=\"loadingForm\"\n            formControlName=\"{{localeDefault.localeCode}}\">\n          </do-input-icon>\n        </div>\n        <ng-template #inputSkeleton>\n          <div class=\"col-sm-9\">\n            <div\n              [ngClass]=\"{\n                'input-skeleton': true,\n                'skeleton': loadingForm\n              }\">\n            </div>\n          </div>\n        </ng-template>\n      </div>\n      <do-input-icon *ngFor=\"let i18n of locales\"\n        [name]=\"i18n.localeCode\"\n        [nolabel]=\"true\"\n        [icon]=\"'flag-icon flag-icon-'+ i18n.icon\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"{{i18n.localeCode}}\">\n      </do-input-icon>\n      <do-input-text\n        [name]=\"'code'\"\n        [label]=\"'Code'\"\n        [capslock]=\"true\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"code\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'link'\"\n        [label]=\"'Link'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"link\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'order'\"\n        [label]=\"'Order'\"\n        [required]=\"true\"\n        [type]=\"'number'\"\n        [max]=\"99\"\n        [maxLength]=\"2\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"order\">\n      </do-input-text>\n      <do-button-submit\n        [submitTitle]=\"action\"\n        [resetTitle]=\"'Cancel'\"\n        [formGroupButton]=\"formGroup\"\n        [disabledButton]=\"disabled\"\n        (onReset)=\"onReset()\"\n        (onSubmit)=\"onSubmit(dialogprocessextra)\">\n      </do-button-submit>\n    </form>\n  </div>\n</div>\n\n<ng-template #dialogprocessextra let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"{{dialogAction === 'Delete' ? 'danger' : 'warning'}}\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <do-button-submit\n        [colLabel]=\"0\"\n        [colButton]=\"12\"\n        [submitTitle]=\"dialogAction\"\n        [resetTitle]=\"'Cancel'\"\n        [disabledButton]=\"disabled\"\n        (onReset)=\"ref.close()\"\n        (onSubmit)=\"onSubmitDialog(ref)\">\n      </do-button-submit>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>\n", styles: [".tree-ngx{display:flex;flex:1 1 auto;flex-direction:column;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif}.node{display:flex;flex:1 1 auto;flex-direction:column}.node-children{display:flex;flex:1 1 auto}.node-name{display:inline-block;padding:5px 0 5px 7px}.node-name.markSelected{padding:5px 0 5px 2px;border-left:5px #226699 solid}.node-name .active{cursor:pointer}.node-offset{display:flex;margin-left:20px}.node-icon-wrapper{position:relative;display:inline-block;width:25px;height:17px;top:1px;left:6px}.node-icon-wrapper.disabled{cursor:default}.collapsable{cursor:pointer}.node-container{display:inline-block}.nodeDisabled{opacity:.6}.node-checkbox{display:inline-block;position:relative;top:3px;left:5px;width:16px;height:16px;cursor:pointer}.node-checkbox:disabled{cursor:auto}.collapsible-wrapper{display:flex;overflow:hidden}.collapsible-wrapper:after{content:\"\";height:25px;transition:height .3s linear,max-height 0s .3s linear;max-height:0px}.collapsible{transition:margin-bottom .3s cubic-bezier(0,0,0,1);margin-bottom:0;max-height:1000000px}.collapsible-wrapper.collapsed>.collapsible{margin-bottom:-20000px;transition:margin-bottom .3s cubic-bezier(1,0,1,1),visibility 0s .3s,max-height 0s .3s;visibility:hidden;max-height:0}.collapsible-wrapper.collapsed:after{height:0;transition:height .3s linear;max-height:25px}.arrow-down{position:absolute;width:0;height:0;left:3px;top:6px;border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #455A64}.arrow-down.collapse-empty{border-top:7px solid #ccc}.arrow-right{position:absolute;width:0;height:0;left:8px;top:3px;border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid #455A64}.nb-theme-default .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-default .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#222b45;border-radius:0;cursor:pointer}.nb-theme-default .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-default .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-default .action-trash:hover{color:#ff708d}.nb-theme-dark .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-dark .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#fff;border-radius:0;cursor:pointer}.nb-theme-dark .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-dark .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-dark .action-trash:hover{color:#ff708d}.nb-theme-cosmic .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-cosmic .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#fff;border-radius:0;cursor:pointer}.nb-theme-cosmic .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-cosmic .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-cosmic .action-trash:hover{color:#ff708d}.nb-theme-corporate .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-corporate .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#222b45;border-radius:0;cursor:pointer}.nb-theme-corporate .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-corporate .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-corporate .action-trash:hover{color:#ff708d}\n"], components: [{ type: i2.ɵa, selector: "tree-ngx", inputs: ["options", "callbacks", "filter", "nodeItems"], outputs: ["selectedItems"] }, { type: i1$1.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }, { type: i3.DoInputIconComponent, selector: "do-input-icon", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "buttontype", "type", "iconcursor", "eva", "icon"], outputs: ["clickIcon", "focus"] }, { type: i3.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i3.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }, { type: i1$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i1$1.NbCardFooterComponent, selector: "nb-card-footer" }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i5.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "translate": i6.TranslatePipe }, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ExtraMenuPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-extra-menu-page',
                    styleUrls: ['./extra-menu-page.component.scss'],
                    templateUrl: './extra-menu-page.component.html',
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1$1.NbDialogService }]; } });

class MenuPageComponent extends BaseComponent {
    constructor(injector) {
        super(injector);
        this.injector = injector;
        this.loading = false;
        this.tab = 'main';
        this.destroy$ = new Subject();
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.next();
        this.destroy$.complete();
    }
    toggleLoadingAnimation(event) {
        this.tab = event.tabId;
        this.loading = true;
        if (this.tab === 'main') {
            this.mainMenu.loadDataMenu()
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => {
                this.loading = false;
            });
        }
        else {
            this.extraMenu.loadDataMenu()
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => {
                this.loading = false;
            });
        }
    }
}
MenuPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MenuPageComponent, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
MenuPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: MenuPageComponent, selector: "do-menu-page", viewQueries: [{ propertyName: "mainMenu", first: true, predicate: ["mainMenu"], descendants: true, static: true }, { propertyName: "extraMenu", first: true, predicate: ["extraMenu"], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: "<do-page-outlet [header]=\"'header.menu-management'\" [hidefooter]=\"true\">\n  <nb-tabset fullWidth (changeTab)=\"toggleLoadingAnimation($event)\" pagecontent>\n    <nb-tab tabId=\"main\" tabTitle=\"{{'tab.main-menu' | translate}}\">\n      <do-main-menu-page #mainMenu></do-main-menu-page>\n    </nb-tab>\n    <nb-tab tabId=\"extra\" tabTitle=\"{{'tab.extra-menu' | translate}}\" [lazyLoad]=\"true\">\n      <do-extra-menu-page #extraMenu></do-extra-menu-page>\n    </nb-tab>\n  </nb-tabset>\n</do-page-outlet>\n", styles: [""], components: [{ type: i3.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i1$1.NbTabsetComponent, selector: "nb-tabset", inputs: ["fullWidth", "routeParam"], outputs: ["changeTab"] }, { type: i1$1.NbTabComponent, selector: "nb-tab", inputs: ["badgeStatus", "badgeDot", "disabled", "responsive", "active", "lazyLoad", "tabTitle", "tabId", "tabIcon", "route", "badgeText", "badgePosition"] }, { type: MainMenuPageComponent, selector: "do-main-menu-page" }, { type: ExtraMenuPageComponent, selector: "do-extra-menu-page" }], pipes: { "translate": i6.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MenuPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-menu-page',
                    styleUrls: ['./menu-page.component.scss'],
                    templateUrl: './menu-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }]; }, propDecorators: { mainMenu: [{
                type: ViewChild,
                args: ['mainMenu', { static: true }]
            }], extraMenu: [{
                type: ViewChild,
                args: ['extraMenu', { static: true }]
            }] } });

const routes$9 = [{
        path: '',
        component: MgmtMenuComponent,
        canActivateChild: [AuthGuardChildService],
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
class DoMgmtMenuRoutingModule {
}
DoMgmtMenuRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtMenuRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoMgmtMenuRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtMenuRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
DoMgmtMenuRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtMenuRoutingModule, imports: [[RouterModule.forChild(routes$9)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtMenuRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$9)],
                    exports: [RouterModule],
                }]
        }] });

const components$9 = [
    MgmtMenuComponent,
    MenuPageComponent,
    MainMenuPageComponent,
    ExtraMenuPageComponent,
    DialogIconComponent,
];
const entryComponents = [
    DialogIconComponent,
];
const modules$9 = [
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NbCardModule,
    NbAlertModule,
    NbIconModule,
    NbButtonModule,
    NbDialogModule.forChild(),
    DoThemeModule,
    DoInputModule,
    DoCheckBoxModule,
    DoButtonModule,
    DoBaseModule,
    DoSelectModule,
    DoDatatableModule,
    NbTabsetModule,
    NbSpinnerModule,
    TreeNgxModule,
    DoMgmtMenuRoutingModule,
];
const providers$9 = [];
class DoMgmtMenuModule {
}
DoMgmtMenuModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtMenuModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoMgmtMenuModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtMenuModule, declarations: [MgmtMenuComponent,
        MenuPageComponent,
        MainMenuPageComponent,
        ExtraMenuPageComponent,
        DialogIconComponent], imports: [FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        NbCardModule,
        NbAlertModule,
        NbIconModule,
        NbButtonModule, i1$1.NbDialogModule, DoThemeModule,
        DoInputModule,
        DoCheckBoxModule,
        DoButtonModule,
        DoBaseModule,
        DoSelectModule,
        DoDatatableModule,
        NbTabsetModule,
        NbSpinnerModule,
        TreeNgxModule,
        DoMgmtMenuRoutingModule] });
DoMgmtMenuModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtMenuModule, providers: [
        ...providers$9,
    ], imports: [[
            ...modules$9,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtMenuModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        ...modules$9,
                    ],
                    declarations: [
                        ...components$9,
                    ],
                    providers: [
                        ...providers$9,
                    ],
                    entryComponents: [
                        ...entryComponents,
                    ]
                }]
        }] });

class MgmtRoleComponent {
}
MgmtRoleComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MgmtRoleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MgmtRoleComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: MgmtRoleComponent, selector: "do-mgmt-role", ngImport: i0, template: `
    <router-outlet></router-outlet>
  `, isInline: true, directives: [{ type: i1.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MgmtRoleComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-mgmt-role',
                    template: `
    <router-outlet></router-outlet>
  `,
                }]
        }] });

class RoleService {
    getRole() {
        return this.role;
    }
    setRole(role) {
        this.role = role;
    }
}
RoleService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: RoleService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
RoleService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: RoleService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: RoleService, decorators: [{
            type: Injectable
        }] });

class RoleListPageComponent extends BaseFilterComponent {
    constructor(injector, router, roleService) {
        super(injector, {
            authority: [],
            description: [],
        });
        this.injector = injector;
        this.router = router;
        this.roleService = roleService;
        this.selectionType = SelectionType.single;
        this.columns = [
            { name: 'Authority', prop: 'authority', width: 150, frozenLeft: true },
            { name: 'Description', prop: 'description', width: 275, frozenLeft: true },
            { name: 'Created', prop: 'createdBy' },
            { name: 'Created Date', prop: 'createdDate' },
            { name: 'Modified', prop: 'modifiedBy' },
            { name: 'Modified Date', prop: 'modifiedDate' },
        ];
        this.expanded = false;
        this.apiPath = this.api['security']['datatable-role'];
        this.sort = {
            asc: ['level']
        };
        this.filters = [
            { controlName: 'authority', type: 'input' },
            { controlName: 'description', type: 'input' }
        ];
    }
    ngOnInit() {
    }
    onAddGroup() {
        this.router.navigate(['/app/mgmt/role', 'add']);
    }
    onViewDetail(data) {
        this.roleService.setRole(data);
        this.router.navigate(['/app/mgmt/role', 'edit']);
    }
    onReset() {
        this.router.navigate(['/app/mgmt/role']);
    }
    back() {
        this.router.navigate(['/app/mgmt/role']);
        return false;
    }
}
RoleListPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: RoleListPageComponent, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: RoleService }], target: i0.ɵɵFactoryTarget.Component });
RoleListPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: RoleListPageComponent, selector: "do-role-list-page", usesInheritance: true, ngImport: i0, template: "<do-page-outlet [header]=\"'header.role-management'\" [hidefooter]=\"true\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [sort]=\"sort\"\n        [delete]=\"false\"\n        [selectionType]=\"selectionType\"\n        (onFilter)=\"doFilterAdvanced($event)\"\n        (onAdd)=\"onAddGroup()\"\n        (onEdit)=\"onViewDetail($event)\"\n        [filterFn]=\"keyword\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'authority'\"\n            [label]=\"'Authority'\"\n            formControlName=\"authority\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'description'\"\n            [label]=\"'Description'\"\n            formControlName=\"description\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n", styles: [""], components: [{ type: i3.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i3.DoDatatableComponent, selector: "do-datatable", inputs: ["rows", "columns", "filters", "selected", "limit", "count", "offset", "externalPaging", "externalSorting", "loadingIndicator", "scrollbarH", "scrollbarV", "reorderable", "sortType", "messages", "selectionType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "header", "column", "footer", "add", "edit", "delete", "filter", "api", "startWithOpenData", "filterEvent", "formGroupFilter", "sort", "sortsDefault", "autoLoad", "filterFn", "filterDoFetchFn", "reloadFn"], outputs: ["onAdd", "onEdit", "onDelete", "onSearch", "onFilter", "onButtonCell", "onLoading", "onSelected"] }, { type: i3.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: RoleListPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-role-list-page',
                    styleUrls: ['./role-list-page.component.scss'],
                    templateUrl: './role-list-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: RoleService }]; } });

class RoleMainPageComponent extends BaseFormComponent {
    constructor(injector, roleService) {
        super(injector);
        this.injector = injector;
        this.roleService = roleService;
        this.onSelect = new EventEmitter();
        this.nodeItems = [];
        this.options = {
            mode: TreeMode.MultiSelect,
            checkboxes: true,
            alwaysEmitSelected: true,
        };
        this.title = null;
        this.data = [];
    }
    ngOnInit() { }
    loadDataMenu(mainData) {
        if (mainData.length > 0) {
            return of(() => {
                this.nodeItems = [];
                this.nodeItems = [...this.nodeItems, ...mainData];
            });
        }
        else {
            return this.http.HTTP_AUTH(this.api['security']['get-function-menus'], null, null, null, ['main', this.roleService.getRole().authority]).pipe(map((response) => {
                this.nodeItems = [];
                this.nodeItems = [...this.nodeItems, ...response];
                this.data = [];
                response.forEach(val => {
                    if (val === null || val === void 0 ? void 0 : val.children) {
                        val === null || val === void 0 ? void 0 : val.children.forEach(child => {
                            if (child.selected) {
                                this.data = [...this.data, child.item];
                            }
                        });
                    }
                    else {
                        if (val.selected) {
                            this.data = [...this.data, val.item];
                        }
                    }
                });
                return this.data;
            }));
        }
    }
    initDataMenu(mainData) {
        if (mainData.length > 0) {
            return of(() => {
                this.nodeItems = [];
                this.nodeItems = [...this.nodeItems, ...mainData];
            });
        }
        else {
            return this.http.HTTP_AUTH(this.api['security']['get-tree-menus'], null, null, null, ['main']).pipe(map((response) => {
                this.nodeItems = [];
                this.nodeItems = [...this.nodeItems, ...response];
            }));
        }
    }
    select(datas) {
        this.onSelect.emit(datas);
    }
}
RoleMainPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: RoleMainPageComponent, deps: [{ token: i0.Injector }, { token: RoleService }], target: i0.ɵɵFactoryTarget.Component });
RoleMainPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: RoleMainPageComponent, selector: "do-role-main-page", outputs: { onSelect: "onSelect" }, usesInheritance: true, ngImport: i0, template: "<div class=\"row\">\n  <div class=\"col-md-4 col-lg-4\">\n    <tree-ngx\n      (selectedItems)=\"select($event)\"\n      [nodeItems]=\"nodeItems\"\n      [options]=\"options\"\n      #treeMain>\n      <ng-template #nodeNameTemplate let-node=\"node\" let-context=\"context\">\n        <span\n          class=\"node-action\"\n          [ngClass]=\"{\n            'node-action': !node.item.group,\n            'node-action-group': node.item.group\n          }\">\n          {{node.name}}\n        </span>\n      </ng-template>\n    </tree-ngx>\n  </div>\n</div>\n", styles: [".tree-ngx{display:flex;flex:1 1 auto;flex-direction:column;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif}.node{display:flex;flex:1 1 auto;flex-direction:column}.node-children{display:flex;flex:1 1 auto}.node-name{display:inline-block;padding:5px 0 5px 7px}.node-name.markSelected{padding:5px 0 5px 2px;border-left:5px #226699 solid}.node-name .active{cursor:pointer}.node-offset{display:flex;margin-left:20px}.node-icon-wrapper{position:relative;display:inline-block;width:25px;height:17px;top:1px;left:6px}.node-icon-wrapper.disabled{cursor:default}.collapsable{cursor:pointer}.node-container{display:inline-block}.nodeDisabled{opacity:.6}.node-checkbox{display:inline-block;position:relative;top:3px;left:5px;width:16px;height:16px;cursor:pointer}.node-checkbox:disabled{cursor:auto}.collapsible-wrapper{display:flex;overflow:hidden}.collapsible-wrapper:after{content:\"\";height:25px;transition:height .3s linear,max-height 0s .3s linear;max-height:0px}.collapsible{transition:margin-bottom .3s cubic-bezier(0,0,0,1);margin-bottom:0;max-height:1000000px}.collapsible-wrapper.collapsed>.collapsible{margin-bottom:-20000px;transition:margin-bottom .3s cubic-bezier(1,0,1,1),visibility 0s .3s,max-height 0s .3s;visibility:hidden;max-height:0}.collapsible-wrapper.collapsed:after{height:0;transition:height .3s linear;max-height:25px}.arrow-down{position:absolute;width:0;height:0;left:3px;top:6px;border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #455A64}.arrow-down.collapse-empty{border-top:7px solid #ccc}.arrow-right{position:absolute;width:0;height:0;left:8px;top:3px;border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid #455A64}.nb-theme-default .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-default .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#222b45;border-radius:0;cursor:pointer}.nb-theme-default .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-default .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-default .action-trash:hover{color:#ff708d}.nb-theme-dark .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-dark .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#fff;border-radius:0;cursor:pointer}.nb-theme-dark .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-dark .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-dark .action-trash:hover{color:#ff708d}.nb-theme-cosmic .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-cosmic .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#fff;border-radius:0;cursor:pointer}.nb-theme-cosmic .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-cosmic .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-cosmic .action-trash:hover{color:#ff708d}.nb-theme-corporate .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-corporate .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#222b45;border-radius:0;cursor:pointer}.nb-theme-corporate .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-corporate .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-corporate .action-trash:hover{color:#ff708d}\n"], components: [{ type: i2.ɵa, selector: "tree-ngx", inputs: ["options", "callbacks", "filter", "nodeItems"], outputs: ["selectedItems"] }], directives: [{ type: i5.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: RoleMainPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-role-main-page',
                    styleUrls: ['./role-main-page.component.scss'],
                    templateUrl: './role-main-page.component.html',
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: RoleService }]; }, propDecorators: { onSelect: [{
                type: Output
            }] } });

class RoleExtraPageComponent extends BaseFormComponent {
    constructor(injector, roleService) {
        super(injector);
        this.injector = injector;
        this.roleService = roleService;
        this.onSelect = new EventEmitter();
        this.nodeItems = [];
        this.options = {
            mode: TreeMode.MultiSelect,
            checkboxes: true,
            alwaysEmitSelected: true,
        };
        this.title = null;
        this.data = [];
    }
    ngOnInit() { }
    loadDataMenu(extraData) {
        if (extraData.length > 0) {
            return of(() => {
                this.nodeItems = [];
                this.nodeItems = [...this.nodeItems, ...extraData];
            });
        }
        else {
            return this.http.HTTP_AUTH(this.api['security']['get-function-menus'], null, null, null, ['extra', this.roleService.getRole().authority]).pipe(map((response) => {
                this.nodeItems = [];
                this.nodeItems = [...this.nodeItems, ...response];
                this.data = [];
                response.forEach(val => {
                    if (val === null || val === void 0 ? void 0 : val.children) {
                        val === null || val === void 0 ? void 0 : val.children.forEach(child => {
                            if (child.selected) {
                                this.data = [...this.data, child.item];
                            }
                        });
                    }
                    else {
                        if (val.selected) {
                            this.data = [...this.data, val.item];
                        }
                    }
                });
                return this.data;
            }));
        }
    }
    initDataMenu(extraData) {
        if (extraData.length > 0) {
            return of(() => {
                this.nodeItems = [];
                this.nodeItems = [...this.nodeItems, ...extraData];
            });
        }
        else {
            return this.http.HTTP_AUTH(this.api['security']['get-tree-menus'], null, null, null, ['extra']).pipe(map((response) => {
                this.nodeItems = [];
                this.nodeItems = [...this.nodeItems, ...response];
            }));
        }
    }
    select(datas) {
        this.onSelect.emit(datas);
    }
}
RoleExtraPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: RoleExtraPageComponent, deps: [{ token: i0.Injector }, { token: RoleService }], target: i0.ɵɵFactoryTarget.Component });
RoleExtraPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: RoleExtraPageComponent, selector: "do-role-extra-page", outputs: { onSelect: "onSelect" }, usesInheritance: true, ngImport: i0, template: "<div class=\"row\">\n  <div class=\"col-md-4 col-lg-4\">\n    <tree-ngx\n      (selectedItems)=\"select($event)\"\n      [nodeItems]=\"nodeItems\"\n      [options]=\"options\"\n      #treeExtra>\n      <ng-template #nodeNameTemplate let-node=\"node\" let-context=\"context\">\n        <span\n          class=\"node-action\"\n          [ngClass]=\"{\n            'node-action': !node.item.group\n          }\">\n          {{node.name}}\n        </span>\n      </ng-template>\n    </tree-ngx>\n  </div>\n</div>\n", styles: [".tree-ngx{display:flex;flex:1 1 auto;flex-direction:column;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif}.node{display:flex;flex:1 1 auto;flex-direction:column}.node-children{display:flex;flex:1 1 auto}.node-name{display:inline-block;padding:5px 0 5px 7px}.node-name.markSelected{padding:5px 0 5px 2px;border-left:5px #226699 solid}.node-name .active{cursor:pointer}.node-offset{display:flex;margin-left:20px}.node-icon-wrapper{position:relative;display:inline-block;width:25px;height:17px;top:1px;left:6px}.node-icon-wrapper.disabled{cursor:default}.collapsable{cursor:pointer}.node-container{display:inline-block}.nodeDisabled{opacity:.6}.node-checkbox{display:inline-block;position:relative;top:3px;left:5px;width:16px;height:16px;cursor:pointer}.node-checkbox:disabled{cursor:auto}.collapsible-wrapper{display:flex;overflow:hidden}.collapsible-wrapper:after{content:\"\";height:25px;transition:height .3s linear,max-height 0s .3s linear;max-height:0px}.collapsible{transition:margin-bottom .3s cubic-bezier(0,0,0,1);margin-bottom:0;max-height:1000000px}.collapsible-wrapper.collapsed>.collapsible{margin-bottom:-20000px;transition:margin-bottom .3s cubic-bezier(1,0,1,1),visibility 0s .3s,max-height 0s .3s;visibility:hidden;max-height:0}.collapsible-wrapper.collapsed:after{height:0;transition:height .3s linear;max-height:25px}.arrow-down{position:absolute;width:0;height:0;left:3px;top:6px;border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #455A64}.arrow-down.collapse-empty{border-top:7px solid #ccc}.arrow-right{position:absolute;width:0;height:0;left:8px;top:3px;border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid #455A64}.nb-theme-default .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-default .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#222b45;border-radius:0;cursor:pointer}.nb-theme-default .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-default .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-default .action-trash:hover{color:#ff708d}.nb-theme-dark .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-dark .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#fff;border-radius:0;cursor:pointer}.nb-theme-dark .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-dark .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-dark .action-trash:hover{color:#ff708d}.nb-theme-cosmic .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-cosmic .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#fff;border-radius:0;cursor:pointer}.nb-theme-cosmic .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-cosmic .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-cosmic .action-trash:hover{color:#ff708d}.nb-theme-corporate .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-corporate .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#222b45;border-radius:0;cursor:pointer}.nb-theme-corporate .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-corporate .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-corporate .action-trash:hover{color:#ff708d}\n"], components: [{ type: i2.ɵa, selector: "tree-ngx", inputs: ["options", "callbacks", "filter", "nodeItems"], outputs: ["selectedItems"] }], directives: [{ type: i5.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: RoleExtraPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-role-extra-page',
                    styleUrls: ['./role-extra-page.component.scss'],
                    templateUrl: './role-extra-page.component.html',
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: RoleService }]; }, propDecorators: { onSelect: [{
                type: Output
            }] } });

;
class RoleAddEditPageComponent extends BaseFormComponent {
    constructor(injector, router, route, roleService) {
        var _a, _b;
        super(injector, {
            authority: [],
            level: [],
            description: [],
            group: [],
            mainMenus: [],
            extraMenus: [],
        });
        this.injector = injector;
        this.router = router;
        this.route = route;
        this.roleService = roleService;
        this.action = 'Add';
        this.dataDefault = [
            {
                selected: false,
            },
        ];
        this.loading = false;
        this.tab = 'main';
        this.mainData = [];
        this.extraData = [];
        this.apiSelectGroup = this.api['security']['select-group'];
        if ((this.route.snapshot.params['action'] === 'edit')) {
            this.action = 'Edit';
            if (!this.roleService.getRole()) {
                this.router.navigate(['/app/mgmt/role']);
            }
        }
        if (this.roleService.getRole() && (this.route.snapshot.params['action'] === 'edit')) {
            this.title = this.roleService.getRole().description;
            this.formGroup.get('authority').setValue(this.roleService.getRole().authority);
            this.formGroup.get('authority').disable();
            this.formGroup.get('level').setValue(this.roleService.getRole().level);
            this.formGroup.get('description').setValue(this.roleService.getRole().description);
            this.formGroup.get('group').setValue({
                value: (_a = this.roleService.getRole().group) === null || _a === void 0 ? void 0 : _a.code,
                label: (_b = this.roleService.getRole().group) === null || _b === void 0 ? void 0 : _b.name
            });
        }
    }
    ngOnInit() { }
    onReset() {
        this.router.navigate(['/app/mgmt/role']);
    }
    onSubmit() {
        const group = new SystemAuthority();
        if (this.formGroup.get('group').value['value']) {
            group.code = this.formGroup.get('group').value['value'];
            group.name = this.formGroup.get('group').value['label'];
        }
        const role = {
            authority: this.formGroup.get('authority').value,
            level: this.formGroup.get('level').value,
            description: this.formGroup.get('description').value,
            group,
        };
        const main = [];
        this.mainData.forEach(val => {
            main.push(val['id']);
            if (val['parentMenu']['id']) {
                if (!main.includes(val['parentMenu']['id'])) {
                    main.push(val['parentMenu']['id']);
                }
            }
        });
        const extra = [];
        this.extraData.forEach(val => {
            extra.push(val['id']);
            if (val['parentMenu']['id']) {
                if (!extra.includes(val['parentMenu']['id'])) {
                    extra.push(val['parentMenu']['id']);
                }
            }
        });
        const data = {
            role,
            main,
            extra
        };
        super.onSubmit(data, 'security', 'post-function-role')
            .pipe(takeUntil(this.destroy$))
            .subscribe(response => {
            if (response.respStatusCode === ResponseCode.OK_DEFAULT.toString()) {
                this.router.navigate(['/app/mgmt/role']);
            }
        });
    }
    toggleLoadingAnimation(event) {
        this.tab = event.tabId;
        this.loading = true;
        if (this.tab === 'main') {
            if (this.roleService.getRole() && this.action === 'Edit') {
                this.mainMenu.loadDataMenu(this.mainData)
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((value) => {
                    this.loading = false;
                    if (this.mainData.length === 0) {
                        this.mainData = value;
                        this.formGroup.get('mainMenus').setValue(this.mainData);
                    }
                });
            }
            else {
                this.mainMenu.initDataMenu(this.mainData)
                    .pipe(takeUntil(this.destroy$))
                    .subscribe(() => {
                    this.loading = false;
                });
            }
        }
        else {
            if (this.roleService.getRole() && this.action === 'Edit') {
                this.extraMenu.loadDataMenu(this.extraData)
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((value) => {
                    this.loading = false;
                    if (this.extraData.length === 0) {
                        this.extraData = value;
                        this.formGroup.get('extraMenus').setValue(this.extraData);
                    }
                });
            }
            else {
                this.extraMenu.initDataMenu(this.extraData)
                    .pipe(takeUntil(this.destroy$))
                    .subscribe(() => {
                    this.loading = false;
                });
            }
        }
    }
    onSelectMain(datas) {
        if (this.mainData.length !== datas.length) {
            this.disabled = false;
            this.formGroup.get('mainMenus').markAsDirty();
        }
        this.mainData = [];
        this.mainData = [...this.mainData, ...datas];
        this.formGroup.get('mainMenus').setValue(this.mainData);
    }
    onSelectExtra(datas) {
        if (this.extraData.length !== datas.length) {
            this.disabled = false;
            this.formGroup.get('extraMenus').markAsDirty();
        }
        this.extraData = [];
        this.extraData = [...this.extraData, ...datas];
        this.formGroup.get('extraMenus').setValue(this.extraData);
    }
}
RoleAddEditPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: RoleAddEditPageComponent, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: i1.ActivatedRoute }, { token: RoleService }], target: i0.ɵɵFactoryTarget.Component });
RoleAddEditPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: RoleAddEditPageComponent, selector: "do-language-add-edit-page", viewQueries: [{ propertyName: "mainMenu", first: true, predicate: ["mainRole"], descendants: true, static: true }, { propertyName: "extraMenu", first: true, predicate: ["extraRole"], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: "<do-page-outlet [header]=\"'header.'+action+'-role'\" [url]=\"'/app/mgmt/role'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <form [formGroup]=\"formGroup\">\n        <do-input-text\n          [name]=\"'authority'\"\n          [label]=\"'Authority'\"\n          [required]=\"true\"\n          formControlName=\"authority\">\n        </do-input-text>\n        <do-input-text\n          [name]=\"'level'\"\n          [label]=\"'Level'\"\n          [required]=\"true\"\n          [type]=\"'number'\"\n          formControlName=\"level\">\n        </do-input-text>\n        <do-input-text\n          [name]=\"'description'\"\n          [label]=\"'Description'\"\n          [required]=\"true\"\n          formControlName=\"description\">\n        </do-input-text>\n        <do-select\n          [name]=\"'group'\"\n          [label]=\"'Group'\"\n          [required]=\"true\"\n          [searchable]=\"false\"\n          [api]=\"apiSelectGroup\"\n          formControlName=\"group\">\n        </do-select>\n      </form>\n    </div>\n    <div class=\"col-md-12 col-lg-12\">\n      <nb-tabset fullWidth (changeTab)=\"toggleLoadingAnimation($event)\">\n        <nb-tab tabId=\"main\" tabTitle=\"{{'tab.main-menu' | translate}}\" [nbSpinner]=\"loading\" nbSpinnerStatus=\"info\" nbSpinnerSize=\"giant\">\n          <do-role-main-page (onSelect)=\"onSelectMain($event)\" #mainRole></do-role-main-page>\n        </nb-tab>\n        <nb-tab tabId=\"extra\" tabTitle=\"{{'tab.extra-menu' | translate}}\" [lazyLoad]=\"true\" [nbSpinner]=\"loading\" nbSpinnerStatus=\"info\" nbSpinnerSize=\"giant\">\n          <do-role-extra-page (onSelect)=\"onSelectExtra($event)\" #extraRole></do-role-extra-page>\n        </nb-tab>\n      </nb-tabset>\n    </div>\n  </div>\n  <do-button-submit\n    [submitTitle]=\"action\"\n    [resetTitle]=\"'Cancel'\"\n    [formGroupButton]=\"formGroup\"\n    [disabledButton]=\"disabled\"\n    (onReset)=\"onReset()\"\n    (onSubmit)=\"onSubmit()\"\n    pagefooter>\n  </do-button-submit>\n</do-page-outlet>\n", styles: [".nb-theme-default :host nb-tab{flex:1;padding-top:1.5rem!important;padding-left:.25rem!important}.nb-theme-dark :host nb-tab{flex:1;padding-top:1.5rem!important;padding-left:.25rem!important}.nb-theme-cosmic :host nb-tab{flex:1;padding-top:1.5rem!important;padding-left:.25rem!important}.nb-theme-corporate :host nb-tab{flex:1;padding-top:1.5rem!important;padding-left:.25rem!important}\n"], components: [{ type: i3.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i3.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i3.DoSelectComponent, selector: "do-select", inputs: ["placeholder", "colLabel", "colInput", "items", "multiple", "loading", "addTag", "closeOnSelect", "clearable", "searchable", "hideSelected", "minTermLength", "maxTermLength", "api", "limit", "offsetNextLoad", "queryParam"], outputs: ["onSelect", "onClear"] }, { type: i1$1.NbTabsetComponent, selector: "nb-tabset", inputs: ["fullWidth", "routeParam"], outputs: ["changeTab"] }, { type: i1$1.NbTabComponent, selector: "nb-tab", inputs: ["badgeStatus", "badgeDot", "disabled", "responsive", "active", "lazyLoad", "tabTitle", "tabId", "tabIcon", "route", "badgeText", "badgePosition"] }, { type: RoleMainPageComponent, selector: "do-role-main-page", outputs: ["onSelect"] }, { type: RoleExtraPageComponent, selector: "do-role-extra-page", outputs: ["onSelect"] }, { type: i3.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i1$1.NbSpinnerDirective, selector: "[nbSpinner]", inputs: ["nbSpinnerStatus", "nbSpinnerSize", "nbSpinner", "nbSpinnerMessage"] }], pipes: { "translate": i6.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: RoleAddEditPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-language-add-edit-page',
                    styleUrls: ['./role-add-edit-page.component.scss'],
                    templateUrl: './role-add-edit-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: i1.ActivatedRoute }, { type: RoleService }]; }, propDecorators: { mainMenu: [{
                type: ViewChild,
                args: ['mainRole', { static: true }]
            }], extraMenu: [{
                type: ViewChild,
                args: ['extraRole', { static: true }]
            }] } });

const routes$8 = [{
        path: '',
        component: MgmtRoleComponent,
        canActivateChild: [AuthGuardChildService],
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
class DoMgmtRoleRoutingModule {
}
DoMgmtRoleRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtRoleRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoMgmtRoleRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtRoleRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
DoMgmtRoleRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtRoleRoutingModule, imports: [[RouterModule.forChild(routes$8)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtRoleRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$8)],
                    exports: [RouterModule],
                }]
        }] });

const components$8 = [
    MgmtRoleComponent,
    RoleListPageComponent,
    RoleAddEditPageComponent,
    RoleExtraPageComponent,
    RoleMainPageComponent,
];
const modules$8 = [
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NbCardModule,
    NbAlertModule,
    NbIconModule,
    NbButtonModule,
    NbDialogModule.forChild(),
    NbTabsetModule,
    NbSpinnerModule,
    TreeNgxModule,
    DoThemeModule,
    DoInputModule,
    DoCheckBoxModule,
    DoButtonModule,
    DoBaseModule,
    DoSelectModule,
    DoDatatableModule,
    DoMgmtRoleRoutingModule,
];
const providers$8 = [
    RoleService,
];
class DoMgmtRoleModule {
}
DoMgmtRoleModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtRoleModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoMgmtRoleModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtRoleModule, declarations: [MgmtRoleComponent,
        RoleListPageComponent,
        RoleAddEditPageComponent,
        RoleExtraPageComponent,
        RoleMainPageComponent], imports: [FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        NbCardModule,
        NbAlertModule,
        NbIconModule,
        NbButtonModule, i1$1.NbDialogModule, NbTabsetModule,
        NbSpinnerModule,
        TreeNgxModule,
        DoThemeModule,
        DoInputModule,
        DoCheckBoxModule,
        DoButtonModule,
        DoBaseModule,
        DoSelectModule,
        DoDatatableModule,
        DoMgmtRoleRoutingModule] });
DoMgmtRoleModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtRoleModule, providers: [
        ...providers$8,
    ], imports: [[
            ...modules$8,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtRoleModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        ...modules$8,
                    ],
                    declarations: [
                        ...components$8,
                    ],
                    providers: [
                        ...providers$8,
                    ],
                }]
        }] });

class MgmtCorporateComponent {
}
MgmtCorporateComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MgmtCorporateComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MgmtCorporateComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: MgmtCorporateComponent, selector: "do-mgmt-corporate", ngImport: i0, template: `
    <router-outlet></router-outlet>
  `, isInline: true, directives: [{ type: i1.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MgmtCorporateComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-mgmt-corporate',
                    template: `
    <router-outlet></router-outlet>
  `,
                }]
        }] });

class CorporateService {
    getCorporate() {
        return this.corporate;
    }
    setCorporate(corporate) {
        this.corporate = corporate;
    }
}
CorporateService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: CorporateService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
CorporateService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: CorporateService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: CorporateService, decorators: [{
            type: Injectable
        }] });

class CorporateListPageComponent extends BaseFilterComponent {
    constructor(injector, router, corporateService, dialogService) {
        super(injector, {
            corporateCode: [],
            corporateName: [],
        });
        this.injector = injector;
        this.router = router;
        this.corporateService = corporateService;
        this.dialogService = dialogService;
        this.columns = [
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
        this.reload = false;
        this.expanded = false;
        this.apiPath = this.api['security']['datatable-corporate'];
        this.apiPathDelete = this.api['security']['delete-corporate'];
        this.sort = {
            asc: ['corporateCode']
        };
        this.filters = [
            { controlName: 'corporateCode', type: 'input' },
            { controlName: 'corporateName', type: 'input' }
        ];
    }
    ngOnInit() {
    }
    onAdd() {
        this.corporateService.setCorporate(null);
        this.router.navigate(['/app/mgmt/corporate', 'add']);
    }
    onViewDetail(data) {
        this.corporateService.setCorporate(data);
        this.router.navigate(['/app/mgmt/corporate', 'edit']);
    }
    onDeleteDialog(data, dialog) {
        this.reload = false;
        this.corporateCodes = [];
        data.forEach(value => {
            this.corporateCodes.push(value.corporateCode);
        });
        this.dialogService.open(dialog, { context: 'alert.delete' });
    }
    onDelete(ref) {
        this.disabled = true;
        this.http.HTTP_AUTH(this.apiPathDelete, this.corporateCodes)
            .pipe(takeUntil(this.destroy$))
            .subscribe((success) => {
            ref.close();
            this.disabled = false;
            this.reload = true;
            this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
        }, (error) => {
            this.disabled = false;
            this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
        });
    }
    onReset() {
        this.router.navigate(['/app/mgmt/corporate']);
    }
}
CorporateListPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: CorporateListPageComponent, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: CorporateService }, { token: i1$1.NbDialogService }], target: i0.ɵɵFactoryTarget.Component });
CorporateListPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: CorporateListPageComponent, selector: "do-corporate-list-page", usesInheritance: true, ngImport: i0, template: "<do-page-outlet [header]=\"'header.corporate-management'\" [hidefooter]=\"true\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [sort]=\"sort\"\n        [reloadFn]=\"reload\"\n        (onAdd)=\"onAdd()\"\n        (onEdit)=\"onViewDetail($event)\"\n        (onDelete)=\"onDeleteDialog($event, dialogdelete)\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'corporateCode'\"\n            [label]=\"'Corporate Code'\"\n            formControlName=\"corporateCode\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'corporateName'\"\n            [label]=\"'Corporate Name'\"\n            formControlName=\"corporateName\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n\n<ng-template #dialogdelete let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"danger\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <do-button-submit\n        [colLabel]=\"0\"\n        [colButton]=\"12\"\n        [submitTitle]=\"'Delete'\"\n        [resetTitle]=\"'Cancel'\"\n        [disabledButton]=\"disabled\"\n        (onReset)=\"ref.close()\"\n        (onSubmit)=\"onDelete(ref)\">\n      </do-button-submit>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>\n", styles: [""], components: [{ type: i3.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i3.DoDatatableComponent, selector: "do-datatable", inputs: ["rows", "columns", "filters", "selected", "limit", "count", "offset", "externalPaging", "externalSorting", "loadingIndicator", "scrollbarH", "scrollbarV", "reorderable", "sortType", "messages", "selectionType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "header", "column", "footer", "add", "edit", "delete", "filter", "api", "startWithOpenData", "filterEvent", "formGroupFilter", "sort", "sortsDefault", "autoLoad", "filterFn", "filterDoFetchFn", "reloadFn"], outputs: ["onAdd", "onEdit", "onDelete", "onSearch", "onFilter", "onButtonCell", "onLoading", "onSelected"] }, { type: i3.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i1$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i1$1.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i3.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i6.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: CorporateListPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-corporate-list-page',
                    styleUrls: ['./corporate-list-page.component.scss'],
                    templateUrl: './corporate-list-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: CorporateService }, { type: i1$1.NbDialogService }]; } });

class CorporateAddEditPageComponent extends BaseFormComponent {
    constructor(injector, router, route, corporateService) {
        super(injector, {
            corporateCode: [],
            corporateName: [],
            corporateNonExpired: [],
            email: [],
            address: [],
            telpNumber: [],
            faxNumber: [],
        });
        this.injector = injector;
        this.router = router;
        this.route = route;
        this.corporateService = corporateService;
        this.action = 'Add';
        this.patternEmail = Pattern.EMAIL;
        this.patternPhoneNumber = Pattern.PHONE_NUMBER;
        this.dataDefault = [
            {
                id: 'corporateNonExpired',
                selected: true,
            },
        ];
        if (this.corporateService.getCorporate() || (this.route.snapshot.params['action'] === 'add')) {
            if ((this.route.snapshot.params['action'] === 'edit')) {
                this.action = 'Edit';
                this.formGroup.get('corporateCode').setValue(this.corporateService.getCorporate().corporateCode);
                this.formGroup.get('corporateName').setValue(this.corporateService.getCorporate().corporateName);
                this.formGroup.get('email').setValue(this.corporateService.getCorporate().email);
                this.formGroup.get('address').setValue(this.corporateService.getCorporate().address);
                this.formGroup.get('telpNumber').setValue(this.corporateService.getCorporate().telpNumber);
                this.formGroup.get('faxNumber').setValue(this.corporateService.getCorporate().faxNumber);
                this.formGroup.get('corporateNonExpired').setValue([{
                        id: 'corporateNonExpired',
                        selected: this.corporateService.getCorporate().corporateNonExpired ? true : false,
                    }]);
                this.formGroup.get('corporateCode').disable();
            }
        }
        else {
            this.router.navigate(['/app/mgmt/corporate']);
        }
    }
    ngOnInit() { }
    onReset() {
        this.router.navigate(['/app/mgmt/corporate']);
    }
    onSubmit() {
        const corporateNonExpired = this.formGroup.get('corporateNonExpired').value;
        const data = {
            corporateCode: this.formGroup.get('corporateCode').value,
            corporateName: this.formGroup.get('corporateName').value,
            corporateNonExpired: (corporateNonExpired ? true : false),
            email: this.formGroup.get('email').value,
            address: this.formGroup.get('address').value,
            telpNumber: this.formGroup.get('telpNumber').value,
            faxNumber: this.formGroup.get('faxNumber').value
        };
        super.onSubmit(data, 'security', 'post-corporate')
            .pipe(takeUntil(this.destroy$))
            .subscribe(response => {
            if (response.respStatusCode === ResponseCode.OK_DEFAULT.toString()) {
                this.router.navigate(['/app/mgmt/corporate']);
            }
        });
    }
}
CorporateAddEditPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: CorporateAddEditPageComponent, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: i1.ActivatedRoute }, { token: CorporateService }], target: i0.ɵɵFactoryTarget.Component });
CorporateAddEditPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: CorporateAddEditPageComponent, selector: "do-corporate-add-edit-page", usesInheritance: true, ngImport: i0, template: "<do-page-outlet [header]=\"'header.'+action+'-corporate'\" [url]=\"'/app/mgmt/corporate'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <form [formGroup]=\"formGroup\">\n        <do-input-text\n          [name]=\"'corporateCode'\"\n          [label]=\"'Corporate Code'\"\n          [required]=\"true\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"corporateCode\">\n        </do-input-text>\n        <do-input-text\n          [name]=\"'corporateName'\"\n          [label]=\"'Corporate Name'\"\n          [required]=\"true\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"corporateName\">\n        </do-input-text>\n        <do-checkbox\n          [name]=\"'corporateNonExpired'\"\n          [label]=\"'Non Expired'\"\n          [data]=\"dataDefault\"\n          formControlName=\"corporateNonExpired\">\n        </do-checkbox>\n        <do-input-text\n          [name]=\"'email'\"\n          [label]=\"'Email'\"\n          [required]=\"true\"\n          [pattern]=\"patternEmail\"\n          [paramError]=\"{value:5}\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"email\">\n        </do-input-text>\n        <do-textarea\n          [name]=\"'address'\"\n          [label]=\"'Address'\"\n          [required]=\"true\"\n          [minLength]=\"5\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"address\">\n        </do-textarea>\n        <do-input-text\n          [name]=\"'telpNumber'\"\n          [label]=\"'Telp.'\"\n          [required]=\"true\"\n          [pattern]=\"patternPhoneNumber\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"telpNumber\">\n        </do-input-text>\n        <do-input-text\n          [name]=\"'faxNumber'\"\n          [label]=\"'Fax.'\"\n          [pattern]=\"patternPhoneNumber\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"faxNumber\">\n        </do-input-text>\n      </form>\n    </div>\n  </div>\n  <do-button-submit\n    [submitTitle]=\"action\"\n    [resetTitle]=\"'Cancel'\"\n    [formGroupButton]=\"formGroup\"\n    [disabledButton]=\"disabled\"\n    (onReset)=\"onReset()\"\n    (onSubmit)=\"onSubmit()\"\n    pagefooter>\n  </do-button-submit>\n</do-page-outlet>\n", styles: [""], components: [{ type: i3.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i3.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i3.DoCheckboxComponent, selector: "do-checkbox", inputs: ["colLabel", "colInput", "data"], outputs: ["onChecked"] }, { type: i3.DoTextareaComponent, selector: "do-textarea", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "height"] }, { type: i3.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i4.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: CorporateAddEditPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-corporate-add-edit-page',
                    styleUrls: ['./corporate-add-edit-page.component.scss'],
                    templateUrl: './corporate-add-edit-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: i1.ActivatedRoute }, { type: CorporateService }]; } });

const routes$7 = [{
        path: '',
        component: MgmtCorporateComponent,
        canActivateChild: [AuthGuardChildService],
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
class DoMgmtCorporateRoutingModule {
}
DoMgmtCorporateRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtCorporateRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoMgmtCorporateRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtCorporateRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
DoMgmtCorporateRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtCorporateRoutingModule, imports: [[RouterModule.forChild(routes$7)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtCorporateRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$7)],
                    exports: [RouterModule],
                }]
        }] });

const components$7 = [
    MgmtCorporateComponent,
    CorporateListPageComponent,
    CorporateAddEditPageComponent,
];
const modules$7 = [
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NbCardModule,
    NbAlertModule,
    NbIconModule,
    NbButtonModule,
    NbDialogModule.forChild(),
    NbTabsetModule,
    NbSpinnerModule,
    DoThemeModule,
    DoInputModule,
    DoCheckBoxModule,
    DoButtonModule,
    DoBaseModule,
    DoSelectModule,
    DoDatatableModule,
    DoEditorModule,
    DoMgmtCorporateRoutingModule,
];
const providers$7 = [
    CorporateService,
];
class DoMgmtCorporateModule {
}
DoMgmtCorporateModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtCorporateModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoMgmtCorporateModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtCorporateModule, declarations: [MgmtCorporateComponent,
        CorporateListPageComponent,
        CorporateAddEditPageComponent], imports: [FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        NbCardModule,
        NbAlertModule,
        NbIconModule,
        NbButtonModule, i1$1.NbDialogModule, NbTabsetModule,
        NbSpinnerModule,
        DoThemeModule,
        DoInputModule,
        DoCheckBoxModule,
        DoButtonModule,
        DoBaseModule,
        DoSelectModule,
        DoDatatableModule,
        DoEditorModule,
        DoMgmtCorporateRoutingModule] });
DoMgmtCorporateModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtCorporateModule, providers: [
        ...providers$7,
    ], imports: [[
            ...modules$7,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtCorporateModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        ...modules$7,
                    ],
                    declarations: [
                        ...components$7,
                    ],
                    providers: [
                        ...providers$7,
                    ],
                }]
        }] });

class MgmtAppsComponent {
}
MgmtAppsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MgmtAppsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MgmtAppsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: MgmtAppsComponent, selector: "do-mgmt-apps", ngImport: i0, template: `
    <router-outlet></router-outlet>
  `, isInline: true, directives: [{ type: i1.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MgmtAppsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-mgmt-apps',
                    template: `
    <router-outlet></router-outlet>
  `,
                }]
        }] });

class AppsService {
    getApps() {
        return this.apps;
    }
    setApps(apps) {
        this.apps = apps;
    }
}
AppsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AppsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
AppsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AppsService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AppsService, decorators: [{
            type: Injectable
        }] });

class AppsListPageComponent extends BaseFilterComponent {
    constructor(injector, router, appsService, dialogService) {
        super(injector, {
            appCode: [],
            appName: [],
        });
        this.injector = injector;
        this.router = router;
        this.appsService = appsService;
        this.dialogService = dialogService;
        this.columns = [
            { name: 'Code', prop: 'appCode', width: 150, frozenLeft: true },
            { name: 'Name', prop: 'appName', width: 150, frozenLeft: true },
            { name: 'Description', prop: 'description', width: 200, frozenLeft: true },
            { name: 'Created', prop: 'createdBy' },
            { name: 'Created Date', prop: 'createdDate' },
            { name: 'Modified', prop: 'modifiedBy' },
            { name: 'Modified Date', prop: 'modifiedDate' },
            { name: 'Active', prop: 'active' },
        ];
        this.reload = false;
        this.expanded = false;
        this.apiPath = this.api['security']['datatable-apps'];
        this.apiPathDelete = this.api['security']['delete-apps'];
        this.sort = {
            asc: ['appCode']
        };
        this.filters = [
            { controlName: 'appCode', type: 'input' },
            { controlName: 'appName', type: 'input' }
        ];
    }
    ngOnInit() {
    }
    onAdd() {
        this.appsService.setApps(null);
        this.router.navigate(['/app/mgmt/apps', 'add']);
    }
    onViewDetail(data) {
        this.appsService.setApps(data);
        this.router.navigate(['/app/mgmt/apps', 'edit']);
    }
    onDeleteDialog(data, dialog) {
        this.reload = false;
        this.appCodes = [];
        data.forEach(value => {
            this.appCodes.push(value.appCode);
        });
        this.dialogService.open(dialog, { context: 'alert.delete' });
    }
    onDelete(ref) {
        this.disabled = true;
        this.http.HTTP_AUTH(this.apiPathDelete, this.appCodes)
            .pipe(takeUntil(this.destroy$))
            .subscribe((success) => {
            ref.close();
            this.disabled = false;
            this.reload = true;
            this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
        }, (error) => {
            this.disabled = false;
            this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
        });
    }
    onReset() {
        this.router.navigate(['/app/mgmt/apps']);
    }
}
AppsListPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AppsListPageComponent, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: AppsService }, { token: i1$1.NbDialogService }], target: i0.ɵɵFactoryTarget.Component });
AppsListPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: AppsListPageComponent, selector: "do-apps-list-page", usesInheritance: true, ngImport: i0, template: "<do-page-outlet [header]=\"'header.apps-management'\" [hidefooter]=\"true\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [sort]=\"sort\"\n        [reloadFn]=\"reload\"\n        (onAdd)=\"onAdd()\"\n        (onEdit)=\"onViewDetail($event)\"\n        (onDelete)=\"onDeleteDialog($event, dialogdelete)\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'appCode'\"\n            [label]=\"'App Code'\"\n            formControlName=\"appCode\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'appName'\"\n            [label]=\"'App Name'\"\n            formControlName=\"appName\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n\n<ng-template #dialogdelete let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"danger\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <do-button-submit\n        [colLabel]=\"0\"\n        [colButton]=\"12\"\n        [submitTitle]=\"'Delete'\"\n        [resetTitle]=\"'Cancel'\"\n        [disabledButton]=\"disabled\"\n        (onReset)=\"ref.close()\"\n        (onSubmit)=\"onDelete(ref)\">\n      </do-button-submit>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>\n", styles: [""], components: [{ type: i3.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i3.DoDatatableComponent, selector: "do-datatable", inputs: ["rows", "columns", "filters", "selected", "limit", "count", "offset", "externalPaging", "externalSorting", "loadingIndicator", "scrollbarH", "scrollbarV", "reorderable", "sortType", "messages", "selectionType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "header", "column", "footer", "add", "edit", "delete", "filter", "api", "startWithOpenData", "filterEvent", "formGroupFilter", "sort", "sortsDefault", "autoLoad", "filterFn", "filterDoFetchFn", "reloadFn"], outputs: ["onAdd", "onEdit", "onDelete", "onSearch", "onFilter", "onButtonCell", "onLoading", "onSelected"] }, { type: i3.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i1$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i1$1.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i3.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i6.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AppsListPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-apps-list-page',
                    styleUrls: ['./apps-list-page.component.scss'],
                    templateUrl: './apps-list-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: AppsService }, { type: i1$1.NbDialogService }]; } });

class AppsAddEditPageComponent extends BaseFormComponent {
    constructor(injector, router, route, appsService) {
        super(injector, {
            appCode: [],
            appName: [],
            description: [],
        });
        this.injector = injector;
        this.router = router;
        this.route = route;
        this.appsService = appsService;
        this.action = 'Add';
        if (this.appsService.getApps() || (this.route.snapshot.params['action'] === 'add')) {
            if ((this.route.snapshot.params['action'] === 'edit')) {
                this.action = 'Edit';
                this.formGroup.get('appCode').setValue(this.appsService.getApps().appCode);
                this.formGroup.get('appName').setValue(this.appsService.getApps().appName);
                this.formGroup.get('description').setValue(this.appsService.getApps().description);
                this.formGroup.get('appCode').disable();
            }
        }
        else {
            this.router.navigate(['/app/mgmt/apps']);
        }
    }
    ngOnInit() { }
    onReset() {
        this.router.navigate(['/app/mgmt/apps']);
    }
    onSubmit() {
        const data = {
            appCode: this.formGroup.get('appCode').value,
            appName: this.formGroup.get('appName').value,
            description: this.formGroup.get('description').value,
        };
        super.onSubmit(data, 'security', 'post-apps')
            .pipe(takeUntil(this.destroy$))
            .subscribe(response => {
            if (response.respStatusCode === ResponseCode.OK_DEFAULT.toString()) {
                this.router.navigate(['/app/mgmt/apps']);
            }
        });
    }
}
AppsAddEditPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AppsAddEditPageComponent, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: i1.ActivatedRoute }, { token: AppsService }], target: i0.ɵɵFactoryTarget.Component });
AppsAddEditPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: AppsAddEditPageComponent, selector: "do-apps-add-edit-page", usesInheritance: true, ngImport: i0, template: "<do-page-outlet [header]=\"'header.'+action+'-apps'\" [url]=\"'/app/mgmt/apps'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <form [formGroup]=\"formGroup\">\n        <do-input-text\n          [name]=\"'appCode'\"\n          [label]=\"'App Code'\"\n          [required]=\"true\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"appCode\">\n        </do-input-text>\n        <do-input-text\n          [name]=\"'appName'\"\n          [label]=\"'App Name'\"\n          [required]=\"true\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"appName\">\n        </do-input-text>\n        <do-textarea\n          [name]=\"'description'\"\n          [label]=\"'Description'\"\n          [minLength]=\"5\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"description\">\n        </do-textarea>\n      </form>\n    </div>\n  </div>\n  <do-button-submit\n    [submitTitle]=\"action\"\n    [resetTitle]=\"'Cancel'\"\n    [formGroupButton]=\"formGroup\"\n    [disabledButton]=\"disabled\"\n    (onReset)=\"onReset()\"\n    (onSubmit)=\"onSubmit()\"\n    pagefooter>\n  </do-button-submit>\n</do-page-outlet>\n", styles: [""], components: [{ type: i3.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i3.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i3.DoTextareaComponent, selector: "do-textarea", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "height"] }, { type: i3.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AppsAddEditPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-apps-add-edit-page',
                    styleUrls: ['./apps-add-edit-page.component.scss'],
                    templateUrl: './apps-add-edit-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: i1.ActivatedRoute }, { type: AppsService }]; } });

const routes$6 = [{
        path: '',
        component: MgmtAppsComponent,
        canActivateChild: [AuthGuardChildService],
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
class DoMgmtAppsRoutingModule {
}
DoMgmtAppsRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtAppsRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoMgmtAppsRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtAppsRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
DoMgmtAppsRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtAppsRoutingModule, imports: [[RouterModule.forChild(routes$6)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtAppsRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$6)],
                    exports: [RouterModule],
                }]
        }] });

const components$6 = [
    MgmtAppsComponent,
    AppsListPageComponent,
    AppsAddEditPageComponent,
];
const modules$6 = [
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NbCardModule,
    NbAlertModule,
    NbIconModule,
    NbButtonModule,
    NbDialogModule.forChild(),
    NbTabsetModule,
    NbSpinnerModule,
    DoThemeModule,
    DoInputModule,
    DoCheckBoxModule,
    DoButtonModule,
    DoBaseModule,
    DoSelectModule,
    DoDatatableModule,
    DoEditorModule,
    DoMgmtAppsRoutingModule,
];
const providers$6 = [
    AppsService,
];
class DoMgmtAppsModule {
}
DoMgmtAppsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtAppsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoMgmtAppsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtAppsModule, declarations: [MgmtAppsComponent,
        AppsListPageComponent,
        AppsAddEditPageComponent], imports: [FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        NbCardModule,
        NbAlertModule,
        NbIconModule,
        NbButtonModule, i1$1.NbDialogModule, NbTabsetModule,
        NbSpinnerModule,
        DoThemeModule,
        DoInputModule,
        DoCheckBoxModule,
        DoButtonModule,
        DoBaseModule,
        DoSelectModule,
        DoDatatableModule,
        DoEditorModule,
        DoMgmtAppsRoutingModule] });
DoMgmtAppsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtAppsModule, providers: [
        ...providers$6,
    ], imports: [[
            ...modules$6,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtAppsModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        ...modules$6,
                    ],
                    declarations: [
                        ...components$6,
                    ],
                    providers: [
                        ...providers$6,
                    ],
                }]
        }] });

class MgmtOccupationComponent {
}
MgmtOccupationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MgmtOccupationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MgmtOccupationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: MgmtOccupationComponent, selector: "do-mgmt-occupation", ngImport: i0, template: `
    <router-outlet></router-outlet>
  `, isInline: true, directives: [{ type: i1.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MgmtOccupationComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-mgmt-occupation',
                    template: `
    <router-outlet></router-outlet>
  `,
                }]
        }] });

class OccupationService {
    getOccupation() {
        return this.occupation;
    }
    setOccupation(occupation) {
        this.occupation = occupation;
    }
}
OccupationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: OccupationService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
OccupationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: OccupationService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: OccupationService, decorators: [{
            type: Injectable
        }] });

class OccupationListPageComponent extends BaseFilterComponent {
    constructor(injector, router, occupationService, dialogService) {
        super(injector, {
            code: [],
            name: [],
        });
        this.injector = injector;
        this.router = router;
        this.occupationService = occupationService;
        this.dialogService = dialogService;
        this.columns = [
            { name: 'Code', prop: 'code', width: 225, frozenLeft: true },
            { name: 'Name', prop: 'name', width: 225, frozenLeft: true },
            { name: 'Created', prop: 'createdBy' },
            { name: 'Created Date', prop: 'createdDate' },
            { name: 'Modified', prop: 'modifiedBy' },
            { name: 'Modified Date', prop: 'modifiedDate' },
        ];
        this.reload = false;
        this.expanded = false;
        this.apiPath = this.api['security']['datatable-occupation'];
        this.apiPathDelete = this.api['security']['delete-occupation'];
        this.sort = {
            asc: ['code']
        };
        this.filters = [
            { controlName: 'code', type: 'input' },
            { controlName: 'name', type: 'input' }
        ];
    }
    ngOnInit() {
    }
    onAdd() {
        this.occupationService.setOccupation(null);
        this.router.navigate(['/app/mgmt/occupation', 'add']);
    }
    onViewDetail(data) {
        this.occupationService.setOccupation(data);
        this.router.navigate(['/app/mgmt/occupation', 'edit']);
    }
    onDeleteDialog(data, dialog) {
        this.reload = false;
        this.occupationCodes = [];
        data.forEach(value => {
            this.occupationCodes.push(value.code);
        });
        this.dialogService.open(dialog, { context: 'alert.delete' });
    }
    onDelete(ref) {
        this.disabled = true;
        this.http.HTTP_AUTH(this.apiPathDelete, this.occupationCodes)
            .pipe(takeUntil(this.destroy$))
            .subscribe((success) => {
            ref.close();
            this.disabled = false;
            this.reload = true;
            this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
        }, (error) => {
            this.disabled = false;
            this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
        });
    }
    onReset() {
        this.router.navigate(['/app/mgmt/occupation']);
    }
}
OccupationListPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: OccupationListPageComponent, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: OccupationService }, { token: i1$1.NbDialogService }], target: i0.ɵɵFactoryTarget.Component });
OccupationListPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: OccupationListPageComponent, selector: "do-occupation-list-page", usesInheritance: true, ngImport: i0, template: "<do-page-outlet [header]=\"'header.occupation-management'\" [hidefooter]=\"true\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [sort]=\"sort\"\n        [reloadFn]=\"reload\"\n        (onAdd)=\"onAdd()\"\n        (onEdit)=\"onViewDetail($event)\"\n        (onDelete)=\"onDeleteDialog($event, dialogdelete)\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'code'\"\n            [label]=\"'Occupation Code'\"\n            formControlName=\"code\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'name'\"\n            [label]=\"'Occupation Name'\"\n            formControlName=\"name\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n\n<ng-template #dialogdelete let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"danger\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <do-button-submit\n        [colLabel]=\"0\"\n        [colButton]=\"12\"\n        [submitTitle]=\"'Delete'\"\n        [resetTitle]=\"'Cancel'\"\n        [disabledButton]=\"disabled\"\n        (onReset)=\"ref.close()\"\n        (onSubmit)=\"onDelete(ref)\">\n      </do-button-submit>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>\n", styles: [""], components: [{ type: i3.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i3.DoDatatableComponent, selector: "do-datatable", inputs: ["rows", "columns", "filters", "selected", "limit", "count", "offset", "externalPaging", "externalSorting", "loadingIndicator", "scrollbarH", "scrollbarV", "reorderable", "sortType", "messages", "selectionType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "header", "column", "footer", "add", "edit", "delete", "filter", "api", "startWithOpenData", "filterEvent", "formGroupFilter", "sort", "sortsDefault", "autoLoad", "filterFn", "filterDoFetchFn", "reloadFn"], outputs: ["onAdd", "onEdit", "onDelete", "onSearch", "onFilter", "onButtonCell", "onLoading", "onSelected"] }, { type: i3.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i1$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i1$1.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i3.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i6.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: OccupationListPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-occupation-list-page',
                    styleUrls: ['./occupation-list-page.component.scss'],
                    templateUrl: './occupation-list-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: OccupationService }, { type: i1$1.NbDialogService }]; } });

class OccupationAddEditPageComponent extends BaseFormComponent {
    constructor(injector, router, route, occupationService) {
        super(injector, {
            code: [],
            name: [],
        });
        this.injector = injector;
        this.router = router;
        this.route = route;
        this.occupationService = occupationService;
        this.action = 'Add';
        this.dataDefault = [
            {
                selected: true,
            },
        ];
        if (this.occupationService.getOccupation() || (this.route.snapshot.params['action'] === 'add')) {
            if ((this.route.snapshot.params['action'] === 'edit')) {
                this.action = 'Edit';
                this.formGroup.get('code').setValue(this.occupationService.getOccupation().code);
                this.formGroup.get('name').setValue(this.occupationService.getOccupation().name);
                this.formGroup.get('code').disable();
            }
        }
        else {
            this.router.navigate(['/app/mgmt/occupation']);
        }
    }
    ngOnInit() { }
    onReset() {
        this.router.navigate(['/app/mgmt/occupation']);
    }
    onSubmit() {
        const data = {
            code: this.formGroup.get('code').value,
            name: this.formGroup.get('name').value,
        };
        super.onSubmit(data, 'security', 'post-occupation')
            .pipe(takeUntil(this.destroy$))
            .subscribe(response => {
            if (response.respStatusCode === ResponseCode.OK_DEFAULT.toString()) {
                this.router.navigate(['/app/mgmt/occupation']);
            }
        });
    }
}
OccupationAddEditPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: OccupationAddEditPageComponent, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: i1.ActivatedRoute }, { token: OccupationService }], target: i0.ɵɵFactoryTarget.Component });
OccupationAddEditPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: OccupationAddEditPageComponent, selector: "do-occupation-add-edit-page", usesInheritance: true, ngImport: i0, template: "<do-page-outlet [header]=\"'header.'+action+'-occupation'\" [url]=\"'/app/mgmt/occupation'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <form [formGroup]=\"formGroup\">\n        <do-input-text\n          [name]=\"'code'\"\n          [label]=\"'Occupation Code'\"\n          [required]=\"true\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"code\">\n        </do-input-text>\n        <do-input-text\n          [name]=\"'name'\"\n          [label]=\"'Occupation Name'\"\n          [required]=\"true\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"name\">\n        </do-input-text>\n      </form>\n    </div>\n  </div>\n  <do-button-submit\n    [submitTitle]=\"action\"\n    [resetTitle]=\"'Cancel'\"\n    [formGroupButton]=\"formGroup\"\n    [disabledButton]=\"disabled\"\n    (onReset)=\"onReset()\"\n    (onSubmit)=\"onSubmit()\"\n    pagefooter>\n  </do-button-submit>\n</do-page-outlet>\n", styles: [""], components: [{ type: i3.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i3.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i3.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: OccupationAddEditPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-occupation-add-edit-page',
                    styleUrls: ['./occupation-add-edit-page.component.scss'],
                    templateUrl: './occupation-add-edit-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: i1.ActivatedRoute }, { type: OccupationService }]; } });

const routes$5 = [{
        path: '',
        component: MgmtOccupationComponent,
        canActivateChild: [AuthGuardChildService],
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
class DoMgmtOccupationRoutingModule {
}
DoMgmtOccupationRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtOccupationRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoMgmtOccupationRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtOccupationRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
DoMgmtOccupationRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtOccupationRoutingModule, imports: [[RouterModule.forChild(routes$5)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtOccupationRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$5)],
                    exports: [RouterModule],
                }]
        }] });

const components$5 = [
    MgmtOccupationComponent,
    OccupationListPageComponent,
    OccupationAddEditPageComponent,
];
const modules$5 = [
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NbCardModule,
    NbAlertModule,
    NbIconModule,
    NbButtonModule,
    NbDialogModule.forChild(),
    NbTabsetModule,
    NbSpinnerModule,
    DoThemeModule,
    DoInputModule,
    DoCheckBoxModule,
    DoButtonModule,
    DoBaseModule,
    DoSelectModule,
    DoDatatableModule,
    DoEditorModule,
    DoMgmtOccupationRoutingModule,
];
const providers$5 = [
    OccupationService,
];
class DoMgmtOccupationModule {
}
DoMgmtOccupationModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtOccupationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoMgmtOccupationModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtOccupationModule, declarations: [MgmtOccupationComponent,
        OccupationListPageComponent,
        OccupationAddEditPageComponent], imports: [FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        NbCardModule,
        NbAlertModule,
        NbIconModule,
        NbButtonModule, i1$1.NbDialogModule, NbTabsetModule,
        NbSpinnerModule,
        DoThemeModule,
        DoInputModule,
        DoCheckBoxModule,
        DoButtonModule,
        DoBaseModule,
        DoSelectModule,
        DoDatatableModule,
        DoEditorModule,
        DoMgmtOccupationRoutingModule] });
DoMgmtOccupationModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtOccupationModule, providers: [
        ...providers$5,
    ], imports: [[
            ...modules$5,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtOccupationModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        ...modules$5,
                    ],
                    declarations: [
                        ...components$5,
                    ],
                    providers: [
                        ...providers$5,
                    ],
                }]
        }] });

class MgmtBusinessPartnerComponent {
}
MgmtBusinessPartnerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MgmtBusinessPartnerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MgmtBusinessPartnerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: MgmtBusinessPartnerComponent, selector: "do-mgmt-business-partner", ngImport: i0, template: `
    <router-outlet></router-outlet>
  `, isInline: true, directives: [{ type: i1.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MgmtBusinessPartnerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-mgmt-business-partner',
                    template: `
    <router-outlet></router-outlet>
  `,
                }]
        }] });

class BusinessPartnerService {
    getB2B() {
        return this.b2b;
    }
    setB2B(b2b) {
        this.b2b = b2b;
    }
}
BusinessPartnerService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: BusinessPartnerService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
BusinessPartnerService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: BusinessPartnerService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: BusinessPartnerService, decorators: [{
            type: Injectable
        }] });

class BusinessPartnerListPageComponent extends BaseFilterComponent {
    constructor(injector, router, businessPartnerService) {
        super(injector, {
            bpName: [],
        });
        this.injector = injector;
        this.router = router;
        this.businessPartnerService = businessPartnerService;
        this.selectionType = SelectionType.single;
        this.columns = [
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
        this.expanded = false;
        this.sort = {
            asc: ['businessPartner.bpName']
        };
        this.apiPath = this.api['master']['datatable-business-partner'];
        this.filters = [
            { controlName: 'bpName', type: 'input' }
        ];
    }
    ngOnInit() {
    }
    onAdd() {
        this.businessPartnerService.setB2B(null);
        this.router.navigate(['/app/mgmt/business-partner', 'add']);
    }
    onViewDetail(data) {
        this.businessPartnerService.setB2B(data);
        this.router.navigate(['/app/mgmt/business-partner', 'edit']);
    }
    onReset() {
        this.router.navigate(['/app/mgmt/business-partner']);
    }
}
BusinessPartnerListPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: BusinessPartnerListPageComponent, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: BusinessPartnerService }], target: i0.ɵɵFactoryTarget.Component });
BusinessPartnerListPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: BusinessPartnerListPageComponent, selector: "do-business-partner-list-page", usesInheritance: true, ngImport: i0, template: "<do-page-outlet [header]=\"'header.business-partner-management'\" [hidefooter]=\"true\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [sort]=\"sort\"\n        [delete]=\"false\"\n        [selectionType]=\"selectionType\"\n        (onAdd)=\"onAdd()\"\n        (onEdit)=\"onViewDetail($event)\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'bpName'\"\n            [label]=\"'Business Partner'\"\n            formControlName=\"bpName\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n", styles: [""], components: [{ type: i3.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i3.DoDatatableComponent, selector: "do-datatable", inputs: ["rows", "columns", "filters", "selected", "limit", "count", "offset", "externalPaging", "externalSorting", "loadingIndicator", "scrollbarH", "scrollbarV", "reorderable", "sortType", "messages", "selectionType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "header", "column", "footer", "add", "edit", "delete", "filter", "api", "startWithOpenData", "filterEvent", "formGroupFilter", "sort", "sortsDefault", "autoLoad", "filterFn", "filterDoFetchFn", "reloadFn"], outputs: ["onAdd", "onEdit", "onDelete", "onSearch", "onFilter", "onButtonCell", "onLoading", "onSelected"] }, { type: i3.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: BusinessPartnerListPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-business-partner-list-page',
                    styleUrls: ['./business-partner-list-page.component.scss'],
                    templateUrl: './business-partner-list-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: BusinessPartnerService }]; } });

class BusinessPartnerAddEditPageComponent extends BaseFormComponent {
    constructor(injector, router, route, businessPartnerService) {
        super(injector, {
            bpName: [],
            email: [],
            address: [],
            telpNumber: [],
            faxNumber: [],
            b2bNonExpired: [],
            expiredTime: [],
        });
        this.injector = injector;
        this.router = router;
        this.route = route;
        this.businessPartnerService = businessPartnerService;
        this.action = 'Add';
        this.patternEmail = Pattern.EMAIL;
        this.patternPhoneNumber = Pattern.PHONE_NUMBER;
        this.dataDefault = [
            {
                id: 'b2bNonExpired',
                selected: true,
            },
        ];
        this.isB2bNonExpired = true;
        if (this.businessPartnerService.getB2B() || (this.route.snapshot.params['action'] === 'add')) {
            if ((this.route.snapshot.params['action'] === 'edit')) {
                this.action = 'Edit';
                this.formGroup.get('bpName').setValue(this.businessPartnerService.getB2B().businessPartner.bpName);
                this.formGroup.get('email').setValue(this.businessPartnerService.getB2B().businessPartner.email);
                this.formGroup.get('address').setValue(this.businessPartnerService.getB2B().businessPartner.address);
                this.formGroup.get('telpNumber').setValue(this.businessPartnerService.getB2B().businessPartner.telpNumber);
                this.formGroup.get('faxNumber').setValue(this.businessPartnerService.getB2B().businessPartner.faxNumber);
                this.formGroup.get('b2bNonExpired').setValue([{
                        id: 'b2bNonExpired',
                        selected: this.businessPartnerService.getB2B().b2bNonExpired ? true : false,
                    }]);
                this.formGroup.get('expiredTime').setValue(this.businessPartnerService.getB2B().expiredTime);
                this.isB2bNonExpired = this.businessPartnerService.getB2B().b2bNonExpired;
            }
            else {
                this.formGroup.get('b2bNonExpired').setValue(this.dataDefault);
            }
        }
        else {
            this.router.navigate(['/app/mgmt/business-partner']);
        }
    }
    ngOnInit() { }
    onReset() {
        this.router.navigate(['/app/mgmt/business-partner']);
    }
    onCheckB2bNonExpired(event) {
        this.isB2bNonExpired = event ? true : false;
    }
    onSubmit() {
        var _a;
        const b2bNonExpired = this.formGroup.get('b2bNonExpired').value;
        const data = {
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
        super.onSubmit(data, 'master', 'post-business-partner')
            .pipe(takeUntil(this.destroy$))
            .subscribe(response => {
            if (response.respStatusCode === ResponseCode.OK_DEFAULT.toString()) {
                this.router.navigate(['/app/mgmt/business-partner']);
            }
        });
    }
}
BusinessPartnerAddEditPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: BusinessPartnerAddEditPageComponent, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: i1.ActivatedRoute }, { token: BusinessPartnerService }], target: i0.ɵɵFactoryTarget.Component });
BusinessPartnerAddEditPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: BusinessPartnerAddEditPageComponent, selector: "do-business-partner-add-edit-page", usesInheritance: true, ngImport: i0, template: "<do-page-outlet [header]=\"'header.'+action+'-business-partner'\" [url]=\"'/app/mgmt/business-partner'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <form [formGroup]=\"formGroup\">\n        <do-input-text\n          [name]=\"'bpName'\"\n          [label]=\"'Business Partner Name'\"\n          [required]=\"true\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"bpName\">\n        </do-input-text>\n        <do-checkbox\n          [name]=\"'b2bNonExpired'\"\n          [label]=\"'Non Expired'\"\n          [data]=\"dataDefault\"\n          (onChecked)=\"onCheckB2bNonExpired($event)\"\n          formControlName=\"b2bNonExpired\">\n        </do-checkbox>\n        <do-datepicker\n          [show]=\"!isB2bNonExpired\"\n          [name]=\"'expiredTime'\"\n          [label]=\"'Expired Date'\"\n          [required]=\"!isB2bNonExpired\"\n          formControlName=\"expiredTime\">\n        </do-datepicker>\n        <do-input-text\n          [name]=\"'email'\"\n          [label]=\"'Email'\"\n          [required]=\"true\"\n          [pattern]=\"patternEmail\"\n          [paramError]=\"{value:5}\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"email\">\n        </do-input-text>\n        <do-textarea\n          [name]=\"'address'\"\n          [label]=\"'Address'\"\n          [required]=\"true\"\n          [minLength]=\"5\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"address\">\n        </do-textarea>\n        <do-input-text\n          [name]=\"'telpNumber'\"\n          [label]=\"'Telp.'\"\n          [required]=\"true\"\n          [pattern]=\"patternPhoneNumber\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"telpNumber\">\n        </do-input-text>\n        <do-input-text\n          [name]=\"'faxNumber'\"\n          [label]=\"'Fax.'\"\n          [pattern]=\"patternPhoneNumber\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"faxNumber\">\n        </do-input-text>\n      </form>\n    </div>\n  </div>\n  <do-button-submit\n    [submitTitle]=\"action\"\n    [resetTitle]=\"'Cancel'\"\n    [formGroupButton]=\"formGroup\"\n    [disabledButton]=\"disabled\"\n    (onReset)=\"onReset()\"\n    (onSubmit)=\"onSubmit()\"\n    pagefooter>\n  </do-button-submit>\n</do-page-outlet>\n", styles: [""], components: [{ type: i3.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i3.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i3.DoCheckboxComponent, selector: "do-checkbox", inputs: ["colLabel", "colInput", "data"], outputs: ["onChecked"] }, { type: i3.DoDatePickerComponent, selector: "do-datepicker", inputs: ["placeholder", "colLabel", "colInput", "min", "max", "size", "dateMask"] }, { type: i3.DoTextareaComponent, selector: "do-textarea", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "height"] }, { type: i3.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i4.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: BusinessPartnerAddEditPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-business-partner-add-edit-page',
                    styleUrls: ['./business-partner-add-edit-page.component.scss'],
                    templateUrl: './business-partner-add-edit-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: i1.ActivatedRoute }, { type: BusinessPartnerService }]; } });

const routes$4 = [{
        path: '',
        component: MgmtBusinessPartnerComponent,
        canActivateChild: [AuthGuardChildService],
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
class DoMgmtBusinessPartnerRoutingModule {
}
DoMgmtBusinessPartnerRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtBusinessPartnerRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoMgmtBusinessPartnerRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtBusinessPartnerRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
DoMgmtBusinessPartnerRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtBusinessPartnerRoutingModule, imports: [[RouterModule.forChild(routes$4)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtBusinessPartnerRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$4)],
                    exports: [RouterModule],
                }]
        }] });

const components$4 = [
    MgmtBusinessPartnerComponent,
    BusinessPartnerListPageComponent,
    BusinessPartnerAddEditPageComponent,
];
const modules$4 = [
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NbCardModule,
    NbAlertModule,
    NbIconModule,
    NbButtonModule,
    NbDialogModule.forChild(),
    NbTabsetModule,
    NbSpinnerModule,
    DoThemeModule,
    DoInputModule,
    DoCheckBoxModule,
    DoButtonModule,
    DoBaseModule,
    DoSelectModule,
    DoDatatableModule,
    DoEditorModule,
    DoDatePickerModule,
    DoMgmtBusinessPartnerRoutingModule,
];
const providers$4 = [
    BusinessPartnerService,
];
class DoMgmtBusinessPartnerModule {
}
DoMgmtBusinessPartnerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtBusinessPartnerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoMgmtBusinessPartnerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtBusinessPartnerModule, declarations: [MgmtBusinessPartnerComponent,
        BusinessPartnerListPageComponent,
        BusinessPartnerAddEditPageComponent], imports: [FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        NbCardModule,
        NbAlertModule,
        NbIconModule,
        NbButtonModule, i1$1.NbDialogModule, NbTabsetModule,
        NbSpinnerModule,
        DoThemeModule,
        DoInputModule,
        DoCheckBoxModule,
        DoButtonModule,
        DoBaseModule,
        DoSelectModule,
        DoDatatableModule,
        DoEditorModule,
        DoDatePickerModule,
        DoMgmtBusinessPartnerRoutingModule] });
DoMgmtBusinessPartnerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtBusinessPartnerModule, providers: [
        ...providers$4,
    ], imports: [[
            ...modules$4,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtBusinessPartnerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        ...modules$4,
                    ],
                    declarations: [
                        ...components$4,
                    ],
                    providers: [
                        ...providers$4,
                    ],
                }]
        }] });

class MgmtInventoryComponent {
}
MgmtInventoryComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MgmtInventoryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MgmtInventoryComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: MgmtInventoryComponent, selector: "do-mgmt-inventory", ngImport: i0, template: `
    <router-outlet></router-outlet>
  `, isInline: true, directives: [{ type: i1.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MgmtInventoryComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-mgmt-inventory',
                    template: `
    <router-outlet></router-outlet>
  `,
                }]
        }] });

class InventoryService {
    getAsset() {
        return this.asset;
    }
    setAsset(asset) {
        this.asset = asset;
    }
}
InventoryService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: InventoryService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
InventoryService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: InventoryService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: InventoryService, decorators: [{
            type: Injectable
        }] });

class InventoryListPageComponent extends BaseFilterComponent {
    constructor(injector, router, inventoryService, dialogService) {
        super(injector, {
            assetName: [],
            assetCondition: [],
        });
        this.injector = injector;
        this.router = router;
        this.inventoryService = inventoryService;
        this.dialogService = dialogService;
        this.columns = [
            { name: 'Asset Name', prop: 'assetName', width: 175, frozenLeft: true },
            { name: 'Condition', prop: 'assetConditionValue', width: 100, frozenLeft: true },
            { name: 'Quantity', prop: 'quantity', width: 75, frozenLeft: true },
            { name: 'Location', prop: 'location', width: 225, frozenLeft: true },
            { name: 'Created', prop: 'createdBy' },
            { name: 'Created Date', prop: 'createdDate' },
            { name: 'Modified', prop: 'modifiedBy' },
            { name: 'Modified Date', prop: 'modifiedDate' },
        ];
        this.reload = false;
        this.expanded = false;
        this.apiPath = this.api['master']['datatable-inventory'];
        this.apiPathDelete = this.api['master']['delete-inventory'];
        this.sort = {
            asc: ['businessPartner.bpName']
        };
        this.filters = [
            { controlName: 'assetName', type: 'input' },
            { controlName: 'assetCondition', type: 'input' }
        ];
    }
    ngOnInit() {
    }
    onAdd() {
        this.inventoryService.setAsset(null);
        this.router.navigate(['/app/mgmt/inventory', 'add']);
    }
    onViewDetail(data) {
        this.inventoryService.setAsset(data);
        this.router.navigate(['/app/mgmt/inventory', 'edit']);
    }
    onDeleteDialog(data, dialog) {
        this.reload = false;
        this.assetIds = [];
        data.forEach(value => {
            this.assetIds.push(value.id);
        });
        this.dialogService.open(dialog, { context: 'alert.delete' });
    }
    onDelete(ref) {
        this.disabled = true;
        this.http.HTTP_AUTH(this.apiPathDelete, this.assetIds)
            .pipe(takeUntil(this.destroy$))
            .subscribe((success) => {
            ref.close();
            this.disabled = false;
            this.reload = true;
            this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
        }, (error) => {
            this.disabled = false;
            this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
        });
    }
    onReset() {
        this.router.navigate(['/app/mgmt/inventory']);
    }
}
InventoryListPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: InventoryListPageComponent, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: InventoryService }, { token: i1$1.NbDialogService }], target: i0.ɵɵFactoryTarget.Component });
InventoryListPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: InventoryListPageComponent, selector: "do-inventory-list-page", usesInheritance: true, ngImport: i0, template: "<do-page-outlet [header]=\"'header.inventory-management'\" [hidefooter]=\"true\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [sort]=\"sort\"\n        [reloadFn]=\"reload\"\n        (onAdd)=\"onAdd()\"\n        (onEdit)=\"onViewDetail($event)\"\n        (onDelete)=\"onDeleteDialog($event, dialogdelete)\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'assetName'\"\n            [label]=\"'Asset Name'\"\n            formControlName=\"assetName\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'assetCondition'\"\n            [label]=\"'Condition'\"\n            formControlName=\"assetCondition\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n\n<ng-template #dialogdelete let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"danger\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <do-button-submit\n        [colLabel]=\"0\"\n        [colButton]=\"12\"\n        [submitTitle]=\"'Delete'\"\n        [resetTitle]=\"'Cancel'\"\n        [disabledButton]=\"disabled\"\n        (onReset)=\"ref.close()\"\n        (onSubmit)=\"onDelete(ref)\">\n      </do-button-submit>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>\n", styles: [""], components: [{ type: i3.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i3.DoDatatableComponent, selector: "do-datatable", inputs: ["rows", "columns", "filters", "selected", "limit", "count", "offset", "externalPaging", "externalSorting", "loadingIndicator", "scrollbarH", "scrollbarV", "reorderable", "sortType", "messages", "selectionType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "header", "column", "footer", "add", "edit", "delete", "filter", "api", "startWithOpenData", "filterEvent", "formGroupFilter", "sort", "sortsDefault", "autoLoad", "filterFn", "filterDoFetchFn", "reloadFn"], outputs: ["onAdd", "onEdit", "onDelete", "onSearch", "onFilter", "onButtonCell", "onLoading", "onSelected"] }, { type: i3.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i1$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i1$1.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i3.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i6.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: InventoryListPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-inventory-list-page',
                    styleUrls: ['./inventory-list-page.component.scss'],
                    templateUrl: './inventory-list-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: InventoryService }, { type: i1$1.NbDialogService }]; } });

class InventoryAddEditPageComponent extends BaseFormComponent {
    constructor(injector, router, route, inventoryService) {
        var _a, _b, _c;
        super(injector, {
            assetName: [],
            assetCondition: [],
            quantity: [],
            description: [],
            atOffice: [],
            businessPartner: [],
        });
        this.injector = injector;
        this.router = router;
        this.route = route;
        this.inventoryService = inventoryService;
        this.action = 'Add';
        this.dataDefault = [
            {
                id: 'atOffice',
                name: 'At Office',
                selected: true,
            },
        ];
        this.isAtOffice = true;
        if (this.inventoryService.getAsset() || (this.route.snapshot.params['action'] === 'add')) {
            this.apiSelectCondition = this.api['master']['select-parameter'];
            this.paramSelectCondition = [{
                    key: 'parameterGroupCode',
                    value: 'ASSET_CONDITION',
                }];
            this.apiSelectBusinessPartner = this.api['master']['select-business-partner'];
            if ((this.route.snapshot.params['action'] === 'edit')) {
                this.action = 'Edit';
                this.formGroup.get('assetName').setValue(this.inventoryService.getAsset().assetName);
                this.formGroup.controls['assetCondition'].setValue({
                    label: (_a = this.inventoryService.getAsset()) === null || _a === void 0 ? void 0 : _a.assetConditionValue,
                    value: (_b = this.inventoryService.getAsset()) === null || _b === void 0 ? void 0 : _b.assetConditionCode
                });
                this.formGroup.get('quantity').setValue(this.inventoryService.getAsset().quantity);
                this.formGroup.get('description').setValue(this.inventoryService.getAsset().description);
                this.formGroup.get('atOffice').setValue([{
                        id: 'atOffice',
                        name: 'At Office',
                        selected: this.inventoryService.getAsset().businessPartner ? false : true,
                    }]);
                this.isAtOffice = this.inventoryService.getAsset().businessPartner ? false : true;
                if (!this.isAtOffice) {
                    this.formGroup.get('businessPartner').setValue((_c = this.inventoryService.getAsset()) === null || _c === void 0 ? void 0 : _c.businessPartner['bpName']);
                }
            }
            else {
                this.formGroup.get('atOffice').setValue(this.dataDefault);
            }
        }
        else {
            this.router.navigate(['/app/mgmt/inventory']);
        }
    }
    ngOnInit() { }
    onReset() {
        this.router.navigate(['/app/mgmt/inventory']);
    }
    onCheckAtOffice(event) {
        this.isAtOffice = event ? true : false;
    }
    onSubmit() {
        var _a, _b, _c, _d;
        const atOffice = this.formGroup.get('atOffice').value;
        let businessPartner = null;
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
        const data = {
            id: (_d = this.inventoryService.getAsset()) === null || _d === void 0 ? void 0 : _d.id,
            assetName: this.formGroup.get('assetName').value,
            assetConditionCode: this.selectValue('assetCondition'),
            assetConditionValue: this.selectLabel('assetCondition'),
            quantity: this.formGroup.get('quantity').value,
            description: this.formGroup.get('description').value,
            businessPartner,
        };
        super.onSubmit(data, 'master', 'post-inventory')
            .pipe(takeUntil(this.destroy$))
            .subscribe(response => {
            if (response.respStatusCode === ResponseCode.OK_DEFAULT.toString()) {
                this.router.navigate(['/app/mgmt/inventory']);
            }
        });
    }
    selectLabel(prop) {
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
    }
    selectValue(prop) {
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
    }
}
InventoryAddEditPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: InventoryAddEditPageComponent, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: i1.ActivatedRoute }, { token: InventoryService }], target: i0.ɵɵFactoryTarget.Component });
InventoryAddEditPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: InventoryAddEditPageComponent, selector: "do-inventory-add-edit-page", usesInheritance: true, ngImport: i0, template: "<do-page-outlet [header]=\"'header.'+action+'-inventory'\" [url]=\"'/app/mgmt/inventory'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <form [formGroup]=\"formGroup\">\n        <do-input-text\n          [name]=\"'assetName'\"\n          [label]=\"'Asset Name'\"\n          [required]=\"true\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"assetName\">\n        </do-input-text>\n        <do-select\n          [name]=\"'assetCondition'\"\n          [label]=\"'Condition'\"\n          [required]=\"true\"\n          [api]=\"apiSelectCondition\"\n          [queryParam]=\"paramSelectCondition\"\n          [searchable]=\"false\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"assetCondition\">\n        </do-select>\n        <do-input-text\n          [name]=\"'quantity'\"\n          [label]=\"'Quantity'\"\n          [type]=\"'number'\"\n          [required]=\"true\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"quantity\">\n        </do-input-text>\n        <do-checkbox\n          [name]=\"'atOffice'\"\n          [label]=\"'Location'\"\n          [data]=\"dataDefault\"\n          (onChecked)=\"onCheckAtOffice($event)\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"atOffice\">\n        </do-checkbox>\n        <do-select\n          [show]=\"!isAtOffice\"\n          [name]=\"'businessPartner'\"\n          [nolabel]=\"true\"\n          [required]=\"!isAtOffice\"\n          [api]=\"apiSelectBusinessPartner\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"businessPartner\">\n        </do-select>\n        <do-textarea\n          [name]=\"'description'\"\n          [label]=\"'Description'\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"description\">\n        </do-textarea>\n      </form>\n    </div>\n  </div>\n  <do-button-submit\n    [submitTitle]=\"action\"\n    [resetTitle]=\"'Cancel'\"\n    [formGroupButton]=\"formGroup\"\n    [disabledButton]=\"disabled\"\n    (onReset)=\"onReset()\"\n    (onSubmit)=\"onSubmit()\"\n    pagefooter>\n  </do-button-submit>\n</do-page-outlet>\n", styles: [""], components: [{ type: i3.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i3.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i3.DoSelectComponent, selector: "do-select", inputs: ["placeholder", "colLabel", "colInput", "items", "multiple", "loading", "addTag", "closeOnSelect", "clearable", "searchable", "hideSelected", "minTermLength", "maxTermLength", "api", "limit", "offsetNextLoad", "queryParam"], outputs: ["onSelect", "onClear"] }, { type: i3.DoCheckboxComponent, selector: "do-checkbox", inputs: ["colLabel", "colInput", "data"], outputs: ["onChecked"] }, { type: i3.DoTextareaComponent, selector: "do-textarea", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "height"] }, { type: i3.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: InventoryAddEditPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-inventory-add-edit-page',
                    styleUrls: ['./inventory-add-edit-page.component.scss'],
                    templateUrl: './inventory-add-edit-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: i1.ActivatedRoute }, { type: InventoryService }]; } });

const routes$3 = [{
        path: '',
        component: MgmtInventoryComponent,
        canActivateChild: [AuthGuardChildService],
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
class DoMgmtInventoryRoutingModule {
}
DoMgmtInventoryRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtInventoryRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoMgmtInventoryRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtInventoryRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
DoMgmtInventoryRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtInventoryRoutingModule, imports: [[RouterModule.forChild(routes$3)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtInventoryRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$3)],
                    exports: [RouterModule],
                }]
        }] });

const components$3 = [
    MgmtInventoryComponent,
    InventoryListPageComponent,
    InventoryAddEditPageComponent,
];
const modules$3 = [
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NbCardModule,
    NbAlertModule,
    NbIconModule,
    NbButtonModule,
    NbDialogModule.forChild(),
    NbTabsetModule,
    NbSpinnerModule,
    DoThemeModule,
    DoInputModule,
    DoCheckBoxModule,
    DoButtonModule,
    DoBaseModule,
    DoSelectModule,
    DoDatatableModule,
    DoEditorModule,
    DoMgmtInventoryRoutingModule,
];
const providers$3 = [
    InventoryService,
];
class DoMgmtInventoryModule {
}
DoMgmtInventoryModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtInventoryModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoMgmtInventoryModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtInventoryModule, declarations: [MgmtInventoryComponent,
        InventoryListPageComponent,
        InventoryAddEditPageComponent], imports: [FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        NbCardModule,
        NbAlertModule,
        NbIconModule,
        NbButtonModule, i1$1.NbDialogModule, NbTabsetModule,
        NbSpinnerModule,
        DoThemeModule,
        DoInputModule,
        DoCheckBoxModule,
        DoButtonModule,
        DoBaseModule,
        DoSelectModule,
        DoDatatableModule,
        DoEditorModule,
        DoMgmtInventoryRoutingModule] });
DoMgmtInventoryModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtInventoryModule, providers: [
        ...providers$3,
    ], imports: [[
            ...modules$3,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtInventoryModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        ...modules$3,
                    ],
                    declarations: [
                        ...components$3,
                    ],
                    providers: [
                        ...providers$3,
                    ],
                }]
        }] });

class MgmtEmployeeComponent {
}
MgmtEmployeeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MgmtEmployeeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MgmtEmployeeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: MgmtEmployeeComponent, selector: "do-mgmt-employee", ngImport: i0, template: `
    <router-outlet></router-outlet>
  `, isInline: true, directives: [{ type: i1.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MgmtEmployeeComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-mgmt-employee',
                    template: `
    <router-outlet></router-outlet>
  `,
                }]
        }] });

class EmployeeService {
    getEmployeeHeader() {
        return this.employeeHeader;
    }
    setEmployeeHeader(employeeHeader) {
        this.employeeHeader = employeeHeader;
    }
}
EmployeeService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
EmployeeService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeService, decorators: [{
            type: Injectable
        }] });

class EmployeeListPageComponent extends BaseFilterComponent {
    constructor(injector, router, employeeService) {
        super(injector, {
            idEmployee: [],
            fullname: [],
            occupationName: [],
        });
        this.injector = injector;
        this.router = router;
        this.employeeService = employeeService;
        this.columns = [
            { name: 'NIK', prop: 'idEmployee', width: 50, frozenLeft: true, sortable: true },
            { name: 'Name', prop: 'user.fullname', width: 155, frozenLeft: true, sortable: true },
            { name: 'Occupation', prop: 'occupationName', width: 155, frozenLeft: true },
            { name: 'Phone Number', prop: 'phoneNumber' },
            { name: 'Email', prop: 'user.email' },
            { name: 'Address', prop: 'address' },
        ];
        this.reload = false;
        this.expanded = false;
        this.selectionType = SelectionType.single;
        this.apiPath = this.api['security']['datatable-employee'];
        this.sort = {
            asc: ['user.fullname']
        };
        this.sortsDefault = [
            { prop: 'user.fullname', dir: 'asc' }
        ];
        this.filters = [
            { controlName: 'idEmployee', type: 'input' },
            { controlName: 'fullname', type: 'input' },
            { controlName: 'occupationName', type: 'input' }
        ];
    }
    ngOnInit() {
    }
    onAdd() {
        this.employeeService.setEmployeeHeader(null);
        this.router.navigate(['/app/mgmt/employee', 'add']);
    }
    onViewDetail(data) {
        this.employeeService.setEmployeeHeader(data);
        this.router.navigate(['/app/mgmt/employee', 'edit']);
    }
    onReset() {
        this.router.navigate(['/app/mgmt/employee']);
    }
}
EmployeeListPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeListPageComponent, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: EmployeeService }], target: i0.ɵɵFactoryTarget.Component });
EmployeeListPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeListPageComponent, selector: "do-employee-list-page", usesInheritance: true, ngImport: i0, template: "<do-page-outlet [header]=\"'header.employee-management'\" [hidefooter]=\"true\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [sort]=\"sort\"\n        [sortsDefault]=\"sortsDefault\"\n        [reloadFn]=\"reload\"\n        [selectionType]=\"selectionType\"\n        [delete]=\"false\"\n        (onAdd)=\"onAdd()\"\n        (onEdit)=\"onViewDetail($event)\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'fullname'\"\n            [label]=\"'Name'\"\n            formControlName=\"fullname\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'idEmployee'\"\n            [label]=\"'NIK'\"\n            formControlName=\"idEmployee\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'occupationName'\"\n            [label]=\"'Occupation Name'\"\n            formControlName=\"occupationName\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n\n", styles: [""], components: [{ type: i3.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i3.DoDatatableComponent, selector: "do-datatable", inputs: ["rows", "columns", "filters", "selected", "limit", "count", "offset", "externalPaging", "externalSorting", "loadingIndicator", "scrollbarH", "scrollbarV", "reorderable", "sortType", "messages", "selectionType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "header", "column", "footer", "add", "edit", "delete", "filter", "api", "startWithOpenData", "filterEvent", "formGroupFilter", "sort", "sortsDefault", "autoLoad", "filterFn", "filterDoFetchFn", "reloadFn"], outputs: ["onAdd", "onEdit", "onDelete", "onSearch", "onFilter", "onButtonCell", "onLoading", "onSelected"] }, { type: i3.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeListPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-employee-list-page',
                    styleUrls: ['./employee-list-page.component.scss'],
                    templateUrl: './employee-list-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: EmployeeService }]; } });

class EmployeeAddPageComponent extends BaseFormComponent {
    constructor(injector, service, router) {
        super(injector);
        this.injector = injector;
        this.service = service;
        this.router = router;
    }
    formIsValid() {
        return this.service.formIsValid();
    }
    onSubmit(data) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const employee = {
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
        const roles = [];
        const rolesTmp = (_h = data['employee-status']) === null || _h === void 0 ? void 0 : _h.role;
        rolesTmp.forEach(role => {
            roles.push({
                authority: role.value,
            });
        });
        employee['roles'] = roles;
        super.onSubmit(employee, 'security', 'post-employee')
            .pipe(takeUntil(this.destroy$))
            .subscribe(response => {
            if (response.respStatusCode === ResponseCode.OK_DEFAULT.toString()) {
                this.router.navigate(['/app/mgmt/employee']);
            }
        });
    }
}
EmployeeAddPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeAddPageComponent, deps: [{ token: i0.Injector }, { token: i3.DoWizardService }, { token: i1.Router }], target: i0.ɵɵFactoryTarget.Component });
EmployeeAddPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeAddPageComponent, selector: "do-employee-add-page", usesInheritance: true, ngImport: i0, template: "<do-wizard (onSubmit)=\"onSubmit($event)\" [loading]=\"disabled\">\n</do-wizard>", styles: [""], components: [{ type: i3.DoWizardComponent, selector: "do-wizard", inputs: ["extra", "loading"], outputs: ["onNext", "onPrevious", "onSubmit"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeAddPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-employee-add-page',
                    templateUrl: 'employee-add-page.component.html',
                    styleUrls: ['./employee-add-page.component.scss'],
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i3.DoWizardService }, { type: i1.Router }]; } });

let emailExist;
class EmployeeEditPersonalInformationComponent extends BaseFormComponent {
    constructor(injector, router, employeeService, httpBaseService, oauthResource, apiPath) {
        super(injector, {
            employeeName: [],
            nik: [],
            idNumber: [],
            email: [],
            phoneNumber: [],
            address: [],
        });
        this.injector = injector;
        this.router = router;
        this.employeeService = employeeService;
        this.httpBaseService = httpBaseService;
        this.oauthResource = oauthResource;
        this.apiPath = apiPath;
        this.patternEmail = Pattern.EMAIL;
        this.patternPhoneNumber = Pattern.PHONE_NUMBER;
        this.patternFullname = Pattern.FULLNAME;
        this.formGroup.get('email')
            .setAsyncValidators([
            userValidator$1(this.oauthResource, this.httpBaseService, this.apiPath)
        ]);
        if (!this.employeeService.getEmployeeHeader()) {
            this.router.navigate(['/app/mgmt/employee']);
        }
    }
    ngOnInit() { }
    loadDataMenu() {
        var _a;
        this.loadingForm = true;
        return this.exec('security', 'get-employee-personal-info', {
            employeeId: (_a = this.employeeService.getEmployeeHeader()) === null || _a === void 0 ? void 0 : _a.id
        }).pipe(map((success) => {
            var _a, _b, _c;
            this.loadingForm = false;
            emailExist = success.email;
            this.personalInfo = success === null || success === void 0 ? void 0 : success.personalInfo;
            this.formGroup.controls['employeeName'].setValue(success.fullname);
            this.formGroup.controls['nik'].setValue(success.idEmployee);
            this.formGroup.controls['idNumber'].setValue((_a = success.personalInfo) === null || _a === void 0 ? void 0 : _a.idNumber);
            this.formGroup.controls['email'].setValue(success.email);
            this.formGroup.controls['phoneNumber'].setValue((_b = success.contact) === null || _b === void 0 ? void 0 : _b.phoneNumber);
            this.formGroup.controls['address'].setValue((_c = success.contact) === null || _c === void 0 ? void 0 : _c.address);
            this.formGroup.markAsPristine();
        }));
    }
    onReset() {
        this.router.navigate(['/app/mgmt/employee']);
    }
    onSubmit() {
        var _a;
        const data = {
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
        super.onSubmit(data, 'security', 'put-employee-personal-info')
            .pipe(takeUntil(this.destroy$))
            .subscribe(response => {
            if (response.respStatusCode === ResponseCode.OK_DEFAULT.toString()) {
                this.router.navigate(['/app/mgmt/employee']);
            }
        });
    }
}
EmployeeEditPersonalInformationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeEditPersonalInformationComponent, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: EmployeeService }, { token: HTTP_SERVICE }, { token: OAUTH_INFO }, { token: API }], target: i0.ɵɵFactoryTarget.Component });
EmployeeEditPersonalInformationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeEditPersonalInformationComponent, selector: "do-employee-edit-personal-information", usesInheritance: true, ngImport: i0, template: "<div class=\"row\">\n  <div class=\"col-md-12 col-lg-12\">\n    <form class=\"form-horizontal\" autocomplete=\"on\" [formGroup]=\"formGroup\">\n      <do-input-text\n        [name]=\"'name'\"\n        [label]=\"'Employee Name'\"\n        [placeholder]=\"'Employee Name'\"\n        [pattern]=\"patternFullname\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"employeeName\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'nik'\"\n        [label]=\"'Employee Identification Number'\"\n        [placeholder]=\"'Employee Identification Number'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"nik\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'idNumber'\"\n        [label]=\"'ID Card Number'\"\n        [placeholder]=\"'ID Card Number'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"idNumber\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'email'\"\n        [label]=\"'Email'\"\n        [placeholder]=\"'Email'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        [pattern]=\"patternEmail\"\n        [paramError]=\"{value:5}\"\n        minlength=\"5\"\n        maxlength=\"50\"\n        formControlName=\"email\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'phoneNumber'\"\n        [label]=\"'Phone Number'\"\n        [placeholder]=\"'Phone Number'\"\n        [pattern]=\"patternPhoneNumber\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"phoneNumber\">\n      </do-input-text>\n      <do-textarea\n        [name]=\"'address'\"\n        [label]=\"'Address'\"\n        [placeholder]=\"'Address'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"address\">\n      </do-textarea>\n      <do-label-text\n        [name]=\"'pobdob'\"\n        [label]=\"'label.pobdob'\"\n        [skeleton]=\"loadingForm\"\n        [content]=\"personalInfo?.placeOfBirth + ', ' +personalInfo?.dateOfBirth\"\n        [colLabel]=\"3\"\n        [colContent]=\"9\"\n        [dividerlabel]=\"false\">\n      </do-label-text>\n      <do-label-text\n        [name]=\"'gender'\"\n        [label]=\"'Gender'\"\n        [skeleton]=\"loadingForm\"\n        [content]=\"personalInfo?.genderValue\"\n        [colLabel]=\"3\"\n        [colContent]=\"9\"\n        [dividerlabel]=\"false\">\n      </do-label-text>\n      <do-label-text\n        [name]=\"'height'\"\n        [label]=\"'Height'\"\n        [skeleton]=\"loadingForm\"\n        [content]=\"personalInfo?.height\"\n        [colLabel]=\"3\"\n        [colContent]=\"9\"\n        [dividerlabel]=\"false\">\n      </do-label-text>\n      <do-label-text\n        [name]=\"'weight'\"\n        [label]=\"'Weight'\"\n        [skeleton]=\"loadingForm\"\n        [content]=\"personalInfo?.weight\"\n        [colLabel]=\"3\"\n        [colContent]=\"9\"\n        [dividerlabel]=\"false\">\n      </do-label-text>\n      <do-label-text\n        [name]=\"'bloodType'\"\n        [label]=\"'Blood Type'\"\n        [skeleton]=\"loadingForm\"\n        [content]=\"personalInfo?.bloodType\"\n        [colLabel]=\"3\"\n        [colContent]=\"9\"\n        [dividerlabel]=\"false\">\n      </do-label-text>\n      <do-button-submit\n        [submitTitle]=\"'Edit'\"\n        [resetTitle]=\"'Cancel'\"\n        [formGroupButton]=\"formGroup\"\n        [disabledButton]=\"disabled\"\n        (onReset)=\"onReset()\"\n        (onSubmit)=\"onSubmit()\">\n      </do-button-submit>\n    </form>\n  </div>\n</div>", styles: [""], components: [{ type: i3.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i3.DoTextareaComponent, selector: "do-textarea", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "height"] }, { type: i3.DoLabelTextComponent, selector: "do-label-text", inputs: ["colLabel", "colContent", "skeleton", "name", "content", "dividerlabel", "numeric", "label", "nolabel", "required", "showMoreMode", "maxShowMore", "paramError"] }, { type: i3.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { type: i4.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i4.MinLengthValidator, selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]", inputs: ["minlength"] }, { type: i4.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeEditPersonalInformationComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-employee-edit-personal-information',
                    styleUrls: ['./employee-edit-personal-information.component.scss'],
                    templateUrl: './employee-edit-personal-information.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: EmployeeService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [HTTP_SERVICE]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [OAUTH_INFO]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [API]
                }] }]; } });
function userValidator$1(oauthResource, httpBaseService, apiPath) {
    return (control) => {
        if (!control.valueChanges) {
            return of(null);
        }
        else {
            return control.valueChanges.pipe(debounceTime(500), distinctUntilChanged(), switchMap(() => {
                const validatorSubject$ = new Subject();
                const httpHeaders = new HttpHeaders({
                    Authorization: 'Basic ' + btoa(oauthResource['client_id'] + ':' + oauthResource['client_secret']),
                    'Content-Type': 'application/json',
                });
                const data = {
                    user: control.value,
                    exist: emailExist,
                };
                let dataValidator;
                if (control.value) {
                    httpBaseService.HTTP_BASE(apiPath['auth']['check-user'], data, httpHeaders).subscribe((response) => {
                        if (response['respStatusCode'] === ResponseCode.OK_SCR012.toString()) {
                            validatorSubject$.next(null);
                        }
                        else {
                            dataValidator = {
                                error: true,
                            };
                            validatorSubject$.next(dataValidator);
                        }
                    }, (error) => {
                        if (!(error instanceof HttpErrorResponse)) {
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
            })).pipe(first());
        }
    };
}

class EmployeeEducationFormalPromptComponent {
    constructor(api, formBuilder, ref) {
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
    ngOnInit() {
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
    }
    onSubmit() {
        var _a, _b;
        const data = {
            education: {
                id: (_a = this.education) === null || _a === void 0 ? void 0 : _a.id,
                educationalLevel: (_b = this.formGroup.get('educationalLevel').value) === null || _b === void 0 ? void 0 : _b.value,
                schoolName: this.formGroup.get('school').value,
                startYear: this.formGroup.get('startYear').value,
                endYear: this.formGroup.get('endYear').value,
            }
        };
        this.ref.close(data);
    }
    onReset() {
        this.ref.close();
    }
}
EmployeeEducationFormalPromptComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeEducationFormalPromptComponent, deps: [{ token: API }, { token: i4.FormBuilder }, { token: i1$1.NbDialogRef }], target: i0.ɵɵFactoryTarget.Component });
EmployeeEducationFormalPromptComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeEducationFormalPromptComponent, selector: "do-education-formal-prompt", inputs: { education: "education" }, ngImport: i0, template: "<nb-card class=\"modal-form\">\n  <nb-card-header>\n    {{ 'header.'+action+'-education-formal' | translate }}\n  </nb-card-header>\n  <nb-card-body>\n    <div class=\"row\">\n      <div class=\"col-md-12 col-lg-12\">\n        <form class=\"form-horizontal\" autocomplete=\"on\" [formGroup]=\"formGroup\">\n          <do-select\n            [name]=\"'educationalLevel'\"\n            [label]=\"'Educational Level'\"\n            [placeholder]=\"'Educational Level'\"\n            [required]=\"true\"\n            [api]=\"apiSelectEducationalLevel\"\n            [queryParam]=\"paramSelectEducationalLevel\"\n            [searchable]=\"false\"\n            formControlName=\"educationalLevel\">\n          </do-select>\n          <do-input-text\n            [name]=\"'school'\"\n            [label]=\"'School'\"\n            [placeholder]=\"'School'\"\n            formControlName=\"school\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'startYear'\"\n            [label]=\"'Start Year'\"\n            [placeholder]=\"'Start Year'\"\n            [type]=\"'number'\"\n            formControlName=\"startYear\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'endYear'\"\n            [label]=\"'End Year'\"\n            [placeholder]=\"'End Year'\"\n            [type]=\"'number'\"\n            formControlName=\"endYear\">\n          </do-input-text>\n        </form>\n      </div>\n    </div>\n  </nb-card-body>\n  <nb-card-footer>\n    <do-button-submit\n      [submitTitle]=\"action\"\n      [resetTitle]=\"'Cancel'\"\n      [formGroupButton]=\"formGroup\"\n      (onReset)=\"onReset()\"\n      (onSubmit)=\"onSubmit()\">\n    </do-button-submit>\n  </nb-card-footer>\n</nb-card>\n", styles: [".nb-theme-default :host .modal-form{max-width:40rem;width:40rem!important}@media (max-width: 767.98px){.nb-theme-default :host .modal-form{width:100%!important}}.nb-theme-dark :host .modal-form{max-width:40rem;width:40rem!important}@media (max-width: 767.98px){.nb-theme-dark :host .modal-form{width:100%!important}}.nb-theme-cosmic :host .modal-form{max-width:40rem;width:40rem!important}@media (max-width: 767.98px){.nb-theme-cosmic :host .modal-form{width:100%!important}}.nb-theme-corporate :host .modal-form{max-width:40rem;width:40rem!important}@media (max-width: 767.98px){.nb-theme-corporate :host .modal-form{width:100%!important}}\n"], components: [{ type: i1$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i3.DoSelectComponent, selector: "do-select", inputs: ["placeholder", "colLabel", "colInput", "items", "multiple", "loading", "addTag", "closeOnSelect", "clearable", "searchable", "hideSelected", "minTermLength", "maxTermLength", "api", "limit", "offsetNextLoad", "queryParam"], outputs: ["onSelect", "onClear"] }, { type: i3.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i1$1.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i3.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }], pipes: { "translate": i6.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeEducationFormalPromptComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-education-formal-prompt',
                    templateUrl: 'education-formal-prompt.component.html',
                    styleUrls: ['education-formal-prompt.component.scss'],
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [API]
                }] }, { type: i4.FormBuilder }, { type: i1$1.NbDialogRef }]; }, propDecorators: { education: [{
                type: Input
            }] } });

class EmployeeEducationNonFormalPromptComponent {
    constructor(api, formBuilder, ref) {
        this.ref = ref;
        this.action = 'Add';
        this.formGroup = formBuilder.group({
            trainingName: [],
            trainingDate: [],
        });
    }
    ngOnInit() {
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
    }
    onSubmit() {
        var _a, _b, _c;
        const data = {
            training: {
                id: (_a = this.training) === null || _a === void 0 ? void 0 : _a.id,
                name: this.formGroup.get('trainingName').value,
                startDate: (_b = this.formGroup.get('trainingDate').value) === null || _b === void 0 ? void 0 : _b.start,
                endDate: (_c = this.formGroup.get('trainingDate').value) === null || _c === void 0 ? void 0 : _c.end,
            }
        };
        this.ref.close(data);
    }
    onReset() {
        this.ref.close();
    }
}
EmployeeEducationNonFormalPromptComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeEducationNonFormalPromptComponent, deps: [{ token: API }, { token: i4.FormBuilder }, { token: i1$1.NbDialogRef }], target: i0.ɵɵFactoryTarget.Component });
EmployeeEducationNonFormalPromptComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeEducationNonFormalPromptComponent, selector: "do-education-nonformal-prompt", inputs: { training: "training" }, ngImport: i0, template: "<nb-card class=\"modal-form\">\n  <nb-card-header>\n    {{ 'header.'+action+'-education-nonformal' | translate }}\n  </nb-card-header>\n  <nb-card-body>\n    <div class=\"row\">\n      <div class=\"col-md-12 col-lg-12\">\n        <form class=\"form-horizontal\" autocomplete=\"on\" [formGroup]=\"formGroup\">\n          <do-input-text\n            [name]=\"'trainingName'\"\n            [label]=\"'Training Name'\"\n            [required]=\"true\"\n            [placeholder]=\"'Training Name'\"\n            formControlName=\"trainingName\">\n          </do-input-text>\n          <do-datepicker-range\n            [name]=\"'trainingDate'\"\n            [label]=\"'Training Date'\"\n            [placeholder]=\"'Training Date'\"\n            formControlName=\"trainingDate\">\n          </do-datepicker-range>\n        </form>\n      </div>\n    </div>\n  </nb-card-body>\n  <nb-card-footer>\n    <do-button-submit\n      [submitTitle]=\"action\"\n      [resetTitle]=\"'Cancel'\"\n      [formGroupButton]=\"formGroup\"\n      (onReset)=\"onReset()\"\n      (onSubmit)=\"onSubmit()\">\n    </do-button-submit>\n  </nb-card-footer>\n</nb-card>\n", styles: [".nb-theme-default :host .modal-form{max-width:40rem;width:40rem!important}@media (max-width: 767.98px){.nb-theme-default :host .modal-form{width:100%!important}}.nb-theme-dark :host .modal-form{max-width:40rem;width:40rem!important}@media (max-width: 767.98px){.nb-theme-dark :host .modal-form{width:100%!important}}.nb-theme-cosmic :host .modal-form{max-width:40rem;width:40rem!important}@media (max-width: 767.98px){.nb-theme-cosmic :host .modal-form{width:100%!important}}.nb-theme-corporate :host .modal-form{max-width:40rem;width:40rem!important}@media (max-width: 767.98px){.nb-theme-corporate :host .modal-form{width:100%!important}}\n"], components: [{ type: i1$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i3.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i3.DoDatePickerRangeComponent, selector: "do-datepicker-range", inputs: ["placeholder", "colLabel", "colInput", "icon", "min", "max", "size", "dateMask"] }, { type: i1$1.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i3.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }], pipes: { "translate": i6.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeEducationNonFormalPromptComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-education-nonformal-prompt',
                    templateUrl: 'education-nonformal-prompt.component.html',
                    styleUrls: ['education-nonformal-prompt.component.scss'],
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [API]
                }] }, { type: i4.FormBuilder }, { type: i1$1.NbDialogRef }]; }, propDecorators: { training: [{
                type: Input
            }] } });

class EmployeeEditEducationComponent extends BaseFormComponent {
    constructor(injector, router, employeeService, dialogService) {
        super(injector);
        this.router = router;
        this.employeeService = employeeService;
        this.dialogService = dialogService;
        this.reloadEducation = false;
        this.reloadTraining = false;
        this.columnsEducation = [
            { name: 'Level', prop: 'educationalLevel', frozenLeft: true },
            { name: 'School', prop: 'schoolName', frozenLeft: true },
            { name: 'Year', prop: 'startYear', frozenLeft: true },
        ];
        this.columnsTraining = [
            { name: 'Training Name', prop: 'name', frozenLeft: true },
            { name: 'Start Date', prop: 'startDate', frozenLeft: true },
            { name: 'End Date', prop: 'endDate', frozenLeft: true },
        ];
        this.educationIds = [];
        this.trainingIds = [];
        this.loadingSubject$ = new Subject();
        if (!this.employeeService.getEmployeeHeader()) {
            this.router.navigate(['/app/mgmt/employee']);
        }
        this.apiPathEducation = this.api['security']['datatable-education-employee'];
        this.apiPathTraining = this.api['security']['datatable-training-employee'];
        this.apiPathDeleteEducation = this.api['security']['delete-employee-education'];
        this.apiPathDeleteTraining = this.api['security']['delete-employee-training'];
        this.sortEducation = {
            desc: ['startYear']
        };
        this.sortTraining = {
            desc: ['startDate']
        };
    }
    ngOnInit() {
        var _a;
        this.keyword = {
            employeeId: (_a = this.employeeService.getEmployeeHeader()) === null || _a === void 0 ? void 0 : _a.id,
        };
    }
    loadDataMenu() {
        this.reloadEducation = true;
        this.reloadTraining = true;
        return this.loadingSubject$.asObservable();
    }
    ngOnDestroy() { }
    onAddEducation() {
        this.reloadEducation = false;
        this.dialogService.open(EmployeeEducationFormalPromptComponent)
            .onClose.subscribe((data) => {
            if (data) {
                data['id'] = this.employeeService.getEmployeeHeader().id;
                super.onSubmit(data, 'security', 'post-employee-education')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe(response => {
                    if (response.respStatusCode === ResponseCode.OK_DEFAULT.toString()) {
                        this.reloadEducation = true;
                    }
                });
            }
        });
    }
    onAddTraining() {
        this.reloadTraining = false;
        this.dialogService.open(EmployeeEducationNonFormalPromptComponent)
            .onClose.subscribe((data) => {
            if (data) {
                data['id'] = this.employeeService.getEmployeeHeader().id;
                super.onSubmit(data, 'security', 'post-employee-training')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe(response => {
                    if (response.respStatusCode === ResponseCode.OK_DEFAULT.toString()) {
                        this.reloadTraining = true;
                    }
                });
            }
        });
    }
    onEditEducation(data) {
        this.reloadEducation = false;
        this.dialogService.open(EmployeeEducationFormalPromptComponent, {
            context: {
                education: data,
            },
        })
            .onClose.subscribe((result) => {
            if (result) {
                result['id'] = this.employeeService.getEmployeeHeader().id;
                super.onSubmit(result, 'security', 'post-employee-education')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe(response => {
                    if (response.respStatusCode === ResponseCode.OK_DEFAULT.toString()) {
                        this.reloadEducation = true;
                    }
                });
            }
        });
    }
    onEditTraining(data) {
        this.reloadTraining = false;
        this.dialogService.open(EmployeeEducationNonFormalPromptComponent, {
            context: {
                training: data,
            },
        })
            .onClose.subscribe((result) => {
            if (result) {
                result['id'] = this.employeeService.getEmployeeHeader().id;
                super.onSubmit(result, 'security', 'post-employee-training')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe(response => {
                    if (response.respStatusCode === ResponseCode.OK_DEFAULT.toString()) {
                        this.reloadTraining = true;
                    }
                });
            }
        });
    }
    onDeleteEducationDialog(data, dialog) {
        this.reloadEducation = false;
        this.educationIds = [];
        data.forEach(value => {
            this.educationIds.push(value.id);
        });
        this.dialogService.open(dialog, { context: 'alert.delete' });
    }
    onDeleteTrainingDialog(data, dialog) {
        this.reloadTraining = false;
        this.trainingIds = [];
        data.forEach(value => {
            this.trainingIds.push(value.id);
        });
        this.dialogService.open(dialog, { context: 'alert.delete' });
    }
    onDeleteEducation(ref) {
        this.disabled = true;
        this.http.HTTP_AUTH(this.apiPathDeleteEducation, this.educationIds)
            .pipe(takeUntil(this.destroy$))
            .subscribe((success) => {
            this.disabled = false;
            ref.close();
            this.reloadEducation = true;
            this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
        }, (error) => {
            this.disabled = false;
            this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
        });
    }
    onDeleteTraining(ref) {
        this.disabled = true;
        this.http.HTTP_AUTH(this.apiPathDeleteTraining, this.trainingIds)
            .pipe(takeUntil(this.destroy$))
            .subscribe((success) => {
            ref.close();
            this.reloadTraining = true;
            this.disabled = false;
            this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
        }, (error) => {
            this.disabled = false;
            this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
        });
    }
    onLoadEducation() {
        this.loadingSubject$.next(true);
    }
    onLoadTraining() {
        this.loadingSubject$.next(true);
    }
}
EmployeeEditEducationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeEditEducationComponent, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: EmployeeService }, { token: i1$1.NbDialogService }], target: i0.ɵɵFactoryTarget.Component });
EmployeeEditEducationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeEditEducationComponent, selector: "do-employee-edit-education", usesInheritance: true, ngImport: i0, template: "<div class=\"row\">\n  <div class=\"col-md-12 col-lg-12\">\n    <div class=\"accordion-container\">\n      <nb-accordion multi>\n        <nb-accordion-item [expanded]=\"true\">\n          <nb-accordion-item-header>\n            {{'Formal Education' | translate}}\n          </nb-accordion-item-header>\n          <nb-accordion-item-body>\n            <do-datatable\n              [api]=\"apiPathEducation\"\n              [columns]=\"columnsEducation\"\n              [filterFn]=\"keyword\"\n              [sort]=\"sortEducation\"\n              [startWithOpenData]=\"false\"\n              [reloadFn]=\"reloadEducation\"\n              (onLoading)=\"onLoadEducation()\"\n              (onEdit)=\"onEditEducation($event)\"\n              (onAdd)=\"onAddEducation()\"\n              (onDelete)=\"onDeleteEducationDialog($event, dialogdeleteeducation)\">\n            </do-datatable>              \n          </nb-accordion-item-body>\n        </nb-accordion-item>\n        <nb-accordion-item [expanded]=\"true\">\n          <nb-accordion-item-header>\n            {{'Non Formal Education' | translate}}\n          </nb-accordion-item-header>\n          <nb-accordion-item-body>\n            <do-datatable\n              [api]=\"apiPathTraining\"\n              [columns]=\"columnsTraining\"\n              [filterFn]=\"keyword\"\n              [sort]=\"sortTraining\"\n              [startWithOpenData]=\"false\"\n              [reloadFn]=\"reloadTraining\"\n              (onLoading)=\"onLoadTraining()\"\n              (onEdit)=\"onEditTraining($event)\"\n              (onAdd)=\"onAddTraining()\"\n              (onDelete)=\"onDeleteTrainingDialog($event, dialogdeletetraining)\">\n            </do-datatable>\n          </nb-accordion-item-body>\n        </nb-accordion-item>\n      </nb-accordion>\n    </div>\n  </div>\n</div>\n\n<ng-template #dialogdeleteeducation let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"danger\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <do-button-submit\n        [colLabel]=\"0\"\n        [colButton]=\"12\"\n        [submitTitle]=\"'Delete'\"\n        [resetTitle]=\"'Cancel'\"\n        [disabledButton]=\"disabled\"\n        (onReset)=\"ref.close()\"\n        (onSubmit)=\"onDeleteEducation(ref)\">\n      </do-button-submit>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>\n\n<ng-template #dialogdeletetraining let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"danger\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <do-button-submit\n        [colLabel]=\"0\"\n        [colButton]=\"12\"\n        [submitTitle]=\"'Delete'\"\n        [resetTitle]=\"'Cancel'\"\n        [disabledButton]=\"disabled\"\n        (onReset)=\"ref.close()\"\n        (onSubmit)=\"onDeleteTraining(ref)\">\n      </do-button-submit>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>", styles: [".nb-theme-default :host nb-accordion{box-shadow:unset}.nb-theme-dark :host nb-accordion{box-shadow:unset}.nb-theme-cosmic :host nb-accordion{box-shadow:unset}.nb-theme-corporate :host nb-accordion{box-shadow:unset}\n"], components: [{ type: i1$1.NbAccordionComponent, selector: "nb-accordion", inputs: ["multi"] }, { type: i1$1.NbAccordionItemComponent, selector: "nb-accordion-item", inputs: ["collapsed", "expanded", "disabled"], outputs: ["collapsedChange"] }, { type: i1$1.NbAccordionItemHeaderComponent, selector: "nb-accordion-item-header" }, { type: i1$1.NbAccordionItemBodyComponent, selector: "nb-accordion-item-body" }, { type: i3.DoDatatableComponent, selector: "do-datatable", inputs: ["rows", "columns", "filters", "selected", "limit", "count", "offset", "externalPaging", "externalSorting", "loadingIndicator", "scrollbarH", "scrollbarV", "reorderable", "sortType", "messages", "selectionType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "header", "column", "footer", "add", "edit", "delete", "filter", "api", "startWithOpenData", "filterEvent", "formGroupFilter", "sort", "sortsDefault", "autoLoad", "filterFn", "filterDoFetchFn", "reloadFn"], outputs: ["onAdd", "onEdit", "onDelete", "onSearch", "onFilter", "onButtonCell", "onLoading", "onSelected"] }, { type: i1$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i1$1.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i3.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], pipes: { "translate": i6.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeEditEducationComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-employee-edit-education',
                    styleUrls: ['./employee-edit-education.component.scss'],
                    templateUrl: './employee-edit-education.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: EmployeeService }, { type: i1$1.NbDialogService }]; } });

class EmployeeEditEmployeeStatusComponent extends BaseFormComponent {
    constructor(injector, router, employeeService) {
        super(injector, {
            occupation: [],
            role: [],
            employeeParent: [],
            permissions: [],
        });
        this.injector = injector;
        this.router = router;
        this.employeeService = employeeService;
        this.permissionsData = [];
        this.apiSelectOccupation = this.api['security']['select-occupation'];
        this.apiSelectRole = this.api['security']['select-role'];
        this.apiSelectEmployeeParent = this.api['security']['select-employee'];
    }
    ngOnInit() {
        if (!this.employeeService.getEmployeeHeader()) {
            this.router.navigate(['/app/mgmt/employee']);
            return;
        }
        this.http.HTTP_AUTH(this.api['master']['checkbox-parameter'], {
            keyword: {
                parameterGroupCode: 'PERMISSION',
            },
        }).pipe(takeUntil(this.destroy$), map((response) => {
            this.permissionsData = response;
        }), catchError(() => of([]))).subscribe(() => { });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
    loadDataMenu() {
        var _a;
        this.loadingForm = true;
        return this.exec('security', 'get-employee-status', {
            employeeId: (_a = this.employeeService.getEmployeeHeader()) === null || _a === void 0 ? void 0 : _a.id
        }).pipe(map((success) => {
            var _a, _b;
            this.loadingForm = false;
            this.username = success.username;
            const roles = success.roles;
            const selectRoles = [];
            roles.forEach(role => {
                selectRoles.push({
                    label: role.description,
                    value: role.authority,
                    disabled: false,
                });
            });
            this.formGroup.controls['role'].setValue(selectRoles);
            this.formGroup.controls['occupation'].setValue({
                label: (_a = success.occupation) === null || _a === void 0 ? void 0 : _a.name,
                value: (_b = success.occupation) === null || _b === void 0 ? void 0 : _b.code
            });
            this.formGroup.controls['employeeParent'].setValue({
                label: success.parentLabel,
                value: success.parentValue
            });
            const permissions = this.permissionsData;
            permissions.forEach((permission) => {
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
            this.formGroup.controls['permissions'].setValue(permissions);
            this.formGroup.markAsPristine();
        }));
    }
    onReset() {
        this.router.navigate(['/app/mgmt/employee']);
    }
    onSubmit() {
        var _a, _b;
        const roles = [];
        const tmpRoles = this.formGroup.get('role').value;
        tmpRoles.forEach(role => {
            roles.push({
                authority: role.value
            });
        });
        let disabled = false;
        let locked = false;
        let accountExpired = false;
        const permissions = this.formGroup.get('permissions').value ? this.formGroup.get('permissions').value : this.permissionsData;
        permissions.forEach((permission) => {
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
        const data = {
            id: this.employeeService.getEmployeeHeader().id,
            disabled,
            locked,
            accountExpired,
            parentId: (_a = this.formGroup.get('employeeParent').value) === null || _a === void 0 ? void 0 : _a.value,
            roles,
            occupation: {
                code: (_b = this.formGroup.get('occupation').value) === null || _b === void 0 ? void 0 : _b.value
            },
        };
        super.onSubmit(data, 'security', 'put-employee-status')
            .pipe(takeUntil(this.destroy$))
            .subscribe(response => {
            if (response.respStatusCode === ResponseCode.OK_DEFAULT.toString()) {
                this.router.navigate(['/app/mgmt/employee']);
            }
        });
    }
}
EmployeeEditEmployeeStatusComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeEditEmployeeStatusComponent, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: EmployeeService }], target: i0.ɵɵFactoryTarget.Component });
EmployeeEditEmployeeStatusComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeEditEmployeeStatusComponent, selector: "do-employee-edit-employee-status", usesInheritance: true, ngImport: i0, template: "<div class=\"row\">\n  <div class=\"col-md-12 col-lg-12\">\n    <form class=\"form-horizontal\" autocomplete=\"on\" [formGroup]=\"formGroup\">\n      <do-label-text\n        [label]=\"'Username'\"\n        [colLabel]=\"3\"\n        [colContent]=\"9\"\n        [dividerlabel]=\"false\"\n        [skeleton]=\"loadingForm\"\n        [content]=\"username\">\n      </do-label-text>\n      <do-select\n        [name]=\"'occupation'\"\n        [label]=\"'Occupation'\"\n        [placeholder]=\"'Occupation'\"\n        [required]=\"true\"\n        [api]=\"apiSelectOccupation\"\n        [searchable]=\"false\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"occupation\">\n      </do-select>\n      <do-select\n        [name]=\"'role'\"\n        [label]=\"'Role'\"\n        [placeholder]=\"'Role'\"\n        [required]=\"true\"\n        [api]=\"apiSelectRole\"\n        [searchable]=\"false\"\n        [multiple]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"role\">\n      </do-select>\n      <do-select\n        [name]=\"'employeeParent'\"\n        [label]=\"'Supervisor'\"\n        [placeholder]=\"'Supervisor'\"\n        [api]=\"apiSelectEmployeeParent\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"employeeParent\">\n      </do-select>\n      <do-checkbox\n        [name]=\"'permissions'\"\n        [label]=\"'Permissions'\"\n        [data]=\"permissionsData\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"permissions\">\n      </do-checkbox>\n      <do-button-submit\n        [submitTitle]=\"'Edit'\"\n        [resetTitle]=\"'Cancel'\"\n        [formGroupButton]=\"formGroup\"\n        [disabledButton]=\"disabled\"\n        [skeleton]=\"loadingForm\"\n        (onReset)=\"onReset()\"\n        (onSubmit)=\"onSubmit()\">\n      </do-button-submit>\n    </form>\n  </div>\n</div>", styles: [""], components: [{ type: i3.DoLabelTextComponent, selector: "do-label-text", inputs: ["colLabel", "colContent", "skeleton", "name", "content", "dividerlabel", "numeric", "label", "nolabel", "required", "showMoreMode", "maxShowMore", "paramError"] }, { type: i3.DoSelectComponent, selector: "do-select", inputs: ["placeholder", "colLabel", "colInput", "items", "multiple", "loading", "addTag", "closeOnSelect", "clearable", "searchable", "hideSelected", "minTermLength", "maxTermLength", "api", "limit", "offsetNextLoad", "queryParam"], outputs: ["onSelect", "onClear"] }, { type: i3.DoCheckboxComponent, selector: "do-checkbox", inputs: ["colLabel", "colInput", "data"], outputs: ["onChecked"] }, { type: i3.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeEditEmployeeStatusComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-employee-edit-employee-status',
                    styleUrls: ['./employee-edit-employee-status.component.scss'],
                    templateUrl: './employee-edit-employee-status.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: EmployeeService }]; } });

class EmployeeEditPageComponent extends BaseComponent {
    constructor(injector, router, employeeService, toastr) {
        super(injector);
        this.injector = injector;
        this.router = router;
        this.employeeService = employeeService;
        this.toastr = toastr;
        this.loading = false;
        this.tab = 'personalInfo';
        this.destroy$ = new Subject();
        if (this.employeeService.getEmployeeHeader()) {
        }
        else {
            this.router.navigate(['/app/mgmt/employee']);
        }
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.next();
        this.destroy$.complete();
    }
    toggleLoadingAnimation(event) {
        this.tab = event.tabId;
        this.loading = true;
        if (this.tab === 'personalInfo') {
            this.personalInfo.loadDataMenu()
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => {
                this.loading = false;
            }, (error) => {
                if (error instanceof HttpErrorResponse) {
                    error = error['error'];
                }
                this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
            });
        }
        else if (this.tab === 'education') {
            this.education.loadDataMenu()
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => {
                this.loading = false;
            }, (error) => {
                if (error instanceof HttpErrorResponse) {
                    error = error['error'];
                }
                this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
            });
        }
        else {
            this.employeeStatus.loadDataMenu()
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => {
                this.loading = false;
            }, (error) => {
                if (error instanceof HttpErrorResponse) {
                    error = error['error'];
                }
                this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
            });
        }
    }
}
EmployeeEditPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeEditPageComponent, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: EmployeeService }, { token: i3.DoToastrService }], target: i0.ɵɵFactoryTarget.Component });
EmployeeEditPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeEditPageComponent, selector: "do-employee-edit-page", viewQueries: [{ propertyName: "personalInfo", first: true, predicate: ["personalInfo"], descendants: true, static: true }, { propertyName: "education", first: true, predicate: ["education"], descendants: true, static: true }, { propertyName: "employeeStatus", first: true, predicate: ["employeeStatus"], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: "<do-page-outlet [header]=\"'header.employee-management'\" [url]=\"'/app/mgmt/employee'\" [hidefooter]=\"true\">\n  <nb-tabset fullWidth (changeTab)=\"toggleLoadingAnimation($event)\" pagecontent>\n    <nb-tab tabId=\"personalInfo\" tabTitle=\"{{'tab.personal-info' | translate}}\" [lazyLoad]=\"true\">\n      <do-employee-edit-personal-information #personalInfo></do-employee-edit-personal-information>\n    </nb-tab>\n    <nb-tab tabId=\"education\" tabTitle=\"{{'tab.education' | translate}}\">\n      <do-employee-edit-education #education></do-employee-edit-education>\n    </nb-tab>\n    <nb-tab tabId=\"employeeStatus\" tabTitle=\"{{'tab.employee-status' | translate}}\">\n      <do-employee-edit-employee-status #employeeStatus></do-employee-edit-employee-status>\n    </nb-tab>\n  </nb-tabset>\n</do-page-outlet>\n", styles: [""], components: [{ type: i3.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i1$1.NbTabsetComponent, selector: "nb-tabset", inputs: ["fullWidth", "routeParam"], outputs: ["changeTab"] }, { type: i1$1.NbTabComponent, selector: "nb-tab", inputs: ["badgeStatus", "badgeDot", "disabled", "responsive", "active", "lazyLoad", "tabTitle", "tabId", "tabIcon", "route", "badgeText", "badgePosition"] }, { type: EmployeeEditPersonalInformationComponent, selector: "do-employee-edit-personal-information" }, { type: EmployeeEditEducationComponent, selector: "do-employee-edit-education" }, { type: EmployeeEditEmployeeStatusComponent, selector: "do-employee-edit-employee-status" }], pipes: { "translate": i6.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeEditPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-employee-edit-page',
                    styleUrls: ['./employee-edit-page.component.scss'],
                    templateUrl: './employee-edit-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: EmployeeService }, { type: i3.DoToastrService }]; }, propDecorators: { personalInfo: [{
                type: ViewChild,
                args: ['personalInfo', { static: true }]
            }], education: [{
                type: ViewChild,
                args: ['education', { static: true }]
            }], employeeStatus: [{
                type: ViewChild,
                args: ['employeeStatus', { static: true }]
            }] } });

class EmployeeAddPersonalInformationComponent extends DoWizardStep {
    constructor(injector, httpBaseService, oauthResource, apiPath) {
        super(injector, 'personal-information', {
            name: [{
                    value: null,
                    disabled: false,
                }, Validators.required],
            nik: [{
                    value: null,
                    disabled: false,
                }, Validators.required],
            idNumber: [{
                    value: null,
                    disabled: false,
                }, Validators.required],
            email: [{
                    value: null,
                    disabled: false,
                }, Validators.required],
            phoneNumber: [{
                    value: null,
                    disabled: false,
                }, Validators.required],
            address: [{
                    value: null,
                    disabled: false,
                }, Validators.required],
            placeOfBirth: [{
                    value: null,
                    disabled: false,
                }, Validators.required],
            dateOfBirth: [{
                    value: null,
                    disabled: false,
                }, Validators.required],
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
        });
        this.injector = injector;
        this.httpBaseService = httpBaseService;
        this.oauthResource = oauthResource;
        this.apiPath = apiPath;
        this.formGroupName = 'personal-information';
        this.patternEmail = Pattern.EMAIL;
        this.patternPhoneNumber = Pattern.PHONE_NUMBER;
        this.patternFullname = Pattern.FULLNAME;
        this.genderData = [];
        this.bloodTypeData = [{
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
        this.isCheckEmail = true;
        this.formGroup.get('personal-information').get('email')
            .setAsyncValidators([userValidator(this.oauthResource, this.httpBaseService, this.apiPath)]);
    }
    ngOnInit() {
        this.formGroup.get('personal-information').get('gender').setValue('GENDER.MALE');
        this.loadingForm = true;
        this.http.HTTP_AUTH(this.api['master']['radio-parameter'], {
            keyword: {
                parameterGroupCode: 'GENDER',
            },
        }).pipe(takeUntil(this.destroy$), map((response) => {
            this.genderData = response;
        }), catchError(() => of([]))).subscribe(() => {
            this.loadingForm = false;
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
    onKeyDownEmail(event) {
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
    }
    validateRoute() { }
}
EmployeeAddPersonalInformationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeAddPersonalInformationComponent, deps: [{ token: i0.Injector }, { token: HTTP_SERVICE }, { token: OAUTH_INFO }, { token: API }], target: i0.ɵɵFactoryTarget.Component });
EmployeeAddPersonalInformationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeAddPersonalInformationComponent, selector: "do-employee-add-personal-information", usesInheritance: true, ngImport: i0, template: "<do-wizard-page-outlet>\n  <form class=\"form-horizontal\" autocomplete=\"on\" [formGroup]=\"formGroup\" wizardcontent>\n    <div [formGroupName]=\"formGroupName\">\n      <do-input-text\n        [name]=\"'name'\"\n        [label]=\"'Name'\"\n        [placeholder]=\"'Name'\"\n        [pattern]=\"patternFullname\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"name\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'nik'\"\n        [label]=\"'Employee Identification Number'\"\n        [placeholder]=\"'Employee Identification Number'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"nik\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'idNumber'\"\n        [label]=\"'ID Card Number'\"\n        [placeholder]=\"'ID Card Number'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"idNumber\">\n      </do-input-text>\n      <do-radio\n        [name]=\"'gender'\"\n        [label]=\"'Gender'\"\n        [placeholder]=\"'Gender'\"\n        [data]=\"genderData\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"gender\">\n      </do-radio>\n      <do-input-text\n        [name]=\"'placeOfBirth'\"\n        [label]=\"'Place of Birth'\"\n        [placeholder]=\"'Place of Birth'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"placeOfBirth\">\n      </do-input-text>\n      <do-datepicker\n        [name]=\"'dateOfBirth'\"\n        [label]=\"'Date of Birth'\"\n        [placeholder]=\"'Date of Birth'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"dateOfBirth\">\n      </do-datepicker>\n      <do-input-text\n        [name]=\"'email'\"\n        [label]=\"'Email'\"\n        [placeholder]=\"'Email'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        [pattern]=\"patternEmail\"\n        [paramError]=\"{value:5}\"\n        minlength=\"5\"\n        maxlength=\"50\"\n        formControlName=\"email\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'phoneNumber'\"\n        [label]=\"'Phone Number'\"\n        [placeholder]=\"'Phone Number'\"\n        [pattern]=\"patternPhoneNumber\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"phoneNumber\">\n      </do-input-text>\n      <do-textarea\n        [name]=\"'address'\"\n        [label]=\"'Address'\"\n        [placeholder]=\"'Address'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"address\">\n      </do-textarea>\n      <do-input-text\n        [name]=\"'height'\"\n        [label]=\"'height.body'\"\n        [placeholder]=\"'Centimeter'\"\n        [type]=\"'number'\"\n        [step]=\"'any'\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"height\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'weight'\"\n        [label]=\"'weight.body'\"\n        [placeholder]=\"'Kilogram'\"\n        [type]=\"'number'\"\n        [step]=\"'any'\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"weight\">\n      </do-input-text>\n      <do-select\n        [name]=\"'bloodType'\"\n        [label]=\"'Blood Type'\"\n        [placeholder]=\"'Blood Type'\"\n        [items]=\"bloodTypeData\"\n        [searchable]=\"false\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"bloodType\">\n      </do-select>\n    </div>\n  </form>\n</do-wizard-page-outlet>\n", styles: [""], components: [{ type: i3.DoWizardPageOutletComponent, selector: "do-wizard-page-outlet", inputs: ["width"] }, { type: i3.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i3.DoRadioComponent, selector: "do-radio", inputs: ["placeholder", "colLabel", "colInput", "data"] }, { type: i3.DoDatePickerComponent, selector: "do-datepicker", inputs: ["placeholder", "colLabel", "colInput", "min", "max", "size", "dateMask"] }, { type: i3.DoTextareaComponent, selector: "do-textarea", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "height"] }, { type: i3.DoSelectComponent, selector: "do-select", inputs: ["placeholder", "colLabel", "colInput", "items", "multiple", "loading", "addTag", "closeOnSelect", "clearable", "searchable", "hideSelected", "minTermLength", "maxTermLength", "api", "limit", "offsetNextLoad", "queryParam"], outputs: ["onSelect", "onClear"] }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4.FormGroupName, selector: "[formGroupName]", inputs: ["formGroupName"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { type: i4.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i4.MinLengthValidator, selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]", inputs: ["minlength"] }, { type: i4.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeAddPersonalInformationComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-employee-add-personal-information',
                    templateUrl: 'employee-add-personal-information.component.html',
                    styleUrls: ['./employee-add-personal-information.component.scss'],
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [HTTP_SERVICE]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [OAUTH_INFO]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [API]
                }] }]; } });
function userValidator(oauthResource, httpBaseService, apiPath) {
    return (control) => {
        if (!control.valueChanges) {
            return of(null);
        }
        else {
            return control.valueChanges.pipe(debounceTime(500), distinctUntilChanged(), switchMap(() => {
                const validatorSubject$ = new Subject();
                const httpHeaders = new HttpHeaders({
                    Authorization: 'Basic ' + btoa(oauthResource['client_id'] + ':' + oauthResource['client_secret']),
                    'Content-Type': 'application/json',
                });
                const data = {
                    user: control.value,
                };
                let dataValidator;
                if (control.value) {
                    httpBaseService.HTTP_BASE(apiPath['auth']['check-user'], data, httpHeaders).subscribe((response) => {
                        if (response['respStatusCode'] === ResponseCode.OK_SCR012.toString()) {
                            validatorSubject$.next(null);
                        }
                        else {
                            dataValidator = {
                                error: true,
                            };
                            validatorSubject$.next(dataValidator);
                        }
                    }, (error) => {
                        if (!(error instanceof HttpErrorResponse)) {
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
            })).pipe(first());
        }
    };
}

class EmployeeAddEducationComponent extends DoWizardStep {
    constructor(injector) {
        super(injector, 'education', {
            educationalLevel: [{
                    value: null,
                    disabled: false,
                }, Validators.required],
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
        });
        this.injector = injector;
        this.noSchool = false;
        this.apiSelectEducationalLevel = this.api['master']['select-parameter'];
        this.paramSelectEducationalLevel = [{
                key: 'parameterGroupCode',
                value: 'EDUCATIONAL_LEVEL',
            }];
    }
    ngOnInit() {
        const select = this.formGroup.get('education').get('educationalLevel').value;
        if ((select === null || select === void 0 ? void 0 : select.value) === 'EDUCATIONAL_LEVEL.NO_EDUCATION') {
            this.noSchool = true;
        }
        else {
            this.noSchool = false;
        }
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
    onSelectEducationalLevel(select) {
        if ((select === null || select === void 0 ? void 0 : select.value) === 'EDUCATIONAL_LEVEL.NO_EDUCATION') {
            this.noSchool = true;
        }
        else {
            this.noSchool = false;
        }
    }
    validateRoute() {
        var _a;
        if (!this.formGroup.get('personal-information') || ((_a = this.formGroup.get('personal-information')) === null || _a === void 0 ? void 0 : _a.invalid)) {
            this.router.navigate(['/app/mgmt/employee/add/personal-information']);
        }
    }
}
EmployeeAddEducationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeAddEducationComponent, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
EmployeeAddEducationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeAddEducationComponent, selector: "do-employee-add-education", usesInheritance: true, ngImport: i0, template: "<do-wizard-page-outlet>\n  <form class=\"form-horizontal\" autocomplete=\"on\" [formGroup]=\"formGroup\" wizardcontent>\n    <div class=\"accordion-container\" [formGroupName]=\"formGroupName\">\n      <nb-accordion multi>\n        <nb-accordion-item [expanded]=\"true\">\n          <nb-accordion-item-header>\n            {{'Formal Education' | translate}}\n          </nb-accordion-item-header>\n          <nb-accordion-item-body>\n            <do-select\n              [name]=\"'educationalLevel'\"\n              [label]=\"'Educational Level'\"\n              [placeholder]=\"'Educational Level'\"\n              [required]=\"true\"\n              [api]=\"apiSelectEducationalLevel\"\n              [queryParam]=\"paramSelectEducationalLevel\"\n              [searchable]=\"false\"\n              (onSelect)=\"onSelectEducationalLevel($event)\"\n              [skeleton]=\"loadingForm\"\n              formControlName=\"educationalLevel\">\n            </do-select>\n            <do-input-text\n              [name]=\"'school'\"\n              [label]=\"'School'\"\n              [placeholder]=\"'School'\"\n              [show]=\"!noSchool\"\n              formControlName=\"school\">\n            </do-input-text>\n            <do-input-text\n              [name]=\"'startYear'\"\n              [label]=\"'Start Year'\"\n              [placeholder]=\"'Start Year'\"\n              [type]=\"'number'\"\n              [show]=\"!noSchool\"\n              formControlName=\"startYear\">\n            </do-input-text>\n            <do-input-text\n              [name]=\"'endYear'\"\n              [label]=\"'End Year'\"\n              [placeholder]=\"'End Year'\"\n              [type]=\"'number'\"\n              [show]=\"!noSchool\"\n              formControlName=\"endYear\">\n            </do-input-text>\n          </nb-accordion-item-body>\n        </nb-accordion-item>\n        <nb-accordion-item [expanded]=\"true\">\n          <nb-accordion-item-header>\n            {{'Non Formal Education' | translate}}\n          </nb-accordion-item-header>\n          <nb-accordion-item-body>\n            <do-input-text\n              [name]=\"'trainingName'\"\n              [label]=\"'Training Name'\"\n              [placeholder]=\"'Training Name'\"\n              formControlName=\"trainingName\">\n            </do-input-text>\n            <do-datepicker-range\n              [name]=\"'trainingDate'\"\n              [label]=\"'Training Date'\"\n              [placeholder]=\"'Training Date'\"\n              [skeleton]=\"loadingForm\"\n              formControlName=\"trainingDate\">\n            </do-datepicker-range>\n          </nb-accordion-item-body>\n        </nb-accordion-item>\n      </nb-accordion>\n    </div>\n  </form>\n</do-wizard-page-outlet>", styles: [".nb-theme-default :host nb-accordion{box-shadow:unset}.nb-theme-dark :host nb-accordion{box-shadow:unset}.nb-theme-cosmic :host nb-accordion{box-shadow:unset}.nb-theme-corporate :host nb-accordion{box-shadow:unset}\n"], components: [{ type: i3.DoWizardPageOutletComponent, selector: "do-wizard-page-outlet", inputs: ["width"] }, { type: i1$1.NbAccordionComponent, selector: "nb-accordion", inputs: ["multi"] }, { type: i1$1.NbAccordionItemComponent, selector: "nb-accordion-item", inputs: ["collapsed", "expanded", "disabled"], outputs: ["collapsedChange"] }, { type: i1$1.NbAccordionItemHeaderComponent, selector: "nb-accordion-item-header" }, { type: i1$1.NbAccordionItemBodyComponent, selector: "nb-accordion-item-body" }, { type: i3.DoSelectComponent, selector: "do-select", inputs: ["placeholder", "colLabel", "colInput", "items", "multiple", "loading", "addTag", "closeOnSelect", "clearable", "searchable", "hideSelected", "minTermLength", "maxTermLength", "api", "limit", "offsetNextLoad", "queryParam"], outputs: ["onSelect", "onClear"] }, { type: i3.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i3.DoDatePickerRangeComponent, selector: "do-datepicker-range", inputs: ["placeholder", "colLabel", "colInput", "icon", "min", "max", "size", "dateMask"] }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4.FormGroupName, selector: "[formGroupName]", inputs: ["formGroupName"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }], pipes: { "translate": i6.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeAddEducationComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-employee-add-education',
                    templateUrl: 'employee-add-education.component.html',
                    styleUrls: ['./employee-add-education.component.scss'],
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }]; } });

class EmployeeAddEmployeeStatusComponent extends DoWizardStep {
    constructor(injector) {
        super(injector, 'employee-status', {
            occupation: [{
                    value: null,
                    disabled: false,
                }, Validators.required],
            role: [{
                    value: null,
                    disabled: false,
                }, Validators.required],
            employeeParent: [{
                    value: null,
                    disabled: false,
                }],
        });
        this.injector = injector;
        this.apiSelectOccupation = this.api['security']['select-occupation'];
        this.apiSelectRole = this.api['security']['select-role'];
        this.apiSelectEmployeeParent = this.api['security']['select-employee'];
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
    validateRoute() {
        var _a;
        if (!((_a = this.formGroup.controls['education']) === null || _a === void 0 ? void 0 : _a.valid)) {
            this.router.navigate(['/app/mgmt/employee/add/education']);
        }
    }
}
EmployeeAddEmployeeStatusComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeAddEmployeeStatusComponent, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
EmployeeAddEmployeeStatusComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeAddEmployeeStatusComponent, selector: "do-employee-add-employee-status", usesInheritance: true, ngImport: i0, template: "<do-wizard-page-outlet>\n  <form class=\"form-horizontal\" autocomplete=\"on\" [formGroup]=\"formGroup\" wizardcontent>\n    <div [formGroupName]=\"formGroupName\">\n      <do-select\n        [name]=\"'occupation'\"\n        [label]=\"'Occupation'\"\n        [placeholder]=\"'Occupation'\"\n        [required]=\"true\"\n        [api]=\"apiSelectOccupation\"\n        [searchable]=\"false\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"occupation\">\n      </do-select>\n      <do-select\n        [name]=\"'role'\"\n        [label]=\"'Role'\"\n        [placeholder]=\"'Role'\"\n        [required]=\"true\"\n        [api]=\"apiSelectRole\"\n        [searchable]=\"false\"\n        [multiple]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"role\">\n      </do-select>\n      <do-select\n        [name]=\"'employeeParent'\"\n        [label]=\"'Supervisor'\"\n        [placeholder]=\"'Supervisor'\"\n        [api]=\"apiSelectEmployeeParent\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"employeeParent\">\n      </do-select>\n    </div>\n  </form>\n</do-wizard-page-outlet>\n", styles: [""], components: [{ type: i3.DoWizardPageOutletComponent, selector: "do-wizard-page-outlet", inputs: ["width"] }, { type: i3.DoSelectComponent, selector: "do-select", inputs: ["placeholder", "colLabel", "colInput", "items", "multiple", "loading", "addTag", "closeOnSelect", "clearable", "searchable", "hideSelected", "minTermLength", "maxTermLength", "api", "limit", "offsetNextLoad", "queryParam"], outputs: ["onSelect", "onClear"] }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4.FormGroupName, selector: "[formGroupName]", inputs: ["formGroupName"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeAddEmployeeStatusComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-employee-add-employee-status',
                    templateUrl: 'employee-add-employee-status.component.html',
                    styleUrls: ['./employee-add-employee-status.component.scss'],
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }]; } });

const routes$2 = [{
        path: '',
        component: MgmtEmployeeComponent,
        canActivateChild: [AuthGuardChildService],
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
class DoMgmtEmployeeRoutingModule {
}
DoMgmtEmployeeRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtEmployeeRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoMgmtEmployeeRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtEmployeeRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
DoMgmtEmployeeRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtEmployeeRoutingModule, imports: [[RouterModule.forChild(routes$2)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtEmployeeRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$2)],
                    exports: [RouterModule],
                }]
        }] });

const components$2 = [
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
const modules$2 = [
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NbCardModule,
    NbAlertModule,
    NbIconModule,
    NbButtonModule,
    NbAccordionModule,
    NbDialogModule.forChild(),
    NbTabsetModule,
    NbSpinnerModule,
    DoThemeModule,
    DoBaseModule,
    DoInputModule,
    DoCheckBoxModule,
    DoButtonModule,
    DoSelectModule,
    DoDatatableModule,
    DoEditorModule,
    DoDatePickerModule,
    DoRadioModule,
    DoLabelModule,
    DoWizardModule.forRoot(),
    DoMgmtEmployeeRoutingModule,
];
const providers$2 = [
    EmployeeService,
];
class DoMgmtEmployeeModule {
}
DoMgmtEmployeeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtEmployeeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoMgmtEmployeeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtEmployeeModule, declarations: [MgmtEmployeeComponent,
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
        EmployeeEducationNonFormalPromptComponent], imports: [FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        NbCardModule,
        NbAlertModule,
        NbIconModule,
        NbButtonModule,
        NbAccordionModule, i1$1.NbDialogModule, NbTabsetModule,
        NbSpinnerModule,
        DoThemeModule,
        DoBaseModule,
        DoInputModule,
        DoCheckBoxModule,
        DoButtonModule,
        DoSelectModule,
        DoDatatableModule,
        DoEditorModule,
        DoDatePickerModule,
        DoRadioModule,
        DoLabelModule, i3.DoWizardModule, DoMgmtEmployeeRoutingModule] });
DoMgmtEmployeeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtEmployeeModule, providers: [
        ...providers$2,
    ], imports: [[
            ...modules$2,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtEmployeeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        ...modules$2,
                    ],
                    declarations: [
                        ...components$2,
                    ],
                    providers: [
                        ...providers$2,
                    ],
                }]
        }] });

class MgmtJobPlacementComponent {
}
MgmtJobPlacementComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MgmtJobPlacementComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MgmtJobPlacementComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: MgmtJobPlacementComponent, selector: "do-mgmt-job-placement", ngImport: i0, template: `
    <router-outlet></router-outlet>
  `, isInline: true, directives: [{ type: i1.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MgmtJobPlacementComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-mgmt-job-placement',
                    template: `
    <router-outlet></router-outlet>
  `,
                }]
        }] });

class JobPlacementService {
    getAssignmentGroup() {
        return this.assignmentGroup;
    }
    setAssignmentGroup(assignmentGroup) {
        this.assignmentGroup = assignmentGroup;
    }
}
JobPlacementService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: JobPlacementService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
JobPlacementService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: JobPlacementService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: JobPlacementService, decorators: [{
            type: Injectable
        }] });

class JobPlacementListPageComponent extends BaseFilterComponent {
    constructor(injector, router, jobPlacementService) {
        super(injector, {
            bpName: [],
        });
        this.injector = injector;
        this.router = router;
        this.jobPlacementService = jobPlacementService;
        this.columns = [
            { name: 'Business Partner', prop: 'bpName', frozenLeft: true, sortable: true },
            { name: 'Total Assignment', prop: 'totalAssignment', width: 55, frozenLeft: true },
        ];
        this.selectionType = SelectionType.single;
        this.sort = {
            asc: ['bpName']
        };
        this.sortsDefault = [
            { prop: 'bpName', dir: 'asc' }
        ];
        this.filters = [{ controlName: 'bpName', type: 'input' }];
        this.apiPath = this.api['activity']['datatable-assignment-group'];
    }
    ngOnInit() {
    }
    onViewDetail(data) {
        this.jobPlacementService.setAssignmentGroup(data);
        this.router.navigate(['/app/mgmt/job-placement', 'edit']);
    }
}
JobPlacementListPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: JobPlacementListPageComponent, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: JobPlacementService }], target: i0.ɵɵFactoryTarget.Component });
JobPlacementListPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: JobPlacementListPageComponent, selector: "do-job-placement-list-page", usesInheritance: true, ngImport: i0, template: "<do-page-outlet [header]=\"'header.job-placement-management'\" [hidefooter]=\"true\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [sort]=\"sort\"\n        [sortsDefault]=\"sortsDefault\"\n        [selectionType]=\"selectionType\"\n        [delete]=\"false\"\n        [add]=\"false\"\n        (onEdit)=\"onViewDetail($event)\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'bpName'\"\n            [label]=\"'Business Partner'\"\n            formControlName=\"bpName\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n\n", styles: [""], components: [{ type: i3.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i3.DoDatatableComponent, selector: "do-datatable", inputs: ["rows", "columns", "filters", "selected", "limit", "count", "offset", "externalPaging", "externalSorting", "loadingIndicator", "scrollbarH", "scrollbarV", "reorderable", "sortType", "messages", "selectionType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "header", "column", "footer", "add", "edit", "delete", "filter", "api", "startWithOpenData", "filterEvent", "formGroupFilter", "sort", "sortsDefault", "autoLoad", "filterFn", "filterDoFetchFn", "reloadFn"], outputs: ["onAdd", "onEdit", "onDelete", "onSearch", "onFilter", "onButtonCell", "onLoading", "onSelected"] }, { type: i3.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: JobPlacementListPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-job-placement-list-page',
                    styleUrls: ['./job-placement-list-page.component.scss'],
                    templateUrl: './job-placement-list-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: JobPlacementService }]; } });

class EmployeePromptComponent {
    constructor(api, ref) {
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
    ngOnInit() {
    }
    onSubmit() {
        this.ref.close(this.selected);
    }
    onReset() {
        this.ref.close();
    }
    onSelected(data) {
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
    }
}
EmployeePromptComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeePromptComponent, deps: [{ token: API }, { token: i1$1.NbDialogRef }], target: i0.ɵɵFactoryTarget.Component });
EmployeePromptComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeePromptComponent, selector: "do-employee-prompt", inputs: { education: "education" }, ngImport: i0, template: "<nb-card class=\"modal-form\">\n  <nb-card-header>\n    {{ 'header.employee-selection' | translate }}\n  </nb-card-header>\n  <nb-card-body>\n    <div class=\"row\">\n      <div class=\"col-md-12 col-lg-12\">\n        <do-datatable\n          [api]=\"apiPath\"\n          [columns]=\"columns\"\n          [sort]=\"sort\"\n          [sortsDefault]=\"sortsDefault\"\n          [edit]=\"false\"\n          [add]=\"false\"\n          [delete]=\"false\"\n          (onSelected)=\"onSelected($event)\">\n        </do-datatable>\n      </div>\n    </div>\n  </nb-card-body>\n  <nb-card-footer>\n    <div class=\"row\" style=\"margin: auto; width: 50%\">\n      <div style=\"margin: auto\">\n        <button\n          type=\"reset\"\n          status=\"danger\"\n          (click)=\"onReset()\"\n          class=\"reset-left\"\n          nbButton>\n          {{ 'Cancel' | translate}}\n        </button>\n        <button\n          type=\"submit\"\n          status=\"primary\"\n          (click)=\"onSubmit()\"\n          class=\"submit-right\"\n          [disabled]=\"disabled\"\n          nbButton>\n          {{ 'Choose' | translate}}\n        </button>\n      </div>\n    </div>\n  </nb-card-footer>\n</nb-card>\n", styles: [".nb-theme-default :host .modal-form{max-width:45rem;width:45rem!important}.nb-theme-default :host button[nbButton]{margin:0 .25rem}.nb-theme-default :host .reset-left{margin-right:.25rem}.nb-theme-default :host .submit-right{margin-left:.25rem}@media (max-width: 767.98px){.nb-theme-default :host .modal-form{width:100%!important}}.nb-theme-dark :host .modal-form{max-width:45rem;width:45rem!important}.nb-theme-dark :host button[nbButton]{margin:0 .25rem}.nb-theme-dark :host .reset-left{margin-right:.25rem}.nb-theme-dark :host .submit-right{margin-left:.25rem}@media (max-width: 767.98px){.nb-theme-dark :host .modal-form{width:100%!important}}.nb-theme-cosmic :host .modal-form{max-width:45rem;width:45rem!important}.nb-theme-cosmic :host button[nbButton]{margin:0 .25rem}.nb-theme-cosmic :host .reset-left{margin-right:.25rem}.nb-theme-cosmic :host .submit-right{margin-left:.25rem}@media (max-width: 767.98px){.nb-theme-cosmic :host .modal-form{width:100%!important}}.nb-theme-corporate :host .modal-form{max-width:45rem;width:45rem!important}.nb-theme-corporate :host button[nbButton]{margin:0 .25rem}.nb-theme-corporate :host .reset-left{margin-right:.25rem}.nb-theme-corporate :host .submit-right{margin-left:.25rem}@media (max-width: 767.98px){.nb-theme-corporate :host .modal-form{width:100%!important}}\n"], components: [{ type: i1$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i3.DoDatatableComponent, selector: "do-datatable", inputs: ["rows", "columns", "filters", "selected", "limit", "count", "offset", "externalPaging", "externalSorting", "loadingIndicator", "scrollbarH", "scrollbarV", "reorderable", "sortType", "messages", "selectionType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "header", "column", "footer", "add", "edit", "delete", "filter", "api", "startWithOpenData", "filterEvent", "formGroupFilter", "sort", "sortsDefault", "autoLoad", "filterFn", "filterDoFetchFn", "reloadFn"], outputs: ["onAdd", "onEdit", "onDelete", "onSearch", "onFilter", "onButtonCell", "onLoading", "onSelected"] }, { type: i1$1.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i1$1.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], pipes: { "translate": i6.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeePromptComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-employee-prompt',
                    templateUrl: 'employee-prompt.component.html',
                    styleUrls: ['employee-prompt.component.scss'],
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [API]
                }] }, { type: i1$1.NbDialogRef }]; }, propDecorators: { education: [{
                type: Input
            }] } });

class JobPlacementEditPageComponent extends BaseComponent {
    constructor(injector, router, toastr, dialogService, jobPlacementService) {
        super(injector);
        this.injector = injector;
        this.router = router;
        this.toastr = toastr;
        this.dialogService = dialogService;
        this.jobPlacementService = jobPlacementService;
        this.loading = false;
        this.disabled = false;
        this.destroy$ = new Subject();
        this.reload = false;
        this.columns = [
            { name: 'Employee Name', prop: 'employee.fullname', frozenLeft: true, sortable: true },
            { name: 'NIK', prop: 'employee.idEmployee', frozenLeft: true },
            { name: 'Occupation', prop: 'employee.occupation.name', frozenLeft: true },
        ];
        this.assignmentIds = [];
    }
    ngOnInit() {
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
                pipe(takeUntil(this.destroy$)).subscribe((success) => {
                this.loading = false;
                this.businessPartner = success;
            }, (error) => {
                this.loading = true;
                if (error instanceof HttpErrorResponse) {
                    error = error['error'];
                }
                this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
            });
        }
        else {
            this.router.navigate(['/app/mgmt/job-placement']);
        }
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.next();
        this.destroy$.complete();
    }
    onAddAssignment() {
        this.dialogService.open(EmployeePromptComponent)
            .onClose.subscribe((data) => {
            if (data) {
                if (data.length) {
                    const employeeIds = [];
                    data.forEach(employee => {
                        employeeIds.push(employee.id);
                    });
                    const dataRequest = {
                        id: this.assignmentGroup.id,
                        bpId: this.assignmentGroup.bpId,
                        employeeIds,
                    };
                    this.disabled = true;
                    this.http.HTTP_AUTH(this.apiPathAdd, dataRequest)
                        .pipe(takeUntil(this.destroy$))
                        .subscribe((success) => {
                        this.disabled = false;
                        this.reload = true;
                        if (this.assignmentGroup) {
                            this.assignmentGroup['id'] = success.respStatusMessage['assignmentGroupId'];
                        }
                        this.keyword = {
                            assignmentGroupId: success.respStatusMessage['assignmentGroupId'],
                        };
                        this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
                    }, (error) => {
                        this.disabled = false;
                        this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
                    });
                }
            }
        });
    }
    onDeleteAssignmentDialog(data, dialog) {
        this.reload = false;
        this.assignmentIds = [];
        data.forEach(value => {
            this.assignmentIds.push(value.id);
        });
        this.dialogService.open(dialog, { context: 'alert.delete' });
    }
    onDeleteAssignment(ref) {
        this.disabled = true;
        const data = {
            id: this.assignmentGroup.id,
            assignmentIds: this.assignmentIds,
        };
        this.http.HTTP_AUTH(this.apiPathDelete, data)
            .pipe(takeUntil(this.destroy$))
            .subscribe((success) => {
            this.disabled = false;
            ref.close();
            this.reload = true;
            this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
        }, (error) => {
            this.disabled = false;
            this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
        });
    }
}
JobPlacementEditPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: JobPlacementEditPageComponent, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: i3.DoToastrService }, { token: i1$1.NbDialogService }, { token: JobPlacementService }], target: i0.ɵɵFactoryTarget.Component });
JobPlacementEditPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: JobPlacementEditPageComponent, selector: "do-job-placement-edit-page", usesInheritance: true, ngImport: i0, template: "<do-page-outlet [header]=\"'header.job-placement-management'\" [url]=\"'/app/mgmt/job-placement'\" [hidefooter]=\"true\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <do-label-text\n        [name]=\"'bpName'\"\n        [label]=\"'Business Partner'\"\n        [skeleton]=\"loading\"\n        [content]=\"businessPartner?.bpName\"\n        [colLabel]=\"3\"\n        [colContent]=\"9\"\n        [dividerlabel]=\"false\">\n      </do-label-text>\n      <do-label-text\n        [name]=\"'email'\"\n        [label]=\"'Email'\"\n        [skeleton]=\"loading\"\n        [content]=\"businessPartner?.email\"\n        [colLabel]=\"3\"\n        [colContent]=\"9\"\n        [dividerlabel]=\"false\">\n      </do-label-text>\n      <do-label-text\n        [name]=\"'address'\"\n        [label]=\"'Address'\"\n        [skeleton]=\"loading\"\n        [content]=\"businessPartner?.address\"\n        [colLabel]=\"3\"\n        [colContent]=\"9\"\n        [dividerlabel]=\"false\">\n      </do-label-text>\n      <do-label-text\n        [name]=\"'telpNumber'\"\n        [label]=\"'Telp.'\"\n        [skeleton]=\"loading\"\n        [content]=\"businessPartner?.telpNumber\"\n        [colLabel]=\"3\"\n        [colContent]=\"9\"\n        [dividerlabel]=\"false\">\n      </do-label-text>\n      <do-datatable\n        [api]=\"apiPath\"\n        [columns]=\"columns\"\n        [filterFn]=\"keyword\"\n        [sort]=\"sort\"\n        [reloadFn]=\"reload\"\n        [edit]=\"false\"\n        (onAdd)=\"onAddAssignment()\"\n        (onDelete)=\"onDeleteAssignmentDialog($event, dialogdeleteassignment)\">\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n\n<ng-template #dialogdeleteassignment let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"danger\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <do-button-submit\n        [colLabel]=\"0\"\n        [colButton]=\"12\"\n        [submitTitle]=\"'Delete'\"\n        [resetTitle]=\"'Cancel'\"\n        [disabledButton]=\"disabled\"\n        (onReset)=\"ref.close()\"\n        (onSubmit)=\"onDeleteAssignment(ref)\">\n      </do-button-submit>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>\n", styles: [""], components: [{ type: i3.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i3.DoLabelTextComponent, selector: "do-label-text", inputs: ["colLabel", "colContent", "skeleton", "name", "content", "dividerlabel", "numeric", "label", "nolabel", "required", "showMoreMode", "maxShowMore", "paramError"] }, { type: i3.DoDatatableComponent, selector: "do-datatable", inputs: ["rows", "columns", "filters", "selected", "limit", "count", "offset", "externalPaging", "externalSorting", "loadingIndicator", "scrollbarH", "scrollbarV", "reorderable", "sortType", "messages", "selectionType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "header", "column", "footer", "add", "edit", "delete", "filter", "api", "startWithOpenData", "filterEvent", "formGroupFilter", "sort", "sortsDefault", "autoLoad", "filterFn", "filterDoFetchFn", "reloadFn"], outputs: ["onAdd", "onEdit", "onDelete", "onSearch", "onFilter", "onButtonCell", "onLoading", "onSelected"] }, { type: i1$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i1$1.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i3.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], pipes: { "translate": i6.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: JobPlacementEditPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-job-placement-edit-page',
                    styleUrls: ['./job-placement-edit-page.component.scss'],
                    templateUrl: './job-placement-edit-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: i3.DoToastrService }, { type: i1$1.NbDialogService }, { type: JobPlacementService }]; } });

const routes$1 = [{
        path: '',
        component: MgmtJobPlacementComponent,
        canActivateChild: [AuthGuardChildService],
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
class DoMgmtJobPlacementRoutingModule {
}
DoMgmtJobPlacementRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtJobPlacementRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoMgmtJobPlacementRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtJobPlacementRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
DoMgmtJobPlacementRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtJobPlacementRoutingModule, imports: [[RouterModule.forChild(routes$1)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtJobPlacementRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$1)],
                    exports: [RouterModule],
                }]
        }] });

const components$1 = [
    MgmtJobPlacementComponent,
    JobPlacementListPageComponent,
    JobPlacementEditPageComponent,
    EmployeePromptComponent,
];
const modules$1 = [
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NbCardModule,
    NbAlertModule,
    NbIconModule,
    NbButtonModule,
    NbAccordionModule,
    NbDialogModule.forChild(),
    NbTabsetModule,
    NbSpinnerModule,
    DoThemeModule,
    DoBaseModule,
    DoInputModule,
    DoCheckBoxModule,
    DoButtonModule,
    DoSelectModule,
    DoDatatableModule,
    DoLabelModule,
    DoMgmtJobPlacementRoutingModule,
];
const providers$1 = [
    JobPlacementService,
];
class DoMgmtJobPlacementModule {
}
DoMgmtJobPlacementModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtJobPlacementModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoMgmtJobPlacementModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtJobPlacementModule, declarations: [MgmtJobPlacementComponent,
        JobPlacementListPageComponent,
        JobPlacementEditPageComponent,
        EmployeePromptComponent], imports: [FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        NbCardModule,
        NbAlertModule,
        NbIconModule,
        NbButtonModule,
        NbAccordionModule, i1$1.NbDialogModule, NbTabsetModule,
        NbSpinnerModule,
        DoThemeModule,
        DoBaseModule,
        DoInputModule,
        DoCheckBoxModule,
        DoButtonModule,
        DoSelectModule,
        DoDatatableModule,
        DoLabelModule,
        DoMgmtJobPlacementRoutingModule] });
DoMgmtJobPlacementModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtJobPlacementModule, providers: [
        ...providers$1,
    ], imports: [[
            ...modules$1,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtJobPlacementModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        ...modules$1,
                    ],
                    declarations: [
                        ...components$1,
                    ],
                    providers: [
                        ...providers$1,
                    ],
                }]
        }] });

class EmployeeProfileComponent {
}
EmployeeProfileComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeProfileComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
EmployeeProfileComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeProfileComponent, selector: "do-employee-profile", ngImport: i0, template: `
    <router-outlet></router-outlet>
  `, isInline: true, directives: [{ type: i1.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeProfileComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-employee-profile',
                    template: `
    <router-outlet></router-outlet>
  `,
                }]
        }] });

class EmployeeProfilePersonalInformationComponent extends BaseFormComponent {
    constructor(injector, userService, profileIndexedDB, authIndexedDB) {
        super(injector, {
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
            address: [null, [Validators.minLength(5)]],
            country: [],
            province: [],
            city: [],
            district: [],
            subDistrict: [],
        });
        this.injector = injector;
        this.userService = userService;
        this.profileIndexedDB = profileIndexedDB;
        this.authIndexedDB = authIndexedDB;
        this.patternEmail = Pattern.EMAIL;
        this.patternPhoneNumber = Pattern.PHONE_NUMBER;
        this.patternFullname = Pattern.FULLNAME;
        this.minLength = 5;
        this.disabledUpload = false;
        this.provider = 'local';
        this.bloodTypeData = [{
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
        this.formGroupImage = this.formBuilder.group({
            image: [],
        });
        this.apiSelectGender = this.api['master']['select-parameter'];
        this.apiSelectCountry = this.api['master']['select-country'];
        this.apiSelectProvince = this.api['master']['select-province'];
        this.apiSelectCity = this.api['master']['select-city'];
        this.apiSelectDistrict = this.api['master']['select-district'];
        this.apiSelectSubDistrict = this.api['master']['select-subdistrict'];
        this.authIndexedDB.getEnc('provider').then((value) => {
            if (value !== 'local') {
                this.provider = value;
                this.formGroup.controls['email'].disable();
            }
        });
        this.profileIndexedDB.get('image-base64').then((image) => {
            this.formGroupImage.get('image').setValue(image);
            this.formGroupImage.markAsPending();
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
    }
    ngOnInit() {
    }
    loadDataMenu() {
        this.loadingForm = true;
        return this.exec('profile', 'get-profile')
            .pipe(map((success) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7;
            this.loadingForm = false;
            this.formGroup.controls['name'].setValue(success.name);
            this.formGroup.controls['username'].setValue(success.username);
            this.formGroup.controls['email'].setValue(success.email);
            if (success === null || success === void 0 ? void 0 : success.personalInfo) {
                this.formGroup.controls['idNumber'].setValue((_a = success === null || success === void 0 ? void 0 : success.personalInfo) === null || _a === void 0 ? void 0 : _a.idNumber);
                if ((_b = success === null || success === void 0 ? void 0 : success.personalInfo) === null || _b === void 0 ? void 0 : _b.genderCode) {
                    this.formGroup.controls['gender'].setValue({
                        label: success === null || success === void 0 ? void 0 : success.personalInfo.genderValue,
                        value: success === null || success === void 0 ? void 0 : success.personalInfo.genderCode
                    });
                }
                this.formGroup.controls['placeOfBirth'].setValue((_c = success === null || success === void 0 ? void 0 : success.personalInfo) === null || _c === void 0 ? void 0 : _c.placeOfBirth);
                if ((_d = success === null || success === void 0 ? void 0 : success.personalInfo) === null || _d === void 0 ? void 0 : _d.dateOfBirth) {
                    this.formGroup.controls['dateOfBirth'].setValue((_e = success === null || success === void 0 ? void 0 : success.personalInfo) === null || _e === void 0 ? void 0 : _e.dateOfBirth);
                }
                this.formGroup.controls['height'].setValue((_f = success === null || success === void 0 ? void 0 : success.personalInfo) === null || _f === void 0 ? void 0 : _f.height);
                this.formGroup.controls['weight'].setValue((_g = success === null || success === void 0 ? void 0 : success.personalInfo) === null || _g === void 0 ? void 0 : _g.weight);
                this.formGroup.controls['bloodType'].setValue({
                    value: (_h = success === null || success === void 0 ? void 0 : success.personalInfo) === null || _h === void 0 ? void 0 : _h.bloodType,
                    label: (_j = success === null || success === void 0 ? void 0 : success.personalInfo) === null || _j === void 0 ? void 0 : _j.bloodType,
                });
            }
            if (success === null || success === void 0 ? void 0 : success.contact) {
                if ((_k = success === null || success === void 0 ? void 0 : success.contact) === null || _k === void 0 ? void 0 : _k.address) {
                    this.formGroup.controls['address'].setValue((_l = success === null || success === void 0 ? void 0 : success.contact) === null || _l === void 0 ? void 0 : _l.address);
                }
                if ((_m = success === null || success === void 0 ? void 0 : success.contact) === null || _m === void 0 ? void 0 : _m.phoneNumber) {
                    this.formGroup.controls['phoneNumber'].setValue((_o = success === null || success === void 0 ? void 0 : success.contact) === null || _o === void 0 ? void 0 : _o.phoneNumber);
                }
                if ((_p = success === null || success === void 0 ? void 0 : success.contact) === null || _p === void 0 ? void 0 : _p.country) {
                    this.formGroup.controls['country'].setValue({
                        label: (_q = success === null || success === void 0 ? void 0 : success.contact) === null || _q === void 0 ? void 0 : _q.country,
                        value: (_r = success === null || success === void 0 ? void 0 : success.contact) === null || _r === void 0 ? void 0 : _r.countryCode
                    });
                    this.paramSelectProvince = [
                        {
                            key: 'country',
                            value: (_s = success === null || success === void 0 ? void 0 : success.contact) === null || _s === void 0 ? void 0 : _s.countryCode,
                        },
                    ];
                }
                if ((_t = success === null || success === void 0 ? void 0 : success.contact) === null || _t === void 0 ? void 0 : _t.province) {
                    this.formGroup.controls['province'].setValue({
                        label: (_u = success === null || success === void 0 ? void 0 : success.contact) === null || _u === void 0 ? void 0 : _u.province,
                        value: (_v = success === null || success === void 0 ? void 0 : success.contact) === null || _v === void 0 ? void 0 : _v.provinceCode
                    });
                    this.paramSelectCity = [
                        {
                            key: 'province',
                            value: (_w = success === null || success === void 0 ? void 0 : success.contact) === null || _w === void 0 ? void 0 : _w.provinceCode,
                        },
                    ];
                }
                if ((_x = success === null || success === void 0 ? void 0 : success.contact) === null || _x === void 0 ? void 0 : _x.city) {
                    this.formGroup.controls['city'].setValue({
                        label: (_y = success === null || success === void 0 ? void 0 : success.contact) === null || _y === void 0 ? void 0 : _y.city,
                        value: (_z = success === null || success === void 0 ? void 0 : success.contact) === null || _z === void 0 ? void 0 : _z.cityCode
                    });
                    this.paramSelectDistrict = [
                        {
                            key: 'city',
                            value: (_0 = success === null || success === void 0 ? void 0 : success.contact) === null || _0 === void 0 ? void 0 : _0.cityCode,
                        },
                    ];
                }
                if ((_1 = success === null || success === void 0 ? void 0 : success.contact) === null || _1 === void 0 ? void 0 : _1.district) {
                    this.formGroup.controls['district'].setValue({
                        label: (_2 = success === null || success === void 0 ? void 0 : success.contact) === null || _2 === void 0 ? void 0 : _2.district,
                        value: (_3 = success === null || success === void 0 ? void 0 : success.contact) === null || _3 === void 0 ? void 0 : _3.districtCode
                    });
                    this.paramSelectSubDistrict = [
                        {
                            key: 'district',
                            value: (_4 = success === null || success === void 0 ? void 0 : success.contact) === null || _4 === void 0 ? void 0 : _4.districtCode,
                        },
                    ];
                }
                if ((_5 = success === null || success === void 0 ? void 0 : success.contact) === null || _5 === void 0 ? void 0 : _5.subDistrict) {
                    this.formGroup.controls['subDistrict'].setValue({
                        label: (_6 = success === null || success === void 0 ? void 0 : success.contact) === null || _6 === void 0 ? void 0 : _6.subDistrict,
                        value: (_7 = success === null || success === void 0 ? void 0 : success.contact) === null || _7 === void 0 ? void 0 : _7.subDistrictCode
                    });
                }
            }
            this.authIndexedDB.getEnc('provider').then((value) => {
                if (value !== 'local') {
                    this.provider = value;
                    this.formGroup.controls['email'].disable();
                }
            });
            this.formGroup.markAsPristine();
        }));
    }
    onSelectCountry(select) {
        this.paramSelectProvince = [
            {
                key: 'country',
                value: select ? select.value : 'undefined',
            },
        ];
        this.onClearProvince();
    }
    onSelectProvince(select) {
        this.paramSelectCity = [
            {
                key: 'province',
                value: select ? select.value : 'undefined',
            },
        ];
        this.onClearProvince();
    }
    onSelectCity(select) {
        this.paramSelectDistrict = [
            {
                key: 'city',
                value: select ? select.value : 'undefined',
            },
        ];
        this.onClearCity();
    }
    onSelectDistrict(select) {
        this.paramSelectSubDistrict = [
            {
                key: 'district',
                value: select ? select.value : 'undefined',
            },
        ];
        this.onClearDistrict();
    }
    onClearCountry() {
        this.formGroup.patchValue({
            province: null,
            city: null,
            district: null,
            subDistrict: null,
        });
    }
    onClearProvince() {
        this.formGroup.patchValue({
            city: null,
            district: null,
            subDistrict: null,
        });
    }
    onClearCity() {
        this.formGroup.patchValue({
            district: null,
            subDistrict: null,
        });
    }
    onClearDistrict() {
        this.formGroup.patchValue({
            subDistrict: null,
        });
    }
    uploadImage() {
        const file = this.formGroupImage.get('image').value;
        const data = new FormData();
        data.append('photo', file);
        this.formGroupImage.get('image').disable();
        this.initProgress();
        this.setProgress(65);
        this.exec('profile', 'upload-photo-profile', data).subscribe((success) => {
            this.setProgress(95);
            this.userService.updatePhoto(success.respStatusMessage['checksum']);
            this.uploadFinished = true;
            this.formGroupImage.markAsPristine();
            this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true, null, 'success');
            this.doneProgress();
        }, (error) => {
            this.formGroupImage.get('image').enable();
            this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
            this.doneProgress();
        });
    }
    valueSelect(prop) {
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
    }
    valueSelectNonLabel(prop) {
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
    }
    onSubmit() {
        var _a;
        const contact = {
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
        const personalInfo = {
            idNumber: this.formGroup.get('idNumber').value,
            placeOfBirth: this.formGroup.get('placeOfBirth').value,
            dateOfBirth: this.formGroup.get('dateOfBirth').value,
            genderCode: this.valueSelectNonLabel('gender'),
            genderValue: this.valueSelect('gender'),
            height: this.formGroup.get('height').value,
            weight: this.formGroup.get('weight').value,
            bloodType: (_a = this.formGroup.get('bloodType').value) === null || _a === void 0 ? void 0 : _a.value,
        };
        const data = {
            name: this.formGroup.get('name').value,
            contact,
            personalInfo,
        };
        if (this.provider === 'local') {
            data['email'] = this.formGroup.get('email').value;
        }
        super.onSubmit(data, 'profile', 'change-profile')
            .pipe(takeUntil(this.destroy$))
            .subscribe((response) => {
            if (response) {
                switch (response.respStatusCode) {
                    case ResponseCode.ERR_SCR0008.toString():
                        this.formGroup.controls['email'].setErrors({
                            email: true,
                        });
                        break;
                    case ResponseCode.ERR_SCR0007A.toString():
                        this.formGroup.controls['phoneNumber'].setErrors({
                            'error.pattern.phoneNumber': true,
                        });
                        break;
                    case ResponseCode.OK_SCR004.toString():
                        this.userService.updateName(this.formGroup.get('name').value);
                        break;
                    default:
                        break;
                }
            }
        });
    }
}
EmployeeProfilePersonalInformationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeProfilePersonalInformationComponent, deps: [{ token: i0.Injector }, { token: USER_SERVICE }, { token: PROFILE_INDEXED_DB }, { token: i1$2.AuthIndexedDBService }], target: i0.ɵɵFactoryTarget.Component });
EmployeeProfilePersonalInformationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeProfilePersonalInformationComponent, selector: "do-employee-profile-personal-information", usesInheritance: true, ngImport: i0, template: "<div class=\"row\">\n  <div class=\"col-md-4 col-lg-4\">\n    <form [formGroup]=\"formGroupImage\">\n      <do-image-upload\n        [radius]=\"50\"\n        [skeleton]=\"loadingForm\"\n        [required]=\"true\"\n        [uploadFn]=\"uploadFinished\"\n        formControlName=\"image\">\n      </do-image-upload>\n      <do-button\n        class=\"upload-bg\"\n        (onSubmit)=\"uploadImage()\"\n        [name]=\"'Upload'\"\n        [formGroupButton]=\"formGroupImage\"\n        [disabledButton]=\"formGroupImage.pristine\"\n        [skeleton]=\"loadingForm\">\n        <nb-icon class=\"upload-icon\" icon=\"cloud-upload-outline\" pack=\"eva\" buttonicon></nb-icon>\n      </do-button>\n    </form>\n  </div>\n  <div class=\"accordion-container col-md-8 col-lg-8\">\n    <form [formGroup]=\"formGroup\">\n      <do-input-text\n        [name]=\"'name'\"\n        [label]=\"'Name'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"name\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'email'\"\n        [label]=\"'Email'\"\n        [required]=\"true\"\n        [pattern]=\"patternEmail\"\n        [paramError]=\"{value:5}\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"email\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'username'\"\n        [label]=\"'Username'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"username\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'idNumber'\"\n        [label]=\"'ID Number'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"idNumber\">\n      </do-input-text>\n      <do-select\n        [name]=\"'gender'\"\n        [label]=\"'Gender'\"\n        [required]=\"true\"\n        [api]=\"apiSelectGender\"\n        [queryParam]=\"paramSelectGender\"\n        [searchable]=\"false\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"gender\">\n      </do-select>\n      <do-input-text\n        [name]=\"'placeOfBirth'\"\n        [label]=\"'Place of Birth'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"placeOfBirth\">\n      </do-input-text>\n      <do-datepicker\n        [name]=\"'dateOfBirth'\"\n        [label]=\"'Date of Birth'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"dateOfBirth\">\n      </do-datepicker>\n      <do-input-text\n        [name]=\"'height'\"\n        [label]=\"'height.body'\"\n        [placeholder]=\"'Centimeter'\"\n        [type]=\"'number'\"\n        [step]=\"'any'\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"height\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'weight'\"\n        [label]=\"'weight.body'\"\n        [placeholder]=\"'Kilogram'\"\n        [type]=\"'number'\"\n        [step]=\"'any'\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"weight\">\n      </do-input-text>\n      <do-select\n        [name]=\"'bloodType'\"\n        [label]=\"'Blood Type'\"\n        [placeholder]=\"'Blood Type'\"\n        [items]=\"bloodTypeData\"\n        [searchable]=\"false\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"bloodType\">\n      </do-select>\n      <do-input-text\n        [name]=\"'phoneNumber'\"\n        [label]=\"'Telephone'\"\n        [required]=\"true\"\n        [pattern]=\"patternPhoneNumber\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"phoneNumber\">\n      </do-input-text>\n      <do-textarea\n        [name]=\"'address'\"\n        [label]=\"'Address'\"\n        [required]=\"true\"\n        [minLength]=\"minLength\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"address\">\n      </do-textarea>\n      <do-select\n        [name]=\"'country'\"\n        [label]=\"'Country'\"\n        [api]=\"apiSelectCountry\"\n        [skeleton]=\"loadingForm\"\n        (onSelect)=\"onSelectCountry($event)\"\n        (onClear)=\"onClearCountry()\"\n        formControlName=\"country\">\n      </do-select>\n      <do-select\n        [name]=\"'province'\"\n        [label]=\"'Province'\"\n        [api]=\"apiSelectProvince\"\n        [queryParam]=\"paramSelectProvince\"\n        [skeleton]=\"loadingForm\"\n        (onSelect)=\"onSelectProvince($event)\"\n        (onClear)=\"onClearProvince()\"\n        formControlName=\"province\">\n      </do-select>\n      <do-select\n        [name]=\"'city'\"\n        [label]=\"'City'\"\n        [api]=\"apiSelectCity\"\n        [queryParam]=\"paramSelectCity\"\n        [skeleton]=\"loadingForm\"\n        (onSelect)=\"onSelectCity($event)\"\n        (onClear)=\"onClearCity()\"\n        formControlName=\"city\">\n      </do-select>\n      <do-select\n        [name]=\"'district'\"\n        [label]=\"'District'\"\n        [api]=\"apiSelectDistrict\"\n        [queryParam]=\"paramSelectDistrict\"\n        [skeleton]=\"loadingForm\"\n        (onSelect)=\"onSelectDistrict($event)\"\n        (onClear)=\"onClearDistrict()\"\n        formControlName=\"district\">\n      </do-select>\n      <do-select\n        [name]=\"'subDistrict'\"\n        [label]=\"'Sub District'\"\n        [api]=\"apiSelectSubDistrict\"\n        [queryParam]=\"paramSelectSubDistrict\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"subDistrict\">\n      </do-select>\n      <div class=\"offset-sm-3 col-sm-9\">\n        <do-button\n          (onSubmit)=\"onSubmit()\"\n          [name]=\"'Update'\"\n          [disabledButton]=\"disabled\"\n          [formGroupButton]=\"formGroup\"\n          [skeleton]=\"loadingForm\">\n        </do-button>\n      </div>\n    </form>\n  </div>\n</div>", styles: [".nb-theme-default :host nb-accordion{box-shadow:unset}.nb-theme-default :host .upload-bg{display:flex;justify-content:center;align-items:center}.nb-theme-dark :host nb-accordion{box-shadow:unset}.nb-theme-dark :host .upload-bg{display:flex;justify-content:center;align-items:center}.nb-theme-cosmic :host nb-accordion{box-shadow:unset}.nb-theme-cosmic :host .upload-bg{display:flex;justify-content:center;align-items:center}.nb-theme-corporate :host nb-accordion{box-shadow:unset}.nb-theme-corporate :host .upload-bg{display:flex;justify-content:center;align-items:center}\n"], components: [{ type: i3.ImageUploadComponent, selector: "do-image-upload", inputs: ["image", "height", "width", "radius", "buttonUpload", "skeleton", "uploadFn"], outputs: ["onPreview"] }, { type: i3.DoButtonComponent, selector: "do-button", inputs: ["formGroupButton", "name", "disabledButton", "type", "status", "size", "skeleton"], outputs: ["onSubmit"] }, { type: i1$1.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }, { type: i3.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i3.DoSelectComponent, selector: "do-select", inputs: ["placeholder", "colLabel", "colInput", "items", "multiple", "loading", "addTag", "closeOnSelect", "clearable", "searchable", "hideSelected", "minTermLength", "maxTermLength", "api", "limit", "offsetNextLoad", "queryParam"], outputs: ["onSelect", "onClear"] }, { type: i3.DoDatePickerComponent, selector: "do-datepicker", inputs: ["placeholder", "colLabel", "colInput", "min", "max", "size", "dateMask"] }, { type: i3.DoTextareaComponent, selector: "do-textarea", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "height"] }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i4.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeProfilePersonalInformationComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-employee-profile-personal-information',
                    styleUrls: ['./employee-profile-personal-information.component.scss'],
                    templateUrl: './employee-profile-personal-information.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i5$1.UserService, decorators: [{
                    type: Inject,
                    args: [USER_SERVICE]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PROFILE_INDEXED_DB]
                }] }, { type: i1$2.AuthIndexedDBService }]; } });

class EmployeeProfileEducationFormalPromptComponent {
    constructor(api, formBuilder, ref) {
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
    ngOnInit() {
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
    }
    onSubmit() {
        var _a, _b;
        const data = {
            education: {
                id: (_a = this.education) === null || _a === void 0 ? void 0 : _a.id,
                educationalLevel: (_b = this.formGroup.get('educationalLevel').value) === null || _b === void 0 ? void 0 : _b.value,
                schoolName: this.formGroup.get('school').value,
                startYear: this.formGroup.get('startYear').value,
                endYear: this.formGroup.get('endYear').value,
            }
        };
        this.ref.close(data);
    }
    onReset() {
        this.ref.close();
    }
}
EmployeeProfileEducationFormalPromptComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeProfileEducationFormalPromptComponent, deps: [{ token: API }, { token: i4.FormBuilder }, { token: i1$1.NbDialogRef }], target: i0.ɵɵFactoryTarget.Component });
EmployeeProfileEducationFormalPromptComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeProfileEducationFormalPromptComponent, selector: "do-profile-education-formal-prompt", inputs: { education: "education" }, ngImport: i0, template: "<nb-card class=\"modal-form\">\n  <nb-card-header>\n    {{ 'header.'+action+'-education-formal' | translate }}\n  </nb-card-header>\n  <nb-card-body>\n    <div class=\"row\">\n      <div class=\"col-md-12 col-lg-12\">\n        <form class=\"form-horizontal\" autocomplete=\"on\" [formGroup]=\"formGroup\">\n          <do-select\n            [name]=\"'educationalLevel'\"\n            [label]=\"'Educational Level'\"\n            [placeholder]=\"'Educational Level'\"\n            [required]=\"true\"\n            [api]=\"apiSelectEducationalLevel\"\n            [queryParam]=\"paramSelectEducationalLevel\"\n            [searchable]=\"false\"\n            formControlName=\"educationalLevel\">\n          </do-select>\n          <do-input-text\n            [name]=\"'school'\"\n            [label]=\"'School'\"\n            [placeholder]=\"'School'\"\n            formControlName=\"school\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'startYear'\"\n            [label]=\"'Start Year'\"\n            [placeholder]=\"'Start Year'\"\n            [type]=\"'number'\"\n            formControlName=\"startYear\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'endYear'\"\n            [label]=\"'End Year'\"\n            [placeholder]=\"'End Year'\"\n            [type]=\"'number'\"\n            formControlName=\"endYear\">\n          </do-input-text>\n        </form>\n      </div>\n    </div>\n  </nb-card-body>\n  <nb-card-footer>\n    <do-button-submit\n      [submitTitle]=\"action\"\n      [resetTitle]=\"'Cancel'\"\n      [formGroupButton]=\"formGroup\"\n      (onReset)=\"onReset()\"\n      (onSubmit)=\"onSubmit()\">\n    </do-button-submit>\n  </nb-card-footer>\n</nb-card>\n", styles: [".nb-theme-default :host .modal-form{max-width:40rem;width:40rem!important}@media (max-width: 767.98px){.nb-theme-default :host .modal-form{width:100%!important}}.nb-theme-dark :host .modal-form{max-width:40rem;width:40rem!important}@media (max-width: 767.98px){.nb-theme-dark :host .modal-form{width:100%!important}}.nb-theme-cosmic :host .modal-form{max-width:40rem;width:40rem!important}@media (max-width: 767.98px){.nb-theme-cosmic :host .modal-form{width:100%!important}}.nb-theme-corporate :host .modal-form{max-width:40rem;width:40rem!important}@media (max-width: 767.98px){.nb-theme-corporate :host .modal-form{width:100%!important}}\n"], components: [{ type: i1$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i3.DoSelectComponent, selector: "do-select", inputs: ["placeholder", "colLabel", "colInput", "items", "multiple", "loading", "addTag", "closeOnSelect", "clearable", "searchable", "hideSelected", "minTermLength", "maxTermLength", "api", "limit", "offsetNextLoad", "queryParam"], outputs: ["onSelect", "onClear"] }, { type: i3.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i1$1.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i3.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }], pipes: { "translate": i6.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeProfileEducationFormalPromptComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-profile-education-formal-prompt',
                    templateUrl: 'profile-education-formal-prompt.component.html',
                    styleUrls: ['profile-education-formal-prompt.component.scss'],
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [API]
                }] }, { type: i4.FormBuilder }, { type: i1$1.NbDialogRef }]; }, propDecorators: { education: [{
                type: Input
            }] } });

class EmployeeProfileEducationNonFormalPromptComponent {
    constructor(api, formBuilder, ref) {
        this.ref = ref;
        this.action = 'Add';
        this.formGroup = formBuilder.group({
            trainingName: [],
            trainingDate: [],
        });
    }
    ngOnInit() {
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
    }
    onSubmit() {
        var _a, _b, _c;
        const data = {
            training: {
                id: (_a = this.training) === null || _a === void 0 ? void 0 : _a.id,
                name: this.formGroup.get('trainingName').value,
                startDate: (_b = this.formGroup.get('trainingDate').value) === null || _b === void 0 ? void 0 : _b.start,
                endDate: (_c = this.formGroup.get('trainingDate').value) === null || _c === void 0 ? void 0 : _c.end,
            }
        };
        this.ref.close(data);
    }
    onReset() {
        this.ref.close();
    }
}
EmployeeProfileEducationNonFormalPromptComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeProfileEducationNonFormalPromptComponent, deps: [{ token: API }, { token: i4.FormBuilder }, { token: i1$1.NbDialogRef }], target: i0.ɵɵFactoryTarget.Component });
EmployeeProfileEducationNonFormalPromptComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeProfileEducationNonFormalPromptComponent, selector: "do-profile-education-nonformal-prompt", inputs: { training: "training" }, ngImport: i0, template: "<nb-card class=\"modal-form\">\n  <nb-card-header>\n    {{ 'header.'+action+'-education-nonformal' | translate }}\n  </nb-card-header>\n  <nb-card-body>\n    <div class=\"row\">\n      <div class=\"col-md-12 col-lg-12\">\n        <form class=\"form-horizontal\" autocomplete=\"on\" [formGroup]=\"formGroup\">\n          <do-input-text\n            [name]=\"'trainingName'\"\n            [label]=\"'Training Name'\"\n            [required]=\"true\"\n            [placeholder]=\"'Training Name'\"\n            formControlName=\"trainingName\">\n          </do-input-text>\n          <do-datepicker-range\n            [name]=\"'trainingDate'\"\n            [label]=\"'Training Date'\"\n            [placeholder]=\"'Training Date'\"\n            formControlName=\"trainingDate\">\n          </do-datepicker-range>\n        </form>\n      </div>\n    </div>\n  </nb-card-body>\n  <nb-card-footer>\n    <do-button-submit\n      [submitTitle]=\"action\"\n      [resetTitle]=\"'Cancel'\"\n      [formGroupButton]=\"formGroup\"\n      (onReset)=\"onReset()\"\n      (onSubmit)=\"onSubmit()\">\n    </do-button-submit>\n  </nb-card-footer>\n</nb-card>\n", styles: [".nb-theme-default :host .modal-form{max-width:40rem;width:40rem!important}@media (max-width: 767.98px){.nb-theme-default :host .modal-form{width:100%!important}}.nb-theme-dark :host .modal-form{max-width:40rem;width:40rem!important}@media (max-width: 767.98px){.nb-theme-dark :host .modal-form{width:100%!important}}.nb-theme-cosmic :host .modal-form{max-width:40rem;width:40rem!important}@media (max-width: 767.98px){.nb-theme-cosmic :host .modal-form{width:100%!important}}.nb-theme-corporate :host .modal-form{max-width:40rem;width:40rem!important}@media (max-width: 767.98px){.nb-theme-corporate :host .modal-form{width:100%!important}}\n"], components: [{ type: i1$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i3.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i3.DoDatePickerRangeComponent, selector: "do-datepicker-range", inputs: ["placeholder", "colLabel", "colInput", "icon", "min", "max", "size", "dateMask"] }, { type: i1$1.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i3.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }], pipes: { "translate": i6.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeProfileEducationNonFormalPromptComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-profile-education-nonformal-prompt',
                    templateUrl: 'profile-education-nonformal-prompt.component.html',
                    styleUrls: ['profile-education-nonformal-prompt.component.scss'],
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [API]
                }] }, { type: i4.FormBuilder }, { type: i1$1.NbDialogRef }]; }, propDecorators: { training: [{
                type: Input
            }] } });

class EmployeeProfileEducationComponent extends BaseFormComponent {
    constructor(injector, dialogService) {
        super(injector);
        this.dialogService = dialogService;
        this.reloadEducation = false;
        this.reloadTraining = false;
        this.columnsEducation = [
            { name: 'Level', prop: 'educationalLevel', frozenLeft: true },
            { name: 'School', prop: 'schoolName', frozenLeft: true },
            { name: 'Year', prop: 'startYear', frozenLeft: true },
        ];
        this.columnsTraining = [
            { name: 'Training Name', prop: 'name', frozenLeft: true },
            { name: 'Start Date', prop: 'startDate', frozenLeft: true },
            { name: 'End Date', prop: 'endDate', frozenLeft: true },
        ];
        this.educationIds = [];
        this.trainingIds = [];
        this.loadingSubject$ = new Subject();
        this.apiPathEducation = this.api['profile']['get-profile-education-employee'];
        this.apiPathTraining = this.api['profile']['get-profile-training-employee'];
        this.apiPathDeleteEducation = this.api['profile']['delete-profile-employee-education'];
        this.apiPathDeleteTraining = this.api['profile']['delete-profile-employee-training'];
        this.sortEducation = {
            desc: ['startYear']
        };
        this.sortTraining = {
            desc: ['startDate']
        };
    }
    ngOnInit() {
    }
    loadDataMenu() {
        this.reloadEducation = true;
        this.reloadTraining = true;
        return this.loadingSubject$.asObservable();
    }
    ngOnDestroy() { }
    onAddEducation() {
        this.reloadEducation = false;
        this.dialogService.open(EmployeeProfileEducationFormalPromptComponent)
            .onClose.subscribe((data) => {
            if (data) {
                super.onSubmit(data, 'profile', 'post-profile-employee-education')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe(response => {
                    if (response.respStatusCode === ResponseCode.OK_DEFAULT.toString()) {
                        this.reloadEducation = true;
                    }
                });
            }
        });
    }
    onAddTraining() {
        this.reloadTraining = false;
        this.dialogService.open(EmployeeProfileEducationNonFormalPromptComponent)
            .onClose.subscribe((data) => {
            if (data) {
                super.onSubmit(data, 'profile', 'post-profile-employee-training')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe(response => {
                    if (response.respStatusCode === ResponseCode.OK_DEFAULT.toString()) {
                        this.reloadTraining = true;
                    }
                });
            }
        });
    }
    onEditEducation(data) {
        this.reloadEducation = false;
        this.dialogService.open(EmployeeProfileEducationFormalPromptComponent, {
            context: {
                education: data,
            },
        })
            .onClose.subscribe((result) => {
            if (result) {
                super.onSubmit(result, 'profile', 'post-profile-employee-education')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe(response => {
                    if (response.respStatusCode === ResponseCode.OK_DEFAULT.toString()) {
                        this.reloadEducation = true;
                    }
                });
            }
        });
    }
    onEditTraining(data) {
        this.reloadTraining = false;
        this.dialogService.open(EmployeeProfileEducationNonFormalPromptComponent, {
            context: {
                training: data,
            },
        })
            .onClose.subscribe((result) => {
            if (result) {
                super.onSubmit(result, 'profile', 'post-profile-employee-training')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe(response => {
                    if (response.respStatusCode === ResponseCode.OK_DEFAULT.toString()) {
                        this.reloadTraining = true;
                    }
                });
            }
        });
    }
    onDeleteEducationDialog(data, dialog) {
        this.reloadEducation = false;
        this.educationIds = [];
        data.forEach(value => {
            this.educationIds.push(value.id);
        });
        this.dialogService.open(dialog, { context: 'alert.delete' });
    }
    onDeleteTrainingDialog(data, dialog) {
        this.reloadTraining = false;
        this.trainingIds = [];
        data.forEach(value => {
            this.trainingIds.push(value.id);
        });
        this.dialogService.open(dialog, { context: 'alert.delete' });
    }
    onDeleteEducation(ref) {
        this.disabled = true;
        this.http.HTTP_AUTH(this.apiPathDeleteEducation, this.educationIds)
            .pipe(takeUntil(this.destroy$))
            .subscribe((success) => {
            this.disabled = false;
            ref.close();
            this.reloadEducation = true;
            this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
        }, (error) => {
            this.disabled = false;
            this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
        });
    }
    onDeleteTraining(ref) {
        this.disabled = true;
        this.http.HTTP_AUTH(this.apiPathDeleteTraining, this.trainingIds)
            .pipe(takeUntil(this.destroy$))
            .subscribe((success) => {
            ref.close();
            this.reloadTraining = true;
            this.disabled = false;
            this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
        }, (error) => {
            this.disabled = false;
            this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
        });
    }
    onLoadEducation() {
        this.loadingSubject$.next(true);
    }
    onLoadTraining() {
        this.loadingSubject$.next(true);
    }
}
EmployeeProfileEducationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeProfileEducationComponent, deps: [{ token: i0.Injector }, { token: i1$1.NbDialogService }], target: i0.ɵɵFactoryTarget.Component });
EmployeeProfileEducationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeProfileEducationComponent, selector: "do-employee-profile-education", usesInheritance: true, ngImport: i0, template: "<div class=\"row\">\n  <div class=\"col-md-12 col-lg-12\">\n    <div class=\"accordion-container\">\n      <nb-accordion multi>\n        <nb-accordion-item [expanded]=\"true\">\n          <nb-accordion-item-header>\n            {{'Formal Education' | translate}}\n          </nb-accordion-item-header>\n          <nb-accordion-item-body>\n            <do-datatable\n              [api]=\"apiPathEducation\"\n              [columns]=\"columnsEducation\"\n              [filterFn]=\"keyword\"\n              [sort]=\"sortEducation\"\n              [startWithOpenData]=\"false\"\n              [reloadFn]=\"reloadEducation\"\n              (onLoading)=\"onLoadEducation()\"\n              (onEdit)=\"onEditEducation($event)\"\n              (onAdd)=\"onAddEducation()\"\n              (onDelete)=\"onDeleteEducationDialog($event, dialogdeleteeducation)\">\n            </do-datatable>              \n          </nb-accordion-item-body>\n        </nb-accordion-item>\n        <nb-accordion-item [expanded]=\"true\">\n          <nb-accordion-item-header>\n            {{'Non Formal Education' | translate}}\n          </nb-accordion-item-header>\n          <nb-accordion-item-body>\n            <do-datatable\n              [api]=\"apiPathTraining\"\n              [columns]=\"columnsTraining\"\n              [filterFn]=\"keyword\"\n              [sort]=\"sortTraining\"\n              [startWithOpenData]=\"false\"\n              [reloadFn]=\"reloadTraining\"\n              (onLoading)=\"onLoadTraining()\"\n              (onEdit)=\"onEditTraining($event)\"\n              (onAdd)=\"onAddTraining()\"\n              (onDelete)=\"onDeleteTrainingDialog($event, dialogdeletetraining)\">\n            </do-datatable>\n          </nb-accordion-item-body>\n        </nb-accordion-item>\n      </nb-accordion>\n    </div>\n  </div>\n</div>\n\n<ng-template #dialogdeleteeducation let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"danger\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <do-button-submit\n        [colLabel]=\"0\"\n        [colButton]=\"12\"\n        [submitTitle]=\"'Delete'\"\n        [resetTitle]=\"'Cancel'\"\n        [disabledButton]=\"disabled\"\n        (onReset)=\"ref.close()\"\n        (onSubmit)=\"onDeleteEducation(ref)\">\n      </do-button-submit>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>\n\n<ng-template #dialogdeletetraining let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"danger\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <do-button-submit\n        [colLabel]=\"0\"\n        [colButton]=\"12\"\n        [submitTitle]=\"'Delete'\"\n        [resetTitle]=\"'Cancel'\"\n        [disabledButton]=\"disabled\"\n        (onReset)=\"ref.close()\"\n        (onSubmit)=\"onDeleteTraining(ref)\">\n      </do-button-submit>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>", styles: [".nb-theme-default :host nb-accordion{box-shadow:unset}.nb-theme-dark :host nb-accordion{box-shadow:unset}.nb-theme-cosmic :host nb-accordion{box-shadow:unset}.nb-theme-corporate :host nb-accordion{box-shadow:unset}\n"], components: [{ type: i1$1.NbAccordionComponent, selector: "nb-accordion", inputs: ["multi"] }, { type: i1$1.NbAccordionItemComponent, selector: "nb-accordion-item", inputs: ["collapsed", "expanded", "disabled"], outputs: ["collapsedChange"] }, { type: i1$1.NbAccordionItemHeaderComponent, selector: "nb-accordion-item-header" }, { type: i1$1.NbAccordionItemBodyComponent, selector: "nb-accordion-item-body" }, { type: i3.DoDatatableComponent, selector: "do-datatable", inputs: ["rows", "columns", "filters", "selected", "limit", "count", "offset", "externalPaging", "externalSorting", "loadingIndicator", "scrollbarH", "scrollbarV", "reorderable", "sortType", "messages", "selectionType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "header", "column", "footer", "add", "edit", "delete", "filter", "api", "startWithOpenData", "filterEvent", "formGroupFilter", "sort", "sortsDefault", "autoLoad", "filterFn", "filterDoFetchFn", "reloadFn"], outputs: ["onAdd", "onEdit", "onDelete", "onSearch", "onFilter", "onButtonCell", "onLoading", "onSelected"] }, { type: i1$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i1$1.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i3.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], pipes: { "translate": i6.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeProfileEducationComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-employee-profile-education',
                    styleUrls: ['./employee-profile-education.component.scss'],
                    templateUrl: './employee-profile-education.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1$1.NbDialogService }]; } });

class EmployeeProfileEmployeeStatusComponent extends BaseFormComponent {
    constructor(injector) {
        super(injector);
        this.injector = injector;
        this.loadingForm = false;
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
    loadDataMenu() {
        this.loadingForm = true;
        return this.exec('profile', 'get-profile-employee-status').pipe(map((success) => {
            this.loadingForm = false;
            this.dataEmployeeStatus = success;
        }));
    }
}
EmployeeProfileEmployeeStatusComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeProfileEmployeeStatusComponent, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
EmployeeProfileEmployeeStatusComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeProfileEmployeeStatusComponent, selector: "do-employee-profile-employee-status", usesInheritance: true, ngImport: i0, template: "<div class=\"row\">\n  <div class=\"col-md-12 col-lg-12\">\n    <do-label-text\n      [label]=\"'NIK'\"\n      [colLabel]=\"3\"\n      [colContent]=\"9\"\n      [dividerlabel]=\"false\"\n      [skeleton]=\"loadingForm\"\n      [content]=\"dataEmployeeStatus?.idEmployee\">\n    </do-label-text>\n    <do-label-text\n      [label]=\"'Occupation'\"\n      [colLabel]=\"3\"\n      [colContent]=\"9\"\n      [dividerlabel]=\"false\"\n      [skeleton]=\"loadingForm\"\n      [content]=\"dataEmployeeStatus?.occupation?.name\">\n    </do-label-text>\n    <do-label-text\n      [label]=\"'Supervisor'\"\n      [colLabel]=\"3\"\n      [colContent]=\"9\"\n      [dividerlabel]=\"false\"\n      [skeleton]=\"loadingForm\"\n      [content]=\"dataEmployeeStatus?.parentLabel\">\n    </do-label-text>\n  </div>\n</div>", styles: [""], components: [{ type: i3.DoLabelTextComponent, selector: "do-label-text", inputs: ["colLabel", "colContent", "skeleton", "name", "content", "dividerlabel", "numeric", "label", "nolabel", "required", "showMoreMode", "maxShowMore", "paramError"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeProfileEmployeeStatusComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-employee-profile-employee-status',
                    styleUrls: ['./employee-profile-employee-status.component.scss'],
                    templateUrl: './employee-profile-employee-status.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }]; } });

class EmployeeProfilePageComponent extends BaseComponent {
    constructor(injector, toastr) {
        super(injector);
        this.injector = injector;
        this.toastr = toastr;
        this.loading = false;
        this.tab = 'personalInfo';
        this.destroy$ = new Subject();
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.next();
        this.destroy$.complete();
    }
    toggleLoadingAnimation(event) {
        this.tab = event.tabId;
        this.loading = true;
        if (this.tab === 'personalInfo') {
            this.personalInfo.loadDataMenu()
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => {
                this.loading = false;
            }, (error) => {
                if (error instanceof HttpErrorResponse) {
                    error = error['error'];
                }
                this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
            });
        }
        else if (this.tab === 'education') {
            this.education.loadDataMenu()
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => {
                this.loading = false;
            }, (error) => {
                if (error instanceof HttpErrorResponse) {
                    error = error['error'];
                }
                this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
            });
        }
        else {
            this.employeeStatus.loadDataMenu()
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => {
                this.loading = false;
            }, (error) => {
                if (error instanceof HttpErrorResponse) {
                    error = error['error'];
                }
                this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
            });
        }
    }
}
EmployeeProfilePageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeProfilePageComponent, deps: [{ token: i0.Injector }, { token: i3.DoToastrService }], target: i0.ɵɵFactoryTarget.Component });
EmployeeProfilePageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeProfilePageComponent, selector: "do-employee-profile-page", viewQueries: [{ propertyName: "personalInfo", first: true, predicate: ["personalInfo"], descendants: true, static: true }, { propertyName: "education", first: true, predicate: ["education"], descendants: true, static: true }, { propertyName: "employeeStatus", first: true, predicate: ["employeeStatus"], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: "<do-page-outlet [header]=\"'Profile'\" [hidefooter]=\"true\">\n  <nb-tabset fullWidth (changeTab)=\"toggleLoadingAnimation($event)\" pagecontent>\n    <nb-tab tabId=\"personalInfo\" tabTitle=\"{{'tab.personal-info' | translate}}\" [lazyLoad]=\"true\">\n      <do-employee-profile-personal-information #personalInfo></do-employee-profile-personal-information>\n    </nb-tab>\n    <nb-tab tabId=\"education\" tabTitle=\"{{'tab.education' | translate}}\">\n      <do-employee-profile-education #education></do-employee-profile-education>\n    </nb-tab>\n    <nb-tab tabId=\"employeeStatus\" tabTitle=\"{{'tab.employee-status' | translate}}\">\n      <do-employee-profile-employee-status #employeeStatus></do-employee-profile-employee-status>\n    </nb-tab>\n  </nb-tabset>\n</do-page-outlet>\n", styles: [""], components: [{ type: i3.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i1$1.NbTabsetComponent, selector: "nb-tabset", inputs: ["fullWidth", "routeParam"], outputs: ["changeTab"] }, { type: i1$1.NbTabComponent, selector: "nb-tab", inputs: ["badgeStatus", "badgeDot", "disabled", "responsive", "active", "lazyLoad", "tabTitle", "tabId", "tabIcon", "route", "badgeText", "badgePosition"] }, { type: EmployeeProfilePersonalInformationComponent, selector: "do-employee-profile-personal-information" }, { type: EmployeeProfileEducationComponent, selector: "do-employee-profile-education" }, { type: EmployeeProfileEmployeeStatusComponent, selector: "do-employee-profile-employee-status" }], pipes: { "translate": i6.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeProfilePageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-employee-profile-page',
                    styleUrls: ['./employee-profile-page.component.scss'],
                    templateUrl: './employee-profile-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i3.DoToastrService }]; }, propDecorators: { personalInfo: [{
                type: ViewChild,
                args: ['personalInfo', { static: true }]
            }], education: [{
                type: ViewChild,
                args: ['education', { static: true }]
            }], employeeStatus: [{
                type: ViewChild,
                args: ['employeeStatus', { static: true }]
            }] } });

const routes = [{
        path: '',
        component: EmployeeProfileComponent,
        canActivateChild: [AuthGuardChildService],
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
class DoEmployeeProfileRoutingModule {
}
DoEmployeeProfileRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoEmployeeProfileRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoEmployeeProfileRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoEmployeeProfileRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
DoEmployeeProfileRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoEmployeeProfileRoutingModule, imports: [[RouterModule.forChild(routes)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoEmployeeProfileRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                }]
        }] });

const components = [
    EmployeeProfileComponent,
    EmployeeProfilePageComponent,
    EmployeeProfilePersonalInformationComponent,
    EmployeeProfileEducationComponent,
    EmployeeProfileEmployeeStatusComponent,
    EmployeeProfileEducationFormalPromptComponent,
    EmployeeProfileEducationNonFormalPromptComponent,
];
const modules = [
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NbCardModule,
    NbAlertModule,
    NbIconModule,
    NbButtonModule,
    NbAccordionModule,
    NbDialogModule.forChild(),
    NbTabsetModule,
    NbSpinnerModule,
    DoThemeModule,
    DoBaseModule,
    DoInputModule,
    DoCheckBoxModule,
    DoButtonModule,
    DoSelectModule,
    DoDatatableModule,
    DoEditorModule,
    DoLabelModule,
    DoDatePickerModule,
    DoImageModule,
    DoEmployeeProfileRoutingModule,
];
const providers = [];
class DoEmployeeProfileModule {
}
DoEmployeeProfileModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoEmployeeProfileModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoEmployeeProfileModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoEmployeeProfileModule, declarations: [EmployeeProfileComponent,
        EmployeeProfilePageComponent,
        EmployeeProfilePersonalInformationComponent,
        EmployeeProfileEducationComponent,
        EmployeeProfileEmployeeStatusComponent,
        EmployeeProfileEducationFormalPromptComponent,
        EmployeeProfileEducationNonFormalPromptComponent], imports: [FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        NbCardModule,
        NbAlertModule,
        NbIconModule,
        NbButtonModule,
        NbAccordionModule, i1$1.NbDialogModule, NbTabsetModule,
        NbSpinnerModule,
        DoThemeModule,
        DoBaseModule,
        DoInputModule,
        DoCheckBoxModule,
        DoButtonModule,
        DoSelectModule,
        DoDatatableModule,
        DoEditorModule,
        DoLabelModule,
        DoDatePickerModule,
        DoImageModule,
        DoEmployeeProfileRoutingModule] });
DoEmployeeProfileModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoEmployeeProfileModule, providers: [
        ...providers,
    ], imports: [[
            ...modules,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoEmployeeProfileModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        ...modules,
                    ],
                    declarations: [
                        ...components,
                    ],
                    providers: [
                        ...providers,
                    ],
                }]
        }] });

/*
 * Public API Surface of do-sys
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DoEmployeeProfileModule, DoLocaleModule, DoMgmtAppsModule, DoMgmtBusinessPartnerModule, DoMgmtCorporateModule, DoMgmtEmployeeModule, DoMgmtInventoryModule, DoMgmtJobPlacementModule, DoMgmtMenuModule, DoMgmtOccupationModule, DoMgmtRoleModule, DoParameterModule };
//# sourceMappingURL=dongkap-do-sys.js.map
