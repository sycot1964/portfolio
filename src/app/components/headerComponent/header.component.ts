import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html'
})
export class headerComponent {
  title = 'CX Project';

  constructor(private router: Router){

  }

  onClickGoHome() {
    // this.router.navigateByUrl(this.profileInfo.linkPath);
    this.router.navigate(['mainPage']);

  }
}
