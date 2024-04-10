import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecucoesComponent } from './execucoes.component';

describe('ExecucoesComponent', () => {
  let component: ExecucoesComponent;
  let fixture: ComponentFixture<ExecucoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExecucoesComponent]
    });
    fixture = TestBed.createComponent(ExecucoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
