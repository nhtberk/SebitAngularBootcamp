import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import { BlogDetailComponent } from './home/blog-detail/blog-detail.component';
import { BlogUpdateComponent } from './home/blog-update/blog-update.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  },
  {
    path: 'blog-detail/:id',
    component: BlogDetailComponent
  },
  {
    path: 'blog-update/:id',
    component: BlogUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
    MatCardModule]
})
export class AppRoutingModule { }
