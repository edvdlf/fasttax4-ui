import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistenteConsultaBdComponent } from './assistente-consulta-bd.component';

describe('AssistenteConsultaBdComponent', () => {
  let component: AssistenteConsultaBdComponent;
  let fixture: ComponentFixture<AssistenteConsultaBdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssistenteConsultaBdComponent]
    });
    fixture = TestBed.createComponent(AssistenteConsultaBdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
