import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuardChildService } from '@dongkap/do-auth';
import { EmployeeProfileComponent } from './do-employee-profile.component';
import { EmployeeProfilePageComponent } from './page/employee-profile-page.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [{
        path: '',
        component: EmployeeProfileComponent,
        canActivateChild: [AuthGuardChildService],
        children: [
            {
                path: '',
                component: EmployeeProfilePageComponent,
                data: {
                    code: '#EMPLOYEE-PROFILE-PAGE',
                },
            },
            {
                path: '',
                redirectTo: '',
                pathMatch: 'full',
            },
        ],
    }];
export class DoEmployeeProfileRoutingModule {
}
DoEmployeeProfileRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoEmployeeProfileRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoEmployeeProfileRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoEmployeeProfileRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
DoEmployeeProfileRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoEmployeeProfileRoutingModule, imports: [[RouterModule.forChild(routes)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoEmployeeProfileRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tZW1wbG95ZWUtcHJvZmlsZS1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXN5cy9zcmMvbGliL3Byb2ZpbGUvZG8tZW1wbG95ZWUtcHJvZmlsZS1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7O0FBRXRGLE1BQU0sTUFBTSxHQUFXLENBQUM7UUFDdEIsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsd0JBQXdCO1FBQ25DLGdCQUFnQixFQUFFLENBQUMscUJBQXFCLENBQUM7UUFDekMsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsU0FBUyxFQUFFLDRCQUE0QjtnQkFDdkMsSUFBSSxFQUFFO29CQUNKLElBQUksRUFBRSx3QkFBd0I7aUJBQy9CO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsRUFBRTtnQkFDUixVQUFVLEVBQUUsRUFBRTtnQkFDZCxTQUFTLEVBQUUsTUFBTTthQUNsQjtTQUNGO0tBQ0YsQ0FBQyxDQUFDO0FBTUgsTUFBTSxPQUFPLDhCQUE4Qjs7NEhBQTlCLDhCQUE4Qjs2SEFBOUIsOEJBQThCLHdDQUYvQixZQUFZOzZIQUVYLDhCQUE4QixZQUhoQyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFDOUIsWUFBWTs0RkFFWCw4QkFBOEI7a0JBSjFDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDeEMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUN4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoR3VhcmRDaGlsZFNlcnZpY2UgfSBmcm9tICdAZG9uZ2thcC9kby1hdXRoJztcbmltcG9ydCB7IEVtcGxveWVlUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gJy4vZG8tZW1wbG95ZWUtcHJvZmlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRW1wbG95ZWVQcm9maWxlUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZS9lbXBsb3llZS1wcm9maWxlLXBhZ2UuY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbe1xuICBwYXRoOiAnJyxcbiAgY29tcG9uZW50OiBFbXBsb3llZVByb2ZpbGVDb21wb25lbnQsXG4gIGNhbkFjdGl2YXRlQ2hpbGQ6IFtBdXRoR3VhcmRDaGlsZFNlcnZpY2VdLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHBhdGg6ICcnLFxuICAgICAgY29tcG9uZW50OiBFbXBsb3llZVByb2ZpbGVQYWdlQ29tcG9uZW50LFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlOiAnI0VNUExPWUVFLVBST0ZJTEUtUEFHRScsXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJycsXG4gICAgICByZWRpcmVjdFRvOiAnJyxcbiAgICAgIHBhdGhNYXRjaDogJ2Z1bGwnLFxuICAgIH0sXG4gIF0sXG59XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIERvRW1wbG95ZWVQcm9maWxlUm91dGluZ01vZHVsZSB7XG59XG4iXX0=