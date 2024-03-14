import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

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

