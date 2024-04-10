import { Component } from '@angular/core';

@Component({
  selector: 'app-configuracoes-gerais',
  templateUrl: './configuracoes-gerais.component.html',
  styleUrls: ['./configuracoes-gerais.component.scss']
})
export class ConfiguracoesGeraisComponent {

  sideBarOpen = true;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
