import { NbDialogRef, NbIconLibraries } from '@nebular/theme';
import * as i0 from "@angular/core";
export declare class DialogIconComponent {
    protected ref: NbDialogRef<DialogIconComponent>;
    evaIcons: any[];
    constructor(ref: NbDialogRef<DialogIconComponent>, iconsLibrary: NbIconLibraries);
    choose(icon: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DialogIconComponent, "do-dialog-icon", never, {}, {}, never, never>;
}
