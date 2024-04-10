import { Component } from '@angular/core';

@Component({
  selector: 'app-gestao-documentos',
  templateUrl: './gestao-documentos.component.html',
  styleUrls: ['./gestao-documentos.component.scss']
})
export class GestaoDocumentosComponent {
  sideBarOpen = true;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
   }


}
