import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pages/404/404.component';
import { AuthComponent } from './pages/layout/auth.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
            {
                path: '404',
                component: PageNotFoundComponent,
            },
        ],
    },
];
export class MiscellaneousRoutingModule {
}
MiscellaneousRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MiscellaneousRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MiscellaneousRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MiscellaneousRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
MiscellaneousRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MiscellaneousRoutingModule, imports: [[RouterModule.forChild(routes)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MiscellaneousRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzY2VsbGFuZW91cy1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLWF1dGgvc3JjL2xpYi9taXNjZWxsYW5lb3VzLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBRXZELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7O0FBRTlELE1BQU0sTUFBTSxHQUFXO0lBQ3JCO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsYUFBYTtRQUN4QixRQUFRLEVBQUU7WUFDUjtnQkFDRSxJQUFJLEVBQUUsS0FBSztnQkFDWCxTQUFTLEVBQUUscUJBQXFCO2FBQ2pDO1NBQ0Y7S0FDRjtDQUNGLENBQUM7QUFNRixNQUFNLE9BQU8sMEJBQTBCOzt3SEFBMUIsMEJBQTBCO3lIQUExQiwwQkFBMEIsd0NBRjNCLFlBQVk7eUhBRVgsMEJBQTBCLFlBSDVCLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUM5QixZQUFZOzRGQUVYLDBCQUEwQjtrQkFKdEMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN4QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgUGFnZU5vdEZvdW5kQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy80MDQvNDA0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBdXRoQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9sYXlvdXQvYXV0aC5jb21wb25lbnQnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICcnLFxuICAgIGNvbXBvbmVudDogQXV0aENvbXBvbmVudCxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBwYXRoOiAnNDA0JyxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTm90Rm91bmRDb21wb25lbnQsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgTWlzY2VsbGFuZW91c1JvdXRpbmdNb2R1bGUge1xufVxuIl19