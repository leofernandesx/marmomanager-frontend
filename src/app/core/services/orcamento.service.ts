// src/app/core/services/orcamento.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Orcamento } from '../../shared/models/orcamento.model';

@Injectable({
  providedIn: 'root'
})
export class OrcamentoService {
  private apiUrl = 'http://localhost:8080/api/orcamentos';

  constructor(private http: HttpClient) {}

  listarOrcamentos(): Observable<Orcamento[]> {
    return this.http.get<Orcamento[]>(this.apiUrl);
  }

  buscarOrcamentoPorId(id: number): Observable<Orcamento> {
    return this.http.get<Orcamento>(`${this.apiUrl}/${id}`);
  }

  criarOrcamento(orcamento: Orcamento): Observable<Orcamento> {
    return this.http.post<Orcamento>(this.apiUrl, orcamento);
  }

  atualizarOrcamento(id: number, orcamento: Orcamento): Observable<Orcamento> {
    return this.http.put<Orcamento>(`${this.apiUrl}/${id}`, orcamento);
  }

  deletarOrcamento(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}