import { Component, OnInit } from '@angular/core';
import {AuthenticationService, TaskService, UserService} from '../_services';
import { Router } from '@angular/router';
import {User} from '../_models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  currentuser: User;
  isCollapsed = true;
  hasUser = false;
  isAdmin = false;

  constructor(private authenticationService: AuthenticationService,
    private router: Router) { }


  ngOnInit() {
    this.authenticationService.userData$.subscribe(user => {
      if (user != null) {
        this.currentuser = user;
        this.hasUser = true;

        if (user.roles.includes('ADMIN')) {
          this.isAdmin = true;
        }else{
          this.isAdmin = false;
        }
      }else{
        this.hasUser = false;
      }
    });
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
