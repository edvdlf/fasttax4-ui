import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from 'primeng/api';
import { PermissoesAcessoRequest } from 'src/app/models/interfaces/permissoes-acesso/request/permissoesAcessoRequest';

import { PermissoesAcessoService } from 'src/app/services/permissoes-acesso/permissoes-acesso.service';
import { UserService } from 'src/app/services/user/user.service';
import { UsuariosService } from 'src/app/services/user/usuarios.service';

@Component({
  selector: 'app-permissoes-acesso-form',
  templateUrl: './permissoes-acesso-form.component.html',
  styleUrls: ['./permissoes-acesso-form.component.scss']
})
export class PermissoesAcessoFormComponent {


  constructor(
    private formBuilder: FormBuilder,
    private permissoesAcessoService: PermissoesAcessoService,

    private cookieService: CookieService,
    private messageService: MessageService,


    ) {}




  criaPermissaoUsuarioForm = this.formBuilder.group({
    //nomeUsuario: ['', Validators.required],
    //email: ['', Validators.required],
    //password: ['', Validators.required],
    //confirmePassword: ['',Validators.required],
  });

  onSubmitCriaUsuarioForm(): void {

    if(this.criaPermissaoUsuarioForm.value && this.criaPermissaoUsuarioForm.valid){

        //const signupUserRequest: SignupUserRequest= {
          //nome: this.criaUsuarioForm.value.nomeUsuario as string,
          //email: this.criaUsuarioForm.value.email as string,
          //password: this.criaUsuarioForm.value.password as string,
          //confirmPassword:this.criaUsuarioForm.value.confirmePassword as string,
        //}
        //this.submitUsuarioForm(signupUserRequest)
    }else{

    }
  }
  submitUsuarioForm(permissoesAcessoRequest:PermissoesAcessoRequest): void {
    if(this.criaPermissaoUsuarioForm.value && this.criaPermissaoUsuarioForm.valid){

      this.permissoesAcessoService.adicionarPermissoesAcesso(permissoesAcessoRequest)
      .subscribe({
        next:(response)=>{
        if(response){
           this.criaPermissaoUsuarioForm.reset();
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


}
