import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { ConfiguracoesGeraisResponse } from 'src/app/models/interfaces/configuracoes-gerais/response/configuracoesGeraisResponse';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracoesGeraisService {

  private API_URL = environment.API_URL;
  private JWT_TOKEN = this.cookie.get('USER_INFO');

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.JWT_TOKEN}`,
    }),
  };

  constructor(private http: HttpClient, private cookie: CookieService) {}


  getAllConfiguracoesGerais(): Observable<Array<ConfiguracoesGeraisResponse>> {
    return this.http.get<Array<ConfiguracoesGeraisResponse>>(`${this.API_URL}/ConfiguracoesGeraisMockers`)
  }
}
