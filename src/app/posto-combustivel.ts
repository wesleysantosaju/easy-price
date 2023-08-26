import { Comentario } from "./comentario";

export class PostoCombustivel {
  id: number;
  nome: string;
  nomePosto: string;
  tipoCombustivel: string;
  valorCombustivel: number;
  endereco: string;
  formaPagamento: string;
  imagemPath?: string; // Mantenha a interrogação aqui para indicar que é opcional

  comentarios: Comentario[]; // Adicione a propriedade comentarios

  constructor(
    id: number,
    nome: string,
    nomePosto: string,
    tipoCombustivel: string,
    valorCombustivel: number,
    endereco: string,
    formaPagamento: string,
    comentarios: Comentario[], // Certifique-se de passar um array vazio ou pré-populado, se necessário
    imagemPath?: string // Adicione a declaração aqui
  ) {
    this.id = id;
    this.nome = nome;
    this.nomePosto = nomePosto;
    this.tipoCombustivel = tipoCombustivel;
    this.valorCombustivel = valorCombustivel;
    this.endereco = endereco;
    this.formaPagamento = formaPagamento;
    this.comentarios = comentarios;
    this.imagemPath = imagemPath; // Agora você pode atribuir a propriedade diretamente
  }
}
