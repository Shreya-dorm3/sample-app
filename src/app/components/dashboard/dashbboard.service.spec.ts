import { TestBed } from '@angular/core/testing';

import { DashbboardService } from './dashbboard.service';

describe('DashbboardService', () => {
  let service: DashbboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashbboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
