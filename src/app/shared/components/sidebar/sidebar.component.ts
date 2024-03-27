import { Component, ViewChild } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Sidebar } from 'primeng/sidebar';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  items: MenuItem[] =[];
  files!: TreeNode[];

  constructor() {}

  ngOnInit() {

      this.items = [

        {
          label: 'Dashboard',
          icon: 'pi pi-fw pi-chart-pie',
          routerLink:"/dashboard",

        },
        {
            label: 'Rotinas diarias',
            icon: 'pi pi-fw pi-check-circle',
            items: [
               {
                    label: 'Tarefas Automatizadas',
                    icon: 'pi  pi-cog',
                    routerLink:"/tarefas-automatizadas"
                },
                {
                  label: 'Manutenção de Fluxos',
                  icon: 'pi pi-sliders-h',
                  routerLink:"/fluxos"
              }

            ]
        },

        {
          label: 'Rotinas Avançadas',
          icon: 'pi pi-fw pi-check-square',
          items: [

              {
                  label: 'Processos Customizados',
                  icon: 'pi pi-fw pi-lock',
                  routerLink:"/processos-customizados"
              }
          ]
      },
        {
          label: 'Parametrização',
          icon: 'pi pi-fw pi-wrench',
          items: [
            {
              label: 'Parametros',
              icon: 'pi pi-fw pi-book',
              routerLink:"/parametros"
            }
          ]
      },
      {
        label: 'Relatórios',
        icon: 'pi pi-fw pi-print',
        items: [

            {
                label: 'Relatórios & Logs',
                icon: 'pi pi-fw pi-table',
                routerLink:"/relatorios-logs"
            },
            {
              label: 'Construtor de Relatórios',
              icon: 'pi pi-fw pi-table',
              routerLink:"/construtor-relatorio"
          }
        ]
    },
        {
            label: 'Usuários',
            icon: 'pi pi-fw pi-user',
            items: [
                {
                    label: 'Adicionar Usuário',
                    icon: 'pi pi-fw pi-user-plus'
                },

            ]
        },

    ];
  }

  expandAll() {
      this.files.forEach((node) => {
          this.expandRecursive(node, true);
      });
  }

  collapseAll() {
      this.files.forEach((node) => {
          this.expandRecursive(node, false);
      });
  }

  private expandRecursive(node: TreeNode, isExpand: boolean) {
      node.expanded = isExpand;
      if (node.children) {
          node.children.forEach((childNode) => {
              this.expandRecursive(childNode, isExpand);
          });
      }
  }


}
