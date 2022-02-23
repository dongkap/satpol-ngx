import { OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import * as i0 from "@angular/core";
export declare class AuthComponent implements OnDestroy {
    private location;
    alive: boolean;
    subscription: any;
    authenticated: boolean;
    token: string;
    constructor(location: Location);
    back(): boolean;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AuthComponent, "do-auth", never, {}, {}, never, never>;
}
