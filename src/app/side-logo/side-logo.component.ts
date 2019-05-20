import {
  Component,
  OnInit
} from '@angular/core';
import {
  inEffect
} from '../animations';
@Component({
  selector: 'app-side-logo',
  templateUrl: './side-logo.component.html',
  styleUrls: ['./side-logo.component.css'],
  animations: [
    inEffect
  ]
})
export class SideLogoComponent implements OnInit {


  strArr = ['Daring ', 'Intuitive ', 'Cognitive ', 'Target-less '];
  str = '';
  i = 0;
  j = 0;
  inc = true;
  constructor() { }

  ngOnInit() {
    setInterval(() => {
      if (this.inc === true) {
        if (this.j === this.strArr[this.i].length) {
          this.inc = false;
        } else {
          this.str = this.str + this.strArr[this.i][this.j++];
        }
      } else {
        if (this.j === 0) {
          if (this.i === 3) {
            this.i = 0;
          } else {
            this.i++;
          }
          this.inc = true;
          this.str = '';
        } else {
          this.str = this.str.slice(0, this.j--);
        }
      }
    }, 300);
  }

}
