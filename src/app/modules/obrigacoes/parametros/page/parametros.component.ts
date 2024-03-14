import { ParametrosService } from './../../../../services/obrigacoes/parametros/parametros.service';
import { ParametroResponse } from './../../../../models/interfaces/parametros/response/parametroResponse';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  styleUrls: ['./parametros.component.scss']
})
export class ParametrosComponent implements OnInit, OnDestroy {

  sideBarOpen = true;
    sideBarToggler() {
      this.sideBarOpen = !this.sideBarOpen;
    }
    private destroy$ = new Subject<void>();
    public parametrosDatas: Array<ParametroResponse> = [];

    constructor(
      private parametrosService: ParametrosService,
      private messageService: MessageService,

    ) {}

    ngOnInit(): void {
      this.getParametrosDatas();
    }
    ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
    }

    getParametrosDatas(): void {
      this.parametrosService
        .getAllParametros()
               .subscribe({
          next: (response) => {
            if (response.length > 0) {
              console.log(response)
              this.parametrosDatas = response;
              console.log(this.parametrosDatas)
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
}
