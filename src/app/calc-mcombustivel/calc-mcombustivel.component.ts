import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc-mcombustivel',
  templateUrl: './calc-mcombustivel.component.html',
  styleUrls: ['./calc-mcombustivel.component.scss']
})
export class CalcMcombustivelComponent implements OnInit {
  form!: FormGroup;
  resultadoCalculo: string | null = null;

  constructor(private formBuilder: FormBuilder){}


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
        this.resultadoCalculo = "Recomendado o abastecimento com álcool!";
      } else {
        this.resultadoCalculo = "Recomendado o abastecimento com gasolina!";
      }
    }
  }

}
