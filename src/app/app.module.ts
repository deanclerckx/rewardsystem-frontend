import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthGuard } from './_guards/auth.guard';
import { RoleGuard } from './_guards/role.guard';
import { JwtInterceptor, ErrorInterceptor, HelperFunctions } from './_helpers';
import { AlertService, UserService, AuthenticationService, OrderService } from './_services';
import { AlertComponent } from './_directives/alert.component';

import { LoginComponent } from './login/login.component';
import { ClaimrewardsComponent } from './claimrewards/claimrewards.component';
import { ToekennenrewardsComponent } from './toekennenrewards/toekennenrewards.component';
import { KeeruitrewardsComponent } from './keeruitrewards/keeruitrewards.component';
import { ManagetasksComponent } from './managetasks/managetasks.component';
import { ManagerewardsComponent } from './managerewards/managerewards.component';
import { EdittaskComponent } from './edittask/edittask.component';
import { EditrewardComponent } from './editreward/editreward.component';
import {AdminComponent} from './admin/admin.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { AddrewardComponent } from './addreward/addreward.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomepageComponent,
    LoginComponent,
    ClaimrewardsComponent,
    ToekennenrewardsComponent,
    KeeruitrewardsComponent,
    ManagetasksComponent,
    ManagerewardsComponent,
    EdittaskComponent,
    EditrewardComponent,
    AdminComponent,
    AddtaskComponent,
    NavbarComponent,
    AddrewardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    AuthGuard,
    RoleGuard,
    AlertService,
    HelperFunctions,
    AuthenticationService,
    OrderService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
