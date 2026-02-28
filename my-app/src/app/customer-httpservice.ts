import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ICustomerGroup } from './classes/icustomer';
@Injectable({
  providedIn: 'root',
})
export class CustomerHttpService {
  private _url: string = "assets/dataset/customer.json";

  constructor(private _http: HttpClient) { }

  getCustomers(): Observable<ICustomerGroup[]> {
    return this._http.get<ICustomerGroup[]>(this._url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    return throwError(() => new Error('Error fetching customer data'));
  }
}
