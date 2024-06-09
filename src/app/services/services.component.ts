import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html'
})
export class ServicesComponent {

  @Output() contactClick = new EventEmitter();

  constructor(private router: Router){}

  ngOnInit(): void {
    this.router.events.subscribe(x => {
      if (x instanceof NavigationEnd)
      {
        window.scrollTo(0, 0);
      }
    });
  }

  contactNavigation() {
    this.contactClick.emit('button was clicked to navigate to home');
    this.router.navigate(['/contact']);
  }

}
