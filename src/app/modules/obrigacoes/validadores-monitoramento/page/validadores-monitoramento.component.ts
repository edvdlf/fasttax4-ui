import { Component } from '@angular/core';

@Component({
  selector: 'app-validadores-monitoramento',
  templateUrl: './validadores-monitoramento.component.html',
  styleUrls: ['./validadores-monitoramento.component.scss']
})
export class ValidadoresMonitoramentoComponent {

  sideBarOpen = true;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
   }
}
