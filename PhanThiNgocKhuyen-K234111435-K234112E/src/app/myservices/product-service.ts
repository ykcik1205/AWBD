import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  api="http://localhost:3005/products";

  constructor(private http:HttpClient){}

  getProducts(){
    return this.http.get<any[]>(this.api);
  }

}
