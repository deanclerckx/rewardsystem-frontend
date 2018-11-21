import { Component, OnInit } from '@angular/core';
import { Task } from '../_models';
import { TaskService } from '../_services/task.service';

@Component({
  selector: 'app-claimtasks',
  templateUrl: './claimtasks.component.html',
  styleUrls: ['./claimtasks.component.css']
})
export class ClaimtasksComponent implements OnInit {
  tasks: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getAll().subscribe(tasks => {
      this.tasks = tasks;

      // Sorteer alfabetisch
      this.tasks.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });
    });
  }
}
