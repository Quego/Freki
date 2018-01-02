import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/**
 * The authentication service is used to login and logout of the application, to login it posts
 * the users credentials to the api and checks the response for a JWT token, if there is one it
 * it means authentication was successful so the user details including the token are added
 * to local storage
 *
 * The logged in user details are stored in local storage so the user will stay logged in if they
 * refresh the browser and also between browser sessions until they logout.
 */
@Injectable()
export class AuthenticationService {

  constructor(private http: Http) { }

  login(username: string, password: string) {
    return this.http.post('/users/authenticate', { username: username, password: password })
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        const user = response.json();
        if (user && user.token) {
          // storie user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      });
  }

  logout() {
    // remove user form local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
