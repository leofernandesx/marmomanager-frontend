import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPagamentosComponent } from './listar-pagamentos/listar-pagamentos.component';
import { CadastrarPagamentosComponent } from './cadastrar-pagamentos/cadastrar-pagamentos.component';
import { EditarPagamentosComponent } from './editar-pagamentos/editar-pagamentos.component';

const routes: Routes = [
  { path: '', component: ListarPagamentosComponent },
  { path: 'cadastrar', component: CadastrarPagamentosComponent },
  { path: 'editar/:id', component: EditarPagamentosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagamentosRoutingModule { }
