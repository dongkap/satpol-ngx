import { Component } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { ResponseCode, OAUTH_INFO, EncryptionService } from '@dongkap/do-core';
import { AuthTokenService } from '@dongkap/do-auth';
import { BaseFormComponent } from '@dongkap/do-shared';
import { DeactivatedPromptComponent } from './prompt/deactivated-prompt.component';
import { DeactivatedProviderPromptComponent } from './prompt/deactivated-provider-prompt.component';
import * as i0 from "@angular/core";
import * as i1 from "@nebular/theme";
import * as i2 from "@dongkap/do-auth";
import * as i3 from "../password/change-password-page.component";
import * as i4 from "../switch-role/switch-role-page.component";
import * as i5 from "@angular/common";
import * as i6 from "@ngx-translate/core";
export class SecurityPageComponent extends BaseFormComponent {
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
SecurityPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SecurityPageComponent, deps: [{ token: i0.Injector }, { token: i1.NbDialogService }, { token: i2.AuthIndexedDBService }], target: i0.ɵɵFactoryTarget.Component });
SecurityPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: SecurityPageComponent, selector: "do-security-page", usesInheritance: true, ngImport: i0, template: "<do-change-password-page *ngIf=\"!authProvider\"></do-change-password-page>\n<nb-card *ngIf=\"authProvider\">\n    <nb-card-body>\n        <div class=\"row\">\n            <nb-icon [status]=\"'info'\" [icon]=\"'google'\" class=\"icon-provider\"></nb-icon>\n            <p class=\"text-provider\">\n                {{ 'message.provider' | translate:provider}}\n            </p>\n        </div>\n    </nb-card-body>\n</nb-card>\n<do-switch-role-page></do-switch-role-page>\n<nb-card>\n    <nb-card-body>\n        <div class=\"row\">\n            <div class=\"col-md-3 col-lg-3\">\n                <button\n                    type=\"button\"\n                    status=\"danger\"\n                    size=\"large\"\n                    class=\"deactivated-button\"\n                    [disabled]=\"disabled\"\n                    (click)=\"onSubmit()\"\n                    nbButton fullWidth>\n                    {{ 'Deactivate Account' | translate }}\n                </button>\n            </div>\n            <div class=\"col-md-8 col-lg-8\">\n                <h6 class=\"text-danger deactivated-label\">\n                    {{ 'message.deactivated-account' | translate }}\n                </h6>\n            </div>\n        </div>\n    </nb-card-body>\n</nb-card>\n", styles: [".nb-theme-default :host button.deactivated-button{width:100%;margin:.5rem 0}.nb-theme-default :host h6.deactivated-label{padding-top:10px;text-align:center}.nb-theme-default :host .icon-provider{margin:1rem 0 1rem 1.5rem}.nb-theme-default :host .text-provider{margin:1rem 1.5rem}@media (max-width: 767.98px){.nb-theme-default :host .icon-provider{margin:1rem 0 1rem .5rem}.nb-theme-default :host .text-provider{margin:1rem 0 1rem .5rem}}.nb-theme-dark :host button.deactivated-button{width:100%;margin:.5rem 0}.nb-theme-dark :host h6.deactivated-label{padding-top:10px;text-align:center}.nb-theme-dark :host .icon-provider{margin:1rem 0 1rem 1.5rem}.nb-theme-dark :host .text-provider{margin:1rem 1.5rem}@media (max-width: 767.98px){.nb-theme-dark :host .icon-provider{margin:1rem 0 1rem .5rem}.nb-theme-dark :host .text-provider{margin:1rem 0 1rem .5rem}}.nb-theme-cosmic :host button.deactivated-button{width:100%;margin:.5rem 0}.nb-theme-cosmic :host h6.deactivated-label{padding-top:10px;text-align:center}.nb-theme-cosmic :host .icon-provider{margin:1rem 0 1rem 1.5rem}.nb-theme-cosmic :host .text-provider{margin:1rem 1.5rem}@media (max-width: 767.98px){.nb-theme-cosmic :host .icon-provider{margin:1rem 0 1rem .5rem}.nb-theme-cosmic :host .text-provider{margin:1rem 0 1rem .5rem}}.nb-theme-corporate :host button.deactivated-button{width:100%;margin:.5rem 0}.nb-theme-corporate :host h6.deactivated-label{padding-top:10px;text-align:center}.nb-theme-corporate :host .icon-provider{margin:1rem 0 1rem 1.5rem}.nb-theme-corporate :host .text-provider{margin:1rem 1.5rem}@media (max-width: 767.98px){.nb-theme-corporate :host .icon-provider{margin:1rem 0 1rem .5rem}.nb-theme-corporate :host .text-provider{margin:1rem 0 1rem .5rem}}\n"], components: [{ type: i3.ChangePasswordPageComponent, selector: "do-change-password-page" }, { type: i1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i1.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }, { type: i4.SwitchRolePageComponent, selector: "do-switch-role-page" }, { type: i1.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], pipes: { "translate": i6.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SecurityPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-security-page',
                    styleUrls: ['./security-page.component.scss'],
                    templateUrl: './security-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.NbDialogService }, { type: i2.AuthIndexedDBService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdXJpdHktcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1leHRyYS9zcmMvbGliL3NlY3VyaXR5L3NlY3VyaXR5LXBhZ2UuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tZXh0cmEvc3JjL2xpYi9zZWN1cml0eS9zZWN1cml0eS1wYWdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVksTUFBTSxlQUFlLENBQUM7QUFFcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFDTCxZQUFZLEVBQ1osVUFBVSxFQUVWLGlCQUFpQixFQUNqQixNQUFNLGtCQUFrQixDQUFDO0FBRTNCLE9BQU8sRUFBd0IsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNuRixPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQzs7Ozs7Ozs7QUFPcEcsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGlCQUFzQjtJQVEvRCxZQUNTLFFBQWtCLEVBQ2pCLGFBQThCLEVBQzlCLGFBQW1DO1FBQzNDLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDZCxRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUMsQ0FBQztRQUxJLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQWlCO1FBQzlCLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQU50QyxpQkFBWSxHQUFZLElBQUksQ0FBQztRQVVsQyxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsaUJBQWlC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MnZDQW1DQTs0RkRkYSxxQkFBcUI7a0JBTGpDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7b0JBQzdDLFdBQVcsRUFBRSxnQ0FBZ0M7aUJBQzlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTmJEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHtcbiAgUmVzcG9uc2VDb2RlLFxuICBPQVVUSF9JTkZPLFxuICBTZWN1cml0eVJlc291cmNlTW9kZWwsXG4gIEVuY3J5cHRpb25TZXJ2aWNlXG4gfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IEFwaUJhc2VSZXNwb25zZSB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgQXV0aEluZGV4ZWREQlNlcnZpY2UsIEF1dGhUb2tlblNlcnZpY2UgfSBmcm9tICdAZG9uZ2thcC9kby1hdXRoJztcbmltcG9ydCB7IEJhc2VGb3JtQ29tcG9uZW50IH0gZnJvbSAnQGRvbmdrYXAvZG8tc2hhcmVkJztcbmltcG9ydCB7IERlYWN0aXZhdGVkUHJvbXB0Q29tcG9uZW50IH0gZnJvbSAnLi9wcm9tcHQvZGVhY3RpdmF0ZWQtcHJvbXB0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEZWFjdGl2YXRlZFByb3ZpZGVyUHJvbXB0Q29tcG9uZW50IH0gZnJvbSAnLi9wcm9tcHQvZGVhY3RpdmF0ZWQtcHJvdmlkZXItcHJvbXB0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLXNlY3VyaXR5LXBhZ2UnLFxuICBzdHlsZVVybHM6IFsnLi9zZWN1cml0eS1wYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWN1cml0eS1wYWdlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU2VjdXJpdHlQYWdlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUZvcm1Db21wb25lbnQ8YW55PiB7XG5cbiAgcHJpdmF0ZSBlbmM6IEVuY3J5cHRpb25TZXJ2aWNlO1xuICBwcml2YXRlIG9hdXRoUmVzb3VyY2U6IFNlY3VyaXR5UmVzb3VyY2VNb2RlbDtcbiAgcHJpdmF0ZSBhdXRoVG9rZW46IEF1dGhUb2tlblNlcnZpY2U7XG4gIHB1YmxpYyBhdXRoUHJvdmlkZXI6IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgcHJvdmlkZXI6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgZGlhbG9nU2VydmljZTogTmJEaWFsb2dTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXV0aEluZGV4ZWREQjogQXV0aEluZGV4ZWREQlNlcnZpY2UpIHtcbiAgICBzdXBlcihpbmplY3Rvciwge1xuICAgICAgcGFzc3dvcmQ6IFtdLFxuICAgIH0pO1xuICAgIHRoaXMuZW5jID0gaW5qZWN0b3IuZ2V0KEVuY3J5cHRpb25TZXJ2aWNlKTtcbiAgICB0aGlzLm9hdXRoUmVzb3VyY2UgPSBpbmplY3Rvci5nZXQoT0FVVEhfSU5GTyk7XG4gICAgdGhpcy5hdXRoVG9rZW4gPSBpbmplY3Rvci5nZXQoQXV0aFRva2VuU2VydmljZSk7XG4gICAgdGhpcy5hdXRoSW5kZXhlZERCLmdldEVuYygncHJvdmlkZXInKS50aGVuKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLnByb3ZpZGVyID0ge1xuICAgICAgICB2YWx1ZSxcbiAgICAgIH07XG4gICAgICBpZiAodmFsdWUgPT09ICdsb2NhbCcpIHtcbiAgICAgICAgdGhpcy5hdXRoUHJvdmlkZXIgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG9uU3VibWl0KCk6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgIGlmICh0aGlzLmF1dGhQcm92aWRlcikge1xuICAgICAgdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oRGVhY3RpdmF0ZWRQcm92aWRlclByb21wdENvbXBvbmVudClcbiAgICAgICAgLm9uQ2xvc2Uuc3Vic2NyaWJlKChlbWFpbDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgaWYgKGVtYWlsKSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGE6IGFueSA9IHtcbiAgICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICAgIHByb3ZpZGVyOiB0aGlzLnByb3ZpZGVyWyd2YWx1ZSddLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIChzdXBlci5vblN1Ym1pdChkYXRhLCAnc2VjdXJpdHknLCAnZGVhY3RpdmF0ZWQnKSBhcyBPYnNlcnZhYmxlPEFwaUJhc2VSZXNwb25zZT4pXG4gICAgICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2U6IEFwaUJhc2VSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3BTdGF0dXNDb2RlID09PSBSZXNwb25zZUNvZGUuT0tfU0NSMDAzLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoVG9rZW4ubG9nb3V0KCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKERlYWN0aXZhdGVkUHJvbXB0Q29tcG9uZW50KVxuICAgICAgICAub25DbG9zZS5zdWJzY3JpYmUoKHBhc3N3b3JkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICBpZiAocGFzc3dvcmQpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgY29uc3QgZGF0YTogYW55ID0ge1xuICAgICAgICAgICAgICBwYXNzd29yZDogdGhpcy5lbmMuZW5jcnlwdEFFUyh0aGlzLm9hdXRoUmVzb3VyY2VbJ2Flc19rZXknXSwgcGFzc3dvcmQpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIChzdXBlci5vblN1Ym1pdChkYXRhLCAnc2VjdXJpdHknLCAnZGVhY3RpdmF0ZWQnKSBhcyBPYnNlcnZhYmxlPEFwaUJhc2VSZXNwb25zZT4pXG4gICAgICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2U6IEFwaUJhc2VSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3BTdGF0dXNDb2RlID09PSBSZXNwb25zZUNvZGUuT0tfU0NSMDAzLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoVG9rZW4ubG9nb3V0KCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbn1cbiIsIjxkby1jaGFuZ2UtcGFzc3dvcmQtcGFnZSAqbmdJZj1cIiFhdXRoUHJvdmlkZXJcIj48L2RvLWNoYW5nZS1wYXNzd29yZC1wYWdlPlxuPG5iLWNhcmQgKm5nSWY9XCJhdXRoUHJvdmlkZXJcIj5cbiAgICA8bmItY2FyZC1ib2R5PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8bmItaWNvbiBbc3RhdHVzXT1cIidpbmZvJ1wiIFtpY29uXT1cIidnb29nbGUnXCIgY2xhc3M9XCJpY29uLXByb3ZpZGVyXCI+PC9uYi1pY29uPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXByb3ZpZGVyXCI+XG4gICAgICAgICAgICAgICAge3sgJ21lc3NhZ2UucHJvdmlkZXInIHwgdHJhbnNsYXRlOnByb3ZpZGVyfX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9uYi1jYXJkLWJvZHk+XG48L25iLWNhcmQ+XG48ZG8tc3dpdGNoLXJvbGUtcGFnZT48L2RvLXN3aXRjaC1yb2xlLXBhZ2U+XG48bmItY2FyZD5cbiAgICA8bmItY2FyZC1ib2R5PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTMgY29sLWxnLTNcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM9XCJkYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImRlYWN0aXZhdGVkLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvblN1Ym1pdCgpXCJcbiAgICAgICAgICAgICAgICAgICAgbmJCdXR0b24gZnVsbFdpZHRoPlxuICAgICAgICAgICAgICAgICAgICB7eyAnRGVhY3RpdmF0ZSBBY2NvdW50JyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTggY29sLWxnLThcIj5cbiAgICAgICAgICAgICAgICA8aDYgY2xhc3M9XCJ0ZXh0LWRhbmdlciBkZWFjdGl2YXRlZC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICB7eyAnbWVzc2FnZS5kZWFjdGl2YXRlZC1hY2NvdW50JyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9uYi1jYXJkLWJvZHk+XG48L25iLWNhcmQ+XG4iXX0=