import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrcamentoService } from '../../../core/services/orcamento.service';
import { Orcamento } from '../../../shared/models/orcamento.model';

@Component({
  selector: 'app-cadastrar-orcamentos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [OrcamentoService],
  templateUrl: './cadastrar-orcamentos.component.html',
  styleUrls: ['./cadastrar-orcamentos.component.css']
})
export class CadastrarOrcamentosComponent {
  orcamento: Orcamento = {
    id: 0,
    cliente_id: 0,
    total: 0.0,
    criado_em: ''
  };

  constructor(private orcamentoService: OrcamentoService) {}

  salvarOrcamento(): void {
    this.orcamentoService.criarOrcamento(this.orcamento).subscribe(() => {
      alert('Orçamento cadastrado com sucesso!');
      this.limparFormulario();
    });
  }

  limparFormulario(): void {
    this.orcamento = { id: 0, cliente_id: 0, total: 0.0, criado_em: '' };
  }
}
