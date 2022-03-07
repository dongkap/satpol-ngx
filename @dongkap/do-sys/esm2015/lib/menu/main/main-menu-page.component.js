import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, takeUntil } from 'rxjs/operators';
import { TreeMode } from 'tree-ngx';
import { LocaleModel, ResponseCode } from '@dongkap/do-core';
import { BaseFormComponent } from '@dongkap/do-shared';
import { DialogIconComponent } from '../dialog-icon/dialog-icon.component';
import * as i0 from "@angular/core";
import * as i1 from "@nebular/theme";
import * as i2 from "tree-ngx";
import * as i3 from "@dongkap/do-shared";
import * as i4 from "@angular/common";
import * as i5 from "@angular/forms";
import * as i6 from "@ngx-translate/core";
export class MainMenuPageComponent extends BaseFormComponent {
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
MainMenuPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MainMenuPageComponent, deps: [{ token: i0.Injector }, { token: i1.NbDialogService }], target: i0.ɵɵFactoryTarget.Component });
MainMenuPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: MainMenuPageComponent, selector: "do-main-menu-page", usesInheritance: true, ngImport: i0, template: "<div class=\"row\">\n  <div class=\"col-md-4 col-lg-4\">\n    <tree-ngx\n      [nodeItems]=\"nodeItems\"\n      [options]=\"options\"\n      #treeMain>\n      <ng-template #nodeNameTemplate let-node=\"node\" let-context=\"context\">\n        <span\n          class=\"node-action\"\n          [ngClass]=\"{\n            'node-action': !node.item.group,\n            'node-action-group': node.item.group\n          }\"\n          [class.active]=\"context.active\"\n          (click)=\"onSelectNode(node)\">\n          {{node.name}}\n        </span>\n        <span class=\"tree-action\">\n          <nb-icon\n              class=\"action-trash\"\n              icon=\"close-square-outline\"\n              (click)=\"onDeleteTree(node, context, dialogprocess)\">\n          </nb-icon>\n        </span>\n      </ng-template>\n    </tree-ngx>\n  </div>\n  <div class=\"col-md-8 col-lg-8\">\n    <form [formGroup]=\"formGroup\">\n      <div class=\"row\">\n        <label\n          for=\"Title\"\n          class=\"label col-sm-3 col-form-label\"\n          *ngIf=\"!loadingForm; else labelskeleton\">\n          {{'Title' | translate}}\n        </label>\n        <ng-template #labelskeleton>\n          <div class=\"col-sm-3\">\n            <div\n              [ngClass]=\"{\n                'label-skeleton': true,\n                'skeleton': loadingForm\n              }\">\n            </div>\n          </div>\n        </ng-template>\n        <div class=\"col-sm-9\" *ngIf=\"loadLocale; else inputSkeleton\">\n          <do-input-icon\n            [name]=\"localeDefault.localeCode\"\n            [nolabel]=\"true\"\n            [required]=\"true\"\n            [colLabel]=\"0\"\n            [colInput]=\"12\"\n            [icon]=\"'flag-icon flag-icon-' + localeDefault.icon\"\n            [skeleton]=\"loadingForm\"\n            formControlName=\"{{localeDefault.localeCode}}\">\n          </do-input-icon>\n        </div>\n        <ng-template #inputSkeleton>\n          <div class=\"col-sm-9\">\n            <div\n              [ngClass]=\"{\n                'input-skeleton': true,\n                'skeleton': loadingForm\n              }\">\n            </div>\n          </div>\n        </ng-template>\n      </div>\n      <do-input-icon *ngFor=\"let i18n of locales\"\n        [name]=\"i18n.localeCode\"\n        [nolabel]=\"true\"\n        [icon]=\"'flag-icon flag-icon-'+ i18n.icon\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"{{i18n.localeCode}}\">\n      </do-input-icon>\n      <do-checkbox\n        [name]=\"'group'\"\n        [label]=\"'Group'\"\n        [data]=\"groupData\"\n        [skeleton]=\"loadingForm\"\n        [warnMessage]=\"'warn.group-menu'\"\n        (onChecked)=\"onCheckedGroup($event)\"\n        formControlName=\"group\">\n      </do-checkbox>\n      <do-checkbox\n        [name]=\"'root'\"\n        [label]=\"'Root'\"\n        [data]=\"rootData\"\n        [skeleton]=\"loadingForm\"\n        (onChecked)=\"onCheckedRoot($event)\"\n        formControlName=\"root\"\n        *ngIf=\"!isGroup\">\n      </do-checkbox>\n      <do-checkbox\n        [name]=\"'home'\"\n        [label]=\"'Home'\"\n        [data]=\"homeData\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"home\"\n        *ngIf=\"!isGroup\">\n      </do-checkbox>\n      <do-input-text\n        [name]=\"'code'\"\n        [label]=\"'Code'\"\n        [capslock]=\"true\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"code\"\n        *ngIf=\"!isGroup\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'link'\"\n        [label]=\"'Link'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"link\"\n        *ngIf=\"!isGroup\">\n      </do-input-text>\n      <do-input-icon\n        [name]=\"'icon'\"\n        [label]=\"'Icon'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        [icon]=\"'search-outline'\"\n        [iconcursor]=\"true\"\n        [eva]=\"true\"\n        (clickIcon)=\"onSearchIcon()\"\n        formControlName=\"icon\"\n        *ngIf=\"(isRoot && !isGroup)\">\n      </do-input-icon>\n      <do-select\n        [name]=\"'parent'\"\n        [label]=\"'Parent Menu'\"\n        [api]=\"apiSelectParent\"\n        [searchable]=\"false\"\n        [skeleton]=\"loadingForm\"\n        [required]=\"true\"\n        formControlName=\"parent\"\n        *ngIf=\"(!isRoot && !isGroup)\">\n      </do-select>\n      <do-input-text\n        [name]=\"'order'\"\n        [label]=\"'Order'\"\n        [required]=\"true\"\n        [type]=\"'number'\"\n        [max]=\"999\"\n        [maxLength]=\"3\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"order\">\n      </do-input-text>\n      <do-button-submit\n        [submitTitle]=\"action\"\n        [resetTitle]=\"'Cancel'\"\n        [formGroupButton]=\"formGroup\"\n        [disabledButton]=\"disabled\"\n        (onReset)=\"onReset()\"\n        (onSubmit)=\"onSubmit(dialogprocess)\">\n      </do-button-submit>\n    </form>\n  </div>\n</div>\n\n<ng-template #dialogprocess let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"{{dialogAction === 'Delete' ? 'danger' : 'warning'}}\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <do-button-submit\n        [colLabel]=\"0\"\n        [colButton]=\"12\"\n        [submitTitle]=\"dialogAction\"\n        [resetTitle]=\"'Cancel'\"\n        [disabledButton]=\"disabled\"\n        (onReset)=\"ref.close()\"\n        (onSubmit)=\"onSubmitDialog(ref)\">\n      </do-button-submit>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>\n", styles: [".tree-ngx{display:flex;flex:1 1 auto;flex-direction:column;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif}.node{display:flex;flex:1 1 auto;flex-direction:column}.node-children{display:flex;flex:1 1 auto}.node-name{display:inline-block;padding:5px 0 5px 7px}.node-name.markSelected{padding:5px 0 5px 2px;border-left:5px #226699 solid}.node-name .active{cursor:pointer}.node-offset{display:flex;margin-left:20px}.node-icon-wrapper{position:relative;display:inline-block;width:25px;height:17px;top:1px;left:6px}.node-icon-wrapper.disabled{cursor:default}.collapsable{cursor:pointer}.node-container{display:inline-block}.nodeDisabled{opacity:.6}.node-checkbox{display:inline-block;position:relative;top:3px;left:5px;width:16px;height:16px;cursor:pointer}.node-checkbox:disabled{cursor:auto}.collapsible-wrapper{display:flex;overflow:hidden}.collapsible-wrapper:after{content:\"\";height:25px;transition:height .3s linear,max-height 0s .3s linear;max-height:0px}.collapsible{transition:margin-bottom .3s cubic-bezier(0,0,0,1);margin-bottom:0;max-height:1000000px}.collapsible-wrapper.collapsed>.collapsible{margin-bottom:-20000px;transition:margin-bottom .3s cubic-bezier(1,0,1,1),visibility 0s .3s,max-height 0s .3s;visibility:hidden;max-height:0}.collapsible-wrapper.collapsed:after{height:0;transition:height .3s linear;max-height:25px}.arrow-down{position:absolute;width:0;height:0;left:3px;top:6px;border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #455A64}.arrow-down.collapse-empty{border-top:7px solid #ccc}.arrow-right{position:absolute;width:0;height:0;left:8px;top:3px;border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid #455A64}.nb-theme-default .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-default .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#222b45;border-radius:0;cursor:pointer}.nb-theme-default .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-default .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-default .action-trash:hover{color:#ff708d}.nb-theme-dark .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-dark .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#fff;border-radius:0;cursor:pointer}.nb-theme-dark .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-dark .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-dark .action-trash:hover{color:#ff708d}.nb-theme-cosmic .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-cosmic .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#fff;border-radius:0;cursor:pointer}.nb-theme-cosmic .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-cosmic .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-cosmic .action-trash:hover{color:#ff708d}.nb-theme-corporate .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-corporate .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#222b45;border-radius:0;cursor:pointer}.nb-theme-corporate .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-corporate .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-corporate .action-trash:hover{color:#ff708d}\n"], components: [{ type: i2.ɵa, selector: "tree-ngx", inputs: ["options", "callbacks", "filter", "nodeItems"], outputs: ["selectedItems"] }, { type: i1.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }, { type: i3.DoInputIconComponent, selector: "do-input-icon", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "buttontype", "type", "iconcursor", "eva", "icon"], outputs: ["clickIcon", "focus"] }, { type: i3.DoCheckboxComponent, selector: "do-checkbox", inputs: ["colLabel", "colInput", "data"], outputs: ["onChecked"] }, { type: i3.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type", "togglePassword", "showPassword"] }, { type: i3.DoSelectComponent, selector: "do-select", inputs: ["placeholder", "colLabel", "colInput", "items", "multiple", "loading", "addTag", "closeOnSelect", "clearable", "searchable", "hideSelected", "minTermLength", "maxTermLength", "api", "limit", "offsetNextLoad", "queryParam"], outputs: ["onSelect", "onClear"] }, { type: i3.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }, { type: i1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i1.NbCardFooterComponent, selector: "nb-card-footer" }], directives: [{ type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i5.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i5.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i5.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i5.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i5.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "translate": i6.TranslatePipe }, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MainMenuPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-main-menu-page',
                    styleUrls: ['./main-menu-page.component.scss'],
                    templateUrl: './main-menu-page.component.html',
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.NbDialogService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1tZW51LXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc3lzL3NyYy9saWIvbWVudS9tYWluL21haW4tbWVudS1wYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXN5cy9zcmMvbGliL21lbnUvbWFpbi9tYWluLW1lbnUtcGFnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFZLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3ZFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFcEMsT0FBTyxFQUFrQyxXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDN0YsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7Ozs7Ozs7O0FBUTNFLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxpQkFBc0I7SUEyRS9ELFlBQW1CLFFBQWtCLEVBQVUsYUFBOEI7UUFDM0UsS0FBSyxDQUFDLFFBQVEsRUFDWjtZQUNFLEVBQUUsRUFBRSxFQUFFO1lBQ04sT0FBTyxFQUFFLEVBQUU7WUFDWCxPQUFPLEVBQUUsRUFBRTtZQUNYLElBQUksRUFBRSxDQUFDO29CQUNMLEtBQUssRUFBRSxDQUFDOzRCQUNOLEVBQUUsRUFBRSxNQUFNOzRCQUNWLFFBQVEsRUFBRSxJQUFJO3lCQUNmLENBQUM7b0JBQ0YsUUFBUSxFQUFFLEtBQUs7aUJBQ2hCLENBQUM7WUFDRixJQUFJ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O1lBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDN0M7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1B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QixJQUFJLFFBQVEsR0FBVyxDQUFDLENBQUM7UUFDekIsSUFBSSxJQUFJLEdBQVksS0FBSyxDQUFDO1FBQzFCLElBQUksS0FBSyxHQUFZLEtBQUssQ0FBQztRQUMzQixJQUFJLEtBQUssR0FBVyxDQUFDLENBQUM7UUFDdEIsSUFBSSxJQUFJLEdBQVksSUFBSSxDQUFDO1FBQ3pCLE1BQU0sSUFBSSxHQUFRLEVBQUUsQ0FBQztRQUNyQixJQUFJLFVBQVUsR0FBUSxJQUFJLENBQUM7UUFDM0IsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQUU7UUFDNUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQUU7UUFDbEYsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQUU7UUFDbEYsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQUU7UUFDbEYsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFBRSxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENB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QUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkQsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRU8sY0FBYyxDQUFDLEdBQXFCO1FBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQ3pFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUMxQixDQUFDLE9BQXdCLEVBQUUsRUFBRTtZQUMzQixHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDWixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDOUUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxFQUNELENBQUMsS0FBc0IsRUFBRSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM1RixDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFTyxRQUFRLENBQUMsR0FBc0I7UUFDcEMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxZQUFZLENBQWtDO2FBQ2xGLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzlCLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNwQixJQUFJLFFBQVEsQ0FBQyxjQUFjLEtBQUssWUFBWSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFDbEUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7b0JBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO2dCQUMzQixDQUFDLENBQUMsQ0FBQzthQUNKO1lBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLE1BQU0sRUFBRTtnQkFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7YUFBRTtRQUM5QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7O21IQTNVVSxxQkFBcUI7dUdBQXJCLHFCQUFxQixnRkNsQmxDLHdrTEFvTEE7NEZEbEthLHFCQUFxQjtrQkFOakMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztvQkFDOUMsV0FBVyxFQUFFLGlDQUFpQztvQkFDOUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBUcmVlTW9kZSB9IGZyb20gJ3RyZWUtbmd4JztcbmltcG9ydCB7IE5iRGlhbG9nUmVmLCBOYkRpYWxvZ1NlcnZpY2UgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBBcGlCYXNlUmVzcG9uc2UsIEh0dHBCYXNlTW9kZWwsIExvY2FsZU1vZGVsLCBSZXNwb25zZUNvZGUgfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IEJhc2VGb3JtQ29tcG9uZW50IH0gZnJvbSAnQGRvbmdrYXAvZG8tc2hhcmVkJztcbmltcG9ydCB7IERpYWxvZ0ljb25Db21wb25lbnQgfSBmcm9tICcuLi9kaWFsb2ctaWNvbi9kaWFsb2ctaWNvbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkby1tYWluLW1lbnUtcGFnZScsXG4gIHN0eWxlVXJsczogWycuL21haW4tbWVudS1wYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9tYWluLW1lbnUtcGFnZS5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIE1haW5NZW51UGFnZUNvbXBvbmVudCBleHRlbmRzIEJhc2VGb3JtQ29tcG9uZW50PGFueT4gaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBub2RlSXRlbXM6IGFueSA9IFtdO1xuICBwdWJsaWMgb3B0aW9uczogYW55ID0ge1xuICAgIG1vZGU6IFRyZWVNb2RlLk5vU2VsZWN0LFxuICAgIGNoZWNrYm94ZXM6IGZhbHNlLFxuICAgIGFsd2F5c0VtaXRTZWxlY3RlZDogdHJ1ZVxuICB9O1xuICBwdWJsaWMgYWxsTG9jYWxlczogTG9jYWxlTW9kZWxbXSA9IFtdO1xuICBwdWJsaWMgbG9jYWxlczogTG9jYWxlTW9kZWxbXSA9IFtdO1xuICBwdWJsaWMgbG9jYWxlRGVmYXVsdDogTG9jYWxlTW9kZWwgPSBuZXcgTG9jYWxlTW9kZWwoKTtcbiAgcHVibGljIGFjdGlvbjogJ0FkZCcgfCAnRWRpdCcgPSAnQWRkJztcbiAgcHVibGljIGRpYWxvZ0FjdGlvbjogJ0VkaXQnIHwgJ0RlbGV0ZScgPSAnRWRpdCc7XG4gIHB1YmxpYyBhcGlTZWxlY3RQYXJlbnQ6IEh0dHBCYXNlTW9kZWw7XG4gIHB1YmxpYyBhcGlQYXRoTG9jYWxlOiBIdHRwQmFzZU1vZGVsO1xuICBwdWJsaWMgcm9vdDogYm9vbGVhbjtcbiAgcHVibGljIGdyb3VwOiBib29sZWFuO1xuICBwdWJsaWMgbG9hZExvY2FsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgdGl0bGU6IHN0cmluZyA9IG51bGw7XG4gIHByaXZhdGUgZGF0YTogYW55O1xuICBwcml2YXRlIGNvbnRleHQ6IGFueTtcbiAgcHJpdmF0ZSBub2RlOiBhbnk7XG4gIHB1YmxpYyByb290RGF0YSA9IFt7XG4gICAgICBpZDogJ3Jvb3QnLFxuICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICB9XTtcbiAgcHVibGljIGdyb3VwRGF0YSA9IFt7XG4gICAgICBpZDogJ2dyb3VwJyxcbiAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgfV07XG4gIHB1YmxpYyBob21lRGF0YSA9IFt7XG4gICAgICBpZDogJ2hvbWUnLFxuICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICB9XTtcblxuICBwdWJsaWMgc2V0IGlzUm9vdChyb290OiBib29sZWFuKSB7XG4gICAgdGhpcy5yb290ID0gcm9vdDtcbiAgICBpZiAocm9vdCkge1xuICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdpY29uJykuZW5hYmxlKCk7XG4gICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ3BhcmVudCcpLmRpc2FibGUoKTtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgncGFyZW50Jykuc2V0VmFsdWUobnVsbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnaWNvbicpLmRpc2FibGUoKTtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnaWNvbicpLnNldFZhbHVlKG51bGwpO1xuICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdwYXJlbnQnKS5lbmFibGUoKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIGdldCBpc1Jvb3QoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLnJvb3Q7IH1cbiAgcHVibGljIHNldCBpc0dyb3VwKGdyb3VwOiBib29sZWFuKSB7XG4gICAgdGhpcy5ncm91cCA9IGdyb3VwO1xuICAgIGlmIChncm91cCkge1xuICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdyb290JykuZGlzYWJsZSgpO1xuICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdob21lJykuZGlzYWJsZSgpO1xuICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdjb2RlJykuZGlzYWJsZSgpO1xuICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdsaW5rJykuZGlzYWJsZSgpO1xuICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdpY29uJykuZGlzYWJsZSgpO1xuICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdwYXJlbnQnKS5kaXNhYmxlKCk7XG5cbiAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgncm9vdCcpLnNldFZhbHVlKG51bGwpO1xuICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdob21lJykuc2V0VmFsdWUobnVsbCk7XG4gICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ2NvZGUnKS5zZXRWYWx1ZSgnTi9BJyk7XG4gICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ2xpbmsnKS5zZXRWYWx1ZSgnIycpO1xuICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdpY29uJykuc2V0VmFsdWUobnVsbCk7XG4gICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ3BhcmVudCcpLnNldFZhbHVlKG51bGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ3Jvb3QnKS5lbmFibGUoKTtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnaG9tZScpLmVuYWJsZSgpO1xuICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdjb2RlJykuZW5hYmxlKCk7XG4gICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ2xpbmsnKS5lbmFibGUoKTtcbiAgICAgIGlmICh0aGlzLmlzUm9vdCkgeyB0aGlzLmZvcm1Hcm91cC5nZXQoJ2ljb24nKS5lbmFibGUoKTsgfVxuICAgICAgaWYgKCF0aGlzLmlzUm9vdCkgeyB0aGlzLmZvcm1Hcm91cC5nZXQoJ3BhcmVudCcpLmVuYWJsZSgpOyB9XG4gICAgfVxuICB9XG4gIHB1YmxpYyBnZXQgaXNHcm91cCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuZ3JvdXA7IH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yLCBwcml2YXRlIGRpYWxvZ1NlcnZpY2U6IE5iRGlhbG9nU2VydmljZSkge1xuICAgIHN1cGVyKGluamVjdG9yLFxuICAgICAge1xuICAgICAgICBpZDogW10sXG4gICAgICAgICdlbi1VUyc6IFtdLFxuICAgICAgICAnaWQtSUQnOiBbXSxcbiAgICAgICAgcm9vdDogW3tcbiAgICAgICAgICB2YWx1ZTogW3tcbiAgICAgICAgICAgIGlkOiAncm9vdCcsXG4gICAgICAgICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICAgICAgICB9XSxcbiAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgIH1dLFxuICAgICAgICBjb2RlOiBbe1xuICAgICAgICAgIHZhbHVlOiAnTi9BJyxcbiAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgIH1dLFxuICAgICAgICBpY29uOiBbXSxcbiAgICAgICAgbGluazogW3tcbiAgICAgICAgICB2YWx1ZTogJyMnLFxuICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgfV0sXG4gICAgICAgIGhvbWU6IFt7XG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICB9XSxcbiAgICAgICAgZ3JvdXA6IFt7XG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICB9XSxcbiAgICAgICAgcGFyZW50OiBbXSxcbiAgICAgICAgb3JkZXI6IFtdLFxuICAgICAgfSk7XG4gICAgdGhpcy5hcGlTZWxlY3RQYXJlbnQgPSB0aGlzLmFwaVsnc2VjdXJpdHknXVsnc2VsZWN0LW1haW4tbWVudXMnXTtcbiAgICB0aGlzLmlzUm9vdCA9IHRydWU7XG4gICAgdGhpcy5pc0dyb3VwID0gZmFsc2U7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHt9XG5cbiAgb25DaGVja2VkUm9vdChldmVudDogYW55KSB7XG4gICAgdGhpcy5pc1Jvb3QgPSBldmVudCA/IGV2ZW50WzBdLnNlbGVjdGVkIDogZmFsc2U7XG4gIH1cblxuICBvbkNoZWNrZWRHcm91cChldmVudDogYW55KSB7XG4gICAgdGhpcy5pc0dyb3VwID0gZXZlbnQgPyBldmVudFswXS5zZWxlY3RlZCA6IGZhbHNlO1xuICB9XG5cbiAgbG9hZERhdGFNZW51KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgaWYgKCF0aGlzLmxvYWRMb2NhbGUpIHtcbiAgICAgIHRoaXMubG9hZGluZ0Zvcm0gPSB0cnVlO1xuICAgICAgdGhpcy5odHRwLkhUVFBfQVVUSCh0aGlzLmFwaVsnbWFzdGVyJ11bJ2FsbC1sb2NhbGUnXSkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgICAgdGhpcy5zcGxpdExvY2FsZShyZXNwb25zZSk7XG4gICAgICAgIHRoaXMubG9hZExvY2FsZSA9IHRydWU7XG4gICAgICAgIHRoaXMubG9hZGluZ0Zvcm0gPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5odHRwLkhUVFBfQVVUSChcbiAgICAgIHRoaXMuYXBpWydzZWN1cml0eSddWydnZXQtdHJlZS1tZW51cyddLCBudWxsLCBudWxsLCBudWxsLFxuICAgICAgWydtYWluJ10pLnBpcGUobWFwKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMubm9kZUl0ZW1zID0gW107XG4gICAgICAgIHRoaXMubm9kZUl0ZW1zID0gWy4uLnRoaXMubm9kZUl0ZW1zLCAuLi5yZXNwb25zZV07XG4gICAgICAgIHRoaXMub25SZXNldCgpO1xuICAgICAgICBpZiAodGhpcy5sb2FkTG9jYWxlKSB7IHRoaXMubG9hZGluZ0Zvcm0gPSBmYWxzZTsgfVxuICAgICAgfSkpO1xuICB9XG5cbiAgc3BsaXRMb2NhbGUodmFsdWVzOiBMb2NhbGVNb2RlbFtdKTogdm9pZCB7XG4gICAgdGhpcy5hbGxMb2NhbGVzID0gdmFsdWVzO1xuICAgIHZhbHVlcy5mb3JFYWNoKGRhdGEgPT4ge1xuICAgICAgaWYgKGRhdGEubG9jYWxlRGVmYXVsdCkge1xuICAgICAgICB0aGlzLmxvY2FsZURlZmF1bHQgPSBkYXRhO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sb2NhbGVzLnB1c2goZGF0YSk7XG4gICAgICB9XG4gICAgICB0aGlzLmZvcm1Hcm91cC5yZW1vdmVDb250cm9sKGRhdGEubG9jYWxlQ29kZSk7XG4gICAgICB0aGlzLmZvcm1Hcm91cC5hZGRDb250cm9sKGRhdGEubG9jYWxlQ29kZSwgbmV3IEZvcm1Db250cm9sKCkpO1xuICAgIH0pO1xuICB9XG5cbiAgb25TZWFyY2hJY29uKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKERpYWxvZ0ljb25Db21wb25lbnQpXG4gICAgICAub25DbG9zZS5zdWJzY3JpYmUoKGljb246IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ2ljb24nKS5zZXRWYWx1ZShpY29uKTtcbiAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdpY29uJykubWFya0FzRGlydHkoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgb25TZWxlY3ROb2RlKG5vZGU6IGFueSkge1xuICAgIGlmIChub2RlLml0ZW0pIHtcbiAgICAgIHRoaXMuYWN0aW9uID0gJ0VkaXQnO1xuICAgICAgdGhpcy5kaWFsb2dBY3Rpb24gPSB0aGlzLmFjdGlvbjtcbiAgICAgIHRoaXMuaXNSb290ID0gbm9kZS5pdGVtWydsZXZlbCddID09PSAwID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgdGhpcy5pc0dyb3VwID0gbm9kZS5pdGVtWydncm91cCddO1xuICAgICAgdGhpcy5hbGxMb2NhbGVzLmZvckVhY2gobG9jYWxlID0+IHtcbiAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KGxvY2FsZS5sb2NhbGVDb2RlKS5zZXRWYWx1ZShub2RlLml0ZW1bJ2kxOG4nXVtsb2NhbGUubG9jYWxlQ29kZV0pO1xuICAgICAgICBpZiAobG9jYWxlLmxvY2FsZURlZmF1bHQpIHtcbiAgICAgICAgICB0aGlzLnRpdGxlID0gbm9kZS5pdGVtWydpMThuJ11bbG9jYWxlLmxvY2FsZUNvZGVdO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnZ3JvdXAnKS5zZXRWYWx1ZShbeyBpZDogJ2dyb3VwJywgc2VsZWN0ZWQ6IHRoaXMuaXNHcm91cCB9XSk7XG4gICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ3Jvb3QnKS5zZXRWYWx1ZShbeyBpZDogJ3Jvb3QnLCBzZWxlY3RlZDogdGhpcy5pc1Jvb3QgfV0pO1xuICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdob21lJykuc2V0VmFsdWUoW3sgaWQ6ICdob21lJywgc2VsZWN0ZWQ6IG5vZGUuaXRlbVsnaG9tZSddIH1dKTtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnaWQnKS5zZXRWYWx1ZShub2RlWydpZCddKTtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnY29kZScpLnNldFZhbHVlKG5vZGUuaXRlbVsnY29kZSddKTtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnbGluaycpLnNldFZhbHVlKG5vZGUuaXRlbVsnbGluayddKTtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnaWNvbicpLnNldFZhbHVlKG5vZGUuaXRlbVsnaWNvbiddKTtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnb3JkZXInKS5zZXRWYWx1ZShub2RlLml0ZW1bJ29yZGVyaW5nJ10pO1xuICAgICAgaWYgKG5vZGUuaXRlbVsncGFyZW50TWVudSddKSB7XG4gICAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgncGFyZW50Jykuc2V0VmFsdWUoe1xuICAgICAgICAgIGxhYmVsOiBub2RlLml0ZW1bJ3BhcmVudE1lbnUnXVsndGl0bGUnXSxcbiAgICAgICAgICB2YWx1ZTogbm9kZS5pdGVtWydwYXJlbnRNZW51J11bJ2lkJ10sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uRGVsZXRlVHJlZShub2RlOiBhbnksIGNvbnRleHQ6IGFueSwgZGlhbG9nOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgdGhpcy5kaWFsb2dBY3Rpb24gPSAnRGVsZXRlJztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oXG4gICAgICBkaWFsb2csXG4gICAgICB7IGNvbnRleHQ6ICdhbGVydC5kZWxldGUnIH0pO1xuICB9XG5cbiAgb25TdWJtaXQoZGlhbG9nOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgbGV0IGlkOiBzdHJpbmcgPSBudWxsO1xuICAgIGxldCBjb2RlOiBzdHJpbmcgPSAnTi9BJztcbiAgICBsZXQgaWNvbjogc3RyaW5nID0gbnVsbDtcbiAgICBsZXQgbGluazogc3RyaW5nID0gJyMnO1xuICAgIGNvbnN0IHR5cGU6IHN0cmluZyA9ICdtYWluJztcbiAgICBsZXQgb3JkZXJpbmc6IG51bWJlciA9IDA7XG4gICAgbGV0IGhvbWU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBsZXQgZ3JvdXA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBsZXQgbGV2ZWw6IG51bWJlciA9IDE7XG4gICAgbGV0IGxlYWY6IGJvb2xlYW4gPSB0cnVlO1xuICAgIGNvbnN0IGkxOG46IGFueSA9IHt9O1xuICAgIGxldCBwYXJlbnRNZW51OiBhbnkgPSBudWxsO1xuICAgIGlmICh0aGlzLmZvcm1Hcm91cC5nZXQoJ2lkJykudmFsdWUpIHsgaWQgPSB0aGlzLmZvcm1Hcm91cC5nZXQoJ2lkJykudmFsdWU7IH1cbiAgICBpZiAodGhpcy5mb3JtR3JvdXAuZ2V0KCdjb2RlJykudmFsdWUpIHsgY29kZSA9IHRoaXMuZm9ybUdyb3VwLmdldCgnY29kZScpLnZhbHVlOyB9XG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwLmdldCgnaWNvbicpLnZhbHVlKSB7IGljb24gPSB0aGlzLmZvcm1Hcm91cC5nZXQoJ2ljb24nKS52YWx1ZTsgfVxuICAgIGlmICh0aGlzLmZvcm1Hcm91cC5nZXQoJ2xpbmsnKS52YWx1ZSkgeyBsaW5rID0gdGhpcy5mb3JtR3JvdXAuZ2V0KCdsaW5rJykudmFsdWU7IH1cbiAgICBpZiAodGhpcy5mb3JtR3JvdXAuZ2V0KCdvcmRlcicpLnZhbHVlKSB7IG9yZGVyaW5nID0gK3RoaXMuZm9ybUdyb3VwLmdldCgnb3JkZXInKS52YWx1ZTsgfVxuICAgIGlmICh0aGlzLmZvcm1Hcm91cC5nZXQoJ2hvbWUnKS52YWx1ZSkge1xuICAgICAgaWYgKHRoaXMuZm9ybUdyb3VwLmdldCgnaG9tZScpLnZhbHVlWzBdWydzZWxlY3RlZCddKSB7XG4gICAgICAgIGhvbWUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5mb3JtR3JvdXAuZ2V0KCdyb290JykudmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLmZvcm1Hcm91cC5nZXQoJ3Jvb3QnKS52YWx1ZVswXVsnc2VsZWN0ZWQnXSkge1xuICAgICAgICBsZXZlbCA9IDA7XG4gICAgICAgIGxlYWYgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5hbGxMb2NhbGVzLmZvckVhY2gobG9jYWxlID0+IHtcbiAgICAgIGkxOG5bbG9jYWxlLmxvY2FsZUNvZGVdID0gdGhpcy5mb3JtR3JvdXAuZ2V0KGxvY2FsZS5sb2NhbGVDb2RlKS52YWx1ZTtcbiAgICB9KTtcbiAgICBpZiAodGhpcy5mb3JtR3JvdXAuZ2V0KCdwYXJlbnQnKS52YWx1ZSkge1xuICAgICAgaWYgKHRoaXMuZm9ybUdyb3VwLmdldCgncGFyZW50JykudmFsdWVbJ3ZhbHVlJ10pIHtcbiAgICAgICAgcGFyZW50TWVudSA9IHtcbiAgICAgICAgICBpZDogdGhpcy5mb3JtR3JvdXAuZ2V0KCdwYXJlbnQnKS52YWx1ZVsndmFsdWUnXSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwLmdldCgnZ3JvdXAnKS52YWx1ZSkge1xuICAgICAgaWYgKHRoaXMuZm9ybUdyb3VwLmdldCgnZ3JvdXAnKS52YWx1ZVswXVsnc2VsZWN0ZWQnXSkge1xuICAgICAgICBncm91cCA9IHRydWU7XG4gICAgICAgIGhvbWUgPSBmYWxzZTtcbiAgICAgICAgbGVhZiA9IGZhbHNlO1xuICAgICAgICBsZXZlbCA9IDA7XG4gICAgICAgIHBhcmVudE1lbnUgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmRhdGEgPSB7XG4gICAgICBpZCxcbiAgICAgIGNvZGUsXG4gICAgICBpY29uLFxuICAgICAgbGluayxcbiAgICAgIHR5cGUsXG4gICAgICBsZXZlbCxcbiAgICAgIG9yZGVyaW5nLFxuICAgICAgaG9tZSxcbiAgICAgIGdyb3VwLFxuICAgICAgbGVhZixcbiAgICAgIGkxOG4sXG4gICAgICBwYXJlbnRNZW51LFxuICAgIH07XG4gICAgaWYgKHRoaXMuYWN0aW9uID09PSAnRWRpdCcpIHtcbiAgICAgIHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKFxuICAgICAgICBkaWFsb2csXG4gICAgICAgIHsgY29udGV4dDogJ2FsZXJ0LmVkaXQnIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBvc3RNZW51KCk7XG4gICAgfVxuICB9XG5cbiAgb25TdWJtaXREaWFsb2cocmVmOiBOYkRpYWxvZ1JlZjxhbnk+KSB7XG4gICAgaWYgKHRoaXMuZGlhbG9nQWN0aW9uID09PSAnRGVsZXRlJykge1xuICAgICAgdGhpcy5kZWxldGVUcmVlTWVudShyZWYpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBvc3RNZW51KHJlZik7XG4gICAgfVxuICB9XG5cbiAgb25SZXNldCgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5pc1Jvb3QgPSB0cnVlO1xuICAgIHRoaXMuaXNHcm91cCA9IGZhbHNlO1xuICAgIHRoaXMudGl0bGUgPSBudWxsO1xuICAgIHRoaXMuYWN0aW9uID0gJ0FkZCc7XG4gICAgdGhpcy5hbGxMb2NhbGVzLmZvckVhY2gobG9jYWxlID0+IHtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmdldChsb2NhbGUubG9jYWxlQ29kZSkuc2V0VmFsdWUobnVsbCk7XG4gICAgfSk7XG4gICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdncm91cCcpLnNldFZhbHVlKFt7IGlkOiAnZ3JvdXAnLCBzZWxlY3RlZDogdGhpcy5pc0dyb3VwIH1dKTtcbiAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ2hvbWUnKS5zZXRWYWx1ZShbeyBpZDogJ2hvbWUnLCBzZWxlY3RlZDogZmFsc2UgfV0pO1xuICAgIHRoaXMuZm9ybUdyb3VwLmdldCgncm9vdCcpLnNldFZhbHVlKFt7IHNlbGVjdGVkOiB0aGlzLmlzUm9vdCB9XSk7XG4gICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdpZCcpLnNldFZhbHVlKG51bGwpO1xuICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnY29kZScpLnNldFZhbHVlKCdOL0EnKTtcbiAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ2xpbmsnKS5zZXRWYWx1ZSgnIycpO1xuICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnaWNvbicpLnNldFZhbHVlKG51bGwpO1xuICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnb3JkZXInKS5zZXRWYWx1ZShudWxsKTtcbiAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ3BhcmVudCcpLnNldFZhbHVlKG51bGwpO1xuICB9XG5cbiAgcHJpdmF0ZSBkZWxldGVUcmVlTWVudShyZWY6IE5iRGlhbG9nUmVmPGFueT4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLmh0dHAuSFRUUF9BVVRIKHRoaXMuYXBpWydzZWN1cml0eSddWydkZWxldGUtbWVudSddLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFt0aGlzLm5vZGVbJ2lkJ11dKS5zdWJzY3JpYmUoXG4gICAgICAoc3VjY2VzczogQXBpQmFzZVJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJlZi5jbG9zZSgpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZGVsZXRlKCk7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50b2FzdHIuc2hvd0kxOG4oc3VjY2Vzcy5yZXNwU3RhdHVzTWVzc2FnZVtzdWNjZXNzLnJlc3BTdGF0dXNDb2RlXSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMubG9hZERhdGFNZW51KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmdGb3JtID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIChlcnJvcjogQXBpQmFzZVJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50b2FzdHIuc2hvd0kxOG4oZXJyb3IucmVzcFN0YXR1c01lc3NhZ2VbZXJyb3IucmVzcFN0YXR1c0NvZGVdLCB0cnVlLCBudWxsLCAnZGFuZ2VyJyk7XG4gICAgICB9LFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHBvc3RNZW51KHJlZj86IE5iRGlhbG9nUmVmPGFueT4pIHtcbiAgICAoc3VwZXIub25TdWJtaXQodGhpcy5kYXRhLCAnc2VjdXJpdHknLCAncG9zdC1tZW51cycpICBhcyBPYnNlcnZhYmxlPEFwaUJhc2VSZXNwb25zZT4pXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3BTdGF0dXNDb2RlID09PSBSZXNwb25zZUNvZGUuT0tfREVGQVVMVC50b1N0cmluZygpKSB7XG4gICAgICAgICAgdGhpcy5sb2FkRGF0YU1lbnUoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nRm9ybSA9IGZhbHNlO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmFjdGlvbiA9PT0gJ0VkaXQnKSB7IHJlZi5jbG9zZSgpOyB9XG4gICAgICB9KTtcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwicm93XCI+XG4gIDxkaXYgY2xhc3M9XCJjb2wtbWQtNCBjb2wtbGctNFwiPlxuICAgIDx0cmVlLW5neFxuICAgICAgW25vZGVJdGVtc109XCJub2RlSXRlbXNcIlxuICAgICAgW29wdGlvbnNdPVwib3B0aW9uc1wiXG4gICAgICAjdHJlZU1haW4+XG4gICAgICA8bmctdGVtcGxhdGUgI25vZGVOYW1lVGVtcGxhdGUgbGV0LW5vZGU9XCJub2RlXCIgbGV0LWNvbnRleHQ9XCJjb250ZXh0XCI+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3M9XCJub2RlLWFjdGlvblwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICAgJ25vZGUtYWN0aW9uJzogIW5vZGUuaXRlbS5ncm91cCxcbiAgICAgICAgICAgICdub2RlLWFjdGlvbi1ncm91cCc6IG5vZGUuaXRlbS5ncm91cFxuICAgICAgICAgIH1cIlxuICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwiY29udGV4dC5hY3RpdmVcIlxuICAgICAgICAgIChjbGljayk9XCJvblNlbGVjdE5vZGUobm9kZSlcIj5cbiAgICAgICAgICB7e25vZGUubmFtZX19XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ0cmVlLWFjdGlvblwiPlxuICAgICAgICAgIDxuYi1pY29uXG4gICAgICAgICAgICAgIGNsYXNzPVwiYWN0aW9uLXRyYXNoXCJcbiAgICAgICAgICAgICAgaWNvbj1cImNsb3NlLXNxdWFyZS1vdXRsaW5lXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uRGVsZXRlVHJlZShub2RlLCBjb250ZXh0LCBkaWFsb2dwcm9jZXNzKVwiPlxuICAgICAgICAgIDwvbmItaWNvbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8L3RyZWUtbmd4PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImNvbC1tZC04IGNvbC1sZy04XCI+XG4gICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGxhYmVsXG4gICAgICAgICAgZm9yPVwiVGl0bGVcIlxuICAgICAgICAgIGNsYXNzPVwibGFiZWwgY29sLXNtLTMgY29sLWZvcm0tbGFiZWxcIlxuICAgICAgICAgICpuZ0lmPVwiIWxvYWRpbmdGb3JtOyBlbHNlIGxhYmVsc2tlbGV0b25cIj5cbiAgICAgICAgICB7eydUaXRsZScgfCB0cmFuc2xhdGV9fVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bmctdGVtcGxhdGUgI2xhYmVsc2tlbGV0b24+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zXCI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAgICAgICAnbGFiZWwtc2tlbGV0b24nOiB0cnVlLFxuICAgICAgICAgICAgICAgICdza2VsZXRvbic6IGxvYWRpbmdGb3JtXG4gICAgICAgICAgICAgIH1cIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTlcIiAqbmdJZj1cImxvYWRMb2NhbGU7IGVsc2UgaW5wdXRTa2VsZXRvblwiPlxuICAgICAgICAgIDxkby1pbnB1dC1pY29uXG4gICAgICAgICAgICBbbmFtZV09XCJsb2NhbGVEZWZhdWx0LmxvY2FsZUNvZGVcIlxuICAgICAgICAgICAgW25vbGFiZWxdPVwidHJ1ZVwiXG4gICAgICAgICAgICBbcmVxdWlyZWRdPVwidHJ1ZVwiXG4gICAgICAgICAgICBbY29sTGFiZWxdPVwiMFwiXG4gICAgICAgICAgICBbY29sSW5wdXRdPVwiMTJcIlxuICAgICAgICAgICAgW2ljb25dPVwiJ2ZsYWctaWNvbiBmbGFnLWljb24tJyArIGxvY2FsZURlZmF1bHQuaWNvblwiXG4gICAgICAgICAgICBbc2tlbGV0b25dPVwibG9hZGluZ0Zvcm1cIlxuICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwie3tsb2NhbGVEZWZhdWx0LmxvY2FsZUNvZGV9fVwiPlxuICAgICAgICAgIDwvZG8taW5wdXQtaWNvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjaW5wdXRTa2VsZXRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTlcIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICAgICAgICdpbnB1dC1za2VsZXRvbic6IHRydWUsXG4gICAgICAgICAgICAgICAgJ3NrZWxldG9uJzogbG9hZGluZ0Zvcm1cbiAgICAgICAgICAgICAgfVwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkby1pbnB1dC1pY29uICpuZ0Zvcj1cImxldCBpMThuIG9mIGxvY2FsZXNcIlxuICAgICAgICBbbmFtZV09XCJpMThuLmxvY2FsZUNvZGVcIlxuICAgICAgICBbbm9sYWJlbF09XCJ0cnVlXCJcbiAgICAgICAgW2ljb25dPVwiJ2ZsYWctaWNvbiBmbGFnLWljb24tJysgaTE4bi5pY29uXCJcbiAgICAgICAgW3NrZWxldG9uXT1cImxvYWRpbmdGb3JtXCJcbiAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwie3tpMThuLmxvY2FsZUNvZGV9fVwiPlxuICAgICAgPC9kby1pbnB1dC1pY29uPlxuICAgICAgPGRvLWNoZWNrYm94XG4gICAgICAgIFtuYW1lXT1cIidncm91cCdcIlxuICAgICAgICBbbGFiZWxdPVwiJ0dyb3VwJ1wiXG4gICAgICAgIFtkYXRhXT1cImdyb3VwRGF0YVwiXG4gICAgICAgIFtza2VsZXRvbl09XCJsb2FkaW5nRm9ybVwiXG4gICAgICAgIFt3YXJuTWVzc2FnZV09XCInd2Fybi5ncm91cC1tZW51J1wiXG4gICAgICAgIChvbkNoZWNrZWQpPVwib25DaGVja2VkR3JvdXAoJGV2ZW50KVwiXG4gICAgICAgIGZvcm1Db250cm9sTmFtZT1cImdyb3VwXCI+XG4gICAgICA8L2RvLWNoZWNrYm94PlxuICAgICAgPGRvLWNoZWNrYm94XG4gICAgICAgIFtuYW1lXT1cIidyb290J1wiXG4gICAgICAgIFtsYWJlbF09XCInUm9vdCdcIlxuICAgICAgICBbZGF0YV09XCJyb290RGF0YVwiXG4gICAgICAgIFtza2VsZXRvbl09XCJsb2FkaW5nRm9ybVwiXG4gICAgICAgIChvbkNoZWNrZWQpPVwib25DaGVja2VkUm9vdCgkZXZlbnQpXCJcbiAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwicm9vdFwiXG4gICAgICAgICpuZ0lmPVwiIWlzR3JvdXBcIj5cbiAgICAgIDwvZG8tY2hlY2tib3g+XG4gICAgICA8ZG8tY2hlY2tib3hcbiAgICAgICAgW25hbWVdPVwiJ2hvbWUnXCJcbiAgICAgICAgW2xhYmVsXT1cIidIb21lJ1wiXG4gICAgICAgIFtkYXRhXT1cImhvbWVEYXRhXCJcbiAgICAgICAgW3NrZWxldG9uXT1cImxvYWRpbmdGb3JtXCJcbiAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiaG9tZVwiXG4gICAgICAgICpuZ0lmPVwiIWlzR3JvdXBcIj5cbiAgICAgIDwvZG8tY2hlY2tib3g+XG4gICAgICA8ZG8taW5wdXQtdGV4dFxuICAgICAgICBbbmFtZV09XCInY29kZSdcIlxuICAgICAgICBbbGFiZWxdPVwiJ0NvZGUnXCJcbiAgICAgICAgW2NhcHNsb2NrXT1cInRydWVcIlxuICAgICAgICBbcmVxdWlyZWRdPVwidHJ1ZVwiXG4gICAgICAgIFtza2VsZXRvbl09XCJsb2FkaW5nRm9ybVwiXG4gICAgICAgIGZvcm1Db250cm9sTmFtZT1cImNvZGVcIlxuICAgICAgICAqbmdJZj1cIiFpc0dyb3VwXCI+XG4gICAgICA8L2RvLWlucHV0LXRleHQ+XG4gICAgICA8ZG8taW5wdXQtdGV4dFxuICAgICAgICBbbmFtZV09XCInbGluaydcIlxuICAgICAgICBbbGFiZWxdPVwiJ0xpbmsnXCJcbiAgICAgICAgW3JlcXVpcmVkXT1cInRydWVcIlxuICAgICAgICBbc2tlbGV0b25dPVwibG9hZGluZ0Zvcm1cIlxuICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJsaW5rXCJcbiAgICAgICAgKm5nSWY9XCIhaXNHcm91cFwiPlxuICAgICAgPC9kby1pbnB1dC10ZXh0PlxuICAgICAgPGRvLWlucHV0LWljb25cbiAgICAgICAgW25hbWVdPVwiJ2ljb24nXCJcbiAgICAgICAgW2xhYmVsXT1cIidJY29uJ1wiXG4gICAgICAgIFtyZXF1aXJlZF09XCJ0cnVlXCJcbiAgICAgICAgW3NrZWxldG9uXT1cImxvYWRpbmdGb3JtXCJcbiAgICAgICAgW2ljb25dPVwiJ3NlYXJjaC1vdXRsaW5lJ1wiXG4gICAgICAgIFtpY29uY3Vyc29yXT1cInRydWVcIlxuICAgICAgICBbZXZhXT1cInRydWVcIlxuICAgICAgICAoY2xpY2tJY29uKT1cIm9uU2VhcmNoSWNvbigpXCJcbiAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiaWNvblwiXG4gICAgICAgICpuZ0lmPVwiKGlzUm9vdCAmJiAhaXNHcm91cClcIj5cbiAgICAgIDwvZG8taW5wdXQtaWNvbj5cbiAgICAgIDxkby1zZWxlY3RcbiAgICAgICAgW25hbWVdPVwiJ3BhcmVudCdcIlxuICAgICAgICBbbGFiZWxdPVwiJ1BhcmVudCBNZW51J1wiXG4gICAgICAgIFthcGldPVwiYXBpU2VsZWN0UGFyZW50XCJcbiAgICAgICAgW3NlYXJjaGFibGVdPVwiZmFsc2VcIlxuICAgICAgICBbc2tlbGV0b25dPVwibG9hZGluZ0Zvcm1cIlxuICAgICAgICBbcmVxdWlyZWRdPVwidHJ1ZVwiXG4gICAgICAgIGZvcm1Db250cm9sTmFtZT1cInBhcmVudFwiXG4gICAgICAgICpuZ0lmPVwiKCFpc1Jvb3QgJiYgIWlzR3JvdXApXCI+XG4gICAgICA8L2RvLXNlbGVjdD5cbiAgICAgIDxkby1pbnB1dC10ZXh0XG4gICAgICAgIFtuYW1lXT1cIidvcmRlcidcIlxuICAgICAgICBbbGFiZWxdPVwiJ09yZGVyJ1wiXG4gICAgICAgIFtyZXF1aXJlZF09XCJ0cnVlXCJcbiAgICAgICAgW3R5cGVdPVwiJ251bWJlcidcIlxuICAgICAgICBbbWF4XT1cIjk5OVwiXG4gICAgICAgIFttYXhMZW5ndGhdPVwiM1wiXG4gICAgICAgIFtza2VsZXRvbl09XCJsb2FkaW5nRm9ybVwiXG4gICAgICAgIGZvcm1Db250cm9sTmFtZT1cIm9yZGVyXCI+XG4gICAgICA8L2RvLWlucHV0LXRleHQ+XG4gICAgICA8ZG8tYnV0dG9uLXN1Ym1pdFxuICAgICAgICBbc3VibWl0VGl0bGVdPVwiYWN0aW9uXCJcbiAgICAgICAgW3Jlc2V0VGl0bGVdPVwiJ0NhbmNlbCdcIlxuICAgICAgICBbZm9ybUdyb3VwQnV0dG9uXT1cImZvcm1Hcm91cFwiXG4gICAgICAgIFtkaXNhYmxlZEJ1dHRvbl09XCJkaXNhYmxlZFwiXG4gICAgICAgIChvblJlc2V0KT1cIm9uUmVzZXQoKVwiXG4gICAgICAgIChvblN1Ym1pdCk9XCJvblN1Ym1pdChkaWFsb2dwcm9jZXNzKVwiPlxuICAgICAgPC9kby1idXR0b24tc3VibWl0PlxuICAgIDwvZm9ybT5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPG5nLXRlbXBsYXRlICNkaWFsb2dwcm9jZXNzIGxldC1kYXRhIGxldC1yZWY9XCJkaWFsb2dSZWZcIj5cbiAgPG5iLWNhcmQgYWNjZW50PVwie3tkaWFsb2dBY3Rpb24gPT09ICdEZWxldGUnID8gJ2RhbmdlcicgOiAnd2FybmluZyd9fVwiPlxuICAgIDxuYi1jYXJkLWhlYWRlcj57eyAnV2FybmluZycgfCB0cmFuc2xhdGV9fTwvbmItY2FyZC1oZWFkZXI+XG4gICAgPG5iLWNhcmQtYm9keT57eyBkYXRhIHwgdHJhbnNsYXRlfX08L25iLWNhcmQtYm9keT5cbiAgICA8bmItY2FyZC1mb290ZXI+XG4gICAgICA8ZG8tYnV0dG9uLXN1Ym1pdFxuICAgICAgICBbY29sTGFiZWxdPVwiMFwiXG4gICAgICAgIFtjb2xCdXR0b25dPVwiMTJcIlxuICAgICAgICBbc3VibWl0VGl0bGVdPVwiZGlhbG9nQWN0aW9uXCJcbiAgICAgICAgW3Jlc2V0VGl0bGVdPVwiJ0NhbmNlbCdcIlxuICAgICAgICBbZGlzYWJsZWRCdXR0b25dPVwiZGlzYWJsZWRcIlxuICAgICAgICAob25SZXNldCk9XCJyZWYuY2xvc2UoKVwiXG4gICAgICAgIChvblN1Ym1pdCk9XCJvblN1Ym1pdERpYWxvZyhyZWYpXCI+XG4gICAgICA8L2RvLWJ1dHRvbi1zdWJtaXQ+XG4gICAgPC9uYi1jYXJkLWZvb3Rlcj5cbiAgPC9uYi1jYXJkPlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==