import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracoesGeraisFormComponent } from './configuracoes-gerais-form.component';

describe('ConfiguracoesGeraisFormComponent', () => {
  let component: ConfiguracoesGeraisFormComponent;
  let fixture: ComponentFixture<ConfiguracoesGeraisFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfiguracoesGeraisFormComponent]
    });
    fixture = TestBed.createComponent(ConfiguracoesGeraisFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
