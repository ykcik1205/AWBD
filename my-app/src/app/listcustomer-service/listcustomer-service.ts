import { Component } from '@angular/core';
import { CustomerService } from '../myservices/customer-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listcustomer-service',
  standalone: false,
  templateUrl: './listcustomer-service.html',
  styleUrl: './listcustomer-service.css',
})
export class ListcustomerService {
  customers:any;
  constructor (private cs:CustomerService, private router: Router, private activeRouter: ActivatedRoute)
  {
    this.customers=cs.get_all_customers();
  }
  view_detail(id:any){
    this.router.navigate(["list-customer-service", id]);
  }
}
