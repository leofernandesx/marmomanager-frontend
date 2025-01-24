// src/app/modules/instalacoes/listar-instalacoes/listar-instalacoes.component.ts
import { Component, OnInit } from '@angular/core';
import { InstalacaoService } from '../../../core/services/instalacao.service';
import { Instalacao } from '../../../shared/models/instalacao.model';

@Component({
  selector: 'app-listar-instalacoes',
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
