import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbAlertModule, NbIconModule, NbDialogModule, NbButtonModule, NbTabsetModule, NbSpinnerModule, NbAccordionModule, } from '@nebular/theme';
import { TranslateModule } from '@ngx-translate/core';
import { DoThemeModule } from '@dongkap/do-theme';
import { DoInputModule, DoCheckBoxModule, DoButtonModule, DoBaseModule, DoSelectModule, DoDatatableModule, DoLabelModule, DoEditorModule, DoDatePickerModule, DoImageModule, } from '@dongkap/do-shared';
import { EmployeeProfileComponent } from './do-employee-profile.component';
import { DoEmployeeProfileRoutingModule } from './do-employee-profile-routing.module';
import { EmployeeProfilePageComponent } from './page/employee-profile-page.component';
import { EmployeeProfilePersonalInformationComponent } from './page/personal-information/employee-profile-personal-information.component';
import { EmployeeProfileEducationComponent } from './page/education/employee-profile-education.component';
import { EmployeeProfileEmployeeStatusComponent } from './page/employee-status/employee-profile-employee-status.component';
import { EmployeeProfileEducationFormalPromptComponent } from './page/education/prompt-formal/profile-education-formal-prompt.component';
import { EmployeeProfileEducationNonFormalPromptComponent } from './page/education/prompt-nonformal/profile-education-nonformal-prompt.component';
import * as i0 from "@angular/core";
import * as i1 from "@nebular/theme";
const components = [
    EmployeeProfileComponent,
    EmployeeProfilePageComponent,
    EmployeeProfilePersonalInformationComponent,
    EmployeeProfileEducationComponent,
    EmployeeProfileEmployeeStatusComponent,
    EmployeeProfileEducationFormalPromptComponent,
    EmployeeProfileEducationNonFormalPromptComponent,
];
const modules = [
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NbCardModule,
    NbAlertModule,
    NbIconModule,
    NbButtonModule,
    NbAccordionModule,
    NbDialogModule.forChild(),
    NbTabsetModule,
    NbSpinnerModule,
    DoThemeModule,
    DoBaseModule,
    DoInputModule,
    DoCheckBoxModule,
    DoButtonModule,
    DoSelectModule,
    DoDatatableModule,
    DoEditorModule,
    DoLabelModule,
    DoDatePickerModule,
    DoImageModule,
    DoEmployeeProfileRoutingModule,
];
const providers = [];
export class DoEmployeeProfileModule {
}
DoEmployeeProfileModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoEmployeeProfileModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoEmployeeProfileModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoEmployeeProfileModule, declarations: [EmployeeProfileComponent,
        EmployeeProfilePageComponent,
        EmployeeProfilePersonalInformationComponent,
        EmployeeProfileEducationComponent,
        EmployeeProfileEmployeeStatusComponent,
        EmployeeProfileEducationFormalPromptComponent,
        EmployeeProfileEducationNonFormalPromptComponent], imports: [FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        NbCardModule,
        NbAlertModule,
        NbIconModule,
        NbButtonModule,
        NbAccordionModule, i1.NbDialogModule, NbTabsetModule,
        NbSpinnerModule,
        DoThemeModule,
        DoBaseModule,
        DoInputModule,
        DoCheckBoxModule,
        DoButtonModule,
        DoSelectModule,
        DoDatatableModule,
        DoEditorModule,
        DoLabelModule,
        DoDatePickerModule,
        DoImageModule,
        DoEmployeeProfileRoutingModule] });
DoEmployeeProfileModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoEmployeeProfileModule, providers: [
        ...providers,
    ], imports: [[
            ...modules,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoEmployeeProfileModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        ...modules,
                    ],
                    declarations: [
                        ...components,
                    ],
                    providers: [
                        ...providers,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tZW1wbG95ZWUtcHJvZmlsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1zeXMvc3JjL2xpYi9wcm9maWxlL2RvLWVtcGxveWVlLXByb2ZpbGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFDTCxZQUFZLEVBQ1osYUFBYSxFQUNiLFlBQVksRUFDWixjQUFjLEVBQ2QsY0FBYyxFQUNkLGNBQWMsRUFDZCxlQUFlLEVBQ2YsaUJBQWlCLEdBQ2xCLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQ0wsYUFBYSxFQUNiLGdCQUFnQixFQUNoQixjQUFjLEVBQ2QsWUFBWSxFQUNaLGNBQWMsRUFDZCxpQkFBaUIsRUFDakIsYUFBYSxFQUNiLGNBQWMsRUFDZCxrQkFBa0IsRUFDbEIsYUFBYSxHQUNkLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDM0UsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDdEYsT0FBTyxFQUFFLDJDQUEyQyxFQUFFLE1BQU0sNkVBQTZFLENBQUM7QUFDMUksT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDMUcsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFDM0gsT0FBTyxFQUFFLDZDQUE2QyxFQUFFLE1BQU0sMEVBQTBFLENBQUM7QUFDekksT0FBTyxFQUFFLGdEQUFnRCxFQUFFLE1BQU0sZ0ZBQWdGLENBQUM7OztBQUVsSixNQUFNLFVBQVUsR0FBRztJQUNqQix3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLDJDQUEyQztJQUMzQyxpQ0FBaUM7SUFDakMsc0NBQXNDO0lBQ3RDLDZDQUE2QztJQUM3QyxnREFBZ0Q7Q0FDakQsQ0FBQztBQUVGLE1BQU0sT0FBTyxHQUFHO0lBQ2QsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osY0FBYztJQUNkLGlCQUFpQjtJQUNqQixjQUFjLENBQUMsUUFBUSxFQUFFO0lBQ3pCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiw4QkFBOEI7Q0FDL0IsQ0FBQztBQUVGLE1BQU0sU0FBUyxHQUFHLEVBQ2pCLENBQUM7QUFhRixNQUFNLE9BQU8sdUJBQXVCOztxSEFBdkIsdUJBQXVCO3NIQUF2Qix1QkFBdUIsaUJBakRsQyx3QkFBd0I7UUFDeEIsNEJBQTRCO1FBQzVCLDJDQUEyQztRQUMzQyxpQ0FBaUM7UUFDakMsc0NBQXNDO1FBQ3RDLDZDQUE2QztRQUM3QyxnREFBZ0QsYUFJaEQsV0FBVztRQUNYLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsWUFBWTtRQUNaLGFBQWE7UUFDYixZQUFZO1FBQ1osY0FBYztRQUNkLGlCQUFpQixxQkFFakIsY0FBYztRQUNkLGVBQWU7UUFDZixhQUFhO1FBQ2IsWUFBWTtRQUNaLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsY0FBYztRQUNkLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLDhCQUE4QjtzSEFpQm5CLHVCQUF1QixhQUp2QjtRQUNULEdBQUcsU0FBUztLQUNiLFlBUlE7WUFDUCxHQUFHLE9BQU87U0FDWDs0RkFRVSx1QkFBdUI7a0JBWG5DLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLEdBQUcsT0FBTztxQkFDWDtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osR0FBRyxVQUFVO3FCQUNkO29CQUNELFNBQVMsRUFBRTt3QkFDVCxHQUFHLFNBQVM7cUJBQ2I7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBOYkNhcmRNb2R1bGUsXG4gIE5iQWxlcnRNb2R1bGUsXG4gIE5iSWNvbk1vZHVsZSxcbiAgTmJEaWFsb2dNb2R1bGUsXG4gIE5iQnV0dG9uTW9kdWxlLFxuICBOYlRhYnNldE1vZHVsZSxcbiAgTmJTcGlubmVyTW9kdWxlLFxuICBOYkFjY29yZGlvbk1vZHVsZSxcbn0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBEb1RoZW1lTW9kdWxlIH0gZnJvbSAnQGRvbmdrYXAvZG8tdGhlbWUnO1xuaW1wb3J0IHtcbiAgRG9JbnB1dE1vZHVsZSxcbiAgRG9DaGVja0JveE1vZHVsZSxcbiAgRG9CdXR0b25Nb2R1bGUsXG4gIERvQmFzZU1vZHVsZSxcbiAgRG9TZWxlY3RNb2R1bGUsXG4gIERvRGF0YXRhYmxlTW9kdWxlLFxuICBEb0xhYmVsTW9kdWxlLFxuICBEb0VkaXRvck1vZHVsZSxcbiAgRG9EYXRlUGlja2VyTW9kdWxlLFxuICBEb0ltYWdlTW9kdWxlLFxufSBmcm9tICdAZG9uZ2thcC9kby1zaGFyZWQnO1xuaW1wb3J0IHsgRW1wbG95ZWVQcm9maWxlQ29tcG9uZW50IH0gZnJvbSAnLi9kby1lbXBsb3llZS1wcm9maWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEb0VtcGxveWVlUHJvZmlsZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2RvLWVtcGxveWVlLXByb2ZpbGUtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgRW1wbG95ZWVQcm9maWxlUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZS9lbXBsb3llZS1wcm9maWxlLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IEVtcGxveWVlUHJvZmlsZVBlcnNvbmFsSW5mb3JtYXRpb25Db21wb25lbnQgfSBmcm9tICcuL3BhZ2UvcGVyc29uYWwtaW5mb3JtYXRpb24vZW1wbG95ZWUtcHJvZmlsZS1wZXJzb25hbC1pbmZvcm1hdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRW1wbG95ZWVQcm9maWxlRWR1Y2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlL2VkdWNhdGlvbi9lbXBsb3llZS1wcm9maWxlLWVkdWNhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRW1wbG95ZWVQcm9maWxlRW1wbG95ZWVTdGF0dXNDb21wb25lbnQgfSBmcm9tICcuL3BhZ2UvZW1wbG95ZWUtc3RhdHVzL2VtcGxveWVlLXByb2ZpbGUtZW1wbG95ZWUtc3RhdHVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFbXBsb3llZVByb2ZpbGVFZHVjYXRpb25Gb3JtYWxQcm9tcHRDb21wb25lbnQgfSBmcm9tICcuL3BhZ2UvZWR1Y2F0aW9uL3Byb21wdC1mb3JtYWwvcHJvZmlsZS1lZHVjYXRpb24tZm9ybWFsLXByb21wdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRW1wbG95ZWVQcm9maWxlRWR1Y2F0aW9uTm9uRm9ybWFsUHJvbXB0Q29tcG9uZW50IH0gZnJvbSAnLi9wYWdlL2VkdWNhdGlvbi9wcm9tcHQtbm9uZm9ybWFsL3Byb2ZpbGUtZWR1Y2F0aW9uLW5vbmZvcm1hbC1wcm9tcHQuY29tcG9uZW50JztcblxuY29uc3QgY29tcG9uZW50cyA9IFtcbiAgRW1wbG95ZWVQcm9maWxlQ29tcG9uZW50LFxuICBFbXBsb3llZVByb2ZpbGVQYWdlQ29tcG9uZW50LFxuICBFbXBsb3llZVByb2ZpbGVQZXJzb25hbEluZm9ybWF0aW9uQ29tcG9uZW50LFxuICBFbXBsb3llZVByb2ZpbGVFZHVjYXRpb25Db21wb25lbnQsXG4gIEVtcGxveWVlUHJvZmlsZUVtcGxveWVlU3RhdHVzQ29tcG9uZW50LFxuICBFbXBsb3llZVByb2ZpbGVFZHVjYXRpb25Gb3JtYWxQcm9tcHRDb21wb25lbnQsXG4gIEVtcGxveWVlUHJvZmlsZUVkdWNhdGlvbk5vbkZvcm1hbFByb21wdENvbXBvbmVudCxcbl07XG5cbmNvbnN0IG1vZHVsZXMgPSBbXG4gIEZvcm1zTW9kdWxlLFxuICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICBUcmFuc2xhdGVNb2R1bGUsXG4gIE5iQ2FyZE1vZHVsZSxcbiAgTmJBbGVydE1vZHVsZSxcbiAgTmJJY29uTW9kdWxlLFxuICBOYkJ1dHRvbk1vZHVsZSxcbiAgTmJBY2NvcmRpb25Nb2R1bGUsXG4gIE5iRGlhbG9nTW9kdWxlLmZvckNoaWxkKCksXG4gIE5iVGFic2V0TW9kdWxlLFxuICBOYlNwaW5uZXJNb2R1bGUsXG4gIERvVGhlbWVNb2R1bGUsXG4gIERvQmFzZU1vZHVsZSxcbiAgRG9JbnB1dE1vZHVsZSxcbiAgRG9DaGVja0JveE1vZHVsZSxcbiAgRG9CdXR0b25Nb2R1bGUsXG4gIERvU2VsZWN0TW9kdWxlLFxuICBEb0RhdGF0YWJsZU1vZHVsZSxcbiAgRG9FZGl0b3JNb2R1bGUsXG4gIERvTGFiZWxNb2R1bGUsXG4gIERvRGF0ZVBpY2tlck1vZHVsZSxcbiAgRG9JbWFnZU1vZHVsZSxcbiAgRG9FbXBsb3llZVByb2ZpbGVSb3V0aW5nTW9kdWxlLFxuXTtcblxuY29uc3QgcHJvdmlkZXJzID0gW1xuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIC4uLm1vZHVsZXMsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLmNvbXBvbmVudHMsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIC4uLnByb3ZpZGVycyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRG9FbXBsb3llZVByb2ZpbGVNb2R1bGUgeyB9XG4iXX0=