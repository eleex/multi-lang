import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isAuth = false;

  login(user: User): Observable<boolean> {
    if (user.login === 'test' && user.password === 'test') {
      this.isAuth = true;
    }
    return of(this.isAuth);
  }
}
