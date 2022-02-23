import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuardChildService } from '@dongkap/do-auth';
import { MgmtAppsComponent } from './do-mgmt-apps.component';
import { AppsListPageComponent } from './list/apps-list-page.component';
import { AppsAddEditPageComponent } from './add-edit/apps-add-edit-page.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [{
        path: '',
        component: MgmtAppsComponent,
        canActivateChild: [AuthGuardChildService],
        children: [
            {
                path: '',
                component: AppsListPageComponent,
                data: {
                    code: '#MANAGEMENT-APPS-PAGE',
                },
            },
            {
                path: ':action',
                component: AppsAddEditPageComponent,
                data: {
                    code: '#MANAGEMENT-APPS-PAGE',
                },
            },
        ],
    }];
export class DoMgmtAppsRoutingModule {
}
DoMgmtAppsRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtAppsRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoMgmtAppsRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtAppsRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
DoMgmtAppsRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtAppsRoutingModule, imports: [[RouterModule.forChild(routes)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtAppsRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tbWdtdC1hcHBzLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc3lzL3NyYy9saWIvYXBwcy9kby1tZ210LWFwcHMtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDN0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDeEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0seUNBQXlDLENBQUM7OztBQUVuRixNQUFNLE1BQU0sR0FBVyxDQUFDO1FBQ3RCLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLGlCQUFpQjtRQUM1QixnQkFBZ0IsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1FBQ3pDLFFBQVEsRUFBRTtZQUNSO2dCQUNFLElBQUksRUFBRSxFQUFFO2dCQUNSLFNBQVMsRUFBRSxxQkFBcUI7Z0JBQ2hDLElBQUksRUFBRTtvQkFDSixJQUFJLEVBQUUsdUJBQXVCO2lCQUM5QjthQUNGO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsU0FBUyxFQUFFLHdCQUF3QjtnQkFDbkMsSUFBSSxFQUFFO29CQUNKLElBQUksRUFBRSx1QkFBdUI7aUJBQzlCO2FBQ0Y7U0FDRjtLQUNGLENBQUMsQ0FBQztBQU1ILE1BQU0sT0FBTyx1QkFBdUI7O3FIQUF2Qix1QkFBdUI7c0hBQXZCLHVCQUF1Qix3Q0FGeEIsWUFBWTtzSEFFWCx1QkFBdUIsWUFIekIsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQzlCLFlBQVk7NEZBRVgsdUJBQXVCO2tCQUpuQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3hDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztpQkFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXV0aEd1YXJkQ2hpbGRTZXJ2aWNlIH0gZnJvbSAnQGRvbmdrYXAvZG8tYXV0aCc7XG5pbXBvcnQgeyBNZ210QXBwc0NvbXBvbmVudCB9IGZyb20gJy4vZG8tbWdtdC1hcHBzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBzTGlzdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2xpc3QvYXBwcy1saXN0LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IEFwcHNBZGRFZGl0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vYWRkLWVkaXQvYXBwcy1hZGQtZWRpdC1wYWdlLmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW3tcbiAgcGF0aDogJycsXG4gIGNvbXBvbmVudDogTWdtdEFwcHNDb21wb25lbnQsXG4gIGNhbkFjdGl2YXRlQ2hpbGQ6IFtBdXRoR3VhcmRDaGlsZFNlcnZpY2VdLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHBhdGg6ICcnLFxuICAgICAgY29tcG9uZW50OiBBcHBzTGlzdFBhZ2VDb21wb25lbnQsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvZGU6ICcjTUFOQUdFTUVOVC1BUFBTLVBBR0UnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICc6YWN0aW9uJyxcbiAgICAgIGNvbXBvbmVudDogQXBwc0FkZEVkaXRQYWdlQ29tcG9uZW50LFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlOiAnI01BTkFHRU1FTlQtQVBQUy1QQUdFJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbn1dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgRG9NZ210QXBwc1JvdXRpbmdNb2R1bGUge1xufVxuIl19