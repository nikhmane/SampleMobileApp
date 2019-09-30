import { Component, OnInit } from '@angular/core';
import { HOME_CONSTANTS } from '../../home/constants/home.constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  marqueeText = '';
  HOME_CONSTANTS: any;

  constructor() { }
  
  ngOnInit() { 

  this.HOME_CONSTANTS = HOME_CONSTANTS,
  this.marqueeText = this.HOME_CONSTANTS.MARQUEE_TEXT 

  }

}
