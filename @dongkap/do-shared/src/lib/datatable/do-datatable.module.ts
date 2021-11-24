import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DoBaseModule } from '../base/do-base.module';
import { DoInputModule } from '../input/do-input.module';
import { DoDatatableComponent } from './do-datatable.component';
import { DoDatatableHeaderComponent } from './header/do-datatable-header.component';
import { DoDatatableBaseComponent } from './base/do-datatable-base.component';
import { DoDatatableCollapseComponent } from './header/collapse/do-datatable-collapse.component';

export const DATATABLE_COMPONENTS = [
  DoDatatableBaseComponent,
  DoDatatableCollapseComponent,
  DoDatatableHeaderComponent,
  DoDatatableComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    TranslateModule,
    DoInputModule,
    DoBaseModule,
  ],
  declarations: [
    ...DATATABLE_COMPONENTS,
  ],
  exports: [
    ...DATATABLE_COMPONENTS,
  ],
})
export class DoDatatableModule { }
