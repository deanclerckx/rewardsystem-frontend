import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Reward } from '../_models/reward';

@Injectable({
  providedIn: 'root'
})
export class RewardService {
  readonly REWARDS_PATH = '/rewards/';

  constructor(private http: HttpClient) { }

  get(id: String): Observable<Reward> {
    return this.http.get<Reward>(environment.apiUrl + this.REWARDS_PATH + id);
  }

  getAll(): Observable<Reward[]> {
    return this.http.get<Reward[]>(environment.apiUrl + this.REWARDS_PATH);
  }

  update(reward: Reward) {
    return this.http.put<Reward>(environment.apiUrl + this.REWARDS_PATH + reward.id, reward);
  }

  delete(id: String) {
    return this.http.delete(environment.apiUrl + this.REWARDS_PATH + id);
  }
 }
