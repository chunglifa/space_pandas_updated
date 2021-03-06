import { ProductService } from './../../product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  subscription: Subscription;
  cart: any;
  total: any;
  show: any;
  panda: any;

  constructor(
    private _productService: ProductService
  ) { 
    this._productService.cart.subscribe((cart) => {
      this.cart = cart;
    }, (err) => {}, () => {});
  }

  ngOnInit() {
    this.show = false;
    this.panda = true;

  }
  showDiv() {
    this.show = true;
    this.panda = false;
  }

}
