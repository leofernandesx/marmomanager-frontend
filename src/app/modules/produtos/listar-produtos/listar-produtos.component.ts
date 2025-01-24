
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../../core/services/produto.service';
import { Produto } from '../../../shared/models/produto.model';

@Component({
  selector: 'app-listar-produtos',
  imports: [],
  templateUrl: './listar-produtos.component.html',
  styleUrl: './listar-produtos.component.css'
})
export class ListarProdutosComponent {
  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.produtoService.listarProdutos().subscribe((produtos) => {
      this.produtos = produtos;
    });
  }
}