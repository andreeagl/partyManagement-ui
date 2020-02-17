import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { LoginComponent } from './components/login/login.component';
const routes: Routes = [
  {
    path: 'login', 
    component: LoginComponent
  },

  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'createUser',
    component: CreateUserComponent
  },
  {
    path: 'logout', 
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
