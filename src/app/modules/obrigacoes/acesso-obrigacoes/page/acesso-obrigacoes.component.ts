import { Component } from '@angular/core';

@Component({
  selector: 'app-acesso-obrigacoes',
  templateUrl: './acesso-obrigacoes.component.html',
  styleUrls: ['./acesso-obrigacoes.component.scss']
})
export class AcessoObrigacoesComponent {
  sideBarOpen = true;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
