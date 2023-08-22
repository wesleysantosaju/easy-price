import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-cadastrar-preco',
  templateUrl: './cadastrar-preco.component.html',
  styleUrls: ['./cadastrar-preco.component.scss']
})
export class CadastrarPrecoComponent {

  form: FormGroup;
  selectedImage: File | null = null;

  selectedFileName: string = '';

  constructor(private formBuilder: FormBuilder, private home: HomeService) {
    this.form = this.formBuilder.group({
      nome: '',
      nomePosto: '',
      tipoCombustivel: '',
      valorCombustivel: 0,
      endereco: '',
      formaPagamento: ''
    });
    this.selectedImage = null; // Inicialize a propriedade aqui
  }

  onImageSelected(event: any) {
    this.selectedImage = event.target.files[0];
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('nome', this.form.value.nome);
    formData.append('nomePosto', this.form.value.nomePosto);
    formData.append('tipoCombustivel', this.form.value.tipoCombustivel);
    formData.append('valorCombustivel', this.form.value.valorCombustivel);
    formData.append('endereco', this.form.value.endereco);
    formData.append('formaPagamento', this.form.value.formaPagamento);

    if (this.selectedImage !== null) {
      formData.append('image', this.selectedImage);
    }

    this.home.cadastrarPosto(formData).subscribe(
      response => {
        console.log('Posto cadastrado com sucesso', response);
        // Limpar o formulário ou fazer outras ações após o cadastro
      },
      error => {
        console.error('Erro ao cadastrar posto', error);
      }
    );
  }

  handleImageInput(event: any) {
    const file = event.target.files[0];

    if (file) {
      // Aqui você pode implementar a lógica para processar o arquivo de imagem, como fazer upload para um servidor.
      this.selectedFileName = file.name;
      console.log('Imagem selecionada:', file);
    }
  }

}
