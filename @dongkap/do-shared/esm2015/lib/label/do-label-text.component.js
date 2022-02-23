import { Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../base/container-outlet/do-container-outlet.component";
import * as i2 from "@nebular/theme";
import * as i3 from "@angular/common";
import * as i4 from "@ngx-translate/core";
export class DoLabelTextComponent {
    constructor() {
        this.colLabel = 4;
        this.colContent = 8;
        this.skeleton = false;
        this.dividerlabel = true;
        this.numeric = false;
        this.label = '';
        this.nolabel = false;
        this.required = false;
        this.showMoreMode = false;
        this.maxShowMore = 100;
        this.originalContent = '';
        this.value = '';
        this.showMore = false;
    }
    set content(data) {
        if (this.showMoreMode) {
            if (data) {
                this.originalContent = data;
                if (data.length > this.maxShowMore) {
                    this.onLess();
                }
            }
        }
        else {
            this.value = data;
        }
    }
    onShowMore() {
        this.showMore = !this.showMore;
        if (this.showMore) {
            this.value = this.originalContent;
        }
        else {
            this.onLess();
        }
    }
    onLess() {
        this.value = this.originalContent.slice(0, this.maxShowMore);
        this.value = this.value + '.... ';
    }
}
DoLabelTextComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoLabelTextComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DoLabelTextComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoLabelTextComponent, selector: "do-label-text", inputs: { colLabel: "colLabel", colContent: "colContent", skeleton: "skeleton", name: "name", content: "content", dividerlabel: "dividerlabel", numeric: "numeric", label: "label", nolabel: "nolabel", required: "required", showMoreMode: "showMoreMode", maxShowMore: "maxShowMore", paramError: "paramError" }, ngImport: i0, template: "<do-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\" \n  [colLabel]=\"colLabel\" [colContent]=\"colContent\"\n  [required]=\"required\"\n  [dividerlabel]=\"dividerlabel\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colContent}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <label *ngIf=\"!showMoreMode\"\n      class=\"col-form-label label-text\"\n      [ngClass]=\"{\n        'no-content-label': !value,\n        'numeric-label': numeric\n      }\"\n    >{{value | translate}} </label>\n    <div *ngIf=\"showMoreMode\" class=\"label-text\">\n      <label\n      class=\"col-form-label\"\n      [ngClass]=\"{\n        'no-content-label': !value,\n        'numeric-label': numeric\n      }\"\n      >{{value | translate}} </label>\n      <button *ngIf=\"!showMore\" type=\"button\" nbButton outline status=\"info\" (click)=\"onShowMore()\">{{'Show More' | translate}}</button>\n      <button *ngIf=\"showMore\" type=\"button\" nbButton outline status=\"info\" (click)=\"onShowMore()\">{{'Show Less' | translate}}</button>\n    </div>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colContent}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</do-container-outlet>", styles: ["label.label-text{width:100%;border-bottom:.05rem solid #e4e5e6;padding-right:.5rem;padding-left:.5rem}div.label-text{overflow:auto;width:100%;border-bottom:.05rem solid #e4e5e6;padding-right:.5rem;padding-left:.5rem}button.btn-link{padding-left:0}label.no-content-label{padding:15px 0}label.numeric-label{text-align:right}\n"], components: [{ type: i1.DoContainerOutletComponent, selector: "do-container-outlet", inputs: ["name", "label", "colLabel", "colContent", "nolabel", "dividerlabel", "required", "hasErrors", "errorMessages", "warnMessage", "paramError", "skeleton", "show"] }, { type: i2.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], pipes: { "translate": i4.TranslatePipe }, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoLabelTextComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-label-text',
                    styleUrls: ['./do-label-text.component.scss'],
                    templateUrl: './do-label-text.component.html',
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { colLabel: [{
                type: Input
            }], colContent: [{
                type: Input
            }], skeleton: [{
                type: Input
            }], name: [{
                type: Input
            }], content: [{
                type: Input
            }], dividerlabel: [{
                type: Input
            }], numeric: [{
                type: Input
            }], label: [{
                type: Input
            }], nolabel: [{
                type: Input
            }], required: [{
                type: Input
            }], showMoreMode: [{
                type: Input
            }], maxShowMore: [{
                type: Input
            }], paramError: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tbGFiZWwtdGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1zaGFyZWQvc3JjL2xpYi9sYWJlbC9kby1sYWJlbC10ZXh0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXNoYXJlZC9zcmMvbGliL2xhYmVsL2RvLWxhYmVsLXRleHQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztBQVFwRSxNQUFNLE9BQU8sb0JBQW9CO0lBK0I3QjtRQTdCUyxhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQWMxQixpQkFBWSxHQUFZLElBQUksQ0FBQztRQUM3QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLGdCQUFXLEdBQVcsR0FBRyxDQUFDO1FBRzVCLG9CQUFlLEdBQVcsRUFBRSxDQUFDO1FBQzdCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsYUFBUSxHQUFZLEtBQUssQ0FBQztJQUVsQixDQUFDO0lBekJoQixJQUFhLE9BQU8sQ0FBQyxJQUFZO1FBQy9CLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLElBQUksRUFBRTtnQkFDUixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztnQkFDNUIsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUU7b0JBQ2xDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztpQkFDZjthQUNGO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQztJQWdCTSxVQUFVO1FBQ2YsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDL0IsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztTQUNuQzthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Y7SUFDSCxDQUFDO0lBRU8sTUFBTTtRQUNaLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO0lBQ3BDLENBQUM7O2tIQTdDUSxvQkFBb0I7c0dBQXBCLG9CQUFvQix5V0NSakMsazBDQW9Dc0I7NEZENUJULG9CQUFvQjtrQkFOaEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7b0JBQzdDLFdBQVcsRUFBRSxnQ0FBZ0M7b0JBQzdDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0QzswRUFHWSxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ08sT0FBTztzQkFBbkIsS0FBSztnQkFZRyxZQUFZO3NCQUFwQixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkby1sYWJlbC10ZXh0JyxcbiAgc3R5bGVVcmxzOiBbJy4vZG8tbGFiZWwtdGV4dC5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vZG8tbGFiZWwtdGV4dC5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIERvTGFiZWxUZXh0Q29tcG9uZW50IHtcblxuICAgIEBJbnB1dCgpIGNvbExhYmVsOiBudW1iZXIgPSA0O1xuICAgIEBJbnB1dCgpIGNvbENvbnRlbnQ6IG51bWJlciA9IDg7XG4gICAgQElucHV0KCkgc2tlbGV0b246IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gICAgQElucHV0KCkgc2V0IGNvbnRlbnQoZGF0YTogc3RyaW5nKSB7XG4gICAgICBpZiAodGhpcy5zaG93TW9yZU1vZGUpIHtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICB0aGlzLm9yaWdpbmFsQ29udGVudCA9IGRhdGE7XG4gICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gdGhpcy5tYXhTaG93TW9yZSkge1xuICAgICAgICAgICAgdGhpcy5vbkxlc3MoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBkYXRhO1xuICAgICAgfVxuICAgIH1cbiAgICBASW5wdXQoKSBkaXZpZGVybGFiZWw6IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIG51bWVyaWM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBsYWJlbDogc3RyaW5nID0gJyc7XG4gICAgQElucHV0KCkgbm9sYWJlbDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIHJlcXVpcmVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgc2hvd01vcmVNb2RlOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgbWF4U2hvd01vcmU6IG51bWJlciA9IDEwMDtcbiAgICBASW5wdXQoKSBwYXJhbUVycm9yOiBhbnk7XG5cbiAgICBwdWJsaWMgb3JpZ2luYWxDb250ZW50OiBzdHJpbmcgPSAnJztcbiAgICBwdWJsaWMgdmFsdWU6IHN0cmluZyA9ICcnO1xuICAgIHB1YmxpYyBzaG93TW9yZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgcHVibGljIG9uU2hvd01vcmUoKTogdm9pZCB7XG4gICAgICB0aGlzLnNob3dNb3JlID0gIXRoaXMuc2hvd01vcmU7XG4gICAgICBpZiAodGhpcy5zaG93TW9yZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5vcmlnaW5hbENvbnRlbnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9uTGVzcygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25MZXNzKCk6IHZvaWQge1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMub3JpZ2luYWxDb250ZW50LnNsaWNlKDAsIHRoaXMubWF4U2hvd01vcmUpO1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUgKyAnLi4uLiAnO1xuICAgIH1cbn1cbiIsIjxkby1jb250YWluZXItb3V0bGV0XG4gIFtuYW1lXT1cIm5hbWVcIiBbbGFiZWxdPVwibGFiZWxcIiBbbm9sYWJlbF09XCJub2xhYmVsXCIgXG4gIFtjb2xMYWJlbF09XCJjb2xMYWJlbFwiIFtjb2xDb250ZW50XT1cImNvbENvbnRlbnRcIlxuICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxuICBbZGl2aWRlcmxhYmVsXT1cImRpdmlkZXJsYWJlbFwiXG4gIFtza2VsZXRvbl09XCJza2VsZXRvblwiPlxuICA8ZGl2IGNsYXNzPVwiY29sLXNtLXt7Y29sQ29udGVudH19XCIgKm5nSWY9XCIhc2tlbGV0b247IGVsc2UgY29udGVudHNrZWxldG9uXCI+XG4gICAgPGxhYmVsICpuZ0lmPVwiIXNob3dNb3JlTW9kZVwiXG4gICAgICBjbGFzcz1cImNvbC1mb3JtLWxhYmVsIGxhYmVsLXRleHRcIlxuICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAnbm8tY29udGVudC1sYWJlbCc6ICF2YWx1ZSxcbiAgICAgICAgJ251bWVyaWMtbGFiZWwnOiBudW1lcmljXG4gICAgICB9XCJcbiAgICA+e3t2YWx1ZSB8IHRyYW5zbGF0ZX19IDwvbGFiZWw+XG4gICAgPGRpdiAqbmdJZj1cInNob3dNb3JlTW9kZVwiIGNsYXNzPVwibGFiZWwtdGV4dFwiPlxuICAgICAgPGxhYmVsXG4gICAgICBjbGFzcz1cImNvbC1mb3JtLWxhYmVsXCJcbiAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgJ25vLWNvbnRlbnQtbGFiZWwnOiAhdmFsdWUsXG4gICAgICAgICdudW1lcmljLWxhYmVsJzogbnVtZXJpY1xuICAgICAgfVwiXG4gICAgICA+e3t2YWx1ZSB8IHRyYW5zbGF0ZX19IDwvbGFiZWw+XG4gICAgICA8YnV0dG9uICpuZ0lmPVwiIXNob3dNb3JlXCIgdHlwZT1cImJ1dHRvblwiIG5iQnV0dG9uIG91dGxpbmUgc3RhdHVzPVwiaW5mb1wiIChjbGljayk9XCJvblNob3dNb3JlKClcIj57eydTaG93IE1vcmUnIHwgdHJhbnNsYXRlfX08L2J1dHRvbj5cbiAgICAgIDxidXR0b24gKm5nSWY9XCJzaG93TW9yZVwiIHR5cGU9XCJidXR0b25cIiBuYkJ1dHRvbiBvdXRsaW5lIHN0YXR1cz1cImluZm9cIiAoY2xpY2spPVwib25TaG93TW9yZSgpXCI+e3snU2hvdyBMZXNzJyB8IHRyYW5zbGF0ZX19PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8bmctdGVtcGxhdGUgI2NvbnRlbnRza2VsZXRvbj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLXt7Y29sQ29udGVudH19XCI+XG4gICAgICA8ZGl2XG4gICAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAnaW5wdXQtc2tlbGV0b24nOiB0cnVlLFxuICAgICAgICAgICdza2VsZXRvbic6IHNrZWxldG9uXG4gICAgICAgIH1cIj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L25nLXRlbXBsYXRlPlxuPC9kby1jb250YWluZXItb3V0bGV0PiJdfQ==