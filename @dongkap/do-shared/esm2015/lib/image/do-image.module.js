import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbIconModule } from '@nebular/theme';
import { DoBaseModule } from '../base/do-base.module';
import { ImageUploadComponent } from './upload/image-upload.component';
import { TranslateModule } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export const IMAGE_COMPONENTS = [
    ImageUploadComponent,
];
export class DoImageModule {
}
DoImageModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoImageModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoImageModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoImageModule, declarations: [ImageUploadComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        NbButtonModule,
        NbIconModule,
        DoBaseModule], exports: [ImageUploadComponent] });
DoImageModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoImageModule, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            TranslateModule,
            NbButtonModule,
            NbIconModule,
            DoBaseModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoImageModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        TranslateModule,
                        NbButtonModule,
                        NbIconModule,
                        DoBaseModule,
                    ],
                    declarations: [
                        ...IMAGE_COMPONENTS,
                    ],
                    exports: [
                        ...IMAGE_COMPONENTS,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8taW1hZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc2hhcmVkL3NyYy9saWIvaW1hZ2UvZG8taW1hZ2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBRXRELE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHO0lBQzlCLG9CQUFvQjtDQUNyQixDQUFDO0FBbUJGLE1BQU0sT0FBTyxhQUFhOzsyR0FBYixhQUFhOzRHQUFiLGFBQWEsaUJBcEJ4QixvQkFBb0IsYUFLbEIsWUFBWTtRQUNaLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLGNBQWM7UUFDZCxZQUFZO1FBQ1osWUFBWSxhQVhkLG9CQUFvQjs0R0FvQlQsYUFBYSxZQWhCZjtZQUNQLFlBQVk7WUFDWixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLGVBQWU7WUFDZixjQUFjO1lBQ2QsWUFBWTtZQUNaLFlBQVk7U0FDYjs0RkFRVSxhQUFhO2tCQWpCekIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsZUFBZTt3QkFDZixjQUFjO3dCQUNkLFlBQVk7d0JBQ1osWUFBWTtxQkFDYjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osR0FBRyxnQkFBZ0I7cUJBQ3BCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxHQUFHLGdCQUFnQjtxQkFDcEI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmJCdXR0b25Nb2R1bGUsIE5iSWNvbk1vZHVsZSB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IERvQmFzZU1vZHVsZSB9IGZyb20gJy4uL2Jhc2UvZG8tYmFzZS5tb2R1bGUnO1xuaW1wb3J0IHsgSW1hZ2VVcGxvYWRDb21wb25lbnQgfSBmcm9tICcuL3VwbG9hZC9pbWFnZS11cGxvYWQuY29tcG9uZW50JztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgSU1BR0VfQ09NUE9ORU5UUyA9IFtcbiAgSW1hZ2VVcGxvYWRDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIE5iQnV0dG9uTW9kdWxlLFxuICAgIE5iSWNvbk1vZHVsZSxcbiAgICBEb0Jhc2VNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLklNQUdFX0NPTVBPTkVOVFMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5JTUFHRV9DT01QT05FTlRTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBEb0ltYWdlTW9kdWxlIHsgfVxuIl19