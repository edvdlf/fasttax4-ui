import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissoesAcessoTablesComponent } from './permissoes-acesso-table.component';

describe('PermissoesAcessoTablesComponent', () => {
  let component: PermissoesAcessoTablesComponent;
  let fixture: ComponentFixture<PermissoesAcessoTablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PermissoesAcessoTablesComponent]
    });
    fixture = TestBed.createComponent(PermissoesAcessoTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
