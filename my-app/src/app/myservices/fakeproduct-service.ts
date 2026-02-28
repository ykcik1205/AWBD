import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { IFakeProduct } from '../classes/ifakeproduct';

@Injectable({
  providedIn: 'root',
})
export class FakeproductService {
    private _url:string="/products"
    constructor(private _http: HttpClient) { }
    getFakeProductData():Observable<IFakeProduct[]>
    {
      const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
      const requestOptions:Object={
        headers:headers,
        responseType:"text"
    }
      return this._http.get<IFakeProduct[]>(this._url).pipe(
      retry(3),
      catchError(this.handleError))
    }
    handleError(error:HttpErrorResponse){
      return throwError(()=>new Error(error.message))
    }
}
