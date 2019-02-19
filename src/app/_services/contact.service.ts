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
        let url = `https://super-truck.firebaseio.com/contact.json`;
        return this.http.put<Contact>(url, contact, {responseType: 'json'})
        .pipe(
          tap((product: Contact) => console.log('Contact added')),
          catchError(this.handleError<Contact>('add'))
        );
      }

       // GET : Get Contact
    getContact():Observable<Contact[]>{
        return this.http.get<Contact[]>('https://super-truck.firebaseio.com/contact.json')
          .pipe(
            tap(data => data),
            catchError(this.handleError('getContact',[]))
          );
      }
  
      //recuperation by ID
      getUserByKey(key: string): Observable<Contact[]>{
        return this.http.get<Contact[]>('https://super-truck.firebaseio.com/contact/'+key+'.json')
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