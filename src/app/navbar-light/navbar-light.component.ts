import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-light',
  templateUrl: './navbar-light.component.html',
  styleUrls: ['./navbar-light.component.css']
})
export class NavbarLightComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  slideRoute() {
    if (this.router.url === '/Home' || this.router.url === '/') {
      this.router.navigateByUrl('/Research');
    }
    if (this.router.url === '/Research') {
      this.router.navigateByUrl('/Products');
    }
    if (this.router.url === '/Products') {
      this.router.navigateByUrl('/Traction');
    }
    if (this.router.url === '/Traction') {
      this.router.navigateByUrl('/Recognition');
    }
    if (this.router.url === '/Recognition') {
      this.router.navigateByUrl('/Discover');
    }
    if (this.router.url === '/Discover') {
      this.router.navigateByUrl('/');
    }
  }
}
