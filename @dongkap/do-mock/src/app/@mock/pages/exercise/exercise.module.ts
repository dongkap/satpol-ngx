import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import {
  DoBaseModule,
  DoButtonModule,
  DoCheckBoxModule,
  DoDatatableModule,
  DoEditorModule,
  DoInputModule,
  DoSelectModule,
  DoDatePickerModule,
  DoRadioModule
} from '@dongkap/do-shared';
import { ExerciseRoutingModule } from './exercise-routing.module';
import { ExerciseComponent } from './exercise.component';
import { ExerciseInputTextComponent } from './input-text/exercise-input-text.component';
import { ExerciseInputCurrencyComponent } from './input-currency/exercise-input-currency.component';
import { ExerciseInputFileComponent } from './input-file/exercise-input-file.component';
import { ExerciseSelectBoxComponent } from './select-box/exercise-select-box.component';
import { ExerciseDatatableComponent } from './datatable/exercise-datatable.component';
import { ExerciseCheckboxComponent } from './checkbox/exercise-checkbox.component';
import { ExerciseDatePickerComponent } from './datepicker/exercise-datepicker.component';
import { ExerciseEditorComponent } from './editor/exercise-editor.component';
import { ExerciseRadioComponent } from './radio/exercise-radio.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CollapseModule.forRoot(),
    ExerciseRoutingModule,
    DoBaseModule,
    DoButtonModule,
    DoDatatableModule,
    DoInputModule,
    DoSelectModule,
    DoCheckBoxModule,
    DoDatePickerModule,
    DoEditorModule,
    DoRadioModule,
  ],
  declarations: [
    ExerciseComponent,
    ExerciseInputTextComponent,
    ExerciseInputCurrencyComponent,
    ExerciseInputFileComponent,
    ExerciseSelectBoxComponent,
    ExerciseDatatableComponent,
    ExerciseCheckboxComponent,
    ExerciseDatePickerComponent,
    ExerciseEditorComponent,
    ExerciseRadioComponent,
  ],
})
export class ExerciseModule { }
