import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConfirmationService, MessageService, TreeNode } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Subject } from 'rxjs';
import { EventAction } from 'src/app/models/event/EventAction';
import { UsuariosResponse } from 'src/app/models/interfaces/user/UsuariosResponse';
import { ProductService } from 'src/app/services/fluxo/fluxo-steps.service';
import { UsuariosService } from 'src/app/services/user/usuarios.service';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-permissoes-acesso-table',
  templateUrl: './permissoes-acesso-table.component.html',
  styleUrls: ['./permissoes-acesso-table.component.scss']
})
export class PermissoesAcessoTableComponent {

  @Input() usuarios: Array<UsuariosResponse> = [];
  @Output() usuarioEvent = new EventEmitter<EventAction>();

  private readonly destroy$: Subject<void> = new Subject();
  files!: TreeNode[];

  selectionKeys = {};

  cols!: Column[];
  constructor(
    private usuariosService: UsuariosService,
    private messageService: MessageService,
    private dialogService: DialogService,
    private confirmationService: ConfirmationService,

   ){}

   ngOnInit(): void {


  }




  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getStatus(status: string) {
    switch (status) {
        case 'SIM':
            return 'success';
        case 'NAO':
            return 'info';
        case 'Falha':
            return 'danger';
        default:
          return 'info'
    }
  }

}
