import { Component, OnInit } from '@angular/core';
import { HOME_CONSTANTS } from '../../home/constants/home.constant';
import { Router } from '@angular/router';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  HOME_CONSTANTS: any;
  marqueeText = '';

  cart = [];
  items = [];
 
  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };

  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit() {

    this.HOME_CONSTANTS = HOME_CONSTANTS,
    this.marqueeText = this.HOME_CONSTANTS.MARQUEE_TEXT

    this.items = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
  }
 
  addToCart(product) {
    this.cartService.addProduct(product);
  }
 
  openCart() {
    this.router.navigate(['/menu/cart']);
  }
  

}
