import { FluxoService } from 'src/app/services/fluxo/fluxo.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService, TreeNode } from 'primeng/api';
import { FluxosEvent } from 'src/app/models/enums/fluxos/fluxosEvent';
import { EventAction } from 'src/app/models/event/EventAction';
import { DeleteFluxoAction } from 'src/app/models/interfaces/fluxos/event/deleteFluxoAction';
import { FluxoResponse } from 'src/app/models/interfaces/fluxos/response/fluxoResponse';
import { ProductService } from 'src/app/services/fluxo/fluxo-steps.service';
import { FluxoResponse2 } from 'src/app/models/interfaces/fluxos/response/fluxoResponse2';

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
  //@Input() fluxosComTarefas: Array<FluxoResponse> = [];

  @Output() fluxoEvent = new EventEmitter<EventAction>();
  @Output() deleteFluxoEvent = new EventEmitter<DeleteFluxoAction>();
  public adicionarFluxoEvent = FluxosEvent.ADICIONAR_FLUXO_EVENT;

  files: TreeNode[] = [];

  selectedNodes: TreeNode[] = [];

  cols!: Column[];
  products!: Product[];
  fluxosComTarefas: FluxoResponse[] = [];
  fluxosComTarefas2!: FluxoResponse2 [];

  constructor(
    private messageService: MessageService,
    private productService: ProductService,
    private fluxoService: FluxoService,
   ) { }


  ngOnInit(): void {

    //this.cols = [
      //{ field: 'name', header: 'Name' },
      //{ field: 'size', header: 'Size' },
      //{ field: 'type', header: 'Type' }
  //];

  //this.productService.getProductsWithOrdersSmall().then((data) => (this.products = data));

  //this.productService.getFluxosWithTarefas()
  //.then((data)=> (this.fluxosComTarefas2 = data));

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
