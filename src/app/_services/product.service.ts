import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../_class/product';
import { HttpClient } from '@angular/common/http';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProduct():Observable<Product[]>{
    return this.http.get<Product[]>('https://super-truck.firebaseio.com/product.json')
      .pipe(
        tap(data => data),
        catchError(this.handleError('getProduct',[]))
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
