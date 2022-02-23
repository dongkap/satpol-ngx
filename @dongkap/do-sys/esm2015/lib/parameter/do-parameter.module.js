import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbAlertModule, NbIconModule, NbDialogModule, NbButtonModule } from '@nebular/theme';
import { TranslateModule } from '@ngx-translate/core';
import { DoThemeModule } from '@dongkap/do-theme';
import { DoInputModule, DoCheckBoxModule, DoButtonModule, DoBaseModule, DoSelectModule, DoDatatableModule, } from '@dongkap/do-shared';
import { ParameterComponent } from './do-parameter.component';
import { DoParameterRoutingModule } from './do-parameter-routing.module';
import { ParameterService } from './services/parameter.service';
import { ParameterListGroupPageComponent } from './parameter-group/list/parameter-list-group-page.component';
import { ParameterAddGroupPageComponent } from './parameter-group/add/parameter-add-group-page.component';
import { ParameterListDetailPageComponent } from './parameter-detail/list/parameter-list-detail-page.component';
import { ParameterAddEditDetailPageComponent } from './parameter-detail/add-edit/parameter-add-edit-detail-page.component';
import * as i0 from "@angular/core";
import * as i1 from "@nebular/theme";
const components = [
    ParameterComponent,
    ParameterListGroupPageComponent,
    ParameterAddGroupPageComponent,
    ParameterListDetailPageComponent,
    ParameterAddEditDetailPageComponent,
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
    DoParameterRoutingModule,
];
const providers = [
    ParameterService,
];
export class DoParameterModule {
}
DoParameterModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoParameterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoParameterModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoParameterModule, declarations: [ParameterComponent,
        ParameterListGroupPageComponent,
        ParameterAddGroupPageComponent,
        ParameterListDetailPageComponent,
        ParameterAddEditDetailPageComponent], imports: [FormsModule,
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
        DoParameterRoutingModule] });
DoParameterModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoParameterModule, providers: [
        ...providers,
    ], imports: [[
            ...modules,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoParameterModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tcGFyYW1ldGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXN5cy9zcmMvbGliL3BhcmFtZXRlci9kby1wYXJhbWV0ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0csT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQ0wsYUFBYSxFQUNiLGdCQUFnQixFQUNoQixjQUFjLEVBQ2QsWUFBWSxFQUNaLGNBQWMsRUFDZCxpQkFBaUIsR0FDbEIsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUM3RyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUNoSCxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQzs7O0FBRTNILE1BQU0sVUFBVSxHQUFHO0lBQ2pCLGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0IsOEJBQThCO0lBQzlCLGdDQUFnQztJQUNoQyxtQ0FBbUM7Q0FDcEMsQ0FBQztBQUVGLE1BQU0sT0FBTyxHQUFHO0lBQ2QsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osY0FBYztJQUNkLGNBQWMsQ0FBQyxRQUFRLEVBQUU7SUFDekIsYUFBYTtJQUNiLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFlBQVk7SUFDWixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHdCQUF3QjtDQUN6QixDQUFDO0FBRUYsTUFBTSxTQUFTLEdBQUc7SUFDaEIsZ0JBQWdCO0NBQ2pCLENBQUM7QUFhRixNQUFNLE9BQU8saUJBQWlCOzsrR0FBakIsaUJBQWlCO2dIQUFqQixpQkFBaUIsaUJBekM1QixrQkFBa0I7UUFDbEIsK0JBQStCO1FBQy9CLDhCQUE4QjtRQUM5QixnQ0FBZ0M7UUFDaEMsbUNBQW1DLGFBSW5DLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLFlBQVk7UUFDWixhQUFhO1FBQ2IsWUFBWTtRQUNaLGNBQWMscUJBRWQsYUFBYTtRQUNiLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLFlBQVk7UUFDWixjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLHdCQUF3QjtnSEFrQmIsaUJBQWlCLGFBSmpCO1FBQ1QsR0FBRyxTQUFTO0tBQ2IsWUFSUTtZQUNQLEdBQUcsT0FBTztTQUNYOzRGQVFVLGlCQUFpQjtrQkFYN0IsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsR0FBRyxPQUFPO3FCQUNYO29CQUNELFlBQVksRUFBRTt3QkFDWixHQUFHLFVBQVU7cUJBQ2Q7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULEdBQUcsU0FBUztxQkFDYjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5iQ2FyZE1vZHVsZSwgTmJBbGVydE1vZHVsZSwgTmJJY29uTW9kdWxlLCBOYkRpYWxvZ01vZHVsZSwgTmJCdXR0b25Nb2R1bGUgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IERvVGhlbWVNb2R1bGUgfSBmcm9tICdAZG9uZ2thcC9kby10aGVtZSc7XG5pbXBvcnQge1xuICBEb0lucHV0TW9kdWxlLFxuICBEb0NoZWNrQm94TW9kdWxlLFxuICBEb0J1dHRvbk1vZHVsZSxcbiAgRG9CYXNlTW9kdWxlLFxuICBEb1NlbGVjdE1vZHVsZSxcbiAgRG9EYXRhdGFibGVNb2R1bGUsXG59IGZyb20gJ0Bkb25na2FwL2RvLXNoYXJlZCc7XG5pbXBvcnQgeyBQYXJhbWV0ZXJDb21wb25lbnQgfSBmcm9tICcuL2RvLXBhcmFtZXRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRG9QYXJhbWV0ZXJSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9kby1wYXJhbWV0ZXItcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgUGFyYW1ldGVyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcGFyYW1ldGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFyYW1ldGVyTGlzdEdyb3VwUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcGFyYW1ldGVyLWdyb3VwL2xpc3QvcGFyYW1ldGVyLWxpc3QtZ3JvdXAtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFyYW1ldGVyQWRkR3JvdXBQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wYXJhbWV0ZXItZ3JvdXAvYWRkL3BhcmFtZXRlci1hZGQtZ3JvdXAtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFyYW1ldGVyTGlzdERldGFpbFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3BhcmFtZXRlci1kZXRhaWwvbGlzdC9wYXJhbWV0ZXItbGlzdC1kZXRhaWwtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFyYW1ldGVyQWRkRWRpdERldGFpbFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3BhcmFtZXRlci1kZXRhaWwvYWRkLWVkaXQvcGFyYW1ldGVyLWFkZC1lZGl0LWRldGFpbC1wYWdlLmNvbXBvbmVudCc7XG5cbmNvbnN0IGNvbXBvbmVudHMgPSBbXG4gIFBhcmFtZXRlckNvbXBvbmVudCxcbiAgUGFyYW1ldGVyTGlzdEdyb3VwUGFnZUNvbXBvbmVudCxcbiAgUGFyYW1ldGVyQWRkR3JvdXBQYWdlQ29tcG9uZW50LFxuICBQYXJhbWV0ZXJMaXN0RGV0YWlsUGFnZUNvbXBvbmVudCxcbiAgUGFyYW1ldGVyQWRkRWRpdERldGFpbFBhZ2VDb21wb25lbnQsXG5dO1xuXG5jb25zdCBtb2R1bGVzID0gW1xuICBGb3Jtc01vZHVsZSxcbiAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgVHJhbnNsYXRlTW9kdWxlLFxuICBOYkNhcmRNb2R1bGUsXG4gIE5iQWxlcnRNb2R1bGUsXG4gIE5iSWNvbk1vZHVsZSxcbiAgTmJCdXR0b25Nb2R1bGUsXG4gIE5iRGlhbG9nTW9kdWxlLmZvckNoaWxkKCksXG4gIERvVGhlbWVNb2R1bGUsXG4gIERvSW5wdXRNb2R1bGUsXG4gIERvQ2hlY2tCb3hNb2R1bGUsXG4gIERvQnV0dG9uTW9kdWxlLFxuICBEb0Jhc2VNb2R1bGUsXG4gIERvU2VsZWN0TW9kdWxlLFxuICBEb0RhdGF0YWJsZU1vZHVsZSxcbiAgRG9QYXJhbWV0ZXJSb3V0aW5nTW9kdWxlLFxuXTtcblxuY29uc3QgcHJvdmlkZXJzID0gW1xuICBQYXJhbWV0ZXJTZXJ2aWNlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIC4uLm1vZHVsZXMsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLmNvbXBvbmVudHMsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIC4uLnByb3ZpZGVycyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRG9QYXJhbWV0ZXJNb2R1bGUgeyB9XG4iXX0=