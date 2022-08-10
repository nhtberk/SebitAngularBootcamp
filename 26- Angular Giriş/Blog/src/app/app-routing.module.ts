import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
    MatCardModule]
})
export class AppRoutingModule { }
