import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  email = 'cx.info@gmail.com';
  msg = '諦めないとできる。あなたならできる。';

  constructor(private router: Router){
  }

}
