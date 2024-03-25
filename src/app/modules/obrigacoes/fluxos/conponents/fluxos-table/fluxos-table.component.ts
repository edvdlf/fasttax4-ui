import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FluxosEvent } from 'src/app/models/enums/fluxos/fluxosEvent';
import { EventAction } from 'src/app/models/event/EventAction';
import { DeleteFluxoAction } from 'src/app/models/interfaces/fluxos/event/deleteFluxoAction';
import { FluxoResponse } from 'src/app/models/interfaces/fluxos/response/fluxoResponse';

@Component({
  selector: 'app-fluxos-table',
  templateUrl: './fluxos-table.component.html',
  styleUrls: ['./fluxos-table.component.scss']
})
export class FluxosTableComponent {

  @Input() fluxos: Array<FluxoResponse> = [];
  @Output() fluxoEvent = new EventEmitter<EventAction>();
  @Output() deleteFluxoEvent = new EventEmitter<DeleteFluxoAction>();
  public adicionarFluxoEvent = FluxosEvent.ADICIONAR_FLUXO_EVENT;



  constructor(
    private messageService: MessageService,

  ) { }


  ngOnInit(): void {
    //for (const [values, keys] of Object.entries(Periodos)) {
      //this.periodos.push({chave:keys, valor:values});
    //}
  }

  handleFluxoEvent(action: string, id?: string): void {
    if (action && action !== '') {
      const fluxoEventData = id && id !== '' ? { action, id } : { action };
      this.fluxoEvent.emit(fluxoEventData);
    }
  }


handleDeleteFluxoEvent(id: string, nome: string): void {
    if (id && nome !== '') {
      this.deleteFluxoEvent.emit({id, nome});
    }
  }
}
