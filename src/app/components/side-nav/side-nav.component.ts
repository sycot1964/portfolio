import {Component} from '@angular/core';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html'
})
export class SideNavComponent {

  linkList = [
    {name: 'anProfilePage', link: 'anProfilePage'}
    , {name: 'parkProfilePage', link: 'parkProfilePage'}
    , {name: 'yuProfilePage', link: 'yuProfilePage'}
    , {name: 'worksPage', link: 'worksPage'}
    ];
}
