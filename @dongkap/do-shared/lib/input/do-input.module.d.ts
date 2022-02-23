import { DoInputTextComponent } from './text/do-input-text.component';
import { DoInputCurrencyComponent } from './currency/do-input-currency.component';
import { DoInputBaseIconComponent } from './icon/do-input-base-icon.component';
import { CurrencyMaskDirective } from './currency/directive/currency.directive';
import { DoInputFileComponent } from './file/do-input-file.component';
import * as i0 from "@angular/core";
import * as i1 from "./text/do-input-text.component";
import * as i2 from "./icon/do-input-base-icon.component";
import * as i3 from "./icon/do-input-icon.component";
import * as i4 from "./currency/do-input-currency.component";
import * as i5 from "./file/do-input-file.component";
import * as i6 from "./currency/directive/currency.directive";
import * as i7 from "@angular/common";
import * as i8 from "@angular/forms";
import * as i9 from "@nebular/theme";
import * as i10 from "@ngx-translate/core";
import * as i11 from "../base/do-base.module";
export declare const INPUT_COMPONENTS: (typeof DoInputTextComponent | typeof DoInputCurrencyComponent | typeof DoInputBaseIconComponent | typeof DoInputFileComponent)[];
export declare const INPUT_DIRECTIVES: (typeof CurrencyMaskDirective)[];
export declare class DoInputModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<DoInputModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<DoInputModule, [typeof i1.DoInputTextComponent, typeof i2.DoInputBaseIconComponent, typeof i3.DoInputIconComponent, typeof i4.DoInputCurrencyComponent, typeof i5.DoInputFileComponent, typeof i6.CurrencyMaskDirective], [typeof i7.CommonModule, typeof i8.FormsModule, typeof i8.ReactiveFormsModule, typeof i9.NbInputModule, typeof i9.NbIconModule, typeof i10.TranslateModule, typeof i11.DoBaseModule], [typeof i1.DoInputTextComponent, typeof i2.DoInputBaseIconComponent, typeof i3.DoInputIconComponent, typeof i4.DoInputCurrencyComponent, typeof i5.DoInputFileComponent, typeof i6.CurrencyMaskDirective, typeof i9.NbInputModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<DoInputModule>;
}
