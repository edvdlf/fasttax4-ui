import { ProcessosCustomizadosService } from 'src/app/services/obrigacoes/processos-customizados/processos-customizados.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { EstabelecimentoService } from 'src/app/services/estabelecimento/estabelecimento.service';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { EstabelecimentoResponse } from 'src/app/models/interfaces/estabelecimentos/response/estabelecimentoResponse';
import { Subject } from 'rxjs';
import { EventAction } from 'src/app/models/event/EventAction';
import { ProcessoCustomizadoResponse } from 'src/app/models/interfaces/processoscustomizados/response/processoCustomizadoResponse';
import { Periodos } from 'src/app/models/enums/periodos';

@Component({
  selector: 'app-processos-customizados-form',
  templateUrl: './processos-customizados-form.component.html',
  styleUrls: ['./processos-customizados-form.component.scss']
})
export class ProcessosCustomizadosFormComponent implements OnInit, OnDestroy {

  private readonly destroy$: Subject<void> = new Subject();
  public estabelecimentoDatas: Array<EstabelecimentoResponse> = [];
  periodos: any[] = [{ chave: '', valor: '' }];
  public processoCustomizadoAction!:{
    event: EventAction;
    processoCustomizadoDatas: Array<ProcessoCustomizadoResponse>
  }
  selectedEstabelecimento!: EstabelecimentoResponse[];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private messageService: MessageService,
    private estabelecimentoService: EstabelecimentoService,
    private processosCustomizadosService:ProcessosCustomizadosService,
    public ref: DynamicDialogConfig

    ){}


  public adicionarProcessoCustomizadoForm = this.formBuilder.group({
    periodo:[''],
    identificador:['']

  })


  handleSubmitAdicionarProcessoCustomizado(): void{
    if (this.adicionarProcessoCustomizadoForm?.value && this.adicionarProcessoCustomizadoForm?.valid) {
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
      }
        _periodo = this.adicionarProcessoCustomizadoForm.value.periodo as string;

      if(cont > 0){
        for (var i = 0; i < this.selectedEstabelecimento.length; i++) {
          _empresa = this.selectedEstabelecimento[i].empresa;
          _estabelecimento = this.selectedEstabelecimento[i].nome;
          _uf = this.selectedEstabelecimento[i].uf;

          //const requestAdicionarTarefa: TarefaAutomatizadaRequest = {
            //periodo: _periodo,
            //programa: _programa,
            //descricao: _descricao,
            //status:"desabilitado",
            //obrigacao: _obrigacao,
           // estabelecimento: _estabelecimento,
            //empresa: _empresa,
            //uf:_uf,
            //grupo: _grupo,

          //}


        };
      }
      else{
        //alert("Selecione pelo menos um estabelecimento!")
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


