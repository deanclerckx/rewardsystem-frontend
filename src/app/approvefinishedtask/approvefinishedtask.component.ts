import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FinishedTask, User } from '../_models';
import { FinishedTaskService } from '../_services/finished-task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../_services';

@Component({
  selector: 'app-approvefinishedtask',
  templateUrl: './approvefinishedtask.component.html',
  styles: []
})
export class ApprovefinishedtaskComponent implements OnInit {
  finishedTask: FinishedTask;
  user;

  approveFinishedTaskForm = new FormGroup({
    user: new FormControl(''),
    name: new FormControl(''),
    points: new FormControl(''),
    explanation: new FormControl('')
  });


  constructor(private finishedTaskService: FinishedTaskService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.finishedTaskService.get(id).subscribe(finishedTask => {
      this.finishedTask = finishedTask;

      this.userService.getById(this.finishedTask.userKey).subscribe(user => {
        this.user = user;

        this.approveFinishedTaskForm.setValue({
          user: this.user.firstName + ' ' + this.user.lastName + ' (Points: ' + this.user.points + ')',
          name: this.finishedTask.task.name,
          points: this.finishedTask.task.points,
          explanation: this.finishedTask.explanation
        });
      });
    });
  }

  onApprove() {
    this.finishedTaskService.update(<FinishedTask>{
      id: this.finishedTask.id,
      isApproved: true
    }).subscribe(() => {
      this.userService.update(<User>{
        id: this.user.id,
        points: (this.user.points - this.finishedTask.task.points)
      }).subscribe((() => this.router.navigate(['/managefinishedtasks'])));
    });
  }

  onDisapprove() {
    this.finishedTaskService.update(<FinishedTask>{
      id: this.finishedTask.id,
      isApproved: false
    }).subscribe(() => this.router.navigate(['/managefinishedtasks']));
  }
}
