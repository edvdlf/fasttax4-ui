import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueriesDbTableComponent } from './queries-db-table.component';

describe('AssistenteConsultaBdTableComponent', () => {
  let component: QueriesDbTableComponent;
  let fixture: ComponentFixture<QueriesDbTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QueriesDbTableComponent]
    });
    fixture = TestBed.createComponent(QueriesDbTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
