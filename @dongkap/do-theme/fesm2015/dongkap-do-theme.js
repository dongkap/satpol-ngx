import * as i0 from '@angular/core';
import { Component, Injectable, Input, EventEmitter, ViewChild, Output, PLATFORM_ID, Inject, Pipe, NgModule } from '@angular/core';
import * as i1 from '@angular/router';
import { NavigationEnd, RouterModule } from '@angular/router';
import * as i3 from '@angular/common';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import * as i1$1 from '@nebular/theme';
import { NbLayoutDirection, NB_DOCUMENT, DEFAULT_THEME as DEFAULT_THEME$1, COSMIC_THEME as COSMIC_THEME$1, CORPORATE_THEME as CORPORATE_THEME$1, DARK_THEME as DARK_THEME$1, NbLayoutModule, NbMenuModule, NbUserModule, NbActionsModule, NbSearchModule, NbSidebarModule, NbContextMenuModule, NbButtonModule, NbSelectModule, NbIconModule, NbThemeModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbSecurityModule } from '@nebular/security';
import * as i2 from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { shareReplay, delay, debounceTime, map, takeUntil, takeWhile, filter } from 'rxjs/operators';
import { Subject, BehaviorSubject, of } from 'rxjs';

class FooterComponent {
    constructor() {
        this.year = (new Date()).getFullYear();
    }
}
FooterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: FooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FooterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: FooterComponent, selector: "do-footer", ngImport: i0, template: `
  <span class="created-by">© {{year}} {{ 'SMART' | translate }}</span>
  <a [routerLink]="'/app/user/terms'">{{ 'message.terms-conditions' | translate }}</a>
  <a [routerLink]="'/app/user/privacy-policy'">{{ 'message.privacy-policy' | translate }}</a>
  `, isInline: true, styles: [".nb-theme-default :host{width:100%;display:flex}.nb-theme-default :host a{padding:0 0 0 1rem;color:#8f9bb3;transition:color ease-out .1s}.nb-theme-default :host a:hover{color:#222b45}.nb-theme-dark :host{width:100%;display:flex}.nb-theme-dark :host a{padding:0 0 0 1rem;color:#8f9bb3;transition:color ease-out .1s}.nb-theme-dark :host a:hover{color:#fff}.nb-theme-cosmic :host{width:100%;display:flex}.nb-theme-cosmic :host a{padding:0 0 0 1rem;color:#b4b4db;transition:color ease-out .1s}.nb-theme-cosmic :host a:hover{color:#fff}.nb-theme-corporate :host{width:100%;display:flex}.nb-theme-corporate :host a{padding:0 0 0 1rem;color:#8f9bb3;transition:color ease-out .1s}.nb-theme-corporate :host a:hover{color:#222b45}\n"], directives: [{ type: i1.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }], pipes: { "translate": i2.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: FooterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-footer',
                    styleUrls: ['./footer.component.scss'],
                    template: `
  <span class="created-by">© {{year}} {{ 'SMART' | translate }}</span>
  <a [routerLink]="'/app/user/terms'">{{ 'message.terms-conditions' | translate }}</a>
  <a [routerLink]="'/app/user/privacy-policy'">{{ 'message.privacy-policy' | translate }}</a>
  `,
                }]
        }] });

class LayoutService {
    constructor() {
        this.layoutSize$ = new Subject();
        this.layoutSizeChange$ = this.layoutSize$.pipe(shareReplay({ refCount: true }));
    }
    changeLayoutSize() {
        this.layoutSize$.next();
    }
    onChangeLayoutSize() {
        return this.layoutSizeChange$.pipe(delay(1));
    }
    onSafeChangeLayoutSize() {
        return this.layoutSizeChange$.pipe(debounceTime(350));
    }
}
LayoutService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LayoutService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
LayoutService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LayoutService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LayoutService, decorators: [{
            type: Injectable
        }] });

class HeaderComponent {
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
HeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HeaderComponent, deps: [{ token: i1$1.NbSidebarService }, { token: i1$1.NbThemeService }, { token: i1$1.NbMediaBreakpointsService }, { token: LayoutService }, { token: i3.LocationStrategy }, { token: i1.Router }], target: i0.ɵɵFactoryTarget.Component });
HeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: HeaderComponent, selector: "do-header", inputs: { name: "name", image: "image", logo: "logo", extraMenu: "extraMenu" }, ngImport: i0, template: "<div class=\"header-container\">\n  <div class=\"logo-container\">\n    <a (click)=\"toggleSidebar()\" href=\"#\" class=\"sidebar-toggle\">\n      <nb-icon icon=\"menu-2-outline\"></nb-icon>\n    </a>\n    <a class=\"logo\" href=\"#\" (click)=\"navigateHome()\">\n      <div class=\"image-logo\"\n        [ngStyle]=\"{\n          'background-image': 'url('+logo+')'\n        }\">\n      </div>\n      <!--<nb-action class=\"icon-logo\" icon=\"home-outline\"></nb-action>-->\n      <span class=\"title-logo\">{{ 'SMART Tanggap' | translate }}</span>\n    </a>\n  </div>\n</div>\n\n<div class=\"header-container\">\n  <nb-actions size=\"small\">\n\n    <nb-action class=\"control-item\">\n      <nb-search type=\"rotate-layout\"></nb-search>\n    </nb-action>\n    <nb-action class=\"control-item\" icon=\"bell-outline\"></nb-action>\n    <nb-action class=\"user-action\" >\n      <nb-user [nbContextMenu]=\"extraMenu\"\n               [onlyPicture]=\"userPictureOnly\"\n               [name]=\"name\"\n               [picture]=\"image\">\n      </nb-user>\n    </nb-action>\n  </nb-actions>\n</div>\n", styles: [".nb-theme-default :host{display:flex;justify-content:space-between;width:100%}.nb-theme-default :host .logo-container{display:flex;align-items:center}.nb-theme-default :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-default :host nb-user{cursor:pointer}.nb-theme-default :host ::ng-deep nb-search button{padding:0!important}.nb-theme-default :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-default :host .header-container .sidebar-toggle{text-decoration:none;color:#8f9bb3}[dir=ltr] .nb-theme-default :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-default :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-default :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-default :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-default :host .header-container .logo{border-left:1px solid #edf1f7}[dir=rtl] .nb-theme-default :host .header-container .logo{border-right:1px solid #edf1f7}.nb-theme-default :host .icon-logo{display:none}.nb-theme-default :host .image-logo{display:none}@media (max-width: 767.98px){.nb-theme-default :host .control-item{border:none;padding-left:5px}.nb-theme-default :host .user-action{border:none;padding:0}.nb-theme-default :host .title-logo{display:none}.nb-theme-default :host .icon-logo{display:unset}.nb-theme-default :host .image-logo{display:block;background-size:1em;width:1em;height:1em}}@media (max-width: 575.98px){.nb-theme-default :host nb-select{display:none}}.nb-theme-dark :host{display:flex;justify-content:space-between;width:100%}.nb-theme-dark :host .logo-container{display:flex;align-items:center}.nb-theme-dark :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-dark :host nb-user{cursor:pointer}.nb-theme-dark :host ::ng-deep nb-search button{padding:0!important}.nb-theme-dark :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-dark :host .header-container .sidebar-toggle{text-decoration:none;color:#8f9bb3}[dir=ltr] .nb-theme-dark :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-dark :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-dark :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-dark :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-dark :host .header-container .logo{border-left:1px solid #151a30}[dir=rtl] .nb-theme-dark :host .header-container .logo{border-right:1px solid #151a30}.nb-theme-dark :host .icon-logo{display:none}.nb-theme-dark :host .image-logo{display:none}@media (max-width: 767.98px){.nb-theme-dark :host .control-item{border:none;padding-left:5px}.nb-theme-dark :host .user-action{border:none;padding:0}.nb-theme-dark :host .title-logo{display:none}.nb-theme-dark :host .icon-logo{display:unset}.nb-theme-dark :host .image-logo{display:block;background-size:1em;width:1em;height:1em}}@media (max-width: 575.98px){.nb-theme-dark :host nb-select{display:none}}.nb-theme-cosmic :host{display:flex;justify-content:space-between;width:100%}.nb-theme-cosmic :host .logo-container{display:flex;align-items:center}.nb-theme-cosmic :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-cosmic :host nb-user{cursor:pointer}.nb-theme-cosmic :host ::ng-deep nb-search button{padding:0!important}.nb-theme-cosmic :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-cosmic :host .header-container .sidebar-toggle{text-decoration:none;color:#b4b4db}[dir=ltr] .nb-theme-cosmic :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-cosmic :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-cosmic :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-cosmic :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-cosmic :host .header-container .logo{border-left:1px solid #1b1b38}[dir=rtl] .nb-theme-cosmic :host .header-container .logo{border-right:1px solid #1b1b38}.nb-theme-cosmic :host .icon-logo{display:none}.nb-theme-cosmic :host .image-logo{display:none}@media (max-width: 767.98px){.nb-theme-cosmic :host .control-item{border:none;padding-left:5px}.nb-theme-cosmic :host .user-action{border:none;padding:0}.nb-theme-cosmic :host .title-logo{display:none}.nb-theme-cosmic :host .icon-logo{display:unset}.nb-theme-cosmic :host .image-logo{display:block;background-size:1em;width:1em;height:1em}}@media (max-width: 575.98px){.nb-theme-cosmic :host nb-select{display:none}}.nb-theme-corporate :host{display:flex;justify-content:space-between;width:100%}.nb-theme-corporate :host .logo-container{display:flex;align-items:center}.nb-theme-corporate :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-corporate :host nb-user{cursor:pointer}.nb-theme-corporate :host ::ng-deep nb-search button{padding:0!important}.nb-theme-corporate :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-corporate :host .header-container .sidebar-toggle{text-decoration:none;color:#8f9bb3}[dir=ltr] .nb-theme-corporate :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-corporate :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-corporate :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-corporate :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-corporate :host .header-container .logo{border-left:1px solid #edf1f7}[dir=rtl] .nb-theme-corporate :host .header-container .logo{border-right:1px solid #edf1f7}.nb-theme-corporate :host .icon-logo{display:none}.nb-theme-corporate :host .image-logo{display:none}@media (max-width: 767.98px){.nb-theme-corporate :host .control-item{border:none;padding-left:5px}.nb-theme-corporate :host .user-action{border:none;padding:0}.nb-theme-corporate :host .title-logo{display:none}.nb-theme-corporate :host .icon-logo{display:unset}.nb-theme-corporate :host .image-logo{display:block;background-size:1em;width:1em;height:1em}}@media (max-width: 575.98px){.nb-theme-corporate :host nb-select{display:none}}\n"], components: [{ type: i1$1.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }, { type: i1$1.NbActionsComponent, selector: "nb-actions", inputs: ["size", "fullWidth"] }, { type: i1$1.NbActionComponent, selector: "nb-action", inputs: ["title", "badgeStatus", "disabled", "badgeDot", "link", "href", "icon", "badgeText", "badgePosition"] }, { type: i1$1.NbSearchComponent, selector: "nb-search", inputs: ["placeholder", "hint", "tag", "type"] }, { type: i1$1.NbUserComponent, selector: "nb-user", inputs: ["name", "size", "shape", "badgeStatus", "picture", "showName", "showTitle", "showInitials", "onlyPicture", "title", "color", "badgeText", "badgePosition"] }], directives: [{ type: i3.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: i1$1.NbContextMenuDirective, selector: "[nbContextMenu]", inputs: ["nbContextMenuAdjustment", "nbContextMenuTrigger", "nbContextMenuPlacement", "nbContextMenuTag", "nbContextMenu", "nbContextMenuClass"] }], pipes: { "translate": i2.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HeaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-header',
                    styleUrls: ['./header.component.scss'],
                    templateUrl: './header.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i1$1.NbSidebarService }, { type: i1$1.NbThemeService }, { type: i1$1.NbMediaBreakpointsService }, { type: LayoutService }, { type: i3.LocationStrategy }, { type: i1.Router }]; }, propDecorators: { name: [{
                type: Input
            }], image: [{
                type: Input
            }], logo: [{
                type: Input
            }], extraMenu: [{
                type: Input
            }] } });

class SearchInputComponent {
    constructor() {
        this.search = new EventEmitter();
        this.isInputShown = false;
    }
    showInput() {
        this.isInputShown = true;
        this.input.nativeElement.focus();
    }
    hideInput() {
        this.isInputShown = false;
    }
    onInput(val) {
        this.search.emit(val);
    }
}
SearchInputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SearchInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SearchInputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: SearchInputComponent, selector: "ngx-search-input", outputs: { search: "search" }, viewQueries: [{ propertyName: "input", first: true, predicate: ["input"], descendants: true, static: true }], ngImport: i0, template: `
    <i class="control-icon ion ion-ios-search"
       (click)="showInput()"></i>
    <input placeholder="Type your search request here..."
           #input
           [class.hidden]="!isInputShown"
           (blur)="hideInput()"
           (input)="onInput($event)">
  `, isInline: true, styles: [":host{display:flex;align-items:center}:host i.control-icon:before{font-size:2.3rem}:host i.control-icon:hover{cursor:pointer}:host input{border:none;outline:none;margin-left:1rem;width:15rem;transition:width .2s ease}:host input.hidden{width:0;margin:0}:host ::ng-deep search-input input{background:transparent}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SearchInputComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-search-input',
                    styleUrls: ['./search-input.component.scss'],
                    template: `
    <i class="control-icon ion ion-ios-search"
       (click)="showInput()"></i>
    <input placeholder="Type your search request here..."
           #input
           [class.hidden]="!isInputShown"
           (blur)="hideInput()"
           (input)="onInput($event)">
  `,
                }]
        }], propDecorators: { input: [{
                type: ViewChild,
                args: ['input', { static: true }]
            }], search: [{
                type: Output
            }] } });

class DefaultLayoutComponent {
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
  `, isInline: true, styles: [".nb-theme-default :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-dark :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-cosmic :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-corporate :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}\n"], components: [{ type: i1$1.NbLayoutComponent, selector: "nb-layout", inputs: ["center", "windowMode", "withScroll", "restoreScrollTop"] }, { type: i1$1.NbLayoutHeaderComponent, selector: "nb-layout-header", inputs: ["fixed", "subheader"] }, { type: HeaderComponent, selector: "do-header", inputs: ["name", "image", "logo", "extraMenu"] }, { type: i1$1.NbSidebarComponent, selector: "nb-sidebar", inputs: ["compactedBreakpoints", "collapsedBreakpoints", "right", "left", "start", "end", "fixed", "containerFixed", "state", "responsive", "tag"], outputs: ["stateChange", "responsiveStateChange"] }, { type: i1$1.NbLayoutColumnComponent, selector: "nb-layout-column", inputs: ["left", "start"] }, { type: i1$1.NbLayoutFooterComponent, selector: "nb-layout-footer", inputs: ["fixed"] }, { type: FooterComponent, selector: "do-footer" }] });
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

class StateService {
    constructor(directionService) {
        this.layouts = [
            {
                name: 'One Column',
                icon: 'nb-layout-default',
                id: 'one-column',
                selected: true,
            },
            {
                name: 'Two Column',
                icon: 'nb-layout-two-column',
                id: 'two-column',
            },
            {
                name: 'Center Column',
                icon: 'nb-layout-centre',
                id: 'center-column',
            },
        ];
        this.sidebars = [
            {
                name: 'Sidebar at layout start',
                icon: 'nb-layout-sidebar-left',
                id: 'start',
                selected: true,
            },
            {
                name: 'Sidebar at layout end',
                icon: 'nb-layout-sidebar-right',
                id: 'end',
            },
        ];
        this.layoutState$ = new BehaviorSubject(this.layouts[0]);
        this.sidebarState$ = new BehaviorSubject(this.sidebars[0]);
        this.alive = true;
        directionService.onDirectionChange()
            .pipe(takeWhile(() => this.alive))
            .subscribe(direction => this.updateSidebarIcons(direction));
        this.updateSidebarIcons(directionService.getDirection());
    }
    ngOnDestroy() {
        this.alive = false;
    }
    updateSidebarIcons(direction) {
        const [startSidebar, endSidebar] = this.sidebars;
        const isLtr = direction === NbLayoutDirection.LTR;
        const startIconClass = isLtr ? 'nb-layout-sidebar-left' : 'nb-layout-sidebar-right';
        const endIconClass = isLtr ? 'nb-layout-sidebar-right' : 'nb-layout-sidebar-left';
        startSidebar.icon = startIconClass;
        endSidebar.icon = endIconClass;
    }
    setLayoutState(state) {
        this.layoutState$.next(state);
    }
    getLayoutStates() {
        return of(this.layouts);
    }
    onLayoutState() {
        return this.layoutState$.asObservable();
    }
    setSidebarState(state) {
        this.sidebarState$.next(state);
    }
    getSidebarStates() {
        return of(this.sidebars);
    }
    onSidebarState() {
        return this.sidebarState$.asObservable();
    }
}
StateService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: StateService, deps: [{ token: i1$1.NbLayoutDirectionService }], target: i0.ɵɵFactoryTarget.Injectable });
StateService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: StateService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: StateService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1$1.NbLayoutDirectionService }]; } });

class AnalyticsService {
    constructor(location, router) {
        this.location = location;
        this.router = router;
        this.enabled = false;
    }
    trackPageViews() {
        if (this.enabled) {
            this.router.events.pipe(filter((event) => event instanceof NavigationEnd))
                .subscribe(() => {
                ga('send', { hitType: 'pageview', page: this.location.path() });
            });
        }
    }
    trackEvent(eventName) {
        if (this.enabled) {
            ga('send', 'event', eventName);
        }
    }
}
AnalyticsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AnalyticsService, deps: [{ token: i3.Location }, { token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable });
AnalyticsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AnalyticsService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AnalyticsService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i3.Location }, { type: i1.Router }]; } });

class SeoService {
    constructor(router, document, platformId) {
        this.router = router;
        this.destroy$ = new Subject();
        this.isBrowser = isPlatformBrowser(platformId);
        this.dom = document;
        if (this.isBrowser) {
            this.createCanonicalTag();
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    createCanonicalTag() {
        this.linkCanonical = this.dom.createElement('link');
        this.linkCanonical.setAttribute('rel', 'canonical');
        this.dom.head.appendChild(this.linkCanonical);
        this.linkCanonical.setAttribute('href', this.getCanonicalUrl());
    }
    trackCanonicalChanges() {
        if (!this.isBrowser) {
            return;
        }
        this.router.events.pipe(filter((event) => event instanceof NavigationEnd), takeUntil(this.destroy$))
            .subscribe(() => {
            this.linkCanonical.setAttribute('href', this.getCanonicalUrl());
        });
    }
    getCanonicalUrl() {
        return this.dom.location.origin + this.dom.location.pathname;
    }
}
SeoService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SeoService, deps: [{ token: i1.Router }, { token: NB_DOCUMENT }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Injectable });
SeoService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SeoService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SeoService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_DOCUMENT]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; } });

class CapitalizePipe {
    transform(input) {
        return input && input.length
            ? (input.charAt(0).toUpperCase() + input.slice(1).toLowerCase())
            : input;
    }
}
CapitalizePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: CapitalizePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
CapitalizePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: CapitalizePipe, name: "ngxCapitalize" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: CapitalizePipe, decorators: [{
            type: Pipe,
            args: [{ name: 'ngxCapitalize' }]
        }] });

class PluralPipe {
    transform(input, label, pluralLabel = '') {
        input = input || 0;
        return input === 1
            ? `${input} ${label}`
            : pluralLabel
                ? `${input} ${pluralLabel}`
                : `${input} ${label}s`;
    }
}
PluralPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PluralPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
PluralPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PluralPipe, name: "ngxPlural" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PluralPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'ngxPlural' }]
        }] });

class RoundPipe {
    transform(input) {
        return Math.round(input);
    }
}
RoundPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: RoundPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
RoundPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: RoundPipe, name: "ngxRound" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: RoundPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'ngxRound' }]
        }] });

class TimingPipe {
    transform(time) {
        if (time) {
            const minutes = Math.floor(time / 60);
            const seconds = Math.floor(time % 60);
            return `${this.initZero(minutes)}${minutes}:${this.initZero(seconds)}${seconds}`;
        }
        return '00:00';
    }
    initZero(time) {
        return time < 10 ? '0' : '';
    }
}
TimingPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: TimingPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
TimingPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: TimingPipe, name: "timing" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: TimingPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'timing' }]
        }] });

class NumberWithCommasPipe {
    transform(input) {
        return new Intl.NumberFormat().format(input);
    }
}
NumberWithCommasPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NumberWithCommasPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
NumberWithCommasPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NumberWithCommasPipe, name: "ngxNumberWithCommas" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NumberWithCommasPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'ngxNumberWithCommas' }]
        }] });

const baseThemeVariables$3 = DEFAULT_THEME$1.variables;
const DEFAULT_THEME = {
    name: 'default',
    base: 'default',
    variables: {
        temperature: {
            arcFill: [
                baseThemeVariables$3.primary,
                baseThemeVariables$3.primary,
                baseThemeVariables$3.primary,
                baseThemeVariables$3.primary,
                baseThemeVariables$3.primary,
            ],
            arcEmpty: baseThemeVariables$3.bg2,
            thumbBg: baseThemeVariables$3.bg2,
            thumbBorder: baseThemeVariables$3.primary,
        },
        solar: {
            gradientLeft: baseThemeVariables$3.primary,
            gradientRight: baseThemeVariables$3.primary,
            shadowColor: 'rgba(0, 0, 0, 0)',
            secondSeriesFill: baseThemeVariables$3.bg2,
            radius: ['80%', '90%'],
        },
        traffic: {
            tooltipBg: baseThemeVariables$3.bg,
            tooltipBorderColor: baseThemeVariables$3.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables$3.fgText,
            tooltipFontWeight: 'normal',
            yAxisSplitLine: baseThemeVariables$3.separator,
            lineBg: baseThemeVariables$3.border4,
            lineShadowBlur: '1',
            itemColor: baseThemeVariables$3.border4,
            itemBorderColor: baseThemeVariables$3.border4,
            itemEmphasisBorderColor: baseThemeVariables$3.primary,
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            shadowLineShadow: 'rgba(0, 0, 0, 0)',
            gradFrom: baseThemeVariables$3.bg2,
            gradTo: baseThemeVariables$3.bg2,
        },
        electricity: {
            tooltipBg: baseThemeVariables$3.bg,
            tooltipLineColor: baseThemeVariables$3.fgText,
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables$3.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables$3.fgText,
            tooltipFontWeight: 'normal',
            axisLineColor: baseThemeVariables$3.border3,
            xAxisTextColor: baseThemeVariables$3.fg,
            yAxisSplitLine: baseThemeVariables$3.separator,
            itemBorderColor: baseThemeVariables$3.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            lineGradFrom: baseThemeVariables$3.primary,
            lineGradTo: baseThemeVariables$3.primary,
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: baseThemeVariables$3.bg2,
            areaGradTo: baseThemeVariables$3.bg2,
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        },
        bubbleMap: {
            titleColor: baseThemeVariables$3.fgText,
            areaColor: baseThemeVariables$3.bg4,
            areaHoverColor: baseThemeVariables$3.fgHighlight,
            areaBorderColor: baseThemeVariables$3.border5,
        },
        profitBarAnimationEchart: {
            textColor: baseThemeVariables$3.fgText,
            firstAnimationBarColor: baseThemeVariables$3.primary,
            secondAnimationBarColor: baseThemeVariables$3.success,
            splitLineStyleOpacity: '1',
            splitLineStyleWidth: '1',
            splitLineStyleColor: baseThemeVariables$3.separator,
            tooltipTextColor: baseThemeVariables$3.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables$3.bg,
            tooltipBorderColor: baseThemeVariables$3.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
        trafficBarEchart: {
            gradientFrom: baseThemeVariables$3.warningLight,
            gradientTo: baseThemeVariables$3.warning,
            shadow: baseThemeVariables$3.warningLight,
            shadowBlur: '0',
            axisTextColor: baseThemeVariables$3.fgText,
            axisFontSize: '12',
            tooltipBg: baseThemeVariables$3.bg,
            tooltipBorderColor: baseThemeVariables$3.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables$3.fgText,
            tooltipFontWeight: 'normal',
        },
        countryOrders: {
            countryBorderColor: baseThemeVariables$3.border4,
            countryFillColor: baseThemeVariables$3.bg3,
            countryBorderWidth: '1',
            hoveredCountryBorderColor: baseThemeVariables$3.primary,
            hoveredCountryFillColor: baseThemeVariables$3.primaryLight,
            hoveredCountryBorderWidth: '1',
            chartAxisLineColor: baseThemeVariables$3.border4,
            chartAxisTextColor: baseThemeVariables$3.fg,
            chartAxisFontSize: '16',
            chartGradientTo: baseThemeVariables$3.primary,
            chartGradientFrom: baseThemeVariables$3.primaryLight,
            chartAxisSplitLine: baseThemeVariables$3.separator,
            chartShadowLineColor: baseThemeVariables$3.primaryLight,
            chartLineBottomShadowColor: baseThemeVariables$3.primary,
            chartInnerLineColor: baseThemeVariables$3.bg2,
        },
        echarts: {
            bg: baseThemeVariables$3.bg,
            textColor: baseThemeVariables$3.fgText,
            axisLineColor: baseThemeVariables$3.fgText,
            splitLineColor: baseThemeVariables$3.separator,
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: baseThemeVariables$3.primary,
            areaOpacity: '0.7',
        },
        chartjs: {
            axisLineColor: baseThemeVariables$3.separator,
            textColor: baseThemeVariables$3.fgText,
        },
        orders: {
            tooltipBg: baseThemeVariables$3.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables$3.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables$3.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables$3.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables$3.fg,
            yAxisSplitLine: baseThemeVariables$3.separator,
            itemBorderColor: baseThemeVariables$3.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            // first line
            firstAreaGradFrom: baseThemeVariables$3.bg3,
            firstAreaGradTo: baseThemeVariables$3.bg3,
            firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            // second line
            secondLineGradFrom: baseThemeVariables$3.primary,
            secondLineGradTo: baseThemeVariables$3.primary,
            secondAreaGradFrom: 'rgba(51, 102, 255, 0.2)',
            secondAreaGradTo: 'rgba(51, 102, 255, 0)',
            secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            // third line
            thirdLineGradFrom: baseThemeVariables$3.success,
            thirdLineGradTo: baseThemeVariables$3.successLight,
            thirdAreaGradFrom: 'rgba(0, 214, 143, 0.2)',
            thirdAreaGradTo: 'rgba(0, 214, 143, 0)',
            thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        },
        profit: {
            bg: baseThemeVariables$3.bg,
            textColor: baseThemeVariables$3.fgText,
            axisLineColor: baseThemeVariables$3.border4,
            splitLineColor: baseThemeVariables$3.separator,
            areaOpacity: '1',
            axisFontSize: '16',
            axisTextColor: baseThemeVariables$3.fg,
            // first bar
            firstLineGradFrom: baseThemeVariables$3.bg3,
            firstLineGradTo: baseThemeVariables$3.bg3,
            firstLineShadow: 'rgba(0, 0, 0, 0)',
            // second bar
            secondLineGradFrom: baseThemeVariables$3.primary,
            secondLineGradTo: baseThemeVariables$3.primary,
            secondLineShadow: 'rgba(0, 0, 0, 0)',
            // third bar
            thirdLineGradFrom: baseThemeVariables$3.success,
            thirdLineGradTo: baseThemeVariables$3.successLight,
            thirdLineShadow: 'rgba(0, 0, 0, 0)',
        },
        orderProfitLegend: {
            firstItem: baseThemeVariables$3.success,
            secondItem: baseThemeVariables$3.primary,
            thirdItem: baseThemeVariables$3.bg3,
        },
        visitors: {
            tooltipBg: baseThemeVariables$3.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '1',
            tooltipBorderColor: baseThemeVariables$3.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables$3.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables$3.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables$3.fg,
            yAxisSplitLine: baseThemeVariables$3.separator,
            itemBorderColor: baseThemeVariables$3.primary,
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: '#ffffff',
            lineGradTo: '#ffffff',
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: baseThemeVariables$3.primary,
            areaGradTo: baseThemeVariables$3.primaryLight,
            innerLineStyle: 'solid',
            innerLineWidth: '1',
            innerAreaGradFrom: baseThemeVariables$3.success,
            innerAreaGradTo: baseThemeVariables$3.success,
        },
        visitorsLegend: {
            firstIcon: baseThemeVariables$3.success,
            secondIcon: baseThemeVariables$3.primary,
        },
        visitorsPie: {
            firstPieGradientLeft: baseThemeVariables$3.success,
            firstPieGradientRight: baseThemeVariables$3.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            firstPieRadius: ['70%', '90%'],
            secondPieGradientLeft: baseThemeVariables$3.warning,
            secondPieGradientRight: baseThemeVariables$3.warningLight,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieRadius: ['60%', '97%'],
            shadowOffsetX: '0',
            shadowOffsetY: '0',
        },
        visitorsPieLegend: {
            firstSection: baseThemeVariables$3.warning,
            secondSection: baseThemeVariables$3.success,
        },
        earningPie: {
            radius: ['65%', '100%'],
            center: ['50%', '50%'],
            fontSize: '22',
            firstPieGradientLeft: baseThemeVariables$3.success,
            firstPieGradientRight: baseThemeVariables$3.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieGradientLeft: baseThemeVariables$3.primary,
            secondPieGradientRight: baseThemeVariables$3.primary,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            thirdPieGradientLeft: baseThemeVariables$3.warning,
            thirdPieGradientRight: baseThemeVariables$3.warning,
            thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
        },
        earningLine: {
            gradFrom: baseThemeVariables$3.primary,
            gradTo: baseThemeVariables$3.primary,
            tooltipTextColor: baseThemeVariables$3.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables$3.bg,
            tooltipBorderColor: baseThemeVariables$3.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
    },
};

const baseThemeVariables$2 = COSMIC_THEME$1.variables;
const COSMIC_THEME = {
    name: 'cosmic',
    base: 'cosmic',
    variables: {
        temperature: {
            arcFill: ['#2ec7fe', '#31ffad', '#7bff24', '#fff024', '#f7bd59'],
            arcEmpty: baseThemeVariables$2.bg2,
            thumbBg: '#ffffff',
            thumbBorder: '#ffffff',
        },
        solar: {
            gradientLeft: baseThemeVariables$2.primary,
            gradientRight: baseThemeVariables$2.primary,
            shadowColor: 'rgba(0, 0, 0, 0)',
            secondSeriesFill: baseThemeVariables$2.bg2,
            radius: ['70%', '90%'],
        },
        traffic: {
            tooltipBg: baseThemeVariables$2.bg,
            tooltipBorderColor: baseThemeVariables$2.border2,
            tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(50, 50, 89); border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables$2.fgText,
            tooltipFontWeight: 'normal',
            yAxisSplitLine: baseThemeVariables$2.separator,
            lineBg: baseThemeVariables$2.border2,
            lineShadowBlur: '14',
            itemColor: baseThemeVariables$2.border2,
            itemBorderColor: baseThemeVariables$2.border2,
            itemEmphasisBorderColor: baseThemeVariables$2.primary,
            shadowLineDarkBg: baseThemeVariables$2.border3,
            shadowLineShadow: baseThemeVariables$2.border3,
            gradFrom: baseThemeVariables$2.bg,
            gradTo: baseThemeVariables$2.bg2,
        },
        electricity: {
            tooltipBg: baseThemeVariables$2.bg,
            tooltipLineColor: baseThemeVariables$2.fgText,
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables$2.border2,
            tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables$2.fgText,
            tooltipFontWeight: 'normal',
            axisLineColor: baseThemeVariables$2.border3,
            xAxisTextColor: baseThemeVariables$2.fg,
            yAxisSplitLine: baseThemeVariables$2.separator,
            itemBorderColor: baseThemeVariables$2.border2,
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: baseThemeVariables$2.success,
            lineGradTo: baseThemeVariables$2.warning,
            lineShadow: baseThemeVariables$2.bg4,
            areaGradFrom: baseThemeVariables$2.bg2,
            areaGradTo: baseThemeVariables$2.bg3,
            shadowLineDarkBg: baseThemeVariables$2.bg3,
        },
        bubbleMap: {
            titleColor: baseThemeVariables$2.fgText,
            areaColor: baseThemeVariables$2.bg4,
            areaHoverColor: baseThemeVariables$2.fgHighlight,
            areaBorderColor: baseThemeVariables$2.border5,
        },
        profitBarAnimationEchart: {
            textColor: baseThemeVariables$2.fgText,
            firstAnimationBarColor: baseThemeVariables$2.primary,
            secondAnimationBarColor: baseThemeVariables$2.success,
            splitLineStyleOpacity: '1',
            splitLineStyleWidth: '1',
            splitLineStyleColor: baseThemeVariables$2.border2,
            tooltipTextColor: baseThemeVariables$2.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables$2.bg,
            tooltipBorderColor: baseThemeVariables$2.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
        trafficBarEchart: {
            gradientFrom: baseThemeVariables$2.warningLight,
            gradientTo: baseThemeVariables$2.warning,
            shadow: baseThemeVariables$2.warningLight,
            shadowBlur: '5',
            axisTextColor: baseThemeVariables$2.fgText,
            axisFontSize: '12',
            tooltipBg: baseThemeVariables$2.bg,
            tooltipBorderColor: baseThemeVariables$2.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables$2.fgText,
            tooltipFontWeight: 'normal',
        },
        countryOrders: {
            countryBorderColor: baseThemeVariables$2.border4,
            countryFillColor: baseThemeVariables$2.bg3,
            countryBorderWidth: '1',
            hoveredCountryBorderColor: baseThemeVariables$2.primary,
            hoveredCountryFillColor: baseThemeVariables$2.primaryLight,
            hoveredCountryBorderWidth: '1',
            chartAxisLineColor: baseThemeVariables$2.border4,
            chartAxisTextColor: baseThemeVariables$2.fg,
            chartAxisFontSize: '16',
            chartGradientTo: baseThemeVariables$2.primary,
            chartGradientFrom: baseThemeVariables$2.primaryLight,
            chartAxisSplitLine: baseThemeVariables$2.separator,
            chartShadowLineColor: baseThemeVariables$2.primaryLight,
            chartLineBottomShadowColor: baseThemeVariables$2.primary,
            chartInnerLineColor: baseThemeVariables$2.bg2,
        },
        echarts: {
            bg: baseThemeVariables$2.bg,
            textColor: baseThemeVariables$2.fgText,
            axisLineColor: baseThemeVariables$2.fgText,
            splitLineColor: baseThemeVariables$2.separator,
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: baseThemeVariables$2.primary,
            areaOpacity: '1',
        },
        chartjs: {
            axisLineColor: baseThemeVariables$2.separator,
            textColor: baseThemeVariables$2.fgText,
        },
        orders: {
            tooltipBg: baseThemeVariables$2.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables$2.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables$2.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables$2.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables$2.fg,
            yAxisSplitLine: baseThemeVariables$2.separator,
            itemBorderColor: baseThemeVariables$2.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            // first line
            firstAreaGradFrom: baseThemeVariables$2.bg2,
            firstAreaGradTo: baseThemeVariables$2.bg2,
            firstShadowLineDarkBg: baseThemeVariables$2.bg2,
            // second line
            secondLineGradFrom: baseThemeVariables$2.primary,
            secondLineGradTo: baseThemeVariables$2.primary,
            secondAreaGradFrom: 'rgba(161, 110, 255, 0.8)',
            secondAreaGradTo: 'rgba(161, 110, 255, 0.5)',
            secondShadowLineDarkBg: baseThemeVariables$2.primary,
            // third line
            thirdLineGradFrom: baseThemeVariables$2.success,
            thirdLineGradTo: baseThemeVariables$2.successLight,
            thirdAreaGradFrom: 'rgba(0, 214, 143, 0.7)',
            thirdAreaGradTo: 'rgba(0, 214, 143, 0.4)',
            thirdShadowLineDarkBg: baseThemeVariables$2.success,
        },
        profit: {
            bg: baseThemeVariables$2.bg,
            textColor: baseThemeVariables$2.fgText,
            axisLineColor: baseThemeVariables$2.border4,
            splitLineColor: baseThemeVariables$2.separator,
            areaOpacity: '1',
            axisFontSize: '16',
            axisTextColor: baseThemeVariables$2.fg,
            // first bar
            firstLineGradFrom: baseThemeVariables$2.bg2,
            firstLineGradTo: baseThemeVariables$2.bg2,
            firstLineShadow: 'rgba(0, 0, 0, 0)',
            // second bar
            secondLineGradFrom: baseThemeVariables$2.primary,
            secondLineGradTo: baseThemeVariables$2.primary,
            secondLineShadow: 'rgba(0, 0, 0, 0)',
            // third bar
            thirdLineGradFrom: baseThemeVariables$2.success,
            thirdLineGradTo: baseThemeVariables$2.successLight,
            thirdLineShadow: 'rgba(0, 0, 0, 0)',
        },
        orderProfitLegend: {
            firstItem: baseThemeVariables$2.success,
            secondItem: baseThemeVariables$2.primary,
            thirdItem: baseThemeVariables$2.bg2,
        },
        visitors: {
            tooltipBg: baseThemeVariables$2.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '1',
            tooltipBorderColor: baseThemeVariables$2.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables$2.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables$2.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables$2.fg,
            yAxisSplitLine: baseThemeVariables$2.separator,
            itemBorderColor: baseThemeVariables$2.primary,
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: '#ffffff',
            lineGradTo: '#ffffff',
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: baseThemeVariables$2.primary,
            areaGradTo: baseThemeVariables$2.primaryLight,
            innerLineStyle: 'solid',
            innerLineWidth: '1',
            innerAreaGradFrom: baseThemeVariables$2.success,
            innerAreaGradTo: baseThemeVariables$2.success,
        },
        visitorsLegend: {
            firstIcon: baseThemeVariables$2.success,
            secondIcon: baseThemeVariables$2.primary,
        },
        visitorsPie: {
            firstPieGradientLeft: baseThemeVariables$2.success,
            firstPieGradientRight: baseThemeVariables$2.successLight,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            firstPieRadius: ['70%', '90%'],
            secondPieGradientLeft: baseThemeVariables$2.warning,
            secondPieGradientRight: baseThemeVariables$2.warningLight,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieRadius: ['60%', '95%'],
            shadowOffsetX: '0',
            shadowOffsetY: '3',
        },
        visitorsPieLegend: {
            firstSection: baseThemeVariables$2.warning,
            secondSection: baseThemeVariables$2.success,
        },
        earningPie: {
            radius: ['65%', '100%'],
            center: ['50%', '50%'],
            fontSize: '22',
            firstPieGradientLeft: baseThemeVariables$2.success,
            firstPieGradientRight: baseThemeVariables$2.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieGradientLeft: baseThemeVariables$2.primary,
            secondPieGradientRight: baseThemeVariables$2.primary,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            thirdPieGradientLeft: baseThemeVariables$2.warning,
            thirdPieGradientRight: baseThemeVariables$2.warning,
            thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
        },
        earningLine: {
            gradFrom: baseThemeVariables$2.primary,
            gradTo: baseThemeVariables$2.primary,
            tooltipTextColor: baseThemeVariables$2.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables$2.bg,
            tooltipBorderColor: baseThemeVariables$2.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
    },
};

const baseThemeVariables$1 = CORPORATE_THEME$1.variables;
const CORPORATE_THEME = {
    name: 'corporate',
    base: 'corporate',
    variables: {
        temperature: {
            arcFill: ['#ffa36b', '#ffa36b', '#ff9e7a', '#ff9888', '#ff8ea0'],
            arcEmpty: baseThemeVariables$1.bg2,
            thumbBg: baseThemeVariables$1.bg2,
            thumbBorder: '#ffa36b',
        },
        solar: {
            gradientLeft: baseThemeVariables$1.primary,
            gradientRight: baseThemeVariables$1.primary,
            shadowColor: 'rgba(0, 0, 0, 0)',
            secondSeriesFill: baseThemeVariables$1.bg2,
            radius: ['80%', '90%'],
        },
        traffic: {
            tooltipBg: baseThemeVariables$1.bg,
            tooltipBorderColor: baseThemeVariables$1.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables$1.fgText,
            tooltipFontWeight: 'normal',
            yAxisSplitLine: 'rgba(0, 0, 0, 0)',
            lineBg: baseThemeVariables$1.primary,
            lineShadowBlur: '0',
            itemColor: baseThemeVariables$1.border4,
            itemBorderColor: baseThemeVariables$1.border4,
            itemEmphasisBorderColor: baseThemeVariables$1.primaryLight,
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            shadowLineShadow: 'rgba(0, 0, 0, 0)',
            gradFrom: baseThemeVariables$1.bg,
            gradTo: baseThemeVariables$1.bg,
        },
        electricity: {
            tooltipBg: baseThemeVariables$1.bg,
            tooltipLineColor: baseThemeVariables$1.fgText,
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables$1.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables$1.fgText,
            tooltipFontWeight: 'normal',
            axisLineColor: baseThemeVariables$1.border3,
            xAxisTextColor: baseThemeVariables$1.fg,
            yAxisSplitLine: baseThemeVariables$1.separator,
            itemBorderColor: baseThemeVariables$1.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            lineGradFrom: baseThemeVariables$1.primary,
            lineGradTo: baseThemeVariables$1.primary,
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: 'rgba(0, 0, 0, 0)',
            areaGradTo: 'rgba(0, 0, 0, 0)',
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        },
        bubbleMap: {
            titleColor: baseThemeVariables$1.fgText,
            areaColor: baseThemeVariables$1.bg4,
            areaHoverColor: baseThemeVariables$1.fgHighlight,
            areaBorderColor: baseThemeVariables$1.border5,
        },
        profitBarAnimationEchart: {
            textColor: baseThemeVariables$1.fgText,
            firstAnimationBarColor: baseThemeVariables$1.primary,
            secondAnimationBarColor: baseThemeVariables$1.success,
            splitLineStyleOpacity: '1',
            splitLineStyleWidth: '1',
            splitLineStyleColor: baseThemeVariables$1.separator,
            tooltipTextColor: baseThemeVariables$1.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables$1.bg,
            tooltipBorderColor: baseThemeVariables$1.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
        trafficBarEchart: {
            gradientFrom: baseThemeVariables$1.warningLight,
            gradientTo: baseThemeVariables$1.warning,
            shadow: baseThemeVariables$1.warningLight,
            shadowBlur: '0',
            axisTextColor: baseThemeVariables$1.fgText,
            axisFontSize: '12',
            tooltipBg: baseThemeVariables$1.bg,
            tooltipBorderColor: baseThemeVariables$1.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables$1.fgText,
            tooltipFontWeight: 'normal',
        },
        countryOrders: {
            countryBorderColor: baseThemeVariables$1.border4,
            countryFillColor: baseThemeVariables$1.bg4,
            countryBorderWidth: '1',
            hoveredCountryBorderColor: baseThemeVariables$1.primary,
            hoveredCountryFillColor: baseThemeVariables$1.primaryLight,
            hoveredCountryBorderWidth: '1',
            chartAxisLineColor: baseThemeVariables$1.border4,
            chartAxisTextColor: baseThemeVariables$1.fg,
            chartAxisFontSize: '16',
            chartGradientTo: baseThemeVariables$1.primary,
            chartGradientFrom: baseThemeVariables$1.primaryLight,
            chartAxisSplitLine: baseThemeVariables$1.separator,
            chartShadowLineColor: baseThemeVariables$1.primaryLight,
            chartLineBottomShadowColor: baseThemeVariables$1.primary,
            chartInnerLineColor: baseThemeVariables$1.bg2,
        },
        echarts: {
            bg: baseThemeVariables$1.bg,
            textColor: baseThemeVariables$1.fgText,
            axisLineColor: baseThemeVariables$1.fgText,
            splitLineColor: baseThemeVariables$1.separator,
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: baseThemeVariables$1.primary,
            areaOpacity: '0.7',
        },
        chartjs: {
            axisLineColor: baseThemeVariables$1.separator,
            textColor: baseThemeVariables$1.fgText,
        },
        orders: {
            tooltipBg: baseThemeVariables$1.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables$1.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables$1.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables$1.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables$1.fg,
            yAxisSplitLine: baseThemeVariables$1.separator,
            itemBorderColor: baseThemeVariables$1.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            // first line
            firstAreaGradFrom: baseThemeVariables$1.bg3,
            firstAreaGradTo: baseThemeVariables$1.bg3,
            firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            // second line
            secondLineGradFrom: baseThemeVariables$1.primary,
            secondLineGradTo: baseThemeVariables$1.primary,
            secondAreaGradFrom: 'rgba(0, 0, 0, 0)',
            secondAreaGradTo: 'rgba(0, 0, 0, 0)',
            secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            // third line
            thirdLineGradFrom: baseThemeVariables$1.success,
            thirdLineGradTo: baseThemeVariables$1.successLight,
            thirdAreaGradFrom: 'rgba(0, 0, 0, 0)',
            thirdAreaGradTo: 'rgba(0, 0, 0, 0)',
            thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        },
        profit: {
            bg: baseThemeVariables$1.bg,
            textColor: baseThemeVariables$1.fgText,
            axisLineColor: baseThemeVariables$1.border4,
            splitLineColor: baseThemeVariables$1.separator,
            areaOpacity: '1',
            axisFontSize: '16',
            axisTextColor: baseThemeVariables$1.fg,
            // first bar
            firstLineGradFrom: baseThemeVariables$1.bg3,
            firstLineGradTo: baseThemeVariables$1.bg3,
            firstLineShadow: 'rgba(0, 0, 0, 0)',
            // second bar
            secondLineGradFrom: baseThemeVariables$1.primary,
            secondLineGradTo: baseThemeVariables$1.primary,
            secondLineShadow: 'rgba(0, 0, 0, 0)',
            // third bar
            thirdLineGradFrom: baseThemeVariables$1.success,
            thirdLineGradTo: baseThemeVariables$1.success,
            thirdLineShadow: 'rgba(0, 0, 0, 0)',
        },
        orderProfitLegend: {
            firstItem: baseThemeVariables$1.success,
            secondItem: baseThemeVariables$1.primary,
            thirdItem: baseThemeVariables$1.bg3,
        },
        visitors: {
            tooltipBg: baseThemeVariables$1.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '1',
            tooltipBorderColor: baseThemeVariables$1.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables$1.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables$1.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables$1.fg,
            yAxisSplitLine: baseThemeVariables$1.separator,
            itemBorderColor: baseThemeVariables$1.primary,
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: '#ffffff',
            lineGradTo: '#ffffff',
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: baseThemeVariables$1.primary,
            areaGradTo: baseThemeVariables$1.primaryLight,
            innerLineStyle: 'solid',
            innerLineWidth: '1',
            innerAreaGradFrom: baseThemeVariables$1.success,
            innerAreaGradTo: baseThemeVariables$1.success,
        },
        visitorsLegend: {
            firstIcon: baseThemeVariables$1.success,
            secondIcon: baseThemeVariables$1.primary,
        },
        visitorsPie: {
            firstPieGradientLeft: baseThemeVariables$1.success,
            firstPieGradientRight: baseThemeVariables$1.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            firstPieRadius: ['65%', '90%'],
            secondPieGradientLeft: baseThemeVariables$1.warning,
            secondPieGradientRight: baseThemeVariables$1.warningLight,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieRadius: ['63%', '92%'],
            shadowOffsetX: '-4',
            shadowOffsetY: '-4',
        },
        visitorsPieLegend: {
            firstSection: baseThemeVariables$1.warning,
            secondSection: baseThemeVariables$1.success,
        },
        earningPie: {
            radius: ['65%', '100%'],
            center: ['50%', '50%'],
            fontSize: '22',
            firstPieGradientLeft: baseThemeVariables$1.success,
            firstPieGradientRight: baseThemeVariables$1.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieGradientLeft: baseThemeVariables$1.primary,
            secondPieGradientRight: baseThemeVariables$1.primary,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            thirdPieGradientLeft: baseThemeVariables$1.warning,
            thirdPieGradientRight: baseThemeVariables$1.warning,
            thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
        },
        earningLine: {
            gradFrom: baseThemeVariables$1.primary,
            gradTo: baseThemeVariables$1.primary,
            tooltipTextColor: baseThemeVariables$1.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables$1.bg,
            tooltipBorderColor: baseThemeVariables$1.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
    },
};

const baseThemeVariables = DARK_THEME$1.variables;
const DARK_THEME = {
    name: 'dark',
    base: 'dark',
    variables: {
        temperature: {
            arcFill: [
                baseThemeVariables.primary,
                baseThemeVariables.primary,
                baseThemeVariables.primary,
                baseThemeVariables.primary,
                baseThemeVariables.primary,
            ],
            arcEmpty: baseThemeVariables.bg2,
            thumbBg: baseThemeVariables.bg2,
            thumbBorder: baseThemeVariables.primary,
        },
        solar: {
            gradientLeft: baseThemeVariables.primary,
            gradientRight: baseThemeVariables.primary,
            shadowColor: 'rgba(0, 0, 0, 0)',
            secondSeriesFill: baseThemeVariables.bg2,
            radius: ['80%', '90%'],
        },
        traffic: {
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            yAxisSplitLine: baseThemeVariables.separator,
            lineBg: baseThemeVariables.border4,
            lineShadowBlur: '1',
            itemColor: baseThemeVariables.border4,
            itemBorderColor: baseThemeVariables.border4,
            itemEmphasisBorderColor: baseThemeVariables.primary,
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            shadowLineShadow: 'rgba(0, 0, 0, 0)',
            gradFrom: baseThemeVariables.bg2,
            gradTo: baseThemeVariables.bg2,
        },
        electricity: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: baseThemeVariables.fgText,
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            axisLineColor: baseThemeVariables.border3,
            xAxisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            lineGradFrom: baseThemeVariables.primary,
            lineGradTo: baseThemeVariables.primary,
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: baseThemeVariables.bg2,
            areaGradTo: baseThemeVariables.bg2,
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        },
        bubbleMap: {
            titleColor: baseThemeVariables.fgText,
            areaColor: baseThemeVariables.bg4,
            areaHoverColor: baseThemeVariables.fgHighlight,
            areaBorderColor: baseThemeVariables.border5,
        },
        profitBarAnimationEchart: {
            textColor: baseThemeVariables.fgText,
            firstAnimationBarColor: baseThemeVariables.primary,
            secondAnimationBarColor: baseThemeVariables.success,
            splitLineStyleOpacity: '1',
            splitLineStyleWidth: '1',
            splitLineStyleColor: baseThemeVariables.separator,
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
        trafficBarEchart: {
            gradientFrom: baseThemeVariables.warningLight,
            gradientTo: baseThemeVariables.warning,
            shadow: baseThemeVariables.warningLight,
            shadowBlur: '0',
            axisTextColor: baseThemeVariables.fgText,
            axisFontSize: '12',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
        },
        countryOrders: {
            countryBorderColor: baseThemeVariables.border4,
            countryFillColor: baseThemeVariables.bg3,
            countryBorderWidth: '1',
            hoveredCountryBorderColor: baseThemeVariables.primary,
            hoveredCountryFillColor: baseThemeVariables.primaryLight,
            hoveredCountryBorderWidth: '1',
            chartAxisLineColor: baseThemeVariables.border4,
            chartAxisTextColor: baseThemeVariables.fg,
            chartAxisFontSize: '16',
            chartGradientTo: baseThemeVariables.primary,
            chartGradientFrom: baseThemeVariables.primaryLight,
            chartAxisSplitLine: baseThemeVariables.separator,
            chartShadowLineColor: baseThemeVariables.primaryLight,
            chartLineBottomShadowColor: baseThemeVariables.primary,
            chartInnerLineColor: baseThemeVariables.bg2,
        },
        echarts: {
            bg: baseThemeVariables.bg,
            textColor: baseThemeVariables.fgText,
            axisLineColor: baseThemeVariables.fgText,
            splitLineColor: baseThemeVariables.separator,
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: baseThemeVariables.primary,
            areaOpacity: '0.7',
        },
        chartjs: {
            axisLineColor: baseThemeVariables.separator,
            textColor: baseThemeVariables.fgText,
        },
        orders: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            // first line
            firstAreaGradFrom: baseThemeVariables.bg3,
            firstAreaGradTo: baseThemeVariables.bg3,
            firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            // second line
            secondLineGradFrom: baseThemeVariables.primary,
            secondLineGradTo: baseThemeVariables.primary,
            secondAreaGradFrom: 'rgba(51, 102, 255, 0.2)',
            secondAreaGradTo: 'rgba(51, 102, 255, 0)',
            secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            // third line
            thirdLineGradFrom: baseThemeVariables.success,
            thirdLineGradTo: baseThemeVariables.successLight,
            thirdAreaGradFrom: 'rgba(0, 214, 143, 0.2)',
            thirdAreaGradTo: 'rgba(0, 214, 143, 0)',
            thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        },
        profit: {
            bg: baseThemeVariables.bg,
            textColor: baseThemeVariables.fgText,
            axisLineColor: baseThemeVariables.border4,
            splitLineColor: baseThemeVariables.separator,
            areaOpacity: '1',
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            // first bar
            firstLineGradFrom: baseThemeVariables.bg3,
            firstLineGradTo: baseThemeVariables.bg3,
            firstLineShadow: 'rgba(0, 0, 0, 0)',
            // second bar
            secondLineGradFrom: baseThemeVariables.primary,
            secondLineGradTo: baseThemeVariables.primary,
            secondLineShadow: 'rgba(0, 0, 0, 0)',
            // third bar
            thirdLineGradFrom: baseThemeVariables.success,
            thirdLineGradTo: baseThemeVariables.successLight,
            thirdLineShadow: 'rgba(0, 0, 0, 0)',
        },
        orderProfitLegend: {
            firstItem: baseThemeVariables.success,
            secondItem: baseThemeVariables.primary,
            thirdItem: baseThemeVariables.bg3,
        },
        visitors: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: '#ffffff',
            lineGradTo: '#ffffff',
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: baseThemeVariables.primary,
            areaGradTo: baseThemeVariables.primaryLight,
            innerLineStyle: 'solid',
            innerLineWidth: '1',
            innerAreaGradFrom: baseThemeVariables.success,
            innerAreaGradTo: baseThemeVariables.success,
        },
        visitorsLegend: {
            firstIcon: baseThemeVariables.success,
            secondIcon: baseThemeVariables.primary,
        },
        visitorsPie: {
            firstPieGradientLeft: baseThemeVariables.success,
            firstPieGradientRight: baseThemeVariables.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            firstPieRadius: ['70%', '90%'],
            secondPieGradientLeft: baseThemeVariables.warning,
            secondPieGradientRight: baseThemeVariables.warningLight,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieRadius: ['60%', '97%'],
            shadowOffsetX: '0',
            shadowOffsetY: '0',
        },
        visitorsPieLegend: {
            firstSection: baseThemeVariables.warning,
            secondSection: baseThemeVariables.success,
        },
        earningPie: {
            radius: ['65%', '100%'],
            center: ['50%', '50%'],
            fontSize: '22',
            firstPieGradientLeft: baseThemeVariables.success,
            firstPieGradientRight: baseThemeVariables.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieGradientLeft: baseThemeVariables.primary,
            secondPieGradientRight: baseThemeVariables.primary,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            thirdPieGradientLeft: baseThemeVariables.warning,
            thirdPieGradientRight: baseThemeVariables.warning,
            thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
        },
        earningLine: {
            gradFrom: baseThemeVariables.primary,
            gradTo: baseThemeVariables.primary,
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
    },
};

const NB_MODULES = [
    RouterModule,
    TranslateModule,
    NbLayoutModule,
    NbMenuModule,
    NbUserModule,
    NbActionsModule,
    NbSearchModule,
    NbSidebarModule,
    NbContextMenuModule,
    NbSecurityModule,
    NbButtonModule,
    NbSelectModule,
    NbIconModule,
    NbEvaIconsModule,
];
const THEME_COMPONENTS = [
    HeaderComponent,
    FooterComponent,
    SearchInputComponent,
    DefaultLayoutComponent,
];
const THEME_PROVIDERS = [
    LayoutService,
    StateService,
    AnalyticsService,
    SeoService,
];
const THEME_PIPES = [
    CapitalizePipe,
    PluralPipe,
    RoundPipe,
    TimingPipe,
    NumberWithCommasPipe,
];
class DoThemeModule {
    static forRoot() {
        return {
            ngModule: DoThemeModule,
            providers: [
                ...THEME_PROVIDERS,
                ...NbThemeModule.forRoot({
                    name: 'default',
                }, [DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME]).providers,
            ],
        };
    }
}
DoThemeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoThemeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoThemeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoThemeModule, declarations: [HeaderComponent,
        FooterComponent,
        SearchInputComponent,
        DefaultLayoutComponent, CapitalizePipe,
        PluralPipe,
        RoundPipe,
        TimingPipe,
        NumberWithCommasPipe], imports: [CommonModule, RouterModule,
        TranslateModule,
        NbLayoutModule,
        NbMenuModule,
        NbUserModule,
        NbActionsModule,
        NbSearchModule,
        NbSidebarModule,
        NbContextMenuModule,
        NbSecurityModule,
        NbButtonModule,
        NbSelectModule,
        NbIconModule,
        NbEvaIconsModule], exports: [CommonModule, CapitalizePipe,
        PluralPipe,
        RoundPipe,
        TimingPipe,
        NumberWithCommasPipe, HeaderComponent,
        FooterComponent,
        SearchInputComponent,
        DefaultLayoutComponent] });
DoThemeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoThemeModule, imports: [[CommonModule, ...NB_MODULES], CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoThemeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ...NB_MODULES],
                    exports: [CommonModule, ...THEME_PIPES, ...THEME_COMPONENTS],
                    declarations: [...THEME_COMPONENTS, ...THEME_PIPES],
                }]
        }] });

/*
 * Public API Surface of do-theme
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AnalyticsService, CORPORATE_THEME, COSMIC_THEME, CapitalizePipe, DARK_THEME, DEFAULT_THEME, DefaultLayoutComponent, DoThemeModule, FooterComponent, HeaderComponent, LayoutService, NumberWithCommasPipe, PluralPipe, RoundPipe, SearchInputComponent, SeoService, StateService, TimingPipe };
//# sourceMappingURL=dongkap-do-theme.js.map
