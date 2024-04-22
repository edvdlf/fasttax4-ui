import { UsuariosFormComponent } from './../components/usuarios-form/usuarios-form.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UsuariosService } from './../../../services/user/usuarios.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { UsuariosResponse } from 'src/app/models/interfaces/user/UsuariosResponse';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EventAction } from 'src/app/models/event/EventAction';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit, OnDestroy {

  private readonly destroy$: Subject<void> = new Subject();
  public usuariosDatas: Array<UsuariosResponse> = [];
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


  handleUsuarioAction(event: EventAction): void {
    if (event) {
      this.ref = this.dialogService.open(UsuariosFormComponent, {
        header: event?.action,
        width: '50%',
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
