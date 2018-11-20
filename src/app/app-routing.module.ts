// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { LoginComponent } from './login/login.component';
import { ClaimrewardsComponent } from './claimrewards/claimrewards.component';
import { GetrewardsComponent } from './getrewards/getrewards.component';
import { ManagerewardsComponent } from './managerewards/managerewards.component';
import { ManagetasksComponent } from './managetasks/managetasks.component';
import { EdittaskComponent } from './edittask/edittask.component';
import { EditrewardComponent } from './editreward/editreward.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminComponent } from './admin/admin.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { AddrewardComponent } from './addreward/addreward.component';

// Guards
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'claimrewards', component: ClaimrewardsComponent, canActivate: [AuthGuard] },
  { path: 'getrewards', component: GetrewardsComponent, canActivate: [AuthGuard] },
  { path: 'managetasks', component: ManagetasksComponent, canActivate: [AuthGuard] },
  { path: 'managerewards', component: ManagerewardsComponent, canActivate: [AuthGuard] },
  { path: 'edittask', component: EdittaskComponent, canActivate: [AuthGuard] },
  { path: 'editreward/:id', component: EditrewardComponent, canActivate: [AuthGuard] },
  { path: 'homepage', component: HomepageComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'addtask', component: AddtaskComponent, canActivate: [AuthGuard] },
  { path: 'addreward', component: AddrewardComponent, canActivate: [AuthGuard] },

  // otherwise redirect to home
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
