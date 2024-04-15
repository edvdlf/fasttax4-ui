import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { DashboardTotalizadoresResponse } from 'src/app/models/interfaces/dashboard/dashboardTotalizadoresResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private API_URL = environment.API_URL;
  private JWT_TOKEN = this.cookie.get('USER_INFO');
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.JWT_TOKEN}`,
    }),
  };

  constructor(private http: HttpClient, private cookie: CookieService) {}

  getTotalizadoresDashboard(): Observable<DashboardTotalizadoresResponse> {
    return this.http.get<DashboardTotalizadoresResponse>(`${this.API_URL}/dashboardmockers/totalizadores`)
  }
}
