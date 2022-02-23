import { Directive, Input } from '@angular/core';
import { Validators, } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class ValidatorAccessorDirective {
    constructor(ngControl) {
        this.ngControl = ngControl;
        this.label = '';
        this.nolabel = false;
        this.disabled = false;
        this.required = false;
        this.onChange = (_) => { };
        this.onTouched = (_) => { };
        // ngControl && (ngControl.valueAccessor = this);
        if (this.ngControl != null) {
            this.ngControl.valueAccessor = this;
        }
    }
    onInit() { }
    ngOnInit() {
        this.onInit();
        const control = this.ngControl.control;
        const validators = control.validator ? [control.validator] : [];
        if (this.ngControl.control.errors) {
            this.required = this.ngControl.control.errors['required'];
        }
        if (this.required && !this.disabled) {
            validators.push(Validators.required);
            this.ngControl.control.setErrors({ required: true });
        }
        if (this.pattern) {
            validators.push(Validators.pattern(this.pattern));
        }
        this.ngControl.control.setValidators(validators);
        this.ngControl.control.updateValueAndValidity();
    }
    validate(c) {
        const validators = [];
        if (this.required) {
            validators.push(Validators.required);
        }
        if (this.pattern) {
            validators.push(Validators.pattern(this.pattern));
        }
        return validators;
    }
    get hasErrors() {
        return (!this.disabled &&
            this.ngControl.control &&
            this.ngControl.control.invalid &&
            this.ngControl.touched);
    }
    get hasSuccess() {
        return (!this.disabled &&
            this.ngControl.control &&
            this.ngControl.control.valid &&
            this.ngControl.touched);
    }
    get errorMessages() {
        const errors = [];
        if (this.ngControl.errors) {
            Object.keys(this.ngControl.errors).forEach(property => {
                switch (property) {
                    case 'required':
                        errors.push('error.required');
                        break;
                    case 'email':
                        errors.push('error.pattern.email');
                        break;
                    case 'minlength':
                        errors.push('error.minlength');
                        break;
                    case 'daterange':
                        errors.push('error.daterange');
                        break;
                    default:
                        errors.push('error.'.concat(property).concat('.').concat(this.name));
                        break;
                }
            });
        }
        return errors;
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
}
ValidatorAccessorDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ValidatorAccessorDirective, deps: [{ token: i1.NgControl }], target: i0.ɵɵFactoryTarget.Directive });
ValidatorAccessorDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.16", type: ValidatorAccessorDirective, inputs: { name: "name", pattern: "pattern", label: "label", nolabel: "nolabel", disabled: "disabled", required: "required", paramError: "paramError", warnMessage: "warnMessage" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ValidatorAccessorDirective, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i1.NgControl }]; }, propDecorators: { name: [{
                type: Input
            }], pattern: [{
                type: Input
            }], label: [{
                type: Input
            }], nolabel: [{
                type: Input
            }], disabled: [{
                type: Input
            }], required: [{
                type: Input
            }], paramError: [{
                type: Input
            }], warnMessage: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLWFjY2Vzc29yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXNoYXJlZC9zcmMvbGliL2Jhc2UvdmFsaWRhdG9yLWFjY2Vzc29yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBRUgsVUFBVSxHQU1iLE1BQU0sZ0JBQWdCLENBQUM7OztBQUd4QixNQUFNLE9BQWdCLDBCQUEwQjtJQWM1QyxZQUFzQixTQUFvQjtRQUFwQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBVmpDLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFHNUIsYUFBUSxHQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUUsR0FBRSxDQUFDLENBQUM7UUFDMUIsY0FBUyxHQUFHLENBQUMsQ0FBTyxFQUFFLEVBQUUsR0FBRSxDQUFDLENBQUM7UUFJL0IsaURBQWlEO1FBQ2pELElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1NBQ3ZDO0lBQ0wsQ0FBQztJQVBTLE1BQU0sS0FBVSxDQUFDO0lBU3BCLFFBQVE7UUFDWCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFZCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztRQUN2QyxNQUFNLFVBQVUsR0FBa0IsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUMvRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM3RDtRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7U0FDdEQ7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDckQ7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUNwRCxDQUFDO0lBRUQsUUFBUSxDQUFDLENBQWtCO1FBQ3ZCLE1BQU0sVUFBVSxHQUFrQixFQUFFLENBQUM7UUFDckMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDeEM7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDckQ7UUFDRCxPQUFPLFVBQVUsQ0FBQztJQUN0QixDQUFDO0lBRUQsSUFBSSxTQUFTO1FBQ1QsT0FBTyxDQUNILENBQUMsSUFBSSxDQUFDLFFBQVE7WUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU87WUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTztZQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FDekIsQ0FBQztJQUNOLENBQUM7SUFFRCxJQUFJLFVBQVU7UUFDVixPQUFPLENBQ0gsQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTztZQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLO1lBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUN6QixDQUFDO0lBQ04sQ0FBQztJQUVELElBQUksYUFBYTtRQUNiLE1BQU0sTUFBTSxHQUFhLEVBQUUsQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFDO1lBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ2xELFFBQVEsUUFBUSxFQUFFO29CQUNkLEtBQUssVUFBVTt3QkFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7d0JBQzlCLE1BQU07b0JBQ1YsS0FBSyxPQUFPO3dCQUNSLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQzt3QkFDbkMsTUFBTTtvQkFDVixLQUFLLFdBQVc7d0JBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO3dCQUMvQixNQUFNO29CQUNWLEtBQUssV0FBVzt3QkFDWixNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7d0JBQy9CLE1BQU07b0JBQ1Y7d0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ3JFLE1BQU07aUJBQ2I7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUNOO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVELHlCQUF5QixDQUFDLEVBQWM7UUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7d0hBakdpQiwwQkFBMEI7NEdBQTFCLDBCQUEwQjs0RkFBMUIsMEJBQTBCO2tCQUQvQyxTQUFTO2dHQUdHLElBQUk7c0JBQVosS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgIE5nQ29udHJvbCxcbiAgICBWYWxpZGF0b3JzLFxuICAgIEFic3RyYWN0Q29udHJvbCxcbiAgICBWYWxpZGF0b3IsXG4gICAgVmFsaWRhdG9yRm4sXG4gICAgVmFsaWRhdGlvbkVycm9ycyxcbiAgICBDb250cm9sVmFsdWVBY2Nlc3Nvcixcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBWYWxpZGF0b3JBY2Nlc3NvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBWYWxpZGF0b3IsIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gICAgQElucHV0KCkgcGF0dGVybjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgPSAnJztcbiAgICBASW5wdXQoKSBub2xhYmVsOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSByZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIHBhcmFtRXJyb3I6IGFueTtcbiAgICBASW5wdXQoKSB3YXJuTWVzc2FnZTogc3RyaW5nO1xuICAgIHB1YmxpYyBvbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuICAgIHB1YmxpYyBvblRvdWNoZWQgPSAoXz86IGFueSkgPT4ge307XG4gICAgcHJvdGVjdGVkIG9uSW5pdCgpOiB2b2lkIHt9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgbmdDb250cm9sOiBOZ0NvbnRyb2wpIHtcbiAgICAgICAgLy8gbmdDb250cm9sICYmIChuZ0NvbnRyb2wudmFsdWVBY2Nlc3NvciA9IHRoaXMpO1xuICAgICAgICBpZiAodGhpcy5uZ0NvbnRyb2wgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5uZ0NvbnRyb2wudmFsdWVBY2Nlc3NvciA9IHRoaXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25Jbml0KCk7XG5cbiAgICAgICAgY29uc3QgY29udHJvbCA9IHRoaXMubmdDb250cm9sLmNvbnRyb2w7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRvcnM6IFZhbGlkYXRvckZuW10gPSBjb250cm9sLnZhbGlkYXRvciA/IFtjb250cm9sLnZhbGlkYXRvcl0gOiBbXTtcbiAgICAgICAgaWYgKHRoaXMubmdDb250cm9sLmNvbnRyb2wuZXJyb3JzKSB7XG4gICAgICAgICAgICB0aGlzLnJlcXVpcmVkID0gdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5lcnJvcnNbJ3JlcXVpcmVkJ107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucmVxdWlyZWQgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICAgICAgICAgIHRoaXMubmdDb250cm9sLmNvbnRyb2wuc2V0RXJyb3JzKHtyZXF1aXJlZDogdHJ1ZX0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLnBhdHRlcm4odGhpcy5wYXR0ZXJuKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5zZXRWYWxpZGF0b3JzKHZhbGlkYXRvcnMpO1xuICAgICAgICB0aGlzLm5nQ29udHJvbC5jb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdG9yczogVmFsaWRhdG9yRm5bXSA9IFtdO1xuICAgICAgICBpZiAodGhpcy5yZXF1aXJlZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLnBhdHRlcm4odGhpcy5wYXR0ZXJuKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbGlkYXRvcnM7XG4gICAgfVxuXG4gICAgZ2V0IGhhc0Vycm9ycygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICF0aGlzLmRpc2FibGVkICYmXG4gICAgICAgICAgICB0aGlzLm5nQ29udHJvbC5jb250cm9sICYmXG4gICAgICAgICAgICB0aGlzLm5nQ29udHJvbC5jb250cm9sLmludmFsaWQgJiZcbiAgICAgICAgICAgIHRoaXMubmdDb250cm9sLnRvdWNoZWRcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXQgaGFzU3VjY2VzcygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICF0aGlzLmRpc2FibGVkICYmXG4gICAgICAgICAgICB0aGlzLm5nQ29udHJvbC5jb250cm9sICYmXG4gICAgICAgICAgICB0aGlzLm5nQ29udHJvbC5jb250cm9sLnZhbGlkICYmXG4gICAgICAgICAgICB0aGlzLm5nQ29udHJvbC50b3VjaGVkXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0IGVycm9yTWVzc2FnZXMoKTogc3RyaW5nW10ge1xuICAgICAgICBjb25zdCBlcnJvcnM6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGlmICh0aGlzLm5nQ29udHJvbC5lcnJvcnMpe1xuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5uZ0NvbnRyb2wuZXJyb3JzKS5mb3JFYWNoKHByb3BlcnR5ID0+IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHByb3BlcnR5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JlcXVpcmVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKCdlcnJvci5yZXF1aXJlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKCdlcnJvci5wYXR0ZXJuLmVtYWlsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbWlubGVuZ3RoJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKCdlcnJvci5taW5sZW5ndGgnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdkYXRlcmFuZ2UnOlxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLnB1c2goJ2Vycm9yLmRhdGVyYW5nZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMucHVzaCgnZXJyb3IuJy5jb25jYXQocHJvcGVydHkpLmNvbmNhdCgnLicpLmNvbmNhdCh0aGlzLm5hbWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlcnJvcnM7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZShmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gICAgfVxuXG4gICAgYWJzdHJhY3Qgd3JpdGVWYWx1ZShvYmo6IGFueSk6IHZvaWQ7XG4gICAgYWJzdHJhY3QgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZDtcbiAgICBhYnN0cmFjdCByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZDtcbiAgICBhYnN0cmFjdCBzZXREaXNhYmxlZFN0YXRlPyhpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZDtcbn1cbiJdfQ==