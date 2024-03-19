import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TAREFASAUTOMATIZADAS_ROUTES } from './tarefas-automatizadas.routing';
import { TarefasAutomatizadasComponent } from './page/tarefas-automatizadas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { ChartModule } from 'primeng/chart';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { SharedModule } from 'src/app/shared/shared.module';
import { TagModule } from 'primeng/tag';
import { MultiSelectModule } from 'primeng/multiselect';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { DividerModule } from 'primeng/divider';
import { TarefasAutomatizadasTableComponent } from './components/tarefas-automatizadas-table/tarefas-automatizadas-table.component';
import { TarefasAutomatizadasFormComponent } from './components/tarefas-automatizadas-form/tarefas-automatizadas-form.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TarefasAutomatizadasComponent,
    TarefasAutomatizadasTableComponent,
    TarefasAutomatizadasFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(TAREFASAUTOMATIZADAS_ROUTES),
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
export class TarefasAutomatizadasModule {}
