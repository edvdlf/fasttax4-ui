import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessosCustomizadosFormComponent } from './processos-customizados-form.component';

describe('ProcessosCustomizadosFormComponent', () => {
  let component: ProcessosCustomizadosFormComponent;
  let fixture: ComponentFixture<ProcessosCustomizadosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessosCustomizadosFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessosCustomizadosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
