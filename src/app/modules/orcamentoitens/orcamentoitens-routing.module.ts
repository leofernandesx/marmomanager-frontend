import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarOrcamentoItensComponent } from './listar-orcamentoitens/listar-orcamentoitens.component';
import { CadastrarOrcamentoitensComponent } from './cadastrar-orcamentoitens/cadastrar-orcamentoitens.component';
import { EditarOrcamentoitensComponent } from './editar-orcamentoitens/editar-orcamentoitens.component';

const routes: Routes = [
  { path: '', component: ListarOrcamentoItensComponent },
  { path: 'cadastrar', component: CadastrarOrcamentoitensComponent },
  { path: 'editar/:id', component: EditarOrcamentoitensComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrcamentoitensRoutingModule { }
