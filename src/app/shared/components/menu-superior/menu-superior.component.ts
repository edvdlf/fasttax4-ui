import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu/menu.service';

@Component({
  selector: 'app-menu-superior',
  //standalone: true,
  //imports: [],
  templateUrl: './menu-superior.component.html',
  styleUrl: './menu-superior.component.scss'
})
export class MenuSuperiorComponent {

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();


  constructor(
    private menuService: MenuService,
    private router: Router
    )  { }
  isCollapsed = true;
  ngOnInit() {
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
}
