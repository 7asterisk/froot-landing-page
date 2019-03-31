import { Component, OnInit } from '@angular/core';
import { inEffect } from '../animations';

@Component({
  selector: 'app-traction',
  templateUrl: './traction.component.html',
  styleUrls: ['./traction.component.css'],
  animations: [ inEffect]
})
export class TractionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
