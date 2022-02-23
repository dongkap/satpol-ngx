import { Injectable } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
export class AnalyticsService {
    constructor(location, router) {
        this.location = location;
        this.router = router;
        this.enabled = false;
    }
    trackPageViews() {
        if (this.enabled) {
            this.router.events.pipe(filter((event) => event instanceof NavigationEnd))
                .subscribe(() => {
                ga('send', { hitType: 'pageview', page: this.location.path() });
            });
        }
    }
    trackEvent(eventName) {
        if (this.enabled) {
            ga('send', 'event', eventName);
        }
    }
}
AnalyticsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AnalyticsService, deps: [{ token: i1.Location }, { token: i2.Router }], target: i0.ɵɵFactoryTarget.Injectable });
AnalyticsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AnalyticsService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AnalyticsService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Location }, { type: i2.Router }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHl0aWNzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby10aGVtZS9zcmMvbGliL3NlcnZpY2VzL2FuYWx5dGljcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBRXhELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUt4QyxNQUFNLE9BQU8sZ0JBQWdCO0lBRzNCLFlBQW9CLFFBQWtCLEVBQVUsTUFBYztRQUExQyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUM1RCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRUQsY0FBYztRQUNaLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ3JCLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxZQUFZLGFBQWEsQ0FBQyxDQUNsRDtpQkFDRSxTQUFTLENBQUMsR0FBRyxFQUFFO2dCQUNkLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFDLENBQUMsQ0FBQztZQUNoRSxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0gsQ0FBQztJQUVELFVBQVUsQ0FBQyxTQUFpQjtRQUMxQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsRUFBRSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDaEM7SUFDSCxDQUFDOzs4R0F0QlUsZ0JBQWdCO2tIQUFoQixnQkFBZ0I7NEZBQWhCLGdCQUFnQjtrQkFENUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmRlY2xhcmUgY29uc3QgZ2E6IGFueTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFuYWx5dGljc1NlcnZpY2Uge1xuICBwcml2YXRlIGVuYWJsZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHRyYWNrUGFnZVZpZXdzKCkge1xuICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcbiAgICAgIHRoaXMucm91dGVyLmV2ZW50cy5waXBlKFxuICAgICAgICBmaWx0ZXIoKGV2ZW50KSA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpLFxuICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICBnYSgnc2VuZCcsIHtoaXRUeXBlOiAncGFnZXZpZXcnLCBwYWdlOiB0aGlzLmxvY2F0aW9uLnBhdGgoKX0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB0cmFja0V2ZW50KGV2ZW50TmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuZW5hYmxlZCkge1xuICAgICAgZ2EoJ3NlbmQnLCAnZXZlbnQnLCBldmVudE5hbWUpO1xuICAgIH1cbiAgfVxufVxuIl19