import { DoWizardErrorType } from './do-wizard-error-type.enum';
export declare abstract class DoWizardError extends Error {
    type: DoWizardErrorType;
    wizardComponentName: string;
    wizardPath: string;
    stepComponentName: string;
    protected constructor(type: DoWizardErrorType, message: string);
}
export declare class NoWizardRoute extends DoWizardError {
    wizardComponentName: string;
    constructor(wizardComponentName: string);
}
export declare class NoChildRoutes extends DoWizardError {
    wizardComponentName: string;
    wizardPath: string;
    constructor(wizardComponentName: string, wizardPath: string);
}
export declare class NoWsInterface extends DoWizardError {
    stepComponentName: string;
    constructor(stepComponentName: string);
}
