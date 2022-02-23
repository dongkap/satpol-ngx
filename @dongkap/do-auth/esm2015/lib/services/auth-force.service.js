import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class AuthForceService {
    isEmpty() {
        return (this.user && this.pass) ? false : true;
    }
    setData(user, pass) {
        this.user = user;
        this.pass = pass;
    }
    get username() {
        return this.user;
    }
    get password() {
        return this.pass;
    }
}
AuthForceService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthForceService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
AuthForceService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthForceService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthForceService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1mb3JjZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tYXV0aC9zcmMvbGliL3NlcnZpY2VzL2F1dGgtZm9yY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUczQyxNQUFNLE9BQU8sZ0JBQWdCO0lBS2xCLE9BQU87UUFDVixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2xELENBQUM7SUFFTSxPQUFPLENBQUMsSUFBWSxFQUFFLElBQVk7UUFDckMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELElBQVcsUUFBUTtRQUNmLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsSUFBVyxRQUFRO1FBQ2YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7OzhHQXBCUSxnQkFBZ0I7a0hBQWhCLGdCQUFnQjs0RkFBaEIsZ0JBQWdCO2tCQUQ1QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aEZvcmNlU2VydmljZSB7XG5cbiAgICBwcml2YXRlIHVzZXI6IHN0cmluZztcbiAgICBwcml2YXRlIHBhc3M6IHN0cmluZztcblxuICAgIHB1YmxpYyBpc0VtcHR5KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKHRoaXMudXNlciAmJiB0aGlzLnBhc3MpID8gZmFsc2U6IHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldERhdGEodXNlcjogc3RyaW5nLCBwYXNzOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICAgICAgdGhpcy5wYXNzID0gcGFzcztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHVzZXJuYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXI7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBwYXNzd29yZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXNzO1xuICAgIH1cblxufVxuIl19