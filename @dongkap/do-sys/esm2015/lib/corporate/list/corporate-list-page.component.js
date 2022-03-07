import { Component } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { BaseFilterComponent } from '@dongkap/do-shared';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../services/corporate.service";
import * as i3 from "@nebular/theme";
import * as i4 from "@dongkap/do-shared";
import * as i5 from "@angular/forms";
import * as i6 from "@ngx-translate/core";
export class CorporateListPageComponent extends BaseFilterComponent {
    constructor(injector, router, corporateService, dialogService) {
        super(injector, {
            corporateCode: [],
            corporateName: [],
        });
        this.injector = injector;
        this.router = router;
        this.corporateService = corporateService;
        this.dialogService = dialogService;
        this.columns = [
            { name: 'Code', prop: 'corporateCode', width: 75, frozenLeft: true },
            { name: 'Name', prop: 'corporateName', width: 275, frozenLeft: true },
            { name: 'Telp', prop: 'telpNumber', width: 100, frozenLeft: true },
            { name: 'Fax', prop: 'faxNumber', width: 100, frozenLeft: true },
            { name: 'Email', prop: 'email', width: 175 },
            { name: 'Address', prop: 'address' },
            { name: 'Created', prop: 'createdBy' },
            { name: 'Created Date', prop: 'createdDate' },
            { name: 'Modified', prop: 'modifiedBy' },
            { name: 'Modified Date', prop: 'modifiedDate' },
        ];
        this.reload = false;
        this.expanded = false;
        this.apiPath = this.api['security']['datatable-corporate'];
        this.apiPathDelete = this.api['security']['delete-corporate'];
        this.sort = {
            asc: ['corporateCode']
        };
        this.filters = [
            { controlName: 'corporateCode', type: 'input' },
            { controlName: 'corporateName', type: 'input' }
        ];
    }
    ngOnInit() {
    }
    onAdd() {
        this.corporateService.setCorporate(null);
        this.router.navigate(['/app/mgmt/corporate', 'add']);
    }
    onViewDetail(data) {
        this.corporateService.setCorporate(data);
        this.router.navigate(['/app/mgmt/corporate', 'edit']);
    }
    onDeleteDialog(data, dialog) {
        this.reload = false;
        this.corporateCodes = [];
        data.forEach(value => {
            this.corporateCodes.push(value.corporateCode);
        });
        this.dialogService.open(dialog, { context: 'alert.delete' });
    }
    onDelete(ref) {
        this.disabled = true;
        this.http.HTTP_AUTH(this.apiPathDelete, this.corporateCodes)
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
        this.router.navigate(['/app/mgmt/corporate']);
    }
}
CorporateListPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: CorporateListPageComponent, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: i2.CorporateService }, { token: i3.NbDialogService }], target: i0.ɵɵFactoryTarget.Component });
CorporateListPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: CorporateListPageComponent, selector: "do-corporate-list-page", usesInheritance: true, ngImport: i0, template: "<do-page-outlet [header]=\"'header.corporate-management'\" [hidefooter]=\"true\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-12 col-lg-12\">\n      <do-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [sort]=\"sort\"\n        [reloadFn]=\"reload\"\n        (onAdd)=\"onAdd()\"\n        (onEdit)=\"onViewDetail($event)\"\n        (onDelete)=\"onDeleteDialog($event, dialogdelete)\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <do-input-text\n            [name]=\"'corporateCode'\"\n            [label]=\"'Corporate Code'\"\n            formControlName=\"corporateCode\">\n          </do-input-text>\n          <do-input-text\n            [name]=\"'corporateName'\"\n            [label]=\"'Corporate Name'\"\n            formControlName=\"corporateName\">\n          </do-input-text>\n        </form>\n      </do-datatable>\n    </div>\n  </div>\n</do-page-outlet>\n\n<ng-template #dialogdelete let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"danger\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <do-button-submit\n        [colLabel]=\"0\"\n        [colButton]=\"12\"\n        [submitTitle]=\"'Delete'\"\n        [resetTitle]=\"'Cancel'\"\n        [disabledButton]=\"disabled\"\n        (onReset)=\"ref.close()\"\n        (onSubmit)=\"onDelete(ref)\">\n      </do-button-submit>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>\n", styles: [""], components: [{ type: i4.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i4.DoDatatableComponent, selector: "do-datatable", inputs: ["rows", "columns", "filters", "selected", "limit", "count", "offset", "externalPaging", "externalSorting", "loadingIndicator", "scrollbarH", "scrollbarV", "reorderable", "sortType", "messages", "selectionType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "header", "column", "footer", "add", "edit", "delete", "filter", "api", "startWithOpenData", "filterEvent", "formGroupFilter", "sort", "sortsDefault", "autoLoad", "filterFn", "filterDoFetchFn", "reloadFn"], outputs: ["onAdd", "onEdit", "onDelete", "onSearch", "onFilter", "onButtonCell", "onLoading", "onSelected"] }, { type: i4.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type", "togglePassword", "showPassword"] }, { type: i3.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i3.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i3.NbCardBodyComponent, selector: "nb-card-body" }, { type: i3.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i4.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i5.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i5.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i5.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i5.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i6.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: CorporateListPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-corporate-list-page',
                    styleUrls: ['./corporate-list-page.component.scss'],
                    templateUrl: './corporate-list-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: i2.CorporateService }, { type: i3.NbDialogService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ycG9yYXRlLWxpc3QtcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1zeXMvc3JjL2xpYi9jb3Jwb3JhdGUvbGlzdC9jb3Jwb3JhdGUtbGlzdC1wYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXN5cy9zcmMvbGliL2NvcnBvcmF0ZS9saXN0L2NvcnBvcmF0ZS1saXN0LXBhZ2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBeUIsTUFBTSxlQUFlLENBQUM7QUFHakUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBbUIsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7QUFRMUUsTUFBTSxPQUFPLDBCQUEyQixTQUFRLG1CQUF3QjtJQW9CdEUsWUFDUyxRQUFrQixFQUNqQixNQUFjLEVBQ2QsZ0JBQWtDLEVBQ2xDLGFBQThCO1FBQ3RDLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDZCxhQUFhLEVBQUUsRUFBRTtZQUNqQixhQUFhLEVBQUUsRUFBRTtTQUNsQixDQUFDLENBQUM7UUFQSSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2pCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGtCQUFhLEdBQWIsYUFBYSxDQUFpQjtRQXBCakMsWUFBTyxHQUFzQjtZQUNsQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7WUFDcEUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxVQUFV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LE9BQXdCLEVBQUUsRUFBRTtZQUMzQixHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDWixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hGLENBQUMsRUFDRCxDQUFDLEtBQXNCLEVBQUUsRUFBRTtZQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDNUYsQ0FBQyxDQUNKLENBQUM7SUFDSixDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7O3dIQW5GVSwwQkFBMEI7NEdBQTFCLDBCQUEwQixxRkNkdkMsZ2pEQStDQTs0RkRqQ2EsMEJBQTBCO2tCQUx0QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxDQUFDO29CQUNuRCxXQUFXLEVBQUUsc0NBQXNDO2lCQUNwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0b3IsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOYkRpYWxvZ1JlZiwgTmJEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHsgQXBpQmFzZVJlc3BvbnNlLCBIdHRwQmFzZU1vZGVsIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBCYXNlRmlsdGVyQ29tcG9uZW50LCBEYXRhdGFibGVDb2x1bW4gfSBmcm9tICdAZG9uZ2thcC9kby1zaGFyZWQnO1xuaW1wb3J0IHsgQ29ycG9yYXRlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NvcnBvcmF0ZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8tY29ycG9yYXRlLWxpc3QtcGFnZScsXG4gIHN0eWxlVXJsczogWycuL2NvcnBvcmF0ZS1saXN0LXBhZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvcnBvcmF0ZS1saXN0LXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDb3Jwb3JhdGVMaXN0UGFnZUNvbXBvbmVudCBleHRlbmRzIEJhc2VGaWx0ZXJDb21wb25lbnQ8YW55PiBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIGFwaVBhdGg6IEh0dHBCYXNlTW9kZWw7XG4gIHB1YmxpYyBhcGlQYXRoRGVsZXRlOiBIdHRwQmFzZU1vZGVsO1xuICBwdWJsaWMgY29sdW1uczogRGF0YXRhYmxlQ29sdW1uW10gPSBbXG4gICAgeyBuYW1lOiAnQ29kZScsIHByb3A6ICdjb3Jwb3JhdGVDb2RlJywgd2lkdGg6IDc1LCBmcm96ZW5MZWZ0OiB0cnVlIH0sXG4gICAgeyBuYW1lOiAnTmFtZScsIHByb3A6ICdjb3Jwb3JhdGVOYW1lJywgd2lkdGg6IDI3NSwgZnJvemVuTGVmdDogdHJ1ZSB9LFxuICAgIHsgbmFtZTogJ1RlbHAnLCBwcm9wOiAndGVscE51bWJlcicsIHdpZHRoOiAxMDAsIGZyb3plbkxlZnQ6IHRydWUgfSxcbiAgICB7IG5hbWU6ICdGYXgnLCBwcm9wOiAnZmF4TnVtYmVyJywgd2lkdGg6IDEwMCwgZnJvemVuTGVmdDogdHJ1ZSB9LFxuICAgIHsgbmFtZTogJ0VtYWlsJywgcHJvcDogJ2VtYWlsJywgd2lkdGg6IDE3NSB9LFxuICAgIHsgbmFtZTogJ0FkZHJlc3MnLCBwcm9wOiAnYWRkcmVzcycgfSxcbiAgICB7IG5hbWU6ICdDcmVhdGVkJywgcHJvcDogJ2NyZWF0ZWRCeScgfSxcbiAgICB7IG5hbWU6ICdDcmVhdGVkIERhdGUnLCBwcm9wOiAnY3JlYXRlZERhdGUnIH0sXG4gICAgeyBuYW1lOiAnTW9kaWZpZWQnLCBwcm9wOiAnbW9kaWZpZWRCeScgfSxcbiAgICB7IG5hbWU6ICdNb2RpZmllZCBEYXRlJywgcHJvcDogJ21vZGlmaWVkRGF0ZScgfSxcbiAgXTtcbiAgcHVibGljIHJlbG9hZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgZXhwYW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBjb3Jwb3JhdGVDb2RlczogYW55W107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgY29ycG9yYXRlU2VydmljZTogQ29ycG9yYXRlU2VydmljZSxcbiAgICBwcml2YXRlIGRpYWxvZ1NlcnZpY2U6IE5iRGlhbG9nU2VydmljZSkge1xuICAgIHN1cGVyKGluamVjdG9yLCB7XG4gICAgICBjb3Jwb3JhdGVDb2RlOiBbXSxcbiAgICAgIGNvcnBvcmF0ZU5hbWU6IFtdLFxuICAgIH0pO1xuICAgIHRoaXMuYXBpUGF0aCA9IHRoaXMuYXBpWydzZWN1cml0eSddWydkYXRhdGFibGUtY29ycG9yYXRlJ107XG4gICAgdGhpcy5hcGlQYXRoRGVsZXRlID0gdGhpcy5hcGlbJ3NlY3VyaXR5J11bJ2RlbGV0ZS1jb3Jwb3JhdGUnXTtcbiAgICB0aGlzLnNvcnQgPSB7XG4gICAgICBhc2M6IFsnY29ycG9yYXRlQ29kZSddXG4gICAgfTtcbiAgICB0aGlzLmZpbHRlcnMgPSBbXG4gICAgICB7IGNvbnRyb2xOYW1lOiAnY29ycG9yYXRlQ29kZScsIHR5cGU6ICdpbnB1dCcgfSxcbiAgICAgIHsgY29udHJvbE5hbWU6ICdjb3Jwb3JhdGVOYW1lJywgdHlwZTogJ2lucHV0JyB9XTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgb25BZGQoKTogdm9pZCB7XG4gICAgdGhpcy5jb3Jwb3JhdGVTZXJ2aWNlLnNldENvcnBvcmF0ZShudWxsKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvbWdtdC9jb3Jwb3JhdGUnLCAnYWRkJ10pO1xuICB9XG5cbiAgb25WaWV3RGV0YWlsKGRhdGEpOiB2b2lkIHtcbiAgICB0aGlzLmNvcnBvcmF0ZVNlcnZpY2Uuc2V0Q29ycG9yYXRlKGRhdGEpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FwcC9tZ210L2NvcnBvcmF0ZScsICdlZGl0J10pO1xuICB9XG5cbiAgb25EZWxldGVEaWFsb2coZGF0YSwgZGlhbG9nOiBUZW1wbGF0ZVJlZjxhbnk+KTogdm9pZCB7XG4gICAgdGhpcy5yZWxvYWQgPSBmYWxzZTtcbiAgICB0aGlzLmNvcnBvcmF0ZUNvZGVzID0gW107XG4gICAgZGF0YS5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgIHRoaXMuY29ycG9yYXRlQ29kZXMucHVzaCh2YWx1ZS5jb3Jwb3JhdGVDb2RlKTtcbiAgICB9KTtcbiAgICB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbihcbiAgICAgIGRpYWxvZyxcbiAgICAgIHsgY29udGV4dDogJ2FsZXJ0LmRlbGV0ZScgfSk7XG4gIH1cblxuICBvbkRlbGV0ZShyZWY6IE5iRGlhbG9nUmVmPGFueT4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLmh0dHAuSFRUUF9BVVRIKHRoaXMuYXBpUGF0aERlbGV0ZSwgdGhpcy5jb3Jwb3JhdGVDb2RlcylcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChzdWNjZXNzOiBBcGlCYXNlUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICByZWYuY2xvc2UoKTtcbiAgICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5yZWxvYWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMudG9hc3RyLnNob3dJMThuKHN1Y2Nlc3MucmVzcFN0YXR1c01lc3NhZ2Vbc3VjY2Vzcy5yZXNwU3RhdHVzQ29kZV0sIHRydWUpO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyb3I6IEFwaUJhc2VSZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnRvYXN0ci5zaG93STE4bihlcnJvci5yZXNwU3RhdHVzTWVzc2FnZVtlcnJvci5yZXNwU3RhdHVzQ29kZV0sIHRydWUsIG51bGwsICdkYW5nZXInKTtcbiAgICAgICAgfSxcbiAgICApO1xuICB9XG5cbiAgb25SZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvbWdtdC9jb3Jwb3JhdGUnXSk7XG4gIH1cblxufVxuIiwiPGRvLXBhZ2Utb3V0bGV0IFtoZWFkZXJdPVwiJ2hlYWRlci5jb3Jwb3JhdGUtbWFuYWdlbWVudCdcIiBbaGlkZWZvb3Rlcl09XCJ0cnVlXCI+XG4gIDxkaXYgY2xhc3M9XCJyb3dcIiBwYWdlY29udGVudD5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyIGNvbC1sZy0xMlwiPlxuICAgICAgPGRvLWRhdGF0YWJsZVxuICAgICAgICBbYXBpXT1cImFwaVBhdGhcIlxuICAgICAgICBbZm9ybUdyb3VwRmlsdGVyXT1cImZvcm1Hcm91cEZpbHRlclwiXG4gICAgICAgIFtmaWx0ZXJzXT1cImZpbHRlcnNcIlxuICAgICAgICBbc29ydF09XCJzb3J0XCJcbiAgICAgICAgW3JlbG9hZEZuXT1cInJlbG9hZFwiXG4gICAgICAgIChvbkFkZCk9XCJvbkFkZCgpXCJcbiAgICAgICAgKG9uRWRpdCk9XCJvblZpZXdEZXRhaWwoJGV2ZW50KVwiXG4gICAgICAgIChvbkRlbGV0ZSk9XCJvbkRlbGV0ZURpYWxvZygkZXZlbnQsIGRpYWxvZ2RlbGV0ZSlcIlxuICAgICAgICBbY29sdW1uc109XCJjb2x1bW5zXCI+XG4gICAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwRmlsdGVyXCI+XG4gICAgICAgICAgPGRvLWlucHV0LXRleHRcbiAgICAgICAgICAgIFtuYW1lXT1cIidjb3Jwb3JhdGVDb2RlJ1wiXG4gICAgICAgICAgICBbbGFiZWxdPVwiJ0NvcnBvcmF0ZSBDb2RlJ1wiXG4gICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJjb3Jwb3JhdGVDb2RlXCI+XG4gICAgICAgICAgPC9kby1pbnB1dC10ZXh0PlxuICAgICAgICAgIDxkby1pbnB1dC10ZXh0XG4gICAgICAgICAgICBbbmFtZV09XCInY29ycG9yYXRlTmFtZSdcIlxuICAgICAgICAgICAgW2xhYmVsXT1cIidDb3Jwb3JhdGUgTmFtZSdcIlxuICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiY29ycG9yYXRlTmFtZVwiPlxuICAgICAgICAgIDwvZG8taW5wdXQtdGV4dD5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kby1kYXRhdGFibGU+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kby1wYWdlLW91dGxldD5cblxuPG5nLXRlbXBsYXRlICNkaWFsb2dkZWxldGUgbGV0LWRhdGEgbGV0LXJlZj1cImRpYWxvZ1JlZlwiPlxuICA8bmItY2FyZCBhY2NlbnQ9XCJkYW5nZXJcIj5cbiAgICA8bmItY2FyZC1oZWFkZXI+e3sgJ1dhcm5pbmcnIHwgdHJhbnNsYXRlfX08L25iLWNhcmQtaGVhZGVyPlxuICAgIDxuYi1jYXJkLWJvZHk+e3sgZGF0YSB8IHRyYW5zbGF0ZX19PC9uYi1jYXJkLWJvZHk+XG4gICAgPG5iLWNhcmQtZm9vdGVyPlxuICAgICAgPGRvLWJ1dHRvbi1zdWJtaXRcbiAgICAgICAgW2NvbExhYmVsXT1cIjBcIlxuICAgICAgICBbY29sQnV0dG9uXT1cIjEyXCJcbiAgICAgICAgW3N1Ym1pdFRpdGxlXT1cIidEZWxldGUnXCJcbiAgICAgICAgW3Jlc2V0VGl0bGVdPVwiJ0NhbmNlbCdcIlxuICAgICAgICBbZGlzYWJsZWRCdXR0b25dPVwiZGlzYWJsZWRcIlxuICAgICAgICAob25SZXNldCk9XCJyZWYuY2xvc2UoKVwiXG4gICAgICAgIChvblN1Ym1pdCk9XCJvbkRlbGV0ZShyZWYpXCI+XG4gICAgICA8L2RvLWJ1dHRvbi1zdWJtaXQ+XG4gICAgPC9uYi1jYXJkLWZvb3Rlcj5cbiAgPC9uYi1jYXJkPlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==