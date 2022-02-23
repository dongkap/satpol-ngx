import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from '@dongkap/do-shared';
import * as i0 from "@angular/core";
import * as i1 from "@dongkap/do-shared";
export class TermsConditionsPageComponent extends BaseComponent {
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
TermsConditionsPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: TermsConditionsPageComponent, selector: "do-terms-conditions-page", usesInheritance: true, ngImport: i0, template: "<!-- https://www.privacypolicyonline.com/live.php?token=c7NdqfNju6oyhdnlrnLPdskC3Pft3FuH -->\n<do-page-outlet [header]=\"'header.terms-conditions'\">\n  <div [innerHTML]=\"content\" pagecontent></div>\n</do-page-outlet>\n", styles: [""], components: [{ type: i1.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: TermsConditionsPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-terms-conditions-page',
                    styleUrls: ['./terms-conditions-page.component.scss'],
                    templateUrl: './terms-conditions-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVybXMtY29uZGl0aW9ucy1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLWV4dHJhL3NyYy9saWIvdGVybXMvdGVybXMtY29uZGl0aW9ucy1wYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLWV4dHJhL3NyYy9saWIvdGVybXMvdGVybXMtY29uZGl0aW9ucy1wYWdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVksTUFBTSxlQUFlLENBQUM7QUFHcEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7QUFPbkQsTUFBTSxPQUFPLDRCQUE2QixTQUFRLGFBQWtCO0lBS2xFLFlBQW1CLFFBQWtCO1FBQ25DLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQURDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFGM0IsYUFBUSxHQUFpQixJQUFJLE9BQU8sRUFBTyxDQUFDO0lBSXRELENBQUM7SUFFRCxRQUFRO1FBQ04sTUFBTSxJQUFJLEdBQVE7WUFDaEIsYUFBYSxFQUFFLDBCQUEwQjtTQUMxQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUM7YUFDekQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUIsU0FBUyxDQUFDLENBQUMsUUFBYSxFQUFFLEVBQUU7WUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzlCLENBQUM7OzBIQXhCVSw0QkFBNEI7OEdBQTVCLDRCQUE0Qix1RkNaekMsK05BSUE7NEZEUWEsNEJBQTRCO2tCQUx4QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLFNBQVMsRUFBRSxDQUFDLHdDQUF3QyxDQUFDO29CQUNyRCxXQUFXLEVBQUUsd0NBQXdDO2lCQUN0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnQGRvbmdrYXAvZG8tc2hhcmVkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8tdGVybXMtY29uZGl0aW9ucy1wYWdlJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGVybXMtY29uZGl0aW9ucy1wYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi90ZXJtcy1jb25kaXRpb25zLXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUZXJtc0NvbmRpdGlvbnNQYWdlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudDxhbnk+IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHB1YmxpYyBjb250ZW50OiBzdHJpbmc7XG4gIHByb3RlY3RlZCBkZXN0cm95JDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBzdXBlcihpbmplY3Rvcik7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBkYXRhOiBhbnkgPSB7XG4gICAgICBwYXJhbWV0ZXJDb2RlOiAnVEVSTVNfQ09ORElUSU9OUy5ET05HS0FQJ1xuICAgIH07XG4gICAgdGhpcy5odHRwLkhUVFBfQVVUSCh0aGlzLmFwaVsnbWFzdGVyJ11bJ3BhcmFtZXRlciddLCBkYXRhKVxuICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICB0aGlzLmNvbnRlbnQgPSByZXNwb25zZVsncGFyYW1ldGVyVmFsdWUnXTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5kZXN0cm95JC51bnN1YnNjcmliZSgpO1xuICB9XG5cbn1cbiIsIjwhLS0gaHR0cHM6Ly93d3cucHJpdmFjeXBvbGljeW9ubGluZS5jb20vbGl2ZS5waHA/dG9rZW49YzdOZHFmTmp1Nm95aGRubHJuTFBkc2tDM1BmdDNGdUggLS0+XG48ZG8tcGFnZS1vdXRsZXQgW2hlYWRlcl09XCInaGVhZGVyLnRlcm1zLWNvbmRpdGlvbnMnXCI+XG4gIDxkaXYgW2lubmVySFRNTF09XCJjb250ZW50XCIgcGFnZWNvbnRlbnQ+PC9kaXY+XG48L2RvLXBhZ2Utb3V0bGV0PlxuIl19