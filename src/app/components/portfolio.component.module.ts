import { FooterComponent } from './footerComponent/footer.component';
import { WorkListComponent } from './workList/worklist.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { headerComponent } from './headerComponent/header.component';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from "@angular/common";

import { ProfileComponent } from './profile/profile.component';
// RECOMMENDED
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule.forRoot(),
  ]
  , declarations: [
    ProfileComponent,
    headerComponent,
    FooterComponent,
    SideNavComponent,
    WorkListComponent, 
  ]
  , exports: [
    ProfileComponent,
    headerComponent,
    FooterComponent,
    SideNavComponent, 
    WorkListComponent, 
  ]
  , providers: []
})
export class PortfolioComponentModule {
}
