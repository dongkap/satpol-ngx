import { NgModule } from '@angular/core';
import { NbButtonModule, NbIconModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { DoThemeModule } from '@dongkap/do-theme';
import { DoLayoutAuthModule } from './do-layout-auth.module';
import { MiscellaneousRoutingModule } from './miscellaneous-routing.module';
import { PageNotFoundComponent } from './pages/404/404.component';
import * as i0 from "@angular/core";
export class MiscellaneousModule {
}
MiscellaneousModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MiscellaneousModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MiscellaneousModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MiscellaneousModule, declarations: [PageNotFoundComponent], imports: [NbButtonModule,
        NbIconModule,
        CommonModule,
        DoThemeModule,
        DoLayoutAuthModule,
        MiscellaneousRoutingModule] });
MiscellaneousModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MiscellaneousModule, imports: [[
            NbButtonModule,
            NbIconModule,
            CommonModule,
            DoThemeModule,
            DoLayoutAuthModule,
            MiscellaneousRoutingModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MiscellaneousModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        NbButtonModule,
                        NbIconModule,
                        CommonModule,
                        DoThemeModule,
                        DoLayoutAuthModule,
                        MiscellaneousRoutingModule,
                    ],
                    declarations: [
                        PageNotFoundComponent,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzY2VsbGFuZW91cy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1hdXRoL3NyYy9saWIvbWlzY2VsbGFuZW91cy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDN0QsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDNUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0FBZWxFLE1BQU0sT0FBTyxtQkFBbUI7O2lIQUFuQixtQkFBbUI7a0hBQW5CLG1CQUFtQixpQkFINUIscUJBQXFCLGFBUnJCLGNBQWM7UUFDZCxZQUFZO1FBQ1osWUFBWTtRQUNaLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsMEJBQTBCO2tIQU1qQixtQkFBbUIsWUFackI7WUFDUCxjQUFjO1lBQ2QsWUFBWTtZQUNaLFlBQVk7WUFDWixhQUFhO1lBQ2Isa0JBQWtCO1lBQ2xCLDBCQUEwQjtTQUMzQjs0RkFLVSxtQkFBbUI7a0JBYi9CLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGNBQWM7d0JBQ2QsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGFBQWE7d0JBQ2Isa0JBQWtCO3dCQUNsQiwwQkFBMEI7cUJBQzNCO29CQUNELFlBQVksRUFBRTt3QkFDWixxQkFBcUI7cUJBQ3RCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5iQnV0dG9uTW9kdWxlLCBOYkljb25Nb2R1bGUgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBEb1RoZW1lTW9kdWxlIH0gZnJvbSAnQGRvbmdrYXAvZG8tdGhlbWUnO1xuaW1wb3J0IHsgRG9MYXlvdXRBdXRoTW9kdWxlIH0gZnJvbSAnLi9kby1sYXlvdXQtYXV0aC5tb2R1bGUnO1xuaW1wb3J0IHsgTWlzY2VsbGFuZW91c1JvdXRpbmdNb2R1bGUgfSBmcm9tICcuL21pc2NlbGxhbmVvdXMtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgUGFnZU5vdEZvdW5kQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy80MDQvNDA0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYkJ1dHRvbk1vZHVsZSxcbiAgICBOYkljb25Nb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIERvVGhlbWVNb2R1bGUsXG4gICAgRG9MYXlvdXRBdXRoTW9kdWxlLFxuICAgIE1pc2NlbGxhbmVvdXNSb3V0aW5nTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBQYWdlTm90Rm91bmRDb21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE1pc2NlbGxhbmVvdXNNb2R1bGUgeyB9XG4iXX0=