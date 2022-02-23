import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd } from '@angular/router';
import { NB_DOCUMENT } from '@nebular/theme';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class SeoService {
    constructor(router, document, platformId) {
        this.router = router;
        this.destroy$ = new Subject();
        this.isBrowser = isPlatformBrowser(platformId);
        this.dom = document;
        if (this.isBrowser) {
            this.createCanonicalTag();
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    createCanonicalTag() {
        this.linkCanonical = this.dom.createElement('link');
        this.linkCanonical.setAttribute('rel', 'canonical');
        this.dom.head.appendChild(this.linkCanonical);
        this.linkCanonical.setAttribute('href', this.getCanonicalUrl());
    }
    trackCanonicalChanges() {
        if (!this.isBrowser) {
            return;
        }
        this.router.events.pipe(filter((event) => event instanceof NavigationEnd), takeUntil(this.destroy$))
            .subscribe(() => {
            this.linkCanonical.setAttribute('href', this.getCanonicalUrl());
        });
    }
    getCanonicalUrl() {
        return this.dom.location.origin + this.dom.location.pathname;
    }
}
SeoService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SeoService, deps: [{ token: i1.Router }, { token: NB_DOCUMENT }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Injectable });
SeoService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SeoService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SeoService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_DOCUMENT]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VvLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby10aGVtZS9zcmMvbGliL3NlcnZpY2VzL3Nlby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsYUFBYSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBRy9CLE1BQU0sT0FBTyxVQUFVO0lBT3JCLFlBQ1UsTUFBYyxFQUNELFFBQVEsRUFDUixVQUFVO1FBRnZCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFOUCxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQVU5QyxJQUFJLENBQUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDO1FBRXBCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUMzQjtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELHFCQUFxQjtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ3JCLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxZQUFZLGFBQWEsQ0FBQyxFQUNqRCxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUN6QjthQUNFLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFDbEUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sZUFBZTtRQUNyQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7SUFDL0QsQ0FBQzs7d0dBaERVLFVBQVUsd0NBU1gsV0FBVyxhQUNYLFdBQVc7NEdBVlYsVUFBVTs0RkFBVixVQUFVO2tCQUR0QixVQUFVOzswQkFVTixNQUFNOzJCQUFDLFdBQVc7OzBCQUNsQixNQUFNOzJCQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIFBMQVRGT1JNX0lELCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOQl9ET0NVTUVOVCB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VvU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgZG9tOiBEb2N1bWVudDtcbiAgcHJpdmF0ZSByZWFkb25seSBpc0Jyb3dzZXI6IGJvb2xlYW47XG4gIHByaXZhdGUgbGlua0Nhbm9uaWNhbDogSFRNTExpbmtFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgQEluamVjdChOQl9ET0NVTUVOVCkgZG9jdW1lbnQsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZCxcbiAgKSB7XG4gICAgdGhpcy5pc0Jyb3dzZXIgPSBpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKTtcbiAgICB0aGlzLmRvbSA9IGRvY3VtZW50O1xuXG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLmNyZWF0ZUNhbm9uaWNhbFRhZygpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIGNyZWF0ZUNhbm9uaWNhbFRhZygpIHtcbiAgICB0aGlzLmxpbmtDYW5vbmljYWwgPSB0aGlzLmRvbS5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgdGhpcy5saW5rQ2Fub25pY2FsLnNldEF0dHJpYnV0ZSgncmVsJywgJ2Nhbm9uaWNhbCcpO1xuICAgIHRoaXMuZG9tLmhlYWQuYXBwZW5kQ2hpbGQodGhpcy5saW5rQ2Fub25pY2FsKTtcbiAgICB0aGlzLmxpbmtDYW5vbmljYWwuc2V0QXR0cmlidXRlKCdocmVmJywgdGhpcy5nZXRDYW5vbmljYWxVcmwoKSk7XG4gIH1cblxuICB0cmFja0Nhbm9uaWNhbENoYW5nZXMoKSB7XG4gICAgaWYgKCF0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucm91dGVyLmV2ZW50cy5waXBlKFxuICAgICAgZmlsdGVyKChldmVudCkgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSxcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5saW5rQ2Fub25pY2FsLnNldEF0dHJpYnV0ZSgnaHJlZicsIHRoaXMuZ2V0Q2Fub25pY2FsVXJsKCkpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldENhbm9uaWNhbFVybCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmRvbS5sb2NhdGlvbi5vcmlnaW4gKyB0aGlzLmRvbS5sb2NhdGlvbi5wYXRobmFtZTtcbiAgfVxufVxuIl19