import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessosCustomizadosComponent } from './processos-customizados.component';

describe('ProcessosComponent', () => {
  let component: ProcessosCustomizadosComponent;
  let fixture: ComponentFixture<ProcessosCustomizadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessosCustomizadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessosCustomizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
