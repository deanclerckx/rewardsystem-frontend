import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Order } from '../_models/order';

@Injectable()
export class OrderService {
  readonly ORDER_PATH = '/orders/';

  constructor(private http: HttpClient) { }

  get(id: String): Observable<Order> {
    return this.http.get<Order>(environment.apiUrl + this.ORDER_PATH + id);
  }

  getAll(): Observable<Order[]> {
    return this.http.get<Order[]>(environment.apiUrl + this.ORDER_PATH);
  }

  insert(order: Order) {
    return this.http.post<Order>(environment.apiUrl + this.ORDER_PATH, order);
  }

  update(order: Order) {
    return this.http.put<Order>(environment.apiUrl + this.ORDER_PATH + order.id, order);
  }

  delete(id: String) {
    return this.http.delete(environment.apiUrl + this.ORDER_PATH + id);
  }
 }
