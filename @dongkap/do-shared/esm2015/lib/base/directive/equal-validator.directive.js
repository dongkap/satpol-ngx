import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import * as i0 from "@angular/core";
export class EqualValidator {
    constructor(validateEqual) {
        this.validateEqual = validateEqual;
    }
    validate(c) {
        const v = c.value;
        const e = c.root.get(this.validateEqual);
        if (e && v !== e.value && v) {
            return { equal: false };
        }
        return null;
    }
}
EqualValidator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EqualValidator, deps: [{ token: 'doValidateEqual', attribute: true }], target: i0.ɵɵFactoryTarget.Directive });
EqualValidator.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.16", type: EqualValidator, selector: "[doValidateEqual][formControlName],[doValidateEqual][formControl],[doValidateEqual][ngModel]", providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidator), multi: true },
    ], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EqualValidator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[doValidateEqual][formControlName],[doValidateEqual][formControl],[doValidateEqual][ngModel]',
                    providers: [
                        { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidator), multi: true },
                    ],
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Attribute,
                    args: ['doValidateEqual']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1YWwtdmFsaWRhdG9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXNoYXJlZC9zcmMvbGliL2Jhc2UvZGlyZWN0aXZlL2VxdWFsLXZhbGlkYXRvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBOEIsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBUTNFLE1BQU0sT0FBTyxjQUFjO0lBRXZCLFlBQWlELGFBQXFCO1FBQXJCLGtCQUFhLEdBQWIsYUFBYSxDQUFRO0lBQUcsQ0FBQztJQUUxRSxRQUFRLENBQUMsQ0FBa0I7UUFDdkIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNsQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFekMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxFQUFFO1lBQ3pCLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUM7U0FDM0I7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDOzs0R0FaUSxjQUFjLGtCQUVBLGlCQUFpQjtnR0FGL0IsY0FBYyx1SEFKWjtRQUNQLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7S0FDekY7NEZBRVEsY0FBYztrQkFOMUIsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsOEZBQThGO29CQUN4RyxTQUFTLEVBQUU7d0JBQ1AsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7cUJBQ3pGO2lCQUNKOzswQkFHZ0IsU0FBUzsyQkFBQyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIGZvcndhcmRSZWYsIEF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmFsaWRhdG9yLCBBYnN0cmFjdENvbnRyb2wsIE5HX1ZBTElEQVRPUlMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2RvVmFsaWRhdGVFcXVhbF1bZm9ybUNvbnRyb2xOYW1lXSxbZG9WYWxpZGF0ZUVxdWFsXVtmb3JtQ29udHJvbF0sW2RvVmFsaWRhdGVFcXVhbF1bbmdNb2RlbF0nLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEVxdWFsVmFsaWRhdG9yKSwgbXVsdGk6IHRydWUgfSxcbiAgICBdLFxufSlcbmV4cG9ydCBjbGFzcyBFcXVhbFZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XG5cbiAgICBjb25zdHJ1Y3RvcihAQXR0cmlidXRlKCdkb1ZhbGlkYXRlRXF1YWwnKSBwdWJsaWMgdmFsaWRhdGVFcXVhbDogc3RyaW5nKSB7fVxuXG4gICAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XG4gICAgICAgIGNvbnN0IHYgPSBjLnZhbHVlO1xuICAgICAgICBjb25zdCBlID0gYy5yb290LmdldCh0aGlzLnZhbGlkYXRlRXF1YWwpO1xuXG4gICAgICAgIGlmIChlICYmIHYgIT09IGUudmFsdWUgJiYgdikge1xuICAgICAgICAgICAgcmV0dXJuIHsgZXF1YWw6IGZhbHNlIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuIl19