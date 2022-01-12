import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardChildService } from '@dongkap/do-auth';
import { MgmtEmployeeComponent } from './do-mgmt-employee.component';
import { EmployeeListPageComponent } from './list/employee-list-page.component';
import { EmployeeAddEditPageComponent } from './add-edit/employee-add-edit-page.component';

const routes: Routes = [{
  path: '',
  component: MgmtEmployeeComponent,
  canActivateChild: [AuthGuardChildService],
  children: [
    {
      path: '',
      component: EmployeeListPageComponent,
      data: {
        code: '#MANAGEMENT-EMPLOYEE-PAGE',
      },
    },
    {
      path: ':action',
      component: EmployeeAddEditPageComponent,
      data: {
        code: '#MANAGEMENT-OCCUPATION-PAGE',
      },
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoMgmtEmployeeRoutingModule {
}
