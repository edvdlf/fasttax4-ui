import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subject } from 'rxjs';
import { DashboardTotalizadoresResponse } from 'src/app/models/interfaces/dashboard/dashboardTotalizadoresResponse';
import { FluxoTarefaExecutadaResponse } from 'src/app/models/interfaces/fluxos/response/fluxoTarefaExecutadaResponse';
import { FluxoService } from 'src/app/services/fluxo/fluxo.service';

@Component({
  selector: 'app-execucoes',
  templateUrl: './execucoes.component.html',
  styleUrls: ['./execucoes.component.scss']
})
export class ExecucoesComponent {

  sideBarOpen = true;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }


  private readonly destroy$: Subject<void> = new Subject();
    private ref!: DynamicDialogRef;
    public fluxoTarefasExecutadasDatas: Array<FluxoTarefaExecutadaResponse>=[];
    public dashboardTotalizadoresDatas: DashboardTotalizadoresResponse | undefined ;

    constructor(
      public formBuilder: FormBuilder,
      private messageService:MessageService,
      private fluxoService: FluxoService,

      ) {
    }

    ngOnInit(): void {
      this._fetchData()
    }

    ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
    }

    private _fetchData() {

      this.getTop10FluxosTarefasExecutadasDatas()

    }
    getTop10FluxosTarefasExecutadasDatas(): void {
      this.fluxoService
        .getTop10TarefasExecutadas()
               .subscribe({
          next: (response) => {
            if (response.length > 0) {
              console.log(response)
              this.fluxoTarefasExecutadasDatas = response;
              
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
