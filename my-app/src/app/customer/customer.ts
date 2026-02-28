import { Component } from '@angular/core';
import { Customerservice } from '../customerservice';

@Component({
  selector: 'app-customer',
  standalone: false,
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})
export class Customer {
  customerinfo: any
  products: any
    constructor(cs:Customerservice){
      this.customerinfo=cs.getCustomerInfo();
      this.products=cs.getAllProducts();
    }
  
}