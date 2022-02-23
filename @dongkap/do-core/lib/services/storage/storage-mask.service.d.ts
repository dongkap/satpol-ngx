import { SecurityResourceModel } from '../../models';
import { EncryptionService } from '../security/encryption.service';
import { StorageFactoryService } from './storage-factory.service';
import * as i0 from "@angular/core";
export declare class StorageMaskService implements StorageFactoryService {
    protected enc: EncryptionService;
    private oauthResource;
    constructor(enc: EncryptionService, oauthResource: SecurityResourceModel);
    getSessionStorageEnc(key: string): string;
    setSessionStorageEnc(key: string, value: string): void;
    removeSessionStorageEnc(key: string): void;
    getLocalStorageEnc(key: string): string;
    setLocalStorageEnc(key: string, value: string): void;
    removeLocalStorageEnc(key: string): void;
    getSessionStorage(key: string): string;
    setSessionStorage(key: string, value: string): void;
    removeSessionStorage(key: string): void;
    getLocalStorage(key: string): string;
    setLocalStorage(key: string, value: string): void;
    removeLocalStorage(key: string): void;
    clearSessionStorage(): void;
    clearLocalStorage(): void;
    clearAll(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StorageMaskService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StorageMaskService>;
}
