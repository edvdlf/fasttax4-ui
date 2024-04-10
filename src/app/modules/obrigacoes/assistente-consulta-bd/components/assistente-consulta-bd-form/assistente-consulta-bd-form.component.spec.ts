import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistenteConsultaBdFormComponent } from './assistente-consulta-bd-form.component';

describe('AssistenteConsultaBdFormComponent', () => {
  let component: AssistenteConsultaBdFormComponent;
  let fixture: ComponentFixture<AssistenteConsultaBdFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssistenteConsultaBdFormComponent]
    });
    fixture = TestBed.createComponent(AssistenteConsultaBdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
