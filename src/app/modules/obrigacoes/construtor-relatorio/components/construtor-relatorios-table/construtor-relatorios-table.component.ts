
import { DeleteRelatorioCustomizadoAction } from 'src/app/models/interfaces/relatorios/event/deleteRelatorioCutomizadoAction';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PrimeIcons, MenuItem, MessageService } from 'primeng/api';
import { ConstrutorRelatorioResponse } from 'src/app/models/interfaces/relatorios/response/construtorRelatorioResponse';
import { ConstrutorRelatorioEvent } from 'src/app/models/enums/construtor-relatorio/construtorRelatorioEvent';
import { RegrasConstrutorRelatorioResponse } from 'src/app/models/interfaces/relatorios/response/regrasConstrutorRelatorioResponse';

import { EventAction } from 'src/app/models/event/EventAction';
import { Periodos } from 'src/app/models/enums/periodos';
import { FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-construtor-relatorios-table',
  templateUrl: './construtor-relatorios-table.component.html',
  styleUrls: ['./construtor-relatorios-table.component.scss']
})
export class ConstrutorRelatoriosTableComponent implements OnInit{
  @Input() regrasRelatorio: Array<RegrasConstrutorRelatorioResponse> = [];
  @Input() construtorRelatorio:Array<ConstrutorRelatorioResponse>=[];
  @Output() construtorRelatorioEvent = new EventEmitter<EventAction>();
  @Output() deleteConstrutorRelatorioEvent = new EventEmitter<DeleteRelatorioCustomizadoAction>();

  periodos: any[] = [{ chave: '', valor: '' }];
  public adicionarConstrutorRelatorioEvent = ConstrutorRelatorioEvent.ADICIONAR_CONSTRUTOR_RELATORIO_EVENT;
  public editarConstrutorRelatorioEvent = ConstrutorRelatorioEvent.EDITAR_CONSTRUTOR_RELATORIO_EVENT;

  constructor(
    private messageService: MessageService,

  ) { }




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

  handleDeleteConstrutorRelatorioEvent(id: string, periodo: string): void {
    if (id && periodo !== '') {
      this.deleteConstrutorRelatorioEvent.emit({id, periodo});
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
