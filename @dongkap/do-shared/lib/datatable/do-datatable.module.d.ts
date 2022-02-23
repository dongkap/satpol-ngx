import { DoDatatableComponent } from './do-datatable.component';
import { DoDatatableHeaderComponent } from './header/do-datatable-header.component';
import { DoDatatableBaseComponent } from './base/do-datatable-base.component';
import { DoDatatableCollapseComponent } from './header/collapse/do-datatable-collapse.component';
import * as i0 from "@angular/core";
import * as i1 from "./base/do-datatable-base.component";
import * as i2 from "./header/collapse/do-datatable-collapse.component";
import * as i3 from "./header/do-datatable-header.component";
import * as i4 from "./do-datatable.component";
import * as i5 from "@angular/common";
import * as i6 from "@angular/forms";
import * as i7 from "@swimlane/ngx-datatable";
import * as i8 from "@nebular/theme";
import * as i9 from "@ngx-translate/core";
import * as i10 from "../input/do-input.module";
import * as i11 from "../base/do-base.module";
import * as i12 from "../button/do-button.module";
export declare const DATATABLE_COMPONENTS: (typeof DoDatatableComponent | typeof DoDatatableCollapseComponent | typeof DoDatatableHeaderComponent | typeof DoDatatableBaseComponent)[];
export declare class DoDatatableModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<DoDatatableModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<DoDatatableModule, [typeof i1.DoDatatableBaseComponent, typeof i2.DoDatatableCollapseComponent, typeof i3.DoDatatableHeaderComponent, typeof i4.DoDatatableComponent], [typeof i5.CommonModule, typeof i6.FormsModule, typeof i6.ReactiveFormsModule, typeof i7.NgxDatatableModule, typeof i8.NbButtonModule, typeof i8.NbIconModule, typeof i9.TranslateModule, typeof i10.DoInputModule, typeof i11.DoBaseModule, typeof i12.DoButtonModule], [typeof i1.DoDatatableBaseComponent, typeof i2.DoDatatableCollapseComponent, typeof i3.DoDatatableHeaderComponent, typeof i4.DoDatatableComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<DoDatatableModule>;
}
