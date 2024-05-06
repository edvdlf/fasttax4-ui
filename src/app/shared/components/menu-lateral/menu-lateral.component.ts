import { Component, ViewChild } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Sidebar } from 'primeng/sidebar';

import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu-lateral',
  //standalone: true,
  //imports: [],
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.scss'
})
export class MenuLateralComponent {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  items: MenuItem[] =[];
  files!: TreeNode[];

  sidenavWidth = 4;
  isExpanded: boolean = true;
	constructor(private router: Router) {}

	ngOnInit() {}

	increase() {
		this.sidenavWidth = 15;
		console.log('increase sidenav width');
	}
	decrease() {
		this.sidenavWidth = 4;
		console.log('decrease sidenav width');
	}


}
