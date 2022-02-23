import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuardChildService } from '@dongkap/do-auth';
import { MgmtJobPlacementComponent } from './do-mgmt-job-placement.component';
import { JobPlacementListPageComponent } from './list/job-placement-list-page.component';
import { JobPlacementEditPageComponent } from './edit/job-placement-edit-page.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [{
        path: '',
        component: MgmtJobPlacementComponent,
        canActivateChild: [AuthGuardChildService],
        children: [
            {
                path: '',
                component: JobPlacementListPageComponent,
                data: {
                    code: '#MANAGEMENT-JOB-PLACEMENT-PAGE',
                },
            },
            {
                path: 'edit',
                component: JobPlacementEditPageComponent,
                data: {
                    code: '#MANAGEMENT-JOB-PLACEMENT-PAGE',
                },
            },
            {
                path: '',
                redirectTo: '',
                pathMatch: 'full',
            },
        ],
    }];
export class DoMgmtJobPlacementRoutingModule {
}
DoMgmtJobPlacementRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtJobPlacementRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoMgmtJobPlacementRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtJobPlacementRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
DoMgmtJobPlacementRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtJobPlacementRoutingModule, imports: [[RouterModule.forChild(routes)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtJobPlacementRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tbWdtdC1qb2ItcGxhY2VtZW50LXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc3lzL3NyYy9saWIvam9iLXBsYWNlbWVudC9kby1tZ210LWpvYi1wbGFjZW1lbnQtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDekQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDOUUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDekYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMENBQTBDLENBQUM7OztBQUV6RixNQUFNLE1BQU0sR0FBVyxDQUFDO1FBQ3RCLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLHlCQUF5QjtRQUNwQyxnQkFBZ0IsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1FBQ3pDLFFBQVEsRUFBRTtZQUNSO2dCQUNFLElBQUksRUFBRSxFQUFFO2dCQUNSLFNBQVMsRUFBRSw2QkFBNkI7Z0JBQ3hDLElBQUksRUFBRTtvQkFDSixJQUFJLEVBQUUsZ0NBQWdDO2lCQUN2QzthQUNGO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLE1BQU07Z0JBQ1osU0FBUyxFQUFFLDZCQUE2QjtnQkFDeEMsSUFBSSxFQUFFO29CQUNKLElBQUksRUFBRSxnQ0FBZ0M7aUJBQ3ZDO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsRUFBRTtnQkFDUixVQUFVLEVBQUUsRUFBRTtnQkFDZCxTQUFTLEVBQUUsTUFBTTthQUNsQjtTQUNGO0tBQ0YsQ0FBQyxDQUFDO0FBTUgsTUFBTSxPQUFPLCtCQUErQjs7NkhBQS9CLCtCQUErQjs4SEFBL0IsK0JBQStCLHdDQUZoQyxZQUFZOzhIQUVYLCtCQUErQixZQUhqQyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFDOUIsWUFBWTs0RkFFWCwrQkFBK0I7a0JBSjNDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDeEMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUN4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoR3VhcmRDaGlsZFNlcnZpY2UgfSBmcm9tICdAZG9uZ2thcC9kby1hdXRoJztcbmltcG9ydCB7IE1nbXRKb2JQbGFjZW1lbnRDb21wb25lbnQgfSBmcm9tICcuL2RvLW1nbXQtam9iLXBsYWNlbWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSm9iUGxhY2VtZW50TGlzdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2xpc3Qvam9iLXBsYWNlbWVudC1saXN0LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IEpvYlBsYWNlbWVudEVkaXRQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0L2pvYi1wbGFjZW1lbnQtZWRpdC1wYWdlLmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW3tcbiAgcGF0aDogJycsXG4gIGNvbXBvbmVudDogTWdtdEpvYlBsYWNlbWVudENvbXBvbmVudCxcbiAgY2FuQWN0aXZhdGVDaGlsZDogW0F1dGhHdWFyZENoaWxkU2VydmljZV0sXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgcGF0aDogJycsXG4gICAgICBjb21wb25lbnQ6IEpvYlBsYWNlbWVudExpc3RQYWdlQ29tcG9uZW50LFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlOiAnI01BTkFHRU1FTlQtSk9CLVBMQUNFTUVOVC1QQUdFJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnZWRpdCcsXG4gICAgICBjb21wb25lbnQ6IEpvYlBsYWNlbWVudEVkaXRQYWdlQ29tcG9uZW50LFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlOiAnI01BTkFHRU1FTlQtSk9CLVBMQUNFTUVOVC1QQUdFJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnJyxcbiAgICAgIHJlZGlyZWN0VG86ICcnLFxuICAgICAgcGF0aE1hdGNoOiAnZnVsbCcsXG4gICAgfSxcbiAgXSxcbn1dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgRG9NZ210Sm9iUGxhY2VtZW50Um91dGluZ01vZHVsZSB7XG59XG4iXX0=