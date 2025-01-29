import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoService } from '../../../core/services/produto.service';
import { Produto } from '../../../shared/models/produto.model';

@Component({
  selector: 'app-listar-produtos',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // Adicionando módulos necessários
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css'], // Corrigido para "style**s**Url"
})
export class ListarProdutosComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.produtoService.listarProdutos().subscribe((produtos) => {
      this.produtos = produtos;
    });
  }
}
