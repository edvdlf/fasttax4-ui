import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionalidadesTableComponent } from './funcionalidades-table.component';

describe('FuncionalidadesTableComponent', () => {
  let component: FuncionalidadesTableComponent;
  let fixture: ComponentFixture<FuncionalidadesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionalidadesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncionalidadesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
