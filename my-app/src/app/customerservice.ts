import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Customerservice {
  customerinfo = [{"head":"ID","name":"Customer 1"},
                  {"head":"Name","name":"Vicky"},
                  ]
  getCustomerInfo() {
    return this.customerinfo;
  }
  products=[{"id":"p1","name":"Coca","price":80},
            {"id":"p2","name":"Pepsi","price":200},
            {"id":"p3","name":"Sting","price":120},
            {"id":"p4","name":"7up","price":90},
            {"id":"p5","name":"Mirinda","price":110},
          ];
  getAllProducts() 
  {
    return this.products;
  }
}
