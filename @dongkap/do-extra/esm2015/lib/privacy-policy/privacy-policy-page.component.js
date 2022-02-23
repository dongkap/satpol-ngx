import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from '@dongkap/do-shared';
import * as i0 from "@angular/core";
import * as i1 from "@dongkap/do-shared";
export class PrivacyPolicyPageComponent extends BaseComponent {
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
PrivacyPolicyPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: PrivacyPolicyPageComponent, selector: "do-privacy-policy-page-page", usesInheritance: true, ngImport: i0, template: "<!-- https://www.privacypolicyonline.com/live.php?token=XnC0EXuhJuJgyXGsOZNL33fGEGwzLvlU -->\n<do-page-outlet [header]=\"'header.privacy-policy'\">\n  <div [innerHTML]=\"content\" pagecontent></div>\n</do-page-outlet>\n", styles: [""], components: [{ type: i1.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PrivacyPolicyPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-privacy-policy-page-page',
                    styleUrls: ['./privacy-policy-page.component.scss'],
                    templateUrl: './privacy-policy-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpdmFjeS1wb2xpY3ktcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1leHRyYS9zcmMvbGliL3ByaXZhY3ktcG9saWN5L3ByaXZhY3ktcG9saWN5LXBhZ2UuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tZXh0cmEvc3JjL2xpYi9wcml2YWN5LXBvbGljeS9wcml2YWN5LXBvbGljeS1wYWdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVksTUFBTSxlQUFlLENBQUM7QUFHcEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7QUFPbkQsTUFBTSxPQUFPLDBCQUEyQixTQUFRLGFBQWtCO0lBS2hFLFlBQW1CLFFBQWtCO1FBQ25DLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQURDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFGM0IsYUFBUSxHQUFpQixJQUFJLE9BQU8sRUFBTyxDQUFDO0lBSXRELENBQUM7SUFFRCxRQUFRO1FBQ04sTUFBTSxJQUFJLEdBQVE7WUFDaEIsYUFBYSxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUM7YUFDekQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUIsU0FBUyxDQUFDLENBQUMsUUFBYSxFQUFFLEVBQUU7WUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzlCLENBQUM7O3dIQXhCVSwwQkFBMEI7NEdBQTFCLDBCQUEwQiwwRkNadkMsNk5BSUE7NEZEUWEsMEJBQTBCO2tCQUx0QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSw2QkFBNkI7b0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxDQUFDO29CQUNuRCxXQUFXLEVBQUUsc0NBQXNDO2lCQUNwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnQGRvbmdrYXAvZG8tc2hhcmVkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8tcHJpdmFjeS1wb2xpY3ktcGFnZS1wYWdlJyxcbiAgc3R5bGVVcmxzOiBbJy4vcHJpdmFjeS1wb2xpY3ktcGFnZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJpdmFjeS1wb2xpY3ktcGFnZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFByaXZhY3lQb2xpY3lQYWdlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudDxhbnk+IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHB1YmxpYyBjb250ZW50OiBzdHJpbmc7XG4gIHByb3RlY3RlZCBkZXN0cm95JDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBzdXBlcihpbmplY3Rvcik7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBkYXRhOiBhbnkgPSB7XG4gICAgICBwYXJhbWV0ZXJDb2RlOiAnUFJJVkFDWV9QT0xJQ1kuRE9OR0tBUCdcbiAgICB9O1xuICAgIHRoaXMuaHR0cC5IVFRQX0FVVEgodGhpcy5hcGlbJ21hc3RlciddWydwYXJhbWV0ZXInXSwgZGF0YSlcbiAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgdGhpcy5jb250ZW50ID0gcmVzcG9uc2VbJ3BhcmFtZXRlclZhbHVlJ107XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuZGVzdHJveSQudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG59XG4iLCI8IS0tIGh0dHBzOi8vd3d3LnByaXZhY3lwb2xpY3lvbmxpbmUuY29tL2xpdmUucGhwP3Rva2VuPVhuQzBFWHVoSnVKZ3lYR3NPWk5MMzNmR0VHd3pMdmxVIC0tPlxuPGRvLXBhZ2Utb3V0bGV0IFtoZWFkZXJdPVwiJ2hlYWRlci5wcml2YWN5LXBvbGljeSdcIj5cbiAgPGRpdiBbaW5uZXJIVE1MXT1cImNvbnRlbnRcIiBwYWdlY29udGVudD48L2Rpdj5cbjwvZG8tcGFnZS1vdXRsZXQ+XG4iXX0=