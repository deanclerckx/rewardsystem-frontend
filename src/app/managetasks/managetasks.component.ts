import { Component, OnInit } from '@angular/core';
import { Task } from '../_models';
import { TaskService } from '../_services/task.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-managetasks',
  templateUrl: './managetasks.component.html',
  styles: []
})
export class ManagetasksComponent implements OnInit {
  tasks: Task[];

  constructor(private taskService: TaskService,
    private modalService: NgbModal) { }

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

  onClickDeleteTask(content, task: Task) {
    this.modalService.open(content, { centered: true }).result.then(
      // Indien confirmed, delete task
      () => this.deleteTask(task),
      // Indien dismissed, doe niets
      () => {}
    );
  }

  private deleteTask(task: Task) {
    this.taskService.delete(task.id).subscribe(() => {
      // Verwijder deze task meteen uit de array
      // Refresh is nu niet meer nodig
      this.tasks.splice(this.tasks.findIndex(object => object === task), 1);
    });
  }
}
