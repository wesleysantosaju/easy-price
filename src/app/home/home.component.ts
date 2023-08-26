import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { PostoCombustivel } from '../posto-combustivel';
import { Comentario } from '../comentario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  postosCombustivel: PostoCombustivel[] = [];
  postoId: number = 1; // Substitua pelo ID do posto que você quer mostrar comentários

  enderecoFiltro: string = ''; // Variável para armazenar o endereço digitado
  exibirMensagem: boolean = false; // Variável para controlar a exibição da mensagem
  posto: any; // Objeto para armazenar os detalhes do posto
  comentarios: any[] = []; // Array para armazenar os comentários

  constructor(private homeService: HomeService){
    this.carregarComentarios();

  }

  ngOnInit(): void {
    this.carregarPostosCombustivel();
  }

  carregarPostosCombustivel() {
    this.homeService.getPostosCombustivel().subscribe(
      (postos: PostoCombustivel[]) => {
        this.postosCombustivel = postos;
        this.exibirMensagem = false;

        // Carregar comentários para cada posto
        for (const posto of this.postosCombustivel) {
          this.carregarComentariosPorPosto(posto.id);
        }
      },
      error => {
        console.error('Erro ao carregar postos de combustível', error);
      }
    );
  }

  carregarComentariosPorPosto(postoId: number) {
    this.homeService.getComentariosPorPosto(postoId).subscribe(
      (comentarios: Comentario[]) => {
        // Encontrar o posto correspondente
        const posto = this.postosCombustivel.find(p => p.id === postoId);
        if (posto) {
          posto.comentarios = comentarios;
        }
      },
      error => {
        console.error('Erro ao carregar comentários do posto', error);
      }
    );
  }

  filtrarPorEndereco(): void {
    if (this.enderecoFiltro) {
      const enderecoLowerCase = this.enderecoFiltro.toLowerCase();
      // Filtrar os postos de combustível onde o endereço contém o texto digitado
      this.postosCombustivel = this.postosCombustivel.filter(posto =>
        posto.endereco.toLowerCase().includes(enderecoLowerCase)
      );

      this.exibirMensagem = this.postosCombustivel.length === 0; // Atualiza a variável de exibição
    } else {
      this.carregarPostosCombustivel(); // Se o filtro estiver vazio, carregue todos os postos
    }
  }

  getGoogleMapsLink(endereco: string): string {
    const enderecoFormatado = encodeURIComponent(endereco);
    return `https://www.google.com/maps/search/?api=1&query=${enderecoFormatado}`;
  }

  // Função para adicionar um comentário a um posto de combustível
  adicionarComentario(posto: PostoCombustivel, novoComentario: string): void {
    const comentario: Comentario = { id: 0, nome: 'Nome do Usuário', comentario: novoComentario };
    this.homeService.adicionarComentario(posto.id, comentario).subscribe(
      (novoComentario: Comentario) => {
        // Adicionar o novo comentário à lista de comentários do posto
        posto.comentarios.push(novoComentario);
      },
      error => {
        console.error('Erro ao adicionar comentário', error);
      }
    );
  }

  carregarComentarios(): void {
    this.homeService.getComentariosPorPosto(this.postoId)
      .subscribe(comentarios => {
        this.comentarios = comentarios;
      });
  }
}
