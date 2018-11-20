import { Component, OnInit } from '@angular/core';
import { RewardService } from '../_services/reward.service';
import { Reward } from '../_models/reward';

@Component({
  selector: 'app-claimrewards',
  templateUrl: './claimrewards.component.html',
  styleUrls: ['./claimrewards.component.css']
})
export class ClaimrewardsComponent implements OnInit {
  rewards: Reward[];

  constructor(public rewardService: RewardService) { }

  ngOnInit() {
    this.rewardService.getAll().subscribe(rewards => this.rewards = rewards);
  }
}
