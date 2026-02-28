import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IListCustomer } from '../classes/ilistcustomer';

@Injectable({
  providedIn: 'root',
})
export class CustomerHTTPservice {
  private _url: string = "assets/dataset/listcustomer.json";

  constructor(private _http: HttpClient) { }

  getCustomers(): Observable<IListCustomer[]> {
    return this._http.get<IListCustomer[]>(this._url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    return throwError(() => new Error('Error fetching customer data'));
  }
}
