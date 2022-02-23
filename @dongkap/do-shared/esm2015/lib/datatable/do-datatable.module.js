import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NbButtonModule, NbIconModule } from '@nebular/theme';
import { DoBaseModule } from '../base/do-base.module';
import { DoInputModule } from '../input/do-input.module';
import { DoButtonModule } from '../button/do-button.module';
import { DoDatatableComponent } from './do-datatable.component';
import { DoDatatableHeaderComponent } from './header/do-datatable-header.component';
import { DoDatatableBaseComponent } from './base/do-datatable-base.component';
import { DoDatatableCollapseComponent } from './header/collapse/do-datatable-collapse.component';
import * as i0 from "@angular/core";
export const DATATABLE_COMPONENTS = [
    DoDatatableBaseComponent,
    DoDatatableCollapseComponent,
    DoDatatableHeaderComponent,
    DoDatatableComponent,
];
export class DoDatatableModule {
}
DoDatatableModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoDatatableModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoDatatableModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoDatatableModule, declarations: [DoDatatableBaseComponent,
        DoDatatableCollapseComponent,
        DoDatatableHeaderComponent,
        DoDatatableComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgxDatatableModule,
        NbButtonModule,
        NbIconModule,
        TranslateModule,
        DoInputModule,
        DoBaseModule,
        DoButtonModule], exports: [DoDatatableBaseComponent,
        DoDatatableCollapseComponent,
        DoDatatableHeaderComponent,
        DoDatatableComponent] });
DoDatatableModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoDatatableModule, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            NgxDatatableModule,
            NbButtonModule,
            NbIconModule,
            TranslateModule,
            DoInputModule,
            DoBaseModule,
            DoButtonModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoDatatableModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        NgxDatatableModule,
                        NbButtonModule,
                        NbIconModule,
                        TranslateModule,
                        DoInputModule,
                        DoBaseModule,
                        DoButtonModule,
                    ],
                    declarations: [
                        ...DATATABLE_COMPONENTS,
                    ],
                    exports: [
                        ...DATATABLE_COMPONENTS,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tZGF0YXRhYmxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXNoYXJlZC9zcmMvbGliL2RhdGF0YWJsZS9kby1kYXRhdGFibGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNwRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQzs7QUFFakcsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQUc7SUFDbEMsd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QiwwQkFBMEI7SUFDMUIsb0JBQW9CO0NBQ3JCLENBQUM7QUFzQkYsTUFBTSxPQUFPLGlCQUFpQjs7K0dBQWpCLGlCQUFpQjtnSEFBakIsaUJBQWlCLGlCQTFCNUIsd0JBQXdCO1FBQ3hCLDRCQUE0QjtRQUM1QiwwQkFBMEI7UUFDMUIsb0JBQW9CLGFBS2xCLFlBQVk7UUFDWixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsWUFBWTtRQUNaLGVBQWU7UUFDZixhQUFhO1FBQ2IsWUFBWTtRQUNaLGNBQWMsYUFqQmhCLHdCQUF3QjtRQUN4Qiw0QkFBNEI7UUFDNUIsMEJBQTBCO1FBQzFCLG9CQUFvQjtnSEF1QlQsaUJBQWlCLFlBbkJuQjtZQUNQLFlBQVk7WUFDWixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLGtCQUFrQjtZQUNsQixjQUFjO1lBQ2QsWUFBWTtZQUNaLGVBQWU7WUFDZixhQUFhO1lBQ2IsWUFBWTtZQUNaLGNBQWM7U0FDZjs0RkFRVSxpQkFBaUI7a0JBcEI3QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixrQkFBa0I7d0JBQ2xCLGNBQWM7d0JBQ2QsWUFBWTt3QkFDWixlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsWUFBWTt3QkFDWixjQUFjO3FCQUNmO29CQUNELFlBQVksRUFBRTt3QkFDWixHQUFHLG9CQUFvQjtxQkFDeEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLEdBQUcsb0JBQW9CO3FCQUN4QjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IE5neERhdGF0YWJsZU1vZHVsZSB9IGZyb20gJ0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlJztcbmltcG9ydCB7IE5iQnV0dG9uTW9kdWxlLCBOYkljb25Nb2R1bGUgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBEb0Jhc2VNb2R1bGUgfSBmcm9tICcuLi9iYXNlL2RvLWJhc2UubW9kdWxlJztcbmltcG9ydCB7IERvSW5wdXRNb2R1bGUgfSBmcm9tICcuLi9pbnB1dC9kby1pbnB1dC5tb2R1bGUnO1xuaW1wb3J0IHsgRG9CdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9idXR0b24vZG8tYnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQgeyBEb0RhdGF0YWJsZUNvbXBvbmVudCB9IGZyb20gJy4vZG8tZGF0YXRhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEb0RhdGF0YWJsZUhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyL2RvLWRhdGF0YWJsZS1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IERvRGF0YXRhYmxlQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vYmFzZS9kby1kYXRhdGFibGUtYmFzZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRG9EYXRhdGFibGVDb2xsYXBzZUNvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyL2NvbGxhcHNlL2RvLWRhdGF0YWJsZS1jb2xsYXBzZS5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgREFUQVRBQkxFX0NPTVBPTkVOVFMgPSBbXG4gIERvRGF0YXRhYmxlQmFzZUNvbXBvbmVudCxcbiAgRG9EYXRhdGFibGVDb2xsYXBzZUNvbXBvbmVudCxcbiAgRG9EYXRhdGFibGVIZWFkZXJDb21wb25lbnQsXG4gIERvRGF0YXRhYmxlQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE5neERhdGF0YWJsZU1vZHVsZSxcbiAgICBOYkJ1dHRvbk1vZHVsZSxcbiAgICBOYkljb25Nb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIERvSW5wdXRNb2R1bGUsXG4gICAgRG9CYXNlTW9kdWxlLFxuICAgIERvQnV0dG9uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5EQVRBVEFCTEVfQ09NUE9ORU5UUyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC4uLkRBVEFUQUJMRV9DT01QT05FTlRTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBEb0RhdGF0YWJsZU1vZHVsZSB7IH1cbiJdfQ==