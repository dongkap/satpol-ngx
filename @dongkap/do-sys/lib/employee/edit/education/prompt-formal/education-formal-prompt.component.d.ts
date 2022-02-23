import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { APIModel, HttpBaseModel } from '@dongkap/do-core';
import { SelectParamModel } from '@dongkap/do-shared';
import * as i0 from "@angular/core";
export declare class EmployeeEducationFormalPromptComponent implements OnInit {
    protected ref: NbDialogRef<EmployeeEducationFormalPromptComponent>;
    education: any;
    action: 'Add' | 'Edit';
    formGroup: FormGroup;
    apiSelectEducationalLevel: HttpBaseModel;
    paramSelectEducationalLevel: SelectParamModel[];
    constructor(api: APIModel, formBuilder: FormBuilder, ref: NbDialogRef<EmployeeEducationFormalPromptComponent>);
    ngOnInit(): void;
    onSubmit(): void;
    onReset(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmployeeEducationFormalPromptComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EmployeeEducationFormalPromptComponent, "do-education-formal-prompt", never, { "education": "education"; }, {}, never, never>;
}
