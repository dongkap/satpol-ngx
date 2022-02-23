import { Component, Inject, Input } from '@angular/core';
import { API } from '@dongkap/do-core';
import * as i0 from "@angular/core";
import * as i1 from "@nebular/theme";
import * as i2 from "@dongkap/do-shared";
import * as i3 from "@ngx-translate/core";
export class EmployeePromptComponent {
    constructor(api, ref) {
        this.api = api;
        this.ref = ref;
        this.columns = [
            { name: 'Employee Name', prop: 'user.fullname', frozenLeft: true },
            { name: 'NIK', prop: 'idEmployee', width: 50, frozenLeft: true },
            { name: 'Occupation', prop: 'occupationName', frozenLeft: true },
        ];
        this.disabled = true;
        this.selected = [];
        this.apiPath = this.api['security']['datatable-employee'];
        this.sort = {
            asc: ['user.fullname']
        };
        this.sortsDefault = [
            { prop: 'user.fullname', dir: 'asc' }
        ];
    }
    ngOnInit() {
    }
    onSubmit() {
        this.ref.close(this.selected);
    }
    onReset() {
        this.ref.close();
    }
    onSelected(data) {
        if (data) {
            if (data.length) {
                this.selected = data;
                this.disabled = false;
            }
            else {
                this.disabled = true;
            }
        }
        else {
            this.disabled = true;
        }
    }
}
EmployeePromptComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeePromptComponent, deps: [{ token: API }, { token: i1.NbDialogRef }], target: i0.ɵɵFactoryTarget.Component });
EmployeePromptComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeePromptComponent, selector: "do-employee-prompt", inputs: { education: "education" }, ngImport: i0, template: "<nb-card class=\"modal-form\">\n  <nb-card-header>\n    {{ 'header.employee-selection' | translate }}\n  </nb-card-header>\n  <nb-card-body>\n    <div class=\"row\">\n      <div class=\"col-md-12 col-lg-12\">\n        <do-datatable\n          [api]=\"apiPath\"\n          [columns]=\"columns\"\n          [sort]=\"sort\"\n          [sortsDefault]=\"sortsDefault\"\n          [edit]=\"false\"\n          [add]=\"false\"\n          [delete]=\"false\"\n          (onSelected)=\"onSelected($event)\">\n        </do-datatable>\n      </div>\n    </div>\n  </nb-card-body>\n  <nb-card-footer>\n    <div class=\"row\" style=\"margin: auto; width: 50%\">\n      <div style=\"margin: auto\">\n        <button\n          type=\"reset\"\n          status=\"danger\"\n          (click)=\"onReset()\"\n          class=\"reset-left\"\n          nbButton>\n          {{ 'Cancel' | translate}}\n        </button>\n        <button\n          type=\"submit\"\n          status=\"primary\"\n          (click)=\"onSubmit()\"\n          class=\"submit-right\"\n          [disabled]=\"disabled\"\n          nbButton>\n          {{ 'Choose' | translate}}\n        </button>\n      </div>\n    </div>\n  </nb-card-footer>\n</nb-card>\n", styles: [".nb-theme-default :host .modal-form{max-width:45rem;width:45rem!important}.nb-theme-default :host button[nbButton]{margin:0 .25rem}.nb-theme-default :host .reset-left{margin-right:.25rem}.nb-theme-default :host .submit-right{margin-left:.25rem}@media (max-width: 767.98px){.nb-theme-default :host .modal-form{width:100%!important}}.nb-theme-dark :host .modal-form{max-width:45rem;width:45rem!important}.nb-theme-dark :host button[nbButton]{margin:0 .25rem}.nb-theme-dark :host .reset-left{margin-right:.25rem}.nb-theme-dark :host .submit-right{margin-left:.25rem}@media (max-width: 767.98px){.nb-theme-dark :host .modal-form{width:100%!important}}.nb-theme-cosmic :host .modal-form{max-width:45rem;width:45rem!important}.nb-theme-cosmic :host button[nbButton]{margin:0 .25rem}.nb-theme-cosmic :host .reset-left{margin-right:.25rem}.nb-theme-cosmic :host .submit-right{margin-left:.25rem}@media (max-width: 767.98px){.nb-theme-cosmic :host .modal-form{width:100%!important}}.nb-theme-corporate :host .modal-form{max-width:45rem;width:45rem!important}.nb-theme-corporate :host button[nbButton]{margin:0 .25rem}.nb-theme-corporate :host .reset-left{margin-right:.25rem}.nb-theme-corporate :host .submit-right{margin-left:.25rem}@media (max-width: 767.98px){.nb-theme-corporate :host .modal-form{width:100%!important}}\n"], components: [{ type: i1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i2.DoDatatableComponent, selector: "do-datatable", inputs: ["rows", "columns", "filters", "selected", "limit", "count", "offset", "externalPaging", "externalSorting", "loadingIndicator", "scrollbarH", "scrollbarV", "reorderable", "sortType", "messages", "selectionType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "header", "column", "footer", "add", "edit", "delete", "filter", "api", "startWithOpenData", "filterEvent", "formGroupFilter", "sort", "sortsDefault", "autoLoad", "filterFn", "filterDoFetchFn", "reloadFn"], outputs: ["onAdd", "onEdit", "onDelete", "onSearch", "onFilter", "onButtonCell", "onLoading", "onSelected"] }, { type: i1.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i1.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], pipes: { "translate": i3.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeePromptComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-employee-prompt',
                    templateUrl: 'employee-prompt.component.html',
                    styleUrls: ['employee-prompt.component.scss'],
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [API]
                }] }, { type: i1.NbDialogRef }]; }, propDecorators: { education: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wbG95ZWUtcHJvbXB0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXN5cy9zcmMvbGliL2pvYi1wbGFjZW1lbnQvZWRpdC9wcm9tcHQtZW1wbG95ZWUvZW1wbG95ZWUtcHJvbXB0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXN5cy9zcmMvbGliL2pvYi1wbGFjZW1lbnQvZWRpdC9wcm9tcHQtZW1wbG95ZWUvZW1wbG95ZWUtcHJvbXB0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVqRSxPQUFPLEVBQUUsR0FBRyxFQUEyQixNQUFNLGtCQUFrQixDQUFDOzs7OztBQVFoRSxNQUFNLE9BQU8sdUJBQXVCO0lBY2xDLFlBQ3VCLEdBQWEsRUFDeEIsR0FBeUM7UUFEOUIsUUFBRyxHQUFILEdBQUcsQ0FBVTtRQUN4QixRQUFHLEdBQUgsR0FBRyxDQUFzQztRQVo5QyxZQUFPLEdBQXNCO1lBQ2xDLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7WUFDbEUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFO1lBQ2hFLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRTtTQUNqRSxDQUFDO1FBR0ssYUFBUSxHQUFZLElBQUksQ0FBQztRQUN6QixhQUFRLEdBQVUsRUFBRSxDQUFDO1FBS3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxJQUFJLEdBQUc7WUFDVixHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUM7U0FDdkIsQ0FBQztRQUNGLElBQUksQ0FBQyxZQUFZLEdBQUc7WUFDbEIsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUU7U0FDdEMsQ0FBQztJQUNOLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBVztRQUNwQixJQUFJLElBQUksRUFBRTtZQUNSLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDZixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7YUFDdkI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7YUFDdEI7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDdEI7SUFDSCxDQUFDOztxSEFoRFUsdUJBQXVCLGtCQWV4QixHQUFHO3lHQWZGLHVCQUF1Qiw4RkNWcEMsNnJDQTRDQTs0RkRsQ2EsdUJBQXVCO2tCQUxuQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFdBQVcsRUFBRSxnQ0FBZ0M7b0JBQzdDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO2lCQUM5Qzs7MEJBZ0JJLE1BQU07MkJBQUMsR0FBRztzRUFiRyxTQUFTO3NCQUF4QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5iRGlhbG9nUmVmIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHsgQVBJLCBBUElNb2RlbCwgSHR0cEJhc2VNb2RlbCB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgRGF0YXRhYmxlQ29sdW1uLCBTb3J0LCBTb3J0UHJvcGVydGllcyB9IGZyb20gJ0Bkb25na2FwL2RvLXNoYXJlZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLWVtcGxveWVlLXByb21wdCcsXG4gIHRlbXBsYXRlVXJsOiAnZW1wbG95ZWUtcHJvbXB0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2VtcGxveWVlLXByb21wdC5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBFbXBsb3llZVByb21wdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgcHVibGljIGVkdWNhdGlvbjogYW55O1xuICBwdWJsaWMgYXBpUGF0aDogSHR0cEJhc2VNb2RlbDtcbiAgcHVibGljIGNvbHVtbnM6IERhdGF0YWJsZUNvbHVtbltdID0gW1xuICAgIHsgbmFtZTogJ0VtcGxveWVlIE5hbWUnLCBwcm9wOiAndXNlci5mdWxsbmFtZScsIGZyb3plbkxlZnQ6IHRydWUgfSxcbiAgICB7IG5hbWU6ICdOSUsnLCBwcm9wOiAnaWRFbXBsb3llZScsIHdpZHRoOiA1MCwgZnJvemVuTGVmdDogdHJ1ZSB9LFxuICAgIHsgbmFtZTogJ09jY3VwYXRpb24nLCBwcm9wOiAnb2NjdXBhdGlvbk5hbWUnLCBmcm96ZW5MZWZ0OiB0cnVlIH0sXG4gIF07XG4gIHB1YmxpYyBzb3J0OiBTb3J0O1xuICBwdWJsaWMgc29ydHNEZWZhdWx0OiBTb3J0UHJvcGVydGllc1tdO1xuICBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgc2VsZWN0ZWQ6IGFueVtdID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChBUEkpIHByaXZhdGUgYXBpOiBBUElNb2RlbCxcbiAgICBwcm90ZWN0ZWQgcmVmOiBOYkRpYWxvZ1JlZjxFbXBsb3llZVByb21wdENvbXBvbmVudD4pIHtcbiAgICAgIHRoaXMuYXBpUGF0aCA9IHRoaXMuYXBpWydzZWN1cml0eSddWydkYXRhdGFibGUtZW1wbG95ZWUnXTtcbiAgICAgIHRoaXMuc29ydCA9IHtcbiAgICAgICAgYXNjOiBbJ3VzZXIuZnVsbG5hbWUnXVxuICAgICAgfTtcbiAgICAgIHRoaXMuc29ydHNEZWZhdWx0ID0gW1xuICAgICAgICB7IHByb3A6ICd1c2VyLmZ1bGxuYW1lJywgZGlyOiAnYXNjJyB9XG4gICAgICBdO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBvblN1Ym1pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlZi5jbG9zZSh0aGlzLnNlbGVjdGVkKTtcbiAgfVxuXG4gIG9uUmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy5yZWYuY2xvc2UoKTtcbiAgfVxuXG4gIG9uU2VsZWN0ZWQoZGF0YTogYW55W10pIHtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgaWYgKGRhdGEubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBkYXRhO1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbn1cbiIsIjxuYi1jYXJkIGNsYXNzPVwibW9kYWwtZm9ybVwiPlxuICA8bmItY2FyZC1oZWFkZXI+XG4gICAge3sgJ2hlYWRlci5lbXBsb3llZS1zZWxlY3Rpb24nIHwgdHJhbnNsYXRlIH19XG4gIDwvbmItY2FyZC1oZWFkZXI+XG4gIDxuYi1jYXJkLWJvZHk+XG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBjb2wtbGctMTJcIj5cbiAgICAgICAgPGRvLWRhdGF0YWJsZVxuICAgICAgICAgIFthcGldPVwiYXBpUGF0aFwiXG4gICAgICAgICAgW2NvbHVtbnNdPVwiY29sdW1uc1wiXG4gICAgICAgICAgW3NvcnRdPVwic29ydFwiXG4gICAgICAgICAgW3NvcnRzRGVmYXVsdF09XCJzb3J0c0RlZmF1bHRcIlxuICAgICAgICAgIFtlZGl0XT1cImZhbHNlXCJcbiAgICAgICAgICBbYWRkXT1cImZhbHNlXCJcbiAgICAgICAgICBbZGVsZXRlXT1cImZhbHNlXCJcbiAgICAgICAgICAob25TZWxlY3RlZCk9XCJvblNlbGVjdGVkKCRldmVudClcIj5cbiAgICAgICAgPC9kby1kYXRhdGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9uYi1jYXJkLWJvZHk+XG4gIDxuYi1jYXJkLWZvb3Rlcj5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCIgc3R5bGU9XCJtYXJnaW46IGF1dG87IHdpZHRoOiA1MCVcIj5cbiAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW46IGF1dG9cIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJyZXNldFwiXG4gICAgICAgICAgc3RhdHVzPVwiZGFuZ2VyXCJcbiAgICAgICAgICAoY2xpY2spPVwib25SZXNldCgpXCJcbiAgICAgICAgICBjbGFzcz1cInJlc2V0LWxlZnRcIlxuICAgICAgICAgIG5iQnV0dG9uPlxuICAgICAgICAgIHt7ICdDYW5jZWwnIHwgdHJhbnNsYXRlfX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICBzdGF0dXM9XCJwcmltYXJ5XCJcbiAgICAgICAgICAoY2xpY2spPVwib25TdWJtaXQoKVwiXG4gICAgICAgICAgY2xhc3M9XCJzdWJtaXQtcmlnaHRcIlxuICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgbmJCdXR0b24+XG4gICAgICAgICAge3sgJ0Nob29zZScgfCB0cmFuc2xhdGV9fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L25iLWNhcmQtZm9vdGVyPlxuPC9uYi1jYXJkPlxuIl19