import { TestBed } from '@angular/core/testing';

import { GestaoDocumentosService } from './gestao-documentos.service';

describe('GestaoDocumentosService', () => {
  let service: GestaoDocumentosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestaoDocumentosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
