import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueriesDbComponent } from './queries-db.component';

describe('AssistenteConsultaBdComponent', () => {
  let component: QueriesDbComponent;
  let fixture: ComponentFixture<QueriesDbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QueriesDbComponent]
    });
    fixture = TestBed.createComponent(QueriesDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
