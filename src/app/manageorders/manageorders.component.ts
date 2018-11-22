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
    this.orderService.getAll().subscribe(order => {
      this.orders = order;

      //user ohpalen per order
      for(let order of this.orders){
        this.userService.getById(order.userKey).subscribe(user => {
          console.log(user);
          this.users.push(user.firstName + ' ' + user.lastName);
        })
      }

      console.log(this.users);

      // Sorteer alfabetisch
      this.orders.sort((a, b) => {
        const nameA = a.reward.name.toUpperCase();
        const nameB = b.reward.name.toUpperCase();

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

  toggleProcessed(order: Order){
    order.isProcessed = !order.isProcessed;

    this.orderService.update(<Order>{
      id: order.id,
      isProcessed: order.isProcessed
    }).subscribe();
  }

}
