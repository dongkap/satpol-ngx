import { ErrorHandler, ModuleWithProviders } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ErrorHandlerService } from './services/error-handler.service';
import { CustomPreloadingStrategy } from './services/preloading-strategy.service';
import { EncryptionService } from './services/security/encryption.service';
import { StorageMaskService } from './services/storage/storage-mask.service';
import { HttpCommonService } from './services/utils/http-common.service';
import { TranslationService } from './services/utils/translation.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export declare const CORE_PROVIDERS: (typeof CustomPreloadingStrategy | typeof EncryptionService | {
    provide: import("@angular/core").InjectionToken<import("@dongkap/do-core").HttpFactoryService>;
    useClass: typeof HttpCommonService;
} | {
    provide: typeof ErrorHandler;
    useClass: typeof ErrorHandlerService;
} | {
    provide: import("@angular/core").InjectionToken<import("@dongkap/do-core").StorageFactoryService>;
    useClass: typeof StorageMaskService;
})[];
export declare function createTranslateLoader(http: HttpClient): TranslationService;
export declare class DoCoreModule {
    constructor(parentModule: DoCoreModule);
    static forRoot(): ModuleWithProviders<DoCoreModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DoCoreModule, [{ optional: true; skipSelf: true; }]>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<DoCoreModule, never, [typeof i1.CommonModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<DoCoreModule>;
}
