import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
import { CadastrarClienteComponent } from './cadastrar-cliente/cadastrar-cliente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';

const routes: Routes = [
  { path: '', component: ListarClientesComponent },
  { path: 'cadastrar', component: CadastrarClienteComponent },
  { path: 'editar/:id', component: EditarClienteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule {}