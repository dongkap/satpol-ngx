import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbAlertModule, NbIconModule, NbDialogModule, NbButtonModule, NbTabsetModule, NbSpinnerModule, } from '@nebular/theme';
import { TranslateModule } from '@ngx-translate/core';
import { DoThemeModule } from '@dongkap/do-theme';
import { DoInputModule, DoCheckBoxModule, DoButtonModule, DoBaseModule, DoSelectModule, DoDatatableModule, DoEditorModule, } from '@dongkap/do-shared';
import { MgmtInventoryComponent } from './do-mgmt-inventory.component';
import { DoMgmtInventoryRoutingModule } from './do-mgmt-inventory-routing.module';
import { InventoryService } from './services/inventory.service';
import { InventoryListPageComponent } from './list/inventory-list-page.component';
import { InventoryAddEditPageComponent } from './add-edit/inventory-add-edit-page.component';
import * as i0 from "@angular/core";
import * as i1 from "@nebular/theme";
const components = [
    MgmtInventoryComponent,
    InventoryListPageComponent,
    InventoryAddEditPageComponent,
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
    DoMgmtInventoryRoutingModule,
];
const providers = [
    InventoryService,
];
export class DoMgmtInventoryModule {
}
DoMgmtInventoryModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtInventoryModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoMgmtInventoryModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtInventoryModule, declarations: [MgmtInventoryComponent,
        InventoryListPageComponent,
        InventoryAddEditPageComponent], imports: [FormsModule,
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
        DoMgmtInventoryRoutingModule] });
DoMgmtInventoryModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtInventoryModule, providers: [
        ...providers,
    ], imports: [[
            ...modules,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtInventoryModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tbWdtdC1pbnZlbnRvcnkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc3lzL3NyYy9saWIvaW52ZW50b3J5L2RvLW1nbXQtaW52ZW50b3J5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQ0wsWUFBWSxFQUNaLGFBQWEsRUFDYixZQUFZLEVBQ1osY0FBYyxFQUNkLGNBQWMsRUFDZCxjQUFjLEVBQ2QsZUFBZSxHQUNoQixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUNMLGFBQWEsRUFDYixnQkFBZ0IsRUFDaEIsY0FBYyxFQUNkLFlBQVksRUFDWixjQUFjLEVBQ2QsaUJBQWlCLEVBQ2pCLGNBQWMsR0FDZixNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDOzs7QUFFN0YsTUFBTSxVQUFVLEdBQUc7SUFDakIsc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQiw2QkFBNkI7Q0FDOUIsQ0FBQztBQUVGLE1BQU0sT0FBTyxHQUFHO0lBQ2QsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osY0FBYztJQUNkLGNBQWMsQ0FBQyxRQUFRLEVBQUU7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZixhQUFhO0lBQ2IsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsWUFBWTtJQUNaLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsY0FBYztJQUNkLDRCQUE0QjtDQUM3QixDQUFDO0FBRUYsTUFBTSxTQUFTLEdBQUc7SUFDaEIsZ0JBQWdCO0NBQ2pCLENBQUM7QUFhRixNQUFNLE9BQU8scUJBQXFCOzttSEFBckIscUJBQXFCO29IQUFyQixxQkFBcUIsaUJBMUNoQyxzQkFBc0I7UUFDdEIsMEJBQTBCO1FBQzFCLDZCQUE2QixhQUk3QixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixZQUFZO1FBQ1osYUFBYTtRQUNiLFlBQVk7UUFDWixjQUFjLHFCQUVkLGNBQWM7UUFDZCxlQUFlO1FBQ2YsYUFBYTtRQUNiLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLFlBQVk7UUFDWixjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLGNBQWM7UUFDZCw0QkFBNEI7b0hBa0JqQixxQkFBcUIsYUFKckI7UUFDVCxHQUFHLFNBQVM7S0FDYixZQVJRO1lBQ1AsR0FBRyxPQUFPO1NBQ1g7NEZBUVUscUJBQXFCO2tCQVhqQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxHQUFHLE9BQU87cUJBQ1g7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLEdBQUcsVUFBVTtxQkFDZDtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsR0FBRyxTQUFTO3FCQUNiO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgTmJDYXJkTW9kdWxlLFxuICBOYkFsZXJ0TW9kdWxlLFxuICBOYkljb25Nb2R1bGUsXG4gIE5iRGlhbG9nTW9kdWxlLFxuICBOYkJ1dHRvbk1vZHVsZSxcbiAgTmJUYWJzZXRNb2R1bGUsXG4gIE5iU3Bpbm5lck1vZHVsZSxcbn0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBEb1RoZW1lTW9kdWxlIH0gZnJvbSAnQGRvbmdrYXAvZG8tdGhlbWUnO1xuaW1wb3J0IHtcbiAgRG9JbnB1dE1vZHVsZSxcbiAgRG9DaGVja0JveE1vZHVsZSxcbiAgRG9CdXR0b25Nb2R1bGUsXG4gIERvQmFzZU1vZHVsZSxcbiAgRG9TZWxlY3RNb2R1bGUsXG4gIERvRGF0YXRhYmxlTW9kdWxlLFxuICBEb0VkaXRvck1vZHVsZSxcbn0gZnJvbSAnQGRvbmdrYXAvZG8tc2hhcmVkJztcbmltcG9ydCB7IE1nbXRJbnZlbnRvcnlDb21wb25lbnQgfSBmcm9tICcuL2RvLW1nbXQtaW52ZW50b3J5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEb01nbXRJbnZlbnRvcnlSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9kby1tZ210LWludmVudG9yeS1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBJbnZlbnRvcnlTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9pbnZlbnRvcnkuc2VydmljZSc7XG5pbXBvcnQgeyBJbnZlbnRvcnlMaXN0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vbGlzdC9pbnZlbnRvcnktbGlzdC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbnZlbnRvcnlBZGRFZGl0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vYWRkLWVkaXQvaW52ZW50b3J5LWFkZC1lZGl0LXBhZ2UuY29tcG9uZW50JztcblxuY29uc3QgY29tcG9uZW50cyA9IFtcbiAgTWdtdEludmVudG9yeUNvbXBvbmVudCxcbiAgSW52ZW50b3J5TGlzdFBhZ2VDb21wb25lbnQsXG4gIEludmVudG9yeUFkZEVkaXRQYWdlQ29tcG9uZW50LFxuXTtcblxuY29uc3QgbW9kdWxlcyA9IFtcbiAgRm9ybXNNb2R1bGUsXG4gIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIFRyYW5zbGF0ZU1vZHVsZSxcbiAgTmJDYXJkTW9kdWxlLFxuICBOYkFsZXJ0TW9kdWxlLFxuICBOYkljb25Nb2R1bGUsXG4gIE5iQnV0dG9uTW9kdWxlLFxuICBOYkRpYWxvZ01vZHVsZS5mb3JDaGlsZCgpLFxuICBOYlRhYnNldE1vZHVsZSxcbiAgTmJTcGlubmVyTW9kdWxlLFxuICBEb1RoZW1lTW9kdWxlLFxuICBEb0lucHV0TW9kdWxlLFxuICBEb0NoZWNrQm94TW9kdWxlLFxuICBEb0J1dHRvbk1vZHVsZSxcbiAgRG9CYXNlTW9kdWxlLFxuICBEb1NlbGVjdE1vZHVsZSxcbiAgRG9EYXRhdGFibGVNb2R1bGUsXG4gIERvRWRpdG9yTW9kdWxlLFxuICBEb01nbXRJbnZlbnRvcnlSb3V0aW5nTW9kdWxlLFxuXTtcblxuY29uc3QgcHJvdmlkZXJzID0gW1xuICBJbnZlbnRvcnlTZXJ2aWNlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIC4uLm1vZHVsZXMsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLmNvbXBvbmVudHMsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIC4uLnByb3ZpZGVycyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRG9NZ210SW52ZW50b3J5TW9kdWxlIHsgfVxuIl19