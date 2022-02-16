import { Component, Injector } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpBaseModel } from '@dongkap/do-core';
import { BaseFilterComponent, DatatableColumn } from '@dongkap/do-shared';
import { SelectionType } from '@swimlane/ngx-datatable';
import { EmployementPlacementService } from '../services/employement-placement.service';

@Component({
  selector: 'do-employement-placement-list-page',
  styleUrls: ['./employement-placement-list-page.component.scss'],
  templateUrl: './employement-placement-list-page.component.html',
})
export class EmployementPlacementListPageComponent extends BaseFilterComponent<any> implements OnInit {

  public apiPath: HttpBaseModel;
  public columns: DatatableColumn[] = [
    { name: 'Business Partner', prop: 'bpName', frozenLeft: true, sortable: true },
    { name: 'Total Assignment', prop: 'totalAssignment', width: 55, frozenLeft: true },
  ];
  public selectionType: SelectionType = SelectionType.single;

  constructor(
    public injector: Injector,
    private router: Router,
    private employementPlacementService: EmployementPlacementService) {
    super(injector, {
      bpName: [],
    });
    this.sort = {
      asc: ['bpName']
    };
    this.sortsDefault = [
      { prop: 'bpName', dir: 'asc' }
    ];
    this.filters = [{ controlName: 'bpName', type: 'input' }];
    this.apiPath = this.api['activity']['datatable-assignment-group'];
  }

  ngOnInit(): void {
  }

  onViewDetail(data): void {
    this.employementPlacementService.setAssignmentGroup(data);
    this.router.navigate(['/app/mgmt/employement-placement', 'edit']);
  }

}
