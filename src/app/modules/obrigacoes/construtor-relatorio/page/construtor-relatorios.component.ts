import { UsuariosOnlineResponse } from '../../../../models/interfaces/relatorios/response/usuariosOnlineResponse';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subject, takeUntil } from 'rxjs';
import { EventAction } from 'src/app/models/event/EventAction';
import { LogProcessamentoResponse } from 'src/app/models/interfaces/relatorios/response/logProcessamentoResponse';
import { RelatorioService } from 'src/app/services/relatorio/relatorio.service';
import { ConstrutorRelatorioFormsComponent } from '../components/construtor-relatorio-forms/construtor-relatorio-forms.component';
import { ConstrutorRelatorioResponse } from 'src/app/models/interfaces/relatorios/response/construtorRelatorioResponse';
import { RegrasRelatorioResponse } from 'src/app/models/interfaces/relatorios/response/regrasRelatorioResponse';

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
  private ref!: DynamicDialogRef
  public regrasRelatorioDatas: Array<RegrasRelatorioResponse> = [];

  public construtorRelatoriosDatas: Array<ConstrutorRelatorioResponse> = [];

  constructor(
    private relatorioService: RelatorioService,
    private messageService: MessageService,
    private dialogService: DialogService,
    private confirmationService: ConfirmationService,

  ) {}

  ngOnInit(): void {
    this.getRegrasRelatorioDatas();
    this.getConstrutorRelatoriosDatas();
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getRegrasRelatorioDatas(): void {
    this.relatorioService
      .getAllRegrasRelatorio()
             .subscribe({
        next: (response) => {
          if (response.length > 0) {
            console.log(response)
            this.regrasRelatorioDatas = response;
          }
        },
        error: (err) => {
          console.log(err);
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Não foi possível buscar regras relatório!',
            life: 2500,
          });
        },
      });
  }



  getConstrutorRelatoriosDatas(): void {
    this.relatorioService
      .getAllConstrutorRelatorios()
             .subscribe({
        next: (response) => {
          if (response.length > 0) {
            console.log(response)
            this.construtorRelatoriosDatas = response;
          }
        },
        error: (err) => {
          console.log(err);
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Não foi possível buscar Relatorios construidos!',
            life: 2500,
          });
        },
      });
  }

  handleConstrutorRelatorioAction(event: EventAction): void {
    if (event) {
      this.ref = this.dialogService.open(ConstrutorRelatorioFormsComponent, {
        header: event?.action,
        width: '85%',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        maximizable: true,
        data: {
          event: event,
          construtorRelatorioDatas: this.construtorRelatoriosDatas,
        },
      });
      this.ref.onClose.pipe(takeUntil(this.destroy$)).subscribe({
        next: () => this.getConstrutorRelatoriosDatas(),
      });
    }
  }


}
