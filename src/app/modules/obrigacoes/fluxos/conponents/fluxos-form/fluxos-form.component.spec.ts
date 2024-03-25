import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxosFormComponent } from './fluxos-form.component';

describe('FluxosFormComponent', () => {
  let component: FluxosFormComponent;
  let fixture: ComponentFixture<FluxosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluxosFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FluxosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
