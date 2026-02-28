import { Component } from '@angular/core';
import { Exercise50APIservice } from '../../myservices/exercise50-apiservice';
import { Ex50 } from '../../classes/iex50';

@Component({
  selector: 'app-ex50-new',
  standalone: false,
  templateUrl: './ex50-new.html',
  styleUrl: './ex50-new.css',
})
export class Ex50New {
  book=new Ex50();
  books:any
  errMessage:string=''
  constructor(private _service: Exercise50APIservice){
    this._service.getBooks().subscribe({
      next:(data)=>{this.books=data},
      error:(err)=>{this.errMessage=err}
    })  
  }
  postBook()
  {
    this._service.postBook(this.book).subscribe({
      next:(data)=>{this.books=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}