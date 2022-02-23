import { NbDialogRef } from '@nebular/theme';
import * as i0 from "@angular/core";
export declare class TermsConditionsComponent {
    protected ref: NbDialogRef<TermsConditionsComponent>;
    content: string;
    action: 'Agree' | 'Close';
    constructor(ref: NbDialogRef<TermsConditionsComponent>);
    submit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TermsConditionsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TermsConditionsComponent, "do-terms-conditions", never, { "content": "content"; "action": "action"; }, {}, never, never>;
}
