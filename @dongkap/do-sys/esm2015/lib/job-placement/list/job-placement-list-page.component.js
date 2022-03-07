import { Component } from '@angular/core';
import { BaseFilterComponent } from '@dongkap/do-shared';
import { SelectionType } from '@swimlane/ngx-datatable';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../services/job-placement.service";
import * as i3 from "@dongkap/do-shared";
import * as i4 from "@angular/forms";
export class JobPlacementListPageComponent extends BaseFilterComponent {
    constructor(injector, router, jobPlacementService) {
        super(injector, {
            bpName: [],
        });
        this.injector = injector;
        this.router = router;
        this.jobPlacementService = jobPlacementService;
        this.columns = [
            { name: 'Business Partner', prop: 'bpName', frozenLeft: true, sortable: true },
            { name: 'Total Assignment', prop: 'totalAssignment', width: 55, frozenLeft: true },
        ];
        this.selectionType = SelectionType.single;
        this.sort = {
            asc: ['bpName']
        };
        this.sortsDefault = [
            { prop: 'bpName', dir: 'asc' }
        ];
        this.filters = [{ controlName: 'bpName', type: 'input' }];
        this.apiPath = this.api['activity']['datatable-assignment-group'];
    }
    ngOnInit() {
    }
    onViewDetail(data) {
        this.jobPlacementService.setAssignmentGroup(data);
        this.router.navigate(['/app/mgmt/job-placement', 'edit']);
    }
}
JobPlacementListPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: JobPlacementListPageComponent, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: i2.JobPlacementService }], target: i0.ɵɵFactoryTarget.Component });
JobPlacementListPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: JobPlacementListPageComponent, selector: "do-job-placement-list-page", usesInheritance: true, ngImport: i0, template: "<do-page-outlet [header]=\"'header.job-placement-management'\" [hidefooter]=\"true\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [sort]=\"sort\"\n        [sortsDefault]=\"sortsDefault\"\n        [selectionType]=\"selectionType\"\n        [delete]=\"false\"\n        [add]=\"false\"\n        (onEdit)=\"onViewDetail($event)\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'bpName'\"\n            [label]=\"'Business Partner'\"\n            formControlName=\"bpName\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n\n", styles: [""], components: [{ type: i3.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i3.DoDatatableComponent, selector: "do-datatable", inputs: ["rows", "columns", "filters", "selected", "limit", "count", "offset", "externalPaging", "externalSorting", "loadingIndicator", "scrollbarH", "scrollbarV", "reorderable", "sortType", "messages", "selectionType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "header", "column", "footer", "add", "edit", "delete", "filter", "api", "startWithOpenData", "filterEvent", "formGroupFilter", "sort", "sortsDefault", "autoLoad", "filterFn", "filterDoFetchFn", "reloadFn"], outputs: ["onAdd", "onEdit", "onDelete", "onSearch", "onFilter", "onButtonCell", "onLoading", "onSelected"] }, { type: i3.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type", "togglePassword", "showPassword"] }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: JobPlacementListPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-job-placement-list-page',
                    styleUrls: ['./job-placement-list-page.component.scss'],
                    templateUrl: './job-placement-list-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: i2.JobPlacementService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9iLXBsYWNlbWVudC1saXN0LXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc3lzL3NyYy9saWIvam9iLXBsYWNlbWVudC9saXN0L2pvYi1wbGFjZW1lbnQtbGlzdC1wYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXN5cy9zcmMvbGliL2pvYi1wbGFjZW1lbnQvbGlzdC9qb2ItcGxhY2VtZW50LWxpc3QtcGFnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBSXBELE9BQU8sRUFBRSxtQkFBbUIsRUFBbUIsTUFBTSxvQkFBb0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7OztBQVF4RCxNQUFNLE9BQU8sNkJBQThCLFNBQVEsbUJBQXdCO0lBU3pFLFlBQ1MsUUFBa0IsRUFDakIsTUFBYyxFQUNkLG1CQUF3QztRQUNoRCxLQUFLLENBQUMsUUFBUSxFQUFFO1lBQ2QsTUFBTSxFQUFFLEVBQUU7U0FDWCxDQUFDLENBQUM7UUFMSSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2pCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBVDNDLFlBQU8sR0FBc0I7WUFDbEMsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7WUFDOUUsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRTtTQUNuRixDQUFDO1FBQ0ssa0JBQWEsR0FBa0IsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQVN6RCxJQUFJLENBQUMsSUFBSSxHQUFHO1lBQ1YsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO1NBQ2hCLENBQUM7UUFDRixJQUFJLENBQUMsWUFBWSxHQUFHO1lBQ2xCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO1NBQy9CLENBQUM7UUFDRixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELFlBQVksQ0FBQyxJQUFJO1FBQ2YsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMseUJBQXlCLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDOzsySEFoQ1UsNkJBQTZCOytHQUE3Qiw2QkFBNkIseUZDYjFDLCt6QkEwQkE7NEZEYmEsNkJBQTZCO2tCQUx6QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLFNBQVMsRUFBRSxDQUFDLDBDQUEwQyxDQUFDO29CQUN2RCxXQUFXLEVBQUUsMENBQTBDO2lCQUN4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEh0dHBCYXNlTW9kZWwgfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IEJhc2VGaWx0ZXJDb21wb25lbnQsIERhdGF0YWJsZUNvbHVtbiB9IGZyb20gJ0Bkb25na2FwL2RvLXNoYXJlZCc7XG5pbXBvcnQgeyBTZWxlY3Rpb25UeXBlIH0gZnJvbSAnQHN3aW1sYW5lL25neC1kYXRhdGFibGUnO1xuaW1wb3J0IHsgSm9iUGxhY2VtZW50U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2pvYi1wbGFjZW1lbnQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLWpvYi1wbGFjZW1lbnQtbGlzdC1wYWdlJyxcbiAgc3R5bGVVcmxzOiBbJy4vam9iLXBsYWNlbWVudC1saXN0LXBhZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2pvYi1wbGFjZW1lbnQtbGlzdC1wYWdlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgSm9iUGxhY2VtZW50TGlzdFBhZ2VDb21wb25lbnQgZXh0ZW5kcyBCYXNlRmlsdGVyQ29tcG9uZW50PGFueT4gaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBhcGlQYXRoOiBIdHRwQmFzZU1vZGVsO1xuICBwdWJsaWMgY29sdW1uczogRGF0YXRhYmxlQ29sdW1uW10gPSBbXG4gICAgeyBuYW1lOiAnQnVzaW5lc3MgUGFydG5lcicsIHByb3A6ICdicE5hbWUnLCBmcm96ZW5MZWZ0OiB0cnVlLCBzb3J0YWJsZTogdHJ1ZSB9LFxuICAgIHsgbmFtZTogJ1RvdGFsIEFzc2lnbm1lbnQnLCBwcm9wOiAndG90YWxBc3NpZ25tZW50Jywgd2lkdGg6IDU1LCBmcm96ZW5MZWZ0OiB0cnVlIH0sXG4gIF07XG4gIHB1YmxpYyBzZWxlY3Rpb25UeXBlOiBTZWxlY3Rpb25UeXBlID0gU2VsZWN0aW9uVHlwZS5zaW5nbGU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgam9iUGxhY2VtZW50U2VydmljZTogSm9iUGxhY2VtZW50U2VydmljZSkge1xuICAgIHN1cGVyKGluamVjdG9yLCB7XG4gICAgICBicE5hbWU6IFtdLFxuICAgIH0pO1xuICAgIHRoaXMuc29ydCA9IHtcbiAgICAgIGFzYzogWydicE5hbWUnXVxuICAgIH07XG4gICAgdGhpcy5zb3J0c0RlZmF1bHQgPSBbXG4gICAgICB7IHByb3A6ICdicE5hbWUnLCBkaXI6ICdhc2MnIH1cbiAgICBdO1xuICAgIHRoaXMuZmlsdGVycyA9IFt7IGNvbnRyb2xOYW1lOiAnYnBOYW1lJywgdHlwZTogJ2lucHV0JyB9XTtcbiAgICB0aGlzLmFwaVBhdGggPSB0aGlzLmFwaVsnYWN0aXZpdHknXVsnZGF0YXRhYmxlLWFzc2lnbm1lbnQtZ3JvdXAnXTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgb25WaWV3RGV0YWlsKGRhdGEpOiB2b2lkIHtcbiAgICB0aGlzLmpvYlBsYWNlbWVudFNlcnZpY2Uuc2V0QXNzaWdubWVudEdyb3VwKGRhdGEpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FwcC9tZ210L2pvYi1wbGFjZW1lbnQnLCAnZWRpdCddKTtcbiAgfVxuXG59XG4iLCI8ZG8tcGFnZS1vdXRsZXQgW2hlYWRlcl09XCInaGVhZGVyLmpvYi1wbGFjZW1lbnQtbWFuYWdlbWVudCdcIiBbaGlkZWZvb3Rlcl09XCJ0cnVlXCI+XG4gIDxkaXYgY2xhc3M9XCJyb3dcIiBwYWdlY29udGVudD5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyIGNvbC1sZy0xMlwiPlxuICAgICAgPGRvLWRhdGF0YWJsZVxuICAgICAgICBbYXBpXT1cImFwaVBhdGhcIlxuICAgICAgICBbZm9ybUdyb3VwRmlsdGVyXT1cImZvcm1Hcm91cEZpbHRlclwiXG4gICAgICAgIFtmaWx0ZXJzXT1cImZpbHRlcnNcIlxuICAgICAgICBbc29ydF09XCJzb3J0XCJcbiAgICAgICAgW3NvcnRzRGVmYXVsdF09XCJzb3J0c0RlZmF1bHRcIlxuICAgICAgICBbc2VsZWN0aW9uVHlwZV09XCJzZWxlY3Rpb25UeXBlXCJcbiAgICAgICAgW2RlbGV0ZV09XCJmYWxzZVwiXG4gICAgICAgIFthZGRdPVwiZmFsc2VcIlxuICAgICAgICAob25FZGl0KT1cIm9uVmlld0RldGFpbCgkZXZlbnQpXCJcbiAgICAgICAgW2NvbHVtbnNdPVwiY29sdW1uc1wiPlxuICAgICAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cEZpbHRlclwiPlxuICAgICAgICAgIDxkby1pbnB1dC10ZXh0XG4gICAgICAgICAgICBbbmFtZV09XCInYnBOYW1lJ1wiXG4gICAgICAgICAgICBbbGFiZWxdPVwiJ0J1c2luZXNzIFBhcnRuZXInXCJcbiAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImJwTmFtZVwiPlxuICAgICAgICAgIDwvZG8taW5wdXQtdGV4dD5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kby1kYXRhdGFibGU+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kby1wYWdlLW91dGxldD5cblxuIl19