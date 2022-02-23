import { Validator, AbstractControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class NotEqualValidator implements Validator {
    validateNotEqual: string;
    constructor(validateNotEqual: string);
    validate(c: AbstractControl): {
        [key: string]: any;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<NotEqualValidator, [{ attribute: "doValidateNotEqual"; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NotEqualValidator, "[doValidateNotEqual][formControlName],[doValidateNotEqual][formControl],[doValidateNotEqual][ngModel]", never, {}, {}, never>;
}
