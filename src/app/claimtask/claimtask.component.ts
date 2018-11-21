import { Component, OnInit } from '@angular/core';
import { Task, FinishedTask } from '../_models';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TaskService } from '../_services/task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FinishedTaskService } from '../_services/finished-task.service';

@Component({
  selector: 'app-claimtask',
  templateUrl: './claimtask.component.html',
  styleUrls: ['./claimtask.component.css']
})
export class ClaimtaskComponent implements OnInit {
  task: Task;

  claimTaskForm = new FormGroup({
    name: new FormControl(''),
    points: new FormControl(''),
    explanation: new FormControl('', Validators.required)
  });

  constructor(private taskService: TaskService,
    private finishedTaskService: FinishedTaskService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.taskService.get(id).subscribe(task => {
      this.task = task;

      this.claimTaskForm.setValue({
        name: this.task.name,
        points: this.task.points,
        explanation: ''
      });
    });
  }

  onSubmit() {
    // Haal ingelogde gebruiker op
    const user = JSON.parse(localStorage.getItem('currentUser'));

    this.finishedTaskService.insert(<FinishedTask>{
      userKey: user._id,
      task: {
        name: this.task.name,
        points: this.task.points
      },
      explanation: this.claimTaskForm.get('explanation').value,
      isApproved: false
    }).subscribe(() => this.router.navigate(['/claimtasks']));
  }

  // Getters voor inputvalidatie
  get explanation() { return this.claimTaskForm.get('explanation'); }
}
