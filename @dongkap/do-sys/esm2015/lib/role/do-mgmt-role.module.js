import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbAlertModule, NbIconModule, NbDialogModule, NbButtonModule, NbTabsetModule, NbSpinnerModule, } from '@nebular/theme';
import { TranslateModule } from '@ngx-translate/core';
import { TreeNgxModule } from 'tree-ngx';
import { DoThemeModule } from '@dongkap/do-theme';
import { DoInputModule, DoCheckBoxModule, DoButtonModule, DoBaseModule, DoSelectModule, DoDatatableModule, } from '@dongkap/do-shared';
import { MgmtRoleComponent } from './do-mgmt-role.component';
import { DoMgmtRoleRoutingModule } from './do-mgmt-role-routing.module';
import { RoleListPageComponent } from './list/role-list-page.component';
import { RoleService } from './services/role.service';
import { RoleAddEditPageComponent } from './add-edit/role-add-edit-page.component';
import { RoleExtraPageComponent } from './add-edit/extra/role-extra-page.component';
import { RoleMainPageComponent } from './add-edit/main/role-main-page.component';
import * as i0 from "@angular/core";
import * as i1 from "@nebular/theme";
const components = [
    MgmtRoleComponent,
    RoleListPageComponent,
    RoleAddEditPageComponent,
    RoleExtraPageComponent,
    RoleMainPageComponent,
];
const modules = [
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NbCardModule,
    NbAlertModule,
    NbIconModule,
    NbButtonModule,
    NbDialogModule.forChild(),
    NbTabsetModule,
    NbSpinnerModule,
    TreeNgxModule,
    DoThemeModule,
    DoInputModule,
    DoCheckBoxModule,
    DoButtonModule,
    DoBaseModule,
    DoSelectModule,
    DoDatatableModule,
    DoMgmtRoleRoutingModule,
];
const providers = [
    RoleService,
];
export class DoMgmtRoleModule {
}
DoMgmtRoleModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtRoleModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoMgmtRoleModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtRoleModule, declarations: [MgmtRoleComponent,
        RoleListPageComponent,
        RoleAddEditPageComponent,
        RoleExtraPageComponent,
        RoleMainPageComponent], imports: [FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        NbCardModule,
        NbAlertModule,
        NbIconModule,
        NbButtonModule, i1.NbDialogModule, NbTabsetModule,
        NbSpinnerModule,
        TreeNgxModule,
        DoThemeModule,
        DoInputModule,
        DoCheckBoxModule,
        DoButtonModule,
        DoBaseModule,
        DoSelectModule,
        DoDatatableModule,
        DoMgmtRoleRoutingModule] });
DoMgmtRoleModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtRoleModule, providers: [
        ...providers,
    ], imports: [[
            ...modules,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtRoleModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tbWdtdC1yb2xlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXN5cy9zcmMvbGliL3JvbGUvZG8tbWdtdC1yb2xlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQ0wsWUFBWSxFQUNaLGFBQWEsRUFDYixZQUFZLEVBQ1osY0FBYyxFQUNkLGNBQWMsRUFDZCxjQUFjLEVBQ2QsZUFBZSxHQUNoQixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQ0wsYUFBYSxFQUNiLGdCQUFnQixFQUNoQixjQUFjLEVBQ2QsWUFBWSxFQUNaLGNBQWMsRUFDZCxpQkFBaUIsR0FDbEIsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDcEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMENBQTBDLENBQUM7OztBQUVqRixNQUFNLFVBQVUsR0FBRztJQUNqQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIscUJBQXFCO0NBQ3RCLENBQUM7QUFFRixNQUFNLE9BQU8sR0FBRztJQUNkLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGNBQWM7SUFDZCxjQUFjLENBQUMsUUFBUSxFQUFFO0lBQ3pCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxZQUFZO0lBQ1osY0FBYztJQUNkLGlCQUFpQjtJQUNqQix1QkFBdUI7Q0FDeEIsQ0FBQztBQUVGLE1BQU0sU0FBUyxHQUFHO0lBQ2hCLFdBQVc7Q0FDWixDQUFDO0FBYUYsTUFBTSxPQUFPLGdCQUFnQjs7OEdBQWhCLGdCQUFnQjsrR0FBaEIsZ0JBQWdCLGlCQTVDM0IsaUJBQWlCO1FBQ2pCLHFCQUFxQjtRQUNyQix3QkFBd0I7UUFDeEIsc0JBQXNCO1FBQ3RCLHFCQUFxQixhQUlyQixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixZQUFZO1FBQ1osYUFBYTtRQUNiLFlBQVk7UUFDWixjQUFjLHFCQUVkLGNBQWM7UUFDZCxlQUFlO1FBQ2YsYUFBYTtRQUNiLGFBQWE7UUFDYixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxZQUFZO1FBQ1osY0FBYztRQUNkLGlCQUFpQjtRQUNqQix1QkFBdUI7K0dBa0JaLGdCQUFnQixhQUpoQjtRQUNULEdBQUcsU0FBUztLQUNiLFlBUlE7WUFDUCxHQUFHLE9BQU87U0FDWDs0RkFRVSxnQkFBZ0I7a0JBWDVCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLEdBQUcsT0FBTztxQkFDWDtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osR0FBRyxVQUFVO3FCQUNkO29CQUNELFNBQVMsRUFBRTt3QkFDVCxHQUFHLFNBQVM7cUJBQ2I7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBOYkNhcmRNb2R1bGUsXG4gIE5iQWxlcnRNb2R1bGUsXG4gIE5iSWNvbk1vZHVsZSxcbiAgTmJEaWFsb2dNb2R1bGUsXG4gIE5iQnV0dG9uTW9kdWxlLFxuICBOYlRhYnNldE1vZHVsZSxcbiAgTmJTcGlubmVyTW9kdWxlLFxufSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IFRyZWVOZ3hNb2R1bGUgfSBmcm9tICd0cmVlLW5neCc7XG5pbXBvcnQgeyBEb1RoZW1lTW9kdWxlIH0gZnJvbSAnQGRvbmdrYXAvZG8tdGhlbWUnO1xuaW1wb3J0IHtcbiAgRG9JbnB1dE1vZHVsZSxcbiAgRG9DaGVja0JveE1vZHVsZSxcbiAgRG9CdXR0b25Nb2R1bGUsXG4gIERvQmFzZU1vZHVsZSxcbiAgRG9TZWxlY3RNb2R1bGUsXG4gIERvRGF0YXRhYmxlTW9kdWxlLFxufSBmcm9tICdAZG9uZ2thcC9kby1zaGFyZWQnO1xuaW1wb3J0IHsgTWdtdFJvbGVDb21wb25lbnQgfSBmcm9tICcuL2RvLW1nbXQtcm9sZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRG9NZ210Um9sZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2RvLW1nbXQtcm9sZS1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBSb2xlTGlzdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2xpc3Qvcm9sZS1saXN0LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFJvbGVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9yb2xlLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm9sZUFkZEVkaXRQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9hZGQtZWRpdC9yb2xlLWFkZC1lZGl0LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFJvbGVFeHRyYVBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2FkZC1lZGl0L2V4dHJhL3JvbGUtZXh0cmEtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUm9sZU1haW5QYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9hZGQtZWRpdC9tYWluL3JvbGUtbWFpbi1wYWdlLmNvbXBvbmVudCc7XG5cbmNvbnN0IGNvbXBvbmVudHMgPSBbXG4gIE1nbXRSb2xlQ29tcG9uZW50LFxuICBSb2xlTGlzdFBhZ2VDb21wb25lbnQsXG4gIFJvbGVBZGRFZGl0UGFnZUNvbXBvbmVudCxcbiAgUm9sZUV4dHJhUGFnZUNvbXBvbmVudCxcbiAgUm9sZU1haW5QYWdlQ29tcG9uZW50LFxuXTtcblxuY29uc3QgbW9kdWxlcyA9IFtcbiAgRm9ybXNNb2R1bGUsXG4gIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIFRyYW5zbGF0ZU1vZHVsZSxcbiAgTmJDYXJkTW9kdWxlLFxuICBOYkFsZXJ0TW9kdWxlLFxuICBOYkljb25Nb2R1bGUsXG4gIE5iQnV0dG9uTW9kdWxlLFxuICBOYkRpYWxvZ01vZHVsZS5mb3JDaGlsZCgpLFxuICBOYlRhYnNldE1vZHVsZSxcbiAgTmJTcGlubmVyTW9kdWxlLFxuICBUcmVlTmd4TW9kdWxlLFxuICBEb1RoZW1lTW9kdWxlLFxuICBEb0lucHV0TW9kdWxlLFxuICBEb0NoZWNrQm94TW9kdWxlLFxuICBEb0J1dHRvbk1vZHVsZSxcbiAgRG9CYXNlTW9kdWxlLFxuICBEb1NlbGVjdE1vZHVsZSxcbiAgRG9EYXRhdGFibGVNb2R1bGUsXG4gIERvTWdtdFJvbGVSb3V0aW5nTW9kdWxlLFxuXTtcblxuY29uc3QgcHJvdmlkZXJzID0gW1xuICBSb2xlU2VydmljZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICAuLi5tb2R1bGVzLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5jb21wb25lbnRzLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICAuLi5wcm92aWRlcnMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIERvTWdtdFJvbGVNb2R1bGUgeyB9XG4iXX0=