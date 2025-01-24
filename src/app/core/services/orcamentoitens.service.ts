// src/app/core/services/ocamentoitens.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrcamentoItens } from '../../shared/models/orcamentoitens.model';

@Injectable({
  providedIn: 'root'
})
export class OrcamentoItensService {
  private apiUrl = 'http://localhost:8080/api/orcamento_itens';

  constructor(private http: HttpClient) {}

  listarOrcamentoItenss(): Observable<OrcamentoItens[]> {
    return this.http.get<OrcamentoItens[]>(this.apiUrl);
  }

  buscarOrcamentoItensPorId(id: number): Observable<OrcamentoItens> {
    return this.http.get<OrcamentoItens>(`${this.apiUrl}/${id}`);
  }

  criarOrcamentoItens(orcamento_itens: OrcamentoItens): Observable<OrcamentoItens> {
    return this.http.post<OrcamentoItens>(this.apiUrl, orcamento_itens);
  }

  atualizarOrcamentoItens(id: number, orcamento_itens: OrcamentoItens): Observable<OrcamentoItens> {
    return this.http.put<OrcamentoItens>(`${this.apiUrl}/${id}`, orcamento_itens);
  }

  deletarOrcamentoItens(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}