import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuardChildService } from '@dongkap/do-auth';
import { MgmtEmployeeComponent } from './do-mgmt-employee.component';
import { EmployeeListPageComponent } from './list/employee-list-page.component';
import { EmployeeAddPageComponent } from './add/employee-add-page.component';
import { EmployeeEditPageComponent } from './edit/employee-edit-page.component';
import { EmployeeAddPersonalInformationComponent } from './add/personal-information/employee-add-personal-information.component';
import { EmployeeAddEducationComponent } from './add/education/employee-add-education.component';
import { EmployeeAddEmployeeStatusComponent } from './add/employee-status/employee-add-employee-status.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [{
        path: '',
        component: MgmtEmployeeComponent,
        canActivateChild: [AuthGuardChildService],
        children: [
            {
                path: '',
                component: EmployeeListPageComponent,
                data: {
                    code: '#MANAGEMENT-EMPLOYEE-PAGE',
                },
            },
            {
                path: 'add',
                component: EmployeeAddPageComponent,
                data: {
                    name: 'Manage Employee',
                    code: '#MANAGEMENT-EMPLOYEE-PAGE',
                    baseUrl: '/app/mgmt/employee',
                },
                children: [
                    {
                        path: 'personal-information',
                        component: EmployeeAddPersonalInformationComponent,
                        data: {
                            title: 'Personal Information',
                            code: '#MANAGEMENT-EMPLOYEE-PAGE',
                        },
                    },
                    {
                        path: 'education',
                        component: EmployeeAddEducationComponent,
                        data: {
                            title: 'Last Education',
                            code: '#MANAGEMENT-EMPLOYEE-PAGE',
                        },
                    },
                    {
                        path: 'employee-status',
                        component: EmployeeAddEmployeeStatusComponent,
                        data: {
                            title: 'Employee Status',
                            code: '#MANAGEMENT-EMPLOYEE-PAGE',
                        },
                    },
                    {
                        path: '**',
                        redirectTo: 'personal-information',
                    },
                ],
            },
            {
                path: 'edit',
                component: EmployeeEditPageComponent,
                data: {
                    code: '#MANAGEMENT-EMPLOYEE-PAGE',
                },
            },
            {
                path: '',
                redirectTo: '',
                pathMatch: 'full',
            },
        ],
    }];
export class DoMgmtEmployeeRoutingModule {
}
DoMgmtEmployeeRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtEmployeeRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoMgmtEmployeeRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtEmployeeRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
DoMgmtEmployeeRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtEmployeeRoutingModule, imports: [[RouterModule.forChild(routes)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtEmployeeRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tbWdtdC1lbXBsb3llZS1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXN5cy9zcmMvbGliL2VtcGxveWVlL2RvLW1nbXQtZW1wbG95ZWUtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDekQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDckUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDN0UsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDakksT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDakcsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sOERBQThELENBQUM7OztBQUVsSCxNQUFNLE1BQU0sR0FBVyxDQUFDO1FBQ3RCLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLHFCQUFxQjtRQUNoQyxnQkFBZ0IsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1FBQ3pDLFFBQVEsRUFBRTtZQUNSO2dCQUNFLElBQUksRUFBRSxFQUFFO2dCQUNSLFNBQVMsRUFBRSx5QkFBeUI7Z0JBQ3BDLElBQUksRUFBRTtvQkFDSixJQUFJLEVBQUUsMkJBQTJCO2lCQUNsQzthQUNGO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsU0FBUyxFQUFFLHdCQUF3QjtnQkFDbkMsSUFBSSxFQUFFO29CQUNKLElBQUksRUFBRSxpQkFBaUI7b0JBQ3ZCLElBQUksRUFBRSwyQkFBMkI7b0JBQ2pDLE9BQU8sRUFBRSxvQkFBb0I7aUJBQzlCO2dCQUNELFFBQVEsRUFBRTtvQkFDUjt3QkFDRSxJQUFJLEVBQUUsc0JBQXNCO3dCQUM1QixTQUFTLEVBQUUsdUNBQXVDO3dCQUNsRCxJQUFJLEVBQUU7NEJBQ0osS0FBSyxFQUFFLHNCQUFzQjs0QkFDN0IsSUFBSSxFQUFFLDJCQUEyQjt5QkFDbEM7cUJBQ0Y7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLFdBQVc7d0JBQ2pCLFNBQVMsRUFBRSw2QkFBNkI7d0JBQ3hDLElBQUksRUFBRTs0QkFDSixLQUFLLEVBQUUsZ0JBQWdCOzRCQUN2QixJQUFJLEVBQUUsMkJBQTJCO3lCQUNsQztxQkFDRjtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsaUJBQWlCO3dCQUN2QixTQUFTLEVBQUUsa0NBQWtDO3dCQUM3QyxJQUFJLEVBQUU7NEJBQ0osS0FBSyxFQUFFLGlCQUFpQjs0QkFDeEIsSUFBSSxFQUFFLDJCQUEyQjt5QkFDbEM7cUJBQ0Y7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLElBQUk7d0JBQ1YsVUFBVSxFQUFFLHNCQUFzQjtxQkFDbkM7aUJBQ0Y7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxNQUFNO2dCQUNaLFNBQVMsRUFBRSx5QkFBeUI7Z0JBQ3BDLElBQUksRUFBRTtvQkFDSixJQUFJLEVBQUUsMkJBQTJCO2lCQUNsQzthQUNGO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsVUFBVSxFQUFFLEVBQUU7Z0JBQ2QsU0FBUyxFQUFFLE1BQU07YUFDbEI7U0FDRjtLQUNGLENBQUMsQ0FBQztBQU1ILE1BQU0sT0FBTywyQkFBMkI7O3lIQUEzQiwyQkFBMkI7MEhBQTNCLDJCQUEyQix3Q0FGNUIsWUFBWTswSEFFWCwyQkFBMkIsWUFIN0IsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQzlCLFlBQVk7NEZBRVgsMkJBQTJCO2tCQUp2QyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3hDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztpQkFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXV0aEd1YXJkQ2hpbGRTZXJ2aWNlIH0gZnJvbSAnQGRvbmdrYXAvZG8tYXV0aCc7XG5pbXBvcnQgeyBNZ210RW1wbG95ZWVDb21wb25lbnQgfSBmcm9tICcuL2RvLW1nbXQtZW1wbG95ZWUuY29tcG9uZW50JztcbmltcG9ydCB7IEVtcGxveWVlTGlzdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2xpc3QvZW1wbG95ZWUtbGlzdC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFbXBsb3llZUFkZFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2FkZC9lbXBsb3llZS1hZGQtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRW1wbG95ZWVFZGl0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vZWRpdC9lbXBsb3llZS1lZGl0LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IEVtcGxveWVlQWRkUGVyc29uYWxJbmZvcm1hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vYWRkL3BlcnNvbmFsLWluZm9ybWF0aW9uL2VtcGxveWVlLWFkZC1wZXJzb25hbC1pbmZvcm1hdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRW1wbG95ZWVBZGRFZHVjYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2FkZC9lZHVjYXRpb24vZW1wbG95ZWUtYWRkLWVkdWNhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRW1wbG95ZWVBZGRFbXBsb3llZVN0YXR1c0NvbXBvbmVudCB9IGZyb20gJy4vYWRkL2VtcGxveWVlLXN0YXR1cy9lbXBsb3llZS1hZGQtZW1wbG95ZWUtc3RhdHVzLmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW3tcbiAgcGF0aDogJycsXG4gIGNvbXBvbmVudDogTWdtdEVtcGxveWVlQ29tcG9uZW50LFxuICBjYW5BY3RpdmF0ZUNoaWxkOiBbQXV0aEd1YXJkQ2hpbGRTZXJ2aWNlXSxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBwYXRoOiAnJyxcbiAgICAgIGNvbXBvbmVudDogRW1wbG95ZWVMaXN0UGFnZUNvbXBvbmVudCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29kZTogJyNNQU5BR0VNRU5ULUVNUExPWUVFLVBBR0UnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICdhZGQnLFxuICAgICAgY29tcG9uZW50OiBFbXBsb3llZUFkZFBhZ2VDb21wb25lbnQsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG5hbWU6ICdNYW5hZ2UgRW1wbG95ZWUnLFxuICAgICAgICBjb2RlOiAnI01BTkFHRU1FTlQtRU1QTE9ZRUUtUEFHRScsXG4gICAgICAgIGJhc2VVcmw6ICcvYXBwL21nbXQvZW1wbG95ZWUnLFxuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiAncGVyc29uYWwtaW5mb3JtYXRpb24nLFxuICAgICAgICAgIGNvbXBvbmVudDogRW1wbG95ZWVBZGRQZXJzb25hbEluZm9ybWF0aW9uQ29tcG9uZW50LFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnUGVyc29uYWwgSW5mb3JtYXRpb24nLFxuICAgICAgICAgICAgY29kZTogJyNNQU5BR0VNRU5ULUVNUExPWUVFLVBBR0UnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiAnZWR1Y2F0aW9uJyxcbiAgICAgICAgICBjb21wb25lbnQ6IEVtcGxveWVlQWRkRWR1Y2F0aW9uQ29tcG9uZW50LFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnTGFzdCBFZHVjYXRpb24nLFxuICAgICAgICAgICAgY29kZTogJyNNQU5BR0VNRU5ULUVNUExPWUVFLVBBR0UnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiAnZW1wbG95ZWUtc3RhdHVzJyxcbiAgICAgICAgICBjb21wb25lbnQ6IEVtcGxveWVlQWRkRW1wbG95ZWVTdGF0dXNDb21wb25lbnQsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgdGl0bGU6ICdFbXBsb3llZSBTdGF0dXMnLFxuICAgICAgICAgICAgY29kZTogJyNNQU5BR0VNRU5ULUVNUExPWUVFLVBBR0UnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiAnKionLFxuICAgICAgICAgIHJlZGlyZWN0VG86ICdwZXJzb25hbC1pbmZvcm1hdGlvbicsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJ2VkaXQnLFxuICAgICAgY29tcG9uZW50OiBFbXBsb3llZUVkaXRQYWdlQ29tcG9uZW50LFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlOiAnI01BTkFHRU1FTlQtRU1QTE9ZRUUtUEFHRScsXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJycsXG4gICAgICByZWRpcmVjdFRvOiAnJyxcbiAgICAgIHBhdGhNYXRjaDogJ2Z1bGwnLFxuICAgIH0sXG4gIF0sXG59XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIERvTWdtdEVtcGxveWVlUm91dGluZ01vZHVsZSB7XG59XG4iXX0=