import { Component, OnInit } from '@angular/core';
import { Reward } from '../_models/reward';
import { RewardService } from '../_services/reward.service';

@Component({
  selector: 'app-managerewards',
  templateUrl: './managerewards.component.html',
  styleUrls: ['./managerewards.component.css']
})
export class ManagerewardsComponent implements OnInit {
  rewards: Reward[];

  constructor(private rewardService: RewardService) { }

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

  deleteReward(reward: Reward) {
    this.rewardService.delete(reward.id).subscribe(() => {
      // Verwijder deze reward meteen uit de array
      // Refresh is nu niet meer nodig
      this.rewards.splice(this.rewards.findIndex(object => object === reward), 1);
    });
  }
}
