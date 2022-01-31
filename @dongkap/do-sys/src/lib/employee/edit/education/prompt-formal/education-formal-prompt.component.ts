import { Component, Inject, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { API, APIModel, HttpBaseModel } from '@dongkap/do-core';
import { SelectParamModel } from '@dongkap/do-shared';

@Component({
  selector: 'do-education-formal-prompt',
  templateUrl: 'education-formal-prompt.component.html',
  styleUrls: ['education-formal-prompt.component.scss'],
})
export class EmployeeEducationFormalPromptComponent {

  @Input() data: any;
  public action: 'Add' | 'Edit' = 'Add';
  public formGroup: FormGroup;
  public apiSelectEducationalLevel: HttpBaseModel;
  public paramSelectEducationalLevel: SelectParamModel[];

  constructor(
    @Inject(API) api: APIModel,
    formBuilder: FormBuilder,
    protected ref: NbDialogRef<EmployeeEducationFormalPromptComponent>) {
      this.formGroup = formBuilder.group({
        educationalLevel: [],
        school: [],
        startYear: [],
        endYear: [],
      });
      if(this.data) {
        this.action = 'Edit';
      } else {
        this.action = 'Add';
      }
    this.apiSelectEducationalLevel = api['master']['select-parameter'];
    this.paramSelectEducationalLevel = [{
      key: 'parameterGroupCode',
      value: 'EDUCATIONAL_LEVEL',
    },{
      key: 'parameterCodeNotIn',
      value: 'EDUCATIONAL_LEVEL.NO_EDUCATION',
    }];
  }

  onSubmit() {
    const data: any = {
      education: {
        id: this.data?.id,
        educationalLevel: this.formGroup.get('educationalLevel').value?.value,
        schoolName: this.formGroup.get('school').value,
        startYear: this.formGroup.get('startYear').value,
        endYear: this.formGroup.get('endYear').value,
      }
    }
    this.ref.close(data);
  }

  onReset() {
    this.ref.close();
  }

}
