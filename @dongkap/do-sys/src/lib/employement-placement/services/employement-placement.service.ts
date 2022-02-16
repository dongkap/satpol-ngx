import { Injectable } from '@angular/core';
import { AssignmentGroupModel } from '../models/employement-placement.model';

@Injectable()
export class EmployementPlacementService {

    private assignmentGroup: AssignmentGroupModel;

    public getAssignmentGroup(): AssignmentGroupModel {
        return this.assignmentGroup;
    }

    public setAssignmentGroup(assignmentGroup: AssignmentGroupModel) {
        this.assignmentGroup = assignmentGroup;
    }

}
