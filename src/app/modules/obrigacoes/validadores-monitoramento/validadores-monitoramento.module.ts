import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { MultiSelectModule } from 'primeng/multiselect';
import { DividerModule } from 'primeng/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';

import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmationService } from 'primeng/api';
import { TreeTableModule } from 'primeng/treetable';
import { VALIDADORES_MONITORAMENTO_ROUTES } from './validadores-monitoramento.routing';
import { ValidadoresMonitoramentoFormComponent } from './components/validadores-monitoramento-form/validadores-monitoramento-form.component';
import { ValidadoresMonitoramentoTableComponent } from './components/validadores-monitoramento-table/validadores-monitoramento-table.component';
import { ValidadoresMonitoramentoComponent } from './page/validadores-monitoramento.component';



@NgModule({
  declarations: [
    ValidadoresMonitoramentoComponent,
    ValidadoresMonitoramentoFormComponent,
    ValidadoresMonitoramentoTableComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(VALIDADORES_MONITORAMENTO_ROUTES),
    //PrimeNg
    SidebarModule,
    ButtonModule,
    ToolbarModule,
    ChartModule,
    CardModule,
    DropdownModule,
    TooltipModule,
    TableModule,
    DynamicDialogModule,
    DropdownModule,
    ConfirmDialogModule,
    TabViewModule,
    TagModule,
    MultiSelectModule,
    DividerModule,
    TreeTableModule,



    //Shared
    SharedModule,
  ],
  providers: [DialogService, ConfirmationService],


})
export class ValidadoresMonitoramentoModule { }
