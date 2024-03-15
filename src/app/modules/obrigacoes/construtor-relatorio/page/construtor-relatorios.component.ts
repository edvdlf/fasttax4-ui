import { UsuariosOnlineResponse } from './../../../../models/interfaces/relatorios/usuariosOnlineResponse';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Subject } from 'rxjs';
import { LogProcessamentoResponse } from 'src/app/models/interfaces/relatorios/logProcessamentoResponse';
import { RelatorioService } from 'src/app/services/relatorio/relatorio.service';

@Component({
  selector: 'app-construtor-relatorios',
  templateUrl: './construtor-relatorios.component.html',
  styleUrls: ['./construtor-relatorios.component.scss']
})


export class ConstrutorRelatoriosComponent implements OnInit, OnDestroy {
  sideBarOpen = true;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  private destroy$ = new Subject<void>();
  //private ref!: DynamicDialogRef
  public logProcessamentosDatas: Array<LogProcessamentoResponse> = [];
  public usuariosOnlineDatas: Array<UsuariosOnlineResponse> = [];

  constructor(
    private relatorioService: RelatorioService,
    private messageService: MessageService,

  ) {}

  ngOnInit(): void {
    this.getUsuariosOnLineDatas();
    this.getLogProcessamentosDatas();
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

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




}
