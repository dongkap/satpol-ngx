import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbAlertModule, NbIconModule, NbDialogModule, NbButtonModule, NbTabsetModule, NbSpinnerModule, NbAccordionModule, } from '@nebular/theme';
import { TranslateModule } from '@ngx-translate/core';
import { DoThemeModule } from '@dongkap/do-theme';
import { DoInputModule, DoCheckBoxModule, DoButtonModule, DoBaseModule, DoSelectModule, DoDatatableModule, DoLabelModule, } from '@dongkap/do-shared';
import { MgmtJobPlacementComponent } from './do-mgmt-job-placement.component';
import { DoMgmtJobPlacementRoutingModule } from './do-mgmt-job-placement-routing.module';
import { JobPlacementService } from './services/job-placement.service';
import { JobPlacementListPageComponent } from './list/job-placement-list-page.component';
import { JobPlacementEditPageComponent } from './edit/job-placement-edit-page.component';
import { EmployeePromptComponent } from './edit/prompt-employee/employee-prompt.component';
import * as i0 from "@angular/core";
import * as i1 from "@nebular/theme";
const components = [
    MgmtJobPlacementComponent,
    JobPlacementListPageComponent,
    JobPlacementEditPageComponent,
    EmployeePromptComponent,
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
    DoLabelModule,
    DoMgmtJobPlacementRoutingModule,
];
const providers = [
    JobPlacementService,
];
export class DoMgmtJobPlacementModule {
}
DoMgmtJobPlacementModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtJobPlacementModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoMgmtJobPlacementModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtJobPlacementModule, declarations: [MgmtJobPlacementComponent,
        JobPlacementListPageComponent,
        JobPlacementEditPageComponent,
        EmployeePromptComponent], imports: [FormsModule,
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
        DoLabelModule,
        DoMgmtJobPlacementRoutingModule] });
DoMgmtJobPlacementModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtJobPlacementModule, providers: [
        ...providers,
    ], imports: [[
            ...modules,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtJobPlacementModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tbWdtdC1qb2ItcGxhY2VtZW50Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXN5cy9zcmMvbGliL2pvYi1wbGFjZW1lbnQvZG8tbWdtdC1qb2ItcGxhY2VtZW50Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQ0wsWUFBWSxFQUNaLGFBQWEsRUFDYixZQUFZLEVBQ1osY0FBYyxFQUNkLGNBQWMsRUFDZCxjQUFjLEVBQ2QsZUFBZSxFQUNmLGlCQUFpQixHQUNsQixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUNMLGFBQWEsRUFDYixnQkFBZ0IsRUFDaEIsY0FBYyxFQUNkLFlBQVksRUFDWixjQUFjLEVBQ2QsaUJBQWlCLEVBQ2pCLGFBQWEsR0FDZCxNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDOzs7QUFFM0YsTUFBTSxVQUFVLEdBQUc7SUFDakIseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0IsdUJBQXVCO0NBQ3hCLENBQUM7QUFFRixNQUFNLE9BQU8sR0FBRztJQUNkLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsY0FBYyxDQUFDLFFBQVEsRUFBRTtJQUN6QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsK0JBQStCO0NBQ2hDLENBQUM7QUFFRixNQUFNLFNBQVMsR0FBRztJQUNoQixtQkFBbUI7Q0FDcEIsQ0FBQztBQWFGLE1BQU0sT0FBTyx3QkFBd0I7O3NIQUF4Qix3QkFBd0I7dUhBQXhCLHdCQUF3QixpQkE1Q25DLHlCQUF5QjtRQUN6Qiw2QkFBNkI7UUFDN0IsNkJBQTZCO1FBQzdCLHVCQUF1QixhQUl2QixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixZQUFZO1FBQ1osYUFBYTtRQUNiLFlBQVk7UUFDWixjQUFjO1FBQ2QsaUJBQWlCLHFCQUVqQixjQUFjO1FBQ2QsZUFBZTtRQUNmLGFBQWE7UUFDYixZQUFZO1FBQ1osYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2IsK0JBQStCO3VIQWtCcEIsd0JBQXdCLGFBSnhCO1FBQ1QsR0FBRyxTQUFTO0tBQ2IsWUFSUTtZQUNQLEdBQUcsT0FBTztTQUNYOzRGQVFVLHdCQUF3QjtrQkFYcEMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsR0FBRyxPQUFPO3FCQUNYO29CQUNELFlBQVksRUFBRTt3QkFDWixHQUFHLFVBQVU7cUJBQ2Q7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULEdBQUcsU0FBUztxQkFDYjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIE5iQ2FyZE1vZHVsZSxcbiAgTmJBbGVydE1vZHVsZSxcbiAgTmJJY29uTW9kdWxlLFxuICBOYkRpYWxvZ01vZHVsZSxcbiAgTmJCdXR0b25Nb2R1bGUsXG4gIE5iVGFic2V0TW9kdWxlLFxuICBOYlNwaW5uZXJNb2R1bGUsXG4gIE5iQWNjb3JkaW9uTW9kdWxlLFxufSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IERvVGhlbWVNb2R1bGUgfSBmcm9tICdAZG9uZ2thcC9kby10aGVtZSc7XG5pbXBvcnQge1xuICBEb0lucHV0TW9kdWxlLFxuICBEb0NoZWNrQm94TW9kdWxlLFxuICBEb0J1dHRvbk1vZHVsZSxcbiAgRG9CYXNlTW9kdWxlLFxuICBEb1NlbGVjdE1vZHVsZSxcbiAgRG9EYXRhdGFibGVNb2R1bGUsXG4gIERvTGFiZWxNb2R1bGUsXG59IGZyb20gJ0Bkb25na2FwL2RvLXNoYXJlZCc7XG5pbXBvcnQgeyBNZ210Sm9iUGxhY2VtZW50Q29tcG9uZW50IH0gZnJvbSAnLi9kby1tZ210LWpvYi1wbGFjZW1lbnQuY29tcG9uZW50JztcbmltcG9ydCB7IERvTWdtdEpvYlBsYWNlbWVudFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2RvLW1nbXQtam9iLXBsYWNlbWVudC1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBKb2JQbGFjZW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9qb2ItcGxhY2VtZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgSm9iUGxhY2VtZW50TGlzdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2xpc3Qvam9iLXBsYWNlbWVudC1saXN0LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IEpvYlBsYWNlbWVudEVkaXRQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0L2pvYi1wbGFjZW1lbnQtZWRpdC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFbXBsb3llZVByb21wdENvbXBvbmVudCB9IGZyb20gJy4vZWRpdC9wcm9tcHQtZW1wbG95ZWUvZW1wbG95ZWUtcHJvbXB0LmNvbXBvbmVudCc7XG5cbmNvbnN0IGNvbXBvbmVudHMgPSBbXG4gIE1nbXRKb2JQbGFjZW1lbnRDb21wb25lbnQsXG4gIEpvYlBsYWNlbWVudExpc3RQYWdlQ29tcG9uZW50LFxuICBKb2JQbGFjZW1lbnRFZGl0UGFnZUNvbXBvbmVudCxcbiAgRW1wbG95ZWVQcm9tcHRDb21wb25lbnQsXG5dO1xuXG5jb25zdCBtb2R1bGVzID0gW1xuICBGb3Jtc01vZHVsZSxcbiAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgVHJhbnNsYXRlTW9kdWxlLFxuICBOYkNhcmRNb2R1bGUsXG4gIE5iQWxlcnRNb2R1bGUsXG4gIE5iSWNvbk1vZHVsZSxcbiAgTmJCdXR0b25Nb2R1bGUsXG4gIE5iQWNjb3JkaW9uTW9kdWxlLFxuICBOYkRpYWxvZ01vZHVsZS5mb3JDaGlsZCgpLFxuICBOYlRhYnNldE1vZHVsZSxcbiAgTmJTcGlubmVyTW9kdWxlLFxuICBEb1RoZW1lTW9kdWxlLFxuICBEb0Jhc2VNb2R1bGUsXG4gIERvSW5wdXRNb2R1bGUsXG4gIERvQ2hlY2tCb3hNb2R1bGUsXG4gIERvQnV0dG9uTW9kdWxlLFxuICBEb1NlbGVjdE1vZHVsZSxcbiAgRG9EYXRhdGFibGVNb2R1bGUsXG4gIERvTGFiZWxNb2R1bGUsXG4gIERvTWdtdEpvYlBsYWNlbWVudFJvdXRpbmdNb2R1bGUsXG5dO1xuXG5jb25zdCBwcm92aWRlcnMgPSBbXG4gIEpvYlBsYWNlbWVudFNlcnZpY2UsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgLi4ubW9kdWxlcyxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uY29tcG9uZW50cyxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgLi4ucHJvdmlkZXJzLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBEb01nbXRKb2JQbGFjZW1lbnRNb2R1bGUgeyB9XG4iXX0=