import * as i0 from "@angular/core";
export declare class AuthForceService {
    private user;
    private pass;
    isEmpty(): boolean;
    setData(user: string, pass: string): void;
    get username(): string;
    get password(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthForceService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthForceService>;
}
