import { FormGroup } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import * as i0 from "@angular/core";
export declare class DeactivatedProviderPromptComponent {
    protected ref: NbDialogRef<DeactivatedProviderPromptComponent>;
    disabled: boolean;
    patternEmail: string;
    form: FormGroup;
    constructor(ref: NbDialogRef<DeactivatedProviderPromptComponent>);
    submit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeactivatedProviderPromptComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeactivatedProviderPromptComponent, "do-deactivated-provider-prompt", never, {}, {}, never, never>;
}
