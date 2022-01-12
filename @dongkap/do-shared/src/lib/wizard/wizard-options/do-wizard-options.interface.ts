export interface DoWizardOptions {
  name: string;
  navBar: {
    icons: {
      previous: string;
      current: string;
      next: string;
    };
  };
  buttons: {
    previous: {
      label: string;
    };
    next: {
      label: string;
    };
    finish: {
      label: string;
    };
  };
}
