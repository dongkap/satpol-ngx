export interface DoWizardStepOptions {
  title: string;
  icon?: string;
  buttons?: {
    previous?: {
      label?: string;
      hidden?: boolean;
    };
    next?: {
      label?: string;
      hidden?: boolean;
    };
    finish?: {
      label?: string;
      hidden?: boolean;
    }
  };
  cleanQueryParameters?: boolean;
  disableNavigation?: boolean;
}
