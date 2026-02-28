import { Component, OnInit } from '@angular/core';
import { IListCustomer } from '../classes/ilistcustomer';
import { CustomerHTTPservice } from '../myservices/customer-httpservice';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listcustomer-httpservice',
  standalone: false,
  templateUrl: './listcustomer-httpservice.html',
  styleUrl: './listcustomer-httpservice.css',
})
export class ListcustomerHTTPService implements OnInit {
  customers: IListCustomer[] = [];
  errMessage: string = '';
  loading = true;

  constructor(private service: CustomerHTTPservice, private router: Router, private activeRouter: ActivatedRoute) {}

  ngOnInit(): void {
    this.service.getCustomers().subscribe({
      next: (data) => {
        console.log('GET customers response:', data);
        this.customers = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('GET customers error:', err);
        this.errMessage = err?.message ?? String(err);
        this.loading = false;
      }
    });
  }
  view_detail(id:any){
    this.router.navigate(["list-customer-http-service", id]);
  }
}
