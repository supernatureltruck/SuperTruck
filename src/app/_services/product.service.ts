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
import { Auth } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private auth:Auth) {}

  getProduct(): Observable < Product[] > {
    return this.http.get < Product[] > ('http://localhost:8080/api/products',{headers: this.auth.tokenHeader})
      .pipe(
        tap(data => data),
        catchError(this.handleError('getProduct', []))
      );
  }

  getProductByKey(key: string): Observable < Product[] > {
    return this.http.get < Product[] > ('http://localhost:8080/api/products/' + key,{headers: this.auth.tokenHeader})
      .pipe(
        tap(data => JSON.stringify(data)),
        catchError(this.handleError('getProductByKey', []))
      );
  }

  /** DELETE: remove a product */
  remove(key): Observable < Product[] > {
    let url = 'http://localhost:8080/api/products/' + key;
    return this.http.delete < Product[] > (url,{headers: this.auth.tokenHeader})
      .pipe(
        tap(data => data),
        catchError(this.handleError < Product[] > ('remove'))
      );
  }

  add(product: Product, categorie: number): Observable < Product > {
    let url = 'http://localhost:8080/api/products/'+ categorie;
    return this.http.post < Product > (url, product, {headers: this.auth.tokenHeader})
    .pipe(
      tap((product: Product) => console.log('plat added')),
      catchError(this.handleError < Product > ('add'))
    );
  }

  // PUT :  Edit a meal
  edit(product: Product, key: string, articleID: number): Observable < Product > {
    const url = 'http://localhost:8080/api/products/' + key + '/' + articleID;
    return this.http.put < Product > (url, product, {headers: this.auth.tokenHeader})
    .pipe(
      tap((product: Product) => console.log('plat edited')),
      catchError(this.handleError < Product > ('edit'))
    );
  }

  getCat(): Observable < Product[] > {
    return this.http.get < Product[] > ('http://localhost:8080/api/categories', {headers: this.auth.tokenHeader})
      .pipe(
        tap(data => data),
        catchError(this.handleError('getCat', []))
      );
  }

  addCat(product: Product): Observable < Product > {
    let url = `http://localhost:8080/api/categories`;
    return this.http.post < Product > (url, product, {headers: this.auth.tokenHeader})
    .pipe(
      tap((product: Product) => console.log('new Cat added')),
      catchError(this.handleError < Product > ('addCat'))
    );
  }

    /** DELETE: remove a product */
    removeCat(key): Observable < Product[] > {
      let url = `http://localhost:8080/api/categories/`+ key;
      return this.http.delete < Product[] > (url, {headers: this.auth.tokenHeader})
        .pipe(
          tap(data => data),
          catchError(this.handleError < Product[] > ('remove'))
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
