import { Component } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Pattern, EncryptionService, ResponseCode, OAUTH_INFO, } from '@dongkap/do-core';
import { BaseFormComponent } from '@dongkap/do-shared';
import * as i0 from "@angular/core";
import * as i1 from "@dongkap/do-shared";
import * as i2 from "@angular/forms";
export class ChangePasswordPageComponent extends BaseFormComponent {
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
ChangePasswordPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ChangePasswordPageComponent, selector: "do-change-password-page", usesInheritance: true, ngImport: i0, template: "<do-page-outlet [header]=\"'Change Password'\">\n  <form [formGroup]=\"formGroup\" pagecontent>\n    <do-input-text\n      [name]=\"'password'\"\n      [label]=\"'Password'\"\n      [type]=\"'password'\"\n      [required]=\"true\"\n      formControlName=\"password\">\n    </do-input-text>\n    <do-input-text\n      [name]=\"'newPassword'\"\n      [label]=\"'New Password'\"\n      [type]=\"'password'\"\n      [required]=\"true\"\n      [pattern]=\"passwordPattern\"\n      doValidateNotEqual=\"password\"\n      formControlName=\"newPassword\">\n    </do-input-text>\n    <do-input-text\n      [name]=\"'confirmPassword'\"\n      [label]=\"'Confirm Password'\"\n      [type]=\"'password'\"\n      [required]=\"true\"\n      doValidateEqual=\"newPassword\"\n      formControlName=\"confirmPassword\">\n    </do-input-text>\n  </form>\n  <div class=\"offset-sm-3 col-sm-9\" pagefooter>\n    <do-button\n      (onSubmit)=\"onSubmit()\"\n      [name]=\"'Update Password'\"\n      [formGroupButton]=\"formGroup\"\n      [disabledButton]=\"disabled\">\n    </do-button>\n  </div>\n</do-page-outlet>\n", styles: [""], components: [{ type: i1.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i1.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i1.DoButtonComponent, selector: "do-button", inputs: ["formGroupButton", "name", "disabledButton", "type", "status", "size", "skeleton"], outputs: ["onSubmit"] }], directives: [{ type: i2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i1.NotEqualValidator, selector: "[doValidateNotEqual][formControlName],[doValidateNotEqual][formControl],[doValidateNotEqual][ngModel]" }, { type: i2.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { type: i1.EqualValidator, selector: "[doValidateEqual][formControlName],[doValidateEqual][formControl],[doValidateEqual][ngModel]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ChangePasswordPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-change-password-page',
                    styleUrls: ['./change-password-page.component.scss'],
                    templateUrl: './change-password-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tZXh0cmEvc3JjL2xpYi9wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQtcGFnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1leHRyYS9zcmMvbGliL3Bhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC1wYWdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVksTUFBTSxlQUFlLENBQUM7QUFFcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFDTCxPQUFPLEVBQ1AsaUJBQWlCLEVBQ2pCLFlBQVksRUFDWixVQUFVLEdBRVgsTUFBTSxrQkFBa0IsQ0FBQztBQUUxQixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQU92RCxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsaUJBQXNCO0lBTXJFLFlBQW1CLFFBQWtCO1FBQ25DLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDZCxRQUFRLEVBQUUsRUFBRTtZQUNaLFdBQVcsRUFBRSxFQUFFO1lBQ2YsZUFBZSxFQUFFLEVBQUU7U0FDcEIsQ0FBQyxDQUFDO1FBTGMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUpyQyxvQkFBZSxHQUFXLE9BQU8sQ0FBQyxlQUFlLENBQUM7UUFVaEQsSUFBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxRQUFRO1FBQ04sTUFBTSxJQUFJLEdBQVE7WUFDaEIsUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ2xHLFdBQVcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUN4RyxlQUFlLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUNqSCxDQUFDO1FBQ0QsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixDQUFpQzthQUMzRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM5QixTQUFTLENBQUMsQ0FBQyxRQUF5QixFQUFFLEVBQUU7WUFDdkMsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osUUFBUSxRQUFRLENBQUMsY0FBYyxFQUFFO29CQUMvQixLQUFLLFlBQVksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFO3dCQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLENBQUM7NEJBQzVDLFNBQVMsRUFBRSxJQUFJO3lCQUNoQixDQUFDLENBQUM7d0JBQ0gsTUFBTTtvQkFDUixLQUFLLFlBQVksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFO3dCQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTLENBQUM7NEJBQy9DLEtBQUssRUFBRSxJQUFJO3lCQUNaLENBQUMsQ0FBQzt3QkFDSCxNQUFNO29CQUNSO3dCQUNFLE1BQU07aUJBQ1Q7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ2IsQ0FBQzs7eUhBMUNVLDJCQUEyQjs2R0FBM0IsMkJBQTJCLHNGQ2xCeEMsMmtDQW9DQTs0RkRsQmEsMkJBQTJCO2tCQUx2QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLFNBQVMsRUFBRSxDQUFDLHVDQUF1QyxDQUFDO29CQUNwRCxXQUFXLEVBQUUsdUNBQXVDO2lCQUNyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIFBhdHRlcm4sXG4gIEVuY3J5cHRpb25TZXJ2aWNlLFxuICBSZXNwb25zZUNvZGUsXG4gIE9BVVRIX0lORk8sXG4gIFNlY3VyaXR5UmVzb3VyY2VNb2RlbCxcbn0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBBcGlCYXNlUmVzcG9uc2UgfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IEJhc2VGb3JtQ29tcG9uZW50IH0gZnJvbSAnQGRvbmdrYXAvZG8tc2hhcmVkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8tY2hhbmdlLXBhc3N3b3JkLXBhZ2UnLFxuICBzdHlsZVVybHM6IFsnLi9jaGFuZ2UtcGFzc3dvcmQtcGFnZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hhbmdlLXBhc3N3b3JkLXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZFBhZ2VDb21wb25lbnQgZXh0ZW5kcyBCYXNlRm9ybUNvbXBvbmVudDxhbnk+IHtcblxuICBwYXNzd29yZFBhdHRlcm46IHN0cmluZyA9IFBhdHRlcm4uUEFTU1dPUkRfTUVESVVNO1xuICBwcml2YXRlIGVuYzogRW5jcnlwdGlvblNlcnZpY2U7XG4gIHByaXZhdGUgb2F1dGhSZXNvdXJjZTogU2VjdXJpdHlSZXNvdXJjZU1vZGVsO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBzdXBlcihpbmplY3Rvciwge1xuICAgICAgcGFzc3dvcmQ6IFtdLFxuICAgICAgbmV3UGFzc3dvcmQ6IFtdLFxuICAgICAgY29uZmlybVBhc3N3b3JkOiBbXSxcbiAgICB9KTtcbiAgICB0aGlzLmVuYyA9IGluamVjdG9yLmdldChFbmNyeXB0aW9uU2VydmljZSk7XG4gICAgdGhpcy5vYXV0aFJlc291cmNlID0gaW5qZWN0b3IuZ2V0KE9BVVRIX0lORk8pO1xuICB9XG5cbiAgb25TdWJtaXQoKTogdm9pZCB7XG4gICAgY29uc3QgZGF0YTogYW55ID0ge1xuICAgICAgcGFzc3dvcmQ6IHRoaXMuZW5jLmVuY3J5cHRBRVModGhpcy5vYXV0aFJlc291cmNlWydhZXNfa2V5J10sIHRoaXMuZm9ybUdyb3VwLmdldCgncGFzc3dvcmQnKS52YWx1ZSksXG4gICAgICBuZXdQYXNzd29yZDogdGhpcy5lbmMuZW5jcnlwdEFFUyh0aGlzLm9hdXRoUmVzb3VyY2VbJ2Flc19rZXknXSwgdGhpcy5mb3JtR3JvdXAuZ2V0KCduZXdQYXNzd29yZCcpLnZhbHVlKSxcbiAgICAgIGNvbmZpcm1QYXNzd29yZDogdGhpcy5lbmMuZW5jcnlwdEFFUyh0aGlzLm9hdXRoUmVzb3VyY2VbJ2Flc19rZXknXSwgdGhpcy5mb3JtR3JvdXAuZ2V0KCdjb25maXJtUGFzc3dvcmQnKS52YWx1ZSksXG4gICAgfTtcbiAgICAoc3VwZXIub25TdWJtaXQoZGF0YSwgJ3NlY3VyaXR5JywgJ2NoYW5nZS1wYXNzd29yZCcpIGFzIE9ic2VydmFibGU8QXBpQmFzZVJlc3BvbnNlPilcbiAgICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlOiBBcGlCYXNlUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChyZXNwb25zZS5yZXNwU3RhdHVzQ29kZSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSBSZXNwb25zZUNvZGUuRVJSX1NDUjAwMDIudG9TdHJpbmcoKTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ3Bhc3N3b3JkJ10uc2V0RXJyb3JzKHtcbiAgICAgICAgICAgICAgICAgICAgICBpbmNvcnJlY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgUmVzcG9uc2VDb2RlLkVSUl9TQ1IwMDA2LnRvU3RyaW5nKCk6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWyduZXdQYXNzd29yZCddLnNldEVycm9ycyh7XG4gICAgICAgICAgICAgICAgICAgICAgZXF1YWw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gIH1cblxufVxuIiwiPGRvLXBhZ2Utb3V0bGV0IFtoZWFkZXJdPVwiJ0NoYW5nZSBQYXNzd29yZCdcIj5cbiAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIiBwYWdlY29udGVudD5cbiAgICA8ZG8taW5wdXQtdGV4dFxuICAgICAgW25hbWVdPVwiJ3Bhc3N3b3JkJ1wiXG4gICAgICBbbGFiZWxdPVwiJ1Bhc3N3b3JkJ1wiXG4gICAgICBbdHlwZV09XCIncGFzc3dvcmQnXCJcbiAgICAgIFtyZXF1aXJlZF09XCJ0cnVlXCJcbiAgICAgIGZvcm1Db250cm9sTmFtZT1cInBhc3N3b3JkXCI+XG4gICAgPC9kby1pbnB1dC10ZXh0PlxuICAgIDxkby1pbnB1dC10ZXh0XG4gICAgICBbbmFtZV09XCInbmV3UGFzc3dvcmQnXCJcbiAgICAgIFtsYWJlbF09XCInTmV3IFBhc3N3b3JkJ1wiXG4gICAgICBbdHlwZV09XCIncGFzc3dvcmQnXCJcbiAgICAgIFtyZXF1aXJlZF09XCJ0cnVlXCJcbiAgICAgIFtwYXR0ZXJuXT1cInBhc3N3b3JkUGF0dGVyblwiXG4gICAgICBkb1ZhbGlkYXRlTm90RXF1YWw9XCJwYXNzd29yZFwiXG4gICAgICBmb3JtQ29udHJvbE5hbWU9XCJuZXdQYXNzd29yZFwiPlxuICAgIDwvZG8taW5wdXQtdGV4dD5cbiAgICA8ZG8taW5wdXQtdGV4dFxuICAgICAgW25hbWVdPVwiJ2NvbmZpcm1QYXNzd29yZCdcIlxuICAgICAgW2xhYmVsXT1cIidDb25maXJtIFBhc3N3b3JkJ1wiXG4gICAgICBbdHlwZV09XCIncGFzc3dvcmQnXCJcbiAgICAgIFtyZXF1aXJlZF09XCJ0cnVlXCJcbiAgICAgIGRvVmFsaWRhdGVFcXVhbD1cIm5ld1Bhc3N3b3JkXCJcbiAgICAgIGZvcm1Db250cm9sTmFtZT1cImNvbmZpcm1QYXNzd29yZFwiPlxuICAgIDwvZG8taW5wdXQtdGV4dD5cbiAgPC9mb3JtPlxuICA8ZGl2IGNsYXNzPVwib2Zmc2V0LXNtLTMgY29sLXNtLTlcIiBwYWdlZm9vdGVyPlxuICAgIDxkby1idXR0b25cbiAgICAgIChvblN1Ym1pdCk9XCJvblN1Ym1pdCgpXCJcbiAgICAgIFtuYW1lXT1cIidVcGRhdGUgUGFzc3dvcmQnXCJcbiAgICAgIFtmb3JtR3JvdXBCdXR0b25dPVwiZm9ybUdyb3VwXCJcbiAgICAgIFtkaXNhYmxlZEJ1dHRvbl09XCJkaXNhYmxlZFwiPlxuICAgIDwvZG8tYnV0dG9uPlxuICA8L2Rpdj5cbjwvZG8tcGFnZS1vdXRsZXQ+XG4iXX0=