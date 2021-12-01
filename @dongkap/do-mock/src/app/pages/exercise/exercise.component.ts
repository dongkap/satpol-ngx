import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ngx-exercise',
  templateUrl: 'exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    @Inject(LOCALE_ID) public locale: string) {
  }

  ngOnInit(): void {
    const localeCode: string = this.locale;
    this.translate.addLangs(['en-US', 'id-ID']);
    this.translate.setDefaultLang(localeCode);
    this.translate.use(localeCode);
  }
}
