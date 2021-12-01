import { LOCALE_ID, NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
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
import { environment } from '../../../environments/environment';
import { API, ENVIRONMENT, HttpCommonService, HTTP_SERVICE, OAUTH_INFO } from '@dongkap/do-core';
import { apiPath } from '../../../configs/api.config';
import { oauthResource } from '../../../configs/security.config';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient],
      },
    }),
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
  providers: [
    {
      provide: LOCALE_ID, useValue: environment.locale,
    },
    {
      provide: APP_BASE_HREF, useValue: environment.basePath,
    },
    {
      provide: ENVIRONMENT, useValue: environment,
    },
    {
      provide: API, useValue: apiPath,
    },
    {
      provide: OAUTH_INFO, useValue: oauthResource,
    },
    {
      provide: HTTP_SERVICE,
      useClass: HttpCommonService,
    },
  ],
})
export class ExerciseModule { }
