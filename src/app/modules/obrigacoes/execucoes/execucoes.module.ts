import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { EXECUCOES_ROUTES } from './execucoes.routing';
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
import { ExecucoesComponent } from './page/execucoes.component';
import { ExecucoesFormComponent } from './components/execucoes-form/execucoes-form.component';
import { ExecucoesTableComponent } from './components/execucoes-table/execucoes-table.component';



@NgModule({
  declarations: [
    ExecucoesComponent,
    ExecucoesFormComponent,
    ExecucoesTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(EXECUCOES_ROUTES),
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
export class ExecucoesModule { }
