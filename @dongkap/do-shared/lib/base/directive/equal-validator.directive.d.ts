import { Validator, AbstractControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class EqualValidator implements Validator {
    validateEqual: string;
    constructor(validateEqual: string);
    validate(c: AbstractControl): {
        [key: string]: any;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<EqualValidator, [{ attribute: "doValidateEqual"; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EqualValidator, "[doValidateEqual][formControlName],[doValidateEqual][formControl],[doValidateEqual][ngModel]", never, {}, {}, never>;
}
