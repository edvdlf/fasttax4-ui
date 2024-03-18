import { ObrigacoesService } from './../../../../../services/obrigacoes/obrigacoes.service';
import { TarefasAutomatizadasService } from './../../../../../services/obrigacoes/tarefas-automatizadas/tarefas-automatizadas.service';
import { DeleteTarefaAutomatizadaAction } from './../../../../../models/interfaces/tarefasautomatizadas/event/deleteTarefaAutomatizadaAction';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarefas } from 'src/app/models/enums/tarefaautomatizada/tarefas';
import { PrimeIcons, MenuItem, MessageService } from 'primeng/api';
import { TarefaAutomatizadaResponse } from 'src/app/models/interfaces/tarefasautomatizadas/response/tarefaAutomatizadaResponse';
import { TarefaAutomatizadaEvent } from 'src/app/models/enums/tarefaautomatizada/tarefaAutomatizadaEvent';
import { EventAction } from 'src/app/models/event/EventAction';
import { Periodos } from 'src/app/models/enums/periodos';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-tarefas-automatizadas-table',
  templateUrl: './tarefas-automatizadas-table.component.html',
  styleUrls: ['./tarefas-automatizadas-table.component.scss']
})
export class TarefasAutomatizadasTableComponent {

  @Input() tarefasAutomatizadas: Array<TarefaAutomatizadaResponse> = [];
  @Output() tarefaAutomatizadaEvent = new EventEmitter<EventAction>();
  @Output() deleteTarefaAutomatizadaEvent = new EventEmitter<DeleteTarefaAutomatizadaAction>();

  public tarefasAutomatizadaSelected!:TarefaAutomatizadaResponse;

  public adicionarTarefaAutomatizadaEvent = TarefaAutomatizadaEvent.ADICIONAR_TAREFA_AUTOMATIZADA_EVENT;
  public editarTarefaAutomatizadaEvent = TarefaAutomatizadaEvent.EDITAR_TAREFA_AUTOMATIZADA_EVENT;

  tarefas: any[] = [{ chave: '', valor: '' }];
  public tarefasAutomatizadasDatas: Array<TarefaAutomatizadaResponse> = [];

  items: MenuItem[];
  periodos: any[] = [];
  grupoObrigacoes: any[] ;

  selectedPeriodo: any[] = [];
  selectedGrupoObrigacoes: any[]=[];

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private tarefasAutomatizadasService: TarefasAutomatizadasService,

    ) {
    this.items = [
      {
          label: 'Novo',
          icon: PrimeIcons.PLUS,
          command: () => {
              //this.adicionarConfigurações();
          }
      },
      { separator: true },
      {
          label: 'Exporta tabela para excel',
          icon: PrimeIcons.FILE_EXPORT,
          command: () => {
              //this.exportaTabelaExcel();
          }
      },
      {
        label: 'Exporta seleção para excel',
        icon: PrimeIcons.FILE_EXPORT,
        command: () => {
            //this.exportaSelecaoExcel();
        }
    },

      { separator: true },

  ];
    this.periodos = [
     { name: 'Ano Anterior', code: 'ANO_ANTERIOR' },
     { name: 'Ano Atual', code: 'ANO_ATUAL' },
     { name: 'Dois Meses Anterior', code: 'DOIS_MESES_ANTERIOR' },
     { name: 'Mês Anterior', code: 'MES_ANTERIOR' },
     { name: 'Mês Atual', code: 'MES_ATUAL' },
     { name: 'Semana Anterior', code: 'SEMANA_ANTERIOR' },
     { name: 'Semana Atual', code: 'SEMANA_ATUAL' },
     { name: 'Dia Anterior', code: 'DIA_ANTERIOR' },
     { name: 'Dia Atual', code: 'DIA_ATUAL' }
   ];

   this.grupoObrigacoes = [
    { name: 'Basicos',  code: 'BASICOS'    },
    { name: 'Estadual', code: 'ESTADUAL' },
    { name: 'Municipal', code: 'MUNICIPAL'},
    { name: 'Livros',  code: 'LIVROS'   },
    { name: 'Sped Fiscal', code: 'SPED FISCAL' },
    { name: 'Guias de pagamento', code: 'GUIAS DE PAGAMENTO'},
    { name: 'Conferência', code: 'CONFERENCIA'},
    { name: 'Utilitários', code: 'UTILITARIOS'}

];

  }

  public filtarTarefaForm = this.formBuilder.group({
    periodo:['' ],
    grupoobrigacao:[''],

  })



  ngOnInit(): void {
    for (const [values, keys] of Object.entries(Tarefas)) {
      this.tarefas.push({chave:keys, valor:values});
    }
    //this.getObrigacoesFiscais();

  }

  handleTarefaAutomatizadaEvent(action: string, id?: string): void {
    if (action && action !== '') {
      const tarefaEventData = id && id !== '' ? { action, id } : { action };
      //alert(tarefaEventData.action )
      //alert(tarefaEventData.id )
      this.tarefaAutomatizadaEvent.emit(tarefaEventData);
    }
  }

  handleDeleteTarefaAutomatizadaEvent(id: string, periodo: string): void {
    if (id && periodo !== '') {
       this.deleteTarefaAutomatizadaEvent.emit({id, periodo});
    }
  }

  handleSubmitFiltrarTarefa():void{
    console.log("O clique aconteceu")

    let periodo = this.filtarTarefaForm.value.periodo as string;
    let grupo = this.filtarTarefaForm.value.grupoobrigacao as string;
      this.getFiltrarAutomatizadas(periodo, grupo);
  }
  getFiltrarAutomatizadas(periodo:string, grupo:string): void {
    this.tarefasAutomatizadasService
      .getTarefasAutomatizadasPorPeriodoGrupo(periodo, grupo)
             .subscribe({
        next: (response) => {
          if (response.length > 0) {
            console.log(response)
            this.tarefasAutomatizadasDatas = response;
            console.log(this.tarefasAutomatizadasDatas)

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
