import { CONFIGURACOES_GERAIS_ROUTES } from './configuracoes-gerais.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguracoesGeraisFormComponent } from './components/configuracoes-gerais-form/configuracoes-gerais-form.component';
import { ConfiguracoesGeraisTableComponent } from './components/configuracoes-gerais-table/configuracoes-gerais-table.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { ConfirmationService } from 'primeng/api';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { MultiSelectModule } from 'primeng/multiselect';
import { DividerModule } from 'primeng/divider';
import { StepsModule } from 'primeng/steps';
import { StepperModule } from 'primeng/stepper';
import { PickListModule } from 'primeng/picklist';
import { TreeTableModule } from 'primeng/treetable';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { ConfiguracoesGeraisComponent } from './page/configuracoes-gerais.component';


@NgModule({
  declarations: [
    ConfiguracoesGeraisComponent,
    ConfiguracoesGeraisFormComponent,
    ConfiguracoesGeraisTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(CONFIGURACOES_GERAIS_ROUTES),
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
    StepsModule,
    StepperModule,
    PickListModule,
    TreeTableModule,
    InputNumberModule,
    CalendarModule,


    //Shared
    SharedModule,
  ],
  providers: [DialogService, ConfirmationService],



})
export class ConfiguracoesGeraisModule { }
