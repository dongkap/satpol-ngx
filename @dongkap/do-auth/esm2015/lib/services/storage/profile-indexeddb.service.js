import { Injectable } from '@angular/core';
import { additionalInfoModels, IndexedDBService, oauthInfoModels, TypeDataOauth, } from '@dongkap/do-core';
import * as i0 from "@angular/core";
export class ProfileIndexedDBService extends IndexedDBService {
    constructor(injector) {
        super(injector, 'do-core', 1, '#do-profile');
    }
    loginStorage(response) {
        oauthInfoModels.forEach(data => {
            if (response[data.key]) {
                if (data.type === TypeDataOauth.PROFILE && data.persist) {
                    this.put(data.key, data.string ? response[data.key] : JSON.stringify(response[data.key])).then();
                }
            }
        });
    }
    logout() {
        oauthInfoModels.forEach(data => {
            if (data.type === TypeDataOauth.PROFILE) {
                this.remove(data.key);
            }
        });
        additionalInfoModels.forEach(data => {
            if (data.type === TypeDataOauth.PROFILE) {
                this.remove(data.key);
            }
        });
    }
}
ProfileIndexedDBService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ProfileIndexedDBService, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.Injectable });
ProfileIndexedDBService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ProfileIndexedDBService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ProfileIndexedDBService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i0.Injector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS1pbmRleGVkZGIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLWF1dGgvc3JjL2xpYi9zZXJ2aWNlcy9zdG9yYWdlL3Byb2ZpbGUtaW5kZXhlZGRiLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQ0wsb0JBQW9CLEVBRXBCLGdCQUFnQixFQUNoQixlQUFlLEVBQ2YsYUFBYSxHQUNkLE1BQU0sa0JBQWtCLENBQUM7O0FBSTFCLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxnQkFBNEI7SUFFdkUsWUFBWSxRQUFrQjtRQUM1QixLQUFLLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVNLFlBQVksQ0FBQyxRQUFhO1FBQy9CLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDM0IsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUN0QixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssYUFBYSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUN2RCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDbEc7YUFDRjtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLE1BQU07UUFDWCxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzdCLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxhQUFhLENBQUMsT0FBTyxFQUFFO2dCQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN2QjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2xDLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxhQUFhLENBQUMsT0FBTyxFQUFFO2dCQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN2QjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7cUhBM0JVLHVCQUF1Qjt5SEFBdkIsdUJBQXVCLGNBRFYsTUFBTTs0RkFDbkIsdUJBQXVCO2tCQURuQyxVQUFVO21CQUFDLEVBQUMsVUFBVSxFQUFHLE1BQU0sRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBhZGRpdGlvbmFsSW5mb01vZGVscyxcbiAgSW5kZXhlZERCRmFjdG9yeVNlcnZpY2UsXG4gIEluZGV4ZWREQlNlcnZpY2UsXG4gIG9hdXRoSW5mb01vZGVscyxcbiAgVHlwZURhdGFPYXV0aCxcbn0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBQcm9maWxlSURCIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Byb2ZpbGUuc2NoZW1hJztcblxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW4gOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIFByb2ZpbGVJbmRleGVkREJTZXJ2aWNlIGV4dGVuZHMgSW5kZXhlZERCU2VydmljZTxQcm9maWxlSURCPiBpbXBsZW1lbnRzIEluZGV4ZWREQkZhY3RvcnlTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBzdXBlcihpbmplY3RvciwgJ2RvLWNvcmUnLCAxLCAnI2RvLXByb2ZpbGUnKTtcbiAgfVxuXG4gIHB1YmxpYyBsb2dpblN0b3JhZ2UocmVzcG9uc2U6IGFueSk6IHZvaWQge1xuICAgIG9hdXRoSW5mb01vZGVscy5mb3JFYWNoKGRhdGEgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2VbZGF0YS5rZXldKSB7XG4gICAgICAgICAgaWYgKGRhdGEudHlwZSA9PT0gVHlwZURhdGFPYXV0aC5QUk9GSUxFICYmIGRhdGEucGVyc2lzdCkge1xuICAgICAgICAgICAgdGhpcy5wdXQoZGF0YS5rZXksIGRhdGEuc3RyaW5nID8gcmVzcG9uc2VbZGF0YS5rZXldIDogSlNPTi5zdHJpbmdpZnkocmVzcG9uc2VbZGF0YS5rZXldKSkudGhlbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGxvZ291dCgpOiB2b2lkIHtcbiAgICBvYXV0aEluZm9Nb2RlbHMuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgIGlmIChkYXRhLnR5cGUgPT09IFR5cGVEYXRhT2F1dGguUFJPRklMRSkge1xuICAgICAgICB0aGlzLnJlbW92ZShkYXRhLmtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgYWRkaXRpb25hbEluZm9Nb2RlbHMuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgIGlmIChkYXRhLnR5cGUgPT09IFR5cGVEYXRhT2F1dGguUFJPRklMRSkge1xuICAgICAgICB0aGlzLnJlbW92ZShkYXRhLmtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxufVxuIl19