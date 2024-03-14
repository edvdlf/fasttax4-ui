import { DASHBOARD_ROUTES } from './dashboard.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';

import {SidebarModule} from 'primeng/sidebar'
import {ToolbarModule} from 'primeng/toolbar'
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';


import { MessageService } from 'primeng/api';
import {CookieService} from 'ngx-cookie-service';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardHomeComponent } from './page/dashboard-home/dashboard-home.component';



@NgModule({
  declarations: [
    DashboardHomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(DASHBOARD_ROUTES),
    //PrimeNg
    SidebarModule,
    ButtonModule,
    ToolbarModule,
    ChartModule,
    //Shared
    SharedModule
  ]
})
export class DashboardModule { }
