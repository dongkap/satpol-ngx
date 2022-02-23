import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DoToastrService } from './services/do-toastr.service';
import * as i0 from "@angular/core";
export const TOASTR_COMPONENTS = [];
export const TOASTR_PROVIDERS = [
    DoToastrService,
];
export class DoToastrModule {
    static forRoot() {
        return {
            ngModule: DoToastrModule,
            providers: [
                ...TOASTR_PROVIDERS,
            ],
        };
    }
}
DoToastrModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoToastrModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoToastrModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoToastrModule, imports: [FormsModule] });
DoToastrModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoToastrModule, imports: [[
            FormsModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoToastrModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        FormsModule,
                    ],
                    declarations: [
                        ...TOASTR_COMPONENTS,
                    ],
                    exports: [
                        ...TOASTR_COMPONENTS,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tdG9hc3RyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXNoYXJlZC9zcmMvbGliL3RvYXN0ci9kby10b2FzdHIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBRS9ELE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHLEVBQ2hDLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRztJQUM5QixlQUFlO0NBQ2hCLENBQUM7QUFhRixNQUFNLE9BQU8sY0FBYztJQUN6QixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLEVBQUU7Z0JBQ1QsR0FBRyxnQkFBZ0I7YUFDcEI7U0FDRixDQUFDO0lBQ0osQ0FBQzs7NEdBUlUsY0FBYzs2R0FBZCxjQUFjLFlBVHZCLFdBQVc7NkdBU0YsY0FBYyxZQVZoQjtZQUNQLFdBQVc7U0FDWjs0RkFRVSxjQUFjO2tCQVgxQixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxXQUFXO3FCQUNaO29CQUNELFlBQVksRUFBRTt3QkFDWixHQUFHLGlCQUFpQjtxQkFDckI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLEdBQUcsaUJBQWlCO3FCQUNyQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERvVG9hc3RyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZG8tdG9hc3RyLnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgVE9BU1RSX0NPTVBPTkVOVFMgPSBbXG5dO1xuXG5leHBvcnQgY29uc3QgVE9BU1RSX1BST1ZJREVSUyA9IFtcbiAgRG9Ub2FzdHJTZXJ2aWNlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEZvcm1zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5UT0FTVFJfQ09NUE9ORU5UUyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC4uLlRPQVNUUl9DT01QT05FTlRTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBEb1RvYXN0ck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8RG9Ub2FzdHJNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERvVG9hc3RyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIC4uLlRPQVNUUl9QUk9WSURFUlMsXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==