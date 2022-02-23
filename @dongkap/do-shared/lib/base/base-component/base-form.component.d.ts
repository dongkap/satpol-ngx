import { Injector } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { ApiBaseResponse } from '@dongkap/do-core';
import { BaseComponent } from './base.component';
import { DoToastrService } from '../../toastr/services/do-toastr.service';
export declare abstract class BaseFormComponent<T> extends BaseComponent<T> {
    injector: Injector;
    protected toastr: DoToastrService;
    protected submitSubject$: Subject<ApiBaseResponse>;
    formGroup: FormGroup;
    formBuilder: FormBuilder;
    disabled: boolean;
    loadingForm: boolean;
    constructor(injector: Injector, controlsConfig?: {
        [key: string]: any;
    });
    onDestroy(): void;
    onSubmit(body?: any, serviceName?: string, apiName?: string, disableToastr?: boolean): any;
    onReset(): void;
}
