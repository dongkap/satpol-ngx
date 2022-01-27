import { Component, Injector, OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApiBaseResponse, ResponseCode, HttpBaseModel, UserModel, RoleModel } from '@dongkap/do-core';
import { BaseFormComponent, CheckboxModel, SelectResponseModel } from '@dongkap/do-shared';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'do-employee-edit-employee-status',
  styleUrls: ['./employee-edit-employee-status.component.scss'],
  templateUrl: './employee-edit-employee-status.component.html',
})
export class EmployeeEditEmployeeStatusComponent extends BaseFormComponent<any> implements OnInit, OnDestroy {

  private loadingSubject$: Subject<boolean> = new Subject<boolean>();
  public apiSelectOccupation: HttpBaseModel;
  public apiSelectRole: HttpBaseModel;
  public apiSelectEmployeeParent: HttpBaseModel;
  public profile: UserModel = new UserModel();
  public permissionsData: CheckboxModel[] = [{
      id: 'disabled',
      name: 'Disabled',
      selected: false,
      disabled: false,
  }, {
      id: 'locked',
      name: 'Locked',
      selected: false,
      disabled: false,
  }, {
      id: 'accountexpired',
      name: 'Account Expired',
      selected: false,
      disabled: false,
  }];
  
  constructor(
    public injector: Injector,
    private router: Router,
    private employeeService: EmployeeService) {
    super(injector, {
      occupation: [],
      role: [],
      employeeParent: [],
      permissions: [{
        value: null,
        disabled: false,
      }],
    });
    this.apiSelectOccupation = this.api['security']['select-occupation'];
    this.apiSelectRole = this.api['security']['select-role'];
    this.apiSelectEmployeeParent = this.api['security']['select-employee'];
  }

  ngOnInit(): void {
    if (!this.employeeService.getEmployeeHeader()) {
      this.router.navigate(['/app/mgmt/employee']);
      return;
    }

    const selectRoles: SelectResponseModel[] = [];
    const permissions: CheckboxModel[] = [];
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }

  loadDataMenu(): Observable<any> {
    return this.loadingSubject$.asObservable();
  }

  onReset(): void {
    this.router.navigate(['/app/mgmt/employee']);
  }

  onSubmit(): void {
    const roles: RoleModel[] = [];
    if (this.formGroup.get('role').dirty) {
      const tmpRoles: SelectResponseModel[] = (this.formGroup.get('role').value as SelectResponseModel[]);
      tmpRoles.forEach(role => {
        roles.push({
          authority: role.value
        });
      });
    }
    const permissions: CheckboxModel[] =
      this.formGroup.get('permissions').value ? this.formGroup.get('permissions').value : this.permissionsData;
    const data: any = {
      username: this.profile.username,
      permissions,
      roles,
    };
    (super.onSubmit(data, 'security', 'update-user')  as Observable<ApiBaseResponse>)
      .pipe(takeUntil(this.destroy$))
      .subscribe(response => {
        if (response.respStatusCode === ResponseCode.OK_UPDATED.toString()) {
          this.router.navigate(['/app/mgmt/employee']);
        }
      });
  }

}
