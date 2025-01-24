import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarInstalacoesComponent } from './listar-instalacoes/listar-instalacoes.component';
import { CadastrarInstalacoesComponent } from './cadastrar-instalacoes/cadastrar-instalacoes.component';
import { EditarInstalacoesComponent } from './editar-instalacoes/editar-instalacoes.component';

const routes: Routes = [
  { path: '', component: ListarInstalacoesComponent },
  { path: 'cadastrar', component: CadastrarInstalacoesComponent },
  { path: 'editar/:id', component: EditarInstalacoesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstalacoesRoutingModule { }
