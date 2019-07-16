import { Component, OnInit } from '@angular/core';
import { HOME_CONSTANTS } from '../../home/constants/home.constant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.page.html',
  styleUrls: ['./contactus.page.scss'],
})
export class ContactusPage implements OnInit {

  HOME_CONSTANTS: any;
  marqueeText = '';

  constructor(private router: Router) { }

  ngOnInit() {

    this.HOME_CONSTANTS = HOME_CONSTANTS,
    this.marqueeText = this.HOME_CONSTANTS.MARQUEE_TEXT

  }

  submit(){
    this.router.navigate(['/menu/products']);
  }

}
