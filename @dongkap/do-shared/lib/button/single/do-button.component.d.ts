import { EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class DoButtonComponent {
    formGroupButton: FormGroup;
    name: string;
    disabledButton: boolean;
    type: 'button' | 'submit' | 'reset';
    status: 'primary' | 'danger' | 'warning' | 'info';
    size: 'tiny' | 'small' | 'medium' | 'large' | 'giant';
    skeleton: boolean;
    onSubmit: EventEmitter<any>;
    click(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DoButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DoButtonComponent, "do-button", never, { "formGroupButton": "formGroupButton"; "name": "name"; "disabledButton": "disabledButton"; "type": "type"; "status": "status"; "size": "size"; "skeleton": "skeleton"; }, { "onSubmit": "onSubmit"; }, never, ["[buttonicon]"]>;
}
