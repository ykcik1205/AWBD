import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Exercise50APIservice } from '../../myservices/exercise50-apiservice';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ex50-details',
  standalone: false,
  templateUrl: './ex50-details.html',
  styleUrl: './ex50-details.css',
})
export class Ex50Details implements OnInit {
  book:any = {};
  errMessage:string=''
  constructor(
    private _service: Exercise50APIservice, 
    private _route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnInit() {
    this._route.params.subscribe((params) => {
      if (params['id']) {
        this.searchBook(params['id'])
      }
    })
  }
  searchBook(NXBId:string)
  {
    this._service.getBook(NXBId).subscribe({
      next:(data)=>{
        this.book=data
        this.cdr.detectChanges()
        console.log('Book loaded:', this.book)
        console.log('Image URL:', 'http://localhost:3003/static/images/' + this.book.Image)
      },
      error:(err)=>{
        this.errMessage=err?.message ?? String(err)
        this.cdr.markForCheck();
        console.log('Error:', this.errMessage)
      }
    })
  }
}
