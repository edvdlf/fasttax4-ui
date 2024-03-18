import { RelatorioService } from 'src/app/services/relatorio/relatorio.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Subject } from 'rxjs';
import { ConstrutorRelatorioEvent } from 'src/app/models/enums/construtor-relatorio/construtorRelatorioEvent';
import { Periodos } from 'src/app/models/enums/periodos';
import { EventAction } from 'src/app/models/event/EventAction';
import { EstabelecimentoResponse } from 'src/app/models/interfaces/estabelecimentos/response/estabelecimentoResponse';
import { ConstrutorRelatorioResponse } from 'src/app/models/interfaces/relatorios/response/construtorRelatorioResponse';
import { EstabelecimentoService } from 'src/app/services/estabelecimento/estabelecimento.service';

@Component({
  selector: 'app-construtor-relatorio-forms',
  templateUrl: './construtor-relatorio-forms.component.html',
  styleUrls: ['./construtor-relatorio-forms.component.scss']
})
export class ConstrutorRelatorioFormsComponent implements OnInit, OnDestroy {


  private readonly destroy$: Subject<void> = new Subject();
  public estabelecimentoDatas: Array<EstabelecimentoResponse> = [];
  public construtorRelatorioDatas: Array<ConstrutorRelatorioResponse> = [];
  public construtorRelatorioSelectedDatas!: ConstrutorRelatorioResponse;
  public tarefaAutomatizadaAction!:{
    event: EventAction;
    tarefaAutomatizadaDatas: Array<any>
  }
  public adicionarConstrutorRelatorioAction = ConstrutorRelatorioEvent.ADICIONAR_CONSTRUTOR_RELATORIO_EVENT;
  public editarConstrutorRelatorioAction = ConstrutorRelatorioEvent.EDITAR_CONSTRUTOR_RELATORIO_EVENT;
  obrigacoesFiscaisAll: any[] = [];
  periodos: any[] = [{ chave: '', valor: '' }];
  selectedEstabelecimento!: EstabelecimentoResponse[];
  //selectedObrigacoes!: ObrigacoesFiscaisAll[];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private messageService: MessageService,
    private estabelecimentoService: EstabelecimentoService,
    private relatorioService:RelatorioService,
    //private obrigacoesService : ObrigacoesService,
    public ref: DynamicDialogConfig
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
  

handleSubmitAdicionarConstrutorRelatorio(){

}

handleSubmitEditarTarefa(){

}

  ngOnInit(): void {
    for (const [values, keys] of Object.entries(Periodos)) {
      this.periodos.push({chave:keys, valor:values});
    }

    this.tarefaAutomatizadaAction = this.ref.data;
    this.getEstabelecimentosDatas()
    //this.getObrigacoesFiscaisAllDatas()

   }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();

  }

}
