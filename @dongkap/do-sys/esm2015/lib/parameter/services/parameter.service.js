import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class ParameterService {
    getParameter() {
        return this.parameter;
    }
    setParameter(parameter) {
        this.parameter = parameter;
    }
    getParameterGroup() {
        return this.parameterGroup;
    }
    setParameterGroup(parameterGroup) {
        this.parameterGroup = parameterGroup;
    }
    getLocales() {
        return this.locales;
    }
    setLocales(locales) {
        this.locales = locales;
    }
}
ParameterService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ParameterService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ParameterService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ParameterService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ParameterService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1ldGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1zeXMvc3JjL2xpYi9wYXJhbWV0ZXIvc2VydmljZXMvcGFyYW1ldGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0MsTUFBTSxPQUFPLGdCQUFnQjtJQU1sQixZQUFZO1FBQ2YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFTSxZQUFZLENBQUMsU0FBeUI7UUFDekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUVNLGlCQUFpQjtRQUNwQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDL0IsQ0FBQztJQUVNLGlCQUFpQixDQUFDLGNBQW1DO1FBQ3hELElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0lBQ3pDLENBQUM7SUFFTSxVQUFVO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFFTSxVQUFVLENBQUMsT0FBc0I7UUFDcEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQzs7OEdBNUJRLGdCQUFnQjtrSEFBaEIsZ0JBQWdCOzRGQUFoQixnQkFBZ0I7a0JBRDVCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhbGVNb2RlbCB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgUGFyYW1ldGVyR3JvdXBNb2RlbCwgUGFyYW1ldGVyTW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvcGFyYW1ldGVyLm1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhcmFtZXRlclNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBwYXJhbWV0ZXI6IFBhcmFtZXRlck1vZGVsO1xuICAgIHByaXZhdGUgcGFyYW1ldGVyR3JvdXA6IFBhcmFtZXRlckdyb3VwTW9kZWw7XG4gICAgcHJpdmF0ZSBsb2NhbGVzOiBMb2NhbGVNb2RlbFtdO1xuXG4gICAgcHVibGljIGdldFBhcmFtZXRlcigpOiBQYXJhbWV0ZXJNb2RlbCB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0UGFyYW1ldGVyKHBhcmFtZXRlcjogUGFyYW1ldGVyTW9kZWwpIHtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXIgPSBwYXJhbWV0ZXI7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFBhcmFtZXRlckdyb3VwKCk6IFBhcmFtZXRlckdyb3VwTW9kZWwge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJHcm91cDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0UGFyYW1ldGVyR3JvdXAocGFyYW1ldGVyR3JvdXA6IFBhcmFtZXRlckdyb3VwTW9kZWwpIHtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJHcm91cCA9IHBhcmFtZXRlckdyb3VwO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRMb2NhbGVzKCk6IExvY2FsZU1vZGVsW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRMb2NhbGVzKGxvY2FsZXM6IExvY2FsZU1vZGVsW10pIHtcbiAgICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlcztcbiAgICB9XG5cbn1cbiJdfQ==