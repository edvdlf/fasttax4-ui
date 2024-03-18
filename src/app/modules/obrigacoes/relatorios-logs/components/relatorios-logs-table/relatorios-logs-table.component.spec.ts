import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoriosLogsTablesComponent } from './relatorios-logs-table.component';

describe('RelatoriosLogsTablesComponent', () => {
  let component: RelatoriosLogsTablesComponent;
  let fixture: ComponentFixture<RelatoriosLogsTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatoriosLogsTablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatoriosLogsTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
