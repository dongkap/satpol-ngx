import { Component, Input, Optional, Self, Inject, LOCALE_ID, EventEmitter, Output } from '@angular/core';
import { ValueAccessorDirective } from '../../base/value-accessor.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../base/container-outlet/do-container-outlet.component";
import * as i3 from "@nebular/theme";
import * as i4 from "@angular/common";
import * as i5 from "@ngx-translate/core";
export class DoCheckboxComponent extends ValueAccessorDirective {
    constructor(ngControl, locale) {
        super(ngControl, locale);
        this.locale = locale;
        this.colLabel = 3;
        this.colInput = 9;
        this.onChecked = new EventEmitter();
    }
    onCheckedChange(item) {
        if (!this.value) {
            this.value = this.data;
        }
        if (Array.isArray(this.value).valueOf()) {
            let isChecked = false;
            Array.from(this.value).forEach((value) => {
                if (value.selected) {
                    isChecked = value.selected;
                }
            });
            if (isChecked) {
                if (this.required) {
                    this.ngControl.control.setErrors(null);
                }
            }
            else {
                this.value = null;
                if (this.required) {
                    this.ngControl.control.setErrors({
                        required: true,
                    });
                }
            }
            this.ngControl.control.markAsTouched();
            this.ngControl.control.markAsDirty();
        }
        this.onChecked.emit(this.value);
    }
    writeValue(value) {
        if (value) {
            this.data = value;
        }
        this._value = value;
        this.onChange(this.value);
        const control = this.ngControl.control;
        if (control) {
            control.updateValueAndValidity();
            control.markAsUntouched();
            control.markAsPristine();
        }
    }
}
DoCheckboxComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoCheckboxComponent, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: LOCALE_ID }], target: i0.ɵɵFactoryTarget.Component });
DoCheckboxComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoCheckboxComponent, selector: "do-checkbox", inputs: { colLabel: "colLabel", colInput: "colInput", data: "data" }, outputs: { onChecked: "onChecked" }, usesInheritance: true, ngImport: i0, template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\" \n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [warnMessage]=\"warnMessage\"\n  [skeleton]=\"skeleton\" [show]=\"show\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <nb-checkbox\n      [ngClass]=\"{\n        'do-checkbox': true,\n        'status-danger': hasErrors\n      }\"\n      *ngFor=\"let item of data\"\n      [disabled]=\"item.disabled || disabled\"\n      [(ngModel)]=\"item.selected\"\n      (change)=\"onCheckedChange(item)\">\n      {{item.name | translate}}\n    </nb-checkbox>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>", styles: [".do-checkbox{display:flex;margin:.5rem 0 -.25rem}\n"], components: [{ type: i2.DoContainerOutletComponent, selector: "do-container-outlet", inputs: ["name", "label", "colLabel", "colContent", "nolabel", "dividerlabel", "required", "hasErrors", "errorMessages", "warnMessage", "paramError", "skeleton", "show"] }, { type: i3.NbCheckboxComponent, selector: "nb-checkbox", inputs: ["status", "checked", "disabled", "indeterminate"], outputs: ["checkedChange"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], pipes: { "translate": i5.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoCheckboxComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-checkbox',
                    styleUrls: ['./do-checkbox.component.scss'],
                    templateUrl: './do-checkbox.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [LOCALE_ID]
                }] }]; }, propDecorators: { colLabel: [{
                type: Input
            }], colInput: [{
                type: Input
            }], data: [{
                type: Input
            }], onChecked: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc2hhcmVkL3NyYy9saWIvY2hlY2tib3gvY2hlY2tib3gvZG8tY2hlY2tib3guY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc2hhcmVkL3NyYy9saWIvY2hlY2tib3gvY2hlY2tib3gvZG8tY2hlY2tib3guY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scUNBQXFDLENBQUM7Ozs7Ozs7QUFRN0UsTUFBTSxPQUFPLG1CQUFvQixTQUFRLHNCQUF1QztJQU01RSxZQUNzQixTQUFvQixFQUNkLE1BQWM7UUFDeEMsS0FBSyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQURDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFQakMsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBRXBCLGNBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQU1qRSxDQUFDO0lBRUQsZUFBZSxDQUFDLElBQW1CO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUN2QyxJQUFJLFNBQVMsR0FBWSxLQUFLLENBQUM7WUFDL0IsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBb0IsRUFBRSxFQUFFO2dCQUN0RCxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUU7b0JBQ2xCLFNBQVMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO2lCQUM1QjtZQUNILENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxTQUFTLEVBQUU7Z0JBQ2IsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3hDO2FBQ0Y7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2xCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO3dCQUMvQixRQUFRLEVBQUUsSUFBSTtxQkFDZixDQUFDLENBQUM7aUJBQ0o7YUFDRjtZQUNELElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3RDO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTSxVQUFVLENBQUMsS0FBc0I7UUFDdEMsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztTQUNuQjtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO1FBQ3ZDLElBQUksT0FBTyxFQUFFO1lBQ1QsT0FBTyxDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDakMsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQzFCLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUM1QjtJQUNILENBQUM7O2lIQXJEUSxtQkFBbUIsdUVBUWxCLFNBQVM7cUdBUlYsbUJBQW1CLHFMQ1ZoQyxvL0JBOEJzQjs0RkRwQlQsbUJBQW1CO2tCQUwvQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztvQkFDM0MsV0FBVyxFQUFFLDhCQUE4QjtpQkFDNUM7OzBCQVFNLFFBQVE7OzBCQUFJLElBQUk7OzBCQUNoQixNQUFNOzJCQUFDLFNBQVM7NENBUFYsUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDSSxTQUFTO3NCQUFsQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3B0aW9uYWwsIFNlbGYsIEluamVjdCwgTE9DQUxFX0lELCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2Jhc2UvdmFsdWUtYWNjZXNzb3IuY29tcG9uZW50JztcbmltcG9ydCB7IENoZWNrYm94TW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvY2hlY2tib3gubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkby1jaGVja2JveCcsXG4gIHN0eWxlVXJsczogWycuL2RvLWNoZWNrYm94LmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9kby1jaGVja2JveC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIERvQ2hlY2tib3hDb21wb25lbnQgZXh0ZW5kcyBWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlPENoZWNrYm94TW9kZWxbXT4ge1xuICAgIEBJbnB1dCgpIGNvbExhYmVsOiBudW1iZXIgPSAzO1xuICAgIEBJbnB1dCgpIGNvbElucHV0OiBudW1iZXIgPSA5O1xuICAgIEBJbnB1dCgpIGRhdGE6IENoZWNrYm94TW9kZWxbXTtcbiAgICBAT3V0cHV0KCkgb25DaGVja2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICBAT3B0aW9uYWwoKSBAU2VsZigpIG5nQ29udHJvbDogTmdDb250cm9sLFxuICAgICAgQEluamVjdChMT0NBTEVfSUQpIHB1YmxpYyBsb2NhbGU6IHN0cmluZykge1xuICAgICAgc3VwZXIobmdDb250cm9sLCBsb2NhbGUpO1xuICAgIH1cblxuICAgIG9uQ2hlY2tlZENoYW5nZShpdGVtOiBDaGVja2JveE1vZGVsKSB7XG4gICAgICBpZiAoIXRoaXMudmFsdWUpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZGF0YTtcbiAgICAgIH1cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMudmFsdWUpLnZhbHVlT2YoKSkge1xuICAgICAgICBsZXQgaXNDaGVja2VkOiBib29sZWFuID0gZmFsc2U7XG4gICAgICAgIEFycmF5LmZyb20odGhpcy52YWx1ZSkuZm9yRWFjaCgodmFsdWU6IENoZWNrYm94TW9kZWwpID0+IHtcbiAgICAgICAgICBpZiAodmFsdWUuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGlzQ2hlY2tlZCA9IHZhbHVlLnNlbGVjdGVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpc0NoZWNrZWQpIHtcbiAgICAgICAgICBpZiAodGhpcy5yZXF1aXJlZCkge1xuICAgICAgICAgICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5zZXRFcnJvcnMobnVsbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICAgIGlmICh0aGlzLnJlcXVpcmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5nQ29udHJvbC5jb250cm9sLnNldEVycm9ycyh7XG4gICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubmdDb250cm9sLmNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICAgICAgICB0aGlzLm5nQ29udHJvbC5jb250cm9sLm1hcmtBc0RpcnR5KCk7XG4gICAgICB9XG4gICAgICB0aGlzLm9uQ2hlY2tlZC5lbWl0KHRoaXMudmFsdWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBDaGVja2JveE1vZGVsW10pOiB2b2lkIHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmRhdGEgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgICAgY29uc3QgY29udHJvbCA9IHRoaXMubmdDb250cm9sLmNvbnRyb2w7XG4gICAgICBpZiAoY29udHJvbCkge1xuICAgICAgICAgIGNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgICAgIGNvbnRyb2wubWFya0FzVW50b3VjaGVkKCk7XG4gICAgICAgICAgY29udHJvbC5tYXJrQXNQcmlzdGluZSgpO1xuICAgICAgfVxuICAgIH1cbn1cbiIsIjxkby1jb250YWluZXItb3V0bGV0XG4gIFtuYW1lXT1cIm5hbWVcIiBbbGFiZWxdPVwibGFiZWxcIiBbbm9sYWJlbF09XCJub2xhYmVsXCIgXG4gIFtjb2xMYWJlbF09XCJjb2xMYWJlbFwiIFtjb2xDb250ZW50XT1cImNvbElucHV0XCJcbiAgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCIgW2hhc0Vycm9yc109XCJoYXNFcnJvcnNcIlxuICBbZXJyb3JNZXNzYWdlc109XCJlcnJvck1lc3NhZ2VzXCIgW3BhcmFtRXJyb3JdPVwicGFyYW1FcnJvclwiXG4gIFt3YXJuTWVzc2FnZV09XCJ3YXJuTWVzc2FnZVwiXG4gIFtza2VsZXRvbl09XCJza2VsZXRvblwiIFtzaG93XT1cInNob3dcIj5cbiAgPGRpdiBjbGFzcz1cImNvbC1zbS17e2NvbElucHV0fX1cIiAqbmdJZj1cIiFza2VsZXRvbjsgZWxzZSBjb250ZW50c2tlbGV0b25cIj5cbiAgICA8bmItY2hlY2tib3hcbiAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgJ2RvLWNoZWNrYm94JzogdHJ1ZSxcbiAgICAgICAgJ3N0YXR1cy1kYW5nZXInOiBoYXNFcnJvcnNcbiAgICAgIH1cIlxuICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZGF0YVwiXG4gICAgICBbZGlzYWJsZWRdPVwiaXRlbS5kaXNhYmxlZCB8fCBkaXNhYmxlZFwiXG4gICAgICBbKG5nTW9kZWwpXT1cIml0ZW0uc2VsZWN0ZWRcIlxuICAgICAgKGNoYW5nZSk9XCJvbkNoZWNrZWRDaGFuZ2UoaXRlbSlcIj5cbiAgICAgIHt7aXRlbS5uYW1lIHwgdHJhbnNsYXRlfX1cbiAgICA8L25iLWNoZWNrYm94PlxuICA8L2Rpdj5cbiAgPG5nLXRlbXBsYXRlICNjb250ZW50c2tlbGV0b24+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS17e2NvbElucHV0fX1cIj5cbiAgICAgIDxkaXZcbiAgICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICdpbnB1dC1za2VsZXRvbic6IHRydWUsXG4gICAgICAgICAgJ3NrZWxldG9uJzogc2tlbGV0b25cbiAgICAgICAgfVwiPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbmctdGVtcGxhdGU+XG48L2RvLWNvbnRhaW5lci1vdXRsZXQ+Il19