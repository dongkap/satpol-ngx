import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { API, HTTP_SERVICE } from '@dongkap/do-core';
import { Subject } from 'rxjs';
import { DoWizardService } from '../services/do-wizard.service';
export class DoWizardStep {
    constructor(injector, formGroupName, controlsConfig) {
        this.injector = injector;
        this.formGroupName = formGroupName;
        this.disabled = false;
        this.loadingForm = false;
        this.destroy$ = new Subject();
        this.api = injector.get(API);
        this.http = injector.get(HTTP_SERVICE);
        this.formBuilder = injector.get(FormBuilder);
        this.wizardService = injector.get(DoWizardService);
        this.router = injector.get(Router);
        this.formGroup = this.wizardService.getFormGroup();
        this.formGroup.addControl(this.formGroupName, this.formBuilder.group(controlsConfig));
        this.validateRoute();
    }
    isValid() {
        return this.formGroup.controls[this.formGroupName].valid;
    }
    onNext() {
        this.wizardService.setFormGroup(this.formGroup);
    }
    onPrevious() {
        this.wizardService.setFormGroup(this.formGroup);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8td2l6YXJkLXN0ZXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1zaGFyZWQvc3JjL2xpYi93aXphcmQvd2l6YXJkLXN0ZXAvZG8td2l6YXJkLXN0ZXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFdBQVcsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsR0FBRyxFQUFnQyxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNuRixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUdoRSxNQUFNLE9BQWdCLFlBQVk7SUFXaEMsWUFDUyxRQUFrQixFQUNsQixhQUFxQixFQUM1QixjQUVDO1FBSk0sYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixrQkFBYSxHQUFiLGFBQWEsQ0FBUTtRQVB2QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBRTFCLGFBQVEsR0FBaUIsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQVNsRCxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDdEYsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFJRCxPQUFPO1FBQ0wsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzNELENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFQSSwgQVBJTW9kZWwsIEh0dHBGYWN0b3J5U2VydmljZSwgSFRUUF9TRVJWSUNFIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEb1dpemFyZFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9kby13aXphcmQuc2VydmljZSc7XG5pbXBvcnQgeyBEb1dpemFyZFN0ZXBJbnRlcmZhY2UgfSBmcm9tICcuL2RvLXdpemFyZC1zdGVwLmludGVyZmFjZSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEb1dpemFyZFN0ZXAgaW1wbGVtZW50cyBEb1dpemFyZFN0ZXBJbnRlcmZhY2Uge1xuICBwcm90ZWN0ZWQgYXBpOiBBUElNb2RlbDtcbiAgcHJvdGVjdGVkIGh0dHA6IEh0dHBGYWN0b3J5U2VydmljZTtcbiAgcHJvdGVjdGVkIHJvdXRlcjogUm91dGVyO1xuICBwdWJsaWMgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XG4gIHByb3RlY3RlZCBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXI7XG4gIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgbG9hZGluZ0Zvcm06IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHdpemFyZFNlcnZpY2U6IERvV2l6YXJkU2VydmljZTtcbiAgcHJvdGVjdGVkIGRlc3Ryb3kkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwdWJsaWMgZm9ybUdyb3VwTmFtZTogc3RyaW5nLFxuICAgIGNvbnRyb2xzQ29uZmlnOiB7XG4gICAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gICAgfVxuICAgICl7XG4gICAgICB0aGlzLmFwaSA9IGluamVjdG9yLmdldChBUEkpO1xuICAgICAgdGhpcy5odHRwID0gaW5qZWN0b3IuZ2V0KEhUVFBfU0VSVklDRSk7XG4gICAgICB0aGlzLmZvcm1CdWlsZGVyID0gaW5qZWN0b3IuZ2V0KEZvcm1CdWlsZGVyKTtcbiAgICAgIHRoaXMud2l6YXJkU2VydmljZSA9IGluamVjdG9yLmdldChEb1dpemFyZFNlcnZpY2UpO1xuICAgICAgdGhpcy5yb3V0ZXIgPSBpbmplY3Rvci5nZXQoUm91dGVyKTtcbiAgICAgIHRoaXMuZm9ybUdyb3VwID0gdGhpcy53aXphcmRTZXJ2aWNlLmdldEZvcm1Hcm91cCgpO1xuICAgICAgdGhpcy5mb3JtR3JvdXAuYWRkQ29udHJvbCh0aGlzLmZvcm1Hcm91cE5hbWUsIHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoY29udHJvbHNDb25maWcpKTtcbiAgICAgIHRoaXMudmFsaWRhdGVSb3V0ZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IHZhbGlkYXRlUm91dGUoKTogdm9pZDtcblxuICBpc1ZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZvcm1Hcm91cE5hbWVdLnZhbGlkO1xuICB9XG5cbiAgb25OZXh0KCk6IHZvaWQgfCBib29sZWFuIHtcbiAgICB0aGlzLndpemFyZFNlcnZpY2Uuc2V0Rm9ybUdyb3VwKHRoaXMuZm9ybUdyb3VwKTtcbiAgfVxuXG4gIG9uUHJldmlvdXMoKTogdm9pZCB8IGJvb2xlYW4ge1xuICAgIHRoaXMud2l6YXJkU2VydmljZS5zZXRGb3JtR3JvdXAodGhpcy5mb3JtR3JvdXApO1xuICB9XG59XG4iXX0=