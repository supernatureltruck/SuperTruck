import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Contact } from '../_class/contact';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
  })
  export class ContactService {
  
    constructor(private http: HttpClient) { }

    // POST :  Add Contact
    addContact(contact: Contact): Observable<Contact> {
        let url = `http://localhost:8080/api/contacts`;
        return this.http.put<Contact>(url, contact);
      }

       // GET : Get Contact
    getContact():Observable<Contact[]>{
        return this.http.get<Contact[]>('http://localhost:8080/api/contacts');
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