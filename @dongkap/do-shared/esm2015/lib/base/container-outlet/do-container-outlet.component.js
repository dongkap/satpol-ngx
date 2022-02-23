import { Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../warn-message/do-warn-message.component";
import * as i2 from "../error-message/do-error-message.component";
import * as i3 from "@angular/common";
import * as i4 from "@ngx-translate/core";
export class DoContainerOutletComponent {
    constructor() {
        this.label = '';
        this.colLabel = 3;
        this.colContent = 9;
        this.nolabel = false;
        this.dividerlabel = false;
        this.required = false;
        this.hasErrors = false;
        this.errorMessages = [];
        this.skeleton = false;
        this.show = true;
    }
}
DoContainerOutletComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoContainerOutletComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DoContainerOutletComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoContainerOutletComponent, selector: "do-container-outlet", inputs: { name: "name", label: "label", colLabel: "colLabel", colContent: "colContent", nolabel: "nolabel", dividerlabel: "dividerlabel", required: "required", hasErrors: "hasErrors", errorMessages: "errorMessages", warnMessage: "warnMessage", paramError: "paramError", skeleton: "skeleton", show: "show" }, ngImport: i0, template: "<div class=\"form-group row\" *ngIf=\"show\">\n  <div\n    *ngIf=\"(!skeleton || nolabel);else labelskeleton\"\n    class=\"col-sm-{{colLabel}}\">\n    <label\n      for=\"{{name}}\"\n      class=\"label col-form-label\">\n      {{label | translate}}{{ (!nolabel) ? ((required) ? ' *' : '') : '' }}\n    </label>\n    <label *ngIf=\"dividerlabel\" class=\"divider-label col-form-label\">:</label>\n  </div>\n  <ng-template #labelskeleton>\n    <div class=\"col-sm-{{colLabel}}\">\n      <label\n        class=\"label col-form-label\"\n        [ngClass]=\"{\n          'label-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </label>\n    </div>\n  </ng-template>\n  <ng-content></ng-content>\n  <div class=\"offset-sm-{{colLabel}} col-sm-{{colContent}}\">\n    <do-warn-message *ngIf=\"!skeleton\" [warnMessage]=\"warnMessage\"></do-warn-message>\n    <do-error-message [hasErrors]=\"hasErrors\" [errorMessages]=\"errorMessages\" [param]=\"paramError\">\n    </do-error-message>\n  </div>\n</div>", styles: ["label.divider-label{float:right}@media (max-width: 767.98px){label.divider-label{display:none}}label.float-right{display:none;float:right!important}@media (max-width: 767.98px){label.float-right{display:inline;float:unset!important;padding-left:.75rem}}\n"], components: [{ type: i1.DoWarnMessageComponent, selector: "do-warn-message", inputs: ["warnMessage", "param"] }, { type: i2.DoErrorMessageComponent, selector: "do-error-message", inputs: ["hasErrors", "errorMessages", "param"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], pipes: { "translate": i4.TranslatePipe }, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoContainerOutletComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-container-outlet',
                    styleUrls: ['./do-container-outlet.component.scss'],
                    templateUrl: './do-container-outlet.component.html',
                    encapsulation: ViewEncapsulation.None,
                }]
        }], propDecorators: { name: [{
                type: Input
            }], label: [{
                type: Input
            }], colLabel: [{
                type: Input
            }], colContent: [{
                type: Input
            }], nolabel: [{
                type: Input
            }], dividerlabel: [{
                type: Input
            }], required: [{
                type: Input
            }], hasErrors: [{
                type: Input
            }], errorMessages: [{
                type: Input
            }], warnMessage: [{
                type: Input
            }], paramError: [{
                type: Input
            }], skeleton: [{
                type: Input
            }], show: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tY29udGFpbmVyLW91dGxldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1zaGFyZWQvc3JjL2xpYi9iYXNlL2NvbnRhaW5lci1vdXRsZXQvZG8tY29udGFpbmVyLW91dGxldC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1zaGFyZWQvc3JjL2xpYi9iYXNlL2NvbnRhaW5lci1vdXRsZXQvZG8tY29udGFpbmVyLW91dGxldC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBUXBFLE1BQU0sT0FBTywwQkFBMEI7SUFOdkM7UUFRYSxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixrQkFBYSxHQUFhLEVBQUUsQ0FBQztRQUc3QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLFNBQUksR0FBWSxJQUFJLENBQUM7S0FDakM7O3dIQWRZLDBCQUEwQjs0R0FBMUIsMEJBQTBCLCtXQ1J2QywyL0JBNEJNOzRGRHBCTywwQkFBMEI7a0JBTnRDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsU0FBUyxFQUFFLENBQUMsc0NBQXNDLENBQUM7b0JBQ25ELFdBQVcsRUFBRSxzQ0FBc0M7b0JBQ25ELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs4QkFFWSxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csYUFBYTtzQkFBckIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkby1jb250YWluZXItb3V0bGV0JyxcbiAgc3R5bGVVcmxzOiBbJy4vZG8tY29udGFpbmVyLW91dGxldC5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vZG8tY29udGFpbmVyLW91dGxldC5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIERvQ29udGFpbmVyT3V0bGV0Q29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gICAgQElucHV0KCkgbGFiZWw6IHN0cmluZyA9ICcnO1xuICAgIEBJbnB1dCgpIGNvbExhYmVsOiBudW1iZXIgPSAzO1xuICAgIEBJbnB1dCgpIGNvbENvbnRlbnQ6IG51bWJlciA9IDk7XG4gICAgQElucHV0KCkgbm9sYWJlbDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGRpdmlkZXJsYWJlbDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIHJlcXVpcmVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgaGFzRXJyb3JzOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgZXJyb3JNZXNzYWdlczogc3RyaW5nW10gPSBbXTtcbiAgICBASW5wdXQoKSB3YXJuTWVzc2FnZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHBhcmFtRXJyb3I6IGFueTtcbiAgICBASW5wdXQoKSBza2VsZXRvbjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIHNob3c6IGJvb2xlYW4gPSB0cnVlO1xufVxuIiwiPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCIgKm5nSWY9XCJzaG93XCI+XG4gIDxkaXZcbiAgICAqbmdJZj1cIighc2tlbGV0b24gfHwgbm9sYWJlbCk7ZWxzZSBsYWJlbHNrZWxldG9uXCJcbiAgICBjbGFzcz1cImNvbC1zbS17e2NvbExhYmVsfX1cIj5cbiAgICA8bGFiZWxcbiAgICAgIGZvcj1cInt7bmFtZX19XCJcbiAgICAgIGNsYXNzPVwibGFiZWwgY29sLWZvcm0tbGFiZWxcIj5cbiAgICAgIHt7bGFiZWwgfCB0cmFuc2xhdGV9fXt7ICghbm9sYWJlbCkgPyAoKHJlcXVpcmVkKSA/ICcgKicgOiAnJykgOiAnJyB9fVxuICAgIDwvbGFiZWw+XG4gICAgPGxhYmVsICpuZ0lmPVwiZGl2aWRlcmxhYmVsXCIgY2xhc3M9XCJkaXZpZGVyLWxhYmVsIGNvbC1mb3JtLWxhYmVsXCI+OjwvbGFiZWw+XG4gIDwvZGl2PlxuICA8bmctdGVtcGxhdGUgI2xhYmVsc2tlbGV0b24+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS17e2NvbExhYmVsfX1cIj5cbiAgICAgIDxsYWJlbFxuICAgICAgICBjbGFzcz1cImxhYmVsIGNvbC1mb3JtLWxhYmVsXCJcbiAgICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICdsYWJlbC1za2VsZXRvbic6IHRydWUsXG4gICAgICAgICAgJ3NrZWxldG9uJzogc2tlbGV0b25cbiAgICAgICAgfVwiPlxuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgPC9uZy10ZW1wbGF0ZT5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8ZGl2IGNsYXNzPVwib2Zmc2V0LXNtLXt7Y29sTGFiZWx9fSBjb2wtc20te3tjb2xDb250ZW50fX1cIj5cbiAgICA8ZG8td2Fybi1tZXNzYWdlICpuZ0lmPVwiIXNrZWxldG9uXCIgW3dhcm5NZXNzYWdlXT1cIndhcm5NZXNzYWdlXCI+PC9kby13YXJuLW1lc3NhZ2U+XG4gICAgPGRvLWVycm9yLW1lc3NhZ2UgW2hhc0Vycm9yc109XCJoYXNFcnJvcnNcIiBbZXJyb3JNZXNzYWdlc109XCJlcnJvck1lc3NhZ2VzXCIgW3BhcmFtXT1cInBhcmFtRXJyb3JcIj5cbiAgICA8L2RvLWVycm9yLW1lc3NhZ2U+XG4gIDwvZGl2PlxuPC9kaXY+Il19