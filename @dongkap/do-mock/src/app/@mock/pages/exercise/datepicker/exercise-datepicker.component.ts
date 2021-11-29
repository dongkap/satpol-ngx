import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-exercise-datepicker',
  templateUrl: 'exercise-datepicker.component.html',
  styleUrls: ['./exercise-datepicker.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExerciseDatePickerComponent {

  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder) {
      this.formGroup = this.formBuilder.group({
        dateOfBirth: [{
          value: '01/01/2021',
          disabled: false,
        }],
        timesheet: [{
          value: null,
          disabled: false,
        }],
        modifyDate: [{
          value: null,
          disabled: true,
        }],
        skeletonDatepicker: [{
          value: null,
          disabled: true
        }],
      });
    }

  onSubmit(){
    console.log(this.formGroup.value);
  }

  onReset(){
    this.formGroup.reset();
  }

}
