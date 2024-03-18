import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatoriosLogsTableComponent } from './components/relatorios-logs-table/relatorios-logs-table.component';
import { RelatoriosLogsFormsComponent } from './components/relatorios-logs-forms/relatorios-logs-forms.component';
import { RELATORIOS_LOGS_ROUTES } from './relatorios-logs.routing';

import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { MultiSelectModule } from 'primeng/multiselect';
import { DividerModule } from 'primeng/divider';
import { TooltipModule } from 'primeng/tooltip';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

import { SharedModule } from 'src/app/shared/shared.module';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { RelatoriosLogsComponent } from './page/relatorios-logs.component';




@NgModule({
  declarations: [
    RelatoriosLogsComponent,
    RelatoriosLogsTableComponent,
    RelatoriosLogsFormsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(RELATORIOS_LOGS_ROUTES),
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
    //Shared
    SharedModule,
  ],
  providers: [DialogService, ConfirmationService],
})
export class RelatoriosLogsModule { }
