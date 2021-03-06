import {
  Injectable
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  Observable
} from 'rxjs';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import {
  tap,
  catchError
} from 'rxjs/operators';
import {
  User
} from '../_class/user';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class Auth {

  TOKEN_KEY = "token";
  MAIL = "mail";
  ROLE = "role";
  admin = false;

  constructor(private router: Router, private http: HttpClient) { }

  login(form) {
    let url = `http://localhost:8080/api/auth/signin`;
    return this.http.post(url, form);
  }

  authenticated(data) {
    const authResponse = data;
    if (!authResponse.accessToken) {
      return;
    }
    localStorage.setItem(this.TOKEN_KEY, authResponse.accessToken);
    localStorage.setItem(this.MAIL, authResponse.mail);
  }

  get isAuthentificated(): boolean {
    // Return true or false (!! <- important)
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  get isAdmin() {
    this.ROLE = localStorage.getItem('role');
    if (this.ROLE === "1") {
      return true;
    } else {
      return false;
    }
  }

  get tokenHeader() {
    return new HttpHeaders({
      authorization: 'Bearer ' + localStorage.getItem(this.TOKEN_KEY)
    });
  }

  register(user: User): Observable<User> {
    let url = `http://localhost:8080/api/auth/signup`;
    return this.http.post<User>(url, user, {
      responseType: 'json'
    })
      .pipe(
        tap((user: User) => console.log('User added')),
        catchError(this.handleError<User>('register'))
      );
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return (error);
    };
  }
}
