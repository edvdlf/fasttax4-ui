import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrosTableComponent } from './parametros-table.component';

describe('ParametrosTableComponent', () => {
  let component: ParametrosTableComponent;
  let fixture: ComponentFixture<ParametrosTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametrosTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParametrosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
