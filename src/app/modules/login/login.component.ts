import { LoadingService } from './../../services/loading/loading.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthRequest } from 'src/app/models/interfaces/user/auth/AuthRequest';
import { SignupUserRequest } from 'src/app/models/interfaces/user/SignupUserRequest';
import { PasswordModule } from 'primeng/password';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private loadingService: LoadingService,
    private cookieService: CookieService,
    private messageService: MessageService,
    private router: Router

    ) {}
  loginCard = true;
  value!:string;
  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  signupForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  public showLoader = false;

  onSubmitLoginForm(): void {
    //console.log('DADOS DO FORMULÁRIO DE LOGIN', this.loginForm.value);

    console.log(this.loadingService.show())
    if(this.loginForm.value && this.loginForm.valid){
      this.showLoader = true;
      this.userService.authUser(this.loginForm.value as AuthRequest)
      .subscribe({
        next:(response)=> {
            if(response){
              this.cookieService.set('USER_INFO', response?.token);
              this.loginForm.reset()
              this.router.navigate(['/home'])
              this.messageService.add({
              severity:'success',
              summary: 'Sucesso',
              detail:`Bem vindo de volta ${response?.name}`,
              life:2000,
              })
            }
        },
         error:(err) => {
          this.messageService.add({
            severity:'error',
            summary: 'Erro',
            detail:`Login ou Usuário invalido! Tente novamente`,
            life:2000,
            });
            console.log(err)
         }
      })
    }

  }

  onSubmitSignupForm(): void {

    console.log('DADOS DO FORMULÁRIO DE Criação de conta',);
      if(this.signupForm.value && this.signupForm.valid){
        this.userService.signupUser(this.signupForm.value as SignupUserRequest)
        .subscribe({
          next:(response)=>{
          if(response){
             this.signupForm.reset();
              this.loginCard=true;
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



