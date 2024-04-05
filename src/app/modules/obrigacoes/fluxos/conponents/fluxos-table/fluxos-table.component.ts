import { AppModule } from './../../../../../app.module';
import { ExecuteFluxoAction } from './../../../../../models/interfaces/fluxos/event/executeFluxoAction';
import { FluxoService } from 'src/app/services/fluxo/fluxo.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService, TreeNode, ConfirmationService } from 'primeng/api';
import { FluxosEvent } from 'src/app/models/enums/fluxos/fluxosEvent';
import { EventAction } from 'src/app/models/event/EventAction';
import { DeleteFluxoAction } from 'src/app/models/interfaces/fluxos/event/deleteFluxoAction';
import { FluxoResponse } from 'src/app/models/interfaces/fluxos/response/fluxoResponse';
import { ProductService } from 'src/app/services/fluxo/fluxo-steps.service';
//import { FluxoResponse2 } from 'src/app/models/interfaces/fluxos/response/fluxoResponse2';

export interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}

interface Column {
  field: string;
  header: string;
}
@Component({
  selector: 'app-fluxos-table',
  templateUrl: './fluxos-table.component.html',
  styleUrls: ['./fluxos-table.component.scss']
})
export class FluxosTableComponent {

  @Input() fluxos: Array<FluxoResponse> = [];
  @Output() fluxoEvent = new EventEmitter<EventAction>();
  @Output() deleteFluxoEvent = new EventEmitter<DeleteFluxoAction>();
  @Output() executeFluxoEvent = new EventEmitter<ExecuteFluxoAction>();
  public adicionarFluxoEvent = FluxosEvent.ADICIONAR_FLUXO_EVENT;

  constructor(
    ) { }


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

  handleExecuteFluxoEvent(id: string, nome:string): void {
    if (id  !== '') {
      this.executeFluxoEvent.emit({id});
    }
  }

  getStatus(status: boolean) {
    
    if(status==true){
      return 'success'
    }
    return 'info'
  }
}
