import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { OrcamentoService } from '../../../core/services/orcamento.service';
import { Orcamento } from '../../../shared/models/orcamento.model';

@Component({
  selector: 'app-listar-orcamentos',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // Importando os módulos necessários
  templateUrl: './listar-orcamentos.component.html',
  styleUrls: ['./listar-orcamentos.component.css'],
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
