import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeheeropdrachtenComponent } from './beheeropdrachten.component';

describe('BeheeropdrachtenComponent', () => {
  let component: BeheeropdrachtenComponent;
  let fixture: ComponentFixture<BeheeropdrachtenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeheeropdrachtenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeheeropdrachtenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
