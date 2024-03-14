import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';

import { SharedModule } from 'src/app/shared/shared.module';
import { FuncionalidadesComponent } from './page/funcionalidades.component';
import { FUNCIONALIDADES_ROUTES } from './funcionalidades.routing';
import { RouterModule } from '@angular/router';
import { FuncionalidadesTableComponent } from './components/funcionalidades-table/funcionalidades-table.component';


@NgModule({
  declarations: [
    FuncionalidadesComponent,
    FuncionalidadesTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(FUNCIONALIDADES_ROUTES),
    //PrimeNg
    SidebarModule,
    ButtonModule,
    ToolbarModule,
    ChartModule,
    CardModule,
    DropdownModule,
    TooltipModule,
    //Shared
    SharedModule,
    TableModule

  ]
})
export class FuncionalidadesModule { }
