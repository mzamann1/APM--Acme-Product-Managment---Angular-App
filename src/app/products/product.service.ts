import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, pipe, throwError } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = '/api/products/products.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {

    return this.http.get<IProduct[]>(this.url).pipe(
      tap(data => console.log('ALL' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getProductsById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(this.url).pipe(
      tap(data => console.log('ALL' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An Error Occured : ${err.error.message}`;
    } else {
      errorMessage = `Server Returned Code : ${err.status}, error message is ${err.message} `;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
