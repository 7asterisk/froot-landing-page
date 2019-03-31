import { Component, OnInit } from '@angular/core';
import { inEffect } from '../animations';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  animations: [ inEffect ]
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
