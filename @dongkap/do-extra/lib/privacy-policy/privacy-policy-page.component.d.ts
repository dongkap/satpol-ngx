import { Injector } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BaseComponent } from '@dongkap/do-shared';
import * as i0 from "@angular/core";
export declare class PrivacyPolicyPageComponent extends BaseComponent<any> implements OnInit, OnDestroy {
    injector: Injector;
    content: string;
    protected destroy$: Subject<any>;
    constructor(injector: Injector);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrivacyPolicyPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrivacyPolicyPageComponent, "do-privacy-policy-page-page", never, {}, {}, never, never>;
}
