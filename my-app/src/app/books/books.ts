import { Component } from '@angular/core';
import { BookAPIService } from '../myservices/book-apiservice';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-books',
  standalone: false,
  templateUrl: './books.html',
  styleUrl: './books.css',
})
export class Books {
  books:any;
  errMessage:string=''
  constructor(private _service: BookAPIService, private route:Router, private ActiveRoute: ActivatedRoute){
    this._service.getBooks().subscribe({
      next:(data)=>{this.books=data},
      error:(err)=>{this.errMessage=err}
    })
  }
  request_delete(bookId:any)
  {
    if(confirm("Are you sure want to delete BookId=["+bookId+"]?"))
    {
      this.deleteBook(bookId);
    }
  }
  deleteBook(bookId:any)
  {
    this._service.deleteBook(bookId).subscribe({
    next:(data)=>{this.books=data},
    error:(err)=>{this.errMessage=err}
    })
  }
}