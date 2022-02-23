import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbAlertModule, NbIconModule, NbDialogModule, NbTabsetModule, NbSpinnerModule, NbButtonModule, } from '@nebular/theme';
import { TreeNgxModule } from 'tree-ngx';
import { TranslateModule } from '@ngx-translate/core';
import { DoThemeModule } from '@dongkap/do-theme';
import { DoInputModule, DoCheckBoxModule, DoButtonModule, DoBaseModule, DoSelectModule, DoDatatableModule, } from '@dongkap/do-shared';
import { MgmtMenuComponent } from './do-mgmt-menu.component';
import { MenuPageComponent } from './page/menu-page.component';
import { DoMgmtMenuRoutingModule } from './do-mgmt-menu-routing.module';
import { MainMenuPageComponent } from './main/main-menu-page.component';
import { ExtraMenuPageComponent } from './extra/extra-menu-page.component';
import { DialogIconComponent } from './dialog-icon/dialog-icon.component';
import * as i0 from "@angular/core";
import * as i1 from "@nebular/theme";
const components = [
    MgmtMenuComponent,
    MenuPageComponent,
    MainMenuPageComponent,
    ExtraMenuPageComponent,
    DialogIconComponent,
];
const entryComponents = [
    DialogIconComponent,
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
    DoThemeModule,
    DoInputModule,
    DoCheckBoxModule,
    DoButtonModule,
    DoBaseModule,
    DoSelectModule,
    DoDatatableModule,
    NbTabsetModule,
    NbSpinnerModule,
    TreeNgxModule,
    DoMgmtMenuRoutingModule,
];
const providers = [];
export class DoMgmtMenuModule {
}
DoMgmtMenuModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtMenuModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoMgmtMenuModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtMenuModule, declarations: [MgmtMenuComponent,
        MenuPageComponent,
        MainMenuPageComponent,
        ExtraMenuPageComponent,
        DialogIconComponent], imports: [FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        NbCardModule,
        NbAlertModule,
        NbIconModule,
        NbButtonModule, i1.NbDialogModule, DoThemeModule,
        DoInputModule,
        DoCheckBoxModule,
        DoButtonModule,
        DoBaseModule,
        DoSelectModule,
        DoDatatableModule,
        NbTabsetModule,
        NbSpinnerModule,
        TreeNgxModule,
        DoMgmtMenuRoutingModule] });
DoMgmtMenuModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtMenuModule, providers: [
        ...providers,
    ], imports: [[
            ...modules,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoMgmtMenuModule, decorators: [{
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
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tbWdtdC1tZW51Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXN5cy9zcmMvbGliL21lbnUvZG8tbWdtdC1tZW51Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQ0wsWUFBWSxFQUNaLGFBQWEsRUFDYixZQUFZLEVBQ1osY0FBYyxFQUNkLGNBQWMsRUFDZCxlQUFlLEVBQ2YsY0FBYyxHQUNmLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFDTCxhQUFhLEVBQ2IsZ0JBQWdCLEVBQ2hCLGNBQWMsRUFDZCxZQUFZLEVBQ1osY0FBYyxFQUNkLGlCQUFpQixHQUNsQixNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOzs7QUFFMUUsTUFBTSxVQUFVLEdBQUc7SUFDakIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtDQUNwQixDQUFDO0FBRUYsTUFBTSxlQUFlLEdBQUc7SUFDdEIsbUJBQW1CO0NBQ3BCLENBQUM7QUFFRixNQUFNLE9BQU8sR0FBRztJQUNkLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGNBQWM7SUFDZCxjQUFjLENBQUMsUUFBUSxFQUFFO0lBQ3pCLGFBQWE7SUFDYixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxZQUFZO0lBQ1osY0FBYztJQUNkLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGFBQWE7SUFDYix1QkFBdUI7Q0FDeEIsQ0FBQztBQUVGLE1BQU0sU0FBUyxHQUFHLEVBQ2pCLENBQUM7QUFnQkYsTUFBTSxPQUFPLGdCQUFnQjs7OEdBQWhCLGdCQUFnQjsrR0FBaEIsZ0JBQWdCLGlCQWxEM0IsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixxQkFBcUI7UUFDckIsc0JBQXNCO1FBQ3RCLG1CQUFtQixhQVFuQixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixZQUFZO1FBQ1osYUFBYTtRQUNiLFlBQVk7UUFDWixjQUFjLHFCQUVkLGFBQWE7UUFDYixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxZQUFZO1FBQ1osY0FBYztRQUNkLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2QsZUFBZTtRQUNmLGFBQWE7UUFDYix1QkFBdUI7K0dBb0JaLGdCQUFnQixhQVBoQjtRQUNULEdBQUcsU0FBUztLQUNiLFlBUlE7WUFDUCxHQUFHLE9BQU87U0FDWDs0RkFXVSxnQkFBZ0I7a0JBZDVCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLEdBQUcsT0FBTztxQkFDWDtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osR0FBRyxVQUFVO3FCQUNkO29CQUNELFNBQVMsRUFBRTt3QkFDVCxHQUFHLFNBQVM7cUJBQ2I7b0JBQ0QsZUFBZSxFQUFFO3dCQUNmLEdBQUcsZUFBZTtxQkFDbkI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBOYkNhcmRNb2R1bGUsXG4gIE5iQWxlcnRNb2R1bGUsXG4gIE5iSWNvbk1vZHVsZSxcbiAgTmJEaWFsb2dNb2R1bGUsXG4gIE5iVGFic2V0TW9kdWxlLFxuICBOYlNwaW5uZXJNb2R1bGUsXG4gIE5iQnV0dG9uTW9kdWxlLFxufSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBUcmVlTmd4TW9kdWxlIH0gZnJvbSAndHJlZS1uZ3gnO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBEb1RoZW1lTW9kdWxlIH0gZnJvbSAnQGRvbmdrYXAvZG8tdGhlbWUnO1xuaW1wb3J0IHtcbiAgRG9JbnB1dE1vZHVsZSxcbiAgRG9DaGVja0JveE1vZHVsZSxcbiAgRG9CdXR0b25Nb2R1bGUsXG4gIERvQmFzZU1vZHVsZSxcbiAgRG9TZWxlY3RNb2R1bGUsXG4gIERvRGF0YXRhYmxlTW9kdWxlLFxufSBmcm9tICdAZG9uZ2thcC9kby1zaGFyZWQnO1xuaW1wb3J0IHsgTWdtdE1lbnVDb21wb25lbnQgfSBmcm9tICcuL2RvLW1nbXQtbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWVudVBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3BhZ2UvbWVudS1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEb01nbXRNZW51Um91dGluZ01vZHVsZSB9IGZyb20gJy4vZG8tbWdtdC1tZW51LXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IE1haW5NZW51UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vbWFpbi9tYWluLW1lbnUtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXh0cmFNZW51UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vZXh0cmEvZXh0cmEtbWVudS1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEaWFsb2dJY29uQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2ctaWNvbi9kaWFsb2ctaWNvbi5jb21wb25lbnQnO1xuXG5jb25zdCBjb21wb25lbnRzID0gW1xuICBNZ210TWVudUNvbXBvbmVudCxcbiAgTWVudVBhZ2VDb21wb25lbnQsXG4gIE1haW5NZW51UGFnZUNvbXBvbmVudCxcbiAgRXh0cmFNZW51UGFnZUNvbXBvbmVudCxcbiAgRGlhbG9nSWNvbkNvbXBvbmVudCxcbl07XG5cbmNvbnN0IGVudHJ5Q29tcG9uZW50cyA9IFtcbiAgRGlhbG9nSWNvbkNvbXBvbmVudCxcbl07XG5cbmNvbnN0IG1vZHVsZXMgPSBbXG4gIEZvcm1zTW9kdWxlLFxuICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICBUcmFuc2xhdGVNb2R1bGUsXG4gIE5iQ2FyZE1vZHVsZSxcbiAgTmJBbGVydE1vZHVsZSxcbiAgTmJJY29uTW9kdWxlLFxuICBOYkJ1dHRvbk1vZHVsZSxcbiAgTmJEaWFsb2dNb2R1bGUuZm9yQ2hpbGQoKSxcbiAgRG9UaGVtZU1vZHVsZSxcbiAgRG9JbnB1dE1vZHVsZSxcbiAgRG9DaGVja0JveE1vZHVsZSxcbiAgRG9CdXR0b25Nb2R1bGUsXG4gIERvQmFzZU1vZHVsZSxcbiAgRG9TZWxlY3RNb2R1bGUsXG4gIERvRGF0YXRhYmxlTW9kdWxlLFxuICBOYlRhYnNldE1vZHVsZSxcbiAgTmJTcGlubmVyTW9kdWxlLFxuICBUcmVlTmd4TW9kdWxlLFxuICBEb01nbXRNZW51Um91dGluZ01vZHVsZSxcbl07XG5cbmNvbnN0IHByb3ZpZGVycyA9IFtcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICAuLi5tb2R1bGVzLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5jb21wb25lbnRzLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICAuLi5wcm92aWRlcnMsXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIC4uLmVudHJ5Q29tcG9uZW50cyxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEb01nbXRNZW51TW9kdWxlIHsgfVxuIl19