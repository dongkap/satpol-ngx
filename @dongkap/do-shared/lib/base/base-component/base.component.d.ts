import { Injector } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { APIModel, HttpFactoryService } from '@dongkap/do-core';
export declare abstract class BaseComponent<T> {
    protected injector: Injector;
    protected response: T;
    protected api: APIModel;
    protected http: HttpFactoryService;
    protected destroy$: Subject<any>;
    protected progressDOM: HTMLElement;
    constructor(injector: Injector);
    protected exec(serviceName: string, apiName: string, body?: any, headers?: HttpHeaders, params?: HttpParams, pathVariable?: string[], responseType?: any): Observable<any>;
    protected initProgress(): void;
    protected doneProgress(): void;
    protected setProgress(progress: number): void;
}
