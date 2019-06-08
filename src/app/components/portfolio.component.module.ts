import { ProfileWorksComponent } from './profileworksComponent/profile.works.component';
import { FooterComponent } from './footerComponent/footer.component';
import { WorkListComponent } from './workList/worklist.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { headerComponent } from './headerComponent/header.component';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from "@angular/common";

import { ProfileComponent } from './profile/profile.component';
// RECOMMENDED
import { CarouselModule, ModalModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
  ]
  , declarations: [
    ProfileComponent,
    headerComponent,
    FooterComponent,
    SideNavComponent,
    WorkListComponent,
    ProfileWorksComponent,
  ]
  , exports: [
    ProfileComponent,
    headerComponent,
    FooterComponent,
    SideNavComponent, 
    WorkListComponent,
    ProfileWorksComponent,
  ]
  , providers: []
})
export class PortfolioComponentModule {
}
