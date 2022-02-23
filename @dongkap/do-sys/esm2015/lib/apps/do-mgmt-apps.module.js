import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbAlertModule, NbIconModule, NbDialogModule, NbButtonModule, NbTabsetModule, NbSpinnerModule, } from '@nebular/theme';
import { TranslateModule } from '@ngx-translate/core';
import { DoThemeModule } from '@dongkap/do-theme';
import { DoInputModule, DoCheckBoxModule, DoButtonModule, DoBaseModule, DoSelectModule, DoDatatableModule, DoEditorModule, } from '@dongkap/do-shared';
import { MgmtAppsComponent } from './do-mgmt-apps.component';
import { DoMgmtAppsRoutingModule } from './do-mgmt-apps-routing.module';
import { AppsService } from './services/apps.service';
import { AppsListPageComponent } from './list/apps-list-page.component';
import { AppsAddEditPageComponent } from './add-edit/apps-add-edit-page.component';
import * as i0 from "@angular/core";
import * as i1 from "@nebular/theme";
const components = [
    MgmtAppsComponent,
    AppsListPageComponent,
    AppsAddEditPageComponent,
];
const modules = [
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NbCardModule,
    NbAlertModule,
    NbIconModule,
    NbButtonModule,
    NbDialogModule.forChild(),
    NbTabsetModule,
    NbSpinnerModule,
    DoThemeModule,
    DoInputModule,
    DoCheckBoxModule,
    DoButtonModule,
    DoBaseModule,
    DoSelectModule,
    DoDatatableModule,
    DoEditorModule,
    DoMgmtAppsRoutingModule,
];
const providers = [
    AppsService,
];
export class DoMgmtAppsModule {
}
DoMgmtAppsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtAppsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoMgmtAppsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtAppsModule, declarations: [MgmtAppsComponent,
        AppsListPageComponent,
        AppsAddEditPageComponent], imports: [FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        NbCardModule,
        NbAlertModule,
        NbIconModule,
        NbButtonModule, i1.NbDialogModule, NbTabsetModule,
        NbSpinnerModule,
        DoThemeModule,
        DoInputModule,
        DoCheckBoxModule,
        DoButtonModule,
        DoBaseModule,
        DoSelectModule,
        DoDatatableModule,
        DoEditorModule,
        DoMgmtAppsRoutingModule] });
DoMgmtAppsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtAppsModule, providers: [
        ...providers,
    ], imports: [[
            ...modules,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtAppsModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        ...modules,
                    ],
                    declarations: [
                        ...components,
                    ],
                    providers: [
                        ...providers,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tbWdtdC1hcHBzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXN5cy9zcmMvbGliL2FwcHMvZG8tbWdtdC1hcHBzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQ0wsWUFBWSxFQUNaLGFBQWEsRUFDYixZQUFZLEVBQ1osY0FBYyxFQUNkLGNBQWMsRUFDZCxjQUFjLEVBQ2QsZUFBZSxHQUNoQixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUNMLGFBQWEsRUFDYixnQkFBZ0IsRUFDaEIsY0FBYyxFQUNkLFlBQVksRUFDWixjQUFjLEVBQ2QsaUJBQWlCLEVBQ2pCLGNBQWMsR0FDZixNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzdELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7O0FBRW5GLE1BQU0sVUFBVSxHQUFHO0lBQ2pCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsd0JBQXdCO0NBQ3pCLENBQUM7QUFFRixNQUFNLE9BQU8sR0FBRztJQUNkLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGNBQWM7SUFDZCxjQUFjLENBQUMsUUFBUSxFQUFFO0lBQ3pCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsYUFBYTtJQUNiLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFlBQVk7SUFDWixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCx1QkFBdUI7Q0FDeEIsQ0FBQztBQUVGLE1BQU0sU0FBUyxHQUFHO0lBQ2hCLFdBQVc7Q0FDWixDQUFDO0FBYUYsTUFBTSxPQUFPLGdCQUFnQjs7OEdBQWhCLGdCQUFnQjsrR0FBaEIsZ0JBQWdCLGlCQTFDM0IsaUJBQWlCO1FBQ2pCLHFCQUFxQjtRQUNyQix3QkFBd0IsYUFJeEIsV0FBVztRQUNYLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsWUFBWTtRQUNaLGFBQWE7UUFDYixZQUFZO1FBQ1osY0FBYyxxQkFFZCxjQUFjO1FBQ2QsZUFBZTtRQUNmLGFBQWE7UUFDYixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxZQUFZO1FBQ1osY0FBYztRQUNkLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2QsdUJBQXVCOytHQWtCWixnQkFBZ0IsYUFKaEI7UUFDVCxHQUFHLFNBQVM7S0FDYixZQVJRO1lBQ1AsR0FBRyxPQUFPO1NBQ1g7NEZBUVUsZ0JBQWdCO2tCQVg1QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxHQUFHLE9BQU87cUJBQ1g7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLEdBQUcsVUFBVTtxQkFDZDtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsR0FBRyxTQUFTO3FCQUNiO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgTmJDYXJkTW9kdWxlLFxuICBOYkFsZXJ0TW9kdWxlLFxuICBOYkljb25Nb2R1bGUsXG4gIE5iRGlhbG9nTW9kdWxlLFxuICBOYkJ1dHRvbk1vZHVsZSxcbiAgTmJUYWJzZXRNb2R1bGUsXG4gIE5iU3Bpbm5lck1vZHVsZSxcbn0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBEb1RoZW1lTW9kdWxlIH0gZnJvbSAnQGRvbmdrYXAvZG8tdGhlbWUnO1xuaW1wb3J0IHtcbiAgRG9JbnB1dE1vZHVsZSxcbiAgRG9DaGVja0JveE1vZHVsZSxcbiAgRG9CdXR0b25Nb2R1bGUsXG4gIERvQmFzZU1vZHVsZSxcbiAgRG9TZWxlY3RNb2R1bGUsXG4gIERvRGF0YXRhYmxlTW9kdWxlLFxuICBEb0VkaXRvck1vZHVsZSxcbn0gZnJvbSAnQGRvbmdrYXAvZG8tc2hhcmVkJztcbmltcG9ydCB7IE1nbXRBcHBzQ29tcG9uZW50IH0gZnJvbSAnLi9kby1tZ210LWFwcHMuY29tcG9uZW50JztcbmltcG9ydCB7IERvTWdtdEFwcHNSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9kby1tZ210LWFwcHMtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgQXBwc1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2FwcHMuc2VydmljZSc7XG5pbXBvcnQgeyBBcHBzTGlzdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2xpc3QvYXBwcy1saXN0LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IEFwcHNBZGRFZGl0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vYWRkLWVkaXQvYXBwcy1hZGQtZWRpdC1wYWdlLmNvbXBvbmVudCc7XG5cbmNvbnN0IGNvbXBvbmVudHMgPSBbXG4gIE1nbXRBcHBzQ29tcG9uZW50LFxuICBBcHBzTGlzdFBhZ2VDb21wb25lbnQsXG4gIEFwcHNBZGRFZGl0UGFnZUNvbXBvbmVudCxcbl07XG5cbmNvbnN0IG1vZHVsZXMgPSBbXG4gIEZvcm1zTW9kdWxlLFxuICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICBUcmFuc2xhdGVNb2R1bGUsXG4gIE5iQ2FyZE1vZHVsZSxcbiAgTmJBbGVydE1vZHVsZSxcbiAgTmJJY29uTW9kdWxlLFxuICBOYkJ1dHRvbk1vZHVsZSxcbiAgTmJEaWFsb2dNb2R1bGUuZm9yQ2hpbGQoKSxcbiAgTmJUYWJzZXRNb2R1bGUsXG4gIE5iU3Bpbm5lck1vZHVsZSxcbiAgRG9UaGVtZU1vZHVsZSxcbiAgRG9JbnB1dE1vZHVsZSxcbiAgRG9DaGVja0JveE1vZHVsZSxcbiAgRG9CdXR0b25Nb2R1bGUsXG4gIERvQmFzZU1vZHVsZSxcbiAgRG9TZWxlY3RNb2R1bGUsXG4gIERvRGF0YXRhYmxlTW9kdWxlLFxuICBEb0VkaXRvck1vZHVsZSxcbiAgRG9NZ210QXBwc1JvdXRpbmdNb2R1bGUsXG5dO1xuXG5jb25zdCBwcm92aWRlcnMgPSBbXG4gIEFwcHNTZXJ2aWNlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIC4uLm1vZHVsZXMsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLmNvbXBvbmVudHMsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIC4uLnByb3ZpZGVycyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRG9NZ210QXBwc01vZHVsZSB7IH1cbiJdfQ==