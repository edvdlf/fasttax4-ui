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
              },
              {
                label: 'Tarefas Executadas',
                icon: 'pi pi-fw pi-sync',
                routerLink:"/execucoes"
            },

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
          label: 'Configurações',
          icon: 'pi pi-fw pi-wrench',
          items: [
            {
              label: 'Configurações Gerais',
              icon: 'pi pi-fw pi-table',
              routerLink:"/configuracoes-gerais"
            },
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
            label: 'Segurança',
            icon: 'pi pi-fw pi-lock',
            items: [
                {
                    label: 'Usuários',
                    icon: 'pi pi-fw pi-users',
                    routerLink:"/usuarios"
                },
                {
                  label: 'Permissões Acesso',
                  icon: 'pi pi-fw pi-lock-open',
                  routerLink:"/permissoes-acesso"
              },

            ],

        },

        {
          label: 'A fazer',
          icon: 'pi pi-fw pi-stop-circle',
          items: [

              {
                label: 'Gestao de Documentos',
                icon: 'pi pi-fw pi-stop-circle',
                routerLink:"/gestao-documentos"
              },
              {
                label: 'Validadores',
                icon: 'pi pi-fw pi-stop-circle',
                routerLink:"/validadores-monitoramento"
              },
              {
                label: 'Assistente de consultas',
                icon: 'pi pi-fw pi-stop-circle',
                routerLink:"/assistente-consulta-bd"
              },

              {
                label: 'Acesso Obrigações',
                icon: 'pi pi-fw pi-stop-circle',
                routerLink:"/acesso-obrigacoes"
              },

          ],

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
