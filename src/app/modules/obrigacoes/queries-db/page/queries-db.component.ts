import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subject, takeUntil } from 'rxjs';
import { EventAction } from 'src/app/models/event/EventAction';
import { QueriesDbHistoricoResponse } from 'src/app/models/interfaces/queries-db/response/queriesDbHistoricoResponse';
import { QueriesDbResponse } from 'src/app/models/interfaces/queries-db/response/queriesDbResponse';
import { QueriesDbService } from 'src/app/services/queries-db/queries-db.service';
import { QueriesDbFormComponent } from '../components/queries-db-form/queries-db-form.component';

@Component({
  selector: 'queriesDb',
  templateUrl: './queries-db.component.html',
  styleUrls: ['./queries-db.component.scss']
})
export class QueriesDbComponent {

  sideBarOpen = true;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  private readonly destroy$: Subject<void> = new Subject();
  private ref!: DynamicDialogRef;
  public queriesDbDatas: Array<QueriesDbResponse> = [];
  public queriesDbHistoricoDatas: Array<QueriesDbHistoricoResponse> = [];


  constructor(
    //private router: Router,
    private messageService: MessageService,
    private queriesDbService: QueriesDbService,
    private dialogService: DialogService,
    private confirmationService: ConfirmationService,
  ) {}

  ngOnInit(): void {
    this.getQueriesDbDatas();
    this.getQueriesDbHistoricoDatas();
}
ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


  handleQuerieDbAction(event: EventAction): void {
    if (event) {
      this.ref = this.dialogService.open(QueriesDbFormComponent, {
        header: event?.action,
        width: '85%',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        maximizable: true,
        data: {
          event: event,
          queriesDbDatas: this.queriesDbDatas,
        },
      });
      this.ref.onClose.pipe(takeUntil(this.destroy$)).subscribe({
        next: () => this.getQueriesDbDatas(),
      });
    }
  }

  handleDeleteQuerieDbAction(event: {id:string, periodo:string}): void {
    if (event) {
        this.confirmationService.confirm({
        message: `Confirma a exclusão da tarefa automatizada: Periodo :"
         ${event?.periodo}`,
        header: "Confirmação de Exclusão",
        icon: 'pi pi-exclamation-triangle',
        acceptLabel: 'Sim',
        rejectLabel: 'Não',
        accept: () => this.deleteQuerieDb(event?.id),

        })
    }
  }
  deleteQuerieDb(id: string) {
    if (id) {
      this.queriesDbService
      .deleteQuerieDb(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
       next: (response) => {
       this.getQueriesDbDatas();
            this.messageService.add({
            severity: 'success',
            summary: 'Sucesso',
            detail: 'Querie Db excluída com sucesso!',
            life: 3000,
        });
        },
          error: (err) => {
          console.log(err);
          this.getQueriesDbDatas();
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Não foi possivel excluir a Querie Db!',
            life: 3000,
          });
          },
        });

      this.getQueriesDbDatas();
    }
  }

  getQueriesDbDatas(): void {
    this.queriesDbService
      .getAllQuerieDb()
             .subscribe({
        next: (response) => {
          if (response.length > 0) {
            console.log(response)
            this.queriesDbDatas = response;
          }
        },
        error: (err) => {
          console.log(err);
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Não foi possivel buscar as Queries Db!',
            life: 2500,
          });
        },
      });
  }

  getQueriesDbHistoricoDatas(): void {
    this.queriesDbService
      .getAllQuerieDbHistorico()
             .subscribe({
        next: (response) => {
          if (response.length > 0) {
            console.log(response)
            this.queriesDbHistoricoDatas = response;
          }
        },
        error: (err) => {
          console.log(err);
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Não foi possivel buscar histórico Queries Db!',
            life: 2500,
          });
        },
      });
  }




}
