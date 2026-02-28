import { Component } from '@angular/core';
import { Exercise50APIservice } from '../../myservices/exercise50-apiservice';

@Component({
  selector: 'app-ex50-delete',
  standalone: false,
  templateUrl: './ex50-delete.html',
  styleUrl: './ex50-delete.css',
})
export class Ex50Delete {
  books:any
  errMessage:string=''
  constructor(private _service: Exercise50APIservice){
    this._service.getBooks().subscribe({
      next:(data)=>{this.books=data},
      error:(err)=>{this.errMessage=err}
    })
  }
  deleteBook(NXBId:any)
  {
    this._service.deleteBook(NXBId).subscribe({
      next:(data)=>{this.books=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}
