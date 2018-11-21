import { Component, OnInit } from '@angular/core';
import { Task } from '../_models';
import { TaskService } from '../_services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managetasks',
  templateUrl: './managetasks.component.html',
  styleUrls: ['./managetasks.component.css']
})
export class ManagetasksComponent implements OnInit {
  tasks: Task[];

  constructor(private taskService: TaskService, private router: Router) { }

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

  deleteTask(task: Task) {
    this.taskService.delete(task.id).subscribe(() => {
      // Verwijder deze task meteen uit de array
      // Refresh is nu niet meer nodig
      this.tasks.splice(this.tasks.findIndex(object => object === task), 1);
    });
  }
}
