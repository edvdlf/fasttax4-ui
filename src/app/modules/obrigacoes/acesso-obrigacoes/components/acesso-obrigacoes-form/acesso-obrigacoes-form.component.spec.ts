import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessoObrigacoesFormComponent } from './acesso-obrigacoes-form.component';

describe('AcessoObrigacoesFormComponent', () => {
  let component: AcessoObrigacoesFormComponent;
  let fixture: ComponentFixture<AcessoObrigacoesFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcessoObrigacoesFormComponent]
    });
    fixture = TestBed.createComponent(AcessoObrigacoesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
