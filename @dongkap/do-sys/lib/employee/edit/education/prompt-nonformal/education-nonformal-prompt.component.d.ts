import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { APIModel } from '@dongkap/do-core';
import * as i0 from "@angular/core";
export declare class EmployeeEducationNonFormalPromptComponent implements OnInit {
    protected ref: NbDialogRef<EmployeeEducationNonFormalPromptComponent>;
    training: any;
    action: 'Add' | 'Edit';
    formGroup: FormGroup;
    constructor(api: APIModel, formBuilder: FormBuilder, ref: NbDialogRef<EmployeeEducationNonFormalPromptComponent>);
    ngOnInit(): void;
    onSubmit(): void;
    onReset(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmployeeEducationNonFormalPromptComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EmployeeEducationNonFormalPromptComponent, "do-education-nonformal-prompt", never, { "training": "training"; }, {}, never, never>;
}
