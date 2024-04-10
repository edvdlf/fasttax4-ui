import { Component } from '@angular/core';

@Component({
  selector: 'app-assistente-consulta-bd',
  templateUrl: './assistente-consulta-bd.component.html',
  styleUrls: ['./assistente-consulta-bd.component.scss']
})
export class AssistenteConsultaBdComponent {

  sideBarOpen = true;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
