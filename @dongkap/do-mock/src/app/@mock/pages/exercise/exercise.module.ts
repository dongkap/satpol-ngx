import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import {
  DoBaseModule,
  DoDatatableModule,
  DoInputModule,
  DoSelectModule,
} from '@dongkap/do-shared';
import { ExerciseRoutingModule } from './exercise-routing.module';
import { ExerciseComponent } from './exercise.component';
import { ExerciseInputTextComponent } from './input-text/exercise-input-text.component';
import { ExerciseInputCurrencyComponent } from './input-currency/exercise-input-currency.component';
import { ExerciseInputFileComponent } from './input-file/exercise-input-file.component';
import { ExerciseSelectBoxComponent } from './select-box/exercise-select-box.component';
import { ExerciseDatatableComponent } from './datatable/exercise-datatable.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CollapseModule.forRoot(),
    ExerciseRoutingModule,
    DoBaseModule,
    DoDatatableModule,
    DoInputModule,
    DoSelectModule,
  ],
  declarations: [
    ExerciseComponent,
    ExerciseInputTextComponent,
    ExerciseInputCurrencyComponent,
    ExerciseInputFileComponent,
    ExerciseSelectBoxComponent,
    ExerciseDatatableComponent,
  ],
})
export class ExerciseModule { }
