import { ConfiguracoesGeraisResponse } from 'src/app/models/interfaces/configuracoes-gerais/response/configuracoesGeraisResponse';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-configuracoes-gerais-table',
  templateUrl: './configuracoes-gerais-table.component.html',
  styleUrls: ['./configuracoes-gerais-table.component.scss']
})
export class ConfiguracoesGeraisTableComponent {

  @Input() configuracoesGerais: Array<ConfiguracoesGeraisResponse> = [];

}
