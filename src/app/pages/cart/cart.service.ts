import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private data = [
    {
      category: 'Dresses',
      expanded: true,
      productss: [
      { id: 0, name: 'Addyvero', price: '499', percentoff: '30', imagePath: '../../../assets/Dress1.jpeg' },
      { id: 1, name: 'JW Fashion', price: '599', percentoff: '30', imagePath: '../../../assets/Dress2.jpeg' },
      { id: 2, name: 'Sassfras', price: '399', percentoff: '30', imagePath: '../../../assets/Dress3.jpeg' }
    ],
      products: [
        { id: 0, name: 'Addyvero', price: '499', percentoff: '30', imagePath: '../../../assets/Dress1.jpeg' },
        { id: 1, name: 'JW Fashion', price: '599', percentoff: '30', imagePath: '../../../assets/Dress2.jpeg' },
        { id: 2, name: 'Sassfras', price: '399', percentoff: '30', imagePath: '../../../assets/Dress3.jpeg' },
        { id: 3, name: 'SoulFire', price: '799', percentoff: '30', imagePath: '../../../assets/Dress4.jpeg' }
      ]
    },
    {
      category: 'Kurtis & Tunics',
      products: [
        { id: 4, name: 'Kurti-1', price: '899' , percentoff: '20', imagePath: '../../../assets/Kurti1.jpeg'},
        { id: 5, name: 'Kurti-2', price: '699' , percentoff: '20', imagePath: '../../../assets/Kurti2.jpeg'},
        { id: 6, name: 'Kurti-3', price: '699', percentoff: '20', imagePath: '../../../assets/Kurti3.jpeg'}
      ]
    },
    {
      category: 'Footwear',
      products: [
        { id: 7, name: 'Footwear-1', price: '899', percentoff: '25', imagePath: '../../../assets/Footwear1.jpeg' },
        { id: 8, name: 'Footwear-2', price: '599', percentoff: '25', imagePath: '../../../assets/Footwear2.jpeg' },
        { id: 9, name: 'Footwear-3', price: '999', percentoff: '25', imagePath: '../../../assets/Footwear3.jpeg' }
      ]
    },
    {
      category: 'Sarees',
      products: [
        { id: 10, name: 'Saree-1', price: '499', percentoff: '30', imagePath: '../../../assets/Saree1.jpeg' },
        { id: 11, name: 'Saree-2', price: '599', percentoff: '30', imagePath: '../../../assets/Saree2.jpeg' },
        { id: 12, name: 'Saree-3', price: '399', percentoff: '30', imagePath: '../../../assets/Saree3.jpeg' },
        { id: 13, name: 'Saree-4', price: '799', percentoff: '30', imagePath: '../../../assets/Saree4.jpeg' }
      ]
    },
    {
      category: 'Salwar Suits',
      products: [
        { id: 14, name: 'Salwar-1', price: '499', percentoff: '20', imagePath: '../../../assets/Salwar1.jpeg' },
        { id: 15, name: 'Salwar-2', price: '599', percentoff: '20', imagePath: '../../../assets/Salwar2.jpeg' },
        { id: 16, name: 'Salwar-3', price: '399', percentoff: '20', imagePath: '../../../assets/Salwar3.jpeg' },
        { id: 17, name: 'Salwar-4', price: '799', percentoff: '20', imagePath: '../../../assets/Salwar4.jpeg' }
      ]
    },
    {
      category: 'Bags',
      products: [
        { id: 18, name: 'Baggit-1', price: '499', percentoff: '10', imagePath: '../../../assets/Bag1.jpeg' },
        { id: 19, name: 'H&M', price: '599', percentoff: '10', imagePath: '../../../assets/Bag2.jpeg' },
        { id: 20, name: 'Baggit-2', price: '399', percentoff: '10', imagePath: '../../../assets/Bag3.jpeg' },
        { id: 21, name: 'Esbeda', price: '799', percentoff: '10', imagePath: '../../../assets/Bag4.jpeg' }
      ]
    }
  ];
 
  private cart = [];
 
  constructor() { }
 
  getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
  addProduct(product) {
    this.cart.push(product);
  }

}
