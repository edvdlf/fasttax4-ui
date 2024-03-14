import { Component, OnInit } from '@angular/core';
import { customersData } from '../dataTemp';

import { Customers } from '../interfaceTemp.model';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Periodos } from 'src/app/models/enums/periodos';




@Component({
  selector: 'app-construtor-relatorios-table',
  templateUrl: './construtor-relatorios-table.component.html',
  styleUrls: ['./construtor-relatorios-table.component.scss']
})
export class ConstrutorRelatoriosTableComponent implements OnInit{

  customersData: Customers[] = [];

  periodos: any[] = [{ chave: '', valor: '' }];

  constructor(public formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    for (const [values, keys] of Object.entries(Periodos)) {
      this.periodos.push({chave:keys, valor:values});
    }
  }
  private _fetchData() {
    this.customersData = customersData;
  }


}
