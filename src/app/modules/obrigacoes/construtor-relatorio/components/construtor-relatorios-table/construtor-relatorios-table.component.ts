import { ConstrutorRelatorioResponse } from 'src/app/models/interfaces/relatorios/response/construtorRelatorioResponse';
import { RegrasRelatorioResponse } from './../../../../../models/interfaces/relatorios/response/regrasRelatorioResponse';
import { UsuariosOnlineResponse } from '../../../../../models/interfaces/relatorios/response/usuariosOnlineResponse';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ConstrutorRelatorioEvent } from 'src/app/models/enums/construtor-relatorio/construtorRelatorioEvent';
import { Periodos } from 'src/app/models/enums/periodos';
import { EventAction } from 'src/app/models/event/EventAction';
import { LogProcessamentoResponse } from 'src/app/models/interfaces/relatorios/response/logProcessamentoResponse';

@Component({
  selector: 'app-construtor-relatorios-table',
  templateUrl: './construtor-relatorios-table.component.html',
  styleUrls: ['./construtor-relatorios-table.component.scss']
})
export class ConstrutorRelatoriosTableComponent implements OnInit{

  @Input() regrasRelatorio: Array<RegrasRelatorioResponse> = [];
  @Input() construtorRelatorio:Array<ConstrutorRelatorioResponse>=[];
  @Output() construtorRelatorioEvent = new EventEmitter<EventAction>();
  periodos: any[] = [{ chave: '', valor: '' }];
  public adicionarConstrutorRelatorioEvent = ConstrutorRelatorioEvent.ADICIONAR_CONSTRUTOR_RELATORIO_EVENT;
  public editarConstrutorRelatorioEvent = ConstrutorRelatorioEvent.EDITAR_CONSTRUTOR_RELATORIO_EVENT;
  constructor(public formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    for (const [values, keys] of Object.entries(Periodos)) {
      this.periodos.push({chave:keys, valor:values});
    }
  }

  handleConstrutorRelatorioEvent(action: string, id?: string): void {
    if (action && action !== '') {
      const construtorRelatorioEventData = id && id !== '' ? { action, id } : { action };

      this.construtorRelatorioEvent.emit(construtorRelatorioEventData);
    }
  }

  getStatus(status: string) {
    switch (status) {
        case 'Sucesso':
            return 'success';
        case 'OnLine':
            return 'success';
        case 'Falha':
            return 'danger';
        default:
          return 'info'
    }
  }
}
