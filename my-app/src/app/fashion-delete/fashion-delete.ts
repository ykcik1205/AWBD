import { Component } from '@angular/core';
import { FashionAPIService } from '../myservices/fashion-apiservice';

@Component({
  selector: 'app-fashion-delete',
  standalone: false,
  templateUrl: './fashion-delete.html',
  styleUrl: './fashion-delete.css',
})
export class FashionDelete {
  fashions:any
  errMessage:string=''
  constructor(private _service: FashionAPIService){
  this._service.getFashions().subscribe({
    next:(data)=>{this.fashions=data},
    error:(err)=>{this.errMessage=err}
    })
  } 
  deleteFashion(_id:any)
  {
    this._service.deleteFashion(_id).subscribe({
    next:(data)=>{this.fashions=data},
    error:(err)=>{this.errMessage=err}
    })
  }
}
