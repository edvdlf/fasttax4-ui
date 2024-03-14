import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefasAutomatizadasTableComponent } from './tarefas-automatizadas-table.component';

describe('TarefasAutomatizadasTableComponent', () => {
  let component: TarefasAutomatizadasTableComponent;
  let fixture: ComponentFixture<TarefasAutomatizadasTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarefasAutomatizadasTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarefasAutomatizadasTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
