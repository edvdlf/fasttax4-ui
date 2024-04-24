import { Component, Input } from '@angular/core';
import { GestaoDocumentosResponse } from 'src/app/models/interfaces/gestao-documentos/response/gestaoDocumentosResponse';

@Component({
  selector: 'app-gestao-documentos-table',
  templateUrl: './gestao-documentos-table.component.html',
  styleUrls: ['./gestao-documentos-table.component.scss']
})
export class GestaoDocumentosTableComponent {
  @Input() gestaoDocumentos: Array<GestaoDocumentosResponse> = [];
}
