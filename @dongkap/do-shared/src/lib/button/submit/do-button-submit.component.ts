import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'do-button-submit',
  styleUrls: ['./do-button-submit.component.scss'],
  templateUrl: './do-button-submit.component.html',
})
export class DoButtonSubmitComponent {
    @Input() formGroupButton: FormGroup = new FormGroup({});
    @Input() name: string;
    @Input() disabledButton: boolean = false;
    @Input() type: 'button' | 'submit' | 'reset' = 'submit';
    @Input() status: 'primary' | 'danger' | 'warning' | 'info' = 'primary';
    @Input() skeleton: boolean = false;
    @Output() onSubmit: EventEmitter<any> = new EventEmitter<any>();

    public click(event: any) {
      this.onSubmit.emit(event);
    }
}
