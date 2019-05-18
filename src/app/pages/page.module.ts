import { AppMainPageComponent } from './mainpage/main-page.component';
import { PortfolioComponentModule } from './../components/portfolio.component.module';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { TabsModule } from 'ngx-bootstrap/tabs';
import {AppProfilePageComponent} from "./profilepage/profile-page.component";
import {AppWroksPageComponent} from "./workspage/works-page.component"

@NgModule({
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    FormsModule,
    RouterModule,
    PortfolioComponentModule,
  ]
  , declarations: [
    AppMainPageComponent,
    AppProfilePageComponent,
    AppWroksPageComponent,
  ]
  , providers: []
})
export class PageModule {
}
