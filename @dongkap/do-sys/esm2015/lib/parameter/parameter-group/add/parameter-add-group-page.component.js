import { Component } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { ResponseCode } from '@dongkap/do-core';
import { BaseFormComponent } from '@dongkap/do-shared';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@dongkap/do-shared";
import * as i3 from "@angular/forms";
export class ParameterAddGroupPageComponent extends BaseFormComponent {
    constructor(injector, router) {
        super(injector, {
            parameterGroupCode: [],
            parameterGroupName: [],
        });
        this.injector = injector;
        this.router = router;
    }
    ngOnInit() { }
    onReset() {
        this.router.navigate(['/app/sysconf/parameter']);
    }
    onSubmit() {
        super.onSubmit(this.formGroup.value, 'master', 'post-parameter-group')
            .pipe(takeUntil(this.destroy$))
            .subscribe(response => {
            if (response.respStatusCode === ResponseCode.OK_SCR009.toString()) {
                this.router.navigate(['/app/sysconf/parameter']);
            }
        });
    }
}
ParameterAddGroupPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ParameterAddGroupPageComponent, deps: [{ token: i0.Injector }, { token: i1.Router }], target: i0.ɵɵFactoryTarget.Component });
ParameterAddGroupPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ParameterAddGroupPageComponent, selector: "do-parameter-add-group-page", usesInheritance: true, ngImport: i0, template: "<do-page-outlet [header]=\"'Add Parameter Group'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <form [formGroup]=\"formGroup\">\n        <do-input-text\n          [name]=\"'parameterGroupCode'\"\n          [label]=\"'Parameter Group Code'\"\n          [required]=\"true\"\n          formControlName=\"parameterGroupCode\">\n        </do-input-text>\n        <do-input-text\n          [name]=\"'parameterGroupName'\"\n          [label]=\"'Parameter Group Name'\"\n          [required]=\"true\"\n          formControlName=\"parameterGroupName\">\n        </do-input-text>\n      </form>\n    </div>\n  </div>\n  <do-button-submit\n    [submitTitle]=\"'Add'\"\n    [resetTitle]=\"'Cancel'\"\n    [formGroupButton]=\"formGroup\"\n    [disabledButton]=\"disabled\"\n    (onReset)=\"onReset()\"\n    (onSubmit)=\"onSubmit()\"\n    pagefooter>\n  </do-button-submit>\n</do-page-outlet>\n", styles: [""], components: [{ type: i2.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i2.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type", "togglePassword", "showPassword"] }, { type: i2.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i3.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i3.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i3.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ParameterAddGroupPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-parameter-add-group-page',
                    styleUrls: ['./parameter-add-group-page.component.scss'],
                    templateUrl: './parameter-add-group-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1ldGVyLWFkZC1ncm91cC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXN5cy9zcmMvbGliL3BhcmFtZXRlci9wYXJhbWV0ZXItZ3JvdXAvYWRkL3BhcmFtZXRlci1hZGQtZ3JvdXAtcGFnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1zeXMvc3JjL2xpYi9wYXJhbWV0ZXIvcGFyYW1ldGVyLWdyb3VwL2FkZC9wYXJhbWV0ZXItYWRkLWdyb3VwLXBhZ2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUlwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFtQixZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7QUFPdkQsTUFBTSxPQUFPLDhCQUErQixTQUFRLGlCQUFzQjtJQUV4RSxZQUFtQixRQUFrQixFQUFVLE1BQWM7UUFDM0QsS0FBSyxDQUFDLFFBQVEsRUFDWjtZQUNFLGtCQUFrQixFQUFFLEVBQUU7WUFDdEIsa0JBQWtCLEVBQUUsRUFBRTtTQUN2QixDQUFDLENBQUM7UUFMWSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQU03RCxDQUFDO0lBRUQsUUFBUSxLQUFVLENBQUM7SUFFbkIsT0FBTztRQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxRQUFRO1FBQ0wsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsc0JBQXNCLENBQWtDO2FBQ3JHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzlCLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNwQixJQUFJLFFBQVEsQ0FBQyxjQUFjLEtBQUssWUFBWSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFDakUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7YUFDbEQ7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7OzRIQXhCVSw4QkFBOEI7Z0hBQTlCLDhCQUE4QiwwRkNiM0MsMDVCQTZCQTs0RkRoQmEsOEJBQThCO2tCQUwxQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSw2QkFBNkI7b0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLDJDQUEyQyxDQUFDO29CQUN4RCxXQUFXLEVBQUUsMkNBQTJDO2lCQUN6RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFwaUJhc2VSZXNwb25zZSwgUmVzcG9uc2VDb2RlIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBCYXNlRm9ybUNvbXBvbmVudCB9IGZyb20gJ0Bkb25na2FwL2RvLXNoYXJlZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLXBhcmFtZXRlci1hZGQtZ3JvdXAtcGFnZScsXG4gIHN0eWxlVXJsczogWycuL3BhcmFtZXRlci1hZGQtZ3JvdXAtcGFnZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFyYW1ldGVyLWFkZC1ncm91cC1wYWdlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUGFyYW1ldGVyQWRkR3JvdXBQYWdlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUZvcm1Db21wb25lbnQ8YW55PiBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGluamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgIHN1cGVyKGluamVjdG9yLFxuICAgICAge1xuICAgICAgICBwYXJhbWV0ZXJHcm91cENvZGU6IFtdLFxuICAgICAgICBwYXJhbWV0ZXJHcm91cE5hbWU6IFtdLFxuICAgICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHt9XG5cbiAgb25SZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvc3lzY29uZi9wYXJhbWV0ZXInXSk7XG4gIH1cblxuICBvblN1Ym1pdCgpOiB2b2lkIHtcbiAgICAoc3VwZXIub25TdWJtaXQodGhpcy5mb3JtR3JvdXAudmFsdWUsICdtYXN0ZXInLCAncG9zdC1wYXJhbWV0ZXItZ3JvdXAnKSAgYXMgT2JzZXJ2YWJsZTxBcGlCYXNlUmVzcG9uc2U+KVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5yZXNwU3RhdHVzQ29kZSA9PT0gUmVzcG9uc2VDb2RlLk9LX1NDUjAwOS50b1N0cmluZygpKSB7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL3N5c2NvbmYvcGFyYW1ldGVyJ10pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG59XG4iLCI8ZG8tcGFnZS1vdXRsZXQgW2hlYWRlcl09XCInQWRkIFBhcmFtZXRlciBHcm91cCdcIj5cbiAgPGRpdiBjbGFzcz1cInJvd1wiIHBhZ2Vjb250ZW50PlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgY29sLWxnLTEyXCI+XG4gICAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiPlxuICAgICAgICA8ZG8taW5wdXQtdGV4dFxuICAgICAgICAgIFtuYW1lXT1cIidwYXJhbWV0ZXJHcm91cENvZGUnXCJcbiAgICAgICAgICBbbGFiZWxdPVwiJ1BhcmFtZXRlciBHcm91cCBDb2RlJ1wiXG4gICAgICAgICAgW3JlcXVpcmVkXT1cInRydWVcIlxuICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInBhcmFtZXRlckdyb3VwQ29kZVwiPlxuICAgICAgICA8L2RvLWlucHV0LXRleHQ+XG4gICAgICAgIDxkby1pbnB1dC10ZXh0XG4gICAgICAgICAgW25hbWVdPVwiJ3BhcmFtZXRlckdyb3VwTmFtZSdcIlxuICAgICAgICAgIFtsYWJlbF09XCInUGFyYW1ldGVyIEdyb3VwIE5hbWUnXCJcbiAgICAgICAgICBbcmVxdWlyZWRdPVwidHJ1ZVwiXG4gICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwicGFyYW1ldGVyR3JvdXBOYW1lXCI+XG4gICAgICAgIDwvZG8taW5wdXQtdGV4dD5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkby1idXR0b24tc3VibWl0XG4gICAgW3N1Ym1pdFRpdGxlXT1cIidBZGQnXCJcbiAgICBbcmVzZXRUaXRsZV09XCInQ2FuY2VsJ1wiXG4gICAgW2Zvcm1Hcm91cEJ1dHRvbl09XCJmb3JtR3JvdXBcIlxuICAgIFtkaXNhYmxlZEJ1dHRvbl09XCJkaXNhYmxlZFwiXG4gICAgKG9uUmVzZXQpPVwib25SZXNldCgpXCJcbiAgICAob25TdWJtaXQpPVwib25TdWJtaXQoKVwiXG4gICAgcGFnZWZvb3Rlcj5cbiAgPC9kby1idXR0b24tc3VibWl0PlxuPC9kby1wYWdlLW91dGxldD5cbiJdfQ==