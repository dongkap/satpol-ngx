import { Component, Input, ViewEncapsulation, ViewChild, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../collapse/do-collapse.component";
import * as i2 from "@ngx-translate/core";
export class DoCardCollapseComponent {
    constructor() {
        this.defaultExpanded = false;
        this.show = this.defaultExpanded;
    }
    set expanded(expanded) {
        this.defaultExpanded = expanded;
        this.show = expanded;
    }
    get expanded() {
        return this.defaultExpanded;
    }
    ngOnDestroy() { }
    doCollapse() {
        this.collapse.toggle();
        this.show = !this.show;
    }
}
DoCardCollapseComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoCardCollapseComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DoCardCollapseComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoCardCollapseComponent, selector: "do-card-collapse", inputs: { header: "header", expanded: "expanded" }, viewQueries: [{ propertyName: "collapse", first: true, predicate: ["cardcollapse"], descendants: true }], ngImport: i0, template: "<div class=\"header-card-collapse\">\n    <label>\n        {{header | translate}}\n    </label>\n    <div class=\"filter-collapse\">\n        <span class=\"filter-icon-collapse\" (click)=\"doCollapse()\">\n            <i class=\"{{show ? 'icon-arrow-down' : 'icon-arrow-up'}}\"></i>\n        </span>\n    </div>\n</div>\n<div do-collapse [expanded]=\"expanded\" #cardcollapse class=\"card-collapse\">\n    <ng-content></ng-content>\n</div>", styles: [".header-card-collapse{padding:.75rem 1rem .25rem;background-color:#f0f3f5;border:1px solid #c8ced3;border-bottom:0;border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.filter-collapse{float:right;cursor:pointer}.filter-icon-collapse:hover{color:#ffc94d}.card-collapse{padding:0 1rem;border:1px solid #c8ced3;margin-bottom:1rem;border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}\n"], components: [{ type: i1.DoCollapseComponent, selector: "do-collapse, [do-collapse]", inputs: ["expanded"] }], pipes: { "translate": i2.TranslatePipe }, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoCardCollapseComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-card-collapse',
                    styleUrls: ['./do-card-collapse.component.scss'],
                    templateUrl: './do-card-collapse.component.html',
                    encapsulation: ViewEncapsulation.None,
                }]
        }], propDecorators: { collapse: [{
                type: ViewChild,
                args: ['cardcollapse', { static: false }]
            }], header: [{
                type: Input
            }], expanded: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tY2FyZC1jb2xsYXBzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1zaGFyZWQvc3JjL2xpYi9iYXNlL2NhcmQtY29sbGFwc2UvZG8tY2FyZC1jb2xsYXBzZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1zaGFyZWQvc3JjL2xpYi9iYXNlL2NhcmQtY29sbGFwc2UvZG8tY2FyZC1jb2xsYXBzZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDOzs7O0FBVXZCLE1BQU0sT0FBTyx1QkFBdUI7SUFOcEM7UUFPVSxvQkFBZSxHQUFZLEtBQUssQ0FBQztRQUNsQyxTQUFJLEdBQVksSUFBSSxDQUFDLGVBQWUsQ0FBQztLQWtCN0M7SUFmQyxJQUFvQixRQUFRLENBQUMsUUFBaUI7UUFDNUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUNELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUVELFdBQVcsS0FBVSxDQUFDO0lBRXRCLFVBQVU7UUFDUixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3pCLENBQUM7O3FIQWxCVSx1QkFBdUI7eUdBQXZCLHVCQUF1QixzTkNmcEMseWJBWU07NEZER08sdUJBQXVCO2tCQU5uQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO29CQUNoRCxXQUFXLEVBQUUsbUNBQW1DO29CQUNoRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEM7OEJBSTZDLFFBQVE7c0JBQW5ELFNBQVM7dUJBQUMsY0FBYyxFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQztnQkFDMUIsTUFBTTtzQkFBckIsS0FBSztnQkFDYyxRQUFRO3NCQUEzQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvQ29sbGFwc2VDb21wb25lbnQgfSBmcm9tICcuLi9jb2xsYXBzZS9kby1jb2xsYXBzZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkby1jYXJkLWNvbGxhcHNlJyxcbiAgc3R5bGVVcmxzOiBbJy4vZG8tY2FyZC1jb2xsYXBzZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vZG8tY2FyZC1jb2xsYXBzZS5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIERvQ2FyZENvbGxhcHNlQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBkZWZhdWx0RXhwYW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHNob3c6IGJvb2xlYW4gPSB0aGlzLmRlZmF1bHRFeHBhbmRlZDtcbiAgQFZpZXdDaGlsZCgnY2FyZGNvbGxhcHNlJywge3N0YXRpYzogZmFsc2V9KSBjb2xsYXBzZTogRG9Db2xsYXBzZUNvbXBvbmVudDtcbiAgQElucHV0KCkgcHVibGljIGhlYWRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgc2V0IGV4cGFuZGVkKGV4cGFuZGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5kZWZhdWx0RXhwYW5kZWQgPSBleHBhbmRlZDtcbiAgICB0aGlzLnNob3cgPSBleHBhbmRlZDtcbiAgfVxuICBwdWJsaWMgZ2V0IGV4cGFuZGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRlZmF1bHRFeHBhbmRlZDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge31cblxuICBkb0NvbGxhcHNlKCk6IHZvaWQge1xuICAgIHRoaXMuY29sbGFwc2UudG9nZ2xlKCk7XG4gICAgdGhpcy5zaG93ID0gIXRoaXMuc2hvdztcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiaGVhZGVyLWNhcmQtY29sbGFwc2VcIj5cbiAgICA8bGFiZWw+XG4gICAgICAgIHt7aGVhZGVyIHwgdHJhbnNsYXRlfX1cbiAgICA8L2xhYmVsPlxuICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXItY29sbGFwc2VcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmaWx0ZXItaWNvbi1jb2xsYXBzZVwiIChjbGljayk9XCJkb0NvbGxhcHNlKClcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwie3tzaG93ID8gJ2ljb24tYXJyb3ctZG93bicgOiAnaWNvbi1hcnJvdy11cCd9fVwiPjwvaT5cbiAgICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGRvLWNvbGxhcHNlIFtleHBhbmRlZF09XCJleHBhbmRlZFwiICNjYXJkY29sbGFwc2UgY2xhc3M9XCJjYXJkLWNvbGxhcHNlXCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+Il19