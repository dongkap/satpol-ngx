import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@ngx-translate/core";
export class FooterComponent {
    constructor() {
        this.year = (new Date()).getFullYear();
    }
}
FooterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: FooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FooterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: FooterComponent, selector: "do-footer", ngImport: i0, template: `
  <span class="created-by">© {{year}} {{ 'SMART' | translate }}</span>
  <a [routerLink]="'/app/user/terms'">{{ 'message.terms-conditions' | translate }}</a>
  <a [routerLink]="'/app/user/privacy-policy'">{{ 'message.privacy-policy' | translate }}</a>
  `, isInline: true, styles: [".nb-theme-default :host{width:100%;display:flex}.nb-theme-default :host a{padding:0 0 0 1rem;color:#8f9bb3;transition:color ease-out .1s}.nb-theme-default :host a:hover{color:#222b45}.nb-theme-dark :host{width:100%;display:flex}.nb-theme-dark :host a{padding:0 0 0 1rem;color:#8f9bb3;transition:color ease-out .1s}.nb-theme-dark :host a:hover{color:#fff}.nb-theme-cosmic :host{width:100%;display:flex}.nb-theme-cosmic :host a{padding:0 0 0 1rem;color:#b4b4db;transition:color ease-out .1s}.nb-theme-cosmic :host a:hover{color:#fff}.nb-theme-corporate :host{width:100%;display:flex}.nb-theme-corporate :host a{padding:0 0 0 1rem;color:#8f9bb3;transition:color ease-out .1s}.nb-theme-corporate :host a:hover{color:#222b45}\n"], directives: [{ type: i1.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }], pipes: { "translate": i2.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: FooterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-footer',
                    styleUrls: ['./footer.component.scss'],
                    template: `
  <span class="created-by">© {{year}} {{ 'SMART' | translate }}</span>
  <a [routerLink]="'/app/user/terms'">{{ 'message.terms-conditions' | translate }}</a>
  <a [routerLink]="'/app/user/privacy-policy'">{{ 'message.privacy-policy' | translate }}</a>
  `,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXRoZW1lL3NyYy9saWIvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBVzFDLE1BQU0sT0FBTyxlQUFlO0lBVDVCO1FBVVMsU0FBSSxHQUFXLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ2xEOzs2R0FGWSxlQUFlO2lHQUFmLGVBQWUsaURBTmhCOzs7O0dBSVQ7NEZBRVUsZUFBZTtrQkFUM0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7b0JBQ3RDLFFBQVEsRUFBRTs7OztHQUlUO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLWZvb3RlcicsXG4gIHN0eWxlVXJsczogWycuL2Zvb3Rlci5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZTogYFxuICA8c3BhbiBjbGFzcz1cImNyZWF0ZWQtYnlcIj7CqSB7e3llYXJ9fSB7eyAnU01BUlQnIHwgdHJhbnNsYXRlIH19PC9zcGFuPlxuICA8YSBbcm91dGVyTGlua109XCInL2FwcC91c2VyL3Rlcm1zJ1wiPnt7ICdtZXNzYWdlLnRlcm1zLWNvbmRpdGlvbnMnIHwgdHJhbnNsYXRlIH19PC9hPlxuICA8YSBbcm91dGVyTGlua109XCInL2FwcC91c2VyL3ByaXZhY3ktcG9saWN5J1wiPnt7ICdtZXNzYWdlLnByaXZhY3ktcG9saWN5JyB8IHRyYW5zbGF0ZSB9fTwvYT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgRm9vdGVyQ29tcG9uZW50IHtcbiAgcHVibGljIHllYXI6IG51bWJlciA9IChuZXcgRGF0ZSgpKS5nZXRGdWxsWWVhcigpO1xufVxuIl19