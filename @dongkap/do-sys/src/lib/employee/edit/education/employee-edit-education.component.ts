import { Component, Inject, OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { API, APIModel, HttpBaseModel } from '@dongkap/do-core';
import { DatatableColumn, Keyword } from '@dongkap/do-shared';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'do-employee-edit-education',
  styleUrls: ['./employee-edit-education.component.scss'],
  templateUrl: './employee-edit-education.component.html',
})
export class EmployeeEditEducationComponent implements OnInit, OnDestroy {

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
    @Inject(API) private api: APIModel,
    private router: Router,
    private employeeService: EmployeeService) {
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

  onEditEducation(data): void {
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
