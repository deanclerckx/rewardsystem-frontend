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
    this.rewardService.getAll().subscribe(rewards => {
      this.rewards = rewards;

      // Sorteer alfabetisch
      this.rewards.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

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
}