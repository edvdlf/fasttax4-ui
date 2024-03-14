import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefasAutomatizadasComponent } from './tarefas-automatizadas.component';

describe('TarefasAutomatizadasComponent', () => {
  let component: TarefasAutomatizadasComponent;
  let fixture: ComponentFixture<TarefasAutomatizadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarefasAutomatizadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarefasAutomatizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
