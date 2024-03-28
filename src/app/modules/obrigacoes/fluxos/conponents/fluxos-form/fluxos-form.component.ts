import { FluxoRequest } from 'src/app/models/interfaces/fluxos/request/fluxoRequest';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { FluxoService } from 'src/app/services/fluxo/fluxo.service';
import { MessageService } from 'primeng/api';
import { FluxoResponse } from 'src/app/models/interfaces/fluxos/response/fluxoResponse';
import { TarefaAutomatizadaResponse } from 'src/app/models/interfaces/tarefasautomatizadas/response/tarefaAutomatizadaResponse';
import { TarefasAutomatizadasService } from 'src/app/services/obrigacoes/tarefas-automatizadas/tarefas-automatizadas.service';




@Component({
  selector: 'app-fluxos-form',
  templateUrl: './fluxos-form.component.html',
  styleUrls: ['./fluxos-form.component.scss']
})
export class FluxosFormComponent implements OnInit, OnDestroy {


  sourceTarefasAutomatizadas!: TarefaAutomatizadaResponse[];
  targetTarefasAutomatizadas!: TarefaAutomatizadaResponse[];

  private readonly destroy$: Subject<void> = new Subject();
  fluxosDatas: Array<FluxoResponse> =[]
  public tarefasAutomatizadaSelected!:TarefaAutomatizadaResponse;
  tarefasAutomatizadasDatas: Array<TarefaAutomatizadaResponse> = [];

  submited:boolean=false;

  constructor(
    public fluxoService: FluxoService,
    private tarefasAutomatizadasService: TarefasAutomatizadasService,
    public ref: DynamicDialogConfig,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private cdr: ChangeDetectorRef,
    ) {}

    public adicionarFluxoForm = this.formBuilder.group({
      nomeFluxo:['', Validators.required],
      descricaoFluxo:['', Validators.required]

    })

    public adicionarTarefasFluxoForm = this.formBuilder.group({
      nomeFluxoTarefa:['', Validators.required],


    })

    handleSubmitFluxo():void{
      if(this.adicionarFluxoForm.value && this.adicionarFluxoForm.valid){
        this.submited=true;

        const fluxoRequest: FluxoRequest = {
          nome : this.adicionarFluxoForm.value.nomeFluxo as string,
          descricao: this.adicionarFluxoForm.value.descricaoFluxo as string,
          contemVinculo: "Não",
          dataCriacao: "2024-03-18T00:00:00",
          dataUltimaExecucao: "2024-03-18T00:00:00",
        }
        console.log(fluxoRequest)
        this.submitFluxo(fluxoRequest)
      }
      else{
        this.submited=true;
      }
    }

    submitFluxo(fluxoRequest:FluxoRequest):void{
      this.fluxoService
          .adicionarFluxo(fluxoRequest)
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: (response) => {
           if (response) {
              this.messageService.add({
                severity: 'success',
                summary: 'Sucesso',
                detail: 'Relatório criado com sucesso!',
                life: 2500,
              });
            }
          },
          error: (err) => {
            console.log(err);
            this.messageService.add({
             severity: 'error',
             summary: 'Erro',
              detail: 'Não foi possivel adicionar relatório!',
              life: 2500,
            });
         },
      })
      this.adicionarFluxoForm.reset();
    }

    handleSubmitTarefaFluxo():void{
      alert("ok")
      if(this.adicionarTarefasFluxoForm.value && this.adicionarTarefasFluxoForm.valid){
        this.submited=true;

        //const fluxoRequest: FluxoRequest = {
          //nome : this.adicionarFluxoForm.value.nomeFluxo as string,
          //descricao: this.adicionarFluxoForm.value.descricaoFluxo as string,
          //contemVinculo: "Não",
          //dataCriacao: "2024-03-18T00:00:00",
          //dataUltimaExecucao: "2024-03-18T00:00:00",
        //}
        //console.log(fluxoRequest)
        //this.submitFluxo(fluxoRequest)
      }
      else{
        this.submited=true;
      }
    }

    getTarefasAutomatizadasDatas(): void {
      this.tarefasAutomatizadasService
        .getAllTarefasAutomatizadas()
               .subscribe({
          next: (response) => {
            if (response.length > 0) {
              console.log(response)
              this.tarefasAutomatizadasDatas = response;
              this.sourceTarefasAutomatizadas = this.tarefasAutomatizadasDatas

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

    getFluxosDatas(): void {
      this.fluxoService
        .getAllFluxos()
               .subscribe({
          next: (response) => {
            if (response.length > 0) {
              console.log(response)
              this.fluxosDatas = response;
            }
          },
          error: (err) => {
            console.log(err);
            this.messageService.add({
              severity: 'error',
              summary: 'Erro',
              detail: 'Não foi possível buscar regras relatório!',
              life: 2500,
            });
          },
        });
    }

  ngOnInit() {
      this.getFluxosDatas();
      this.getTarefasAutomatizadasDatas();
      this.targetTarefasAutomatizadas = [];
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getStatus(status: string) {
    switch (status) {
        case 'habilitado':
            return 'success';
        case 'desabilitado':
            return 'warning';
        default:
          return 'info'
    }
  }

}
