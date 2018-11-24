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

      for (let order of orders) {
        //user in task zetten
        this.userService.getById(order.userKey).subscribe(user => {
          order.userName = user.firstName + ' ' + user.lastName;
        });
      }

      this.orders = orders;

      // Sorteer op isProcessed
      this.orders.sort((a, b) => {
        if(a.isProcessed){
          return 1;
        }else{
          return -1;
        }
      })
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
