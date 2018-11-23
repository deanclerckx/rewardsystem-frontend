import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../_services/task.service';
import { Task } from '../_models';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styles: []
})
export class AddtaskComponent implements OnInit {
  addTaskForm = new FormGroup({
    name: new FormControl('', Validators.required),
    points: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')])
  });

  constructor(private taskService: TaskService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.taskService.insert(<Task>{
      name: this.addTaskForm.get('name').value,
      points: this.addTaskForm.get('points').value
    }).subscribe(() => this.router.navigate(['/managetasks']));
  }

  // Getters voor inputvalidatie
  get name() { return this.addTaskForm.get('name'); }
  get points() { return this.addTaskForm.get('points'); }
}
