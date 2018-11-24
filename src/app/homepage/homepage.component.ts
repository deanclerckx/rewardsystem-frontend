import { Component, OnInit } from '@angular/core';
import {AuthenticationService, OrderService, TaskService} from '../_services';
import {Router} from '@angular/router';
import {FinishedTask, Order, Task, User} from '../_models';
import {FinishedTaskService} from '../_services/finished-task.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styles: []
})
export class HomepageComponent implements OnInit {
    currentUser: User;
    finishedTasks: FinishedTask[] = [];
    orders: Order[] = [];

    constructor(private authenticationService: AuthenticationService,
        private finishedtaskService: FinishedTaskService,
        private orderService: OrderService) { }

    ngOnInit() {
        this.authenticationService.userData$.subscribe(user => {
            this.currentUser = user;
        });

        this.finishedtaskService.getByUserId(this.currentUser.id).subscribe(finishedTasks => {
            this.finishedTasks = finishedTasks;

            // Sorteer op datum
            this.finishedTasks.sort((a, b) => {
                return a.date > b.date ? -1 : a.date < b.date ? 1 : 0;
            });
        });

        this.orderService.getByUserId(this.currentUser.id).subscribe(orders => {
            this.orders = orders;

            // Sorteer op datum
            this.orders.sort((a, b) => {
                return a.date > b.date ? -1 : a.date < b.date ? 1 : 0;
            });
        });
    }
}
