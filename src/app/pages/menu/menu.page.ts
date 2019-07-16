import { Component, OnInit } from '@angular/core';

import { HOME_CONSTANTS } from '../../home/constants/home.constant';
import { MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  marqueeText: string = '';
  HOME_CONSTANTS: any;

  pages: any = [
    {
      title: 'Products Page',
      url: '/menu/products'
    },
    {
      title: 'About Us Page',
      url: '/menu/aboutus'
    },
    {
      title: 'Contact Us Page',
      url: '/menu/contactus'
    },
    {
      title: 'My Cart',
      url: '/menu/cart'
    }
  ];

  selectedPath = '';

  constructor(private menu: MenuController,private splashScreen: SplashScreen,private router: Router) {
    
    this.router.events.subscribe((event : RouterEvent) =>
    {
      this.selectedPath = event.url;
    });
  }

  ngOnInit() {

    this.HOME_CONSTANTS = HOME_CONSTANTS,
    this.marqueeText = this.HOME_CONSTANTS.MARQUEE_TEXT,
    this.splashScreen.show();
   
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

}
