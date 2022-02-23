import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NbCheckboxModule } from '@nebular/theme';
import { DoBaseModule } from '../base/do-base.module';
import { DoCheckboxComponent } from './checkbox/do-checkbox.component';
import * as i0 from "@angular/core";
const CHECKBOX_COMPONENTS = [
    DoCheckboxComponent,
];
export class DoCheckBoxModule {
}
DoCheckBoxModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoCheckBoxModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoCheckBoxModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoCheckBoxModule, declarations: [DoCheckboxComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NbCheckboxModule,
        TranslateModule,
        DoBaseModule], exports: [DoCheckboxComponent] });
DoCheckBoxModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoCheckBoxModule, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            NbCheckboxModule,
            TranslateModule,
            DoBaseModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoCheckBoxModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        NbCheckboxModule,
                        TranslateModule,
                        DoBaseModule,
                    ],
                    declarations: [
                        ...CHECKBOX_COMPONENTS,
                    ],
                    exports: [
                        ...CHECKBOX_COMPONENTS,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tY2hlY2tib3gubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc2hhcmVkL3NyYy9saWIvY2hlY2tib3gvZG8tY2hlY2tib3gubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOztBQUV2RSxNQUFNLG1CQUFtQixHQUFHO0lBQzFCLG1CQUFtQjtDQUNwQixDQUFDO0FBa0JGLE1BQU0sT0FBTyxnQkFBZ0I7OzhHQUFoQixnQkFBZ0I7K0dBQWhCLGdCQUFnQixpQkFuQjNCLG1CQUFtQixhQUtqQixZQUFZO1FBQ1osV0FBVztRQUNYLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLFlBQVksYUFWZCxtQkFBbUI7K0dBbUJSLGdCQUFnQixZQWZsQjtZQUNQLFlBQVk7WUFDWixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLGdCQUFnQjtZQUNoQixlQUFlO1lBQ2YsWUFBWTtTQUNiOzRGQVFVLGdCQUFnQjtrQkFoQjVCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLGdCQUFnQjt3QkFDaEIsZUFBZTt3QkFDZixZQUFZO3FCQUNiO29CQUNELFlBQVksRUFBRTt3QkFDWixHQUFHLG1CQUFtQjtxQkFDdkI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLEdBQUcsbUJBQW1CO3FCQUN2QjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IE5iQ2hlY2tib3hNb2R1bGUgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBEb0Jhc2VNb2R1bGUgfSBmcm9tICcuLi9iYXNlL2RvLWJhc2UubW9kdWxlJztcbmltcG9ydCB7IERvQ2hlY2tib3hDb21wb25lbnQgfSBmcm9tICcuL2NoZWNrYm94L2RvLWNoZWNrYm94LmNvbXBvbmVudCc7XG5cbmNvbnN0IENIRUNLQk9YX0NPTVBPTkVOVFMgPSBbXG4gIERvQ2hlY2tib3hDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTmJDaGVja2JveE1vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGUsXG4gICAgRG9CYXNlTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5DSEVDS0JPWF9DT01QT05FTlRTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uQ0hFQ0tCT1hfQ09NUE9ORU5UUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRG9DaGVja0JveE1vZHVsZSB7IH1cbiJdfQ==