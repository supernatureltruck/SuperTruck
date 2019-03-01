import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Contact } from '../_class/contact';
import { HttpClient } from '@angular/common/http';
import { Auth } from './auth.service';


@Injectable({
    providedIn: 'root'
  })
  export class ContactService {

    url = `http://localhost:8080/api/contacts`;
  
    constructor(private http: HttpClient, private auth: Auth) { }

    // POST :  Add Contact
    addContact(contact: Contact) {
        return this.http.put(`${this.url}/1`, contact);
      }

       // GET : Get Contact
    getContact():Observable<Contact[]>{
        return this.http.get<Contact[]>('http://localhost:8080/api/contacts',{headers: this.auth.tokenHeader});
      }
  
      //recuperation by ID
      getUserByKey(key: string): Observable<Contact[]>{
        return this.http.get<Contact[]>('http://localhost:8080/api/contacts/'+key)
        .pipe(
          tap(data => JSON.stringify(data)),
          catchError(this.handleError('getUserByKeyContact', []))
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