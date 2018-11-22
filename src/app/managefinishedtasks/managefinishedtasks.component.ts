import { Component, OnInit } from '@angular/core';
import { FinishedTask, User } from '../_models';
import { FinishedTaskService } from '../_services/finished-task.service';
import { UserService } from '../_services';

@Component({
  selector: 'app-managefinishedtasks',
  templateUrl: './managefinishedtasks.component.html',
  styles: []
})
export class ManagefinishedtasksComponent implements OnInit {
  unApprovedFinishedTasks: FinishedTask[] = [];

  constructor(private finishedTaskService: FinishedTaskService) { }

  ngOnInit() {
    this.finishedTaskService.getAll().subscribe(finishedTasks => {
      for (const finishedTask of finishedTasks) {
        // Als de property isApproved niet bestaat, betekend dit dat deze nog gekeurd moet worden.
        // Een ongekeurde finishedTask wordt in de tabel met unApprovedFinishedTasks getoond.
        if (finishedTask.isApproved === undefined) {
          this.unApprovedFinishedTasks.push(finishedTask);
        }
      }
    });
  }
}
