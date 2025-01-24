
import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../../core/services/pedido.service';
import { Pedido } from '../../../shared/models/pedido.model';

@Component({
  selector: 'app-listar-pedidos',
  imports: [],
  templateUrl: './listar-pedidos.component.html',
  styleUrl: './listar-pedidos.component.css'
})
export class ListarPedidosComponent {
  pedidos: Pedido[] = [];

  constructor(private pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.pedidoService.listarPedidos().subscribe((pedidos) => {
      this.pedidos = pedidos;
    });
  }
}