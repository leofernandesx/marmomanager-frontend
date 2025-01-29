import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InstalacaoService } from '../../../core/services/instalacao.service';
import { Instalacao } from '../../../shared/models/instalacao.model';

@Component({
  selector: 'app-cadastrar-instalacoes',
  standalone: true,
  imports: [CommonModule, FormsModule], // Importando módulos necessários
  templateUrl: './cadastrar-instalacoes.component.html',
  styleUrls: ['./cadastrar-instalacoes.component.css']
})
export class CadastrarInstalacoesComponent {
  instalacao: Instalacao = {
    id: 0,
    pedido_id: 0,
    data_instalacao: '',
    status: '',
    criado_em: ''
  };

  constructor(private instalacaoService: InstalacaoService) {}

  salvarInstalacao(): void {
    this.instalacaoService.criarInstalacao(this.instalacao).subscribe(() => {
      alert('Instalação cadastrada com sucesso!');
      this.limparFormulario();
    });
  }

  limparFormulario(): void {
    this.instalacao = { id: 0, pedido_id: 0, data_instalacao: '', status: '', criado_em: '' };
  }
}
