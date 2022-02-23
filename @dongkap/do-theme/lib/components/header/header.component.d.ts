import { OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbMediaBreakpointsService, NbMenuItem, NbSidebarService, NbThemeService } from '@nebular/theme';
import { LayoutService } from '../../services/layout.service';
import { LocationStrategy } from '@angular/common';
import * as i0 from "@angular/core";
export declare class HeaderComponent implements OnInit, OnDestroy {
    private sidebarService;
    private themeService;
    private breakpointService;
    private layoutService;
    private locationStrategy;
    private router;
    name: string;
    image: string;
    logo: string;
    extraMenu: NbMenuItem[];
    userPictureOnly: boolean;
    private destroy$;
    constructor(sidebarService: NbSidebarService, themeService: NbThemeService, breakpointService: NbMediaBreakpointsService, layoutService: LayoutService, locationStrategy: LocationStrategy, router: Router);
    ngOnInit(): void;
    ngOnDestroy(): void;
    toggleSidebar(): boolean;
    navigateHome(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<HeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HeaderComponent, "do-header", never, { "name": "name"; "image": "image"; "logo": "logo"; "extraMenu": "extraMenu"; }, {}, never, never>;
}
