import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { InfoComponent } from '../info/info.component';

@Component({
  selector: 'app-calc-mcombustivel',
  templateUrl: './calc-mcombustivel.component.html',
  styleUrls: ['./calc-mcombustivel.component.scss']
})
export class CalcMcombustivelComponent implements OnInit {
  form!: FormGroup;
  resultadoCalculo: string | null = null;

  constructor(private formBuilder: FormBuilder,
    public dialog: MatDialog,
    public dialogExit: MatDialogRef<CalcMcombustivelComponent>){}


  ngOnInit() {
    this.form = this.formBuilder.group({
      valorAlcool: '',
      valorGasolina: ''
    });
  }

  calcularCusto() {
    const valorAlcool = this.form.value.valorAlcool;
    const valorGasolina = this.form.value.valorGasolina;

    if (valorAlcool && valorGasolina) {
      const result = valorAlcool / valorGasolina;

      if (result <= 0.7) {
        this.resultadoCalculo = "Resultado: " + result.toFixed(2) + ", recomendado o abastecimento com etanol!";
      } else {
        this.resultadoCalculo = "Resultado: " +  result.toFixed(2) + ", recomendado o abastecimento com gasolina!";
      }
    }
  }

  openDialog(){
    this.dialog.open(InfoComponent);
  }

  closeModal(){
    this.dialogExit.close();
  }

}
