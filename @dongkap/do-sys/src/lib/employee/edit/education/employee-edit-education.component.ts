import { Component, Injector, OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { ApiBaseResponse, HttpBaseModel, ResponseCode } from '@dongkap/do-core';
import { BaseFormComponent, DatatableColumn, Keyword } from '@dongkap/do-shared';
import { EmployeeService } from '../../services/employee.service';
import { NbDialogService } from '@nebular/theme';
import { EmployeeEducationFormalPromptComponent } from './prompt-formal/education-formal-prompt.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'do-employee-edit-education',
  styleUrls: ['./employee-edit-education.component.scss'],
  templateUrl: './employee-edit-education.component.html',
})
export class EmployeeEditEducationComponent extends BaseFormComponent<any> implements OnInit, OnDestroy {

  public reloadEducation: boolean = false;
  public reloadTraining: boolean = false;
  public apiPathEducation: HttpBaseModel;
  public apiPathTraining: HttpBaseModel;
  public columnsEducation: DatatableColumn[] = [
    { name: 'Level', prop: 'educationalLevel', frozenLeft: true },
    { name: 'School', prop: 'schoolName', frozenLeft: true },
    { name: 'Year', prop: 'startYear', frozenLeft: true },
  ];
  public columnsTraining: DatatableColumn[] = [
    { name: 'Training Name', prop: 'name', frozenLeft: true },
    { name: 'Start Date', prop: 'startDate', frozenLeft: true },
    { name: 'End Date', prop: 'endDate', frozenLeft: true },
  ];
  public keyword: Keyword;
  private loadingSubject$: Subject<boolean> = new Subject<boolean>();

  constructor(
    injector: Injector,
    private router: Router,
    private employeeService: EmployeeService,
    private dialogService: NbDialogService) {
      super(injector)
      if (!this.employeeService.getEmployeeHeader()) {
        this.router.navigate(['/app/mgmt/employee']);
      }
      this.apiPathEducation = this.api['security']['datatable-education-employee'];
      this.apiPathTraining = this.api['security']['datatable-training-employee'];
  }

  ngOnInit(): void {
    this.keyword = {
      employeeId: this.employeeService.getEmployeeHeader()?.id,
    };
  }

  loadDataMenu(): Observable<any> {
    this.reloadEducation = true;
    this.reloadTraining = true;
    return this.loadingSubject$.asObservable();
  }

  ngOnDestroy(): void {}

  onAddEducation(): void {
    this.dialogService.open(EmployeeEducationFormalPromptComponent)
      .onClose.subscribe((data: any) => {
        if (data) {
          data['id'] = this.employeeService.getEmployeeHeader().id;
          (super.onSubmit(data, 'security', 'post-employee-education')  as Observable<ApiBaseResponse>)
            .pipe(takeUntil(this.destroy$))
            .subscribe(response => {
              if (response.respStatusCode === ResponseCode.OK_DEFAULT.toString()) {
                this.reloadEducation = true;
              }
            });
        }
      });
  }

  onAddTraining(): void {
  }

  onEditEducation(data): void {
    this.reloadEducation = false;
    this.dialogService.open(EmployeeEducationFormalPromptComponent, {
        context: {
          data: data,
        },
      })
      .onClose.subscribe((data: any) => {
        if (data) {
          data['id'] = this.employeeService.getEmployeeHeader().id;
          (super.onSubmit(data, 'security', 'post-employee-education')  as Observable<ApiBaseResponse>)
            .pipe(takeUntil(this.destroy$))
            .subscribe(response => {
              if (response.respStatusCode === ResponseCode.OK_DEFAULT.toString()) {
                this.reloadEducation = true;
              }
            });
        }
      });
  }

  onEditTraining(data): void {
  }

  onLoadEducation(): void {
    this.loadingSubject$.next(true);
  }

  onLoadTraining(): void {
    this.loadingSubject$.next(true);
  }

}
