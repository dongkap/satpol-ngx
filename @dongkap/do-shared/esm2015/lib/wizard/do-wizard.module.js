import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NbButtonModule } from '@nebular/theme';
import { DoWizardComponent } from './do-wizard.component';
import { DoWizardErrorComponent } from './wizard-error/do-wizard-error.component';
import { DoWizardButtonsComponent } from './wizard-buttons/do-wizard-buttons.component';
import { DoWizardNavigationComponent } from './wizard-navigation/do-wizard-navigation.component';
import { DoWizardPageOutletComponent } from './wizard-page-outlet/do-wizard-page-outlet.component';
import { DoWizardService } from './services/do-wizard.service';
import * as i0 from "@angular/core";
export const WIZARD_COMPONENTS = [
    DoWizardComponent,
    DoWizardErrorComponent,
    DoWizardNavigationComponent,
    DoWizardButtonsComponent,
    DoWizardPageOutletComponent,
];
export const WIZARD_PROVIDERS = [
    DoWizardService,
];
export class DoWizardModule {
    static forRoot() {
        return {
            ngModule: DoWizardModule,
            providers: [
                ...WIZARD_PROVIDERS,
            ],
        };
    }
}
DoWizardModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoWizardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoWizardModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoWizardModule, declarations: [DoWizardComponent,
        DoWizardErrorComponent,
        DoWizardNavigationComponent,
        DoWizardButtonsComponent,
        DoWizardPageOutletComponent], imports: [CommonModule,
        RouterModule,
        TranslateModule,
        NbButtonModule], exports: [DoWizardComponent,
        DoWizardErrorComponent,
        DoWizardNavigationComponent,
        DoWizardButtonsComponent,
        DoWizardPageOutletComponent] });
DoWizardModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoWizardModule, imports: [[
            CommonModule,
            RouterModule,
            TranslateModule,
            NbButtonModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoWizardModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ...WIZARD_COMPONENTS,
                    ],
                    imports: [
                        CommonModule,
                        RouterModule,
                        TranslateModule,
                        NbButtonModule,
                    ],
                    exports: [
                        ...WIZARD_COMPONENTS,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8td2l6YXJkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXNoYXJlZC9zcmMvbGliL3dpemFyZC9kby13aXphcmQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN4RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUNuRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBRS9ELE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHO0lBQy9CLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4QiwyQkFBMkI7Q0FDNUIsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHO0lBQzlCLGVBQWU7Q0FDaEIsQ0FBQztBQWdCRixNQUFNLE9BQU8sY0FBYztJQUN6QixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLEVBQUU7Z0JBQ1QsR0FBRyxnQkFBZ0I7YUFDcEI7U0FDRixDQUFDO0lBQ0osQ0FBQzs7NEdBUlUsY0FBYzs2R0FBZCxjQUFjLGlCQXpCekIsaUJBQWlCO1FBQ2pCLHNCQUFzQjtRQUN0QiwyQkFBMkI7UUFDM0Isd0JBQXdCO1FBQ3hCLDJCQUEyQixhQVl6QixZQUFZO1FBQ1osWUFBWTtRQUNaLGVBQWU7UUFDZixjQUFjLGFBbkJoQixpQkFBaUI7UUFDakIsc0JBQXNCO1FBQ3RCLDJCQUEyQjtRQUMzQix3QkFBd0I7UUFDeEIsMkJBQTJCOzZHQXFCaEIsY0FBYyxZQVZoQjtZQUNQLFlBQVk7WUFDWixZQUFZO1lBQ1osZUFBZTtZQUNmLGNBQWM7U0FDZjs0RkFLVSxjQUFjO2tCQWQxQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixHQUFHLGlCQUFpQjtxQkFDckI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixlQUFlO3dCQUNmLGNBQWM7cUJBQ2Y7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLEdBQUcsaUJBQWlCO3FCQUNyQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgTmJCdXR0b25Nb2R1bGUgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBEb1dpemFyZENvbXBvbmVudCB9IGZyb20gJy4vZG8td2l6YXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEb1dpemFyZEVycm9yQ29tcG9uZW50IH0gZnJvbSAnLi93aXphcmQtZXJyb3IvZG8td2l6YXJkLWVycm9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEb1dpemFyZEJ1dHRvbnNDb21wb25lbnQgfSBmcm9tICcuL3dpemFyZC1idXR0b25zL2RvLXdpemFyZC1idXR0b25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEb1dpemFyZE5hdmlnYXRpb25Db21wb25lbnQgfSBmcm9tICcuL3dpemFyZC1uYXZpZ2F0aW9uL2RvLXdpemFyZC1uYXZpZ2F0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEb1dpemFyZFBhZ2VPdXRsZXRDb21wb25lbnQgfSBmcm9tICcuL3dpemFyZC1wYWdlLW91dGxldC9kby13aXphcmQtcGFnZS1vdXRsZXQuY29tcG9uZW50JztcbmltcG9ydCB7IERvV2l6YXJkU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZG8td2l6YXJkLnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgV0laQVJEX0NPTVBPTkVOVFMgPSBbXG4gIERvV2l6YXJkQ29tcG9uZW50LFxuICBEb1dpemFyZEVycm9yQ29tcG9uZW50LFxuICBEb1dpemFyZE5hdmlnYXRpb25Db21wb25lbnQsXG4gIERvV2l6YXJkQnV0dG9uc0NvbXBvbmVudCxcbiAgRG9XaXphcmRQYWdlT3V0bGV0Q29tcG9uZW50LFxuXTtcblxuZXhwb3J0IGNvbnN0IFdJWkFSRF9QUk9WSURFUlMgPSBbXG4gIERvV2l6YXJkU2VydmljZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLldJWkFSRF9DT01QT05FTlRTLFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGUsXG4gICAgTmJCdXR0b25Nb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5XSVpBUkRfQ09NUE9ORU5UUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRG9XaXphcmRNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPERvV2l6YXJkTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBEb1dpemFyZE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAuLi5XSVpBUkRfUFJPVklERVJTLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=