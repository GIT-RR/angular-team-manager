import { TestBed } from '@angular/core/testing';

import { MemberService } from './member.service';

describe('HeroService', () => {
  let service: MemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberService);
  });
});
