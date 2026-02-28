import { Component } from '@angular/core';
import { IFakeProduct } from '../classes/ifakeproduct';
import { FakeproductService } from '../myservices/fakeproduct-service';

@Component({
  selector: 'app-fake-product-ex27',
  standalone: false,
  templateUrl: './fake-product-ex27.html',
  styleUrl: './fake-product-ex27.css',
})
export class FakeProductEx27 {
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
