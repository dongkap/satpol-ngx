import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule } from '@nebular/theme';
import { TranslateModule } from '@ngx-translate/core';
import { DoLabelTextComponent } from './do-label-text.component';
import { DoBaseModule } from '../base/do-base.module';
import * as i0 from "@angular/core";
export const LABEL_COMPONENTS = [
    DoLabelTextComponent,
];
export class DoLabelModule {
}
DoLabelModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoLabelModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoLabelModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoLabelModule, declarations: [DoLabelTextComponent], imports: [CommonModule,
        TranslateModule,
        DoBaseModule,
        NbButtonModule], exports: [DoLabelTextComponent] });
DoLabelModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoLabelModule, imports: [[
            CommonModule,
            TranslateModule,
            DoBaseModule,
            NbButtonModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoLabelModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        TranslateModule,
                        DoBaseModule,
                        NbButtonModule,
                    ],
                    declarations: [
                        ...LABEL_COMPONENTS,
                    ],
                    exports: [
                        ...LABEL_COMPONENTS,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tbGFiZWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc2hhcmVkL3NyYy9saWIvbGFiZWwvZG8tbGFiZWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDakUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUV0RCxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRztJQUM5QixvQkFBb0I7Q0FDckIsQ0FBQztBQWdCRixNQUFNLE9BQU8sYUFBYTs7MkdBQWIsYUFBYTs0R0FBYixhQUFhLGlCQWpCeEIsb0JBQW9CLGFBS2xCLFlBQVk7UUFDWixlQUFlO1FBQ2YsWUFBWTtRQUNaLGNBQWMsYUFSaEIsb0JBQW9COzRHQWlCVCxhQUFhLFlBYmY7WUFDUCxZQUFZO1lBQ1osZUFBZTtZQUNmLFlBQVk7WUFDWixjQUFjO1NBQ2Y7NEZBUVUsYUFBYTtrQkFkekIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixlQUFlO3dCQUNmLFlBQVk7d0JBQ1osY0FBYztxQkFDZjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osR0FBRyxnQkFBZ0I7cUJBQ3BCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxHQUFHLGdCQUFnQjtxQkFDcEI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5iQnV0dG9uTW9kdWxlIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBEb0xhYmVsVGV4dENvbXBvbmVudCB9IGZyb20gJy4vZG8tbGFiZWwtdGV4dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRG9CYXNlTW9kdWxlIH0gZnJvbSAnLi4vYmFzZS9kby1iYXNlLm1vZHVsZSc7XG5cbmV4cG9ydCBjb25zdCBMQUJFTF9DT01QT05FTlRTID0gW1xuICBEb0xhYmVsVGV4dENvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIERvQmFzZU1vZHVsZSxcbiAgICBOYkJ1dHRvbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uTEFCRUxfQ09NUE9ORU5UUyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC4uLkxBQkVMX0NPTVBPTkVOVFMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIERvTGFiZWxNb2R1bGUgeyB9XG4iXX0=