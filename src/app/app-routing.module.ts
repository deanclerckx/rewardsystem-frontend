import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AuthGuard } from './_guards/auth.guard';


//Importeer components
import { LoginComponent } from './login/login.component';
import { ClaimrewardsComponent } from './claimrewards/claimrewards.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
    { path: 'claimrewards', component: ClaimrewardsComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
