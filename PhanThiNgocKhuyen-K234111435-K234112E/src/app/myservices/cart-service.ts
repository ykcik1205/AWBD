import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart:any[]=[];

  addToCart(product:any){

    this.cart.push(product);

  }

  getCart(){
    return this.cart;
  }

}
