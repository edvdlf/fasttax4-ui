
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, map } from 'rxjs';
import { FuncionalidadeResponse } from 'src/app/models/interfaces/funcionalidades/response/funcionalidadeResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FuncionalidadesService {

  private API_URL = environment.API_URL;
  private JWT_TOKEN = this.cookie.get('USER_INFO');

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.JWT_TOKEN}`,
    }),
  };

  constructor(private http: HttpClient, private cookie: CookieService) {}

  //getAllFuncionalidades(): Observable<Array<FuncionalidadeResponse>> {
    //return this.http.get<Array<FuncionalidadeResponse>>(`${this.API_URL}/funcbasico`)
  //}
  getAllFuncionalidades(): Observable<Array<FuncionalidadeResponse>> {
    return this.http.get<Array<FuncionalidadeResponse>>(`${this.API_URL}/FuncionalidadesMokers`)
  }


}
