import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import * as utils from '../utils/do-wizard.utils';
import { NoChildRoutes, NoWizardRoute, NoWsInterface } from '../wizard-error/do-wizard.error';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class DoWizardService {
    constructor(router) {
        this.router = router;
        this.stepData = [];
        this.formGroup = new FormGroup({});
        this.stepDataChanges = new BehaviorSubject([]);
    }
    setFormGroup(formGroup) {
        this.formGroup = formGroup;
    }
    getFormGroup() {
        return this.formGroup;
    }
    formIsValid() {
        return this.currentComponent.isValid();
    }
    /**
     * Initializes the wizard by parsing the wizard's child routes found in Angular's router config
     * into a list of NgWizardStepData.
     * @param wizardName The unique name of the wizard
     */
    loadWizardRoutes(wizardName) {
        this.wizardRoute = this.getWizardRoute(wizardName);
        if (!this.wizardRoute) {
            throw new NoWizardRoute(wizardName);
        }
        this.wizardOptions = utils.mergeWizardOptions(this.wizardRoute.data);
        this.loadChildRoutes(this.wizardRoute);
    }
    /**
     * Checks and stores the currently displayed component.
     * @param componentRef A reference to the currently displayed component
     */
    registerActiveComponent(componentRef) {
        if (!utils.componentImplementsNgWizardStepInterface(componentRef)) {
            throw new NoWsInterface(componentRef.constructor.name);
        }
        // Cast to unknown before casting to NgWizardStep to let typescript know we checked and approve
        // this conversion.
        this.currentComponent = componentRef;
        this.currentStepData = utils.getStepDataForUrl(this.stepData, this.router.url);
        this.currentStepData.componentRef = componentRef;
        this.resetCurrentStep();
        this.currentStepData.isCurrent = true;
        this.onStepDataChange();
    }
    /**
     * Calls the current component's wsOnPrevious() or wsOnNext()) methods and navigates to the given
     * step if the component does not abort or its state is invalid (for next navigation).
     *
     * @param stepData The NgWizardStepData of the the step to navigate to
     */
    navigateToStep(stepData) {
        let goAhead;
        if (this.currentStepData.order > stepData.order) {
            goAhead = this.currentComponent.onPrevious();
        }
        else {
            goAhead = this.currentComponent.isValid() && this.currentComponent.onNext();
        }
        if (goAhead === false) {
            return;
        }
        // If the wizard is added to a specific path in the application we have to join that path and
        // the step's path as the path to navigate to.
        // The Angular Router's relativeTo option does not seem to work when using the hash location
        // strategy.
        // The path is based on the current route to allow route parameter
        const routeFragment = this.router.url.split('/');
        routeFragment.pop();
        routeFragment.push(stepData.path);
        const stepPath = routeFragment.join('/');
        if (stepData.options.cleanQueryParameters) {
            return this.router.navigate([stepPath], { queryParams: {} });
        }
        return this.router.navigate([stepPath], { queryParamsHandling: 'merge' });
    }
    /**
     * Utility method to navigate to the next step.
     */
    navigateToNextStep() {
        const nextStepData = utils.getStepDataForPath(this.stepData, this.currentStepData.nextStep);
        return this.navigateToStep(nextStepData);
    }
    /**
     * Utility method to navigate to the previous step.
     */
    navigateToPreviousStep() {
        const previousStepData = utils.getStepDataForPath(this.stepData, this.currentStepData.previousStep);
        return this.navigateToStep(previousStepData);
    }
    /**
     * Utility method to navigate to a specific route path (external to the wizard)
     */
    navigateToPath(path) {
        return this.router.navigate([path], { queryParamsHandling: 'merge' });
    }
    /**
     * Returns the step data changes as an observable.
     */
    getStepDataChangesAsObservable() {
        return this.stepDataChanges.asObservable();
    }
    /**
     * Returns the current step data as an observable.
     */
    // TODO: Write a unit test for this method
    getCurrentStepDataAsObservable() {
        return this.getStepDataChangesAsObservable().pipe(map((stepDatas) => stepDatas.find((stepData) => stepData.isCurrent)));
    }
    /**
     * Returns the Angular Route for the wizard component found in Angular's router config.
     * @param wizardName The unique name of the wizard
     */
    getWizardRoute(wizardName) {
        const wizardRoutes = this.getAllWizardRoutes(this.router.config, wizardName);
        return wizardRoutes.find((route) => route.data && route.data.name === wizardName);
    }
    /**
     * From a given array of routes config, returns an array of routes config whose component is wizardComponentName.
     * Recursively look down every children route config
     * @param routes An array of route config
     * @param wizardName The name of the wizard to look for
     */
    getAllWizardRoutes(routes, wizardName) {
        let wizardRoutes = routes.filter((route) => route.data && route.data.name === wizardName);
        // Recursive search in child routes
        routes.filter((route) => route.children && route.children.length > 0).forEach((routeWithChildren) => {
            const childWizardRoutes = this.getAllWizardRoutes(routeWithChildren.children, wizardName);
            wizardRoutes = wizardRoutes.concat(childWizardRoutes);
        });
        // Recursive search in lazily loaded child routes
        routes.filter((route) => { var _a, _b; return ((_b = (_a = route._loadedConfig) === null || _a === void 0 ? void 0 : _a.routes) === null || _b === void 0 ? void 0 : _b.length) > 0; }).forEach((routeWithChildren) => {
            const childWizardRoutes = this.getAllWizardRoutes(routeWithChildren._loadedConfig.routes, wizardName);
            wizardRoutes = wizardRoutes.concat(childWizardRoutes);
        });
        return wizardRoutes;
    }
    /**
     * Parses the child routes of the wizard component route and stores them as a list of
     * NgWizardStepData.
     * @param wizardRoute The Angular Route for the wizard component
     */
    loadChildRoutes(wizardRoute) {
        if (!wizardRoute.children) {
            throw new NoChildRoutes(wizardRoute.component.name, wizardRoute.path);
        }
        const childRoutes = wizardRoute.children.filter((route) => route.component);
        this.stepData = [];
        for (let i = 0; i < childRoutes.length; i++) {
            this.registerStep(i, childRoutes[i], childRoutes[i - 1], childRoutes[i + 1]);
        }
    }
    /**
     * Stores a child route as an NgWizardStepData.
     * @param index The index in the list of child routes
     * @param stepRoute The child route
     * @param previousStep The previous child route (undefined if first child route)
     * @param nextStep The next child route (undefined if last child route)
     */
    registerStep(index, stepRoute, previousStep, nextStep) {
        this.stepData.push({
            order: index + 1,
            componentName: stepRoute.component.name,
            path: stepRoute.path,
            previousStep: previousStep ? previousStep.path : undefined,
            nextStep: nextStep ? nextStep.path : undefined,
            isCurrent: false,
            options: utils.getWizardStepOptions(stepRoute),
        });
        this.onStepDataChange();
    }
    /**
     * Emits a step data change event to the subscribers when the step data changes.
     */
    onStepDataChange() {
        this.stepDataChanges.next(this.stepData);
    }
    /**
     * Sets the isCurrent attribute of all step data to false.
     */
    resetCurrentStep() {
        this.stepData.map((stepData) => {
            stepData.isCurrent = false;
            return stepData;
        });
    }
}
DoWizardService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoWizardService, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable });
DoWizardService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoWizardService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoWizardService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Router }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8td2l6YXJkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1zaGFyZWQvc3JjL2xpYi93aXphcmQvc2VydmljZXMvZG8td2l6YXJkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFnQixVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sS0FBSyxLQUFLLE1BQU0sMEJBQTBCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLE1BQU0saUNBQWlDLENBQUM7OztBQU05RixNQUFNLE9BQU8sZUFBZTtJQVcxQixZQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVAxQixhQUFRLEdBQXVCLEVBQUUsQ0FBQztRQUdsQyxjQUFTLEdBQWMsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFekMsb0JBQWUsR0FBRyxJQUFJLGVBQWUsQ0FBcUIsRUFBRSxDQUFDLENBQUM7SUFFakMsQ0FBQztJQUUvQixZQUFZLENBQUMsU0FBb0I7UUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUVNLFlBQVk7UUFDZixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUVNLFdBQVc7UUFDaEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxnQkFBZ0IsQ0FBQyxVQUFrQjtRQUN4QyxJQUFJLENBQUMsV0FBVyxHQUFHLElB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QUFFLENBQUM7SUFDMUIsQ0FBQztJQUVEOztPQUVHO0lBQ0ssZ0JBQWdCO1FBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQ7O09BRUc7SUFDSyxnQkFBZ0I7UUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUM3QixRQUFRLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUMzQixPQUFPLFFBQVEsQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OzZHQXZOVSxlQUFlO2lIQUFmLGVBQWU7NEZBQWYsZUFBZTtrQkFEM0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudFJlZiwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzL2RvLXdpemFyZC51dGlscyc7XG5pbXBvcnQgeyBOb0NoaWxkUm91dGVzLCBOb1dpemFyZFJvdXRlLCBOb1dzSW50ZXJmYWNlIH0gZnJvbSAnLi4vd2l6YXJkLWVycm9yL2RvLXdpemFyZC5lcnJvcic7XG5pbXBvcnQgeyBEb1dpemFyZFN0ZXBEYXRhIH0gZnJvbSAnLi4vd2l6YXJkLXN0ZXAvZG8td2l6YXJkLXN0ZXAtZGF0YS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRG9XaXphcmRPcHRpb25zIH0gZnJvbSAnLi4vd2l6YXJkLW9wdGlvbnMvZG8td2l6YXJkLW9wdGlvbnMuaW50ZXJmYWNlJztcbmltcG9ydCB7IERvV2l6YXJkU3RlcEludGVyZmFjZSB9IGZyb20gJy4uL3dpemFyZC1zdGVwL2RvLXdpemFyZC1zdGVwLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEb1dpemFyZFNlcnZpY2Uge1xuICBwdWJsaWMgd2l6YXJkT3B0aW9uczogRG9XaXphcmRPcHRpb25zO1xuXG4gIHByaXZhdGUgd2l6YXJkUm91dGU6IFJvdXRlO1xuICBwcml2YXRlIHN0ZXBEYXRhOiBEb1dpemFyZFN0ZXBEYXRhW10gPSBbXTtcbiAgcHJpdmF0ZSBjdXJyZW50U3RlcERhdGE6IERvV2l6YXJkU3RlcERhdGE7XG4gIHByaXZhdGUgY3VycmVudENvbXBvbmVudDogRG9XaXphcmRTdGVwSW50ZXJmYWNlO1xuICBwcml2YXRlIGZvcm1Hcm91cDogRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7fSk7XG5cbiAgcHJpdmF0ZSBzdGVwRGF0YUNoYW5nZXMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PERvV2l6YXJkU3RlcERhdGFbXT4oW10pO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgcHVibGljIHNldEZvcm1Hcm91cChmb3JtR3JvdXA6IEZvcm1Hcm91cCkge1xuICAgICAgdGhpcy5mb3JtR3JvdXAgPSBmb3JtR3JvdXA7XG4gIH1cblxuICBwdWJsaWMgZ2V0Rm9ybUdyb3VwKCk6IEZvcm1Hcm91cCB7XG4gICAgICByZXR1cm4gdGhpcy5mb3JtR3JvdXA7XG4gIH1cblxuICBwdWJsaWMgZm9ybUlzVmFsaWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudENvbXBvbmVudC5pc1ZhbGlkKCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIHdpemFyZCBieSBwYXJzaW5nIHRoZSB3aXphcmQncyBjaGlsZCByb3V0ZXMgZm91bmQgaW4gQW5ndWxhcidzIHJvdXRlciBjb25maWdcbiAgICogaW50byBhIGxpc3Qgb2YgTmdXaXphcmRTdGVwRGF0YS5cbiAgICogQHBhcmFtIHdpemFyZE5hbWUgVGhlIHVuaXF1ZSBuYW1lIG9mIHRoZSB3aXphcmRcbiAgICovXG4gIHB1YmxpYyBsb2FkV2l6YXJkUm91dGVzKHdpemFyZE5hbWU6IHN0cmluZykge1xuICAgIHRoaXMud2l6YXJkUm91dGUgPSB0aGlzLmdldFdpemFyZFJvdXRlKHdpemFyZE5hbWUpO1xuICAgIGlmICghdGhpcy53aXphcmRSb3V0ZSkge1xuICAgICAgdGhyb3cgbmV3IE5vV2l6YXJkUm91dGUod2l6YXJkTmFtZSk7XG4gICAgfVxuICAgIHRoaXMud2l6YXJkT3B0aW9ucyA9IHV0aWxzLm1lcmdlV2l6YXJkT3B0aW9ucyh0aGlzLndpemFyZFJvdXRlLmRhdGEpO1xuICAgIHRoaXMubG9hZENoaWxkUm91dGVzKHRoaXMud2l6YXJkUm91dGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBhbmQgc3RvcmVzIHRoZSBjdXJyZW50bHkgZGlzcGxheWVkIGNvbXBvbmVudC5cbiAgICogQHBhcmFtIGNvbXBvbmVudFJlZiBBIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudGx5IGRpc3BsYXllZCBjb21wb25lbnRcbiAgICovXG4gIHB1YmxpYyByZWdpc3RlckFjdGl2ZUNvbXBvbmVudChjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+KSB7XG4gICAgaWYgKCF1dGlscy5jb21wb25lbnRJbXBsZW1lbnRzTmdXaXphcmRTdGVwSW50ZXJmYWNlKGNvbXBvbmVudFJlZikpIHtcbiAgICAgIHRocm93IG5ldyBOb1dzSW50ZXJmYWNlKGNvbXBvbmVudFJlZi5jb25zdHJ1Y3Rvci5uYW1lKTtcbiAgICB9XG5cbiAgICAvLyBDYXN0IHRvIHVua25vd24gYmVmb3JlIGNhc3RpbmcgdG8gTmdXaXphcmRTdGVwIHRvIGxldCB0eXBlc2NyaXB0IGtub3cgd2UgY2hlY2tlZCBhbmQgYXBwcm92ZVxuICAgIC8vIHRoaXMgY29udmVyc2lvbi5cbiAgICB0aGlzLmN1cnJlbnRDb21wb25lbnQgPSAoY29tcG9uZW50UmVmIGFzIHVua25vd24pIGFzIERvV2l6YXJkU3RlcEludGVyZmFjZTtcbiAgICB0aGlzLmN1cnJlbnRTdGVwRGF0YSA9IHV0aWxzLmdldFN0ZXBEYXRhRm9yVXJsKHRoaXMuc3RlcERhdGEsIHRoaXMucm91dGVyLnVybCk7XG4gICAgdGhpcy5jdXJyZW50U3RlcERhdGEuY29tcG9uZW50UmVmID0gY29tcG9uZW50UmVmO1xuICAgIHRoaXMucmVzZXRDdXJyZW50U3RlcCgpO1xuICAgIHRoaXMuY3VycmVudFN0ZXBEYXRhLmlzQ3VycmVudCA9IHRydWU7XG4gICAgdGhpcy5vblN0ZXBEYXRhQ2hhbmdlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbHMgdGhlIGN1cnJlbnQgY29tcG9uZW50J3Mgd3NPblByZXZpb3VzKCkgb3Igd3NPbk5leHQoKSkgbWV0aG9kcyBhbmQgbmF2aWdhdGVzIHRvIHRoZSBnaXZlblxuICAgKiBzdGVwIGlmIHRoZSBjb21wb25lbnQgZG9lcyBub3QgYWJvcnQgb3IgaXRzIHN0YXRlIGlzIGludmFsaWQgKGZvciBuZXh0IG5hdmlnYXRpb24pLlxuICAgKlxuICAgKiBAcGFyYW0gc3RlcERhdGEgVGhlIE5nV2l6YXJkU3RlcERhdGEgb2YgdGhlIHRoZSBzdGVwIHRvIG5hdmlnYXRlIHRvXG4gICAqL1xuICBwdWJsaWMgbmF2aWdhdGVUb1N0ZXAoc3RlcERhdGE6IERvV2l6YXJkU3RlcERhdGEpIHtcbiAgICBsZXQgZ29BaGVhZDtcbiAgICBpZiAodGhpcy5jdXJyZW50U3RlcERhdGEub3JkZXIgPiBzdGVwRGF0YS5vcmRlcikge1xuICAgICAgZ29BaGVhZCA9IHRoaXMuY3VycmVudENvbXBvbmVudC5vblByZXZpb3VzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdvQWhlYWQgPSB0aGlzLmN1cnJlbnRDb21wb25lbnQuaXNWYWxpZCgpICYmIHRoaXMuY3VycmVudENvbXBvbmVudC5vbk5leHQoKTtcbiAgICB9XG4gICAgaWYgKGdvQWhlYWQgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHdpemFyZCBpcyBhZGRlZCB0byBhIHNwZWNpZmljIHBhdGggaW4gdGhlIGFwcGxpY2F0aW9uIHdlIGhhdmUgdG8gam9pbiB0aGF0IHBhdGggYW5kXG4gICAgLy8gdGhlIHN0ZXAncyBwYXRoIGFzIHRoZSBwYXRoIHRvIG5hdmlnYXRlIHRvLlxuICAgIC8vIFRoZSBBbmd1bGFyIFJvdXRlcidzIHJlbGF0aXZlVG8gb3B0aW9uIGRvZXMgbm90IHNlZW0gdG8gd29yayB3aGVuIHVzaW5nIHRoZSBoYXNoIGxvY2F0aW9uXG4gICAgLy8gc3RyYXRlZ3kuXG4gICAgLy8gVGhlIHBhdGggaXMgYmFzZWQgb24gdGhlIGN1cnJlbnQgcm91dGUgdG8gYWxsb3cgcm91dGUgcGFyYW1ldGVyXG4gICAgY29uc3Qgcm91dGVGcmFnbWVudCA9IHRoaXMucm91dGVyLnVybC5zcGxpdCgnLycpO1xuICAgIHJvdXRlRnJhZ21lbnQucG9wKCk7XG4gICAgcm91dGVGcmFnbWVudC5wdXNoKHN0ZXBEYXRhLnBhdGgpO1xuICAgIGNvbnN0IHN0ZXBQYXRoID0gcm91dGVGcmFnbWVudC5qb2luKCcvJyk7XG5cbiAgICBpZiAoc3RlcERhdGEub3B0aW9ucy5jbGVhblF1ZXJ5UGFyYW1ldGVycykge1xuICAgICAgcmV0dXJuIHRoaXMucm91dGVyLm5hdmlnYXRlKFtzdGVwUGF0aF0sIHsgcXVlcnlQYXJhbXM6IHt9IH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3N0ZXBQYXRoXSwgeyBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFV0aWxpdHkgbWV0aG9kIHRvIG5hdmlnYXRlIHRvIHRoZSBuZXh0IHN0ZXAuXG4gICAqL1xuICBwdWJsaWMgbmF2aWdhdGVUb05leHRTdGVwKCkge1xuICAgIGNvbnN0IG5leHRTdGVwRGF0YSA9IHV0aWxzLmdldFN0ZXBEYXRhRm9yUGF0aCh0aGlzLnN0ZXBEYXRhLCB0aGlzLmN1cnJlbnRTdGVwRGF0YS5uZXh0U3RlcCk7XG4gICAgcmV0dXJuIHRoaXMubmF2aWdhdGVUb1N0ZXAobmV4dFN0ZXBEYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVdGlsaXR5IG1ldGhvZCB0byBuYXZpZ2F0ZSB0byB0aGUgcHJldmlvdXMgc3RlcC5cbiAgICovXG4gIHB1YmxpYyBuYXZpZ2F0ZVRvUHJldmlvdXNTdGVwKCkge1xuICAgIGNvbnN0IHByZXZpb3VzU3RlcERhdGEgPSB1dGlscy5nZXRTdGVwRGF0YUZvclBhdGgodGhpcy5zdGVwRGF0YSwgdGhpcy5jdXJyZW50U3RlcERhdGEucHJldmlvdXNTdGVwKTtcblxuICAgIHJldHVybiB0aGlzLm5hdmlnYXRlVG9TdGVwKHByZXZpb3VzU3RlcERhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIFV0aWxpdHkgbWV0aG9kIHRvIG5hdmlnYXRlIHRvIGEgc3BlY2lmaWMgcm91dGUgcGF0aCAoZXh0ZXJuYWwgdG8gdGhlIHdpemFyZClcbiAgICovXG4gIHB1YmxpYyBuYXZpZ2F0ZVRvUGF0aChwYXRoOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3BhdGhdLCB7IHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZScgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc3RlcCBkYXRhIGNoYW5nZXMgYXMgYW4gb2JzZXJ2YWJsZS5cbiAgICovXG4gIHB1YmxpYyBnZXRTdGVwRGF0YUNoYW5nZXNBc09ic2VydmFibGUoKTogT2JzZXJ2YWJsZTxEb1dpemFyZFN0ZXBEYXRhW10+IHtcbiAgICByZXR1cm4gdGhpcy5zdGVwRGF0YUNoYW5nZXMuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBzdGVwIGRhdGEgYXMgYW4gb2JzZXJ2YWJsZS5cbiAgICovXG4gIC8vIFRPRE86IFdyaXRlIGEgdW5pdCB0ZXN0IGZvciB0aGlzIG1ldGhvZFxuICBwdWJsaWMgZ2V0Q3VycmVudFN0ZXBEYXRhQXNPYnNlcnZhYmxlKCk6IE9ic2VydmFibGU8RG9XaXphcmRTdGVwRGF0YT4ge1xuICAgIHJldHVybiB0aGlzLmdldFN0ZXBEYXRhQ2hhbmdlc0FzT2JzZXJ2YWJsZSgpLnBpcGUoXG4gICAgICBtYXAoKHN0ZXBEYXRhcykgPT4gc3RlcERhdGFzLmZpbmQoKHN0ZXBEYXRhKSA9PiBzdGVwRGF0YS5pc0N1cnJlbnQpKSxcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIEFuZ3VsYXIgUm91dGUgZm9yIHRoZSB3aXphcmQgY29tcG9uZW50IGZvdW5kIGluIEFuZ3VsYXIncyByb3V0ZXIgY29uZmlnLlxuICAgKiBAcGFyYW0gd2l6YXJkTmFtZSBUaGUgdW5pcXVlIG5hbWUgb2YgdGhlIHdpemFyZFxuICAgKi9cbiAgcHJpdmF0ZSBnZXRXaXphcmRSb3V0ZSh3aXphcmROYW1lOiBzdHJpbmcpOiBSb3V0ZSB7XG4gICAgY29uc3Qgd2l6YXJkUm91dGVzID0gdGhpcy5nZXRBbGxXaXphcmRSb3V0ZXModGhpcy5yb3V0ZXIuY29uZmlnLCB3aXphcmROYW1lKTtcbiAgICByZXR1cm4gd2l6YXJkUm91dGVzLmZpbmQoKHJvdXRlKSA9PiByb3V0ZS5kYXRhICYmIHJvdXRlLmRhdGEubmFtZSA9PT0gd2l6YXJkTmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogRnJvbSBhIGdpdmVuIGFycmF5IG9mIHJvdXRlcyBjb25maWcsIHJldHVybnMgYW4gYXJyYXkgb2Ygcm91dGVzIGNvbmZpZyB3aG9zZSBjb21wb25lbnQgaXMgd2l6YXJkQ29tcG9uZW50TmFtZS5cbiAgICogUmVjdXJzaXZlbHkgbG9vayBkb3duIGV2ZXJ5IGNoaWxkcmVuIHJvdXRlIGNvbmZpZ1xuICAgKiBAcGFyYW0gcm91dGVzIEFuIGFycmF5IG9mIHJvdXRlIGNvbmZpZ1xuICAgKiBAcGFyYW0gd2l6YXJkTmFtZSBUaGUgbmFtZSBvZiB0aGUgd2l6YXJkIHRvIGxvb2sgZm9yXG4gICAqL1xuICBwcml2YXRlIGdldEFsbFdpemFyZFJvdXRlcyhyb3V0ZXM6IFJvdXRlW10sIHdpemFyZE5hbWU6IHN0cmluZyk6IFJvdXRlW10ge1xuICAgIGxldCB3aXphcmRSb3V0ZXMgPSByb3V0ZXMuZmlsdGVyKChyb3V0ZSkgPT4gcm91dGUuZGF0YSAmJiByb3V0ZS5kYXRhLm5hbWUgPT09IHdpemFyZE5hbWUpO1xuICAgIC8vIFJlY3Vyc2l2ZSBzZWFyY2ggaW4gY2hpbGQgcm91dGVzXG4gICAgcm91dGVzLmZpbHRlcigocm91dGUpID0+IHJvdXRlLmNoaWxkcmVuICYmIHJvdXRlLmNoaWxkcmVuLmxlbmd0aCA+IDApLmZvckVhY2goKHJvdXRlV2l0aENoaWxkcmVuKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZFdpemFyZFJvdXRlcyA9IHRoaXMuZ2V0QWxsV2l6YXJkUm91dGVzKHJvdXRlV2l0aENoaWxkcmVuLmNoaWxkcmVuLCB3aXphcmROYW1lKTtcbiAgICAgIHdpemFyZFJvdXRlcyA9IHdpemFyZFJvdXRlcy5jb25jYXQoY2hpbGRXaXphcmRSb3V0ZXMpO1xuICAgIH0pO1xuICAgIC8vIFJlY3Vyc2l2ZSBzZWFyY2ggaW4gbGF6aWx5IGxvYWRlZCBjaGlsZCByb3V0ZXNcbiAgICByb3V0ZXMuZmlsdGVyKChyb3V0ZSkgPT4gKHJvdXRlIGFzIGFueSkuX2xvYWRlZENvbmZpZz8ucm91dGVzPy5sZW5ndGggPiAwKS5mb3JFYWNoKChyb3V0ZVdpdGhDaGlsZHJlbikgPT4ge1xuICAgICAgY29uc3QgY2hpbGRXaXphcmRSb3V0ZXMgPSB0aGlzLmdldEFsbFdpemFyZFJvdXRlcygocm91dGVXaXRoQ2hpbGRyZW4gYXMgYW55KS5fbG9hZGVkQ29uZmlnLnJvdXRlcywgd2l6YXJkTmFtZSk7XG4gICAgICB3aXphcmRSb3V0ZXMgPSB3aXphcmRSb3V0ZXMuY29uY2F0KGNoaWxkV2l6YXJkUm91dGVzKTtcbiAgICB9KTtcbiAgICByZXR1cm4gd2l6YXJkUm91dGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyB0aGUgY2hpbGQgcm91dGVzIG9mIHRoZSB3aXphcmQgY29tcG9uZW50IHJvdXRlIGFuZCBzdG9yZXMgdGhlbSBhcyBhIGxpc3Qgb2ZcbiAgICogTmdXaXphcmRTdGVwRGF0YS5cbiAgICogQHBhcmFtIHdpemFyZFJvdXRlIFRoZSBBbmd1bGFyIFJvdXRlIGZvciB0aGUgd2l6YXJkIGNvbXBvbmVudFxuICAgKi9cbiAgcHJpdmF0ZSBsb2FkQ2hpbGRSb3V0ZXMod2l6YXJkUm91dGU6IFJvdXRlKSB7XG4gICAgaWYgKCF3aXphcmRSb3V0ZS5jaGlsZHJlbikge1xuICAgICAgdGhyb3cgbmV3IE5vQ2hpbGRSb3V0ZXMod2l6YXJkUm91dGUuY29tcG9uZW50Lm5hbWUsIHdpemFyZFJvdXRlLnBhdGgpO1xuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkUm91dGVzID0gd2l6YXJkUm91dGUuY2hpbGRyZW4uZmlsdGVyKChyb3V0ZSkgPT4gcm91dGUuY29tcG9uZW50KTtcblxuICAgIHRoaXMuc3RlcERhdGEgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkUm91dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnJlZ2lzdGVyU3RlcChpLCBjaGlsZFJvdXRlc1tpXSwgY2hpbGRSb3V0ZXNbaSAtIDFdLCBjaGlsZFJvdXRlc1tpICsgMV0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9yZXMgYSBjaGlsZCByb3V0ZSBhcyBhbiBOZ1dpemFyZFN0ZXBEYXRhLlxuICAgKiBAcGFyYW0gaW5kZXggVGhlIGluZGV4IGluIHRoZSBsaXN0IG9mIGNoaWxkIHJvdXRlc1xuICAgKiBAcGFyYW0gc3RlcFJvdXRlIFRoZSBjaGlsZCByb3V0ZVxuICAgKiBAcGFyYW0gcHJldmlvdXNTdGVwIFRoZSBwcmV2aW91cyBjaGlsZCByb3V0ZSAodW5kZWZpbmVkIGlmIGZpcnN0IGNoaWxkIHJvdXRlKVxuICAgKiBAcGFyYW0gbmV4dFN0ZXAgVGhlIG5leHQgY2hpbGQgcm91dGUgKHVuZGVmaW5lZCBpZiBsYXN0IGNoaWxkIHJvdXRlKVxuICAgKi9cbiAgcHJpdmF0ZSByZWdpc3RlclN0ZXAoaW5kZXg6IG51bWJlciwgc3RlcFJvdXRlOiBSb3V0ZSwgcHJldmlvdXNTdGVwOiBSb3V0ZSwgbmV4dFN0ZXA6IFJvdXRlKSB7XG4gICAgdGhpcy5zdGVwRGF0YS5wdXNoKHtcbiAgICAgIG9yZGVyOiBpbmRleCArIDEsXG4gICAgICBjb21wb25lbnROYW1lOiBzdGVwUm91dGUuY29tcG9uZW50Lm5hbWUsXG4gICAgICBwYXRoOiBzdGVwUm91dGUucGF0aCxcbiAgICAgIHByZXZpb3VzU3RlcDogcHJldmlvdXNTdGVwID8gcHJldmlvdXNTdGVwLnBhdGggOiB1bmRlZmluZWQsXG4gICAgICBuZXh0U3RlcDogbmV4dFN0ZXAgPyBuZXh0U3RlcC5wYXRoIDogdW5kZWZpbmVkLFxuICAgICAgaXNDdXJyZW50OiBmYWxzZSxcbiAgICAgIG9wdGlvbnM6IHV0aWxzLmdldFdpemFyZFN0ZXBPcHRpb25zKHN0ZXBSb3V0ZSksXG4gICAgfSk7XG4gICAgdGhpcy5vblN0ZXBEYXRhQ2hhbmdlKCk7XG4gIH1cblxuICAvKipcbiAgICogRW1pdHMgYSBzdGVwIGRhdGEgY2hhbmdlIGV2ZW50IHRvIHRoZSBzdWJzY3JpYmVycyB3aGVuIHRoZSBzdGVwIGRhdGEgY2hhbmdlcy5cbiAgICovXG4gIHByaXZhdGUgb25TdGVwRGF0YUNoYW5nZSgpIHtcbiAgICB0aGlzLnN0ZXBEYXRhQ2hhbmdlcy5uZXh0KHRoaXMuc3RlcERhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGlzQ3VycmVudCBhdHRyaWJ1dGUgb2YgYWxsIHN0ZXAgZGF0YSB0byBmYWxzZS5cbiAgICovXG4gIHByaXZhdGUgcmVzZXRDdXJyZW50U3RlcCgpIHtcbiAgICB0aGlzLnN0ZXBEYXRhLm1hcCgoc3RlcERhdGEpID0+IHtcbiAgICAgIHN0ZXBEYXRhLmlzQ3VycmVudCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHN0ZXBEYXRhO1xuICAgIH0pO1xuICB9XG59XG4iXX0=