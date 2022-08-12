import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
const routes: Routes = [
  {
    path: 'posts/home',
    component: HomeComponent,
  },
  {
    path: "posts/create",
    component: CreateComponent
  },
  {
    path: "posts/edit/:id",
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
