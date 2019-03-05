import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../_class/order';
import { tap, catchError } from 'rxjs/operators';
import { Product } from '../_class/product';
import { HttpClient } from '@angular/common/http';
import { Auth } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  status = 'Ouvert';

  constructor(private http: HttpClient, private auth: Auth) { }

  change(status) {
    if(status === 'Fermé') {
      this.status = "Ouvert";
    } else {
      this.status = "Fermé";
    }
    return this.status;
  }

  getCommande(): Observable <Order[]> {
    return this.http.get <Order[]> ('http://localhost:8080/api/orders')
      .pipe(
        tap(data => data),
        catchError(this.handleError('getCommande', []))
      );
  }

  addOr(order) {
    return this.http.post('http://localhost:8080/api/orders', order, {headers: this.auth.tokenHeader});
  }

  /** DELETE: remove a command */
  remove(id): Observable <Order> {
    let url = 'http://localhost:8080/api/orders/' + id;
    return this.http.delete <Order> (url,{headers: this.auth.tokenHeader})
      .pipe(
        tap(data => data ),
        catchError(this.handleError <Order> ('remove'))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError < T > (operation = 'operation', result ? : T) {
    return (error: any): Observable < T > => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return (error);
    };
  }


}
