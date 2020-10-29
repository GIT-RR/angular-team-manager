import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAuthLayoutComponent } from './not-auth-layout.component';

describe('NotAuthLayoutComponent', () => {
  let component: NotAuthLayoutComponent;
  let fixture: ComponentFixture<NotAuthLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotAuthLayoutComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotAuthLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
