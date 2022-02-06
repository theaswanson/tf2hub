import { TestBed } from '@angular/core/testing';

import { TrashcanService } from './trashcan.service';

describe('TrashcanService', () => {
  let service: TrashcanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrashcanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
