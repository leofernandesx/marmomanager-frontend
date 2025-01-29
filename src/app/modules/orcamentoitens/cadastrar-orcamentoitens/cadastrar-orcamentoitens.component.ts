import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrcamentoItensService } from '../../../core/services/orcamentoitens.service';
import { OrcamentoItens } from '../../../shared/models/orcamentoitens.model';

@Component({
  selector: 'app-cadastrar-orcamentoitens',
  standalone: true,
  imports: [CommonModule, FormsModule], // Importando módulos necessários
  templateUrl: './cadastrar-orcamentoitens.component.html',
  styleUrls: ['./cadastrar-orcamentoitens.component.css']
})
export class CadastrarOrcamentoItensComponent {
  orcamentoItem: OrcamentoItens = {
    id: 0,
    orcamento_id: 0,
    produto_id: 0,
    quantidade: 1,
    preco: 0.0,
    subtotal: 0.0,
    preco_unitario: 0.0
  };

  constructor(private orcamentoItensService: OrcamentoItensService) {}

  salvarOrcamentoItem(): void {
    this.orcamentoItensService.criarOrcamentoItens(this.orcamentoItem).subscribe(() => {
      alert('Item de orçamento cadastrado com sucesso!');
      this.limparFormulario();
    });
  }

  limparFormulario(): void {
    this.orcamentoItem = { id: 0, orcamento_id: 0, produto_id: 0, quantidade: 1, preco: 0.0, subtotal: 0.0 , preco_unitario: 0.0 };
  }
}
