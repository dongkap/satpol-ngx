import { EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DoWizardService } from '../services/do-wizard.service';
import { DoWizardStepData } from '../wizard-step/do-wizard-step-data.interface';
import { DoWizardOptions } from '../wizard-options/do-wizard-options.interface';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class DoWizardButtonsComponent implements OnInit {
    private service;
    private router;
    extra: boolean;
    clearFormOnSubmit: boolean;
    disabled: boolean;
    onNext: EventEmitter<any>;
    onPrevious: EventEmitter<any>;
    onSubmit: EventEmitter<any>;
    currentStepData$: Observable<DoWizardStepData>;
    wizardOptions: DoWizardOptions;
    constructor(service: DoWizardService, router: Router);
    ngOnInit(): void;
    formIsValid(): boolean;
    goToSubmit(): void;
    goToNextStep(): void;
    goToPreviousStep(): void;
    goToCancel(url: string): void;
    goToPath(path: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DoWizardButtonsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DoWizardButtonsComponent, "do-wizard-buttons", never, { "extra": "extra"; "clearFormOnSubmit": "clearFormOnSubmit"; "disabled": "disabled"; }, { "onNext": "onNext"; "onPrevious": "onPrevious"; "onSubmit": "onSubmit"; }, never, ["[buttonextra]"]>;
}
