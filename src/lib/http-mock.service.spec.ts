import { TestBed } from '@angular/core/testing';

import { MockHttpService } from './http-mock.service';

describe('NgHttpMockService', () => {
  let service: MockHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
