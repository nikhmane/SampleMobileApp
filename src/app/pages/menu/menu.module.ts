import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { MenuPage } from './menu.page';


const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      {
        path: '',
        redirectTo: '/menu/products',
        pathMatch: 'full'
      },
      { 
        path: 'products', 
        loadChildren: '../products/products.module#ProductsPageModule'
      },
      { 
        path: 'aboutus', 
        loadChildren: '../aboutus/aboutus.module#AboutusPageModule' 
      },
      { 
        path: 'contactus', 
        loadChildren: '../contactus/contactus.module#ContactusPageModule' 
      },      
      { 
      path: 'cart',
      loadChildren: '../cart/cart.module#CartPageModule' 
      }
    ],
    
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
 