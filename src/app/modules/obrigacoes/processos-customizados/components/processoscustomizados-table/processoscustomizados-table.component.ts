import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem, MessageService, PrimeIcons } from 'primeng/api';
import { ProcessoCustomizadoEvent } from 'src/app/models/enums/processo-customizado/processoCustomizadoEvent';
import { EventAction } from 'src/app/models/event/EventAction';
import { DeleteProcessoCustomizadoAction } from 'src/app/models/interfaces/processoscustomizados/event/deleteTarefaAutomatizadaAction';
import { ProcessoCustomizadoResponse } from 'src/app/models/interfaces/processoscustomizados/response/processoCustomizadoResponse';

@Component({
  selector: 'app-processoscustomizados-table',
  templateUrl: './processoscustomizados-table.component.html',
  styleUrls: ['./processoscustomizados-table.component.scss']
})
export class ProcessoscustomizadosTableComponent {

  @Input() processosCustomizados: Array<ProcessoCustomizadoResponse> = [];
  @Output() processosCustomizadosEvent = new EventEmitter<EventAction>();
  @Output() deleteProcessosCustomizadosEvent = new EventEmitter<DeleteProcessoCustomizadoAction>();

  public adicionarProcessoCustomizadoEvent = ProcessoCustomizadoEvent.ADICIONAR_PROCESSO_CUSTOMIZADO_EVENT;
  public editarProcessoCustomizadoEvent = ProcessoCustomizadoEvent.EDITAR_PROCESSO_CUSTOMIZADO_EVENT;;
  public excluirProcessoCustomizadoEvent = ProcessoCustomizadoEvent.EXCLUIR_PROCESSO_CUSTOMIZADO_EVENT;;
  public filtrarProcessoCustomizadoEvent = ProcessoCustomizadoEvent.FILTRAR_PROCESSO_CUSTOMIZADO_EVENT;;


  periodos: any[] = [];



  constructor(private messageService: MessageService) {

}

//adicionarConfigurações() {
  //this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Adicionando configurações' });
//}
handleProcessoCustomizadoEvent(action: string, id?: string): void {
  if (action && action !== '') {
    const processoCustomizadoEventData = id && id !== '' ? { action, id } : { action };
    this.processosCustomizadosEvent.emit(processoCustomizadoEventData);
  }
}

}
