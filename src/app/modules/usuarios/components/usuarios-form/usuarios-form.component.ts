import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from 'primeng/api';
import { SignupUserRequest } from 'src/app/models/interfaces/user/SignupUserRequest';

import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.scss']
})
export class UsuariosFormComponent {

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,

    private cookieService: CookieService,
    private messageService: MessageService,


    ) {}


  criaUsuarioForm = this.formBuilder.group({
    nomeUsuario: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    confirmePassword: ['',Validators.required],
  });

  onSubmitCriaUsuarioForm(): void {

    if(this.criaUsuarioForm.value && this.criaUsuarioForm.valid){

        const signupUserRequest: SignupUserRequest= {
          nome: this.criaUsuarioForm.value.nomeUsuario as string,
          email: this.criaUsuarioForm.value.email as string,
          password: this.criaUsuarioForm.value.password as string,
          confirmPassword:this.criaUsuarioForm.value.confirmePassword as string,
        }
        this.submitUsuarioForm(signupUserRequest)
    }else{
      
    }
  }
  submitUsuarioForm(signupUserRequest:SignupUserRequest): void {
    if(this.criaUsuarioForm.value && this.criaUsuarioForm.valid){
      console.log("DEBUGANDO" + signupUserRequest)
      this.userService.signupUser(signupUserRequest)
      .subscribe({
        next:(response)=>{
        if(response){
           this.criaUsuarioForm.reset();
            this.messageService.add({
              severity:'success',
              summary: 'Sucesso',
              detail:`Usuario criado com sucesso!`,
              life:2000,
              })
        }
      },
      error:(err) => {
        this.messageService.add({
          severity:'error',
          summary: 'Atenção',
          detail:`Não foi possivel cria sua conta!`,
          life:2000,
          });
          console.log(err)
       }
    })
  }
}

}
