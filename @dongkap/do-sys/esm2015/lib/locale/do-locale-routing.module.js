import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuardChildService } from '@dongkap/do-auth';
import { LocaleComponent } from './do-locale.component';
import { LocaleListPageComponent } from './list/locale-list-page.component';
import { LocaleAddEditPageComponent } from './add-edit/locale-add-edit-page.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [{
        path: '',
        component: LocaleComponent,
        canActivateChild: [AuthGuardChildService],
        children: [
            {
                path: '',
                component: LocaleListPageComponent,
                data: {
                    code: '#SYSCONF-I18N-PAGE',
                },
            },
            {
                path: ':action',
                component: LocaleAddEditPageComponent,
                data: {
                    code: '#SYSCONF-I18N-PAGE',
                },
            },
        ],
    }];
export class DoLocaleRoutingModule {
}
DoLocaleRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoLocaleRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoLocaleRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoLocaleRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
DoLocaleRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoLocaleRoutingModule, imports: [[RouterModule.forChild(routes)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoLocaleRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tbG9jYWxlLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc3lzL3NyYy9saWIvbG9jYWxlL2RvLWxvY2FsZS1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDNUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7OztBQUV2RixNQUFNLE1BQU0sR0FBVyxDQUFDO1FBQ3RCLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLGVBQWU7UUFDMUIsZ0JBQWdCLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztRQUN6QyxRQUFRLEVBQUU7WUFDUjtnQkFDRSxJQUFJLEVBQUUsRUFBRTtnQkFDUixTQUFTLEVBQUUsdUJBQXVCO2dCQUNsQyxJQUFJLEVBQUU7b0JBQ0osSUFBSSxFQUFFLG9CQUFvQjtpQkFDM0I7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxTQUFTO2dCQUNmLFNBQVMsRUFBRSwwQkFBMEI7Z0JBQ3JDLElBQUksRUFBRTtvQkFDSixJQUFJLEVBQUUsb0JBQW9CO2lCQUMzQjthQUNGO1NBQ0Y7S0FDRixDQUFDLENBQUM7QUFNSCxNQUFNLE9BQU8scUJBQXFCOzttSEFBckIscUJBQXFCO29IQUFyQixxQkFBcUIsd0NBRnRCLFlBQVk7b0hBRVgscUJBQXFCLFlBSHZCLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUM5QixZQUFZOzRGQUVYLHFCQUFxQjtrQkFKakMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN4QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhHdWFyZENoaWxkU2VydmljZSB9IGZyb20gJ0Bkb25na2FwL2RvLWF1dGgnO1xuaW1wb3J0IHsgTG9jYWxlQ29tcG9uZW50IH0gZnJvbSAnLi9kby1sb2NhbGUuY29tcG9uZW50JztcbmltcG9ydCB7IExvY2FsZUxpc3RQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9saXN0L2xvY2FsZS1saXN0LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IExvY2FsZUFkZEVkaXRQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9hZGQtZWRpdC9sb2NhbGUtYWRkLWVkaXQtcGFnZS5jb21wb25lbnQnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFt7XG4gIHBhdGg6ICcnLFxuICBjb21wb25lbnQ6IExvY2FsZUNvbXBvbmVudCxcbiAgY2FuQWN0aXZhdGVDaGlsZDogW0F1dGhHdWFyZENoaWxkU2VydmljZV0sXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgcGF0aDogJycsXG4gICAgICBjb21wb25lbnQ6IExvY2FsZUxpc3RQYWdlQ29tcG9uZW50LFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlOiAnI1NZU0NPTkYtSTE4Ti1QQUdFJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnOmFjdGlvbicsXG4gICAgICBjb21wb25lbnQ6IExvY2FsZUFkZEVkaXRQYWdlQ29tcG9uZW50LFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlOiAnI1NZU0NPTkYtSTE4Ti1QQUdFJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbn1dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgRG9Mb2NhbGVSb3V0aW5nTW9kdWxlIHtcbn1cbiJdfQ==