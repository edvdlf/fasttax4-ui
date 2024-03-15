import { UsuariosOnlineResponse } from './../../models/interfaces/relatorios/usuariosOnlineResponse';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { LogProcessamentoResponse } from 'src/app/models/interfaces/relatorios/logProcessamentoResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {

  private API_URL = environment.API_URL;
  private JWT_TOKEN = this.cookie.get('USER_INFO');
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.JWT_TOKEN}`,
    }),
  };

  constructor(private http: HttpClient, private cookie: CookieService) {}

  getAllLogProcessamentos(): Observable<Array<LogProcessamentoResponse >> {
    return this.http.get<Array<LogProcessamentoResponse >>(`${this.API_URL}/LogProcessamentoMockers`)
  }

  getAllUsuariosOnLine(): Observable<Array<UsuariosOnlineResponse>> {
    return this.http.get<Array<UsuariosOnlineResponse>>(`${this.API_URL}/UsuariosOnLineMockers`)
  }

}
