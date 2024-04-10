import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessoObrigacoesTableComponent } from './acesso-obrigacoes-table.component';

describe('AcessoObrigacoesTableComponent', () => {
  let component: AcessoObrigacoesTableComponent;
  let fixture: ComponentFixture<AcessoObrigacoesTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcessoObrigacoesTableComponent]
    });
    fixture = TestBed.createComponent(AcessoObrigacoesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
