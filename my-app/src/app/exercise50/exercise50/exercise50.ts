import { Component } from '@angular/core';
import { Exercise50APIservice } from '../../myservices/exercise50-apiservice';

@Component({
  selector: 'app-exercise50',
  standalone: false,
  templateUrl: './exercise50.html',
  styleUrl: './exercise50.css',
})
export class Exercise50 {
  books:any;
  errMessage:string=''
  constructor(private _service: Exercise50APIservice){
    this._service.getBooks().subscribe({
      next:(data)=>{this.books=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}