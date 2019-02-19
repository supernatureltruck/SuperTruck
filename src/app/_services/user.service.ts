import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { User } from '../_class/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

    authStatus = false;
    // LOGIN

    signIn() {
      this.authStatus = true;
    }

    signOut() {
      this.authStatus = false;
    }

     // POST :  Add user
     addUser(user: User): Observable<User> {
      let url = `http://localhost:8080/api/users`;
      return this.http.post<User>(url, user, {responseType: 'json'})
      .pipe(
        tap((product: User) => console.log('User added')),
        catchError(this.handleError<User>('add'))
      );
    }

    // GET : Get User
    getUser():Observable<User[]>{
      return this.http.get<User[]>('http://localhost:8080/api/users')
        .pipe(
          tap(data => data),
          catchError(this.handleError('getUser',[]))
        );
    }

    getUserByKey(key: string): Observable<User[]>{
      return this.http.get<User[]>('http://localhost:8080/api/users/'+key)
      .pipe(
        tap(data => JSON.stringify(data)),
        catchError(this.handleError('getUserByKey', []))
      );
    }

    edit(user: User, key: string): Observable<User> {
      const url = 'http://localhost:8080/api/users/' + key;
        return this.http.put<User>(url, user, {responseType: 'json'}).pipe(
          tap((product: User) => console.log('User edited')),
          catchError(this.handleError<User>('edit'))
        );
      }
    

        /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
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
