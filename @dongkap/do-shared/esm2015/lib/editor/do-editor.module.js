import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NbInputModule } from '@nebular/theme';
import { TranslateModule } from '@ngx-translate/core';
import { QuillModule } from 'ngx-quill';
import { DoBaseModule } from '../base/do-base.module';
import { DoTextEditorComponent } from './quill/do-text-editor.component';
import { DoTextareaComponent } from './textarea/textarea.component';
import * as i0 from "@angular/core";
import * as i1 from "ngx-quill";
export const EDITOR_COMPONENTS = [
    DoTextEditorComponent,
    DoTextareaComponent,
];
export class DoEditorModule {
}
DoEditorModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoEditorModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoEditorModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoEditorModule, declarations: [DoTextEditorComponent,
        DoTextareaComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule, i1.QuillModule, NbInputModule,
        DoBaseModule], exports: [DoTextEditorComponent,
        DoTextareaComponent] });
DoEditorModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoEditorModule, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            TranslateModule,
            QuillModule.forRoot(),
            NbInputModule,
            DoBaseModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoEditorModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        TranslateModule,
                        QuillModule.forRoot(),
                        NbInputModule,
                        DoBaseModule,
                    ],
                    declarations: [
                        ...EDITOR_COMPONENTS,
                    ],
                    exports: [
                        ...EDITOR_COMPONENTS,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tZWRpdG9yLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXNoYXJlZC9zcmMvbGliL2VkaXRvci9kby1lZGl0b3IubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDeEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7QUFFcEUsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUc7SUFDL0IscUJBQXFCO0lBQ3JCLG1CQUFtQjtDQUNwQixDQUFDO0FBbUJGLE1BQU0sT0FBTyxjQUFjOzs0R0FBZCxjQUFjOzZHQUFkLGNBQWMsaUJBckJ6QixxQkFBcUI7UUFDckIsbUJBQW1CLGFBS2pCLFlBQVk7UUFDWixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGVBQWUsa0JBRWYsYUFBYTtRQUNiLFlBQVksYUFaZCxxQkFBcUI7UUFDckIsbUJBQW1COzZHQW9CUixjQUFjLFlBaEJoQjtZQUNQLFlBQVk7WUFDWixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLGVBQWU7WUFDZixXQUFXLENBQUMsT0FBTyxFQUFFO1lBQ3JCLGFBQWE7WUFDYixZQUFZO1NBQ2I7NEZBUVUsY0FBYztrQkFqQjFCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLGVBQWU7d0JBQ2YsV0FBVyxDQUFDLE9BQU8sRUFBRTt3QkFDckIsYUFBYTt3QkFDYixZQUFZO3FCQUNiO29CQUNELFlBQVksRUFBRTt3QkFDWixHQUFHLGlCQUFpQjtxQkFDckI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLEdBQUcsaUJBQWlCO3FCQUNyQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOYklucHV0TW9kdWxlIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBRdWlsbE1vZHVsZSB9IGZyb20gJ25neC1xdWlsbCc7XG5pbXBvcnQgeyBEb0Jhc2VNb2R1bGUgfSBmcm9tICcuLi9iYXNlL2RvLWJhc2UubW9kdWxlJztcbmltcG9ydCB7IERvVGV4dEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vcXVpbGwvZG8tdGV4dC1lZGl0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IERvVGV4dGFyZWFDb21wb25lbnQgfSBmcm9tICcuL3RleHRhcmVhL3RleHRhcmVhLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBFRElUT1JfQ09NUE9ORU5UUyA9IFtcbiAgRG9UZXh0RWRpdG9yQ29tcG9uZW50LFxuICBEb1RleHRhcmVhQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgICBRdWlsbE1vZHVsZS5mb3JSb290KCksXG4gICAgTmJJbnB1dE1vZHVsZSxcbiAgICBEb0Jhc2VNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLkVESVRPUl9DT01QT05FTlRTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uRURJVE9SX0NPTVBPTkVOVFMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIERvRWRpdG9yTW9kdWxlIHsgfVxuIl19