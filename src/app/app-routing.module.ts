import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AuthGuard } from './_guards/auth.guard';


//Importeer components
import { LoginComponent } from './login/login.component';
import { ClaimrewardsComponent } from './claimrewards/claimrewards.component';
import { GetrewardsComponent} from './getrewards/getrewards.component';
import { ManagerewardsComponent } from './managerewards/managerewards.component';
import { ManagetasksComponent} from './managetasks/managetasks.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
    { path: 'claimrewards', component: ClaimrewardsComponent },
    { path: 'getrewards', component: GetrewardsComponent },
    { path: 'managetasks', component: ManagetasksComponent },
    { path: 'managerewards', component: ManagerewardsComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
