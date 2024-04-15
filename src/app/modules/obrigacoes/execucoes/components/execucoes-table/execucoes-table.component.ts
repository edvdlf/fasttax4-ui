import { Component, Input } from '@angular/core';
import { FluxoTarefaExecutadaResponse } from 'src/app/models/interfaces/fluxos/response/fluxoTarefaExecutadaResponse';

@Component({
  selector: 'app-execucoes-table',
  templateUrl: './execucoes-table.component.html',
  styleUrls: ['./execucoes-table.component.scss']
})
export class ExecucoesTableComponent {

  @Input() execucoes: Array<FluxoTarefaExecutadaResponse> = [];

}
