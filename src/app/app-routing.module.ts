import { AppMainPageComponent } from './pages/mainpage/main-page.component';
import { AppWroksPageComponent } from './pages/workspage/works-page.component';
import { AppProfilePageComponent } from './pages/profilepage/profile-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'mainPage', component:AppMainPageComponent},
  { path: 'anProfilePage', component:AppProfilePageComponent},
  { path: 'parkProfilePage', component:AppProfilePageComponent},
  { path: 'yuProfilePage', component:AppProfilePageComponent},
  { path: 'worksPage', component:AppWroksPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
