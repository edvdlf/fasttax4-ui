import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessoObrigacoesComponent } from './acesso-obrigacoes.component';

describe('AcessoObrigacoesComponent', () => {
  let component: AcessoObrigacoesComponent;
  let fixture: ComponentFixture<AcessoObrigacoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcessoObrigacoesComponent]
    });
    fixture = TestBed.createComponent(AcessoObrigacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
