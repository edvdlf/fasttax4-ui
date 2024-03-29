import { RelatorioService } from 'src/app/services/relatorio/relatorio.service';
import { UsuariosOnlineResponse } from '../../../../models/interfaces/relatorios/response/usuariosOnlineResponse';
import { Router } from '@angular/router';
import { ConstrutorRelatorioResponse } from 'src/app/models/interfaces/relatorios/response/construtorRelatorioResponse';
import { RegrasConstrutorRelatorioResponse } from 'src/app/models/interfaces/relatorios/response/regrasConstrutorRelatorioResponse';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subject, takeUntil } from 'rxjs';
import { ConstrutorRelatorioFormsComponent } from '../components/construtor-relatorio-forms/construtor-relatorio-forms.component';
import { EventAction } from 'src/app/models/event/EventAction';

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

  private readonly destroy$: Subject<void> = new Subject();
  private ref!: DynamicDialogRef;
  public regrasRelatorioDatas: Array<RegrasConstrutorRelatorioResponse> = [];
  public construtorRelatoriosDatas: Array<ConstrutorRelatorioResponse> = [];

  constructor(
    private router: Router,
    private messageService: MessageService,
    private relatorioService: RelatorioService,
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

  handleConstrutorRelatorioAction(event: EventAction): void {
    if (event) {
      //alert(event.action)
      //alert(event.id)
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

handleDeleteConstrutorRelatorioAction(event: {id:string, periodo:string}): void {
    if (event) {
      this.confirmationService.confirm({
        message: `Confirma a exclusão da tarefa automatizada: Periodo :"
         ${event?.periodo}`,
        header: "Confirmação de Exclusão",
        icon: 'pi pi-exclamation-triangle',
        acceptLabel: 'Sim',
        rejectLabel: 'Não',
        accept: () => this.deleteConstrutorRelatorio(event?.id),
        })
    }
  }
deleteConstrutorRelatorio(id: string) {
    if (id) {
      this.relatorioService
      .deleteContrutorRelatorio(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
       next: (response) => {
       this.getConstrutorRelatoriosDatas();
            this.messageService.add({
            severity: 'success',
            summary: 'Sucesso',
            detail: 'Relatório excluído com sucesso!',
            life: 3000,
        });
        },
          error: (err) => {
          console.log(err);
          this.getConstrutorRelatoriosDatas();
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Não foi possivel excluir  relatório!',
            life: 3000,
          });
          },
        });

      this.getConstrutorRelatoriosDatas();
    }
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





}
