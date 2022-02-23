import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuardChildService } from '@dongkap/do-auth';
import { MgmtBusinessPartnerComponent } from './do-mgmt-business-partner.component';
import { BusinessPartnerListPageComponent } from './list/business-partner-list-page.component';
import { BusinessPartnerAddEditPageComponent } from './add-edit/business-partner-add-edit-page.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [{
        path: '',
        component: MgmtBusinessPartnerComponent,
        canActivateChild: [AuthGuardChildService],
        children: [
            {
                path: '',
                component: BusinessPartnerListPageComponent,
                data: {
                    code: '#MANAGEMENT-BP-PAGE',
                },
            },
            {
                path: ':action',
                component: BusinessPartnerAddEditPageComponent,
                data: {
                    code: '#MANAGEMENT-BP-PAGE',
                },
            },
        ],
    }];
export class DoMgmtBusinessPartnerRoutingModule {
}
DoMgmtBusinessPartnerRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtBusinessPartnerRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoMgmtBusinessPartnerRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtBusinessPartnerRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
DoMgmtBusinessPartnerRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtBusinessPartnerRoutingModule, imports: [[RouterModule.forChild(routes)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtBusinessPartnerRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tbWdtdC1idXNpbmVzcy1wYXJ0bmVyLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc3lzL3NyYy9saWIvYnVzaW5lc3MtcGFydG5lci9kby1tZ210LWJ1c2luZXNzLXBhcnRuZXItcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDekQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDcEYsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDL0YsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0scURBQXFELENBQUM7OztBQUUxRyxNQUFNLE1BQU0sR0FBVyxDQUFDO1FBQ3RCLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLDRCQUE0QjtRQUN2QyxnQkFBZ0IsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1FBQ3pDLFFBQVEsRUFBRTtZQUNSO2dCQUNFLElBQUksRUFBRSxFQUFFO2dCQUNSLFNBQVMsRUFBRSxnQ0FBZ0M7Z0JBQzNDLElBQUksRUFBRTtvQkFDSixJQUFJLEVBQUUscUJBQXFCO2lCQUM1QjthQUNGO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsU0FBUyxFQUFFLG1DQUFtQztnQkFDOUMsSUFBSSxFQUFFO29CQUNKLElBQUksRUFBRSxxQkFBcUI7aUJBQzVCO2FBQ0Y7U0FDRjtLQUNGLENBQUMsQ0FBQztBQU1ILE1BQU0sT0FBTyxrQ0FBa0M7O2dJQUFsQyxrQ0FBa0M7aUlBQWxDLGtDQUFrQyx3Q0FGbkMsWUFBWTtpSUFFWCxrQ0FBa0MsWUFIcEMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQzlCLFlBQVk7NEZBRVgsa0NBQWtDO2tCQUo5QyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3hDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztpQkFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXV0aEd1YXJkQ2hpbGRTZXJ2aWNlIH0gZnJvbSAnQGRvbmdrYXAvZG8tYXV0aCc7XG5pbXBvcnQgeyBNZ210QnVzaW5lc3NQYXJ0bmVyQ29tcG9uZW50IH0gZnJvbSAnLi9kby1tZ210LWJ1c2luZXNzLXBhcnRuZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEJ1c2luZXNzUGFydG5lckxpc3RQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9saXN0L2J1c2luZXNzLXBhcnRuZXItbGlzdC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCdXNpbmVzc1BhcnRuZXJBZGRFZGl0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vYWRkLWVkaXQvYnVzaW5lc3MtcGFydG5lci1hZGQtZWRpdC1wYWdlLmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW3tcbiAgcGF0aDogJycsXG4gIGNvbXBvbmVudDogTWdtdEJ1c2luZXNzUGFydG5lckNvbXBvbmVudCxcbiAgY2FuQWN0aXZhdGVDaGlsZDogW0F1dGhHdWFyZENoaWxkU2VydmljZV0sXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgcGF0aDogJycsXG4gICAgICBjb21wb25lbnQ6IEJ1c2luZXNzUGFydG5lckxpc3RQYWdlQ29tcG9uZW50LFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlOiAnI01BTkFHRU1FTlQtQlAtUEFHRScsXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJzphY3Rpb24nLFxuICAgICAgY29tcG9uZW50OiBCdXNpbmVzc1BhcnRuZXJBZGRFZGl0UGFnZUNvbXBvbmVudCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29kZTogJyNNQU5BR0VNRU5ULUJQLVBBR0UnLFxuICAgICAgfSxcbiAgICB9LFxuICBdLFxufV07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBEb01nbXRCdXNpbmVzc1BhcnRuZXJSb3V0aW5nTW9kdWxlIHtcbn1cbiJdfQ==