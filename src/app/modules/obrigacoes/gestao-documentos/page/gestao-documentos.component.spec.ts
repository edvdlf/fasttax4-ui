import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoDocumentosComponent } from './gestao-documentos.component';

describe('GestaoDocumentosComponent', () => {
  let component: GestaoDocumentosComponent;
  let fixture: ComponentFixture<GestaoDocumentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestaoDocumentosComponent]
    });
    fixture = TestBed.createComponent(GestaoDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
