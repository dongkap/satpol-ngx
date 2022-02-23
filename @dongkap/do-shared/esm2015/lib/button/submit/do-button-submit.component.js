import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@nebular/theme";
import * as i2 from "@angular/common";
import * as i3 from "@ngx-translate/core";
export class DoButtonSubmitComponent {
    constructor() {
        this.colLabel = 3;
        this.colButton = 9;
        this.disabledButton = false;
        this.disabledReset = false;
        this.type = 'submit';
        this.status = 'primary';
        this.skeleton = false;
        this.onSubmit = new EventEmitter();
        this.onReset = new EventEmitter();
    }
    set formGroupButton(formGroup) {
        this.formGroup = formGroup;
    }
    get disabledForm() {
        if (this.formGroup) {
            if (!this.formGroup.valid || this.formGroup.pristine) {
                return true;
            }
        }
        return false;
    }
    submit(event) {
        this.onSubmit.emit(event);
    }
    reset(event) {
        this.onReset.emit(event);
    }
}
DoButtonSubmitComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoButtonSubmitComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DoButtonSubmitComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoButtonSubmitComponent, selector: "do-button-submit", inputs: { colLabel: "colLabel", colButton: "colButton", resetTitle: "resetTitle", submitTitle: "submitTitle", disabledButton: "disabledButton", disabledReset: "disabledReset", type: "type", status: "status", skeleton: "skeleton", formGroupButton: "formGroupButton" }, outputs: { onSubmit: "onSubmit", onReset: "onReset" }, ngImport: i0, template: "<div class=\"row\">\n  <div class=\"offset-sm-{{colLabel}} col-sm-{{colButton}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <button\n      type=\"reset\"\n      status=\"danger\"\n      (click)=\"reset($event)\"\n      [disabled]=\"disabledReset\"\n      class=\"reset-left\"\n      nbButton>\n      {{ resetTitle | translate}}\n    </button>\n    <button\n      type=\"submit\"\n      status=\"primary\"\n      (click)=\"submit($event)\"\n      [disabled]=\"disabledButton || disabledForm\"\n      class=\"submit-right\"\n      nbButton>\n      {{ submitTitle | translate}}\n    </button>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"row offset-sm-{{colLabel}} col-sm-{{colButton}}\">\n      <div\n        [ngClass]=\"{\n          'reset-left': true,\n          'button-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n      <div\n        [ngClass]=\"{\n          'reset-right': true,\n          'button-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</div>", styles: [".nb-theme-default :host button[nbButton]{margin:0 .25rem}.nb-theme-default :host .reset-left{margin-right:.25rem}.nb-theme-default :host .submit-right{margin-left:.25rem}.nb-theme-dark :host button[nbButton]{margin:0 .25rem}.nb-theme-dark :host .reset-left{margin-right:.25rem}.nb-theme-dark :host .submit-right{margin-left:.25rem}.nb-theme-cosmic :host button[nbButton]{margin:0 .25rem}.nb-theme-cosmic :host .reset-left{margin-right:.25rem}.nb-theme-cosmic :host .submit-right{margin-left:.25rem}.nb-theme-corporate :host button[nbButton]{margin:0 .25rem}.nb-theme-corporate :host .reset-left{margin-right:.25rem}.nb-theme-corporate :host .submit-right{margin-left:.25rem}\n"], components: [{ type: i1.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], pipes: { "translate": i3.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoButtonSubmitComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-button-submit',
                    styleUrls: ['./do-button-submit.component.scss'],
                    templateUrl: './do-button-submit.component.html',
                }]
        }], propDecorators: { colLabel: [{
                type: Input
            }], colButton: [{
                type: Input
            }], resetTitle: [{
                type: Input
            }], submitTitle: [{
                type: Input
            }], disabledButton: [{
                type: Input
            }], disabledReset: [{
                type: Input
            }], type: [{
                type: Input
            }], status: [{
                type: Input
            }], skeleton: [{
                type: Input
            }], onSubmit: [{
                type: Output
            }], onReset: [{
                type: Output
            }], formGroupButton: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tYnV0dG9uLXN1Ym1pdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1zaGFyZWQvc3JjL2xpYi9idXR0b24vc3VibWl0L2RvLWJ1dHRvbi1zdWJtaXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc2hhcmVkL3NyYy9saWIvYnV0dG9uL3N1Ym1pdC9kby1idXR0b24tc3VibWl0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBUXZFLE1BQU0sT0FBTyx1QkFBdUI7SUFMcEM7UUFNVyxhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFHdEIsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFDL0IsU0FBSSxHQUFrQyxRQUFRLENBQUM7UUFDL0MsV0FBTSxHQUE4QyxTQUFTLENBQUM7UUFDOUQsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUN6QixhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDdEQsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0tBcUJoRTtJQXBCQyxJQUFhLGVBQWUsQ0FBQyxTQUFvQjtRQUMvQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUM3QixDQUFDO0lBRUQsSUFBVyxZQUFZO1FBQ3JCLElBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixJQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUU7Z0JBQ25ELE9BQU8sSUFBSSxDQUFDO2FBQ2I7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVNLE1BQU0sQ0FBQyxLQUFVO1FBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDTSxLQUFLLENBQUMsS0FBVTtRQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDOztxSEE5QlUsdUJBQXVCO3lHQUF2Qix1QkFBdUIsMlhDUnBDLGlqQ0F1Q007NEZEL0JPLHVCQUF1QjtrQkFMbkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztvQkFDaEQsV0FBVyxFQUFFLG1DQUFtQztpQkFDakQ7OEJBRVUsUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxjQUFjO3NCQUF0QixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNJLFFBQVE7c0JBQWpCLE1BQU07Z0JBQ0csT0FBTztzQkFBaEIsTUFBTTtnQkFDTSxlQUFlO3NCQUEzQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8tYnV0dG9uLXN1Ym1pdCcsXG4gIHN0eWxlVXJsczogWycuL2RvLWJ1dHRvbi1zdWJtaXQuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2RvLWJ1dHRvbi1zdWJtaXQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBEb0J1dHRvblN1Ym1pdENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGNvbExhYmVsOiBudW1iZXIgPSAzO1xuICBASW5wdXQoKSBjb2xCdXR0b246IG51bWJlciA9IDk7XG4gIEBJbnB1dCgpIHJlc2V0VGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgc3VibWl0VGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgZGlzYWJsZWRCdXR0b246IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgZGlzYWJsZWRSZXNldDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSB0eXBlOiAnYnV0dG9uJyB8ICdzdWJtaXQnIHwgJ3Jlc2V0JyA9ICdzdWJtaXQnO1xuICBASW5wdXQoKSBzdGF0dXM6ICdwcmltYXJ5JyB8ICdkYW5nZXInIHwgJ3dhcm5pbmcnIHwgJ2luZm8nID0gJ3ByaW1hcnknO1xuICBASW5wdXQoKSBza2VsZXRvbjogYm9vbGVhbiA9IGZhbHNlO1xuICBAT3V0cHV0KCkgb25TdWJtaXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvblJlc2V0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBASW5wdXQoKSBzZXQgZm9ybUdyb3VwQnV0dG9uKGZvcm1Hcm91cDogRm9ybUdyb3VwKSB7XG4gICAgdGhpcy5mb3JtR3JvdXAgPSBmb3JtR3JvdXA7XG4gIH1cbiAgcHVibGljIGZvcm1Hcm91cDogRm9ybUdyb3VwO1xuICBwdWJsaWMgZ2V0IGRpc2FibGVkRm9ybSgpOiBib29sZWFuIHtcbiAgICBpZih0aGlzLmZvcm1Hcm91cCkge1xuICAgICAgaWYoIXRoaXMuZm9ybUdyb3VwLnZhbGlkIHx8IHRoaXMuZm9ybUdyb3VwLnByaXN0aW5lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgc3VibWl0KGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLm9uU3VibWl0LmVtaXQoZXZlbnQpO1xuICB9XG4gIHB1YmxpYyByZXNldChldmVudDogYW55KSB7XG4gICAgdGhpcy5vblJlc2V0LmVtaXQoZXZlbnQpO1xuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgPGRpdiBjbGFzcz1cIm9mZnNldC1zbS17e2NvbExhYmVsfX0gY29sLXNtLXt7Y29sQnV0dG9ufX1cIiAqbmdJZj1cIiFza2VsZXRvbjsgZWxzZSBjb250ZW50c2tlbGV0b25cIj5cbiAgICA8YnV0dG9uXG4gICAgICB0eXBlPVwicmVzZXRcIlxuICAgICAgc3RhdHVzPVwiZGFuZ2VyXCJcbiAgICAgIChjbGljayk9XCJyZXNldCgkZXZlbnQpXCJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFJlc2V0XCJcbiAgICAgIGNsYXNzPVwicmVzZXQtbGVmdFwiXG4gICAgICBuYkJ1dHRvbj5cbiAgICAgIHt7IHJlc2V0VGl0bGUgfCB0cmFuc2xhdGV9fVxuICAgIDwvYnV0dG9uPlxuICAgIDxidXR0b25cbiAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgc3RhdHVzPVwicHJpbWFyeVwiXG4gICAgICAoY2xpY2spPVwic3VibWl0KCRldmVudClcIlxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkQnV0dG9uIHx8IGRpc2FibGVkRm9ybVwiXG4gICAgICBjbGFzcz1cInN1Ym1pdC1yaWdodFwiXG4gICAgICBuYkJ1dHRvbj5cbiAgICAgIHt7IHN1Ym1pdFRpdGxlIHwgdHJhbnNsYXRlfX1cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG4gIDxuZy10ZW1wbGF0ZSAjY29udGVudHNrZWxldG9uPlxuICAgIDxkaXYgY2xhc3M9XCJyb3cgb2Zmc2V0LXNtLXt7Y29sTGFiZWx9fSBjb2wtc20te3tjb2xCdXR0b259fVwiPlxuICAgICAgPGRpdlxuICAgICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgJ3Jlc2V0LWxlZnQnOiB0cnVlLFxuICAgICAgICAgICdidXR0b24tc2tlbGV0b24nOiB0cnVlLFxuICAgICAgICAgICdza2VsZXRvbic6IHNrZWxldG9uXG4gICAgICAgIH1cIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgJ3Jlc2V0LXJpZ2h0JzogdHJ1ZSxcbiAgICAgICAgICAnYnV0dG9uLXNrZWxldG9uJzogdHJ1ZSxcbiAgICAgICAgICAnc2tlbGV0b24nOiBza2VsZXRvblxuICAgICAgICB9XCI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9uZy10ZW1wbGF0ZT5cbjwvZGl2PiJdfQ==