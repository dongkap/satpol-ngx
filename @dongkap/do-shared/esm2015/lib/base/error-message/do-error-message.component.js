import { Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@ngx-translate/core";
export class DoErrorMessageComponent {
    constructor() {
        this.hasErrors = false;
        this.errorMessages = [];
    }
}
DoErrorMessageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoErrorMessageComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DoErrorMessageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoErrorMessageComponent, selector: "do-error-message", inputs: { hasErrors: "hasErrors", errorMessages: "errorMessages", param: "param" }, ngImport: i0, template: "<div *ngIf=\"hasErrors\">\n  <div *ngFor=\"let message of errorMessages\">\n    <span class=\"caption status-danger\">\n      {{message | translate:param}}\n    </span>\n  </div>\n</div>", styles: [".error-message{width:100%;margin-top:.25rem;font-size:80%;color:#f86c6b}\n"], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "translate": i2.TranslatePipe }, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoErrorMessageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-error-message',
                    styleUrls: ['./do-error-message.component.scss'],
                    templateUrl: './do-error-message.component.html',
                    encapsulation: ViewEncapsulation.None,
                }]
        }], propDecorators: { hasErrors: [{
                type: Input
            }], errorMessages: [{
                type: Input
            }], param: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1zaGFyZWQvc3JjL2xpYi9iYXNlL2Vycm9yLW1lc3NhZ2UvZG8tZXJyb3ItbWVzc2FnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1zaGFyZWQvc3JjL2xpYi9iYXNlL2Vycm9yLW1lc3NhZ2UvZG8tZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQVFwRSxNQUFNLE9BQU8sdUJBQXVCO0lBTnBDO1FBT2EsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixrQkFBYSxHQUFhLEVBQUUsQ0FBQztLQUV6Qzs7cUhBSlksdUJBQXVCO3lHQUF2Qix1QkFBdUIsNElDUnBDLDRMQU1NOzRGREVPLHVCQUF1QjtrQkFObkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztvQkFDaEQsV0FBVyxFQUFFLG1DQUFtQztvQkFDaEQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOzhCQUVZLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csYUFBYTtzQkFBckIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkby1lcnJvci1tZXNzYWdlJyxcbiAgc3R5bGVVcmxzOiBbJy4vZG8tZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vZG8tZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIERvRXJyb3JNZXNzYWdlQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBoYXNFcnJvcnM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBlcnJvck1lc3NhZ2VzOiBzdHJpbmdbXSA9IFtdO1xuICAgIEBJbnB1dCgpIHBhcmFtOiBhbnk7XG59XG4iLCI8ZGl2ICpuZ0lmPVwiaGFzRXJyb3JzXCI+XG4gIDxkaXYgKm5nRm9yPVwibGV0IG1lc3NhZ2Ugb2YgZXJyb3JNZXNzYWdlc1wiPlxuICAgIDxzcGFuIGNsYXNzPVwiY2FwdGlvbiBzdGF0dXMtZGFuZ2VyXCI+XG4gICAgICB7e21lc3NhZ2UgfCB0cmFuc2xhdGU6cGFyYW19fVxuICAgIDwvc3Bhbj5cbiAgPC9kaXY+XG48L2Rpdj4iXX0=