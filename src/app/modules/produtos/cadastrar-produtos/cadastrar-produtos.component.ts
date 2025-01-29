import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProdutoService } from '../../../core/services/produto.service';
import { Produto } from '../../../shared/models/produto.model';

@Component({
  selector: 'app-cadastrar-produtos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [ProdutoService],
  templateUrl: './cadastrar-produtos.component.html',
  styleUrls: ['./cadastrar-produtos.component.css']
})
export class CadastrarProdutosComponent {
  produto: Produto = {
    id: 0,
    nome: '',
    tipo: '',
    precom2: 0.0,
    estoque: 0,
    criado_em: ''
  };

  constructor(private produtoService: ProdutoService) {}

  salvarProduto(): void {
    this.produtoService.criarProduto(this.produto).subscribe(() => {
      alert('Produto cadastrado com sucesso!');
      this.limparFormulario();
    });
  }

  limparFormulario(): void {
    this.produto = { id: 0,
      nome: '',
      tipo: '',
      precom2: 0.0,
      estoque: 0,
      criado_em: '' };
  }
}
