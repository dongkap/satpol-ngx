import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuardChildService } from '@dongkap/do-auth';
import { MgmtOccupationComponent } from './do-mgmt-occupation.component';
import { OccupationListPageComponent } from './list/occupation-list-page.component';
import { OccupationAddEditPageComponent } from './add-edit/occupation-add-edit-page.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [{
        path: '',
        component: MgmtOccupationComponent,
        canActivateChild: [AuthGuardChildService],
        children: [
            {
                path: '',
                component: OccupationListPageComponent,
                data: {
                    code: '#MANAGEMENT-OCCUPATION-PAGE',
                },
            },
            {
                path: ':action',
                component: OccupationAddEditPageComponent,
                data: {
                    code: '#MANAGEMENT-OCCUPATION-PAGE',
                },
            },
        ],
    }];
export class DoMgmtOccupationRoutingModule {
}
DoMgmtOccupationRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtOccupationRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoMgmtOccupationRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtOccupationRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
DoMgmtOccupationRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtOccupationRoutingModule, imports: [[RouterModule.forChild(routes)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtOccupationRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tbWdtdC1vY2N1cGF0aW9uLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc3lzL3NyYy9saWIvb2NjdXBhdGlvbi9kby1tZ210LW9jY3VwYXRpb24tcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDekQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDekUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDcEYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sK0NBQStDLENBQUM7OztBQUUvRixNQUFNLE1BQU0sR0FBVyxDQUFDO1FBQ3RCLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLHVCQUF1QjtRQUNsQyxnQkFBZ0IsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1FBQ3pDLFFBQVEsRUFBRTtZQUNSO2dCQUNFLElBQUksRUFBRSxFQUFFO2dCQUNSLFNBQVMsRUFBRSwyQkFBMkI7Z0JBQ3RDLElBQUksRUFBRTtvQkFDSixJQUFJLEVBQUUsNkJBQTZCO2lCQUNwQzthQUNGO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsU0FBUyxFQUFFLDhCQUE4QjtnQkFDekMsSUFBSSxFQUFFO29CQUNKLElBQUksRUFBRSw2QkFBNkI7aUJBQ3BDO2FBQ0Y7U0FDRjtLQUNGLENBQUMsQ0FBQztBQU1ILE1BQU0sT0FBTyw2QkFBNkI7OzJIQUE3Qiw2QkFBNkI7NEhBQTdCLDZCQUE2Qix3Q0FGOUIsWUFBWTs0SEFFWCw2QkFBNkIsWUFIL0IsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQzlCLFlBQVk7NEZBRVgsNkJBQTZCO2tCQUp6QyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3hDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztpQkFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXV0aEd1YXJkQ2hpbGRTZXJ2aWNlIH0gZnJvbSAnQGRvbmdrYXAvZG8tYXV0aCc7XG5pbXBvcnQgeyBNZ210T2NjdXBhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vZG8tbWdtdC1vY2N1cGF0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPY2N1cGF0aW9uTGlzdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2xpc3Qvb2NjdXBhdGlvbi1saXN0LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IE9jY3VwYXRpb25BZGRFZGl0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vYWRkLWVkaXQvb2NjdXBhdGlvbi1hZGQtZWRpdC1wYWdlLmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW3tcbiAgcGF0aDogJycsXG4gIGNvbXBvbmVudDogTWdtdE9jY3VwYXRpb25Db21wb25lbnQsXG4gIGNhbkFjdGl2YXRlQ2hpbGQ6IFtBdXRoR3VhcmRDaGlsZFNlcnZpY2VdLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHBhdGg6ICcnLFxuICAgICAgY29tcG9uZW50OiBPY2N1cGF0aW9uTGlzdFBhZ2VDb21wb25lbnQsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvZGU6ICcjTUFOQUdFTUVOVC1PQ0NVUEFUSU9OLVBBR0UnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICc6YWN0aW9uJyxcbiAgICAgIGNvbXBvbmVudDogT2NjdXBhdGlvbkFkZEVkaXRQYWdlQ29tcG9uZW50LFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlOiAnI01BTkFHRU1FTlQtT0NDVVBBVElPTi1QQUdFJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbn1dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgRG9NZ210T2NjdXBhdGlvblJvdXRpbmdNb2R1bGUge1xufVxuIl19