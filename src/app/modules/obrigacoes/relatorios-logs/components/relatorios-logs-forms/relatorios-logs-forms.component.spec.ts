import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoriosLogsFormsComponent } from './relatorios-logs-forms.component';

describe('RelatoriosLogsFormsComponent', () => {
  let component: RelatoriosLogsFormsComponent;
  let fixture: ComponentFixture<RelatoriosLogsFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatoriosLogsFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatoriosLogsFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
