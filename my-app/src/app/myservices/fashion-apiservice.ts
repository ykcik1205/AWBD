import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Fashion } from '../fashion/fashion';
import { IFashion } from '../classes/ifashion';


@Injectable({
  providedIn: 'root',
})
export class FashionAPIService {
  constructor(private _http: HttpClient) { }
  getFashions():Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
  return this._http.get<any>("http://localhost:3002/fashions",requestOptions).pipe(
  map(res=>JSON.parse(res) as Array<IFashion>),
  retry(3),
  catchError(this.handleError))
  }
  handleError(error:HttpErrorResponse){
    return throwError(()=>new Error(error.message))
  }
  getFashion(_id:string):Observable<any>
    {
      const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
      const requestOptions:Object={
        headers:headers,
        responseType:"text"
      }
      return this._http.get<any>("http://localhost:3002/fashions/"+_id,requestOptions).pipe(
        map(res=>JSON.parse(res) as IFashion),
        retry(3),
        catchError(this.handleError))
    }
  postFashion(aFashion:any):Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.post<any>("http://localhost:3002/fashions",JSON.stringify(aFashion),requestOptions).pipe(
      map(res=>JSON.parse(res) as Array<IFashion>),
      retry(3),
      catchError(this.handleError))
    }
    putFashion(aFashion:any):Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.put<any>("http://localhost:3002/fashions/"+aFashion._id, aFashion,requestOptions).pipe(
      map(res=>JSON.parse(res) as Array<IFashion>),
      retry(3),
      catchError(this.handleError))
    }
    deleteFashion(_id:string):Observable<any>
    {
      const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
      const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.delete<any>("http://localhost:3002/fashions/"+_id,requestOptions).pipe(
      map(res=>JSON.parse(res) as Array<IFashion>),
      retry(3),
      catchError(this.handleError))
    }
  }