import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';
import { CadastrarProdutosComponent } from './cadastrar-produtos/cadastrar-produtos.component';
import { EditarProdutosComponent } from './editar-produtos/editar-produtos.component';

const routes: Routes = [
  { path: '', component: ListarProdutosComponent },
  { path: 'cadastrar', component: CadastrarProdutosComponent },
  { path: 'editar/:id', component: EditarProdutosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
