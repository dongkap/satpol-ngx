import { Component, ViewChild } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { SystemAuthority, ResponseCode } from '@dongkap/do-core';
import { BaseFormComponent } from '@dongkap/do-shared';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../services/role.service";
import * as i3 from "@dongkap/do-shared";
import * as i4 from "@nebular/theme";
import * as i5 from "./main/role-main-page.component";
import * as i6 from "./extra/role-extra-page.component";
import * as i7 from "@angular/forms";
import * as i8 from "@ngx-translate/core";
;
export class RoleAddEditPageComponent extends BaseFormComponent {
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
RoleAddEditPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: RoleAddEditPageComponent, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: i1.ActivatedRoute }, { token: i2.RoleService }], target: i0.ɵɵFactoryTarget.Component });
RoleAddEditPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: RoleAddEditPageComponent, selector: "do-language-add-edit-page", viewQueries: [{ propertyName: "mainMenu", first: true, predicate: ["mainRole"], descendants: true, static: true }, { propertyName: "extraMenu", first: true, predicate: ["extraRole"], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: "<do-page-outlet [header]=\"'header.'+action+'-role'\" [url]=\"'/app/mgmt/role'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <form [formGroup]=\"formGroup\">\n        <do-input-text\n          [name]=\"'authority'\"\n          [label]=\"'Authority'\"\n          [required]=\"true\"\n          formControlName=\"authority\">\n        </do-input-text>\n        <do-input-text\n          [name]=\"'level'\"\n          [label]=\"'Level'\"\n          [required]=\"true\"\n          [type]=\"'number'\"\n          formControlName=\"level\">\n        </do-input-text>\n        <do-input-text\n          [name]=\"'description'\"\n          [label]=\"'Description'\"\n          [required]=\"true\"\n          formControlName=\"description\">\n        </do-input-text>\n        <do-select\n          [name]=\"'group'\"\n          [label]=\"'Group'\"\n          [required]=\"true\"\n          [searchable]=\"false\"\n          [api]=\"apiSelectGroup\"\n          formControlName=\"group\">\n        </do-select>\n      </form>\n    </div>\n    <div class=\"col-md-12 col-lg-12\">\n      <nb-tabset fullWidth (changeTab)=\"toggleLoadingAnimation($event)\">\n        <nb-tab tabId=\"main\" tabTitle=\"{{'tab.main-menu' | translate}}\" [nbSpinner]=\"loading\" nbSpinnerStatus=\"info\" nbSpinnerSize=\"giant\">\n          <do-role-main-page (onSelect)=\"onSelectMain($event)\" #mainRole></do-role-main-page>\n        </nb-tab>\n        <nb-tab tabId=\"extra\" tabTitle=\"{{'tab.extra-menu' | translate}}\" [lazyLoad]=\"true\" [nbSpinner]=\"loading\" nbSpinnerStatus=\"info\" nbSpinnerSize=\"giant\">\n          <do-role-extra-page (onSelect)=\"onSelectExtra($event)\" #extraRole></do-role-extra-page>\n        </nb-tab>\n      </nb-tabset>\n    </div>\n  </div>\n  <do-button-submit\n    [submitTitle]=\"action\"\n    [resetTitle]=\"'Cancel'\"\n    [formGroupButton]=\"formGroup\"\n    [disabledButton]=\"disabled\"\n    (onReset)=\"onReset()\"\n    (onSubmit)=\"onSubmit()\"\n    pagefooter>\n  </do-button-submit>\n</do-page-outlet>\n", styles: [".nb-theme-default :host nb-tab{flex:1;padding-top:1.5rem!important;padding-left:.25rem!important}.nb-theme-dark :host nb-tab{flex:1;padding-top:1.5rem!important;padding-left:.25rem!important}.nb-theme-cosmic :host nb-tab{flex:1;padding-top:1.5rem!important;padding-left:.25rem!important}.nb-theme-corporate :host nb-tab{flex:1;padding-top:1.5rem!important;padding-left:.25rem!important}\n"], components: [{ type: i3.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i3.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type", "togglePassword", "showPassword"] }, { type: i3.DoSelectComponent, selector: "do-select", inputs: ["placeholder", "colLabel", "colInput", "items", "multiple", "loading", "addTag", "closeOnSelect", "clearable", "searchable", "hideSelected", "minTermLength", "maxTermLength", "api", "limit", "offsetNextLoad", "queryParam"], outputs: ["onSelect", "onClear"] }, { type: i4.NbTabsetComponent, selector: "nb-tabset", inputs: ["fullWidth", "routeParam"], outputs: ["changeTab"] }, { type: i4.NbTabComponent, selector: "nb-tab", inputs: ["badgeStatus", "badgeDot", "disabled", "responsive", "active", "lazyLoad", "tabTitle", "tabId", "tabIcon", "route", "badgeText", "badgePosition"] }, { type: i5.RoleMainPageComponent, selector: "do-role-main-page", outputs: ["onSelect"] }, { type: i6.RoleExtraPageComponent, selector: "do-role-extra-page", outputs: ["onSelect"] }, { type: i3.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i7.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i7.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i7.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i7.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i7.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i7.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i4.NbSpinnerDirective, selector: "[nbSpinner]", inputs: ["nbSpinnerStatus", "nbSpinnerSize", "nbSpinner", "nbSpinnerMessage"] }], pipes: { "translate": i8.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: RoleAddEditPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-language-add-edit-page',
                    styleUrls: ['./role-add-edit-page.component.scss'],
                    templateUrl: './role-add-edit-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: i1.ActivatedRoute }, { type: i2.RoleService }]; }, propDecorators: { mainMenu: [{
                type: ViewChild,
                args: ['mainRole', { static: true }]
            }], extraMenu: [{
                type: ViewChild,
                args: ['extraRole', { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZS1hZGQtZWRpdC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXN5cy9zcmMvbGliL3JvbGUvYWRkLWVkaXQvcm9sZS1hZGQtZWRpdC1wYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXN5cy9zcmMvbGliL3JvbGUvYWRkLWVkaXQvcm9sZS1hZGQtZWRpdC1wYWdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVksU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSS9ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQW1CLGVBQWUsRUFBaUIsWUFBWSxFQUFhLE1BQU0sa0JBQWtCLENBQUM7QUFDNUcsT0FBTyxFQUFFLGlCQUFpQixFQUFpQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7O0FBTC9CLENBQUM7QUFleEMsTUFBTSxPQUFPLHdCQUF5QixTQUFRLGlCQUFzQjtJQWlCbEUsWUFDUyxRQUFrQixFQUNqQixNQUFjLEVBQ2QsS0FBcUIsRUFDckIsV0FBd0I7O1FBQ2hDLEtBQUssQ0FBQyxRQUFRLEVBQ1o7WUFDRSxTQUFTLEVBQUUsRUFBRTtZQUNiLEtBQUssRUFBRSxFQUFFO1lBQ1QsV0FBVyxFQUFFLEVBQUU7WUFDZixLQUFLLEVBQUUsRUFBRTtZQUNULFNBQVMsRUFBRSxFQUFFO1lBQ2IsVUFBVSxFQUFFLEVBQUU7U0FDZixDQUFDLENBQUM7UUFaRSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2pCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQWxCM0IsV0FBTSxHQUFtQixLQUFLLENBQUM7UUFDL0IsZ0JBQVcs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O3NIQWpLVSx3QkFBd0I7MEdBQXhCLHdCQUF3QixtVENoQnJDLCtnRUFzREE7NEZEdENhLHdCQUF3QjtrQkFMcEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxTQUFTLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQztvQkFDbEQsV0FBVyxFQUFFLHFDQUFxQztpQkFDbkQ7MktBZTBDLFFBQVE7c0JBQWhELFNBQVM7dUJBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFDRyxTQUFTO3NCQUFsRCxTQUFTO3VCQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdG9yLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnOztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXBpQmFzZVJlc3BvbnNlLCBTeXN0ZW1BdXRob3JpdHksIEh0dHBCYXNlTW9kZWwsIFJlc3BvbnNlQ29kZSwgUm9sZU1vZGVsIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBCYXNlRm9ybUNvbXBvbmVudCwgQ2hlY2tib3hNb2RlbCB9IGZyb20gJ0Bkb25na2FwL2RvLXNoYXJlZCc7XG5pbXBvcnQgeyBSb2xlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3JvbGUuc2VydmljZSc7XG5pbXBvcnQgeyBSb2xlTWFpblBhZ2VDb21wb25lbnQgfSBmcm9tICcuL21haW4vcm9sZS1tYWluLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFJvbGVFeHRyYVBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2V4dHJhL3JvbGUtZXh0cmEtcGFnZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkby1sYW5ndWFnZS1hZGQtZWRpdC1wYWdlJyxcbiAgc3R5bGVVcmxzOiBbJy4vcm9sZS1hZGQtZWRpdC1wYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9yb2xlLWFkZC1lZGl0LXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBSb2xlQWRkRWRpdFBhZ2VDb21wb25lbnQgZXh0ZW5kcyBCYXNlRm9ybUNvbXBvbmVudDxhbnk+IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgYXBpU2VsZWN0R3JvdXA6IEh0dHBCYXNlTW9kZWw7XG4gIHB1YmxpYyBhY3Rpb246ICdBZGQnIHwgJ0VkaXQnID0gJ0FkZCc7XG4gIHB1YmxpYyBkYXRhRGVmYXVsdDogQ2hlY2tib3hNb2RlbFtdID0gW1xuICAgIHtcbiAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICB9LFxuICBdO1xuICBwdWJsaWMgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgdGFiOiBzdHJpbmcgPSAnbWFpbic7XG4gIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xuICBwcml2YXRlIG1haW5EYXRhOiBhbnlbXSA9IFtdO1xuICBwcml2YXRlIGV4dHJhRGF0YTogYW55W10gPSBbXTtcbiAgQFZpZXdDaGlsZCgnbWFpblJvbGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBtYWluTWVudTogUm9sZU1haW5QYWdlQ29tcG9uZW50O1xuICBAVmlld0NoaWxkKCdleHRyYVJvbGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBleHRyYU1lbnU6IFJvbGVFeHRyYVBhZ2VDb21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgcm9sZVNlcnZpY2U6IFJvbGVTZXJ2aWNlKSB7XG4gICAgc3VwZXIoaW5qZWN0b3IsXG4gICAgICB7XG4gICAgICAgIGF1dGhvcml0eTogW10sXG4gICAgICAgIGxldmVsOiBbXSxcbiAgICAgICAgZGVzY3JpcHRpb246IFtdLFxuICAgICAgICBncm91cDogW10sXG4gICAgICAgIG1haW5NZW51czogW10sXG4gICAgICAgIGV4dHJhTWVudXM6IFtdLFxuICAgICAgfSk7XG4gICAgdGhpcy5hcGlTZWxlY3RHcm91cCA9IHRoaXMuYXBpWydzZWN1cml0eSddWydzZWxlY3QtZ3JvdXAnXTtcbiAgICBpZiAoKHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zWydhY3Rpb24nXSA9PT0gJ2VkaXQnKSkge1xuICAgICAgdGhpcy5hY3Rpb24gPSAnRWRpdCc7XG4gICAgICBpZiAoIXRoaXMucm9sZVNlcnZpY2UuZ2V0Um9sZSgpKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FwcC9tZ210L3JvbGUnXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnJvbGVTZXJ2aWNlLmdldFJvbGUoKSAmJiAodGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ2FjdGlvbiddID09PSAnZWRpdCcpKSB7XG4gICAgICB0aGlzLnRpdGxlID0gdGhpcy5yb2xlU2VydmljZS5nZXRSb2xlKCkuZGVzY3JpcHRpb247XG4gICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ2F1dGhvcml0eScpLnNldFZhbHVlKHRoaXMucm9sZVNlcnZpY2UuZ2V0Um9sZSgpLmF1dGhvcml0eSk7XG4gICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ2F1dGhvcml0eScpLmRpc2FibGUoKTtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnbGV2ZWwnKS5zZXRWYWx1ZSh0aGlzLnJvbGVTZXJ2aWNlLmdldFJvbGUoKS5sZXZlbCk7XG4gICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ2Rlc2NyaXB0aW9uJykuc2V0VmFsdWUodGhpcy5yb2xlU2VydmljZS5nZXRSb2xlKCkuZGVzY3JpcHRpb24pO1xuICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdncm91cCcpLnNldFZhbHVlKHtcbiAgICAgICAgdmFsdWU6IHRoaXMucm9sZVNlcnZpY2UuZ2V0Um9sZSgpLmdyb3VwPy5jb2RlLFxuICAgICAgICBsYWJlbDogdGhpcy5yb2xlU2VydmljZS5nZXRSb2xlKCkuZ3JvdXA/Lm5hbWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cblxuICBvblJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FwcC9tZ210L3JvbGUnXSk7XG4gIH1cblxuICBvblN1Ym1pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBncm91cDogU3lzdGVtQXV0aG9yaXR5ID0gbmV3IFN5c3RlbUF1dGhvcml0eSgpO1xuICAgIGlmICh0aGlzLmZvcm1Hcm91cC5nZXQoJ2dyb3VwJykudmFsdWVbJ3ZhbHVlJ10pIHtcbiAgICAgIGdyb3VwLmNvZGUgPSB0aGlzLmZvcm1Hcm91cC5nZXQoJ2dyb3VwJykudmFsdWVbJ3ZhbHVlJ107XG4gICAgICBncm91cC5uYW1lID0gdGhpcy5mb3JtR3JvdXAuZ2V0KCdncm91cCcpLnZhbHVlWydsYWJlbCddO1xuICAgIH1cbiAgICBjb25zdCByb2xlOiBSb2xlTW9kZWwgPSB7XG4gICAgICBhdXRob3JpdHk6IHRoaXMuZm9ybUdyb3VwLmdldCgnYXV0aG9yaXR5JykudmFsdWUsXG4gICAgICBsZXZlbDogdGhpcy5mb3JtR3JvdXAuZ2V0KCdsZXZlbCcpLnZhbHVlLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZm9ybUdyb3VwLmdldCgnZGVzY3JpcHRpb24nKS52YWx1ZSxcbiAgICAgIGdyb3VwLFxuICAgIH07XG4gICAgY29uc3QgbWFpbjogYW55W10gPSBbXTtcbiAgICB0aGlzLm1haW5EYXRhLmZvckVhY2godmFsID0+IHtcbiAgICAgIG1haW4ucHVzaCh2YWxbJ2lkJ10pO1xuICAgICAgaWYgKHZhbFsncGFyZW50TWVudSddWydpZCddKSB7XG4gICAgICAgIGlmICghbWFpbi5pbmNsdWRlcyh2YWxbJ3BhcmVudE1lbnUnXVsnaWQnXSkpIHtcbiAgICAgICAgICBtYWluLnB1c2godmFsWydwYXJlbnRNZW51J11bJ2lkJ10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgZXh0cmE6IGFueVtdID0gW107XG4gICAgdGhpcy5leHRyYURhdGEuZm9yRWFjaCh2YWwgPT4ge1xuICAgICAgZXh0cmEucHVzaCh2YWxbJ2lkJ10pO1xuICAgICAgaWYgKHZhbFsncGFyZW50TWVudSddWydpZCddKSB7XG4gICAgICAgIGlmICghZXh0cmEuaW5jbHVkZXModmFsWydwYXJlbnRNZW51J11bJ2lkJ10pKSB7XG4gICAgICAgICAgZXh0cmEucHVzaCh2YWxbJ3BhcmVudE1lbnUnXVsnaWQnXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBkYXRhOiBhbnkgPSB7XG4gICAgICByb2xlLFxuICAgICAgbWFpbixcbiAgICAgIGV4dHJhXG4gICAgfTtcbiAgICAoc3VwZXIub25TdWJtaXQoZGF0YSwgJ3NlY3VyaXR5JywgJ3Bvc3QtZnVuY3Rpb24tcm9sZScpICBhcyBPYnNlcnZhYmxlPEFwaUJhc2VSZXNwb25zZT4pXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3BTdGF0dXNDb2RlID09PSBSZXNwb25zZUNvZGUuT0tfREVGQVVMVC50b1N0cmluZygpKSB7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL21nbXQvcm9sZSddKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICB0b2dnbGVMb2FkaW5nQW5pbWF0aW9uKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLnRhYiA9IGV2ZW50LnRhYklkO1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgaWYgKHRoaXMudGFiID09PSAnbWFpbicpIHtcbiAgICAgIGlmICh0aGlzLnJvbGVTZXJ2aWNlLmdldFJvbGUoKSAmJiB0aGlzLmFjdGlvbiA9PT0gJ0VkaXQnKSB7XG4gICAgICAgIHRoaXMubWFpbk1lbnUubG9hZERhdGFNZW51KHRoaXMubWFpbkRhdGEpXG4gICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKHZhbHVlOiBhbnlbXSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAodGhpcy5tYWluRGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgdGhpcy5tYWluRGF0YSA9IHZhbHVlO1xuICAgICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ21haW5NZW51cycpLnNldFZhbHVlKHRoaXMubWFpbkRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubWFpbk1lbnUuaW5pdERhdGFNZW51KHRoaXMubWFpbkRhdGEpXG4gICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5yb2xlU2VydmljZS5nZXRSb2xlKCkgJiYgdGhpcy5hY3Rpb24gPT09ICdFZGl0Jykge1xuICAgICAgICB0aGlzLmV4dHJhTWVudS5sb2FkRGF0YU1lbnUodGhpcy5leHRyYURhdGEpXG4gICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKHZhbHVlOiBhbnlbXSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAodGhpcy5leHRyYURhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgIHRoaXMuZXh0cmFEYXRhID0gdmFsdWU7XG4gICAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnZXh0cmFNZW51cycpLnNldFZhbHVlKHRoaXMuZXh0cmFEYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmV4dHJhTWVudS5pbml0RGF0YU1lbnUodGhpcy5leHRyYURhdGEpXG4gICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uU2VsZWN0TWFpbihkYXRhczogYW55W10pIHtcbiAgICBpZiAodGhpcy5tYWluRGF0YS5sZW5ndGggIT09IGRhdGFzLmxlbmd0aCkge1xuICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdtYWluTWVudXMnKS5tYXJrQXNEaXJ0eSgpO1xuICAgIH1cbiAgICB0aGlzLm1haW5EYXRhID0gW107XG4gICAgdGhpcy5tYWluRGF0YSA9IFsuLi50aGlzLm1haW5EYXRhLCAuLi5kYXRhc107XG4gICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdtYWluTWVudXMnKS5zZXRWYWx1ZSh0aGlzLm1haW5EYXRhKTtcbiAgfVxuXG4gIG9uU2VsZWN0RXh0cmEoZGF0YXM6IGFueVtdKSB7XG4gICAgaWYgKHRoaXMuZXh0cmFEYXRhLmxlbmd0aCAhPT0gZGF0YXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ2V4dHJhTWVudXMnKS5tYXJrQXNEaXJ0eSgpO1xuICAgIH1cbiAgICB0aGlzLmV4dHJhRGF0YSA9IFtdO1xuICAgIHRoaXMuZXh0cmFEYXRhID0gWy4uLnRoaXMuZXh0cmFEYXRhLCAuLi5kYXRhc107XG4gICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdleHRyYU1lbnVzJykuc2V0VmFsdWUodGhpcy5leHRyYURhdGEpO1xuICB9XG5cbn1cbiIsIjxkby1wYWdlLW91dGxldCBbaGVhZGVyXT1cIidoZWFkZXIuJythY3Rpb24rJy1yb2xlJ1wiIFt1cmxdPVwiJy9hcHAvbWdtdC9yb2xlJ1wiPlxuICA8ZGl2IGNsYXNzPVwicm93XCIgcGFnZWNvbnRlbnQ+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBjb2wtbGctMTJcIj5cbiAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCI+XG4gICAgICAgIDxkby1pbnB1dC10ZXh0XG4gICAgICAgICAgW25hbWVdPVwiJ2F1dGhvcml0eSdcIlxuICAgICAgICAgIFtsYWJlbF09XCInQXV0aG9yaXR5J1wiXG4gICAgICAgICAgW3JlcXVpcmVkXT1cInRydWVcIlxuICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImF1dGhvcml0eVwiPlxuICAgICAgICA8L2RvLWlucHV0LXRleHQ+XG4gICAgICAgIDxkby1pbnB1dC10ZXh0XG4gICAgICAgICAgW25hbWVdPVwiJ2xldmVsJ1wiXG4gICAgICAgICAgW2xhYmVsXT1cIidMZXZlbCdcIlxuICAgICAgICAgIFtyZXF1aXJlZF09XCJ0cnVlXCJcbiAgICAgICAgICBbdHlwZV09XCInbnVtYmVyJ1wiXG4gICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwibGV2ZWxcIj5cbiAgICAgICAgPC9kby1pbnB1dC10ZXh0PlxuICAgICAgICA8ZG8taW5wdXQtdGV4dFxuICAgICAgICAgIFtuYW1lXT1cIidkZXNjcmlwdGlvbidcIlxuICAgICAgICAgIFtsYWJlbF09XCInRGVzY3JpcHRpb24nXCJcbiAgICAgICAgICBbcmVxdWlyZWRdPVwidHJ1ZVwiXG4gICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgPC9kby1pbnB1dC10ZXh0PlxuICAgICAgICA8ZG8tc2VsZWN0XG4gICAgICAgICAgW25hbWVdPVwiJ2dyb3VwJ1wiXG4gICAgICAgICAgW2xhYmVsXT1cIidHcm91cCdcIlxuICAgICAgICAgIFtyZXF1aXJlZF09XCJ0cnVlXCJcbiAgICAgICAgICBbc2VhcmNoYWJsZV09XCJmYWxzZVwiXG4gICAgICAgICAgW2FwaV09XCJhcGlTZWxlY3RHcm91cFwiXG4gICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiZ3JvdXBcIj5cbiAgICAgICAgPC9kby1zZWxlY3Q+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBjb2wtbGctMTJcIj5cbiAgICAgIDxuYi10YWJzZXQgZnVsbFdpZHRoIChjaGFuZ2VUYWIpPVwidG9nZ2xlTG9hZGluZ0FuaW1hdGlvbigkZXZlbnQpXCI+XG4gICAgICAgIDxuYi10YWIgdGFiSWQ9XCJtYWluXCIgdGFiVGl0bGU9XCJ7eyd0YWIubWFpbi1tZW51JyB8IHRyYW5zbGF0ZX19XCIgW25iU3Bpbm5lcl09XCJsb2FkaW5nXCIgbmJTcGlubmVyU3RhdHVzPVwiaW5mb1wiIG5iU3Bpbm5lclNpemU9XCJnaWFudFwiPlxuICAgICAgICAgIDxkby1yb2xlLW1haW4tcGFnZSAob25TZWxlY3QpPVwib25TZWxlY3RNYWluKCRldmVudClcIiAjbWFpblJvbGU+PC9kby1yb2xlLW1haW4tcGFnZT5cbiAgICAgICAgPC9uYi10YWI+XG4gICAgICAgIDxuYi10YWIgdGFiSWQ9XCJleHRyYVwiIHRhYlRpdGxlPVwie3sndGFiLmV4dHJhLW1lbnUnIHwgdHJhbnNsYXRlfX1cIiBbbGF6eUxvYWRdPVwidHJ1ZVwiIFtuYlNwaW5uZXJdPVwibG9hZGluZ1wiIG5iU3Bpbm5lclN0YXR1cz1cImluZm9cIiBuYlNwaW5uZXJTaXplPVwiZ2lhbnRcIj5cbiAgICAgICAgICA8ZG8tcm9sZS1leHRyYS1wYWdlIChvblNlbGVjdCk9XCJvblNlbGVjdEV4dHJhKCRldmVudClcIiAjZXh0cmFSb2xlPjwvZG8tcm9sZS1leHRyYS1wYWdlPlxuICAgICAgICA8L25iLXRhYj5cbiAgICAgIDwvbmItdGFic2V0PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRvLWJ1dHRvbi1zdWJtaXRcbiAgICBbc3VibWl0VGl0bGVdPVwiYWN0aW9uXCJcbiAgICBbcmVzZXRUaXRsZV09XCInQ2FuY2VsJ1wiXG4gICAgW2Zvcm1Hcm91cEJ1dHRvbl09XCJmb3JtR3JvdXBcIlxuICAgIFtkaXNhYmxlZEJ1dHRvbl09XCJkaXNhYmxlZFwiXG4gICAgKG9uUmVzZXQpPVwib25SZXNldCgpXCJcbiAgICAob25TdWJtaXQpPVwib25TdWJtaXQoKVwiXG4gICAgcGFnZWZvb3Rlcj5cbiAgPC9kby1idXR0b24tc3VibWl0PlxuPC9kby1wYWdlLW91dGxldD5cbiJdfQ==