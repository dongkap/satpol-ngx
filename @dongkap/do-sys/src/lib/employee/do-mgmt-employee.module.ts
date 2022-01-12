import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbCardModule,
  NbAlertModule,
  NbIconModule,
  NbDialogModule,
  NbButtonModule,
  NbTabsetModule,
  NbSpinnerModule,
} from '@nebular/theme';
import { TranslateModule } from '@ngx-translate/core';
import { DoThemeModule } from '@dongkap/do-theme';
import {
  DoInputModule,
  DoCheckBoxModule,
  DoButtonModule,
  DoBaseModule,
  DoSelectModule,
  DoDatatableModule,
  DoEditorModule,
} from '@dongkap/do-shared';
import { MgmtEmployeeComponent } from './do-mgmt-employee.component';
import { DoMgmtEmployeeRoutingModule } from './do-mgmt-employee-routing.module';
import { EmployeeService } from './services/employee.service';
import { EmployeeListPageComponent } from './list/employee-list-page.component';
import { EmployeeAddEditPageComponent } from './add-edit/employee-add-edit-page.component';

const components = [
  MgmtEmployeeComponent,
  EmployeeListPageComponent,
  EmployeeAddEditPageComponent,
];

const modules = [
  FormsModule,
  ReactiveFormsModule,
  TranslateModule,
  NbCardModule,
  NbAlertModule,
  NbIconModule,
  NbButtonModule,
  NbDialogModule.forChild(),
  NbTabsetModule,
  NbSpinnerModule,
  DoThemeModule,
  DoInputModule,
  DoCheckBoxModule,
  DoButtonModule,
  DoBaseModule,
  DoSelectModule,
  DoDatatableModule,
  DoEditorModule,
  DoMgmtEmployeeRoutingModule,
];

const providers = [
  EmployeeService,
];

@NgModule({
  imports: [
    ...modules,
  ],
  declarations: [
    ...components,
  ],
  providers: [
    ...providers,
  ],
})
export class DoMgmtEmployeeModule { }
