import { Component } from '@angular/core';
import { FashionAPIService } from '../myservices/fashion-apiservice';

@Component({
  selector: 'app-fashion',
  standalone: false,
  templateUrl: './fashion.html',
  styleUrl: './fashion.css',
})
export class Fashion {
  fashions:any;
  errMessage:string=''
  constructor(public _service: FashionAPIService){
    this._service.getFashions().subscribe({
      next:(data)=>{this.fashions=data},
      error:(err)=>{this.errMessage=err}
    })
  }
  // get_image(base64:string)
  // {
  //   if(base64==null)return ""
  //   let prefix="data:image/png;base64,"
  //   if(base64.startsWith(prefix))
  //     return base64
  //   return prefix + base64
  // }
}