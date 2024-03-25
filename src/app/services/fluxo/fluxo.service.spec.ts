import { TestBed } from '@angular/core/testing';

import { FluxoService } from './fluxo.service';

describe('FluxosService', () => {
  let service: FluxoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FluxoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
