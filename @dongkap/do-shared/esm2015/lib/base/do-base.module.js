import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NbCardModule, NbIconModule, NbSelectModule } from '@nebular/theme';
import { DoToastrModule } from '../toastr/do-toastr.module';
import { DoErrorMessageComponent } from './error-message/do-error-message.component';
import { DoWarnMessageComponent } from './warn-message/do-warn-message.component';
import { DoContainerOutletComponent } from './container-outlet/do-container-outlet.component';
import { DoPageOutletComponent } from './page-outlet/do-page-outlet.component';
import { DoCollapseComponent } from './collapse/do-collapse.component';
import { EqualValidator } from './directive/equal-validator.directive';
import { NotEqualValidator } from './directive/not-equal-validator.directive';
import { DragDropDirective } from './directive/drag-drop.directive';
import { DoCardCollapseComponent } from './card-collapse/do-card-collapse.component';
import { MaskedInputDirective } from './directive/text-mask.directive';
import * as i0 from "@angular/core";
import * as i1 from "../toastr/do-toastr.module";
import * as i2 from "ngx-bootstrap/collapse";
export const BASE_COMPONENTS = [
    DoWarnMessageComponent,
    DoErrorMessageComponent,
    DoContainerOutletComponent,
    DoPageOutletComponent,
    DoCollapseComponent,
    DoCardCollapseComponent,
    MaskedInputDirective,
];
export const BASE_DIRECTIVES = [
    EqualValidator,
    NotEqualValidator,
    DragDropDirective,
];
export class DoBaseModule {
}
DoBaseModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoBaseModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoBaseModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoBaseModule, declarations: [DoWarnMessageComponent,
        DoErrorMessageComponent,
        DoContainerOutletComponent,
        DoPageOutletComponent,
        DoCollapseComponent,
        DoCardCollapseComponent,
        MaskedInputDirective, EqualValidator,
        NotEqualValidator,
        DragDropDirective], imports: [CommonModule,
        FormsModule,
        TranslateModule,
        NbCardModule,
        NbIconModule,
        NbSelectModule, i1.DoToastrModule, i2.CollapseModule], exports: [DoWarnMessageComponent,
        DoErrorMessageComponent,
        DoContainerOutletComponent,
        DoPageOutletComponent,
        DoCollapseComponent,
        DoCardCollapseComponent,
        MaskedInputDirective, EqualValidator,
        NotEqualValidator,
        DragDropDirective] });
DoBaseModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoBaseModule, imports: [[
            CommonModule,
            FormsModule,
            TranslateModule,
            NbCardModule,
            NbIconModule,
            NbSelectModule,
            DoToastrModule.forRoot(),
            CollapseModule.forRoot(),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoBaseModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        TranslateModule,
                        NbCardModule,
                        NbIconModule,
                        NbSelectModule,
                        DoToastrModule.forRoot(),
                        CollapseModule.forRoot(),
                    ],
                    declarations: [
                        ...BASE_COMPONENTS,
                        ...BASE_DIRECTIVES,
                    ],
                    exports: [
                        ...BASE_COMPONENTS,
                        ...BASE_DIRECTIVES,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tYmFzZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1zaGFyZWQvc3JjL2xpYi9iYXNlL2RvLWJhc2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNyRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUM5RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDckYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7QUFFdkUsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHO0lBQzdCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtDQUNyQixDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHO0lBQzdCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsaUJBQWlCO0NBQ2xCLENBQUM7QUFzQkYsTUFBTSxPQUFPLFlBQVk7OzBHQUFaLFlBQVk7MkdBQVosWUFBWSxpQkFuQ3ZCLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsMEJBQTBCO1FBQzFCLHFCQUFxQjtRQUNyQixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLG9CQUFvQixFQUlwQixjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLGlCQUFpQixhQUtmLFlBQVk7UUFDWixXQUFXO1FBQ1gsZUFBZTtRQUNmLFlBQVk7UUFDWixZQUFZO1FBQ1osY0FBYyxtREF0QmhCLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsMEJBQTBCO1FBQzFCLHFCQUFxQjtRQUNyQixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLG9CQUFvQixFQUlwQixjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLGlCQUFpQjsyR0F1Qk4sWUFBWSxZQW5CZDtZQUNQLFlBQVk7WUFDWixXQUFXO1lBQ1gsZUFBZTtZQUNmLFlBQVk7WUFDWixZQUFZO1lBQ1osY0FBYztZQUNkLGNBQWMsQ0FBQyxPQUFPLEVBQUU7WUFDeEIsY0FBYyxDQUFDLE9BQU8sRUFBRTtTQUN6Qjs0RkFVVSxZQUFZO2tCQXBCeEIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3dCQUNYLGVBQWU7d0JBQ2YsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGNBQWM7d0JBQ2QsY0FBYyxDQUFDLE9BQU8sRUFBRTt3QkFDeEIsY0FBYyxDQUFDLE9BQU8sRUFBRTtxQkFDekI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLEdBQUcsZUFBZTt3QkFDbEIsR0FBRyxlQUFlO3FCQUNuQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsR0FBRyxlQUFlO3dCQUNsQixHQUFHLGVBQWU7cUJBQ25CO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgQ29sbGFwc2VNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbGxhcHNlJztcbmltcG9ydCB7IE5iQ2FyZE1vZHVsZSwgTmJJY29uTW9kdWxlLCBOYlNlbGVjdE1vZHVsZSB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IERvVG9hc3RyTW9kdWxlIH0gZnJvbSAnLi4vdG9hc3RyL2RvLXRvYXN0ci5tb2R1bGUnO1xuaW1wb3J0IHsgRG9FcnJvck1lc3NhZ2VDb21wb25lbnQgfSBmcm9tICcuL2Vycm9yLW1lc3NhZ2UvZG8tZXJyb3ItbWVzc2FnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRG9XYXJuTWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJy4vd2Fybi1tZXNzYWdlL2RvLXdhcm4tbWVzc2FnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRG9Db250YWluZXJPdXRsZXRDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhaW5lci1vdXRsZXQvZG8tY29udGFpbmVyLW91dGxldC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRG9QYWdlT3V0bGV0Q29tcG9uZW50IH0gZnJvbSAnLi9wYWdlLW91dGxldC9kby1wYWdlLW91dGxldC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRG9Db2xsYXBzZUNvbXBvbmVudCB9IGZyb20gJy4vY29sbGFwc2UvZG8tY29sbGFwc2UuY29tcG9uZW50JztcbmltcG9ydCB7IEVxdWFsVmFsaWRhdG9yIH0gZnJvbSAnLi9kaXJlY3RpdmUvZXF1YWwtdmFsaWRhdG9yLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOb3RFcXVhbFZhbGlkYXRvciB9IGZyb20gJy4vZGlyZWN0aXZlL25vdC1lcXVhbC12YWxpZGF0b3IuZGlyZWN0aXZlJztcbmltcG9ydCB7IERyYWdEcm9wRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmUvZHJhZy1kcm9wLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEb0NhcmRDb2xsYXBzZUNvbXBvbmVudCB9IGZyb20gJy4vY2FyZC1jb2xsYXBzZS9kby1jYXJkLWNvbGxhcHNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXNrZWRJbnB1dERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlL3RleHQtbWFzay5kaXJlY3RpdmUnO1xuXG5leHBvcnQgY29uc3QgQkFTRV9DT01QT05FTlRTID0gW1xuICBEb1dhcm5NZXNzYWdlQ29tcG9uZW50LFxuICBEb0Vycm9yTWVzc2FnZUNvbXBvbmVudCxcbiAgRG9Db250YWluZXJPdXRsZXRDb21wb25lbnQsXG4gIERvUGFnZU91dGxldENvbXBvbmVudCxcbiAgRG9Db2xsYXBzZUNvbXBvbmVudCxcbiAgRG9DYXJkQ29sbGFwc2VDb21wb25lbnQsXG4gIE1hc2tlZElucHV0RGlyZWN0aXZlLFxuXTtcblxuZXhwb3J0IGNvbnN0IEJBU0VfRElSRUNUSVZFUyA9IFtcbiAgRXF1YWxWYWxpZGF0b3IsXG4gIE5vdEVxdWFsVmFsaWRhdG9yLFxuICBEcmFnRHJvcERpcmVjdGl2ZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIE5iQ2FyZE1vZHVsZSxcbiAgICBOYkljb25Nb2R1bGUsXG4gICAgTmJTZWxlY3RNb2R1bGUsXG4gICAgRG9Ub2FzdHJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIENvbGxhcHNlTW9kdWxlLmZvclJvb3QoKSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uQkFTRV9DT01QT05FTlRTLFxuICAgIC4uLkJBU0VfRElSRUNUSVZFUyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC4uLkJBU0VfQ09NUE9ORU5UUyxcbiAgICAuLi5CQVNFX0RJUkVDVElWRVMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIERvQmFzZU1vZHVsZSB7IH1cbiJdfQ==