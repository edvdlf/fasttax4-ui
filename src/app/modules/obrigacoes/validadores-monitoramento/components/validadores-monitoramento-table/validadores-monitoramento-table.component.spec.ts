import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidadoresMonitoramentoTableComponent } from './validadores-monitoramento-table.component';

describe('ValidadoresMonitoramentoTableComponent', () => {
  let component: ValidadoresMonitoramentoTableComponent;
  let fixture: ComponentFixture<ValidadoresMonitoramentoTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidadoresMonitoramentoTableComponent]
    });
    fixture = TestBed.createComponent(ValidadoresMonitoramentoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
