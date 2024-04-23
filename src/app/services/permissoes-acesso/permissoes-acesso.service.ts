import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { ModulosSistemaResponse } from 'src/app/models/interfaces/modulos-sistema/response/modulosSistemaResponse';
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

  getAllModulosSistema(): Observable<Array<ModulosSistemaResponse >> {
    return this.http.get<Array<ModulosSistemaResponse >>(`${this.API_URL}/modulossistemaMockers`)
  }


  adicionarPermissoesAcesso(
    requestDatas: PermissoesAcessoRequest): Observable<PermissoesAcessoResponse> {
    return this.http.post<PermissoesAcessoResponse>(
      `${this.API_URL}/ConstrutorRelatoriosMockers`, requestDatas
    );
  }
}
