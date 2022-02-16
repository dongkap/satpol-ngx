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
  NbAccordionModule,
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
  DoLabelModule,
} from '@dongkap/do-shared';
import { MgmtEmployementPlacementComponent } from './do-mgmt-employement-placement.component';
import { DoMgmtEmployementPlacementRoutingModule } from './do-mgmt-employement-placement-routing.module';
import { EmployementPlacementService } from './services/employement-placement.service';
import { EmployementPlacementListPageComponent } from './list/employement-placement-list-page.component';
import { EmployementPlacementEditPageComponent } from './edit/employement-placement-edit-page.component';
import { EmployeePromptComponent } from './edit/prompt-employee/employee-prompt.component';

const components = [
  MgmtEmployementPlacementComponent,
  EmployementPlacementListPageComponent,
  EmployementPlacementEditPageComponent,
  EmployeePromptComponent,
];

const modules = [
  FormsModule,
  ReactiveFormsModule,
  TranslateModule,
  NbCardModule,
  NbAlertModule,
  NbIconModule,
  NbButtonModule,
  NbAccordionModule,
  NbDialogModule.forChild(),
  NbTabsetModule,
  NbSpinnerModule,
  DoThemeModule,
  DoBaseModule,
  DoInputModule,
  DoCheckBoxModule,
  DoButtonModule,
  DoSelectModule,
  DoDatatableModule,
  DoLabelModule,
  DoMgmtEmployementPlacementRoutingModule,
];

const providers = [
  EmployementPlacementService,
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
export class DoMgmtEmployementPlacementModule { }
