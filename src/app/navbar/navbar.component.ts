import { Component } from '@angular/core';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { CadastrarPrecoComponent } from '../cadastrar-preco/cadastrar-preco.component';
import { CalcMcombustivelComponent } from '../calc-mcombustivel/calc-mcombustivel.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(public dialog: MatDialog){

  }

  openDialog() {
    this.dialog.open(CadastrarPrecoComponent);
  }
  openDialogCalc() {
    this.dialog.open(CalcMcombustivelComponent);
  }
}

