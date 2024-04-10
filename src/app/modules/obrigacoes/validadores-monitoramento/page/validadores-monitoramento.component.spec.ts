import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidadoresMonitoramentoComponent } from './validadores-monitoramento.component';

describe('ValidadoresMonitoramentoComponent', () => {
  let component: ValidadoresMonitoramentoComponent;
  let fixture: ComponentFixture<ValidadoresMonitoramentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidadoresMonitoramentoComponent]
    });
    fixture = TestBed.createComponent(ValidadoresMonitoramentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
