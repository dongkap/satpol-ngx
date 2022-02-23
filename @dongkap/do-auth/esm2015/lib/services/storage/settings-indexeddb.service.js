import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IndexedDBService, oauthInfoModels, TypeDataOauth, } from '@dongkap/do-core';
import * as i0 from "@angular/core";
export class SettingsIndexedDBService extends IndexedDBService {
    constructor(injector) {
        super(injector, 'do-core', 1, '#do-settings');
        this.translate = injector.get(TranslateService);
    }
    loginStorage(response) {
        oauthInfoModels.forEach(data => {
            if (response[data.key]) {
                if (data.type === TypeDataOauth.SETTINGS && data.persist) {
                    this.put(data.key, data.string ? response[data.key] : JSON.stringify(response[data.key])).then();
                    if (data.key === 'locale') {
                        this.translate.getTranslation(response[data.key]).subscribe((lang) => {
                            this.translate.use(response[data.key]);
                            this.translate.setTranslation(response[data.key], lang, true);
                        });
                    }
                }
            }
        });
    }
}
SettingsIndexedDBService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SettingsIndexedDBService, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.Injectable });
SettingsIndexedDBService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SettingsIndexedDBService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SettingsIndexedDBService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i0.Injector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MtaW5kZXhlZGRiLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1hdXRoL3NyYy9saWIvc2VydmljZXMvc3RvcmFnZS9zZXR0aW5ncy1pbmRleGVkZGIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFFTCxnQkFBZ0IsRUFDaEIsZUFBZSxFQUNmLGFBQWEsR0FDZCxNQUFNLGtCQUFrQixDQUFDOztBQUkxQixNQUFNLE9BQU8sd0JBQXlCLFNBQVEsZ0JBQTZCO0lBSXpFLFlBQVksUUFBa0I7UUFDNUIsS0FBSyxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFTSxZQUFZLENBQUMsUUFBYTtRQUMvQixlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzdCLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDdEIsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLGFBQWEsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDeEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ2pHLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxRQUFRLEVBQUU7d0JBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTs0QkFDeEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOzRCQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDaEUsQ0FBQyxDQUFDLENBQUM7cUJBQ0o7aUJBQ0Y7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7c0hBdkJVLHdCQUF3QjswSEFBeEIsd0JBQXdCLGNBRFgsTUFBTTs0RkFDbkIsd0JBQXdCO2tCQURwQyxVQUFVO21CQUFDLEVBQUMsVUFBVSxFQUFHLE1BQU0sRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQge1xuICBJbmRleGVkREJGYWN0b3J5U2VydmljZSxcbiAgSW5kZXhlZERCU2VydmljZSxcbiAgb2F1dGhJbmZvTW9kZWxzLFxuICBUeXBlRGF0YU9hdXRoLFxufSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IFNldHRpbmdzSURCIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3NldHRpbmdzLnNjaGVtYSc7XG5cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluIDogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc0luZGV4ZWREQlNlcnZpY2UgZXh0ZW5kcyBJbmRleGVkREJTZXJ2aWNlPFNldHRpbmdzSURCPiBpbXBsZW1lbnRzIEluZGV4ZWREQkZhY3RvcnlTZXJ2aWNlIHtcblxuICBwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZTtcblxuICBjb25zdHJ1Y3RvcihpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBzdXBlcihpbmplY3RvciwgJ2RvLWNvcmUnLCAxLCAnI2RvLXNldHRpbmdzJyk7XG4gICAgdGhpcy50cmFuc2xhdGUgPSBpbmplY3Rvci5nZXQoVHJhbnNsYXRlU2VydmljZSk7XG4gIH1cblxuICBwdWJsaWMgbG9naW5TdG9yYWdlKHJlc3BvbnNlOiBhbnkpOiB2b2lkIHtcbiAgICBvYXV0aEluZm9Nb2RlbHMuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgIGlmIChyZXNwb25zZVtkYXRhLmtleV0pIHtcbiAgICAgICAgaWYgKGRhdGEudHlwZSA9PT0gVHlwZURhdGFPYXV0aC5TRVRUSU5HUyAmJiBkYXRhLnBlcnNpc3QpIHtcbiAgICAgICAgICB0aGlzLnB1dChkYXRhLmtleSwgZGF0YS5zdHJpbmcgPyByZXNwb25zZVtkYXRhLmtleV0gOiBKU09OLnN0cmluZ2lmeShyZXNwb25zZVtkYXRhLmtleV0pKS50aGVuKCk7XG4gICAgICAgICAgaWYgKGRhdGEua2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICAgICAgdGhpcy50cmFuc2xhdGUuZ2V0VHJhbnNsYXRpb24ocmVzcG9uc2VbZGF0YS5rZXldKS5zdWJzY3JpYmUoKGxhbmc6IGFueSkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZS51c2UocmVzcG9uc2VbZGF0YS5rZXldKTtcbiAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGUuc2V0VHJhbnNsYXRpb24ocmVzcG9uc2VbZGF0YS5rZXldLCBsYW5nLCB0cnVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==