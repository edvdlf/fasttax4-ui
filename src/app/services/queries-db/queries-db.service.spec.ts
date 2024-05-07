import { TestBed } from '@angular/core/testing';

import { QueriesDbService } from './queries-db.service';

describe('QueriesDbService', () => {
  let service: QueriesDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueriesDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
