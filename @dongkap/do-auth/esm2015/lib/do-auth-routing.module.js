import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UnauthorizeGuardService } from './services/unauth-guard.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthComponent } from './pages/layout/auth.component';
import { LoginPageComponent } from './pages/login/login-page.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { ForceLoginPageComponent } from './pages/force/force-login-page.component';
import { RequestForgotPageComponent } from './pages/forgot/request-forgot-page.component';
import { ForgotPageComponent } from './pages/forgot/forgot-page.component';
import { RegisterPageComponent } from './pages/register/register-page.component';
import { ActivateAccountPageComponent } from './pages/activate-account/activate-account-page.component';
import { OAuth2CallbackComponent } from './pages/oauth2/oauth2-callback.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [{
        path: '',
        component: AuthComponent,
        children: [
            {
                path: '',
                component: LoginPageComponent,
                canActivate: [UnauthorizeGuardService],
            },
            {
                path: 'login',
                component: LoginPageComponent,
                canActivate: [UnauthorizeGuardService],
            },
            {
                path: 'force',
                component: ForceLoginPageComponent,
                canActivate: [UnauthorizeGuardService],
            },
            {
                path: 'register',
                component: RegisterPageComponent,
                canActivate: [UnauthorizeGuardService],
            },
            {
                path: 'forgot-password',
                component: RequestForgotPageComponent,
                canActivate: [UnauthorizeGuardService],
            },
            {
                path: 'forgot-password/:id/:code',
                component: ForgotPageComponent,
                canActivate: [UnauthorizeGuardService],
            },
            {
                path: 'activate/:id/:code',
                component: ActivateAccountPageComponent,
                canActivate: [UnauthorizeGuardService],
            },
            {
                path: 'callback',
                component: OAuth2CallbackComponent,
                canActivate: [UnauthorizeGuardService],
            },
            {
                path: 'logout',
                component: LogoutComponent,
                canActivate: [AuthGuardService],
            },
        ],
    }];
export class DoAuthRoutingModule {
}
DoAuthRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoAuthRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoAuthRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoAuthRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
DoAuthRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoAuthRoutingModule, imports: [[RouterModule.forChild(routes)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoAuthRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tYXV0aC1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLWF1dGgvc3JjL2xpYi9kby1hdXRoLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBRXZELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbkYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDMUYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDakYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDeEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMENBQTBDLENBQUM7OztBQUVuRixNQUFNLE1BQU0sR0FBVyxDQUFDO1FBQ3RCLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLGFBQWE7UUFDeEIsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsU0FBUyxFQUFFLGtCQUFrQjtnQkFDN0IsV0FBVyxFQUFFLENBQUMsdUJBQXVCLENBQUM7YUFDdkM7WUFDRDtnQkFDRSxJQUFJLEVBQUUsT0FBTztnQkFDYixTQUFTLEVBQUUsa0JBQWtCO2dCQUM3QixXQUFXLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQzthQUN2QztZQUNEO2dCQUNFLElBQUksRUFBRSxPQUFPO2dCQUNiLFNBQVMsRUFBRSx1QkFBdUI7Z0JBQ2xDLFdBQVcsRUFBRSxDQUFDLHVCQUF1QixDQUFDO2FBQ3ZDO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFNBQVMsRUFBRSxxQkFBcUI7Z0JBQ2hDLFdBQVcsRUFBRSxDQUFDLHVCQUF1QixDQUFDO2FBQ3ZDO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGlCQUFpQjtnQkFDdkIsU0FBUyxFQUFFLDBCQUEwQjtnQkFDckMsV0FBVyxFQUFFLENBQUMsdUJBQXVCLENBQUM7YUFDdkM7WUFDRDtnQkFDRSxJQUFJLEVBQUUsMkJBQTJCO2dCQUNqQyxTQUFTLEVBQUUsbUJBQW1CO2dCQUM5QixXQUFXLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQzthQUN2QztZQUNEO2dCQUNFLElBQUksRUFBRSxvQkFBb0I7Z0JBQzFCLFNBQVMsRUFBRSw0QkFBNEI7Z0JBQ3ZDLFdBQVcsRUFBRSxDQUFDLHVCQUF1QixDQUFDO2FBQ3ZDO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFNBQVMsRUFBRSx1QkFBdUI7Z0JBQ2xDLFdBQVcsRUFBRSxDQUFDLHVCQUF1QixDQUFDO2FBQ3ZDO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsU0FBUyxFQUFFLGVBQWU7Z0JBQzFCLFdBQVcsRUFBRSxDQUFDLGdCQUFnQixDQUFDO2FBQ2hDO1NBQ0Y7S0FDRixDQUFDLENBQUM7QUFNSCxNQUFNLE9BQU8sbUJBQW1COztpSEFBbkIsbUJBQW1CO2tIQUFuQixtQkFBbUIsd0NBRnBCLFlBQVk7a0hBRVgsbUJBQW1CLFlBSHJCLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUM5QixZQUFZOzRGQUVYLG1CQUFtQjtrQkFKL0IsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN4QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVW5hdXRob3JpemVHdWFyZFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3VuYXV0aC1ndWFyZC5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhHdWFyZFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2F1dGgtZ3VhcmQuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9sYXlvdXQvYXV0aC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9naW5QYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9sb2dpbi9sb2dpbi1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dvdXRDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2xvZ291dC9sb2dvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcmNlTG9naW5QYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9mb3JjZS9mb3JjZS1sb2dpbi1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXF1ZXN0Rm9yZ290UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvZm9yZ290L3JlcXVlc3QtZm9yZ290LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcmdvdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2ZvcmdvdC9mb3Jnb3QtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVnaXN0ZXJQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBY3RpdmF0ZUFjY291bnRQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9hY3RpdmF0ZS1hY2NvdW50L2FjdGl2YXRlLWFjY291bnQtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgT0F1dGgyQ2FsbGJhY2tDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL29hdXRoMi9vYXV0aDItY2FsbGJhY2suY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbe1xuICBwYXRoOiAnJyxcbiAgY29tcG9uZW50OiBBdXRoQ29tcG9uZW50LFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHBhdGg6ICcnLFxuICAgICAgY29tcG9uZW50OiBMb2dpblBhZ2VDb21wb25lbnQsXG4gICAgICBjYW5BY3RpdmF0ZTogW1VuYXV0aG9yaXplR3VhcmRTZXJ2aWNlXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICdsb2dpbicsXG4gICAgICBjb21wb25lbnQ6IExvZ2luUGFnZUNvbXBvbmVudCxcbiAgICAgIGNhbkFjdGl2YXRlOiBbVW5hdXRob3JpemVHdWFyZFNlcnZpY2VdLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJ2ZvcmNlJyxcbiAgICAgIGNvbXBvbmVudDogRm9yY2VMb2dpblBhZ2VDb21wb25lbnQsXG4gICAgICBjYW5BY3RpdmF0ZTogW1VuYXV0aG9yaXplR3VhcmRTZXJ2aWNlXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICdyZWdpc3RlcicsXG4gICAgICBjb21wb25lbnQ6IFJlZ2lzdGVyUGFnZUNvbXBvbmVudCxcbiAgICAgIGNhbkFjdGl2YXRlOiBbVW5hdXRob3JpemVHdWFyZFNlcnZpY2VdLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJ2ZvcmdvdC1wYXNzd29yZCcsXG4gICAgICBjb21wb25lbnQ6IFJlcXVlc3RGb3Jnb3RQYWdlQ29tcG9uZW50LFxuICAgICAgY2FuQWN0aXZhdGU6IFtVbmF1dGhvcml6ZUd1YXJkU2VydmljZV0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnZm9yZ290LXBhc3N3b3JkLzppZC86Y29kZScsXG4gICAgICBjb21wb25lbnQ6IEZvcmdvdFBhZ2VDb21wb25lbnQsXG4gICAgICBjYW5BY3RpdmF0ZTogW1VuYXV0aG9yaXplR3VhcmRTZXJ2aWNlXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICdhY3RpdmF0ZS86aWQvOmNvZGUnLFxuICAgICAgY29tcG9uZW50OiBBY3RpdmF0ZUFjY291bnRQYWdlQ29tcG9uZW50LFxuICAgICAgY2FuQWN0aXZhdGU6IFtVbmF1dGhvcml6ZUd1YXJkU2VydmljZV0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnY2FsbGJhY2snLFxuICAgICAgY29tcG9uZW50OiBPQXV0aDJDYWxsYmFja0NvbXBvbmVudCxcbiAgICAgIGNhbkFjdGl2YXRlOiBbVW5hdXRob3JpemVHdWFyZFNlcnZpY2VdLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJ2xvZ291dCcsXG4gICAgICBjb21wb25lbnQ6IExvZ291dENvbXBvbmVudCxcbiAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkU2VydmljZV0sXG4gICAgfSxcbiAgXSxcbn1dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgRG9BdXRoUm91dGluZ01vZHVsZSB7XG59XG4iXX0=