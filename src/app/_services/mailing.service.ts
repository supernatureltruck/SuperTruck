import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Auth } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MailingService {

  nbCommandes;

  constructor(private http: HttpClient, private auth:Auth) { }

  mailing(id): Observable<any>{
    return this.http.get<any>('http://localhost:8080/sendemail/'+ id,{headers: this.auth.tokenHeader})
    .pipe(
      tap(data => JSON.stringify(data)),
      catchError(this.handleError('mailing', []))
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
