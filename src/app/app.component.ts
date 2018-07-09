import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'app';
  dropdownlist: string = 'none';

  constructor(private router: Router) {}

  toggleMenu($event) {
    this.dropdownlist = ($event.type == 'mouseover') ? 'block' : 'none';
  }

  gotoLogin() {
    const link = '/login';
    this.router.navigateByUrl(link);
  }

  gotoSearch() {
    const link = '/search';
    this.router.navigateByUrl(link);
  }
}
