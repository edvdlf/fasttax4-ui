import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstrutorRelatoriosComponent } from './construtor-relatorios.component';

describe('ConstrutorRelatoriosComponent', () => {
  let component: ConstrutorRelatoriosComponent;
  let fixture: ComponentFixture<ConstrutorRelatoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstrutorRelatoriosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstrutorRelatoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
