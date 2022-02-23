import { Component } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { ResponseCode } from '@dongkap/do-core';
import { BaseFormComponent } from '@dongkap/do-shared';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../services/apps.service";
import * as i3 from "@dongkap/do-shared";
import * as i4 from "@angular/forms";
export class AppsAddEditPageComponent extends BaseFormComponent {
    constructor(injector, router, route, appsService) {
        super(injector, {
            appCode: [],
            appName: [],
            description: [],
        });
        this.injector = injector;
        this.router = router;
        this.route = route;
        this.appsService = appsService;
        this.action = 'Add';
        if (this.appsService.getApps() || (this.route.snapshot.params['action'] === 'add')) {
            if ((this.route.snapshot.params['action'] === 'edit')) {
                this.action = 'Edit';
                this.formGroup.get('appCode').setValue(this.appsService.getApps().appCode);
                this.formGroup.get('appName').setValue(this.appsService.getApps().appName);
                this.formGroup.get('description').setValue(this.appsService.getApps().description);
                this.formGroup.get('appCode').disable();
            }
        }
        else {
            this.router.navigate(['/app/mgmt/apps']);
        }
    }
    ngOnInit() { }
    onReset() {
        this.router.navigate(['/app/mgmt/apps']);
    }
    onSubmit() {
        const data = {
            appCode: this.formGroup.get('appCode').value,
            appName: this.formGroup.get('appName').value,
            description: this.formGroup.get('description').value,
        };
        super.onSubmit(data, 'security', 'post-apps')
            .pipe(takeUntil(this.destroy$))
            .subscribe(response => {
            if (response.respStatusCode === ResponseCode.OK_DEFAULT.toString()) {
                this.router.navigate(['/app/mgmt/apps']);
            }
        });
    }
}
AppsAddEditPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AppsAddEditPageComponent, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: i1.ActivatedRoute }, { token: i2.AppsService }], target: i0.ɵɵFactoryTarget.Component });
AppsAddEditPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: AppsAddEditPageComponent, selector: "do-apps-add-edit-page", usesInheritance: true, ngImport: i0, template: "<do-page-outlet [header]=\"'header.'+action+'-apps'\" [url]=\"'/app/mgmt/apps'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <form [formGroup]=\"formGroup\">\n        <do-input-text\n          [name]=\"'appCode'\"\n          [label]=\"'App Code'\"\n          [required]=\"true\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"appCode\">\n        </do-input-text>\n        <do-input-text\n          [name]=\"'appName'\"\n          [label]=\"'App Name'\"\n          [required]=\"true\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"appName\">\n        </do-input-text>\n        <do-textarea\n          [name]=\"'description'\"\n          [label]=\"'Description'\"\n          [minLength]=\"5\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"description\">\n        </do-textarea>\n      </form>\n    </div>\n  </div>\n  <do-button-submit\n    [submitTitle]=\"action\"\n    [resetTitle]=\"'Cancel'\"\n    [formGroupButton]=\"formGroup\"\n    [disabledButton]=\"disabled\"\n    (onReset)=\"onReset()\"\n    (onSubmit)=\"onSubmit()\"\n    pagefooter>\n  </do-button-submit>\n</do-page-outlet>\n", styles: [""], components: [{ type: i3.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i3.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i3.DoTextareaComponent, selector: "do-textarea", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "height"] }, { type: i3.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AppsAddEditPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-apps-add-edit-page',
                    styleUrls: ['./apps-add-edit-page.component.scss'],
                    templateUrl: './apps-add-edit-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: i1.ActivatedRoute }, { type: i2.AppsService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwcy1hZGQtZWRpdC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXN5cy9zcmMvbGliL2FwcHMvYWRkLWVkaXQvYXBwcy1hZGQtZWRpdC1wYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXN5cy9zcmMvbGliL2FwcHMvYWRkLWVkaXQvYXBwcy1hZGQtZWRpdC1wYWdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVksTUFBTSxlQUFlLENBQUM7QUFJcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBbUIsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7OztBQVN2RCxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsaUJBQXNCO0lBR2xFLFlBQ1MsUUFBa0IsRUFDakIsTUFBYyxFQUNkLEtBQXFCLEVBQ3JCLFdBQXdCO1FBQ2hDLEtBQUssQ0FBQyxRQUFRLEVBQ1o7WUFDRSxPQUFPLEVBQUUsRUFBRTtZQUNYLE9BQU8sRUFBRSxFQUFFO1lBQ1gsV0FBVyxFQUFFLEVBQUU7U0FDaEIsQ0FBQyxDQUFDO1FBVEUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNqQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFMM0IsV0FBTSxHQUFtQixLQUFLLENBQUM7UUFZcEMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ2xGLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssTUFBTSxDQUFDLEVBQUU7Z0JBQ3JELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2dCQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDM0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzNFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNuRixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUN6QztTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztTQUMxQztJQUNILENBQUM7SUFFRCxRQUFRLEtBQVUsQ0FBQztJQUVuQixPQUFPO1FBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELFFBQVE7UUFDTixNQUFNLElBQUksR0FBYztZQUN0QixPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSztZQUM1QyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSztZQUM1QyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSztTQUNyRCxDQUFDO1FBQ0QsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFdBQVcsQ0FBa0M7YUFDNUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3BCLElBQUksUUFBUSxDQUFDLGNBQWMsS0FBSyxZQUFZLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxFQUFFO2dCQUNsRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQzthQUMxQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7c0hBOUNVLHdCQUF3QjswR0FBeEIsd0JBQXdCLG9GQ2ZyQyx1cUNBc0NBOzRGRHZCYSx3QkFBd0I7a0JBTHBDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsU0FBUyxFQUFFLENBQUMscUNBQXFDLENBQUM7b0JBQ2xELFdBQVcsRUFBRSxxQ0FBcUM7aUJBQ25EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFwaUJhc2VSZXNwb25zZSwgUmVzcG9uc2VDb2RlIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBCYXNlRm9ybUNvbXBvbmVudCB9IGZyb20gJ0Bkb25na2FwL2RvLXNoYXJlZCc7XG5pbXBvcnQgeyBBcHBzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2FwcHMuc2VydmljZSc7XG5pbXBvcnQgeyBBcHBzTW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvYXBwcy5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLWFwcHMtYWRkLWVkaXQtcGFnZScsXG4gIHN0eWxlVXJsczogWycuL2FwcHMtYWRkLWVkaXQtcGFnZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vYXBwcy1hZGQtZWRpdC1wYWdlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQXBwc0FkZEVkaXRQYWdlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUZvcm1Db21wb25lbnQ8YW55PiBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIGFjdGlvbjogJ0FkZCcgfCAnRWRpdCcgPSAnQWRkJztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgYXBwc1NlcnZpY2U6IEFwcHNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoaW5qZWN0b3IsXG4gICAgICB7XG4gICAgICAgIGFwcENvZGU6IFtdLFxuICAgICAgICBhcHBOYW1lOiBbXSxcbiAgICAgICAgZGVzY3JpcHRpb246IFtdLFxuICAgICAgfSk7XG4gICAgaWYgKHRoaXMuYXBwc1NlcnZpY2UuZ2V0QXBwcygpIHx8ICh0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1snYWN0aW9uJ10gPT09ICdhZGQnKSkge1xuICAgICAgaWYgKCh0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1snYWN0aW9uJ10gPT09ICdlZGl0JykpIHtcbiAgICAgICAgdGhpcy5hY3Rpb24gPSAnRWRpdCc7XG4gICAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnYXBwQ29kZScpLnNldFZhbHVlKHRoaXMuYXBwc1NlcnZpY2UuZ2V0QXBwcygpLmFwcENvZGUpO1xuICAgICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ2FwcE5hbWUnKS5zZXRWYWx1ZSh0aGlzLmFwcHNTZXJ2aWNlLmdldEFwcHMoKS5hcHBOYW1lKTtcbiAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdkZXNjcmlwdGlvbicpLnNldFZhbHVlKHRoaXMuYXBwc1NlcnZpY2UuZ2V0QXBwcygpLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdhcHBDb2RlJykuZGlzYWJsZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvbWdtdC9hcHBzJ10pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cblxuICBvblJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FwcC9tZ210L2FwcHMnXSk7XG4gIH1cblxuICBvblN1Ym1pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBkYXRhOiBBcHBzTW9kZWwgPSB7XG4gICAgICBhcHBDb2RlOiB0aGlzLmZvcm1Hcm91cC5nZXQoJ2FwcENvZGUnKS52YWx1ZSxcbiAgICAgIGFwcE5hbWU6IHRoaXMuZm9ybUdyb3VwLmdldCgnYXBwTmFtZScpLnZhbHVlLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZm9ybUdyb3VwLmdldCgnZGVzY3JpcHRpb24nKS52YWx1ZSxcbiAgICB9O1xuICAgIChzdXBlci5vblN1Ym1pdChkYXRhLCAnc2VjdXJpdHknLCAncG9zdC1hcHBzJykgIGFzIE9ic2VydmFibGU8QXBpQmFzZVJlc3BvbnNlPilcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2UucmVzcFN0YXR1c0NvZGUgPT09IFJlc3BvbnNlQ29kZS5PS19ERUZBVUxULnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvbWdtdC9hcHBzJ10pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG59XG4iLCI8ZG8tcGFnZS1vdXRsZXQgW2hlYWRlcl09XCInaGVhZGVyLicrYWN0aW9uKyctYXBwcydcIiBbdXJsXT1cIicvYXBwL21nbXQvYXBwcydcIj5cbiAgPGRpdiBjbGFzcz1cInJvd1wiIHBhZ2Vjb250ZW50PlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgY29sLWxnLTEyXCI+XG4gICAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiPlxuICAgICAgICA8ZG8taW5wdXQtdGV4dFxuICAgICAgICAgIFtuYW1lXT1cIidhcHBDb2RlJ1wiXG4gICAgICAgICAgW2xhYmVsXT1cIidBcHAgQ29kZSdcIlxuICAgICAgICAgIFtyZXF1aXJlZF09XCJ0cnVlXCJcbiAgICAgICAgICBbc2tlbGV0b25dPVwibG9hZGluZ0Zvcm1cIlxuICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImFwcENvZGVcIj5cbiAgICAgICAgPC9kby1pbnB1dC10ZXh0PlxuICAgICAgICA8ZG8taW5wdXQtdGV4dFxuICAgICAgICAgIFtuYW1lXT1cIidhcHBOYW1lJ1wiXG4gICAgICAgICAgW2xhYmVsXT1cIidBcHAgTmFtZSdcIlxuICAgICAgICAgIFtyZXF1aXJlZF09XCJ0cnVlXCJcbiAgICAgICAgICBbc2tlbGV0b25dPVwibG9hZGluZ0Zvcm1cIlxuICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImFwcE5hbWVcIj5cbiAgICAgICAgPC9kby1pbnB1dC10ZXh0PlxuICAgICAgICA8ZG8tdGV4dGFyZWFcbiAgICAgICAgICBbbmFtZV09XCInZGVzY3JpcHRpb24nXCJcbiAgICAgICAgICBbbGFiZWxdPVwiJ0Rlc2NyaXB0aW9uJ1wiXG4gICAgICAgICAgW21pbkxlbmd0aF09XCI1XCJcbiAgICAgICAgICBbc2tlbGV0b25dPVwibG9hZGluZ0Zvcm1cIlxuICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgIDwvZG8tdGV4dGFyZWE+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZG8tYnV0dG9uLXN1Ym1pdFxuICAgIFtzdWJtaXRUaXRsZV09XCJhY3Rpb25cIlxuICAgIFtyZXNldFRpdGxlXT1cIidDYW5jZWwnXCJcbiAgICBbZm9ybUdyb3VwQnV0dG9uXT1cImZvcm1Hcm91cFwiXG4gICAgW2Rpc2FibGVkQnV0dG9uXT1cImRpc2FibGVkXCJcbiAgICAob25SZXNldCk9XCJvblJlc2V0KClcIlxuICAgIChvblN1Ym1pdCk9XCJvblN1Ym1pdCgpXCJcbiAgICBwYWdlZm9vdGVyPlxuICA8L2RvLWJ1dHRvbi1zdWJtaXQ+XG48L2RvLXBhZ2Utb3V0bGV0PlxuIl19