import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostoCombustivel } from './posto-combustivel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private readonly apiUrl = 'http://localhost:8081/api';

  constructor(private http: HttpClient) { }

  cadastrarPosto(formData: FormData) {
    return this.http.post(`${this.apiUrl}/cadastrar`, formData);
  }

  getPostosCombustivel(): Observable<PostoCombustivel[]> {
    return this.http.get<PostoCombustivel[]>(`${this.apiUrl}/listar-postos`);
  }
}
