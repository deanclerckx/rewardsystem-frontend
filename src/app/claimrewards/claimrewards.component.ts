import { Component, OnInit } from '@angular/core';
import { RewardService } from '../_services/reward.service';
import { Reward } from '../_models/reward';
import { OrderService } from '../_services/order.service';
import { User, Order } from '../_models';
import { UserService, AlertService, AuthenticationService } from '../_services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-claimrewards',
  templateUrl: './claimrewards.component.html',
  styles: []
})
export class ClaimrewardsComponent implements OnInit {
  rewards: Reward[];
  reward: Reward;

  constructor(public rewardService: RewardService, private orderService: OrderService, 
    private userService: UserService,
    private alertService: AlertService,
    private authenticationService: AuthenticationService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.rewardService.getAll().subscribe(rewards => {
      this.rewards = rewards;

      // Sorteer aflopend op punten
      this.rewards.sort((a, b) => {
        const pointsA = a.points;
        const pointsB = b.points;

        if (pointsA > pointsB) {
          return -1;
        }
        if (pointsA < pointsB) {
          return 1;
        }

        return 0;
      });
    });
  }

  onClickOrderReward(content, reward: Reward) {
    this.modalService.open(content, { centered: true }).result.then(
      // Indien confirmed, order reward
      () => this.orderReward(reward),
      // Indien dismissed, doe niets
      () => {}
    );
  }

  private orderReward(reward) {
    // User ophalen
    const user = JSON.parse(localStorage.getItem('currentUser'));

    // Alleen bestellen als de user genoeg punten heeft
    if (user.points >= reward.points) {
      // Order wegschrijven
      this.orderService.insert(<Order>{
        reward: {
          name: reward.name,
          points: reward.points
        },
        userKey: user._id
      }).subscribe();

      const points = user.points - reward.points;

      // Punten van de user aftrekken
      this.userService.update(<User>{
        id: user._id,
        points: points
      }).subscribe();

      // Succes message
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      this.alertService.success('Order placed.', true);

      // User updaten
      user.points = points;
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.authenticationService.setUserData(user);
    } else {
      // Anders error message
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      this.alertService.error('Not enough points.');
    }
  }
}