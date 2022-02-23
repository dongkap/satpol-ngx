import { Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@ngx-translate/core";
export class DoWarnMessageComponent {
}
DoWarnMessageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoWarnMessageComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DoWarnMessageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoWarnMessageComponent, selector: "do-warn-message", inputs: { warnMessage: "warnMessage", param: "param" }, ngImport: i0, template: "<div *ngIf=\"warnMessage\">\n    <span class=\"caption status-warning warn-message\">{{warnMessage | translate}}</span>\n</div>", styles: [".warn-message{font-style:italic}\n"], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], pipes: { "translate": i2.TranslatePipe }, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoWarnMessageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-warn-message',
                    styleUrls: ['./do-warn-message.component.scss'],
                    templateUrl: './do-warn-message.component.html',
                    encapsulation: ViewEncapsulation.None,
                }]
        }], propDecorators: { warnMessage: [{
                type: Input
            }], param: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8td2Fybi1tZXNzYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXNoYXJlZC9zcmMvbGliL2Jhc2Uvd2Fybi1tZXNzYWdlL2RvLXdhcm4tbWVzc2FnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1zaGFyZWQvc3JjL2xpYi9iYXNlL3dhcm4tbWVzc2FnZS9kby13YXJuLW1lc3NhZ2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFRcEUsTUFBTSxPQUFPLHNCQUFzQjs7b0hBQXRCLHNCQUFzQjt3R0FBdEIsc0JBQXNCLCtHQ1JuQyxpSUFFTTs0RkRNTyxzQkFBc0I7a0JBTmxDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7b0JBQy9DLFdBQVcsRUFBRSxrQ0FBa0M7b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs4QkFFWSxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLXdhcm4tbWVzc2FnZScsXG4gIHN0eWxlVXJsczogWycuL2RvLXdhcm4tbWVzc2FnZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vZG8td2Fybi1tZXNzYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRG9XYXJuTWVzc2FnZUNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgd2Fybk1lc3NhZ2U6IHN0cmluZztcbiAgICBASW5wdXQoKSBwYXJhbTogYW55O1xufVxuIiwiPGRpdiAqbmdJZj1cIndhcm5NZXNzYWdlXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJjYXB0aW9uIHN0YXR1cy13YXJuaW5nIHdhcm4tbWVzc2FnZVwiPnt7d2Fybk1lc3NhZ2UgfCB0cmFuc2xhdGV9fTwvc3Bhbj5cbjwvZGl2PiJdfQ==