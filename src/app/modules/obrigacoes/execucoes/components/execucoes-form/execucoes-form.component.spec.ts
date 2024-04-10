import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecucoesFormComponent } from './execucoes-form.component';

describe('ExecucoesFormComponent', () => {
  let component: ExecucoesFormComponent;
  let fixture: ComponentFixture<ExecucoesFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExecucoesFormComponent]
    });
    fixture = TestBed.createComponent(ExecucoesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
