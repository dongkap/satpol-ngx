import { Injector } from '@angular/core';
import { BaseFormComponent } from '@dongkap/do-shared';
import * as i0 from "@angular/core";
export declare class ChangePasswordPageComponent extends BaseFormComponent<any> {
    injector: Injector;
    passwordPattern: string;
    private enc;
    private oauthResource;
    constructor(injector: Injector);
    onSubmit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChangePasswordPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChangePasswordPageComponent, "do-change-password-page", never, {}, {}, never, never>;
}
