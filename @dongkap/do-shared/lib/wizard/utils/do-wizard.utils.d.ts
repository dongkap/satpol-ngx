import { Route } from '@angular/router';
import { ComponentRef } from '@angular/core';
import { DoWizardStepData } from '../wizard-step/do-wizard-step-data.interface';
import { DoWizardOptions } from '../wizard-options/do-wizard-options.interface';
import { DoWizardStepOptions } from '../wizard-step/do-wizard-step-options';
/**
 * Returns true if the component extends the NgWizardStep class or implements the NgWizardStepInterface.
 *
 * @param componentRef The reference to the component to verify
 */
export declare function componentImplementsNgWizardStepInterface(componentRef: ComponentRef<any>): boolean;
/**
 * Returns the NgWizardStepData with the given path in the stepData list or undefined if none is
 * found.
 *
 * @param stepData The list with NgWizardStepDatas
 * @param path The path you want to get the NgWizardStepData for
 */
export declare function getStepDataForPath(stepData: DoWizardStepData[], path: string): DoWizardStepData;
/**
 * Returns the NgWizardStepData for the given url in the stepData list or undefined if none is
 * found.
 *
 * @param stepData The list with NgWizardStepDatas
 * @param url The url which you want to get the NgWizardStepData for
 */
export declare function getStepDataForUrl(stepData: DoWizardStepData[], url: string): DoWizardStepData;
/**
 * Returns the default wizard options.
 */
export declare function getDefaultWizardOptions(): DoWizardOptions;
/**
 * Merges the wizard options in the wizard route's config with the default wizard options.
 *
 * @param wizardOptions The wizard options in the wizard route's config
 */
export declare function mergeWizardOptions(wizardOptions: {}): DoWizardOptions;
/**
 * Returns the options passed to the wizard step route with an added title attribute.
 *
 * @param route The wizard step route configuration
 */
export declare function getWizardStepOptions(route: Route): DoWizardStepOptions;
/**
 * Returns the step title based on the Route configuration.
 * If the route has a data.title attribute it will be returned.
 * Else the path will be capitalized and '-' or '_' characters will be replaces by spaces.
 *
 * @param route The Angular Route object
 */
export declare function getStepTitleFromRoute(route: Route): string;
