import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PedidoService } from '../../../core/services/pedido.service';
import { Pedido } from '../../../shared/models/pedido.model';

@Component({
  selector: 'app-cadastrar-pedidos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [PedidoService],
  templateUrl: './cadastrar-pedidos.component.html',
  styleUrls: ['./cadastrar-pedidos.component.css']
})
export class CadastrarPedidosComponent {
  pedido: Pedido = {
    id: 0,
    orcamento_id: 0,
    status: '',
    data_prevista_entrega: '',
    criado_em: '',
    valor_total: 0.0,
    cliente_id: 0
  };

  constructor(private pedidoService: PedidoService) {}

  salvarPedido(): void {
    this.pedidoService.criarPedido(this.pedido).subscribe(() => {
      alert('Pedido cadastrado com sucesso!');
      this.limparFormulario();
    });
  }

  limparFormulario(): void {
    this.pedido = { id: 0,
      orcamento_id: 0,
      status: '',
      data_prevista_entrega: '',
      criado_em: '',
      valor_total: 0.0,
      cliente_id: 0};
  }
}
