import { Component, OnInit } from '@angular/core';
import { RewardService } from '../_services/reward.service';
import { Reward } from '../_models/reward';
import { OrderService } from '../_services/order.service';
import { User, Order } from '../_models';
import { UserService, AlertService } from '../_services';

@Component({
  selector: 'app-claimrewards',
  templateUrl: './claimrewards.component.html',
  styles: []
})
export class ClaimrewardsComponent implements OnInit {
  rewards: Reward[];
  reward: Reward;

  constructor(public rewardService: RewardService, private orderService: OrderService, 
    private userService: UserService, private alertService: AlertService) { }

  ngOnInit() {
    this.rewardService.getAll().subscribe(rewards => {
      this.rewards = rewards;

      // Sorteer alfabetisch
      this.rewards.sort((a, b) => {
        const nameA = a.points.toString();
        const nameB = b.points.toString();

        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }

        return 0;
      });
    });
  }

  orderReward(reward) {
    //user ophalen
    const user = JSON.parse(localStorage.getItem('currentUser'));

    //alleen bestellen als de user genoeg punten heeft
    if (user.points >= reward.points) {
      //order wegschrijven
      this.orderService.insert(<Order>{
        reward: {
          name: reward.name,
          points: reward.points
        },
        userKey: user._id
      }).subscribe();

      let points = user.points - reward.points;

      //punten van de user aftrekken
      this.userService.update(<User>{
        id: user._id,
        points: points
      }).subscribe();

      //succes message
      this.alertService.success('Order geplaatst!', true);

      //user updaten
      user.points = points;
      localStorage.setItem("currentUser", JSON.stringify(user));
      
      //refresh
      window.location.reload();
    }
    //anders error message
    else {
      console.log('test');
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      this.alertService.error("Niet genoeg points!");
    }
  }
}