import { NbDialogRef } from '@nebular/theme';
import * as i0 from "@angular/core";
export declare class DeactivatedPromptComponent {
    protected ref: NbDialogRef<DeactivatedPromptComponent>;
    disabled: boolean;
    password: string;
    showPassword: boolean;
    icon: string;
    constructor(ref: NbDialogRef<DeactivatedPromptComponent>);
    onShowPassword(): void;
    submit(password: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeactivatedPromptComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeactivatedPromptComponent, "do-deactivated-prompt", never, {}, {}, never, never>;
}
