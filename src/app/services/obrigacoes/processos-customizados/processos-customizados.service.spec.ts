import { TestBed } from '@angular/core/testing';

import { ProcessosService } from './processos-customizados.service';

describe('ProcessosService', () => {
  let service: ProcessosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
