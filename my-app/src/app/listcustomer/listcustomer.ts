import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listcustomer',
  standalone: false,
  templateUrl: './listcustomer.html',
  styleUrl: './listcustomer.css',
})
export class Listcustomer {
  customers=[
    {"id":"c1","name":"Vicky","gender":"female","image":"Myself.jpg"},
    {"id":"c2","name":"Putin","gender":"male","image":"Putin.jpg"},
    {"id":"c3","name":"Obama","gender":"male","image":"Obama.jpg"},
    {"id":"c4","name":"Eun","gender":"male","image":"Eun.jpg"},
    {"id":"c5","name":"Hatake","gender":"male","image":"Himself.jpg"}
  ];
  constructor(private router: Router, private activeRouter: ActivatedRoute) { }
  view_detail(id:any){
    this.router.navigate(["list-customer", id]);
  }
}
