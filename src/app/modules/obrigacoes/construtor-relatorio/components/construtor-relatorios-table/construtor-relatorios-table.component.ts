import { UsuariosOnlineResponse } from './../../../../../models/interfaces/relatorios/usuariosOnlineResponse';
import { Component, Input, OnInit } from '@angular/core';

import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Periodos } from 'src/app/models/enums/periodos';
import { LogProcessamentoResponse } from 'src/app/models/interfaces/relatorios/logProcessamentoResponse';

@Component({
  selector: 'app-construtor-relatorios-table',
  templateUrl: './construtor-relatorios-table.component.html',
  styleUrls: ['./construtor-relatorios-table.component.scss']
})
export class ConstrutorRelatoriosTableComponent implements OnInit{

  @Input() logProcessamentos: Array<LogProcessamentoResponse> = [];
  @Input() usuariosOnline:Array<UsuariosOnlineResponse>=[];

  periodos: any[] = [{ chave: '', valor: '' }];

  constructor(public formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    for (const [values, keys] of Object.entries(Periodos)) {
      this.periodos.push({chave:keys, valor:values});
    }
  }


  getStatus(status: string) {
    switch (status) {
        case 'Sucesso':
            return 'success';
        case 'OnLine':
            return 'success';
        case 'Falha':
            return 'danger';
        default:
          return 'info'
    }
  }
}
