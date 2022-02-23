import { ComponentRef, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoWizardService } from './services/do-wizard.service';
import * as i0 from "@angular/core";
export declare class DoWizardComponent {
    private service;
    private route;
    extra: boolean;
    loading: boolean;
    onNext: EventEmitter<any>;
    onPrevious: EventEmitter<any>;
    onSubmit: EventEmitter<any>;
    error: Error;
    private wizardName;
    constructor(service: DoWizardService, route: ActivatedRoute);
    onActivate(componentRef: ComponentRef<any>): void;
    goToSubmit(data: any): void;
    goToNextStep(): void;
    goToPreviousStep(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DoWizardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DoWizardComponent, "do-wizard", never, { "extra": "extra"; "loading": "loading"; }, { "onNext": "onNext"; "onPrevious": "onPrevious"; "onSubmit": "onSubmit"; }, never, ["[buttonextra]"]>;
}
