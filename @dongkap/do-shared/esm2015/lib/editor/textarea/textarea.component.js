import { Component, Inject, Input, ViewEncapsulation, Optional, Self, LOCALE_ID, } from '@angular/core';
import { ValueAccessorDirective } from '../../base/value-accessor.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../base/container-outlet/do-container-outlet.component";
import * as i3 from "@angular/common";
import * as i4 from "@nebular/theme";
import * as i5 from "@ngx-translate/core";
export class DoTextareaComponent extends ValueAccessorDirective {
    constructor(ngControl, locale) {
        super(ngControl, locale);
        this.locale = locale;
        this.colLabel = 3;
        this.colInput = 9;
        this.minLength = 0;
        this.maxLength = 250;
        this.height = 120;
    }
    onInit() {
        this.paramError = {
            value: this.minLength,
        };
    }
    ngOnDestroy() { }
}
DoTextareaComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoTextareaComponent, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: LOCALE_ID }], target: i0.ɵɵFactoryTarget.Component });
DoTextareaComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoTextareaComponent, selector: "do-textarea", inputs: { placeholder: "placeholder", colLabel: "colLabel", colInput: "colInput", minLength: "minLength", maxLength: "maxLength", height: "height" }, usesInheritance: true, ngImport: i0, template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [warnMessage]=\"warnMessage\"\n  [skeleton]=\"skeleton\" [show]=\"show\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <textarea \n      id=\"{{name}}\"\n      [minLength]=\"minLength\"\n      [maxLength]=\"maxLength\"\n      [required]=\"required\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [disabled]=\"disabled\"\n      [ngStyle]=\"{ \n        'width':  '100%',\n        'height':  height + 'px'\n      }\"\n      [ngClass]=\"{\n        'status-danger': hasErrors,\n        'status-success': (hasSuccess && required)\n      }\"\n      (input)=\"onChange($event.target.value)\"\n      (change)=\"onChange($event.target.value)\"\n      (blur)=\"onTouched($event.target.value)\"\n      (focus)=\"onTouched($event.target.value)\"\n      [(ngModel)]=\"value\"\n      nbInput fullWidth>\n    </textarea>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'skeleton': skeleton\n        }\"\n        [ngStyle]=\"{ \n          'width':  '100%',\n          'height':  height + 'px'\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>", styles: [""], components: [{ type: i2.DoContainerOutletComponent, selector: "do-container-outlet", inputs: ["name", "label", "colLabel", "colContent", "nolabel", "dividerlabel", "required", "hasErrors", "errorMessages", "warnMessage", "paramError", "skeleton", "show"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i3.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], pipes: { "translate": i5.TranslatePipe }, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoTextareaComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-textarea',
                    styleUrls: ['./textarea.component.scss'],
                    templateUrl: './textarea.component.html',
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [LOCALE_ID]
                }] }]; }, propDecorators: { placeholder: [{
                type: Input
            }], colLabel: [{
                type: Input
            }], colInput: [{
                type: Input
            }], minLength: [{
                type: Input
            }], maxLength: [{
                type: Input
            }], height: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc2hhcmVkL3NyYy9saWIvZWRpdG9yL3RleHRhcmVhL3RleHRhcmVhLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXNoYXJlZC9zcmMvbGliL2VkaXRvci90ZXh0YXJlYS90ZXh0YXJlYS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixLQUFLLEVBQ0wsaUJBQWlCLEVBQ2pCLFFBQVEsRUFDUixJQUFJLEVBQ0osU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOzs7Ozs7O0FBUTdFLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxzQkFBOEI7SUFRckUsWUFDc0IsU0FBb0IsRUFDZCxNQUFjO1FBQ3hDLEtBQUssQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFEQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBUmpDLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGNBQVMsR0FBVyxHQUFHLENBQUM7UUFDeEIsV0FBTSxHQUFXLEdBQUcsQ0FBQztJQU05QixDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxVQUFVLEdBQUc7WUFDaEIsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTO1NBQ3RCLENBQUM7SUFDSixDQUFDO0lBRUQsV0FBVyxLQUFVLENBQUM7O2lIQXBCWCxtQkFBbUIsdUVBVXBCLFNBQVM7cUdBVlIsbUJBQW1CLGdPQ25CaEMsczZDQTRDc0I7NEZEekJULG1CQUFtQjtrQkFOL0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7b0JBQ3hDLFdBQVcsRUFBRSwyQkFBMkI7b0JBQ3hDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs7MEJBVUksUUFBUTs7MEJBQUksSUFBSTs7MEJBQ2hCLE1BQU07MkJBQUMsU0FBUzs0Q0FUVixXQUFXO3NCQUFuQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbmplY3QsXG4gIElucHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgT3B0aW9uYWwsXG4gIFNlbGYsXG4gIExPQ0FMRV9JRCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFZhbHVlQWNjZXNzb3JEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9iYXNlL3ZhbHVlLWFjY2Vzc29yLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLXRleHRhcmVhJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGV4dGFyZWEuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3RleHRhcmVhLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRG9UZXh0YXJlYUNvbXBvbmVudCBleHRlbmRzIFZhbHVlQWNjZXNzb3JEaXJlY3RpdmU8c3RyaW5nPiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbExhYmVsOiBudW1iZXIgPSAzO1xuICBASW5wdXQoKSBjb2xJbnB1dDogbnVtYmVyID0gOTtcbiAgQElucHV0KCkgbWluTGVuZ3RoOiBudW1iZXIgPSAwO1xuICBASW5wdXQoKSBtYXhMZW5ndGg6IG51bWJlciA9IDI1MDtcbiAgQElucHV0KCkgaGVpZ2h0OiBudW1iZXIgPSAxMjA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQFNlbGYoKSBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcbiAgICBASW5qZWN0KExPQ0FMRV9JRCkgcHVibGljIGxvY2FsZTogc3RyaW5nKSB7XG4gICAgc3VwZXIobmdDb250cm9sLCBsb2NhbGUpO1xuICB9XG5cbiAgb25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucGFyYW1FcnJvciA9IHtcbiAgICAgIHZhbHVlOiB0aGlzLm1pbkxlbmd0aCxcbiAgICB9O1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7fVxuXG59XG4iLCI8ZG8tY29udGFpbmVyLW91dGxldFxuICBbbmFtZV09XCJuYW1lXCIgW2xhYmVsXT1cImxhYmVsXCJcbiAgW2NvbExhYmVsXT1cImNvbExhYmVsXCIgW2NvbENvbnRlbnRdPVwiY29sSW5wdXRcIlxuICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIiBbaGFzRXJyb3JzXT1cImhhc0Vycm9yc1wiXG4gIFtlcnJvck1lc3NhZ2VzXT1cImVycm9yTWVzc2FnZXNcIiBbcGFyYW1FcnJvcl09XCJwYXJhbUVycm9yXCJcbiAgW3dhcm5NZXNzYWdlXT1cIndhcm5NZXNzYWdlXCJcbiAgW3NrZWxldG9uXT1cInNrZWxldG9uXCIgW3Nob3ddPVwic2hvd1wiPlxuICA8ZGl2IGNsYXNzPVwiY29sLXNtLXt7Y29sSW5wdXR9fVwiICpuZ0lmPVwiIXNrZWxldG9uOyBlbHNlIGNvbnRlbnRza2VsZXRvblwiPlxuICAgIDx0ZXh0YXJlYSBcbiAgICAgIGlkPVwie3tuYW1lfX1cIlxuICAgICAgW21pbkxlbmd0aF09XCJtaW5MZW5ndGhcIlxuICAgICAgW21heExlbmd0aF09XCJtYXhMZW5ndGhcIlxuICAgICAgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlciA/IChwbGFjZWhvbGRlciB8IHRyYW5zbGF0ZSkgOiAnJ1wiXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW25nU3R5bGVdPVwieyBcbiAgICAgICAgJ3dpZHRoJzogICcxMDAlJyxcbiAgICAgICAgJ2hlaWdodCc6ICBoZWlnaHQgKyAncHgnXG4gICAgICB9XCJcbiAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgJ3N0YXR1cy1kYW5nZXInOiBoYXNFcnJvcnMsXG4gICAgICAgICdzdGF0dXMtc3VjY2Vzcyc6IChoYXNTdWNjZXNzICYmIHJlcXVpcmVkKVxuICAgICAgfVwiXG4gICAgICAoaW5wdXQpPVwib25DaGFuZ2UoJGV2ZW50LnRhcmdldC52YWx1ZSlcIlxuICAgICAgKGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQudGFyZ2V0LnZhbHVlKVwiXG4gICAgICAoYmx1cik9XCJvblRvdWNoZWQoJGV2ZW50LnRhcmdldC52YWx1ZSlcIlxuICAgICAgKGZvY3VzKT1cIm9uVG91Y2hlZCgkZXZlbnQudGFyZ2V0LnZhbHVlKVwiXG4gICAgICBbKG5nTW9kZWwpXT1cInZhbHVlXCJcbiAgICAgIG5iSW5wdXQgZnVsbFdpZHRoPlxuICAgIDwvdGV4dGFyZWE+XG4gIDwvZGl2PlxuICA8bmctdGVtcGxhdGUgI2NvbnRlbnRza2VsZXRvbj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLXt7Y29sSW5wdXR9fVwiPlxuICAgICAgPGRpdlxuICAgICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgJ3NrZWxldG9uJzogc2tlbGV0b25cbiAgICAgICAgfVwiXG4gICAgICAgIFtuZ1N0eWxlXT1cInsgXG4gICAgICAgICAgJ3dpZHRoJzogICcxMDAlJyxcbiAgICAgICAgICAnaGVpZ2h0JzogIGhlaWdodCArICdweCdcbiAgICAgICAgfVwiPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbmctdGVtcGxhdGU+XG48L2RvLWNvbnRhaW5lci1vdXRsZXQ+Il19