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

  constructor(private helperFunctions: HelperFunctions) { }

  NgOninit() {
  }
}
