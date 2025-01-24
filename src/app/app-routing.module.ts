// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'clientes', loadChildren: () => import('./modules/clientes/clientes.module').then(m => m.ClientesModule) },
  { path: 'produtos', loadChildren: () => import('./modules/produtos/produtos.module').then(m => m.ProdutosModule) },
  { path: 'orcamentos', loadChildren: () => import('./modules/orcamentos/orcamentos.module').then(m => m.OrcamentosModule) },
  { path: 'orcamentoitens', loadChildren: () => import('./modules/orcamentoitens/orcamentoitens.module').then(m => m.OrcamentoitensModule) },
  { path: 'pagamentos', loadChildren: () => import('./modules/pagamentos/pagamentos.module').then(m => m.PagamentosModule) },
  { path: 'instalacoes', loadChildren: () => import('./modules/instalacoes/instalacoes.module').then(m => m.InstalacoesModule) },
  { path: 'pedidos', loadChildren: () => import('./modules/pedidos/pedidos.module').then(m => m.PedidosModule) },
  
  { path: '', redirectTo: 'clientes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
