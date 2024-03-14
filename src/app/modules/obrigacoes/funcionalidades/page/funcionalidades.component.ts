import { FuncionalidadeResponse } from 'src/app/models/interfaces/funcionalidades/response/funcionalidadeResponse';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FuncionalidadesService } from 'src/app/services/obrigacoes/funcionalidades/funcionalidades.service';
import { Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-funcionalidades',
  templateUrl: './funcionalidades.component.html',
  styleUrls: ['./funcionalidades.component.scss']

})

export class FuncionalidadesComponent implements OnInit, OnDestroy {
  sideBarOpen = true;
    sideBarToggler() {
      this.sideBarOpen = !this.sideBarOpen;
    }

    private destroy$ = new Subject<void>();
    public funcionalidadesDatas: Array<FuncionalidadeResponse> = [];


    constructor(
      private funcionalidadesService: FuncionalidadesService,
      private messageService: MessageService,

    ) {}
    
    ngOnInit(): void {
      this.getFuncionalidadesDatas();
    }
    ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
    }

    getFuncionalidadesDatas(): void {
      this.funcionalidadesService
        .getAllFuncionalidades()
               .subscribe({
          next: (response) => {
            if (response.length > 0) {
              console.log(response)
              this.funcionalidadesDatas = response;
              console.log(this.funcionalidadesDatas)
              //this.productsDtService.setProductsDatas(this.productsList);
              //this.setProductsChartConfig();
            }
          },
          error: (err) => {
            console.log(err);
            this.messageService.add({
              severity: 'error',
              summary: 'Erro',
              detail: 'Erro ao buscar funcionalidades!',
              life: 2500,
            });
          },
        });
    }

}
