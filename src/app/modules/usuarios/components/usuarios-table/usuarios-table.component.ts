import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { UsuarioEvent } from 'src/app/models/enums/usuarios/usuarioEvent';
import { EventAction } from 'src/app/models/event/EventAction';
import { UsuariosResponse } from 'src/app/models/interfaces/user/UsuariosResponse';
import { UsuariosService } from 'src/app/services/user/usuarios.service';

@Component({
  selector: 'app-usuarios-table',
  templateUrl: './usuarios-table.component.html',
  styleUrls: ['./usuarios-table.component.scss']
})
export class UsuariosTableComponent {

  @Input() usuarios: Array<UsuariosResponse> = [];
  @Output() usuarioEvent = new EventEmitter<EventAction>();

  public adicionarUsuarioEvent = UsuarioEvent.ADICIONAR_USUARIO_EVENT;

  constructor(

    private formBuilder: FormBuilder,

  ){}

  public usuariosForm = this.formBuilder.group({


  })



  getStatus2(status: string) {
    switch (status) {
        case 'true':
            return 'success';
        case 'OnLine':
            return 'success';
        case 'Falha':
            return 'danger';
        default:
          return 'info'
    }
  }
  getStatus(status: string) {
    switch (status) {
        case 'SIM':
            return 'success';
        case 'NAO':
            return 'info';
        case 'Falha':
            return 'danger';
        default:
          return 'info'
    }
  }
  handleSubmitAdicionarUsuario():void{
    console.log("O clique aconteceu")


  }

  handleUsuarioEvent(action: string, id?: string): void {

    if (action && action !== '') {
      const usuarioEventData = id && id !== '' ? { action, id } : { action };
      this.usuarioEvent.emit(usuarioEventData);
    }
  }

}
