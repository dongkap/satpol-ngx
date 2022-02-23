import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import * as i0 from "@angular/core";
export class NotEqualValidator {
    constructor(validateNotEqual) {
        this.validateNotEqual = validateNotEqual;
    }
    validate(c) {
        const v = c.value;
        const e = c.root.get(this.validateNotEqual);
        if (e && v === e.value && v) {
            return { equal: true };
        }
        return null;
    }
}
NotEqualValidator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NotEqualValidator, deps: [{ token: 'doValidateNotEqual', attribute: true }], target: i0.ɵɵFactoryTarget.Directive });
NotEqualValidator.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.16", type: NotEqualValidator, selector: "[doValidateNotEqual][formControlName],[doValidateNotEqual][formControl],[doValidateNotEqual][ngModel]", providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => NotEqualValidator), multi: true },
    ], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NotEqualValidator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[doValidateNotEqual][formControlName],[doValidateNotEqual][formControl],[doValidateNotEqual][ngModel]',
                    providers: [
                        { provide: NG_VALIDATORS, useExisting: forwardRef(() => NotEqualValidator), multi: true },
                    ],
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Attribute,
                    args: ['doValidateNotEqual']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LWVxdWFsLXZhbGlkYXRvci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1zaGFyZWQvc3JjL2xpYi9iYXNlL2RpcmVjdGl2ZS9ub3QtZXF1YWwtdmFsaWRhdG9yLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUE4QixhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFRM0UsTUFBTSxPQUFPLGlCQUFpQjtJQUUxQixZQUFvRCxnQkFBd0I7UUFBeEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFRO0lBQUcsQ0FBQztJQUVoRixRQUFRLENBQUMsQ0FBa0I7UUFDdkIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNsQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUU1QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDekIsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQztTQUMxQjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7OytHQVpRLGlCQUFpQixrQkFFSCxvQkFBb0I7bUdBRmxDLGlCQUFpQixnSUFKZjtRQUNQLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtLQUM1Rjs0RkFFUSxpQkFBaUI7a0JBTjdCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLHVHQUF1RztvQkFDakgsU0FBUyxFQUFFO3dCQUNQLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxrQkFBa0IsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7cUJBQzVGO2lCQUNKOzswQkFHZ0IsU0FBUzsyQkFBQyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIGZvcndhcmRSZWYsIEF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmFsaWRhdG9yLCBBYnN0cmFjdENvbnRyb2wsIE5HX1ZBTElEQVRPUlMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2RvVmFsaWRhdGVOb3RFcXVhbF1bZm9ybUNvbnRyb2xOYW1lXSxbZG9WYWxpZGF0ZU5vdEVxdWFsXVtmb3JtQ29udHJvbF0sW2RvVmFsaWRhdGVOb3RFcXVhbF1bbmdNb2RlbF0nLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdEVxdWFsVmFsaWRhdG9yKSwgbXVsdGk6IHRydWUgfSxcbiAgICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3RFcXVhbFZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XG5cbiAgICBjb25zdHJ1Y3RvcihAQXR0cmlidXRlKCdkb1ZhbGlkYXRlTm90RXF1YWwnKSBwdWJsaWMgdmFsaWRhdGVOb3RFcXVhbDogc3RyaW5nKSB7fVxuXG4gICAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XG4gICAgICAgIGNvbnN0IHYgPSBjLnZhbHVlO1xuICAgICAgICBjb25zdCBlID0gYy5yb290LmdldCh0aGlzLnZhbGlkYXRlTm90RXF1YWwpO1xuXG4gICAgICAgIGlmIChlICYmIHYgPT09IGUudmFsdWUgJiYgdikge1xuICAgICAgICAgICAgcmV0dXJuIHsgZXF1YWw6IHRydWUgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59Il19