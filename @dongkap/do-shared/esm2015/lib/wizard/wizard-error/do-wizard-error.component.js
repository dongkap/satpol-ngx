import { Component, Input } from '@angular/core';
import { DoWizardErrorType } from './do-wizard-error-type.enum';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class DoWizardErrorComponent {
    constructor() {
        this.DoWizardErrorType = DoWizardErrorType;
    }
}
DoWizardErrorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoWizardErrorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DoWizardErrorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoWizardErrorComponent, selector: "do-wizard-error", inputs: { error: "error" }, ngImport: i0, template: "<div *ngIf=\"error\" class=\"do-wizard-error\">\n  <div [ngSwitch]=\"error.type\" class=\"do-wizard-error-message\">\n\n    <!-- NO_WIZARD_ROUTE error -->\n\n    <span *ngSwitchCase=\"DoWizardErrorType.NO_WIZARD_ROUTE\" class=\"no-wizard-route\">\n      No route configuration for the {{ error.wizardComponentName }} found.<br/>\n      Add a route for the {{ error.wizardComponentName }} to your AppRoutingModule.<br/>\n      <pre>\nconst routes: Routes = [\n    &#123; path: '', component: {{ error.wizardComponentName }} &#125;,\n];\n\n@NgModule(&#123;\n  imports: [RouterModule.forRoot(routes)],\n  exports: [RouterModule]\n&#125;)\nexport class AppRoutingModule &#123; &#125;</pre>\n    </span>\n\n    <!-- NO_CHILD_ROUTES error -->\n\n    <span *ngSwitchCase=\"DoWizardErrorType.NO_CHILD_ROUTES\" class=\"no-child-routes\">\n      No child routes for the {{ error.wizardComponentName }} found.<br/>\n      Add at least one child route for the {{ error.wizardComponentName }} to your AppRoutingModule.<br/>\n      <pre>\n&#123; path: '{{ error.wizardPath }}', component: {{ error.wizardComponentName }}, children: [\n    &#123; path: 'step1', component: Step1Component &#125;,\n    &#123; path: '**', redirectTo: 'step1' &#125;,\n] &#125;,</pre>\n    </span>\n\n    <!-- NO_WS_INTERFACE error -->\n\n    <span *ngSwitchCase=\"DoWizardErrorType.NO_WS_INTERFACE\" class=\"no-ws-interface\">\n      The {{ error.stepComponentName}} does not extend the NgWizardStep class or implement the\n      NgWizardStepInterface.<br/>\n      Extend the NgWizardStep class in your {{ error.stepComponentName}} or implement the\n      NgWizardStepInterface.<br/>\n      <pre>\n@NgComponent(...)\nexport class {{ error.stepComponentName }} extends NgWizardStep &#123;\n    constructor() &#123;\n        super();\n    &#125;\n&#125;</pre><br/>\n      or<br/>\n      <pre>\n@NgComponent(...)\nexport class {{ error.stepComponentName }} implements NgWizardStepInterface &#123;\n    isValid() &#123;\n        return true;\n    &#125;\n    onNext() &#123; &#125;\n    onPrevious() &#123; &#125;\n&#125;</pre>\n    </span>\n\n  </div>\n</div>\n", styles: [".do-wizard-error{border:solid 1px #D71117;border-radius:5px;color:#d71117;padding:10px 10px 0;margin-top:10px}.do-wizard-error .do-wizard-error-message pre{display:inline-block;border-radius:3px;background-color:#dad7c566;color:#4d4d4d;padding:15px}\n"], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoWizardErrorComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-wizard-error',
                    templateUrl: './do-wizard-error.component.html',
                    styleUrls: ['./do-wizard-error.component.scss']
                }]
        }], propDecorators: { error: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8td2l6YXJkLWVycm9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXNoYXJlZC9zcmMvbGliL3dpemFyZC93aXphcmQtZXJyb3IvZG8td2l6YXJkLWVycm9yLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXNoYXJlZC9zcmMvbGliL3dpemFyZC93aXphcmQtZXJyb3IvZG8td2l6YXJkLWVycm9yLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7QUFRaEUsTUFBTSxPQUFPLHNCQUFzQjtJQUxuQztRQVFTLHNCQUFpQixHQUFHLGlCQUFpQixDQUFDO0tBQzlDOztvSEFKWSxzQkFBc0I7d0dBQXRCLHNCQUFzQixtRkNUbkMsOGtFQTREQTs0RkRuRGEsc0JBQXNCO2tCQUxsQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFdBQVcsRUFBRSxrQ0FBa0M7b0JBQy9DLFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO2lCQUNoRDs4QkFFaUIsS0FBSztzQkFBcEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvV2l6YXJkRXJyb3JUeXBlIH0gZnJvbSAnLi9kby13aXphcmQtZXJyb3ItdHlwZS5lbnVtJztcbmltcG9ydCB7IERvV2l6YXJkRXJyb3IgfSBmcm9tICcuL2RvLXdpemFyZC5lcnJvcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLXdpemFyZC1lcnJvcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kby13aXphcmQtZXJyb3IuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kby13aXphcmQtZXJyb3IuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEb1dpemFyZEVycm9yQ29tcG9uZW50IHtcbiAgQElucHV0KCkgcHVibGljIGVycm9yOiBEb1dpemFyZEVycm9yO1xuXG4gIHB1YmxpYyBEb1dpemFyZEVycm9yVHlwZSA9IERvV2l6YXJkRXJyb3JUeXBlO1xufVxuIiwiPGRpdiAqbmdJZj1cImVycm9yXCIgY2xhc3M9XCJkby13aXphcmQtZXJyb3JcIj5cbiAgPGRpdiBbbmdTd2l0Y2hdPVwiZXJyb3IudHlwZVwiIGNsYXNzPVwiZG8td2l6YXJkLWVycm9yLW1lc3NhZ2VcIj5cblxuICAgIDwhLS0gTk9fV0laQVJEX1JPVVRFIGVycm9yIC0tPlxuXG4gICAgPHNwYW4gKm5nU3dpdGNoQ2FzZT1cIkRvV2l6YXJkRXJyb3JUeXBlLk5PX1dJWkFSRF9ST1VURVwiIGNsYXNzPVwibm8td2l6YXJkLXJvdXRlXCI+XG4gICAgICBObyByb3V0ZSBjb25maWd1cmF0aW9uIGZvciB0aGUge3sgZXJyb3Iud2l6YXJkQ29tcG9uZW50TmFtZSB9fSBmb3VuZC48YnIvPlxuICAgICAgQWRkIGEgcm91dGUgZm9yIHRoZSB7eyBlcnJvci53aXphcmRDb21wb25lbnROYW1lIH19IHRvIHlvdXIgQXBwUm91dGluZ01vZHVsZS48YnIvPlxuICAgICAgPHByZT5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgICYjMTIzOyBwYXRoOiAnJywgY29tcG9uZW50OiB7eyBlcnJvci53aXphcmRDb21wb25lbnROYW1lIH19ICYjMTI1Oyxcbl07XG5cbkBOZ01vZHVsZSgmIzEyMztcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxuJiMxMjU7KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgJiMxMjM7ICYjMTI1OzwvcHJlPlxuICAgIDwvc3Bhbj5cblxuICAgIDwhLS0gTk9fQ0hJTERfUk9VVEVTIGVycm9yIC0tPlxuXG4gICAgPHNwYW4gKm5nU3dpdGNoQ2FzZT1cIkRvV2l6YXJkRXJyb3JUeXBlLk5PX0NISUxEX1JPVVRFU1wiIGNsYXNzPVwibm8tY2hpbGQtcm91dGVzXCI+XG4gICAgICBObyBjaGlsZCByb3V0ZXMgZm9yIHRoZSB7eyBlcnJvci53aXphcmRDb21wb25lbnROYW1lIH19IGZvdW5kLjxici8+XG4gICAgICBBZGQgYXQgbGVhc3Qgb25lIGNoaWxkIHJvdXRlIGZvciB0aGUge3sgZXJyb3Iud2l6YXJkQ29tcG9uZW50TmFtZSB9fSB0byB5b3VyIEFwcFJvdXRpbmdNb2R1bGUuPGJyLz5cbiAgICAgIDxwcmU+XG4mIzEyMzsgcGF0aDogJ3t7IGVycm9yLndpemFyZFBhdGggfX0nLCBjb21wb25lbnQ6IHt7IGVycm9yLndpemFyZENvbXBvbmVudE5hbWUgfX0sIGNoaWxkcmVuOiBbXG4gICAgJiMxMjM7IHBhdGg6ICdzdGVwMScsIGNvbXBvbmVudDogU3RlcDFDb21wb25lbnQgJiMxMjU7LFxuICAgICYjMTIzOyBwYXRoOiAnKionLCByZWRpcmVjdFRvOiAnc3RlcDEnICYjMTI1Oyxcbl0gJiMxMjU7LDwvcHJlPlxuICAgIDwvc3Bhbj5cblxuICAgIDwhLS0gTk9fV1NfSU5URVJGQUNFIGVycm9yIC0tPlxuXG4gICAgPHNwYW4gKm5nU3dpdGNoQ2FzZT1cIkRvV2l6YXJkRXJyb3JUeXBlLk5PX1dTX0lOVEVSRkFDRVwiIGNsYXNzPVwibm8td3MtaW50ZXJmYWNlXCI+XG4gICAgICBUaGUge3sgZXJyb3Iuc3RlcENvbXBvbmVudE5hbWV9fSBkb2VzIG5vdCBleHRlbmQgdGhlIE5nV2l6YXJkU3RlcCBjbGFzcyBvciBpbXBsZW1lbnQgdGhlXG4gICAgICBOZ1dpemFyZFN0ZXBJbnRlcmZhY2UuPGJyLz5cbiAgICAgIEV4dGVuZCB0aGUgTmdXaXphcmRTdGVwIGNsYXNzIGluIHlvdXIge3sgZXJyb3Iuc3RlcENvbXBvbmVudE5hbWV9fSBvciBpbXBsZW1lbnQgdGhlXG4gICAgICBOZ1dpemFyZFN0ZXBJbnRlcmZhY2UuPGJyLz5cbiAgICAgIDxwcmU+XG5ATmdDb21wb25lbnQoLi4uKVxuZXhwb3J0IGNsYXNzIHt7IGVycm9yLnN0ZXBDb21wb25lbnROYW1lIH19IGV4dGVuZHMgTmdXaXphcmRTdGVwICYjMTIzO1xuICAgIGNvbnN0cnVjdG9yKCkgJiMxMjM7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgJiMxMjU7XG4mIzEyNTs8L3ByZT48YnIvPlxuICAgICAgb3I8YnIvPlxuICAgICAgPHByZT5cbkBOZ0NvbXBvbmVudCguLi4pXG5leHBvcnQgY2xhc3Mge3sgZXJyb3Iuc3RlcENvbXBvbmVudE5hbWUgfX0gaW1wbGVtZW50cyBOZ1dpemFyZFN0ZXBJbnRlcmZhY2UgJiMxMjM7XG4gICAgaXNWYWxpZCgpICYjMTIzO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAmIzEyNTtcbiAgICBvbk5leHQoKSAmIzEyMzsgJiMxMjU7XG4gICAgb25QcmV2aW91cygpICYjMTIzOyAmIzEyNTtcbiYjMTI1OzwvcHJlPlxuICAgIDwvc3Bhbj5cblxuICA8L2Rpdj5cbjwvZGl2PlxuIl19