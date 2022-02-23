import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NbInputModule, NbIconModule } from '@nebular/theme';
import { DoBaseModule } from '../base/do-base.module';
import { DoInputTextComponent } from './text/do-input-text.component';
import { DoInputCurrencyComponent } from './currency/do-input-currency.component';
import { DoInputIconComponent } from './icon/do-input-icon.component';
import { DoInputBaseIconComponent } from './icon/do-input-base-icon.component';
import { CurrencyMaskDirective } from './currency/directive/currency.directive';
import { DoInputFileComponent } from './file/do-input-file.component';
import * as i0 from "@angular/core";
export const INPUT_COMPONENTS = [
    DoInputTextComponent,
    DoInputBaseIconComponent,
    DoInputIconComponent,
    DoInputCurrencyComponent,
    DoInputFileComponent,
];
export const INPUT_DIRECTIVES = [
    CurrencyMaskDirective,
];
export class DoInputModule {
}
DoInputModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoInputModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoInputModule, declarations: [DoInputTextComponent,
        DoInputBaseIconComponent,
        DoInputIconComponent,
        DoInputCurrencyComponent,
        DoInputFileComponent, CurrencyMaskDirective], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NbInputModule,
        NbIconModule,
        TranslateModule,
        DoBaseModule], exports: [DoInputTextComponent,
        DoInputBaseIconComponent,
        DoInputIconComponent,
        DoInputCurrencyComponent,
        DoInputFileComponent, CurrencyMaskDirective, NbInputModule] });
DoInputModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoInputModule, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            NbInputModule,
            NbIconModule,
            TranslateModule,
            DoBaseModule,
        ], NbInputModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoInputModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        NbInputModule,
                        NbIconModule,
                        TranslateModule,
                        DoBaseModule,
                    ],
                    declarations: [
                        ...INPUT_COMPONENTS,
                        ...INPUT_DIRECTIVES,
                    ],
                    exports: [
                        ...INPUT_COMPONENTS,
                        ...INPUT_DIRECTIVES,
                        NbInputModule,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8taW5wdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc2hhcmVkL3NyYy9saWIvaW5wdXQvZG8taW5wdXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDbEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7O0FBRXRFLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHO0lBQzlCLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QixvQkFBb0I7Q0FDckIsQ0FBQztBQUNGLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHO0lBQzlCLHFCQUFxQjtDQUN0QixDQUFDO0FBc0JGLE1BQU0sT0FBTyxhQUFhOzsyR0FBYixhQUFhOzRHQUFiLGFBQWEsaUJBOUJ4QixvQkFBb0I7UUFDcEIsd0JBQXdCO1FBQ3hCLG9CQUFvQjtRQUNwQix3QkFBd0I7UUFDeEIsb0JBQW9CLEVBR3BCLHFCQUFxQixhQUtuQixZQUFZO1FBQ1osV0FBVztRQUNYLG1CQUFtQjtRQUNuQixhQUFhO1FBQ2IsWUFBWTtRQUNaLGVBQWU7UUFDZixZQUFZLGFBbEJkLG9CQUFvQjtRQUNwQix3QkFBd0I7UUFDeEIsb0JBQW9CO1FBQ3BCLHdCQUF3QjtRQUN4QixvQkFBb0IsRUFHcEIscUJBQXFCLEVBb0JuQixhQUFhOzRHQUdKLGFBQWEsWUFuQmY7WUFDUCxZQUFZO1lBQ1osV0FBVztZQUNYLG1CQUFtQjtZQUNuQixhQUFhO1lBQ2IsWUFBWTtZQUNaLGVBQWU7WUFDZixZQUFZO1NBQ2IsRUFRQyxhQUFhOzRGQUdKLGFBQWE7a0JBcEJ6QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixhQUFhO3dCQUNiLFlBQVk7d0JBQ1osZUFBZTt3QkFDZixZQUFZO3FCQUNiO29CQUNELFlBQVksRUFBRTt3QkFDWixHQUFHLGdCQUFnQjt3QkFDbkIsR0FBRyxnQkFBZ0I7cUJBQ3BCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxHQUFHLGdCQUFnQjt3QkFDbkIsR0FBRyxnQkFBZ0I7d0JBQ25CLGFBQWE7cUJBQ2Q7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBOYklucHV0TW9kdWxlLCBOYkljb25Nb2R1bGUgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBEb0Jhc2VNb2R1bGUgfSBmcm9tICcuLi9iYXNlL2RvLWJhc2UubW9kdWxlJztcbmltcG9ydCB7IERvSW5wdXRUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi90ZXh0L2RvLWlucHV0LXRleHQuY29tcG9uZW50JztcbmltcG9ydCB7IERvSW5wdXRDdXJyZW5jeUNvbXBvbmVudCB9IGZyb20gJy4vY3VycmVuY3kvZG8taW5wdXQtY3VycmVuY3kuY29tcG9uZW50JztcbmltcG9ydCB7IERvSW5wdXRJY29uQ29tcG9uZW50IH0gZnJvbSAnLi9pY29uL2RvLWlucHV0LWljb24uY29tcG9uZW50JztcbmltcG9ydCB7IERvSW5wdXRCYXNlSWNvbkNvbXBvbmVudCB9IGZyb20gJy4vaWNvbi9kby1pbnB1dC1iYXNlLWljb24uY29tcG9uZW50JztcbmltcG9ydCB7IEN1cnJlbmN5TWFza0RpcmVjdGl2ZSB9IGZyb20gJy4vY3VycmVuY3kvZGlyZWN0aXZlL2N1cnJlbmN5LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEb0lucHV0RmlsZUNvbXBvbmVudCB9IGZyb20gJy4vZmlsZS9kby1pbnB1dC1maWxlLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBJTlBVVF9DT01QT05FTlRTID0gW1xuICBEb0lucHV0VGV4dENvbXBvbmVudCxcbiAgRG9JbnB1dEJhc2VJY29uQ29tcG9uZW50LFxuICBEb0lucHV0SWNvbkNvbXBvbmVudCxcbiAgRG9JbnB1dEN1cnJlbmN5Q29tcG9uZW50LFxuICBEb0lucHV0RmlsZUNvbXBvbmVudCxcbl07XG5leHBvcnQgY29uc3QgSU5QVVRfRElSRUNUSVZFUyA9IFtcbiAgQ3VycmVuY3lNYXNrRGlyZWN0aXZlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE5iSW5wdXRNb2R1bGUsXG4gICAgTmJJY29uTW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgICBEb0Jhc2VNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLklOUFVUX0NPTVBPTkVOVFMsXG4gICAgLi4uSU5QVVRfRElSRUNUSVZFUyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC4uLklOUFVUX0NPTVBPTkVOVFMsXG4gICAgLi4uSU5QVVRfRElSRUNUSVZFUyxcbiAgICBOYklucHV0TW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBEb0lucHV0TW9kdWxlIHsgfVxuIl19