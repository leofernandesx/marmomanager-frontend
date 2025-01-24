// src/app/modules/clientes/listar-orcamentos/listar-orcamentos.component.ts
import { Component, OnInit } from '@angular/core';
import { OrcamentoService } from '../../../core/services/orcamento.service';
import { Orcamento } from '../../../shared/models/orcamento.model';

@Component({
  selector: 'app-listar-orcamentos',
  templateUrl: './listar-orcamentos.component.html',
  styleUrls: ['./listar-orcamentos.component.css']
})
export class ListarOrcamentosComponent implements OnInit {
  orcamentos: Orcamento[] = [];

  constructor(private orcamentoService: OrcamentoService) {}

  ngOnInit(): void {
    this.orcamentoService.listarOrcamentos().subscribe((orcamentos) => {
      this.orcamentos = orcamentos;
    });
  }
}
