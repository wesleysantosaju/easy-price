export class Comentario {
  id: number | null = null;
  nome: string = '';
  comentario: string = '';
  postoId: number | null = null;

  constructor(nome: string, comentario: string, postoId: number) {
    this.nome = nome;
    this.comentario = comentario;
    this.postoId = postoId;
  }
}
