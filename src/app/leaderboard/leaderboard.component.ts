import { Component, OnInit } from '@angular/core';
import {UserService} from '../_services';
import {User} from '../_models';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
})
export class LeaderboardComponent implements OnInit {
  users: User[];

  constructor(
      private userService: UserService
  ) { }

  ngOnInit() {
      this.userService.getAll().subscribe(users => {
          this.users = users;

          // Sorteer op points
          this.users.sort((a, b) => {
              return a.points > b.points ? -1 : a.points < b.points ? 1 : 0;
          });
      });
  }

}
