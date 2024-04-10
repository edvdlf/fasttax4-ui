import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidadoresMonitoramentoFormComponent } from './validadores-monitoramento-form.component';

describe('ValidadoresMonitoramentoFormComponent', () => {
  let component: ValidadoresMonitoramentoFormComponent;
  let fixture: ComponentFixture<ValidadoresMonitoramentoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidadoresMonitoramentoFormComponent]
    });
    fixture = TestBed.createComponent(ValidadoresMonitoramentoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
