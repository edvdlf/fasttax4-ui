import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissoesAcessoComponent } from './permissoes-acesso.component';

describe('PermissoesAcessoComponent', () => {
  let component: PermissoesAcessoComponent;
  let fixture: ComponentFixture<PermissoesAcessoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PermissoesAcessoComponent]
    });
    fixture = TestBed.createComponent(PermissoesAcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
