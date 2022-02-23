import { Observable } from 'rxjs';
import { UserModel } from '../../models';
export declare abstract class UserService {
    abstract loadUser(): void;
    abstract updateName(name: string): Observable<UserModel>;
    abstract updatePhoto(checksum: string): Observable<UserModel>;
    abstract get onUserChange(): Observable<UserModel>;
}
