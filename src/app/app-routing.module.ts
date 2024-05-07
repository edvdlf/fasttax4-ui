import { RelatoriosLogsModule } from './modules/obrigacoes/relatorios-logs/relatorios-logs.module';
import { TarefasAutomatizadasComponent } from './modules/obrigacoes/tarefas-automatizadas/page/tarefas-automatizadas.component';

import { FuncionalidadesComponent } from './modules/obrigacoes/funcionalidades/page/funcionalidades.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './modules/login/login.component';
import { HomeComponent } from './modules/home/page/home/home.component';
import { AuthGuard } from './guards/auth-guard.service';
import { ParametrosComponent } from './modules/obrigacoes/parametros/page/parametros.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch:'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module')
      .then((m)=>m.HomeModule
      ),
      canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module')
      .then((m)=>m.DashboardModule
      ),
      canActivate: [AuthGuard]
  },

  {
    path: 'funcionalidades',
    loadChildren: () => import('./modules/obrigacoes/funcionalidades/funcionalidades.module')
      .then((m)=>m.FuncionalidadesModule
      ),
      canActivate: [AuthGuard]
  },
  {
    path: 'parametros',
    loadChildren: () => import('./modules/obrigacoes/parametros/parametros.module')
      .then((m)=>m.ParametrosModule
      ),
      canActivate: [AuthGuard]
  },
  {
    path: 'processos-customizados',
    loadChildren: () => import('./modules/obrigacoes/processos-customizados/processos-customizados.module')
      .then((m)=>m.ProcessosCustomizadosModule
      ),
      canActivate: [AuthGuard]
  },
  {
    path: 'construtor-relatorio',
    loadChildren: () => import('./modules/obrigacoes/construtor-relatorio/construtor-relatorios.module')
      .then((m)=>m.ConstrutorRelatorioModule
      ),
      canActivate: [AuthGuard]
  },
  {
    path: 'tarefas-automatizadas',
    loadChildren: () => import('./modules/obrigacoes/tarefas-automatizadas/tarefas-automatizadas.module')
      .then((m)=>m.TarefasAutomatizadasModule
      ),
      canActivate: [AuthGuard]
  },
  {
    path: 'relatorios-logs',
    loadChildren: () => import('./modules/obrigacoes/relatorios-logs/relatorios-logs.module')
      .then((m)=>m.RelatoriosLogsModule
      ),
      canActivate: [AuthGuard]
  },
  {
    path: 'fluxos',
    loadChildren: () => import('./modules/obrigacoes/fluxos/fluxos.module')
      .then((m)=>m.FluxosModule
      ),
      canActivate: [AuthGuard]
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./modules/usuarios/usuarios.module')
      .then((m)=>m.UsuariosModule
      ),
      canActivate: [AuthGuard]
  },
  {
    path: 'permissoes-acesso',
    loadChildren: () => import('./modules/permissoes/permissoes-acesso.module')
      .then((m)=>m.PermissoesAcessoModule
      ),
      canActivate: [AuthGuard]
  },
  {
    path: 'execucoes',
    loadChildren: () => import('./modules/obrigacoes/execucoes/execucoes.module')
      .then((m)=>m.ExecucoesModule
      ),
      canActivate: [AuthGuard]
  },
  {
    path: 'gestao-documentos',
    loadChildren: () => import('./modules/obrigacoes/gestao-documentos/gestao-documentos.module')
      .then((m)=>m.GestaoDocumentosModule
      ),
      canActivate: [AuthGuard]
  },
  {
    path: 'validadores-monitoramento',
    loadChildren: () => import('./modules/obrigacoes/validadores-monitoramento/validadores-monitoramento.module')
      .then((m)=>m.ValidadoresMonitoramentoModule
      ),
      canActivate: [AuthGuard]
  },
  {
    path: 'assistente-consulta-bd',
    loadChildren: () => import('./modules/obrigacoes/queries-db/queries-db.module')
      .then((m)=>m.QueriesBdModule
      ),
      canActivate: [AuthGuard]
  },
  {
    path: 'configuracoes-gerais',
    loadChildren: () => import('./modules/obrigacoes/configuracoes-gerais/configuracoes-gerais.module')
      .then((m)=>m.ConfiguracoesGeraisModule
      ),
      canActivate: [AuthGuard]
  },
  {
    path: 'acesso-obrigacoes',
    loadChildren: () => import('./modules/obrigacoes/acesso-obrigacoes/acesso-obrigacoes.module')
      .then((m)=>m.AcessoObrigacoesModule
      ),
      canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
