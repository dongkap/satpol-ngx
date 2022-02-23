import { NbDialogRef } from '@nebular/theme';
import * as i0 from "@angular/core";
export declare class DialogFlagComponent {
    protected ref: NbDialogRef<DialogFlagComponent>;
    flags: string[];
    constructor(ref: NbDialogRef<DialogFlagComponent>);
    choose(flag: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogFlagComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DialogFlagComponent, "do-dialog-flag", never, {}, {}, never, never>;
}
