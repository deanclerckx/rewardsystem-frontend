// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { LoginComponent } from './login/login.component';
import { ClaimrewardsComponent } from './claimrewards/claimrewards.component';
import { ClaimtasksComponent } from './claimtasks/claimtasks.component';
import { ManagerewardsComponent } from './managerewards/managerewards.component';
import { ManagetasksComponent } from './managetasks/managetasks.component';
import { EdittaskComponent } from './edittask/edittask.component';
import { EditrewardComponent } from './editreward/editreward.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminComponent } from './admin/admin.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { AddrewardComponent } from './addreward/addreward.component';
import { ClaimtaskComponent } from './claimtask/claimtask.component';

// Guards
import { AuthGuard } from './_guards/auth.guard';
import { RoleGuard } from './_guards/role.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'claimrewards', component: ClaimrewardsComponent, canActivate: [AuthGuard] },
  { path: 'claimtasks', component: ClaimtasksComponent, canActivate: [AuthGuard] },
  { path: 'managetasks', component: ManagetasksComponent, canActivate: [RoleGuard], data: {expectedRole: 'ADMIN'} },
  { path: 'managerewards', component: ManagerewardsComponent, canActivate: [RoleGuard], data: {expectedRole: 'ADMIN'} },
  { path: 'edittask/:id', component: EdittaskComponent, canActivate: [RoleGuard], data: {expectedRole: 'ADMIN'} },
  { path: 'editreward/:id', component: EditrewardComponent, canActivate: [RoleGuard], data: {expectedRole: 'ADMIN'} },
  { path: 'homepage', component: HomepageComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [RoleGuard], data: {expectedRole: 'ADMIN'}},
  { path: 'addtask', component: AddtaskComponent, canActivate: [RoleGuard], data: {expectedRole: 'ADMIN'} },
  { path: 'addreward', component: AddrewardComponent, canActivate: [RoleGuard], data: {expectedRole: 'ADMIN'} },
  { path: 'claimtask/:id', component: ClaimtaskComponent, canActivate: [AuthGuard] },

  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
