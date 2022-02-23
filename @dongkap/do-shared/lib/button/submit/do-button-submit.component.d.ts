import { EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class DoButtonSubmitComponent {
    colLabel: number;
    colButton: number;
    resetTitle: string;
    submitTitle: string;
    disabledButton: boolean;
    disabledReset: boolean;
    type: 'button' | 'submit' | 'reset';
    status: 'primary' | 'danger' | 'warning' | 'info';
    skeleton: boolean;
    onSubmit: EventEmitter<any>;
    onReset: EventEmitter<any>;
    set formGroupButton(formGroup: FormGroup);
    formGroup: FormGroup;
    get disabledForm(): boolean;
    submit(event: any): void;
    reset(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DoButtonSubmitComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DoButtonSubmitComponent, "do-button-submit", never, { "colLabel": "colLabel"; "colButton": "colButton"; "resetTitle": "resetTitle"; "submitTitle": "submitTitle"; "disabledButton": "disabledButton"; "disabledReset": "disabledReset"; "type": "type"; "status": "status"; "skeleton": "skeleton"; "formGroupButton": "formGroupButton"; }, { "onSubmit": "onSubmit"; "onReset": "onReset"; }, never, never>;
}
