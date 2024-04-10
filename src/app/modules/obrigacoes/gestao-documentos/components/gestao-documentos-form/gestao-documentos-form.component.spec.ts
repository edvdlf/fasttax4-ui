import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoDocumentosFormComponent } from './gestao-documentos-form.component';

describe('GestaoDocumentosFormComponent', () => {
  let component: GestaoDocumentosFormComponent;
  let fixture: ComponentFixture<GestaoDocumentosFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestaoDocumentosFormComponent]
    });
    fixture = TestBed.createComponent(GestaoDocumentosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
