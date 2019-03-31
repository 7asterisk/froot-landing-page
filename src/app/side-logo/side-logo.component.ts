import { Component, OnInit } from '@angular/core';
import { inEffect } from '../animations';
@Component({
  selector: 'app-side-logo',
  templateUrl: './side-logo.component.html',
  styleUrls: ['./side-logo.component.css'],
  animations: [
   inEffect
  ]
})
export class SideLogoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
