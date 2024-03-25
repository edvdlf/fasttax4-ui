import { TestBed } from '@angular/core/testing';

import { FluxoStepsService } from './fluxo-steps.service';

describe('FluxoStepsService', () => {
  let service: FluxoStepsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FluxoStepsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
