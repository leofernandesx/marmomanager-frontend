
import { Component, OnInit } from '@angular/core';
import { PagamentoService } from '../../../core/services/pagamento.service';
import { Pagamento } from '../../../shared/models/pagamento.model';

@Component({
  selector: 'app-listar-pagamentos',
  imports: [],
  templateUrl: './listar-pagamentos.component.html',
  styleUrl: './listar-pagamentos.component.css'
})
export class ListarPagamentosComponent {
  pagamentos: Pagamento[] = [];

  constructor(private pagamentoService: PagamentoService) {}

  ngOnInit(): void {
    this.pagamentoService.listarPagamentos().subscribe((pagamentos) => {
      this.pagamentos = pagamentos;
    });
  }
}
