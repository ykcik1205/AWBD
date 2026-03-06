import { ChangeDetectorRef, Component } from '@angular/core';
import { IFashion } from '../classes/ifashion';
import { ActivatedRoute } from '@angular/router';
import { FashionAPIService } from '../myservices/fashion-apiservice';

@Component({
  selector: 'app-fashion-edit',
  standalone: false,
  templateUrl: './fashion-edit.html',
  styleUrl: './fashion-edit.css',
})
export class FashionEdit {
  fashion=new IFashion();
  fashions:any = {}
  imageUrl: string = ''
  errMessage:string=''
  constructor(
    private _service: FashionAPIService, 
    private _route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params) => {
      if (params['id']) {
        this.searchFashion(params['id'])
      }
    })
  }
  searchFashion(_id:string)
  {
    this._service.getFashion(_id).subscribe({
      next:(data)=>{
        this.fashion=data
        // 🔥 Xử lý ảnh base64 từ Mongo
        if (this.fashion?.fashion_image) {
          this.imageUrl = 'data:image/jpeg;base64,' + this.fashion.fashion_image;
        }

        console.log('Fashion loaded:', this.fashion);
        console.log('Image URL:', this.imageUrl);
        this.cdr.markForCheck();
      },
      error: (err) => {
        this.errMessage = err?.message ?? String(err);
        console.log('Error:', this.errMessage);
        this.cdr.markForCheck();
      }
    })
  }
  putFashion()
  {
    this._service.putFashion(this.fashion).subscribe({
      next:(data)=>{this.fashions=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}
