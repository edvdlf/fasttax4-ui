import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Subject } from 'rxjs';
import { LogProcessamentoResponse } from 'src/app/models/interfaces/relatorios/response/logProcessamentoResponse';
import { UsuariosOnlineResponse } from 'src/app/models/interfaces/relatorios/response/usuariosOnlineResponse';
import { RelatorioService } from 'src/app/services/relatorio/relatorio.service';

@Component({
  selector: 'app-relatorios-logs',
  templateUrl: './relatorios-logs.component.html',
  styleUrls: ['./relatorios-logs.component.scss']
})
export class RelatoriosLogsComponent implements OnInit, OnDestroy {

  sideBarOpen = true;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
   }
   private readonly destroy$: Subject<void> = new Subject();

  public logProcessamentosDatas: Array<LogProcessamentoResponse> = [];
  public usuariosOnlineDatas: Array<UsuariosOnlineResponse> = [];

  constructor(
    private relatorioService: RelatorioService,
    private messageService: MessageService,
    private dialogService: DialogService,
    private confirmationService: ConfirmationService,

  ) {}

  getLogProcessamentosDatas(): void {
    this.relatorioService
      .getAllLogProcessamentos()
             .subscribe({
        next: (response) => {
          if (response.length > 0) {
            console.log(response)
            this.logProcessamentosDatas = response;
          }
        },
        error: (err) => {
          console.log(err);
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Não foi possível buscar o log de Processamentos!',
            life: 2500,
          });
        },
      });
  }

  getUsuariosOnLineDatas(): void {
    this.relatorioService
      .getAllUsuariosOnLine()
             .subscribe({
        next: (response) => {
          if (response.length > 0) {
            console.log(response)
            this.usuariosOnlineDatas = response;
          }
        },
        error: (err) => {
          console.log(err);
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Não foi possível buscar Usuários Online!',
            life: 2500,
          });
        },
      });
  }
  ngOnInit(): void {
    this.getUsuariosOnLineDatas();
    this.getLogProcessamentosDatas();
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


}
