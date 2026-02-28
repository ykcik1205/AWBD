import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookAPIService } from '../myservices/book-apiservice';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.html',
  styleUrl: './book-details.css',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookDetails implements OnInit {
  book:any = {};
  errMessage:string=''

  constructor(
    private _service: BookAPIService,
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
  searchBook(bookId:string)
  {
    this._service.getBook(bookId).subscribe({
      next:(data)=>{
        this.book=data
        this.cdr.markForCheck();
        console.log('Book loaded:', this.book)
        console.log('Image URL:', 'http://localhost:3000/static/images/' + this.book.Image)
      },
      error:(err)=>{
        this.errMessage=err?.message ?? String(err)
        this.cdr.markForCheck();
        console.log('Error:', this.errMessage)
      }
    })
  }
}