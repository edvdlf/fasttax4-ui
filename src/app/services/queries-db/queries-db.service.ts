import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { QueriesDbRequest } from 'src/app/models/interfaces/queries-db/request/queriesDbRequest';
import { QueriesDbHistoricoResponse } from 'src/app/models/interfaces/queries-db/response/queriesDbHistoricoResponse';
import { QueriesDbResponse } from 'src/app/models/interfaces/queries-db/response/queriesDbResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QueriesDbService {

  private API_URL = environment.API_URL;
  private JWT_TOKEN = this.cookie.get('USER_INFO');
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.JWT_TOKEN}`,
    }),
  };

  constructor(private http: HttpClient, private cookie: CookieService) {}

  getAllQuerieDb(): Observable<Array<QueriesDbResponse >> {
    return this.http.get<Array<QueriesDbResponse >>(`${this.API_URL}/QuerieDbMockers`)
  }

  getAllQuerieDbHistorico(): Observable<Array<QueriesDbHistoricoResponse >> {
    return this.http.get<Array<QueriesDbHistoricoResponse >>(`${this.API_URL}/QuerieDbHistoricoMockers`)
  }


  adicionarQuerieDb(
    requestDatas: QueriesDbRequest): Observable<QueriesDbResponse> {
    return this.http.post<QueriesDbResponse>(
      `${this.API_URL}/QuerieDbMockers`, requestDatas
    );
  }

  deleteQuerieDb(id: string): Observable<QueriesDbRequest> {
    return this.http.delete<QueriesDbRequest>(`${this.API_URL}/QuerieDbMockers/${id}`);
  }
}
