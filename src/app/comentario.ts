export class Comentario {
  id: number;
  nome: string;
  comentario: string;
  // Pode adicionar mais propriedades se necessário

  constructor(id: number, nome: string, comentario: string) {
    this.id = id;
    this.nome = nome;
    this.comentario = comentario;
  }
}
