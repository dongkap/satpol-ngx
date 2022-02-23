import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuardChildService } from '@dongkap/do-auth';
import { ParameterComponent } from './do-parameter.component';
import { ParameterListGroupPageComponent } from './parameter-group/list/parameter-list-group-page.component';
import { ParameterAddGroupPageComponent } from './parameter-group/add/parameter-add-group-page.component';
import { ParameterListDetailPageComponent } from './parameter-detail/list/parameter-list-detail-page.component';
import { ParameterAddEditDetailPageComponent } from './parameter-detail/add-edit/parameter-add-edit-detail-page.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [{
        path: '',
        component: ParameterComponent,
        canActivateChild: [AuthGuardChildService],
        children: [
            {
                path: '',
                component: ParameterListGroupPageComponent,
                data: {
                    code: '#SYSCONF-PARAMETER-PAGE',
                },
            },
            {
                path: 'group',
                component: ParameterListGroupPageComponent,
                data: {
                    code: '#SYSCONF-PARAMETER-PAGE',
                },
            },
            {
                path: 'group/:action',
                component: ParameterAddGroupPageComponent,
                data: {
                    code: '#SYSCONF-PARAMETER-PAGE',
                },
            },
            {
                path: 'detail',
                component: ParameterListDetailPageComponent,
                data: {
                    code: '#SYSCONF-PARAMETER-PAGE',
                },
            },
            {
                path: 'detail/:action',
                component: ParameterAddEditDetailPageComponent,
                data: {
                    code: '#SYSCONF-PARAMETER-PAGE',
                },
            },
        ],
    }];
export class DoParameterRoutingModule {
}
DoParameterRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoParameterRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoParameterRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoParameterRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
DoParameterRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoParameterRoutingModule, imports: [[RouterModule.forChild(routes)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoParameterRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tcGFyYW1ldGVyLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc3lzL3NyYy9saWIvcGFyYW1ldGVyL2RvLXBhcmFtZXRlci1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUM3RyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUNoSCxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQzs7O0FBRTNILE1BQU0sTUFBTSxHQUFXLENBQUM7UUFDdEIsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsa0JBQWtCO1FBQzdCLGdCQUFnQixFQUFFLENBQUMscUJBQXFCLENBQUM7UUFDekMsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsU0FBUyxFQUFFLCtCQUErQjtnQkFDMUMsSUFBSSxFQUFFO29CQUNKLElBQUksRUFBRSx5QkFBeUI7aUJBQ2hDO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsT0FBTztnQkFDYixTQUFTLEVBQUUsK0JBQStCO2dCQUMxQyxJQUFJLEVBQUU7b0JBQ0osSUFBSSxFQUFFLHlCQUF5QjtpQkFDaEM7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxlQUFlO2dCQUNyQixTQUFTLEVBQUUsOEJBQThCO2dCQUN6QyxJQUFJLEVBQUU7b0JBQ0osSUFBSSxFQUFFLHlCQUF5QjtpQkFDaEM7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxRQUFRO2dCQUNkLFNBQVMsRUFBRSxnQ0FBZ0M7Z0JBQzNDLElBQUksRUFBRTtvQkFDSixJQUFJLEVBQUUseUJBQXlCO2lCQUNoQzthQUNGO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGdCQUFnQjtnQkFDdEIsU0FBUyxFQUFFLG1DQUFtQztnQkFDOUMsSUFBSSxFQUFFO29CQUNKLElBQUksRUFBRSx5QkFBeUI7aUJBQ2hDO2FBQ0Y7U0FDRjtLQUNGLENBQUMsQ0FBQztBQU1ILE1BQU0sT0FBTyx3QkFBd0I7O3NIQUF4Qix3QkFBd0I7dUhBQXhCLHdCQUF3Qix3Q0FGekIsWUFBWTt1SEFFWCx3QkFBd0IsWUFIMUIsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQzlCLFlBQVk7NEZBRVgsd0JBQXdCO2tCQUpwQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3hDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztpQkFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXV0aEd1YXJkQ2hpbGRTZXJ2aWNlIH0gZnJvbSAnQGRvbmdrYXAvZG8tYXV0aCc7XG5pbXBvcnQgeyBQYXJhbWV0ZXJDb21wb25lbnQgfSBmcm9tICcuL2RvLXBhcmFtZXRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFyYW1ldGVyTGlzdEdyb3VwUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcGFyYW1ldGVyLWdyb3VwL2xpc3QvcGFyYW1ldGVyLWxpc3QtZ3JvdXAtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFyYW1ldGVyQWRkR3JvdXBQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wYXJhbWV0ZXItZ3JvdXAvYWRkL3BhcmFtZXRlci1hZGQtZ3JvdXAtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFyYW1ldGVyTGlzdERldGFpbFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3BhcmFtZXRlci1kZXRhaWwvbGlzdC9wYXJhbWV0ZXItbGlzdC1kZXRhaWwtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFyYW1ldGVyQWRkRWRpdERldGFpbFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3BhcmFtZXRlci1kZXRhaWwvYWRkLWVkaXQvcGFyYW1ldGVyLWFkZC1lZGl0LWRldGFpbC1wYWdlLmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW3tcbiAgcGF0aDogJycsXG4gIGNvbXBvbmVudDogUGFyYW1ldGVyQ29tcG9uZW50LFxuICBjYW5BY3RpdmF0ZUNoaWxkOiBbQXV0aEd1YXJkQ2hpbGRTZXJ2aWNlXSxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBwYXRoOiAnJyxcbiAgICAgIGNvbXBvbmVudDogUGFyYW1ldGVyTGlzdEdyb3VwUGFnZUNvbXBvbmVudCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29kZTogJyNTWVNDT05GLVBBUkFNRVRFUi1QQUdFJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnZ3JvdXAnLFxuICAgICAgY29tcG9uZW50OiBQYXJhbWV0ZXJMaXN0R3JvdXBQYWdlQ29tcG9uZW50LFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlOiAnI1NZU0NPTkYtUEFSQU1FVEVSLVBBR0UnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICdncm91cC86YWN0aW9uJyxcbiAgICAgIGNvbXBvbmVudDogUGFyYW1ldGVyQWRkR3JvdXBQYWdlQ29tcG9uZW50LFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlOiAnI1NZU0NPTkYtUEFSQU1FVEVSLVBBR0UnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICdkZXRhaWwnLFxuICAgICAgY29tcG9uZW50OiBQYXJhbWV0ZXJMaXN0RGV0YWlsUGFnZUNvbXBvbmVudCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29kZTogJyNTWVNDT05GLVBBUkFNRVRFUi1QQUdFJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnZGV0YWlsLzphY3Rpb24nLFxuICAgICAgY29tcG9uZW50OiBQYXJhbWV0ZXJBZGRFZGl0RGV0YWlsUGFnZUNvbXBvbmVudCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29kZTogJyNTWVNDT05GLVBBUkFNRVRFUi1QQUdFJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbn1dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgRG9QYXJhbWV0ZXJSb3V0aW5nTW9kdWxlIHtcbn1cbiJdfQ==