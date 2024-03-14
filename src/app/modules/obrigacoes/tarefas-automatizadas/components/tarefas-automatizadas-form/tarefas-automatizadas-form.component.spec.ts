import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefasAutomatizadasFormComponent } from './tarefas-automatizadas-form.component';

describe('TarefasAutomatizadasFormComponent', () => {
  let component: TarefasAutomatizadasFormComponent;
  let fixture: ComponentFixture<TarefasAutomatizadasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarefasAutomatizadasFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarefasAutomatizadasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
