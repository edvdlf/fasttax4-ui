import { ModulosSistemaResponse } from './../../../../models/interfaces/modulos-sistema/response/modulosSistemaResponse';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
import { PermissoesAcessoRequest } from 'src/app/models/interfaces/permissoes-acesso/request/permissoesAcessoRequest';
import { UsuariosResponse } from 'src/app/models/interfaces/user/UsuariosResponse';

import { PermissoesAcessoService } from 'src/app/services/permissoes-acesso/permissoes-acesso.service';
import { UserService } from 'src/app/services/user/user.service';
import { UsuariosService } from 'src/app/services/user/usuarios.service';

@Component({
  selector: 'app-permissoes-acesso-form',
  templateUrl: './permissoes-acesso-form.component.html',
  styleUrls: ['./permissoes-acesso-form.component.scss']
})
export class PermissoesAcessoFormComponent implements OnInit, OnDestroy {

  private readonly destroy$: Subject<void> = new Subject();
  public usuariosDatas: Array<UsuariosResponse> = [];
  public modulosDatas: Array<ModulosSistemaResponse> = [];

  constructor(
    private formBuilder: FormBuilder,
    private permissoesAcessoService: PermissoesAcessoService,
    private usuariosService: UsuariosService,
    private cookieService: CookieService,
    private messageService: MessageService,


    ) {}




  adicionaPermissaoUsuarioForm = this.formBuilder.group({
    //nomeUsuario: ['', Validators.required],
    //email: ['', Validators.required],
    //password: ['', Validators.required],
    //confirmePassword: ['',Validators.required],
  });

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

  getModulosSistemaDatas(): void {
    this.permissoesAcessoService
      .getAllModulosSistema()
             .subscribe({
        next: (response) => {
          if (response.length > 0) {
            console.log(response)
            this.modulosDatas = response;
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

  handleSubmitAdicionarPermissoesAcesso():void{
    if (this.adicionaPermissaoUsuarioForm?.value && this.adicionaPermissaoUsuarioForm.valid) {

    }
  }

  submitUsuarioForm(permissoesAcessoRequest:PermissoesAcessoRequest): void {
    if(this.adicionaPermissaoUsuarioForm.value && this.adicionaPermissaoUsuarioForm.valid){
      this.permissoesAcessoService.adicionarPermissoesAcesso(permissoesAcessoRequest)
      .subscribe({
        next:(response)=>{
        if(response){
           this.adicionaPermissaoUsuarioForm.reset();
            this.messageService.add({
              severity:'success',
              summary: 'Sucesso',
              detail:`Permissão de acesso criada com sucesso!`,
              life:2000,
              })
        }
      },
      error:(err) => {
        this.messageService.add({
          severity:'error',
          summary: 'Atenção',
          detail:`Não foi possivel criar permissão de acesso!`,
          life:2000,
          });
          console.log(err)
       }
    })
  }
}
ngOnInit(): void {
  this.getUsuariosDatas();
  this.getModulosSistemaDatas();

}
ngOnDestroy(): void {
  this.destroy$.next();
  this.destroy$.complete();
}


}
