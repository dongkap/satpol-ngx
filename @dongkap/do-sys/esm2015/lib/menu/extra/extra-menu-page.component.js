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
import * as i4 from "@angular/forms";
import * as i5 from "@angular/common";
import * as i6 from "@ngx-translate/core";
export class ExtraMenuPageComponent extends BaseFormComponent {
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
ExtraMenuPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ExtraMenuPageComponent, deps: [{ token: i0.Injector }, { token: i1.NbDialogService }], target: i0.ɵɵFactoryTarget.Component });
ExtraMenuPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ExtraMenuPageComponent, selector: "do-extra-menu-page", usesInheritance: true, ngImport: i0, template: "<div class=\"row\">\n  <div class=\"col-md-4 col-lg-4\">\n    <tree-ngx\n      [nodeItems]=\"nodeItems\"\n      [options]=\"options\"\n      #treeExtra>\n      <ng-template #nodeNameTemplate let-node=\"node\" let-context=\"context\">\n        <span\n          class=\"node-action\"\n          [class.active]=\"context.active\"\n          (click)=\"onSelectNode(node)\">\n          {{node.name}}\n        </span>\n        <span class=\"tree-action\">\n          <nb-icon\n              class=\"action-trash\"\n              icon=\"close-square-outline\"\n              (click)=\"onDeleteTree(node, context, dialogprocessextra)\">\n          </nb-icon>\n        </span>\n      </ng-template>\n    </tree-ngx>\n  </div>\n  <div class=\"col-md-8 col-lg-8\">\n    <form [formGroup]=\"formGroup\">\n      <div class=\"row\">\n        <label\n          for=\"Title\"\n          class=\"label col-sm-3 col-form-label\"\n          *ngIf=\"!loadingForm; else labelskeleton\">\n          {{'Title' | translate}}\n        </label>\n        <ng-template #labelskeleton>\n          <div class=\"col-sm-3\">\n            <div\n              [ngClass]=\"{\n                'label-skeleton': true,\n                'skeleton': loadingForm\n              }\">\n            </div>\n          </div>\n        </ng-template>\n        <div class=\"col-sm-9\" *ngIf=\"loadLocale; else inputSkeleton\">\n          <do-input-icon\n            [name]=\"localeDefault.localeCode\"\n            [nolabel]=\"true\"\n            [required]=\"true\"\n            [colLabel]=\"0\"\n            [colInput]=\"12\"\n            [icon]=\"'flag-icon flag-icon-' + localeDefault.icon\"\n            [skeleton]=\"loadingForm\"\n            formControlName=\"{{localeDefault.localeCode}}\">\n          </do-input-icon>\n        </div>\n        <ng-template #inputSkeleton>\n          <div class=\"col-sm-9\">\n            <div\n              [ngClass]=\"{\n                'input-skeleton': true,\n                'skeleton': loadingForm\n              }\">\n            </div>\n          </div>\n        </ng-template>\n      </div>\n      <do-input-icon *ngFor=\"let i18n of locales\"\n        [name]=\"i18n.localeCode\"\n        [nolabel]=\"true\"\n        [icon]=\"'flag-icon flag-icon-'+ i18n.icon\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"{{i18n.localeCode}}\">\n      </do-input-icon>\n      <do-input-text\n        [name]=\"'code'\"\n        [label]=\"'Code'\"\n        [capslock]=\"true\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"code\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'link'\"\n        [label]=\"'Link'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"link\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'order'\"\n        [label]=\"'Order'\"\n        [required]=\"true\"\n        [type]=\"'number'\"\n        [max]=\"99\"\n        [maxLength]=\"2\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"order\">\n      </do-input-text>\n      <do-button-submit\n        [submitTitle]=\"action\"\n        [resetTitle]=\"'Cancel'\"\n        [formGroupButton]=\"formGroup\"\n        [disabledButton]=\"disabled\"\n        (onReset)=\"onReset()\"\n        (onSubmit)=\"onSubmit(dialogprocessextra)\">\n      </do-button-submit>\n    </form>\n  </div>\n</div>\n\n<ng-template #dialogprocessextra let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"{{dialogAction === 'Delete' ? 'danger' : 'warning'}}\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <do-button-submit\n        [colLabel]=\"0\"\n        [colButton]=\"12\"\n        [submitTitle]=\"dialogAction\"\n        [resetTitle]=\"'Cancel'\"\n        [disabledButton]=\"disabled\"\n        (onReset)=\"ref.close()\"\n        (onSubmit)=\"onSubmitDialog(ref)\">\n      </do-button-submit>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>\n", styles: [".tree-ngx{display:flex;flex:1 1 auto;flex-direction:column;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif}.node{display:flex;flex:1 1 auto;flex-direction:column}.node-children{display:flex;flex:1 1 auto}.node-name{display:inline-block;padding:5px 0 5px 7px}.node-name.markSelected{padding:5px 0 5px 2px;border-left:5px #226699 solid}.node-name .active{cursor:pointer}.node-offset{display:flex;margin-left:20px}.node-icon-wrapper{position:relative;display:inline-block;width:25px;height:17px;top:1px;left:6px}.node-icon-wrapper.disabled{cursor:default}.collapsable{cursor:pointer}.node-container{display:inline-block}.nodeDisabled{opacity:.6}.node-checkbox{display:inline-block;position:relative;top:3px;left:5px;width:16px;height:16px;cursor:pointer}.node-checkbox:disabled{cursor:auto}.collapsible-wrapper{display:flex;overflow:hidden}.collapsible-wrapper:after{content:\"\";height:25px;transition:height .3s linear,max-height 0s .3s linear;max-height:0px}.collapsible{transition:margin-bottom .3s cubic-bezier(0,0,0,1);margin-bottom:0;max-height:1000000px}.collapsible-wrapper.collapsed>.collapsible{margin-bottom:-20000px;transition:margin-bottom .3s cubic-bezier(1,0,1,1),visibility 0s .3s,max-height 0s .3s;visibility:hidden;max-height:0}.collapsible-wrapper.collapsed:after{height:0;transition:height .3s linear;max-height:25px}.arrow-down{position:absolute;width:0;height:0;left:3px;top:6px;border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #455A64}.arrow-down.collapse-empty{border-top:7px solid #ccc}.arrow-right{position:absolute;width:0;height:0;left:8px;top:3px;border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid #455A64}.nb-theme-default .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-default .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#222b45;border-radius:0;cursor:pointer}.nb-theme-default .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-default .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-default .action-trash:hover{color:#ff708d}.nb-theme-dark .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-dark .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#fff;border-radius:0;cursor:pointer}.nb-theme-dark .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-dark .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-dark .action-trash:hover{color:#ff708d}.nb-theme-cosmic .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-cosmic .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#fff;border-radius:0;cursor:pointer}.nb-theme-cosmic .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-cosmic .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-cosmic .action-trash:hover{color:#ff708d}.nb-theme-corporate .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-corporate .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#222b45;border-radius:0;cursor:pointer}.nb-theme-corporate .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-corporate .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-corporate .action-trash:hover{color:#ff708d}\n"], components: [{ type: i2.ɵa, selector: "tree-ngx", inputs: ["options", "callbacks", "filter", "nodeItems"], outputs: ["selectedItems"] }, { type: i1.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }, { type: i3.DoInputIconComponent, selector: "do-input-icon", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "buttontype", "type", "iconcursor", "eva", "icon"], outputs: ["clickIcon", "focus"] }, { type: i3.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i3.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }, { type: i1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i1.NbCardFooterComponent, selector: "nb-card-footer" }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i5.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "translate": i6.TranslatePipe }, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ExtraMenuPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-extra-menu-page',
                    styleUrls: ['./extra-menu-page.component.scss'],
                    templateUrl: './extra-menu-page.component.html',
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.NbDialogService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0cmEtbWVudS1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXN5cy9zcmMvbGliL21lbnUvZXh0cmEvZXh0cmEtbWVudS1wYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXN5cy9zcmMvbGliL21lbnUvZXh0cmEvZXh0cmEtbWVudS1wYWdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVksaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVwQyxPQUFPLEVBQWtDLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM3RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7Ozs7Ozs7QUFRM0UsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGlCQUFzQjtJQW9CaEUsWUFBbUIsUUFBa0IsRUFBVSxhQUE4QjtRQUMzRSxLQUFLLENBQUMsUUFBUSxFQUNaO1lBQ0UsRUFBRSxFQUFFLEVBQUU7WUFDTixPQUFPLEVBQUUsRUFBRTtZQUNYLE9BQU8sRUFBRSxFQUFFO1lBQ1gsSUFBSSxFQUFFLENBQUM7b0JBQ0wsS0FBSyxFQUFFLEtBQUs7b0JBQ1osUUFBUSxFQUFFLEtBQUs7aUJBQ2hCLENBQUM7WUFDRixJQUFJLEVBQUUsQ0FBQztvQkFDTCxLQUFLLEVBQUUsR0FBRztvQkFDVixRQUFRLEVBQUUs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QUksSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLEVBQUU7Z0JBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQUU7UUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOztvSEF0TVUsc0JBQXNCO3dHQUF0QixzQkFBc0IsaUZDbEJuQyxtOUhBOEhBOzRGRDVHYSxzQkFBc0I7a0JBTmxDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7b0JBQy9DLFdBQVcsRUFBRSxrQ0FBa0M7b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0b3IsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVHJlZU1vZGUgfSBmcm9tICd0cmVlLW5neCc7XG5pbXBvcnQgeyBOYkRpYWxvZ1JlZiwgTmJEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHsgQXBpQmFzZVJlc3BvbnNlLCBIdHRwQmFzZU1vZGVsLCBMb2NhbGVNb2RlbCwgUmVzcG9uc2VDb2RlIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBCYXNlRm9ybUNvbXBvbmVudCB9IGZyb20gJ0Bkb25na2FwL2RvLXNoYXJlZCc7XG5pbXBvcnQgeyBEaWFsb2dJY29uQ29tcG9uZW50IH0gZnJvbSAnLi4vZGlhbG9nLWljb24vZGlhbG9nLWljb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8tZXh0cmEtbWVudS1wYWdlJyxcbiAgc3R5bGVVcmxzOiBbJy4vZXh0cmEtbWVudS1wYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9leHRyYS1tZW51LXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBFeHRyYU1lbnVQYWdlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUZvcm1Db21wb25lbnQ8YW55PiBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIG5vZGVJdGVtczogYW55ID0gW107XG4gIHB1YmxpYyBvcHRpb25zOiBhbnkgPSB7XG4gICAgbW9kZTogVHJlZU1vZGUuTm9TZWxlY3QsXG4gICAgY2hlY2tib3hlczogZmFsc2UsXG4gICAgYWx3YXlzRW1pdFNlbGVjdGVkOiB0cnVlXG4gIH07XG4gIHB1YmxpYyBhbGxMb2NhbGVzOiBMb2NhbGVNb2RlbFtdID0gW107XG4gIHB1YmxpYyBsb2NhbGVzOiBMb2NhbGVNb2RlbFtdID0gW107XG4gIHB1YmxpYyBsb2NhbGVEZWZhdWx0OiBMb2NhbGVNb2RlbCA9IG5ldyBMb2NhbGVNb2RlbCgpO1xuICBwdWJsaWMgYWN0aW9uOiAnQWRkJyB8ICdFZGl0JyA9ICdBZGQnO1xuICBwdWJsaWMgZGlhbG9nQWN0aW9uOiAnRWRpdCcgfCAnRGVsZXRlJyA9ICdFZGl0JztcbiAgcHVibGljIGFwaVBhdGhMb2NhbGU6IEh0dHBCYXNlTW9kZWw7XG4gIHB1YmxpYyBsb2FkTG9jYWxlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyB0aXRsZTogc3RyaW5nID0gbnVsbDtcbiAgcHJpdmF0ZSBkYXRhOiBhbnk7XG4gIHByaXZhdGUgY29udGV4dDogYW55O1xuICBwcml2YXRlIG5vZGU6IGFueTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yLCBwcml2YXRlIGRpYWxvZ1NlcnZpY2U6IE5iRGlhbG9nU2VydmljZSkge1xuICAgIHN1cGVyKGluamVjdG9yLFxuICAgICAge1xuICAgICAgICBpZDogW10sXG4gICAgICAgICdlbi1VUyc6IFtdLFxuICAgICAgICAnaWQtSUQnOiBbXSxcbiAgICAgICAgY29kZTogW3tcbiAgICAgICAgICB2YWx1ZTogJ04vQScsXG4gICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICB9XSxcbiAgICAgICAgbGluazogW3tcbiAgICAgICAgICB2YWx1ZTogJyMnLFxuICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgfV0sXG4gICAgICAgIG9yZGVyOiBbXSxcbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7fVxuXG4gIGxvYWREYXRhTWVudSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGlmICghdGhpcy5sb2FkTG9jYWxlKSB7XG4gICAgICB0aGlzLmxvYWRpbmdGb3JtID0gdHJ1ZTtcbiAgICAgIHRoaXMuaHR0cC5IVFRQX0FVVEgodGhpcy5hcGlbJ21hc3RlciddWydhbGwtbG9jYWxlJ10pLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICAgIHRoaXMuc3BsaXRMb2NhbGUocmVzcG9uc2UpO1xuICAgICAgICB0aGlzLmxvYWRMb2NhbGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmxvYWRpbmdGb3JtID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5IVFRQX0FVVEgoXG4gICAgICB0aGlzLmFwaVsnc2VjdXJpdHknXVsnZ2V0LXRyZWUtbWVudXMnXSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICAgIFsnZXh0cmEnXSkucGlwZShtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5ub2RlSXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5ub2RlSXRlbXMgPSBbLi4udGhpcy5ub2RlSXRlbXMsIC4uLnJlc3BvbnNlXTtcbiAgICAgICAgdGhpcy5vblJlc2V0KCk7XG4gICAgICAgIGlmICh0aGlzLmxvYWRMb2NhbGUpIHsgdGhpcy5sb2FkaW5nRm9ybSA9IGZhbHNlOyB9XG4gICAgICB9KSk7XG4gIH1cblxuICBzcGxpdExvY2FsZSh2YWx1ZXM6IExvY2FsZU1vZGVsW10pOiB2b2lkIHtcbiAgICB0aGlzLmFsbExvY2FsZXMgPSB2YWx1ZXM7XG4gICAgdmFsdWVzLmZvckVhY2goZGF0YSA9PiB7XG4gICAgICBpZiAoZGF0YS5sb2NhbGVEZWZhdWx0KSB7XG4gICAgICAgIHRoaXMubG9jYWxlRGVmYXVsdCA9IGRhdGE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxvY2FsZXMucHVzaChkYXRhKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZm9ybUdyb3VwLnJlbW92ZUNvbnRyb2woZGF0YS5sb2NhbGVDb2RlKTtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmFkZENvbnRyb2woZGF0YS5sb2NhbGVDb2RlLCBuZXcgRm9ybUNvbnRyb2woKSk7XG4gICAgfSk7XG4gIH1cblxuICBvblNlYXJjaEljb24oKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oRGlhbG9nSWNvbkNvbXBvbmVudClcbiAgICAgIC5vbkNsb3NlLnN1YnNjcmliZSgoaWNvbjogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnaWNvbicpLnNldFZhbHVlKGljb24pO1xuICAgICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ2ljb24nKS5tYXJrQXNEaXJ0eSgpO1xuICAgICAgfSk7XG4gIH1cblxuICBvblNlbGVjdE5vZGUobm9kZTogYW55KSB7XG4gICAgaWYgKG5vZGUuaXRlbSkge1xuICAgICAgdGhpcy5hY3Rpb24gPSAnRWRpdCc7XG4gICAgICB0aGlzLmRpYWxvZ0FjdGlvbiA9IHRoaXMuYWN0aW9uO1xuICAgICAgdGhpcy5hbGxMb2NhbGVzLmZvckVhY2gobG9jYWxlID0+IHtcbiAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KGxvY2FsZS5sb2NhbGVDb2RlKS5zZXRWYWx1ZShub2RlLml0ZW1bJ2kxOG4nXVtsb2NhbGUubG9jYWxlQ29kZV0pO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ2lkJykuc2V0VmFsdWUobm9kZVsnaWQnXSk7XG4gICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ2NvZGUnKS5zZXRWYWx1ZShub2RlLml0ZW1bJ2NvZGUnXSk7XG4gICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ2xpbmsnKS5zZXRWYWx1ZShub2RlLml0ZW1bJ2xpbmsnXSk7XG4gICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ29yZGVyJykuc2V0VmFsdWUobm9kZS5pdGVtWydvcmRlcmluZyddKTtcbiAgICB9XG4gIH1cblxuICBvbkRlbGV0ZVRyZWUobm9kZTogYW55LCBjb250ZXh0OiBhbnksIGRpYWxvZzogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIHRoaXMuZGlhbG9nQWN0aW9uID0gJ0RlbGV0ZSc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKFxuICAgICAgZGlhbG9nLFxuICAgICAgeyBjb250ZXh0OiAnYWxlcnQuZGVsZXRlJyB9KTtcbiAgfVxuXG4gIG9uU3VibWl0KGRpYWxvZzogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGxldCBpZDogc3RyaW5nID0gbnVsbDtcbiAgICBsZXQgY29kZTogc3RyaW5nID0gJ04vQSc7XG4gICAgbGV0IGxpbms6IHN0cmluZyA9ICcjJztcbiAgICBsZXQgb3JkZXJpbmc6IG51bWJlciA9IDA7XG4gICAgY29uc3QgdHlwZTogc3RyaW5nID0gJ2V4dHJhJztcbiAgICBjb25zdCBpY29uOiBzdHJpbmcgPSBudWxsO1xuICAgIGNvbnN0IGhvbWU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBjb25zdCBncm91cDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGNvbnN0IGxldmVsOiBudW1iZXIgPSAwO1xuICAgIGNvbnN0IGxlYWY6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBjb25zdCBpMThuOiBhbnkgPSB7fTtcbiAgICBjb25zdCBwYXJlbnRNZW51OiBhbnkgPSBudWxsO1xuICAgIGlmICh0aGlzLmZvcm1Hcm91cC5nZXQoJ2lkJykudmFsdWUpIHsgaWQgPSB0aGlzLmZvcm1Hcm91cC5nZXQoJ2lkJykudmFsdWU7IH1cbiAgICBpZiAodGhpcy5mb3JtR3JvdXAuZ2V0KCdjb2RlJykudmFsdWUpIHsgY29kZSA9IHRoaXMuZm9ybUdyb3VwLmdldCgnY29kZScpLnZhbHVlOyB9XG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwLmdldCgnbGluaycpLnZhbHVlKSB7IGxpbmsgPSB0aGlzLmZvcm1Hcm91cC5nZXQoJ2xpbmsnKS52YWx1ZTsgfVxuICAgIGlmICh0aGlzLmZvcm1Hcm91cC5nZXQoJ29yZGVyJykudmFsdWUpIHsgb3JkZXJpbmcgPSArdGhpcy5mb3JtR3JvdXAuZ2V0KCdvcmRlcicpLnZhbHVlOyB9XG4gICAgdGhpcy5hbGxMb2NhbGVzLmZvckVhY2gobG9jYWxlID0+IHtcbiAgICAgIGkxOG5bbG9jYWxlLmxvY2FsZUNvZGVdID0gdGhpcy5mb3JtR3JvdXAuZ2V0KGxvY2FsZS5sb2NhbGVDb2RlKS52YWx1ZTtcbiAgICB9KTtcbiAgICB0aGlzLmRhdGEgPSB7XG4gICAgICBpZCxcbiAgICAgIGNvZGUsXG4gICAgICBpY29uLFxuICAgICAgbGluayxcbiAgICAgIHR5cGUsXG4gICAgICBsZXZlbCxcbiAgICAgIG9yZGVyaW5nLFxuICAgICAgaG9tZSxcbiAgICAgIGdyb3VwLFxuICAgICAgbGVhZixcbiAgICAgIGkxOG4sXG4gICAgICBwYXJlbnRNZW51LFxuICAgIH07XG4gICAgaWYgKHRoaXMuYWN0aW9uID09PSAnRWRpdCcpIHtcbiAgICAgIHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKFxuICAgICAgICBkaWFsb2csXG4gICAgICAgIHsgY29udGV4dDogJ2FsZXJ0LmVkaXQnIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBvc3RNZW51KCk7XG4gICAgfVxuICB9XG5cbiAgb25TdWJtaXREaWFsb2cocmVmOiBOYkRpYWxvZ1JlZjxhbnk+KSB7XG4gICAgaWYgKHRoaXMuZGlhbG9nQWN0aW9uID09PSAnRGVsZXRlJykge1xuICAgICAgdGhpcy5kZWxldGVUcmVlTWVudShyZWYpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBvc3RNZW51KHJlZik7XG4gICAgfVxuICB9XG5cbiAgb25SZXNldCgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy50aXRsZSA9IG51bGw7XG4gICAgdGhpcy5hY3Rpb24gPSAnQWRkJztcbiAgICB0aGlzLmFsbExvY2FsZXMuZm9yRWFjaChsb2NhbGUgPT4ge1xuICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KGxvY2FsZS5sb2NhbGVDb2RlKS5zZXRWYWx1ZShudWxsKTtcbiAgICB9KTtcbiAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ2lkJykuc2V0VmFsdWUobnVsbCk7XG4gICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdjb2RlJykuc2V0VmFsdWUoJ04vQScpO1xuICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnbGluaycpLnNldFZhbHVlKCcjJyk7XG4gICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdvcmRlcicpLnNldFZhbHVlKG51bGwpO1xuICB9XG5cbiAgcHJpdmF0ZSBkZWxldGVUcmVlTWVudShyZWY6IE5iRGlhbG9nUmVmPGFueT4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLmh0dHAuSFRUUF9BVVRIKHRoaXMuYXBpWydzZWN1cml0eSddWydkZWxldGUtbWVudSddLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFt0aGlzLm5vZGVbJ2lkJ11dKS5zdWJzY3JpYmUoXG4gICAgICAoc3VjY2VzczogQXBpQmFzZVJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJlZi5jbG9zZSgpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZGVsZXRlKCk7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50b2FzdHIuc2hvd0kxOG4oc3VjY2Vzcy5yZXNwU3RhdHVzTWVzc2FnZVtzdWNjZXNzLnJlc3BTdGF0dXNDb2RlXSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMubG9hZERhdGFNZW51KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmdGb3JtID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIChlcnJvcjogQXBpQmFzZVJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50b2FzdHIuc2hvd0kxOG4oZXJyb3IucmVzcFN0YXR1c01lc3NhZ2VbZXJyb3IucmVzcFN0YXR1c0NvZGVdLCB0cnVlLCBudWxsLCAnZGFuZ2VyJyk7XG4gICAgICB9LFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHBvc3RNZW51KHJlZj86IE5iRGlhbG9nUmVmPGFueT4pIHtcbiAgICAoc3VwZXIub25TdWJtaXQodGhpcy5kYXRhLCAnc2VjdXJpdHknLCAncG9zdC1tZW51cycpICBhcyBPYnNlcnZhYmxlPEFwaUJhc2VSZXNwb25zZT4pXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3BTdGF0dXNDb2RlID09PSBSZXNwb25zZUNvZGUuT0tfREVGQVVMVC50b1N0cmluZygpKSB7XG4gICAgICAgICAgdGhpcy5sb2FkRGF0YU1lbnUoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nRm9ybSA9IGZhbHNlO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmFjdGlvbiA9PT0gJ0VkaXQnKSB7IHJlZi5jbG9zZSgpOyB9XG4gICAgICB9KTtcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwicm93XCI+XG4gIDxkaXYgY2xhc3M9XCJjb2wtbWQtNCBjb2wtbGctNFwiPlxuICAgIDx0cmVlLW5neFxuICAgICAgW25vZGVJdGVtc109XCJub2RlSXRlbXNcIlxuICAgICAgW29wdGlvbnNdPVwib3B0aW9uc1wiXG4gICAgICAjdHJlZUV4dHJhPlxuICAgICAgPG5nLXRlbXBsYXRlICNub2RlTmFtZVRlbXBsYXRlIGxldC1ub2RlPVwibm9kZVwiIGxldC1jb250ZXh0PVwiY29udGV4dFwiPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzPVwibm9kZS1hY3Rpb25cIlxuICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwiY29udGV4dC5hY3RpdmVcIlxuICAgICAgICAgIChjbGljayk9XCJvblNlbGVjdE5vZGUobm9kZSlcIj5cbiAgICAgICAgICB7e25vZGUubmFtZX19XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ0cmVlLWFjdGlvblwiPlxuICAgICAgICAgIDxuYi1pY29uXG4gICAgICAgICAgICAgIGNsYXNzPVwiYWN0aW9uLXRyYXNoXCJcbiAgICAgICAgICAgICAgaWNvbj1cImNsb3NlLXNxdWFyZS1vdXRsaW5lXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uRGVsZXRlVHJlZShub2RlLCBjb250ZXh0LCBkaWFsb2dwcm9jZXNzZXh0cmEpXCI+XG4gICAgICAgICAgPC9uYi1pY29uPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvdHJlZS1uZ3g+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY29sLW1kLTggY29sLWxnLThcIj5cbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8bGFiZWxcbiAgICAgICAgICBmb3I9XCJUaXRsZVwiXG4gICAgICAgICAgY2xhc3M9XCJsYWJlbCBjb2wtc20tMyBjb2wtZm9ybS1sYWJlbFwiXG4gICAgICAgICAgKm5nSWY9XCIhbG9hZGluZ0Zvcm07IGVsc2UgbGFiZWxza2VsZXRvblwiPlxuICAgICAgICAgIHt7J1RpdGxlJyB8IHRyYW5zbGF0ZX19XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjbGFiZWxza2VsZXRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTNcIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICAgICAgICdsYWJlbC1za2VsZXRvbic6IHRydWUsXG4gICAgICAgICAgICAgICAgJ3NrZWxldG9uJzogbG9hZGluZ0Zvcm1cbiAgICAgICAgICAgICAgfVwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOVwiICpuZ0lmPVwibG9hZExvY2FsZTsgZWxzZSBpbnB1dFNrZWxldG9uXCI+XG4gICAgICAgICAgPGRvLWlucHV0LWljb25cbiAgICAgICAgICAgIFtuYW1lXT1cImxvY2FsZURlZmF1bHQubG9jYWxlQ29kZVwiXG4gICAgICAgICAgICBbbm9sYWJlbF09XCJ0cnVlXCJcbiAgICAgICAgICAgIFtyZXF1aXJlZF09XCJ0cnVlXCJcbiAgICAgICAgICAgIFtjb2xMYWJlbF09XCIwXCJcbiAgICAgICAgICAgIFtjb2xJbnB1dF09XCIxMlwiXG4gICAgICAgICAgICBbaWNvbl09XCInZmxhZy1pY29uIGZsYWctaWNvbi0nICsgbG9jYWxlRGVmYXVsdC5pY29uXCJcbiAgICAgICAgICAgIFtza2VsZXRvbl09XCJsb2FkaW5nRm9ybVwiXG4gICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ7e2xvY2FsZURlZmF1bHQubG9jYWxlQ29kZX19XCI+XG4gICAgICAgICAgPC9kby1pbnB1dC1pY29uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG5nLXRlbXBsYXRlICNpbnB1dFNrZWxldG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOVwiPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgICAgICAgJ2lucHV0LXNrZWxldG9uJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAnc2tlbGV0b24nOiBsb2FkaW5nRm9ybVxuICAgICAgICAgICAgICB9XCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRvLWlucHV0LWljb24gKm5nRm9yPVwibGV0IGkxOG4gb2YgbG9jYWxlc1wiXG4gICAgICAgIFtuYW1lXT1cImkxOG4ubG9jYWxlQ29kZVwiXG4gICAgICAgIFtub2xhYmVsXT1cInRydWVcIlxuICAgICAgICBbaWNvbl09XCInZmxhZy1pY29uIGZsYWctaWNvbi0nKyBpMThuLmljb25cIlxuICAgICAgICBbc2tlbGV0b25dPVwibG9hZGluZ0Zvcm1cIlxuICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ7e2kxOG4ubG9jYWxlQ29kZX19XCI+XG4gICAgICA8L2RvLWlucHV0LWljb24+XG4gICAgICA8ZG8taW5wdXQtdGV4dFxuICAgICAgICBbbmFtZV09XCInY29kZSdcIlxuICAgICAgICBbbGFiZWxdPVwiJ0NvZGUnXCJcbiAgICAgICAgW2NhcHNsb2NrXT1cInRydWVcIlxuICAgICAgICBbcmVxdWlyZWRdPVwidHJ1ZVwiXG4gICAgICAgIFtza2VsZXRvbl09XCJsb2FkaW5nRm9ybVwiXG4gICAgICAgIGZvcm1Db250cm9sTmFtZT1cImNvZGVcIj5cbiAgICAgIDwvZG8taW5wdXQtdGV4dD5cbiAgICAgIDxkby1pbnB1dC10ZXh0XG4gICAgICAgIFtuYW1lXT1cIidsaW5rJ1wiXG4gICAgICAgIFtsYWJlbF09XCInTGluaydcIlxuICAgICAgICBbcmVxdWlyZWRdPVwidHJ1ZVwiXG4gICAgICAgIFtza2VsZXRvbl09XCJsb2FkaW5nRm9ybVwiXG4gICAgICAgIGZvcm1Db250cm9sTmFtZT1cImxpbmtcIj5cbiAgICAgIDwvZG8taW5wdXQtdGV4dD5cbiAgICAgIDxkby1pbnB1dC10ZXh0XG4gICAgICAgIFtuYW1lXT1cIidvcmRlcidcIlxuICAgICAgICBbbGFiZWxdPVwiJ09yZGVyJ1wiXG4gICAgICAgIFtyZXF1aXJlZF09XCJ0cnVlXCJcbiAgICAgICAgW3R5cGVdPVwiJ251bWJlcidcIlxuICAgICAgICBbbWF4XT1cIjk5XCJcbiAgICAgICAgW21heExlbmd0aF09XCIyXCJcbiAgICAgICAgW3NrZWxldG9uXT1cImxvYWRpbmdGb3JtXCJcbiAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwib3JkZXJcIj5cbiAgICAgIDwvZG8taW5wdXQtdGV4dD5cbiAgICAgIDxkby1idXR0b24tc3VibWl0XG4gICAgICAgIFtzdWJtaXRUaXRsZV09XCJhY3Rpb25cIlxuICAgICAgICBbcmVzZXRUaXRsZV09XCInQ2FuY2VsJ1wiXG4gICAgICAgIFtmb3JtR3JvdXBCdXR0b25dPVwiZm9ybUdyb3VwXCJcbiAgICAgICAgW2Rpc2FibGVkQnV0dG9uXT1cImRpc2FibGVkXCJcbiAgICAgICAgKG9uUmVzZXQpPVwib25SZXNldCgpXCJcbiAgICAgICAgKG9uU3VibWl0KT1cIm9uU3VibWl0KGRpYWxvZ3Byb2Nlc3NleHRyYSlcIj5cbiAgICAgIDwvZG8tYnV0dG9uLXN1Ym1pdD5cbiAgICA8L2Zvcm0+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbjxuZy10ZW1wbGF0ZSAjZGlhbG9ncHJvY2Vzc2V4dHJhIGxldC1kYXRhIGxldC1yZWY9XCJkaWFsb2dSZWZcIj5cbiAgPG5iLWNhcmQgYWNjZW50PVwie3tkaWFsb2dBY3Rpb24gPT09ICdEZWxldGUnID8gJ2RhbmdlcicgOiAnd2FybmluZyd9fVwiPlxuICAgIDxuYi1jYXJkLWhlYWRlcj57eyAnV2FybmluZycgfCB0cmFuc2xhdGV9fTwvbmItY2FyZC1oZWFkZXI+XG4gICAgPG5iLWNhcmQtYm9keT57eyBkYXRhIHwgdHJhbnNsYXRlfX08L25iLWNhcmQtYm9keT5cbiAgICA8bmItY2FyZC1mb290ZXI+XG4gICAgICA8ZG8tYnV0dG9uLXN1Ym1pdFxuICAgICAgICBbY29sTGFiZWxdPVwiMFwiXG4gICAgICAgIFtjb2xCdXR0b25dPVwiMTJcIlxuICAgICAgICBbc3VibWl0VGl0bGVdPVwiZGlhbG9nQWN0aW9uXCJcbiAgICAgICAgW3Jlc2V0VGl0bGVdPVwiJ0NhbmNlbCdcIlxuICAgICAgICBbZGlzYWJsZWRCdXR0b25dPVwiZGlzYWJsZWRcIlxuICAgICAgICAob25SZXNldCk9XCJyZWYuY2xvc2UoKVwiXG4gICAgICAgIChvblN1Ym1pdCk9XCJvblN1Ym1pdERpYWxvZyhyZWYpXCI+XG4gICAgICA8L2RvLWJ1dHRvbi1zdWJtaXQ+XG4gICAgPC9uYi1jYXJkLWZvb3Rlcj5cbiAgPC9uYi1jYXJkPlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==