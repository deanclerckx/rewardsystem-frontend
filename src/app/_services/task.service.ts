import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../_models';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  readonly TASKS_PATH = '/tasks/';

  constructor(private http: HttpClient) { }

  get(id: String): Observable<Task> {
    return this.http.get<Task>(environment.apiUrl + this.TASKS_PATH + id);
  }

  getAll(): Observable<Task[]> {
    return this.http.get<Task[]>(environment.apiUrl + this.TASKS_PATH);
  }

  insert(task: Task) {
    return this.http.post<Task>(environment.apiUrl + this.TASKS_PATH, task);
  }

  update(task: Task) {
    return this.http.put<Task>(environment.apiUrl + this.TASKS_PATH + task.id, task);
  }

  delete(id: String) {
    return this.http.delete(environment.apiUrl + this.TASKS_PATH + id);
  }
}
