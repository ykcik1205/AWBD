import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FashionAPIService } from '../myservices/fashion-apiservice';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fashion-details',
  standalone: false,
  templateUrl: './fashion-details.html',
  styleUrl: './fashion-details.css',
})
export class FashionDetails implements OnInit {
  fashion:any = {};
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
        if (this.fashion?.fashion_image?.data) {
          this.imageUrl = 'data:' + this.fashion.fashion_image.data;
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
}