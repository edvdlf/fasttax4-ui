import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissoesAcessoFormsComponent } from './permissoes-acesso-form.component';

describe('PermissoesAcessoFormsComponent', () => {
  let component: PermissoesAcessoFormsComponent;
  let fixture: ComponentFixture<PermissoesAcessoFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PermissoesAcessoFormsComponent]
    });
    fixture = TestBed.createComponent(PermissoesAcessoFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
