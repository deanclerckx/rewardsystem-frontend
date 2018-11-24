import { Component, OnInit } from '@angular/core';
import { FinishedTask } from '../_models';
import { FinishedTaskService } from '../_services/finished-task.service';
import { UserService } from '../_services';

@Component({
  selector: 'app-managefinishedtasks',
  templateUrl: './managefinishedtasks.component.html',
  styles: []
})
export class ManagefinishedtasksComponent implements OnInit {
  unApprovedFinishedTasks: FinishedTask[] = [];
  users = [];

  constructor(private finishedTaskService: FinishedTaskService, private userService: UserService) { }

  ngOnInit() {
    this.finishedTaskService.getAll().subscribe(finishedTasks => {
      for (const finishedTask of finishedTasks) {
        // Als de property isApproved niet bestaat, betekend dit dat deze nog gekeurd moet worden.
        // Een ongekeurde finishedTask wordt in de tabel met unApprovedFinishedTasks getoond.
        if (finishedTask.isApproved === undefined) {
          //user in task zetten
          this.userService.getById(finishedTask.userKey).subscribe(user => {
            finishedTask.userName = user.firstName + ' ' + user.lastName;
          });

          this.unApprovedFinishedTasks.push(finishedTask);
        }
      }

      // Sorteer op datum
      this.unApprovedFinishedTasks.sort((a, b) => {
        return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
      });
    });
  }
}
