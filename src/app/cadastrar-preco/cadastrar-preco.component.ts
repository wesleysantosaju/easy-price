import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar-preco',
  templateUrl: './cadastrar-preco.component.html',
  styleUrls: ['./cadastrar-preco.component.scss']
})
export class CadastrarPrecoComponent {

  selectedFileName: string = '';

  handleImageInput(event: any) {
    const file = event.target.files[0];

    if (file) {
      // Aqui você pode implementar a lógica para processar o arquivo de imagem, como fazer upload para um servidor.
      this.selectedFileName = file.name;
      console.log('Imagem selecionada:', file);
    }
  }

}
