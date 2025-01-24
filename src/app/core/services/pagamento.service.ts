// src/app/core/services/cliente.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pagamento } from '../../shared/models/pagamento.model';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {
  private apiUrl = 'http://localhost:8080/api/pagamentos';

  constructor(private http: HttpClient) {}

  listarPagamentos(): Observable<Pagamento[]> {
    return this.http.get<Pagamento[]>(this.apiUrl);
  }

  buscarPagamentoPorId(id: number): Observable<Pagamento> {
    return this.http.get<Pagamento>(`${this.apiUrl}/${id}`);
  }

  criarPagamento(pagamento: Pagamento): Observable<Pagamento> {
    return this.http.post<Pagamento>(this.apiUrl, pagamento);
  }

  atualizarPagamento(id: number, pagamento: Pagamento): Observable<Pagamento> {
    return this.http.put<Pagamento>(`${this.apiUrl}/${id}`, pagamento);
  }

  deletarPagamento(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}