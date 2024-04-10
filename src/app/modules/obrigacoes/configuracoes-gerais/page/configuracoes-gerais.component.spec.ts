import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracoesGeraisComponent } from './configuracoes-gerais.component';

describe('ConfiguracoesGeraisComponent', () => {
  let component: ConfiguracoesGeraisComponent;
  let fixture: ComponentFixture<ConfiguracoesGeraisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfiguracoesGeraisComponent]
    });
    fixture = TestBed.createComponent(ConfiguracoesGeraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
