import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxosTableComponent } from './fluxos-table.component';

describe('FluxosTableComponent', () => {
  let component: FluxosTableComponent;
  let fixture: ComponentFixture<FluxosTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluxosTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FluxosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
