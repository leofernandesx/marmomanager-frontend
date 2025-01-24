// src/app/modules/clientes/listar-orcamentoitens/listar-clientes.component.ts
import { Component, OnInit } from '@angular/core';
import { OrcamentoItensService } from '../../../core/services/orcamentoitens.service';
import { OrcamentoItens } from '../../../shared/models/orcamentoitens.model';

@Component({
  selector: 'app-listar-orcamentoitens',
  templateUrl: './listar-orcamentoitens.component.html',
  styleUrls: ['./listar-orcamentoitens.component.css']
})
export class ListarOrcamentoItensComponent implements OnInit {
  orcamentoitens: OrcamentoItens[] = [];

  constructor(private orcamentoitensService: OrcamentoItensService) {}

  ngOnInit(): void {
    this.orcamentoitensService.listarOrcamentoItenss().subscribe((orcamentoitens) => {
      this.orcamentoitens = orcamentoitens;
    });
  }
}
