import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RewardService } from '../_services/reward.service';
import { Reward } from '../_models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addreward',
  templateUrl: './addreward.component.html',
  styleUrls: ['./addreward.component.css']
})
export class AddrewardComponent implements OnInit {
  addRewardForm = new FormGroup({
    name: new FormControl('', Validators.required),
    points: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')])
  });

  constructor(private rewardService: RewardService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.rewardService.insert(<Reward>{
      name: this.addRewardForm.get('name').value,
      points: this.addRewardForm.get('points').value
    }).subscribe(() => this.router.navigate(['/managerewards']));
  }

  // Getters voor inputvalidatie
  get name() { return this.addRewardForm.get('name'); }
  get points() { return this.addRewardForm.get('points'); }
}
