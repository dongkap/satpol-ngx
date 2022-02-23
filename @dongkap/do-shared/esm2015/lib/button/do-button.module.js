import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NbButtonModule } from '@nebular/theme';
import { DoButtonComponent } from './single/do-button.component';
import { DoButtonSubmitComponent } from './submit/do-button-submit.component';
import { DoBaseModule } from '../base/do-base.module';
import * as i0 from "@angular/core";
export const BUTTON_COMPONENTS = [
    DoButtonComponent,
    DoButtonSubmitComponent,
];
export class DoButtonModule {
}
DoButtonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoButtonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoButtonModule, declarations: [DoButtonComponent,
        DoButtonSubmitComponent], imports: [CommonModule,
        TranslateModule,
        NbButtonModule,
        DoBaseModule], exports: [DoButtonComponent,
        DoButtonSubmitComponent] });
DoButtonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoButtonModule, imports: [[
            CommonModule,
            TranslateModule,
            NbButtonModule,
            DoBaseModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        TranslateModule,
                        NbButtonModule,
                        DoBaseModule,
                    ],
                    declarations: [
                        ...BUTTON_COMPONENTS,
                    ],
                    exports: [
                        ...BUTTON_COMPONENTS,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tYnV0dG9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXNoYXJlZC9zcmMvbGliL2J1dHRvbi9kby1idXR0b24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDOUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUV0RCxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRztJQUMvQixpQkFBaUI7SUFDakIsdUJBQXVCO0NBQ3hCLENBQUM7QUFnQkYsTUFBTSxPQUFPLGNBQWM7OzRHQUFkLGNBQWM7NkdBQWQsY0FBYyxpQkFsQnpCLGlCQUFpQjtRQUNqQix1QkFBdUIsYUFLckIsWUFBWTtRQUNaLGVBQWU7UUFDZixjQUFjO1FBQ2QsWUFBWSxhQVRkLGlCQUFpQjtRQUNqQix1QkFBdUI7NkdBaUJaLGNBQWMsWUFiaEI7WUFDUCxZQUFZO1lBQ1osZUFBZTtZQUNmLGNBQWM7WUFDZCxZQUFZO1NBQ2I7NEZBUVUsY0FBYztrQkFkMUIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixlQUFlO3dCQUNmLGNBQWM7d0JBQ2QsWUFBWTtxQkFDYjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osR0FBRyxpQkFBaUI7cUJBQ3JCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxHQUFHLGlCQUFpQjtxQkFDckI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgTmJCdXR0b25Nb2R1bGUgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBEb0J1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vc2luZ2xlL2RvLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRG9CdXR0b25TdWJtaXRDb21wb25lbnQgfSBmcm9tICcuL3N1Ym1pdC9kby1idXR0b24tc3VibWl0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEb0Jhc2VNb2R1bGUgfSBmcm9tICcuLi9iYXNlL2RvLWJhc2UubW9kdWxlJztcblxuZXhwb3J0IGNvbnN0IEJVVFRPTl9DT01QT05FTlRTID0gW1xuICBEb0J1dHRvbkNvbXBvbmVudCxcbiAgRG9CdXR0b25TdWJtaXRDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgICBOYkJ1dHRvbk1vZHVsZSxcbiAgICBEb0Jhc2VNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLkJVVFRPTl9DT01QT05FTlRTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uQlVUVE9OX0NPTVBPTkVOVFMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIERvQnV0dG9uTW9kdWxlIHsgfVxuIl19