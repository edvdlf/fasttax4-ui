
import { Component,EventEmitter,  Input, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FuncionalidadeEvent } from 'src/app/models/enums/funcionalidade/funcionalidadeEvent';
import { ObrigacoesGrupo } from 'src/app/models/enums/obrigacoesGrupo/obrigacoesGrupo';
import { Periodos } from 'src/app/models/enums/periodos';
import { FuncionalidadeResponse } from 'src/app/models/interfaces/funcionalidades/response/funcionalidadeResponse';
import { EventAction } from 'src/app/models/event/EventAction';
import { PrimeIcons, MenuItem } from 'primeng/api';
//import * as FileSaver from 'file-saver';


interface Column {
  field: string;
  header: string;
  customExportHeader?: string;
}

interface ExportColumn {
  title: string;
  dataKey: string;
}

@Component({
  selector: 'app-funcionalidades-table',
  templateUrl: './funcionalidades-table.component.html',
  styleUrls: ['./funcionalidades-table.component.scss']
})
export class FuncionalidadesTableComponent implements OnInit {

  @Input() funcionalidades: Array<FuncionalidadeResponse> = [];
  @Output() productEvent = new EventEmitter<EventAction>();
  public funcionalidadeSelected!:FuncionalidadeResponse;
  public filtrarFuncionalidade = FuncionalidadeEvent.FILTRAR_FUNCIONALIDADE;
  public exportarFuncionalidade = FuncionalidadeEvent.EXPORTAR_FUNCIONALIDADE;
  public exportarEstabelecimento = FuncionalidadeEvent.EXPORTAR_ESTABELECIMENTO;
  items: MenuItem[];

  cols!: Column[];
  loading: boolean = false;
  exportColumns!: ExportColumn[];

  periodos: any[] = [{ chave: '', valor: '' }];
  obrigacoesGrupo: any[] = [{ chave: '', valor: '' }];

  constructor(private messageService: MessageService) {
    this.items = [
        {
            label: 'Novo',
            icon: PrimeIcons.PLUS,
            command: () => {
                this.adicionarConfigurações();
            }
        },
        { separator: true },
        {
            label: 'Exporta tabela para excel',
            icon: PrimeIcons.FILE_EXPORT,
            command: () => {
                this.exportaTabelaExcel();
            }
        },
        {
          label: 'Exporta seleção para excel',
          icon: PrimeIcons.FILE_EXPORT,
          command: () => {
              this.exportaSelecaoExcel();
          }
      },

        { separator: true },

    ];
  }

  adicionarConfigurações() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Adicionando configurações' });
  }
  exportaTabelaExcel() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Exportando tabela completa para Excel' });
  }
  exportaSelecaoExcel() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Exportando itens selecionados para Excel' });
  }

  ngOnInit(): void {
    for (const [values, keys] of Object.entries(Periodos)) {
      this.periodos.push({chave:keys, valor:values});
    }
    for (const [values, keys] of Object.entries(ObrigacoesGrupo)) {
      this.obrigacoesGrupo.push({chave:keys, valor:values});
    }




    this.cols = [
      { field: 'code', header: 'Code', customExportHeader: 'Product Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' }
    ];

  this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));

  }

  exportExcel() {
    //import('xlsx').then((xlsx) => {
        //const worksheet = xlsx.utils.json_to_sheet(this.funcionalidades);
        //const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
        //const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        //this.saveAsExcelFile(excelBuffer, 'products');
    //});
}

//saveAsExcelFile(buffer: any, fileName: string): void {
    //let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    //let EXCEL_EXTENSION = '.xlsx';
    //const data: Blob = new Blob([buffer], {
        //type: EXCEL_TYPE
    //});
    //FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
//}


  handleProductEvent(action: string, id?: string): void {
    if (action && action !== '') {
      const productEventData = id && id !== '' ? { action, id } : { action };
      this.productEvent.emit(productEventData);
    }
  }

  }


