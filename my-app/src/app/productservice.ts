import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Productservice {
  products=[{"id":"p1","name":"Coca","quantity":"10","price":80},
            {"id":"p2","name":"Pepsi","quantity":"15","price":200},
            {"id":"p3","name":"Sting","quantity":"8","price":120},
            {"id":"p4","name":"7up","quantity":"6","price":90},
            {"id":"p5","name":"Mirinda","quantity":"3","price":110},
          ];
  getAllProducts() 
  {
    return this.products;
  }
}
