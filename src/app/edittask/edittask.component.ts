import { Component, OnInit } from '@angular/core';
import { Task } from '../_models';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TaskService } from '../_services/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent implements OnInit {
  task: Task;

  editTaskForm = new FormGroup({
    name: new FormControl('', Validators.required),
    points: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')])
  });

  constructor(private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.taskService.get(id).subscribe(task => {
      this.task = task;

      this.editTaskForm.setValue({
        name: this.task.name,
        points: this.task.points
      });
    });
  }

  onSubmit() {
    this.taskService.update(<Task>{
      id: this.task.id,
      name: this.editTaskForm.get('name').value,
      points: this.editTaskForm.get('points').value
    }).subscribe(() => this.router.navigate(['/managetasks']));
  }

  // Getters voor inputvalidatie
  get name() { return this.editTaskForm.get('name'); }
  get points() { return this.editTaskForm.get('points'); }
}
