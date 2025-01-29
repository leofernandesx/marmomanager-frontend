import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PagamentoService } from '../../../core/services/pagamento.service';
import { Pagamento } from '../../../shared/models/pagamento.model';

@Component({
  selector: 'app-cadastrar-pagamentos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [PagamentoService],
  templateUrl: './cadastrar-pagamentos.component.html',
  styleUrls: ['./cadastrar-pagamentos.component.css']
})
export class CadastrarPagamentosComponent {
  pagamento: Pagamento = {
    id: 0,
    pedido_id: 0,
    valor: 0.0,
    forma_pagamento: '',
    data_pagamento: '',
    criado_em: '',
    status: '',
    valor_pago: 0.0,
  };

  constructor(private pagamentoService: PagamentoService) {}

  salvarPagamento(): void {
    this.pagamentoService.criarPagamento(this.pagamento).subscribe(() => {
      alert('Pagamento cadastrado com sucesso!');
      this.limparFormulario();
    });
  }

  limparFormulario(): void {
    this.pagamento = { id: 0,
      pedido_id: 0,
      valor: 0.0,
      forma_pagamento: '',
      data_pagamento: '',
      criado_em: '',
      status: '',
      valor_pago: 0.0
      };
  }
}
