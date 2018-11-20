import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AuthGuard } from './_guards/auth.guard';


//Importeer components
import { LoginComponent } from './login/login.component';
import { ClaimrewardsComponent } from './claimrewards/claimrewards.component';
import { GetrewardsComponent} from './getrewards/getrewards.component';
import { ManagerewardsComponent } from './managerewards/managerewards.component';
import { ManagetasksComponent} from './managetasks/managetasks.component';
import { EdittaskComponent } from './edittask/edittask.component';
import {EditrewardComponent} from './editreward/editreward.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
    { path: 'claimrewards', component: ClaimrewardsComponent },
    { path: 'getrewards', component: GetrewardsComponent },
    { path: 'managetasks', component: ManagetasksComponent },
    { path: 'managerewards', component: ManagerewardsComponent },
    { path: 'edittask', component: EdittaskComponent },
    { path: 'editreward', component: EditrewardComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
