import { Component, Input, Optional, Self, Inject, LOCALE_ID } from '@angular/core';
import { ValueAccessorDirective } from '../../base/value-accessor.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../base/container-outlet/do-container-outlet.component";
import * as i3 from "@nebular/theme";
import * as i4 from "@angular/common";
import * as i5 from "@ngx-translate/core";
export class DoRadioComponent extends ValueAccessorDirective {
    constructor(ngControl, locale) {
        super(ngControl, locale);
        this.locale = locale;
        this.colLabel = 3;
        this.colInput = 9;
    }
}
DoRadioComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoRadioComponent, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: LOCALE_ID }], target: i0.ɵɵFactoryTarget.Component });
DoRadioComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoRadioComponent, selector: "do-radio", inputs: { placeholder: "placeholder", colLabel: "colLabel", colInput: "colInput", data: "data" }, usesInheritance: true, ngImport: i0, template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\" \n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [warnMessage]=\"warnMessage\"\n  [skeleton]=\"skeleton\" [show]=\"show\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <nb-radio-group\n      [(value)]=\"value\"\n      [name]=\"name\"\n      [disabled]=\"disabled\"\n      #radiogroup>\n      <nb-radio *ngFor=\"let item of data\"\n        [value]=\"item.value\">\n        {{item.name | translate}}\n      </nb-radio>\n    </nb-radio-group>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>", styles: [""], components: [{ type: i2.DoContainerOutletComponent, selector: "do-container-outlet", inputs: ["name", "label", "colLabel", "colContent", "nolabel", "dividerlabel", "required", "hasErrors", "errorMessages", "warnMessage", "paramError", "skeleton", "show"] }, { type: i3.NbRadioGroupComponent, selector: "nb-radio-group", inputs: ["value", "name", "disabled", "status"], outputs: ["valueChange"] }, { type: i3.NbRadioComponent, selector: "nb-radio", inputs: ["status", "name", "checked", "value", "disabled"], outputs: ["valueChange", "blur"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], pipes: { "translate": i5.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoRadioComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-radio',
                    styleUrls: ['./do-radio.component.scss'],
                    templateUrl: './do-radio.component.html',
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
            }], data: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tcmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc2hhcmVkL3NyYy9saWIvcmFkaW8vcmFkaW8vZG8tcmFkaW8uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc2hhcmVkL3NyYy9saWIvcmFkaW8vcmFkaW8vZG8tcmFkaW8uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOzs7Ozs7O0FBUTdFLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxzQkFBMkI7SUFNL0QsWUFDc0IsU0FBb0IsRUFDZCxNQUFjO1FBQ3hDLEtBQUssQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFEQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBTmpDLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsYUFBUSxHQUFXLENBQUMsQ0FBQztJQU85QixDQUFDOzs4R0FWVSxnQkFBZ0IsdUVBUWpCLFNBQVM7a0dBUlIsZ0JBQWdCLHlLQ1Y3Qiw2N0JBNkJzQjs0RkRuQlQsZ0JBQWdCO2tCQUw1QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztvQkFDeEMsV0FBVyxFQUFFLDJCQUEyQjtpQkFDekM7OzBCQVFJLFFBQVE7OzBCQUFJLElBQUk7OzBCQUNoQixNQUFNOzJCQUFDLFNBQVM7NENBUFYsV0FBVztzQkFBbkIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3B0aW9uYWwsIFNlbGYsIEluamVjdCwgTE9DQUxFX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vYmFzZS92YWx1ZS1hY2Nlc3Nvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmFkaW9Nb2RlbCB9IGZyb20gJy4uL21vZGVscy9yYWRpby5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLXJhZGlvJyxcbiAgc3R5bGVVcmxzOiBbJy4vZG8tcmFkaW8uY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2RvLXJhZGlvLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRG9SYWRpb0NvbXBvbmVudCBleHRlbmRzIFZhbHVlQWNjZXNzb3JEaXJlY3RpdmU8YW55PiB7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbExhYmVsOiBudW1iZXIgPSAzO1xuICBASW5wdXQoKSBjb2xJbnB1dDogbnVtYmVyID0gOTtcbiAgQElucHV0KCkgZGF0YTogUmFkaW9Nb2RlbFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBTZWxmKCkgbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgQEluamVjdChMT0NBTEVfSUQpIHB1YmxpYyBsb2NhbGU6IHN0cmluZykge1xuICAgIHN1cGVyKG5nQ29udHJvbCwgbG9jYWxlKTtcbiAgfVxuXG59XG4iLCI8ZG8tY29udGFpbmVyLW91dGxldFxuICBbbmFtZV09XCJuYW1lXCIgW2xhYmVsXT1cImxhYmVsXCIgW25vbGFiZWxdPVwibm9sYWJlbFwiIFxuICBbY29sTGFiZWxdPVwiY29sTGFiZWxcIiBbY29sQ29udGVudF09XCJjb2xJbnB1dFwiXG4gIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiIFtoYXNFcnJvcnNdPVwiaGFzRXJyb3JzXCJcbiAgW2Vycm9yTWVzc2FnZXNdPVwiZXJyb3JNZXNzYWdlc1wiIFtwYXJhbUVycm9yXT1cInBhcmFtRXJyb3JcIlxuICBbd2Fybk1lc3NhZ2VdPVwid2Fybk1lc3NhZ2VcIlxuICBbc2tlbGV0b25dPVwic2tlbGV0b25cIiBbc2hvd109XCJzaG93XCI+XG4gIDxkaXYgY2xhc3M9XCJjb2wtc20te3tjb2xJbnB1dH19XCIgKm5nSWY9XCIhc2tlbGV0b247IGVsc2UgY29udGVudHNrZWxldG9uXCI+XG4gICAgPG5iLXJhZGlvLWdyb3VwXG4gICAgICBbKHZhbHVlKV09XCJ2YWx1ZVwiXG4gICAgICBbbmFtZV09XCJuYW1lXCJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAjcmFkaW9ncm91cD5cbiAgICAgIDxuYi1yYWRpbyAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkYXRhXCJcbiAgICAgICAgW3ZhbHVlXT1cIml0ZW0udmFsdWVcIj5cbiAgICAgICAge3tpdGVtLm5hbWUgfCB0cmFuc2xhdGV9fVxuICAgICAgPC9uYi1yYWRpbz5cbiAgICA8L25iLXJhZGlvLWdyb3VwPlxuICA8L2Rpdj5cbiAgPG5nLXRlbXBsYXRlICNjb250ZW50c2tlbGV0b24+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS17e2NvbElucHV0fX1cIj5cbiAgICAgIDxkaXZcbiAgICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICdpbnB1dC1za2VsZXRvbic6IHRydWUsXG4gICAgICAgICAgJ3NrZWxldG9uJzogc2tlbGV0b25cbiAgICAgICAgfVwiPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbmctdGVtcGxhdGU+XG48L2RvLWNvbnRhaW5lci1vdXRsZXQ+Il19