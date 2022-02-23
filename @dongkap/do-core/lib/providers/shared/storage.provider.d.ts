import { InjectionToken } from '@angular/core';
import { StorageFactoryService } from '../../services/storage/storage-factory.service';
import { IndexedDBEncFactoryService } from '../../services/utils/indexeddb-enc-factory.service';
import { IndexedDBFactoryService } from '../../services/utils/indexeddb-factory.service';
export declare const STORAGE_SERVICE: InjectionToken<StorageFactoryService>;
export declare const AUTH_INDEXED_DB: InjectionToken<IndexedDBEncFactoryService>;
export declare const PROFILE_INDEXED_DB: InjectionToken<IndexedDBFactoryService>;
export declare const SETTINGS_INDEXED_DB: InjectionToken<IndexedDBFactoryService>;
