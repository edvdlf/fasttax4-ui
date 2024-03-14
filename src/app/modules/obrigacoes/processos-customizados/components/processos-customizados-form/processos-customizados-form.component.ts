import { ProcessosCustomizadosService } from 'src/app/services/obrigacoes/processos-customizados/processos-customizados.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { EstabelecimentoService } from 'src/app/services/estabelecimento/estabelecimento.service';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { EstabelecimentoResponse } from 'src/app/models/interfaces/estabelecimentos/response/estabelecimentoResponse';
import { Subject, takeUntil } from 'rxjs';
import { EventAction } from 'src/app/models/event/EventAction';
import { ProcessoCustomizadoResponse } from 'src/app/models/interfaces/processoscustomizados/response/processoCustomizadoResponse';
import { Periodos } from 'src/app/models/enums/periodos';
import { ProcessoCustomizadoCreateRequest } from 'src/app/models/interfaces/processoscustomizados/request/processoCustomizadoCreateRequest';
import { ProcessoCustomizadoEvent } from 'src/app/models/enums/processo-customizado/processoCustomizadoEvent';

@Component({
  selector: 'app-processos-customizados-form',
  templateUrl: './processos-customizados-form.component.html',
  styleUrls: ['./processos-customizados-form.component.scss']
})
export class ProcessosCustomizadosFormComponent implements OnInit, OnDestroy {

  private readonly destroy$: Subject<void> = new Subject();
  public estabelecimentoDatas: Array<EstabelecimentoResponse> = [];

  public processoCustomizadoAction!:{
    event: EventAction;
    processoCustomizadoDatas: Array<ProcessoCustomizadoResponse>
  }
  public adicionarProcessoCustomizadoAction = ProcessoCustomizadoEvent.ADICIONAR_PROCESSO_CUSTOMIZADO_EVENT;
  public editarProcessoCustomizadoAction = ProcessoCustomizadoEvent.EDITAR_PROCESSO_CUSTOMIZADO_EVENT;

  

  selectedEstabelecimento!: EstabelecimentoResponse[];
  periodos: any[] = [{ chave: '', valor: '' }];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private messageService: MessageService,
    private estabelecimentoService: EstabelecimentoService,
    private processosCustomizadosService:ProcessosCustomizadosService,
    public ref: DynamicDialogConfig

    ){}


  public adicionarProcessoCustomizadoForm = this.formBuilder.group({
    periodo:['',Validators.required],
    identificador:['',Validators.required],
    descricao:['',Validators.required],
    plsql:['',Validators.required],

  })

  public editarProcessoCustomizadoForm = this.formBuilder.group({
    periodo:['',Validators.required],
    identificador:['',Validators.required],
    descricao:['',Validators.required],
    plsql:['',Validators.required],

  })



  handleSubmitAdicionarProcessoCustomizado(): void{
    if (this.adicionarProcessoCustomizadoForm?.value && this.adicionarProcessoCustomizadoForm?.valid) {
      let qtdEstabelecimento = 0;

      let _periodo = "";
      let _identificador = "";
      let _obrigacao = "";
      let _descricao = "";
      let _empresa = "";
      let _estabelecimento = "";
      let _uf = "";
      let _grupo = "";
      if(this.selectedEstabelecimento){
        qtdEstabelecimento = this.selectedEstabelecimento.length;
      }
        _periodo = this.adicionarProcessoCustomizadoForm.value.periodo as string;
        _descricao = this.adicionarProcessoCustomizadoForm.value.descricao as string;
        _obrigacao = "CUSTOM";
        _identificador = this.adicionarProcessoCustomizadoForm.value.identificador as string;
      if(qtdEstabelecimento > 0){
        for (var i = 0; i < this.selectedEstabelecimento.length; i++) {
          _empresa = this.selectedEstabelecimento[i].empresa;
          _estabelecimento = this.selectedEstabelecimento[i].nome;
          _uf = this.selectedEstabelecimento[i].uf;

          const processoCustomizadoCreateRequest: ProcessoCustomizadoCreateRequest = {
            periodo: _periodo,
            identificador: "Teste",
            descricao: _descricao,
            status:"desabilitado",
            obrigacao: _obrigacao,
            empresa: _empresa,
            estabelecimento: _estabelecimento,
            uf:_uf,
            plsql: "Select * from teste"
          }
          //console.log(processoCustomizadoCreateRequest)
          this.SubmitProcessoCustomizado(processoCustomizadoCreateRequest)
        };
      }
      else{

        this.messageService.add({ severity: 'error', summary: 'Atenção!', detail: 'Selecione pelo menos um estabelecimento!' });
      }
    }
  }

  SubmitProcessoCustomizado(processoCustomizadoCreateRequest:ProcessoCustomizadoCreateRequest):void{
    this.processosCustomizadosService
    .adicionarProcessosCustomizado
    (processoCustomizadoCreateRequest)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response) => {
         if (response) {
            this.messageService.add({
              severity: 'success',
              summary: 'Sucesso',
              detail: 'Processo customizado adicionado com sucesso!',
              life: 2500,
            });
          }
        },
        error: (err) => {
          console.log(err);
          this.messageService.add({
           severity: 'error',
           summary: 'Erro',
            detail: 'Não foi possivel adicionar esta tarefa automatizada!',
            life: 2500,
          });
       },
    })
    this.adicionarProcessoCustomizadoForm.reset();
}
handleSubmitEditarProcessoCustomizado(): void{
  if (this.adicionarProcessoCustomizadoForm?.value && this.adicionarProcessoCustomizadoForm?.valid) {
    let qtdEstabelecimento = 0;

    let _periodo = "";
    let _identificador = "";
    let _obrigacao = "";
    let _descricao = "";
    let _empresa = "";
    let _estabelecimento = "";
    let _uf = "";
    let _grupo = "";
    if(this.selectedEstabelecimento){
      qtdEstabelecimento = this.selectedEstabelecimento.length;
    }
      _periodo = this.adicionarProcessoCustomizadoForm.value.periodo as string;
      _descricao = this.adicionarProcessoCustomizadoForm.value.descricao as string;
      _obrigacao = "CUSTOM";
      _identificador = this.adicionarProcessoCustomizadoForm.value.identificador as string;
    if(qtdEstabelecimento > 0){
      for (var i = 0; i < this.selectedEstabelecimento.length; i++) {
        _empresa = this.selectedEstabelecimento[i].empresa;
        _estabelecimento = this.selectedEstabelecimento[i].nome;
        _uf = this.selectedEstabelecimento[i].uf;

        const processoCustomizadoCreateRequest: ProcessoCustomizadoCreateRequest = {
          periodo: _periodo,
          identificador: "Teste",
          descricao: _descricao,
          status:"desabilitado",
          obrigacao: _obrigacao,
          empresa: _empresa,
          estabelecimento: _estabelecimento,
          uf:_uf,
          plsql: "Select * from teste"
        }
        //console.log(processoCustomizadoCreateRequest)
        this.SubmitProcessoCustomizado(processoCustomizadoCreateRequest)
      };
    }
    else{

      this.messageService.add({ severity: 'error', summary: 'Atenção!', detail: 'Selecione pelo menos um estabelecimento!' });
    }
  }
}


  getEstabelecimentosDatas(): void {
    this.estabelecimentoService
      .getAllEstabelecimentos()
             .subscribe({
        next: (response) => {
          if (response.length > 0) {
             this.estabelecimentoDatas = response;
          }
        },
        error: (err) => {
          console.log(err);
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Não foi possivel buscar Estabelecimentos!',
            life: 2500,
          });
        },
      });
  }

  ngOnInit(): void {
    for (const [values, keys] of Object.entries(Periodos)) {
      this.periodos.push({chave:keys, valor:values});
    }
    //this.tarefaAutomatizadaAction = this.ref.data;
    this.getEstabelecimentosDatas()

   }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();

  }

}


