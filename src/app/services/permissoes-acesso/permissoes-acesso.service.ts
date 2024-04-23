import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { PermissoesAcessoRequest } from 'src/app/models/interfaces/permissoes-acesso/request/permissoesAcessoRequest';
import { PermissoesAcessoResponse } from 'src/app/models/interfaces/permissoes-acesso/response/permissoesAcessoResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PermissoesAcessoService {

  private API_URL = environment.API_URL;
  private JWT_TOKEN = this.cookie.get('USER_INFO');
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.JWT_TOKEN}`,
    }),
  };

  constructor(private http: HttpClient, private cookie: CookieService) {}

  getAllPermissoesAcesso(): Observable<Array<PermissoesAcessoResponse >> {
    return this.http.get<Array<PermissoesAcessoResponse >>(`${this.API_URL}/LogProcessamentoMockers`)
  }


  adicionarPermissoesAcesso(
    requestDatas: PermissoesAcessoRequest): Observable<PermissoesAcessoResponse> {
    return this.http.post<PermissoesAcessoResponse>(
      `${this.API_URL}/ConstrutorRelatoriosMockers`, requestDatas
    );
  }
}
