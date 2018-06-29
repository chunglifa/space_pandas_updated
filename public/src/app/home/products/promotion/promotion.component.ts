import { ProductService } from './../../product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {
  promo1: any;
  promo2: any;
  video1: any;

  constructor() { }

  ngOnInit() {
    this.promo1 = true;
    this.promo2 = false;
  }
  rightDiv() {
    this.promo1 = false;
    this.promo2 = true;
  }

  leftDiv() {
    this.promo1 = true;
    this.promo2 = false;
  }

}
