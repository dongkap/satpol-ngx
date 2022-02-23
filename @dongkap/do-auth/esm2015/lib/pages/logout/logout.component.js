import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/auth-token.service";
import * as i2 from "@nebular/theme";
import * as i3 from "@ngx-translate/core";
export class LogoutComponent {
    constructor(authTokenService) {
        this.authTokenService = authTokenService;
        this.authTokenService.logout();
    }
}
LogoutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LogoutComponent, deps: [{ token: i1.AuthTokenService }], target: i0.ɵɵFactoryTarget.Component });
LogoutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: LogoutComponent, selector: "do-logout", ngImport: i0, template: "<p class=\"sub-title\">{{ 'message.logout' | translate }}</p>\n<div class=\"spinner-area\" [nbSpinner]=\"true\" nbSpinnerSize=\"small\" nbSpinnerStatus=\"info\">", styles: [".nb-theme-default :host .sub-title{margin:1rem}.nb-theme-default :host .spinner-area{height:22px}.nb-theme-default :host ::ng-deep nb-spinner{background:transparent!important}.nb-theme-dark :host .sub-title{margin:1rem}.nb-theme-dark :host .spinner-area{height:22px}.nb-theme-dark :host ::ng-deep nb-spinner{background:transparent!important}.nb-theme-cosmic :host .sub-title{margin:1rem}.nb-theme-cosmic :host .spinner-area{height:22px}.nb-theme-cosmic :host ::ng-deep nb-spinner{background:transparent!important}.nb-theme-corporate :host .sub-title{margin:1rem}.nb-theme-corporate :host .spinner-area{height:22px}.nb-theme-corporate :host ::ng-deep nb-spinner{background:transparent!important}\n"], directives: [{ type: i2.NbSpinnerDirective, selector: "[nbSpinner]", inputs: ["nbSpinnerStatus", "nbSpinnerSize", "nbSpinner", "nbSpinnerMessage"] }], pipes: { "translate": i3.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LogoutComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-logout',
                    styleUrls: ['logout.component.scss'],
                    templateUrl: 'logout.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i1.AuthTokenService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLWF1dGgvc3JjL2xpYi9wYWdlcy9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLWF1dGgvc3JjL2xpYi9wYWdlcy9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBUTFDLE1BQU0sT0FBTyxlQUFlO0lBRXhCLFlBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs2R0FKUSxlQUFlO2lHQUFmLGVBQWUsaURDUjVCLG1LQUMwRjs0RkRPN0UsZUFBZTtrQkFMM0IsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsV0FBVztvQkFDckIsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7b0JBQ3BDLFdBQVcsRUFBRSx1QkFBdUI7aUJBQ3ZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aC10b2tlbi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdkby1sb2dvdXQnLFxuICAgIHN0eWxlVXJsczogWydsb2dvdXQuY29tcG9uZW50LnNjc3MnXSxcbiAgICB0ZW1wbGF0ZVVybDogJ2xvZ291dC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIExvZ291dENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhUb2tlblNlcnZpY2U6IEF1dGhUb2tlblNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5hdXRoVG9rZW5TZXJ2aWNlLmxvZ291dCgpO1xuICAgIH1cbn1cbiIsIjxwIGNsYXNzPVwic3ViLXRpdGxlXCI+e3sgJ21lc3NhZ2UubG9nb3V0JyB8IHRyYW5zbGF0ZSB9fTwvcD5cbjxkaXYgY2xhc3M9XCJzcGlubmVyLWFyZWFcIiBbbmJTcGlubmVyXT1cInRydWVcIiBuYlNwaW5uZXJTaXplPVwic21hbGxcIiBuYlNwaW5uZXJTdGF0dXM9XCJpbmZvXCI+Il19