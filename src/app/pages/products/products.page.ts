import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { Products } from '../../models/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  HOME_CONSTANTS: any;
  marqueeText = '';

  cart = [];
  products: Products;
  //items: any = [];
 
  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };

  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit() {

    this.cartService.getProducts().subscribe((data) => {
         this.products = data;
         });

    //this.items = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
  }
 
  addToCart(product) {
    this.cartService.addProduct(product);
  }
 
  openCart() {
    this.router.navigate(['/menu/cart']);
  }
  

}
