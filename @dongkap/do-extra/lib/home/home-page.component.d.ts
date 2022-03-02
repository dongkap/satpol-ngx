import { OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { IndexedDBFactoryService } from '@dongkap/do-core';
import * as i0 from "@angular/core";
export declare class HomePageComponent implements OnInit, OnDestroy {
    private profileIndexedDB;
    name: Promise<string>;
    constructor(profileIndexedDB: IndexedDBFactoryService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HomePageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HomePageComponent, "do-home-page", never, {}, {}, never, never>;
}