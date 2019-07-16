import { Component, OnInit } from '@angular/core';
import { HOME_CONSTANTS } from './constants/home.constant';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  marqueeText: string = '';
  HOME_CONSTANTS: any;

  constructor() {}

  ngOnInit() {

    this.HOME_CONSTANTS = HOME_CONSTANTS,
    this.marqueeText = this.HOME_CONSTANTS.MARQUEE_TEXT
    
  }

}
