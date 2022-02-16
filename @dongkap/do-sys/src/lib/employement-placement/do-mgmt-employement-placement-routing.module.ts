import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardChildService } from '@dongkap/do-auth';
import { MgmtEmployementPlacementComponent } from './do-mgmt-employement-placement.component';
import { EmployementPlacementListPageComponent } from './list/employement-placement-list-page.component';
import { EmployementPlacementEditPageComponent } from './edit/employement-placement-edit-page.component';

const routes: Routes = [{
  path: '',
  component: MgmtEmployementPlacementComponent,
  canActivateChild: [AuthGuardChildService],
  children: [
    {
      path: '',
      component: EmployementPlacementListPageComponent,
      data: {
        code: '#MANAGEMENT-EMPLOYEMENT-PLACEMENT-PAGE',
      },
    },
    {
      path: 'edit',
      component: EmployementPlacementEditPageComponent,
      data: {
        code: '#MANAGEMENT-EMPLOYEMENT-PLACEMENT-PAGE',
      },
    },
    {
      path: '',
      redirectTo: '',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoMgmtEmployementPlacementRoutingModule {
}
