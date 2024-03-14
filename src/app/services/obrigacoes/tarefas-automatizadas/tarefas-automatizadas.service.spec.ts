import { TestBed } from '@angular/core/testing';

import { TarefasAutomatizadasService } from './tarefas-automatizadas.service';

describe('TarefasAutomatizadasService', () => {
  let service: TarefasAutomatizadasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarefasAutomatizadasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
