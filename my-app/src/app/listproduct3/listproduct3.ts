import { Component } from '@angular/core';
import { ProductHttpservice } from '../product-httpservice';
import { IProduct } from '../classes/iproduct';

@Component({
  selector: 'app-listproduct3',
  standalone: false,
  templateUrl: './listproduct3.html',
  styleUrls: ['./listproduct3.css'],
})
export class Listproduct3 {
  products: IProduct[] = [];
  constructor(private pshttp:ProductHttpservice)
  {
    this.pshttp.get_all_products().subscribe({
      next: (data) => this.products = data,
      error: (err) => console.error('product load error', err)
    })
  }
}
