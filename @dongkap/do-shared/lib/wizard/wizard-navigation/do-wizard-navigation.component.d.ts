import { OnInit } from '@angular/core';
import { DoWizardService } from '../services/do-wizard.service';
import { DoWizardStepData } from '../wizard-step/do-wizard-step-data.interface';
import { DoWizardOptions } from '../wizard-options/do-wizard-options.interface';
import * as i0 from "@angular/core";
export declare class DoWizardNavigationComponent implements OnInit {
    private service;
    stepData$: any;
    currentStepData: any;
    wizardOptions: DoWizardOptions;
    constructor(service: DoWizardService);
    ngOnInit(): void;
    goToStep(stepData: DoWizardStepData): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DoWizardNavigationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DoWizardNavigationComponent, "do-wizard-navigation", never, {}, {}, never, never>;
}
