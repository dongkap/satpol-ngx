import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbDialogModule, NbAlertModule, NbIconModule, NbButtonModule } from '@nebular/theme';
import { TranslateModule } from '@ngx-translate/core';
import { DoThemeModule } from '@dongkap/do-theme';
import {
  DoInputModule,
  DoButtonModule,
  DoBaseModule,
  DoCheckBoxModule,
  DoEditorModule,
  DoSelectModule,
  DoDatePickerModule,
} from '@dongkap/do-shared';
import { ChangePasswordPageComponent } from './password/change-password-page.component';
import { ExtraComponent } from './do-extra.component';
import { DoExtraRoutingModule } from './do-extra-routing.module';
import { SecurityPageComponent } from './security/security-page.component';
import { DeactivatedPromptComponent } from './security/prompt/deactivated-prompt.component';
import { SettingsPageComponent } from './settings/settings-page.component';
import { HomePageComponent } from './home/home-page.component';
import { TermsConditionsPageComponent } from './terms/terms-conditions-page.component';
import { PrivacyPolicyPageComponent } from './privacy-policy/privacy-policy-page.component';
import { DeactivatedProviderPromptComponent } from './security/prompt/deactivated-provider-prompt.component';

const EXTRA_COMPONENTS = [
  ExtraComponent,
  ChangePasswordPageComponent,
  DeactivatedPromptComponent,
  DeactivatedProviderPromptComponent,
  SecurityPageComponent,
  SettingsPageComponent,
  HomePageComponent,
  TermsConditionsPageComponent,
  PrivacyPolicyPageComponent,
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NbCardModule,
    NbAlertModule,
    NbIconModule,
    NbButtonModule,
    NbDialogModule.forChild(),
    DoThemeModule,
    DoInputModule,
    DoCheckBoxModule,
    DoButtonModule,
    DoBaseModule,
    DoEditorModule,
    DoSelectModule,
    DoDatePickerModule,
    DoExtraRoutingModule,
  ],
  declarations: [
    ...EXTRA_COMPONENTS,
  ],
})
export class DoExtraModule { }
