import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NbActionsModule, NbLayoutModule, NbMenuModule, NbSearchModule, NbSidebarModule, NbUserModule, NbContextMenuModule, NbButtonModule, NbSelectModule, NbIconModule, NbThemeModule, } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbSecurityModule } from '@nebular/security';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { DefaultLayoutComponent } from './layouts/layout.component';
import { LayoutService } from './services/layout.service';
import { StateService } from './services/state.service';
import { AnalyticsService } from './services/analytics.service';
import { SeoService } from './services/seo.service';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { PluralPipe } from './pipes/plural.pipe';
import { RoundPipe } from './pipes/round.pipe';
import { TimingPipe } from './pipes/timing.pipe';
import { NumberWithCommasPipe } from './pipes/number-with-commas.pipe';
import { DEFAULT_THEME } from './styles/theme.default';
import { COSMIC_THEME } from './styles/theme.cosmic';
import { CORPORATE_THEME } from './styles/theme.corporate';
import { DARK_THEME } from './styles/theme.dark';
import * as i0 from "@angular/core";
const NB_MODULES = [
    RouterModule,
    TranslateModule,
    NbLayoutModule,
    NbMenuModule,
    NbUserModule,
    NbActionsModule,
    NbSearchModule,
    NbSidebarModule,
    NbContextMenuModule,
    NbSecurityModule,
    NbButtonModule,
    NbSelectModule,
    NbIconModule,
    NbEvaIconsModule,
];
const THEME_COMPONENTS = [
    HeaderComponent,
    FooterComponent,
    SearchInputComponent,
    DefaultLayoutComponent,
];
const THEME_PROVIDERS = [
    LayoutService,
    StateService,
    AnalyticsService,
    SeoService,
];
const THEME_PIPES = [
    CapitalizePipe,
    PluralPipe,
    RoundPipe,
    TimingPipe,
    NumberWithCommasPipe,
];
export class DoThemeModule {
    static forRoot() {
        return {
            ngModule: DoThemeModule,
            providers: [
                ...THEME_PROVIDERS,
                ...NbThemeModule.forRoot({
                    name: 'default',
                }, [DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME]).providers,
            ],
        };
    }
}
DoThemeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoThemeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoThemeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoThemeModule, declarations: [HeaderComponent,
        FooterComponent,
        SearchInputComponent,
        DefaultLayoutComponent, CapitalizePipe,
        PluralPipe,
        RoundPipe,
        TimingPipe,
        NumberWithCommasPipe], imports: [CommonModule, RouterModule,
        TranslateModule,
        NbLayoutModule,
        NbMenuModule,
        NbUserModule,
        NbActionsModule,
        NbSearchModule,
        NbSidebarModule,
        NbContextMenuModule,
        NbSecurityModule,
        NbButtonModule,
        NbSelectModule,
        NbIconModule,
        NbEvaIconsModule], exports: [CommonModule, CapitalizePipe,
        PluralPipe,
        RoundPipe,
        TimingPipe,
        NumberWithCommasPipe, HeaderComponent,
        FooterComponent,
        SearchInputComponent,
        DefaultLayoutComponent] });
DoThemeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoThemeModule, imports: [[CommonModule, ...NB_MODULES], CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoThemeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ...NB_MODULES],
                    exports: [CommonModule, ...THEME_PIPES, ...THEME_COMPONENTS],
                    declarations: [...THEME_COMPONENTS, ...THEME_PIPES],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tdGhlbWUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tdGhlbWUvc3JjL2xpYi9kby10aGVtZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsZUFBZSxFQUNmLGNBQWMsRUFDZCxZQUFZLEVBQ1osY0FBYyxFQUNkLGVBQWUsRUFDZixZQUFZLEVBQ1osbUJBQW1CLEVBQ25CLGNBQWMsRUFDZCxjQUFjLEVBQ2QsWUFBWSxFQUNaLGFBQWEsR0FDZCxNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBRWpELE1BQU0sVUFBVSxHQUFHO0lBQ2pCLFlBQVk7SUFDWixlQUFlO0lBQ2YsY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLGNBQWM7SUFDZCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsY0FBYztJQUNkLFlBQVk7SUFDWixnQkFBZ0I7Q0FDakIsQ0FBQztBQUNGLE1BQU0sZ0JBQWdCLEdBQUc7SUFDdkIsZUFBZTtJQUNmLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsc0JBQXNCO0NBQ3ZCLENBQUM7QUFDRixNQUFNLGVBQWUsR0FBRztJQUN0QixhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixVQUFVO0NBQ1gsQ0FBQztBQUNGLE1BQU0sV0FBVyxHQUFHO0lBQ2xCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsU0FBUztJQUNULFVBQVU7SUFDVixvQkFBb0I7Q0FDckIsQ0FBQztBQU9GLE1BQU0sT0FBTyxhQUFhO0lBQ3hCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFNBQVMsRUFBRTtnQkFDVCxHQUFHLGVBQWU7Z0JBQ2xCLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FDdEI7b0JBQ0UsSUFBSSxFQUFFLFNBQVM7aUJBQ2hCLEVBQ0QsQ0FBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxVQUFVLENBQUUsQ0FDN0QsQ0FBQyxTQUFTO2FBQ1o7U0FDRixDQUFDO0lBQ0osQ0FBQzs7MkdBZFUsYUFBYTs0R0FBYixhQUFhLGlCQXhCeEIsZUFBZTtRQUNmLGVBQWU7UUFDZixvQkFBb0I7UUFDcEIsc0JBQXNCLEVBU3RCLGNBQWM7UUFDZCxVQUFVO1FBQ1YsU0FBUztRQUNULFVBQVU7UUFDVixvQkFBb0IsYUFJVixZQUFZLEVBcEN0QixZQUFZO1FBQ1osZUFBZTtRQUNmLGNBQWM7UUFDZCxZQUFZO1FBQ1osWUFBWTtRQUNaLGVBQWU7UUFDZixjQUFjO1FBQ2QsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLGNBQWM7UUFDZCxZQUFZO1FBQ1osZ0JBQWdCLGFBd0JOLFlBQVksRUFUdEIsY0FBYztRQUNkLFVBQVU7UUFDVixTQUFTO1FBQ1QsVUFBVTtRQUNWLG9CQUFvQixFQWhCcEIsZUFBZTtRQUNmLGVBQWU7UUFDZixvQkFBb0I7UUFDcEIsc0JBQXNCOzRHQXFCWCxhQUFhLFlBSmYsQ0FBQyxZQUFZLEVBQUUsR0FBRyxVQUFVLENBQUMsRUFDNUIsWUFBWTs0RkFHWCxhQUFhO2tCQUx6QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxHQUFHLFVBQVUsQ0FBQztvQkFDdEMsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLEdBQUcsV0FBVyxFQUFFLEdBQUcsZ0JBQWdCLENBQUM7b0JBQzVELFlBQVksRUFBRSxDQUFDLEdBQUcsZ0JBQWdCLEVBQUUsR0FBRyxXQUFXLENBQUM7aUJBQ3BEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgTmJBY3Rpb25zTW9kdWxlLFxuICBOYkxheW91dE1vZHVsZSxcbiAgTmJNZW51TW9kdWxlLFxuICBOYlNlYXJjaE1vZHVsZSxcbiAgTmJTaWRlYmFyTW9kdWxlLFxuICBOYlVzZXJNb2R1bGUsXG4gIE5iQ29udGV4dE1lbnVNb2R1bGUsXG4gIE5iQnV0dG9uTW9kdWxlLFxuICBOYlNlbGVjdE1vZHVsZSxcbiAgTmJJY29uTW9kdWxlLFxuICBOYlRoZW1lTW9kdWxlLFxufSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBOYkV2YUljb25zTW9kdWxlIH0gZnJvbSAnQG5lYnVsYXIvZXZhLWljb25zJztcbmltcG9ydCB7IE5iU2VjdXJpdHlNb2R1bGUgfSBmcm9tICdAbmVidWxhci9zZWN1cml0eSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuaW1wb3J0IHsgRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWFyY2hJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zZWFyY2gtaW5wdXQvc2VhcmNoLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEZWZhdWx0TGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL2xheW91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5b3V0U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbGF5b3V0LnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IEFuYWx5dGljc1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2FuYWx5dGljcy5zZXJ2aWNlJztcbmltcG9ydCB7IFNlb1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3Nlby5zZXJ2aWNlJztcbmltcG9ydCB7IENhcGl0YWxpemVQaXBlIH0gZnJvbSAnLi9waXBlcy9jYXBpdGFsaXplLnBpcGUnO1xuaW1wb3J0IHsgUGx1cmFsUGlwZSB9IGZyb20gJy4vcGlwZXMvcGx1cmFsLnBpcGUnO1xuaW1wb3J0IHsgUm91bmRQaXBlIH0gZnJvbSAnLi9waXBlcy9yb3VuZC5waXBlJztcbmltcG9ydCB7IFRpbWluZ1BpcGUgfSBmcm9tICcuL3BpcGVzL3RpbWluZy5waXBlJztcbmltcG9ydCB7IE51bWJlcldpdGhDb21tYXNQaXBlIH0gZnJvbSAnLi9waXBlcy9udW1iZXItd2l0aC1jb21tYXMucGlwZSc7XG5pbXBvcnQgeyBERUZBVUxUX1RIRU1FIH0gZnJvbSAnLi9zdHlsZXMvdGhlbWUuZGVmYXVsdCc7XG5pbXBvcnQgeyBDT1NNSUNfVEhFTUUgfSBmcm9tICcuL3N0eWxlcy90aGVtZS5jb3NtaWMnO1xuaW1wb3J0IHsgQ09SUE9SQVRFX1RIRU1FIH0gZnJvbSAnLi9zdHlsZXMvdGhlbWUuY29ycG9yYXRlJztcbmltcG9ydCB7IERBUktfVEhFTUUgfSBmcm9tICcuL3N0eWxlcy90aGVtZS5kYXJrJztcblxuY29uc3QgTkJfTU9EVUxFUyA9IFtcbiAgUm91dGVyTW9kdWxlLFxuICBUcmFuc2xhdGVNb2R1bGUsXG4gIE5iTGF5b3V0TW9kdWxlLFxuICBOYk1lbnVNb2R1bGUsXG4gIE5iVXNlck1vZHVsZSxcbiAgTmJBY3Rpb25zTW9kdWxlLFxuICBOYlNlYXJjaE1vZHVsZSxcbiAgTmJTaWRlYmFyTW9kdWxlLFxuICBOYkNvbnRleHRNZW51TW9kdWxlLFxuICBOYlNlY3VyaXR5TW9kdWxlLFxuICBOYkJ1dHRvbk1vZHVsZSxcbiAgTmJTZWxlY3RNb2R1bGUsXG4gIE5iSWNvbk1vZHVsZSxcbiAgTmJFdmFJY29uc01vZHVsZSxcbl07XG5jb25zdCBUSEVNRV9DT01QT05FTlRTID0gW1xuICBIZWFkZXJDb21wb25lbnQsXG4gIEZvb3RlckNvbXBvbmVudCxcbiAgU2VhcmNoSW5wdXRDb21wb25lbnQsXG4gIERlZmF1bHRMYXlvdXRDb21wb25lbnQsXG5dO1xuY29uc3QgVEhFTUVfUFJPVklERVJTID0gW1xuICBMYXlvdXRTZXJ2aWNlLFxuICBTdGF0ZVNlcnZpY2UsXG4gIEFuYWx5dGljc1NlcnZpY2UsXG4gIFNlb1NlcnZpY2UsXG5dO1xuY29uc3QgVEhFTUVfUElQRVMgPSBbXG4gIENhcGl0YWxpemVQaXBlLFxuICBQbHVyYWxQaXBlLFxuICBSb3VuZFBpcGUsXG4gIFRpbWluZ1BpcGUsXG4gIE51bWJlcldpdGhDb21tYXNQaXBlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgLi4uTkJfTU9EVUxFU10sXG4gIGV4cG9ydHM6IFtDb21tb25Nb2R1bGUsIC4uLlRIRU1FX1BJUEVTLCAuLi5USEVNRV9DT01QT05FTlRTXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uVEhFTUVfQ09NUE9ORU5UUywgLi4uVEhFTUVfUElQRVNdLFxufSlcbmV4cG9ydCBjbGFzcyBEb1RoZW1lTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxEb1RoZW1lTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBEb1RoZW1lTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIC4uLlRIRU1FX1BST1ZJREVSUyxcbiAgICAgICAgLi4uTmJUaGVtZU1vZHVsZS5mb3JSb290KFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdkZWZhdWx0JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFsgREVGQVVMVF9USEVNRSwgQ09TTUlDX1RIRU1FLCBDT1JQT1JBVEVfVEhFTUUsIERBUktfVEhFTUUgXSxcbiAgICAgICAgKS5wcm92aWRlcnMsXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==