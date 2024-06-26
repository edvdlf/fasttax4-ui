import { ExecuteFluxoRequest } from 'src/app/models/interfaces/fluxos/request/executeFluxoRequest';
import { FluxoService } from '../../../../services/fluxo/fluxo.service';
import { Router } from '@angular/router';
import { FluxosFormComponent } from './../conponents/fluxos-form/fluxos-form.component';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subject, takeUntil } from 'rxjs';
import { EventAction } from 'src/app/models/event/EventAction';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FluxoResponse } from 'src/app/models/interfaces/fluxos/response/fluxoResponse';
import { ProductService } from 'src/app/services/fluxo/fluxo-steps.service';



@Component({
  selector: 'app-fluxos',
  templateUrl: './fluxos.component.html',
  styleUrls: ['./fluxos.component.scss']
})
export class FluxosComponent implements OnInit, OnDestroy {

  sideBarOpen = true;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  private readonly destroy$: Subject<void> = new Subject();
  private ref!: DynamicDialogRef;
  public fluxosDatas: Array<FluxoResponse> = [];
  public fluxosTarefasDatas: Array<FluxoResponse> = [];
  public fluxosComTarefasDatas: Array<FluxoResponse> = [];
  //private fluxoById: Array<FluxoResponse> =[] ;
  private fluxoById!: FluxoResponse;



  constructor(
    private router: Router,
    private messageService: MessageService,
    private dialogService: DialogService,
    private fluxoService: FluxoService,

    private confirmationService: ConfirmationService,
  ) {}

  ngOnInit(): void {
    this.getFluxosDatas();
    this.getFluxosTarefasDatas()
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  handleFluxoAction(event: EventAction): void {
    if (event) {
     this.ref = this.dialogService.open(FluxosFormComponent, {
        header: event?.action,
        width: '85%',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        maximizable: true,
        data: {
          event: event,
          fluxosDatas: this.fluxosDatas,
        },
      });
      this.ref.onClose.pipe(takeUntil(this.destroy$)).subscribe({
        next: () => this.getFluxosTarefasDatas(),
      });
    }
  }

  getFluxosDatas(): void {
    this.fluxoService
      .getAllFluxos()
             .subscribe({
        next: (response) => {
          if (response.length > 0) {
            this.fluxosDatas = response;
          }
        },
        error: (err) => {

          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Não foi possível buscar fluxos!',
            life: 2500,
          });
        },
      });
  }

  getFluxosTarefasDatas(): void {
    this.fluxoService
      .getAllFluxosTarefas()
             .subscribe({
        next: (response) => {
          if (response.length > 0) {
            this.fluxosTarefasDatas = response;
          }
        },
        error: (err) => {

          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Não foi possível buscar fluxos!',
            life: 2500,
          });
        },
      });
  }

  handleDeleteFluxoAction(event: {id:string, nome:string}): void {
    if (event) {
      this.confirmationService.confirm({
        message: `Confirma a exclusão do fluxo? :"
         ${event?.nome}`,
        header: "Confirmação de Exclusão",
        icon: 'pi pi-exclamation-triangle',
        acceptLabel: 'Sim',
        rejectLabel: 'Não',
        accept: () => this.deleteFluxo(event?.id),
        })
    }
  }

  deleteFluxo(id: string) {
    if (id) {
      this.fluxoService
      .deleteFluxo(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
       next: (response) => {
       this.getFluxosTarefasDatas();
            this.messageService.add({
            severity: 'success',
            summary: 'Sucesso',
            detail: 'Fluxo excluído com sucesso!',
            life: 3000,
        });
        },
          error: (err) => {

          this.getFluxosDatas();
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Não foi possivel excluir  o fluxo!',
            life: 3000,
          });
          },
        });
      this.getFluxosTarefasDatas();
    }
  }

  handleExecuteFluxoAction(event: {id:string}):void{
    this.confirmationService.confirm({
    //target: event.target as EventTarget,
    message: 'Confirma a execução agora deste fluxo e tarefas a ele vinculadas?',
    header:'Confirmação',
    icon: 'pi pi-exclamation-triangle',
    acceptIcon: "none",
    rejectIcon: "nome",
    rejectButtonStyleClass: "p-button-text",
    accept: () => this.obterFluxoById(event?.id),
    })
  }

  obterFluxoById(id: string):void {
    if (id) {
      this.fluxoService
      .getFluxoById(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next:(response)=>{
          if(response){
            this.fluxoById = response;
            this.executeFluxo(this.fluxoById.id)
          }
        }
      })
    }
  }

  executeFluxo(id: string) {
    if (id) {
      const dataAtual = new Date();
      const fluxo: ExecuteFluxoRequest = {
        id : this.fluxoById.id,
        nome : this.fluxoById.nome,
        descricao: this.fluxoById.nome,
        contemVinculo: this.fluxoById.contemVinculo,
        dataCriacao: this.fluxoById.dataCriacao,
        dataUltimaExecucao: dataAtual,
        agendadoPara:this.fluxoById.agendadoPara,
      }
        //console.log(fluxo.dataUltimaExecucao)

      this.fluxoService
        .executarFluxo(fluxo.id, fluxo)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
         next: (response) => {
          this.getFluxosDatas();
            this.messageService.add({
            severity: 'success',
            summary: 'Sucesso',
            detail: 'Fluxo executado com sucesso!',
            life: 3000,
        });
        },
          error: (err) => {
          this.getFluxosDatas();
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Não foi possivel executar  o fluxo!',
            life: 3000,
          });
          },
        });
          this.getFluxosDatas();
         }
      }
}
