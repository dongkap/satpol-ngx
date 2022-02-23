import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class TimingPipe {
    transform(time) {
        if (time) {
            const minutes = Math.floor(time / 60);
            const seconds = Math.floor(time % 60);
            return `${this.initZero(minutes)}${minutes}:${this.initZero(seconds)}${seconds}`;
        }
        return '00:00';
    }
    initZero(time) {
        return time < 10 ? '0' : '';
    }
}
TimingPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: TimingPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
TimingPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: TimingPipe, name: "timing" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: TimingPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'timing' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltaW5nLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby10aGVtZS9zcmMvbGliL3BpcGVzL3RpbWluZy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUdwRCxNQUFNLE9BQU8sVUFBVTtJQUNyQixTQUFTLENBQUMsSUFBWTtRQUNwQixJQUFJLElBQUksRUFBRTtZQUNSLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ3RDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ3RDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDO1NBQ2xGO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVPLFFBQVEsQ0FBQyxJQUFZO1FBQzNCLE9BQU8sSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7d0dBYlUsVUFBVTtzR0FBVixVQUFVOzRGQUFWLFVBQVU7a0JBRHRCLElBQUk7bUJBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7IG5hbWU6ICd0aW1pbmcnIH0pXG5leHBvcnQgY2xhc3MgVGltaW5nUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odGltZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBpZiAodGltZSkge1xuICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IodGltZSAvIDYwKTtcbiAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKHRpbWUgJSA2MCk7XG4gICAgICByZXR1cm4gYCR7dGhpcy5pbml0WmVybyhtaW51dGVzKX0ke21pbnV0ZXN9OiR7dGhpcy5pbml0WmVybyhzZWNvbmRzKX0ke3NlY29uZHN9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gJzAwOjAwJztcbiAgfVxuXG4gIHByaXZhdGUgaW5pdFplcm8odGltZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGltZSA8IDEwID8gJzAnIDogJyc7XG4gIH1cbn1cbiJdfQ==