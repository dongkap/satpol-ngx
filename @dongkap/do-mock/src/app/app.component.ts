/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AnalyticsService, SeoService } from '@dongkap/do-core';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
 
  constructor(
    private analytics: AnalyticsService,
    private seoService: SeoService,
    private translate: TranslateService,
    @Inject(LOCALE_ID) public locale: string) {
  }
 
  ngOnInit(): void {
    const localeCode: string = this.locale;
    this.translate.addLangs(['en-US', 'id-ID']);
    this.translate.setDefaultLang(localeCode);
    this.translate.use(localeCode);
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
  }
}
 