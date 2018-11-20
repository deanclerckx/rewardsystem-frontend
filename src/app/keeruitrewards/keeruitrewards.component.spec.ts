import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeeruitrewardsComponent } from './keeruitrewards.component';

describe('KeeruitrewardsComponent', () => {
  let component: KeeruitrewardsComponent;
  let fixture: ComponentFixture<KeeruitrewardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeeruitrewardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeeruitrewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
