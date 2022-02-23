import { ComponentRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { DoWizardStepData } from '../wizard-step/do-wizard-step-data.interface';
import { DoWizardOptions } from '../wizard-options/do-wizard-options.interface';
import * as i0 from "@angular/core";
export declare class DoWizardService {
    private router;
    wizardOptions: DoWizardOptions;
    private wizardRoute;
    private stepData;
    private currentStepData;
    private currentComponent;
    private formGroup;
    private stepDataChanges;
    constructor(router: Router);
    setFormGroup(formGroup: FormGroup): void;
    getFormGroup(): FormGroup;
    formIsValid(): boolean;
    /**
     * Initializes the wizard by parsing the wizard's child routes found in Angular's router config
     * into a list of NgWizardStepData.
     * @param wizardName The unique name of the wizard
     */
    loadWizardRoutes(wizardName: string): void;
    /**
     * Checks and stores the currently displayed component.
     * @param componentRef A reference to the currently displayed component
     */
    registerActiveComponent(componentRef: ComponentRef<any>): void;
    /**
     * Calls the current component's wsOnPrevious() or wsOnNext()) methods and navigates to the given
     * step if the component does not abort or its state is invalid (for next navigation).
     *
     * @param stepData The NgWizardStepData of the the step to navigate to
     */
    navigateToStep(stepData: DoWizardStepData): Promise<boolean>;
    /**
     * Utility method to navigate to the next step.
     */
    navigateToNextStep(): Promise<boolean>;
    /**
     * Utility method to navigate to the previous step.
     */
    navigateToPreviousStep(): Promise<boolean>;
    /**
     * Utility method to navigate to a specific route path (external to the wizard)
     */
    navigateToPath(path: string): Promise<boolean>;
    /**
     * Returns the step data changes as an observable.
     */
    getStepDataChangesAsObservable(): Observable<DoWizardStepData[]>;
    /**
     * Returns the current step data as an observable.
     */
    getCurrentStepDataAsObservable(): Observable<DoWizardStepData>;
    /**
     * Returns the Angular Route for the wizard component found in Angular's router config.
     * @param wizardName The unique name of the wizard
     */
    private getWizardRoute;
    /**
     * From a given array of routes config, returns an array of routes config whose component is wizardComponentName.
     * Recursively look down every children route config
     * @param routes An array of route config
     * @param wizardName The name of the wizard to look for
     */
    private getAllWizardRoutes;
    /**
     * Parses the child routes of the wizard component route and stores them as a list of
     * NgWizardStepData.
     * @param wizardRoute The Angular Route for the wizard component
     */
    private loadChildRoutes;
    /**
     * Stores a child route as an NgWizardStepData.
     * @param index The index in the list of child routes
     * @param stepRoute The child route
     * @param previousStep The previous child route (undefined if first child route)
     * @param nextStep The next child route (undefined if last child route)
     */
    private registerStep;
    /**
     * Emits a step data change event to the subscribers when the step data changes.
     */
    private onStepDataChange;
    /**
     * Sets the isCurrent attribute of all step data to false.
     */
    private resetCurrentStep;
    static ɵfac: i0.ɵɵFactoryDeclaration<DoWizardService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DoWizardService>;
}
