import { TestBed } from '@angular/core/testing';

import { ConfiguracoesGeraisService } from './configuracoes-gerais.service';

describe('ConfiguracoesGeraisService', () => {
  let service: ConfiguracoesGeraisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfiguracoesGeraisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
