import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../../../core/services/cliente.service';
import { Cliente } from '../../../shared/models/cliente.model';

@Component({
  selector: 'app-cadastrar-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule], // 🔹 Importando módulos necessários
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css']
})
export class CadastrarClienteComponent {
  cliente: Cliente = {
    id: 0,
    nome: '',
    cpf: '',
    telefone: '',
    endereco: '',
    email: ''
  };

  constructor(private clienteService: ClienteService) {}

  salvarCliente(): void {
    this.clienteService.criarCliente(this.cliente).subscribe(() => {
      alert('Cliente cadastrado com sucesso!');
      this.limparFormulario();
    });
  }

  limparFormulario(): void {
    this.cliente = { id: 0, nome: '', cpf: '', telefone: '', endereco: '', email: '' };
  }
}
