import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customerdetail',
  standalone: false,
  templateUrl: './customerdetail.html',
  styleUrl: './customerdetail.css',
})
export class Customerdetail {
  customers=[
    {"id":"c1","name":"Vicky","gender":"female","image":"Myself.jpg"},
    {"id":"c2","name":"Putin","gender":"male","image":"Putin.jpg"},
    {"id":"c3","name":"Obama","gender":"male","image":"Obama.jpg"},
    {"id":"c4","name":"Eun","gender":"male","image":"Eun.jpg"},
    {"id":"c5","name":"Hatake","gender":"male","image":"Himself.jpg"}
  ];
  selected_customer:any;
  constructor(private router: Router, private activeRouter: ActivatedRoute) 
  {
    this.activeRouter.paramMap.subscribe(
      (params) => {
        let id = params.get('id');
        if(id!=null) //lấy đc từ cái routing nào đó gửi qua
          {
            this.selected_customer = this.customers.find(c => c.id == id);
          // Fetch customer details using the id
          if (this.selected_customer) {
            this.selected_customer = this.selected_customer;
          }
        }
      });
  }
  go_back()
  {
    this.router.navigate(["list-customer"]);
  }
}
