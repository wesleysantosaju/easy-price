import { Comentario } from "./comentario";

export interface PostoCombustivel {

  id: number;
  nome: string;
  nomePosto: string;
  tipoCombustivel: string;
  valorCombustivel: number;
  endereco: string;
  formaPagamento: string;
  imagemPath?: string;

  comentarios: Comentario[]; // Adicione a propriedade comentarios
}
