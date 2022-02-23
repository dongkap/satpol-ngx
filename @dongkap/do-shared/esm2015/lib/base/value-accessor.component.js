import { Directive, Input } from '@angular/core';
import { DateFormat } from '@dongkap/do-core';
import { ValidatorAccessorDirective } from './validator-accessor.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class ValueAccessorDirective extends ValidatorAccessorDirective {
    constructor(ngControl, locale) {
        super(ngControl);
        this.ngControl = ngControl;
        this.locale = locale;
        this.format = DateFormat.DATE;
        this.skeleton = false;
        this.show = true;
    }
    get value() { return this._value; }
    set value(value) {
        if (this._value !== value) {
            this._value = value;
            this.onChange(value);
            const control = this.ngControl.control;
            if (control) {
                control.updateValueAndValidity();
                control.markAsTouched();
                control.markAsDirty();
            }
        }
    }
    writeValue(value) {
        this._value = value;
        this.onChange(this.value);
        const control = this.ngControl.control;
        if (control) {
            control.updateValueAndValidity();
            control.markAsUntouched();
            control.markAsPristine();
        }
    }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
    setDisabledState(isDisabled) { this.disabled = isDisabled; }
}
ValueAccessorDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ValueAccessorDirective, deps: "invalid", target: i0.ɵɵFactoryTarget.Directive });
ValueAccessorDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.16", type: ValueAccessorDirective, inputs: { format: "format", skeleton: "skeleton", show: "show" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ValueAccessorDirective, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i1.NgControl }, { type: undefined }]; }, propDecorators: { format: [{
                type: Input
            }], skeleton: [{
                type: Input
            }], show: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWUtYWNjZXNzb3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc2hhcmVkL3NyYy9saWIvYmFzZS92YWx1ZS1hY2Nlc3Nvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzlDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7QUFHNUUsTUFBTSxPQUFnQixzQkFBMEIsU0FBUSwwQkFBMEI7SUFROUUsWUFBbUIsU0FBb0IsRUFBUyxNQUFjO1FBQzFELEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQURGLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBTnJELFdBQU0sR0FBVyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQ2pDLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsU0FBSSxHQUFZLElBQUksQ0FBQztJQU05QixDQUFDO0lBRUQsSUFBSSxLQUFLLEtBQVEsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUV0QyxJQUFJLEtBQUssQ0FBQyxLQUFRO1FBQ2QsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLEtBQUssRUFBRTtZQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO1lBQ3ZDLElBQUksT0FBTyxFQUFFO2dCQUNULE9BQU8sQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO2dCQUNqQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3hCLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUN6QjtTQUNKO0lBQ0wsQ0FBQztJQUVNLFVBQVUsQ0FBQyxLQUFRO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO1FBQ3ZDLElBQUksT0FBTyxFQUFFO1lBQ1QsT0FBTyxDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDakMsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQzFCLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUM1QjtJQUNMLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFPLElBQVUsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELGlCQUFpQixDQUFDLEVBQU8sSUFBVSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekQsZ0JBQWdCLENBQUUsVUFBbUIsSUFBVSxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUM7O29IQXhDMUQsc0JBQXNCO3dHQUF0QixzQkFBc0I7NEZBQXRCLHNCQUFzQjtrQkFEM0MsU0FBUztxSEFHRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEYXRlRm9ybWF0IH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBWYWxpZGF0b3JBY2Nlc3NvckRpcmVjdGl2ZSB9IGZyb20gJy4vdmFsaWRhdG9yLWFjY2Vzc29yLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFZhbHVlQWNjZXNzb3JEaXJlY3RpdmU8VD4gZXh0ZW5kcyBWYWxpZGF0b3JBY2Nlc3NvckRpcmVjdGl2ZSB7XG5cbiAgICBASW5wdXQoKSBmb3JtYXQ6IHN0cmluZyA9IERhdGVGb3JtYXQuREFURTtcbiAgICBASW5wdXQoKSBza2VsZXRvbjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIHNob3c6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHByb3RlY3RlZCBfdmFsdWU6IGFueTtcbiAgICBwdWJsaWMgZGVmYXVsdFZhbHVlOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmdDb250cm9sOiBOZ0NvbnRyb2wsIHB1YmxpYyBsb2NhbGU6IHN0cmluZykge1xuICAgICAgICBzdXBlcihuZ0NvbnRyb2wpO1xuICAgIH1cblxuICAgIGdldCB2YWx1ZSgpOiBUIHsgcmV0dXJuIHRoaXMuX3ZhbHVlOyB9XG5cbiAgICBzZXQgdmFsdWUodmFsdWU6IFQpIHtcbiAgICAgICAgaWYgKHRoaXMuX3ZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgICAgICAgICAgY29uc3QgY29udHJvbCA9IHRoaXMubmdDb250cm9sLmNvbnRyb2w7XG4gICAgICAgICAgICBpZiAoY29udHJvbCkge1xuICAgICAgICAgICAgICAgIGNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgICAgIGNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICAgICAgICAgICAgICAgIGNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBUKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLm5nQ29udHJvbC5jb250cm9sO1xuICAgICAgICBpZiAoY29udHJvbCkge1xuICAgICAgICAgICAgY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICAgICAgICBjb250cm9sLm1hcmtBc1VudG91Y2hlZCgpO1xuICAgICAgICAgICAgY29udHJvbC5tYXJrQXNQcmlzdGluZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7IHRoaXMub25DaGFuZ2UgPSBmbjsgfVxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHsgdGhpcy5vblRvdWNoZWQgPSBmbjsgfVxuICAgIHNldERpc2FibGVkU3RhdGU/KGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHsgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7IH1cblxufVxuIl19