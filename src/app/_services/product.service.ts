import {
  Injectable
} from '@angular/core';
import {
  Observable
} from 'rxjs';
import {
  Product
} from '../_class/product';
import {
  HttpClient
} from '@angular/common/http';
import {
  tap,
  catchError,
  map
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getProduct(): Observable < Product[] > {
    return this.http.get < Product[] > ('https://super-truck.firebaseio.com/product.json')
      .pipe(
        tap(data => data),
        catchError(this.handleError('getProduct', []))
      );
  }

  getProductByKey(key: string): Observable < Product[] > {
    return this.http.get < Product[] > ('https://super-truck.firebaseio.com/product/' + key + '.json')
      .pipe(
        tap(data => JSON.stringify(data)),
        catchError(this.handleError('getProductByKey', []))
      );
  }

  /** DELETE: remove a product */
  remove(key): Observable < Product[] > {
    let url = 'https://super-truck.firebaseio.com/product/' + key + '.json';
    return this.http.delete < Product[] > (url)
      .pipe(
        tap(data => data),
        catchError(this.handleError < Product[] > ('remove'))
      );
  }

  add(product: Product): Observable < Product > {
    let url = `https://super-truck.firebaseio.com/product.json`;
    return this.http.post < Product > (url, product, {
      responseType: 'json'
    }).pipe(
      tap((product: Product) => console.log('new Plat added')),
      catchError(this.handleError < Product > ('add'))
    );
  }

  // PUT :  Edit a Game
  edit(product: Product, key: string): Observable < Product > {
    const url = `https://super-truck.firebaseio.com/product/` + key + '.json';
    return this.http.put < Product > (url, product, {
      responseType: 'json'
    }).pipe(
      tap((product: Product) => console.log('plat edited')),
      catchError(this.handleError < Product > ('edit'))
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
