import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerewardsComponent } from './managerewards.component';

describe('ManagerewardsComponent', () => {
  let component: ManagerewardsComponent;
  let fixture: ComponentFixture<ManagerewardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerewardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
