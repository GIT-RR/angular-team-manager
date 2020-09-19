import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberAddPageComponent } from './member-add-page.component';

describe('MemberAddPageComponent', () => {
  let component: MemberAddPageComponent;
  let fixture: ComponentFixture<MemberAddPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberAddPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
