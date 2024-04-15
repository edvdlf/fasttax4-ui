import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { TarefaAutomatizadaDeleteRequest } from 'src/app/models/interfaces/tarefasautomatizadas/request/tarefaAutomatizadaDeleteRequest';
import { TarefaAutomatizadaRequest } from 'src/app/models/interfaces/tarefasautomatizadas/request/tarefaAutomatizadaRequest';
import { TarefaAutomatizadaResponse } from 'src/app/models/interfaces/tarefasautomatizadas/response/tarefaAutomatizadaResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TarefasAutomatizadasService {

  private API_URL = environment.API_URL;
  private JWT_TOKEN = this.cookie.get('USER_INFO');
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.JWT_TOKEN}`,
    }),
  };

  constructor(private http: HttpClient, private cookie: CookieService) {}

  getAllTarefasAutomatizadas(): Observable<Array<TarefaAutomatizadaResponse>> {
    return this.http.get<Array<TarefaAutomatizadaResponse>>(`${this.API_URL}/TarefasAutomatizadasMockers`)
  }
  
  getTarefasAutomatizadasPorPeriodoGrupo(periodo: string, grupo:string): Observable<Array<TarefaAutomatizadaResponse>> {
    return this.http.get<Array<TarefaAutomatizadaResponse>>(`${this.API_URL}/TarefasAutomatizadasMockers/ANO_ATUAL/BASICO`)
  }

  adicionarTarefaAutomatizada(
    requestDatas: TarefaAutomatizadaRequest): Observable<TarefaAutomatizadaResponse> {
    return this.http.post<TarefaAutomatizadaResponse>(
      `${this.API_URL}/TarefasAutomatizadasMockers`, requestDatas
    );
  }


  editarTarefaAutomatizada(id: string,requestDatas: TarefaAutomatizadaRequest ): Observable<TarefaAutomatizadaDeleteRequest> {
    return this.http.put<TarefaAutomatizadaDeleteRequest>(`${this.API_URL}/TarefasAutomatizadasMockers/${id}`, requestDatas);
  }

  deleteTarefaAutomatizada(id: string): Observable<TarefaAutomatizadaDeleteRequest> {
    return this.http.delete<TarefaAutomatizadaDeleteRequest>(`${this.API_URL}/TarefasAutomatizadasMockers/${id}`);
  }

}
