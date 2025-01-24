// src/app/core/services/instalacao.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Instalacao } from '../../shared/models/instalacao.model';

@Injectable({
  providedIn: 'root'
})
export class InstalacaoService {
  private apiUrl = 'http://localhost:8080/api/instalacao';

  constructor(private http: HttpClient) {}

  listarInstalacao(): Observable<Instalacao[]> {
    return this.http.get<Instalacao[]>(this.apiUrl);
  }

  buscarInstalacaoPorId(id: number): Observable<Instalacao> {
    return this.http.get<Instalacao>(`${this.apiUrl}/${id}`);
  }

  criarInstalacao(instalacao: Instalacao): Observable<Instalacao> {
    return this.http.post<Instalacao>(this.apiUrl, instalacao);
  }

  atualizarInstalacao(id: number, instalacao: Instalacao): Observable<Instalacao> {
    return this.http.put<Instalacao>(`${this.apiUrl}/${id}`, instalacao);
  }

  deletarInstalacao(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}