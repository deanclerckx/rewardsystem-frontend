import { Component, OnInit } from '@angular/core';
import { OrderService, UserService } from '../_services';
import { Order, User } from '../_models';

@Component({
  selector: 'app-manageorders',
  templateUrl: './manageorders.component.html',
  styles: []
})
export class ManageordersComponent implements OnInit {
  orders: Order[];
  users = [];

  constructor(private orderService: OrderService, private userService: UserService) { }

  ngOnInit() {
    this.orderService.getAll().subscribe(orders => {
      this.orders = orders;

      // User ophalen per order
      for (const order of this.orders) {
        this.userService.getById(order.userKey).subscribe(user => {
          this.users.push(user.firstName + ' ' + user.lastName);
        });
      }

      // Sorteer op datum
      // this.orders.sort((a, b) => {
      //   return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
      // });
    });
  }

  toggleProcessed(order: Order) {
    order.isProcessed = !order.isProcessed;

    this.orderService.update(<Order>{
      id: order.id,
      isProcessed: order.isProcessed
    }).subscribe();
  }
}
