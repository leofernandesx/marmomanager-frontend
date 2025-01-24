import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteService } from '../../../core/services/cliente.service';
import { Cliente } from '../../../shared/models/cliente.model';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-listar-clientes',
  standalone: true, // Tornando standalone
  imports: [CommonModule, HttpClientModule], // Importando os módulos necessários
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.clienteService.listarClientes().subscribe((clientes) => {
      this.clientes = clientes;
    });
  }
}

