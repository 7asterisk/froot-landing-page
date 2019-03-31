import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { trigger, transition, query, style, stagger, animate } from '@angular/animations';
import { inEffect } from '../animations';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [ inEffect ]
})
export class HomePageComponent implements OnInit {

  today;
  timeInterval;
  i = 0;
  constructor() {
    setInterval(() => {
      this.today = new Date();
    }, 100);

    this.timeInterval = setInterval(() => {
      this.i++;
      if (this.i === 100) { this.stopInit(); }
    }, 50);
  }
  stopInit() {
    clearInterval(this.timeInterval);
  }

  ngOnInit() {
  }

}
