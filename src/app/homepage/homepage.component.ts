import { Component, OnInit } from '@angular/core';
import {AuthenticationService, OrderService, TaskService} from '../_services';
import {Router} from '@angular/router';
import {FinishedTask, Order, Task, User} from '../_models';
import {FinishedTaskService} from '../_services/finished-task.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
    currentuser: User
    finishedtasks: FinishedTask[];
    orders: Order[];



    constructor(private authenticationService: AuthenticationService,
                private finishedtaskService: FinishedTaskService ,
                private orderService: OrderService,
                private router: Router) { }

  ngOnInit() {
      this.authenticationService.userData$.subscribe(user => {
          this.currentuser = user;
      });

      this.finishedtaskService.getAll().subscribe(finishedtasks => {
          this.finishedtasks = finishedtasks;
      });

      this.orderService.getAll().subscribe(orders => {
          this.orders = orders;
      });
  }
}
