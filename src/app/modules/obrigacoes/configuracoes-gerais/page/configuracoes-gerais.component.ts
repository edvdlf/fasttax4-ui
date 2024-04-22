import { ConfiguracoesGeraisService } from './../../../../services/obrigacoes/configuracoes-gerais/configuracoes-gerais.service';
import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subject } from 'rxjs';
import { ConfiguracoesGeraisResponse } from 'src/app/models/interfaces/configuracoes-gerais/response/configuracoesGeraisResponse';

@Component({
  selector: 'app-configuracoes-gerais',
  templateUrl: './configuracoes-gerais.component.html',
  styleUrls: ['./configuracoes-gerais.component.scss']
})
export class ConfiguracoesGeraisComponent {

  sideBarOpen = true;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  private readonly destroy$: Subject<void> = new Subject();
  private ref!: DynamicDialogRef;
  public configuracoesGeraisDatas: Array<ConfiguracoesGeraisResponse> = [];


  constructor(

    private messageService: MessageService,
    private configuracoesGeraisService: ConfiguracoesGeraisService,
    private dialogService: DialogService,
    private confirmationService: ConfirmationService,
  ) {}

  getConfiguracoesGeraisDatas(): void {
    this.configuracoesGeraisService
      .getAllConfiguracoesGerais()
             .subscribe({
        next: (response) => {
          if (response.length > 0) {
            console.log(response)
            this.configuracoesGeraisDatas = response;
          }
        },
        error: (err) => {
          console.log(err);
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Não foi possível buscar as configurações gerais!',
            life: 2500,
          });
        },
      });
  }

  ngOnInit(): void {
    this.getConfiguracoesGeraisDatas();

  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
