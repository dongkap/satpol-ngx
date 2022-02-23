import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { DoBaseModule } from '../base/do-base.module';
import { DoSelectComponent } from './do-select.component';
import { ContentSelectDirective } from './directive/content-select.directive';
import * as i0 from "@angular/core";
export const SELECT_COMPONENTS = [
    DoSelectComponent,
];
export const SELECT_DIRECTIVES = [
    ContentSelectDirective,
];
export class DoSelectModule {
}
DoSelectModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoSelectModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoSelectModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoSelectModule, declarations: [DoSelectComponent, ContentSelectDirective], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule,
        TranslateModule,
        DoBaseModule], exports: [DoSelectComponent, ContentSelectDirective] });
DoSelectModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoSelectModule, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            NgSelectModule,
            TranslateModule,
            DoBaseModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoSelectModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        NgSelectModule,
                        TranslateModule,
                        DoBaseModule,
                    ],
                    declarations: [
                        ...SELECT_COMPONENTS,
                        ...SELECT_DIRECTIVES,
                    ],
                    exports: [
                        ...SELECT_COMPONENTS,
                        ...SELECT_DIRECTIVES,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tc2VsZWN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXNoYXJlZC9zcmMvbGliL3NlbGVjdC9kby1zZWxlY3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7QUFFOUUsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUc7SUFDL0IsaUJBQWlCO0NBQ2xCLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRztJQUMvQixzQkFBc0I7Q0FDdkIsQ0FBQztBQW9CRixNQUFNLE9BQU8sY0FBYzs7NEdBQWQsY0FBYzs2R0FBZCxjQUFjLGlCQXpCekIsaUJBQWlCLEVBSWpCLHNCQUFzQixhQUtwQixZQUFZO1FBQ1osV0FBVztRQUNYLG1CQUFtQjtRQUNuQixjQUFjO1FBQ2QsZUFBZTtRQUNmLFlBQVksYUFkZCxpQkFBaUIsRUFJakIsc0JBQXNCOzZHQXFCWCxjQUFjLFlBakJoQjtZQUNQLFlBQVk7WUFDWixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLGNBQWM7WUFDZCxlQUFlO1lBQ2YsWUFBWTtTQUNiOzRGQVVVLGNBQWM7a0JBbEIxQixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixjQUFjO3dCQUNkLGVBQWU7d0JBQ2YsWUFBWTtxQkFDYjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osR0FBRyxpQkFBaUI7d0JBQ3BCLEdBQUcsaUJBQWlCO3FCQUNyQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsR0FBRyxpQkFBaUI7d0JBQ3BCLEdBQUcsaUJBQWlCO3FCQUNyQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IE5nU2VsZWN0TW9kdWxlIH0gZnJvbSAnQG5nLXNlbGVjdC9uZy1zZWxlY3QnO1xuaW1wb3J0IHsgRG9CYXNlTW9kdWxlIH0gZnJvbSAnLi4vYmFzZS9kby1iYXNlLm1vZHVsZSc7XG5pbXBvcnQgeyBEb1NlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vZG8tc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250ZW50U2VsZWN0RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmUvY29udGVudC1zZWxlY3QuZGlyZWN0aXZlJztcblxuZXhwb3J0IGNvbnN0IFNFTEVDVF9DT01QT05FTlRTID0gW1xuICBEb1NlbGVjdENvbXBvbmVudCxcbl07XG5cbmV4cG9ydCBjb25zdCBTRUxFQ1RfRElSRUNUSVZFUyA9IFtcbiAgQ29udGVudFNlbGVjdERpcmVjdGl2ZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBOZ1NlbGVjdE1vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGUsXG4gICAgRG9CYXNlTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5TRUxFQ1RfQ09NUE9ORU5UUyxcbiAgICAuLi5TRUxFQ1RfRElSRUNUSVZFUyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC4uLlNFTEVDVF9DT01QT05FTlRTLFxuICAgIC4uLlNFTEVDVF9ESVJFQ1RJVkVTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBEb1NlbGVjdE1vZHVsZSB7IH1cbiJdfQ==