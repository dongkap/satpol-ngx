import { NgModule } from '@angular/core';
import { NbCardModule, NbLayoutModule, NbIconModule, } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DoThemeModule } from '@dongkap/do-theme';
import { AuthComponent } from './pages/layout/auth.component';
import { AuthBlockComponent } from './pages/layout/auth-block/auth-block.component';
import * as i0 from "@angular/core";
export class DoLayoutAuthModule {
}
DoLayoutAuthModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoLayoutAuthModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoLayoutAuthModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoLayoutAuthModule, declarations: [AuthComponent,
        AuthBlockComponent], imports: [NbLayoutModule,
        NbCardModule,
        NbIconModule,
        CommonModule,
        HttpClientModule,
        RouterModule,
        DoThemeModule], exports: [AuthComponent,
        AuthBlockComponent] });
DoLayoutAuthModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoLayoutAuthModule, imports: [[
            NbLayoutModule,
            NbCardModule,
            NbIconModule,
            CommonModule,
            HttpClientModule,
            RouterModule,
            DoThemeModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoLayoutAuthModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AuthComponent,
                        AuthBlockComponent,
                    ],
                    imports: [
                        NbLayoutModule,
                        NbCardModule,
                        NbIconModule,
                        CommonModule,
                        HttpClientModule,
                        RouterModule,
                        DoThemeModule,
                    ],
                    exports: [
                        AuthComponent,
                        AuthBlockComponent,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tbGF5b3V0LWF1dGgubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tYXV0aC9zcmMvbGliL2RvLWxheW91dC1hdXRoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFDTCxZQUFZLEVBQ1osY0FBYyxFQUNkLFlBQVksR0FDYixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQzs7QUFxQnBGLE1BQU0sT0FBTyxrQkFBa0I7O2dIQUFsQixrQkFBa0I7aUhBQWxCLGtCQUFrQixpQkFqQjNCLGFBQWE7UUFDYixrQkFBa0IsYUFHbEIsY0FBYztRQUNkLFlBQVk7UUFDWixZQUFZO1FBQ1osWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osYUFBYSxhQUdiLGFBQWE7UUFDYixrQkFBa0I7aUhBR1Qsa0JBQWtCLFlBZHBCO1lBQ1AsY0FBYztZQUNkLFlBQVk7WUFDWixZQUFZO1lBQ1osWUFBWTtZQUNaLGdCQUFnQjtZQUNoQixZQUFZO1lBQ1osYUFBYTtTQUNkOzRGQU1VLGtCQUFrQjtrQkFuQjlCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGFBQWE7d0JBQ2Isa0JBQWtCO3FCQUNuQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsY0FBYzt3QkFDZCxZQUFZO3dCQUNaLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixnQkFBZ0I7d0JBQ2hCLFlBQVk7d0JBQ1osYUFBYTtxQkFDZDtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsYUFBYTt3QkFDYixrQkFBa0I7cUJBQ25CO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE5iQ2FyZE1vZHVsZSxcbiAgTmJMYXlvdXRNb2R1bGUsXG4gIE5iSWNvbk1vZHVsZSxcbn0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRG9UaGVtZU1vZHVsZSB9IGZyb20gJ0Bkb25na2FwL2RvLXRoZW1lJztcbmltcG9ydCB7IEF1dGhDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2xheW91dC9hdXRoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBdXRoQmxvY2tDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2xheW91dC9hdXRoLWJsb2NrL2F1dGgtYmxvY2suY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXV0aENvbXBvbmVudCxcbiAgICBBdXRoQmxvY2tDb21wb25lbnQsXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBOYkxheW91dE1vZHVsZSxcbiAgICBOYkNhcmRNb2R1bGUsXG4gICAgTmJJY29uTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBEb1RoZW1lTW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQXV0aENvbXBvbmVudCxcbiAgICBBdXRoQmxvY2tDb21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIERvTGF5b3V0QXV0aE1vZHVsZSB7fVxuIl19