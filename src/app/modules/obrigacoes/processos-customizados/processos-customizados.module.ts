import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { ChartModule } from 'primeng/chart';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

import { ProcessoscustomizadosTableComponent } from './components/processoscustomizados-table/processoscustomizados-table.component';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { ProcessosCustomizadosComponent } from './page/processos-customizados.component';
import { PROCESSOS_CUSTOMIZADOS_ROUTES } from './processos-customizados.routing';
import { ProcessosCustomizadosFormComponent } from './components/processos-customizados-form/processos-customizados-form.component';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { MultiSelectModule } from 'primeng/multiselect';
import { DividerModule } from 'primeng/divider';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';


@NgModule({
  declarations: [
    ProcessosCustomizadosComponent,
    ProcessoscustomizadosTableComponent,
    ProcessosCustomizadosFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(PROCESSOS_CUSTOMIZADOS_ROUTES),
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
export class ProcessosCustomizadosModule { }
