import { Component, OnInit } from '@angular/core';
import { RewardService } from '../_services/reward.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Reward } from '../_models/reward';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editreward',
  templateUrl: './editreward.component.html',
  styleUrls: ['./editreward.component.css']
})
export class EditrewardComponent implements OnInit {
  reward: Reward;

  editRewardForm = new FormGroup({
    name: new FormControl('', Validators.required),
    points: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
    image: new FormControl('')
  });

  constructor(private rewardService: RewardService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.rewardService.get(id).subscribe(reward => {
      this.reward = reward;

      this.editRewardForm.setValue({
        name: this.reward.name,
        points: this.reward.points,
        image: this.reward.imageUrl
      });
    });
  }

  onSubmit() {
    this.rewardService.update(<Reward>{
      id: this.reward.id,
      name: this.editRewardForm.get('name').value,
      points: this.editRewardForm.get('points').value,
      imageUrl: this.editRewardForm.get('image').value
    }).subscribe(() => this.router.navigate(['/managerewards']));
  }

  // Getters voor inputvalidatie
  get name() { return this.editRewardForm.get('name'); }
  get points() { return this.editRewardForm.get('points'); }
  get image() { return this.editRewardForm.get('image'); }
}
