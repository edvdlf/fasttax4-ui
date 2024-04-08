import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
import { USUARIOS_ROUTES } from './usuarios.routing';
import { UsuariosComponent } from './page/usuarios.component';




@NgModule({
  declarations: [
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(USUARIOS_ROUTES),
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
  ]
})
export class UsuariosModule { }
