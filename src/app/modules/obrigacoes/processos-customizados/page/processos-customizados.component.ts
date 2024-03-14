
import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subject, takeUntil } from 'rxjs';
import { EventAction } from 'src/app/models/event/EventAction';
import { ProcessoCustomizadoResponse } from 'src/app/models/interfaces/processoscustomizados/response/processoCustomizadoResponse';
import { ProcessosCustomizadosService } from 'src/app/services/obrigacoes/processos-customizados/processos-customizados.service';
import { ProcessosCustomizadosFormComponent } from '../components/processos-customizados-form/processos-customizados-form.component';

@Component({
  selector: 'app-processos-customizados',
  templateUrl: './processos-customizados.component.html',
  styleUrls: ['./processos-customizados.component.scss']
})
export class ProcessosCustomizadosComponent {
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  private destroy$ = new Subject<void>();
  private ref!: DynamicDialogRef
  public processoCustomizadoDatas: Array<ProcessoCustomizadoResponse> = [];


  constructor(
    private processosCustomizadosService: ProcessosCustomizadosService,
    private messageService: MessageService,
    private dialogService: DialogService,
    private confirmationService: ConfirmationService,

  ) {}

  ngOnInit(): void {
    this.getProcessosCustomizadosDatas();
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getProcessosCustomizadosDatas(): void {
    this.processosCustomizadosService
      .getAllProcessosCustomizados()
             .subscribe({
        next: (response) => {
          if (response.length > 0) {
            console.log(response)
            this.processoCustomizadoDatas = response;

          }
        },
        error: (err) => {
          console.log(err);
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Erro ao buscar parametros!',
            life: 2500,
          });
        },
      });
  }

  handleProcessoCustomizadoAction(event: EventAction): void {
    if (event) {
      this.ref = this.dialogService.open(ProcessosCustomizadosFormComponent, {
        header: event?.action,
        width: '80%',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        maximizable: true,
        data: {
          event: event,
          processoCustomizadoDatas: this.processoCustomizadoDatas,
        },
      });
      this.ref.onClose.pipe(takeUntil(this.destroy$)).subscribe({
        next: () => this.getProcessosCustomizadosDatas(),
      });
    }
  }

  handleDeleteProcessoCustomizadoAction(event: {id:string, periodo:string}): void {
    if (event) {
        this.confirmationService.confirm({
        message: `Confirma a exclusão da tarefa automatizada: Periodo :"
         ${event?.periodo}`,
        header: "Confirmação de Exclusão",
        icon: 'pi pi-exclamation-triangle',
        acceptLabel: 'Sim',
        rejectLabel: 'Não',
        accept: () => this.deleteProcessoCustomizado(event?.id),

        })
    }
  }
  deleteProcessoCustomizado(id: string) {
    if (id) {
      this.processosCustomizadosService
      .deleteTarefaAutomatizada(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
       next: (response) => {
       this.getProcessosCustomizadosDatas();
            this.messageService.add({
            severity: 'success',
            summary: 'Sucesso',
            detail: 'Processo customizado excluído com sucesso!',
            life: 3000,
        });
        },
          error: (err) => {
          console.log(err);
          this.getProcessosCustomizadosDatas();
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Não foi possível excluir o processo customizado!',
            life: 3000,
          });
          },
        });

      this.getProcessosCustomizadosDatas();
    }
  }




}
