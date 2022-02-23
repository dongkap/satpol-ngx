import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbAlertModule, NbIconModule, NbDialogModule, NbButtonModule, NbTabsetModule, NbSpinnerModule, NbAccordionModule, } from '@nebular/theme';
import { TranslateModule } from '@ngx-translate/core';
import { DoThemeModule } from '@dongkap/do-theme';
import { DoInputModule, DoCheckBoxModule, DoButtonModule, DoBaseModule, DoSelectModule, DoDatatableModule, DoEditorModule, DoWizardModule, DoDatePickerModule, DoRadioModule, DoLabelModule, } from '@dongkap/do-shared';
import { MgmtEmployeeComponent } from './do-mgmt-employee.component';
import { DoMgmtEmployeeRoutingModule } from './do-mgmt-employee-routing.module';
import { EmployeeService } from './services/employee.service';
import { EmployeeListPageComponent } from './list/employee-list-page.component';
import { EmployeeAddPageComponent } from './add/employee-add-page.component';
import { EmployeeAddPersonalInformationComponent } from './add/personal-information/employee-add-personal-information.component';
import { EmployeeAddEducationComponent } from './add/education/employee-add-education.component';
import { EmployeeAddEmployeeStatusComponent } from './add/employee-status/employee-add-employee-status.component';
import { EmployeeEditPageComponent } from './edit/employee-edit-page.component';
import { EmployeeEditPersonalInformationComponent } from './edit/personal-information/employee-edit-personal-information.component';
import { EmployeeEditEducationComponent } from './edit/education/employee-edit-education.component';
import { EmployeeEditEmployeeStatusComponent } from './edit/employee-status/employee-edit-employee-status.component';
import { EmployeeEducationFormalPromptComponent } from './edit/education/prompt-formal/education-formal-prompt.component';
import { EmployeeEducationNonFormalPromptComponent } from './edit/education/prompt-nonformal/education-nonformal-prompt.component';
import * as i0 from "@angular/core";
import * as i1 from "@nebular/theme";
import * as i2 from "@dongkap/do-shared";
const components = [
    MgmtEmployeeComponent,
    EmployeeListPageComponent,
    EmployeeAddPageComponent,
    EmployeeAddPersonalInformationComponent,
    EmployeeAddEducationComponent,
    EmployeeAddEmployeeStatusComponent,
    EmployeeEditPageComponent,
    EmployeeEditPersonalInformationComponent,
    EmployeeEditEducationComponent,
    EmployeeEditEmployeeStatusComponent,
    EmployeeEducationFormalPromptComponent,
    EmployeeEducationNonFormalPromptComponent,
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
    DoDatePickerModule,
    DoRadioModule,
    DoLabelModule,
    DoWizardModule.forRoot(),
    DoMgmtEmployeeRoutingModule,
];
const providers = [
    EmployeeService,
];
export class DoMgmtEmployeeModule {
}
DoMgmtEmployeeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtEmployeeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoMgmtEmployeeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtEmployeeModule, declarations: [MgmtEmployeeComponent,
        EmployeeListPageComponent,
        EmployeeAddPageComponent,
        EmployeeAddPersonalInformationComponent,
        EmployeeAddEducationComponent,
        EmployeeAddEmployeeStatusComponent,
        EmployeeEditPageComponent,
        EmployeeEditPersonalInformationComponent,
        EmployeeEditEducationComponent,
        EmployeeEditEmployeeStatusComponent,
        EmployeeEducationFormalPromptComponent,
        EmployeeEducationNonFormalPromptComponent], imports: [FormsModule,
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
        DoDatePickerModule,
        DoRadioModule,
        DoLabelModule, i2.DoWizardModule, DoMgmtEmployeeRoutingModule] });
DoMgmtEmployeeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtEmployeeModule, providers: [
        ...providers,
    ], imports: [[
            ...modules,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtEmployeeModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tbWdtdC1lbXBsb3llZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1zeXMvc3JjL2xpYi9lbXBsb3llZS9kby1tZ210LWVtcGxveWVlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQ0wsWUFBWSxFQUNaLGFBQWEsRUFDYixZQUFZLEVBQ1osY0FBYyxFQUNkLGNBQWMsRUFDZCxjQUFjLEVBQ2QsZUFBZSxFQUNmLGlCQUFpQixHQUNsQixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUNMLGFBQWEsRUFDYixnQkFBZ0IsRUFDaEIsY0FBYyxFQUNkLFlBQVksRUFDWixjQUFjLEVBQ2QsaUJBQWlCLEVBQ2pCLGNBQWMsRUFDZCxjQUFjLEVBQ2Qsa0JBQWtCLEVBQ2xCLGFBQWEsRUFDYixhQUFhLEdBQ2QsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDN0UsT0FBTyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDakksT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDakcsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sOERBQThELENBQUM7QUFDbEgsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHdDQUF3QyxFQUFFLE1BQU0sMEVBQTBFLENBQUM7QUFDcEksT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDcEcsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDckgsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDMUgsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sd0VBQXdFLENBQUM7Ozs7QUFFbkksTUFBTSxVQUFVLEdBQUc7SUFDakIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsdUNBQXVDO0lBQ3ZDLDZCQUE2QjtJQUM3QixrQ0FBa0M7SUFDbEMseUJBQXlCO0lBQ3pCLHdDQUF3QztJQUN4Qyw4QkFBOEI7SUFDOUIsbUNBQW1DO0lBQ25DLHNDQUFzQztJQUN0Qyx5Q0FBeUM7Q0FDMUMsQ0FBQztBQUVGLE1BQU0sT0FBTyxHQUFHO0lBQ2QsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osY0FBYztJQUNkLGlCQUFpQjtJQUNqQixjQUFjLENBQUMsUUFBUSxFQUFFO0lBQ3pCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGFBQWE7SUFDYixjQUFjLENBQUMsT0FBTyxFQUFFO0lBQ3hCLDJCQUEyQjtDQUM1QixDQUFDO0FBRUYsTUFBTSxTQUFTLEdBQUc7SUFDaEIsZUFBZTtDQUNoQixDQUFDO0FBYUYsTUFBTSxPQUFPLG9CQUFvQjs7a0hBQXBCLG9CQUFvQjttSEFBcEIsb0JBQW9CLGlCQXhEL0IscUJBQXFCO1FBQ3JCLHlCQUF5QjtRQUN6Qix3QkFBd0I7UUFDeEIsdUNBQXVDO1FBQ3ZDLDZCQUE2QjtRQUM3QixrQ0FBa0M7UUFDbEMseUJBQXlCO1FBQ3pCLHdDQUF3QztRQUN4Qyw4QkFBOEI7UUFDOUIsbUNBQW1DO1FBQ25DLHNDQUFzQztRQUN0Qyx5Q0FBeUMsYUFJekMsV0FBVztRQUNYLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsWUFBWTtRQUNaLGFBQWE7UUFDYixZQUFZO1FBQ1osY0FBYztRQUNkLGlCQUFpQixxQkFFakIsY0FBYztRQUNkLGVBQWU7UUFDZixhQUFhO1FBQ2IsWUFBWTtRQUNaLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsY0FBYztRQUNkLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsYUFBYSxxQkFFYiwyQkFBMkI7bUhBa0JoQixvQkFBb0IsYUFKcEI7UUFDVCxHQUFHLFNBQVM7S0FDYixZQVJRO1lBQ1AsR0FBRyxPQUFPO1NBQ1g7NEZBUVUsb0JBQW9CO2tCQVhoQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxHQUFHLE9BQU87cUJBQ1g7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLEdBQUcsVUFBVTtxQkFDZDtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsR0FBRyxTQUFTO3FCQUNiO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgTmJDYXJkTW9kdWxlLFxuICBOYkFsZXJ0TW9kdWxlLFxuICBOYkljb25Nb2R1bGUsXG4gIE5iRGlhbG9nTW9kdWxlLFxuICBOYkJ1dHRvbk1vZHVsZSxcbiAgTmJUYWJzZXRNb2R1bGUsXG4gIE5iU3Bpbm5lck1vZHVsZSxcbiAgTmJBY2NvcmRpb25Nb2R1bGUsXG59IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgRG9UaGVtZU1vZHVsZSB9IGZyb20gJ0Bkb25na2FwL2RvLXRoZW1lJztcbmltcG9ydCB7XG4gIERvSW5wdXRNb2R1bGUsXG4gIERvQ2hlY2tCb3hNb2R1bGUsXG4gIERvQnV0dG9uTW9kdWxlLFxuICBEb0Jhc2VNb2R1bGUsXG4gIERvU2VsZWN0TW9kdWxlLFxuICBEb0RhdGF0YWJsZU1vZHVsZSxcbiAgRG9FZGl0b3JNb2R1bGUsXG4gIERvV2l6YXJkTW9kdWxlLFxuICBEb0RhdGVQaWNrZXJNb2R1bGUsXG4gIERvUmFkaW9Nb2R1bGUsXG4gIERvTGFiZWxNb2R1bGUsXG59IGZyb20gJ0Bkb25na2FwL2RvLXNoYXJlZCc7XG5pbXBvcnQgeyBNZ210RW1wbG95ZWVDb21wb25lbnQgfSBmcm9tICcuL2RvLW1nbXQtZW1wbG95ZWUuY29tcG9uZW50JztcbmltcG9ydCB7IERvTWdtdEVtcGxveWVlUm91dGluZ01vZHVsZSB9IGZyb20gJy4vZG8tbWdtdC1lbXBsb3llZS1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBFbXBsb3llZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2VtcGxveWVlLnNlcnZpY2UnO1xuaW1wb3J0IHsgRW1wbG95ZWVMaXN0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vbGlzdC9lbXBsb3llZS1saXN0LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IEVtcGxveWVlQWRkUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vYWRkL2VtcGxveWVlLWFkZC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFbXBsb3llZUFkZFBlcnNvbmFsSW5mb3JtYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2FkZC9wZXJzb25hbC1pbmZvcm1hdGlvbi9lbXBsb3llZS1hZGQtcGVyc29uYWwtaW5mb3JtYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IEVtcGxveWVlQWRkRWR1Y2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9hZGQvZWR1Y2F0aW9uL2VtcGxveWVlLWFkZC1lZHVjYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IEVtcGxveWVlQWRkRW1wbG95ZWVTdGF0dXNDb21wb25lbnQgfSBmcm9tICcuL2FkZC9lbXBsb3llZS1zdGF0dXMvZW1wbG95ZWUtYWRkLWVtcGxveWVlLXN0YXR1cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRW1wbG95ZWVFZGl0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vZWRpdC9lbXBsb3llZS1lZGl0LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IEVtcGxveWVlRWRpdFBlcnNvbmFsSW5mb3JtYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2VkaXQvcGVyc29uYWwtaW5mb3JtYXRpb24vZW1wbG95ZWUtZWRpdC1wZXJzb25hbC1pbmZvcm1hdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRW1wbG95ZWVFZGl0RWR1Y2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0L2VkdWNhdGlvbi9lbXBsb3llZS1lZGl0LWVkdWNhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRW1wbG95ZWVFZGl0RW1wbG95ZWVTdGF0dXNDb21wb25lbnQgfSBmcm9tICcuL2VkaXQvZW1wbG95ZWUtc3RhdHVzL2VtcGxveWVlLWVkaXQtZW1wbG95ZWUtc3RhdHVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFbXBsb3llZUVkdWNhdGlvbkZvcm1hbFByb21wdENvbXBvbmVudCB9IGZyb20gJy4vZWRpdC9lZHVjYXRpb24vcHJvbXB0LWZvcm1hbC9lZHVjYXRpb24tZm9ybWFsLXByb21wdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRW1wbG95ZWVFZHVjYXRpb25Ob25Gb3JtYWxQcm9tcHRDb21wb25lbnQgfSBmcm9tICcuL2VkaXQvZWR1Y2F0aW9uL3Byb21wdC1ub25mb3JtYWwvZWR1Y2F0aW9uLW5vbmZvcm1hbC1wcm9tcHQuY29tcG9uZW50JztcblxuY29uc3QgY29tcG9uZW50cyA9IFtcbiAgTWdtdEVtcGxveWVlQ29tcG9uZW50LFxuICBFbXBsb3llZUxpc3RQYWdlQ29tcG9uZW50LFxuICBFbXBsb3llZUFkZFBhZ2VDb21wb25lbnQsXG4gIEVtcGxveWVlQWRkUGVyc29uYWxJbmZvcm1hdGlvbkNvbXBvbmVudCxcbiAgRW1wbG95ZWVBZGRFZHVjYXRpb25Db21wb25lbnQsXG4gIEVtcGxveWVlQWRkRW1wbG95ZWVTdGF0dXNDb21wb25lbnQsXG4gIEVtcGxveWVlRWRpdFBhZ2VDb21wb25lbnQsXG4gIEVtcGxveWVlRWRpdFBlcnNvbmFsSW5mb3JtYXRpb25Db21wb25lbnQsXG4gIEVtcGxveWVlRWRpdEVkdWNhdGlvbkNvbXBvbmVudCxcbiAgRW1wbG95ZWVFZGl0RW1wbG95ZWVTdGF0dXNDb21wb25lbnQsXG4gIEVtcGxveWVlRWR1Y2F0aW9uRm9ybWFsUHJvbXB0Q29tcG9uZW50LFxuICBFbXBsb3llZUVkdWNhdGlvbk5vbkZvcm1hbFByb21wdENvbXBvbmVudCxcbl07XG5cbmNvbnN0IG1vZHVsZXMgPSBbXG4gIEZvcm1zTW9kdWxlLFxuICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICBUcmFuc2xhdGVNb2R1bGUsXG4gIE5iQ2FyZE1vZHVsZSxcbiAgTmJBbGVydE1vZHVsZSxcbiAgTmJJY29uTW9kdWxlLFxuICBOYkJ1dHRvbk1vZHVsZSxcbiAgTmJBY2NvcmRpb25Nb2R1bGUsXG4gIE5iRGlhbG9nTW9kdWxlLmZvckNoaWxkKCksXG4gIE5iVGFic2V0TW9kdWxlLFxuICBOYlNwaW5uZXJNb2R1bGUsXG4gIERvVGhlbWVNb2R1bGUsXG4gIERvQmFzZU1vZHVsZSxcbiAgRG9JbnB1dE1vZHVsZSxcbiAgRG9DaGVja0JveE1vZHVsZSxcbiAgRG9CdXR0b25Nb2R1bGUsXG4gIERvU2VsZWN0TW9kdWxlLFxuICBEb0RhdGF0YWJsZU1vZHVsZSxcbiAgRG9FZGl0b3JNb2R1bGUsXG4gIERvRGF0ZVBpY2tlck1vZHVsZSxcbiAgRG9SYWRpb01vZHVsZSxcbiAgRG9MYWJlbE1vZHVsZSxcbiAgRG9XaXphcmRNb2R1bGUuZm9yUm9vdCgpLFxuICBEb01nbXRFbXBsb3llZVJvdXRpbmdNb2R1bGUsXG5dO1xuXG5jb25zdCBwcm92aWRlcnMgPSBbXG4gIEVtcGxveWVlU2VydmljZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICAuLi5tb2R1bGVzLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5jb21wb25lbnRzLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICAuLi5wcm92aWRlcnMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIERvTWdtdEVtcGxveWVlTW9kdWxlIHsgfVxuIl19