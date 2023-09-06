import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostoCombustivel } from './posto-combustivel';
import { Observable } from 'rxjs';
import { Comentario } from './comentario';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private readonly apiUrl = 'https://grand-desire-production.up.railway.app/api';

  constructor(private http: HttpClient) { }

  cadastrarPosto(formData: FormData) {
    return this.http.post(`${this.apiUrl}/cadastrar`, formData);
  }

  getPostosCombustivel(): Observable<PostoCombustivel[]> {
    return this.http.get<PostoCombustivel[]>(`${this.apiUrl}/listar-postos`);
  }

  filtrarPorEndereco(endereco: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/postos-por-endereco/${endereco}`);
  }

  // Função para obter os comentários de um posto de combustível pelo ID
  getComentariosPorPosto(postoId: number): Observable<Comentario[]> {
    const url = `${this.apiUrl}/postos/${postoId}/comentarios`;
    return this.http.get<Comentario[]>(url);
  }

  // Função para adicionar um comentário a um posto de combustível pelo ID

  cadastrarComentario(comentario: any): Observable<any> {
    const url = `${this.apiUrl}/comentarios`;
    return this.http.post(url, comentario);
  }
}
