import { ModuleWithProviders } from '@angular/core';
import { DoWizardComponent } from './do-wizard.component';
import { DoWizardErrorComponent } from './wizard-error/do-wizard-error.component';
import { DoWizardButtonsComponent } from './wizard-buttons/do-wizard-buttons.component';
import { DoWizardNavigationComponent } from './wizard-navigation/do-wizard-navigation.component';
import { DoWizardPageOutletComponent } from './wizard-page-outlet/do-wizard-page-outlet.component';
import { DoWizardService } from './services/do-wizard.service';
import * as i0 from "@angular/core";
import * as i1 from "./do-wizard.component";
import * as i2 from "./wizard-error/do-wizard-error.component";
import * as i3 from "./wizard-navigation/do-wizard-navigation.component";
import * as i4 from "./wizard-buttons/do-wizard-buttons.component";
import * as i5 from "./wizard-page-outlet/do-wizard-page-outlet.component";
import * as i6 from "@angular/common";
import * as i7 from "@angular/router";
import * as i8 from "@ngx-translate/core";
import * as i9 from "@nebular/theme";
export declare const WIZARD_COMPONENTS: (typeof DoWizardComponent | typeof DoWizardErrorComponent | typeof DoWizardButtonsComponent | typeof DoWizardNavigationComponent | typeof DoWizardPageOutletComponent)[];
export declare const WIZARD_PROVIDERS: (typeof DoWizardService)[];
export declare class DoWizardModule {
    static forRoot(): ModuleWithProviders<DoWizardModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DoWizardModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<DoWizardModule, [typeof i1.DoWizardComponent, typeof i2.DoWizardErrorComponent, typeof i3.DoWizardNavigationComponent, typeof i4.DoWizardButtonsComponent, typeof i5.DoWizardPageOutletComponent], [typeof i6.CommonModule, typeof i7.RouterModule, typeof i8.TranslateModule, typeof i9.NbButtonModule], [typeof i1.DoWizardComponent, typeof i2.DoWizardErrorComponent, typeof i3.DoWizardNavigationComponent, typeof i4.DoWizardButtonsComponent, typeof i5.DoWizardPageOutletComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<DoWizardModule>;
}
