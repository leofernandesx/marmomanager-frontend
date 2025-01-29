import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PagamentoService } from '../../../core/services/pagamento.service';
import { Pagamento } from '../../../shared/models/pagamento.model';

@Component({
  selector: 'app-listar-pagamentos',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // Adicionando os módulos necessários
  templateUrl: './listar-pagamentos.component.html',
  styleUrls: ['./listar-pagamentos.component.css'], // Corrigido o nome para style**s**Url
})
export class ListarPagamentosComponent implements OnInit {
  pagamentos: Pagamento[] = [];

  constructor(private pagamentoService: PagamentoService) {}

  ngOnInit(): void {
    this.pagamentoService.listarPagamentos().subscribe((pagamentos) => {
      this.pagamentos = pagamentos;
    });
  }
}
