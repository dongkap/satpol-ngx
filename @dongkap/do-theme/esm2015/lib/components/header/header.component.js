import { Component, Input } from '@angular/core';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@nebular/theme";
import * as i2 from "../../services/layout.service";
import * as i3 from "@angular/common";
import * as i4 from "@angular/router";
import * as i5 from "@ngx-translate/core";
export class HeaderComponent {
    constructor(sidebarService, themeService, breakpointService, layoutService, locationStrategy, router) {
        this.sidebarService = sidebarService;
        this.themeService = themeService;
        this.breakpointService = breakpointService;
        this.layoutService = layoutService;
        this.locationStrategy = locationStrategy;
        this.router = router;
        this.logo = '/assets/images/logo.png';
        this.extraMenu = [];
        this.userPictureOnly = false;
        this.destroy$ = new Subject();
        this.logo = this.locationStrategy.getBaseHref().replace(/\/$/, '') + this.logo;
    }
    ngOnInit() {
        const { xl } = this.breakpointService.getBreakpointsMap();
        this.themeService.onMediaQueryChange()
            .pipe(map(([, currentBreakpoint]) => currentBreakpoint.width < xl), takeUntil(this.destroy$))
            .subscribe((isLessThanXl) => this.userPictureOnly = isLessThanXl);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    toggleSidebar() {
        this.sidebarService.toggle(true, 'menu-sidebar');
        this.layoutService.changeLayoutSize();
        return false;
    }
    navigateHome() {
        this.router.navigate(['/app/home']);
        return false;
    }
}
HeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HeaderComponent, deps: [{ token: i1.NbSidebarService }, { token: i1.NbThemeService }, { token: i1.NbMediaBreakpointsService }, { token: i2.LayoutService }, { token: i3.LocationStrategy }, { token: i4.Router }], target: i0.ɵɵFactoryTarget.Component });
HeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: HeaderComponent, selector: "do-header", inputs: { name: "name", image: "image", logo: "logo", extraMenu: "extraMenu" }, ngImport: i0, template: "<div class=\"header-container\">\n  <div class=\"logo-container\">\n    <a (click)=\"toggleSidebar()\" href=\"#\" class=\"sidebar-toggle\">\n      <nb-icon icon=\"menu-2-outline\"></nb-icon>\n    </a>\n    <a class=\"logo\" href=\"#\" (click)=\"navigateHome()\">\n      <div class=\"image-logo\"\n        [ngStyle]=\"{\n          'background-image': 'url('+logo+')'\n        }\">\n      </div>\n      <!--<nb-action class=\"icon-logo\" icon=\"home-outline\"></nb-action>-->\n      <span class=\"title-logo\">{{ 'SMART Tanggap' | translate }}</span>\n    </a>\n  </div>\n</div>\n\n<div class=\"header-container\">\n  <nb-actions size=\"small\">\n\n    <nb-action class=\"control-item\">\n      <nb-search type=\"rotate-layout\"></nb-search>\n    </nb-action>\n    <nb-action class=\"control-item\" icon=\"bell-outline\"></nb-action>\n    <nb-action class=\"user-action\" >\n      <nb-user [nbContextMenu]=\"extraMenu\"\n               [onlyPicture]=\"userPictureOnly\"\n               [name]=\"name\"\n               [picture]=\"image\">\n      </nb-user>\n    </nb-action>\n  </nb-actions>\n</div>\n", styles: [".nb-theme-default :host{display:flex;justify-content:space-between;width:100%}.nb-theme-default :host .logo-container{display:flex;align-items:center}.nb-theme-default :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-default :host nb-user{cursor:pointer}.nb-theme-default :host ::ng-deep nb-search button{padding:0!important}.nb-theme-default :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-default :host .header-container .sidebar-toggle{text-decoration:none;color:#8f9bb3}[dir=ltr] .nb-theme-default :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-default :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-default :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-default :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-default :host .header-container .logo{border-left:1px solid #edf1f7}[dir=rtl] .nb-theme-default :host .header-container .logo{border-right:1px solid #edf1f7}.nb-theme-default :host .icon-logo{display:none}.nb-theme-default :host .image-logo{display:none}@media (max-width: 767.98px){.nb-theme-default :host .control-item{border:none;padding-left:5px}.nb-theme-default :host .user-action{border:none;padding:0}.nb-theme-default :host .title-logo{display:none}.nb-theme-default :host .icon-logo{display:unset}.nb-theme-default :host .image-logo{display:block;background-size:1em;width:1em;height:1em}}@media (max-width: 575.98px){.nb-theme-default :host nb-select{display:none}}.nb-theme-dark :host{display:flex;justify-content:space-between;width:100%}.nb-theme-dark :host .logo-container{display:flex;align-items:center}.nb-theme-dark :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-dark :host nb-user{cursor:pointer}.nb-theme-dark :host ::ng-deep nb-search button{padding:0!important}.nb-theme-dark :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-dark :host .header-container .sidebar-toggle{text-decoration:none;color:#8f9bb3}[dir=ltr] .nb-theme-dark :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-dark :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-dark :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-dark :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-dark :host .header-container .logo{border-left:1px solid #151a30}[dir=rtl] .nb-theme-dark :host .header-container .logo{border-right:1px solid #151a30}.nb-theme-dark :host .icon-logo{display:none}.nb-theme-dark :host .image-logo{display:none}@media (max-width: 767.98px){.nb-theme-dark :host .control-item{border:none;padding-left:5px}.nb-theme-dark :host .user-action{border:none;padding:0}.nb-theme-dark :host .title-logo{display:none}.nb-theme-dark :host .icon-logo{display:unset}.nb-theme-dark :host .image-logo{display:block;background-size:1em;width:1em;height:1em}}@media (max-width: 575.98px){.nb-theme-dark :host nb-select{display:none}}.nb-theme-cosmic :host{display:flex;justify-content:space-between;width:100%}.nb-theme-cosmic :host .logo-container{display:flex;align-items:center}.nb-theme-cosmic :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-cosmic :host nb-user{cursor:pointer}.nb-theme-cosmic :host ::ng-deep nb-search button{padding:0!important}.nb-theme-cosmic :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-cosmic :host .header-container .sidebar-toggle{text-decoration:none;color:#b4b4db}[dir=ltr] .nb-theme-cosmic :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-cosmic :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-cosmic :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-cosmic :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-cosmic :host .header-container .logo{border-left:1px solid #1b1b38}[dir=rtl] .nb-theme-cosmic :host .header-container .logo{border-right:1px solid #1b1b38}.nb-theme-cosmic :host .icon-logo{display:none}.nb-theme-cosmic :host .image-logo{display:none}@media (max-width: 767.98px){.nb-theme-cosmic :host .control-item{border:none;padding-left:5px}.nb-theme-cosmic :host .user-action{border:none;padding:0}.nb-theme-cosmic :host .title-logo{display:none}.nb-theme-cosmic :host .icon-logo{display:unset}.nb-theme-cosmic :host .image-logo{display:block;background-size:1em;width:1em;height:1em}}@media (max-width: 575.98px){.nb-theme-cosmic :host nb-select{display:none}}.nb-theme-corporate :host{display:flex;justify-content:space-between;width:100%}.nb-theme-corporate :host .logo-container{display:flex;align-items:center}.nb-theme-corporate :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-corporate :host nb-user{cursor:pointer}.nb-theme-corporate :host ::ng-deep nb-search button{padding:0!important}.nb-theme-corporate :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-corporate :host .header-container .sidebar-toggle{text-decoration:none;color:#8f9bb3}[dir=ltr] .nb-theme-corporate :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-corporate :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-corporate :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-corporate :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-corporate :host .header-container .logo{border-left:1px solid #edf1f7}[dir=rtl] .nb-theme-corporate :host .header-container .logo{border-right:1px solid #edf1f7}.nb-theme-corporate :host .icon-logo{display:none}.nb-theme-corporate :host .image-logo{display:none}@media (max-width: 767.98px){.nb-theme-corporate :host .control-item{border:none;padding-left:5px}.nb-theme-corporate :host .user-action{border:none;padding:0}.nb-theme-corporate :host .title-logo{display:none}.nb-theme-corporate :host .icon-logo{display:unset}.nb-theme-corporate :host .image-logo{display:block;background-size:1em;width:1em;height:1em}}@media (max-width: 575.98px){.nb-theme-corporate :host nb-select{display:none}}\n"], components: [{ type: i1.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }, { type: i1.NbActionsComponent, selector: "nb-actions", inputs: ["size", "fullWidth"] }, { type: i1.NbActionComponent, selector: "nb-action", inputs: ["title", "badgeStatus", "disabled", "badgeDot", "link", "href", "icon", "badgeText", "badgePosition"] }, { type: i1.NbSearchComponent, selector: "nb-search", inputs: ["placeholder", "hint", "tag", "type"] }, { type: i1.NbUserComponent, selector: "nb-user", inputs: ["name", "size", "shape", "badgeStatus", "picture", "showName", "showTitle", "showInitials", "onlyPicture", "title", "color", "badgeText", "badgePosition"] }], directives: [{ type: i3.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: i1.NbContextMenuDirective, selector: "[nbContextMenu]", inputs: ["nbContextMenuAdjustment", "nbContextMenuTrigger", "nbContextMenuPlacement", "nbContextMenuTag", "nbContextMenu", "nbContextMenuClass"] }], pipes: { "translate": i5.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HeaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-header',
                    styleUrls: ['./header.component.scss'],
                    templateUrl: './header.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i1.NbSidebarService }, { type: i1.NbThemeService }, { type: i1.NbMediaBreakpointsService }, { type: i2.LayoutService }, { type: i3.LocationStrategy }, { type: i4.Router }]; }, propDecorators: { name: [{
                type: Input
            }], image: [{
                type: Input
            }], logo: [{
                type: Input
            }], extraMenu: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXRoZW1lL3NyYy9saWIvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXRoZW1lL3NyYy9saWIvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUVwRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7QUFlL0IsTUFBTSxPQUFPLGVBQWU7SUFTMUIsWUFBb0IsY0FBZ0MsRUFDaEMsWUFBNEIsRUFDNUIsaUJBQTRDLEVBQzVDLGFBQTRCLEVBQzVCLGdCQUFrQyxFQUNsQyxNQUFjO1FBTGQsbUJBQWMsR0FBZCxjQUFjLENBQWtCO1FBQ2hDLGlCQUFZLEdBQVosWUFBWSxDQUFnQjtRQUM1QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQTJCO1FBQzVDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVZsQixTQUFJLEdBQVcseUJBQXlCLENBQUM7UUFDekMsY0FBUyxHQUFpQixFQUFFLENBQUM7UUFDdEMsb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFDaEMsYUFBUSxHQUFrQixJQUFJLE9BQU8sRUFBUSxDQUFDO1FBUXBELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNqRixDQUFDO0lBRUQsUUFBUTtRQUNOLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUMxRCxJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixFQUFFO2FBQ25DLElBQUksQ0FDSCxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsaUJBQWlCLENBQUMsRUFBRSxFQUFFLENBQUMsaUJBQWlCLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxFQUM1RCxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUN6QjthQUNBLFNBQVMsQ0FBQyxDQUFDLFlBQXFCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsWUFBWSxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3RDLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDcEMsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs2R0ExQ1UsZUFBZTtpR0FBZixlQUFlLGlJQ2xCNUIsNmtDQWlDQTs0RkRmYSxlQUFlO2tCQUwzQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztvQkFDdEMsV0FBVyxFQUFFLHlCQUF5QjtpQkFDdkM7NFBBR2lCLElBQUk7c0JBQW5CLEtBQUs7Z0JBQ1UsS0FBSztzQkFBcEIsS0FBSztnQkFDVSxJQUFJO3NCQUFuQixLQUFLO2dCQUNVLFNBQVM7c0JBQXhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IG1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgTmJNZWRpYUJyZWFrcG9pbnRzU2VydmljZSxcbiAgTmJNZW51SXRlbSxcbiAgTmJTaWRlYmFyU2VydmljZSxcbiAgTmJUaGVtZVNlcnZpY2UsXG59IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IExheW91dFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sYXlvdXQuc2VydmljZSc7XG5pbXBvcnQgeyBMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8taGVhZGVyJyxcbiAgc3R5bGVVcmxzOiBbJy4vaGVhZGVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgQElucHV0KCkgcHVibGljIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgcHVibGljIGltYWdlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBsb2dvOiBzdHJpbmcgPSAnL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmcnO1xuICBASW5wdXQoKSBwdWJsaWMgZXh0cmFNZW51OiBOYk1lbnVJdGVtW10gPSBbXTtcbiAgcHVibGljIHVzZXJQaWN0dXJlT25seTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIGRlc3Ryb3kkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNpZGViYXJTZXJ2aWNlOiBOYlNpZGViYXJTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHRoZW1lU2VydmljZTogTmJUaGVtZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgYnJlYWtwb2ludFNlcnZpY2U6IE5iTWVkaWFCcmVha3BvaW50c1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgbGF5b3V0U2VydmljZTogTGF5b3V0U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBsb2NhdGlvblN0cmF0ZWd5OiBMb2NhdGlvblN0cmF0ZWd5LFxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgdGhpcy5sb2dvID0gdGhpcy5sb2NhdGlvblN0cmF0ZWd5LmdldEJhc2VIcmVmKCkucmVwbGFjZSgvXFwvJC8sICcnKSArIHRoaXMubG9nbztcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IHsgeGwgfSA9IHRoaXMuYnJlYWtwb2ludFNlcnZpY2UuZ2V0QnJlYWtwb2ludHNNYXAoKTtcbiAgICB0aGlzLnRoZW1lU2VydmljZS5vbk1lZGlhUXVlcnlDaGFuZ2UoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoWywgY3VycmVudEJyZWFrcG9pbnRdKSA9PiBjdXJyZW50QnJlYWtwb2ludC53aWR0aCA8IHhsKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoaXNMZXNzVGhhblhsOiBib29sZWFuKSA9PiB0aGlzLnVzZXJQaWN0dXJlT25seSA9IGlzTGVzc1RoYW5YbCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICB0b2dnbGVTaWRlYmFyKCk6IGJvb2xlYW4ge1xuICAgIHRoaXMuc2lkZWJhclNlcnZpY2UudG9nZ2xlKHRydWUsICdtZW51LXNpZGViYXInKTtcbiAgICB0aGlzLmxheW91dFNlcnZpY2UuY2hhbmdlTGF5b3V0U2l6ZSgpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG5hdmlnYXRlSG9tZSgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvaG9tZSddKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJoZWFkZXItY29udGFpbmVyXCI+XG4gIDxkaXYgY2xhc3M9XCJsb2dvLWNvbnRhaW5lclwiPlxuICAgIDxhIChjbGljayk9XCJ0b2dnbGVTaWRlYmFyKClcIiBocmVmPVwiI1wiIGNsYXNzPVwic2lkZWJhci10b2dnbGVcIj5cbiAgICAgIDxuYi1pY29uIGljb249XCJtZW51LTItb3V0bGluZVwiPjwvbmItaWNvbj5cbiAgICA8L2E+XG4gICAgPGEgY2xhc3M9XCJsb2dvXCIgaHJlZj1cIiNcIiAoY2xpY2spPVwibmF2aWdhdGVIb21lKClcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZS1sb2dvXCJcbiAgICAgICAgW25nU3R5bGVdPVwie1xuICAgICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnK2xvZ28rJyknXG4gICAgICAgIH1cIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPCEtLTxuYi1hY3Rpb24gY2xhc3M9XCJpY29uLWxvZ29cIiBpY29uPVwiaG9tZS1vdXRsaW5lXCI+PC9uYi1hY3Rpb24+LS0+XG4gICAgICA8c3BhbiBjbGFzcz1cInRpdGxlLWxvZ29cIj57eyAnU01BUlQgVGFuZ2dhcCcgfCB0cmFuc2xhdGUgfX08L3NwYW4+XG4gICAgPC9hPlxuICA8L2Rpdj5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiaGVhZGVyLWNvbnRhaW5lclwiPlxuICA8bmItYWN0aW9ucyBzaXplPVwic21hbGxcIj5cblxuICAgIDxuYi1hY3Rpb24gY2xhc3M9XCJjb250cm9sLWl0ZW1cIj5cbiAgICAgIDxuYi1zZWFyY2ggdHlwZT1cInJvdGF0ZS1sYXlvdXRcIj48L25iLXNlYXJjaD5cbiAgICA8L25iLWFjdGlvbj5cbiAgICA8bmItYWN0aW9uIGNsYXNzPVwiY29udHJvbC1pdGVtXCIgaWNvbj1cImJlbGwtb3V0bGluZVwiPjwvbmItYWN0aW9uPlxuICAgIDxuYi1hY3Rpb24gY2xhc3M9XCJ1c2VyLWFjdGlvblwiID5cbiAgICAgIDxuYi11c2VyIFtuYkNvbnRleHRNZW51XT1cImV4dHJhTWVudVwiXG4gICAgICAgICAgICAgICBbb25seVBpY3R1cmVdPVwidXNlclBpY3R1cmVPbmx5XCJcbiAgICAgICAgICAgICAgIFtuYW1lXT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgW3BpY3R1cmVdPVwiaW1hZ2VcIj5cbiAgICAgIDwvbmItdXNlcj5cbiAgICA8L25iLWFjdGlvbj5cbiAgPC9uYi1hY3Rpb25zPlxuPC9kaXY+XG4iXX0=