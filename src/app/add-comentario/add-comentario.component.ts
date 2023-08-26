import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from './../home.service';
import { Comentario } from '../comentario';
import { Component, OnInit, Inject } from '@angular/core';
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

  constructor(
    private formBuilder: FormBuilder,
    private comentarioService: HomeService,
    private route: ActivatedRoute,
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
        // Lógica de sucesso, se necessário
      },
      (error) => {
        // Lógica de erro, se necessário
      }
    );
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
