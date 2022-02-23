import { Injector } from '@angular/core';
import { IndexedDBFactoryService, IndexedDBService } from '@dongkap/do-core';
import { SettingsIDB } from '../../models/settings.schema';
import * as i0 from "@angular/core";
export declare class SettingsIndexedDBService extends IndexedDBService<SettingsIDB> implements IndexedDBFactoryService {
    private translate;
    constructor(injector: Injector);
    loginStorage(response: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SettingsIndexedDBService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SettingsIndexedDBService>;
}
