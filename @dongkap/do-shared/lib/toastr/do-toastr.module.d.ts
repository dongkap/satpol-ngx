import { ModuleWithProviders } from '@angular/core';
import { DoToastrService } from './services/do-toastr.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export declare const TOASTR_COMPONENTS: any[];
export declare const TOASTR_PROVIDERS: (typeof DoToastrService)[];
export declare class DoToastrModule {
    static forRoot(): ModuleWithProviders<DoToastrModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DoToastrModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<DoToastrModule, never, [typeof i1.FormsModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<DoToastrModule>;
}
