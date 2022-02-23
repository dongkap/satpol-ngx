import { ErrorHandler, NgModule, Optional, SkipSelf, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { HTTP_SERVICE } from './providers/http.provider';
import { STORAGE_SERVICE } from './providers/shared/storage.provider';
import { ErrorHandlerService } from './services/error-handler.service';
import { CustomPreloadingStrategy } from './services/preloading-strategy.service';
import { EncryptionService } from './services/security/encryption.service';
import { StorageMaskService } from './services/storage/storage-mask.service';
import { HttpCommonService } from './services/utils/http-common.service';
import { TranslationService } from './services/utils/translation.service';
import * as i0 from "@angular/core";
export const CORE_PROVIDERS = [
    CustomPreloadingStrategy,
    EncryptionService,
    { provide: HTTP_SERVICE, useClass: HttpCommonService },
    { provide: ErrorHandler, useClass: ErrorHandlerService },
    { provide: STORAGE_SERVICE, useClass: StorageMaskService },
];
export function createTranslateLoader(http) {
    return new TranslationService(http, './assets/i18n/', '.json');
}
export class DoCoreModule {
    constructor(parentModule) {
        throwIfAlreadyLoaded(parentModule, 'DoCoreModule');
    }
    static forRoot() {
        return {
            ngModule: DoCoreModule,
            providers: [
                ...CORE_PROVIDERS,
                ...TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: (createTranslateLoader),
                        deps: [HttpClient],
                    },
                }).providers,
            ],
        };
    }
}
DoCoreModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoCoreModule, deps: [{ token: DoCoreModule, optional: true, skipSelf: true }], target: i0.ɵɵFactoryTarget.NgModule });
DoCoreModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoCoreModule, imports: [CommonModule] });
DoCoreModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoCoreModule, imports: [[
            CommonModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoCoreModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                    ],
                    exports: [],
                    declarations: [],
                }]
        }], ctorParameters: function () { return [{ type: DoCoreModule, decorators: [{
                    type: Optional
                }, {
                    type: SkipSelf
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1jb3JlL3NyYy9saWIvZG8tY29yZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFlBQVksRUFFWixRQUFRLEVBQ1IsUUFBUSxFQUNSLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWxELE9BQU8sRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7QUFFMUUsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHO0lBQzVCLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBQztJQUNyRCxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFDO0lBQ3ZELEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUU7Q0FDM0QsQ0FBQztBQUVGLE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxJQUFnQjtJQUNwRCxPQUFPLElBQUksa0JBQWtCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ2pFLENBQUM7QUFTRCxNQUFNLE9BQU8sWUFBWTtJQUN2QixZQUFvQyxZQUEwQjtRQUM1RCxvQkFBb0IsQ0FBQyxZQUFZLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRTtnQkFDVCxHQUFHLGNBQWM7Z0JBQ2pCLEdBQUcsZUFBZSxDQUFDLE9BQU8sQ0FBQztvQkFDckIsTUFBTSxFQUFFO3dCQUNKLE9BQU8sRUFBRSxlQUFlO3dCQUN4QixVQUFVLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQzt3QkFDbkMsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDO3FCQUNyQjtpQkFDRixDQUFDLENBQUMsU0FBUzthQUNqQjtTQUNGLENBQUM7SUFDSixDQUFDOzswR0FuQlUsWUFBWSxrQkFDMkIsWUFBWTsyR0FEbkQsWUFBWSxZQUxyQixZQUFZOzJHQUtILFlBQVksWUFOZDtZQUNQLFlBQVk7U0FDYjs0RkFJVSxZQUFZO2tCQVB4QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO29CQUNELE9BQU8sRUFBRSxFQUFFO29CQUNYLFlBQVksRUFBRSxFQUFFO2lCQUNqQjswREFFbUQsWUFBWTswQkFBakQsUUFBUTs7MEJBQUksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEVycm9ySGFuZGxlcixcbiAgTW9kdWxlV2l0aFByb3ZpZGVycyxcbiAgTmdNb2R1bGUsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgVHJhbnNsYXRlTG9hZGVyLCBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IHRocm93SWZBbHJlYWR5TG9hZGVkIH0gZnJvbSAnLi9tb2R1bGUtaW1wb3J0LWd1YXJkJztcbmltcG9ydCB7IEhUVFBfU0VSVklDRSB9IGZyb20gJy4vcHJvdmlkZXJzL2h0dHAucHJvdmlkZXInO1xuaW1wb3J0IHsgU1RPUkFHRV9TRVJWSUNFIH0gZnJvbSAnLi9wcm92aWRlcnMvc2hhcmVkL3N0b3JhZ2UucHJvdmlkZXInO1xuaW1wb3J0IHsgRXJyb3JIYW5kbGVyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZXJyb3ItaGFuZGxlci5zZXJ2aWNlJztcbmltcG9ydCB7IEN1c3RvbVByZWxvYWRpbmdTdHJhdGVneSB9IGZyb20gJy4vc2VydmljZXMvcHJlbG9hZGluZy1zdHJhdGVneS5zZXJ2aWNlJztcbmltcG9ydCB7IEVuY3J5cHRpb25TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9zZWN1cml0eS9lbmNyeXB0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RvcmFnZU1hc2tTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9zdG9yYWdlL3N0b3JhZ2UtbWFzay5zZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBDb21tb25TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy91dGlscy9odHRwLWNvbW1vbi5zZXJ2aWNlJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdXRpbHMvdHJhbnNsYXRpb24uc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBDT1JFX1BST1ZJREVSUyA9IFtcbiAgQ3VzdG9tUHJlbG9hZGluZ1N0cmF0ZWd5LFxuICBFbmNyeXB0aW9uU2VydmljZSxcbiAgeyBwcm92aWRlOiBIVFRQX1NFUlZJQ0UsIHVzZUNsYXNzOiBIdHRwQ29tbW9uU2VydmljZX0sXG4gIHsgcHJvdmlkZTogRXJyb3JIYW5kbGVyLCB1c2VDbGFzczogRXJyb3JIYW5kbGVyU2VydmljZX0sXG4gIHsgcHJvdmlkZTogU1RPUkFHRV9TRVJWSUNFLCB1c2VDbGFzczogU3RvcmFnZU1hc2tTZXJ2aWNlIH0sXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVHJhbnNsYXRlTG9hZGVyKGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgcmV0dXJuIG5ldyBUcmFuc2xhdGlvblNlcnZpY2UoaHR0cCwgJy4vYXNzZXRzL2kxOG4vJywgJy5qc29uJyk7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtdLFxuICBkZWNsYXJhdGlvbnM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBEb0NvcmVNb2R1bGUge1xuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IERvQ29yZU1vZHVsZSkge1xuICAgIHRocm93SWZBbHJlYWR5TG9hZGVkKHBhcmVudE1vZHVsZSwgJ0RvQ29yZU1vZHVsZScpO1xuICB9XG5cbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxEb0NvcmVNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERvQ29yZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAuLi5DT1JFX1BST1ZJREVSUyxcbiAgICAgICAgLi4uVHJhbnNsYXRlTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgICAgICAgICBsb2FkZXI6IHtcbiAgICAgICAgICAgICAgICAgIHByb3ZpZGU6IFRyYW5zbGF0ZUxvYWRlcixcbiAgICAgICAgICAgICAgICAgIHVzZUZhY3Rvcnk6IChjcmVhdGVUcmFuc2xhdGVMb2FkZXIpLFxuICAgICAgICAgICAgICAgICAgZGVwczogW0h0dHBDbGllbnRdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSkucHJvdmlkZXJzLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=