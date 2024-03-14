import { Component, Input, OnInit } from '@angular/core';
import { MenuItem, MessageService, PrimeIcons } from 'primeng/api';
import { ObrigacoesGrupo } from 'src/app/models/enums/obrigacoesGrupo/obrigacoesGrupo';
import { ParametroResponse } from 'src/app/models/interfaces/parametros/response/parametroResponse';

@Component({
  selector: 'app-parametros-table',
  templateUrl: './parametros-table.component.html',
  styleUrls: ['./parametros-table.component.scss']
})
export class ParametrosTableComponent implements OnInit {
  @Input() parametros: Array<ParametroResponse> = [];
  obrigacoesGrupo: any[] = [{ chave: '', valor: '' }];
  items: MenuItem[];


  constructor(private messageService: MessageService) {
    this.items = [
        {
            label: 'Novo',
            icon: PrimeIcons.PLUS,
            command: () => {
                this.adicionarConfigurações();
            }
        },
        { separator: true },
        {
            label: 'Exporta tabela para excel',
            icon: PrimeIcons.FILE_EXPORT,
            command: () => {
                this.exportaTabelaExcel();
            }
        },
        {
          label: 'Exporta seleção para excel',
          icon: PrimeIcons.FILE_EXPORT,
          command: () => {
              this.exportaSelecaoExcel();
          }
      },

        { separator: true },

    ];
}



 ngOnInit(): void {
  for (const [values, keys] of Object.entries(ObrigacoesGrupo)) {
    this.obrigacoesGrupo.push({chave:keys, valor:values});
  }
  }
  adicionarTarefaAutomatizada() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Adicionando configurações' });
  }
  adicionarConfigurações() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Adicionando configurações' });
  }
  exportaTabelaExcel() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Exportando tabela completa para Excel' });
  }
  exportaSelecaoExcel() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Exportando itens selecionados para Excel' });
  }
}
