import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { USER_SERVICE } from '@dongkap/do-core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./auth-token.service";
import * as i3 from "@dongkap/do-core";
export class AuthGuardService {
    constructor(router, authTokenService, authService) {
        this.router = router;
        this.authTokenService = authTokenService;
        this.authService = authService;
    }
    canActivate(route, state) {
        const result$ = new Subject();
        this.authTokenService.isLogin().then((value) => {
            result$.next(value);
            if (!value) {
                this.router.navigate(['/auth']);
            }
            else {
                if (state.url !== '/auth/logout') {
                    this.authService.loadUser();
                }
            }
        });
        return result$.asObservable();
    }
}
AuthGuardService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthGuardService, deps: [{ token: i1.Router }, { token: i2.AuthTokenService }, { token: USER_SERVICE }], target: i0.ɵɵFactoryTarget.Injectable });
AuthGuardService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthGuardService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthGuardService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i2.AuthTokenService }, { type: i3.UserService, decorators: [{
                    type: Inject,
                    args: [USER_SERVICE]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1ndWFyZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tYXV0aC9zcmMvbGliL3NlcnZpY2VzL2F1dGgtZ3VhcmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBZSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7QUFJN0QsTUFBTSxPQUFPLGdCQUFnQjtJQUN6QixZQUNZLE1BQWMsRUFDZCxnQkFBa0MsRUFDWixXQUF3QjtRQUY5QyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNaLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUcsQ0FBQztJQUU5RCxXQUFXLENBQUMsS0FBNkIsRUFBRSxLQUEwQjtRQUNqRSxNQUFNLE9BQU8sR0FBcUIsSUFBSSxPQUFPLEVBQVcsQ0FBQztRQUN6RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBYyxFQUFFLEVBQUU7WUFDcEQsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzthQUNuQztpQkFBTTtnQkFDSCxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssY0FBYyxFQUFFO29CQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUMvQjthQUNKO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs4R0FuQlEsZ0JBQWdCLHdFQUliLFlBQVk7a0hBSmYsZ0JBQWdCOzRGQUFoQixnQkFBZ0I7a0JBRDVCLFVBQVU7OzBCQUtGLE1BQU07MkJBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSwgVVNFUl9TRVJWSUNFIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBBdXRoVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLXRva2VuLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aEd1YXJkU2VydmljZSBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBhdXRoVG9rZW5TZXJ2aWNlOiBBdXRoVG9rZW5TZXJ2aWNlLFxuICAgICAgICBASW5qZWN0KFVTRVJfU0VSVklDRSkgcHJpdmF0ZSBhdXRoU2VydmljZTogVXNlclNlcnZpY2UpIHt9XG5cbiAgICBjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0JDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgICAgIHRoaXMuYXV0aFRva2VuU2VydmljZS5pc0xvZ2luKCkudGhlbigodmFsdWU6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgIHJlc3VsdCQubmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXV0aCddKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLnVybCAhPT0gJy9hdXRoL2xvZ291dCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2FkVXNlcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQkLmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxufVxuIl19