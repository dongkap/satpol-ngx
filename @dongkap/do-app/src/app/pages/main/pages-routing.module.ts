import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomePageComponent } from '@dongkap/do-extra';
import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'home',
      component: HomePageComponent,
    },
    {
      path: 'mgmt/corporate',
      loadChildren: () => import('../sys/sys-mgmt-corporate-wrapper.module')
        .then(m => m.SysMgmtCoporateWrapperModule),
    },
    {
      path: 'mgmt/role',
      loadChildren: () => import('../sys/sys-mgmt-role-wrapper.module')
        .then(m => m.SysMgmtRoleWrapperModule),
    },
    {
      path: 'mgmt/menu',
      loadChildren: () => import('../sys/sys-mgmt-menu-wrapper.module')
        .then(m => m.SysMgmtMenuWrapperModule),
    },
    {
      path: 'sysconf/parameter',
      loadChildren: () => import('../sys/sys-parameter-wrapper.module')
        .then(m => m.SysParameterWrapperModule),
    },
    {
      path: 'sysconf/i18n',
      loadChildren: () => import('../sys/sys-locale-wrapper.module')
        .then(m => m.SysLocaleWrapperModule),
    },
    {
      path: 'user',
      loadChildren: () => import('../extra/extra-wrapper.module')
        .then(m => m.ExtraWrapperModule),
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      path: '**',
      redirectTo: '/miscellaneous/404',
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
