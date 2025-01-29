import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PedidoService } from '../../../core/services/pedido.service';
import { Pedido } from '../../../shared/models/pedido.model';

@Component({
  selector: 'app-listar-pedidos',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // Adicionando os módulos necessários
  templateUrl: './listar-pedidos.component.html',
  styleUrls: ['./listar-pedidos.component.css'], // Corrigido para "style**s**Url"
})
export class ListarPedidosComponent implements OnInit {
  pedidos: Pedido[] = [];

  constructor(private pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.pedidoService.listarPedidos().subscribe((pedidos) => {
      this.pedidos = pedidos;
    });
  }
}
