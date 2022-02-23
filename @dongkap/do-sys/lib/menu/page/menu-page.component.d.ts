import { Injector } from '@angular/core';
import { OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { BaseComponent } from '@dongkap/do-shared';
import { MainMenuPageComponent } from '../main/main-menu-page.component';
import { ExtraMenuPageComponent } from '../extra/extra-menu-page.component';
import * as i0 from "@angular/core";
export declare class MenuPageComponent extends BaseComponent<any> implements OnInit, OnDestroy {
    injector: Injector;
    loading: boolean;
    tab: string;
    protected destroy$: Subject<any>;
    mainMenu: MainMenuPageComponent;
    extraMenu: ExtraMenuPageComponent;
    constructor(injector: Injector);
    ngOnInit(): void;
    ngOnDestroy(): void;
    toggleLoadingAnimation(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MenuPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MenuPageComponent, "do-menu-page", never, {}, {}, never, never>;
}
