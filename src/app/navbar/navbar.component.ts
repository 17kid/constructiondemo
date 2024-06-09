import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  @Output() navigationClick = new EventEmitter();

  constructor(private router: Router){}

  ngOnInit(): void {
    this.router.events.subscribe(x => {
      if (x instanceof NavigationEnd)
      {
        window.scrollTo(0, 0);
      }
    });
  }

  homeClick() {
    this.navigationClick.emit('button was clicked to navigate to home');
    this.router.navigate(['/landing-page']);
  }

  missionClick() {
    this.navigationClick.emit('button was clicked to navigate to home');
    this.router.navigate(['/mission']);
  }

  servicesClick() {
    this.navigationClick.emit('button was clicked to navigate to home');
    this.router.navigate(['/services']);
  }

  contactClick() {
    this.navigationClick.emit('button was clicked to navigate to home');
    this.router.navigate(['/contact']);
  }

}
