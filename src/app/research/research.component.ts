import { Component, OnInit } from '@angular/core';
import { inEffect } from '../animations';
@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css'],
  animations: [ inEffect]
})
export class ResearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
