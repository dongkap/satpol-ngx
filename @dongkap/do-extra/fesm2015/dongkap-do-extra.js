import * as i0 from '@angular/core';
import { Component, Inject, NgModule } from '@angular/core';
import * as i2$1 from '@angular/forms';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i1$1 from '@nebular/theme';
import { NbCardModule, NbAlertModule, NbIconModule, NbButtonModule, NbAccordionModule, NbDialogModule } from '@nebular/theme';
import * as i3 from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { DoThemeModule } from '@dongkap/do-theme';
import * as i2 from '@dongkap/do-shared';
import { BaseFormComponent, BaseComponent, DoInputModule, DoCheckBoxModule, DoButtonModule, DoBaseModule, DoEditorModule, DoSelectModule, DoDatePickerModule, DoImageModule } from '@dongkap/do-shared';
import { takeUntil } from 'rxjs/operators';
import * as i6 from '@dongkap/do-core';
import { Pattern, EncryptionService, OAUTH_INFO, ResponseCode, SETTINGS_INDEXED_DB, AUTH_INDEXED_DB, USER_SERVICE, PROFILE_INDEXED_DB } from '@dongkap/do-core';
import * as i1 from '@angular/router';
import { RouterModule } from '@angular/router';
import * as i1$2 from '@dongkap/do-auth';
import { AuthTokenService, AuthGuardChildService } from '@dongkap/do-auth';
import * as i2$2 from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs';

class ChangePasswordPageComponent extends BaseFormComponent {
    constructor(injector) {
        super(injector, {
            password: [],
            newPassword: [],
            confirmPassword: [],
        });
        this.injector = injector;
        this.passwordPattern = Pattern.PASSWORD_MEDIUM;
        this.enc = injector.get(EncryptionService);
        this.oauthResource = injector.get(OAUTH_INFO);
    }
    onSubmit() {
        const data = {
            password: this.enc.encryptAES(this.oauthResource['aes_key'], this.formGroup.get('password').value),
            newPassword: this.enc.encryptAES(this.oauthResource['aes_key'], this.formGroup.get('newPassword').value),
            confirmPassword: this.enc.encryptAES(this.oauthResource['aes_key'], this.formGroup.get('confirmPassword').value),
        };
        super.onSubmit(data, 'security', 'change-password')
            .pipe(takeUntil(this.destroy$))
            .subscribe((response) => {
            if (response) {
                switch (response.respStatusCode) {
                    case ResponseCode.ERR_SCR0002.toString():
                        this.formGroup.controls['password'].setErrors({
                            incorrect: true,
                        });
                        break;
                    case ResponseCode.ERR_SCR0006.toString():
                        this.formGroup.controls['newPassword'].setErrors({
                            equal: true,
                        });
                        break;
                    default:
                        break;
                }
            }
        });
    }
}
ChangePasswordPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ChangePasswordPageComponent, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
ChangePasswordPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ChangePasswordPageComponent, selector: "do-change-password-page", usesInheritance: true, ngImport: i0, template: "<do-page-outlet [header]=\"'Change Password'\">\n  <form [formGroup]=\"formGroup\" pagecontent>\n    <do-input-text\n      [name]=\"'password'\"\n      [label]=\"'Password'\"\n      [type]=\"'password'\"\n      [required]=\"true\"\n      formControlName=\"password\">\n    </do-input-text>\n    <do-input-text\n      [name]=\"'newPassword'\"\n      [label]=\"'New Password'\"\n      [type]=\"'password'\"\n      [required]=\"true\"\n      [pattern]=\"passwordPattern\"\n      doValidateNotEqual=\"password\"\n      formControlName=\"newPassword\">\n    </do-input-text>\n    <do-input-text\n      [name]=\"'confirmPassword'\"\n      [label]=\"'Confirm Password'\"\n      [type]=\"'password'\"\n      [required]=\"true\"\n      doValidateEqual=\"newPassword\"\n      formControlName=\"confirmPassword\">\n    </do-input-text>\n  </form>\n  <div class=\"offset-sm-3 col-sm-9\" pagefooter>\n    <do-button\n      (onSubmit)=\"onSubmit()\"\n      [name]=\"'Update Password'\"\n      [formGroupButton]=\"formGroup\"\n      [disabledButton]=\"disabled\">\n    </do-button>\n  </div>\n</do-page-outlet>\n", styles: [""], components: [{ type: i2.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i2.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type", "togglePassword", "showPassword"] }, { type: i2.DoButtonComponent, selector: "do-button", inputs: ["formGroupButton", "name", "disabledButton", "type", "status", "size", "skeleton"], outputs: ["onSubmit"] }], directives: [{ type: i2$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i2.NotEqualValidator, selector: "[doValidateNotEqual][formControlName],[doValidateNotEqual][formControl],[doValidateNotEqual][ngModel]" }, { type: i2$1.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { type: i2.EqualValidator, selector: "[doValidateEqual][formControlName],[doValidateEqual][formControl],[doValidateEqual][ngModel]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ChangePasswordPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-change-password-page',
                    styleUrls: ['./change-password-page.component.scss'],
                    templateUrl: './change-password-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }]; } });

class ExtraComponent {
}
ExtraComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ExtraComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ExtraComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ExtraComponent, selector: "do-extra", ngImport: i0, template: `
    <router-outlet></router-outlet>
  `, isInline: true, directives: [{ type: i1.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ExtraComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-extra',
                    template: `
    <router-outlet></router-outlet>
  `,
                }]
        }] });

class DeactivatedPromptComponent {
    constructor(ref) {
        this.ref = ref;
        this.disabled = false;
        this.showPassword = false;
        this.icon = 'eye-outline';
    }
    onShowPassword() {
        this.showPassword = !this.showPassword;
        this.icon = this.showPassword ? 'eye-off-outline' : 'eye-outline';
    }
    submit(password) {
        this.disabled = true;
        this.ref.close(password);
    }
}
DeactivatedPromptComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DeactivatedPromptComponent, deps: [{ token: i1$1.NbDialogRef }], target: i0.ɵɵFactoryTarget.Component });
DeactivatedPromptComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DeactivatedPromptComponent, selector: "do-deactivated-prompt", ngImport: i0, template: "<nb-card>\n  <nb-card-header>\n    <h6 class=\"text-danger deactivated-label\">\n        {{ 'Deactivate Account' | translate }}\n    </h6>\n  </nb-card-header>\n  <nb-card-body>\n    <p>\n      {{ 'message.deactivate-form' | translate }}\n    </p>\n    <p>\n      {{ 'message.input-password' | translate }}\n    </p>\n    <div class=\"input-group\">\n      <input\n        [(ngModel)]=\"password\"\n        [type]=\"!showPassword ? 'password' : 'text'\"\n        nbInput\n        class=\"deactivated-password\"\n        placeholder=\"{{ 'Password' | translate }}\">\n      <div class=\"input-icon\">\n        <nb-icon [options]=\"{ animation: { type: 'zoom' } }\" class=\"input-icon-hover\" icon=\"{{icon}}\" (click)=\"onShowPassword()\"></nb-icon>\n      </div>\n    </div>\n  </nb-card-body>\n  <nb-card-footer>\n    <button\n      type=\"submit\"\n      status=\"danger\"\n      size=\"large\"\n      class=\"deactivated-button\"\n      [disabled]=\"!password || disabled\"\n      (click)=\"submit(password)\"\n      nbButton>\n      {{ 'message.button-deactivate' | translate }}\n    </button>\n  </nb-card-footer>\n</nb-card>\n", styles: [".nb-theme-default :host nb-icon{color:#8f9bb3}.nb-theme-default :host .input-icon{position:absolute;right:0;padding:.7rem}.nb-theme-default :host .input-icon-hover:hover{color:#598bff;cursor:pointer}.nb-theme-default :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-default :host .cancel{margin-right:1rem}.nb-theme-default :host button.deactivated-button{width:100%}@media (max-width: 767.98px){.nb-theme-default :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-default :host button.deactivated-button{font-size:.6rem}}.nb-theme-dark :host nb-icon{color:#8f9bb3}.nb-theme-dark :host .input-icon{position:absolute;right:0;padding:.7rem}.nb-theme-dark :host .input-icon-hover:hover{color:#598bff;cursor:pointer}.nb-theme-dark :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-dark :host .cancel{margin-right:1rem}.nb-theme-dark :host button.deactivated-button{width:100%}@media (max-width: 767.98px){.nb-theme-dark :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-dark :host button.deactivated-button{font-size:.6rem}}.nb-theme-cosmic :host nb-icon{color:#8f9bb3}.nb-theme-cosmic :host .input-icon{position:absolute;right:0;padding:.7rem}.nb-theme-cosmic :host .input-icon-hover:hover{color:#598bff;cursor:pointer}.nb-theme-cosmic :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-cosmic :host .cancel{margin-right:1rem}.nb-theme-cosmic :host button.deactivated-button{width:100%}@media (max-width: 767.98px){.nb-theme-cosmic :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-cosmic :host button.deactivated-button{font-size:.6rem}}.nb-theme-corporate :host nb-icon{color:#8f9bb3}.nb-theme-corporate :host .input-icon{position:absolute;right:0;padding:.7rem}.nb-theme-corporate :host .input-icon-hover:hover{color:#598bff;cursor:pointer}.nb-theme-corporate :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-corporate :host .cancel{margin-right:1rem}.nb-theme-corporate :host button.deactivated-button{width:100%}@media (max-width: 767.98px){.nb-theme-corporate :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-corporate :host button.deactivated-button{font-size:.6rem}}\n"], components: [{ type: i1$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i1$1.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }, { type: i1$1.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i1$1.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i1$1.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i2$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], pipes: { "translate": i3.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DeactivatedPromptComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-deactivated-prompt',
                    templateUrl: 'deactivated-prompt.component.html',
                    styleUrls: ['deactivated-prompt.component.scss'],
                }]
        }], ctorParameters: function () { return [{ type: i1$1.NbDialogRef }]; } });

class DeactivatedProviderPromptComponent {
    constructor(ref) {
        this.ref = ref;
        this.disabled = false;
        this.patternEmail = Pattern.EMAIL;
        this.form = new FormGroup({
            email: new FormControl(),
        });
    }
    submit() {
        this.disabled = true;
        this.ref.close(this.form.get('email').value);
    }
}
DeactivatedProviderPromptComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DeactivatedProviderPromptComponent, deps: [{ token: i1$1.NbDialogRef }], target: i0.ɵɵFactoryTarget.Component });
DeactivatedProviderPromptComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DeactivatedProviderPromptComponent, selector: "do-deactivated-provider-prompt", ngImport: i0, template: "<nb-card>\n  <nb-card-header>\n    <h6 class=\"text-danger deactivated-label\">\n        {{ 'Deactivate Account' | translate }}\n    </h6>\n  </nb-card-header>\n  <nb-card-body>\n    <form [formGroup]=\"form\" aria-labelledby=\"title\">\n    <p>\n      {{ 'message.deactivate-form' | translate }}\n    </p>\n    <p>\n      {{ 'message.input-email' | translate }}\n    </p>\n    <input\n      [formControlName]=\"'email'\"\n      type=\"text\"\n      [required]=\"true\"\n      [pattern]=\"patternEmail\"\n      nbInput\n      class=\"deactivated-email\"\n      placeholder=\"Email\">\n    </form>\n  </nb-card-body>\n  <nb-card-footer>\n    <button\n      type=\"submit\"\n      status=\"danger\"\n      size=\"large\"\n      class=\"deactivated-button\"\n      [disabled]=\"!form.valid || disabled\"\n      (click)=\"submit()\"\n      nbButton>\n      {{ 'message.button-deactivate' | translate }}\n    </button>\n  </nb-card-footer>\n</nb-card>\n", styles: [".nb-theme-default :host input.deactivated-email{max-width:unset;width:100%}.nb-theme-default :host .cancel{margin-right:1rem}.nb-theme-default :host button.deactivated-button{width:100%}@media (max-width: 767.98px){.nb-theme-default :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-default :host button.deactivated-button{font-size:.6rem}}.nb-theme-dark :host input.deactivated-email{max-width:unset;width:100%}.nb-theme-dark :host .cancel{margin-right:1rem}.nb-theme-dark :host button.deactivated-button{width:100%}@media (max-width: 767.98px){.nb-theme-dark :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-dark :host button.deactivated-button{font-size:.6rem}}.nb-theme-cosmic :host input.deactivated-email{max-width:unset;width:100%}.nb-theme-cosmic :host .cancel{margin-right:1rem}.nb-theme-cosmic :host button.deactivated-button{width:100%}@media (max-width: 767.98px){.nb-theme-cosmic :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-cosmic :host button.deactivated-button{font-size:.6rem}}.nb-theme-corporate :host input.deactivated-email{max-width:unset;width:100%}.nb-theme-corporate :host .cancel{margin-right:1rem}.nb-theme-corporate :host button.deactivated-button{width:100%}@media (max-width: 767.98px){.nb-theme-corporate :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-corporate :host button.deactivated-button{font-size:.6rem}}\n"], components: [{ type: i1$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1$1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i1$1.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i1$1.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i2$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1$1.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i2$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i2$1.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }], pipes: { "translate": i3.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DeactivatedProviderPromptComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-deactivated-provider-prompt',
                    templateUrl: 'deactivated-provider-prompt.component.html',
                    styleUrls: ['deactivated-provider-prompt.component.scss'],
                }]
        }], ctorParameters: function () { return [{ type: i1$1.NbDialogRef }]; } });

class SwitchRolePageComponent extends BaseFormComponent {
    constructor(injector, authIndexedDB) {
        super(injector, {
            role: [],
        });
        this.injector = injector;
        this.authIndexedDB = authIndexedDB;
        this.apiSelectUserRole = this.api['security']['select-user-role'];
    }
    ngOnInit() {
        this.loadingForm = true;
        this.exec('security', 'get-user-role')
            .subscribe((success) => {
            this.loadingForm = false;
            this.authority = success['authority'];
            this.formGroup.controls['role'].setValue(success['description']);
            this.formGroup.markAsPristine();
        }, (error) => {
            this.loadingForm = true;
            if (error.respStatusMessage) {
                this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
            }
        });
    }
    onSubmit() {
        if (this.formGroup.get('role').value['value']) {
            this.authority = this.formGroup.get('role').value['value'];
        }
        this.disabled = true;
        this.loadingForm = true;
        const data = {
            authority: this.authority
        };
        super.onSubmit(data, 'security', 'switch-role')
            .pipe(takeUntil(this.destroy$))
            .subscribe((response) => {
            if (response) {
                this.toastr.showI18n('notification.default', true);
                Promise.all([
                    this.authIndexedDB.putEnc('menus', JSON.stringify(response['main'])),
                    this.authIndexedDB.putEnc('extras', JSON.stringify(response['extra'])),
                ]).then(() => {
                    this.loadingForm = false;
                    window.location.href = '/app/home';
                });
            }
        });
    }
}
SwitchRolePageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SwitchRolePageComponent, deps: [{ token: i0.Injector }, { token: i1$2.AuthIndexedDBService }], target: i0.ɵɵFactoryTarget.Component });
SwitchRolePageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: SwitchRolePageComponent, selector: "do-switch-role-page", usesInheritance: true, ngImport: i0, template: "<do-page-outlet [header]=\"'Switch Role'\">\n  <form [formGroup]=\"formGroup\" pagecontent>\n      <do-select\n      [name]=\"'role'\"\n      [label]=\"'Role'\"\n      [required]=\"true\"\n      [searchable]=\"false\"\n      [skeleton]=\"loadingForm\"\n      [api]=\"apiSelectUserRole\"\n      formControlName=\"role\">\n      </do-select>\n  </form>\n  <div class=\"offset-sm-3 col-sm-9\" pagefooter>\n    <do-button\n      (onSubmit)=\"onSubmit()\"\n      [name]=\"'Switch Role'\"\n      [formGroupButton]=\"formGroup\"\n      [disabledButton]=\"disabled\">\n    </do-button>\n  </div>\n</do-page-outlet>\n", styles: [""], components: [{ type: i2.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i2.DoSelectComponent, selector: "do-select", inputs: ["placeholder", "colLabel", "colInput", "items", "multiple", "loading", "addTag", "closeOnSelect", "clearable", "searchable", "hideSelected", "minTermLength", "maxTermLength", "api", "limit", "offsetNextLoad", "queryParam"], outputs: ["onSelect", "onClear"] }, { type: i2.DoButtonComponent, selector: "do-button", inputs: ["formGroupButton", "name", "disabledButton", "type", "status", "size", "skeleton"], outputs: ["onSubmit"] }], directives: [{ type: i2$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SwitchRolePageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-switch-role-page',
                    styleUrls: ['./switch-role-page.component.scss'],
                    templateUrl: './switch-role-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1$2.AuthIndexedDBService }]; } });

class SecurityPageComponent extends BaseFormComponent {
    constructor(injector, dialogService, authIndexedDB) {
        super(injector, {
            password: [],
        });
        this.injector = injector;
        this.dialogService = dialogService;
        this.authIndexedDB = authIndexedDB;
        this.authProvider = true;
        this.enc = injector.get(EncryptionService);
        this.oauthResource = injector.get(OAUTH_INFO);
        this.authToken = injector.get(AuthTokenService);
        this.authIndexedDB.getEnc('provider').then((value) => {
            this.provider = {
                value,
            };
            if (value === 'local') {
                this.authProvider = false;
            }
        });
    }
    onSubmit() {
        this.disabled = true;
        if (this.authProvider) {
            this.dialogService.open(DeactivatedProviderPromptComponent)
                .onClose.subscribe((email) => {
                if (email) {
                    this.disabled = true;
                    const data = {
                        email,
                        provider: this.provider['value'],
                    };
                    super.onSubmit(data, 'security', 'deactivated')
                        .pipe(takeUntil(this.destroy$))
                        .subscribe((response) => {
                        if (response) {
                            if (response.respStatusCode === ResponseCode.OK_SCR003.toString()) {
                                this.authToken.logout();
                            }
                        }
                    });
                }
                else {
                    this.disabled = false;
                }
            });
        }
        else {
            this.dialogService.open(DeactivatedPromptComponent)
                .onClose.subscribe((password) => {
                if (password) {
                    this.disabled = true;
                    const data = {
                        password: this.enc.encryptAES(this.oauthResource['aes_key'], password),
                    };
                    super.onSubmit(data, 'security', 'deactivated')
                        .pipe(takeUntil(this.destroy$))
                        .subscribe((response) => {
                        if (response) {
                            if (response.respStatusCode === ResponseCode.OK_SCR003.toString()) {
                                this.authToken.logout();
                            }
                        }
                    });
                }
                else {
                    this.disabled = false;
                }
            });
        }
    }
}
SecurityPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SecurityPageComponent, deps: [{ token: i0.Injector }, { token: i1$1.NbDialogService }, { token: i1$2.AuthIndexedDBService }], target: i0.ɵɵFactoryTarget.Component });
SecurityPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: SecurityPageComponent, selector: "do-security-page", usesInheritance: true, ngImport: i0, template: "<do-change-password-page *ngIf=\"!authProvider\"></do-change-password-page>\n<nb-card *ngIf=\"authProvider\">\n    <nb-card-body>\n        <div class=\"row\">\n            <nb-icon [status]=\"'info'\" [icon]=\"'google'\" class=\"icon-provider\"></nb-icon>\n            <p class=\"text-provider\">\n                {{ 'message.provider' | translate:provider}}\n            </p>\n        </div>\n    </nb-card-body>\n</nb-card>\n<do-switch-role-page></do-switch-role-page>\n<nb-card>\n    <nb-card-body>\n        <div class=\"row\">\n            <div class=\"col-md-3 col-lg-3\">\n                <button\n                    type=\"button\"\n                    status=\"danger\"\n                    size=\"large\"\n                    class=\"deactivated-button\"\n                    [disabled]=\"disabled\"\n                    (click)=\"onSubmit()\"\n                    nbButton fullWidth>\n                    {{ 'Deactivate Account' | translate }}\n                </button>\n            </div>\n            <div class=\"col-md-8 col-lg-8\">\n                <h6 class=\"text-danger deactivated-label\">\n                    {{ 'message.deactivated-account' | translate }}\n                </h6>\n            </div>\n        </div>\n    </nb-card-body>\n</nb-card>\n", styles: [".nb-theme-default :host button.deactivated-button{width:100%;margin:.5rem 0}.nb-theme-default :host h6.deactivated-label{padding-top:10px;text-align:center}.nb-theme-default :host .icon-provider{margin:1rem 0 1rem 1.5rem}.nb-theme-default :host .text-provider{margin:1rem 1.5rem}@media (max-width: 767.98px){.nb-theme-default :host .icon-provider{margin:1rem 0 1rem .5rem}.nb-theme-default :host .text-provider{margin:1rem 0 1rem .5rem}}.nb-theme-dark :host button.deactivated-button{width:100%;margin:.5rem 0}.nb-theme-dark :host h6.deactivated-label{padding-top:10px;text-align:center}.nb-theme-dark :host .icon-provider{margin:1rem 0 1rem 1.5rem}.nb-theme-dark :host .text-provider{margin:1rem 1.5rem}@media (max-width: 767.98px){.nb-theme-dark :host .icon-provider{margin:1rem 0 1rem .5rem}.nb-theme-dark :host .text-provider{margin:1rem 0 1rem .5rem}}.nb-theme-cosmic :host button.deactivated-button{width:100%;margin:.5rem 0}.nb-theme-cosmic :host h6.deactivated-label{padding-top:10px;text-align:center}.nb-theme-cosmic :host .icon-provider{margin:1rem 0 1rem 1.5rem}.nb-theme-cosmic :host .text-provider{margin:1rem 1.5rem}@media (max-width: 767.98px){.nb-theme-cosmic :host .icon-provider{margin:1rem 0 1rem .5rem}.nb-theme-cosmic :host .text-provider{margin:1rem 0 1rem .5rem}}.nb-theme-corporate :host button.deactivated-button{width:100%;margin:.5rem 0}.nb-theme-corporate :host h6.deactivated-label{padding-top:10px;text-align:center}.nb-theme-corporate :host .icon-provider{margin:1rem 0 1rem 1.5rem}.nb-theme-corporate :host .text-provider{margin:1rem 1.5rem}@media (max-width: 767.98px){.nb-theme-corporate :host .icon-provider{margin:1rem 0 1rem .5rem}.nb-theme-corporate :host .text-provider{margin:1rem 0 1rem .5rem}}\n"], components: [{ type: ChangePasswordPageComponent, selector: "do-change-password-page" }, { type: i1$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1$1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i1$1.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }, { type: SwitchRolePageComponent, selector: "do-switch-role-page" }, { type: i1$1.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i2$2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], pipes: { "translate": i3.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SecurityPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-security-page',
                    styleUrls: ['./security-page.component.scss'],
                    templateUrl: './security-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1$1.NbDialogService }, { type: i1$2.AuthIndexedDBService }]; } });

class SettingsPageComponent extends BaseFormComponent {
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
SettingsPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SettingsPageComponent, deps: [{ token: i0.Injector }, { token: i3.TranslateService }, { token: i1$1.NbThemeService }, { token: SETTINGS_INDEXED_DB }, { token: AUTH_INDEXED_DB }], target: i0.ɵɵFactoryTarget.Component });
SettingsPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: SettingsPageComponent, selector: "do-settings-page", usesInheritance: true, ngImport: i0, template: "<do-page-outlet [header]=\"'Settings'\">\n  <form [formGroup]=\"formGroup\" pagecontent>\n    <do-select\n      [name]=\"'locale'\"\n      [label]=\"'label.language'\"\n      [required]=\"true\"\n      [searchable]=\"false\"\n      [skeleton]=\"loadingForm\"\n      [api]=\"apiSelectLocale\"\n      formControlName=\"locale\">\n      <div *doContentSelect=\"let item\">\n        <span class=\"{{item.icon ? item.icon : localeIcon}}\"></span>\n        <span class=\"label-select\">{{item.label ? item.label : item}}</span>\n      </div>\n    </do-select>\n    <do-checkbox\n      [name]=\"'checkbox'\"\n      [label]=\"'label.dark-mode'\"\n      [data]=\"dataTheme\"\n      [skeleton]=\"loadingForm\"\n      formControlName=\"theme\">\n    </do-checkbox>\n  </form>\n  <div class=\"offset-sm-3 col-sm-9\" pagefooter>\n    <do-button\n      (onSubmit)=\"onSubmit()\"\n      [name]=\"'Update Settings'\"\n      [formGroupButton]=\"formGroup\"\n      [disabledButton]=\"disabled\"\n      [skeleton]=\"loadingForm\">\n    </do-button>\n  </div>\n</do-page-outlet>\n", styles: [".label-select{padding-left:.5rem}\n"], components: [{ type: i2.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i2.DoSelectComponent, selector: "do-select", inputs: ["placeholder", "colLabel", "colInput", "items", "multiple", "loading", "addTag", "closeOnSelect", "clearable", "searchable", "hideSelected", "minTermLength", "maxTermLength", "api", "limit", "offsetNextLoad", "queryParam"], outputs: ["onSelect", "onClear"] }, { type: i2.DoCheckboxComponent, selector: "do-checkbox", inputs: ["colLabel", "colInput", "data"], outputs: ["onChecked"] }, { type: i2.DoButtonComponent, selector: "do-button", inputs: ["formGroupButton", "name", "disabledButton", "type", "status", "size", "skeleton"], outputs: ["onSubmit"] }], directives: [{ type: i2$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i2.ContentSelectDirective, selector: "[doContentSelect]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SettingsPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-settings-page',
                    styleUrls: ['./settings-page.component.scss'],
                    templateUrl: './settings-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i3.TranslateService }, { type: i1$1.NbThemeService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [SETTINGS_INDEXED_DB]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [AUTH_INDEXED_DB]
                }] }]; } });

class ProfilePageComponent extends BaseFormComponent {
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
    }
    ngOnInit() {
        this.onInit('profile', 'get-profile');
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
    onInit(serviceName, apiName) {
        this.loadingForm = true;
        this.exec(serviceName, apiName)
            .subscribe((success) => {
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
        }, (error) => {
            this.loadingForm = true;
            if (error instanceof HttpErrorResponse) {
                error = error['error'];
            }
            this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
        });
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
ProfilePageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ProfilePageComponent, deps: [{ token: i0.Injector }, { token: USER_SERVICE }, { token: PROFILE_INDEXED_DB }, { token: i1$2.AuthIndexedDBService }], target: i0.ɵɵFactoryTarget.Component });
ProfilePageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ProfilePageComponent, selector: "do-profile-page", usesInheritance: true, ngImport: i0, template: "<do-page-outlet [header]=\"'Profile'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-4 col-lg-4\">\n      <form [formGroup]=\"formGroupImage\">\n        <do-image-upload\n          [radius]=\"50\"\n          [skeleton]=\"loadingForm\"\n          [required]=\"true\"\n          [uploadFn]=\"uploadFinished\"\n          formControlName=\"image\">\n        </do-image-upload>\n        <do-button\n          class=\"upload-bg\"\n          (onSubmit)=\"uploadImage()\"\n          [name]=\"'Upload'\"\n          [formGroupButton]=\"formGroupImage\"\n          [disabledButton]=\"formGroupImage.pristine\"\n          [skeleton]=\"loadingForm\">\n          <nb-icon class=\"upload-icon\" icon=\"cloud-upload-outline\" pack=\"eva\" buttonicon></nb-icon>\n        </do-button>\n      </form>\n    </div>\n    <div class=\"accordion-container col-md-8 col-lg-8\">\n      <form [formGroup]=\"formGroup\">\n        <nb-accordion multi>\n          <nb-accordion-item [expanded]=\"true\">\n            <nb-accordion-item-header>\n              {{'label.account' | translate}}\n            </nb-accordion-item-header>\n            <nb-accordion-item-body>\n              <do-input-text\n                [name]=\"'name'\"\n                [label]=\"'Name'\"\n                [required]=\"true\"\n                [skeleton]=\"loadingForm\"\n                formControlName=\"name\">\n              </do-input-text>\n              <do-input-text\n                [name]=\"'email'\"\n                [label]=\"'Email'\"\n                [required]=\"true\"\n                [pattern]=\"patternEmail\"\n                [paramError]=\"{value:5}\"\n                [skeleton]=\"loadingForm\"\n                formControlName=\"email\">\n              </do-input-text>\n              <do-input-text\n                [name]=\"'username'\"\n                [label]=\"'Username'\"\n                [required]=\"true\"\n                [skeleton]=\"loadingForm\"\n                formControlName=\"username\">\n              </do-input-text>\n            </nb-accordion-item-body>\n          </nb-accordion-item>\n          <nb-accordion-item [expanded]=\"true\">\n            <nb-accordion-item-header>\n              {{'label.personal-info' | translate}}\n            </nb-accordion-item-header>\n            <nb-accordion-item-body>\n              <do-input-text\n                [name]=\"'idNumber'\"\n                [label]=\"'ID Number'\"\n                [required]=\"true\"\n                [skeleton]=\"loadingForm\"\n                formControlName=\"idNumber\">\n              </do-input-text>\n              <do-select\n                [name]=\"'gender'\"\n                [label]=\"'Gender'\"\n                [required]=\"true\"\n                [api]=\"apiSelectGender\"\n                [queryParam]=\"paramSelectGender\"\n                [searchable]=\"false\"\n                [skeleton]=\"loadingForm\"\n                formControlName=\"gender\">\n              </do-select>\n              <do-input-text\n                [name]=\"'placeOfBirth'\"\n                [label]=\"'Place of Birth'\"\n                [required]=\"true\"\n                [skeleton]=\"loadingForm\"\n                formControlName=\"placeOfBirth\">\n              </do-input-text>\n              <do-datepicker\n                [name]=\"'dateOfBirth'\"\n                [label]=\"'Date of Birth'\"\n                [required]=\"true\"\n                [skeleton]=\"loadingForm\"\n                formControlName=\"dateOfBirth\">\n              </do-datepicker>\n              <do-input-text\n                [name]=\"'height'\"\n                [label]=\"'height.body'\"\n                [placeholder]=\"'Centimeter'\"\n                [type]=\"'number'\"\n                [step]=\"'any'\"\n                [skeleton]=\"loadingForm\"\n                formControlName=\"height\">\n              </do-input-text>\n              <do-input-text\n                [name]=\"'weight'\"\n                [label]=\"'weight.body'\"\n                [placeholder]=\"'Kilogram'\"\n                [type]=\"'number'\"\n                [step]=\"'any'\"\n                [skeleton]=\"loadingForm\"\n                formControlName=\"weight\">\n              </do-input-text>\n              <do-select\n                [name]=\"'bloodType'\"\n                [label]=\"'Blood Type'\"\n                [placeholder]=\"'Blood Type'\"\n                [items]=\"bloodTypeData\"\n                [searchable]=\"false\"\n                [skeleton]=\"loadingForm\"\n                formControlName=\"bloodType\">\n              </do-select>\n            </nb-accordion-item-body>\n          </nb-accordion-item>\n          <nb-accordion-item [expanded]=\"true\">\n            <nb-accordion-item-header>\n              {{'label.contact-person' | translate}}\n            </nb-accordion-item-header>\n            <nb-accordion-item-body >\n              <do-input-text\n                [name]=\"'phoneNumber'\"\n                [label]=\"'Telephone'\"\n                [required]=\"true\"\n                [pattern]=\"patternPhoneNumber\"\n                [skeleton]=\"loadingForm\"\n                formControlName=\"phoneNumber\">\n              </do-input-text>\n              <do-textarea\n                [name]=\"'address'\"\n                [label]=\"'Address'\"\n                [required]=\"true\"\n                [minLength]=\"minLength\"\n                [skeleton]=\"loadingForm\"\n                formControlName=\"address\">\n              </do-textarea>\n              <do-select\n                [name]=\"'country'\"\n                [label]=\"'Country'\"\n                [api]=\"apiSelectCountry\"\n                [skeleton]=\"loadingForm\"\n                (onSelect)=\"onSelectCountry($event)\"\n                (onClear)=\"onClearCountry()\"\n                formControlName=\"country\">\n              </do-select>\n              <do-select\n                [name]=\"'province'\"\n                [label]=\"'Province'\"\n                [api]=\"apiSelectProvince\"\n                [queryParam]=\"paramSelectProvince\"\n                [skeleton]=\"loadingForm\"\n                (onSelect)=\"onSelectProvince($event)\"\n                (onClear)=\"onClearProvince()\"\n                formControlName=\"province\">\n              </do-select>\n              <do-select\n                [name]=\"'city'\"\n                [label]=\"'City'\"\n                [api]=\"apiSelectCity\"\n                [queryParam]=\"paramSelectCity\"\n                [skeleton]=\"loadingForm\"\n                (onSelect)=\"onSelectCity($event)\"\n                (onClear)=\"onClearCity()\"\n                formControlName=\"city\">\n              </do-select>\n              <do-select\n                [name]=\"'district'\"\n                [label]=\"'District'\"\n                [api]=\"apiSelectDistrict\"\n                [queryParam]=\"paramSelectDistrict\"\n                [skeleton]=\"loadingForm\"\n                (onSelect)=\"onSelectDistrict($event)\"\n                (onClear)=\"onClearDistrict()\"\n                formControlName=\"district\">\n              </do-select>\n              <do-select\n                [name]=\"'subDistrict'\"\n                [label]=\"'Sub District'\"\n                [api]=\"apiSelectSubDistrict\"\n                [queryParam]=\"paramSelectSubDistrict\"\n                [skeleton]=\"loadingForm\"\n                formControlName=\"subDistrict\">\n              </do-select>\n            </nb-accordion-item-body>\n          </nb-accordion-item>\n        </nb-accordion>\n      </form>\n    </div>\n  </div>\n  <div class=\"offset-sm-6 col-sm-6\" pagefooter>\n    <do-button\n      (onSubmit)=\"onSubmit()\"\n      [name]=\"'Update Profile'\"\n      [disabledButton]=\"disabled\"\n      [formGroupButton]=\"formGroup\"\n      [skeleton]=\"loadingForm\">\n    </do-button>\n  </div>\n</do-page-outlet>\n", styles: [".nb-theme-default :host nb-accordion{box-shadow:unset}.nb-theme-default :host .upload-bg{display:flex;justify-content:center;align-items:center}.nb-theme-dark :host nb-accordion{box-shadow:unset}.nb-theme-dark :host .upload-bg{display:flex;justify-content:center;align-items:center}.nb-theme-cosmic :host nb-accordion{box-shadow:unset}.nb-theme-cosmic :host .upload-bg{display:flex;justify-content:center;align-items:center}.nb-theme-corporate :host nb-accordion{box-shadow:unset}.nb-theme-corporate :host .upload-bg{display:flex;justify-content:center;align-items:center}\n"], components: [{ type: i2.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i2.ImageUploadComponent, selector: "do-image-upload", inputs: ["image", "height", "width", "radius", "buttonUpload", "skeleton", "uploadFn"], outputs: ["onPreview"] }, { type: i2.DoButtonComponent, selector: "do-button", inputs: ["formGroupButton", "name", "disabledButton", "type", "status", "size", "skeleton"], outputs: ["onSubmit"] }, { type: i1$1.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }, { type: i1$1.NbAccordionComponent, selector: "nb-accordion", inputs: ["multi"] }, { type: i1$1.NbAccordionItemComponent, selector: "nb-accordion-item", inputs: ["collapsed", "expanded", "disabled"], outputs: ["collapsedChange"] }, { type: i1$1.NbAccordionItemHeaderComponent, selector: "nb-accordion-item-header" }, { type: i1$1.NbAccordionItemBodyComponent, selector: "nb-accordion-item-body" }, { type: i2.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type", "togglePassword", "showPassword"] }, { type: i2.DoSelectComponent, selector: "do-select", inputs: ["placeholder", "colLabel", "colInput", "items", "multiple", "loading", "addTag", "closeOnSelect", "clearable", "searchable", "hideSelected", "minTermLength", "maxTermLength", "api", "limit", "offsetNextLoad", "queryParam"], outputs: ["onSelect", "onClear"] }, { type: i2.DoDatePickerComponent, selector: "do-datepicker", inputs: ["placeholder", "colLabel", "colInput", "min", "max", "size", "dateMask"] }, { type: i2.DoTextareaComponent, selector: "do-textarea", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "height"] }], directives: [{ type: i2$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i2$1.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }], pipes: { "translate": i3.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ProfilePageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-profile-page',
                    styleUrls: ['./profile-page.component.scss'],
                    templateUrl: './profile-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i6.UserService, decorators: [{
                    type: Inject,
                    args: [USER_SERVICE]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PROFILE_INDEXED_DB]
                }] }, { type: i1$2.AuthIndexedDBService }]; } });

class TermsConditionsPageComponent extends BaseComponent {
    constructor(injector) {
        super(injector);
        this.injector = injector;
        this.destroy$ = new Subject();
    }
    ngOnInit() {
        const data = {
            parameterCode: 'TERMS_CONDITIONS.DONGKAP'
        };
        this.http.HTTP_AUTH(this.api['master']['parameter'], data)
            .pipe(takeUntil(this.destroy$))
            .subscribe((response) => {
            this.content = response['parameterValue'];
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
}
TermsConditionsPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: TermsConditionsPageComponent, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
TermsConditionsPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: TermsConditionsPageComponent, selector: "do-terms-conditions-page", usesInheritance: true, ngImport: i0, template: "<!-- https://www.privacypolicyonline.com/live.php?token=c7NdqfNju6oyhdnlrnLPdskC3Pft3FuH -->\n<do-page-outlet [header]=\"'header.terms-conditions'\">\n  <div [innerHTML]=\"content\" pagecontent></div>\n</do-page-outlet>\n", styles: [""], components: [{ type: i2.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: TermsConditionsPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-terms-conditions-page',
                    styleUrls: ['./terms-conditions-page.component.scss'],
                    templateUrl: './terms-conditions-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }]; } });

class PrivacyPolicyPageComponent extends BaseComponent {
    constructor(injector) {
        super(injector);
        this.injector = injector;
        this.destroy$ = new Subject();
    }
    ngOnInit() {
        const data = {
            parameterCode: 'PRIVACY_POLICY.DONGKAP'
        };
        this.http.HTTP_AUTH(this.api['master']['parameter'], data)
            .pipe(takeUntil(this.destroy$))
            .subscribe((response) => {
            this.content = response['parameterValue'];
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
}
PrivacyPolicyPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PrivacyPolicyPageComponent, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
PrivacyPolicyPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: PrivacyPolicyPageComponent, selector: "do-privacy-policy-page-page", usesInheritance: true, ngImport: i0, template: "<!-- https://www.privacypolicyonline.com/live.php?token=XnC0EXuhJuJgyXGsOZNL33fGEGwzLvlU -->\n<do-page-outlet [header]=\"'header.privacy-policy'\">\n  <div [innerHTML]=\"content\" pagecontent></div>\n</do-page-outlet>\n", styles: [""], components: [{ type: i2.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PrivacyPolicyPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-privacy-policy-page-page',
                    styleUrls: ['./privacy-policy-page.component.scss'],
                    templateUrl: './privacy-policy-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }]; } });

const routes = [{
        path: '',
        component: ExtraComponent,
        canActivateChild: [AuthGuardChildService],
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
class DoExtraRoutingModule {
}
DoExtraRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoExtraRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoExtraRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoExtraRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
DoExtraRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoExtraRoutingModule, imports: [[RouterModule.forChild(routes)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoExtraRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                }]
        }] });

class HomePageComponent {
    constructor(profileIndexedDB) {
        this.profileIndexedDB = profileIndexedDB;
    }
    ngOnInit() {
        this.name = this.profileIndexedDB.get('name');
    }
    ngOnDestroy() { }
}
HomePageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HomePageComponent, deps: [{ token: PROFILE_INDEXED_DB }], target: i0.ɵɵFactoryTarget.Component });
HomePageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: HomePageComponent, selector: "do-home-page", ngImport: i0, template: "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <nb-card>\n      <div class=\"icon-container\">\n        <div class=\"icon status-primary\">\n          <i [ngClass]=\"'nb-home'\"></i>\n        </div>\n      </div>\n      <div class=\"details\">\n        <div class=\"title h5\">{{'Welcome' | translate}}</div>\n        <div class=\"paragraph-2\">{{'Hi' | translate}}, <strong>{{name | async}}</strong>!</div>\n      </div>\n    </nb-card>\n  </div>\n</div>\n", styles: [".nb-theme-default :host nb-card{flex-direction:row;align-items:center;height:6rem;overflow:visible}.nb-theme-default :host nb-card .icon-container{height:100%;padding:.625rem}.nb-theme-default :host nb-card .icon{display:flex;align-items:center;justify-content:center;width:5.75rem;height:4.75rem;font-size:3.75rem;border-radius:.25rem;transition:width .4s ease;transform:translate(0);-webkit-transform-style:preserve-3d;-webkit-backface-visibility:hidden;color:#fff}.nb-theme-default :host nb-card .icon.status-basic{background-image:linear-gradient(to right,#f7f9fc,#edf1f7)}.nb-theme-default :host nb-card .icon.status-basic:hover{background-image:linear-gradient(to right,#ffffff,#f7f9fc)}.nb-theme-default :host nb-card .icon.status-primary{background-image:linear-gradient(to right,#598bff,#3366ff)}.nb-theme-default :host nb-card .icon.status-primary:hover{background-image:linear-gradient(to right,#a6c1ff,#598bff)}.nb-theme-default :host nb-card .icon.status-success{background-image:linear-gradient(to right,#2ce69b,#00d68f)}.nb-theme-default :host nb-card .icon.status-success:hover{background-image:linear-gradient(to right,#8cfac7,#2ce69b)}.nb-theme-default :host nb-card .icon.status-warning{background-image:linear-gradient(to right,#ffc94d,#ffaa00)}.nb-theme-default :host nb-card .icon.status-warning:hover{background-image:linear-gradient(to right,#ffe59e,#ffc94d)}.nb-theme-default :host nb-card .icon.status-danger{background-image:linear-gradient(to right,#ff708d,#ff3d71)}.nb-theme-default :host nb-card .icon.status-danger:hover{background-image:linear-gradient(to right,#ffa8b4,#ff708d)}.nb-theme-default :host nb-card .icon.status-info{background-image:linear-gradient(to right,#42aaff,#0095ff)}.nb-theme-default :host nb-card .icon.status-info:hover{background-image:linear-gradient(to right,#94cbff,#42aaff)}.nb-theme-default :host nb-card .icon.status-control{background-image:linear-gradient(to right,#ffffff,#ffffff)}.nb-theme-default :host nb-card .icon.status-control:hover{background-image:linear-gradient(to right,#ffffff,#f7f9fc)}.nb-theme-default :host nb-card.off{color:#8f9bb3}.nb-theme-default :host nb-card.off .status,.nb-theme-default :host nb-card.off .title,.nb-theme-default :host nb-card.off .icon{color:#8f9bb3}.nb-theme-default :host nb-card.off .icon.status-basic{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-default :host nb-card.off .icon.status-primary{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-default :host nb-card.off .icon.status-success{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-default :host nb-card.off .icon.status-warning{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-default :host nb-card.off .icon.status-danger{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-default :host nb-card.off .icon.status-info{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-default :host nb-card.off .icon.status-control{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-default :host nb-card .details{display:flex;flex-direction:column;justify-content:center;height:100%;border-left:1px solid transparent}[dir=ltr] .nb-theme-default :host nb-card .details{padding:0 .5rem 0 .75rem}[dir=rtl] .nb-theme-default :host nb-card .details{padding:0 .75rem 0 .5rem}.nb-theme-default :host nb-card .title{margin:0}.nb-theme-default :host nb-card .status{text-transform:uppercase}.nb-theme-dark :host nb-card{flex-direction:row;align-items:center;height:6rem;overflow:visible}.nb-theme-dark :host nb-card .icon-container{height:100%;padding:.625rem}.nb-theme-dark :host nb-card .icon{display:flex;align-items:center;justify-content:center;width:5.75rem;height:4.75rem;font-size:3.75rem;border-radius:.25rem;transition:width .4s ease;transform:translate(0);-webkit-transform-style:preserve-3d;-webkit-backface-visibility:hidden;color:#fff}.nb-theme-dark :host nb-card .icon.status-basic{background-image:linear-gradient(to right,#f7f9fc,#edf1f7)}.nb-theme-dark :host nb-card .icon.status-basic:hover{background-image:linear-gradient(to right,#ffffff,#f7f9fc)}.nb-theme-dark :host nb-card .icon.status-primary{background-image:linear-gradient(to right,#598bff,#3366ff)}.nb-theme-dark :host nb-card .icon.status-primary:hover{background-image:linear-gradient(to right,#a6c1ff,#598bff)}.nb-theme-dark :host nb-card .icon.status-success{background-image:linear-gradient(to right,#2ce69b,#00d68f)}.nb-theme-dark :host nb-card .icon.status-success:hover{background-image:linear-gradient(to right,#8cfac7,#2ce69b)}.nb-theme-dark :host nb-card .icon.status-warning{background-image:linear-gradient(to right,#ffc94d,#ffaa00)}.nb-theme-dark :host nb-card .icon.status-warning:hover{background-image:linear-gradient(to right,#ffe59e,#ffc94d)}.nb-theme-dark :host nb-card .icon.status-danger{background-image:linear-gradient(to right,#ff708d,#ff3d71)}.nb-theme-dark :host nb-card .icon.status-danger:hover{background-image:linear-gradient(to right,#ffa8b4,#ff708d)}.nb-theme-dark :host nb-card .icon.status-info{background-image:linear-gradient(to right,#42aaff,#0095ff)}.nb-theme-dark :host nb-card .icon.status-info:hover{background-image:linear-gradient(to right,#94cbff,#42aaff)}.nb-theme-dark :host nb-card .icon.status-control{background-image:linear-gradient(to right,#ffffff,#ffffff)}.nb-theme-dark :host nb-card .icon.status-control:hover{background-image:linear-gradient(to right,#ffffff,#f7f9fc)}.nb-theme-dark :host nb-card.off{color:#8f9bb3}.nb-theme-dark :host nb-card.off .status,.nb-theme-dark :host nb-card.off .title,.nb-theme-dark :host nb-card.off .icon{color:#8f9bb3}.nb-theme-dark :host nb-card.off .icon.status-basic{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-dark :host nb-card.off .icon.status-primary{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-dark :host nb-card.off .icon.status-success{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-dark :host nb-card.off .icon.status-warning{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-dark :host nb-card.off .icon.status-danger{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-dark :host nb-card.off .icon.status-info{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-dark :host nb-card.off .icon.status-control{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-dark :host nb-card .details{display:flex;flex-direction:column;justify-content:center;height:100%;border-left:1px solid transparent}[dir=ltr] .nb-theme-dark :host nb-card .details{padding:0 .5rem 0 .75rem}[dir=rtl] .nb-theme-dark :host nb-card .details{padding:0 .75rem 0 .5rem}.nb-theme-dark :host nb-card .title{margin:0}.nb-theme-dark :host nb-card .status{text-transform:uppercase}.nb-theme-cosmic :host nb-card{flex-direction:row;align-items:center;height:6rem;overflow:visible}.nb-theme-cosmic :host nb-card .icon-container{height:100%;padding:.625rem}.nb-theme-cosmic :host nb-card .icon{display:flex;align-items:center;justify-content:center;width:5.75rem;height:4.75rem;font-size:3.75rem;border-radius:.25rem;transition:width .4s ease;transform:translate(0);-webkit-transform-style:preserve-3d;-webkit-backface-visibility:hidden;color:#fff}.nb-theme-cosmic :host nb-card .icon.status-basic{background-image:linear-gradient(to right,#f7f7fc,#f0f0fa)}.nb-theme-cosmic :host nb-card .icon.status-basic:hover{background-image:linear-gradient(to right,#ffffff,#f7f7fc)}.nb-theme-cosmic :host nb-card .icon.status-primary{background-image:linear-gradient(to right,#b18aff,#a16eff)}.nb-theme-cosmic :host nb-card .icon.status-primary:hover{background-image:linear-gradient(to right,#d5bfff,#b18aff)}.nb-theme-cosmic :host nb-card .icon.status-success{background-image:linear-gradient(to right,#2ce69b,#00d68f)}.nb-theme-cosmic :host nb-card .icon.status-success:hover{background-image:linear-gradient(to right,#8cfac7,#2ce69b)}.nb-theme-cosmic :host nb-card .icon.status-warning{background-image:linear-gradient(to right,#ffc94d,#ffaa00)}.nb-theme-cosmic :host nb-card .icon.status-warning:hover{background-image:linear-gradient(to right,#ffe59e,#ffc94d)}.nb-theme-cosmic :host nb-card .icon.status-danger{background-image:linear-gradient(to right,#ff708d,#ff3d71)}.nb-theme-cosmic :host nb-card .icon.status-danger:hover{background-image:linear-gradient(to right,#ffa8b4,#ff708d)}.nb-theme-cosmic :host nb-card .icon.status-info{background-image:linear-gradient(to right,#42aaff,#0095ff)}.nb-theme-cosmic :host nb-card .icon.status-info:hover{background-image:linear-gradient(to right,#94cbff,#42aaff)}.nb-theme-cosmic :host nb-card .icon.status-control{background-image:linear-gradient(to right,#ffffff,#ffffff)}.nb-theme-cosmic :host nb-card .icon.status-control:hover{background-image:linear-gradient(to right,#ffffff,#f7f7fc)}.nb-theme-cosmic :host nb-card.off{color:#b4b4db}.nb-theme-cosmic :host nb-card.off .status,.nb-theme-cosmic :host nb-card.off .title,.nb-theme-cosmic :host nb-card.off .icon{color:#b4b4db}.nb-theme-cosmic :host nb-card.off .icon.status-basic{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-cosmic :host nb-card.off .icon.status-primary{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-cosmic :host nb-card.off .icon.status-success{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-cosmic :host nb-card.off .icon.status-warning{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-cosmic :host nb-card.off .icon.status-danger{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-cosmic :host nb-card.off .icon.status-info{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-cosmic :host nb-card.off .icon.status-control{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-cosmic :host nb-card .details{display:flex;flex-direction:column;justify-content:center;height:100%;border-left:1px solid transparent}[dir=ltr] .nb-theme-cosmic :host nb-card .details{padding:0 .5rem 0 .75rem}[dir=rtl] .nb-theme-cosmic :host nb-card .details{padding:0 .75rem 0 .5rem}.nb-theme-cosmic :host nb-card .title{margin:0}.nb-theme-cosmic :host nb-card .status{text-transform:uppercase}.nb-theme-corporate :host nb-card{flex-direction:row;align-items:center;height:6rem;overflow:visible}.nb-theme-corporate :host nb-card .icon-container{height:100%;padding:.625rem}.nb-theme-corporate :host nb-card .icon{display:flex;align-items:center;justify-content:center;width:5.75rem;height:4.75rem;font-size:3.75rem;border-radius:.17rem;transition:width .4s ease;transform:translate(0);-webkit-transform-style:preserve-3d;-webkit-backface-visibility:hidden;color:#fff}.nb-theme-corporate :host nb-card .icon.status-basic{background-image:linear-gradient(to right,#f7f9fc,#edf1f7)}.nb-theme-corporate :host nb-card .icon.status-basic:hover{background-image:linear-gradient(to right,#ffffff,#f7f9fc)}.nb-theme-corporate :host nb-card .icon.status-primary{background-image:linear-gradient(to right,#598bff,#3366ff)}.nb-theme-corporate :host nb-card .icon.status-primary:hover{background-image:linear-gradient(to right,#a6c1ff,#598bff)}.nb-theme-corporate :host nb-card .icon.status-success{background-image:linear-gradient(to right,#2ce69b,#00d68f)}.nb-theme-corporate :host nb-card .icon.status-success:hover{background-image:linear-gradient(to right,#8cfac7,#2ce69b)}.nb-theme-corporate :host nb-card .icon.status-warning{background-image:linear-gradient(to right,#ffc94d,#ffaa00)}.nb-theme-corporate :host nb-card .icon.status-warning:hover{background-image:linear-gradient(to right,#ffe59e,#ffc94d)}.nb-theme-corporate :host nb-card .icon.status-danger{background-image:linear-gradient(to right,#ff708d,#ff3d71)}.nb-theme-corporate :host nb-card .icon.status-danger:hover{background-image:linear-gradient(to right,#ffa8b4,#ff708d)}.nb-theme-corporate :host nb-card .icon.status-info{background-image:linear-gradient(to right,#42aaff,#0095ff)}.nb-theme-corporate :host nb-card .icon.status-info:hover{background-image:linear-gradient(to right,#94cbff,#42aaff)}.nb-theme-corporate :host nb-card .icon.status-control{background-image:linear-gradient(to right,#ffffff,#ffffff)}.nb-theme-corporate :host nb-card .icon.status-control:hover{background-image:linear-gradient(to right,#ffffff,#f7f9fc)}.nb-theme-corporate :host nb-card.off{color:#8f9bb3}.nb-theme-corporate :host nb-card.off .status,.nb-theme-corporate :host nb-card.off .title,.nb-theme-corporate :host nb-card.off .icon{color:#8f9bb3}.nb-theme-corporate :host nb-card.off .icon.status-basic{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-corporate :host nb-card.off .icon.status-primary{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-corporate :host nb-card.off .icon.status-success{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-corporate :host nb-card.off .icon.status-warning{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-corporate :host nb-card.off .icon.status-danger{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-corporate :host nb-card.off .icon.status-info{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-corporate :host nb-card.off .icon.status-control{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-corporate :host nb-card .details{display:flex;flex-direction:column;justify-content:center;height:100%;border-left:1px solid transparent}[dir=ltr] .nb-theme-corporate :host nb-card .details{padding:0 .5rem 0 .75rem}[dir=rtl] .nb-theme-corporate :host nb-card .details{padding:0 .75rem 0 .5rem}.nb-theme-corporate :host nb-card .title{margin:0}.nb-theme-corporate :host nb-card .status{text-transform:uppercase}\n"], components: [{ type: i1$1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }], directives: [{ type: i2$2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], pipes: { "translate": i3.TranslatePipe, "async": i2$2.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HomePageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-home-page',
                    styleUrls: ['./home-page.component.scss'],
                    templateUrl: './home-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [PROFILE_INDEXED_DB]
                }] }]; } });

const EXTRA_COMPONENTS = [
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
class DoExtraModule {
}
DoExtraModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoExtraModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoExtraModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoExtraModule, declarations: [ExtraComponent,
        ChangePasswordPageComponent,
        DeactivatedPromptComponent,
        DeactivatedProviderPromptComponent,
        SecurityPageComponent,
        SettingsPageComponent,
        ProfilePageComponent,
        HomePageComponent,
        TermsConditionsPageComponent,
        PrivacyPolicyPageComponent,
        SwitchRolePageComponent], imports: [FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        NbCardModule,
        NbAlertModule,
        NbIconModule,
        NbButtonModule,
        NbAccordionModule, i1$1.NbDialogModule, DoThemeModule,
        DoInputModule,
        DoCheckBoxModule,
        DoButtonModule,
        DoBaseModule,
        DoEditorModule,
        DoSelectModule,
        DoDatePickerModule,
        DoImageModule,
        DoExtraRoutingModule] });
DoExtraModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoExtraModule, imports: [[
            FormsModule,
            ReactiveFormsModule,
            TranslateModule,
            NbCardModule,
            NbAlertModule,
            NbIconModule,
            NbButtonModule,
            NbAccordionModule,
            NbDialogModule.forChild(),
            DoThemeModule,
            DoInputModule,
            DoCheckBoxModule,
            DoButtonModule,
            DoBaseModule,
            DoEditorModule,
            DoSelectModule,
            DoDatePickerModule,
            DoImageModule,
            DoExtraRoutingModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoExtraModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        FormsModule,
                        ReactiveFormsModule,
                        TranslateModule,
                        NbCardModule,
                        NbAlertModule,
                        NbIconModule,
                        NbButtonModule,
                        NbAccordionModule,
                        NbDialogModule.forChild(),
                        DoThemeModule,
                        DoInputModule,
                        DoCheckBoxModule,
                        DoButtonModule,
                        DoBaseModule,
                        DoEditorModule,
                        DoSelectModule,
                        DoDatePickerModule,
                        DoImageModule,
                        DoExtraRoutingModule,
                    ],
                    declarations: [
                        ...EXTRA_COMPONENTS,
                    ],
                }]
        }] });

/*
 * Public API Surface of do-extra
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DoExtraModule, HomePageComponent };
//# sourceMappingURL=dongkap-do-extra.js.map
