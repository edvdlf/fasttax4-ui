import { RegrasRelatorioResponse } from './../../models/interfaces/relatorios/response/regrasRelatorioResponse';
import { UsuariosOnlineResponse } from '../../models/interfaces/relatorios/response/usuariosOnlineResponse';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { LogProcessamentoResponse } from 'src/app/models/interfaces/relatorios/response/logProcessamentoResponse';
import { environment } from 'src/environments/environment';
import { ConstrutorRelatorioResponse } from 'src/app/models/interfaces/relatorios/response/construtorRelatorioResponse';

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

  getAllConstrutorRelatorios(): Observable<Array<ConstrutorRelatorioResponse>> {
    return this.http.get<Array<ConstrutorRelatorioResponse>>(`${this.API_URL}/ConstrutorRelatoriosMockers`)
  }

  getAllRegrasRelatorio(): Observable<Array<RegrasRelatorioResponse>> {
    return this.http.get<Array<RegrasRelatorioResponse>>(`${this.API_URL}/RegrasMockers`)
  }





}
