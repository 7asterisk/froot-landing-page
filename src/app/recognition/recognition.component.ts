import { Component, OnInit } from '@angular/core';
import { inEffect } from '../animations';

@Component({
  selector: 'app-recognition',
  templateUrl: './recognition.component.html',
  styleUrls: ['./recognition.component.css'],
  animations: [ inEffect]
})
export class RecognitionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
