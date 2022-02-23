import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class NumberWithCommasPipe {
    transform(input) {
        return new Intl.NumberFormat().format(input);
    }
}
NumberWithCommasPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NumberWithCommasPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
NumberWithCommasPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NumberWithCommasPipe, name: "ngxNumberWithCommas" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NumberWithCommasPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'ngxNumberWithCommas' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXdpdGgtY29tbWFzLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby10aGVtZS9zcmMvbGliL3BpcGVzL251bWJlci13aXRoLWNvbW1hcy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUdwRCxNQUFNLE9BQU8sb0JBQW9CO0lBRS9CLFNBQVMsQ0FBQyxLQUFhO1FBQ3JCLE9BQU8sSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7O2tIQUpVLG9CQUFvQjtnSEFBcEIsb0JBQW9COzRGQUFwQixvQkFBb0I7a0JBRGhDLElBQUk7bUJBQUMsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHsgbmFtZTogJ25neE51bWJlcldpdGhDb21tYXMnIH0pXG5leHBvcnQgY2xhc3MgTnVtYmVyV2l0aENvbW1hc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0oaW5wdXQ6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdCgpLmZvcm1hdChpbnB1dCk7XG4gIH1cbn1cbiJdfQ==