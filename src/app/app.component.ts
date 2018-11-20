import { Component, OnInit } from '@angular/core';
import { User } from './_models';
import { HelperFunctions } from './_helpers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RewardSystem';

  user: User;
  hasUser = false;
  isAdmin = false;

  constructor(private helperFunctions: HelperFunctions){}

  NgOninit(){
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    if(this.user != null){
      this.hasUser = true;

      if(this.user.roles.includes('ADMIN')){
       this.isAdmin = true;
      }
    }

    console.log(this.hasUser);
    console.log(this.user);
    console.log(this.isAdmin);
  }
}
