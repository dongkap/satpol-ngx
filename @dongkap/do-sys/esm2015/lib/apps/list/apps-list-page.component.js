import { Component } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { BaseFilterComponent } from '@dongkap/do-shared';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../services/apps.service";
import * as i3 from "@nebular/theme";
import * as i4 from "@dongkap/do-shared";
import * as i5 from "@angular/forms";
import * as i6 from "@ngx-translate/core";
export class AppsListPageComponent extends BaseFilterComponent {
    constructor(injector, router, appsService, dialogService) {
        super(injector, {
            appCode: [],
            appName: [],
        });
        this.injector = injector;
        this.router = router;
        this.appsService = appsService;
        this.dialogService = dialogService;
        this.columns = [
            { name: 'Code', prop: 'appCode', width: 150, frozenLeft: true },
            { name: 'Name', prop: 'appName', width: 150, frozenLeft: true },
            { name: 'Description', prop: 'description', width: 200, frozenLeft: true },
            { name: 'Created', prop: 'createdBy' },
            { name: 'Created Date', prop: 'createdDate' },
            { name: 'Modified', prop: 'modifiedBy' },
            { name: 'Modified Date', prop: 'modifiedDate' },
            { name: 'Active', prop: 'active' },
        ];
        this.reload = false;
        this.expanded = false;
        this.apiPath = this.api['security']['datatable-apps'];
        this.apiPathDelete = this.api['security']['delete-apps'];
        this.sort = {
            asc: ['appCode']
        };
        this.filters = [
            { controlName: 'appCode', type: 'input' },
            { controlName: 'appName', type: 'input' }
        ];
    }
    ngOnInit() {
    }
    onAdd() {
        this.appsService.setApps(null);
        this.router.navigate(['/app/mgmt/apps', 'add']);
    }
    onViewDetail(data) {
        this.appsService.setApps(data);
        this.router.navigate(['/app/mgmt/apps', 'edit']);
    }
    onDeleteDialog(data, dialog) {
        this.reload = false;
        this.appCodes = [];
        data.forEach(value => {
            this.appCodes.push(value.appCode);
        });
        this.dialogService.open(dialog, { context: 'alert.delete' });
    }
    onDelete(ref) {
        this.disabled = true;
        this.http.HTTP_AUTH(this.apiPathDelete, this.appCodes)
            .pipe(takeUntil(this.destroy$))
            .subscribe((success) => {
            ref.close();
            this.disabled = false;
            this.reload = true;
            this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
        }, (error) => {
            this.disabled = false;
            this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
        });
    }
    onReset() {
        this.router.navigate(['/app/mgmt/apps']);
    }
}
AppsListPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AppsListPageComponent, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: i2.AppsService }, { token: i3.NbDialogService }], target: i0.ɵɵFactoryTarget.Component });
AppsListPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: AppsListPageComponent, selector: "do-apps-list-page", usesInheritance: true, ngImport: i0, template: "<do-page-outlet [header]=\"'header.apps-management'\" [hidefooter]=\"true\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [sort]=\"sort\"\n        [reloadFn]=\"reload\"\n        (onAdd)=\"onAdd()\"\n        (onEdit)=\"onViewDetail($event)\"\n        (onDelete)=\"onDeleteDialog($event, dialogdelete)\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'appCode'\"\n            [label]=\"'App Code'\"\n            formControlName=\"appCode\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'appName'\"\n            [label]=\"'App Name'\"\n            formControlName=\"appName\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n\n<ng-template #dialogdelete let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"danger\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <do-button-submit\n        [colLabel]=\"0\"\n        [colButton]=\"12\"\n        [submitTitle]=\"'Delete'\"\n        [resetTitle]=\"'Cancel'\"\n        [disabledButton]=\"disabled\"\n        (onReset)=\"ref.close()\"\n        (onSubmit)=\"onDelete(ref)\">\n      </do-button-submit>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>\n", styles: [""], components: [{ type: i4.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i4.DoDatatableComponent, selector: "do-datatable", inputs: ["rows", "columns", "filters", "selected", "limit", "count", "offset", "externalPaging", "externalSorting", "loadingIndicator", "scrollbarH", "scrollbarV", "reorderable", "sortType", "messages", "selectionType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "header", "column", "footer", "add", "edit", "delete", "filter", "api", "startWithOpenData", "filterEvent", "formGroupFilter", "sort", "sortsDefault", "autoLoad", "filterFn", "filterDoFetchFn", "reloadFn"], outputs: ["onAdd", "onEdit", "onDelete", "onSearch", "onFilter", "onButtonCell", "onLoading", "onSelected"] }, { type: i4.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type", "togglePassword", "showPassword"] }, { type: i3.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i3.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i3.NbCardBodyComponent, selector: "nb-card-body" }, { type: i3.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i4.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i5.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i5.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i5.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i5.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i6.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AppsListPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-apps-list-page',
                    styleUrls: ['./apps-list-page.component.scss'],
                    templateUrl: './apps-list-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: i2.AppsService }, { type: i3.NbDialogService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwcy1saXN0LXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc3lzL3NyYy9saWIvYXBwcy9saXN0L2FwcHMtbGlzdC1wYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXN5cy9zcmMvbGliL2FwcHMvbGlzdC9hcHBzLWxpc3QtcGFnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUF5QixNQUFNLGVBQWUsQ0FBQztBQUdqRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFtQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7OztBQVExRSxNQUFNLE9BQU8scUJBQXNCLFNBQVEsbUJBQXdCO0lBa0JqRSxZQUNTLFFBQWtCLEVBQ2pCLE1BQWMsRUFDZCxXQUF3QixFQUN4QixhQUE4QjtRQUN0QyxLQUFLLENBQUMsUUFBUSxFQUFFO1lBQ2QsT0FBTyxFQUFFLEVBQUU7WUFDWCxPQUFPLEVBQUUsRUFBRTtTQUNaLENBQUMsQ0FBQztRQVBJLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDakIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGtCQUFhLEdBQWIsYUFBYSxDQUFpQjtRQWxCakMsWUFBTyxHQUFzQjtZQUNsQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7WUFDL0QsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFO1lBQy9ELEVBQUUsSUFBSSxF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LElBQUksQ0FBQyxDQUFDO1FBQ2hGLENBQUMsRUFDRCxDQUFDLEtBQXNCLEVBQUUsRUFBRTtZQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDNUYsQ0FBQyxDQUNKLENBQUM7SUFDSixDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7O21IQWpGVSxxQkFBcUI7dUdBQXJCLHFCQUFxQixnRkNkbEMsdWdEQStDQTs0RkRqQ2EscUJBQXFCO2tCQUxqQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO29CQUM5QyxXQUFXLEVBQUUsaUNBQWlDO2lCQUMvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0b3IsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOYkRpYWxvZ1JlZiwgTmJEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHsgQXBpQmFzZVJlc3BvbnNlLCBIdHRwQmFzZU1vZGVsIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBCYXNlRmlsdGVyQ29tcG9uZW50LCBEYXRhdGFibGVDb2x1bW4gfSBmcm9tICdAZG9uZ2thcC9kby1zaGFyZWQnO1xuaW1wb3J0IHsgQXBwc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hcHBzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkby1hcHBzLWxpc3QtcGFnZScsXG4gIHN0eWxlVXJsczogWycuL2FwcHMtbGlzdC1wYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHBzLWxpc3QtcGFnZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEFwcHNMaXN0UGFnZUNvbXBvbmVudCBleHRlbmRzIEJhc2VGaWx0ZXJDb21wb25lbnQ8YW55PiBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIGFwaVBhdGg6IEh0dHBCYXNlTW9kZWw7XG4gIHB1YmxpYyBhcGlQYXRoRGVsZXRlOiBIdHRwQmFzZU1vZGVsO1xuICBwdWJsaWMgY29sdW1uczogRGF0YXRhYmxlQ29sdW1uW10gPSBbXG4gICAgeyBuYW1lOiAnQ29kZScsIHByb3A6ICdhcHBDb2RlJywgd2lkdGg6IDE1MCwgZnJvemVuTGVmdDogdHJ1ZSB9LFxuICAgIHsgbmFtZTogJ05hbWUnLCBwcm9wOiAnYXBwTmFtZScsIHdpZHRoOiAxNTAsIGZyb3plbkxlZnQ6IHRydWUgfSxcbiAgICB7IG5hbWU6ICdEZXNjcmlwdGlvbicsIHByb3A6ICdkZXNjcmlwdGlvbicsIHdpZHRoOiAyMDAsIGZyb3plbkxlZnQ6IHRydWUgfSxcbiAgICB7IG5hbWU6ICdDcmVhdGVkJywgcHJvcDogJ2NyZWF0ZWRCeScgfSxcbiAgICB7IG5hbWU6ICdDcmVhdGVkIERhdGUnLCBwcm9wOiAnY3JlYXRlZERhdGUnIH0sXG4gICAgeyBuYW1lOiAnTW9kaWZpZWQnLCBwcm9wOiAnbW9kaWZpZWRCeScgfSxcbiAgICB7IG5hbWU6ICdNb2RpZmllZCBEYXRlJywgcHJvcDogJ21vZGlmaWVkRGF0ZScgfSxcbiAgICB7IG5hbWU6ICdBY3RpdmUnLCBwcm9wOiAnYWN0aXZlJyB9LFxuICBdO1xuICBwdWJsaWMgcmVsb2FkOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBleHBhbmRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIGFwcENvZGVzOiBhbnlbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBhcHBzU2VydmljZTogQXBwc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBkaWFsb2dTZXJ2aWNlOiBOYkRpYWxvZ1NlcnZpY2UpIHtcbiAgICBzdXBlcihpbmplY3Rvciwge1xuICAgICAgYXBwQ29kZTogW10sXG4gICAgICBhcHBOYW1lOiBbXSxcbiAgICB9KTtcbiAgICB0aGlzLmFwaVBhdGggPSB0aGlzLmFwaVsnc2VjdXJpdHknXVsnZGF0YXRhYmxlLWFwcHMnXTtcbiAgICB0aGlzLmFwaVBhdGhEZWxldGUgPSB0aGlzLmFwaVsnc2VjdXJpdHknXVsnZGVsZXRlLWFwcHMnXTtcbiAgICB0aGlzLnNvcnQgPSB7XG4gICAgICBhc2M6IFsnYXBwQ29kZSddXG4gICAgfTtcbiAgICB0aGlzLmZpbHRlcnMgPSBbXG4gICAgICB7IGNvbnRyb2xOYW1lOiAnYXBwQ29kZScsIHR5cGU6ICdpbnB1dCcgfSxcbiAgICAgIHsgY29udHJvbE5hbWU6ICdhcHBOYW1lJywgdHlwZTogJ2lucHV0JyB9XTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgb25BZGQoKTogdm9pZCB7XG4gICAgdGhpcy5hcHBzU2VydmljZS5zZXRBcHBzKG51bGwpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FwcC9tZ210L2FwcHMnLCAnYWRkJ10pO1xuICB9XG5cbiAgb25WaWV3RGV0YWlsKGRhdGEpOiB2b2lkIHtcbiAgICB0aGlzLmFwcHNTZXJ2aWNlLnNldEFwcHMoZGF0YSk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL21nbXQvYXBwcycsICdlZGl0J10pO1xuICB9XG5cbiAgb25EZWxldGVEaWFsb2coZGF0YSwgZGlhbG9nOiBUZW1wbGF0ZVJlZjxhbnk+KTogdm9pZCB7XG4gICAgdGhpcy5yZWxvYWQgPSBmYWxzZTtcbiAgICB0aGlzLmFwcENvZGVzID0gW107XG4gICAgZGF0YS5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgIHRoaXMuYXBwQ29kZXMucHVzaCh2YWx1ZS5hcHBDb2RlKTtcbiAgICB9KTtcbiAgICB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbihcbiAgICAgIGRpYWxvZyxcbiAgICAgIHsgY29udGV4dDogJ2FsZXJ0LmRlbGV0ZScgfSk7XG4gIH1cblxuICBvbkRlbGV0ZShyZWY6IE5iRGlhbG9nUmVmPGFueT4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLmh0dHAuSFRUUF9BVVRIKHRoaXMuYXBpUGF0aERlbGV0ZSwgdGhpcy5hcHBDb2RlcylcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChzdWNjZXNzOiBBcGlCYXNlUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICByZWYuY2xvc2UoKTtcbiAgICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5yZWxvYWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMudG9hc3RyLnNob3dJMThuKHN1Y2Nlc3MucmVzcFN0YXR1c01lc3NhZ2Vbc3VjY2Vzcy5yZXNwU3RhdHVzQ29kZV0sIHRydWUpO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyb3I6IEFwaUJhc2VSZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnRvYXN0ci5zaG93STE4bihlcnJvci5yZXNwU3RhdHVzTWVzc2FnZVtlcnJvci5yZXNwU3RhdHVzQ29kZV0sIHRydWUsIG51bGwsICdkYW5nZXInKTtcbiAgICAgICAgfSxcbiAgICApO1xuICB9XG5cbiAgb25SZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvbWdtdC9hcHBzJ10pO1xuICB9XG5cbn1cbiIsIjxkby1wYWdlLW91dGxldCBbaGVhZGVyXT1cIidoZWFkZXIuYXBwcy1tYW5hZ2VtZW50J1wiIFtoaWRlZm9vdGVyXT1cInRydWVcIj5cbiAgPGRpdiBjbGFzcz1cInJvd1wiIHBhZ2Vjb250ZW50PlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgY29sLWxnLTEyXCI+XG4gICAgICA8ZG8tZGF0YXRhYmxlXG4gICAgICAgIFthcGldPVwiYXBpUGF0aFwiXG4gICAgICAgIFtmb3JtR3JvdXBGaWx0ZXJdPVwiZm9ybUdyb3VwRmlsdGVyXCJcbiAgICAgICAgW2ZpbHRlcnNdPVwiZmlsdGVyc1wiXG4gICAgICAgIFtzb3J0XT1cInNvcnRcIlxuICAgICAgICBbcmVsb2FkRm5dPVwicmVsb2FkXCJcbiAgICAgICAgKG9uQWRkKT1cIm9uQWRkKClcIlxuICAgICAgICAob25FZGl0KT1cIm9uVmlld0RldGFpbCgkZXZlbnQpXCJcbiAgICAgICAgKG9uRGVsZXRlKT1cIm9uRGVsZXRlRGlhbG9nKCRldmVudCwgZGlhbG9nZGVsZXRlKVwiXG4gICAgICAgIFtjb2x1bW5zXT1cImNvbHVtbnNcIj5cbiAgICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBGaWx0ZXJcIj5cbiAgICAgICAgICA8ZG8taW5wdXQtdGV4dFxuICAgICAgICAgICAgW25hbWVdPVwiJ2FwcENvZGUnXCJcbiAgICAgICAgICAgIFtsYWJlbF09XCInQXBwIENvZGUnXCJcbiAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImFwcENvZGVcIj5cbiAgICAgICAgICA8L2RvLWlucHV0LXRleHQ+XG4gICAgICAgICAgPGRvLWlucHV0LXRleHRcbiAgICAgICAgICAgIFtuYW1lXT1cIidhcHBOYW1lJ1wiXG4gICAgICAgICAgICBbbGFiZWxdPVwiJ0FwcCBOYW1lJ1wiXG4gICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJhcHBOYW1lXCI+XG4gICAgICAgICAgPC9kby1pbnB1dC10ZXh0PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2RvLWRhdGF0YWJsZT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2RvLXBhZ2Utb3V0bGV0PlxuXG48bmctdGVtcGxhdGUgI2RpYWxvZ2RlbGV0ZSBsZXQtZGF0YSBsZXQtcmVmPVwiZGlhbG9nUmVmXCI+XG4gIDxuYi1jYXJkIGFjY2VudD1cImRhbmdlclwiPlxuICAgIDxuYi1jYXJkLWhlYWRlcj57eyAnV2FybmluZycgfCB0cmFuc2xhdGV9fTwvbmItY2FyZC1oZWFkZXI+XG4gICAgPG5iLWNhcmQtYm9keT57eyBkYXRhIHwgdHJhbnNsYXRlfX08L25iLWNhcmQtYm9keT5cbiAgICA8bmItY2FyZC1mb290ZXI+XG4gICAgICA8ZG8tYnV0dG9uLXN1Ym1pdFxuICAgICAgICBbY29sTGFiZWxdPVwiMFwiXG4gICAgICAgIFtjb2xCdXR0b25dPVwiMTJcIlxuICAgICAgICBbc3VibWl0VGl0bGVdPVwiJ0RlbGV0ZSdcIlxuICAgICAgICBbcmVzZXRUaXRsZV09XCInQ2FuY2VsJ1wiXG4gICAgICAgIFtkaXNhYmxlZEJ1dHRvbl09XCJkaXNhYmxlZFwiXG4gICAgICAgIChvblJlc2V0KT1cInJlZi5jbG9zZSgpXCJcbiAgICAgICAgKG9uU3VibWl0KT1cIm9uRGVsZXRlKHJlZilcIj5cbiAgICAgIDwvZG8tYnV0dG9uLXN1Ym1pdD5cbiAgICA8L25iLWNhcmQtZm9vdGVyPlxuICA8L25iLWNhcmQ+XG48L25nLXRlbXBsYXRlPlxuIl19