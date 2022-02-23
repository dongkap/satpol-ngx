import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbDialogModule, NbAlertModule, NbIconModule, NbButtonModule, NbAccordionModule } from '@nebular/theme';
import { TranslateModule } from '@ngx-translate/core';
import { DoThemeModule } from '@dongkap/do-theme';
import { DoInputModule, DoButtonModule, DoBaseModule, DoCheckBoxModule, DoEditorModule, DoSelectModule, DoDatePickerModule, DoImageModule, } from '@dongkap/do-shared';
import { ChangePasswordPageComponent } from './password/change-password-page.component';
import { ExtraComponent } from './do-extra.component';
import { DoExtraRoutingModule } from './do-extra-routing.module';
import { SecurityPageComponent } from './security/security-page.component';
import { DeactivatedPromptComponent } from './security/prompt/deactivated-prompt.component';
import { SettingsPageComponent } from './settings/settings-page.component';
import { ProfilePageComponent } from './profile/profile-page.component';
import { HomePageComponent } from './home/home-page.component';
import { TermsConditionsPageComponent } from './terms/terms-conditions-page.component';
import { PrivacyPolicyPageComponent } from './privacy-policy/privacy-policy-page.component';
import { DeactivatedProviderPromptComponent } from './security/prompt/deactivated-provider-prompt.component';
import { SwitchRolePageComponent } from './switch-role/switch-role-page.component';
import * as i0 from "@angular/core";
import * as i1 from "@nebular/theme";
const EXTRA_COMPONENTS = [
    ExtraComponent,
    ChangePasswordPageComponent,
    DeactivatedPromptComponent,
    DeactivatedProviderPromptComponent,
    SecurityPageComponent,
    SettingsPageComponent,
    ProfilePageComponent,
    HomePageComponent,
    TermsConditionsPageComponent,
    PrivacyPolicyPageComponent,
    SwitchRolePageComponent,
];
export class DoExtraModule {
}
DoExtraModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoExtraModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoExtraModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoExtraModule, declarations: [ExtraComponent,
        ChangePasswordPageComponent,
        DeactivatedPromptComponent,
        DeactivatedProviderPromptComponent,
        SecurityPageComponent,
        SettingsPageComponent,
        ProfilePageComponent,
        HomePageComponent,
        TermsConditionsPageComponent,
        PrivacyPolicyPageComponent,
        SwitchRolePageComponent], imports: [FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        NbCardModule,
        NbAlertModule,
        NbIconModule,
        NbButtonModule,
        NbAccordionModule, i1.NbDialogModule, DoThemeModule,
        DoInputModule,
        DoCheckBoxModule,
        DoButtonModule,
        DoBaseModule,
        DoEditorModule,
        DoSelectModule,
        DoDatePickerModule,
        DoImageModule,
        DoExtraRoutingModule] });
DoExtraModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoExtraModule, imports: [[
            FormsModule,
            ReactiveFormsModule,
            TranslateModule,
            NbCardModule,
            NbAlertModule,
            NbIconModule,
            NbButtonModule,
            NbAccordionModule,
            NbDialogModule.forChild(),
            DoThemeModule,
            DoInputModule,
            DoCheckBoxModule,
            DoButtonModule,
            DoBaseModule,
            DoEditorModule,
            DoSelectModule,
            DoDatePickerModule,
            DoImageModule,
            DoExtraRoutingModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoExtraModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        FormsModule,
                        ReactiveFormsModule,
                        TranslateModule,
                        NbCardModule,
                        NbAlertModule,
                        NbIconModule,
                        NbButtonModule,
                        NbAccordionModule,
                        NbDialogModule.forChild(),
                        DoThemeModule,
                        DoInputModule,
                        DoCheckBoxModule,
                        DoButtonModule,
                        DoBaseModule,
                        DoEditorModule,
                        DoSelectModule,
                        DoDatePickerModule,
                        DoImageModule,
                        DoExtraRoutingModule,
                    ],
                    declarations: [
                        ...EXTRA_COMPONENTS,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tZXh0cmEubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tZXh0cmEvc3JjL2xpYi9kby1leHRyYS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5SCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFDTCxhQUFhLEVBQ2IsY0FBYyxFQUNkLFlBQVksRUFDWixnQkFBZ0IsRUFDaEIsY0FBYyxFQUNkLGNBQWMsRUFDZCxrQkFBa0IsRUFDbEIsYUFBYSxHQUNkLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDeEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQzdHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDOzs7QUFFbkYsTUFBTSxnQkFBZ0IsR0FBRztJQUN2QixjQUFjO0lBQ2QsMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQixrQ0FBa0M7SUFDbEMscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1QiwwQkFBMEI7SUFDMUIsdUJBQXVCO0NBQ3hCLENBQUM7QUE0QkYsTUFBTSxPQUFPLGFBQWE7OzJHQUFiLGFBQWE7NEdBQWIsYUFBYSxpQkF2Q3hCLGNBQWM7UUFDZCwyQkFBMkI7UUFDM0IsMEJBQTBCO1FBQzFCLGtDQUFrQztRQUNsQyxxQkFBcUI7UUFDckIscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQixpQkFBaUI7UUFDakIsNEJBQTRCO1FBQzVCLDBCQUEwQjtRQUMxQix1QkFBdUIsYUFLckIsV0FBVztRQUNYLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsWUFBWTtRQUNaLGFBQWE7UUFDYixZQUFZO1FBQ1osY0FBYztRQUNkLGlCQUFpQixxQkFFakIsYUFBYTtRQUNiLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLFlBQVk7UUFDWixjQUFjO1FBQ2QsY0FBYztRQUNkLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2Isb0JBQW9COzRHQU1YLGFBQWEsWUF6QmY7WUFDUCxXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLGVBQWU7WUFDZixZQUFZO1lBQ1osYUFBYTtZQUNiLFlBQVk7WUFDWixjQUFjO1lBQ2QsaUJBQWlCO1lBQ2pCLGNBQWMsQ0FBQyxRQUFRLEVBQUU7WUFDekIsYUFBYTtZQUNiLGFBQWE7WUFDYixnQkFBZ0I7WUFDaEIsY0FBYztZQUNkLFlBQVk7WUFDWixjQUFjO1lBQ2QsY0FBYztZQUNkLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2Isb0JBQW9CO1NBQ3JCOzRGQUtVLGFBQWE7a0JBMUJ6QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsZUFBZTt3QkFDZixZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsWUFBWTt3QkFDWixjQUFjO3dCQUNkLGlCQUFpQjt3QkFDakIsY0FBYyxDQUFDLFFBQVEsRUFBRTt3QkFDekIsYUFBYTt3QkFDYixhQUFhO3dCQUNiLGdCQUFnQjt3QkFDaEIsY0FBYzt3QkFDZCxZQUFZO3dCQUNaLGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCxrQkFBa0I7d0JBQ2xCLGFBQWE7d0JBQ2Isb0JBQW9CO3FCQUNyQjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osR0FBRyxnQkFBZ0I7cUJBQ3BCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmJDYXJkTW9kdWxlLCBOYkRpYWxvZ01vZHVsZSwgTmJBbGVydE1vZHVsZSwgTmJJY29uTW9kdWxlLCBOYkJ1dHRvbk1vZHVsZSwgTmJBY2NvcmRpb25Nb2R1bGUgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IERvVGhlbWVNb2R1bGUgfSBmcm9tICdAZG9uZ2thcC9kby10aGVtZSc7XG5pbXBvcnQge1xuICBEb0lucHV0TW9kdWxlLFxuICBEb0J1dHRvbk1vZHVsZSxcbiAgRG9CYXNlTW9kdWxlLFxuICBEb0NoZWNrQm94TW9kdWxlLFxuICBEb0VkaXRvck1vZHVsZSxcbiAgRG9TZWxlY3RNb2R1bGUsXG4gIERvRGF0ZVBpY2tlck1vZHVsZSxcbiAgRG9JbWFnZU1vZHVsZSxcbn0gZnJvbSAnQGRvbmdrYXAvZG8tc2hhcmVkJztcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IEV4dHJhQ29tcG9uZW50IH0gZnJvbSAnLi9kby1leHRyYS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRG9FeHRyYVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2RvLWV4dHJhLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IFNlY3VyaXR5UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vc2VjdXJpdHkvc2VjdXJpdHktcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGVhY3RpdmF0ZWRQcm9tcHRDb21wb25lbnQgfSBmcm9tICcuL3NlY3VyaXR5L3Byb21wdC9kZWFjdGl2YXRlZC1wcm9tcHQuY29tcG9uZW50JztcbmltcG9ydCB7IFNldHRpbmdzUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vc2V0dGluZ3Mvc2V0dGluZ3MtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZmlsZVBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3Byb2ZpbGUvcHJvZmlsZS1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIb21lUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFRlcm1zQ29uZGl0aW9uc1BhZ2VDb21wb25lbnQgfSBmcm9tICcuL3Rlcm1zL3Rlcm1zLWNvbmRpdGlvbnMtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJpdmFjeVBvbGljeVBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3ByaXZhY3ktcG9saWN5L3ByaXZhY3ktcG9saWN5LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IERlYWN0aXZhdGVkUHJvdmlkZXJQcm9tcHRDb21wb25lbnQgfSBmcm9tICcuL3NlY3VyaXR5L3Byb21wdC9kZWFjdGl2YXRlZC1wcm92aWRlci1wcm9tcHQuY29tcG9uZW50JztcbmltcG9ydCB7IFN3aXRjaFJvbGVQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9zd2l0Y2gtcm9sZS9zd2l0Y2gtcm9sZS1wYWdlLmNvbXBvbmVudCc7XG5cbmNvbnN0IEVYVFJBX0NPTVBPTkVOVFMgPSBbXG4gIEV4dHJhQ29tcG9uZW50LFxuICBDaGFuZ2VQYXNzd29yZFBhZ2VDb21wb25lbnQsXG4gIERlYWN0aXZhdGVkUHJvbXB0Q29tcG9uZW50LFxuICBEZWFjdGl2YXRlZFByb3ZpZGVyUHJvbXB0Q29tcG9uZW50LFxuICBTZWN1cml0eVBhZ2VDb21wb25lbnQsXG4gIFNldHRpbmdzUGFnZUNvbXBvbmVudCxcbiAgUHJvZmlsZVBhZ2VDb21wb25lbnQsXG4gIEhvbWVQYWdlQ29tcG9uZW50LFxuICBUZXJtc0NvbmRpdGlvbnNQYWdlQ29tcG9uZW50LFxuICBQcml2YWN5UG9saWN5UGFnZUNvbXBvbmVudCxcbiAgU3dpdGNoUm9sZVBhZ2VDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGUsXG4gICAgTmJDYXJkTW9kdWxlLFxuICAgIE5iQWxlcnRNb2R1bGUsXG4gICAgTmJJY29uTW9kdWxlLFxuICAgIE5iQnV0dG9uTW9kdWxlLFxuICAgIE5iQWNjb3JkaW9uTW9kdWxlLFxuICAgIE5iRGlhbG9nTW9kdWxlLmZvckNoaWxkKCksXG4gICAgRG9UaGVtZU1vZHVsZSxcbiAgICBEb0lucHV0TW9kdWxlLFxuICAgIERvQ2hlY2tCb3hNb2R1bGUsXG4gICAgRG9CdXR0b25Nb2R1bGUsXG4gICAgRG9CYXNlTW9kdWxlLFxuICAgIERvRWRpdG9yTW9kdWxlLFxuICAgIERvU2VsZWN0TW9kdWxlLFxuICAgIERvRGF0ZVBpY2tlck1vZHVsZSxcbiAgICBEb0ltYWdlTW9kdWxlLFxuICAgIERvRXh0cmFSb3V0aW5nTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5FWFRSQV9DT01QT05FTlRTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBEb0V4dHJhTW9kdWxlIHsgfVxuIl19