import { OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { DoToastrService } from '@dongkap/do-shared';
import { AuthTokenService } from '../../services/auth-token.service';
import { AuthForceService } from '../../services/auth-force.service';
import * as i0 from "@angular/core";
export declare class ForceLoginPageComponent implements OnDestroy {
    private router;
    private authTokenService;
    private authForceService;
    private toastr;
    responseError: any;
    responseErrorCode: any;
    buttonForceLogin: boolean;
    private progress;
    protected progressDOM: HTMLElement;
    protected destroy$: Subject<any>;
    constructor(router: Router, authTokenService: AuthTokenService, authForceService: AuthForceService, toastr: DoToastrService);
    ngOnDestroy(): void;
    forcelogin(): void;
    protected initProgress(): void;
    protected doneProgress(): void;
    protected setProgress(progress: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ForceLoginPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ForceLoginPageComponent, "do-force-login-page", never, {}, {}, never, never>;
}
