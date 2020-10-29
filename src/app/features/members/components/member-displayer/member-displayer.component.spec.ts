import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberDisplayerComponent } from './member-displayer.component';

describe('MemberDisplayerComponent', () => {
  let component: MemberDisplayerComponent;
  let fixture: ComponentFixture<MemberDisplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MemberDisplayerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
