import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuardChildService } from '@dongkap/do-auth';
import { MgmtCorporateComponent } from './do-mgmt-corporate.component';
import { CorporateListPageComponent } from './list/corporate-list-page.component';
import { CorporateAddEditPageComponent } from './add-edit/corporate-add-edit-page.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [{
        path: '',
        component: MgmtCorporateComponent,
        canActivateChild: [AuthGuardChildService],
        children: [
            {
                path: '',
                component: CorporateListPageComponent,
                data: {
                    code: '#MANAGEMENT-CORPORATE-PAGE',
                },
            },
            {
                path: ':action',
                component: CorporateAddEditPageComponent,
                data: {
                    code: '#MANAGEMENT-CORPORATE-PAGE',
                },
            },
        ],
    }];
export class DoMgmtCorporateRoutingModule {
}
DoMgmtCorporateRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtCorporateRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoMgmtCorporateRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtCorporateRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
DoMgmtCorporateRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtCorporateRoutingModule, imports: [[RouterModule.forChild(routes)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtCorporateRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tbWdtdC1jb3Jwb3JhdGUtcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1zeXMvc3JjL2xpYi9jb3Jwb3JhdGUvZG8tbWdtdC1jb3Jwb3JhdGUtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDekQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDdkUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDbEYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sOENBQThDLENBQUM7OztBQUU3RixNQUFNLE1BQU0sR0FBVyxDQUFDO1FBQ3RCLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLHNCQUFzQjtRQUNqQyxnQkFBZ0IsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1FBQ3pDLFFBQVEsRUFBRTtZQUNSO2dCQUNFLElBQUksRUFBRSxFQUFFO2dCQUNSLFNBQVMsRUFBRSwwQkFBMEI7Z0JBQ3JDLElBQUksRUFBRTtvQkFDSixJQUFJLEVBQUUsNEJBQTRCO2lCQUNuQzthQUNGO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsU0FBUyxFQUFFLDZCQUE2QjtnQkFDeEMsSUFBSSxFQUFFO29CQUNKLElBQUksRUFBRSw0QkFBNEI7aUJBQ25DO2FBQ0Y7U0FDRjtLQUNGLENBQUMsQ0FBQztBQU1ILE1BQU0sT0FBTyw0QkFBNEI7OzBIQUE1Qiw0QkFBNEI7MkhBQTVCLDRCQUE0Qix3Q0FGN0IsWUFBWTsySEFFWCw0QkFBNEIsWUFIOUIsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQzlCLFlBQVk7NEZBRVgsNEJBQTRCO2tCQUp4QyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3hDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztpQkFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXV0aEd1YXJkQ2hpbGRTZXJ2aWNlIH0gZnJvbSAnQGRvbmdrYXAvZG8tYXV0aCc7XG5pbXBvcnQgeyBNZ210Q29ycG9yYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9kby1tZ210LWNvcnBvcmF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29ycG9yYXRlTGlzdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2xpc3QvY29ycG9yYXRlLWxpc3QtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29ycG9yYXRlQWRkRWRpdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2FkZC1lZGl0L2NvcnBvcmF0ZS1hZGQtZWRpdC1wYWdlLmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW3tcbiAgcGF0aDogJycsXG4gIGNvbXBvbmVudDogTWdtdENvcnBvcmF0ZUNvbXBvbmVudCxcbiAgY2FuQWN0aXZhdGVDaGlsZDogW0F1dGhHdWFyZENoaWxkU2VydmljZV0sXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgcGF0aDogJycsXG4gICAgICBjb21wb25lbnQ6IENvcnBvcmF0ZUxpc3RQYWdlQ29tcG9uZW50LFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlOiAnI01BTkFHRU1FTlQtQ09SUE9SQVRFLVBBR0UnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICc6YWN0aW9uJyxcbiAgICAgIGNvbXBvbmVudDogQ29ycG9yYXRlQWRkRWRpdFBhZ2VDb21wb25lbnQsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvZGU6ICcjTUFOQUdFTUVOVC1DT1JQT1JBVEUtUEFHRScsXG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG59XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIERvTWdtdENvcnBvcmF0ZVJvdXRpbmdNb2R1bGUge1xufVxuIl19