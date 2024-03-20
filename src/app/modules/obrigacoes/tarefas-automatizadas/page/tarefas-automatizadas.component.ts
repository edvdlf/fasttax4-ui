import { TarefasAutomatizadasService } from './../../../../services/obrigacoes/tarefas-automatizadas/tarefas-automatizadas.service';
import { Router } from '@angular/router';
import { TarefaAutomatizadaResponse } from './../../../../models/interfaces/tarefasautomatizadas/response/tarefaAutomatizadaResponse';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subject, takeUntil } from 'rxjs';
import { TarefasAutomatizadasFormComponent } from '../components/tarefas-automatizadas-form/tarefas-automatizadas-form.component';
import { EventAction } from 'src/app/models/event/EventAction';



@Component({
  selector: 'app-tarefas-automatizadas',
  templateUrl: './tarefas-automatizadas.component.html',
  styleUrls: ['./tarefas-automatizadas.component.scss']
})

export class TarefasAutomatizadasComponent implements OnInit, OnDestroy {
  sideBarOpen = true;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  private readonly destroy$: Subject<void> = new Subject();
  private ref!: DynamicDialogRef;
  public tarefasAutomatizadasDatas: Array<TarefaAutomatizadaResponse> = [];

  constructor(
    //private router: Router,
    private messageService: MessageService,
    private tarefasAutomatizadasService: TarefasAutomatizadasService,
    private dialogService: DialogService,
    private confirmationService: ConfirmationService,
  ) {}

  ngOnInit(): void {
    this.getTarefasAutomatizadasDatas();
}
ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


  handleTarefaAutomatizadaAction(event: EventAction): void {
    if (event) {
      this.ref = this.dialogService.open(TarefasAutomatizadasFormComponent, {
        header: event?.action,
        width: '85%',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        maximizable: true,
        data: {
          event: event,
          tarefasAutomatizadasDatas: this.tarefasAutomatizadasDatas,
        },
      });
      this.ref.onClose.pipe(takeUntil(this.destroy$)).subscribe({
        next: () => this.getTarefasAutomatizadasDatas(),
      });
    }
  }

  handleDeleteTarefaAutomatizadaAction(event: {id:string, periodo:string}): void {
    if (event) {
        this.confirmationService.confirm({
        message: `Confirma a exclusão da tarefa automatizada: Periodo :"
         ${event?.periodo}`,
        header: "Confirmação de Exclusão",
        icon: 'pi pi-exclamation-triangle',
        acceptLabel: 'Sim',
        rejectLabel: 'Não',
        accept: () => this.deleteTarefaAutomatizada(event?.id),

        })
    }
  }
  deleteTarefaAutomatizada(id: string) {
    if (id) {
      this.tarefasAutomatizadasService
      .deleteTarefaAutomatizada(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
       next: (response) => {
       this.getTarefasAutomatizadasDatas();
            this.messageService.add({
            severity: 'success',
            summary: 'Sucesso',
            detail: 'Tarefa automatizada excluída com sucesso!',
            life: 3000,
        });
        },
          error: (err) => {
          console.log(err);
          this.getTarefasAutomatizadasDatas();
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Erro ao excluir tarefa automatizada!',
            life: 3000,
          });
          },
        });

      this.getTarefasAutomatizadasDatas();
    }
  }

  getTarefasAutomatizadasDatas(): void {
    this.tarefasAutomatizadasService
      .getAllTarefasAutomatizadas()
             .subscribe({
        next: (response) => {
          if (response.length > 0) {
            console.log(response)
            this.tarefasAutomatizadasDatas = response;
          }
        },
        error: (err) => {
          console.log(err);
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Não foi possivel buscar Tarefas Automatizadas!',
            life: 2500,
          });
        },
      });
  }




}
