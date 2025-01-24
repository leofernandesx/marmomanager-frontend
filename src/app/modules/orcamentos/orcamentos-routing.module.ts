import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarOrcamentosComponent } from './listar-orcamentos/listar-orcamentos.component';
import { CadastrarOrcamentosComponent } from './cadastrar-orcamentos/cadastrar-orcamentos.component';
import { EditarOrcamentosComponent } from './editar-orcamentos/editar-orcamentos.component';

const routes: Routes = [
  { path: '', component: ListarOrcamentosComponent },
  { path: 'cadastrar', component: CadastrarOrcamentosComponent },
  { path: 'editar/:id', component: EditarOrcamentosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrcamentosRoutingModule { }
