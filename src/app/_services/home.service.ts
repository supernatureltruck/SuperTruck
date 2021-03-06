import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Home } from '../_class/home';
import { HttpClient } from '@angular/common/http';
import { Auth } from './auth.service';


@Injectable({
    providedIn: 'root'
  })
  export class HomeService {

    url = `http://localhost:8080/api/homes`;
  
    constructor(private http: HttpClient, private auth: Auth) { }

    // POST :  Add Home
    addHome(home: Home) {
        return this.http.put(`${this.url}/1`, home,{headers: this.auth.tokenHeader});
    }

       // GET : Get Home
    getHome():Observable<Home[]>{
        return this.http.get<Home[]>('http://localhost:8080/api/homes',{headers: this.auth.tokenHeader});
      }
  
      //recuperation by ID
      getUserByKey(key: string): Observable<Home[]>{
        return this.http.get<Home[]>('http://localhost:8080/api/homes/'+ key,{headers: this.auth.tokenHeader})
        .pipe(
          tap(data => JSON.stringify(data)),
          catchError(this.handleError('getUserByKeyHome', []))
        );
      }

      //GESTION ERROR
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