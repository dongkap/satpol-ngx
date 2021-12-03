import { Component, Inject } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { NbAuthSocialLink } from '@nebular/auth';
import { NbDialogService } from '@nebular/theme';
import {
  API,
  HTTP_SERVICE,
  OAUTH_INFO,
} from '@dongkap/do-core';
import { ApiBaseResponse } from '@dongkap/do-core';
import { APIModel } from '@dongkap/do-core';
import { HttpFactoryService } from '@dongkap/do-core';
import { SecurityResourceModel } from '@dongkap/do-core';
import { AuthTokenService } from '../../services/auth-token.service';
import { TermsConditionsComponent } from '../terms-conditions/terms-conditions.component';

@Component({
    selector: 'do-login-page',
    styleUrls: ['login-page.component.scss'],
    templateUrl: 'login-page.component.html',
})
export class LoginPageComponent implements OnDestroy {

  public responseError: any;
  public buttonLogin: boolean = false;
  private progress: number = 25;
  protected destroy$: Subject<any> = new Subject<any>();

  public formGroup: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  private urlAuthorizeGoogle: string = this.httpBaseService.API(this.apiPath['auth']['authorize']) +
    '/google?redirect_uri=' +
    `${document.getElementsByTagName('base')[0].href}auth/callback`;

  public socialLinks: NbAuthSocialLink[] = [
    {
      url: this.urlAuthorizeGoogle,
      target: '_self',
      icon: 'google',
    }
  ];

  constructor(
    private router: Router,
    private dialogService: NbDialogService,
    private translate: TranslateService,
    private authTokenService: AuthTokenService,
    @Inject(API) private apiPath: APIModel,
    @Inject(HTTP_SERVICE) private httpBaseService: HttpFactoryService,
    @Inject(OAUTH_INFO)private oauthResource: SecurityResourceModel,
    route: ActivatedRoute) {
    if (route.snapshot.queryParams['error']) {
      this.responseError = 'error.' + route.snapshot.queryParams['error'];
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }

  public login() {
    if (!this.formGroup.invalid) {
      const progressDOM = this.initiateProgress();
      if (this.progress < 35) {
        this.progressBar(progressDOM, this.progress = 35);
      }
      this.buttonLogin = true;
      this.authTokenService.login(
        this.formGroup.get('username').value,
        this.formGroup.get('password').value)
        .then(() => {
          this.progressBar(progressDOM, this.progress = 95);
          this.progress = 0;
          this.responseError = null;
          this.router.navigate(['/app/home']);
        })
        .catch((error: any) => {
          try {
            if (error instanceof HttpErrorResponse) {
              error = error['error'] as ApiBaseResponse;
            }
            const response: ApiBaseResponse = (error as ApiBaseResponse);
            this.responseError = response?.respStatusMessage[response?.respStatusCode];
          } catch (error) {
            this.responseError = 'error.500';
          }
          this.progress = 0;
          this.buttonLogin = false;
          this.reinitProgress();
        });
      if (this.progress >= 35 && this.progress < 65) {
        this.progressBar(progressDOM, this.progress = 65);
      }
    }
  }

  get hasErrorUsername(): boolean {
    return (
      this.formGroup.controls['username'] &&
      this.formGroup.controls['username'].invalid &&
      this.formGroup.controls['username'].touched
    );
  }

  get hasSuccessUsername(): boolean {
    return (
      this.formGroup.controls['username'] &&
      this.formGroup.controls['username'].valid &&
      this.formGroup.controls['username'].touched
    );
  }

  get hasErrorPassword(): boolean {
    return (
      this.formGroup.controls['password'] &&
      this.formGroup.controls['password'].invalid &&
      this.formGroup.controls['password'].touched
    );
  }

  get hasSuccessPassword(): boolean {
    return (
      this.formGroup.controls['password'] &&
      this.formGroup.controls['password'].valid &&
      this.formGroup.controls['password'].touched
    );
  }

  public onClickTermsConditions() {
    const data: any = {
      parameterCode: 'TERMS_CONDITIONS.DONGKAP'
    };
    const httpHeaders: HttpHeaders = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.oauthResource['client_id'] + ':' + this.oauthResource['client_secret']),
      'Content-Type': 'application/json',
      'Accept-Language': this.translate.currentLang,
    });
    this.httpBaseService.HTTP_BASE(this.apiPath['openapi']['parameter'], data, httpHeaders)
    .pipe(takeUntil(this.destroy$))
    .subscribe((response: any) => {
      this.dialogService.open(TermsConditionsComponent, {
        context: {
          content: response['parameterValue'],
          action: 'Close',
        },
        });
    });
  }

  private initiateProgress(): HTMLElement {
    document.querySelectorAll('.pace-done').forEach(pace => {
      pace.className = pace.className.replace('pace-done pace-done', 'pace-running');
      pace.className = pace.className.replace('pace-done', 'pace-running');
    });
    document.querySelectorAll('.pace-inactive').forEach(pace => {
      pace.className = pace.className.replace('pace-inactive pace-inactive', 'pace-active');
      pace.className = pace.className.replace('pace-inactive', 'pace-active');
    });
    return document.getElementsByClassName('pace-progress').item(0) as HTMLElement;
  }

  private reinitProgress() {
    document.querySelectorAll('.pace-running').forEach(pace => {
      pace.className = pace.className.replace('pace-running', 'pace-done');
    });
    document.querySelectorAll('.pace-active').forEach(pace => {
      pace.className = pace.className.replace('pace-active', 'pace-inactive');
    });
  }

  private progressBar(progressDOM: HTMLElement, progress: number) {
    progressDOM.style.transform = 'translate3d(' + progress + '%, 0px, 0px)';
    progressDOM.getAttributeNode('data-progress-text').value = progress + '%';
    progressDOM.getAttributeNode('data-progress').value = progress.toString();
  }

}