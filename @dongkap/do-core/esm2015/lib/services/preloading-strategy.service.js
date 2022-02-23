import { Injectable } from '@angular/core';
import { EMPTY } from 'rxjs';
import * as i0 from "@angular/core";
export class CustomPreloadingStrategy {
    constructor() {
        this.preloadedModules = [];
    }
    preload(route, load) {
        if (route.data && route.data['preload']) {
            this.preloadedModules.push(route.path);
            return load();
        }
        else {
            return EMPTY;
        }
    }
}
CustomPreloadingStrategy.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: CustomPreloadingStrategy, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
CustomPreloadingStrategy.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: CustomPreloadingStrategy });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: CustomPreloadingStrategy, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZGluZy1zdHJhdGVneS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tY29yZS9zcmMvbGliL3NlcnZpY2VzL3ByZWxvYWRpbmctc3RyYXRlZ3kuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBRzdCLE1BQU0sT0FBTyx3QkFBd0I7SUFEckM7UUFFRSxxQkFBZ0IsR0FBYSxFQUFFLENBQUM7S0FVakM7SUFSQyxPQUFPLENBQUMsS0FBWSxFQUFFLElBQTJCO1FBQy9DLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLE9BQU8sSUFBSSxFQUFFLENBQUM7U0FDZjthQUFNO1lBQ0wsT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7O3NIQVZVLHdCQUF3QjswSEFBeEIsd0JBQXdCOzRGQUF4Qix3QkFBd0I7a0JBRHBDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcmVsb2FkaW5nU3RyYXRlZ3ksIFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEVNUFRZIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDdXN0b21QcmVsb2FkaW5nU3RyYXRlZ3kgaW1wbGVtZW50cyBQcmVsb2FkaW5nU3RyYXRlZ3kge1xuICBwcmVsb2FkZWRNb2R1bGVzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIHByZWxvYWQocm91dGU6IFJvdXRlLCBsb2FkOiAoKSA9PiBPYnNlcnZhYmxlPGFueT4pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGlmIChyb3V0ZS5kYXRhICYmIHJvdXRlLmRhdGFbJ3ByZWxvYWQnXSkge1xuICAgICAgdGhpcy5wcmVsb2FkZWRNb2R1bGVzLnB1c2gocm91dGUucGF0aCk7XG4gICAgICByZXR1cm4gbG9hZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gRU1QVFk7XG4gICAgfVxuICB9XG59XG4iXX0=