import { Component, Injector } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApiBaseResponse, ResponseCode, Pattern } from '@dongkap/do-core';
import { BaseFormComponent, CheckboxModel } from '@dongkap/do-shared';
import { EmployeeService } from '../services/employee.service';
import { EmployeeHeaderModel } from '../models/employee.model';

@Component({
  selector: 'do-employee-edit-page',
  styleUrls: ['./employee-edit-page.component.scss'],
  templateUrl: './employee-edit-page.component.html',
})
export class EmployeeEditPageComponent extends BaseFormComponent<any> implements OnInit {

  public action: 'Add' | 'Edit' = 'Add';
  public patternEmail: string = Pattern.EMAIL;
  public patternPhoneNumber: string = Pattern.PHONE_NUMBER;
  public dataDefault: CheckboxModel[] = [
    {
      selected: true,
    },
  ];
  constructor(
    public injector: Injector,
    private router: Router,
    private route: ActivatedRoute,
    private employeeService: EmployeeService) {
    super(injector,
      {
        employeeName: [],
        idEmployee: [],
      });
    if (this.employeeService.getEmployeeHeader() || (this.route.snapshot.params['action'] === 'add')) {
      if ((this.route.snapshot.params['action'] === 'edit')) {
        this.action = 'Edit';
      }
    } else {
      this.router.navigate(['/app/mgmt/employee']);
    }
  }

  ngOnInit(): void {}

  onReset(): void {
    this.router.navigate(['/app/mgmt/employee']);
  }

  onSubmit(): void {
  }

}
