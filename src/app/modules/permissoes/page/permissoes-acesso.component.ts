
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConfirmationService, MessageService, TreeNode } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subject, takeUntil } from 'rxjs';
import { PermissoesAcessoEvent } from 'src/app/models/enums/permissoes-acesso/permissoesAcessoEvent';

import { EventAction } from 'src/app/models/event/EventAction';
import { UsuariosResponse } from 'src/app/models/interfaces/user/UsuariosResponse';
import { UsuariosService } from 'src/app/services/user/usuarios.service';
import { PermissoesAcessoFormComponent } from '../components/permissoes-acesso-form/permissoes-acesso-form.component';


@Component({
  selector: 'app-permissoes-acesso',
  templateUrl: './permissoes-acesso.component.html',
  styleUrls: ['./permissoes-acesso.component.scss']
})
export class PermissoesAcessoComponent implements OnInit, OnDestroy {

  private readonly destroy$: Subject<void> = new Subject();
  public usuariosDatas: Array<UsuariosResponse> = [];
  public adicionarPermissaoAcessoEvent = PermissoesAcessoEvent.ADICIONAR_PERMISSAO_EVENT;

  private ref!: DynamicDialogRef;




  sideBarOpen = true;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
   }

   constructor(
    private usuariosService: UsuariosService,
    private messageService: MessageService,
    private dialogService: DialogService,
    private confirmationService: ConfirmationService,

   ){}

   getUsuariosDatas(): void {
    this.usuariosService
      .getAllUsuariosPermissoes()
             .subscribe({
        next: (response) => {
          if (response.length > 0) {
            console.log(response)
            this.usuariosDatas = response;
          }
        },
        error: (err) => {
          console.log(err);
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Não foi possível buscar Usuários!',
            life: 2500,
          });
        },
      });
  }

  handlePermissaoUsuarioAction(event: EventAction): void {
    if (event) {
      this.ref = this.dialogService.open(PermissoesAcessoFormComponent, {
        header: event?.action,
        width: '85%',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        maximizable: true,
        data: {
          event: event,
          usuariosDatas: this.usuariosDatas,
        },
      });
      this.ref.onClose.pipe(takeUntil(this.destroy$)).subscribe({
        next: () => this.getUsuariosDatas(),
      });
    }
  }

   ngOnInit(): void {
    this.getUsuariosDatas();
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
