import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class PluralPipe {
    transform(input, label, pluralLabel = '') {
        input = input || 0;
        return input === 1
            ? `${input} ${label}`
            : pluralLabel
                ? `${input} ${pluralLabel}`
                : `${input} ${label}s`;
    }
}
PluralPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PluralPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
PluralPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PluralPipe, name: "ngxPlural" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PluralPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'ngxPlural' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1cmFsLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby10aGVtZS9zcmMvbGliL3BpcGVzL3BsdXJhbC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUdwRCxNQUFNLE9BQU8sVUFBVTtJQUVyQixTQUFTLENBQUMsS0FBYSxFQUFFLEtBQWEsRUFBRSxjQUFzQixFQUFFO1FBQzlELEtBQUssR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDO1FBQ25CLE9BQU8sS0FBSyxLQUFLLENBQUM7WUFDaEIsQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLEtBQUssRUFBRTtZQUNyQixDQUFDLENBQUMsV0FBVztnQkFDWCxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksV0FBVyxFQUFFO2dCQUMzQixDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksS0FBSyxHQUFHLENBQUM7SUFDN0IsQ0FBQzs7d0dBVFUsVUFBVTtzR0FBVixVQUFVOzRGQUFWLFVBQVU7a0JBRHRCLElBQUk7bUJBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7IG5hbWU6ICduZ3hQbHVyYWwnIH0pXG5leHBvcnQgY2xhc3MgUGx1cmFsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHRyYW5zZm9ybShpbnB1dDogbnVtYmVyLCBsYWJlbDogc3RyaW5nLCBwbHVyYWxMYWJlbDogc3RyaW5nID0gJycpOiBzdHJpbmcge1xuICAgIGlucHV0ID0gaW5wdXQgfHwgMDtcbiAgICByZXR1cm4gaW5wdXQgPT09IDFcbiAgICAgID8gYCR7aW5wdXR9ICR7bGFiZWx9YFxuICAgICAgOiBwbHVyYWxMYWJlbFxuICAgICAgICA/IGAke2lucHV0fSAke3BsdXJhbExhYmVsfWBcbiAgICAgICAgOiBgJHtpbnB1dH0gJHtsYWJlbH1zYDtcbiAgfVxufVxuIl19