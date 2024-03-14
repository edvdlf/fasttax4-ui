import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstrutorRelatoriosTableComponent } from './construtor-relatorios-table.component';

describe('ConstrutorRelatoriosTableComponent', () => {
  let component: ConstrutorRelatoriosTableComponent;
  let fixture: ComponentFixture<ConstrutorRelatoriosTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstrutorRelatoriosTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstrutorRelatoriosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
