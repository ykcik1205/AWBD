import { Component, OnInit } from '@angular/core';
import { ICustomerGroup } from '../classes/icustomer';
import { CustomerHTTPservice } from '../myservices/customer-httpservice';

@Component({
  selector: 'app-exercise18',
  standalone: false,
  templateUrl: './exercise18.html',
  styleUrl: './exercise18.css',
})
export class Exercise18 implements OnInit {
  customers: any;
  errMessage: string = '';

  constructor(private service: CustomerHTTPservice) {}

  ngOnInit(): void {
    this.service.getCustomers().subscribe({
      next: (data) => {
        this.customers = data;
      },
      error: (err) => {
        this.errMessage = err;
      }
    });
  }
}