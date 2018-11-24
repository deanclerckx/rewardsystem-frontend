import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services';
import { User } from '../_models';
import { LeaderboardUser } from '../_models/leaderboard-user';
import { FinishedTaskService } from '../_services/finished-task.service';

@Component({
    selector: 'app-leaderboard',
    templateUrl: './leaderboard.component.html',
})
export class LeaderboardComponent implements OnInit {
    leaderbordUsers: LeaderboardUser[] = [];
    today: Date = new Date();

    constructor(
        private userService: UserService, private finishedTaskService: FinishedTaskService
    ) { }

    ngOnInit() {
        //alle users ophalen
        this.userService.getAll().subscribe(users => {
            for (let user of users) {
                let leaderbordUser = new LeaderboardUser;
                //voor elke user de firstname en lastname in een nieuw object steken
                leaderbordUser.firstName = user.firstName;
                leaderbordUser.lastName = user.lastName;
                leaderbordUser.points = 0;

                //alle finished task ophalen
                this.finishedTaskService.getAll().subscribe(finishedTasks => {
                    for (let finishedTask of finishedTasks) {
                        let date = new Date(finishedTask.date);

                        //voor elke finished task bij de user die approved is en van hetzelfde jaar en maand is de punten optellen
                        if (finishedTask.isApproved && finishedTask.userKey == user.id && date.getFullYear() == this.today.getFullYear()
                            && date.getMonth() == this.today.getMonth()) {
                            leaderbordUser.points += finishedTask.task.points;
                        }
                    }

                    this.leaderbordUsers.push(leaderbordUser);
                });
            }

            // Sorteer op points
            this.leaderbordUsers.sort((a, b) => {
                return a.points > b.points ? -1 : a.points < b.points ? 1 : 0;
            });
        });
    }

}
