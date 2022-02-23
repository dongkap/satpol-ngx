import { Injector } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseFormComponent } from '@dongkap/do-shared';
import * as i0 from "@angular/core";
export declare class ParameterAddGroupPageComponent extends BaseFormComponent<any> implements OnInit {
    injector: Injector;
    private router;
    constructor(injector: Injector, router: Router);
    ngOnInit(): void;
    onReset(): void;
    onSubmit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ParameterAddGroupPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ParameterAddGroupPageComponent, "do-parameter-add-group-page", never, {}, {}, never, never>;
}
