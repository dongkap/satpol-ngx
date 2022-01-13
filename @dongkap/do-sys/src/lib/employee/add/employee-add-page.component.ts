import { Component } from '@angular/core';
import { DoWizardService } from '@dongkap/do-shared';

@Component({
  selector: 'do-employee-add-page',
  templateUrl: 'employee-add-page.component.html',
  styleUrls: ['./employee-add-page.component.scss'],
})
export class EmployeeAddPageComponent {

  constructor(private service: DoWizardService) { }

  formIsValid(): boolean {
    return this.service.formIsValid();
  }

  onSaveDraft(){
    console.log(this.service.getFormGroup().value);
  }

  onSend(){
    console.log(this.service.getFormGroup().value);
  }

}
