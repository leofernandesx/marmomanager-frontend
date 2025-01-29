import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InstalacaoService } from '../../../core/services/instalacao.service';
import { Instalacao } from '../../../shared/models/instalacao.model';

@Component({
  selector: 'app-listar-instalacoes',
  standalone: true, // Standalone
  imports: [CommonModule, HttpClientModule], // Importando os módulos necessários
  templateUrl: './listar-instalacoes.component.html',
  styleUrls: ['./listar-instalacoes.component.css']
})
export class ListarInstalacoesComponent implements OnInit {
  instalacoes: Instalacao[] = [];

  constructor(private instalacaoService: InstalacaoService) {}

  ngOnInit(): void {
    this.instalacaoService.listarInstalacao().subscribe((instalacoes) => {
      this.instalacoes = instalacoes;
    });
  }
}
