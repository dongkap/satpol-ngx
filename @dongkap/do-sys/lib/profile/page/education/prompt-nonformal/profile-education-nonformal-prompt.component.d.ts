import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { APIModel } from '@dongkap/do-core';
import * as i0 from "@angular/core";
export declare class EmployeeProfileEducationNonFormalPromptComponent implements OnInit {
    protected ref: NbDialogRef<EmployeeProfileEducationNonFormalPromptComponent>;
    training: any;
    action: 'Add' | 'Edit';
    formGroup: FormGroup;
    constructor(api: APIModel, formBuilder: FormBuilder, ref: NbDialogRef<EmployeeProfileEducationNonFormalPromptComponent>);
    ngOnInit(): void;
    onSubmit(): void;
    onReset(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmployeeProfileEducationNonFormalPromptComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EmployeeProfileEducationNonFormalPromptComponent, "do-profile-education-nonformal-prompt", never, { "training": "training"; }, {}, never, never>;
}
