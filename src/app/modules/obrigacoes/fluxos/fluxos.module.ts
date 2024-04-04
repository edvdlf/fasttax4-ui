import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { RouterModule } from '@angular/router';
import { FluxosComponent } from './page/fluxos.component';
import { FluxosTableComponent } from './conponents/fluxos-table/fluxos-table.component';
import { FluxosFormComponent } from './conponents/fluxos-form/fluxos-form.component';
import { FLUXOS_ROUTES } from './fluxos.routing';
import { StepsModule } from 'primeng/steps';
import { StepperModule  } from 'primeng/stepper';
import { PickListModule } from 'primeng/picklist';
import { ProductService } from 'src/app/services/fluxo/fluxo-steps.service';
import { TreeTableModule } from 'primeng/treetable';
import { InputNumberModule } from 'primeng/inputnumber';



@NgModule({
  declarations: [
    FluxosComponent,
    FluxosTableComponent,
    FluxosFormComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(FLUXOS_ROUTES),
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

    //Shared
    SharedModule,
  ],
  providers: [DialogService, ConfirmationService, ProductService],
})
export class FluxosModule { }
