import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuardChildService } from '@dongkap/do-auth';
import { ExtraComponent } from './do-extra.component';
import { SecurityPageComponent } from './security/security-page.component';
import { SettingsPageComponent } from './settings/settings-page.component';
import { ProfilePageComponent } from './profile/profile-page.component';
import { TermsConditionsPageComponent } from './terms/terms-conditions-page.component';
import { PrivacyPolicyPageComponent } from './privacy-policy/privacy-policy-page.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [{
        path: '',
        component: ExtraComponent,
        canActivateChild: [AuthGuardChildService],
        children: [
            {
                path: 'profile',
                component: ProfilePageComponent,
                data: {
                    code: '#PROFILE-PAGE',
                    title: 'Profile',
                },
            },
            {
                path: 'security',
                component: SecurityPageComponent,
                data: {
                    code: '#SECURITY-PAGE',
                },
            },
            {
                path: 'settings',
                component: SettingsPageComponent,
                data: {
                    code: '#SETTINGS-PAGE',
                },
            },
            {
                path: 'terms',
                component: TermsConditionsPageComponent,
                data: {
                    code: '#SETTINGS-PAGE',
                },
            },
            {
                path: 'privacy-policy',
                component: PrivacyPolicyPageComponent,
                data: {
                    code: '#SETTINGS-PAGE',
                },
            },
        ],
    }];
export class DoExtraRoutingModule {
}
DoExtraRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoExtraRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoExtraRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoExtraRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
DoExtraRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoExtraRoutingModule, imports: [[RouterModule.forChild(routes)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoExtraRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tZXh0cmEtcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1leHRyYS9zcmMvbGliL2RvLWV4dHJhLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN2RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQzs7O0FBRTVGLE1BQU0sTUFBTSxHQUFXLENBQUM7UUFDdEIsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsY0FBYztRQUN6QixnQkFBZ0IsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1FBQ3pDLFFBQVEsRUFBRTtZQUNSO2dCQUNFLElBQUksRUFBRSxTQUFTO2dCQUNmLFNBQVMsRUFBRSxvQkFBb0I7Z0JBQy9CLElBQUksRUFBRTtvQkFDSixJQUFJLEVBQUUsZUFBZTtvQkFDckIsS0FBSyxFQUFFLFNBQVM7aUJBQ2pCO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsU0FBUyxFQUFFLHFCQUFxQjtnQkFDaEMsSUFBSSxFQUFFO29CQUNKLElBQUksRUFBRSxnQkFBZ0I7aUJBQ3ZCO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsU0FBUyxFQUFFLHFCQUFxQjtnQkFDaEMsSUFBSSxFQUFFO29CQUNKLElBQUksRUFBRSxnQkFBZ0I7aUJBQ3ZCO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsT0FBTztnQkFDYixTQUFTLEVBQUUsNEJBQTRCO2dCQUN2QyxJQUFJLEVBQUU7b0JBQ0osSUFBSSxFQUFFLGdCQUFnQjtpQkFDdkI7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxnQkFBZ0I7Z0JBQ3RCLFNBQVMsRUFBRSwwQkFBMEI7Z0JBQ3JDLElBQUksRUFBRTtvQkFDSixJQUFJLEVBQUUsZ0JBQWdCO2lCQUN2QjthQUNGO1NBQ0Y7S0FDRixDQUFDLENBQUM7QUFNSCxNQUFNLE9BQU8sb0JBQW9COztrSEFBcEIsb0JBQW9CO21IQUFwQixvQkFBb0Isd0NBRnJCLFlBQVk7bUhBRVgsb0JBQW9CLFlBSHRCLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUM5QixZQUFZOzRGQUVYLG9CQUFvQjtrQkFKaEMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN4QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhHdWFyZENoaWxkU2VydmljZSB9IGZyb20gJ0Bkb25na2FwL2RvLWF1dGgnO1xuaW1wb3J0IHsgRXh0cmFDb21wb25lbnQgfSBmcm9tICcuL2RvLWV4dHJhLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWN1cml0eVBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3NlY3VyaXR5L3NlY3VyaXR5LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFNldHRpbmdzUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vc2V0dGluZ3Mvc2V0dGluZ3MtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZmlsZVBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3Byb2ZpbGUvcHJvZmlsZS1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXJtc0NvbmRpdGlvbnNQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi90ZXJtcy90ZXJtcy1jb25kaXRpb25zLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFByaXZhY3lQb2xpY3lQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wcml2YWN5LXBvbGljeS9wcml2YWN5LXBvbGljeS1wYWdlLmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW3tcbiAgcGF0aDogJycsXG4gIGNvbXBvbmVudDogRXh0cmFDb21wb25lbnQsXG4gIGNhbkFjdGl2YXRlQ2hpbGQ6IFtBdXRoR3VhcmRDaGlsZFNlcnZpY2VdLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHBhdGg6ICdwcm9maWxlJyxcbiAgICAgIGNvbXBvbmVudDogUHJvZmlsZVBhZ2VDb21wb25lbnQsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvZGU6ICcjUFJPRklMRS1QQUdFJyxcbiAgICAgICAgdGl0bGU6ICdQcm9maWxlJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnc2VjdXJpdHknLFxuICAgICAgY29tcG9uZW50OiBTZWN1cml0eVBhZ2VDb21wb25lbnQsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvZGU6ICcjU0VDVVJJVFktUEFHRScsXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJ3NldHRpbmdzJyxcbiAgICAgIGNvbXBvbmVudDogU2V0dGluZ3NQYWdlQ29tcG9uZW50LFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlOiAnI1NFVFRJTkdTLVBBR0UnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICd0ZXJtcycsXG4gICAgICBjb21wb25lbnQ6IFRlcm1zQ29uZGl0aW9uc1BhZ2VDb21wb25lbnQsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvZGU6ICcjU0VUVElOR1MtUEFHRScsXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJ3ByaXZhY3ktcG9saWN5JyxcbiAgICAgIGNvbXBvbmVudDogUHJpdmFjeVBvbGljeVBhZ2VDb21wb25lbnQsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvZGU6ICcjU0VUVElOR1MtUEFHRScsXG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG59XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIERvRXh0cmFSb3V0aW5nTW9kdWxlIHtcbn1cbiJdfQ==