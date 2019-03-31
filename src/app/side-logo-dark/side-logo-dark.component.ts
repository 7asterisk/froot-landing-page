import { Component, OnInit } from '@angular/core';
import { inEffect } from '../animations';

@Component({
  selector: 'app-side-logo-dark',
  templateUrl: './side-logo-dark.component.html',
  styleUrls: ['./side-logo-dark.component.css'],
  animations: [ inEffect ]
})
export class SideLogoDarkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
