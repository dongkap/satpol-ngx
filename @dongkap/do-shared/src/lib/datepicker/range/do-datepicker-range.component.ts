import { Component, Input, Optional, Self, Inject, LOCALE_ID, ViewEncapsulation, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { formatDate } from '@angular/common';
import { AbstractControl, NgControl, NG_VALUE_ACCESSOR, ValidatorFn } from '@angular/forms';
import { NbCalendarSize } from '@nebular/theme';
import { ValueAccessorDirective } from '../../base/value-accessor.component';

@Component({
  selector: 'do-datepicker-range',
  styleUrls: ['./do-datepicker-range.component.scss'],
  templateUrl: './do-datepicker-range.component.html',
})
export class DoDatePickerRangeComponent extends ValueAccessorDirective<any> {
    @Input() placeholder: string;
    @Input() colLabel: number = 3;
    @Input() colInput: number = 9;
    @Input() icon: boolean = false;
    @Input() min: Date;
    @Input() max: Date;
    @Input() size: NbCalendarSize = NbCalendarSize.MEDIUM;
    @Input() dateMask = [/[0-3]/, /\d/, '/', /[0-1]/, /\d/, '/', /[1-3]/, /\d/, /\d/, /\d/,
                         ' ', '-', ' ',
                         /[0-3]/, /\d/, '/', /[0-1]/, /\d/, '/', /[1-3]/, /\d/, /\d/, /\d/];

    constructor(
      @Optional() @Self() ngControl: NgControl,
      @Inject(LOCALE_ID) public locale: string) {
      super(ngControl, locale);
    }

    get value(): any { return this._value; }

    set value(value: any) {
      console.log(value);
      if (this._value !== value) {
        this._value = value;
        if (value?.start && value?.end) {
          this.onChange({
            start: formatDate(value?.start, this.format, this.locale),
            end: formatDate(value?.end, this.format, this.locale),
          });
        }
        const control = this.ngControl.control;
        if (control) {
          control.updateValueAndValidity();
          control.markAsTouched();
          control.markAsDirty();
        }
      }
    }

    public writeValue(value: any): void {
      console.log(value);
      const dates: any = {};
      if (value) {
        const dateStart: Date = new Date(this.parse(value?.start));
        const dateEnd: Date = new Date(this.parse(value?.end));
        if (dateStart.getTime() < dateEnd.getTime()) {
          const startDateParse: string = this.parse(value?.start);
          if (!isNaN(Date.parse(startDateParse))) {
            dates['start'] = new Date(startDateParse);
          }
          const endDateParse: string = this.parse(value?.end);
          if (!isNaN(Date.parse(endDateParse))) {
            dates['end'] = new Date(endDateParse);
          }
          this._value = dates;
          this.onChange(dates);
        }
      }
      const control = this.ngControl.control;
      if (control) {
        control.updateValueAndValidity();
        control.markAsUntouched();
        control.markAsPristine();
      }
    }

    private toFormatDate(value: any): string {
      const day: string = String(value).split('/')[0];
      const month: string = String(value).split('/')[1];
      const year: string = String(value).split('/')[2];
      return month + '.' + day + '.' + year;
    }

    /**
     * Parsing from String to Date, not return format date
     */
    private parse(value: any): string {
      const year: string = String(value).split('/')[2];
      const month: string = String(value).split('/')[1];
      const day: string = String(value).split('/')[0];
      return year + '/' + month + '/' + day;
    }
}
