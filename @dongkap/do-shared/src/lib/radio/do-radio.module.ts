import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DoBaseModule } from '../base/do-base.module';
import { DoRadioComponent } from './radio/do-radio.component';

export const RADIO_COMPONENTS = [
  DoRadioComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    DoBaseModule,
  ],
  declarations: [
    ...RADIO_COMPONENTS,
  ],
  exports: [
    ...RADIO_COMPONENTS,
  ],
})
export class DoRadioModule { }
