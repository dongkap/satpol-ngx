import { Component, Inject } from '@angular/core';
import { AUTH_INDEXED_DB, SETTINGS_INDEXED_DB, ResponseCode, } from '@dongkap/do-core';
import { BaseFormComponent } from '@dongkap/do-shared';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
import * as i2 from "@nebular/theme";
import * as i3 from "@dongkap/do-shared";
import * as i4 from "@angular/forms";
export class SettingsPageComponent extends BaseFormComponent {
    constructor(injector, translate, themeService, settingsIndexedDB, authIndexedDB) {
        super(injector, {
            locale: [],
            theme: [],
        });
        this.injector = injector;
        this.translate = translate;
        this.themeService = themeService;
        this.settingsIndexedDB = settingsIndexedDB;
        this.authIndexedDB = authIndexedDB;
        this.dataTheme = [
            {
                id: 'theme',
                selected: false,
            },
        ];
        this.apiSelectLocale = this.api['master']['select-all-locale'];
    }
    ngOnInit() {
        this.onInit('security', 'get-settings');
    }
    onInit(serviceName, apiName) {
        this.loadingForm = true;
        this.exec(serviceName, apiName)
            .subscribe((success) => {
            this.loadingForm = false;
            this.localeCode = success['localeCode'];
            this.localeIdentifier = success['localeIdentifier'];
            this.localeIcon = success['localeIcon'] ? success['localeIcon'] : '';
            this.formGroup.get('locale').setValue({
                value: this.localeCode,
                label: this.localeIdentifier
            });
            let darkMode = [{
                    id: 'theme',
                    selected: false,
                }];
            if (success['theme'] === 'dark') {
                darkMode = [{
                        id: 'theme',
                        selected: true,
                    }];
            }
            this.formGroup.get('theme').setValue(darkMode);
            this.formGroup.markAsPristine();
            this.formGroup.markAsUntouched();
            this.formGroup.markAsPending();
        }, (error) => {
            this.loadingForm = true;
            if (error.respStatusMessage) {
                this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
            }
        });
    }
    onSubmit() {
        var _a, _b, _c, _d, _e, _f;
        if ((_a = this.formGroup.get('locale')) === null || _a === void 0 ? void 0 : _a.value['value']) {
            this.localeCode = (_b = this.formGroup.get('locale')) === null || _b === void 0 ? void 0 : _b.value['value'];
            this.localeIdentifier = (_c = this.formGroup.get('locale')) === null || _c === void 0 ? void 0 : _c.value['label'];
            this.localeIcon = (_d = this.formGroup.get('locale')) === null || _d === void 0 ? void 0 : _d.value['icon'];
        }
        let theme = 'default';
        if ((_e = this.formGroup.get('theme')) === null || _e === void 0 ? void 0 : _e.value) {
            theme = ((_f = this.formGroup.get('theme')) === null || _f === void 0 ? void 0 : _f.value[0].selected) ? 'dark' : 'default';
        }
        const data = {
            localeCode: this.localeCode,
            localeIdentifier: this.localeIdentifier,
            localeIcon: this.localeIcon,
            theme,
        };
        this.disabled = true;
        this.initProgress();
        this.setProgress(65);
        Promise.all([
            this.settingsIndexedDB.get('locale'),
            this.settingsIndexedDB.get('theme'),
        ]).then((current) => {
            this.exec('security', 'change-settings', data).subscribe((success) => {
                this.setProgress(95);
                this.disabled = false;
                this.formGroup.markAsPristine();
                this.formGroup.markAsUntouched();
                this.formGroup.markAsPending();
                if (success) {
                    if (success.respStatusCode === ResponseCode.OK_SCR002.toString()) {
                        this.changeTheme(theme);
                        if (current[0] !== this.localeCode) {
                            this.settingsIndexedDB.put('locale', this.localeCode).then(() => {
                                this.http.HTTP_AUTH(this.api['security']['get-menus']).subscribe((menus) => {
                                    Promise.all([
                                        this.authIndexedDB.putEnc('menus', JSON.stringify(menus['main'])),
                                        this.authIndexedDB.putEnc('extras', JSON.stringify(menus['extra'])),
                                    ]).then(() => {
                                        this.translate.getTranslation(this.localeCode).subscribe((lang) => {
                                            this.translate.use(this.localeCode);
                                            this.translate.setTranslation(this.localeCode, lang, true);
                                            this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
                                        });
                                    });
                                }, (error) => {
                                    this.toastr.showI18n('error.translate', false, null, 'warning');
                                });
                            });
                        }
                    }
                }
                this.doneProgress();
            }, (error) => {
                this.disabled = false;
                this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
                this.doneProgress();
            });
        });
    }
    changeTheme(theme) {
        this.settingsIndexedDB.put('theme', theme).then();
        this.themeService.changeTheme(theme);
    }
}
SettingsPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SettingsPageComponent, deps: [{ token: i0.Injector }, { token: i1.TranslateService }, { token: i2.NbThemeService }, { token: SETTINGS_INDEXED_DB }, { token: AUTH_INDEXED_DB }], target: i0.ɵɵFactoryTarget.Component });
SettingsPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: SettingsPageComponent, selector: "do-settings-page", usesInheritance: true, ngImport: i0, template: "<do-page-outlet [header]=\"'Settings'\">\n  <form [formGroup]=\"formGroup\" pagecontent>\n    <do-select\n      [name]=\"'locale'\"\n      [label]=\"'label.language'\"\n      [required]=\"true\"\n      [searchable]=\"false\"\n      [skeleton]=\"loadingForm\"\n      [api]=\"apiSelectLocale\"\n      formControlName=\"locale\">\n      <div *doContentSelect=\"let item\">\n        <span class=\"{{item.icon ? item.icon : localeIcon}}\"></span>\n        <span class=\"label-select\">{{item.label ? item.label : item}}</span>\n      </div>\n    </do-select>\n    <do-checkbox\n      [name]=\"'checkbox'\"\n      [label]=\"'label.dark-mode'\"\n      [data]=\"dataTheme\"\n      [skeleton]=\"loadingForm\"\n      formControlName=\"theme\">\n    </do-checkbox>\n  </form>\n  <div class=\"offset-sm-3 col-sm-9\" pagefooter>\n    <do-button\n      (onSubmit)=\"onSubmit()\"\n      [name]=\"'Update Settings'\"\n      [formGroupButton]=\"formGroup\"\n      [disabledButton]=\"disabled\"\n      [skeleton]=\"loadingForm\">\n    </do-button>\n  </div>\n</do-page-outlet>\n", styles: [".label-select{padding-left:.5rem}\n"], components: [{ type: i3.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i3.DoSelectComponent, selector: "do-select", inputs: ["placeholder", "colLabel", "colInput", "items", "multiple", "loading", "addTag", "closeOnSelect", "clearable", "searchable", "hideSelected", "minTermLength", "maxTermLength", "api", "limit", "offsetNextLoad", "queryParam"], outputs: ["onSelect", "onClear"] }, { type: i3.DoCheckboxComponent, selector: "do-checkbox", inputs: ["colLabel", "colInput", "data"], outputs: ["onChecked"] }, { type: i3.DoButtonComponent, selector: "do-button", inputs: ["formGroupButton", "name", "disabledButton", "type", "status", "size", "skeleton"], outputs: ["onSubmit"] }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i3.ContentSelectDirective, selector: "[doContentSelect]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SettingsPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-settings-page',
                    styleUrls: ['./settings-page.component.scss'],
                    templateUrl: './settings-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.TranslateService }, { type: i2.NbThemeService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [SETTINGS_INDEXED_DB]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [AUTH_INDEXED_DB]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MtcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1leHRyYS9zcmMvbGliL3NldHRpbmdzL3NldHRpbmdzLXBhZ2UuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tZXh0cmEvc3JjL2xpYi9zZXR0aW5ncy9zZXR0aW5ncy1wYWdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVksTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTVELE9BQU8sRUFFTCxlQUFlLEVBQ2YsbUJBQW1CLEVBQ25CLFlBQVksR0FDYixNQUFNLGtCQUFrQixDQUFDO0FBSTFCLE9BQU8sRUFBaUIsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7O0FBT3RFLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxpQkFBc0I7SUFhL0QsWUFDUyxRQUFrQixFQUNqQixTQUEyQixFQUMzQixZQUE0QixFQUNDLGlCQUEwQyxFQUM5QyxhQUF5QztRQUN4RSxLQUFLLENBQUMsUUFBUSxFQUFFO1lBQ2QsTUFBTSxFQUFFLEVBQUU7WUFDVixLQUFLLEVBQUUsRUFBRTtTQUNWLENBQUMsQ0FBQztRQVJFLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDakIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsaUJBQVksR0FBWixZQUFZLENBQWdCO1FBQ0Msc0JBQWlCLEdBQWpCLGlCQUFpQixDQUF5QjtRQUM5QyxrQkFBYSxHQUFiLGFBQWEsQ0FBNEI7UUFackUsY0FBUyxHQUFvQjtZQUNsQztnQkFDRSxFQUFFLEVBQUUsT0FBTztnQkFDWCxRQUFRLEVBQUUsS0FBSzthQUNoQjtTQUNGLENBQUM7UUFZRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQW1C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UyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7b0JBQzdDLFdBQVcsRUFBRSxnQ0FBZ0M7aUJBQzlDOzswQkFrQkksTUFBTTsyQkFBQyxtQkFBbUI7OzBCQUMxQixNQUFNOzJCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdG9yLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmJUaGVtZVNlcnZpY2UgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQge1xuICBJbmRleGVkREJFbmNGYWN0b3J5U2VydmljZSxcbiAgQVVUSF9JTkRFWEVEX0RCLFxuICBTRVRUSU5HU19JTkRFWEVEX0RCLFxuICBSZXNwb25zZUNvZGUsXG59IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgSHR0cEJhc2VNb2RlbCB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgQXBpQmFzZVJlc3BvbnNlIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBJbmRleGVkREJGYWN0b3J5U2VydmljZSB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgQ2hlY2tib3hNb2RlbCwgQmFzZUZvcm1Db21wb25lbnQgfSBmcm9tICdAZG9uZ2thcC9kby1zaGFyZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkby1zZXR0aW5ncy1wYWdlJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2V0dGluZ3MtcGFnZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vc2V0dGluZ3MtcGFnZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFNldHRpbmdzUGFnZUNvbXBvbmVudCBleHRlbmRzIEJhc2VGb3JtQ29tcG9uZW50PGFueT4gaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBhcGlTZWxlY3RMb2NhbGU6IEh0dHBCYXNlTW9kZWw7XG4gIHB1YmxpYyBsb2NhbGVJY29uOiBzdHJpbmc7XG4gIHByaXZhdGUgbG9jYWxlQ29kZTogYW55O1xuICBwcml2YXRlIGxvY2FsZUlkZW50aWZpZXI6IGFueTtcbiAgcHVibGljIGRhdGFUaGVtZTogQ2hlY2tib3hNb2RlbFtdID0gW1xuICAgIHtcbiAgICAgIGlkOiAndGhlbWUnLFxuICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSxcbiAgICBwcml2YXRlIHRoZW1lU2VydmljZTogTmJUaGVtZVNlcnZpY2UsXG4gICAgQEluamVjdChTRVRUSU5HU19JTkRFWEVEX0RCKSBwcml2YXRlIHNldHRpbmdzSW5kZXhlZERCOiBJbmRleGVkREJGYWN0b3J5U2VydmljZSxcbiAgICBASW5qZWN0KEFVVEhfSU5ERVhFRF9EQikgcHJpdmF0ZSBhdXRoSW5kZXhlZERCOiBJbmRleGVkREJFbmNGYWN0b3J5U2VydmljZSkge1xuICAgICAgc3VwZXIoaW5qZWN0b3IsIHtcbiAgICAgICAgbG9jYWxlOiBbXSxcbiAgICAgICAgdGhlbWU6IFtdLFxuICAgICAgfSk7XG4gICAgICB0aGlzLmFwaVNlbGVjdExvY2FsZSA9IHRoaXMuYXBpWydtYXN0ZXInXVsnc2VsZWN0LWFsbC1sb2NhbGUnXTtcbiAgICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5vbkluaXQoJ3NlY3VyaXR5JywgJ2dldC1zZXR0aW5ncycpO1xuICB9XG5cbiAgb25Jbml0KHNlcnZpY2VOYW1lOiBzdHJpbmcsIGFwaU5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMubG9hZGluZ0Zvcm0gPSB0cnVlO1xuICAgIHRoaXMuZXhlYyhzZXJ2aWNlTmFtZSwgYXBpTmFtZSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChzdWNjZXNzOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmdGb3JtID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5sb2NhbGVDb2RlID0gc3VjY2Vzc1snbG9jYWxlQ29kZSddO1xuICAgICAgICAgIHRoaXMubG9jYWxlSWRlbnRpZmllciA9IHN1Y2Nlc3NbJ2xvY2FsZUlkZW50aWZpZXInXTtcbiAgICAgICAgICB0aGlzLmxvY2FsZUljb24gPSBzdWNjZXNzWydsb2NhbGVJY29uJ10gPyBzdWNjZXNzWydsb2NhbGVJY29uJ10gOiAnJztcbiAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ2xvY2FsZScpLnNldFZhbHVlKHtcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLmxvY2FsZUNvZGUsXG4gICAgICAgICAgICBsYWJlbDogdGhpcy5sb2NhbGVJZGVudGlmaWVyXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbGV0IGRhcmtNb2RlOiBDaGVja2JveE1vZGVsW10gPSBbe1xuICAgICAgICAgICAgaWQ6ICd0aGVtZScsXG4gICAgICAgICAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgICAgICAgfV07XG4gICAgICAgICAgaWYgKHN1Y2Nlc3NbJ3RoZW1lJ10gPT09ICdkYXJrJykge1xuICAgICAgICAgICAgZGFya01vZGUgPSBbe1xuICAgICAgICAgICAgICBpZDogJ3RoZW1lJyxcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgICAgICAgICB9XTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCd0aGVtZScpLnNldFZhbHVlKGRhcmtNb2RlKTtcbiAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5tYXJrQXNQcmlzdGluZSgpO1xuICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLm1hcmtBc1VudG91Y2hlZCgpO1xuICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLm1hcmtBc1BlbmRpbmcoKTtcbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yOiBBcGlCYXNlUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmdGb3JtID0gdHJ1ZTtcbiAgICAgICAgICBpZiAoZXJyb3IucmVzcFN0YXR1c01lc3NhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMudG9hc3RyLnNob3dJMThuKGVycm9yLnJlc3BTdGF0dXNNZXNzYWdlW2Vycm9yLnJlc3BTdGF0dXNDb2RlXSwgdHJ1ZSwgbnVsbCwgJ2RhbmdlcicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICk7XG4gIH1cblxuICBvblN1Ym1pdCgpIHtcbiAgICBpZiAodGhpcy5mb3JtR3JvdXAuZ2V0KCdsb2NhbGUnKT8udmFsdWVbJ3ZhbHVlJ10pIHtcbiAgICAgIHRoaXMubG9jYWxlQ29kZSA9IHRoaXMuZm9ybUdyb3VwLmdldCgnbG9jYWxlJyk/LnZhbHVlWyd2YWx1ZSddO1xuICAgICAgdGhpcy5sb2NhbGVJZGVudGlmaWVyID0gdGhpcy5mb3JtR3JvdXAuZ2V0KCdsb2NhbGUnKT8udmFsdWVbJ2xhYmVsJ107XG4gICAgICB0aGlzLmxvY2FsZUljb24gPSB0aGlzLmZvcm1Hcm91cC5nZXQoJ2xvY2FsZScpPy52YWx1ZVsnaWNvbiddO1xuICAgIH1cbiAgICBsZXQgdGhlbWU6ICdkYXJrJyB8ICdkZWZhdWx0JyB8ICdjb3NtaWMnIHwgJ2NvcnBvcmF0ZScgPSAnZGVmYXVsdCc7XG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwLmdldCgndGhlbWUnKT8udmFsdWUpIHtcbiAgICAgIHRoZW1lID0gdGhpcy5mb3JtR3JvdXAuZ2V0KCd0aGVtZScpPy52YWx1ZVswXS5zZWxlY3RlZCA/ICdkYXJrJyA6ICdkZWZhdWx0JztcbiAgICB9XG4gICAgY29uc3QgZGF0YTogYW55ID0ge1xuICAgICAgbG9jYWxlQ29kZTogdGhpcy5sb2NhbGVDb2RlLFxuICAgICAgbG9jYWxlSWRlbnRpZmllcjogdGhpcy5sb2NhbGVJZGVudGlmaWVyLFxuICAgICAgbG9jYWxlSWNvbjogdGhpcy5sb2NhbGVJY29uLFxuICAgICAgdGhlbWUsXG4gICAgfTtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLmluaXRQcm9ncmVzcygpO1xuICAgIHRoaXMuc2V0UHJvZ3Jlc3MoNjUpO1xuICAgIFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMuc2V0dGluZ3NJbmRleGVkREIuZ2V0KCdsb2NhbGUnKSxcbiAgICAgIHRoaXMuc2V0dGluZ3NJbmRleGVkREIuZ2V0KCd0aGVtZScpLFxuICAgIF0pLnRoZW4oKGN1cnJlbnQ6IGFueVtdKSA9PiB7XG4gICAgICB0aGlzLmV4ZWMoJ3NlY3VyaXR5JywgJ2NoYW5nZS1zZXR0aW5ncycsIGRhdGEpLnN1YnNjcmliZShcbiAgICAgICAgKHN1Y2Nlc3M6IEFwaUJhc2VSZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0UHJvZ3Jlc3MoOTUpO1xuICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5tYXJrQXNQcmlzdGluZSgpO1xuICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLm1hcmtBc1VudG91Y2hlZCgpO1xuICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLm1hcmtBc1BlbmRpbmcoKTtcbiAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgaWYgKHN1Y2Nlc3MucmVzcFN0YXR1c0NvZGUgPT09IFJlc3BvbnNlQ29kZS5PS19TQ1IwMDIudG9TdHJpbmcoKSkge1xuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVRoZW1lKHRoZW1lKTtcbiAgICAgICAgICAgICAgaWYgKGN1cnJlbnRbMF0gIT09IHRoaXMubG9jYWxlQ29kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3NJbmRleGVkREIucHV0KCdsb2NhbGUnLCB0aGlzLmxvY2FsZUNvZGUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5odHRwLkhUVFBfQVVUSCh0aGlzLmFwaVsnc2VjdXJpdHknXVsnZ2V0LW1lbnVzJ10pLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgKG1lbnVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhJbmRleGVkREIucHV0RW5jKCdtZW51cycsIEpTT04uc3RyaW5naWZ5KG1lbnVzWydtYWluJ10pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aEluZGV4ZWREQi5wdXRFbmMoJ2V4dHJhcycsIEpTT04uc3RyaW5naWZ5KG1lbnVzWydleHRyYSddKSksXG4gICAgICAgICAgICAgICAgICAgICAgXSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZS5nZXRUcmFuc2xhdGlvbih0aGlzLmxvY2FsZUNvZGUpLnN1YnNjcmliZSgobGFuZzogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlLnVzZSh0aGlzLmxvY2FsZUNvZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZS5zZXRUcmFuc2xhdGlvbih0aGlzLmxvY2FsZUNvZGUsIGxhbmcsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvYXN0ci5zaG93STE4bihzdWNjZXNzLnJlc3BTdGF0dXNNZXNzYWdlW3N1Y2Nlc3MucmVzcFN0YXR1c0NvZGVdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9hc3RyLnNob3dJMThuKCdlcnJvci50cmFuc2xhdGUnLCBmYWxzZSwgbnVsbCwgJ3dhcm5pbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5kb25lUHJvZ3Jlc3MoKTtcbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yOiBBcGlCYXNlUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudG9hc3RyLnNob3dJMThuKGVycm9yLnJlc3BTdGF0dXNNZXNzYWdlW2Vycm9yLnJlc3BTdGF0dXNDb2RlXSwgdHJ1ZSwgbnVsbCwgJ2RhbmdlcicpO1xuICAgICAgICAgICAgdGhpcy5kb25lUHJvZ3Jlc3MoKTtcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBjaGFuZ2VUaGVtZSh0aGVtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zZXR0aW5nc0luZGV4ZWREQi5wdXQoJ3RoZW1lJywgdGhlbWUpLnRoZW4oKTtcbiAgICB0aGlzLnRoZW1lU2VydmljZS5jaGFuZ2VUaGVtZSh0aGVtZSk7XG4gIH1cblxufVxuIiwiPGRvLXBhZ2Utb3V0bGV0IFtoZWFkZXJdPVwiJ1NldHRpbmdzJ1wiPlxuICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiIHBhZ2Vjb250ZW50PlxuICAgIDxkby1zZWxlY3RcbiAgICAgIFtuYW1lXT1cIidsb2NhbGUnXCJcbiAgICAgIFtsYWJlbF09XCInbGFiZWwubGFuZ3VhZ2UnXCJcbiAgICAgIFtyZXF1aXJlZF09XCJ0cnVlXCJcbiAgICAgIFtzZWFyY2hhYmxlXT1cImZhbHNlXCJcbiAgICAgIFtza2VsZXRvbl09XCJsb2FkaW5nRm9ybVwiXG4gICAgICBbYXBpXT1cImFwaVNlbGVjdExvY2FsZVwiXG4gICAgICBmb3JtQ29udHJvbE5hbWU9XCJsb2NhbGVcIj5cbiAgICAgIDxkaXYgKmRvQ29udGVudFNlbGVjdD1cImxldCBpdGVtXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwie3tpdGVtLmljb24gPyBpdGVtLmljb24gOiBsb2NhbGVJY29ufX1cIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWwtc2VsZWN0XCI+e3tpdGVtLmxhYmVsID8gaXRlbS5sYWJlbCA6IGl0ZW19fTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZG8tc2VsZWN0PlxuICAgIDxkby1jaGVja2JveFxuICAgICAgW25hbWVdPVwiJ2NoZWNrYm94J1wiXG4gICAgICBbbGFiZWxdPVwiJ2xhYmVsLmRhcmstbW9kZSdcIlxuICAgICAgW2RhdGFdPVwiZGF0YVRoZW1lXCJcbiAgICAgIFtza2VsZXRvbl09XCJsb2FkaW5nRm9ybVwiXG4gICAgICBmb3JtQ29udHJvbE5hbWU9XCJ0aGVtZVwiPlxuICAgIDwvZG8tY2hlY2tib3g+XG4gIDwvZm9ybT5cbiAgPGRpdiBjbGFzcz1cIm9mZnNldC1zbS0zIGNvbC1zbS05XCIgcGFnZWZvb3Rlcj5cbiAgICA8ZG8tYnV0dG9uXG4gICAgICAob25TdWJtaXQpPVwib25TdWJtaXQoKVwiXG4gICAgICBbbmFtZV09XCInVXBkYXRlIFNldHRpbmdzJ1wiXG4gICAgICBbZm9ybUdyb3VwQnV0dG9uXT1cImZvcm1Hcm91cFwiXG4gICAgICBbZGlzYWJsZWRCdXR0b25dPVwiZGlzYWJsZWRcIlxuICAgICAgW3NrZWxldG9uXT1cImxvYWRpbmdGb3JtXCI+XG4gICAgPC9kby1idXR0b24+XG4gIDwvZGl2PlxuPC9kby1wYWdlLW91dGxldD5cbiJdfQ==