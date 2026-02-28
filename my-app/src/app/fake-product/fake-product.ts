import { Component } from '@angular/core';
import { FakeproductService } from '../myservices/fakeproduct-service';
import { IFakeProduct } from '../classes/ifakeproduct';

@Component({
  selector: 'app-fake-product',
  standalone: false,
  templateUrl: './fake-product.html',
  styleUrl: './fake-product.css',
})
export class FakeProduct {
  data:IFakeProduct[] = [];
  errMessage:string=''
  constructor(private _service:FakeproductService){
    _service.getFakeProductData().subscribe({
      next:(data)=>{ this.data=data},
      error:(err)=>{
        this.errMessage=err?.message ?? String(err)
      }
    })
  }
}
