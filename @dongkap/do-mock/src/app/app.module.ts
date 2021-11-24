/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';

import { MockModule } from './@mock/mock.module';
import { API, DoCoreModule, ENVIRONMENT, OAUTH_INFO } from '@dongkap/do-core';
import { DoThemeModule } from '@dongkap/do-theme';
import { environment } from '../environments/environment';
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { apiPath } from '../configs/api.config';
import { oauthResource } from '../configs/security.config';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    DoCoreModule.forRoot(),
    DoThemeModule.forRoot(),
    MockModule.forRoot(),
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: environment.locale,
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
