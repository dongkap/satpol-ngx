import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { API, APIModel, HttpBaseModel } from '@dongkap/do-core';
import { SelectParamModel } from '@dongkap/do-shared';

@Component({
  selector: 'do-education-nonformal-prompt',
  templateUrl: 'education-nonformal-prompt.component.html',
  styleUrls: ['education-nonformal-prompt.component.scss'],
})
export class EmployeeEducationNonFormalPromptComponent implements OnInit {

  @Input() public training: any;
  public action: 'Add' | 'Edit' = 'Add';
  public formGroup: FormGroup;

  constructor(
    @Inject(API) api: APIModel,
    formBuilder: FormBuilder,
    protected ref: NbDialogRef<EmployeeEducationNonFormalPromptComponent>) {
      this.formGroup = formBuilder.group({
        trainingName: [],
        trainingDate: [],
      });
  }

  ngOnInit(): void {
    if (this.training) {
      this.action = 'Edit';
      this.formGroup.get('trainingName').setValue(this.training.name);
      this.formGroup.get('trainingDate').setValue({
        start: this.training.startDate,
        end: this.training.endDate,
      });
    } else {
      this.action = 'Add';
    }
  }

  onSubmit() {
    const data: any = {
      training: {
        id: this.training?.id,
        name: this.formGroup.get('trainingName').value,
        startDate: this.formGroup.get('trainingDate').value?.start,
        endDate: this.formGroup.get('trainingDate').value?.end,
      }
    };
    this.ref.close(data);
  }

  onReset() {
    this.ref.close();
  }

}
