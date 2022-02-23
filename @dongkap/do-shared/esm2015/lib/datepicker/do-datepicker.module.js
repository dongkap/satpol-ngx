import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NbInputModule, NbDatepickerModule } from '@nebular/theme';
import { NbDateFnsDateModule } from '@nebular/date-fns';
import { NbMomentDateModule } from '@nebular/moment';
import { TranslateModule } from '@ngx-translate/core';
import { DateFormat } from '@dongkap/do-core';
import { DoBaseModule } from '../base/do-base.module';
import { DoDatePickerComponent } from './single/do-datepicker.component';
import { DoDatePickerRangeComponent } from './range/do-datepicker-range.component';
import { id } from 'date-fns/esm/locale';
import * as i0 from "@angular/core";
import * as i1 from "@nebular/theme";
import * as i2 from "@nebular/date-fns";
export const DATEPICKER_COMPONENTS = [
    DoDatePickerComponent,
    DoDatePickerRangeComponent,
];
export class DoDatePickerModule {
}
DoDatePickerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoDatePickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoDatePickerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoDatePickerModule, declarations: [DoDatePickerComponent,
        DoDatePickerRangeComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NbInputModule, i1.NbDatepickerModule, NbMomentDateModule, i2.NbDateFnsDateModule, TranslateModule,
        DoBaseModule], exports: [DoDatePickerComponent,
        DoDatePickerRangeComponent] });
DoDatePickerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoDatePickerModule, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            NbInputModule,
            NbDatepickerModule.forRoot(),
            NbMomentDateModule,
            NbDateFnsDateModule.forChild({
                format: DateFormat.DATE,
                parseOptions: {
                    locale: id,
                    awareOfUnicodeTokens: true,
                },
                formatOptions: {
                    locale: id,
                    awareOfUnicodeTokens: true,
                },
            }),
            TranslateModule,
            DoBaseModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoDatePickerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        NbInputModule,
                        NbDatepickerModule.forRoot(),
                        NbMomentDateModule,
                        NbDateFnsDateModule.forChild({
                            format: DateFormat.DATE,
                            parseOptions: {
                                locale: id,
                                awareOfUnicodeTokens: true,
                            },
                            formatOptions: {
                                locale: id,
                                awareOfUnicodeTokens: true,
                            },
                        }),
                        TranslateModule,
                        DoBaseModule,
                    ],
                    declarations: [
                        ...DATEPICKER_COMPONENTS,
                    ],
                    exports: [
                        ...DATEPICKER_COMPONENTS,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tZGF0ZXBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1zaGFyZWQvc3JjL2xpYi9kYXRlcGlja2VyL2RvLWRhdGVwaWNrZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDeEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDekUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDbkYsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLHFCQUFxQixDQUFBOzs7O0FBRXhDLE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUFHO0lBQ25DLHFCQUFxQjtJQUNyQiwwQkFBMEI7Q0FDM0IsQ0FBQztBQStCRixNQUFNLE9BQU8sa0JBQWtCOztnSEFBbEIsa0JBQWtCO2lIQUFsQixrQkFBa0IsaUJBakM3QixxQkFBcUI7UUFDckIsMEJBQTBCLGFBS3hCLFlBQVk7UUFDWixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGFBQWEseUJBRWIsa0JBQWtCLDBCQVlsQixlQUFlO1FBQ2YsWUFBWSxhQXhCZCxxQkFBcUI7UUFDckIsMEJBQTBCO2lIQWdDZixrQkFBa0IsWUE1QnBCO1lBQ1AsWUFBWTtZQUNaLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsYUFBYTtZQUNiLGtCQUFrQixDQUFDLE9BQU8sRUFBRTtZQUM1QixrQkFBa0I7WUFDbEIsbUJBQW1CLENBQUMsUUFBUSxDQUFDO2dCQUMzQixNQUFNLEVBQUUsVUFBVSxDQUFDLElBQUk7Z0JBQ3ZCLFlBQVksRUFBRTtvQkFDWixNQUFNLEVBQUUsRUFBRTtvQkFDVixvQkFBb0IsRUFBRSxJQUFJO2lCQUMzQjtnQkFDRCxhQUFhLEVBQUU7b0JBQ2IsTUFBTSxFQUFFLEVBQUU7b0JBQ1Ysb0JBQW9CLEVBQUUsSUFBSTtpQkFDM0I7YUFDRixDQUFDO1lBQ0YsZUFBZTtZQUNmLFlBQVk7U0FDYjs0RkFRVSxrQkFBa0I7a0JBN0I5QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixhQUFhO3dCQUNiLGtCQUFrQixDQUFDLE9BQU8sRUFBRTt3QkFDNUIsa0JBQWtCO3dCQUNsQixtQkFBbUIsQ0FBQyxRQUFRLENBQUM7NEJBQzNCLE1BQU0sRUFBRSxVQUFVLENBQUMsSUFBSTs0QkFDdkIsWUFBWSxFQUFFO2dDQUNaLE1BQU0sRUFBRSxFQUFFO2dDQUNWLG9CQUFvQixFQUFFLElBQUk7NkJBQzNCOzRCQUNELGFBQWEsRUFBRTtnQ0FDYixNQUFNLEVBQUUsRUFBRTtnQ0FDVixvQkFBb0IsRUFBRSxJQUFJOzZCQUMzQjt5QkFDRixDQUFDO3dCQUNGLGVBQWU7d0JBQ2YsWUFBWTtxQkFDYjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osR0FBRyxxQkFBcUI7cUJBQ3pCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxHQUFHLHFCQUFxQjtxQkFDekI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmJJbnB1dE1vZHVsZSwgTmJEYXRlcGlja2VyTW9kdWxlIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHsgTmJEYXRlRm5zRGF0ZU1vZHVsZSB9IGZyb20gJ0BuZWJ1bGFyL2RhdGUtZm5zJztcbmltcG9ydCB7IE5iTW9tZW50RGF0ZU1vZHVsZSB9IGZyb20gJ0BuZWJ1bGFyL21vbWVudCc7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IERhdGVGb3JtYXQgfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IERvQmFzZU1vZHVsZSB9IGZyb20gJy4uL2Jhc2UvZG8tYmFzZS5tb2R1bGUnO1xuaW1wb3J0IHsgRG9EYXRlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9zaW5nbGUvZG8tZGF0ZXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRG9EYXRlUGlja2VyUmFuZ2VDb21wb25lbnQgfSBmcm9tICcuL3JhbmdlL2RvLWRhdGVwaWNrZXItcmFuZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IGlkIH0gZnJvbSAnZGF0ZS1mbnMvZXNtL2xvY2FsZSdcblxuZXhwb3J0IGNvbnN0IERBVEVQSUNLRVJfQ09NUE9ORU5UUyA9IFtcbiAgRG9EYXRlUGlja2VyQ29tcG9uZW50LFxuICBEb0RhdGVQaWNrZXJSYW5nZUNvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBOYklucHV0TW9kdWxlLFxuICAgIE5iRGF0ZXBpY2tlck1vZHVsZS5mb3JSb290KCksXG4gICAgTmJNb21lbnREYXRlTW9kdWxlLFxuICAgIE5iRGF0ZUZuc0RhdGVNb2R1bGUuZm9yQ2hpbGQoe1xuICAgICAgZm9ybWF0OiBEYXRlRm9ybWF0LkRBVEUsXG4gICAgICBwYXJzZU9wdGlvbnM6IHtcbiAgICAgICAgbG9jYWxlOiBpZCxcbiAgICAgICAgYXdhcmVPZlVuaWNvZGVUb2tlbnM6IHRydWUsXG4gICAgICB9LFxuICAgICAgZm9ybWF0T3B0aW9uczoge1xuICAgICAgICBsb2NhbGU6IGlkLFxuICAgICAgICBhd2FyZU9mVW5pY29kZVRva2VuczogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIERvQmFzZU1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uREFURVBJQ0tFUl9DT01QT05FTlRTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uREFURVBJQ0tFUl9DT01QT05FTlRTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBEb0RhdGVQaWNrZXJNb2R1bGUgeyB9XG4iXX0=