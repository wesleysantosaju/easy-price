import { MatDialogRef } from '@angular/material/dialog';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HomeService } from '../home.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastrar-preco',
  templateUrl: './cadastrar-preco.component.html',
  styleUrls: ['./cadastrar-preco.component.scss']
})
export class CadastrarPrecoComponent {

  @ViewChild('snackbar', { static: true }) snackbar: any; // Referência para o elemento snackbar

  form: FormGroup;
  selectedImage: File | null = null;

  selectedFileName: string = '';
  exibirFormulario: boolean = true;

  constructor(private formBuilder: FormBuilder, private home: HomeService, private snackBar: MatSnackBar, public dialogExit: MatDialogRef<CadastrarPrecoComponent>) {
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
      // Se uma imagem foi selecionada, anexá-la ao formData
      formData.append('image', this.selectedImage);
    }

    // Chamar o serviço para cadastrar o posto com os dados do formData
    this.home.cadastrarPosto(formData).subscribe({
      next: response => {
        console.log('Resposta do servidor:', response);

        // Exibir a snackbar e executar ações após o fechamento
        const snackBarRef = this.exibirSnackbar('Cadastro realizado com sucesso');

        // Fechar o diálogo e recarregar a página após o fechamento da snackbar
        snackBarRef.afterDismissed().subscribe(() => {
          this.fecharFormulario();
        });
      },
      error: error => {
        console.error('Erro:', error);

        // Exibir a snackbar e executar ações após o fechamento
        const snackBarRef = this.exibirSnackbar('Cadastro realizado com sucesso');

        // Fechar o diálogo e recarregar a página após o fechamento da snackbar
        snackBarRef.afterDismissed().subscribe(() => {
          this.fecharFormulario();
        });
      }
    });
  }

  exibirSnackbar(mensagem: string) {
    return this.snackBar.open(mensagem, 'Fechar', {
      duration: 0, // Manter a snackbar aberta
    });
  }
fecharFormulario() {// Esconder o snackbar ou diálogo, se estiver aberto
  this.snackBar.dismiss(); // Se estiver usando o MatSnackBar

  // Recarregar a página após alguns milissegundos
  setTimeout(() => {
    window.location.reload();
  }, 1000); // Aguarde 1 segundo antes de recarregar
}

  limparFormulario() {
    this.form.reset(); // Isso irá redefinir todos os campos do formulário para os valores padrão
    this.selectedImage = null; // Limpar a imagem selecionada, se houver
  }

  handleImageInput(event: any) {
    const file = event.target.files[0];

    if (file) {
      // Aqui a lógica para processar o arquivo de imagem, como fazer upload para um servidor.
      this.selectedFileName = file.name;
      console.log('Imagem selecionada:', file);
    }
  }
  closeModal(){
    this.dialogExit.close();
  }

}
