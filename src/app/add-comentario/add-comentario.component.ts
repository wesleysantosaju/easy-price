import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from './../home.service';
import { Comentario } from '../comentario';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { PostoCombustivel } from '../posto-combustivel';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-add-comentario',
  templateUrl: './add-comentario.component.html',
  styleUrls: ['./add-comentario.component.scss']
})
export class AddComentarioComponent {
  comentarioForm: FormGroup;
  postoId: number | null = null; // Propriedade para armazenar o postoId
  @ViewChild('snackbar', { static: true }) snackbar: any; // Referência para o elemento snackbar

  constructor(
    private formBuilder: FormBuilder,
    private comentarioService: HomeService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.comentarioForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.maxLength(25)]],
      comentario: ['', [Validators.required, Validators.maxLength(200)]],
      postoId: [''] // Controle para armazenar o ID do posto
    });
    console.log('postoId no modal:', this.data.postoId);
  }

  cadastrarComentario() {
    if (this.comentarioForm.invalid) {
      return;
    }

    const nomeValue = this.comentarioForm.get('nome')!.value;
    const comentarioValue = this.comentarioForm.get('comentario')!.value;

    const novoComentario = {
      id: null,
      nome: nomeValue,
      comentario: comentarioValue,
      postoId: this.comentarioForm.get('postoId')!.value // Obtenha o valor do postoId
    };

    this.comentarioService.cadastrarComentario(novoComentario).subscribe(
      (response) => {
        const snackBarRef = this.exibirSnackbar('Comentário realizado com sucesso');

        // Fechar o diálogo e recarregar a página após o fechamento da snackbar
        snackBarRef.afterDismissed().subscribe(() => {
          this.fecharFormulario();
        });
      },
      (error) => {
        // Exibir a snackbar e executar ações após o fechamento
        const snackBarRef = this.exibirSnackbar('Erro ao inserir comentário');

        // Fechar o diálogo e recarregar a página após o fechamento da snackbar
        snackBarRef.afterDismissed().subscribe(() => {
          this.fecharFormulario();
        });
      }
    );
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

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const postId = +params['postoId']; // Tenta converter para um número
      if (!isNaN(this.data.postoId)) {
        this.data.postoId = this.data.postoId; // Atribui o valor somente se for um número válido
        this.comentarioForm.get('postoId')!.setValue(this.data.postoId);
      } else {
        console.error('Valor de postoId inválido:', params['postoId']);
      }
    });

  }


}
