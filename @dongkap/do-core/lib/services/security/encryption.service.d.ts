import * as i0 from "@angular/core";
export declare class EncryptionService {
    private ivSize;
    getHmacSha256(secret: string, message: string, hex?: boolean): string;
    encryptAES(secretKey: string, message: string): string;
    decryptAES(secretKey: string, encryptMessage: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<EncryptionService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EncryptionService>;
}
