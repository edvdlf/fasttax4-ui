import { FluxoService } from '../../../../services/fluxo/fluxo.service';
import { Router } from '@angular/router';
import { FluxosFormComponent } from './../conponents/fluxos-form/fluxos-form.component';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subject, takeUntil } from 'rxjs';
import { EventAction } from 'src/app/models/event/EventAction';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FluxoResponse } from 'src/app/models/interfaces/fluxos/response/fluxoResponse';

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


  constructor(
    private router: Router,
    private messageService: MessageService,
    private dialogService: DialogService,
    private fluxoService: FluxoService,
    private confirmationService: ConfirmationService,
  ) {}

  ngOnInit(): void {
    this.getFluxosDatas();

  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  handleFluxoAction(event: EventAction): void {
    if (event) {
      //alert(event.action)
      //alert(event.id)
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
        next: () => this.getFluxosDatas(),
      });
    }
  }

  getFluxosDatas(): void {
    this.fluxoService
      .getAllFluxos()
             .subscribe({
        next: (response) => {
          if (response.length > 0) {
            console.log(response)
            this.fluxosDatas = response;
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
       this.getFluxosDatas();
            this.messageService.add({
            severity: 'success',
            summary: 'Sucesso',
            detail: 'Fluxo excluído com sucesso!',
            life: 3000,
        });
        },
          error: (err) => {
          console.log(err);
          this.getFluxosDatas();
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Não foi possivel excluir  o fluxo!',
            life: 3000,
          });
          },
        });

      this.getFluxosDatas();
    }
  }



}
