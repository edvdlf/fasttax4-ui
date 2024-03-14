import { PhotoService } from 'src/app/services/carousel/photo.service';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { HOME_ROUTES } from './home.routing';

import {SidebarModule} from 'primeng/sidebar'
import {ToolbarModule} from 'primeng/toolbar'
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { GalleriaModule } from 'primeng/galleria';


import { MessageService } from 'primeng/api';
import {CookieService} from 'ngx-cookie-service';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './page/home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(HOME_ROUTES),
    //PrimeNg
    SidebarModule,
    ButtonModule,
    ToolbarModule,
    ChartModule,
    GalleriaModule,
    //Shared
    SharedModule

  ],
  providers:[MessageService, CookieService,PhotoService]
})
export class HomeModule { }
