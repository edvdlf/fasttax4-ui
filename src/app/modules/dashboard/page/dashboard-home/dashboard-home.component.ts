import { MessageService } from 'primeng/api';
import { DashboardService } from './../../../../services/dashboard/dashboard.service';
import { TarefasAutomatizadasService } from 'src/app/services/obrigacoes/tarefas-automatizadas/tarefas-automatizadas.service';
import { Component, ViewEncapsulation, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ChartType, Stat, Chat, Transaction } from './dashboard.model';
import { chatData, revenueChart, salesAnalytics, spark1Chart, spark2Chart, spark3Chart, sparklineEarning, sparklineMonthly, statData, transactions } from './data';
import { TarefaAutomatizadaResponse } from 'src/app/models/interfaces/tarefasautomatizadas/response/tarefaAutomatizadaResponse';
import { Subject } from 'rxjs';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DashboardTotalizadoresResponse } from 'src/app/models/interfaces/dashboard/dashboardTotalizadoresResponse';
import { FluxoService } from 'src/app/services/fluxo/fluxo.service';
import { FluxoTarefaExecutadaResponse } from 'src/app/models/interfaces/fluxos/response/fluxoTarefaExecutadaResponse';


@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})


export class DashboardHomeComponent implements OnInit, OnDestroy {
  sideBarOpen = true;

    sideBarToggler() {
      this.sideBarOpen = !this.sideBarOpen;
    }
    private readonly destroy$: Subject<void> = new Subject();
    private ref!: DynamicDialogRef;
    public fluxoTarefasExecutadasDatas: Array<FluxoTarefaExecutadaResponse>=[];
    public dashboardTotalizadoresDatas: DashboardTotalizadoresResponse | undefined ;
    public fluxoTarefasExecutadasTotal!: number;



    term: any;
    chatData: Chat[] = [];
    transactions: Transaction[] = [];
    statData: Stat[] = [];
    revenueChart!: ChartType;
    salesAnalytics!: ChartType;
    sparklineEarning!: ChartType;
    sparklineMonthly!: ChartType;
    spark1: any;
    spark2: any;
    spark3: any;

    constructor(
      public formBuilder: UntypedFormBuilder,
      private messageService:MessageService,
      private fluxoService: FluxoService,
      private dashboardService: DashboardService

      ) {
    }


    ngOnInit(): void {
      this.getDashboardTotalizadoresDatas()
      this.getTop10FluxosTarefasExecutadasDatas()
      this._fetchData()
    }

    ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
    }

    private _fetchData() {
      this.revenueChart = revenueChart;
      this.salesAnalytics = salesAnalytics;
      this.sparklineEarning = sparklineEarning;
      this.sparklineMonthly = sparklineMonthly;
      this.chatData = chatData;
      this.transactions = transactions;
      this.statData = statData;
      this.spark1 = spark1Chart;
      this.spark2 = spark2Chart;
      this.spark3 = spark3Chart;
    }

    getTop10FluxosTarefasExecutadasDatas(): void {
      this.fluxoService
        .getTop10TarefasExecutadas()
               .subscribe({
          next: (response) => {
            if (response.length > 0) {
              console.log(response)
              this.fluxoTarefasExecutadasDatas = response;
              this.fluxoTarefasExecutadasTotal = this.fluxoTarefasExecutadasDatas.length;
            }
          },
          error: (err) => {
            console.log(err);
            this.messageService.add({
              severity: 'error',
              summary: 'Erro',
              detail: 'Não foi possivel buscar Tarefas Automatizadas!',
              life: 2500,
            });
          },
        });
    }
    getDashboardTotalizadoresDatas(): void {
      this.dashboardService
        .getTotalizadoresDashboard()
               .subscribe({
          next: (response) => {
            console.log(response)
            this.dashboardTotalizadoresDatas = response;

          },
          error: (err) => {
            console.log(err);
            this.messageService.add({
              severity: 'error',
              summary: 'Erro',
              detail: 'Não foi possivel buscar totalizadores Dashboard!',
              life: 2500,
            });
          },
        });
    }

    getStatus(status: boolean) {

      if(status==true){
        return 'success'
      }
      return 'info'
    }
}
