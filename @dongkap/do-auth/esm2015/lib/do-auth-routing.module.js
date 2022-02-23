import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UnauthorizeGuardService } from './services/unauth-guard.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthComponent } from './pages/layout/auth.component';
import { LoginPageComponent } from './pages/login/login-page.component';
import { LogoutComponent } from './pages/logout/logout.component';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tYXV0aC1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLWF1dGgvc3JjL2xpYi9kby1hdXRoLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBRXZELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDMUYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDakYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDeEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMENBQTBDLENBQUM7OztBQUVuRixNQUFNLE1BQU0sR0FBVyxDQUFDO1FBQ3RCLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLGFBQWE7UUFDeEIsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsU0FBUyxFQUFFLGtCQUFrQjtnQkFDN0IsV0FBVyxFQUFFLENBQUMsdUJBQXVCLENBQUM7YUFDdkM7WUFDRDtnQkFDRSxJQUFJLEVBQUUsT0FBTztnQkFDYixTQUFTLEVBQUUsa0JBQWtCO2dCQUM3QixXQUFXLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQzthQUN2QztZQUNEO2dCQUNFLElBQUksRUFBRSxVQUFVO2dCQUNoQixTQUFTLEVBQUUscUJBQXFCO2dCQUNoQyxXQUFXLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQzthQUN2QztZQUNEO2dCQUNFLElBQUksRUFBRSxpQkFBaUI7Z0JBQ3ZCLFNBQVMsRUFBRSwwQkFBMEI7Z0JBQ3JDLFdBQVcsRUFBRSxDQUFDLHVCQUF1QixDQUFDO2FBQ3ZDO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLDJCQUEyQjtnQkFDakMsU0FBUyxFQUFFLG1CQUFtQjtnQkFDOUIsV0FBVyxFQUFFLENBQUMsdUJBQXVCLENBQUM7YUFDdkM7WUFDRDtnQkFDRSxJQUFJLEVBQUUsb0JBQW9CO2dCQUMxQixTQUFTLEVBQUUsNEJBQTRCO2dCQUN2QyxXQUFXLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQzthQUN2QztZQUNEO2dCQUNFLElBQUksRUFBRSxVQUFVO2dCQUNoQixTQUFTLEVBQUUsdUJBQXVCO2dCQUNsQyxXQUFXLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQzthQUN2QztZQUNEO2dCQUNFLElBQUksRUFBRSxRQUFRO2dCQUNkLFNBQVMsRUFBRSxlQUFlO2dCQUMxQixXQUFXLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQzthQUNoQztTQUNGO0tBQ0YsQ0FBQyxDQUFDO0FBTUgsTUFBTSxPQUFPLG1CQUFtQjs7aUhBQW5CLG1CQUFtQjtrSEFBbkIsbUJBQW1CLHdDQUZwQixZQUFZO2tIQUVYLG1CQUFtQixZQUhyQixDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFDOUIsWUFBWTs0RkFFWCxtQkFBbUI7a0JBSi9CLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDeEMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUN4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFVuYXV0aG9yaXplR3VhcmRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy91bmF1dGgtZ3VhcmQuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoR3VhcmRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hdXRoLWd1YXJkLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aENvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvbGF5b3V0L2F1dGguY29tcG9uZW50JztcbmltcG9ydCB7IExvZ2luUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvbG9naW4vbG9naW4tcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9nb3V0Q29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXF1ZXN0Rm9yZ290UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvZm9yZ290L3JlcXVlc3QtZm9yZ290LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcmdvdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2ZvcmdvdC9mb3Jnb3QtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVnaXN0ZXJQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBY3RpdmF0ZUFjY291bnRQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9hY3RpdmF0ZS1hY2NvdW50L2FjdGl2YXRlLWFjY291bnQtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgT0F1dGgyQ2FsbGJhY2tDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL29hdXRoMi9vYXV0aDItY2FsbGJhY2suY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbe1xuICBwYXRoOiAnJyxcbiAgY29tcG9uZW50OiBBdXRoQ29tcG9uZW50LFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHBhdGg6ICcnLFxuICAgICAgY29tcG9uZW50OiBMb2dpblBhZ2VDb21wb25lbnQsXG4gICAgICBjYW5BY3RpdmF0ZTogW1VuYXV0aG9yaXplR3VhcmRTZXJ2aWNlXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICdsb2dpbicsXG4gICAgICBjb21wb25lbnQ6IExvZ2luUGFnZUNvbXBvbmVudCxcbiAgICAgIGNhbkFjdGl2YXRlOiBbVW5hdXRob3JpemVHdWFyZFNlcnZpY2VdLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJ3JlZ2lzdGVyJyxcbiAgICAgIGNvbXBvbmVudDogUmVnaXN0ZXJQYWdlQ29tcG9uZW50LFxuICAgICAgY2FuQWN0aXZhdGU6IFtVbmF1dGhvcml6ZUd1YXJkU2VydmljZV0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnZm9yZ290LXBhc3N3b3JkJyxcbiAgICAgIGNvbXBvbmVudDogUmVxdWVzdEZvcmdvdFBhZ2VDb21wb25lbnQsXG4gICAgICBjYW5BY3RpdmF0ZTogW1VuYXV0aG9yaXplR3VhcmRTZXJ2aWNlXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICdmb3Jnb3QtcGFzc3dvcmQvOmlkLzpjb2RlJyxcbiAgICAgIGNvbXBvbmVudDogRm9yZ290UGFnZUNvbXBvbmVudCxcbiAgICAgIGNhbkFjdGl2YXRlOiBbVW5hdXRob3JpemVHdWFyZFNlcnZpY2VdLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJ2FjdGl2YXRlLzppZC86Y29kZScsXG4gICAgICBjb21wb25lbnQ6IEFjdGl2YXRlQWNjb3VudFBhZ2VDb21wb25lbnQsXG4gICAgICBjYW5BY3RpdmF0ZTogW1VuYXV0aG9yaXplR3VhcmRTZXJ2aWNlXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICdjYWxsYmFjaycsXG4gICAgICBjb21wb25lbnQ6IE9BdXRoMkNhbGxiYWNrQ29tcG9uZW50LFxuICAgICAgY2FuQWN0aXZhdGU6IFtVbmF1dGhvcml6ZUd1YXJkU2VydmljZV0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnbG9nb3V0JyxcbiAgICAgIGNvbXBvbmVudDogTG9nb3V0Q29tcG9uZW50LFxuICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRTZXJ2aWNlXSxcbiAgICB9LFxuICBdLFxufV07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBEb0F1dGhSb3V0aW5nTW9kdWxlIHtcbn1cbiJdfQ==