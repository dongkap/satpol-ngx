import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { APIModel, HttpBaseModel } from '@dongkap/do-core';
import { SelectParamModel } from '@dongkap/do-shared';
import * as i0 from "@angular/core";
export declare class EmployeeProfileEducationFormalPromptComponent implements OnInit {
    protected ref: NbDialogRef<EmployeeProfileEducationFormalPromptComponent>;
    education: any;
    action: 'Add' | 'Edit';
    formGroup: FormGroup;
    apiSelectEducationalLevel: HttpBaseModel;
    paramSelectEducationalLevel: SelectParamModel[];
    constructor(api: APIModel, formBuilder: FormBuilder, ref: NbDialogRef<EmployeeProfileEducationFormalPromptComponent>);
    ngOnInit(): void;
    onSubmit(): void;
    onReset(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmployeeProfileEducationFormalPromptComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EmployeeProfileEducationFormalPromptComponent, "do-profile-education-formal-prompt", never, { "education": "education"; }, {}, never, never>;
}
