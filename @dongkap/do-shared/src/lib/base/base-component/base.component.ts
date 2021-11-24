import { Injector } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { API, APIModel, HttpFactoryService, HTTP_SERVICE } from '@dongkap/do-core';

export abstract class BaseComponent<T> {

    protected response: T;
    protected api: APIModel;
    protected http: HttpFactoryService;
    protected destroy$: Subject<any> = new Subject<any>();

    constructor(protected injector: Injector) {
        this.api = injector.get(API);
        this.http = injector.get(HTTP_SERVICE);
    }

    protected exec(
        serviceName: string, apiName: string, body?: any, headers?: HttpHeaders,
        params?: HttpParams, pathVariable?: string[], responseType?: any): Observable<any> {
        return this.http.HTTP_AUTH(
            this.api[serviceName][apiName],
            body,
            headers,
            params,
            pathVariable,
            responseType);
    }

}
