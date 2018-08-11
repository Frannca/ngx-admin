import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'src/app/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'sign-in',
    loadChildren: 'src/app/sign-in/sign-in.module#SignInModule'
  },
  {
    path: 'register',
    loadChildren: 'src/app/register/register.module#RegisterModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
