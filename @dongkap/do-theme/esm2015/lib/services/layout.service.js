import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { delay, shareReplay, debounceTime } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class LayoutService {
    constructor() {
        this.layoutSize$ = new Subject();
        this.layoutSizeChange$ = this.layoutSize$.pipe(shareReplay({ refCount: true }));
    }
    changeLayoutSize() {
        this.layoutSize$.next();
    }
    onChangeLayoutSize() {
        return this.layoutSizeChange$.pipe(delay(1));
    }
    onSafeChangeLayoutSize() {
        return this.layoutSizeChange$.pipe(debounceTime(350));
    }
}
LayoutService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LayoutService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
LayoutService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LayoutService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LayoutService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby10aGVtZS9zcmMvbGliL3NlcnZpY2VzL2xheW91dC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFHbEUsTUFBTSxPQUFPLGFBQWE7SUFEMUI7UUFHWSxnQkFBVyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDNUIsc0JBQWlCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQ2pELFdBQVcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUNoQyxDQUFDO0tBZUg7SUFiQyxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxzQkFBc0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUNoQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQ2xCLENBQUM7SUFDSixDQUFDOzsyR0FuQlUsYUFBYTsrR0FBYixhQUFhOzRGQUFiLGFBQWE7a0JBRHpCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWxheSwgc2hhcmVSZXBsYXksIGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExheW91dFNlcnZpY2Uge1xuXG4gIHByb3RlY3RlZCBsYXlvdXRTaXplJCA9IG5ldyBTdWJqZWN0KCk7XG4gIHByb3RlY3RlZCBsYXlvdXRTaXplQ2hhbmdlJCA9IHRoaXMubGF5b3V0U2l6ZSQucGlwZShcbiAgICBzaGFyZVJlcGxheSh7IHJlZkNvdW50OiB0cnVlIH0pLFxuICApO1xuXG4gIGNoYW5nZUxheW91dFNpemUoKSB7XG4gICAgdGhpcy5sYXlvdXRTaXplJC5uZXh0KCk7XG4gIH1cblxuICBvbkNoYW5nZUxheW91dFNpemUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5sYXlvdXRTaXplQ2hhbmdlJC5waXBlKGRlbGF5KDEpKTtcbiAgfVxuXG4gIG9uU2FmZUNoYW5nZUxheW91dFNpemUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5sYXlvdXRTaXplQ2hhbmdlJC5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDM1MCksXG4gICAgKTtcbiAgfVxufVxuIl19