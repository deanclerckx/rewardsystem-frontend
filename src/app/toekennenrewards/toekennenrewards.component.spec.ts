import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToekennenrewardsComponent } from './toekennenrewards.component';

describe('ToekennenrewardsComponent', () => {
  let component: ToekennenrewardsComponent;
  let fixture: ComponentFixture<ToekennenrewardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToekennenrewardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToekennenrewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
