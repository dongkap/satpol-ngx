import { Component, Input, ViewEncapsulation, Output, EventEmitter, ViewChild, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@nebular/theme";
import * as i2 from "../../input/icon/do-input-base-icon.component";
import * as i3 from "./collapse/do-datatable-collapse.component";
import * as i4 from "@angular/common";
import * as i5 from "@angular/forms";
import * as i6 from "@ngx-translate/core";
export class DoDatatableHeaderComponent {
    constructor() {
        this.header = true;
        this.footer = true;
        this.add = true;
        this.edit = true;
        this.delete = false;
        this.filter = true;
        this.onSearch = new EventEmitter();
        this.onFilter = new EventEmitter();
        this.onAdd = new EventEmitter();
        this.onDelete = new EventEmitter();
        this.showFilter = false;
        this.disabledButtonFilter = true;
    }
    ngOnDestroy() { }
    doSearch(search) {
        if (this.showFilter) {
            this.doFilterFunnel();
        }
        this.onSearch.emit(search);
    }
    doFilterFunnel() {
        this._search = undefined;
        this.collapse.toggle();
        this.showFilter = !this.showFilter;
        if (!this.showFilter) {
            this.formGroupFilter.reset();
        }
        else {
            this.formGroupFilter.valueChanges.subscribe(val => {
                this.disabledButtonFilter = false;
            });
        }
    }
    doFilter() {
        this.onFilter.emit(this.formGroupFilter.value);
    }
    doAdd() {
        this.onAdd.emit(true);
    }
    doDelete() {
        this.onDelete.emit(true);
    }
    onKeyDown(event) {
        if (event.key.toUpperCase() === 'ENTER') {
            this.doSearch(this._search);
        }
    }
    onFocusSearch() {
        if (this.showFilter) {
            this.doFilterFunnel();
        }
    }
}
DoDatatableHeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoDatatableHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DoDatatableHeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoDatatableHeaderComponent, selector: "do-datatable-header", inputs: { header: "header", footer: "footer", add: "add", edit: "edit", delete: "delete", filter: "filter", formGroupFilter: "formGroupFilter" }, outputs: { onSearch: "onSearch", onFilter: "onFilter", onAdd: "onAdd", onDelete: "onDelete" }, viewQueries: [{ propertyName: "collapse", first: true, predicate: ["collapse"], descendants: true }], ngImport: i0, template: "<div class=\"header-datatable\" *ngIf=\"header\">\n    <div class=\"header-action\" *ngIf=\"add\">\n        <nb-icon\n            class=\"action-add\"\n            icon=\"file-add-outline\"\n            (click)=\"doAdd()\">\n        </nb-icon>\n    </div>\n    <div class=\"header-action\" *ngIf=\"delete\">\n        <nb-icon\n            class=\"action-trash\"\n            icon=\"trash-2-outline\"\n            (click)=\"doDelete()\">\n        </nb-icon>\n    </div>\n    <div class=\"header-filter\" *ngIf=\"filter\">\n        <do-input-base-icon\n            [name]=\"'_filter.datatable'\"\n            [placeholder]=\"'datatable.typesearch'\"\n            [iconcursor]=\"true\"\n            [(ngModel)]=\"_search\"\n            (clickIcon)=\"doSearch($event)\"\n            (keydown)=\"onKeyDown($event)\"\n            (focus)=\"onFocusSearch()\">\n        </do-input-base-icon>\n    </div>\n    <div class=\"filter-funnel\" *ngIf=\"filter && formGroupFilter\">\n        <nb-icon\n            class=\"filter-icon-funnel\"\n            [icon]=\"showFilter ? 'arrow-upward-outline' : 'funnel-outline'\"\n            (click)=\"doFilterFunnel()\">\n        </nb-icon>\n    </div>\n</div>\n<div *ngIf=\"filter && formGroupFilter\" do-datatable-collapse #collapse>\n    <ng-content></ng-content>\n    <div class=\"form-group row\">\n        <div class=\"offset-sm-3 col-sm-9\">\n          <button\n            type=\"submit\"\n            status=\"primary\"\n            (click)=\"doFilter()\"\n            nbButton>\n            {{ 'Search' | translate}}\n          </button>\n        </div>\n    </div>\n</div>", styles: [".header-datatable{width:100%;display:flex;padding-bottom:.3rem}.header-filter{width:100%}.filter-funnel{right:0;padding:10px 10px 10px 15px;cursor:pointer}.filter-icon-funnel:hover{color:#ffc94d}.header-action{left:0;padding:10px 15px 10px 10px;cursor:pointer}.action-add:hover{color:#598bff}.action-trash:hover{color:#ff708d}\n"], components: [{ type: i1.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }, { type: i2.DoInputBaseIconComponent, selector: "do-input-base-icon", inputs: ["placeholder", "minLength", "maxLength", "iconcursor", "icon", "buttontype", "type"], outputs: ["clickIcon", "focus"] }, { type: i3.DoDatatableCollapseComponent, selector: "do-datatable-collapse, [do-datatable-collapse]" }, { type: i1.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i5.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], pipes: { "translate": i6.TranslatePipe }, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoDatatableHeaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-datatable-header',
                    styleUrls: ['./do-datatable-header.component.scss'],
                    templateUrl: './do-datatable-header.component.html',
                    encapsulation: ViewEncapsulation.None,
                }]
        }], propDecorators: { header: [{
                type: Input
            }], footer: [{
                type: Input
            }], add: [{
                type: Input
            }], edit: [{
                type: Input
            }], delete: [{
                type: Input
            }], filter: [{
                type: Input
            }], formGroupFilter: [{
                type: Input
            }], onSearch: [{
                type: Output
            }], onFilter: [{
                type: Output
            }], onAdd: [{
                type: Output
            }], onDelete: [{
                type: Output
            }], collapse: [{
                type: ViewChild,
                args: ['collapse', { static: false }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tZGF0YXRhYmxlLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1zaGFyZWQvc3JjL2xpYi9kYXRhdGFibGUvaGVhZGVyL2RvLWRhdGF0YWJsZS1oZWFkZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc2hhcmVkL3NyYy9saWIvZGF0YXRhYmxlL2hlYWRlci9kby1kYXRhdGFibGUtaGVhZGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLGlCQUFpQixFQUNqQixNQUFNLEVBQ04sWUFBWSxFQUNaLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7QUFXdkIsTUFBTSxPQUFPLDBCQUEwQjtJQU52QztRQU9XLFdBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsV0FBTSxHQUFZLElBQUksQ0FBQztRQUN2QixRQUFHLEdBQVksSUFBSSxDQUFDO1FBQ3BCLFNBQUksR0FBWSxJQUFJLENBQUM7UUFDckIsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUN4QixXQUFNLEdBQVksSUFBSSxDQUFDO1FBRXRCLGFBQVEsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUM1RCxhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDdEQsVUFBSyxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDO1FBQzNELGFBQVEsR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUlqRSxlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLHlCQUFvQixHQUFZLElBQUksQ0FBQztLQTRDN0M7SUExQ0MsV0FBVyxLQUFVLENBQUM7SUFFdEIsUUFBUSxDQUFDLE1BQWM7UUFDckIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQUU7UUFDL0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDOUI7YUFBTTtZQUNMLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDaEQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztZQUNwQyxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQW9CO1FBQzVCLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxPQUFPLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDO0lBRUQsYUFBYTtRQUNYLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUFFO0lBQ2pELENBQUM7O3dIQTFEVSwwQkFBMEI7NEdBQTFCLDBCQUEwQixrWkNsQnZDLDZrREErQ007NEZEN0JPLDBCQUEwQjtrQkFOdEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixTQUFTLEVBQUUsQ0FBQyxzQ0FBc0MsQ0FBQztvQkFDbkQsV0FBVyxFQUFFLHNDQUFzQztvQkFDbkQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOzhCQUVVLE1BQU07c0JBQWQsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csR0FBRztzQkFBWCxLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLGVBQWU7c0JBQXZCLEtBQUs7Z0JBQ0ksUUFBUTtzQkFBakIsTUFBTTtnQkFDRyxRQUFRO3NCQUFqQixNQUFNO2dCQUNHLEtBQUs7c0JBQWQsTUFBTTtnQkFDRyxRQUFRO3NCQUFqQixNQUFNO2dCQUNpQyxRQUFRO3NCQUEvQyxTQUFTO3VCQUFDLFVBQVUsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvRGF0YXRhYmxlQ29sbGFwc2VDb21wb25lbnQgfSBmcm9tICcuL2NvbGxhcHNlL2RvLWRhdGF0YWJsZS1jb2xsYXBzZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkby1kYXRhdGFibGUtaGVhZGVyJyxcbiAgc3R5bGVVcmxzOiBbJy4vZG8tZGF0YXRhYmxlLWhlYWRlci5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vZG8tZGF0YXRhYmxlLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIERvRGF0YXRhYmxlSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgQElucHV0KCkgaGVhZGVyOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgZm9vdGVyOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgYWRkOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgZWRpdDogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGRlbGV0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBmaWx0ZXI6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBmb3JtR3JvdXBGaWx0ZXI6IEZvcm1Hcm91cDtcbiAgQE91dHB1dCgpIG9uU2VhcmNoOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgb25GaWx0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvbkFkZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgb25EZWxldGU6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQFZpZXdDaGlsZCgnY29sbGFwc2UnLCB7c3RhdGljOiBmYWxzZX0pIGNvbGxhcHNlOiBEb0RhdGF0YWJsZUNvbGxhcHNlQ29tcG9uZW50O1xuXG4gIHB1YmxpYyBfc2VhcmNoOiBzdHJpbmc7XG4gIHB1YmxpYyBzaG93RmlsdGVyOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBkaXNhYmxlZEJ1dHRvbkZpbHRlcjogYm9vbGVhbiA9IHRydWU7XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7fVxuXG4gIGRvU2VhcmNoKHNlYXJjaDogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2hvd0ZpbHRlcikgeyB0aGlzLmRvRmlsdGVyRnVubmVsKCk7IH1cbiAgICB0aGlzLm9uU2VhcmNoLmVtaXQoc2VhcmNoKTtcbiAgfVxuXG4gIGRvRmlsdGVyRnVubmVsKCk6IHZvaWQge1xuICAgIHRoaXMuX3NlYXJjaCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNvbGxhcHNlLnRvZ2dsZSgpO1xuICAgIHRoaXMuc2hvd0ZpbHRlciA9ICF0aGlzLnNob3dGaWx0ZXI7XG4gICAgaWYgKCF0aGlzLnNob3dGaWx0ZXIpIHtcbiAgICAgIHRoaXMuZm9ybUdyb3VwRmlsdGVyLnJlc2V0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZm9ybUdyb3VwRmlsdGVyLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsID0+IHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZEJ1dHRvbkZpbHRlciA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZG9GaWx0ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5vbkZpbHRlci5lbWl0KHRoaXMuZm9ybUdyb3VwRmlsdGVyLnZhbHVlKTtcbiAgfVxuXG4gIGRvQWRkKCk6IHZvaWQge1xuICAgIHRoaXMub25BZGQuZW1pdCh0cnVlKTtcbiAgfVxuXG4gIGRvRGVsZXRlKCk6IHZvaWQge1xuICAgIHRoaXMub25EZWxldGUuZW1pdCh0cnVlKTtcbiAgfVxuXG4gIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmIChldmVudC5rZXkudG9VcHBlckNhc2UoKSA9PT0gJ0VOVEVSJykge1xuICAgICAgdGhpcy5kb1NlYXJjaCh0aGlzLl9zZWFyY2gpO1xuICAgIH1cbiAgfVxuXG4gIG9uRm9jdXNTZWFyY2goKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2hvd0ZpbHRlcikgeyB0aGlzLmRvRmlsdGVyRnVubmVsKCk7IH1cbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiaGVhZGVyLWRhdGF0YWJsZVwiICpuZ0lmPVwiaGVhZGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImhlYWRlci1hY3Rpb25cIiAqbmdJZj1cImFkZFwiPlxuICAgICAgICA8bmItaWNvblxuICAgICAgICAgICAgY2xhc3M9XCJhY3Rpb24tYWRkXCJcbiAgICAgICAgICAgIGljb249XCJmaWxlLWFkZC1vdXRsaW5lXCJcbiAgICAgICAgICAgIChjbGljayk9XCJkb0FkZCgpXCI+XG4gICAgICAgIDwvbmItaWNvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWFjdGlvblwiICpuZ0lmPVwiZGVsZXRlXCI+XG4gICAgICAgIDxuYi1pY29uXG4gICAgICAgICAgICBjbGFzcz1cImFjdGlvbi10cmFzaFwiXG4gICAgICAgICAgICBpY29uPVwidHJhc2gtMi1vdXRsaW5lXCJcbiAgICAgICAgICAgIChjbGljayk9XCJkb0RlbGV0ZSgpXCI+XG4gICAgICAgIDwvbmItaWNvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWZpbHRlclwiICpuZ0lmPVwiZmlsdGVyXCI+XG4gICAgICAgIDxkby1pbnB1dC1iYXNlLWljb25cbiAgICAgICAgICAgIFtuYW1lXT1cIidfZmlsdGVyLmRhdGF0YWJsZSdcIlxuICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIidkYXRhdGFibGUudHlwZXNlYXJjaCdcIlxuICAgICAgICAgICAgW2ljb25jdXJzb3JdPVwidHJ1ZVwiXG4gICAgICAgICAgICBbKG5nTW9kZWwpXT1cIl9zZWFyY2hcIlxuICAgICAgICAgICAgKGNsaWNrSWNvbik9XCJkb1NlYXJjaCgkZXZlbnQpXCJcbiAgICAgICAgICAgIChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQpXCJcbiAgICAgICAgICAgIChmb2N1cyk9XCJvbkZvY3VzU2VhcmNoKClcIj5cbiAgICAgICAgPC9kby1pbnB1dC1iYXNlLWljb24+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZpbHRlci1mdW5uZWxcIiAqbmdJZj1cImZpbHRlciAmJiBmb3JtR3JvdXBGaWx0ZXJcIj5cbiAgICAgICAgPG5iLWljb25cbiAgICAgICAgICAgIGNsYXNzPVwiZmlsdGVyLWljb24tZnVubmVsXCJcbiAgICAgICAgICAgIFtpY29uXT1cInNob3dGaWx0ZXIgPyAnYXJyb3ctdXB3YXJkLW91dGxpbmUnIDogJ2Z1bm5lbC1vdXRsaW5lJ1wiXG4gICAgICAgICAgICAoY2xpY2spPVwiZG9GaWx0ZXJGdW5uZWwoKVwiPlxuICAgICAgICA8L25iLWljb24+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgKm5nSWY9XCJmaWx0ZXIgJiYgZm9ybUdyb3VwRmlsdGVyXCIgZG8tZGF0YXRhYmxlLWNvbGxhcHNlICNjb2xsYXBzZT5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJvZmZzZXQtc20tMyBjb2wtc20tOVwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgc3RhdHVzPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAoY2xpY2spPVwiZG9GaWx0ZXIoKVwiXG4gICAgICAgICAgICBuYkJ1dHRvbj5cbiAgICAgICAgICAgIHt7ICdTZWFyY2gnIHwgdHJhbnNsYXRlfX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj4iXX0=