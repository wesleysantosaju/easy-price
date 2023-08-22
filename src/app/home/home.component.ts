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

  constructor(private homeService: HomeService){}

  ngOnInit(): void {
    this.carregarPostosCombustivel();
  }

  carregarPostosCombustivel() {
    this.homeService.getPostosCombustivel().subscribe(
      (postos: PostoCombustivel[]) => {
        this.postosCombustivel = postos;
      },
      error => {
        console.error('Erro ao carregar postos de combustível', error);
      }
    );
  }

}
