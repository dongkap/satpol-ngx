import { Component, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from '@dongkap/do-shared';
import * as i0 from "@angular/core";
import * as i1 from "@dongkap/do-shared";
import * as i2 from "@nebular/theme";
import * as i3 from "../main/main-menu-page.component";
import * as i4 from "../extra/extra-menu-page.component";
import * as i5 from "@ngx-translate/core";
export class MenuPageComponent extends BaseComponent {
    constructor(injector) {
        super(injector);
        this.injector = injector;
        this.loading = false;
        this.tab = 'main';
        this.destroy$ = new Subject();
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.next();
        this.destroy$.complete();
    }
    toggleLoadingAnimation(event) {
        this.tab = event.tabId;
        this.loading = true;
        if (this.tab === 'main') {
            this.mainMenu.loadDataMenu()
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => {
                this.loading = false;
            });
        }
        else {
            this.extraMenu.loadDataMenu()
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => {
                this.loading = false;
            });
        }
    }
}
MenuPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MenuPageComponent, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
MenuPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: MenuPageComponent, selector: "do-menu-page", viewQueries: [{ propertyName: "mainMenu", first: true, predicate: ["mainMenu"], descendants: true, static: true }, { propertyName: "extraMenu", first: true, predicate: ["extraMenu"], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: "<do-page-outlet [header]=\"'header.menu-management'\" [hidefooter]=\"true\">\n  <nb-tabset fullWidth (changeTab)=\"toggleLoadingAnimation($event)\" pagecontent>\n    <nb-tab tabId=\"main\" tabTitle=\"{{'tab.main-menu' | translate}}\">\n      <do-main-menu-page #mainMenu></do-main-menu-page>\n    </nb-tab>\n    <nb-tab tabId=\"extra\" tabTitle=\"{{'tab.extra-menu' | translate}}\" [lazyLoad]=\"true\">\n      <do-extra-menu-page #extraMenu></do-extra-menu-page>\n    </nb-tab>\n  </nb-tabset>\n</do-page-outlet>\n", styles: [""], components: [{ type: i1.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i2.NbTabsetComponent, selector: "nb-tabset", inputs: ["fullWidth", "routeParam"], outputs: ["changeTab"] }, { type: i2.NbTabComponent, selector: "nb-tab", inputs: ["badgeStatus", "badgeDot", "disabled", "responsive", "active", "lazyLoad", "tabTitle", "tabId", "tabIcon", "route", "badgeText", "badgePosition"] }, { type: i3.MainMenuPageComponent, selector: "do-main-menu-page" }, { type: i4.ExtraMenuPageComponent, selector: "do-extra-menu-page" }], pipes: { "translate": i5.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MenuPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-menu-page',
                    styleUrls: ['./menu-page.component.scss'],
                    templateUrl: './menu-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }]; }, propDecorators: { mainMenu: [{
                type: ViewChild,
                args: ['mainMenu', { static: true }]
            }], extraMenu: [{
                type: ViewChild,
                args: ['extraMenu', { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXN5cy9zcmMvbGliL21lbnUvcGFnZS9tZW51LXBhZ2UuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc3lzL3NyYy9saWIvbWVudS9wYWdlL21lbnUtcGFnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFZLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcvRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7QUFTbkQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLGFBQWtCO0lBU3ZELFlBQW1CLFFBQWtCO1FBQ25DLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQURDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFQOUIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixRQUFHLEdBQVcsTUFBTSxDQUFDO1FBQ2xCLGFBQVEsR0FBaUIsSUFBSSxPQUFPLEVBQU8sQ0FBQztJQU90RCxDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxzQkFBc0IsQ0FBQyxLQUFVO1FBQy9CLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssTUFBTSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFO2lCQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDOUIsU0FBUyxDQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUN6QixDQUFDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRTtpQkFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQzlCLFNBQVMsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDekIsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7OytHQXRDVSxpQkFBaUI7bUdBQWpCLGlCQUFpQixzU0NkOUIsb2dCQVVBOzRGRElhLGlCQUFpQjtrQkFMN0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7b0JBQ3pDLFdBQVcsRUFBRSw0QkFBNEI7aUJBQzFDOytGQU8wQyxRQUFRO3NCQUFoRCxTQUFTO3VCQUFDLFVBQVUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBQ0csU0FBUztzQkFBbEQsU0FBUzt1QkFBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJ0Bkb25na2FwL2RvLXNoYXJlZCc7XG5pbXBvcnQgeyBNYWluTWVudVBhZ2VDb21wb25lbnQgfSBmcm9tICcuLi9tYWluL21haW4tbWVudS1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFeHRyYU1lbnVQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi4vZXh0cmEvZXh0cmEtbWVudS1wYWdlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLW1lbnUtcGFnZScsXG4gIHN0eWxlVXJsczogWycuL21lbnUtcGFnZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vbWVudS1wYWdlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTWVudVBhZ2VDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50PGFueT4gaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHVibGljIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHRhYjogc3RyaW5nID0gJ21haW4nO1xuICBwcm90ZWN0ZWQgZGVzdHJveSQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICBAVmlld0NoaWxkKCdtYWluTWVudScsIHsgc3RhdGljOiB0cnVlIH0pIG1haW5NZW51OiBNYWluTWVudVBhZ2VDb21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoJ2V4dHJhTWVudScsIHsgc3RhdGljOiB0cnVlIH0pIGV4dHJhTWVudTogRXh0cmFNZW51UGFnZUNvbXBvbmVudDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgc3VwZXIoaW5qZWN0b3IpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgdG9nZ2xlTG9hZGluZ0FuaW1hdGlvbihldmVudDogYW55KSB7XG4gICAgdGhpcy50YWIgPSBldmVudC50YWJJZDtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIGlmICh0aGlzLnRhYiA9PT0gJ21haW4nKSB7XG4gICAgICB0aGlzLm1haW5NZW51LmxvYWREYXRhTWVudSgpXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5leHRyYU1lbnUubG9hZERhdGFNZW51KClcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG59XG4iLCI8ZG8tcGFnZS1vdXRsZXQgW2hlYWRlcl09XCInaGVhZGVyLm1lbnUtbWFuYWdlbWVudCdcIiBbaGlkZWZvb3Rlcl09XCJ0cnVlXCI+XG4gIDxuYi10YWJzZXQgZnVsbFdpZHRoIChjaGFuZ2VUYWIpPVwidG9nZ2xlTG9hZGluZ0FuaW1hdGlvbigkZXZlbnQpXCIgcGFnZWNvbnRlbnQ+XG4gICAgPG5iLXRhYiB0YWJJZD1cIm1haW5cIiB0YWJUaXRsZT1cInt7J3RhYi5tYWluLW1lbnUnIHwgdHJhbnNsYXRlfX1cIj5cbiAgICAgIDxkby1tYWluLW1lbnUtcGFnZSAjbWFpbk1lbnU+PC9kby1tYWluLW1lbnUtcGFnZT5cbiAgICA8L25iLXRhYj5cbiAgICA8bmItdGFiIHRhYklkPVwiZXh0cmFcIiB0YWJUaXRsZT1cInt7J3RhYi5leHRyYS1tZW51JyB8IHRyYW5zbGF0ZX19XCIgW2xhenlMb2FkXT1cInRydWVcIj5cbiAgICAgIDxkby1leHRyYS1tZW51LXBhZ2UgI2V4dHJhTWVudT48L2RvLWV4dHJhLW1lbnUtcGFnZT5cbiAgICA8L25iLXRhYj5cbiAgPC9uYi10YWJzZXQ+XG48L2RvLXBhZ2Utb3V0bGV0PlxuIl19