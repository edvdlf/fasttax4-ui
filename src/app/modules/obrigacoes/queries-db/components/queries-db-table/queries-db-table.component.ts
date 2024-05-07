import { QueriesDbHistoricoResponse } from './../../../../../models/interfaces/queries-db/response/queriesDbHistoricoResponse';
import { QueriesDbResponse } from 'src/app/models/interfaces/queries-db/response/queriesDbResponse';
import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { EventAction } from 'src/app/models/event/EventAction';
import { DeleteQuerieDbAction } from 'src/app/models/interfaces/queries-db/event/deleteQuerieDbAction';
import { QuerieDbEvent } from 'src/app/models/enums/querieDbEvent';

@Component({
  selector: 'app-queries-db-table',
  templateUrl: './queries-db-table.component.html',
  styleUrls: ['./queries-db-table.component.scss']
})
export class QueriesDbTableComponent {

  @Input() queriesDb: Array<QueriesDbResponse>=[];
  @Input() queriesDbHistorico: Array<QueriesDbHistoricoResponse>=[];
  @Output() queriesDbEvent = new EventEmitter<EventAction>();
  @Output() deleteQuerieDbEvent = new EventEmitter<DeleteQuerieDbAction>();

  public adicionarQuerieDbEvent = QuerieDbEvent.ADICIONAR_QUERIE_DB_EVENT;
  public editarQuerieDbEvent = QuerieDbEvent.EDITAR_QUERIE_DB_EVENT;

  handleQuerieDbEvent(action: string, id?: string): void {
    if (action && action !== '') {
      const querieDbEventData = id && id !== '' ? { action, id } : { action };
      this.queriesDbEvent.emit(querieDbEventData );
    }
  }

  handleDeleteQuerieDbEvent(id: string, nome: string): void {
    if (id  !== '') {
       this.deleteQuerieDbEvent.emit({id, nome});
    }
  }


  getStatus(status: string) {
    switch (status) {
        case 'sucesso':
            return 'success';
        case 'desabilitado':
            return 'warning';
        default:
          return 'info'
    }
  }

}
