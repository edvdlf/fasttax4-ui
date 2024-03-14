import { ObrigacoesFiscaisAll } from 'src/app/models/interfaces/comuns/obrigacoesFiscaisAll';

import { EventAction } from 'src/app/models/event/EventAction';

import { TarefasAutomatizadasService } from './../../../../../services/obrigacoes/tarefas-automatizadas/tarefas-automatizadas.service';

import { EstabelecimentoService } from './../../../../../services/estabelecimento/estabelecimento.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Periodos } from 'src/app/models/enums/periodos';
import { ObrigacoesGrupo } from 'src/app/models/enums/obrigacoesGrupo/obrigacoesGrupo';
import { EstabelecimentoResponse } from 'src/app/models/interfaces/estabelecimentos/response/estabelecimentoResponse';
import { TarefaAutomatizadaRequest } from 'src/app/models/interfaces/tarefasautomatizadas/request/tarefaAutomatizadaRequest';
import { ObrigacaoGrupoBasico } from 'src/app/models/enums/tarefaautomatizada/obrigacaoGrupoBasico';
import { TabPanel } from 'primeng/tabview';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { TarefaAutomatizadaResponse } from 'src/app/models/interfaces/tarefasautomatizadas/response/tarefaAutomatizadaResponse';
import { TarefaAutomatizadaEvent } from 'src/app/models/enums/tarefaautomatizada/tarefaAutomatizadaEvent';
import { ObrigacoesService } from 'src/app/services/obrigacoes/obrigacoes.service';



@Component({
  selector: 'app-tarefas-automatizadas-form',
  templateUrl: './tarefas-automatizadas-form.component.html',
  styleUrls: ['./tarefas-automatizadas-form.component.scss']
})



export class TarefasAutomatizadasFormComponent implements OnInit, OnDestroy {

private readonly destroy$: Subject<void> = new Subject();
public estabelecimentoDatas: Array<EstabelecimentoResponse> = [];
public tarefaAutomatizadaSelectedDatas!: TarefaAutomatizadaResponse;
public tarefasAutomatizadasDatas: Array<TarefaAutomatizadaResponse>=[];

public tarefaAutomatizadaAction!:{
  event: EventAction;
  tarefaAutomatizadaDatas: Array<TarefaAutomatizadaResponse>
}
public adicionarTarefaAutomatizadaAction = TarefaAutomatizadaEvent.ADICIONAR_TAREFA_AUTOMATIZADA_EVENT;
public editarTarefaAutomatizadaAction = TarefaAutomatizadaEvent.EDITAR_TAREFA_AUTOMATIZADA_EVENT;

obrigacoesFiscaisAll: any[] = [];
periodos: any[] = [{ chave: '', valor: '' }];
selectedEstabelecimento!: EstabelecimentoResponse[];
selectedObrigacoes!: ObrigacoesFiscaisAll[];




public adicionarTarefaForm = this.formBuilder.group({
  periodo:[''],
  lista:['']

})

public editarTarefaForm = this.formBuilder.group({
  periodo:['', Validators.required],
  programa:[''],
  descricao: [''],
  status: ['', Validators.required],
  obrigacao: ['', Validators.required],
  estabelecimento: ['', Validators.required],
  codempresa:['', Validators.required],
  uf:['', Validators.required],
  grupo:['', Validators.required]
})


constructor(
  private formBuilder: FormBuilder,
  private router: Router,
  private messageService: MessageService,
  private estabelecimentoService: EstabelecimentoService,
  private tarefasAutomatizadasService:TarefasAutomatizadasService,
  private obrigacoesService : ObrigacoesService,
  public ref: DynamicDialogConfig
  ){}



periodosT: any[] = [
  { name: 'Ano anterior', key: 'ANO_ANTERIOR' },
  { name: 'Ano atual', key: 'ANO_ATUAL' },
  { name: 'Mês anterior', key: 'MES_ANTERIOR' },
  { name: 'Mês atual', key: 'MES_ATUAL' },
  { name: 'Semana anterior', key: 'SEMANA_ANTERIOR' },
  { name: 'Semana atual', key: 'SEMANA_ATUAL' },
  { name: 'Dia anterior', key: 'DIA_ANTERIOR' },
  { name: 'Dia atual', key: 'DIA_ATUAL' },
  { name: 'Dois meses anterior', key: 'DOIS_MESES_ANTERIOR' }


];

getObrigacoesFiscaisAllDatas(){
 this.obrigacoesFiscaisAll=  this.obrigacoesService.getObrigacoesFiscaisAll();

}

handleSubmitAdicionarTarefa():void{

  if (this.adicionarTarefaForm?.value && this.adicionarTarefaForm?.valid) {
    let cont = 0;
    var qtdSelectedObrigacoes = 0;
    let _periodo = "";
    let _programa = "";
    let _obrigacao = "";
    let _descricao = "";
    let _empresa = "";
    let _estabelecimento = "";
    let _uf = "";
    let _grupo = "";
    if(this.selectedEstabelecimento){
      cont = this.selectedEstabelecimento.length;
      qtdSelectedObrigacoes = this.selectedObrigacoes.length;

    }
      _periodo = this.adicionarTarefaForm.value.periodo as string;

    if(cont > 0){
      for (var i = 0; i < this.selectedEstabelecimento.length; i++) {
        _empresa = this.selectedEstabelecimento[i].empresa;
        _estabelecimento = this.selectedEstabelecimento[i].nome;
        _uf = this.selectedEstabelecimento[i].uf;
        for(var index = 0; index < this.selectedObrigacoes.length; index++){
          _obrigacao = this.selectedObrigacoes[index].chave;
          _grupo = this.selectedObrigacoes[index].grupo;
          _programa = _obrigacao + "_" + _empresa + "_" + _estabelecimento + "_" + _uf;
          _descricao = "OBRIGAÇÃO: " +_obrigacao + " EMPRESA: " + _empresa + " ESTABELECIMENTO: " + _estabelecimento + " UF: " + _uf;
          const requestAdicionarTarefa: TarefaAutomatizadaRequest = {
            periodo: _periodo,
            programa: _programa,
            descricao: _descricao,
            status:"desabilitado",
            obrigacao: _obrigacao,
            estabelecimento: _estabelecimento,
            empresa: _empresa,
            uf:_uf,
            grupo: _grupo,

          }
            this.SubmitTarefaAutomatizada(requestAdicionarTarefa)
            console.log(requestAdicionarTarefa)
        }
      };
    }
    else{
      //alert("Selecione pelo menos um estabelecimento!")
      this.messageService.add({ severity: 'error', summary: 'Atenção!', detail: 'Selecione pelo menos um estabelecimento!' });
    }
  }
}

SubmitTarefaAutomatizada(tarefaAutomatizadaRequest:TarefaAutomatizadaRequest):void{
    this.tarefasAutomatizadasService
        .adicionarTarefaAutomatizada(tarefaAutomatizadaRequest)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response) => {
         if (response) {
            this.messageService.add({
              severity: 'success',
              summary: 'Sucesso',
              detail: 'Produto criado com sucesso!',
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
    this.adicionarTarefaForm.reset();
  }

  handleSubmitEditarTarefa():void{


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
  getTarefaAutomatizadaDatas(): void {

  this.tarefasAutomatizadasService
    .getAllTarefasAutomatizadas()
           .subscribe({
      next: (response) => {
        if (response.length > 0) {
            this.tarefasAutomatizadasDatas = response;

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

getTarefaAutomatizadasSelectedDatas(id: number): void {
  const allTarefasAutomatizadas = this.tarefaAutomatizadaAction?.tarefaAutomatizadaDatas;
  if(allTarefasAutomatizadas.length> 0){
    const tarefaFiltered = allTarefasAutomatizadas.filter(
      (element)=> element?.id===id
    );
    if(tarefaFiltered){
      this.tarefaAutomatizadaSelectedDatas = tarefaFiltered[0]

      this.editarTarefaForm.setValue({
        periodo: this.tarefaAutomatizadaSelectedDatas?.periodo,
        grupo: this.tarefaAutomatizadaSelectedDatas?.grupo,
        descricao: this.tarefaAutomatizadaSelectedDatas?.descricao,
        programa: this.tarefaAutomatizadaSelectedDatas?.programa,
        obrigacao: this.tarefaAutomatizadaSelectedDatas?.obrigacao,
        codempresa: this.tarefaAutomatizadaSelectedDatas?.empresa,
        estabelecimento: this.tarefaAutomatizadaSelectedDatas?.estabelecimento,
        status: this.tarefaAutomatizadaSelectedDatas?.status,
        uf: this.tarefaAutomatizadaSelectedDatas?.uf,

      })
    }
  }
}

obrigacaoAbreviada(obrigacao:string): string{
  let obrigacaoAbreviada = "";
  switch(obrigacao){
    case "teste":
    obrigacaoAbreviada ; "teste"
    break;

  }
  return obrigacaoAbreviada;
}



  ngOnInit(): void {
    for (const [values, keys] of Object.entries(Periodos)) {
      this.periodos.push({chave:keys, valor:values});
    }
    this.tarefaAutomatizadaAction = this.ref.data;
    this.getEstabelecimentosDatas()
    this.getObrigacoesFiscaisAllDatas()

   }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();

  }

}
