import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimrewardsComponent } from './claimrewards.component';

describe('ClaimrewardsComponent', () => {
  let component: ClaimrewardsComponent;
  let fixture: ComponentFixture<ClaimrewardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimrewardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimrewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
