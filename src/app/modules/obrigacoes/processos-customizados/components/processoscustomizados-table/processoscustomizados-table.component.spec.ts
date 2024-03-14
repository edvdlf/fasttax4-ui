import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoscustomizadosTableComponent } from './processoscustomizados-table.component';

describe('ProcessoscustomizadosTableComponent', () => {
  let component: ProcessoscustomizadosTableComponent;
  let fixture: ComponentFixture<ProcessoscustomizadosTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessoscustomizadosTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessoscustomizadosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
