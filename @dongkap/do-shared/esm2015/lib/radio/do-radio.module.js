import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NbRadioModule } from '@nebular/theme';
import { DoBaseModule } from '../base/do-base.module';
import { DoRadioComponent } from './radio/do-radio.component';
import * as i0 from "@angular/core";
export const RADIO_COMPONENTS = [
    DoRadioComponent,
];
export class DoRadioModule {
}
DoRadioModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoRadioModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoRadioModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoRadioModule, declarations: [DoRadioComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NbRadioModule,
        TranslateModule,
        DoBaseModule], exports: [DoRadioComponent] });
DoRadioModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoRadioModule, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            NbRadioModule,
            TranslateModule,
            DoBaseModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoRadioModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        NbRadioModule,
                        TranslateModule,
                        DoBaseModule,
                    ],
                    declarations: [
                        ...RADIO_COMPONENTS,
                    ],
                    exports: [
                        ...RADIO_COMPONENTS,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tcmFkaW8ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc2hhcmVkL3NyYy9saWIvcmFkaW8vZG8tcmFkaW8ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7QUFFOUQsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUc7SUFDOUIsZ0JBQWdCO0NBQ2pCLENBQUM7QUFrQkYsTUFBTSxPQUFPLGFBQWE7OzJHQUFiLGFBQWE7NEdBQWIsYUFBYSxpQkFuQnhCLGdCQUFnQixhQUtkLFlBQVk7UUFDWixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGFBQWE7UUFDYixlQUFlO1FBQ2YsWUFBWSxhQVZkLGdCQUFnQjs0R0FtQkwsYUFBYSxZQWZmO1lBQ1AsWUFBWTtZQUNaLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsYUFBYTtZQUNiLGVBQWU7WUFDZixZQUFZO1NBQ2I7NEZBUVUsYUFBYTtrQkFoQnpCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLGFBQWE7d0JBQ2IsZUFBZTt3QkFDZixZQUFZO3FCQUNiO29CQUNELFlBQVksRUFBRTt3QkFDWixHQUFHLGdCQUFnQjtxQkFDcEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLEdBQUcsZ0JBQWdCO3FCQUNwQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IE5iUmFkaW9Nb2R1bGUgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBEb0Jhc2VNb2R1bGUgfSBmcm9tICcuLi9iYXNlL2RvLWJhc2UubW9kdWxlJztcbmltcG9ydCB7IERvUmFkaW9Db21wb25lbnQgfSBmcm9tICcuL3JhZGlvL2RvLXJhZGlvLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBSQURJT19DT01QT05FTlRTID0gW1xuICBEb1JhZGlvQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE5iUmFkaW9Nb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIERvQmFzZU1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uUkFESU9fQ09NUE9ORU5UUyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC4uLlJBRElPX0NPTVBPTkVOVFMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIERvUmFkaW9Nb2R1bGUgeyB9XG4iXX0=