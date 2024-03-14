import { Component } from '@angular/core';

@Component({
  selector: 'app-construtor-relatorios',
  templateUrl: './construtor-relatorios.component.html',
  styleUrls: ['./construtor-relatorios.component.scss']
})


export class ConstrutorRelatoriosComponent {
  sideBarOpen = true;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }




}
