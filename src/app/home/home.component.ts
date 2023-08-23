import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { PostoCombustivel } from '../posto-combustivel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  postosCombustivel: PostoCombustivel[] = [];
  enderecoFiltro: string = ''; // Variável para armazenar o endereço digitado
  exibirMensagem: boolean = false; // Variável para controlar a exibição da mensagem

  constructor(private homeService: HomeService){}

  ngOnInit(): void {
    this.carregarPostosCombustivel();
  }

  carregarPostosCombustivel() {
    this.homeService.getPostosCombustivel().subscribe(
      (postos: PostoCombustivel[]) => {
        this.postosCombustivel = postos;
        this.exibirMensagem = false; // Certifique-se de redefinir a variável
      },
      error => {
        console.error('Erro ao carregar postos de combustível', error);
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

}
