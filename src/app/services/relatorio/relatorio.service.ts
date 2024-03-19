import { RegrasConstrutorRelatorioRequest } from './../../models/interfaces/relatorios/request/regrasConstrutorRelatorioRequest';

import { UsuariosOnlineResponse } from '../../models/interfaces/relatorios/response/usuariosOnlineResponse';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { LogProcessamentoResponse } from 'src/app/models/interfaces/relatorios/response/logProcessamentoResponse';
import { environment } from 'src/environments/environment';
import { ConstrutorRelatorioResponse } from 'src/app/models/interfaces/relatorios/response/construtorRelatorioResponse';
import { ConstrutorRelatorioRequest } from 'src/app/models/interfaces/relatorios/request/construtorRelatorioRequest';
import { RegrasConstrutorRelatorioResponse } from 'src/app/models/interfaces/relatorios/response/regrasConstrutorRelatorioResponse';

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

  getAllRegrasRelatorio(): Observable<Array<RegrasConstrutorRelatorioResponse>> {
    return this.http.get<Array<RegrasConstrutorRelatorioResponse>>(`${this.API_URL}/RegrasMockers`)
  }

  adicionarContrutorRelatorio(
    requestDatas: ConstrutorRelatorioRequest): Observable<ConstrutorRelatorioResponse> {
    return this.http.post<ConstrutorRelatorioResponse>(
      `${this.API_URL}/ConstrutorRelatoriosMockers`, requestDatas
    );
  }

  adicionarRegraContrutorRelatorio(
    requestDatas: RegrasConstrutorRelatorioRequest): Observable<RegrasConstrutorRelatorioResponse> {
    return this.http.post<RegrasConstrutorRelatorioResponse>(
      `${this.API_URL}/RegrasMockers`, requestDatas
    );
  }

  editarContrutorRelatorio(id: string,requestDatas: ConstrutorRelatorioRequest ): Observable<ConstrutorRelatorioRequest> {
    return this.http.put<ConstrutorRelatorioRequest>(`${this.API_URL}/ConstrutorRelatoriosMockers/${id}`, requestDatas);
  }

  deleteContrutorRelatorio(id: string): Observable<ConstrutorRelatorioRequest> {
    return this.http.delete<ConstrutorRelatorioRequest>(`${this.API_URL}/ConstrutorRelatoriosMockers/${id}`);
  }

}
