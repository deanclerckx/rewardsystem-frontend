import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FinishedTask } from '../_models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FinishedTaskService {
  readonly TASKS_PATH = '/finishedtasks/';

  constructor(private http: HttpClient) { }

  get(id: String): Observable<FinishedTask> {
    return this.http.get<FinishedTask>(environment.apiUrl + this.TASKS_PATH + id);
  }

  getAll(): Observable<FinishedTask[]> {
    return this.http.get<FinishedTask[]>(environment.apiUrl + this.TASKS_PATH);
  }

  insert(task: FinishedTask) {
    return this.http.post<FinishedTask>(environment.apiUrl + this.TASKS_PATH, task);
  }

  update(task: FinishedTask) {
    return this.http.put<FinishedTask>(environment.apiUrl + this.TASKS_PATH + task.id, task);
  }

  delete(id: String) {
    return this.http.delete(environment.apiUrl + this.TASKS_PATH + id);
  }
}
