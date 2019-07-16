import { Component, OnInit } from '@angular/core';
import { HOME_CONSTANTS } from '../../home/constants/home.constant';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss'],
})
export class AboutusPage implements OnInit {

  HOME_CONSTANTS: any;
  marqueeText = '';

  constructor() { }

  ngOnInit() {

    this.HOME_CONSTANTS = HOME_CONSTANTS,
    this.marqueeText = this.HOME_CONSTANTS.MARQUEE_TEXT

  }

}
