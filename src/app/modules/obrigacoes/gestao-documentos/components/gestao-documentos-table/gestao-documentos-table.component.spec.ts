import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoDocumentosTableComponent } from './gestao-documentos-table.component';

describe('GestaoDocumentosTableComponent', () => {
  let component: GestaoDocumentosTableComponent;
  let fixture: ComponentFixture<GestaoDocumentosTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestaoDocumentosTableComponent]
    });
    fixture = TestBed.createComponent(GestaoDocumentosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
