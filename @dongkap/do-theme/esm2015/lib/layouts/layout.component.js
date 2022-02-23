import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@nebular/theme";
import * as i2 from "../components/header/header.component";
import * as i3 from "../components/footer/footer.component";
export class DefaultLayoutComponent {
    constructor() {
        this.extraMenu = [];
    }
}
DefaultLayoutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DefaultLayoutComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DefaultLayoutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DefaultLayoutComponent, selector: "do-layout", inputs: { name: "name", image: "image", extraMenu: "extraMenu" }, ngImport: i0, template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <do-header [name]="name" [image]="image" [extraMenu]="extraMenu"></do-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <do-footer></do-footer>
      </nb-layout-footer>
    </nb-layout>
  `, isInline: true, styles: [".nb-theme-default :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-dark :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-cosmic :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-corporate :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}\n"], components: [{ type: i1.NbLayoutComponent, selector: "nb-layout", inputs: ["center", "windowMode", "withScroll", "restoreScrollTop"] }, { type: i1.NbLayoutHeaderComponent, selector: "nb-layout-header", inputs: ["fixed", "subheader"] }, { type: i2.HeaderComponent, selector: "do-header", inputs: ["name", "image", "logo", "extraMenu"] }, { type: i1.NbSidebarComponent, selector: "nb-sidebar", inputs: ["compactedBreakpoints", "collapsedBreakpoints", "right", "left", "start", "end", "fixed", "containerFixed", "state", "responsive", "tag"], outputs: ["stateChange", "responsiveStateChange"] }, { type: i1.NbLayoutColumnComponent, selector: "nb-layout-column", inputs: ["left", "start"] }, { type: i1.NbLayoutFooterComponent, selector: "nb-layout-footer", inputs: ["fixed"] }, { type: i3.FooterComponent, selector: "do-footer" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DefaultLayoutComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-layout',
                    styleUrls: ['./layout.component.scss'],
                    template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <do-header [name]="name" [image]="image" [extraMenu]="extraMenu"></do-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <do-footer></do-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
                }]
        }], propDecorators: { name: [{
                type: Input
            }], image: [{
                type: Input
            }], extraMenu: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXRoZW1lL3NyYy9saWIvbGF5b3V0cy9sYXlvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztBQTBCakQsTUFBTSxPQUFPLHNCQUFzQjtJQXZCbkM7UUEyQmtCLGNBQVMsR0FBaUIsRUFBRSxDQUFDO0tBRTlDOztvSEFOWSxzQkFBc0I7d0dBQXRCLHNCQUFzQixtSEFwQnZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQlQ7NEZBRVUsc0JBQXNCO2tCQXZCbEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7b0JBQ3RDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0JUO2lCQUNGOzhCQUdpQixJQUFJO3NCQUFuQixLQUFLO2dCQUNVLEtBQUs7c0JBQXBCLEtBQUs7Z0JBQ1UsU0FBUztzQkFBeEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5iTWVudUl0ZW0gfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLWxheW91dCcsXG4gIHN0eWxlVXJsczogWycuL2xheW91dC5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuYi1sYXlvdXQgd2luZG93TW9kZT5cbiAgICAgIDxuYi1sYXlvdXQtaGVhZGVyIGZpeGVkPlxuICAgICAgICA8ZG8taGVhZGVyIFtuYW1lXT1cIm5hbWVcIiBbaW1hZ2VdPVwiaW1hZ2VcIiBbZXh0cmFNZW51XT1cImV4dHJhTWVudVwiPjwvZG8taGVhZGVyPlxuICAgICAgPC9uYi1sYXlvdXQtaGVhZGVyPlxuXG4gICAgICA8bmItc2lkZWJhciBjbGFzcz1cIm1lbnUtc2lkZWJhclwiIHRhZz1cIm1lbnUtc2lkZWJhclwiIHJlc3BvbnNpdmU+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm5iLW1lbnVcIj48L25nLWNvbnRlbnQ+XG4gICAgICA8L25iLXNpZGViYXI+XG5cbiAgICAgIDxuYi1sYXlvdXQtY29sdW1uPlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJyb3V0ZXItb3V0bGV0XCI+PC9uZy1jb250ZW50PlxuICAgICAgPC9uYi1sYXlvdXQtY29sdW1uPlxuXG4gICAgICA8bmItbGF5b3V0LWZvb3RlciBmaXhlZD5cbiAgICAgICAgPGRvLWZvb3Rlcj48L2RvLWZvb3Rlcj5cbiAgICAgIDwvbmItbGF5b3V0LWZvb3Rlcj5cbiAgICA8L25iLWxheW91dD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgRGVmYXVsdExheW91dENvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgcHVibGljIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgcHVibGljIGltYWdlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBleHRyYU1lbnU6IE5iTWVudUl0ZW1bXSA9IFtdO1xuXG59XG4iXX0=