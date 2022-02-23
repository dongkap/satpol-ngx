import { Injector } from '@angular/core';
import { OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { IndexedDBEncFactoryService } from '@dongkap/do-core';
import { HttpBaseModel } from '@dongkap/do-core';
import { IndexedDBFactoryService } from '@dongkap/do-core';
import { CheckboxModel, BaseFormComponent } from '@dongkap/do-shared';
import * as i0 from "@angular/core";
export declare class SettingsPageComponent extends BaseFormComponent<any> implements OnInit {
    injector: Injector;
    private translate;
    private themeService;
    private settingsIndexedDB;
    private authIndexedDB;
    apiSelectLocale: HttpBaseModel;
    localeIcon: string;
    private localeCode;
    private localeIdentifier;
    dataTheme: CheckboxModel[];
    constructor(injector: Injector, translate: TranslateService, themeService: NbThemeService, settingsIndexedDB: IndexedDBFactoryService, authIndexedDB: IndexedDBEncFactoryService);
    ngOnInit(): void;
    onInit(serviceName: string, apiName: string): void;
    onSubmit(): void;
    changeTheme(theme: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SettingsPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SettingsPageComponent, "do-settings-page", never, {}, {}, never, never>;
}
