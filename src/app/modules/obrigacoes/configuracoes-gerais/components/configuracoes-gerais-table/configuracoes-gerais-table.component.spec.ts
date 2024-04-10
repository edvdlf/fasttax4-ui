import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracoesGeraisTableComponent } from './configuracoes-gerais-table.component';

describe('ConfiguracoesGeraisTableComponent', () => {
  let component: ConfiguracoesGeraisTableComponent;
  let fixture: ComponentFixture<ConfiguracoesGeraisTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfiguracoesGeraisTableComponent]
    });
    fixture = TestBed.createComponent(ConfiguracoesGeraisTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
