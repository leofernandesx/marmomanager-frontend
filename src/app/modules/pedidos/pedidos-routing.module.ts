import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPedidosComponent } from './listar-pedidos/listar-pedidos.component';
import { CadastrarPedidosComponent } from './cadastrar-pedidos/cadastrar-pedidos.component';
import { EditarPedidosComponent } from './editar-pedidos/editar-pedidos.component';
import { ExcluirPedidosComponent } from './excluir-pedidos/excluir-pedidos.component';

const routes: Routes = [
  { path: '', component: ListarPedidosComponent },
  { path: 'cadastrar', component: CadastrarPedidosComponent },
  { path: 'editar/:id', component: EditarPedidosComponent },
  { path: 'excluir/:id', component: ExcluirPedidosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosRoutingModule { }
