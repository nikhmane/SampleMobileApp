import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CartPage } from './cart.page';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';

const routes: Routes = [
  {
    path: '',
    component: CartPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    FooterModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CartPage]
})
export class CartPageModule {}
