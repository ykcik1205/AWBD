import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  customers=[
    {"id":"c1","name":"Vicky","gender":"female","image":"Myself.jpg"},
    {"id":"c2","name":"Putin","gender":"male","image":"Putin.jpg"},
    {"id":"c3","name":"Obama","gender":"male","image":"Obama.jpg"},
    {"id":"c4","name":"Eun","gender":"male","image":"Eun.jpg"},
    {"id":"c5","name":"Hatake","gender":"male","image":"Himself.jpg"}
  ];
  constructor() {}
  public get_all_customers()
  {
    return this.customers;
  }
}
