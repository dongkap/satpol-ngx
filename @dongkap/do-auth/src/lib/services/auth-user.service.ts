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
        Promise.all([
            this.profileIndexedDB.get('image-b64'),
            this.profileIndexedDB.get('image'),
        ]).then((value: any[]) => {
            let picture: string;
            if (value[0]) {
                picture = value[0];
            } else {
                picture = value[1];
            }
            const user: UserModel = {
                name,
                image: picture,
            };
            this.loaderUserSubject$.next(user);
        });
        return this.loaderUserSubject$.asObservable();
    }

    public get onUserChange(): Observable<UserModel> {
        return this.loaderUserSubject$.asObservable();
    }

}
