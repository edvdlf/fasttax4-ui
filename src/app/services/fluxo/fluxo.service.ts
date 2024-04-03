import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { FluxoResponse } from '../../models/interfaces/fluxos/response/fluxoResponse';
import { Observable, Subject, map } from 'rxjs';
import { FluxoRequest } from 'src/app/models/interfaces/fluxos/request/fluxoRequest';
import { FluxoTarefaRequest } from 'src/app/models/interfaces/fluxos/request/fluxoTarefaRequest';
import { FluxoTarefaResponse } from 'src/app/models/interfaces/fluxos/response/fluxoTarefaResponse';
import { FluxoResponse2 } from 'src/app/models/interfaces/fluxos/response/fluxoResponse2';

@Injectable({
  providedIn: 'root'
})
export class FluxoService {
  private API_URL = environment.API_URL;
  private JWT_TOKEN = this.cookie.get('USER_INFO');
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.JWT_TOKEN}`,
    }),
  };

  constructor(private http: HttpClient, private cookie: CookieService) {}

  getAllFluxos(): Observable<Array<FluxoResponse >> {
    return this.http.get<Array<FluxoResponse>>(`${this.API_URL}/FluxosMockers`)
  }

  getAllFluxosTarefas(): Observable<Array<FluxoResponse2 >> {
    return this.http.get<Array<FluxoResponse2>>(`${this.API_URL}/FluxosMockers`)
  }






  getAllFluxosVinculo(vinculo:boolean): Observable<Array<FluxoResponse >> {
    return this.http.get<Array<FluxoResponse>>(`${this.API_URL}/FluxosMockers/vinculo/${vinculo}`)

  }

  deleteFluxo(id: string): Observable<FluxoRequest> {
    return this.http.delete<FluxoRequest>(`${this.API_URL}/FluxosMockers/${id}`);
  }

  adicionarFluxo(
    requestDatas: FluxoRequest): Observable<FluxoResponse> {
    return this.http.post<FluxoResponse>(
      `${this.API_URL}/FluxosMockers`, requestDatas
    );
  }
  adicionarTarefaFluxo(
    requestDatas: FluxoTarefaRequest): Observable<FluxoTarefaResponse> {
    return this.http.post<FluxoTarefaResponse>(
      `${this.API_URL}/FluxosTarefasAutomatizadasMockers`, requestDatas
    );
  }



}
