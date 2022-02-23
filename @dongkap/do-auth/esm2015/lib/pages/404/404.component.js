import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@nebular/theme";
export class PageNotFoundComponent {
    constructor(router) {
        this.router = router;
    }
    goToHome() {
        this.router.navigate(['/app/home']);
        return;
    }
}
PageNotFoundComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PageNotFoundComponent, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Component });
PageNotFoundComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: PageNotFoundComponent, selector: "do-404", ngImport: i0, template: "<div class=\"flex-centered\">\n  <h2 class=\"title\">404</h2>\n  <h2 class=\"title\">Page Not Found</h2>\n  <small class=\"sub-title\">The page you were looking for doesn't exist</small>\n  <button nbButton fullWidth (click)=\"goToHome()\" type=\"button\" class=\"home-button\">\n    Take me home\n  </button>\n</div>\n", styles: [".flex-centered{margin:auto}nb-card-body{display:flex}.title{text-align:center}.sub-title{text-align:center;display:block;margin-bottom:3rem}.home-button{margin-bottom:2rem}\n"], components: [{ type: i2.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PageNotFoundComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-404',
                    styleUrls: ['./404.component.scss'],
                    templateUrl: './404.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDA0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLWF1dGgvc3JjL2xpYi9wYWdlcy80MDQvNDA0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLWF1dGgvc3JjL2xpYi9wYWdlcy80MDQvNDA0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFRMUMsTUFBTSxPQUFPLHFCQUFxQjtJQUVoQyxZQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUNsQyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNwQyxPQUFPO0lBQ1QsQ0FBQzs7bUhBUlUscUJBQXFCO3VHQUFyQixxQkFBcUIsOENDUmxDLGlVQVFBOzRGREFhLHFCQUFxQjtrQkFMakMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsUUFBUTtvQkFDbEIsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7b0JBQ25DLFdBQVcsRUFBRSxzQkFBc0I7aUJBQ3BDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkby00MDQnLFxuICBzdHlsZVVybHM6IFsnLi80MDQuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuLzQwNC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VOb3RGb3VuZENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICB9XG5cbiAgZ29Ub0hvbWUoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL2hvbWUnXSk7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZmxleC1jZW50ZXJlZFwiPlxuICA8aDIgY2xhc3M9XCJ0aXRsZVwiPjQwNDwvaDI+XG4gIDxoMiBjbGFzcz1cInRpdGxlXCI+UGFnZSBOb3QgRm91bmQ8L2gyPlxuICA8c21hbGwgY2xhc3M9XCJzdWItdGl0bGVcIj5UaGUgcGFnZSB5b3Ugd2VyZSBsb29raW5nIGZvciBkb2Vzbid0IGV4aXN0PC9zbWFsbD5cbiAgPGJ1dHRvbiBuYkJ1dHRvbiBmdWxsV2lkdGggKGNsaWNrKT1cImdvVG9Ib21lKClcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJob21lLWJ1dHRvblwiPlxuICAgIFRha2UgbWUgaG9tZVxuICA8L2J1dHRvbj5cbjwvZGl2PlxuIl19