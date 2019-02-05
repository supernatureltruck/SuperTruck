import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../_class/order';
import { tap, catchError } from 'rxjs/operators';
import { Product } from '../_class/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  status = 'Ouvert';

  constructor(private http: HttpClient) { }

  change(status) {
    if(status === 'Fermé') {
      this.status = "Ouvert";
    } else {
      this.status = "Fermé";
    }
    return this.status;
  }

  getCommande(): Observable <Order[]> {
    return this.http.get <Order[]> ('https://super-truck.firebaseio.com/commande/attente.json')
      .pipe(
        tap(data => data),
        catchError(this.handleError('getCommande', []))
      );
  }

  getCommandePrep(): Observable <Order[]> {
    return this.http.get <Order[]> ('https://super-truck.firebaseio.com/commande/preparation.json')
      .pipe(
        tap(data => data),
        catchError(this.handleError('getCommandePrep', []))
      );
  }

  getCommandeTerm(): Observable <Order[]> {
    return this.http.get <Order[]> ('https://super-truck.firebaseio.com/commande/termine.json')
      .pipe(
        tap(data => data),
        catchError(this.handleError('getCommandeTerm', []))
      );
  }

  addCommandePrep(order: Order): Observable <Order>  {
    let url = `https://super-truck.firebaseio.com/commande/preparation.json`;
    return this.http.post <Order> (url, order, {
      responseType: 'json'
    }).pipe(
      tap((order: Order) => console.log('Ok !')),
      catchError(this.handleError <Order> (' addCommandePrep'))
    );
  }

  addCommandeTerm(commande) {
    let url = `https://super-truck.firebaseio.com/commande/termine.json`;
    return this.http.post < Product > (url, commande, {
      responseType: 'json'
    }).pipe(
      catchError(this.handleError < Product > (' addCommandePrep'))
    );
  }


  /** DELETE: remove a command */
  remove(key): Observable < any[] > {
    let url = 'https://super-truck.firebaseio.com/commande/attente/' + key + '.json';
    return this.http.delete < any[] > (url)
      .pipe(
        tap(data => data),
        catchError(this.handleError < any[] > ('remove'))
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
