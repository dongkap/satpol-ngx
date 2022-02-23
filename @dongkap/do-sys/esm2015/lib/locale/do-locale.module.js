import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbAlertModule, NbIconModule, NbDialogModule } from '@nebular/theme';
import { TranslateModule } from '@ngx-translate/core';
import { DoThemeModule } from '@dongkap/do-theme';
import { DoInputModule, DoCheckBoxModule, DoButtonModule, DoBaseModule, DoSelectModule, DoDatatableModule, } from '@dongkap/do-shared';
import { LocaleComponent } from './do-locale.component';
import { LocaleListPageComponent } from './list/locale-list-page.component';
import { DoLocaleRoutingModule } from './do-locale-routing.module';
import { LocaleAddEditPageComponent } from './add-edit/locale-add-edit-page.component';
import { LocaleService } from './services/locale.service';
import { DialogFlagComponent } from './add-edit/dialog-flag/dialog-flag.component';
import * as i0 from "@angular/core";
import * as i1 from "@nebular/theme";
const components = [
    LocaleComponent,
    LocaleListPageComponent,
    LocaleAddEditPageComponent,
    DialogFlagComponent,
];
const modules = [
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NbCardModule,
    NbAlertModule,
    NbIconModule,
    NbDialogModule.forChild(),
    DoThemeModule,
    DoInputModule,
    DoCheckBoxModule,
    DoButtonModule,
    DoBaseModule,
    DoSelectModule,
    DoDatatableModule,
    DoLocaleRoutingModule,
];
const providers = [
    LocaleService,
];
const entryComponents = [
    DialogFlagComponent,
];
export class DoLocaleModule {
}
DoLocaleModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoLocaleModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoLocaleModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoLocaleModule, declarations: [LocaleComponent,
        LocaleListPageComponent,
        LocaleAddEditPageComponent,
        DialogFlagComponent], imports: [FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        NbCardModule,
        NbAlertModule,
        NbIconModule, i1.NbDialogModule, DoThemeModule,
        DoInputModule,
        DoCheckBoxModule,
        DoButtonModule,
        DoBaseModule,
        DoSelectModule,
        DoDatatableModule,
        DoLocaleRoutingModule] });
DoLocaleModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoLocaleModule, providers: [
        ...providers,
    ], imports: [[
            ...modules,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoLocaleModule, decorators: [{
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
                    entryComponents: [
                        ...entryComponents,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tbG9jYWxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXN5cy9zcmMvbGliL2xvY2FsZS9kby1sb2NhbGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFDTCxhQUFhLEVBQ2IsZ0JBQWdCLEVBQ2hCLGNBQWMsRUFDZCxZQUFZLEVBQ1osY0FBYyxFQUNkLGlCQUFpQixHQUNsQixNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN2RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOENBQThDLENBQUM7OztBQUVuRixNQUFNLFVBQVUsR0FBRztJQUNqQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQixtQkFBbUI7Q0FDcEIsQ0FBQztBQUVGLE1BQU0sT0FBTyxHQUFHO0lBQ2QsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osY0FBYyxDQUFDLFFBQVEsRUFBRTtJQUN6QixhQUFhO0lBQ2IsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsWUFBWTtJQUNaLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIscUJBQXFCO0NBQ3RCLENBQUM7QUFFRixNQUFNLFNBQVMsR0FBRztJQUNoQixhQUFhO0NBQ2QsQ0FBQztBQUVGLE1BQU0sZUFBZSxHQUFHO0lBQ3RCLG1CQUFtQjtDQUNwQixDQUFDO0FBZ0JGLE1BQU0sT0FBTyxjQUFjOzs0R0FBZCxjQUFjOzZHQUFkLGNBQWMsaUJBOUN6QixlQUFlO1FBQ2YsdUJBQXVCO1FBQ3ZCLDBCQUEwQjtRQUMxQixtQkFBbUIsYUFJbkIsV0FBVztRQUNYLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsWUFBWTtRQUNaLGFBQWE7UUFDYixZQUFZLHFCQUVaLGFBQWE7UUFDYixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxZQUFZO1FBQ1osY0FBYztRQUNkLGlCQUFpQjtRQUNqQixxQkFBcUI7NkdBeUJWLGNBQWMsYUFQZDtRQUNULEdBQUcsU0FBUztLQUNiLFlBUlE7WUFDUCxHQUFHLE9BQU87U0FDWDs0RkFXVSxjQUFjO2tCQWQxQixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxHQUFHLE9BQU87cUJBQ1g7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLEdBQUcsVUFBVTtxQkFDZDtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsR0FBRyxTQUFTO3FCQUNiO29CQUNELGVBQWUsRUFBRTt3QkFDZixHQUFHLGVBQWU7cUJBQ25CO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmJDYXJkTW9kdWxlLCBOYkFsZXJ0TW9kdWxlLCBOYkljb25Nb2R1bGUsIE5iRGlhbG9nTW9kdWxlIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBEb1RoZW1lTW9kdWxlIH0gZnJvbSAnQGRvbmdrYXAvZG8tdGhlbWUnO1xuaW1wb3J0IHtcbiAgRG9JbnB1dE1vZHVsZSxcbiAgRG9DaGVja0JveE1vZHVsZSxcbiAgRG9CdXR0b25Nb2R1bGUsXG4gIERvQmFzZU1vZHVsZSxcbiAgRG9TZWxlY3RNb2R1bGUsXG4gIERvRGF0YXRhYmxlTW9kdWxlLFxufSBmcm9tICdAZG9uZ2thcC9kby1zaGFyZWQnO1xuaW1wb3J0IHsgTG9jYWxlQ29tcG9uZW50IH0gZnJvbSAnLi9kby1sb2NhbGUuY29tcG9uZW50JztcbmltcG9ydCB7IExvY2FsZUxpc3RQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9saXN0L2xvY2FsZS1saXN0LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IERvTG9jYWxlUm91dGluZ01vZHVsZSB9IGZyb20gJy4vZG8tbG9jYWxlLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IExvY2FsZUFkZEVkaXRQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9hZGQtZWRpdC9sb2NhbGUtYWRkLWVkaXQtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9jYWxlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbG9jYWxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGlhbG9nRmxhZ0NvbXBvbmVudCB9IGZyb20gJy4vYWRkLWVkaXQvZGlhbG9nLWZsYWcvZGlhbG9nLWZsYWcuY29tcG9uZW50JztcblxuY29uc3QgY29tcG9uZW50cyA9IFtcbiAgTG9jYWxlQ29tcG9uZW50LFxuICBMb2NhbGVMaXN0UGFnZUNvbXBvbmVudCxcbiAgTG9jYWxlQWRkRWRpdFBhZ2VDb21wb25lbnQsXG4gIERpYWxvZ0ZsYWdDb21wb25lbnQsXG5dO1xuXG5jb25zdCBtb2R1bGVzID0gW1xuICBGb3Jtc01vZHVsZSxcbiAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgVHJhbnNsYXRlTW9kdWxlLFxuICBOYkNhcmRNb2R1bGUsXG4gIE5iQWxlcnRNb2R1bGUsXG4gIE5iSWNvbk1vZHVsZSxcbiAgTmJEaWFsb2dNb2R1bGUuZm9yQ2hpbGQoKSxcbiAgRG9UaGVtZU1vZHVsZSxcbiAgRG9JbnB1dE1vZHVsZSxcbiAgRG9DaGVja0JveE1vZHVsZSxcbiAgRG9CdXR0b25Nb2R1bGUsXG4gIERvQmFzZU1vZHVsZSxcbiAgRG9TZWxlY3RNb2R1bGUsXG4gIERvRGF0YXRhYmxlTW9kdWxlLFxuICBEb0xvY2FsZVJvdXRpbmdNb2R1bGUsXG5dO1xuXG5jb25zdCBwcm92aWRlcnMgPSBbXG4gIExvY2FsZVNlcnZpY2UsXG5dO1xuXG5jb25zdCBlbnRyeUNvbXBvbmVudHMgPSBbXG4gIERpYWxvZ0ZsYWdDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgLi4ubW9kdWxlcyxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uY29tcG9uZW50cyxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgLi4ucHJvdmlkZXJzLFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICAuLi5lbnRyeUNvbXBvbmVudHMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIERvTG9jYWxlTW9kdWxlIHsgfVxuIl19