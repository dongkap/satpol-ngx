import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@nebular/theme";
import * as i2 from "@angular/common";
import * as i3 from "@ngx-translate/core";
export class DoButtonComponent {
    constructor() {
        this.formGroupButton = new FormGroup({});
        this.disabledButton = false;
        this.type = 'submit';
        this.status = 'primary';
        this.size = 'medium';
        this.skeleton = false;
        this.onSubmit = new EventEmitter();
    }
    click(event) {
        this.onSubmit.emit(event);
    }
}
DoButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DoButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoButtonComponent, selector: "do-button", inputs: { formGroupButton: "formGroupButton", name: "name", disabledButton: "disabledButton", type: "type", status: "status", size: "size", skeleton: "skeleton" }, outputs: { onSubmit: "onSubmit" }, ngImport: i0, template: "<button *ngIf=\"!skeleton; else contentskeleton\"\n  type=\"{{type}}\"\n  status=\"{{status}}\"\n  size=\"{{size}}\"\n  (click)=\"click($event)\"\n  [disabled]=\"(type!='reset' && formGroupButton.invalid) || (type!='reset' && formGroupButton.pristine && !formGroupButton.valid) || disabledButton\"\n  nbButton>\n  <ng-content select=\"[buttonicon]\"></ng-content>\n  {{ name | translate}}\n</button>\n<ng-template #contentskeleton>\n  <div\n    [ngClass]=\"{\n      'button-skeleton': true,\n      'skeleton': skeleton\n    }\">\n  </div>\n</ng-template>", styles: [".nb-theme-default :host button[nbButton]{margin:0 .25rem}.nb-theme-dark :host button[nbButton]{margin:0 .25rem}.nb-theme-cosmic :host button[nbButton]{margin:0 .25rem}.nb-theme-corporate :host button[nbButton]{margin:0 .25rem}\n"], components: [{ type: i1.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], pipes: { "translate": i3.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoButtonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-button',
                    styleUrls: ['./do-button.component.scss'],
                    templateUrl: './do-button.component.html',
                }]
        }], propDecorators: { formGroupButton: [{
                type: Input
            }], name: [{
                type: Input
            }], disabledButton: [{
                type: Input
            }], type: [{
                type: Input
            }], status: [{
                type: Input
            }], size: [{
                type: Input
            }], skeleton: [{
                type: Input
            }], onSubmit: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXNoYXJlZC9zcmMvbGliL2J1dHRvbi9zaW5nbGUvZG8tYnV0dG9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXNoYXJlZC9zcmMvbGliL2J1dHRvbi9zaW5nbGUvZG8tYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQU8zQyxNQUFNLE9BQU8saUJBQWlCO0lBTDlCO1FBTWEsb0JBQWUsR0FBYyxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUUvQyxtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUNoQyxTQUFJLEdBQWtDLFFBQVEsQ0FBQztRQUMvQyxXQUFNLEdBQThDLFNBQVMsQ0FBQztRQUM5RCxTQUFJLEdBQW9ELFFBQVEsQ0FBQztRQUNqRSxhQUFRLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztLQUtuRTtJQUhVLEtBQUssQ0FBQyxLQUFVO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7OytHQVpRLGlCQUFpQjttR0FBakIsaUJBQWlCLHdQQ1I5Qiw0aUJBaUJjOzRGRFRELGlCQUFpQjtrQkFMN0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7b0JBQ3pDLFdBQVcsRUFBRSw0QkFBNEI7aUJBQzFDOzhCQUVZLGVBQWU7c0JBQXZCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLGNBQWM7c0JBQXRCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDSSxRQUFRO3NCQUFqQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8tYnV0dG9uJyxcbiAgc3R5bGVVcmxzOiBbJy4vZG8tYnV0dG9uLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9kby1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBEb0J1dHRvbkNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgZm9ybUdyb3VwQnV0dG9uOiBGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHt9KTtcbiAgICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gICAgQElucHV0KCkgZGlzYWJsZWRCdXR0b246IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSB0eXBlOiAnYnV0dG9uJyB8ICdzdWJtaXQnIHwgJ3Jlc2V0JyA9ICdzdWJtaXQnO1xuICAgIEBJbnB1dCgpIHN0YXR1czogJ3ByaW1hcnknIHwgJ2RhbmdlcicgfCAnd2FybmluZycgfCAnaW5mbycgPSAncHJpbWFyeSc7XG4gICAgQElucHV0KCkgc2l6ZTogJ3RpbnknIHwgJ3NtYWxsJyB8ICdtZWRpdW0nIHwgJ2xhcmdlJyB8ICdnaWFudCcgPSAnbWVkaXVtJztcbiAgICBASW5wdXQoKSBza2VsZXRvbjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBPdXRwdXQoKSBvblN1Ym1pdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgIHB1YmxpYyBjbGljayhldmVudDogYW55KSB7XG4gICAgICB0aGlzLm9uU3VibWl0LmVtaXQoZXZlbnQpO1xuICAgIH1cbn1cbiIsIjxidXR0b24gKm5nSWY9XCIhc2tlbGV0b247IGVsc2UgY29udGVudHNrZWxldG9uXCJcbiAgdHlwZT1cInt7dHlwZX19XCJcbiAgc3RhdHVzPVwie3tzdGF0dXN9fVwiXG4gIHNpemU9XCJ7e3NpemV9fVwiXG4gIChjbGljayk9XCJjbGljaygkZXZlbnQpXCJcbiAgW2Rpc2FibGVkXT1cIih0eXBlIT0ncmVzZXQnICYmIGZvcm1Hcm91cEJ1dHRvbi5pbnZhbGlkKSB8fCAodHlwZSE9J3Jlc2V0JyAmJiBmb3JtR3JvdXBCdXR0b24ucHJpc3RpbmUgJiYgIWZvcm1Hcm91cEJ1dHRvbi52YWxpZCkgfHwgZGlzYWJsZWRCdXR0b25cIlxuICBuYkJ1dHRvbj5cbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2J1dHRvbmljb25dXCI+PC9uZy1jb250ZW50PlxuICB7eyBuYW1lIHwgdHJhbnNsYXRlfX1cbjwvYnV0dG9uPlxuPG5nLXRlbXBsYXRlICNjb250ZW50c2tlbGV0b24+XG4gIDxkaXZcbiAgICBbbmdDbGFzc109XCJ7XG4gICAgICAnYnV0dG9uLXNrZWxldG9uJzogdHJ1ZSxcbiAgICAgICdza2VsZXRvbic6IHNrZWxldG9uXG4gICAgfVwiPlxuICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+Il19