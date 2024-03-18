import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoriosLogsComponent } from './relatorios-logs.component';

describe('RelatoriosLogsComponent', () => {
  let component: RelatoriosLogsComponent;
  let fixture: ComponentFixture<RelatoriosLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatoriosLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatoriosLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
