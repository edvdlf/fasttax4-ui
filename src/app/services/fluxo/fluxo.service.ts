import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { FluxoResponse } from '../../models/interfaces/fluxos/response/fluxoResponse';
import { Observable, Subject } from 'rxjs';
import { FluxoRequest } from 'src/app/models/interfaces/fluxos/request/fluxoRequest';

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

  deleteFluxo(id: string): Observable<FluxoRequest> {
    return this.http.delete<FluxoRequest>(`${this.API_URL}/FluxosMockers/${id}`);
  }

  adicionarFluxo(
    requestDatas: FluxoRequest): Observable<FluxoResponse> {
    return this.http.post<FluxoResponse>(
      `${this.API_URL}/FluxosMockers`, requestDatas
    );
  }



}
