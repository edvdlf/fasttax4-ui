import { TestBed } from '@angular/core/testing';

import { PermissoesAcessoService } from './permissoes-acesso.service';

describe('PermissoesAcessoService', () => {
  let service: PermissoesAcessoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermissoesAcessoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
