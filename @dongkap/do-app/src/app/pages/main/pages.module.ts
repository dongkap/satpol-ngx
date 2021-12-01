import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { DoThemeModule } from '@dongkap/do-theme';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    DoThemeModule,
    NbMenuModule,
  ],
  declarations: [
    PagesComponent
  ],
})
export class PagesModule {
}
