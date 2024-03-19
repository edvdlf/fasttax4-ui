import { RegrasConstrutorRelatorioResponse } from 'src/app/models/interfaces/relatorios/response/regrasConstrutorRelatorioResponse';
import { RelatorioService } from 'src/app/services/relatorio/relatorio.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Subject, takeUntil } from 'rxjs';
import { ConstrutorRelatorioEvent } from 'src/app/models/enums/construtor-relatorio/construtorRelatorioEvent';
import { Periodos } from 'src/app/models/enums/periodos';
import { EventAction } from 'src/app/models/event/EventAction';
import { EstabelecimentoResponse } from 'src/app/models/interfaces/estabelecimentos/response/estabelecimentoResponse';
import { ConstrutorRelatorioResponse } from 'src/app/models/interfaces/relatorios/response/construtorRelatorioResponse';
import { EstabelecimentoService } from 'src/app/services/estabelecimento/estabelecimento.service';
import { ConstrutorRelatorioRequest } from 'src/app/models/interfaces/relatorios/request/construtorRelatorioRequest';

@Component({
  selector: 'app-construtor-relatorio-forms',
  templateUrl: './construtor-relatorio-forms.component.html',
  styleUrls: ['./construtor-relatorio-forms.component.scss']
})
export class ConstrutorRelatorioFormsComponent implements OnInit, OnDestroy {


  private readonly destroy$: Subject<void> = new Subject();
  public estabelecimentos: Array<EstabelecimentoResponse> = [];
  public regras: Array<RegrasConstrutorRelatorioResponse>=[];

  
  public construtorRelatorioAction!:{
    event: EventAction;
    construtorRelatorioDatas: Array<ConstrutorRelatorioResponse>
  }
  public adicionarConstrutorRelatorioAction = ConstrutorRelatorioEvent.ADICIONAR_CONSTRUTOR_RELATORIO_EVENT;
  public editarConstrutorRelatorioAction = ConstrutorRelatorioEvent.EDITAR_CONSTRUTOR_RELATORIO_EVENT;

  periodos: any[] = [{ chave: '', valor: '' }];
  selectedEstabelecimento!: EstabelecimentoResponse[];
  selectedRegras!: RegrasConstrutorRelatorioResponse[];

  constructor(
    public ref: DynamicDialogConfig,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private estabelecimentoService: EstabelecimentoService,
    private relatorioService:RelatorioService,

    ){}

    public adicionarConstrutorRelatorioForm = this.formBuilder.group({
      periodo:[''],
      lista:['']

    })

    public editarConstrutorRelatorioForm = this.formBuilder.group({
      periodo:['', Validators.required],

    })

getEstabelecimentosDatas(): void {
  this.estabelecimentoService
    .getAllEstabelecimentos()
           .subscribe({
      next: (response) => {
        if (response.length > 0) {
           this.estabelecimentos = response;
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

getRegrasRelatorioDatas(): void {
  this.relatorioService
    .getAllRegrasRelatorio()
           .subscribe({
      next: (response) => {
        if (response.length > 0) {
          console.log(response)
          this.regras = response;
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

handleSubmitAdicionarConstrutorRelatorio():void{

  if (this.adicionarConstrutorRelatorioForm?.value && this.adicionarConstrutorRelatorioForm?.valid) {
    let qtdEstabelecimentos = 0;
    var qtdSelectedRegras = 0;
    let _periodo = "";
    let _regra = "";
    let _comando = "";
    let _descricao = "";
    let _empresa = "";
    let _estabelecimento = "";
    let _uf = "";
    let _grupo = "";
    if(this.selectedEstabelecimento){
      qtdEstabelecimentos = this.selectedEstabelecimento.length;
      qtdSelectedRegras = this.selectedRegras.length;

    }
      _periodo = this.adicionarConstrutorRelatorioForm.value.periodo as string;

    if(qtdEstabelecimentos > 0){
      for (var i = 0; i < this.selectedEstabelecimento.length; i++) {
        _empresa = this.selectedEstabelecimento[i].empresa;
        _estabelecimento = this.selectedEstabelecimento[i].nome;
        _uf = this.selectedEstabelecimento[i].uf;
       for(var index = 0; index < this.selectedRegras.length; index++){
          _regra = this.selectedRegras[index].nome;
          _comando = this.selectedRegras[index].comando;

          const requestAdicionarConstrutor: ConstrutorRelatorioRequest = {
            periodo: _periodo,
            empresa: _empresa,
            estabelecimento: _estabelecimento,
            resumo: "Periodo: " + _periodo + " Empresa: " + _empresa + " Estabelecimento: " + _estabelecimento,
            comando: _comando,
            nome: "Teste",
            regra:_regra,
            data: "2024-03-18T00:00:00",

          }
            this.SubmitConstrutorRelatorio(requestAdicionarConstrutor)
            //console.log(requestAdicionarConstrutor)
        }
      };
    }
    else{
      //alert("Selecione pelo menos um estabelecimento!")
      this.messageService.add({ severity: 'error', summary: 'Atenção!', detail: 'Selecione pelo menos um estabelecimento!' });
    }
  }
}

SubmitConstrutorRelatorio(construtorRelatorioRequest:ConstrutorRelatorioRequest):void{
  this.relatorioService
      .adicionarContrutorRelatorio(construtorRelatorioRequest)
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
  this.adicionarConstrutorRelatorioForm.reset();
}

  ngOnInit(): void {
    for (const [values, keys] of Object.entries(Periodos)) {
      this.periodos.push({chave:keys, valor:values});
    }
    //this.tarefaAutomatizadaAction = this.ref.data;
    this.getEstabelecimentosDatas()
    this.getRegrasRelatorioDatas();

   }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();

  }

}
