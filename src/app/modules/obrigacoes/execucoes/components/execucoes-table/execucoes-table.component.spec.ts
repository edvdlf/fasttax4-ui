import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecucoesTableComponent } from './execucoes-table.component';

describe('ExecucoesTableComponent', () => {
  let component: ExecucoesTableComponent;
  let fixture: ComponentFixture<ExecucoesTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExecucoesTableComponent]
    });
    fixture = TestBed.createComponent(ExecucoesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
