import { ProcessoCustomizadoResponse } from '../../../models/interfaces/processoscustomizados/response/processoCustomizadoResponse';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { ProcessoCustomizadoCreateRequest } from 'src/app/models/interfaces/processoscustomizados/request/processoCustomizadoCreateRequest';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProcessosCustomizadosService {

  private API_URL = environment.API_URL;
  private JWT_TOKEN = this.cookie.get('USER_INFO');
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.JWT_TOKEN}`,
    }),
  };

  constructor(private http: HttpClient, private cookie: CookieService) {}

  getAllProcessosCustomizados(): Observable<Array<ProcessoCustomizadoResponse>> {
    return this.http.get<Array<ProcessoCustomizadoResponse>>(`${this.API_URL}/ProcessosCustomizadosMockers`)
  }

  adicionarProcessosCustomizado(
    requestDatas: ProcessoCustomizadoCreateRequest): Observable<ProcessoCustomizadoResponse> {
    return this.http.post<ProcessoCustomizadoResponse>(
      `${this.API_URL}/ProcessosCustomizadosMockers`, requestDatas
    );
  }

  //editarTarefaAutomatizada(id: string,requestDatas: ProcessoCustomizadoResponse ): Observable<ProcessoCustomizadoDeleteRequest> {
    //return this.http.put<ProcessoCustomizadoDeleteRequest>(`${this.API_URL}/ProcessosCustomizadosMockers/${id}`, requestDatas);
  //}

  deleteProcessosCustomizado(id: string): Observable<ProcessoCustomizadoResponse> {
    return this.http.delete<ProcessoCustomizadoResponse>(`${this.API_URL}/ProcessosCustomizadosMockers/${id}`);
  }
}
