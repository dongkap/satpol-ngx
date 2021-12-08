import { Injectable, Inject } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
    API,
    APIModel,
    HttpFactoryService,
    HTTP_SERVICE,
    UserModel,
    UserService,
} from '@dongkap/do-core';
import { ProfileIndexedDBService } from './storage/profile-indexeddb.service';

@Injectable()
export class AuthUserService extends UserService {

    constructor(
        private profileIndexedDB: ProfileIndexedDBService,
        @Inject(API)private apiPath: APIModel,
        @Inject(HTTP_SERVICE)private httpBaseService: HttpFactoryService) {
            super();
    }
    private loaderUserSubject$ = new Subject<UserModel>();

    public loadUser(): void {
        this.httpBaseService.HTTP_AUTH(
            this.apiPath['profile']['get-profile'])
            .subscribe((response: any) => {
                Promise.all([
                    this.profileIndexedDB.put('name', response['name']),
                    this.profileIndexedDB.put('email', response['email']),
                    this.profileIndexedDB.put('image', response['image']),
                ]).then();
            });
    }

    public updateName(name: string): Observable<UserModel> {
        this.profileIndexedDB.put('name', name).then();
        this.profileIndexedDB.get('image').then((image: any) => {
            const user: UserModel = {
                name,
                image,
            };
            this.loaderUserSubject$.next(user);
        });
        return this.loaderUserSubject$.asObservable();
    }

    public get onUserChange(): Observable<UserModel> {
        return this.loaderUserSubject$.asObservable();
    }

}
