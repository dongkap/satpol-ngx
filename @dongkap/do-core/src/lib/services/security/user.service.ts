import { Observable } from 'rxjs';
import { UserModel } from '../../models';

export abstract class UserService {
  abstract loadUser(): void;
  abstract updateNameUser(name: string): Observable<UserModel>;
  abstract getUser(): Observable<UserModel>;
}
