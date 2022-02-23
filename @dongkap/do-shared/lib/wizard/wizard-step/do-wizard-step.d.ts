import { Injector } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { APIModel, HttpFactoryService } from '@dongkap/do-core';
import { Subject } from 'rxjs';
import { DoWizardService } from '../services/do-wizard.service';
import { DoWizardStepInterface } from './do-wizard-step.interface';
export declare abstract class DoWizardStep implements DoWizardStepInterface {
    injector: Injector;
    formGroupName: string;
    protected api: APIModel;
    protected http: HttpFactoryService;
    protected router: Router;
    formGroup: FormGroup;
    protected formBuilder: FormBuilder;
    disabled: boolean;
    loadingForm: boolean;
    wizardService: DoWizardService;
    protected destroy$: Subject<any>;
    constructor(injector: Injector, formGroupName: string, controlsConfig: {
        [key: string]: any;
    });
    protected abstract validateRoute(): void;
    isValid(): boolean;
    onNext(): void | boolean;
    onPrevious(): void | boolean;
}
