import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONSTRUTORRELATORIO_ROUTES } from './construtorrelatorio.routing';

import {ConstrutorRelatoriosComponent} from './page/construtor-relatorios.component'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ConstrutorRelatoriosTableComponent } from './components/construtor-relatorios-table/construtor-relatorios-table.component';
import { ConstrutorRelatorioFormsComponent } from './components/construtor-relatorio-forms/construtor-relatorio-forms.component';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [ConstrutorRelatoriosComponent, ConstrutorRelatoriosTableComponent, ConstrutorRelatorioFormsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(CONSTRUTORRELATORIO_ROUTES),
    //PrimeNg
    SidebarModule,
    ButtonModule,
    ToolbarModule,
    ChartModule,
    CardModule,
    DropdownModule,
    TooltipModule,
    DynamicDialogModule,
    ConfirmDialogModule,
    TagModule,
    TableModule,
    TabViewModule,
    //Shared
    SharedModule,
  ],
  providers: [DialogService, ConfirmationService],
})
export class ConstrutorRelatorioModule { }
