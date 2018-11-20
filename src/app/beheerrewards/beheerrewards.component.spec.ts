import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeheerrewardsComponent } from './beheerrewards.component';

describe('BeheerrewardsComponent', () => {
  let component: BeheerrewardsComponent;
  let fixture: ComponentFixture<BeheerrewardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeheerrewardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeheerrewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
