import { Comentario } from "./comentario";
export class PostoCombustivel {
  id: number;
  nome: string;
  nomePosto: string;
  tipoCombustivel: string;
  valorCombustivel: number;
  endereco: string;
  formaPagamento: string;
  imagemPath?: string;
  comentarios: Comentario[];
  dataCriacao: Date; // Corrigi o nome para ser 'dataCriacao' ao invés de 'data_criacao'

  constructor(
    id: number,
    nome: string,
    nomePosto: string,
    tipoCombustivel: string,
    valorCombustivel: number,
    endereco: string,
    formaPagamento: string,
    comentarios: Comentario[],
    imagemPath?: string
  ) {
    this.id = id;
    this.nome = nome;
    this.nomePosto = nomePosto;
    this.tipoCombustivel = tipoCombustivel;
    this.valorCombustivel = valorCombustivel;
    this.endereco = endereco;
    this.formaPagamento = formaPagamento;
    this.comentarios = comentarios;
    this.imagemPath = imagemPath;

    this.dataCriacao = new Date(); // Inicializa a data de criação com a data atual
  }
}
