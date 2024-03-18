import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subject } from 'rxjs';
import { ConstrutorRelatorioResponse } from 'src/app/models/interfaces/relatorios/response/construtorRelatorioResponse';
import { LogProcessamentoResponse } from 'src/app/models/interfaces/relatorios/response/logProcessamentoResponse';
import { UsuariosOnlineResponse } from 'src/app/models/interfaces/relatorios/response/usuariosOnlineResponse';
import { RelatorioService } from 'src/app/services/relatorio/relatorio.service';

@Component({
  selector: 'app-relatorios-logs-table',
  templateUrl: './relatorios-logs-table.component.html',
  styleUrls: ['./relatorios-logs-table.component.scss']
})
export class RelatoriosLogsTableComponent{

  @Input() logProcessamentos: Array<LogProcessamentoResponse> = [];
  @Input() usuariosOnline:Array<UsuariosOnlineResponse>=[];

  sideBarOpen = true;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  private destroy$ = new Subject<void>();
  private ref!: DynamicDialogRef

  public construtorRelatoriosDatas: Array<ConstrutorRelatorioResponse> = [];

  constructor(
    private relatorioService: RelatorioService,
    private messageService: MessageService,
    private dialogService: DialogService,
    private confirmationService: ConfirmationService,

  ) {}



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
