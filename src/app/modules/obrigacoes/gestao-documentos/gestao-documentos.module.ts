import { GestaoDocumentosComponent } from './page/gestao-documentos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestaoDocumentosFormComponent } from './components/gestao-documentos-form/gestao-documentos-form.component';
import { GestaoDocumentosTableComponent } from './components/gestao-documentos-table/gestao-documentos-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';

import { TableModule } from 'primeng/table';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { MultiSelectModule } from 'primeng/multiselect';
import { DividerModule } from 'primeng/divider';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { PasswordModule } from 'primeng/password';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmationService } from 'primeng/api';
import { TreeTableModule } from 'primeng/treetable';
import { GESTAO_DOCUMENTOS_ROUTES } from './gestao-documentos.routing';




@NgModule({
  declarations: [
    GestaoDocumentosComponent,
    GestaoDocumentosFormComponent,
    GestaoDocumentosTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(GESTAO_DOCUMENTOS_ROUTES),
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
export class GestaoDocumentosModule { }
