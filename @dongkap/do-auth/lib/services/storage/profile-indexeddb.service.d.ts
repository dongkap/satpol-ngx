import { Injector } from '@angular/core';
import { IndexedDBFactoryService, IndexedDBService } from '@dongkap/do-core';
import { ProfileIDB } from '../../models/profile.schema';
import * as i0 from "@angular/core";
export declare class ProfileIndexedDBService extends IndexedDBService<ProfileIDB> implements IndexedDBFactoryService {
    constructor(injector: Injector);
    loginStorage(response: any): void;
    logout(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProfileIndexedDBService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ProfileIndexedDBService>;
}
