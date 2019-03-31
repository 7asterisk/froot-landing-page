import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from './animations';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent implements OnInit {
  title = 'landing-page';
  navTheme = 'app-navbar';
  navMenu = 'menu-light';

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
  });
  }

  constructor(public router: Router) {

  }
  public prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  changeNav() {
    if (this.navMenu === 'menu-dark') {
      this.navMenu = 'menu-light';
      this.navTheme = 'app-navbar';
    }
  }


  changeNavTODark() {
    this.navMenu = 'menu-dark';
    this.navTheme = 'app-navbar-dark';
  }

}
