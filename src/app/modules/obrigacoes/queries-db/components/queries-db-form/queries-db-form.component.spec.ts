import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueriesDbFormComponent } from './queries-db-form.component';

describe('AssistenteConsultaBdFormComponent', () => {
  let component: QueriesDbFormComponent;
  let fixture: ComponentFixture<QueriesDbFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QueriesDbFormComponent]
    });
    fixture = TestBed.createComponent(QueriesDbFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
