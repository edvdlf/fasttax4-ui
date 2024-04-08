import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from 'primeng/api';
import { SignupUserRequest } from 'src/app/models/user/SignupUserRequest';
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


  signupForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });




  onSubmitSignupForm(): void {

    console.log('DADOS DO FORMULÁRIO DE Criação de conta',);
      if(this.signupForm.value && this.signupForm.valid){
        this.userService.signupUser(this.signupForm.value as SignupUserRequest)
        .subscribe({
          next:(response)=>{
          if(response){
             this.signupForm.reset();
              
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
