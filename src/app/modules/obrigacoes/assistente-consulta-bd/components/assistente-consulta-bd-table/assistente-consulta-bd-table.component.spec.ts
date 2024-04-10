import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistenteConsultaBdTableComponent } from './assistente-consulta-bd-table.component';

describe('AssistenteConsultaBdTableComponent', () => {
  let component: AssistenteConsultaBdTableComponent;
  let fixture: ComponentFixture<AssistenteConsultaBdTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssistenteConsultaBdTableComponent]
    });
    fixture = TestBed.createComponent(AssistenteConsultaBdTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
