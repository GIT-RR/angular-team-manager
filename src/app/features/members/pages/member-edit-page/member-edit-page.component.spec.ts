import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberEditPageComponent } from './member-edit-page.component';

describe('MemberEditPageComponent', () => {
  let component: MemberEditPageComponent;
  let fixture: ComponentFixture<MemberEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
