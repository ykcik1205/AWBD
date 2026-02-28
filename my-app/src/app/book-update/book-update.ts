import { ChangeDetectorRef, Component } from '@angular/core';
import { Book } from '../classes/ibook';
import { BookAPIService } from '../myservices/book-apiservice';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-update',
  standalone: false,
  templateUrl: './book-update.html',
  styleUrl: './book-update.css',
})
export class BookUpdate {
  book=new Book();
  books:any
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
  putBook()
  {
    this._service.putBook(this.book).subscribe({
      next:(data)=>{this.books=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}