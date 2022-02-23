import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbAlertModule, NbIconModule, NbDialogModule, NbButtonModule, NbTabsetModule, NbSpinnerModule, } from '@nebular/theme';
import { TranslateModule } from '@ngx-translate/core';
import { DoThemeModule } from '@dongkap/do-theme';
import { DoInputModule, DoCheckBoxModule, DoButtonModule, DoBaseModule, DoSelectModule, DoDatatableModule, DoEditorModule, DoDatePickerModule, } from '@dongkap/do-shared';
import { MgmtBusinessPartnerComponent } from './do-mgmt-business-partner.component';
import { DoMgmtBusinessPartnerRoutingModule } from './do-mgmt-business-partner-routing.module';
import { BusinessPartnerService } from './services/business-partner.service';
import { BusinessPartnerListPageComponent } from './list/business-partner-list-page.component';
import { BusinessPartnerAddEditPageComponent } from './add-edit/business-partner-add-edit-page.component';
import * as i0 from "@angular/core";
import * as i1 from "@nebular/theme";
const components = [
    MgmtBusinessPartnerComponent,
    BusinessPartnerListPageComponent,
    BusinessPartnerAddEditPageComponent,
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
    DoDatePickerModule,
    DoMgmtBusinessPartnerRoutingModule,
];
const providers = [
    BusinessPartnerService,
];
export class DoMgmtBusinessPartnerModule {
}
DoMgmtBusinessPartnerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtBusinessPartnerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoMgmtBusinessPartnerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtBusinessPartnerModule, declarations: [MgmtBusinessPartnerComponent,
        BusinessPartnerListPageComponent,
        BusinessPartnerAddEditPageComponent], imports: [FormsModule,
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
        DoDatePickerModule,
        DoMgmtBusinessPartnerRoutingModule] });
DoMgmtBusinessPartnerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtBusinessPartnerModule, providers: [
        ...providers,
    ], imports: [[
            ...modules,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtBusinessPartnerModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tbWdtdC1idXNpbmVzcy1wYXJ0bmVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXN5cy9zcmMvbGliL2J1c2luZXNzLXBhcnRuZXIvZG8tbWdtdC1idXNpbmVzcy1wYXJ0bmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQ0wsWUFBWSxFQUNaLGFBQWEsRUFDYixZQUFZLEVBQ1osY0FBYyxFQUNkLGNBQWMsRUFDZCxjQUFjLEVBQ2QsZUFBZSxHQUNoQixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUNMLGFBQWEsRUFDYixnQkFBZ0IsRUFDaEIsY0FBYyxFQUNkLFlBQVksRUFDWixjQUFjLEVBQ2QsaUJBQWlCLEVBQ2pCLGNBQWMsRUFDZCxrQkFBa0IsR0FDbkIsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNwRixPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMvRixPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxxREFBcUQsQ0FBQzs7O0FBRTFHLE1BQU0sVUFBVSxHQUFHO0lBQ2pCLDRCQUE0QjtJQUM1QixnQ0FBZ0M7SUFDaEMsbUNBQW1DO0NBQ3BDLENBQUM7QUFFRixNQUFNLE9BQU8sR0FBRztJQUNkLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGNBQWM7SUFDZCxjQUFjLENBQUMsUUFBUSxFQUFFO0lBQ3pCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsYUFBYTtJQUNiLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFlBQVk7SUFDWixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0NBQWtDO0NBQ25DLENBQUM7QUFFRixNQUFNLFNBQVMsR0FBRztJQUNoQixzQkFBc0I7Q0FDdkIsQ0FBQztBQWFGLE1BQU0sT0FBTywyQkFBMkI7O3lIQUEzQiwyQkFBMkI7MEhBQTNCLDJCQUEyQixpQkEzQ3RDLDRCQUE0QjtRQUM1QixnQ0FBZ0M7UUFDaEMsbUNBQW1DLGFBSW5DLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLFlBQVk7UUFDWixhQUFhO1FBQ2IsWUFBWTtRQUNaLGNBQWMscUJBRWQsY0FBYztRQUNkLGVBQWU7UUFDZixhQUFhO1FBQ2IsYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsWUFBWTtRQUNaLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsY0FBYztRQUNkLGtCQUFrQjtRQUNsQixrQ0FBa0M7MEhBa0J2QiwyQkFBMkIsYUFKM0I7UUFDVCxHQUFHLFNBQVM7S0FDYixZQVJRO1lBQ1AsR0FBRyxPQUFPO1NBQ1g7NEZBUVUsMkJBQTJCO2tCQVh2QyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxHQUFHLE9BQU87cUJBQ1g7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLEdBQUcsVUFBVTtxQkFDZDtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsR0FBRyxTQUFTO3FCQUNiO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgTmJDYXJkTW9kdWxlLFxuICBOYkFsZXJ0TW9kdWxlLFxuICBOYkljb25Nb2R1bGUsXG4gIE5iRGlhbG9nTW9kdWxlLFxuICBOYkJ1dHRvbk1vZHVsZSxcbiAgTmJUYWJzZXRNb2R1bGUsXG4gIE5iU3Bpbm5lck1vZHVsZSxcbn0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBEb1RoZW1lTW9kdWxlIH0gZnJvbSAnQGRvbmdrYXAvZG8tdGhlbWUnO1xuaW1wb3J0IHtcbiAgRG9JbnB1dE1vZHVsZSxcbiAgRG9DaGVja0JveE1vZHVsZSxcbiAgRG9CdXR0b25Nb2R1bGUsXG4gIERvQmFzZU1vZHVsZSxcbiAgRG9TZWxlY3RNb2R1bGUsXG4gIERvRGF0YXRhYmxlTW9kdWxlLFxuICBEb0VkaXRvck1vZHVsZSxcbiAgRG9EYXRlUGlja2VyTW9kdWxlLFxufSBmcm9tICdAZG9uZ2thcC9kby1zaGFyZWQnO1xuaW1wb3J0IHsgTWdtdEJ1c2luZXNzUGFydG5lckNvbXBvbmVudCB9IGZyb20gJy4vZG8tbWdtdC1idXNpbmVzcy1wYXJ0bmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEb01nbXRCdXNpbmVzc1BhcnRuZXJSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9kby1tZ210LWJ1c2luZXNzLXBhcnRuZXItcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgQnVzaW5lc3NQYXJ0bmVyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYnVzaW5lc3MtcGFydG5lci5zZXJ2aWNlJztcbmltcG9ydCB7IEJ1c2luZXNzUGFydG5lckxpc3RQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9saXN0L2J1c2luZXNzLXBhcnRuZXItbGlzdC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCdXNpbmVzc1BhcnRuZXJBZGRFZGl0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vYWRkLWVkaXQvYnVzaW5lc3MtcGFydG5lci1hZGQtZWRpdC1wYWdlLmNvbXBvbmVudCc7XG5cbmNvbnN0IGNvbXBvbmVudHMgPSBbXG4gIE1nbXRCdXNpbmVzc1BhcnRuZXJDb21wb25lbnQsXG4gIEJ1c2luZXNzUGFydG5lckxpc3RQYWdlQ29tcG9uZW50LFxuICBCdXNpbmVzc1BhcnRuZXJBZGRFZGl0UGFnZUNvbXBvbmVudCxcbl07XG5cbmNvbnN0IG1vZHVsZXMgPSBbXG4gIEZvcm1zTW9kdWxlLFxuICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICBUcmFuc2xhdGVNb2R1bGUsXG4gIE5iQ2FyZE1vZHVsZSxcbiAgTmJBbGVydE1vZHVsZSxcbiAgTmJJY29uTW9kdWxlLFxuICBOYkJ1dHRvbk1vZHVsZSxcbiAgTmJEaWFsb2dNb2R1bGUuZm9yQ2hpbGQoKSxcbiAgTmJUYWJzZXRNb2R1bGUsXG4gIE5iU3Bpbm5lck1vZHVsZSxcbiAgRG9UaGVtZU1vZHVsZSxcbiAgRG9JbnB1dE1vZHVsZSxcbiAgRG9DaGVja0JveE1vZHVsZSxcbiAgRG9CdXR0b25Nb2R1bGUsXG4gIERvQmFzZU1vZHVsZSxcbiAgRG9TZWxlY3RNb2R1bGUsXG4gIERvRGF0YXRhYmxlTW9kdWxlLFxuICBEb0VkaXRvck1vZHVsZSxcbiAgRG9EYXRlUGlja2VyTW9kdWxlLFxuICBEb01nbXRCdXNpbmVzc1BhcnRuZXJSb3V0aW5nTW9kdWxlLFxuXTtcblxuY29uc3QgcHJvdmlkZXJzID0gW1xuICBCdXNpbmVzc1BhcnRuZXJTZXJ2aWNlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIC4uLm1vZHVsZXMsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLmNvbXBvbmVudHMsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIC4uLnByb3ZpZGVycyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRG9NZ210QnVzaW5lc3NQYXJ0bmVyTW9kdWxlIHsgfVxuIl19