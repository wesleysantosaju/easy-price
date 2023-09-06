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
  // Adicione o campo dataCriacao
  data_criacao: Date;

  // Mova o campo dataCriacao para o final do construtor
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

    // Agora você pode definir dataCriacao aqui como opcional se desejar
    this.data_criacao = new Date();
  }
}
