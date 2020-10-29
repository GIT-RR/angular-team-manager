import { TestBed } from '@angular/core/testing';

import { BackendInterceptor } from './backend.interceptor';

describe('BackendInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [BackendInterceptor],
    })
  );
});
