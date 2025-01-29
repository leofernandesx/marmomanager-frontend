import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { OrcamentoItensService } from '../../../core/services/orcamentoitens.service';
import { OrcamentoItens } from '../../../shared/models/orcamentoitens.model';

@Component({
  selector: 'app-listar-orcamentoitens',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // Módulos necessários
  templateUrl: './listar-orcamentoitens.component.html',
  styleUrls: ['./listar-orcamentoitens.component.css'],
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
