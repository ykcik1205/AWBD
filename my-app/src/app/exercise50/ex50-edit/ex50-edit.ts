import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ex50 } from '../../classes/iex50';
import { Exercise50APIservice } from '../../myservices/exercise50-apiservice';

@Component({
  selector: 'app-ex50-edit',
  standalone: false,
  templateUrl: './ex50-edit.html',
  styleUrl: './ex50-edit.css',
})
export class Ex50Edit {
  book=new Ex50();
  books:any = []
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
    this.loadAllBooks()
  }
  loadAllBooks() {
    this._service.getBooks().subscribe({
      next:(data)=>{
        this.books = data
        this.cdr.markForCheck();
      },
      error:(err)=>{
        this.errMessage = err?.message ?? String(err)
      }
    })
  }
  searchBook(NXBId:string)
  {
    this._service.getBook(NXBId).subscribe({
      next:(data)=>{
        this.book=data
        this.cdr.markForCheck();
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
  putBook() {
    this._service.putBook(this.book).subscribe({
      next:(data)=>{
        console.log('Update success:', data)
        this.book = data
        this.loadAllBooks()  // ✅ Reload bảng sau khi update
        this.cdr.markForCheck();
      },
      error:(err)=>{
        this.errMessage=err?.message ?? String(err)
        this.cdr.markForCheck();
      }
    })
  }
}
