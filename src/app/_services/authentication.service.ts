import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { User } from '../_models';

@Injectable()
export class AuthenticationService {

    userData$: BehaviorSubject<User> = new BehaviorSubject(null);

    constructor(private http: HttpClient) {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        if (user != null) {
            this.setUserData(user);
        }
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username: username, password: password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.setUserData(user);
                }

                return user;
            }));
    }

    setUserData(user) {
        this.userData$.next({
            id: user._id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            permissions: this.parseJWT(user.token).permissions,
            roles: user.roles
        });
    }

    parseJWT(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        return JSON.parse(window.atob(base64));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.userData$ = new BehaviorSubject(null);
    }
}