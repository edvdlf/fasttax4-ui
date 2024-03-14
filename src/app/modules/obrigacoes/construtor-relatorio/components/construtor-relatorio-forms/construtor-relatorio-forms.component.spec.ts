import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstrutorRelatorioFormsComponent } from './construtor-relatorio-forms.component';

describe('ConstrutorRelatorioFormsComponent', () => {
  let component: ConstrutorRelatorioFormsComponent;
  let fixture: ComponentFixture<ConstrutorRelatorioFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstrutorRelatorioFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstrutorRelatorioFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
