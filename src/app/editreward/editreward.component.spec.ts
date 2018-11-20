import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditrewardComponent } from './editreward.component';

describe('EditrewardComponent', () => {
  let component: EditrewardComponent;
  let fixture: ComponentFixture<EditrewardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditrewardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditrewardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
